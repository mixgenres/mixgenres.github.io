import type { InstrumentDef, InstrumentKitComponent } from '../../data/instruments/schema/instrument-def';
import type { PerfNote, PerfCC } from '../band/performanceData';
import type { TrackParams, VoiceState } from './elementaryEngine';
import { GUITAR_GENRE_RESPONSE } from '../../data/sound/dsp/genreInstrumentProfiles';

// Shared by playback, WAV and MP3. These are generated acoustic spectra and
// decaying modes, not recorded samples. No sample bank or WASM graph per voice.
export const COMPACT_SOUND_VERSION = 'compact-acoustic-v3';
// Instrument modes run at 22.05 kHz; linear reconstruction produces the same
// 44.1 kHz PCM for every device and export. Tables leave a Nyquist guard band.
const STRIDE = 2;
const SR = 44100, TAU = Math.PI * 2, SIZE = 2048, MASK = SIZE - 1;
type Kind = 'reed' | 'brass' | 'woodwind' | 'bowed' | 'pluck' | 'piano' | 'metal' | 'percussion' | 'organ' | 'voice' | 'synth';
const tables = new Map<string, Float32Array>();
let notesRendered = 0, renderMs = 0;
export const compactInstrumentStats = () => ({ notesRendered, renderMs, tableBytes: tables.size * SIZE * 4 });
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));
const hash = (s: string) => { let n = 2166136261; for (let i = 0; i < s.length; i++) n = Math.imul(n ^ s.charCodeAt(i), 16777619); return n >>> 0; };
// Random access noise makes seeking/cropping reproduce the full render without
// replaying the instrument from its attack. Every note owns a stable excitation.
function noise(sample: number, seed: number) {
  let x = Math.imul((sample + seed) | 0, 0x45d9f3b); x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  return ((x ^ (x >>> 16)) >>> 0) / 2147483648 - 1;
}
function kindOf(def: InstrumentDef, voice: VoiceState): Kind {
  const id = def.id;
  if (voice.mechanics?.pitchIdentity === 'unpitched' || def.kit || def.drum || /drums|percussion/.test(def.family)) return 'percussion';
  if (/piano|harpsichord|clavinet|rhodes/.test(id)) return 'piano';
  if (/organ/.test(id)) return 'organ';
  if (def.family === 'bowed') return /pluck|pizz/.test(voice.action ?? '') ? 'pluck' : 'bowed';
  if (def.family === 'brass') return 'brass';
  if (def.family === 'winds') return 'woodwind';
  if (def.family === 'free-reed' || def.family === 'bellows-and-keys') return 'reed';
  if (def.family === 'plucked' || def.family === 'plucked-string') return 'pluck';
  if (def.family === 'metal-and-wood') return 'metal';
  if (def.family === 'voice') return 'voice';
  return 'synth';
}
function voiceEnvelope(kind: Kind, def: InstrumentDef, sounding: TrackParams, voice: VoiceState, component?: InstrumentKitComponent) {
  const action = voice.action ?? 'tone', unpitched = kind === 'percussion';
  const short = /choke|mute|chapa|tapao|heel|toe|ghost|short-chord-stab|offbeat-skank/.test(action) || sounding.mute > .4 || (voice.mechanics?.damping ?? 0) > .5;
  const struck = ['pluck', 'piano', 'metal', 'percussion'].includes(kind);
  let decay = unpitched ? (short ? .045 : component?.decayTimeSec ?? (/conga|tumba/.test(def.id) ? .48 : .22))
    : kind === 'piano' ? 1.8 + clamp(sounding.decay, 0, 5) * .8 : kind === 'metal' ? 1.1 + clamp(sounding.decay, 0, 5) * .6
    : .35 + clamp(sounding.decay, 0, 5) * .32;
  if (kind === 'pluck') {
    const response = def.id === 'guitar' ? GUITAR_GENRE_RESPONSE[sounding.genreId ?? ''] : undefined;
    if (response) decay = response.targetDecayBase + sounding.decay * response.targetDecayTime;
    if (short) decay = Math.min(decay, .16);
    decay *= voice.decayTimeFactorScale ?? 1;
  }
  const release = kind === 'synth' && sounding.synthPatch ? Math.max(.035, sounding.synthPatch.releaseSeconds) : kind === 'piano' || /vibraphone/.test(def.id) ? .09 : short ? .035
    : struck ? decay : clamp(voice.release ?? .12, .035, .6);
  const tail = struck && kind !== 'piano' && !/vibraphone/.test(def.id) ? Math.min(6, decay * 1.7) : release * 1.7;
  const attack = unpitched ? .0005 : struck ? .001 : /staccato|tongue|accent|marcato/.test(action) ? .002
    : kind === 'bowed' ? .035 : kind === 'synth' ? sounding.synthPatch?.attackSeconds ?? .009 : .009;
  return { short, struck, decay, release, tail, attack };
}
export function compactVoiceTailSeconds(def: InstrumentDef, params: TrackParams, voice: VoiceState) {
  return voiceEnvelope(kindOf(def, voice), def, params, voice, def.kitComponents?.find(c => c.midi === voice.note)).tail;
}
function harmonic(def: InstrumentDef, kind: Kind, h: number, hz: number, bright: number, params: TrackParams, harmonicTone = false) {
  let value = 1 / Math.pow(h, 1.25 + (1 - bright) * 1.4);
  if (kind === 'woodwind') value = /clarinet/.test(def.id) ? value * (h % 2 ? 1 : .08)
    : /flute|quena|siku|recorder|ocarina/.test(def.id) ? Math.pow(.24 + bright * .12, h - 1) : value;
  if (kind === 'reed') value *= def.id === 'bandoneon' ? (h === 2 ? 1.4 : h % 2 ? .72 : .9) : h % 2 ? 1 : .6;
  if (kind === 'brass') value *= Math.pow(h, .65 + bright * .5) * Math.exp(-h / (4 + bright * 11));
  if (kind === 'organ') value = [0, 1, .6, .25, .35, .12, .08, .08, .15][h] ?? 0;
  if (kind === 'voice') value *= .5;
  if (kind === 'synth') {
    const wave = params.synthPatch?.oscillator ?? 'saw';
    value = wave === 'sine' ? h === 1 ? 1 : 0 : wave === 'triangle' ? h % 2 ? (h % 4 === 1 ? 1 : -1) / (h * h) : 0
      : wave === 'square' ? h % 2 ? 1 / h : 0 : wave === 'noise' ? 0 : wave === 'hybrid' ? (h % 2 ? 1 : .45) / h : 1 / h;
    const patch = params.synthPatch;
    if (patch) {
      const ratio = hz / Math.max(20, patch.cutoffHz);
      const low = 1 / Math.sqrt(1 + ratio ** 4);
      value *= patch.filter === 'highpass' ? 1 - low : patch.filter === 'bandpass' ? low * ratio : low;
      value *= 1 + patch.resonance * 1.5 / (1 + ((ratio - 1) * 5) ** 2);
    }
  }
  // Instrument-specific mouthpiece/bore/vowel/body formants are applied once
  // to the generated spectrum, instead of running filters per sample/voice.
  const bowed = def.bowedResonance;
  if (kind === 'bowed' && bowed) {
    for (const [centre, q, gain] of [[bowed.bodyFreq, bowed.bodyQ, bowed.bodyGain],
      [bowed.bridgeHillFreq, bowed.bridgeHillQ, bowed.bridgeHillGain]]) {
      const distance = (hz - centre) / Math.max(60, centre / Math.max(1, q));
      value *= 1 + gain / (1 + distance * distance);
    }
  }
  if (kind === 'pluck') {
    value *= .55 + .45 * Math.abs(Math.sin(Math.PI * h * (params.pluckPosition ?? .28)));
    if (harmonicTone) value *= h === 1 ? 1 : .12 / h;
    const construction = params.bodyConstruction;
    const centres = construction === 'solid-electric' ? [450, 2400] : construction === 'skin-faced' ? [420, 890, 1650]
      : construction === 'gourd' ? [280, 640, 1250] : construction === 'board' ? [135, 270, 520] : [100, 220, 380];
    for (const centre of centres) value *= 1 + (.18 + params.body * .2) / (1 + ((hz - centre) / (centre * .3)) ** 2);
  }
  const formants = def.formantProfile;
  if (formants && ['brass', 'woodwind', 'reed', 'voice'].includes(kind)) {
    let body = .65;
    for (const band of [formants.f1, formants.f2, formants.f3]) if (band) {
      const distance = (hz - band.freq) / Math.max(80, band.freq / Math.max(1, band.q));
      body += band.gain / (1 + distance * distance);
    }
    value *= body;
  }
  return value;
}
function waveTable(def: InstrumentDef, kind: Kind, freq: number, brightness: number, params: TrackParams, harmonicTone = false) {
  const bright = Math.round(clamp(brightness, 0, 1) * 8) / 8;
  // Quantized pitch bands share small tables. The upper band edge sets the
  // harmonic limit, leaving room for expressive bends without Nyquist aliases.
  const band = Math.ceil(Math.log2(freq / 20) * 3), upper = 20 * Math.pow(2, band / 3);
  const key = `${def.id}:${kind}:${band}:${bright}:${params.synthPatchId ?? ''}:${params.variantId ?? ''}:${params.bodyConstruction}:${Math.round(params.body*8)}:${harmonicTone}:${kind === 'pluck' ? Math.round((params.pluckPosition ?? .28) * 16) : ''}`;
  const found = tables.get(key); if (found) return found;
  const out = new Float32Array(SIZE), harmonics = Math.max(1, Math.min(48, Math.floor((SR / STRIDE) * .45 / (upper * 1.35))));
  for (let h = 1; h <= harmonics; h++) {
    const gain = harmonic(def, kind, h, h * upper, bright, { ...params, body: Math.round(params.body*8)/8, pluckPosition: Math.round((params.pluckPosition ?? .28) * 16) / 16 }, harmonicTone);
    if (!gain) continue;
    const step = TAU * h / SIZE, a = 2 * Math.cos(step);
    let y = 0, z = -Math.sin(step);
    for (let i = 0; i < SIZE; i++) { out[i] += gain * y; const next = a * y - z; z = y; y = next; }
  }
  let peak = 0; for (const value of out) peak = Math.max(peak, Math.abs(value));
  if (peak) for (let i = 0; i < SIZE; i++) out[i] *= .65 / peak;
  tables.set(key, out); if (tables.size > 192) tables.delete(tables.keys().next().value!);
  return out;
}
function readTable(table: Float32Array, phase: number) {
  const p = phase * SIZE, a = Math.floor(p), frac = p - a;
  return table[a & MASK] * (1 - frac) + table[(a + 1) & MASK] * frac;
}
interface PitchPoint { time: number; hz: number; cycles: number }
function pitchPlan(note: PerfNote, voice: VoiceState, freq: number): PitchPoint[] {
  const action = voice.action ?? '', held = Math.max(.01, note.dur);
  const points = [{ time: 0, hz: freq, cycles: 0 }];
  if (!note.pitchBend?.length && /^(fall|drop|doit|rip|rip-up)$/.test(action)) {
    points.push({ time: held * .55, hz: freq, cycles: 0 },
      { time: held, hz: freq * Math.pow(2, (/fall|drop/.test(action) ? -5 : 4) / 12), cycles: 0 });
  } else if (!note.pitchBend?.length && action === 'bend') {
    points.push({time:Math.min(.15,held*.5),hz:freq*2**(2/12),cycles:0});
  } else if (!note.pitchBend?.length && /slide|glissando/.test(action)) {
    points[0].hz *= 2**(-2/12);points.push({time:Math.min(.09,held*.5),hz:freq,cycles:0});
  } else if (!note.pitchBend?.length && action === 'scoop') { points[0].hz *= .96; points.push({ time: .045, hz: freq, cycles: 0 }); }
  for (const bend of note.pitchBend ?? []) points.push({ time: Math.max(0, bend.offset), hz: freq * Math.pow(2, (bend.value - 8192) / 8192 * 2 / 12), cycles: 0 });
  points.sort((a, b) => a.time - b.time);
  for (let i = 1; i < points.length; i++) points[i].cycles = points[i - 1].cycles +
    (points[i].time - points[i - 1].time) * (points[i].hz + points[i - 1].hz) / 2;
  return points;
}
function pitchAt(points: PitchPoint[], time: number) {
  let i = 0; while (i + 1 < points.length && points[i + 1].time <= time) i++;
  const a = points[i], b = points[i + 1], t = time - a.time;
  const slope = b && b.time > a.time ? (b.hz - a.hz) / (b.time - a.time) : 0;
  return { cycles: a.cycles + t * a.hz + t * t * slope / 2, hz: a.hz + t * slope };
}
interface Mode { ratio: number; gain: number; decay: number }
function modesFor(kind: Kind, def: InstrumentDef, component: InstrumentKitComponent | undefined, action: string, brightness: number): Mode[] {
  if (kind === 'piano') return Array.from({ length: 8 }, (_, i) => ({ ratio: (i + 1) * Math.sqrt(1 + .00018 * (i + 1) ** 2),
    gain: Math.pow(.86 + brightness * .1, i) / Math.pow(i + 1, 1.6), decay: 1 / (1 + i * .35) }));
  if (kind === 'metal') {
    const ratios = /marimba|balafon|xylophone/.test(def.id) ? [1, 4, 9.2, 16] : /steel-drums|vibraphone/.test(def.id) ? [1, 2, 3, 4.1] : [1, 2.756, 5.404, 8.933];
    return ratios.map((ratio, i) => ({ ratio, gain: [1, .35, .16, .08][i], decay: 1 / (1 + i * .5) }));
  }
  const skin = component?.physicalType === 'membrane' || /conga|tumba|bongo|tabla|darbuka|djembe|tom|timpani|taiko/.test(def.id);
  const ratios = skin ? [1, 1.593, 2.136, 2.296, 2.653] : component?.physicalType === 'metal' ? [1, 1.48, 2.13, 2.77, 4.12] : [1, 1.83, 2.71];
  const slap = /slap|rim|tapao/.test(action);
  return ratios.map((ratio, i) => ({ ratio, gain: (slap ? [.3, .75, .65, .4, .25] : [1, .42, .22, .15, .08])[i], decay: 1 / (1 + i * .55) }));
}
function ccValue(controls: Map<number, PerfCC[]>, cc: number, time: number, fallback: number) {
  const lane = controls.get(cc); if (!lane?.length) return fallback;
  let lo = 0, hi = lane.length;
  while (lo < hi) { const mid = (lo + hi) >>> 1; if (lane[mid].time <= time) lo = mid + 1; else hi = mid; }
  return lo ? lane[lo - 1].value / 127 : fallback;
}

