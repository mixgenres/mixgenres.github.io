import { performanceFixture } from './lib/playbackFixtures';
import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { cacheStats } from '../src/engine/cache/lru';
import { notatedDrum } from '../src/engine/score/percussionNotation';
import { exportMusicXml } from '../src/engine/score/musicXml';
import { interpretRelationships } from '../src/engine/band/interactions';
import type { PerfNote } from '../src/engine/band/performanceData';
import { codeForGesture } from '../src/engine/band/gestures';
import { createGenreWorld } from '../src/data/genres/_shared/genrePack';
import { GENRE_PACK as ROCK_PACK } from '../src/data/genres/rock/catalog';

test('optional written roles survive genre loading without shifting existing pattern IDs', () => {
  const style = ROCK_PACK.styles[0];
  const base = { ...ROCK_PACK, styles: [{ ...style,
    cells: style.cells.filter(cell => style.roles[cell.role]),
  }] };
  const before = createGenreWorld(base);
  const after = createGenreWorld({ ...ROCK_PACK, styles: [style] });
  const afterIds = new Set(after.patterns.map(pattern => pattern.id));
  for (const pattern of before.patterns) assert.ok(afterIds.has(pattern.id),
    `${pattern.id} remains resolvable in a saved score`);
  const optional = after.patterns.find(pattern => pattern.instruments?.includes('synth')
    && pattern.roles.includes('texture'));
  assert.ok(optional?.events?.length, 'the written synth texture survives outside the default rock ensemble');
  assert.ok(!after.styleDefinitions[0].characteristicInstruments.includes('synth'),
    'retaining an optional lesson does not force its player into the default ensemble');
});
import { resolveWrittenTies } from '../src/engine/band/writtenTies';

test('notation and interpretation are reused while sample events stay out of the song pipeline', () => {
  const song = makeSheet('tango', 'tango-golden-age'), first = compileSongPipeline(song);
  assert.equal(first.performance.pipeline?.version, 1);
  assert.equal(first.performance.scoreVersion, 1);
  assert.ok(first.performance.notes.every(note => !('physical' in note) && Number.isFinite(note.frequencyHz)));
  assert.ok(!('sound' in first.trace), 'the pipeline does not cache per-note synthesis preparation');
  const mixerEdit = compileSongPipeline({ ...song, tracks: song.tracks.map(t => ({ ...t, volume: .17, pan: .1, muted: true })) });
  assert.equal(first.trace.interpretation, mixerEdit.trace.interpretation);
  assert.equal(first.trace.mix, mixerEdit.trace.mix);
  assert.strictEqual(first.notation.sections[0].cells[song.tracks[0].id], mixerEdit.notation.sections[0].cells[song.tracks[0].id]);
  const edited = structuredClone(song), region = edited.regions[1], track = edited.tracks[0];
  const measure = edited.measures[region.start+2], perf = measure.patternDetailsByTrack![track.id].perf!;
  perf.accents[0] *= .81;
  const before = cacheStats().bandPartSections, changed = compileSongPipeline(edited), after = cacheStats().bandPartSections;
  assert.equal(after.misses-before.misses, 1, 'only the changed player/section needs base interpretation');
  assert.ok(after.hits>before.hits, 'other sections reuse interpreted parts');
  assert.strictEqual(first.notation.sections[0].cells[track.id], changed.notation.sections[0].cells[track.id]);
  assert.notEqual(first.notation.sections[1].cells[track.id].key, changed.notation.sections[1].cells[track.id].key);
});

test('harmonic boundary edits invalidate their incoming/outgoing transitions and dependent interpretation', () => {
  const song = makeSheet('tango', 'tango-golden-age'), before = compileSongPipeline(song), edited = structuredClone(song);
  const boundary = edited.regions[1].start;
  edited.measures[boundary].chord = 'D7';
  const after = compileSongPipeline(edited);
  const incoming = before.trace.transitions.filter(t => t.toSectionId === edited.regions[1].id);
  assert.ok(incoming.every(t => after.trace.transitions.find(a => a.trackId===t.trackId && a.toSectionId===t.toSectionId)!.key !== t.key));
  assert.ok(after.trace.transitions.filter(t => t.toSectionId===edited.regions[1].id).every(t => t.toChord==='D7'));
});

test('within-bar chord edits invalidate song and part interpretation caches', () => {
  const song = makeSheet('tango', 'tango-golden-age'), before = compileSongPipeline(song);
  const edited = structuredClone(song), piano = edited.tracks.find(track => track.instrumentId === 'piano')!;
  const measure = edited.measures.find(measure => before.performance.notes.some(note => note.trackId === piano.id
    && note.bar === measure.index && (note.notation?.beat ?? 0) >= 2))!;
  const original = measure.chord;
  measure.harmonyEvents = [{ beat: 0, chord: original }, { beat: 2, chord: 'F#7' }];
  const after = compileSongPipeline(edited);
  assert.notEqual(after.trace.interpretation, before.trace.interpretation);
  assert.equal(measure.chord, original, 'the bar label and notation cells need not change for a mid-bar edit');
  const changed = after.performance.notes.filter(note => note.trackId === piano.id && note.bar === measure.index
    && (note.notation?.beat ?? 0) >= 2);
  assert.ok(changed.length > 0);
  assert.ok(changed.every(note => note.harmonicChord === 'F#7'), 'warm part caches must read the edited harmony events');
  assert.ok(changed.some(note => [6, 10, 1, 4].includes(note.midi % 12)));
});

