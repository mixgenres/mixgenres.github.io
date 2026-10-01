import { instrumentHasKey, ENGINE_INSTRUMENT_KEYS } from '../../engine/lookup/instrumentKeys.ts';
import { POLYPHONY_FALLBACK_RULES } from '../../data/sound/polyphony';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import WebRenderer from '@elemaudio/web-renderer';
import { el } from '@elemaudio/core';
import type { LuthierPhysicalParameters } from '../../data/instruments/schema/luthier';
import type { MasterChain } from '../studio/mixer.ts';
import { createMasterChain, getRoleGainLinear } from '../studio/mixer.ts';
import { CulturalAcousticEvent } from './acousticEvent.ts';
import {
  defaultTrackParams,
  styleFlavorForGenre,
  modelForInstrument,
  makeupGainFor,
  renderTrack,
  renderMaster,
  midiToFreq,
  type TrackParams,
  type VoiceState,
} from './elementaryEngine.ts';

import { resolveDialect, performanceModeForContext } from '../band/genreDialect.ts';
import { resolveRenderGesture } from './renderGesture.ts';
import { contractForGenre } from '../../engine/style/contracts';
import { resolveStyle } from '../../engine/style';
import type { AudioSignal } from './instrumentTypes.ts';
import { spotlightGain } from '../band/spotlight.ts';

interface RendererNodeEntry {
  props: Record<string, unknown>;
}

interface RendererDelegate {
  clear(): void;
  nodeMap: Map<number, RendererNodeEntry>;
  setProperty(hash: number, property: string, value: number): void;
  commitUpdates(): void;
  getPackedInstructions(): unknown[];
}

interface RendererInternals {
  _delegate?: RendererDelegate;
  _sendMessage(instructions: unknown): Promise<unknown>;
}

export function getPolyphonyForTrack(instrumentId: string, role?: string): number {
  const idLower = (instrumentId || '').toLowerCase();
  const def = INSTRUMENTS_BY_ID[instrumentId] || INSTRUMENTS_BY_ID[idLower];
  if (typeof def?.polyphony === 'number') return def.polyphony;
  const r = (role || '').toLowerCase();
  const inst = idLower;
  if (instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.kit)) return 12;
  if (instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.percussion)) return 10;
  if (instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.bass)) return 4;
  if (instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.winds) || instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.brass) || instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.bowed)) return 4;
  if (instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.keys) || instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.guitar) || instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.strings) || instrumentHasKey(inst, ENGINE_INSTRUMENT_KEYS.electronic)) return 8;
  for (const rule of POLYPHONY_FALLBACK_RULES) {
    if (rule.roles?.includes(r) || rule.instrumentPattern?.test(inst)) return rule.voices;
  }
  return 8;
}

/**
 * Elementary Audio live engine.
 * Natural acoustic/electronic physical model summation with conservative mastering.
 */
export class BandWorkletNode {
  /**
   * @static
   */
  public static readonly MAX_POLYPHONY = 32;

  private ctx!: AudioContext;
  private core!: WebRenderer;
  private audioNode!: AudioNode;
  private voiceSeq = 0;
  private masterChain?: MasterChain;

  // Min-heap ordered by audio time/sequence. Transport feeds a 400 ms lookahead;
  // sorting that queue on every note was an avoidable main-thread hotspot in dense arrangements.
  private scheduledEvents: Array<{ atTime: number; seq: number; fn: () => void }> = [];
  private schedulerTimer: number | null = null;
  private schedulerSeq = 0;

  public activeWorldId = '';
  public activeStyleId = '';

  private masterVolume = 1.0;
  private trackParamsMap = new Map<string, TrackParams>();
  private trackVoicesMap = new Map<string, VoiceState[]>();

  // Tier 4: Live mix state and per-track signal caching
  private trackMutedMap = new Map<string, boolean>();
  private trackSoloMap = new Map<string, boolean>();
  private trackSpotlightMap = new Map<string, string>();
  private trackVolumes = new Map<string, number>();
  private trackPans = new Map<string, number>();
  private dirtyTracks = new Set<string>();

