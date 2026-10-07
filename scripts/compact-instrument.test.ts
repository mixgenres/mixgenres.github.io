import test from 'node:test';
import assert from 'node:assert/strict';
import { renderPerformanceToAudio, renderPerformanceToMp3 } from '../src/engine/playback/mp3Export';
import { codeForGesture } from '../src/engine/band/gestures';
import type { PerfNote, Performance } from '../src/engine/band/performanceData';
import { frequencyEnergy, spectralPeak, rms } from './lib/spectral';

const sr = 44100;
function performanceOf(notes: PerfNote[], ids: string[]): Performance {
  return { notes, ccs: [], bars: [], duration: 1, tail: 0, blends: {}, worldId: 'jazz',
    trackInfo: Object.fromEntries(ids.map((id, i) => [`p${i}`, { instrumentId: id, role: 'lead' }])) };
}
function note(midi = 60, action = 'tone', dur = .8, trackId = 'p0'): PerfNote {
  return { trackId, time: 0, dur, bar: 0, midi, vel: 85, gestureCode: codeForGesture(action), hitFunctionCode: 0, accent: .8 };
}
async function probe(id: string, midi = 60, action = 'tone', dur = .8) {
  return renderPerformanceToAudio(performanceOf([note(midi, action, dur)], [id]), {
    trackInstruments: new Map([['p0', id]]), rawStem: true, cacheDSPStem: false, yieldForUI: false,
  });
}
test('production bandoneon has dry fundamental/octave reeds and contrasting bellows articulation', async () => {
  const held = await probe('bandoneon', 60, 'legato'), marcato = await probe('bandoneon', 60, 'marcato');
  const f = 440 * 2 ** ((60 - 69) / 12);
  assert.ok(frequencyEnergy(held.left, sr, f * 2) > frequencyEnergy(held.left, sr, f) * .02);
  assert.ok(frequencyEnergy(held.left, sr, f / 2) < frequencyEnergy(held.left, sr, f) * .003);
  assert.ok(rms(marcato.left, sr, .002, .025) > rms(held.left, sr, .002, .025) * 1.05);
});
test('production trumpet is harmonic-rich and its fall/doit move the played pitch', async () => {
  const f = 440 * 2 ** ((60 - 69) / 12), normal = await probe('trumpet');
  assert.ok(frequencyEnergy(normal.left, sr, f * 3) > frequencyEnergy(normal.left, sr, f) * .01);
  for (const [action, direction] of [['fall', -1], ['doit', 1]] as const) {
    const audio = await probe('trumpet', 60, action);
    const early = spectralPeak(audio.left, sr, f * .7, f * 1.35, .1, .25);
    const late = spectralPeak(audio.left, sr, f * .7, f * 1.35, .68, .78);
    assert.ok(direction * (late - early) > f * .08, `${action}: ${early} -> ${late}`);
  }
});
test('production congas preserve open resonance, tumba tuning and dry slap/heel strokes', async () => {
  const open = await probe('congas', 62, 'conga-open', .1), tumba = await probe('congas', 64, 'tumba-open', .1);
  const muted = await probe('congas', 63, 'slap-tapao', .1), heel = await probe('congas', 61, 'heel', .1);
  assert.ok(rms(open.left, sr, .08, .2) > rms(muted.left, sr, .08, .2) * 5);
  assert.ok(rms(open.left, sr, .08, .2) > rms(heel.left, sr, .08, .2) * 5);
  assert.ok(Math.abs(spectralPeak(tumba.left, sr, 110, 170, .02, .09) - 140) < 5);
  assert.ok(Math.abs(spectralPeak(open.left, sr, 180, 240, .02, .09) - 210) < 5);
});
test('production piano has multiple partials and damps a released key', async () => {
  const audio = await probe('piano', 60, 'staccato', .1), f = 440 * 2 ** ((60 - 69) / 12);
  assert.ok(frequencyEnergy(audio.left, sr, f * 2, .01, .07) > frequencyEnergy(audio.left, sr, f, .01, .07) * .01);
  assert.ok(rms(audio.left, sr, .3, .6) < rms(audio.left, sr, .01, .09) * .01);
});
test('production cello keeps sustained bow harmonics distinct from decaying pizzicato', async () => {
  const bowed = await probe('cello', 48, 'arco'), pizz = await probe('cello', 48, 'pizzicato');
  const f = 440 * 2 ** ((48 - 69) / 12);
  assert.ok(frequencyEnergy(bowed.left, sr, f * 3) > frequencyEnergy(bowed.left, sr, f) * .002);
  assert.ok(rms(bowed.left, sr, .5, .7) > rms(pizz.left, sr, .5, .7) * 3);
});
test('thirty simultaneous players retain every independent voice and its release', async () => {
  const ids = Array.from({ length: 30 }, () => 'organ');
  const notes = ids.map((_, i) => note(45 + i, 'tone', .3, `p${i}`)), perf = performanceOf(notes, ids);
  const options = { trackInstruments: new Map(ids.map((id, i) => [`p${i}`, id])), rawStem: true, cacheDSPStem: false, yieldForUI: false };
  const all = await renderPerformanceToAudio(perf, options), sum = new Float32Array(all.left.length);
  for (const trackId of options.trackInstruments.keys()) {
    const part = await renderPerformanceToAudio(perf, { ...options, selectedTrackIds: [trackId] });
    for (let i = 0; i < sum.length; i++) sum[i] += part.left[i];
  }
  let difference = 0;
  for (let i = 0; i < sum.length; i++) difference = Math.max(difference, Math.abs(sum[i] - all.left[i]));
  assert.ok(difference < 3e-6, `ensemble changed/stole voices: ${difference}`);
  assert.ok(all.left.every(Number.isFinite));
});
test('WAV export encodes the same shared instrument PCM consumed by playback', async () => {
  const perf = performanceOf([note(60, 'legato', .6)], ['bandoneon']);
  const options = { trackInstruments: new Map([['p0', 'bandoneon']]), rawStem: true, cacheDSPStem: false, yieldForUI: false, format: 'wav' as const };
  const audio = await renderPerformanceToAudio(perf, options), wav = new DataView(await (await renderPerformanceToMp3(perf, options)).arrayBuffer());
  assert.equal(wav.byteLength, 56 + audio.left.length * 8);
  for (let i = 0; i < audio.left.length; i++) {
    assert.equal(wav.getFloat32(56 + i * 8, true), audio.left[i]);
    assert.equal(wav.getFloat32(60 + i * 8, true), audio.right[i]);
  }
});

