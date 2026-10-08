import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { SoundBankLoader, SpessaLog, GeneratorTypes } from 'spessasynth_core';
import { INSTRUMENTS_BY_ID } from '../src/engine/lookup/instruments';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { SampleRuntime } from '../src/engine/playback/soundfont/runtime';
import { setSoundfontBankReader, loadSoundfontBank, soundfontBankStats } from '../src/engine/playback/soundfont/banks';
import { patchForInstrument, type BankId } from '../src/engine/playback/soundfont/presets';
import { PERCUSSION_KIT_IDS, PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_KEYS, RECORDED_PERCUSSION_PATCHES } from '../src/engine/playback/soundfont/percussion';
import { codeForGesture } from '../src/engine/band/gestures';
import { performanceFixture, noteFixture } from './lib/playbackFixtures';
import { densePlaybackFixture } from './lib/densePlaybackFixture';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { StereoPeakGuard } from '../src/engine/playback/soundfont/peakGuard';
import { performanceWindow, renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { SAMPLE_RELEASES } from '../src/engine/playback/soundfont/bankIdentity';
import { prepareBankForLive } from '../src/engine/playback/soundfont/prepareBank';
import { StbVorbis } from 'stb-vorbis';
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
test('every catalog instrument maps to a shipped playable sample preset',()=>{
  const banks=new Map<BankId,ReturnType<typeof load>>();
  for(const def of Object.values(INSTRUMENTS_BY_ID)) {
    const patch=patchForInstrument(def.id,!!def.kit||!!def.drum||def.voicing==='unpitched');
    if(!banks.has(patch.pack))banks.set(patch.pack,load(patch.pack));
    assert(banks.get(patch.pack)!.presets.some(p=>p.program===patch.program&&p.bankMSB===patch.bank&&p.isGMGSDrum===patch.drum),def.id);
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
  assert.equal(bank.presets.filter(preset=>preset.bankMSB===66).length,20,'ship only the two custom body samples and eighteen dedicated VCSL presets');
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
    const takes=bank.presets.filter(p=>p.bankMSB===67).map(p=>p.getVoiceParameters(key,velocity));
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
  for(const key of [21,36,60,84,108]) {
    const layers=[20,60,90,120].map(v=>preset.getVoiceParameters(key,v));
    for(const layer of layers){assert.equal(layer.length,2);assert(layer.every(v=>v.sample.isLinked));}
    assert.equal(new Set(layers.map(v=>v[0].sample.name)).size,4);
    assert(layers.every(v=>v.every(s=>s.sample.getAudioData().length<=441000)));
  }
});
test('finger and pick bass use distinct recordings while slap and fretless keep their own patches',()=>{
  const bank=load('bass');assert.equal(bank.presets.length,2);
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
test('cropped sample PCM keeps sample age, bends, controller history and releases exactly',async()=>{
  const p=performanceFixture({notes:[noteFixture({dur:.213,time:.0013,pitchBend:[{offset:.1,value:9100}]}),noteFixture({time:.202,dur:1,midi:64})],ccs:[{trackId:'keys',time:.05,cc:11,value:73},{trackId:'keys',time:.09,cc:64,value:127},{trackId:'keys',time:.41,cc:64,value:0}],duration:1.5});
  const plan=compileSamplePlan(p,options),r=await runtimeFor(plan);
  const l=new Float32Array(66150),rr=new Float32Array(l.length);r.render(l,rr);
  r.seek(.327);const a=new Float32Array(128),b=new Float32Array(128);while(r.isSeeking)r.prime(a,b,128);
  const cropped=new Float32Array(10000),cr=new Float32Array(10000);r.render(cropped,cr);
  assert.deepEqual(cropped,l.slice(Math.round(.327*44100),Math.round(.327*44100)+10000));assert.deepEqual(cr,rr.slice(Math.round(.327*44100),Math.round(.327*44100)+10000));r.destroy();
});
test('new same-pitch attacks and simultaneous bends have separate ownership',()=>{
  const p=performanceFixture({notes:[noteFixture({time:0}),noteFixture({time:.01,pitchBend:[{offset:0,value:10000}]}),noteFixture({time:0,midi:64})]});
  const plan=compileSamplePlan(p,options),ons=plan.events.filter(e=>e.type==='on');
  assert.notEqual(ons[0].channel,ons.find(n=>n.time===.01)!.channel);assert.equal(ons[0].channel,ons.find(n=>n.key===64)!.channel);
});
test('live loop duration retains sample release after a short score with no declared tail',()=>{
  const p=performanceFixture({notes:[noteFixture({dur:.1})],duration:.4,tail:0}),plan=compileSamplePlan(p,options);
  assert(plan.duration+plan.origin>=.1+SAMPLE_RELEASES['64:0:false']);
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
  assert(a.every(Number.isFinite)&&b.every(Number.isFinite));assert(Math.max(...a.map(Math.abs),...b.map(Math.abs))<=.920001);
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
