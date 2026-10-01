import type { PerfNote } from '../../src/engine/band/performanceData.ts';

export interface AudioFeatures {
  sampleRate: number;
  channels: number;
  durationSec: number;
  truePeak: number;
  clippedSamples: number;
  dcOffset: number;
  silenceRatio: number;
  crestFactorDb: number;
  spectralCentroidHz: number;
  spectralRolloffHz: number;
  spectralFlatness: number;
  bands: Record<string, number>;
  stereoCorrelation: number;
  stereoWidth: number;
}

function db(x: number): number { return x > 0 ? 20 * Math.log10(x) : -Infinity; }
/** Lightweight deterministic spectral analysis; no native DSP dependency beyond ffmpeg PCM decoding. */
export function analyzePcm(interleaved: Float32Array, sampleRate: number, channels: number): AudioFeatures {
  const frames = Math.floor(interleaved.length / channels);
  const mono = new Float32Array(frames);
  let peak = 0, sum = 0, nonSilent = 0, energy = 0;
  for (let i = 0; i < frames; i++) {
    let v = 0;
    for (let c = 0; c < channels; c++) v += interleaved[i * channels + c];
    v /= channels; mono[i] = v;
    const a = Math.abs(v); peak = Math.max(peak, a); sum += v; energy += v * v;
    if (a > 0.0005) nonSilent++;
  }
  const mean = frames ? sum / frames : 0;
  const monoRms = frames ? Math.sqrt(energy / frames) : 0;
  const window = Math.min(4096, 1 << Math.floor(Math.log2(Math.max(64, Math.min(frames || 64, 4096)))));
  const start = Math.max(0, Math.floor((frames - window) / 2));
  let weighted = 0, spectralPower = 0, geometric = 0, arithmetic = 0;
  const spectrum: number[] = [];
  for (let k = 0; k <= window / 2; k++) {
    let re = 0, im = 0;
    const omega = (2 * Math.PI * k) / window;
    for (let n = 0; n < window; n += 4) {
      const sample = mono[start + n] ?? 0;
      const w = 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / Math.max(1, window - 1));
      const a = sample * w; re += a * Math.cos(omega * n); im -= a * Math.sin(omega * n);
    }
    const p = re * re + im * im + 1e-18;
    spectrum.push(p); const hz = k * sampleRate / window; weighted += hz * p; spectralPower += p;
    arithmetic += p; geometric += Math.log(p);
  }
  const centroid = spectralPower ? weighted / spectralPower : 0;
  let cumulative = 0, rolloff = 0;
  for (let k = 0; k < spectrum.length; k++) { cumulative += spectrum[k]; if (cumulative >= spectralPower * 0.85) { rolloff = k * sampleRate / window; break; } }
  const flatness = arithmetic > 0 ? Math.exp(geometric / spectrum.length) / (arithmetic / spectrum.length) : 0;
  const bands: Record<string, number> = {};
  const ranges: Record<string, [number, number]> = { sub:[20,60], low:[60,250], lowMid:[250,500], mid:[500,2000], upperMid:[2000,6000], presence:[6000,12000], air:[12000,20000] };
  for (const [name, [lo, hi]] of Object.entries(ranges)) {
    let e = 0;
    for (let k = 0; k < spectrum.length; k++) { const hz = k * sampleRate / window; if (hz >= lo && hz < hi) e += spectrum[k]; }
    bands[name] = spectralPower ? e / spectralPower : 0;
  }
  let corr = 1, width = 0;
  if (channels >= 2) {
    let ll = 0, rr = 0, lr = 0, l2 = 0, r2 = 0;
    for (let i = 0; i < frames; i++) { const l=interleaved[i*channels]??0, r=interleaved[i*channels+1]??0; ll+=l; rr+=r; lr+=l*r; l2+=l*l; r2+=r*r; }
    const n = Math.max(1, frames); const ml=ll/n, mr=rr/n; const cov=lr/n-ml*mr; const vl=l2/n-ml*ml; const vr=r2/n-mr*mr;
    corr = Math.max(-1, Math.min(1, cov / Math.sqrt(Math.max(1e-12, vl*vr))));
    width = 1 - Math.abs(corr);
  }
  return { sampleRate, channels, durationSec: frames / sampleRate, truePeak: peak, clippedSamples: [...mono].filter(x => Math.abs(x) >= 0.999).length, dcOffset: mean, silenceRatio: frames ? 1 - nonSilent / frames : 1, crestFactorDb: db(monoRms ? peak / monoRms : 0), spectralCentroidHz: centroid, spectralRolloffHz: rolloff, spectralFlatness: flatness, bands, stereoCorrelation: corr, stereoWidth: width };
}

export function scheduledEnergyBySecond(notes: PerfNote[], durationSec: number): number[] {
  const seconds = Math.max(1, Math.ceil(durationSec));
  const out = Array.from({ length: seconds }, () => 0);
  for (const note of notes) { const i = Math.min(seconds - 1, Math.max(0, Math.floor(note.time))); out[i] += Math.max(0, note.vel) / 127; }
  return out;
}

export function interOnsetCv(notes: PerfNote[]): number {
  const onsets = [...new Set(notes.map(n => n.time).sort((a,b)=>a-b))];
  if (onsets.length < 4) return 0;
  const gaps = onsets.slice(1).map((x,i)=>x-onsets[i]);
  const mean = gaps.reduce((a,b)=>a+b,0)/gaps.length;
  const variance = gaps.reduce((a,b)=>a+(b-mean)**2,0)/gaps.length;
  return mean ? Math.sqrt(variance)/mean : 0;
}
