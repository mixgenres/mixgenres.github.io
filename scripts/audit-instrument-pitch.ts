import OfflineRenderer from '@elemaudio/offline-renderer';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { midiToFreq, renderVoice } from '../src/engine/playback/elementaryEngine';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { codeForGesture } from '../src/engine/band/gestures';
import { frequencyEnergy, rms } from './lib/spectral';
import { writeReport } from './lib/auditReport';

const cases: object[] = [], findings: string[] = [];
const sampleRate = 44100;
const instrumentId = process.argv.find(arg => arg.startsWith('--instrument='))?.slice(13);
if (instrumentId && !INSTRUMENTS_BY_ID[instrumentId]) throw new Error(`Unknown instrument: ${instrumentId}`);
async function renderReference(id: string, midi: number) {
  const renderer = new OfflineRenderer();
  await renderer.initialize({ sampleRate, numInputChannels: 0, numOutputChannels: 1, blockSize: 64 });
  try {
    const params = resolveTrackSound(id);
    const voice = prepareNoteVoice({ trackId: 'pitch-audit', time: 0, dur: 1, midi, vel: 100, bar: 0,
      gestureCode: codeForGesture('tone'), hitFunctionCode: 0, accent: 0 }, params, '', '');
    voice.velocity = 100 / 127;
    voice.gate = 0;
    await renderer.render(renderVoice('pitch-audit', 0, voice, params));
    renderer.process([], [new Float32Array(8192)]);
    voice.gate = 1;
    await renderer.render(renderVoice('pitch-audit', 0, voice, params));
    const pcm = new Float32Array(Math.ceil(sampleRate / 64) * 64);
    renderer.process([], [pcm]);
    if (pcm.some(value => !Number.isFinite(value))) throw new Error(`${id}/${midi}: non-finite audio`);
    if (!pcm.some(value => Math.abs(value) > 1e-9)) throw new Error(`${id}/${midi}: silent audio`);
    return pcm;
  } finally { renderer.reset(); }
}
for (const def of Object.values(INSTRUMENTS_BY_ID)) {
  if (instrumentId && def.id !== instrumentId) continue;
  if (def.voicing === 'unpitched' || def.drum || def.kit) continue;
  const low = Math.ceil(def.tuningAndMechanics?.keyRange?.lowMidi ?? def.acousticProfile?.low ?? 36);
  const high = Math.floor(def.tuningAndMechanics?.keyRange?.highMidi ?? def.acousticProfile?.high ?? 84);
  const targets = [...new Set([low, Math.max(low, Math.min(high, Math.round(def.acousticProfile?.centre ?? 60))), high])];
  for (const midi of targets) {
    const pcm = await renderReference(def.id, midi);
    const f = midiToFreq(midi);
    const end = .3, start = .03;
    let best = -100, power = 0;
    for (let cents = -100; cents <= 100; cents += 4) {
      const energy = frequencyEnergy(pcm, sampleRate, f * 2 ** (cents / 1200), start, end);
      if (energy > power) { power = energy; best = cents; }
    }
    const intended = frequencyEnergy(pcm, sampleRate, f, start, end);
    const quarterStepEnergyRatio = intended / Math.max(1e-30, power);
    // Near a search edge may be a modal/noisy transient or a real tuning fault.
    // Keep it visible for listening review; do not falsely certify such a model.
    let attackEvidence;
    if (Math.abs(best) > 40) {
      // A short struck fundamental may have decayed before the sustained-note
      // window. Measure its attack separately without hiding the tail finding.
      const attackStart = .001, attackEnd = Math.min(.03, end);
      let attackPeakCents = -100, attackPower = 0;
      for (let cents = -100; cents <= 100; cents += 4) {
        const energy = frequencyEnergy(pcm, sampleRate, f * 2 ** (cents / 1200), attackStart, attackEnd);
        if (energy > attackPower) { attackPower = energy; attackPeakCents = cents; }
      }
      const attackRms = rms(pcm, sampleRate, attackStart, attackEnd);
      const tailRms = rms(pcm, sampleRate, start, end);
      attackEvidence = { start: attackStart, end: attackEnd, nearbyPeakCents: attackPeakCents,
        rms: attackRms, tailRms, tailToAttackRms: tailRms / Math.max(1e-30, attackRms) };
      findings.push(`${def.id}/${midi}: tail peak ${best} cents; attack peak ${attackPeakCents} cents, tail/attack RMS ${(tailRms / Math.max(1e-30, attackRms)).toFixed(3)}. Listening review remains required.`);
    }
    cases.push({ instrumentId: def.id, midi, expectedHz: f, window: { start, end }, nearbyPeakCents: best,
      intendedEnergyRatio: quarterStepEnergyRatio, ...(attackEvidence ? { attackEvidence } : {}) });
  }
}
writeReport('instrument-pitch', { sampleRate, evidence: 'Direct physical synthesis of dry low/centre/high references; continuous Hann spectral scan ±100 cents. No inference of perceptual authenticity.',
  status: findings.length ? 'REVIEW' : 'PASS', instruments: new Set(cases.map(c => (c as { instrumentId: string }).instrumentId)).size, probes: cases.length, findings, cases });
console.log(`${findings.length ? 'REVIEW' : 'PASS'} instrument pitch: ${cases.length} probes; ${findings.length} findings; audit/instrument-pitch.json`);
findings.forEach(finding => console.log(finding));
