import { createSongMixGraph, type SongMixGraph } from '../studio/dynamicMix/MixGraph';
import { ensembleHeadroom } from '../studio/masterSettings';
import WebRenderer from '@elemaudio/web-renderer';
import { createMasterChain, type MasterChain } from '../studio/mixer';
import { renderMixBuses, midiToFreq, type TrackParams } from './elementaryEngine';
import { resolveTrackGain } from './trackSound';
import { resolvePlaybackMix } from '../studio/masterSettings';
import type { Performance } from '../band/performanceData';
import type { PreparedProgram } from './preparedGraph';
import { preparePlaybackGraphAsync, type PreparedPlaybackGraph, type LiveTrack, type LiveVoice } from './preparedPlayback';
export { getPolyphonyForTrack } from './preparedPlayback';
import { applyPhysicalController, controllerStateKey } from './performancePlan';

interface RendererDelegate {
  clear(): void;
  nodeMap: Map<number, { props: Record<string, unknown> }>;
  setProperty(hash: number, property: string, value: number): void;
  commitUpdates(): void;
  getPackedInstructions(): { length: number };
}
interface RendererInternals { _delegate?: RendererDelegate; _sendMessage(instructions: unknown): void; }
export interface PlaybackConfiguration {
  performance: Performance;
  instruments: Map<string, string>;
  roles: Map<string, string>;
  levels?: Map<string, number>;
  worldId: string;
  styleId?: string;
}

/**
 * UI owns preparation and graph commits. Performance owns only prepared scalar
 * programs, gates and scheduling. No renderVoice/el graph construction occurs
 * in the note/controller/transport paths, including loops and voice stealing.
 */
export class BandWorkletNode {
  private ctx?: AudioContext;
  private core?: InstanceType<typeof WebRenderer>;
  private audioNode?: AudioNode;
  private masterChain?: MasterChain;
  private dynamicMixGraph?: SongMixGraph;
  private rendererOutputCount = 0;
  public activeWorldId = 'flamenco';
  public activeStyleId = '';
  private configuration?: PlaybackConfiguration;
  private configurationKey = '';
  private preparationRevision = 0;
  private tracks = new Map<string, LiveTrack>();
  private trackMutedMap = new Map<string, boolean>();
  private trackSoloMap = new Map<string, boolean>();
  private trackControllerGain = new Map<string, { volume: number; expression: number }>();
  private trackVolumes = new Map<string, number>();
  private trackPans = new Map<string, number>();
  private bindings = new Map<string, number>();
  private appliedValues = new Map<string, number>();
  private pendingParamUpdates: Record<string, number> = {};
  private paramFlushScheduled = false;
  private scheduledEvents: Array<{ atTime: number; revision: number; sequence: number; fn: () => void }> = [];
  private scheduledTimeout: ReturnType<typeof setTimeout> | null = null;
  private scheduledTimeoutAt = Number.POSITIVE_INFINITY;
  private scheduleSequence = 0;
  private preparationAbort?: AbortController;
  private generation = 0;
  private voiceSeq = 0;
  private renderPending = false;
  private graphCommit: Promise<void> = Promise.resolve();
  private disposed = false;
  private diagnostics = { preparations: 0, graphCommits: 0, parameterBatches: 0, propertyWrites: 0,
    activeVoiceSteals: 0, tailVoiceReuses: 0, unpreparedEvents: 0, missingBindings: 0, voices: 0, variants: 0, controls: 0, preparationMs: 0 };

  getDiagnostics() { return { ...this.diagnostics, pendingTimers: this.scheduledEvents.length, tracks: this.tracks.size }; }

