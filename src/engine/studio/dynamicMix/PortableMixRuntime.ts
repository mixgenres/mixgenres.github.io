import type { MixSceneTimeline } from './MixScene';
import { neutralTrackMixState } from './MixScene';
import { automationValueAt, compileAutomation, dbToGain } from './MixAutomation';

/** Stateful biquad for environments without Web Audio, using RBJ shelf/peak coefficients. */
class StereoEQ {
  private b0 = 1; private b1 = 0; private b2 = 0; private a1 = 0; private a2 = 0;
  private z1 = [0, 0]; private z2 = [0, 0];
  set(db: number, frequency: number, sampleRate: number, shelf: boolean) {
    const a = Math.pow(10, db / 40), w = 2 * Math.PI * frequency / sampleRate;
    const c = Math.cos(w), alpha = Math.sin(w) / (2 * .7), root = 2 * Math.sqrt(a) * alpha;
    const a0 = shelf ? (a + 1) + (a - 1) * c + root : 1 + alpha / a;
    this.b0 = (shelf ? a * ((a + 1) - (a - 1) * c + root) : 1 + alpha * a) / a0;
    this.b1 = (shelf ? 2 * a * ((a - 1) - (a + 1) * c) : -2 * c) / a0;
    this.b2 = (shelf ? a * ((a + 1) - (a - 1) * c - root) : 1 - alpha * a) / a0;
    this.a1 = (shelf ? -2 * ((a - 1) + (a + 1) * c) : -2 * c) / a0;
    this.a2 = (shelf ? (a + 1) + (a - 1) * c - root : 1 - alpha / a) / a0;
  }
  sample(input: number, channel: number) {
    const out = this.b0 * input + this.z1[channel];
    this.z1[channel] = this.b1 * input - this.a1 * out + this.z2[channel];
    this.z2[channel] = this.b2 * input - this.a2 * out;
    return out;
  }
}

/** The planner supplies all targets; this runtime mixes the rendered part buffers. */
export function accumulatePortableMix(timeline: MixSceneTimeline, trackId: string, left: Float32Array, right: Float32Array,
  startSample: number, sampleRate: number, outputL: Float32Array, outputR: Float32Array,
  roomL: Float32Array, roomR: Float32Array, echoL: Float32Array, echoR: Float32Array) {
  const state = (scene: MixSceneTimeline['scenes'][number]) => scene.tracks[trackId] ?? neutralTrackMixState();
  const lanes = {
    gain: compileAutomation(timeline, scene => dbToGain(state(scene).gainOffsetDb)),
    bus: compileAutomation(timeline, scene => dbToGain(scene.buses[state(scene).bus].gainOffsetDb)),
    master: compileAutomation(timeline, scene => dbToGain(scene.master.gainOffsetDb)),
    presence: compileAutomation(timeline, scene => state(scene).presenceOffsetDb, 'spectral'),
    body: compileAutomation(timeline, scene => state(scene).bodyOffsetDb, 'spectral'),
    width: compileAutomation(timeline, scene => state(scene).width, 'spatial'),
    pan: compileAutomation(timeline, scene => state(scene).panOffset, 'spatial'),
    room: compileAutomation(timeline, scene => state(scene).reverbSend),
    echo: compileAutomation(timeline, scene => state(scene).delaySend),
  };
  const cursors = Object.fromEntries(Object.keys(lanes).map(key => [key, 0])) as Record<keyof typeof lanes, number>;
  let time = startSample / sampleRate;
  const at = (key: keyof typeof lanes) => {
    const points = lanes[key];
    if (!points.length) return 0;
    let cursor = cursors[key];
    while (cursor + 1 < points.length && points[cursor + 1].time <= time) cursor++;
    cursors[key] = cursor;
    const a = points[cursor], b = points[cursor + 1];
    return !b || time <= a.time ? a.value : a.value + (b.value - a.value) * (time - a.time) / (b.time - a.time);
  };
  const body = new StereoEQ(), presence = new StereoEQ();
  const count = Math.min(left.length, outputL.length - startSample);
  for (let i = 0; i < count; i++) {
    time = (startSample + i) / sampleRate;
    if (i % 64 === 0) { body.set(at('body'), 280, sampleRate, true); presence.set(at('presence'), 2600, sampleRate, false); }
    const l = presence.sample(body.sample(left[i], 0), 0), r = presence.sample(body.sample(right[i], 1), 1);
    const mid = (l + r) / 2, side = (l - r) / 2 * at('width'), pan = at('pan');
    // Same equal-power stereo panning branches as StereoPannerNode.
    let pl: number, pr: number;
    if (pan <= 0) { const angle = (pan + 1) * Math.PI / 2; pl = mid + side + (mid - side) * Math.cos(angle); pr = (mid - side) * Math.sin(angle); }
    else { const angle = pan * Math.PI / 2; pl = (mid + side) * Math.cos(angle); pr = mid - side + (mid + side) * Math.sin(angle); }
    const gain = at('gain') * at('master'), index = startSample + i;
    outputL[index] += pl * gain * at('bus'); outputR[index] += pr * gain * at('bus');
    roomL[index] += pl * gain * at('room'); roomR[index] += pr * gain * at('room');
    echoL[index] += pl * gain * at('echo'); echoR[index] += pr * gain * at('echo');
  }
}

/** Bounded feedback ambience; output safety remains the common mastering layer. */
export function renderPortableAmbience(timeline: MixSceneTimeline, sampleRate: number, outputL: Float32Array,
  outputR: Float32Array, roomL: Float32Array, roomR: Float32Array, echoL: Float32Array, echoR: Float32Array) {
  const character = timeline.scenes[0]?.resolvedMix.contract.character;
  const room = Math.max(1, Math.round(.037 * sampleRate));
  const echo = Math.max(1, Math.round((character?.delayTimeSeconds ?? .32) * sampleRate));
  const ringL = new Float32Array(room), ringR = new Float32Array(room + 137);
  const delayL = new Float32Array(echo), delayR = new Float32Array(echo);
  const wet = compileAutomation(timeline, scene => (1 - scene.resolvedMix.contract.character.dryness) * .65);
  for (let i = 0; i < outputL.length; i++) {
    const il = i % ringL.length, ir = i % ringR.length, ie = i % echo;
    const l = ringL[il], r = ringR[ir], el = delayL[ie], er = delayR[ie];
    ringL[il] = roomL[i] + l * .34; ringR[ir] = roomR[i] + r * .31;
    delayL[ie] = echoL[i] + el * Math.min(.82, character?.delayFeedback ?? .28);
    delayR[ie] = echoR[i] + er * Math.min(.82, character?.delayFeedback ?? .28);
    const amount = automationValueAt(wet, i / sampleRate);
    outputL[i] += l * amount + el * .42; outputR[i] += r * amount + er * .42;
  }
}
