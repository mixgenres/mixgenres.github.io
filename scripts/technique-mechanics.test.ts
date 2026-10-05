import test from 'node:test';
import assert from 'node:assert/strict';
import { codeForGesture } from '../src/engine/band/gestures';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture';
import { prepareNoteVoice } from '../src/engine/playback/performancePlan';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { getInstrumentModule, resolveVoiceParameters } from '../src/engine/playback/instrumentRegistry';
import { realizeTechniquePerformance } from '../src/engine/band/techniquePerformance';
import { voiceTailSeconds } from '../src/engine/playback/voiceAllocation';
import { renderVoice } from '../src/engine/playback/elementaryEngine';
import { makeSheet, rebuild } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import { exportMusicXml } from '../src/engine/score/musicXml';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
import type { PatternEvent } from '../src/data/schema';
import { INSTRUMENT_PERFORMANCE_PROFILES } from '../src/data/performance/instrumentPerformanceProfiles';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { resolveStyle } from '../src/engine/style/resolve';
import { calibratedTechniqueGestures, styleTechniqueExpectation } from '../src/engine/style/performance-expectations';
import { optimizePerformanceByPhraseAndSong } from '../src/engine/band/songPhrasing';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import type { MusicalPattern } from '../src/types';

const gesture = (instrument: string, technique: string, source?: string) => resolveRenderGesture(instrument, codeForGesture(technique), source);
const note = (technique: string, midi = 60, directions?: PatternEvent['notation']): PerfNote => ({
  trackId: 'p', bar: 0, time: 0, dur: .3, midi, vel: 85, gestureCode: codeForGesture(technique), hitFunctionCode: 0, accent: .8,
  attackId: 'a', notation: { beat: 0, durationBeats: .6 }, musicianNotation: directions, authoredTechnique: true,
});
const performance = (instrument: string, notes: PerfNote[]): Performance => ({
  trackInfo: { p: { instrumentId: instrument, role: 'lead' } }, notes, ccs: [], bars: [], duration: 1, tail: .5, blends: {},
});

test('articulation preserves the actual instrument/variant excitation', () => {
  for (const technique of ['staccato', 'accent', 'legato', 'tenuto']) {
    assert.equal(gesture('guitar', technique, 'plectrum').excitationType, 'plectrum');
    assert.equal(gesture('bass', technique).excitationType, 'fingerpad');
    assert.equal(gesture('piano', technique).excitationType, 'hammer');
    assert.equal(gesture('violin', technique).excitationType, 'bow');
  }
  assert.equal(gesture('violin', 'ricochet').excitationType, 'bow');
  assert.equal(gesture('violin', 'pizzicato').excitationType, 'fingerpad');
  assert.equal(gesture('upright-bass', 'arrastre').excitationType, 'bow');
});

test('tango bow percussion, damped pizzicato, body strike and bass slap have separate mechanics', () => {
  assert.equal(gesture('upright-bass', 'strappata').mechanics.pitchIdentity, 'unpitched');
  assert.equal(gesture('upright-bass', 'strappata').excitationType, 'bow');
  assert.equal(gesture('upright-bass', 'slap').mechanics.pitchIdentity, 'pitched');
  assert.equal(gesture('violin', 'tambor').mechanics.surface, 'muted-string');
  assert.equal(gesture('violin', 'tambor').excitationType, 'fingerpad');
  assert.equal(gesture('violin', 'golpe-caja').mechanics.surface, 'soundboard');
  assert.equal(gesture('violin', 'chicharra').mechanics.surface, 'afterlength');
  assert.equal(getInstrumentModule('bass').id, 'bass');
  assert.equal(getInstrumentModule('upright-bass').id, 'upright-bass');
});