  // Real-time parameter updates without dynamic graph reconstruction
  private paramHashes = new Map<string, number>();
  private pendingParamUpdates: Record<string, number> = {};
  private paramFlushScheduled = false;
  private isSyncing = false;
  private pendingSync = false;

  private getHashForKey(key: string): number {
    const existing = this.paramHashes.get(key);
    if (existing !== undefined) return existing;
    const hash = el.const({ key, value: 0 }).hash;
    if (hash === undefined) throw new Error(`Unable to allocate parameter hash for ${key}`);
    this.paramHashes.set(key, hash);
    return hash;
  }

  public updateMap(updates: Record<string, number>) {
    this.applyParamUpdates(updates);
  }

  private queueParamUpdate(key: string, value: number) {
    this.pendingParamUpdates[key] = value;
    if (!this.paramFlushScheduled) {
      this.paramFlushScheduled = true;
      if (typeof queueMicrotask !== 'undefined') {
        queueMicrotask(() => {
          this.paramFlushScheduled = false;
          this.flushParamUpdates();
        });
      } else {
        setTimeout(() => {
          this.paramFlushScheduled = false;
          this.flushParamUpdates();
        }, 0);
      }
    }
  }

  public flushParamUpdates() {
    const keys = Object.keys(this.pendingParamUpdates);
    if (keys.length === 0) return;
    const updates = this.pendingParamUpdates;
    this.pendingParamUpdates = {};
    this.applyParamUpdates(updates);
  }

  private applyParamUpdates(updates: Record<string, number>) {
    const renderer = (this.core as unknown as { _renderer?: RendererInternals })._renderer;
    if (!renderer || !renderer._delegate) return;
    const delegate = renderer._delegate;

    delegate.clear();
    let hasUpdates = false;

    for (const [key, value] of Object.entries(updates)) {
      const hash = this.getHashForKey(key);
      if (delegate.nodeMap.has(hash)) {
        const entry = delegate.nodeMap.get(hash);
        if (!entry) continue;
        delegate.setProperty(hash, 'value', value);
        entry.props['value'] = value;
        hasUpdates = true;
      }
    }

    if (hasUpdates) {
      delegate.commitUpdates();
      const instructions = delegate.getPackedInstructions();
      if (instructions && instructions.length > 0) {
        if (typeof renderer._sendMessage === 'function') {
          void renderer._sendMessage(instructions);
        }
      }
    }
  }

  setWorldAndStyle(worldId: string, styleId?: string) {
    this.activeWorldId = worldId;
    this.activeStyleId = styleId || '';
    this.trackParamsMap.clear();
    this.dirtyTracks.add('*');
    if (worldId && this.masterChain) {
      try {
        const style = styleId ? resolveStyle({ genreId: worldId, styleId }) : undefined;
        const contract = contractForGenre(worldId, style);
        if (contract?.timbreSpace?.mixCharacter) {
          this.masterChain.setMixCharacter(contract.timbreSpace.mixCharacter, worldId);
        }
      } catch {
        // world not yet defined or invalid id
      }
    }
  }

  async initialize(context: AudioContext, volume = 1): Promise<AudioNode> {
    this.ctx = context;
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume().catch(() => { });
    }

