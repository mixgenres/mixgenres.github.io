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

test('written mechanics reject unsupported body companions and invalid tuplet ratios', () => {
  assert.throws(() => writtenFixture('piano', [{ kind: 'attack', position: 0, duration: 1,
    pitch: { midi: 60 }, notation: { bodyTechnique: 'golpe' } }]), /No body-strike renderer/);
  assert.throws(() => writtenFixture('guitar', [{ kind: 'attack', position: 0, duration: 1,
    pitch: { midi: 60 }, notation: { tuplet: { actual: 0, normal: 4 } } }]), /Invalid written tuplet/);
});
