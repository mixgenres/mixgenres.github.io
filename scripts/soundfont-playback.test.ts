import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { SoundBankLoader, SpessaLog, GeneratorTypes } from 'spessasynth_core';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { compileSamplePlan, SAMPLE_RELEASE_RESERVE } from '../src/engine/playback/soundfont/plan';
import { SampleRuntime } from '../src/engine/playback/soundfont/runtime';
import { setSoundfontBankReader, loadSoundfontBank, soundfontBankStats } from '../src/engine/playback/soundfont/banks';
import { BANK_PROGRAMS, patchForInstrument, SAMPLED_KIT_KEYS, type BankId } from '../src/engine/playback/soundfont/presets';
import { PERCUSSION_KIT_IDS, PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_KEYS, RECORDED_PERCUSSION_PATCHES, recordedPercussionKey } from '../src/engine/playback/soundfont/percussion';
import { codeForGesture } from '../src/engine/band/gestures';
import { performanceFixture, noteFixture } from './lib/playbackFixtures';
import { densePlaybackFixture } from './lib/densePlaybackFixture';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { StereoPeakGuard } from '../src/engine/playback/soundfont/peakGuard';
import { OUTPUT_SAMPLE_PEAK_CEILING } from '../src/engine/studio/outputHeadroom';
import { performanceWindow, renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { SAMPLE_RELEASES_BY_PATCH, SAMPLE_RELEASE_PROFILES, SAMPLE_RELEASE_MODULATION_BY_KEY } from '../src/engine/playback/soundfont/bankIdentity';
import { releaseModulationReserve } from './lib/soundfontReleaseModulation';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { prepareBankForLive } from '../src/engine/playback/soundfont/prepareBank';
import { StbVorbis } from 'stb-vorbis';
import { ALL_STYLES } from '../src/engine/style';
import { makeSheet } from '../src/engine/sheet/sheet';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { resolveDialect } from '../src/engine/band/genreDialect';
import { ELECTRONIC_KIT_PROGRAMS } from '../src/data/sound/playback/electronicKits';
import { SYNTH_SAMPLE_PROGRAMS } from '../src/engine/playback/soundfont/presets';
import { synth } from '../src/data/instruments/catalog/electronic/synth';
import { sliceBarNative } from '../src/engine/sheet/grid';
await StbVorbis.ready;
SpessaLog.setLogLevel(false,false,false);
const diskBank=async(id:BankId)=>{const data=readFileSync(`src/assets/soundfonts/${id}.sfpack`);return data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength);};
setSoundfontBankReader(diskBank);
const options={trackInstruments:new Map([['keys','piano']]),yieldForUI:false};
const load=(id:BankId)=>{const f=gunzipSync(readFileSync(`src/assets/soundfonts/${id}.sfpack`));return SoundBankLoader.fromArrayBuffer(f.buffer.slice(f.byteOffset,f.byteOffset+f.byteLength));};
async function runtimeFor(plan:ReturnType<typeof compileSamplePlan>) {
  const r=new SampleRuntime(44100,768);
  for(const bank of plan.banks){const f=gunzipSync(readFileSync(`src/assets/soundfonts/${bank}.sfpack`));r.addBank(bank,f.buffer.slice(f.byteOffset,f.byteOffset+f.byteLength));}
  await r.synth.processorInitialized;r.setPlan(plan);return r;
}
test('sostenuto captures only already-held notes and preserves independent same-key attacks', async () => {
  const notes=[noteFixture({midi:60,time:0,dur:.3}),noteFixture({midi:64,time:.15,dur:.15}),noteFixture({midi:60,time:.4,dur:.2})];
  const ccs=[{trackId:'keys',time:.1,cc:66,value:127},{trackId:'keys',time:.2,cc:66,value:100},{trackId:'keys',time:.8,cc:66,value:0}];
  const plan=compileSamplePlan(performanceFixture({notes,ccs}),options);
  const ons=plan.events.filter(event=>event.type==='on'),offs=plan.events.filter(event=>event.type==='off');
  assert.deepEqual(offs.map(event=>[event.key,Number(event.time.toFixed(6))]),[[64,.3],[60,.6],[60,.8]]);
  assert.notEqual(ons[0].channel,ons[2].channel,'the captured C cannot be released by the new C');
  const manual=compileSamplePlan(performanceFixture({notes:notes.map((note,i)=>i===0?{...note,dur:.8}:note)}),options);
  const a=await runtimeFor(plan),b=await runtimeFor(manual);
  try {
    const l=new Float32Array(44100),r=new Float32Array(l.length),expectedL=new Float32Array(l.length),expectedR=new Float32Array(l.length);
    a.render(l,r);b.render(expectedL,expectedR);
    for(let i=0;i<l.length;i++)assert(Math.abs(l[i]-expectedL[i])<1e-7&&Math.abs(r[i]-expectedR[i])<1e-7);
    a.seek(.5);const scratchL=new Float32Array(128),scratchR=new Float32Array(128);
    while(a.isSeeking)a.prime(scratchL,scratchR,128);
    const croppedL=new Float32Array(8820),croppedR=new Float32Array(croppedL.length);a.render(croppedL,croppedR);
    assert.deepEqual(croppedL,l.slice(22050,30870));assert.deepEqual(croppedR,r.slice(22050,30870));
  } finally {a.destroy();b.destroy();}
  const combined=compileSamplePlan(performanceFixture({notes,ccs:[...ccs,{trackId:'keys',time:.7,cc:64,value:127},{trackId:'keys',time:1.1,cc:64,value:0}]}),options);
  assert(combined.noteLifetimes[0].end>=1.1,'damper pedal continues the selectively held note after sostenuto releases');
  const boundary=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:60,dur:.1}),noteFixture({midi:64,time:.1,dur:.2})],ccs}),options);
  assert.deepEqual(boundary.events.filter(event=>event.type==='off').map(event=>[event.key,Number(event.time.toFixed(6))]),[[64,.3],[60,.8]],
    'pedal-down precedes same-time note-offs and note-ons: capture the released key, not the new key');
});
test('release-controller extensions reach exported PCM and reserve their full decay', async () => {
  const p=performanceFixture({duration:.2,tail:0,notes:[noteFixture({dur:.2,vel:100})],ccs:[{trackId:'keys',time:0,cc:72,value:127}]});
  const plan=compileSamplePlan(p,options);
  assert(plan.noteLifetimes[0].end>7,'CC72 extends the default one-second piano release');
  assert.equal(plan.voiceDemand[0].end,plan.noteLifetimes[0].end);
  const audio=await renderPerformanceToAudio(p,{...options,rawStem:true});
  assert(audio.left.length>7*44100,'the actual export retains the controller-extended tail');
  assert(audio.left.slice(Math.ceil(1.21*44100),Math.floor(1.4*44100)).some(value=>Math.abs(value)>.0001),
    'samples beyond the previous 1.2-second cut remain audible');
  const reset=compileSamplePlan({...p,notes:[noteFixture({time:1,dur:.2})],ccs:[...p.ccs,{trackId:'keys',time:.5,cc:72,value:64}]},options);
  assert(reset.noteLifetimes[0].end<2.3,'an earlier reset does not leave every future note with a long release');
});
test('the shared sample plan sizes dense playback and export for its simultaneous recorded zones',async()=>{
  const performance=performanceFixture({notes:Array.from({length:400},()=>noteFixture({midi:60,time:0,dur:1})),duration:1.2});
  const plan=compileSamplePlan(performance,options);
  assert.equal(plan.voiceDemand.length,400);
  const bankData=gunzipSync(readFileSync('src/assets/soundfonts/piano.sfpack'));
  const runtime=new SampleRuntime(44100,350);
  try {
    runtime.addBank('piano',bankData.buffer.slice(bankData.byteOffset,bankData.byteOffset+bankData.byteLength));
    await runtime.synth.processorInitialized;
    const attack=plan.events.find(event=>event.type==='on');assert(attack&&attack.type==='on');
    const preset=load('piano').presets.find(candidate=>candidate.bankMSB===attack.patch.bank
      &&candidate.program===attack.patch.program&&candidate.isGMGSDrum===attack.patch.drum);
    assert(preset);
    const zoneCount=preset.getVoiceParameters(attack.key,attack.velocity).length;
    const expected=Math.ceil(400*zoneCount*1.2)+16;
    runtime.setPlan(plan);
    assert.equal(runtime.voiceCapacity,expected,'capacity is based on concurrent sample zones with release headroom');
    assert.equal(runtime.synth.systemParameters.autoAllocateVoices,false,
      'the exact score capacity is allocated before rendering, avoiding worklet-time allocation');
  } finally {runtime.destroy();}
});
test('live runtime rejects a planned attack with no playable sample zone', async () => {
  const performance = performanceFixture({ notes: [noteFixture({ midi: 60 })], duration: 1.2 });
  const plan = compileSamplePlan(performance, options);
  const bankData = gunzipSync(readFileSync('src/assets/soundfonts/piano.sfpack'));
  const runtime = new SampleRuntime(44100, 64);
  try {
    runtime.addBank('piano', bankData.buffer.slice(bankData.byteOffset, bankData.byteOffset + bankData.byteLength));
    await runtime.synth.processorInitialized;
    const on = plan.events.find(event => event.type === 'on');
    assert(on && on.type === 'on');
    on.key = 0;
    plan.voiceDemand[0].key = 0;
    assert.throws(() => runtime.setPlan(plan), /No playable SoundFont zone/);
  } finally { runtime.destroy(); }
});
test('recorded patch identity survives other packs with the same MIDI bank and program', async () => {
  const fixtures = [
    {instrument:'piano',technique:'tone',pack:'piano',other:'upright'},
    {instrument:'upright-bass',technique:'tone',pack:'upright',other:'piano'},
    {instrument:'guitar',technique:'harmonic',pack:'nylon',other:'electronic'},
    {instrument:'turntable',technique:'tone',pack:'electronic',other:'nylon'},
  ] as const;
  for (const fixture of fixtures) {
    const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:60,gestureCode:codeForGesture(fixture.technique)})]}),
      {...options,trackInstruments:new Map([['keys',fixture.instrument]]),worldId:'flamenco'});
    assert.deepEqual(plan.banks,[fixture.pack]);
    const render=async(banks:BankId[])=>{
      const runtime=await runtimeFor({...plan,banks}),left=new Float32Array(8820),right=new Float32Array(left.length);
      try {runtime.render(left,right);return {left,right};} finally {runtime.destroy();}
    };
    const isolated=await render([fixture.pack]);
    assert(isolated.left.some(value=>Math.abs(value)>.001),`${fixture.instrument}: the reference patch produces audio`);
    for (const banks of [[fixture.other,fixture.pack],[fixture.pack,fixture.other]]) {
      const combined=await render(banks);
      assert.deepEqual(combined,isolated,`${fixture.instrument}: another pack must not substitute its colliding preset`);
    }
  }
});
test('loading the complete sample palette retains every recorded preset', () => {
  const runtime=new SampleRuntime(44100);
  let expected=0;
  try {
    for (const id of Object.keys(BANK_PROGRAMS) as BankId[]) {
      const packed=gunzipSync(readFileSync(`src/assets/soundfonts/${id}.sfpack`));
      runtime.addBank(id,packed.buffer.slice(packed.byteOffset,packed.byteOffset+packed.byteLength));
      expected+=runtime.synth.soundBankManager.soundBankList.find(entry=>entry.id===id)!.soundBank.presets.length;
    }
    assert.equal(runtime.synth.soundBankManager.presetList.length,expected,
      'no pack may lose a recorded patch when another pack uses the same preset address');
  } finally {runtime.destroy();}
});
test('every catalog instrument maps to a shipped playable sample preset',()=>{
  const banks=new Map<BankId,ReturnType<typeof load>>();
  for(const def of Object.values(INSTRUMENTS_BY_ID)) {
    const patch=patchForInstrument(def.id,!!def.kit||!!def.drum||def.voicing==='unpitched');
    if(!banks.has(patch.pack))banks.set(patch.pack,load(patch.pack));
    assert(banks.get(patch.pack)!.presets.some(p=>p.program===patch.program&&p.bankMSB===patch.bank&&p.isGMGSDrum===patch.drum),def.id);
  }
});
test('country mandolin resolves to the actual GS mandolin variation, not the GM shamisen slot',()=>{
  const patch=patchForInstrument('mandolin');
  assert.deepEqual(patch,{bank:16,program:25,drum:false,pack:'guitars'});
  const preset=load('guitars').presets.find(item=>item.bankMSB===16&&item.bankLSB===0&&item.program===25);
  assert(preset);assert.match(preset.name,/mandolin/i);
  assert(preset.getVoiceParameters(60,90).length,'middle C must reach the mandolin sample zone');
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:60})]}),
    {...options,trackInstruments:new Map([['keys','mandolin']]),worldId:'country',styleId:'country-bluegrass'});
  const event=plan.events.find(item=>item.type==='on');
  assert(event&&event.type==='on');assert.deepEqual(event.patch,patch);
});
test('oud uses the available warm lute-like pluck instead of the bright Shamisen patch',()=>{
  const patch=patchForInstrument('oud');
  assert.deepEqual(patch,{bank:64,program:24,drum:false,pack:'nylon'});
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:52})]}),
    {...options,trackInstruments:new Map([['keys','oud']]),worldId:'arabic'});
  const event=plan.events.find(item=>item.type==='on');
  assert(event&&event.type==='on');assert.deepEqual(event.patch,patch);
});
test('regional lutes use the nearest matching sampled attack family instead of an unrelated Shamisen or dulcimer',()=>{
  const mandolinLike=patchForInstrument('bouzouki');
  assert.deepEqual(mandolinLike,{bank:16,program:25,drum:false,pack:'guitars'});
  assert.deepEqual(patchForInstrument('dombra'),mandolinLike);
  const longNeck=patchForInstrument('setar');
  assert.deepEqual(longNeck,{bank:0,program:104,drum:false,pack:'guitars'});
  assert.notDeepEqual(patchForInstrument('tar'),longNeck,'tar has its own recorded source');
  assert.deepEqual(patchForInstrument('baglama'),longNeck);
  const qanun=patchForInstrument('qanun');
  assert.deepEqual(qanun,{bank:0,program:107,drum:false,pack:'guitars'});
  assert.notDeepEqual(qanun,patchForInstrument('santur'),
    'the plucked qanun does not inherit santur’s hammered dulcimer sample');
});
test('pipa and end-blown flutes use closer bundled source families',()=>{
  const pipa=patchForInstrument('pipa');
  assert.deepEqual(pipa,{bank:16,program:25,drum:false,pack:'guitars'});
  assert(load('guitars').presets.find(p=>p.bankMSB===16&&p.program===25)?.getVoiceParameters(60,90).length);
  for(const id of ['ney','xiao']) {
    assert.deepEqual(patchForInstrument(id),{bank:0,program:77,drum:false,pack:'winds'},id);
  }
  assert(load('winds').presets.find(p=>p.bankMSB===0&&p.program===77)?.getVoiceParameters(60,90).length);
  assert.deepEqual(patchForInstrument('siku'),{bank:0,program:75,drum:false,pack:'winds'},'panpipes keep the pan-flute source');
});
test('quena, erhu and tar use their recorded notes and independent erhu pizzicato', async () => {
  const bank=load('regional');
  assert.equal(bank.presets.length,4);assert.equal(bank.samples.length,20);
  for(const [id,program,roots] of [['quena',0,[67,69,71,72,74,76,78,79]],['erhu',1,[69,76]],['tar',2,[48,53,58,60,63,68,73,78]]] as const) {
    assert.deepEqual(patchForInstrument(id),{pack:'regional',bank:76,program,drum:false});
    const preset=bank.presets.find(p=>p.bankMSB===76&&p.program===program);assert(preset);
    assert.deepEqual([...new Set(preset.zones.flatMap(zone=>zone.instrument.zones.map(zone=>zone.sample.originalKey)))].sort((a,b)=>a-b),roots);
    const range=INSTRUMENTS_BY_ID[id].acousticProfile!;
    for(let key=range.low;key<=range.high;key++)assert(preset.getVoiceParameters(key,90).length,`${id}/${key} has a recorded zone`);
  }
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:76,gestureCode:codeForGesture('pizzicato')})]}),
    {...options,trackInstruments:new Map([['keys','erhu']]),worldId:'chinese'});
  const on=plan.events.find(event=>event.type==='on');assert(on&&on.type==='on');
  assert.deepEqual(on.patch,{pack:'regional',bank:76,program:3,drum:false});
  for(const id of ['quena','erhu']) {
    const p=performanceFixture({duration:4.5,tail:0,notes:[noteFixture({midi:76,dur:4,vel:100})]});
    const audio=await renderPerformanceToAudio(p,{...options,trackInstruments:new Map([['keys',id]]),worldId:'chinese',rawStem:true});
    const held=audio.left.subarray(3*44100,3.5*44100);let power=0;for(const sample of held)power+=sample*sample;
    assert(Math.sqrt(power/held.length)>.0001,`${id}: the source sustain does not cut off at its file boundary`);
    assert(audio.left.every(Number.isFinite));
  }
});
test('per-key lifetime reserves include recorded velocity/envelope modulation without leaking across kit keys',()=>{
  for(const pack of ['strings','electronic','percussion'] as const) {
    const bank=load(pack);
    for(const preset of bank.presets)for(const key of [36,48,60,72,84]) {
      let reserve=0;for(const velocity of [1,36,80,127])for(const voice of preset.getVoiceParameters(key,velocity))reserve=Math.max(reserve,releaseModulationReserve(voice.modulators));
      assert.equal(SAMPLE_RELEASE_MODULATION_BY_KEY[`${pack}:${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}:${key}`]??0,reserve);
    }
  }
  assert.equal(SAMPLE_RELEASE_MODULATION_BY_KEY['percussion:0:25:true:36']??0,0,'a different drum’s modulation cannot lengthen the kick');
  const p=performanceFixture({notes:[noteFixture({dur:.2})]});
  const plan=compileSamplePlan(p,{...options,trackInstruments:new Map([['keys','string-ensemble']])});
  const on=plan.events.find(event=>event.type==='on');assert(on&&on.type==='on');
  const profile=SAMPLE_RELEASE_PROFILES[`${on.patch.pack}:${on.patch.bank}:${on.patch.program}:${on.patch.drum}:${on.key}`];
  assert(plan.noteLifetimes[0].end>=.2+profile[2]*2**(500/1200)-.00001);
});
test('recorded regional leads retain usable source balance at equal note and velocity',async()=>{
  const rms=async(instrument:string,worldId:string)=> {
    const audio=await renderPerformanceToAudio(performanceFixture({worldId,duration:1.6,tail:0,notes:[noteFixture({midi:72,dur:1.2,vel:90})]}),
      {...options,worldId,trackInstruments:new Map([['keys',instrument]]),trackRoles:new Map([['keys','lead']]),rawStem:true});
    return measureAudio(audio.left.subarray(4410,44100),audio.right.subarray(4410,44100),44100).rmsDbfs!;
  };
  for(const [recorded,comparison,world] of [['quena','flute','andean'],['erhu','violin','chinese'],['tar','setar','persian']]) {
    assert(Math.abs(await rms(recorded,world)-await rms(comparison,world))<3,
      `${recorded} must not become an inaudible replacement for the prior source family`);
  }
});
test('projected event gates keep mixed authored and performer-derived lengths distinct',()=>{
  const slice=sliceBarNative([0,4],undefined,undefined,[1,2],undefined,undefined,16,1,0,
    undefined,undefined,undefined,undefined,[false,true]);
  assert.deepEqual(slice.durationAuthoredByOnset,[false,true]);
  assert.equal(slice.durationsAuthored,false,'mixed authored gates are not treated as a fully authored grid');
});
test('tin and low whistle use the recorded GeneralUser whistle set instead of GM ocarina',()=>{
  const patch=patchForInstrument('tin-whistle');
  assert.deepEqual(patch,{bank:24,program:75,drum:false,pack:'winds'});
  assert.deepEqual(patchForInstrument('low-whistle'),patch,'low whistle uses the same recordings in its lower written register');
  const preset=load('winds').presets.find(item=>item.bankMSB===24&&item.bankLSB===0&&item.program===75);
  assert(preset);assert.match(preset.name,/tin whistle/i);
  const zones=preset.zones.flatMap(zone=>zone.instrument.zones);
  assert.equal(new Set(zones.map(zone=>zone.sample.name)).size,5,'retain all five recorded whistle roots');
  for(const key of [48,60,72,84,96])assert(preset.getVoiceParameters(key,90).length>0,`whistle key ${key} reaches a sample zone`);
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:78})]}),
    {...options,trackInstruments:new Map([['keys','tin-whistle']]),worldId:'folk',styleId:'folk-folk-revival'});
  const event=plan.events.find(item=>item.type==='on');
  assert(event&&event.type==='on');assert.deepEqual(event.patch,patch);
});
test('country and folk violin parts select the dedicated GM fiddle variation',()=>{
  const plan=compileSamplePlan(performanceFixture({worldId:'country',notes:[noteFixture({trackId:'fiddle',midi:72})]}),
    {...options,trackInstruments:new Map([['fiddle','violin']]),worldId:'country',styleId:'country-bluegrass'});
  const event=plan.events.find(item=>item.type==='on');
  assert(event&&event.type==='on');
  assert.deepEqual(event.patch,{bank:0,program:110,drum:false,pack:'strings'});
  const bank=load('strings');
  assert(bank.presets.some(preset=>preset.program===110&&preset.bankMSB===0&&/fiddle/i.test(preset.name)));
});
test('Qawwali harmonium uses the recorded multisample bank across its full playable range',()=>{
  const patch=patchForInstrument('harmonium');
  assert.deepEqual(patch,{bank:66,program:28,drum:false,pack:'keys'});
  const bank=load('keys'),preset=bank.presets.find(item=>item.bankMSB===66&&item.program===28);
  assert(preset);assert.match(preset.name,/harmonium/i);
  const zones=preset.zones.flatMap(zone=>zone.instrument.zones);
  assert.equal(zones.length,38,'retain each source recording as its own sample zone');
  assert.equal(new Set(zones.map(zone=>zone.sample.originalKey)).size,38,'keep the recorded roots distinct');
  assert(Math.abs(SAMPLE_RELEASES_BY_PATCH['keys:66:28:false'] - 0.35) < 0.005, 'the preset release follows the authored 0.35-second envelope');
  for(let key=36;key<=84;key++)assert(preset.getVoiceParameters(key,90).length>0,`harmonium key ${key} must reach a recorded zone`);
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:66})]}),
    {...options,trackInstruments:new Map([['keys','harmonium']]),worldId:'qawwali',styleId:'qawwali-traditional'});
  const attack=plan.events.find(event=>event.type==='on');
  assert(attack&&attack.type==='on');assert.deepEqual(attack.patch,patch);assert(plan.banks.includes('keys'));
});
test('pedal and lap steel use the recorded clean-electric source, not the jazz guitar preset',()=>{
  const bank=load('electricClean');
  for(const instrumentId of ['pedal-steel','lap-steel']) {
    const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:60})]}),
      {...options,trackInstruments:new Map([['keys',instrumentId]]),worldId:'country',styleId:'country-honky-tonk'});
    const event=plan.events.find(item=>item.type==='on');
    assert(event&&event.type==='on');
    assert.equal(event.patch.pack,'electricClean',instrumentId);
    assert.equal(event.patch.bank,69,instrumentId);
    const preset=bank.presets.find(item=>item.bankMSB===69&&item.program===event.patch.program);
    assert(preset?.getVoiceParameters(event.key,event.velocity).length,`${instrumentId} reaches a recorded clean-electric zone`);
  }
});
test('country pedal steel compiles independent pedal, lever, chord-glide and volume-swell gestures',()=>{
  const makePlan=(gesture:string)=>compileSamplePlan(performanceFixture({notes:[noteFixture({dur:1.2,gestureCode:codeForGesture(gesture)})]}),
    {...options,trackInstruments:new Map([['keys','pedal-steel']]),worldId:'country',styleId:'country-honky-tonk'});
  const bends=(gesture:string)=>makePlan(gesture).events.filter(event=>event.type==='bend');
  const raised=bends('pedal-bend').map(event=>event.cents);
  assert(Math.max(...raised)>199&&Math.max(...raised)<201,'pedal raises reach one whole tone');
  assert(Math.abs(raised.at(-1)!)<1,'pedal returns to the written pitch');
  const lowered=bends('knee-lever-bend').map(event=>event.cents);
  assert(Math.min(...lowered)<-99&&Math.min(...lowered)>-101,'knee lever lowers one semitone');
  assert(Math.abs(lowered.at(-1)!)<1,'knee lever returns to the written pitch');
  const glide=bends('chordal-glissando').map(event=>event.cents);
  assert(glide[0]<-199&&glide[0]>-201,'chord glide begins below the written landing pitch');
  assert(Math.abs(glide.at(-1)!)<1,'chord glide lands on the written pitch');
  const swell=makePlan('volume-swell'),on=swell.events.find(event=>event.type==='on');
  assert(on&&on.type==='on');
  const expression=swell.events.filter(event=>event.type==='cc'&&event.cc===11);
  assert(expression.length>=10,'volume pedal has a continuous expression ramp');
  assert(expression.every(event=>event.type==='cc'&&event.channels.length===1&&event.channels[0]===on.channel),
    'one steel note swell cannot attenuate another part');
  assert.equal(expression[0].type==='cc'?expression[0].value:127,16);
  assert.equal(expression.at(-1)?.type==='cc'?(expression.at(-1) as Extract<(typeof swell.events)[number],{type:'cc'}>).value:0,127);
});
test('sampled synth filter-sweep cues produce one shared cutoff gesture per channel',()=>{
  const makePlan=(instrumentId:string,gesture:string)=>compileSamplePlan(
    performanceFixture({notes:[
      noteFixture({trackId:'synth',midi:48,time:0,dur:.5,gestureCode:codeForGesture(gesture)}),
      noteFixture({trackId:'synth',midi:55,time:0,dur:.5,gestureCode:codeForGesture(gesture)}),
    ]}),
    {...options,trackInstruments:new Map([['synth',instrumentId]]),trackRoles:new Map([['synth','lead']]),
      worldId:'electronic',styleId:'electronic-techno'});
  const sweep=makePlan('synth','filter-sweep');
  const on=sweep.events.find(event=>event.type==='on');assert(on&&on.type==='on');
  const controls=sweep.events.filter(event=>event.type==='cc'&&event.cc===74);
  assert.deepEqual(controls.map(event=>event.type==='cc'?event.value:null),[52,78,64]);
  assert(controls.every(event=>event.type==='cc'&&event.channels.length===1&&event.channels[0]===on.channel),
    'simultaneous chord tones share one sweep instead of fighting over controller values');
  const ordinary=makePlan('synth','tone');assert.equal(ordinary.events.filter(event=>event.type==='cc'&&event.cc===74).length,0);
  const piano=makePlan('piano','filter-sweep');assert.equal(piano.events.filter(event=>event.type==='cc'&&event.cc===74).length,0,
    'filter sweep stays a synth control rather than affecting sampled acoustic instruments');
});
test('per-attack volume and filter envelopes leave other ringing notes on independent channels',()=>{
  for (const [instrument, technique, cc] of [['pedal-steel', 'volume-swell', 11], ['synth', 'filter-sweep', 74]] as const) {
    for (const expressiveFirst of [false, true]) {
      const notes = [
        noteFixture({midi:48,time:0,dur:.25,gestureCode:codeForGesture(expressiveFirst ? technique : 'tone')}),
        noteFixture({midi:55,time:.3,dur:.8,gestureCode:codeForGesture(expressiveFirst ? 'tone' : technique),
          pitchBend:[{offset:0,value:9100}]}),
        noteFixture({midi:60,time:.3,dur:.8,gestureCode:codeForGesture(expressiveFirst ? 'tone' : technique)}),
      ];
      const plan=compileSamplePlan(performanceFixture({notes}),{...options,trackInstruments:new Map([['keys',instrument]]),
        worldId:instrument==='synth'?'electronic':'country'});
      const ons=plan.events.filter(event=>event.type==='on');
      assert.notEqual(ons[0].channel,ons[1].channel,`${instrument}: even a released tail keeps independent expression`);
      assert.equal(ons[1].channel,ons[2].channel,'a chord sharing one envelope stays together');
      const expressive=ons[expressiveFirst?0:1];
      const controls=plan.events.filter(event=>event.type==='cc'&&event.cc===cc);
      assert(controls.length>0);
      assert(controls.every(event=>event.type==='cc'&&event.channels.every(channel=>channel===expressive.channel)));
      assert(plan.events.some(event=>event.type==='bend'&&event.key===55),
        'an authored pitch curve coexists with the independent volume/filter envelope');
      if(cc===11)assert.equal(controls.length,12,'chord tones share one volume-pedal envelope');
    }
  }
});
test('simultaneous string and body strokes reach the shared sample renderer as audible contacts',async()=>{
  const notes=[48,55,64].map((midi,index)=>noteFixture({midi,attackId:'stroke',bodyAttack:index===0,
    musicianNotation:{bodyTechnique:'golpe'},pitchIdentity:'pitched',gestureCode:codeForGesture('rasgueado')}));
  const settings={...options,trackInstruments:new Map([['keys','guitar']]),worldId:'flamenco'};
  const render=async(body:boolean)=>{
    const plan=compileSamplePlan(performanceFixture({notes:notes.map(note=>({...note,bodyAttack:body&&note.bodyAttack}))}),settings);
    const runtime=await runtimeFor(plan),left=new Float32Array(17640),right=new Float32Array(left.length);
    try {runtime.render(left,right);return left;} finally {runtime.destroy();}
  };
  const combined=await render(true),strings=await render(false);
  let contactEnergy=0;
  for(let i=0;i<combined.length;i++)contactEnergy+=(combined[i]-strings[i])**2;
  assert(combined.every(Number.isFinite));
  assert(contactEnergy>1e-6,'the extra body stroke contributes recorded audio, beyond its notation flag');
});
test('khomus has its own recorded jaw harp patch, with its narrow sample range safely playable',()=>{
  const patch=patchForInstrument('khomus');
  assert.deepEqual(patch,{bank:66,program:22,drum:false,pack:'percussion'});
  const preset=load('percussion').presets.find(item=>item.bankMSB===66&&item.program===22);
  assert(preset);assert.match(preset.name,/jaw harp/i);
  for(const key of [48,60,72,83])assert(preset.getVoiceParameters(key,90).length>0,`key ${key} must play the recorded tongue sample`);
});
test('balafon uses its own six-root, three-dynamic VCSL mallet patch',()=>{
  const patch=patchForInstrument('balafon');
  assert.deepEqual(patch,{bank:66,program:23,drum:false,pack:'mallets'});
  const preset=load('mallets').presets.find(item=>item.bankMSB===66&&item.program===23);
  assert(preset);assert.equal(preset.zones.length,1);assert.equal(preset.zones[0].instrument.zones.length,18);
  for(const [key,velocity] of [[49,30],[53,60],[60,100],[77,115]] as const)assert(preset.getVoiceParameters(key,velocity).length>0,`${key}/${velocity} must reach a recorded root and dynamic layer`);
});
test('turntable uses the sampled vinyl-scratch effect preset',()=>{
  const patch=patchForInstrument('turntable');
  assert.deepEqual(patch,{bank:66,program:24,drum:false,pack:'electronic'});
  const preset=load('electronic').presets.find(item=>item.bankMSB===66&&item.program===24);
  assert(preset);assert.match(preset.name,/vinyl scratch/i);
  for(const key of [36,60,90])assert(preset.getVoiceParameters(key,90).length>0,`scratch sample plays at key ${key}`);
});
test('sampler uses the packaged one-shot palette for every MIDI pitch',()=>{
  const patch=patchForInstrument('sampler');
  assert.deepEqual(patch,{bank:67,program:0,drum:false,pack:'drumkit'});
  const plan=compileSamplePlan(performanceFixture({notes:[
    noteFixture({midi:24,time:0}),noteFixture({midi:60,time:.5}),noteFixture({midi:91,time:1}),
  ]}),{...options,trackInstruments:new Map([['keys','sampler']])});
  const events=plan.events.filter(event=>event.type==='on');
  assert.equal(plan.banks.includes('drumkit'),true);
  assert(events.length===3);
  for(const event of events)if(event.type==='on') {
    assert.equal(event.patch.pack,'drumkit');assert.equal(event.patch.drum,false);
    assert((SAMPLED_KIT_KEYS as readonly number[]).includes(event.key));
  }
  const bank=load('drumkit');
  for(const event of events)if(event.type==='on') {
    const preset=bank.presets.find(item=>item.bankMSB===67&&item.program===event.patch.program&&!item.isGMGSDrum);
    assert(preset?.getVoiceParameters(event.key,event.velocity).length,`sample note ${event.key} must play`);
  }
});
test('Cool Jazz selects the recorded GeneralUser Brush Kit through the shared sample plan',()=>{
  const sound=resolveTrackSound('drums','jazz','jazz-cool','percussion');
  assert.equal(sound.variantId,'brush-kit');
  const plan=compileSamplePlan(performanceFixture({notes:[38,40,42,46,51].map((midi,index)=>noteFixture({midi,time:index*.25}))}),{
    ...options,
    trackInstruments:new Map([['keys','drums']]),
    trackRoles:new Map([['keys','percussion']]),
    worldId:'jazz',styleId:'jazz-cool',
  });
  const attacks=plan.events.filter(event=>event.type==='on');
  assert.equal(attacks.length,5);
  assert(attacks.every(event=>event.type==='on'&&event.patch.bank===67&&event.patch.program===3&&!event.patch.drum));
  const brush=load('drumkit').presets.find(preset=>preset.bankMSB===67&&preset.program===3);
  assert(brush);assert.equal(brush.isGMGSDrum,false);assert.match(brush.name,/Brush Kit/i);
  for(const key of [38,40,42,44,46,51]) {
    const voices=brush.getVoiceParameters(key,90);
    assert(voices.length,`brush key ${key} has a playable sample`);
    assert(voices.some(voice=>/MixGenres GeneralUser brush/.test(voice.sample.name)),`key ${key} comes from the recorded GeneralUser brush source`);
  }
});
test('reggaeton arrangements use authored electronic kits and bounded sampler palettes',()=>{
  const bank=load('percussion');
  for(const style of ALL_STYLES.filter(style=>style.primaryGenre==='reggaeton')) {
    const sheet=makeSheet('reggaeton',style.id),performance=arrangeBand(sheet);
    const plan=compileSamplePlan(performance,songMixOptions(sheet));
    for(const instrumentId of ['drums','sampler']) {
      const sound=resolveTrackSound(instrumentId,'reggaeton',style.id,'percussion');
      const program=ELECTRONIC_KIT_PROGRAMS[sound.variantId!];assert.notEqual(program,undefined,style.id);
      const trackIds=new Set(sheet.tracks.filter(track=>track.instrumentId===instrumentId).map(track=>track.id));
      const channels=new Set(plan.tracks.filter(track=>trackIds.has(track.id)).flatMap(track=>track.channels));
      const ons=plan.events.filter(event=>event.type==='on'&&channels.has(event.channel));
      assert(ons.length>0,`${style.id}: ${instrumentId} plays`);
      for(const event of ons)if(event.type==='on') {
        assert.deepEqual(event.patch,{bank:0,program,drum:true,pack:'percussion'},`${style.id}: ${instrumentId}`);
        assert(bank.presets.find(p=>p.bankMSB===0&&p.program===program&&p.isGMGSDrum)?.getVoiceParameters(event.key,event.velocity).length);
        if(instrumentId==='sampler')assert(sound.samplePalette!.includes(event.key),`${style.id}: bounded one-shot palette`);
      }
    }
  }
});
test('every style example reaches playable sample zones and retains its authored kit and synth choices',()=>{
  const banks=new Map<BankId,ReturnType<typeof load>>();
  const checked=new Set<string>();
  const missing=new Set<string>();
  for(const style of ALL_STYLES) {
    const sheet=makeSheet(style.primaryGenre,style.id),performance=arrangeBand(sheet);
    const plan=compileSamplePlan(performance,songMixOptions(sheet));
    assert(plan.events.some(event=>event.type==='on'),`${style.id} is audible`);
    for(const event of plan.events)if(event.type==='on') {
      const id=`${event.patch.pack}:${event.patch.bank}:${event.patch.program}:${event.patch.drum}:${event.key}:${event.velocity}`;
      if(checked.has(id))continue;checked.add(id);
      if(!banks.has(event.patch.pack))banks.set(event.patch.pack,load(event.patch.pack));
      const preset=banks.get(event.patch.pack)!.presets.find(p=>p.bankMSB===event.patch.bank&&p.program===event.patch.program&&p.isGMGSDrum===event.patch.drum);
      if(!preset?.getVoiceParameters(event.key,event.velocity).length)missing.add(`${style.id}: ${event.patch.pack}:${event.patch.bank}:${event.patch.program}:${event.key}`);
    }
    for(const track of plan.tracks.filter(track=>track.instrumentId==='drums'||track.instrumentId==='synth')) {
      const role=sheet.tracks.find(t=>t.id===track.id)!.role;
      const sound=resolveTrackSound(track.instrumentId,style.primaryGenre,style.id,role);
      const on=plan.events.find(event=>event.type==='on'&&track.channels.includes(event.channel));
      if(!on||on.type!=='on')continue;
      if(track.instrumentId==='drums') {
        const program=ELECTRONIC_KIT_PROGRAMS[sound.variantId!];
        if(program!==undefined)assert.deepEqual(on.patch,{bank:0,program,drum:true,pack:'percussion'},style.id);
      } else if(sound.synthPatchId) {
        assert.equal(on.patch.bank,75,style.id);assert.equal(on.patch.program,SYNTH_SAMPLE_PROGRAMS[sound.synthPatchId],style.id);
      }
    }
  }
  assert.deepEqual([...missing],[],'all authored pitches must reach a sample zone');
});
test('sampled synth filters and envelopes remain distinct after packaging and render audible PCM',async()=>{
  const bank=load('electronic');
  for(const [id,program] of Object.entries(SYNTH_SAMPLE_PROGRAMS)) {
    const patch=synth.patches!.find(p=>p.id===id)!;
    const preset=bank.presets.find(p=>p.bankMSB===75&&p.program===program)!;assert(preset,id);
    for(const key of [36,48,60])for(const voice of preset.getVoiceParameters(key,90)) {
      assert.equal(voice.generators[GeneratorTypes.initialFilterFc],Math.round(1200*Math.log2(patch.cutoffHz/8.176)),id);
      assert.equal(voice.generators[GeneratorTypes.attackVolEnv],Math.round(1200*Math.log2(patch.attackSeconds)),id);
      assert.equal(voice.generators[GeneratorTypes.releaseVolEnv],Math.round(1200*Math.log2(patch.releaseSeconds)),id);
    }
    const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:48,dur:.4})]}),options);
    for(const event of plan.events)if(event.type==='on')event.patch={bank:75,program,drum:false,pack:'electronic'};
    plan.banks=['electronic'];
    const runtime=await runtimeFor(plan),left=new Float32Array(44100),right=new Float32Array(44100);
    try {runtime.render(left,right);assert(left.every(Number.isFinite));assert(left.some(value=>Math.abs(value)>.001),`${id} audible`);}
    finally{runtime.destroy();}
  }
});
test('unpitched catalog instruments have explicit playable SoundFont key maps with no tom default',()=>{
  const bank=load('percussion'),kit=bank.presets.find(p=>p.isGMGSDrum&&p.bankMSB===0)!;
  for(const def of Object.values(INSTRUMENTS_BY_ID)) {
    if(!(def.kit||def.drum||def.voicing==='unpitched'))continue;
    if(PERCUSSION_KIT_IDS.has(def.id))continue;
    if(def.id==='timpani')continue;
    if(RECORDED_PERCUSSION_KEYS.has(RECORDED_PERCUSSION_ALIASES[def.id]??def.id))continue;
    const keys=PERCUSSION_SAMPLE_KEYS[def.id];assert(keys,`${def.id} needs an explicit sample key map`);
    for(const key of keys)assert(kit.getVoiceParameters(key,100).length>0,`${def.id} key ${key} must play a sample`);
  }
  assert.throws(()=>patchForInstrument('unmapped-drum',true),/explicit SoundFont percussion mapping/);
});
test('timpani use the dedicated chromatic timpani preset rather than kit samples',()=>{
  const patch=patchForInstrument('timpani',true);
  assert.deepEqual(patch,{bank:0,program:47,drum:false,pack:'percussion'});
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:50})]}),
    {...options,trackInstruments:new Map([['keys','timpani']])});
  const event=plan.events.find(item=>item.type==='on');
  assert(event&&event.type==='on');assert.deepEqual(event.patch,patch);assert.equal(event.key,50);
  const bank=load('percussion'),preset=bank.presets.find(item=>item.program===47&&!item.isDrum);
  assert(preset);assert.equal(preset.name,'Timpani');assert(preset.zones.length>1);
});
test('named percussion routes use their recorded VCSL tones and every take has playable zones',()=>{
  const bank=load('percussion');
  const presetFor=(program:number)=>bank.presets.find(preset=>preset.bankMSB===66&&preset.program===program&&!preset.isDrum);
  for(const [id,route] of Object.entries(RECORDED_PERCUSSION_PATCHES))for(let take=0;take<route.takes;take++) {
    const preset=presetFor(route.program+take);assert(preset,`${id} take ${take+1} is packaged`);
    const keys=new Set(preset.zones.flatMap(zone=>zone.instrument.zones.map(zone=>zone.keyRange.min)));
    assert(keys.size>0,`${id} take ${take+1} has recorded keys`);
    for(const key of keys)assert(preset.getVoiceParameters(key,90).length>0,`${id} take ${take+1} key ${key} plays`);
  }
  for(const [alias,canonical] of Object.entries(RECORDED_PERCUSSION_ALIASES)) {
    const patch=patchForInstrument(alias,true),route=RECORDED_PERCUSSION_PATCHES[canonical];
    assert(route,`${alias} has a recorded tone route`);assert.deepEqual(patch,{bank:66,program:route.program,drum:false,pack:'percussion'});
  }
  assert.equal(bank.presets.filter(preset=>preset.bankMSB===66).length,24,'ship the jaw harp, custom body samples and dedicated VCSL percussion presets');
  assert.equal(patchForInstrument('log-drum',true).program,25);
  assert.deepEqual([47,48,50].map(midi=>recordedPercussionKey('log-drum',midi,{low:47,mid:48,high:50},'open')),[47,47,50]);
  for(const [id,route] of Object.entries(RECORDED_PERCUSSION_PATCHES))for(let take=0;take<route.takes;take++) {
    const preset=presetFor(route.program+take)!;
    const samples=new Set(preset.zones.flatMap(zone=>zone.instrument.zones.map(zone=>zone.sample)));
    let peak=0;
    for(const sample of samples)for(const value of sample.getAudioData())peak=Math.max(peak,Math.abs(value));
    const peakDb=20*Math.log10(peak);
    assert(peakDb>-16&&peakDb<-8,`${id} take ${take+1} should be gain-staged evenly, got ${peakDb.toFixed(1)} dBFS`);
  }
});
test('tango bandoneon push and pull route through the dedicated recorded bank',()=>{
  const p=performanceFixture({notes:[
    noteFixture({time:0,trackId:'bandoneon',bellowsDirectionCode:1}),
    noteFixture({time:.5,trackId:'bandoneon',bellowsDirectionCode:2}),
  ]});
  const plan=compileSamplePlan(p,{...options,trackInstruments:new Map([['bandoneon','bandoneon']]),worldId:'tango'});
  assert.deepEqual(plan.events.filter(event=>event.type==='on').map(event=>[event.patch.pack,event.patch.bank]),[['bandoneon',73],['bandoneon',74]]);
  const bank=load('bandoneon');
  assert.equal(bank.samples.length,12,'retain the Bleymehl source recordings');
  const open=bank.presets.find(preset=>preset.bankMSB===73)!,close=bank.presets.find(preset=>preset.bankMSB===74)!;
  assert(open&&close);
  const sampleNames=(preset:typeof open)=>preset.zones.flatMap(zone=>zone.instrument.zones.map(zone=>zone.sample.name)).sort();
  assert.deepEqual(sampleNames(open),sampleNames(close),'bellows directions share the one recorded instrument');
  assert.notEqual(close.globalZone.getGenerator(GeneratorTypes.initialFilterFc,0),open.globalZone.getGenerator(GeneratorTypes.initialFilterFc,0));
});
test('pack hashes, sizes and SF2 sample links match the distillation manifest',()=>{
  const manifest=JSON.parse(readFileSync('src/assets/soundfonts/manifest.json','utf8')) as {packs:Record<string,{bytes:number;unpackedBytes:number;sha256:string}>};
  for(const [id,meta] of Object.entries(manifest.packs)) {
    const data=readFileSync(`src/assets/soundfonts/${id}.sfpack`);assert.equal(data.length,meta.bytes);
    assert.equal(createHash('sha256').update(data).digest('hex'),meta.sha256);
    assert.equal(gunzipSync(data).byteLength,meta.unpackedBytes);
    const bank=load(id as BankId);
    const addresses=bank.presets.map(p=>`${p.bankMSB}:${p.bankLSB}:${p.program}:${p.isGMGSDrum}`);
    assert.equal(new Set(addresses).size,addresses.length,`${id} preset addresses must be unique`);
    for(const p of bank.presets)for(const z of p.zones)for(const sample of z.instrument.zones){assert(sample.sample.getAudioData().length>0);assert(sample.sample.loopEnd<=sample.sample.getAudioData().length);}
  }
});
test('standard kit preserves kick, snare, hats, toms and cymbal score identities',()=>{
  const keys=[35,36,37,38,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,59,69];
  const plan=compileSamplePlan(performanceFixture({notes:keys.map((midi,i)=>noteFixture({midi,time:i*.1}))}),
    {...options,trackInstruments:new Map([['keys','drums']])});
  assert.deepEqual(plan.events.filter(e=>e.type==='on').map(e=>e.key),keys);
});
test('recorded kit layout preserves drum pitch, stereo layers, takes and hat exclusivity',()=>{
  const bank=load('drumkit');
  for(const key of [35,36,38,40,41,42,43,46,47,48,49,50,51,52,53,57,59])for(const velocity of [15,45,65,85,110,125]) {
    const takes=bank.presets.filter(p=>p.bankMSB===67&&p.program<3).map(p=>p.getVoiceParameters(key,velocity));
    for(const voices of takes){assert.equal(voices.length,2,`${key}/${velocity}`);for(const voice of voices){
      assert.equal(voice.generators[GeneratorTypes.overridingRootKey],key);
      assert(voice.sample.isLinked,'recorded stereo links survive');
      if(key===42||key===46)assert.equal(voice.generators[GeneratorTypes.exclusiveClass],1);
    }}
    assert.equal(new Set(takes.map(v=>v[0].sample.name)).size,3,'takes must be distinct recordings');
  }
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({midi:46,dur:2}),noteFixture({midi:46,time:.1,dur:2}),noteFixture({midi:42,time:.2}),noteFixture({midi:44,time:.3}),noteFixture({midi:38,time:.3})]}),
    {...options,trackInstruments:new Map([['keys','drums']])});
  const ons=plan.events.filter(e=>e.type==='on');
  assert.equal(new Set(ons.filter(e=>[42,44,46].includes(e.key)).map(e=>e.channel)).size,1);
  assert.notEqual(ons.find(e=>e.key===38)!.channel,ons[0].channel);
});
test('Salamander covers the full keyboard with distinct recorded dynamics and stereo microphones',()=>{
  const bank=load('piano'),preset=bank.presets[0];
  assert.equal(bank.samples.length,240,'only selected recordings are shipped');
  let longestSampleFrames=0;
  for(const key of [21,36,60,84,108]) {
    const layers=[20,60,90,120].map(v=>preset.getVoiceParameters(key,v));
    for(const layer of layers){assert.equal(layer.length,2);assert(layer.every(v=>v.sample.isLinked));}
    assert.equal(new Set(layers.map(v=>v[0].sample.name)).size,4);
    for(const layer of layers)for(const voice of layer)longestSampleFrames=Math.max(longestSampleFrames,voice.sample.getAudioData().length);
  }
  assert(longestSampleFrames>441000,'recorded piano decays beyond ten seconds are preserved');
});
test('finger and pick bass use distinct recordings while slap and fretless keep their own patches',()=>{
  const bank=load('bass');assert.equal(bank.presets.length,2);
  for(let key=28;key<=55;key++) {
    const finger=bank.presets[0].getVoiceParameters(key,90),pick=bank.presets[1].getVoiceParameters(key,90);
    assert(finger.length&&pick.length,`bass key ${key} plays both sources`);
    assert.notEqual(finger[0].sample.name,pick[0].sample.name,`bass key ${key} retains distinct recordings`);
    assert.notDeepEqual(finger[0].sample.getAudioData(),pick[0].sample.getAudioData());
  }
  assert.notEqual(bank.presets[0].getVoiceParameters(40,90)[0].sample.name,bank.presets[1].getVoiceParameters(40,90)[0].sample.name);
  const plan=compileSamplePlan(performanceFixture({notes:[noteFixture({gestureCode:codeForGesture('slap')})]}),
    {...options,trackInstruments:new Map([['keys','bass']])});
  assert.equal(plan.events.find(e=>e.type==='on')?.patch.program,36);
});
test('upright bass uses recorded pizzicato and separate arco round robins',()=>{
  const plan=compileSamplePlan(performanceFixture({notes:[
    noteFixture({trackId:'upright-bass',midi:40,gestureCode:codeForGesture('pizzicato')}),
    noteFixture({trackId:'upright-bass',midi:40,time:.5,gestureCode:codeForGesture('arco')}),
  ]}),{...options,trackInstruments:new Map([['upright-bass','upright-bass']]),worldId:'tango'});
  const patches=plan.events.filter(e=>e.type==='on').map(e=>e.patch);
  assert(patches.every(p=>p.pack==='upright'&&p.bank===64));
  assert(patches[0].program<4);assert(patches[1].program>=4&&patches[1].program<6);
  const bank=load('upright');assert.equal(bank.presets.length,6);
  const pizz=bank.presets.filter(p=>p.program<4),arco=bank.presets.filter(p=>p.program>=4);
  for(const velocity of [40,90,125])assert(pizz.every(p=>p.getVoiceParameters(40,velocity).length>0));
  assert.equal(new Set(pizz.map(p=>p.getVoiceParameters(40,64)[0].sample.name)).size,4);
  assert.notEqual(arco[0].getVoiceParameters(40,64)[0].sample.name,arco[1].getVoiceParameters(40,64)[0].sample.name);
  assert(arco[0].getVoiceParameters(40,12).length>0,'quiet arco retains its pp layer');
  assert(arco[0].getVoiceParameters(40,120).length>0,'strong arco retains its f layer');
});
test('live bank preparation retains every requested shared patch and removes unused PCM',async()=>{
  for(const id of ['nylon','piano','drumkit'] as const) {
    const file=gunzipSync(readFileSync(`src/assets/soundfonts/${id}.sfpack`));
    const source=file.buffer.slice(file.byteOffset,file.byteOffset+file.byteLength);
    const sourceBank=SoundBankLoader.fromArrayBuffer(source);
    const attacks=sourceBank.presets.map((p,i)=>({patch:{bank:p.bankMSB,program:p.program,drum:p.isGMGSDrum,pack:id},key:id==='drumkit'?36:48+i*5,velocity:90}));
    const prepared=await prepareBankForLive(source,attacks),bank=SoundBankLoader.fromArrayBuffer(prepared);
    assert(bank.samples.length<sourceBank.samples.length);
    assert(bank.samples.every(s=>!s.isCompressed),'audio callbacks receive decoded SF2');
    for(const attack of attacks) {
      const p=bank.presets.find(p=>p.bankMSB===attack.patch.bank&&p.program===attack.patch.program)!;
      const before=sourceBank.presets.find(p=>p.bankMSB===attack.patch.bank&&p.program===attack.patch.program)!;
      const a=before.getVoiceParameters(attack.key,attack.velocity),b=p.getVoiceParameters(attack.key,attack.velocity);
      assert(a.length>0);assert.equal(a.length,b.length);
      for(let i=0;i<a.length;i++){
        assert.equal(a[i].sample.name,b[i].sample.name);
        const original=a[i].sample.getAudioData(),pcm=b[i].sample.getAudioData();assert.equal(original.length,pcm.length);
        let error=0;for(let f=0;f<pcm.length;f++)error=Math.max(error,Math.abs(pcm[f]-original[f]));
        assert(error<=1/32768,'preparation only quantizes to SF2 PCM precision');
      }
    }
  }
});
test('live bank preparation rejects an authored attack without a playable sample zone', async () => {
  const compressed = gunzipSync(readFileSync('src/assets/soundfonts/piano.sfpack'));
  const source = compressed.buffer.slice(compressed.byteOffset, compressed.byteOffset + compressed.byteLength);
  const bank = SoundBankLoader.fromArrayBuffer(source);
  const piano = bank.presets.find(p => p.bankMSB === 64 && p.program === 0 && !p.isGMGSDrum);
  assert(piano);
  assert.equal(piano.getVoiceParameters(0, 90).length, 0, 'the test key is outside the recorded piano range');
  await assert.rejects(() => prepareBankForLive(source, [{
    patch: { bank: 64, program: 0, drum: false, pack: 'piano' }, key: 0, velocity: 90,
  }]), /No playable sample zone for piano:64:0:0/);
});
test('prepared percussion retains distinct instrument names, gestures and takes',async()=>{
  const file=gunzipSync(readFileSync('src/assets/soundfonts/percussion.sfpack'));
  const source=file.buffer.slice(file.byteOffset,file.byteOffset+file.byteLength),bank=SoundBankLoader.fromArrayBuffer(source);
  const attacks=bank.presets.flatMap(p=>[...new Set(p.zones.flatMap(z=>z.instrument.zones.map(z=>z.keyRange.min)))].map(key=>({
    patch:{bank:p.bankMSB,program:p.program,drum:p.isGMGSDrum,pack:'percussion' as const},key,velocity:90,
  })));
  const prepared=SoundBankLoader.fromArrayBuffer(await prepareBankForLive(source,attacks));
  for(const attack of attacks) {
    const before=bank.presets.find(p=>p.bankMSB===attack.patch.bank&&p.program===attack.patch.program&&p.isGMGSDrum===attack.patch.drum)!;
    const after=prepared.presets.find(p=>p.bankMSB===attack.patch.bank&&p.program===attack.patch.program&&p.isGMGSDrum===attack.patch.drum)!;
    const signature=(p:typeof before)=>p.getVoiceParameters(attack.key,attack.velocity).map(v=>[v.sample.name,v.generators[GeneratorTypes.overridingRootKey]]);
    assert.deepEqual(signature(after),signature(before),`${before.name}: ${attack.key}`);
  }
});
test('cropped sample PCM keeps sample age, bends, controller history and releases exactly',async()=>{
  const p=performanceFixture({notes:[noteFixture({dur:.213,time:.0013,pitchBend:[{offset:.1,value:9100}]}),noteFixture({time:.202,dur:1,midi:64})],ccs:[{trackId:'keys',time:.05,cc:11,value:73},{trackId:'keys',time:.09,cc:64,value:127},{trackId:'keys',time:.41,cc:64,value:0}],duration:1.5});
  const plan=compileSamplePlan(p,options),r=await runtimeFor(plan);
  const l=new Float32Array(66150),rr=new Float32Array(l.length);r.render(l,rr);
  r.seek(.327);const a=new Float32Array(128),b=new Float32Array(128);while(r.isSeeking)r.prime(a,b,128);
  const cropped=new Float32Array(10000),cr=new Float32Array(10000);r.render(cropped,cr);
  assert.deepEqual(cropped,l.slice(Math.round(.327*44100),Math.round(.327*44100)+10000));assert.deepEqual(cr,rr.slice(Math.round(.327*44100),Math.round(.327*44100)+10000));r.destroy();
});
test('new same-pitch attacks and simultaneous bends have separate ownership',()=>{
  const p=performanceFixture({notes:[noteFixture({time:0}),noteFixture({time:.01,pitchBend:[{offset:0,value:10000}]}),noteFixture({time:0,midi:64}),noteFixture({time:.6})]});
  const plan=compileSamplePlan(p,options),ons=plan.events.filter(e=>e.type==='on');
  assert.notEqual(ons[0].channel,ons.find(n=>n.time===.01)!.channel);assert.equal(ons[0].channel,ons.find(n=>n.key===64)!.channel);
  assert.equal(ons[0].channel,ons.find(n=>n.time===.6)!.channel,'same-pitch notes can share a lane after note-off while the static release rings');
});
test('sample planning rejects malformed events instead of clamping or dropping articulation',()=>{
  assert.throws(
    () => compileSamplePlan(performanceFixture({notes:[noteFixture({midi:-1})]}), options),
    /Invalid sample note event/,
  );
  assert.throws(
    () => compileSamplePlan(performanceFixture({notes:[noteFixture({vel:0})]}), options),
    /Invalid sample note event/,
  );
  assert.throws(
    () => compileSamplePlan(performanceFixture({notes:[noteFixture({pitchBend:[{offset:.5,value:9000}]})]}), options),
    /Invalid pitch bend/,
  );
  assert.throws(
    () => compileSamplePlan(performanceFixture({ccs:[{trackId:'keys',time:0,cc:11,value:128}]}), options),
    /Invalid controller event/,
  );
});
test('live loop duration retains sample release after a short score with no declared tail',()=>{
  const p=performanceFixture({notes:[noteFixture({dur:.1})],duration:.4,tail:0}),plan=compileSamplePlan(p,options);
  const profile=SAMPLE_RELEASE_PROFILES['piano:64:0:false:60'];
  assert(profile);
  assert(plan.noteLifetimes[0].end>=.1+profile[0],'the selected piano key keeps its own release metadata');
  assert(plan.duration+plan.origin>=plan.noteLifetimes[0].end);
});
test('a missing per-key profile cannot inherit a drum bank’s unrelated 100-second release',()=>{
  const p=performanceFixture({notes:[noteFixture({trackId:'kit',midi:127,dur:.1})],duration:.05,tail:0,worldId:'rock'});
  const plan=compileSamplePlan(p,{...options,trackInstruments:new Map([['kit','drums']]),trackRoles:new Map([['kit','percussion']]),worldId:'rock',styleId:'rock-hard-rock'});
  const profile=SAMPLE_RELEASE_PROFILES['percussion:0:0:true:127'];
  assert.equal(profile,undefined,'the out-of-zone key has no recorded sample profile');
  assert.equal(plan.noteLifetimes[0].end,.1+SAMPLE_RELEASE_RESERVE);
  assert.equal(plan.duration,.1+SAMPLE_RELEASE_RESERVE,'the invalid zone cannot hold the transport open for the patch-wide maximum');
});
test('sample tail metadata distinguishes SoundFont packs that reuse the same MIDI patch address',()=>{
  const piano=SAMPLE_RELEASE_PROFILES['piano:64:0:false:60'];
  const upright=SAMPLE_RELEASE_PROFILES['upright:64:0:false:60'];
  assert(piano&&upright);
  assert.notDeepEqual(piano,upright,'piano and upright bass have separate sample lifetime profiles');
  assert.notEqual(SAMPLE_RELEASES_BY_PATCH['piano:64:0:false'],SAMPLE_RELEASES_BY_PATCH['upright:64:0:false']);
});
test('Muldjord ride samples retain their recorded decay in playback and sample-plan lifetime',async()=>{
  const note=noteFixture({trackId:'kit',midi:51,dur:.1,vel:100});
  const performance=performanceFixture({notes:[note],duration:.2,tail:0,worldId:'rock'});
  const renderOptions={...options,trackInstruments:new Map([['kit','drums']]),worldId:'rock',styleId:'rock-hard-rock'};
  const plan=compileSamplePlan(performance,renderOptions);
  const attack=plan.events.find(event=>event.type==='on');assert(attack&&attack.type==='on');
  const profile=SAMPLE_RELEASE_PROFILES[`drumkit:67:${attack.patch.program}:false:51`];
  assert(profile,`Muldjord ride profile exists for take ${attack.patch.program}`);
  assert(profile[1]>8,'the source ride recording is no longer cropped at the old 8-second boundary');
  assert(plan.noteLifetimes[0].end-note.time>8,'the planner reserves through the one-shot ride sample decay');
  const runtime=await runtimeFor(plan),frames=9*44100,left=new Float32Array(frames),right=new Float32Array(frames);
  try {
    runtime.render(left,right);
    let lateEnergy=0;
    for(let frame=8*44100;frame<9*44100;frame++)lateEnergy+=left[frame]**2+right[frame]**2;
    assert(lateEnergy>1e-8,'offline playback keeps the recorded ride audible beyond 8 seconds');
  } finally {runtime.destroy();}
});
test('Spanish guitar mute/harmonics/body and bowed pizzicato select distinct sample programs',()=>{
  const p=performanceFixture({notes:['tone','mute','harmonic','golpe'].map((action,i)=>noteFixture({time:i*.3,gestureCode:codeForGesture(action),pitchIdentity:action==='golpe'?'unpitched':'pitched'}))});
  const plan=compileSamplePlan(p,{...options,trackInstruments:new Map([['keys','guitar']]),worldId:'flamenco'});
  assert.deepEqual(plan.events.filter(e=>e.type==='on').map(e=>[e.patch.bank,e.patch.program]),[[64,24],[65,24],[66,24],[66,0]]);
  const bowed=compileSamplePlan(performanceFixture({notes:[noteFixture({gestureCode:codeForGesture('pizzicato')})]}),{...options,trackInstruments:new Map([['keys','cello']])});
  assert.equal(bowed.events.find(e=>e.type==='on')?.patch.program,45);
  const body=compileSamplePlan(performanceFixture({notes:[noteFixture({gestureCode:codeForGesture('body-hit'),pitchIdentity:'unpitched'})]}),{...options,trackInstruments:new Map([['keys','upright-bass']])});
  assert.equal(body.events.find(e=>e.type==='on')?.patch.pack,'percussion');
});
test('sample event plan preserves compiled staccato gates without a fixed wall-clock cap',()=>{
  const durations=[.09,.25,.6,1.2];
  const notes=durations.map((dur,index)=>noteFixture({
    time:index*2,dur,gestureCode:codeForGesture('staccato'),midi:60+index,
  }));
  const plan=compileSamplePlan(performanceFixture({notes}),options);
  const releases=plan.events.filter(event=>event.type==='off').map(event=>event.time);
  assert.deepEqual(releases,durations.map((dur,index)=>index*2+dur),
    'the compiled performance gate reaches the SoundFont note-off unchanged at every duration');
});
test('Metal style defaults keep open guitar parts out of the damped bank',()=>{
  const technique=(styleId:string,role:'lead'|'harmony')=>resolveDialect('guitar','metal',styleId,role)!.defaultTechnique;
  assert.equal(technique('metal-heavy-metal','lead'),'pick');
  assert.equal(technique('metal-heavy-metal','harmony'),'legato');
  assert.equal(technique('metal-doom','lead'),'legato');
  assert.equal(technique('metal-black','lead'),'tremolo');
  assert.equal(technique('metal-death','lead'),'tremolo');
  assert.equal(technique('metal-thrash','lead'),'palm-mute');
  const open=compileSamplePlan(performanceFixture({worldId:'metal',notes:[noteFixture({
    trackId:'guitar',gestureCode:codeForGesture('tremolo'),
  })]}),{...options,trackInstruments:new Map([['guitar','guitar']]),trackRoles:new Map([['guitar','lead']]),
    worldId:'metal',styleId:'metal-black'});
  const openPatch=open.events.find(event=>event.type==='on');
  assert(openPatch&&openPatch.type==='on');
  assert.equal(openPatch.patch.bank,71,'tremolo uses the sustained drive source');
  const muted=compileSamplePlan(performanceFixture({worldId:'metal',notes:[noteFixture({
    trackId:'guitar',gestureCode:codeForGesture('palm-mute'),
  })]}),{...options,trackInstruments:new Map([['guitar','guitar']]),trackRoles:new Map([['guitar','lead']]),
    worldId:'metal',styleId:'metal-thrash'});
  const mutedPatch=muted.events.find(event=>event.type==='on');
  assert(mutedPatch&&mutedPatch.type==='on');
  assert.equal(mutedPatch.patch.bank,72,'explicit palm muting still uses the damped drive source');
});
test('damped steel preset shortens release smoothly; nylon retains source mute/harmonic patches',()=>{
  for(const id of ['steel'] as const){const bank=load(id),base=bank.presets.find(p=>p.bankMSB===64)!,muted=bank.presets.find(p=>p.bankMSB===65)!;
    for(const key of [48,60,72]) {
      const a=base.getVoiceParameters(key,90)[0].generators,b=muted.getVoiceParameters(key,90)[0].generators;
      assert.equal(b[GeneratorTypes.initialFilterFc],a[GeneratorTypes.initialFilterFc]-3600);
      assert.equal(b[GeneratorTypes.releaseVolEnv],a[GeneratorTypes.releaseVolEnv]-3600);
      assert(2**(b[GeneratorTypes.releaseVolEnv]/1200)>.05);
    }
  }
  const nylon=load('nylon'),normal=nylon.presets.find(p=>p.bankMSB===64)!,mute=nylon.presets.find(p=>p.bankMSB===65)!,harmonic=nylon.presets.find(p=>p.bankMSB===66)!;
  const a=normal.getVoiceParameters(60,90)[0],b=mute.getVoiceParameters(60,90)[0],c=harmonic.getVoiceParameters(60,90)[0];
  assert(b.generators[GeneratorTypes.initialFilterFc]<a.generators[GeneratorTypes.initialFilterFc]);
  assert.notEqual(c.sample.name,a.sample.name);
});
test('12/15/30-chair scores retain every player within a bounded channel budget',()=>{
  for(const count of [12,15,30] as const){const song=densePlaybackFixture(count),perf=arrangeBand(song),plan=compileSamplePlan(perf,songMixOptions(song));assert.equal(plan.tracks.length,count);assert.equal(plan.events.filter(e=>e.type==='on').length,perf.notes.length);assert(plan.channels<=2048,`${count}: ${plan.channels}`);}
});
test('sample PCM renders the requested part on demand and honours cancellation',async()=>{
  const p=performanceFixture({notes:[noteFixture({dur:.1})],duration:.4});
  const raw={...options,rawStem:true,maxDurationSeconds:.4,yieldForUI:false};const result=await renderPerformanceToAudio(p,raw);
  assert(result.left.some(v=>Math.abs(v)>.01));assert(result.left.every(Number.isFinite));assert.equal(result.left.length,17640);
  const again=await renderPerformanceToAudio(p,raw);assert.notEqual(again.left,result.left);assert.deepEqual(again.left,result.left);
  const abort=new AbortController();abort.abort();await assert.rejects(renderPerformanceToAudio(p,{...raw,signal:abort.signal}),{name:'AbortError'});
});
test('sample export windows retain earlier attacks and controller history',()=>{
  const p=performanceFixture({notes:[noteFixture({time:0,dur:.1}),noteFixture({time:1.2,midi:64,dur:.2}),noteFixture({time:1.95,midi:65})],
    ccs:[{trackId:'keys',time:.05,cc:64,value:127},{trackId:'keys',time:1.7,cc:64,value:0},{trackId:'keys',time:1.95,cc:11,value:0}],duration:2});
  const crop=performanceWindow(p,1.3,1.9,()=>.6,true);
  assert.deepEqual(crop.notes.map(note=>Math.round(note.time*1e6)/1e6),[-1.3,-.1]);
  assert.deepEqual(crop.ccs.map(cc=>Math.round(cc.time*1e6)/1e6),[-1.25,.4]);
});
test('linked stereo peak guard bounds transient overshoot with only 3ms latency',()=>{
  const limiter=new StereoPeakGuard(44100),l=new Float32Array(4410),r=new Float32Array(l.length);
  for(let i=0;i<l.length;i++){l[i]=i%160===0?4:Math.sin(i/10)*.4;r[i]=Math.cos(i/7)*2;}
  l[200]=NaN;r[300]=Infinity;
  const a=new Float32Array(l.length),b=new Float32Array(l.length);limiter.process(l,r,a,b);
  assert(a.every(Number.isFinite)&&b.every(Number.isFinite));assert(Math.max(...a.map(Math.abs),...b.map(Math.abs))<=OUTPUT_SAMPLE_PEAK_CEILING+1e-6);
  assert.equal(a.findIndex(v=>v!==0),limiter.latencyFrames);assert(limiter.latencyFrames/44100<=.0031);
});
test('corrupt bank reads cannot poison shared storage; cancelling one consumer preserves another',async()=>{
  try {
    setSoundfontBankReader(async()=>new ArrayBuffer(42));
    await assert.rejects(loadSoundfontBank('mallets'),/Incomplete/);
    setSoundfontBankReader(diskBank);assert((await loadSoundfontBank('mallets')).byteLength>1000);
    let unlock!:()=>void,reads=0;const gate=new Promise<void>(resolve=>{unlock=resolve;});
    setSoundfontBankReader(async id=>{reads++;await gate;return diskBank(id);});
    const abort=new AbortController(),cancelled=loadSoundfontBank('steel',abort.signal),kept=loadSoundfontBank('steel');
    abort.abort();await assert.rejects(cancelled,{name:'AbortError'});unlock();
    assert((await kept).byteLength>1000);assert.equal(reads,1);assert.equal(soundfontBankStats().pending,0);
  } finally {setSoundfontBankReader(diskBank);}
});


test('stem diagnostics measure the returned excerpt without discarded-history silence', async () => {
  const performance = performanceFixture({ duration: 7, tail: 0,
    notes: [noteFixture({ time: .1, dur: 5, midi: 60, vel: 100 })] });
  const observations: import('../src/engine/studio/audioMetrics').RenderDiagnostic[] = [];
  const audio = await renderPerformanceToAudio(performance, { ...options, rawStem: true,
    renderWindow: { start: 1, end: 2 }, maxDurationSeconds: 1,
    onDiagnostics: event => observations.push(event) });
  const stem = observations.find(event => event.stage === 'stem')!;
  const output = observations.find(event => event.stage === 'output')!;
  assert.equal(stem.metrics.frames, audio.left.length, 'every stem uses the same one-second comparison window');
  assert.equal(stem.metrics.durationSeconds, 1);
  assert.ok(stem.metrics.rmsDbfs !== null && output.metrics.rmsDbfs !== null);
  assert.ok(Math.abs(stem.metrics.rmsDbfs! - output.metrics.rmsDbfs!) < 1e-6,
    'an isolated raw stem has the same RMS as its returned PCM, not an earlier silent prefix');
});