test('flamenco notation retains variations, playing vocabulary and explicit fingering', () => {
  const song = makeSheet('flamenco'), track = song.tracks.find(t => /guitar/.test(t.instrumentId ?? ''))!;
  assert.ok(track);
  const detail = song.measures.find(m => m.patternDetailsByTrack?.[track.id]?.perf?.onsets.length)!.patternDetailsByTrack![track.id];
  const edited = structuredClone(song), measure = edited.measures.find(m => m.patternDetailsByTrack?.[track.id]?.patternId === detail.patternId)!;
  measure.patternDetailsByTrack![track.id].perf!.notations = [{ string: 3, fret: 2, fingering: 'i', stroke: 'down', ornament: 'rasgueado' }];
  const score = compileNotatedScore(edited), cell = score.sections.find(s => s.id===measure.regionId)!.cells[track.id];
  assert.ok(cell.rules.vocabulary.includes('compás'));
  assert.ok(cell.rules.views.includes('tablature'));
  assert.deepEqual(cell.bars.find(b => b.bar===measure.index-edited.regions.find(r => r.id===measure.regionId)!.start)!.attacks[0].notation,
    { string: 3, fret: 2, fingering: 'i', stroke: 'down', ornament: 'rasgueado' });
  const realized = compileSongPipeline(edited).interpretation;
  assert.ok(realized.notes.some(n => n.midi===57 && n.playback.musicianNotation?.fret===2), 'tab fingering determines the actual note');
  const xml = exportMusicXml(realized);
  assert.ok(xml.includes('<string>3</string><fret>2</fret><fingering>i</fingering>'));
});

test('written ties produce one attack and reject a pitch-changing continuation', () => {
  const event=(beat:number,midi=69):PerfNote=>({time:beat/2,dur:.25,midi,vel:80,trackId:'p',bar:0,notation:{beat,durationBeats:.5},
    gestureCode:codeForGesture('legato'),hitFunctionCode:0,accent:.7,musicianNotation:{tieToNext:beat===0}});
  const performance = performanceFixture({ bars: [{index:0,start:0,end:2,regionId:'a',bpm:120,beatsPerBar:4}], notes:[event(0),event(.5)] });
  resolveWrittenTies(performance); assert.equal(performance.notes.length,1); assert.equal(performance.notes[0].dur,.5);
  assert.equal(performance.notes[0].notation!.durationBeats,1);
  assert.throws(()=>resolveWrittenTies(performanceFixture({bars:performance.bars,notes:[event(0),event(.5,70)]})),/no matching continuation/);
});

test('written ties preserve continuation bends and reject tuning or unpitched substitutions', () => {
  const bars=[{index:0,start:0,end:2,regionId:'a',bpm:120,beatsPerBar:4}];
  const event=(beat:number):PerfNote=>({trackId:'p',midi:69,time:beat/2,dur:.25,vel:80,bar:0,
    gestureCode:0,hitFunctionCode:0,accent:1,notation:{beat,durationBeats:.5},musicianNotation:{tieToNext:beat<1}});
  const a=event(0),b={...event(.5),pitchBend:[{offset:.1,value:10000}]},c={...event(1),pitchBend:[{offset:.05,value:8192}]};
  const p=performanceFixture({bars,notes:[a,b,c]});resolveWrittenTies(p);
  assert.equal(p.notes.length,1);assert.equal(p.notes[0].dur,.75);
  assert.deepEqual(p.notes[0].pitchBend,[{offset:.35,value:10000},{offset:.55,value:8192}]);
  for(const change of [{tuningCents:25},{frequencyHz:446.42},{pitchIdentity:'unpitched' as const}]) {
    assert.throws(()=>resolveWrittenTies(performanceFixture({bars,notes:[event(0),{...event(.5),...change}]})),/no matching continuation/);
  }
  assert.throws(()=>resolveWrittenTies(performanceFixture({bars,notes:[{...event(0),notation:{beat:0,durationBeats:0}}]})),/positive notated duration/);
  const cymbal=performanceFixture({bars,notes:[0,.5].map(beat=>({...event(beat),pitchIdentity:'unpitched' as const,drum:true,midi:49,
    musicianNotation:{tieToNext:beat===0},percussion:notatedDrum('drums',49)}))});
  resolveWrittenTies(cymbal);assert.equal(cymbal.notes.length,1,'matching cymbal contacts can still tie without another strike');
});

