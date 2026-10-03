import { readFileSync } from 'node:fs';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import type { BakedManifest } from '../src/engine/playback/bakedInstruments';
import { frequencyEnergy } from './lib/spectral';
import { writeReport } from './lib/auditReport';

const cases: object[] = [], findings: string[] = [];
for (const def of Object.values(INSTRUMENTS_BY_ID)) {
  if (def.voicing === 'unpitched' || def.drum || def.kit) continue;
  const manifest: BakedManifest = JSON.parse(readFileSync(`public/instrument-banks/${def.id}.json`, 'utf8'));
  const bytes = readFileSync(`public/instrument-banks/${def.id}.pcm`);
  const tones = manifest.samples.filter(s => s.action === 'tone' && s.velocity === 100 && (s.bellowsDirectionCode ?? 1) === 1);
  const targets = [tones[0], tones.reduce((best, s) => Math.abs(s.midi - (def.acousticProfile?.centre ?? 60)) < Math.abs(best.midi - (def.acousticProfile?.centre ?? 60)) ? s : best, tones[0]), tones.at(-1)!];
  for (const sample of [...new Set(targets)]) {
    const pcm = Float32Array.from({ length: Math.min(sample.frames, manifest.sampleRate) }, (_, i) => bytes.readInt16LE((sample.offset + i) * 2) * sample.scale! / 32767);
    const f = 440 * 2 ** ((sample.midi - 69) / 12);
    const end = Math.min(.3, sample.frames / manifest.sampleRate), start = Math.min(.03, end / 4);
    let best = -100, power = 0;
    for (let cents = -100; cents <= 100; cents += 4) {
      const energy = frequencyEnergy(pcm, manifest.sampleRate, f * 2 ** (cents / 1200), start, end);
      if (energy > power) { power = energy; best = cents; }
    }
    const intended = frequencyEnergy(pcm, manifest.sampleRate, f, start, end);
    const quarterStepEnergyRatio = intended / Math.max(1e-30, power);
    // Near a search edge may be a modal/noisy transient or a real tuning fault.
    // Keep it visible for listening review; do not falsely certify such a model.
    if (Math.abs(best) > 40) findings.push(`${def.id}/${sample.midi}: strongest nearby fundamental ${best} cents; investigate by listening/spectrum`);
    cases.push({ instrumentId: def.id, midi: sample.midi, expectedHz: f, nearbyPeakCents: best, intendedEnergyRatio: quarterStepEnergyRatio });
  }
}
writeReport('instrument-pitch', { evidence: 'Dry synthesized low/centre/high references; continuous Hann spectral scan ±100 cents. No inference of perceptual authenticity.',
  status: findings.length ? 'REVIEW' : 'PASS', instruments: new Set(cases.map(c => (c as { instrumentId: string }).instrumentId)).size, probes: cases.length, findings, cases });
console.log(`${findings.length ? 'REVIEW' : 'PASS'} instrument pitch: ${cases.length} probes; ${findings.length} findings; audit/instrument-pitch.json`);
findings.forEach(finding => console.log(finding));