  /** Called from the song/UI effect, with all inputs in a single transaction. */
  async configure(config: PlaybackConfiguration): Promise<void> {
    if (this.disposed) throw new Error('Cannot configure a disposed playback engine');
    const snapshot = { ...config, instruments: new Map(config.instruments), roles: new Map(config.roles), levels: new Map(config.levels) };
    const key = JSON.stringify([config.worldId, config.styleId ?? '', [...config.instruments], [...config.roles],
      config.performance.notes, config.performance.ccs, config.performance.mixTimeline]);
    for (const [id, level] of config.levels ?? []) this.trackVolumes.set(id, level);
    if (key === this.configurationKey) {
      this.preparationAbort?.abort();
      this.preparationAbort = undefined;
      this.preparationRevision++;
      this.configuration = snapshot;
      for (const [id, track] of this.tracks) track.params.volume = this.trackGain(id, track.params);
      this.updateTrackMuteSoloLevels();
      await this.graphCommit; return;
    }
    this.preparationAbort?.abort();
    const abort = new AbortController();
    this.preparationAbort = abort;
    const request = ++this.preparationRevision;
    let prepared: PreparedPlaybackGraph;
    try {
      prepared = await preparePlaybackGraphAsync(snapshot, { levels: new Map(this.trackVolumes), pans: new Map(this.trackPans),
        muted: new Map(this.trackMutedMap), solo: new Map(this.trackSoloMap) }, abort.signal);
    } catch (error) {
      if (request === this.preparationRevision) {
        this.preparationAbort = undefined;
      }
      if (abort.signal.aborted) return;
      throw error;
    }
    if (this.disposed || request !== this.preparationRevision) return;
    this.preparationAbort = undefined;
    this.clear(); this.generation++;
    const worldChanged = this.activeWorldId !== config.worldId || this.activeStyleId !== (config.styleId ?? '');
    this.activeWorldId = config.worldId; this.activeStyleId = config.styleId ?? '';
    this.configuration = snapshot; this.configurationKey = key;
    this.tracks = prepared.tracks; this.bindings = prepared.bindings;
    this.appliedValues.clear(); this.pendingParamUpdates = {};
    for (const map of [this.trackVolumes, this.trackPans, this.trackMutedMap, this.trackSoloMap, this.trackControllerGain]) {
      for (const id of map.keys()) if (!config.instruments.has(id)) map.delete(id);
    }
    this.trackControllerGain.clear();
    this.diagnostics.preparations++;
    const { variants, voices, controls, preparationMs } = prepared;
    Object.assign(this.diagnostics, { variants, voices, controls, preparationMs });
    if (worldChanged && this.masterChain) {
      const mix = resolvePlaybackMix(this.activeWorldId, this.activeStyleId);
      if (mix.mixCharacter) this.masterChain.setMixCharacter(mix.mixCharacter, mix.context);
    }
    this.commitGraph(); await this.graphCommit;
  }

  private commitGraph() {
    if (!this.ctx || !this.masterChain) return;
    const revision = this.generation;
    const mix = resolvePlaybackMix(this.activeWorldId, this.activeStyleId);
    const signals = [...this.tracks].map(([trackId, t]) => ({ ...t.signal, trackId,
      instrumentId: t.params.instrumentId, role: this.configuration?.roles.get(trackId) }));
    const timeline = this.configuration?.performance.mixTimeline;
    const dynamic = signals.length > 0 && timeline?.scenes.some(scene => scene.enabled) ? timeline : undefined;
    const outputCount = dynamic ? Math.max(1, signals.length) : 3;
    this.renderPending = true;
    this.diagnostics.graphCommits++;
    const previousCommit = this.graphCommit;
    this.graphCommit = previousCommit.then(async () => {
      if (this.disposed || revision !== this.generation) return;
      this.audioNode?.disconnect();
      this.dynamicMixGraph?.dispose(); this.dynamicMixGraph = undefined;
      if (!this.core || this.rendererOutputCount !== outputCount) {
        // Only a user composition edit may change output topology; scenes never do.
        if (this.core && this.audioNode) {
          await this.core.reset();
          if (typeof AudioWorkletNode !== 'undefined' && this.audioNode instanceof AudioWorkletNode) this.audioNode.port.close();
        }
        this.core = new WebRenderer();
        this.audioNode = await this.core.initialize(this.ctx!, { numberOfInputs: 0,
          numberOfOutputs: outputCount, outputChannelCount: Array(outputCount).fill(2) });
        this.rendererOutputCount = outputCount;
      }
      if (this.disposed || revision !== this.generation) return;
      if (dynamic) {
        this.masterChain!.setMixCharacter(dynamic.scenes[0].resolvedMix.contract.character, mix.context);
        this.dynamicMixGraph = createSongMixGraph(this.ctx!, this.masterChain!, dynamic,
          signals.map(signal => signal.trackId), dynamic.baselineHeadroom ?? ensembleHeadroom(signals.length, mix.masterProfile.lift));
        signals.forEach((signal, index) => this.audioNode!.connect(this.dynamicMixGraph!.tracks.get(signal.trackId)!.input, index));
        this.dynamicMixGraph.schedule(this.ctx!.currentTime, 0);
        await this.core.render(...signals.flatMap(signal => [signal.left, signal.right]));
      } else {
        if (mix.mixCharacter) this.masterChain!.setMixCharacter(mix.mixCharacter, mix.context);
        this.audioNode!.connect(this.masterChain!.drumBus, 0);
        this.audioNode!.connect(this.masterChain!.subBus, 1);
        this.audioNode!.connect(this.masterChain!.instBus, 2);
        const buses = renderMixBuses(signals, mix.masterProfile.lift);
        await this.core.render(buses.drums.left, buses.drums.right, buses.sub.left, buses.sub.right, buses.inst.left, buses.inst.right);
      }
      if (this.disposed || revision !== this.generation) return;
      this.renderPending = false;
      this.flushParamUpdates();
    }).catch((error: unknown) => {
      if (revision === this.generation) this.renderPending = false;
      throw error;
    });
  }