test('direct excerpts preserve incoming attacks, pitch gestures, controllers and release tails', async () => {
  for (const [id, action, dur, from] of [['trumpet', 'fall', .8, .37], ['piano', 'tone', .2, .23], ['bandoneon', 'legato', .8, .41]] as const) {
    const perf = performanceOf([note(60, action, dur)], [id]);
    perf.ccs = [{trackId:'p0',cc:11,value:96,time:.13},{trackId:'p0',cc:10,value:42,time:.19}];
    const options = {trackInstruments:new Map([['p0',id]]),rawStem:true,cacheDSPStem:false,yieldForUI:false};
    const full = await renderPerformanceToAudio(perf,options);
    const cropped = await renderPerformanceToAudio(perf,{...options,renderWindow:{start:from,end:.7},maxDurationSeconds:.7-from});
    const offset = Math.round(from*sr);
    for (let i=0;i<cropped.left.length;i++) {
      assert.ok(Math.abs(cropped.left[i]-full.left[offset+i])<2e-6,`${id} frame ${i}`);
      assert.ok(Math.abs(cropped.right[i]-full.right[offset+i])<2e-6,`${id} right frame ${i}`);
    }
  }
});
test('authored brightness changes a held reed without changing its pitch identity', async () => {
  const perf = performanceOf([note(60,'legato',.8)],['bandoneon']);
  perf.ccs = [{trackId:'p0',cc:74,value:127,time:0},{trackId:'p0',cc:74,value:12,time:.4}];
  const audio = await renderPerformanceToAudio(perf,{trackInstruments:new Map([['p0','bandoneon']]),rawStem:true,cacheDSPStem:false,yieldForUI:false});
  const f=440*2**((60-69)/12);
  const early=frequencyEnergy(audio.left,sr,f*5,.15,.3)/frequencyEnergy(audio.left,sr,f,.15,.3);
  const late=frequencyEnergy(audio.left,sr,f*5,.55,.7)/frequencyEnergy(audio.left,sr,f,.55,.7);
  assert.ok(early>late*1.5,`${early} -> ${late}`);
});

test('guitar keeps harmonics, dry palm muting and repeated flamenco brush attacks distinct', async () => {
  const pluck=await probe('guitar',60,'fingerstyle'), harmonic=await probe('guitar',60,'natural-harmonic');
  const mute=await probe('guitar',60,'palm-mute');
  assert.ok(rms(pluck.left,sr,.16,.3)>rms(mute.left,sr,.16,.3)*5,'muted strings decay while the written note is held');
  const f=440*2**((60-69)/12);
  const overtone=(audio:Float32Array)=>frequencyEnergy(audio,sr,f*3,.02,.08)/frequencyEnergy(audio,sr,f,.02,.08);
  assert.ok(overtone(harmonic.left)<overtone(pluck.left)*.15,'harmonics have a purer string spectrum');
  const brush=await probe('guitar',60,'rasgueado'), tremolo=await probe('guitar',60,'tremolo');
  assert.ok(rms(brush.left,sr,.052,.066)>rms(pluck.left,sr,.052,.066)*1.1,'successive nails re-excite the strings');
  assert.ok(rms(tremolo.left,sr,.48,.55)>rms(pluck.left,sr,.48,.55)*4,'tremolo maintains repeated excitation');
});
test('guitar bends and slides change pitch rather than only changing a gesture label', async () => {
  const f=440*2**((60-69)/12);
  for(const action of ['bend','slide']) {
    const audio=await probe('guitar',60,action);
    const early=spectralPeak(audio.left,sr,f*.8,f*1.3,.004,.03);
    const late=spectralPeak(audio.left,sr,f*.8,f*1.3,.16,.25);
    assert.ok(late>early*1.04,`${action}: ${early} -> ${late}`);
  }
});
test('genre guitar setups retain distinct nylon, picked electric and short syncopated responses', async () => {
  const {resolveTrackSound}=await import('../src/engine/playback/trackSound');
  const {prepareNoteVoice}=await import('../src/engine/playback/performancePlan');
  const audio=[];
  for(const genre of ['flamenco','funk','rock','jazz']) {
    const event=note(60,'fingerstyle'), params=resolveTrackSound('guitar',genre);
    const voice=prepareNoteVoice(event,params,genre,'');voice.soundParams=params;
    event.physical={key:`guitar-${genre}`,voice,tailSeconds:4};
    audio.push(await renderPerformanceToAudio(performanceOf([event],['guitar']),{trackInstruments:new Map([['p0','guitar']]),worldId:genre,rawStem:true,cacheDSPStem:false,yieldForUI:false}));
  }
  for(let i=1;i<audio.length;i++) {
    let difference=0;for(let frame=0;frame<4410;frame++) difference+=Math.abs(audio[0].left[frame]-audio[i].left[frame]);
    assert.ok(difference>.1,'genre setup must affect the shared instrument sound');
  }
});