    // The live renderer must run inside an AudioWorklet. The previous implementation
    // drove OfflineRenderer through ScriptProcessorNode on the main thread, which made
    // 512/1024-sample callback stalls audible as chopped attacks, especially in dense
    // tango/flamenco arrangements. WebRenderer uses Elementary's native WASM processor
    // with the browser's fixed 128-sample render quantum.
    const webCore = new WebRenderer();
    this.audioNode = await webCore.initialize(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    }, 8);
    this.core = webCore;

    if (this.masterChain) {
      this.masterChain.dispose();
    }
    let initialMixChar: import('../../engine/style/contracts').MixCharacter | undefined;
    if (this.activeWorldId) {
      try {
        const style = this.activeStyleId ? resolveStyle({ genreId: this.activeWorldId, styleId: this.activeStyleId }) : undefined;
        initialMixChar = contractForGenre(this.activeWorldId, style)?.timbreSpace?.mixCharacter;
      } catch {}
    }
    this.masterChain = createMasterChain(context, initialMixChar, this.activeWorldId);
    // Gate stays OPEN until the transport explicitly closes it (stop/pause), so a
    // missed 'enable' call can never leave the engine permanently muted.
    this.masterChain.setVolume(volume);
    this.audioNode.connect(this.masterChain.input);

    this.masterVolume = volume;
    await this.syncGraph();
    return this.masterChain.output;
  }

  async setVolume(value: number) {
    this.masterVolume = Math.max(0, Math.min(2, value));
    this.masterChain?.setVolume(value);
    await this.syncGraph();
  }

  setPlaybackEnabled(enabled: boolean) {
    this.masterChain?.setPlaybackEnabled(enabled);
  }

  // Live mix methods (Tier 3 -> Tier 4 live parameter update, no graph reconstruction)
  setTrackVolume(trackId: string, volume: number, atTime?: number) {
    this.schedule(() => {
      this.trackVolumes.set(trackId, volume);
      const params = this.trackParamsMap.get(trackId);
      if (params) {
        params.volume = volume;
      }
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }

  setTrackMute(trackId: string, muted: boolean, atTime?: number) {
    this.schedule(() => {
      this.trackMutedMap.set(trackId, muted);
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }

  setTrackSolo(trackId: string, solo: boolean, atTime?: number) {
    this.schedule(() => {
      this.trackSoloMap.set(trackId, solo);
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }

  private updateTrackMuteSoloLevels() {
    const hasAnySolo = Array.from(this.trackSoloMap.values()).some(Boolean);
    const hasSpotlight = Array.from(this.trackSpotlightMap.values()).some(mode => mode === 'on');
    for (const [trackId, params] of this.trackParamsMap.entries()) {
      const isMuted = !!this.trackMutedMap.get(trackId);
      const isSoloed = !!this.trackSoloMap.get(trackId);
      const isSilenced = isMuted || (hasAnySolo && !isSoloed);
      const gain = spotlightGain(this.trackSpotlightMap.get(trackId), hasSpotlight);
      const effectiveVol = isSilenced ? 0 : (params.volume ?? 1) * gain;
      this.queueParamUpdate(`track_${trackId}_vol`, effectiveVol);
    }
    this.flushParamUpdates();
  }

  setTrackPan(trackId: string, pan: number, atTime?: number) {
    this.schedule(() => {
      this.trackPans.set(trackId, pan);
      const params = this.trackParamsMap.get(trackId);
      if (params) params.pan = pan;
      const clampedPan = Math.max(0, Math.min(1, pan));
      const leftGain = Math.cos(clampedPan * Math.PI * 0.5);
      const rightGain = Math.sin(clampedPan * Math.PI * 0.5);
      this.queueParamUpdate(`track_${trackId}_panL`, leftGain);
      this.queueParamUpdate(`track_${trackId}_panR`, rightGain);
      this.flushParamUpdates();
    }, atTime);
  }

  setTrackSpotlight(trackId: string, mode: string, atTime?: number) {
    this.schedule(() => {
      this.trackSpotlightMap.set(trackId, mode);
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }

  private markDirty(trackId: string) {
    this.dirtyTracks.add(trackId);
  }

  /**
   * Pre-allocates all tracks in the track params and voices maps with right-sized polyphony.
   * Calls syncGraph ONLY if an instrument was added, removed, or changed.
   */
  async prepareTracks(instrumentsMap: Map<string, string>) {
    let graphDirty = false;

    // Clean up tracks that were removed from the song
    for (const trackId of Array.from(this.trackParamsMap.keys())) {
      if (!instrumentsMap.has(trackId)) {
        this.trackParamsMap.delete(trackId);
        this.trackVoicesMap.delete(trackId);
        this.dirtyTracks.delete(trackId);
        graphDirty = true;
      }
    }

    for (const [trackId, instrumentId] of instrumentsMap.entries()) {
      const existing = this.trackParamsMap.get(trackId);
      if (!existing || existing.instrumentId !== instrumentId) {
        const instDef = INSTRUMENTS_BY_ID[instrumentId];
        const instLuthier: LuthierPhysicalParameters = instDef?.luthierPhysics ?? {
          category: 'electro_acoustic_algorithmic',
          materialDensity: 0.5,
          tension: 0.5,
          bodyResonanceVolume: 10,
          decayTimeFactor: 2,
          harmonicRichness: 0.7,
        };
        const model = instDef?.elementaryModel ?? modelForInstrument(instrumentId);
        const params = defaultTrackParams(instrumentId, instLuthier, model);
        params.performanceMode = performanceModeForContext(this.activeWorldId, this.activeStyleId);
        if (this.activeWorldId) {
          params.genreId = this.activeWorldId;
        }
        if (this.activeStyleId) params.styleId = this.activeStyleId;
        params.styleFlavor = styleFlavorForGenre(this.activeWorldId, this.activeStyleId);
        const dialect = resolveDialect(instrumentId, this.activeWorldId, this.activeStyleId);
        if (dialect) {
          params.instrumentDialectId = dialect.id;
      params.dialect = dialect.id;
          params.performanceMode = dialect.performanceMode;
          if (dialect.pluckPositionOverride !== undefined) params.pluckPosition = dialect.pluckPositionOverride;
          if (dialect.bowPressureOverride !== undefined) params.bowPressure = dialect.bowPressureOverride;
          if (dialect.contactPointOverride !== undefined) params.contact = dialect.contactPointOverride;
          if (dialect.brightnessMultiplier !== undefined) params.brightness *= dialect.brightnessMultiplier;
          if (dialect.decayMultiplier !== undefined) params.decay *= dialect.decayMultiplier;
          if (dialect.bodyMultiplier !== undefined) params.body *= dialect.bodyMultiplier;
          if (dialect.bendGlideMs !== undefined) params.bendGlideMs = dialect.bendGlideMs;
        }
        const role = instDef?.acousticProfile?.role || 'comp';
        params.roleGain = getRoleGainLinear(role, this.activeWorldId || 'default', instrumentId);
        params.volume *= params.roleGain;
        // Preserve live mixer controls when static track parameters are rebuilt.
        if (this.trackVolumes.has(trackId)) params.volume = this.trackVolumes.get(trackId)!;
        if (this.trackPans.has(trackId)) params.pan = this.trackPans.get(trackId)!;
        this.trackParamsMap.set(trackId, params);

        const voiceCount = getPolyphonyForTrack(instrumentId);
        const preallocatedVoices: VoiceState[] = [];
        for (let vIdx = 0; vIdx < voiceCount; vIdx++) {
          preallocatedVoices.push({
            id: `live-${trackId}-v${vIdx}`,
            gate: 0,
            frequencyHz: 440,
            note: 60,
            velocity: 0,
          });
        }
        this.trackVoicesMap.set(trackId, preallocatedVoices);
        this.markDirty(trackId);
        graphDirty = true;
      }
    }
    if (graphDirty) {
      await this.syncGraph();
    }
    this.updateTrackMuteSoloLevels();
  }

  private async syncGraph(): Promise<void> {
    if (!this.core) return;
    if (this.isSyncing) {
      this.pendingSync = true;
      return;
    }
    this.isSyncing = true;
    try {
      do {
        this.pendingSync = false;
        const trackSignals: {
          left: AudioSignal;
          right: AudioSignal;
          trackId?: string;
          instrumentId?: string;
          role?: string;
        }[] = [];

        for (const [trackId, params] of this.trackParamsMap.entries()) {
          const voices = this.trackVoicesMap.get(trackId) ?? [];
          const sig = renderTrack(trackId, voices, params);
          trackSignals.push({
            left: sig.left,
            right: sig.right,
            trackId,
            instrumentId: params.instrumentId,
            role: INSTRUMENTS_BY_ID[params.instrumentId ?? '']?.acousticProfile?.role,
          });
        }

        let mixCharacter: import('../../engine/style/contracts').MixCharacter | undefined;
        if (this.activeWorldId) {
          try {
            const style = this.activeStyleId
              ? resolveStyle({ genreId: this.activeWorldId, styleId: this.activeStyleId })
              : undefined;
            mixCharacter = contractForGenre(this.activeWorldId, style)?.timbreSpace?.mixCharacter;
          } catch {
            /* ignore missing contract */
          }
        }

        const masterSig = renderMaster(trackSignals, {
          highPass: 20,
          volume: this.masterVolume,
          mixCharacter,
          genreId: this.activeWorldId,
          bpm: 120,
        });

        await this.core.render(masterSig.left, masterSig.right);
      } while (this.pendingSync);
    } catch (err: unknown) {
      console.warn('[Elementary] Render error:', err);
    } finally {
      this.isSyncing = false;
      this.dirtyTracks.clear();
    }
  }

  /**
   * One lookahead scheduler for all live control events.
   *
   * The old implementation created one setTimeout per note-on/note-off/CC/bend.
   * A dense tango or flamenco phrase can queue thousands of browser timers inside
   * the 400 ms transport horizon. Keep the event clock here, but service it with
   * one timer and let the AudioWorklet own the actual audio rendering.
   */
  private schedule(fn: () => void, atTime?: number) {
    const now = this.ctx?.currentTime ?? 0;
    const target = atTime ?? now;
    if (target <= now + 0.005) {
      fn();
      return;
    }
    this.heapPush({ atTime: target, seq: ++this.schedulerSeq, fn });
    this.armScheduler();
  }

  private eventBefore(a: { atTime: number; seq: number }, b: { atTime: number; seq: number }): boolean {
    return a.atTime < b.atTime || (a.atTime === b.atTime && a.seq < b.seq);
  }

  private heapPush(event: { atTime: number; seq: number; fn: () => void }) {
    const heap = this.scheduledEvents;
    let i = heap.length;
    heap.push(event);
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.eventBefore(heap[parent], heap[i])) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  }

  private heapPop(): { atTime: number; seq: number; fn: () => void } | undefined {
    const heap = this.scheduledEvents;
    if (!heap.length) return undefined;
    const root = heap[0];
    const last = heap.pop()!;
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const left = i * 2 + 1;
        const right = left + 1;
        let smallest = i;
        if (left < heap.length && this.eventBefore(heap[left], heap[smallest])) smallest = left;
        if (right < heap.length && this.eventBefore(heap[right], heap[smallest])) smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return root;
  }

  private armScheduler() {
    if (this.schedulerTimer !== null || this.scheduledEvents.length === 0) return;
    const now = this.ctx?.currentTime ?? 0;
    const next = this.scheduledEvents[0];
    const delayMs = Math.max(1, (next.atTime - now) * 1000);
    this.schedulerTimer = window.setTimeout(() => {
      this.schedulerTimer = null;
      this.drainScheduledEvents();
      this.armScheduler();
    }, Math.min(delayMs, 25));
  }

  private drainScheduledEvents() {
    const now = this.ctx?.currentTime ?? 0;
    while (this.scheduledEvents.length && this.scheduledEvents[0].atTime <= now + 0.005) {
      this.heapPop()!.fn();
    }
  }

  processPendingEvents() {
    this.flushParamUpdates();
  }

  postEvent(event: CulturalAcousticEvent, atTime?: number) {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => { });
    }
    this.schedule(() => {
      this.executeNoteOn(event);
    }, atTime);
  }

  private executeNoteOn(event: CulturalAcousticEvent) {
    const trackId = event.trackId;
    const instrumentId = event.luthierObjectId || trackId;
    if (!this.trackParamsMap.has(trackId)) {
      const instDef = INSTRUMENTS_BY_ID[instrumentId];
      const luthier = (event.luthier ?? instDef?.luthierPhysics ?? {
        category: 'electro_acoustic_algorithmic',
        materialDensity: 0.5,
        tension: 0.5,
        bodyResonanceVolume: 10,
        decayTimeFactor: 2,
        harmonicRichness: 0.7,
      }) as LuthierPhysicalParameters;
      const model = modelForInstrument(instrumentId);
      const p = defaultTrackParams(instrumentId, luthier, model);
      const role = instDef?.acousticProfile?.role || 'comp';
      p.roleGain = getRoleGainLinear(role, this.activeWorldId || 'default', instrumentId);
      p.volume *= p.roleGain;
      if (this.trackVolumes.has(trackId)) p.volume = this.trackVolumes.get(trackId)!;
      if (this.trackPans.has(trackId)) p.pan = this.trackPans.get(trackId)!;
      if (this.activeWorldId) p.genreId = this.activeWorldId;
      if (this.activeStyleId) p.styleId = this.activeStyleId;
      p.styleFlavor = styleFlavorForGenre(this.activeWorldId, this.activeStyleId);
      p.performanceMode = performanceModeForContext(this.activeWorldId, this.activeStyleId);
      const dialect = resolveDialect(instrumentId, this.activeWorldId, this.activeStyleId);
      if (dialect) {
        p.instrumentDialectId = dialect.id;
        p.dialect = dialect.id;
        p.performanceMode = dialect.performanceMode;
        if (dialect.pluckPositionOverride !== undefined) p.pluckPosition = dialect.pluckPositionOverride;
        if (dialect.bowPressureOverride !== undefined) p.bowPressure = dialect.bowPressureOverride;
        if (dialect.contactPointOverride !== undefined) p.contact = dialect.contactPointOverride;
        if (dialect.brightnessMultiplier !== undefined) p.brightness *= dialect.brightnessMultiplier;
        if (dialect.decayMultiplier !== undefined) p.decay *= dialect.decayMultiplier;
        if (dialect.bodyMultiplier !== undefined) p.body *= dialect.bodyMultiplier;
        if (dialect.bendGlideMs !== undefined) p.bendGlideMs = dialect.bendGlideMs;
      }
      this.trackParamsMap.set(trackId, p);
    }

    const params = this.trackParamsMap.get(trackId)!;
    const noteMidi = event.midi ?? 60;
    const rendered = resolveRenderGesture(instrumentId, event.gestureCode ?? 0);
    const hitGainMultiplier = rendered.gainMultiplier;

    // Normalize event performance controls once per note. Keep velocity in the
    // renderer's canonical 0..1 range and fold gesture gain into the note-local
    // excitation rather than changing the track's static volume.
    const velRaw = Number.isFinite(event.velocity) ? event.velocity! : 102;
    const velScaled = Math.max(0, Math.min(1, (velRaw / 127) * hitGainMultiplier));
    const articulationNorm = Math.max(0, Math.min(1, rendered.articulationNorm));

    // Track volume is controlled by mixer/CC updates, never by note-on.

    let voices = this.trackVoicesMap.get(trackId);
    if (!voices) {
      voices = [];
      const voiceCount = getPolyphonyForTrack(instrumentId);
      for (let vIdx = 0; vIdx < voiceCount; vIdx++) {
        voices.push({
          id: `live-${trackId}-v${vIdx}`,
          gate: 0,
          frequencyHz: 440,
          note: 60,
          velocity: 0,
        });
      }
      this.trackVoicesMap.set(trackId, voices);
    }

    // Round-robin voice allocation: prefer idle voice, then oldest triggered voice
    let bestVIdx = 0;
    let oldestSeq = Infinity;
    for (let i = 0; i < voices.length; i++) {
      const v = voices[i];
      if (v.gate === 0) {
        bestVIdx = i;
        break;
      }
      const seq = v.triggerSeq ?? 0;
      if (seq < oldestSeq) {
        oldestSeq = seq;
        bestVIdx = i;
      }
    }

    const voice = voices[bestVIdx];
    voice.note = noteMidi;
    voice.noteInstanceId = event.noteInstanceId;
    const targetFreq = Math.max(20, event.frequencyHz ?? midiToFreq(noteMidi));
    voice.frequencyHz = targetFreq;
    voice.baseFrequencyHz = targetFreq;
    voice.triggerSeq = ++this.voiceSeq;
    voice.velocity = velScaled;
    voice.gate = 1;

    voice.action = rendered.action;
    voice.articulation = rendered.articulationNorm;
    voice.bellowsDirectionCode = event.bellowsDirectionCode;
    voice.bandoneonButtonId = event.bandoneonButtonId;
    voice.bandoneonButtonIndex = event.bandoneonButtonIndex;
    voice.bandoneonSideCode = event.bandoneonSideCode;
    voice.action = rendered.action;
    voice.excitationType = rendered.excitationType || params.excitationType;

    voice.attack = event.attack;
    voice.decay = event.decay;
    voice.sustain = event.sustain;
    voice.release = event.release;

    // Apply parameter updates to static DSP nodes directly without core.render()
    const pk = `track_${trackId}_voice_${bestVIdx}`;
    this.queueParamUpdate(`${pk}_freq`, targetFreq);
    this.queueParamUpdate(`${pk}_vel`, velScaled * (1 - 0.58 * params.mute));
    this.queueParamUpdate(`${pk}_gate`, 1);
    this.queueParamUpdate(`${pk}_art`, articulationNorm);

    const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, velScaled));
    const b = Math.max(0, Math.min(1, params.brightness * velBoost));
    const decayTime = Math.max(0.05, params.decay);
    const isMuted = params.mute > 0.4;
    const attack = event.attack !== undefined ? event.attack : (0.0008 + (1 - b) * 0.01);
    const release = event.release !== undefined ? event.release : (isMuted ? 0.012 : 0.03 + decayTime * 0.25);
    const sustain = event.sustain !== undefined ? event.sustain : (isMuted ? 0.05 : 0.35 + 0.3 * params.body);
    const envDecay = event.decay !== undefined ? event.decay : (decayTime * (isMuted ? 0.1 : 0.3));

    this.queueParamUpdate(`${pk}_attack`, attack);
    this.queueParamUpdate(`${pk}_decay`, envDecay);
    this.queueParamUpdate(`${pk}_sustain`, sustain);
    this.queueParamUpdate(`${pk}_release`, release);
    this.queueParamUpdate(`track_${trackId}_vol`, params.volume);
  }

  postRelease(trackId: string, midi: number, atTime?: number, noteInstanceId?: string) {
    this.schedule(() => {
      this.executeNoteOff(trackId, midi, noteInstanceId);
    }, atTime);
  }

  private executeNoteOff(trackId: string, midi: number, noteInstanceId?: string) {
    const voices = this.trackVoicesMap.get(trackId);
    if (!voices) return;

    const roundedMidi = Math.round(midi);
    for (let vIdx = 0; vIdx < voices.length; vIdx++) {
      const v = voices[vIdx];
      const idMatches = noteInstanceId ? String(v.noteInstanceId ?? '') === noteInstanceId : true;
      if (idMatches && (v.note === midi || Math.round(v.note) === roundedMidi) && v.gate === 1) {
        v.gate = 0;
        if (v.baseFrequencyHz) {
          v.frequencyHz = v.baseFrequencyHz;
        }
        const pk = `track_${trackId}_voice_${vIdx}`;
        this.queueParamUpdate(`${pk}_gate`, 0);
      }
    }
  }

  postCC(trackId: string, cc: number, value: number, atTime?: number) {
    this.schedule(() => {
      this.executeCC(trackId, cc, value);
    }, atTime);
  }

  private executeCC(trackId: string, cc: number, value: number) {
    const params = this.trackParamsMap.get(trackId);
    if (!params) return;

    const norm = value / 127;
    if (cc === 7 || cc === 11) {
      const isElectronic = instrumentHasKey(params.instrumentId || '', ENGINE_INSTRUMENT_KEYS.electronic);
      const effectiveModelForGain = isElectronic ? 9 : params.model;
      const baseGain = makeupGainFor(effectiveModelForGain, params.instrumentId);
      params.volume = Math.max(0.01, Math.min(35, norm * baseGain * (params.roleGain ?? 1)));
      this.queueParamUpdate(`track_${trackId}_vol`, params.volume);
    } else if (cc === 10) {
      params.pan = norm;
      const clampedPan = Math.max(0, Math.min(1, params.pan));
      const leftGain = Math.cos(clampedPan * Math.PI * 0.5);
      const rightGain = Math.sin(clampedPan * Math.PI * 0.5);
      this.queueParamUpdate(`track_${trackId}_panL`, leftGain);
      this.queueParamUpdate(`track_${trackId}_panR`, rightGain);
    } else if (cc === 16) {
      params.articulation = norm;
      const voices = this.trackVoicesMap.get(trackId) ?? [];
      for (let vIdx = 0; vIdx < voices.length; vIdx++) {
        this.queueParamUpdate(`track_${trackId}_voice_${vIdx}_art`, norm);
      }
    } else if (cc === 74) params.brightness = norm;
    else if (cc === 17) params.contact = norm;
    else if (cc === 18) params.mute = norm;
    else if (cc === 19) params.bowPressure = norm;
    else if (cc === 20) params.bowVelocity = norm;
    else if (cc === 21) params.bodyTap = norm;
    else if (cc === 22) params.pluckPosition = norm;
    else if (cc === 24) params.pressure = norm;
    else if (cc === 25) params.resonance = norm;
  }

  postBend(trackId: string, value: number, targetMidi?: number, atTime?: number) {
    this.schedule(() => {
      this.executeBend(trackId, value, targetMidi);
    }, atTime);
  }

  private executeBend(trackId: string, value: number, targetMidi?: number) {
    const voices = this.trackVoicesMap.get(trackId);
    if (!voices || voices.length === 0) return;

    const activeVoices: { voice: VoiceState; index: number }[] = [];
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].gate === 1) activeVoices.push({ voice: voices[i], index: i });
    }
    if (activeVoices.length === 0) return;

    let target = activeVoices[0];
    if (targetMidi !== undefined) {
      const rounded = Math.round(targetMidi);
      const found = activeVoices.find(item => item.voice.note === targetMidi || Math.round(item.voice.note) === rounded);
      if (found) target = found;
    }

    const semitones = ((value - 8192) / 8192) * 2;
    const bendRatio = Math.pow(2, semitones / 12);
    const base = target.voice.baseFrequencyHz ?? target.voice.frequencyHz ?? midiToFreq(target.voice.note);
    target.voice.baseFrequencyHz = base;
    const targetFreq = base * bendRatio;
    target.voice.frequencyHz = targetFreq;

    this.queueParamUpdate(`track_${trackId}_voice_${target.index}_freq`, targetFreq);
  }

  softNotesOff() {
    this.scheduledEvents.length = 0;
    if (this.schedulerTimer !== null) {
      window.clearTimeout(this.schedulerTimer);
      this.schedulerTimer = null;
    }

    for (const [trackId, voices] of this.trackVoicesMap.entries()) {
      for (let vIdx = 0; vIdx < voices.length; vIdx++) {
        if (voices[vIdx].gate === 1) {
          voices[vIdx].gate = 0;
          this.queueParamUpdate(`track_${trackId}_voice_${vIdx}_gate`, 0);
        }
      }
    }
    this.flushParamUpdates();
  }

  clear() {
    this.scheduledEvents.length = 0;
    if (this.schedulerTimer !== null) {
      window.clearTimeout(this.schedulerTimer);
      this.schedulerTimer = null;
    }

    for (const [trackId, voices] of this.trackVoicesMap.entries()) {
      for (let vIdx = 0; vIdx < voices.length; vIdx++) {
        voices[vIdx].gate = 0;
        this.queueParamUpdate(`track_${trackId}_voice_${vIdx}_gate`, 0);
      }
    }
    this.flushParamUpdates();
  }

  dispose() {
    this.clear();
    this.trackVoicesMap.clear();
    this.trackParamsMap.clear();
    this.dirtyTracks.clear();
    try { this.audioNode?.disconnect(); } catch { }
    this.masterChain?.dispose();
    this.masterChain = undefined;
  }
}