  async initialize(context: AudioContext, volume = 1): Promise<AudioNode> {
    this.ctx = context;
    const mix = resolvePlaybackMix(this.activeWorldId, this.activeStyleId);
    this.masterChain = createMasterChain(context, mix.mixCharacter, mix.context);
    this.masterChain.setPlaybackEnabled(false);
    this.masterChain.setVolume(volume);
    this.commitGraph();
    await this.graphCommit;
    return this.masterChain.output;
  }

  setMixPosition(songTime: number, contextTime: number) {
    this.dynamicMixGraph?.schedule(contextTime, songTime);
  }

  // Compatibility entry points for UI integrations. Always use the same atomic plan.
  setTrackRoles(roles: Map<string, string>) {
    if (this.configuration) return this.configure({ ...this.configuration, roles });
  }
  setWorldAndStyle(worldId: string, styleId = '') {
    if (this.configuration) return this.configure({ ...this.configuration, worldId, styleId });
    this.activeWorldId = worldId; this.activeStyleId = styleId;
  }
  async prepareTracks(instruments: Map<string, string>) {
    if (this.configuration) await this.configure({ ...this.configuration, instruments });
  }
  async setVolume(value: number) { this.masterChain?.setVolume(value); }
  setPlaybackEnabled(enabled: boolean) {
    if (!enabled) this.dynamicMixGraph?.cancel();
    this.masterChain?.setPlaybackEnabled(enabled);
  }

  private queueParamUpdate(key: string, value: number) {
    if (!Number.isFinite(value)) throw new Error(`Non-finite live control: ${key}`);
    if (!this.bindings.has(key)) { this.diagnostics.missingBindings++; throw new Error(`Unprepared live control: ${key}`); }
    this.pendingParamUpdates[key] = value;
    if (!this.paramFlushScheduled) {
      this.paramFlushScheduled = true;
      queueMicrotask(() => { this.paramFlushScheduled = false; this.flushParamUpdates(); });
    }
  }
  updateMap(updates: Record<string, number>) {
    for (const [key, value] of Object.entries(updates)) this.queueParamUpdate(key, value);
    this.flushParamUpdates();
  }
  flushParamUpdates() {
    if (this.renderPending || !this.core || this.disposed) return;
    const renderer = (this.core as unknown as { _renderer?: RendererInternals })._renderer;
    const delegate = renderer?._delegate;
    if (!delegate) return;
    const updates = this.pendingParamUpdates;
    this.pendingParamUpdates = {};
    delegate.clear();
    let writes = 0;
    for (const [key, value] of Object.entries(updates)) {
      if (this.appliedValues.get(key) === value) continue;
      const hash = this.bindings.get(key)!;
      const entry = delegate.nodeMap.get(hash);
      if (!entry) { this.diagnostics.missingBindings++; throw new Error(`Prepared control was not mounted: ${key}`); }
      if (entry.props.value !== value) {
        delegate.setProperty(hash, 'value', value); entry.props.value = value; writes++;
      }
      this.appliedValues.set(key, value);
    }
    if (writes) {
      delegate.commitUpdates();
      const instructions = delegate.getPackedInstructions();
      if (instructions.length) renderer!._sendMessage(instructions);
      this.diagnostics.parameterBatches++; this.diagnostics.propertyWrites += writes;
    }
  }