test('up/down chord sweeps preserve pitches and written rhythm with exactly one simultaneous golpe', () => {
  for (const stroke of ['up', 'down'] as const) {
    const perf = performance('guitar', [48, 55, 64].map(midi => note('rasgueado', midi, { stroke, bodyTechnique: 'golpe' })));
    realizeTechniquePerformance(perf);
    const timed = perf.notes.slice().sort((a, b) => a.time - b.time);
    assert.deepEqual(timed.map(n => n.midi), stroke === 'up' ? [64, 55, 48] : [48, 55, 64]);
    assert.equal(perf.notes.filter(n => n.bodyAttack).length, 1);
    assert.equal(timed[0].bodyAttack, true, 'body tap belongs to stroke onset');
    assert.ok(perf.notes.every(n => n.notation?.beat === 0 && n.notation.durationBeats === .6));
    const params = resolveTrackSound('guitar', 'flamenco');
    assert.equal(prepareNoteVoice(timed[0], params, 'flamenco', '').bodyAttack, 'golpe');
  }
});

test('unpitched actions produce one contact rather than a body strike per inferred chord tone', () => {
  for (const [instrument, technique] of [['guitar', 'golpe'], ['violin', 'tambor'], ['upright-bass', 'strappata'], ['bass', 'dead-note']]) {
    const perf = performance(instrument, [48, 55, 64].map(midi => note(technique, midi)));
    realizeTechniquePerformance(perf);
    assert.equal(perf.notes.length, 1);
    assert.equal(perf.notes[0].pitchIdentity, 'unpitched');
    const params = resolveTrackSound(instrument);
    const voice = prepareNoteVoice(perf.notes[0], params, '', '');
    assert.ok(voiceTailSeconds(params, voice) <= .5, `${instrument}/${technique} must not reserve long bowed/plucked tails`);
  }
});

/** Reachable graph inspection catches accidental pitch-dependent wrappers,
 * rather than merely checking a metadata label. */
function nodes(root: any): any[] {
  const found: any[] = [], visited = new Set<any>();
  const walk = (node: any) => { if (!node || typeof node !== 'object' || visited.has(node)) return; visited.add(node); found.push(node); for (let list = node.children; list; list = list.tl) walk(list.hd); };
  walk(root); return found;
}
test('body/tambor/chicharra/strappata audio graphs do not use the harmony pitch control', () => {
  for (const [instrument, technique] of [['guitar', 'golpe'], ['violin', 'tambor'], ['violin', 'chicharra'], ['upright-bass', 'strappata'],
    ['cello', 'strappata'], ['cello', 'chicharra'], ['cello', 'golpe-caja'], ['viola', 'tambor'], ['viola', 'chicharra'], ['viola', 'golpe-caja']]) {
    const params = resolveTrackSound(instrument), voice = prepareNoteVoice(note(technique), params, '', ''); voice.gate = 1;
    const graph = nodes(renderVoice('p', 0, voice, params));
    assert.ok(graph.length > 10);
    assert.ok(graph.every(n => !String(n.props?.key ?? '').endsWith('_freq')), `${instrument}/${technique} must not transpose with the chord`);
  }
});

test('unpitched scraper bodies keep fixed resonances and use a friction source', () => {
  for (const id of ['guacharaca', 'guiro', 'dikanza', 'cabasa', 'washboard']) {
    const def = INSTRUMENTS_BY_ID[id];
    assert.ok(def, `${id} is represented in the instrument catalog`);
    assert.equal(def.luthierPhysics?.category, 'scraped_friction', `${id} uses a frictional source`);
    assert.equal(def.dspProfile?.familyModel, 'scrape', `${id} is not modeled as a membrane/struck note`);
  }
  for (const id of ['shaker', 'maracas']) {
    assert.equal(INSTRUMENTS_BY_ID[id]?.luthierPhysics?.category, 'body_impact');
    assert.equal(INSTRUMENTS_BY_ID[id]?.dspProfile?.familyModel, 'shaker');
  }
  const def = INSTRUMENTS_BY_ID.guacharaca;
  assert.ok(def);
  const params = resolveTrackSound('guacharaca', 'latin', 'latin-cumbia');
  const graphAt = (midi: number) => {
    const voice = prepareNoteVoice(note('accent', midi), params, 'latin', 'latin-cumbia'); voice.gate = 1;
    return nodes(renderVoice('scraper', 0, voice, params)).map(node => node.props);
  };
  assert.equal(def.dspProfile?.familyModel, 'scrape');
  assert.equal(def.luthierPhysics?.category, 'scraped_friction');
  assert.deepEqual(graphAt(60), graphAt(72), 'notation MIDI must not tune an unpitched scraper body');
});