test('drummers have separate kit components, staff positions and noteheads in notation and MusicXML', () => {
  const song = makeSheet('rock'), written = compileNotatedScore(song);
  const drums = written.sections.flatMap(s => Object.values(s.cells)).flatMap(cell => cell.bars.flatMap(bar => bar.attacks.flatMap(a => a.pitch.kind==='drum' ? [a.pitch.drum] : [])));
  assert.ok(new Set(drums.map(d => d.componentId)).size>1);
  const kick = notatedDrum('drums',36), hat = notatedDrum('drums',42);
  assert.notDeepEqual([kick.step,kick.octave], [hat.step,hat.octave]);
  assert.equal(hat.notehead,'x');
  const xml = exportMusicXml(compileSongPipeline(song).interpretation);
  assert.ok(xml.includes('<notehead>x</notehead>'));
  assert.ok(xml.includes(`<display-step>${kick.step}</display-step><display-octave>${kick.octave}</display-octave>`));
});

test('call/answer uses the actual call and local chord while preserving literal written pitches', () => {
  const song = makeSheet('jazz'), region = song.regions[0], from = song.tracks[0], to = song.tracks[1];
  to.role = 'lead'; song.relationships = [{ id:'answer',from:from.id,to:to.id,kind:'answer',regionId:region.id,lensIds:[] }];
  const event = (trackId:string,midi:number,time:number):PerfNote => ({ trackId,midi,time,dur:.3,bar:region.start,vel:80,gestureCode:codeForGesture('legato'),hitFunctionCode:0,accent:.7 });
  const call = event(from.id,67,0), answer = event(to.id,90,.5), literal = { ...event(to.id,83,1),authoredPitch:true };
  const notes=[call,answer,literal]; interpretRelationships(notes,song,region);
  assert.notEqual(answer.midi,90); assert.equal(literal.midi,83);
});

// Support colors and beginner reductions must retain the written performance.
import { addCatalogSupportCells } from '../src/data/genres/_shared/catalogSupport';
import type { AuthoredCell } from '../src/data/genres/_shared/genrePack';

test('support adaptations preserve timing and dynamics without inventing an unrelated role', () => {
  const source: AuthoredCell = { name: 'Written organ phrase', role: 'harmony', instruments: ['organ'],
    onsets: [0, .75, 2.5], durations: [.6, .4, 1], microtiming: [0, 12, -6],
    velocities: [.8, .5, .72], probabilities: [1, .7, 1], accents: [.9, .5, .8],
    notations: [{ tuplet: { actual: 3, normal: 2 } }, { tieToNext: true }, { string: 2, fret: 3 }],
    pitches: [{ voicing: 'chord' }, { degree: 3 }, { degree: 1 }], sectionUsage: ['verse'], timingLock: 'ensemble' };
  const pack = { ...ROCK_PACK, styles: [{ ...ROCK_PACK.styles[0], cells: [source] }] };
  const added = addCatalogSupportCells(pack, [{ instrumentId: 'rhodes', role: 'harmony' },
    { instrumentId: 'shaker', role: 'percussion' }]).styles[0].cells;
  assert.ok(!added.some(cell => cell.instruments?.includes('shaker')), 'no written percussion means no fabricated shaker groove');
  const part = added.find(cell => cell.instruments?.includes('rhodes'))!;
  for (const field of ['onsets', 'durations', 'microtiming', 'velocities', 'probabilities', 'accents', 'sectionUsage', 'timingLock'] as const) {
    assert.deepEqual(part[field], source[field], `${field} reaches the optional player`);
  }
  assert.deepEqual(part.notations, [{ tuplet: { actual: 3, normal: 2 } }, { tieToNext: true }, {}]);
  assert.ok(!added.some(cell => cell.arrangementVariation), 'copying a single source does not pretend to add a new phrase');
});

test('only written parts are registered and authored cadence chances survive unchanged', () => {
  const body: AuthoredCell = { name: 'Written piano body', role: 'harmony', instruments: ['piano'],
    onsets: [0, .5, 1.5, 2.5, 3.5], velocities: [.9, .4, .75, .5, .8] };
  const close: AuthoredCell = { name: 'Written piano close', role: 'harmony', instruments: ['piano'],
    onsets: [2, 3], phraseEnd: true, pitches: [{degree:5}, {degree:1}], probabilities: [1, .6] };
  const world = createGenreWorld({ ...ROCK_PACK, styles: [{ ...ROCK_PACK.styles[0], cells: [body, close] }] });
  assert.equal(world.patterns.length, 2, 'one body and one close do not expand into practice choices');
  assert.deepEqual(world.patterns[0].events?.map(event => event.velocity), body.velocities);
  assert.deepEqual(world.patterns[1].events?.map(event => event.probability), [1, .6]);
});