/** Synthesize one centred physical part, including authored controller state.
 * Output can start inside a hold/decay with no attack replay or state snapshots. */
export async function renderCompactTrack(notes: PerfNote[], ccs: PerfCC[], def: InstrumentDef, params: TrackParams,
  fromSample: number, toSample: number, voices: VoiceState[], signal?: AbortSignal, yieldForUI = true) {
  const began = performance.now(), left = new Float32Array(toSample - fromSample), right = new Float32Array(left.length);
  ccs = [...ccs].sort((a, b) => a.time - b.time);
  const controls = new Map<number, PerfCC[]>();
  for (const event of ccs) { const lane = controls.get(event.cc) ?? []; lane.push(event); controls.set(event.cc, lane); }
  let lastYield = began;
  for (let ni = 0; ni < notes.length; ni++) {
    if (signal?.aborted) throw new DOMException('Synthesis cancelled', 'AbortError');
    if (yieldForUI && performance.now() - lastYield > 12) { await new Promise<void>(r => setTimeout(r, 0)); lastYield = performance.now(); }
    const note = notes[ni], voice = voices[ni], sounding = { ...params, ...voice.soundParams };
    const kind = kindOf(def, voice), action = voice.action ?? 'tone';
    const component = def.kitComponents?.find(c => c.id === note.percussion?.componentId || c.midi === note.midi);
    const unpitched = kind === 'percussion';
    const harmonicTone = kind === 'pluck' && /harmonic/.test(action);
    if (voice.mechanics?.pluckPosition !== undefined) sounding.pluckPosition = voice.mechanics.pluckPosition;
    const repeatPeriod = kind === 'pluck' ? /rasgueado|abanico/.test(action) ? .018 : action === 'alzapua' ? .045
      : /tremolo|tremolo-picking/.test(action) ? .095 : 0 : 0;
    const repeatCount = /rasgueado|abanico/.test(action) ? 4 : action === 'alzapua' ? 3 : Infinity;
    const exciter = voice.excitationType ?? sounding.excitationType;
    const pickNoise = kind === 'pluck' ? /hammer-on|pull-off/.test(action) ? .002 : exciter === 'nail' ? .04
      : /pick|plectrum/.test(exciter ?? '') ? .035 : .012 : 0;
    const electric = kind === 'pluck' && sounding.bodyConstruction === 'solid-electric';
    const drive = electric ? clamp(sounding.drive,0,1)*3 : 0;
    const doubled = kind === 'pluck' && (sounding.courses ?? 1) > 1;

    const freq = unpitched ? component?.tuningHz ?? (voice.bodyAttack ? 115 : /kick|bass|heel/.test(action) ? 75 : 180)
      : note.frequencyHz ?? voice.frequencyHz ?? 440 * Math.pow(2, (note.midi - 69) / 12);
    const bright = clamp(sounding.brightness * (.65 + voice.velocity * .5) + (voice.harmonicRichnessDelta ?? 0), 0, 1);
    const { short, struck, decay, release, tail, attack } = voiceEnvelope(kind, def, sounding, voice, component);
    const held = Math.max(1 / SR, note.dur);
    const start = Math.round(note.time * SR), naturalEnd = Math.ceil((note.time + held + tail) * SR), end = Math.min(toSample, naturalEnd);
    const first = Math.max(fromSample, start); if (end <= first) continue;
    notesRendered++;
    const seed = hash(unpitched ? `${note.trackId}:${action}:${voice.velocity}` : note.notationEventId ?? note.physical?.key ?? `${note.trackId}:${note.midi}:${voice.velocity}`);
    const pan = clamp(component?.defaultPan ?? .5, 0, 1), gl = Math.cos(pan * Math.PI / 2), gr = Math.sin(pan * Math.PI / 2);
    const velocity = Math.max(0, voice.velocity), level = params.volume * velocity * (component?.gainTrimDb !== undefined ? Math.pow(10, component.gainTrimDb / 20) : 1);
    const direction = kind === 'reed' && def.id === 'bandoneon' ? voice.bellowsDirectionCode === 2 ? 1.06 : .96 : 1;
    let table = struck ? undefined : waveTable(def, kind, freq, bright, sounding, harmonicTone);
    let bodyTable = !struck && ['brass', 'reed', 'bowed'].includes(kind) ? waveTable(def, kind, freq, bright * .72, sounding) : undefined;
    let pluckBright = kind === 'pluck' ? waveTable(def, kind, freq, bright, sounding, harmonicTone) : undefined;
    let pluckDark = kind === 'pluck' ? waveTable(def, kind, freq, .05, sounding, harmonicTone) : undefined;
    const modes = ['piano', 'metal', 'percussion'].includes(kind) ? modesFor(kind, def, component, action, bright) : [];
    const blockStart = start + Math.floor((first - start) / 64) * 64;
    const age = (blockStart - start) / SR;
    const states = modes.filter(m => freq * m.ratio < (SR / STRIDE) * .45).map(mode => {
      const w = TAU * freq * mode.ratio * STRIDE / SR, radius = Math.exp(-Math.log(1000) / (Math.max(.02, decay * mode.decay) * SR / STRIDE));
      return { w, radius, a: 2 * radius * Math.cos(w), b: radius * radius, gain: mode.gain,
        y: Math.sin(w * (blockStart - start) / STRIDE) * Math.pow(radius, (blockStart - start) / STRIDE),
        z: Math.sin(w * ((blockStart - start) / STRIDE - 1)) * Math.pow(radius, (blockStart - start) / STRIDE - 1) };
    });
    const points = pitchPlan(note, voice, freq), vibrato = /vibrato|shake/.test(action) || kind === 'bowed' && held > .3;
    const rate = action === 'shake' ? 7.2 : kind === 'reed' ? 5.2 : 5.6;
    const depth = action === 'shake' ? .035 : .0035;
    const vibPhase = TAU * rate * age, vw = TAU * rate * STRIDE / SR, va = 2 * Math.cos(vw);
    let vy = Math.sin(vibPhase), vz = Math.sin(vibPhase - vw);
    let envelope = Math.exp(-Math.log(1000) * age / Math.max(.02, decay));
    const envelopeStep = Math.exp(-Math.log(1000) * STRIDE / (Math.max(.02, decay) * SR));
    let damping = age > held ? Math.exp(-Math.log(1000) * (age - held) / release) : 1;
    const dampingStep = Math.exp(-Math.log(1000) * STRIDE / (release * SR));
    let chiff = Math.exp(-age / (unpitched ? .012 : .006)), chiffStep = Math.exp(-STRIDE / (SR * (unpitched ? .012 : .006)));
    let timbre = Math.exp(-age / .075), timbreStep = Math.exp(-STRIDE / (SR * .075));
    let controlledBrightness = sounding.brightness, pluckPosition = sounding.pluckPosition, bowGain = 1;
    let patchDecay = 1;
    const patch = kind === 'synth' ? sounding.synthPatch : undefined;
    const patchStep = patch ? Math.exp(-STRIDE / (SR * Math.max(.001, patch.decaySeconds))) : 1;
    let expression = 1, authoredPan = .5, mute = sounding.mute, pressure = sounding.pressure;
    const skin = component?.physicalType === 'membrane' || /conga|tumba|bongo|tabla|tom|kick|taiko/.test(`${component?.id ?? def.id}:${action}`);
    const hiss = /hat|cymbal|shaker|maraca|snare|brush/.test(`${component?.id ?? def.id}:${action}`);
    const slap = /slap|rim|tapao/.test(`${component?.id ?? def.id}:${action}`);
    const air = ['brass', 'woodwind', 'reed', 'bowed', 'voice'].includes(kind) ? .003 * (1 - bright * .4) : 0;
    const damped = !struck || kind === 'piano' || /vibraphone/.test(def.id) || short;
    const swellGesture = action === 'arrastre' || action === 'legato_squeeze';
    const accentGesture = /marcato|accent|tongue/.test(action);
    const airDriven = ['brass', 'reed', 'woodwind'].includes(kind);
    const buttonGain = kind === 'reed' ? .94 + .06 * ((voice.bandoneonButtonIndex ?? 0) % 7) / 6 : 1;
    let previousLeft = 0, previousRight = 0;
    for (let frame = blockStart; frame < end + STRIDE; frame += STRIDE) {
      const t = (frame - start) / SR;
      if ((frame - start) % 64 === 0) {
        // Canonical note-relative blocks make random-access windows sample
        // identical to the full render; reconstruct at most 63 preceding frames.
        for (const state of states) {
          state.y = Math.sin(state.w * (frame - start) / STRIDE) * Math.pow(state.radius, (frame - start) / STRIDE);
          state.z = Math.sin(state.w * ((frame - start) / STRIDE - 1)) * Math.pow(state.radius, (frame - start) / STRIDE - 1);
        }
        const exciterAge = repeatPeriod ? t - Math.max(0,Math.min(repeatCount-1,Math.ceil(held/repeatPeriod)-1,Math.floor(t/repeatPeriod))) * repeatPeriod : t;
        envelope = Math.exp(-Math.log(1000) * exciterAge / Math.max(.02, decay));
        damping = t > held ? Math.exp(-Math.log(1000) * (t - held) / release) : 1;
        chiff = Math.exp(-exciterAge / (unpitched ? .012 : .006)); timbre = Math.exp(-exciterAge / .075);
        vy = Math.sin(TAU * rate * t); vz = Math.sin(TAU * rate * t - vw);
        const now = frame / SR;
        expression = ccValue(controls, 7, now, 1) * ccValue(controls, 11, now, 1);
        pressure = ccValue(controls, 24, now, sounding.pressure);
        authoredPan = ccValue(controls, 10, now, .5); mute = ccValue(controls, 18, now, sounding.mute);
        const brightness = ccValue(controls, 74, now, sounding.brightness);
        const position = ccValue(controls, 22, now, sounding.pluckPosition ?? .28);
        if (brightness !== controlledBrightness || kind === 'pluck' && position !== pluckPosition) {
          controlledBrightness = brightness; pluckPosition = position;
          const changed = { ...sounding, pluckPosition: position };
          const colour = clamp(brightness * (.65 + voice.velocity * .5) + (voice.harmonicRichnessDelta ?? 0), 0, 1);
          if (!struck) table = waveTable(def, kind, freq, colour, changed, harmonicTone);
          if (bodyTable) bodyTable = waveTable(def, kind, freq, colour * .72, changed);
          if (kind === 'pluck') { pluckBright = waveTable(def, kind, freq, colour, changed, harmonicTone); pluckDark = waveTable(def, kind, freq, .05, changed, harmonicTone); }
        }
        if (kind === 'bowed') bowGain = .65 + .35 * ccValue(controls, 19, now, sounding.bowPressure);
        if (patch) patchDecay = Math.exp(-Math.max(0, Math.min(t, held) - attack) / Math.max(.001, patch.decaySeconds));
      }
      const pitch = points.length > 1 ? pitchAt(points, t) : undefined;
      // Absolute phase integration permits a window to start inside an authored
      // fall/bend. Vibrato is a phase modulation with delayed acoustic onset.
      const p = pitch?.cycles ?? t * freq;
      const vib = vibrato ? (depth * freq / (TAU * rate)) * Math.min(1, Math.max(0, t - .1) / .18) * vy : 0;
      let sample = table ? readTable(table, p - vib) : 0;
      if (bodyTable) sample = sample * (.25 + .75 * timbre) + readTable(bodyTable, p - vib) * (.75 - .75 * timbre);
      if (kind === 'pluck') {
        const phase = p - vib;
        sample = (readTable(pluckBright!, phase) * timbre + readTable(pluckDark!, phase) * (1 - timbre)) * envelope;
        if (doubled) sample = sample * .7 + readTable(pluckDark!, phase * 1.00277) * envelope * .3;
        if (drive) sample = sample * (1 + drive) / (1 + drive * Math.abs(sample));
      }
      if (states.length) {
        sample = 0; for (const state of states) {
          sample += state.y * state.gain; const next = state.a * state.y - state.b * state.z; state.z = state.y; state.y = next;
        }
        sample *= kind === 'piano' ? .3 : unpitched ? .45 : .42;
      }
      const n = noise(frame - start, seed), hp = n - noise(frame - start - STRIDE, seed);
      if (patch) {
        if (patch.oscillator === 'noise') sample = hp * .2;
        else if ((patch.unison ?? 1) > 1) sample = sample * .65 + readTable(table!, p * 1.003) * .175 + readTable(table!, p * .997) * .175;
        sample = (sample + hp * (patch.noise ?? 0) * .15) * (patch.sustain + (1 - patch.sustain) * patchDecay);
        const drive = (patch.saturation ?? 0) * 3;
        if (drive) sample = sample * (1 + drive) / (1 + drive * Math.abs(sample));
      }
      if (unpitched) {
        sample += (hiss ? hp * .22 * envelope : n * chiff * (skin ? slap ? .6 : .12 : .28));
      } else {
        sample += hp * (air + chiff * (kind === 'piano' ? .015 : kind === 'reed' ? .012 : kind === 'pluck' ? pickNoise : .025));
        if (action === 'growl') sample *= 1 + .22 * noise(Math.floor(t * 180), seed ^ 17);
      }
      const attackGain = Math.min(1, (patch ? Math.min(t, held) : t) / Math.max(1 / SR, attack));
      if (damped && t > held) sample *= damping;
      if (!struck) {
        const swell = swellGesture ? .7 + .3 * Math.min(1, t / .1) : 1;
        const accent = accentGesture ? 1 + .22 * timbre : 1;
        sample *= direction * buttonGain * swell * accent * (airDriven ? .75 + .5 * pressure : 1) * (action === 'tremolo' ? .8 + .2 * vy : 1);
      }
      if (voice.bodyAttack && t < .1) sample += .22 * Math.sin(TAU * 115 * t) * Math.exp(-t / .015) + .06 * hp * chiff;
      sample *= level * expression * bowGain * attackGain * (1 - .65 * mute);
      const fade = clamp((naturalEnd - frame) / 128, 0, 1); sample *= fade;
      const at = frame - fromSample;
      const currentLeft = sample * gl * Math.SQRT2 * Math.min(1, (1 - authoredPan) * 2);
      const currentRight = sample * gr * Math.SQRT2 * Math.min(1, authoredPan * 2);
      if (frame > blockStart && at - 1 >= 0 && frame - 1 < end) {
        left[at - 1] += (previousLeft + currentLeft) * .5;
        right[at - 1] += (previousRight + currentRight) * .5;
      }
      if (at >= 0 && frame < end) { left[at] += currentLeft; right[at] += currentRight; }
      previousLeft = currentLeft; previousRight = currentRight;
      const vn = va * vy - vz; vz = vy; vy = vn;
      envelope *= envelopeStep; if (t >= held) damping *= dampingStep;
      chiff *= chiffStep; timbre *= timbreStep; if (patch && t >= attack && t < held) patchDecay *= patchStep;
    }
  }
  renderMs += performance.now() - began;
  return { left, right, startSample: fromSample };
}