test('physical categories resolve to the source mechanism across idiophones and regional aliases', () => {
  for (const id of ['bones', 'gongs', 'cowbell', 'agogo', 'claves', 'triangle', 'tambourine', 'castanets', 'kane', 'zapateado', 'qraqeb', 'foot-stomp', 'hand-percussion', 'palmas']) {
    const def = INSTRUMENTS_BY_ID[id];
    assert.ok(def, `${id} is represented in the instrument catalog`);
    assert.equal(def.dspProfile?.familyModel, 'impact', `${id} uses a struck/body-contact source`);
  }
  for (const id of ['frame-drum', 'riq']) {
    const def = INSTRUMENTS_BY_ID[id];
    assert.equal(def?.luthierPhysics?.category, 'membrane_tension_2d', `${id} has a real tensioned head`);
    assert.equal(def?.dspProfile?.familyModel, 'membrane');
  }
  const logDrum = INSTRUMENTS_BY_ID['log-drum'];
  assert.equal(logDrum?.luthierPhysics?.category, 'resonator_struck_metal_wood');
  assert.equal(logDrum?.dspProfile?.familyModel, 'mallet');
});

test('arco is held, pizzicato decays, and palm muting shortens physical string decay', () => {
  for (const instrument of ['violin', 'viola', 'cello', 'upright-bass']) {
    const params = resolveTrackSound(instrument);
    assert.equal(resolveVoiceParameters(prepareNoteVoice(note('arco'), params, '', ''), params).isDecayingInstrument, false);
    assert.equal(resolveVoiceParameters(prepareNoteVoice(note('pizzicato'), params, '', ''), params).isDecayingInstrument, true);
  }
  const params = resolveTrackSound('guitar');
  const open = resolveVoiceParameters(prepareNoteVoice(note('fingerstyle'), params, '', ''), params);
  const mute = resolveVoiceParameters(prepareNoteVoice(note('palm-mute'), params, '', ''), params);
  assert.ok(mute.decayTime < open.decayTime * .4);
  assert.equal(gesture('bass', 'pop').mechanics.pitchIdentity, 'pitched');
});

test('catalog membership never certifies faithful synthesis', () => {
  assert.ok(Object.values(INSTRUMENT_PERFORMANCE_PROFILES).every(p => Object.values(p.gestures).every(g => g.fidelity !== 'faithful')));
  for (const profile of Object.values(INSTRUMENT_PERFORMANCE_PROFILES)) for (const genre of Object.values(profile.genreProfiles)) {
    assert.ok(genre.preferredGestures.every(g => profile.gestures[g]), `${profile.instrumentId}/${genre.genreId} has an invented preference`);
  }
});

test('style-authored instrument techniques reach the playable phrase vocabulary', () => {
  const jiangnan = resolveStyle({ genreId: 'chinese', styleId: 'chinese-jiangnan-sizhu' });
  const pipa = getInstrumentPerformanceProfile('pipa');
  const pipaGestures = calibratedTechniqueGestures(jiangnan, pipa, 'harmony');
  assert.ok(pipaGestures.includes('tremolo'), 'the Jiangnan pipa cue survives as a playable gesture');
  assert.ok(pipaGestures.includes('vibrato'));
  assert.ok(pipaGestures.includes('harmonic'));
  const expectation = styleTechniqueExpectation(jiangnan, pipa, 'harmony');
  for (const technique of pipaGestures) assert.ok(expectation.required.includes(technique));
  assert.ok(!pipaGestures.some(technique => !pipa.gestures[technique]), 'calibration never invents gesture IDs');
});

