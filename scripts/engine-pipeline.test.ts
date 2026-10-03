import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileSongPipeline } from '../src/engine/pipeline/compileSong';
import { compileNotatedScore } from '../src/engine/score/notatedScore';
import { cacheStats } from '../src/engine/cache/lru';
import { preparePartAudio, preparedAudioKey, clearPreparedAudio } from '../src/engine/cache/preparedAudio';
import { SongPlayer } from '../src/engine/playback/songPlayer';
import { notatedDrum } from '../src/engine/score/percussionNotation';
import { exportMusicXml } from '../src/engine/score/musicXml';
import { interpretRelationships } from '../src/engine/band/interactions';
import type { PerfNote } from '../src/engine/band/performanceData';
import { codeForGesture } from '../src/engine/band/gestures';
import { resolveWrittenTies } from '../src/engine/band/writtenTies';

test('four layers are explicit and unchanged musical sections retain their cached notation and physics', () => {
  const song = makeSheet('tango', 'tango-golden-age'), first = compileSongPipeline(song);
  assert.equal(first.performance.pipeline?.version, 1);
  assert.ok(first.sound.cells.every(cell => cell.notes.every(n => n.voice.frequencyHz! > 0 && n.tailSeconds > 0)));
  const mixerEdit = compileSongPipeline({ ...song, tracks: song.tracks.map(t => ({ ...t, volume: .17, pan: .1, muted: true })) });
  assert.equal(first.trace.interpretation, mixerEdit.trace.interpretation);
  assert.deepEqual(first.trace.sound, mixerEdit.trace.sound);
  assert.equal(first.trace.mix, mixerEdit.trace.mix);
  assert.strictEqual(first.notation.sections[0].cells[song.tracks[0].id], mixerEdit.notation.sections[0].cells[song.tracks[0].id]);
  assert.strictEqual(first.sound.cells[0], mixerEdit.sound.cells[0]);
  const edited = structuredClone(song), region = edited.regions[1], track = edited.tracks[0];
  const measure = edited.measures[region.start+2], perf = measure.patternDetailsByTrack![track.id].perf!;
  perf.accents[0] *= .81;
  const before = cacheStats().bandPartSections, changed = compileSongPipeline(edited), after = cacheStats().bandPartSections;
  assert.equal(after.misses-before.misses, 1, 'only the changed player/section needs base interpretation');
  assert.ok(after.hits>before.hits, 'other sections reuse interpreted parts');
  assert.strictEqual(first.notation.sections[0].cells[track.id], changed.notation.sections[0].cells[track.id]);
  assert.notEqual(first.notation.sections[1].cells[track.id].key, changed.notation.sections[1].cells[track.id].key);
  assert.strictEqual(first.sound.cells.find(c => c.sectionId===song.regions[0].id && c.trackId===track.id), changed.sound.cells.find(c => c.sectionId===song.regions[0].id && c.trackId===track.id));
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
  const performance:any={bars:[{beatsPerBar:4}],notes:[event(0),event(.5)]};
  resolveWrittenTies(performance); assert.equal(performance.notes.length,1); assert.equal(performance.notes[0].dur,.5);
  assert.equal(performance.notes[0].notation.durationBeats,1);
  assert.throws(()=>resolveWrittenTies({bars:[{beatsPerBar:4}],notes:[event(0),event(.5,70)]} as any),/no matching continuation/);
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

test('raw PCM jobs deduplicate across consumers, survive one cancellation and exclude UI mixer controls', async () => {
  clearPreparedAudio();
  const song = makeSheet('tango'), perf = compileSongPipeline(song).performance, track=song.tracks[0];
  const options={rawStem:true,selectedTrackIds:[track.id],trackInstruments:new Map([[track.id,track.instrumentId!]])};
  assert.equal(preparedAudioKey(perf,options),preparedAudioKey(perf,{...options,mixState:{volume:{[track.id]:.2},pan:{[track.id]:1}}}));
  let calls=0, finish!:(audio:any)=>void;
  const render=(_signal:AbortSignal)=>{calls++;return new Promise<any>(resolve=>{finish=resolve;});};
  const cancel=new AbortController(), a=preparePartAudio('shared',cancel.signal,render), b=preparePartAudio('shared',undefined,render);
  const rejected=assert.rejects(a,{name:'AbortError'});
  await Promise.resolve(); cancel.abort(); await rejected;
  finish({sampleRate:44100,left:new Float32Array([.2]),right:new Float32Array([.3])});
  const result=await b; assert.equal(calls,1);
  const cached=await preparePartAudio('shared',undefined,render); assert.strictEqual(cached.left,result.left); assert.equal(calls,1);
});

test('Play waits for its current chunk without requiring the whole song to be prepared', async () => {
  const player=new SongPlayer(()=>{},()=>{}) as any;
  let finish!:(buffer:any)=>void, starts=0, requests=0;
  const prepared=new Promise<any>(resolve=>{finish=resolve;});
  player.song={tracks:[]}; player.state.performance={notes:[{}],duration:2,tail:0};
  player.chunks=[{index:0,start:0,end:1},{index:1,start:1,end:2}]; player.abort=new AbortController();
  player.ctx={state:'running',currentTime:0}; player.ensureContext=()=>{}; player.compiling=Promise.resolve();
  player.startSourcesAt=()=>{}; player.beginChunkPlayback=()=>{starts++;};
  player.ensureChunk=(index:number)=>{assert.equal(index,0);requests++;return prepared;};
  const playing=player.play(); await new Promise(resolve=>setImmediate(resolve));
  assert.equal(requests,1); assert.equal(starts,0);
  finish({duration:1}); await playing; assert.equal(starts,1);
});
