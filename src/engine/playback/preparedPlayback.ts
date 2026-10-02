import { requiredVoiceCount, voiceTailSeconds } from './voiceAllocation';
import { POLYPHONY_FALLBACK_RULES } from '../../data/sound/polyphony';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import { el } from '@elemaudio/core';
import { renderVoice, type TrackParams, type VoiceState } from './elementaryEngine';
import { resolveTrackSound, resolveTrackGain } from './trackSound';
import { resolveInstrumentKitComponent } from '../lookup/instrument-components';
import { PreparedVoiceGraph, type PreparedProgram } from './preparedGraph';
import { prepareNoteVoice, applyPhysicalController, controllerStateKey } from './performancePlan';
import type { AudioSignal } from './instrumentTypes';
import type { PlaybackConfiguration } from './bandWorklet';
export interface PreparedNote {
  voice: VoiceState;
  componentPan: number;
  programs: Array<Map<string, PreparedProgram>>;
}
export interface LiveVoice {
  graph: PreparedVoiceGraph;
  state: VoiceState;
  profile?: PreparedNote;
  program?: PreparedProgram;
  availableAt?: number;
  panL: string;
  panR: string;
}
export interface LiveTrack {
  params: TrackParams;
  initialParams: TrackParams;
  voices: LiveVoice[];
  profiles: Map<number, PreparedNote>;
  tailSeconds: number;
  signal: { left: AudioSignal; right: AudioSignal };
}
export function getPolyphonyForTrack(instrumentId: string, role?: string): number {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (typeof def?.polyphony === 'number') return def.polyphony;
  for (const rule of POLYPHONY_FALLBACK_RULES) {
    if (rule.roles?.includes((role ?? '').toLowerCase()) || rule.instrumentPattern?.test(instrumentId.toLowerCase())) return rule.voices;
  }
  return 8;
}