test('a part-level genre/style lens contributes its own playable techniques at sufficient weight', () => {
  const host = resolveStyle({ genreId: 'chinese', styleId: 'chinese-jiangnan-sizhu' });
  const guest = resolveStyle({ genreId: 'flamenco', styleId: 'flamenco-solea' });
  const guitar = getInstrumentPerformanceProfile('guitar');
  const light = styleTechniqueExpectation(host, guitar, 'lead', guest, .2);
  const guestCues = calibratedTechniqueGestures(guest, guitar, 'lead');
  assert.ok(guestCues.includes('rasgueado') && guestCues.includes('golpe'));
  assert.ok(!light.preferred.includes('rasgueado'), 'a light lens does not replace the host technique palette');
  const blended = styleTechniqueExpectation(host, guitar, 'lead', guest, .8);
  assert.ok(blended.required.includes('rasgueado') && blended.required.includes('golpe'));
  assert.equal(calibratedTechniqueGestures(guest, guitar, 'percussion').includes('golpe'), true,
    'role reassignment retains a physically playable guitar body strike');
});

test('playback adapts style techniques through a part lens and atypical role', () => {
  const base = makeSheet('blues', 'blues-slow-blues');
  const region = base.regions[0];
  const guitar = base.tracks.find(track => track.instrumentId === 'guitar')!;
  const sheet = rebuild({ ...base,
    partLens: { [region.id]: { [guitar.id]: { genreId: 'flamenco', styleId: 'flamenco-solea', weight: 1 } } },
    partRoles: { [region.id]: { [guitar.id]: 'percussion' } },
  });
  const notes = Array.from({ length: 16 }, (_, i): PerfNote => ({
    trackId: guitar.id, bar: region.start + Math.floor(i / 4), time: i * .12, dur: .2,
    midi: 60 + i % 5, vel: 70, gestureCode: codeForGesture('tone'), hitFunctionCode: 0,
    accent: .6, authoredTechnique: false, attackId: `lens-${i}`,
  }));
  const perf: Performance = { trackInfo: { [guitar.id]: { instrumentId: 'guitar', role: 'lead' } }, notes,
    ccs: [], bars: [], duration: 4, tail: .5, blends: {} };
  const result = optimizePerformanceByPhraseAndSong(sheet, perf).performance;
  const gestures = new Set(result.notes.map(note => GESTURE_NAMES[note.gestureCode]));
  assert.ok(gestures.has('golpe'), 'the body strike is available when guitar is assigned a percussion role');
});

test('compiled pattern playback uses a guest style after an atypical role assignment', () => {
  const base = makeSheet('blues', 'blues-slow-blues');
  const region = base.regions[0];
  const guitar = base.tracks.find(track => track.instrumentId === 'guitar')!;
  const sheet = rebuild({ ...base,
    partLens: { [region.id]: { [guitar.id]: { genreId: 'flamenco', styleId: 'flamenco-solea', weight: 1 } } },
    partRoles: { [region.id]: { [guitar.id]: 'percussion' } },
  });
  const pipeline = compileSongPipeline(sheet);
  const gestures = new Set(pipeline.performance.notes.filter(note => note.trackId === guitar.id)
    .map(note => GESTURE_NAMES[note.gestureCode]));
  assert.ok(gestures.has('golpe'), 'compiled pattern events receive the guest instrument/body technique');
  assert.ok(gestures.has('rasgueado'), 'compiled pattern events retain a second style technique instead of one generic hit');
});

test('authored flamenco fingers and simultaneous body strokes reach score, physics and MusicXML', () => {
  const song = makeSheet('flamenco', 'flamenco-rumba'), pipeline = compileSongPipeline(song);
  const body = pipeline.performance.notes.filter(n => n.bodyAttack);
  assert.ok(body.length, 'active rumba catalog contains string/body combinations');
  assert.ok(body.every(n => n.physical?.voice.bodyAttack === 'golpe'));
  for (const n of body) assert.equal(pipeline.performance.notes.filter(other => other.attackId === n.attackId && other.bodyAttack).length, 1);
  assert.ok(exportMusicXml(pipeline.interpretation).includes('golpe simultaneously'));
  const solea = compileSongPipeline(makeSheet('flamenco', 'flamenco-solea'));
  const tremolo = solea.interpretation.notes.filter(n => n.technique === 'tremolo');
  assert.ok(tremolo.length >= 5);
  assert.deepEqual(tremolo.slice(0, 5).map(n => n.playback.musicianNotation?.fingering), ['p', 'i', 'a', 'm', 'i']);
  assert.ok(tremolo[0].midi < tremolo[1].midi);
  assert.ok(exportMusicXml(solea.interpretation).includes('<actual-notes>5</actual-notes>'));
});