  private trackGain(id: string, params: TrackParams) {
    const cc = this.trackControllerGain.get(id);
    return resolveTrackGain(params, this.trackVolumes.get(id) ?? 1, cc?.volume, cc?.expression);
  }
  private effectiveVolume(id: string, volume: number) {
    return this.trackMutedMap.get(id) || ([...this.trackSoloMap.values()].some(Boolean) && !this.trackSoloMap.get(id)) ? 0 : volume;
  }
  private updateTrackMuteSoloLevels() {
    for (const [id, track] of this.tracks) this.queueParamUpdate(`track_${id}_vol`, this.effectiveVolume(id, track.params.volume));
    this.flushParamUpdates();
  }
  setTrackVolume(id: string, value: number, atTime?: number) {
    this.schedule(() => {
      this.trackVolumes.set(id, value);
      const track = this.tracks.get(id);
      if (track) track.params.volume = this.trackGain(id, track.params);
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }
  setTrackMute(id: string, muted: boolean, atTime?: number) {
    this.schedule(() => { this.trackMutedMap.set(id, muted); this.updateTrackMuteSoloLevels(); }, atTime);
  }
  setTrackSolo(id: string, solo: boolean, atTime?: number) {
    this.schedule(() => { this.trackSoloMap.set(id, solo); this.updateTrackMuteSoloLevels(); }, atTime);
  }
  private panVoice(slot: LiveVoice, pan: number) {
    const combined = Math.max(0, Math.min(1, pan + (slot.profile?.componentPan ?? 0)));
    this.queueParamUpdate(slot.panL, Math.cos(combined * Math.PI / 2));
    this.queueParamUpdate(slot.panR, Math.sin(combined * Math.PI / 2));
  }
  setTrackPan(id: string, pan: number, atTime?: number) {
    this.schedule(() => {
      this.trackPans.set(id, pan);
      const track = this.tracks.get(id);
      if (!track) return;
      track.params.pan = pan;
      for (const slot of track.voices) this.panVoice(slot, pan);
    }, atTime);
  }

  private schedule(fn: () => void, atTime?: number) {
    if (this.disposed) return;
    const now = this.ctx?.currentTime ?? 0;
    const when = atTime ?? now;
    if (when <= now + 0.005) { fn(); return; }
    const event = { atTime: when, revision: this.generation, sequence: ++this.scheduleSequence, fn };
    let lo = 0, hi = this.scheduledEvents.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      const other = this.scheduledEvents[mid];
      if (other.atTime < event.atTime || (other.atTime === event.atTime && other.sequence < event.sequence)) lo = mid + 1;
      else hi = mid;
    }
    this.scheduledEvents.splice(lo, 0, event);
    if (this.scheduledTimeout === null || when < this.scheduledTimeoutAt) this.armScheduledEvents(true);
  }
  private armScheduledEvents(rearm = false) {
    if (this.scheduledTimeout !== null && !rearm) return;
    if (this.scheduledTimeout !== null) clearTimeout(this.scheduledTimeout);
    this.scheduledTimeout = null;
    this.scheduledTimeoutAt = Number.POSITIVE_INFINITY;
    if (!this.scheduledEvents.length || this.disposed) return;
    const nextTime = this.scheduledEvents[0].atTime;
    const remaining = nextTime - (this.ctx?.currentTime ?? 0);
    this.scheduledTimeoutAt = nextTime;
    this.scheduledTimeout = setTimeout(() => {
      this.scheduledTimeout = null;
      this.scheduledTimeoutAt = Number.POSITIVE_INFINITY;
      this.dispatchScheduledEvents();
    }, Math.max(5, remaining * 1000));
  }
  private dispatchScheduledEvents() {
    const now = (this.ctx?.currentTime ?? 0) + 0.005;
    let dispatched = false;
    while (this.scheduledEvents.length && this.scheduledEvents[0].atTime <= now) {
      const event = this.scheduledEvents.shift()!;
      if (!this.disposed && event.revision === this.generation) event.fn();
      dispatched = true;
    }
    if (dispatched) this.flushParamUpdates();
    this.armScheduledEvents();
  }
  processPendingEvents() { this.dispatchScheduledEvents(); this.flushParamUpdates(); }

  postPreparedNote(trackId: string, profileId: number, noteInstanceId: string, atTime?: number) {
    this.schedule(() => {
      const track = this.tracks.get(trackId);
      const profile = track?.profiles.get(profileId);
      if (!track || !profile) { this.diagnostics.unpreparedEvents++; throw new Error(`Unprepared note ${trackId}:${profileId}; configure the UI performance first`); }
      const now = this.ctx?.currentTime ?? 0;
      let index = track.voices.findIndex(v => v.state.gate === 0 && (v.availableAt ?? 0) <= now);
      if (index < 0) {
        index = track.voices.reduce((best, slot, i, slots) => slot.state.gate === 0 &&
          (slots[best].state.gate !== 0 || (slot.availableAt ?? 0) < (slots[best].availableAt ?? 0)) ? i : best, 0);
        if (track.voices[index].state.gate !== 0) index = -1;
      }
      if (index < 0) {
        index = track.voices.reduce((best, slot, i, slots) => (slot.state.triggerSeq ?? 0) < (slots[best].state.triggerSeq ?? 0) ? i : best, 0);
      }
      const slot = track.voices[index];
      if (slot.state.gate) this.diagnostics.activeVoiceSteals++;
      else if ((slot.availableAt ?? 0) > now) this.diagnostics.tailVoiceReuses++;
      const program = profile.programs[index].get(controllerStateKey(track.params));
      if (!program) { this.diagnostics.unpreparedEvents++; throw new Error(`Unprepared controller state for ${trackId}`); }
      this.deactivate(slot);
      slot.availableAt = Infinity;
      slot.profile = profile;
      slot.state = { ...profile.voice, gate: 1, noteInstanceId, triggerSeq: ++this.voiceSeq,
        baseFrequencyHz: profile.voice.frequencyHz };
      this.activate(slot, program);
      this.queueParamUpdate(slot.graph.trigger.key, this.voiceSeq);
      this.panVoice(slot, track.params.pan);
    }, atTime);
  }

  private deactivate(slot: LiveVoice) {
    this.voiceControl(slot, 'gate', 0);
    if (slot.program) this.queueParamUpdate(slot.graph.variants[slot.program.variant].select.key, 0);
  }
  private activate(slot: LiveVoice, program: PreparedProgram) {
    const variant = slot.graph.variants[program.variant];
    program.values.forEach((value, i) => { const control = variant.controls[i]; if (control) this.queueParamUpdate(control.key, value); });
    slot.program = program;
    this.voiceControl(slot, 'gate', slot.state.gate);
    if (slot.state.frequencyHz !== undefined) this.voiceControl(slot, 'freq', slot.state.frequencyHz);
    this.queueParamUpdate(variant.select.key, 1);
    this.queueParamUpdate(slot.graph.choice.key, program.variant);
  }
  private voiceControl(slot: LiveVoice, suffix: string, value: number) {
    if (!slot.program) return;
    const variant = slot.graph.variants[slot.program.variant];
    for (const [semantic, index] of variant.semanticControls) {
      if (semantic.endsWith(`_${suffix}`)) {
        const control = variant.controls[index];
        if (control) this.queueParamUpdate(control.key, value);
      }
    }
  }
  postRelease(trackId: string, midi: number, atTime?: number, instance?: string) {
    this.schedule(() => {
      for (const slot of this.tracks.get(trackId)?.voices ?? []) {
        if (slot.state.gate && Math.round(slot.state.note) === Math.round(midi) && (!instance || slot.state.noteInstanceId === instance)) {
          slot.availableAt = (this.ctx?.currentTime ?? 0) + this.tracks.get(trackId)!.tailSeconds;
          slot.state.gate = 0; this.voiceControl(slot, 'gate', 0);
        }
      }
    }, atTime);
  }
  postCC(trackId: string, cc: number, value: number, atTime?: number) {
    this.schedule(() => {
      const track = this.tracks.get(trackId);
      if (!track) return;
      const norm = Math.max(0, Math.min(1, value / 127));
      if (cc === 7 || cc === 11) {
        const gain = this.trackControllerGain.get(trackId) ?? { volume: 1, expression: 1 };
        if (cc === 7) gain.volume = norm; else gain.expression = norm;
        this.trackControllerGain.set(trackId, gain);
        track.params.volume = this.trackGain(trackId, track.params);
        this.queueParamUpdate(`track_${trackId}_vol`, this.effectiveVolume(trackId, track.params.volume));
      } else if (cc === 10) {
        track.params.pan = norm;
        for (const slot of track.voices) this.panVoice(slot, norm);
      } else {
        const next = { ...track.params };
        if (!applyPhysicalController(next, cc, value)) return;
        this.applyPhysicalState(trackId, track, next);

      }
    }, atTime);
  }
  private applyPhysicalState(trackId: string, track: LiveTrack, next: TrackParams) {
    const key = controllerStateKey(next);
    const programs = track.voices.map((slot, i) => slot.profile?.programs[i].get(key));
    if (track.voices.some((slot, i) => slot.profile && !programs[i])) {
      this.diagnostics.unpreparedEvents++; throw new Error(`Controller state was not prepared by the UI for ${trackId}`);
    }
    track.params = next;
    track.voices.forEach((slot, i) => {
      const program = programs[i];
      if (program) { this.deactivate(slot); this.activate(slot, program); }
    });
  }

  /** Seek/loop restoration is atomic, so partial controller states never leak. */
  restoreControllers(controllers: Performance['ccs'], atTime?: number) {
    this.schedule(() => {
      this.trackControllerGain.clear();
      for (const [id, track] of this.tracks) {
        const next = { ...track.initialParams, pan: this.trackPans.get(id) ?? track.initialParams.pan };
        const gain = { volume: 1, expression: 1 };
        for (const cc of controllers) {
          if (cc.trackId !== id) continue;
          const norm = Math.max(0, Math.min(1, cc.value / 127));
          if (cc.cc === 7) gain.volume = norm;
          else if (cc.cc === 11) gain.expression = norm;
          else if (cc.cc === 10) next.pan = norm;
          else applyPhysicalController(next, cc.cc, cc.value);
        }
        this.trackControllerGain.set(id, gain);
        next.volume = this.trackGain(id, next);
        this.applyPhysicalState(id, track, next);
        for (const slot of track.voices) this.panVoice(slot, next.pan);
      }
      this.updateTrackMuteSoloLevels();
    }, atTime);
  }
  postBend(trackId: string, value: number, targetMidi?: number, atTime?: number) {
    this.schedule(() => {
      const active = this.tracks.get(trackId)?.voices.filter(v => v.state.gate) ?? [];
      const slot = active.find(v => targetMidi !== undefined && Math.round(v.state.note) === Math.round(targetMidi)) ?? active[0];
      if (!slot) return;
      const base = slot.state.baseFrequencyHz ?? slot.state.frequencyHz ?? midiToFreq(slot.state.note);
      slot.state.frequencyHz = base * Math.pow(2, (((value - 8192) / 8192) * 2) / 12);
      this.voiceControl(slot, 'freq', slot.state.frequencyHz);
    }, atTime);
  }
  softNotesOff() {
    this.scheduledEvents = [];
    if (this.scheduledTimeout !== null) clearTimeout(this.scheduledTimeout);
    this.scheduledTimeout = null;
    this.scheduledTimeoutAt = Number.POSITIVE_INFINITY;
    for (const track of this.tracks.values()) for (const slot of track.voices) {
      slot.availableAt = (this.ctx?.currentTime ?? 0) + track.tailSeconds;
      slot.state.gate = 0; this.voiceControl(slot, 'gate', 0);
    }
    this.flushParamUpdates();
  }
  clear() {
    this.softNotesOff();
    this.trackControllerGain.clear();
    for (const [id, track] of this.tracks) {
      const pan = track.params.pan;
      track.params = { ...track.initialParams, pan };
      track.params.volume = this.trackGain(id, track.params);
    }
    this.updateTrackMuteSoloLevels();
  }

  dispose() {
    this.preparationAbort?.abort();
    this.clear(); this.disposed = true; this.generation++; this.preparationRevision++;
    this.tracks.clear(); this.bindings.clear(); this.appliedValues.clear(); this.pendingParamUpdates = {};
    this.trackVolumes.clear(); this.trackPans.clear(); this.trackMutedMap.clear(); this.trackSoloMap.clear(); this.trackControllerGain.clear();
    this.configuration = undefined;
    this.audioNode?.disconnect(); this.dynamicMixGraph?.dispose(); this.dynamicMixGraph = undefined;
    if (typeof AudioWorkletNode !== 'undefined' && this.audioNode instanceof AudioWorkletNode) this.audioNode.port.close();
    this.masterChain?.dispose(); this.masterChain = undefined;
  }
}