export interface PreparationMixState {
  levels: Map<string, number>; pans: Map<string, number>; muted: Map<string, boolean>; solo: Map<string, boolean>;
}
export function preparePlaybackGraph(config: PlaybackConfiguration, mix: PreparationMixState) {
  const started = performance.now();
  const tracks = new Map<string, LiveTrack>();
  const bindings = new Map<string, number>();
  const control = (key: string, value: number) => {
    const node = el.const({ key, value }); bindings.set(key, node.hash); return node;
  };
    let variants = 0, voicesCount = 0;
    for (const [id, instrumentId] of config.instruments) {
      const role = config.roles.get(id);
      const params = resolveTrackSound(instrumentId, config.worldId, config.styleId ?? '', role);
      params.pan = mix.pans.get(id) ?? params.pan;
      params.volume = resolveTrackGain(params, mix.levels.get(id) ?? 1);
      const trackNotes = config.performance.notes.filter(note => note.trackId === id);
      const tailSeconds = trackNotes.reduce((tail, note) => Math.max(tail, note.soundContext
        ? voiceTailSeconds(resolveTrackSound(instrumentId, note.soundContext.worldId, note.soundContext.styleId, note.soundContext.role)) : 0), voiceTailSeconds(params));
      const count = requiredVoiceCount(trackNotes, tailSeconds);
      const voices: LiveVoice[] = Array.from({ length: count }, (_, index) => ({
        graph: new PreparedVoiceGraph(`track_${id}_voice_${index}`),
        state: { id: `live-${id}-${index}`, note: 60, velocity: 0, gate: 0 },
        panL: `track_${id}_voice_${index}_panL`, panR: `track_${id}_voice_${index}_panR`,
      }));
      // Compile every authored physical CC state in advance, including seek/reset.
      const states = new Map<string, TrackParams>();
      const ccParams = { ...params };
      states.set(controllerStateKey(ccParams), { ...ccParams });
      for (const cc of config.performance.ccs.filter(c => c.trackId === id).slice().sort((a, b) => a.time - b.time)) {
        if (applyPhysicalController(ccParams, cc.cc, cc.value)) states.set(controllerStateKey(ccParams), { ...ccParams });
      }
      const profiles = new Map<number, PreparedNote>();
      const profileCaches = new Map<string, { keys: Array<keyof VoiceState>; programs: Map<string, PreparedNote['programs']> }>();
      const dependencyKey = (keys: Array<keyof VoiceState>, voice: VoiceState) => JSON.stringify(keys.map(k => voice[k]));
      config.performance.notes.forEach((note, noteIndex) => {
        if (note.trackId !== id) return;
        const voice = prepareNoteVoice(note, params, config.worldId, config.styleId ?? '', role, config.performance.ccs.filter(cc => cc.trackId === id).map(cc => cc.cc));
        let programs: PreparedNote['programs'] | undefined;
        for (const cache of profileCaches.values()) {
          programs = cache.programs.get(dependencyKey(cache.keys, voice));
          if (programs) break;
        }
        if (!programs) {
          // Cache by actual renderer dependencies, without discarding physical
          // metadata or hardcoding which instruments consume each field.
          const consumed = new Set<keyof VoiceState>();
          const trackedVoice = new Proxy(voice, { get(target, property, receiver) {
            if (typeof property === 'string') consumed.add(property as keyof VoiceState);
            return Reflect.get(target, property, receiver);
          } });
          programs = voices.map(() => new Map());
          voices.forEach((slot, index) => {
            for (const [stateKey, stateParams] of states) {
              programs![index].set(stateKey, slot.graph.prepare(renderVoice(id, index, trackedVoice, stateParams)));
            }
          });
          const keys = [...consumed].sort();
          const signature = JSON.stringify(keys);
          let cache = profileCaches.get(signature);
          if (!cache) { cache = { keys, programs: new Map() }; profileCaches.set(signature, cache); }
          cache.programs.set(dependencyKey(keys, voice), programs);
        }
        const profile = { voice, componentPan: resolveInstrumentKitComponent(instrumentId, voice.note, voice.action)?.defaultPan ?? 0, programs };
        profiles.set(noteIndex, profile);
      });
      const left: AudioSignal[] = [], right: AudioSignal[] = [];
      voices.forEach(slot => {
        slot.graph.seal();
        for (const variant of slot.graph.variants) {
          for (const control of variant.controls) if (control) bindings.set(control.key, control.hash);
          bindings.set(variant.select.key, variant.select.hash);
        }
        bindings.set(slot.graph.trigger.key, slot.graph.trigger.hash);
        bindings.set(slot.graph.choice.key, slot.graph.choice.hash);
        const signal = slot.graph.signal();
        left.push(el.mul(control(slot.panL, Math.cos(params.pan * Math.PI / 2)), signal));
        right.push(el.mul(control(slot.panR, Math.sin(params.pan * Math.PI / 2)), signal));
        variants += slot.graph.variants.length;
      });
      voicesCount += count;
      const volume = control(`track_${id}_vol`, mix.muted.get(id) || ([...mix.solo.values()].some(Boolean) && !mix.solo.get(id)) ? 0 : params.volume);
      tracks.set(id, { params, tailSeconds, initialParams: { ...params }, voices, profiles, signal: {
        left: el.mul(volume, left.length ? el.add(...left) : 0), right: el.mul(volume, right.length ? el.add(...right) : 0),
      } });
    }
  return { tracks, bindings, variants, voices: voicesCount, controls: bindings.size, preparationMs: performance.now() - started };
}
export type PreparedPlaybackGraph = ReturnType<typeof preparePlaybackGraph>;

/** Runs expensive UI preparation off the scheduling/UI thread in browsers. */
export async function preparePlaybackGraphAsync(config: PlaybackConfiguration, mix: PreparationMixState, signal?: AbortSignal): Promise<PreparedPlaybackGraph> {
  if (signal?.aborted) throw new DOMException('Playback preparation was superseded', 'AbortError');
  if (typeof Worker === 'undefined') return preparePlaybackGraph(config, mix);
  const worker = new Worker(new URL('./playbackPreparationWorker.ts', import.meta.url), { type: 'module' });
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      signal?.removeEventListener('abort', abort);
      worker.terminate();
    };
    const abort = () => {
      cleanup();
      reject(new DOMException('Playback preparation was superseded', 'AbortError'));
    };
    signal?.addEventListener('abort', abort, { once: true });
    worker.onmessage = ({ data }: MessageEvent<{ result?: PreparedPlaybackGraph; error?: string }>) => {
      cleanup();
      if (data.result) resolve(data.result); else reject(new Error(data.error ?? 'Playback preparation failed'));
    };
    worker.onerror = event => { cleanup(); reject(new Error(event.message || 'Playback preparation worker failed')); };
    worker.postMessage({ config, mix });
  });
}