function writtenFixture(instrument: 'guitar' | 'piano', events: PatternEvent[]) {
  const base = makeSheet(instrument === 'guitar' ? 'flamenco' : 'tango', instrument === 'guitar' ? 'flamenco-rumba' : 'tango-golden-age');
  const track = base.tracks.find(t => t.instrumentId === instrument)!;
  const pattern: MusicalPattern = { ...Object.values(PATTERNS_BY_ID).find(p => p.instruments?.includes(instrument))!,
    id: `technique-fixture-${instrument}`, variants: [], cycleLength: 1, subdivisions: 16, anticipationOffset: 0, events };
  PATTERNS_BY_ID[pattern.id] = pattern;
  try {
    const region = { ...base.regions[0], bars: 1, start: 0, end: 1, energy: 1 as const, solo: undefined };
    return compileSongPipeline(rebuild({ ...base, regions: [region], tracks: [track],
      arrangement: { [region.id]: { [track.id]: pattern.id } }, energies: { [region.id]: { [track.id]: 1 } } }));
  } finally { delete PATTERNS_BY_ID[pattern.id]; }
}

test('a written body contact stays unpitched from the initial score through physical plan and MusicXML', () => {
  const pipeline = writtenFixture('guitar', [{ kind: 'attack', position: 0, duration: 1,
    articulation: 'golpe', pitch: { midi: [60, 64, 67] } }]);
  const contacts = pipeline.interpretation.notes.filter(n => n.technique === 'golpe');
  assert.equal(contacts.length, 1, 'one written contact must not become an inferred chord');
  assert.equal(contacts[0].pitchIdentity, 'unpitched');
  assert.equal(pipeline.performance.notes.find(n => n.attackId === contacts[0].playback.attackId)?.physical?.voice.mechanics?.surface, 'soundboard');
  const xml = exportMusicXml(pipeline.interpretation);
  assert.ok(xml.includes('<unpitched>') && xml.includes('<notehead>x</notehead>'));
  assert.ok(!xml.includes('<pitch>'), 'a pitched instrument part can contain only body percussion');
});

test('an unfamiliar pattern technique is retained in notation and adapted to the receiving instrument', () => {
  const pipeline = writtenFixture('piano', [{ kind: 'attack', position: 0, duration: 1,
    articulation: 'rasgueado', pitch: { midi: 60 } }]);
  const written = pipeline.notation.sections.flatMap(section => Object.values(section.cells))
    .flatMap(cell => cell.bars).flatMap(bar => bar.attacks).find(attack => attack.technique === 'rasgueado');
  assert.ok(written, 'pattern projection must preserve the authored cue for review/adaptation');
  const sounded = pipeline.performance.notes.find(note => note.notationEventId?.includes(':0:'));
  assert.ok(sounded);
  const gestureName = Object.keys(GESTURE_NAMES).length && GESTURE_NAMES[sounded!.gestureCode];
  assert.ok(getInstrumentPerformanceProfile('piano').gestures[gestureName], 'the receiving instrument gets a playable gesture');
  assert.notEqual(gestureName, 'rasgueado', 'an unavailable source action cannot leak into the piano renderer');
});

test('written mechanics reject unsupported body companions and invalid tuplet ratios', () => {
  assert.throws(() => writtenFixture('piano', [{ kind: 'attack', position: 0, duration: 1,
    pitch: { midi: 60 }, notation: { bodyTechnique: 'golpe' } }]), /No body-strike renderer/);
  assert.throws(() => writtenFixture('guitar', [{ kind: 'attack', position: 0, duration: 1,
    pitch: { midi: 60 }, notation: { tuplet: { actual: 0, normal: 4 } } }]), /Invalid written tuplet/);
});
