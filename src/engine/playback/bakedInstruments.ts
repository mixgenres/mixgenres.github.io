import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
/** Portable, dry mono samples; all ensemble mixing remains in the studio. */
export interface BakedSample {
  bellowsDirectionCode?: 1 | 2;
  midi: number;
  velocity: number;
  action: string;
  offset: number;
  frames: number;
  /** Peak normalization used to preserve the source level in compact PCM. */
  scale?: number;
  levelTrim?: number;
  nominalRms?: number;
  nominalPeak?: number;
  loopStart?: number;
  loopEnd?: number;
}
export interface BakedManifest {
  version: 1;
  /** Version 2 banks settle pitch/delay controls before recording attacks. */
  qualityVersion?: 2;
  warmupFrames?: number;
  /** Measured dry-bank trim, compensating for legacy model makeup gains. */
  playbackGain?: number;
  referenceRms?: number;
  referenceMidi?: number;
  calibrationTargetRms?: number;
  calibrationPeakLimit?: number;
  levelsVersion?: 2;
  instrumentId: string;
  sourceHash: string;
  sampleRate: number;
  unpitched: boolean;
  encoding?: 'pcm16';
  samples: BakedSample[];
}
export interface BakedBank { manifest: BakedManifest; pcm: Float32Array }
const banks = new Map<string, Promise<BakedBank | undefined>>();
const retained = new Map<string, number>();
const failures = new Map<string, number>();
const MAX_BYTES = 96 * 1024 * 1024;

export function bakedCalibrationGain(referenceRms: number, makeupGain: number, targetRms = .08): number {
  if (!(Number.isFinite(referenceRms) && referenceRms > 1e-9 && Number.isFinite(makeupGain) && makeupGain > 0 && Number.isFinite(targetRms) && targetRms > 0)) throw new Error('Invalid baked calibration');
  // Velocity-100 reference notes sit near -22 dBFS before role/user gain.
  // Physical-model compensation was calibrated against different transients;
  // multiplying a correctly excited baked string by 30 overloads the studio.
  return targetRms / (referenceRms * makeupGain);
}

export function instrumentBankBaseUrl(): string {
  if (typeof document !== 'undefined') return new URL(`${import.meta.env.BASE_URL}instrument-banks/`, document.baseURI).href;
  return new URL('../../../public/instrument-banks/', import.meta.url).href;
}

export async function loadBakedBank(instrumentId: string, baseUrl = instrumentBankBaseUrl()): Promise<BakedBank | undefined> {
  const key = new URL(`${encodeURIComponent(instrumentId)}.json`, baseUrl).href;
  if ((failures.get(key) ?? 0) > Date.now()) return undefined;
  const cached = banks.get(key);
  if (cached) { const bytes = retained.get(key); if (bytes !== undefined) { retained.delete(key); retained.set(key, bytes); } return cached; }
  const read = async (url: string): Promise<ArrayBuffer> => {
    if (url.startsWith('file:')) {
      // This branch is only used by Node render/export tools. Browser builds
      // fetch public assets, including inside the rendering workers.
      const moduleName = 'node:fs/promises';
      const fs = await import(/* @vite-ignore */ moduleName);
      const bytes: Uint8Array = await fs.readFile(new URL(url));
      return bytes.slice().buffer as ArrayBuffer;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Sample bank HTTP ${response.status}`);
    return response.arrayBuffer();
  };
  const pending = (async () => {
    try {
      const manifest: BakedManifest = JSON.parse(new TextDecoder().decode(await read(key)));
      if (manifest.version !== 1 || manifest.qualityVersion !== 2 || manifest.instrumentId !== instrumentId || ![22050, 44100].includes(manifest.sampleRate) || !manifest.samples.length) throw new Error('Invalid sample bank');
      if (manifest.playbackGain !== undefined && !(Number.isFinite(manifest.playbackGain) && manifest.playbackGain > 0)) throw new Error('Invalid sample calibration');
      const bytes = await read(new URL(`${encodeURIComponent(instrumentId)}.${manifest.encoding === 'pcm16' ? 'pcm' : 'f32'}`, baseUrl).href);
      const pcm = manifest.encoding === 'pcm16' ? new Float32Array(bytes.byteLength / 2) : new Float32Array(bytes);
      for (const s of manifest.samples) {
        if (!Number.isInteger(s.offset) || !Number.isInteger(s.frames) || s.offset < 0 || s.frames < 2 || s.offset + s.frames > pcm.length ||
          !Number.isFinite(s.midi) || !(s.velocity > 0 && s.velocity <= 127) || (s.levelTrim !== undefined && !(Number.isFinite(s.levelTrim) && s.levelTrim > 0)) || (manifest.encoding === 'pcm16' && !(Number.isFinite(s.scale) && s.scale! > 0)) ||
          (s.loopStart !== undefined && (!(s.loopStart >= 0) || !(s.loopEnd! > s.loopStart) || s.loopEnd! > s.frames))) throw new Error('Invalid sample bounds');
      }
      if (manifest.encoding === 'pcm16') {
        const view = new DataView(bytes);
        for (const s of manifest.samples) for (let i = s.offset; i < s.offset + s.frames; i++) pcm[i] = view.getInt16(i * 2, true) * s.scale! / 32767;
      }
      for (const value of pcm) if (!Number.isFinite(value)) throw new Error('Non-finite baked audio');
      retained.set(key, pcm.byteLength);
      let total = [...retained.values()].reduce((a, b) => a + b, 0);
      while (total > MAX_BYTES && retained.size > 1) {
        const oldest = retained.keys().next().value!;
        total -= retained.get(oldest)!; retained.delete(oldest); banks.delete(oldest);
      }
      return { manifest, pcm };
    } catch {
      failures.set(key, Date.now() + 5000); banks.delete(key);
      return undefined;
    }
  })();
  banks.set(key, pending);
  return pending;
}

export function selectBakedSample(bank: BakedBank, midi: number, velocity: number, action: string, bellowsDirectionCode?: 1 | 2): BakedSample | undefined {
  let candidates = bank.manifest.samples;
  if (bank.manifest.instrumentId === 'bandoneon') candidates = candidates.filter(s => (s.bellowsDirectionCode ?? 1) === (bellowsDirectionCode ?? 1));
  if (bank.manifest.unpitched) candidates = candidates.filter(s => s.midi === Math.round(midi));
  const articulated = candidates.filter(s => s.action === action);
  // Dynamics/phrasing can share an attack; a different source technique cannot.
  const toneAliases = new Set(['tone', 'accent', 'ghost', 'staccato', 'legato', 'tenuto', 'sustain', 'arco', 'bow',
    'fingerstyle', 'flatpick', 'pluck', 'slur', 'portato', 'detache', 'montuno', 'guajeo', 'octave-stabs']);
  const sourceChange = /^(arco|bow)$/.test(action) && bank.manifest.instrumentId === 'upright-bass'
    || action === 'pluck' && INSTRUMENTS_BY_ID[bank.manifest.instrumentId]?.family === 'bowed';
  candidates = articulated.length ? articulated : !sourceChange && toneAliases.has(action) ? candidates.filter(s => s.action === 'tone') : [];
  const selected = candidates.reduce<BakedSample | undefined>((best, s) => !best ||
    Math.abs(s.midi - midi) * 128 + Math.abs(s.velocity - velocity) < Math.abs(best.midi - midi) * 128 + Math.abs(best.velocity - velocity) ? s : best, undefined);
  // Wide shifts move body resonances/vowel formants and produce a chipmunk tone.
  return selected && Math.abs(selected.midi - midi) <= 3 ? selected : undefined;
}
