import { mkdirSync, writeFileSync } from 'node:fs';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import { beatValue } from '../src/engine/score/musicianScore';
import { ALL_STYLES } from '../src/engine/style';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { getInstrumentModule } from '../src/engine/playback/instrumentRegistry';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { reportMetadata, writeReport, printFindings, type Finding } from './lib/auditReport';
import { writeSampleReview } from './lib/sampleReview';

const findings: Finding[] = [];
const cases: Parameters<typeof writeSampleReview>[0] = [];
const instruments = new Set<string>();
const saveScores = process.argv.includes('--scores');
if (saveScores) mkdirSync('audit/complete-scores', { recursive: true });
for (const style of ALL_STYLES) {
  const song = makeSheet(style.primaryGenre, style.id), pipeline = compileSongPipeline(song), score = pipeline.interpretation, performance = pipeline.performance;
  const check = (ok: boolean, code: string, scope: string, message: string) => {
    if (!ok) findings.push({ severity: 'error', code, scope: `${style.id}/${scope}`, message });
  };
  check(performance.scoreVersion === 1 && performance.notes.length === score.notes.length, 'score-boundary', 'ensemble', 'Playback bypassed the musician score');
  check(pipeline.notation.sections.length === song.regions.length && pipeline.notation.sections.every(section =>
    song.tracks.every(track => section.cells[track.id]?.bars.length === section.end-section.start)),
    'notation-coverage', 'ensemble', 'First-pass notation is missing a player/section');
  check(performance.notes.every(note => !!note.physical && note.physical.voice.frequencyHz === note.frequencyHz),
    'physical-boundary', 'ensemble', 'Playback bypassed the prepared instrument-physics layer');
  const parts = song.tracks.map(track => {
    const id = track.instrumentId!; instruments.add(id);
    const def = INSTRUMENTS_BY_ID[id], profile = getInstrumentPerformanceProfile(id);
    const notes = performance.notes.filter(note => note.trackId === track.id);
    const writtenNotes = score.notes.filter(note => note.trackId === track.id);
    for (const note of writtenNotes) check(beatValue(note.position) >= 0 && beatValue(note.position) < score.bars[note.bar].beatsPerBar,
      'written-position', id, `Bar ${note.bar + 1}: written attack outside measure`);
    const pitched = def.voicing !== 'unpitched' && !def.kit && !def.drum;
    check(notes.length > 0, 'missing-player', id, 'An intended player never enters');
    for (const note of notes) {
      check(!pitched || note.midi >= profile.capabilities.lowMidi && note.midi <= profile.capabilities.highMidi,
        'physical-range', id, `Bar ${note.bar + 1}, MIDI ${note.midi} outside ${profile.capabilities.lowMidi}–${profile.capabilities.highMidi}`);
      check(Number.isFinite(note.frequencyHz) && note.frequencyHz! > 0 && note.dur > 0, 'invalid-note', id, `Bar ${note.bar + 1}: invalid pitch/length`);
      const bar = performance.bars[note.bar], measure = song.measures[note.bar];
      const selection = song.arrangement[bar.regionId]?.[track.id];
      check(selection !== 'silent' && measure.patternByTrack?.[track.id] !== 'silent', 'silent-attack', id, `Bar ${note.bar + 1}: rest acquired an attack`);
      if (note.authoredTechnique) {
        const detail = measure.patternDetailsByTrack?.[track.id];
        const index = Number(note.attackId!.split(':').at(-1));
        const technique = detail?.articulations?.[index] ?? detail?.articulation;
        // Authored solo development may use a specifically requested ornament.
        const solo = song.regions.find(r => r.id === bar.regionId)?.solo;
        check(Boolean(solo?.trackIds.includes(track.id)) || GESTURE_NAMES[note.gestureCode] === technique,
          'technique-substitution', id, `Bar ${note.bar + 1}: ${technique} became ${GESTURE_NAMES[note.gestureCode]}`);
      }
    }
    return { instrumentId: id, role: track.role, synthesisModule: getInstrumentModule(id).id, physicalRange: [profile.capabilities.lowMidi, profile.capabilities.highMidi],
      playedRange: notes.length ? [Math.min(...notes.map(n => n.midi)), Math.max(...notes.map(n => n.midi))] : [], notes: notes.length,
      techniques: [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode]))],
      authoredPitchNotes: notes.filter(n => n.authoredPitch).length,
      composedPitchNotes: writtenNotes.filter(n => n.source.pitch === 'composed').length,
      explicitRests: score.rests.filter(rest => rest.trackId === track.id).length,
      patterns: [...new Set(song.measures.map(m => m.patternByTrack?.[track.id]))].filter(id => id !== 'silent').map(id => ({ id, name: PATTERNS_BY_ID[id ?? '']?.name })) };
  });
  if (saveScores) writeFileSync(`audit/complete-scores/${style.id}.json`, JSON.stringify({ notation:pipeline.notation, interpretation:score, transitions:pipeline.trace.transitions }));
  cases.push({ styleId: style.id, genre: style.primaryGenre, meter: song.timeSignature, bpm: song.bpm, bars: performance.bars.length, parts,
    sections: song.regions.map(r => ({ kind: r.kind, start: r.start, end: r.end, chords: r.chords })) });
  if (cases.length % 50 === 0) console.log(`Checked ${cases.length}/${ALL_STYLES.length} complete scores`);
}
const coverage = { genres: new Set(ALL_STYLES.map(s => s.primaryGenre)).size, styles: cases.length, instrumentsUsed: instruments.size };
writeReport('sample-accuracy', { ...reportMetadata(), status: findings.length ? 'FAIL' : 'PASS', coverage,
  evidence: 'All styles pass through complete first-pass notation, band interpretation and prepared physical controls before playback. Checks cover written rhythm, ensemble, range and technique data; pitch provenance distinguishes written patterns from composition. Not perceptual certification or a historical transcription audit.', findings, cases });
if (saveScores) writeSampleReview(cases);
printFindings('sample-accuracy', findings, coverage);
