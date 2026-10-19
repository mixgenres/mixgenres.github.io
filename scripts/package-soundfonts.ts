/** Reproducible offline distillation. Downloads live outside the repository.
 * Usage: npm run soundfonts:package -- <general.sf2> <ichiyanagi.sf2> <steel.sf2> <vcsl-dir> <quality-source-dir> <musescore-general.sf2> <jaw-harp.sf2> <turntable.wav> <harmonium-dir> */
import { readFileSync, writeFileSync, mkdirSync, renameSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { basename, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { BasicSoundBank, BasicPreset, BasicInstrument, EmptySample, SoundBankLoader, SpessaLog, GeneratorTypes } from 'spessasynth_core';
import { BANK_PROGRAMS, SOUNDFONT_VERSION } from '../src/engine/playback/soundfont/presets';
import { SYNTH_SAMPLE_PROGRAMS } from '../src/engine/playback/soundfont/presets';
import { SAMPLE_RELEASES, SAMPLE_RELEASES_BY_PATCH, SAMPLE_RELEASE_PROFILES, SAMPLE_RELEASE_MODULATION_BY_KEY } from '../src/engine/playback/soundfont/bankIdentity';
import { releaseModulationReserve } from './lib/soundfontReleaseModulation';
import { ELECTRONIC_KIT_PROGRAMS } from '../src/data/sound/playback/electronicKits';
import { synth } from '../src/data/instruments/catalog/electronic/synth';
import { SAMPLED_SYNTH_PATCHES } from '../src/data/sound/playback/sampledSynthPatches';
import { RECORDED_PERCUSSION_PATCHES } from '../src/engine/playback/soundfont/percussion';
import { qualityPiano, qualityBass, qualityDrumKit, qualityElectric, qualityBandoneon, qualityUprightBass, QUALITY_SOURCES } from './lib/qualitySoundfonts';
import { recordedGroupGainLinear } from './lib/recordedGroupGain';
import { regionalSoundfont, type RegionalSources } from './lib/regionalSoundfonts';
SpessaLog.setLogLevel(false, true, false);
const args = process.argv.slice(2);
const sources = args.filter(arg=>!arg.startsWith('--'));
const requestedPacks=args.find(arg=>arg.startsWith('--packs='))?.slice(8).split(',');
if(requestedPacks?.some(id=>!Object.hasOwn(BANK_PROGRAMS,id)))throw new Error('Unknown requested SoundFont pack.');
const rebuildingAllPacks=!requestedPacks||Object.keys(BANK_PROGRAMS).every(id=>requestedPacks.includes(id));
if (sources.length !== 9) throw new Error('Supply GeneralUser, Ichiyanagi and full FSS steel SF2 source paths, the selected VCSL WAV directory, quality source directory, MuseScore General SF2, FreePats Jaw Harp SF2, CC0 vinyl scratch WAV and the pinned harmonium WAV directory.');
const vorbisEncoder=process.env.MIXGENRES_VORBIS_ENCODER;
if(!vorbisEncoder&&!execFileSync('ffmpeg',['-hide_banner','-encoders'],{encoding:'utf8'}).includes('libvorbis'))throw new Error('Use ffmpeg with libvorbis, or supply MIXGENRES_VORBIS_ENCODER compiled from scripts/lib/encode-vorbis.c.');
const inputs = sources.slice(0,3).map(path => readFileSync(path));
const banks = inputs.map(data => SoundBankLoader.fromArrayBuffer(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)));
const timpaniData=readFileSync(sources[5]);
const timpaniBank=SoundBankLoader.fromArrayBuffer(timpaniData.buffer.slice(timpaniData.byteOffset,timpaniData.byteOffset+timpaniData.byteLength));
const jawHarpData=readFileSync(sources[6]);
const jawHarpBank=SoundBankLoader.fromArrayBuffer(jawHarpData.buffer.slice(jawHarpData.byteOffset,jawHarpData.byteOffset+jawHarpData.byteLength));
const percussionSources=JSON.parse(readFileSync('scripts/lib/percussion-sources.json','utf8')) as {vcslCommit:string;samples:Array<{id:string;file:string;path:string;sha256:string;instrument:string;program:number;take:number;key:number;minVelocity:number;maxVelocity:number}>};
const balafonSources=JSON.parse(readFileSync('scripts/lib/balafon-sources.json','utf8')) as {vcslCommit:string;samples:Array<{file:string;path:string;sha256:string;key:number;minVelocity:number;maxVelocity:number}>};
const harmoniumSources=JSON.parse(readFileSync('scripts/lib/harmonium-sources.json','utf8')) as {commit:string;samples:Array<{file:string;key:number;sha256:string}>};

type RecordedWave = { audio: Float32Array; peak: number };
const recordedWaveCache = new Map<string, RecordedWave>();
function readRecordedWave(file: string, maxBuffer = 16 * 1024 * 1024): RecordedWave {
  const pcm = execFileSync('ffmpeg',['-v','error','-i',file,'-f','f32le','-ac','1','-ar','44100','pipe:1'],{maxBuffer});
  const decoded = new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
  let last = decoded.length - 1;
  while (last > 0 && Math.abs(decoded[last]) < .0001) last--;
  const audio = decoded.slice(0,Math.min(decoded.length,last+220));
  for (let frame = Math.max(0,audio.length-220);frame<audio.length;frame++) audio[frame] *= (audio.length-frame)/220;
  let peak = 0;
  for (const value of audio) peak = Math.max(peak,Math.abs(value));
  return {audio,peak};
}
function recordedWave(file: string, maxBuffer?: number): RecordedWave {
  let wave = recordedWaveCache.get(file);
  if (!wave) { wave = readRecordedWave(file,maxBuffer); recordedWaveCache.set(file,wave); }
  return wave;
}
const percussionTakePeaks = new Map<string,number>();
for (const row of percussionSources.samples) {
  const wave = recordedWave(join(sources[4],'vcsl-curated',row.file));
  const group = `${row.instrument}:${row.take}`;
  percussionTakePeaks.set(group,Math.max(percussionTakePeaks.get(group)??0,wave.peak));
}
const percussionTakeGains = new Map([...percussionTakePeaks].map(([group,peak])=>[group,recordedGroupGainLinear(peak)]));
const output = 'src/assets/soundfonts'; mkdirSync(output, { recursive: true });
const staging='.cache/soundfont-package';mkdirSync(staging,{recursive:true});
const releases:Record<string,number>=rebuildingAllPacks?{}:{...SAMPLE_RELEASES};
const releasesByPatch:Record<string,number>=rebuildingAllPacks?{}:{...SAMPLE_RELEASES_BY_PATCH};
const releaseModulationByKey:Record<string,number>=rebuildingAllPacks?{}:{...SAMPLE_RELEASE_MODULATION_BY_KEY};
const releaseProfiles:Record<string,readonly [number,number,number]>=rebuildingAllPacks?{}:{...SAMPLE_RELEASE_PROFILES};
const manifest: Record<string, { bytes: number; unpackedBytes: number; sha256: string; unpackedSha256:string; presets: string[]; samples: number; format:'sf2'|'sf3' }> = requestedPacks?JSON.parse(readFileSync(`${output}/manifest.json`,'utf8')).packs:{};
const changedPacks:string[]=[];
for (const [id, programs] of Object.entries(BANK_PROGRAMS)) {
  if(requestedPacks&&!requestedPacks.includes(id))continue;
  changedPacks.push(id);
  for(const table of [releasesByPatch,releaseProfiles,releaseModulationByKey])for(const key of Object.keys(table))if(key.startsWith(`${id}:`))delete table[key];
  const quality=id==='regional'?regionalSoundfont(sources[4]):id==='piano'?qualityPiano(sources[4]):id==='bass'?qualityBass(sources[4]):id==='drumkit'?qualityDrumKit(sources[4],banks[0]):id==='electricClean'||id==='electricDrive'?qualityElectric(sources[4],id):id==='bandoneon'?qualityBandoneon(sources[4]):id==='upright'?qualityUprightBass(sources[4]):undefined;
  const source = banks[id === 'nylon' ? 1 : id === 'steel' ? 2 : 0];
  const selected = source.presets.filter(preset => {
    if(id==='nylon'||id==='steel')return !preset.isDrum&&(id==='nylon'?[0,4,24].includes(preset.bankMSB):preset.bankMSB===0);
    if(id==='percussion')return preset.isGMGSDrum&&[0,...Object.values(ELECTRONIC_KIT_PROGRAMS)].includes(preset.program);
    if(id==='guitars'&&!preset.isDrum&&preset.bankMSB===16&&preset.bankLSB===0&&preset.program===25)return true;
    if(id==='winds'&&!preset.isDrum&&preset.bankMSB===24&&preset.bankLSB===0&&preset.program===75)return true;
    return !preset.isDrum&&preset.bankMSB===0&&preset.bankLSB===0&&(programs as readonly number[]).includes(preset.program);
  });
  if (!selected.length&&!quality) throw new Error(`Empty pack: ${id}`);
  const bank = quality??new BasicSoundBank(); if(!quality)bank.soundBankInfo = { ...source.soundBankInfo };
  if(!quality)for (const preset of selected) bank.clonePreset(preset);
  if(id==='nylon')for(const preset of bank.presets){preset.bankMSB=preset.bankMSB===0?64:preset.bankMSB===4?65:66;}
  if (id === 'steel') {
    // A dedicated bank leaves the lighter GM guitars available as alternate sounds.
    bank.presets = bank.presets.slice(0, 1);
    const p = bank.presets[0]; p.bankMSB = 64; p.program = 25;
    p.name = 'MixGenres FSS steel';
  }
  if (id === 'steel') {
    const copy = BasicSoundBank.copyFrom(bank), muted = copy.presets[0];
    muted.name = `MixGenres damped ${muted.name}`; muted.bankMSB = 65;
    // Preset generators are offsets. The generic addToGenerator helper uses
    // instrument defaults and clamps negative cutoff offsets, so use explicit
    // preset values here to avoid accidentally brightening/choking the sound.
    muted.globalZone.setGenerator(GeneratorTypes.initialFilterFc,muted.globalZone.getGenerator(GeneratorTypes.initialFilterFc,0)-3600,false);
    muted.globalZone.setGenerator(GeneratorTypes.releaseVolEnv,muted.globalZone.getGenerator(GeneratorTypes.releaseVolEnv,0)-3600,false);
    bank.clonePreset(muted);
  }
  if(id==='keys') {
    const preset=new BasicPreset(bank);preset.name='MixGenres Indian harmonium';preset.bankMSB=66;preset.bankLSB=0;preset.program=28;
    const instrument=new BasicInstrument();instrument.name=preset.name;
    const rows=[...harmoniumSources.samples].sort((a,b)=>a.key-b.key);
    if(rows.length<30||new Set(rows.map(row=>row.key)).size!==rows.length)throw new Error('Pinned harmonium source set is incomplete or has duplicate roots.');
    for(let index=0;index<rows.length;index++) {
      const row=rows[index],file=join(sources[8],row.file),source=readFileSync(file);
      if(createHash('sha256').update(source).digest('hex')!==row.sha256)throw new Error(`Harmonium source hash changed: ${row.file}`);
      const wave=recordedWave(file);
      if(!wave.audio.length||wave.peak<.05)throw new Error(`Harmonium sample is silent: ${row.file}`);
      const sample=new EmptySample();sample.name=`Harmonium ${row.key}`;sample.originalKey=row.key;sample.setAudioData(wave.audio,44100);
      const minKey=Math.max(36,index===0?36:Math.floor((rows[index-1].key+row.key)/2)+1);
      const maxKey=Math.min(84,index===rows.length-1?84:Math.floor((row.key+rows[index+1].key)/2));
      const zone=instrument.createZone(sample);zone.keyRange={min:minKey,max:maxKey};zone.velRange={min:1,max:127};
      zone.setGenerator(GeneratorTypes.releaseVolEnv,Math.round(1200*Math.log2(.35)));
      bank.addSamples(sample);
    }
    preset.createZone(instrument);bank.addInstruments(instrument);bank.addPresets(preset);
  }
  if (id === 'percussion') {
    const jawHarp=jawHarpBank.presets.find(preset=>preset.program===0&&!preset.isDrum);
    if(!jawHarp)throw new Error('FreePats Jaw Harp source has no pitched program 0.');
    bank.clonePreset(jawHarp);
    const jawPreset=bank.presets.at(-1)!;jawPreset.name='MixGenres jaw harp';jawPreset.bankMSB=66;jawPreset.bankLSB=0;jawPreset.program=22;
    for (const kind of ['cajon', 'palmas'] as const) {
      const preset = new BasicPreset(bank); preset.name = `MixGenres sampled ${kind}`;
      preset.bankMSB = 66; preset.bankLSB = 0; preset.program = kind === 'cajon' ? 0 : 1;
      const instrument = new BasicInstrument(); instrument.name = preset.name;
      for (let note = 0; note < 3; note++) for (const layer of kind === 'cajon' ? ['mp','f'] : ['rr']) {
        const file = join(sources[3], kind === 'cajon' ? `Cajon_hit${note+1}_${layer}_rr1.wav` : `Clap_rr${note+1}.wav`);
        const pcm = execFileSync('ffmpeg', ['-v','error','-i',file,'-f','f32le','-ac','1','-ar','44100','pipe:1']);
        const data = new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
        let last = data.length-1; while(last>0 && Math.abs(data[last])<.0001)last--;
        const audio = data.slice(0,Math.min(data.length,last+220));
        for(let frame=Math.max(0,audio.length-220);frame<audio.length;frame++)audio[frame]*=(audio.length-frame)/220;
        const sample = new EmptySample(); sample.name = basename(file).slice(0,20);
        const key = (kind === 'cajon' ? 35 : 38)+note;
        sample.originalKey = key; sample.setAudioData(audio,44100);
        const zone = instrument.createZone(sample); zone.keyRange = {min:key,max:key};
        zone.velRange = kind === 'cajon' ? layer === 'mp' ? {min:1,max:75} : {min:76,max:127} : {min:1,max:127};
        zone.setGenerator(GeneratorTypes.releaseVolEnv, 2400);
        bank.addSamples(sample);
      }
      preset.createZone(instrument); bank.addInstruments(instrument); bank.addPresets(preset);
    }
    const timpani=timpaniBank.presets.find(preset=>preset.program===47&&!preset.isDrum);
    if(!timpani)throw new Error('MuseScore General source has no chromatic timpani preset.');
    bank.clonePreset(timpani);
    const sampleCache=new Map<string,EmptySample>();
    for(const [instrumentId,route] of Object.entries(RECORDED_PERCUSSION_PATCHES)) {
      for(let take=0;take<route.takes;take++) {
        // Compact unique names also stay distinct in plain SF2 readers that
        // do not support the library's extended-name metadata.
        const preset=new BasicPreset(bank);preset.name=`MG ${instrumentId} ${take+1}`;
        preset.bankMSB=66;preset.bankLSB=0;preset.program=route.program+take;
        const instrument=new BasicInstrument();instrument.name=preset.name;
        const rows=percussionSources.samples.filter(row=>row.instrument===instrumentId&&row.take===take);
        if(!rows.length)throw new Error(`No pinned recordings for ${instrumentId} take ${take+1}.`);
        for(const row of rows) {
          const group = `${instrumentId}:${take}`;
          const groupGain = percussionTakeGains.get(group);
          if(groupGain===undefined)throw new Error(`No recording gain for ${group}`);
          const wave = recordedWave(join(sources[4],'vcsl-curated',row.file));
          const cacheKey = `${row.file}:${groupGain.toFixed(6)}`;
          let sample=sampleCache.get(cacheKey);
          if(!sample) {
            const audio = groupGain === 1 ? wave.audio : Float32Array.from(wave.audio,value=>value*groupGain);
            sample=new EmptySample();sample.name=row.id.slice(0,20);sample.originalKey=row.key;sample.setAudioData(audio,44100);
            sampleCache.set(cacheKey,sample);bank.addSamples(sample);
          }
          const zone=instrument.createZone(sample);zone.keyRange={min:row.key,max:row.key};
          zone.velRange={min:row.minVelocity,max:row.maxVelocity};
        }
        preset.createZone(instrument);bank.addInstruments(instrument);bank.addPresets(preset);
      }
    }
  }
  if(id==='mallets') {
    const preset=new BasicPreset(bank);preset.name='MixGenres VCSL Balafon traditional mallet';preset.bankMSB=66;preset.bankLSB=0;preset.program=23;
    const instrument=new BasicInstrument();instrument.name=preset.name;
    const samples=balafonSources.samples;
    const roots=[...new Set(samples.map(row=>row.key))].sort((a,b)=>a-b);
    for(const row of samples) {
      const file=join(sources[3],'balafon',row.file);
      const pcm=execFileSync('ffmpeg',['-v','error','-i',file,'-f','f32le','-ac','1','-ar','44100','pipe:1'],{maxBuffer:8*1024*1024});
      const decoded=new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
      let last=decoded.length-1;while(last>0&&Math.abs(decoded[last])<.0001)last--;
      const audio=decoded.slice(0,Math.min(decoded.length,last+220));
      for(let frame=Math.max(0,audio.length-220);frame<audio.length;frame++)audio[frame]*=(audio.length-frame)/220;
      const sample=new EmptySample();sample.name=row.file.replace(/\.wav$/,'').slice(0,20);sample.originalKey=row.key;sample.setAudioData(audio,44100);
      const zone=instrument.createZone(sample);const rootIndex=roots.indexOf(row.key);
      zone.keyRange={min:rootIndex===0?48:Math.floor((roots[rootIndex-1]+row.key)/2)+1,max:rootIndex===roots.length-1?88:Math.floor((row.key+roots[rootIndex+1])/2)};
      zone.velRange={min:row.minVelocity,max:row.maxVelocity};bank.addSamples(sample);
    }
    preset.createZone(instrument);bank.addInstruments(instrument);bank.addPresets(preset);
  }
  if(id==='electronic') {
    // Distinct sampled synth patches preserve the authored filter/envelope.
    // A generic GM bass or slow pad cannot supply a clean sub or short chord stab.
    for(const [patchId,program] of Object.entries(SYNTH_SAMPLE_PROGRAMS)) {
      const patch=synth.patches!.find(item=>item.id===patchId)!;
      const input=source.presets.find(p=>!p.isDrum&&p.bankMSB===0&&p.program===SAMPLED_SYNTH_PATCHES[patchId].sourceProgram);
      if(!input)throw new Error(`Missing source for synth patch ${patchId}`);
      const isolated=new BasicSoundBank();isolated.clonePreset(input);
      const preset=isolated.presets[0];preset.bankMSB=75;preset.bankLSB=0;preset.program=program;preset.name=`MG ${patch.id}`;
      // cloneInstrument deduplicates by name. Keep each envelope/filter distinct
      // while allowing the underlying waveform samples to remain shared.
      isolated.instruments.forEach((instrument,index)=>{instrument.name=`MG synth ${program}:${index}`;});
      const timecents=(seconds:number)=>Math.round(1200*Math.log2(Math.max(.001,seconds)));
      const parameters=[
        [GeneratorTypes.initialFilterFc,Math.round(1200*Math.log2(patch.cutoffHz/8.176))],
        [GeneratorTypes.initialFilterQ,Math.round(patch.resonance*160)],
        [GeneratorTypes.attackVolEnv,timecents(patch.attackSeconds)],
        [GeneratorTypes.decayVolEnv,timecents(patch.decaySeconds)],
        [GeneratorTypes.sustainVolEnv,Math.round(-200*Math.log10(Math.max(.001,patch.sustain)))],
        [GeneratorTypes.releaseVolEnv,timecents(patch.releaseSeconds)],
        [GeneratorTypes.modEnvToFilterFc,0],
      ] as const;
      for(const [generator,value] of parameters) {
        preset.globalZone.setGenerator(generator,0,false);
        for(const zone of preset.zones)zone.setGenerator(generator,0,false);
        for(const instrument of isolated.instruments)for(const zone of instrument.zones)zone.setGenerator(generator,value,false);
      }
      bank.clonePreset(preset);
    }
    const file=sources[7];
    const pcm=execFileSync('ffmpeg',['-v','error','-i',file,'-f','f32le','-ac','1','-ar','44100','pipe:1']);
    const decoded=new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
    let last=decoded.length-1;while(last>0&&Math.abs(decoded[last])<.0001)last--;
    const audio=decoded.slice(0,Math.min(decoded.length,last+220));
    for(let frame=Math.max(0,audio.length-220);frame<audio.length;frame++)audio[frame]*=(audio.length-frame)/220;
    const sample=new EmptySample();sample.name='Vinyl Scratch 6';sample.originalKey=60;sample.setAudioData(audio,44100);
    const preset=new BasicPreset(bank);preset.name='MixGenres sampled vinyl scratch';preset.bankMSB=66;preset.bankLSB=0;preset.program=24;
    const instrument=new BasicInstrument();instrument.name=preset.name;const zone=instrument.createZone(sample);zone.keyRange={min:36,max:90};
    preset.createZone(instrument);bank.addSamples(sample);bank.addInstruments(instrument);bank.addPresets(preset);
  }
  bank.removeUnusedElements(); bank.flush();
  bank.soundBankInfo.name = `MixGenres ${id} (${SOUNDFONT_VERSION})`;
  for(const preset of bank.presets) {
    let release=.001;
    for(let key=0;key<128;key++) {
      let oneShotRelease=.001,oneShotDuration=0,loopRelease=.001,hasVoices=false,releaseModulation=0;
      for(const velocity of [1,36,56,78,99,119,127]) for(const voice of preset.getVoiceParameters(key,velocity)) {
        hasVoices=true;
        releaseModulation=Math.max(releaseModulation,releaseModulationReserve(voice.modulators));
        // Match SpessaSynth's -7200 timecent release floor, then bound one-shot
        // lifetimes by the selected sample's actual end below.
        const voiceRelease=Math.pow(2,Math.max(-7200,voice.generators[GeneratorTypes.releaseVolEnv])/1200);
        release=Math.max(release,voiceRelease);
        const audioLength=voice.sample.getAudioData().length;
        const rootKey=voice.generators[GeneratorTypes.overridingRootKey]>=0
          ?voice.generators[GeneratorTypes.overridingRootKey]:voice.sample.originalKey;
        const tuneCents=voice.generators[GeneratorTypes.coarseTune]*100+voice.generators[GeneratorTypes.fineTune];
        const playbackRatio=Math.pow(2,((key-rootKey)*100+tuneCents)/1200);
        const sampleSeconds=audioLength/voice.sample.sampleRate/playbackRatio;
        if(voice.generators[GeneratorTypes.sampleModes]&1)loopRelease=Math.max(loopRelease,voiceRelease);
        else {oneShotRelease=Math.max(oneShotRelease,voiceRelease);oneShotDuration=Math.max(oneShotDuration,sampleSeconds);}
      }
      if(releaseModulation>0)releaseModulationByKey[`${id}:${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}:${key}`]=releaseModulation;
      if(hasVoices)releaseProfiles[`${id}:${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}:${key}`]=[
        Math.round(oneShotRelease*10000)/10000,Math.round(oneShotDuration*10000)/10000,Math.round(loopRelease*10000)/10000,
      ];
    }
    releases[`${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}`]=release;
    releasesByPatch[`${id}:${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}`]=release;
  }
  const compressed=true;
  if(compressed)for(const sample of bank.samples)await sample.compressSample(async(audio,sampleRate)=>{
    const ogg=execFileSync(vorbisEncoder??'ffmpeg',vorbisEncoder?[String(sampleRate)]:['-v','error','-fflags','+bitexact','-f','f32le','-ar',String(sampleRate),'-ac','1','-i','pipe:0',
      '-c:a','libvorbis','-q:a','6','-flags:a','+bitexact','-f','ogg','pipe:1'],{input:Buffer.from(audio.buffer,audio.byteOffset,audio.byteLength),maxBuffer:8*1024*1024});
    return new Uint8Array(ogg.buffer.slice(ogg.byteOffset,ogg.byteOffset+ogg.byteLength));
  });
  if(compressed&&bank.samples.some(s=>!s.isCompressed))throw new Error(`Sample compression failed for ${id}; refusing to ship an unexpectedly large bank.`);
  const sf2 = bank.writeSF2(); const packed = gzipSync(new Uint8Array(sf2), { level: 9 });
  writeFileSync(`${staging}/${id}.sfpack`, packed);
  manifest[id] = { bytes: packed.length, unpackedBytes: sf2.byteLength,
    sha256: createHash('sha256').update(packed).digest('hex'), unpackedSha256:createHash('sha256').update(new Uint8Array(sf2)).digest('hex'), presets: bank.presets.map(p=>p.toMIDIString()), samples: bank.samples.length,format:compressed?'sf3':'sf2' };
  console.log(`${id}: ${(packed.length/1048576).toFixed(2)} MiB, ${bank.presets.length} presets, ${bank.samples.length} samples`);
}
for(const id of changedPacks)renameSync(`${staging}/${id}.sfpack`,`${output}/${id}.sfpack`);
const contentKey = createHash('sha256').update(SOUNDFONT_VERSION+JSON.stringify(manifest)).digest('hex').slice(0, 16);
writeFileSync('src/engine/playback/soundfont/bankIdentity.ts', `// Generated by scripts/package-soundfonts.ts; invalidates every physical sample cache.\nexport const SOUNDFONT_CONTENT_KEY = '${contentKey}';\nexport const SAMPLE_RELEASES:Readonly<Record<string,number>> = ${JSON.stringify(releases)};\nexport const SAMPLE_RELEASES_BY_PATCH:Readonly<Record<string,number>> = ${JSON.stringify(releasesByPatch)};\nexport const SAMPLE_RELEASE_PROFILES:Readonly<Record<string,readonly [oneShotRelease:number,oneShotDuration:number,loopRelease:number]>> = ${JSON.stringify(releaseProfiles)};\nexport const SAMPLE_RELEASE_MODULATION_BY_KEY:Readonly<Record<string,number>> = ${JSON.stringify(releaseModulationByKey)};\nexport const BANK_FILES = ${JSON.stringify(Object.fromEntries(Object.entries(manifest).map(([id,{bytes,unpackedBytes,sha256,unpackedSha256}])=>[id,{bytes,unpackedBytes,sha256,unpackedSha256}])))};\n`);
const vcslSha256=Object.fromEntries(Array.from({length:3},(_,i)=>[`Cajon_hit${i+1}_mp_rr1.wav`,`Cajon_hit${i+1}_f_rr1.wav`,`Clap_rr${i+1}.wav`]).flat().map(file=>[file,createHash('sha256').update(readFileSync(join(sources[3],file))).digest('hex')]));
const balafonSha256=Object.fromEntries(balafonSources.samples.map(row=>[row.file,createHash('sha256').update(readFileSync(join(sources[3],'balafon',row.file))).digest('hex')]));
writeFileSync(`${output}/manifest.json`, JSON.stringify({ version: SOUNDFONT_VERSION,
  sourceSha256: inputs.map(data => createHash('sha256').update(data).digest('hex')), vcslCommit:percussionSources.vcslCommit,vcslSha256,balafonSha256,
  vcslPercussionSha256:Object.fromEntries(percussionSources.samples.map(row=>[row.id,createHash('sha256').update(readFileSync(join(sources[4],'vcsl-curated',row.file))).digest('hex')])),packs:manifest }, null, 2) + '\n');
const qualitySourceSha256=Object.fromEntries(Object.entries(QUALITY_SOURCES).map(([id,path])=>[id,createHash('sha256').update(readFileSync(join(sources[4],path))).digest('hex')]));
const completeManifest=JSON.parse(readFileSync(`${output}/manifest.json`,'utf8'));
const regionalSources=JSON.parse(readFileSync('scripts/lib/regional-sources.json','utf8')) as RegionalSources;
completeManifest.regionalSourceSha256=Object.fromEntries(regionalSources.sources.map(source=>[source.id,source.sha256]));
completeManifest.qualitySourceSha256=qualitySourceSha256;
completeManifest.extraSourceSha256={museScoreGeneral:createHash('sha256').update(timpaniData).digest('hex'),jawHarp:createHash('sha256').update(jawHarpData).digest('hex'),turntable:createHash('sha256').update(readFileSync(sources[7])).digest('hex')};
completeManifest.distillation={allBanks:{format:'SF3',codec:'Ogg Vorbis',quality:6},piano:{velocityLayers:[4,8,12,16],sampleRate:44100,recordedDecay:'complete source sample',vorbisQuality:6},drumkit:{velocityLayers:6,takes:3,layout:'GM',sourceLayout:'chromatic C3-F#4',brushKit:{source:'GeneralUser GS bank 0/program 40',program:3},recordedDecay:'complete source sample',vorbisQuality:6},electric:{recordedDynamics:2,softMaxVelocity:92,takes:3,upperRangeDynamics:'source hard recordings where soft recordings are absent',recordedDecay:'complete source sample',vorbisQuality:6},recordedPercussion:Object.fromEntries(Object.entries(RECORDED_PERCUSSION_PATCHES).map(([id,route])=>[id,{program:route.program,takes:route.takes,source:'VCSL CC0'}]))};
completeManifest.distillation.bandoneon={recordedSource:'Jörg Bleymehl 1930 ELA bandoneon',recordedSamples:12,presets:2,direction:'open/close use the same samples with a modest close-reed filter/attack offset'};
completeManifest.distillation.electronicKits={source:'GeneralUser GS',bank:0,drum:true,programs:ELECTRONIC_KIT_PROGRAMS,layout:'GM component keys'};
completeManifest.distillation.synthPatches={source:'GeneralUser GS waveforms',bank:75,programs:SYNTH_SAMPLE_PROGRAMS,parameters:'authored lowpass filter and volume envelope; shared waveform PCM, distinct instrument zones'};
completeManifest.distillation.countryMandolin={source:'GeneralUser GS',bank:16,program:25,sourcePreset:'Mandolin',replacesWrongGmSlot:'bank 0/program 106 Shamisen'};
completeManifest.distillation.tinWhistle={source:'GeneralUser GS',bank:24,program:75,sourcePreset:'Tin Whistle',recordedRoots:5,lowWhistle:'shares this whistle set in its lower written range'};
completeManifest.distillation.electricBass={source:'YR fingerstyle and picked recordings',sampleIdentity:'separate source names prevent cross-source deduplication',upperKey:55,upperRange:'extend the highest source zone by transposing its recorded waveform; not additional recorded notes'};
completeManifest.distillation.uprightBass={recordedSource:'D. Smolken 1958 Otto Rubner double bass, CGDA fifths tuning',sourceArchiveSha256:'380986bb52ee6b6469d28e9089792a3ed37cbd163fe5a19160bf4f98785e7ccb',presets:{pizzicato:4,arco:2},roundRobin:'four pizzicato recordings, and separate down/up bow recordings',velocityLayers:{pizzicato:3,arco:5},discarded:'unpitched noises and body-contact keys',sampleRate:44100,recordedDecay:'complete source sample',vorbisQuality:6};
completeManifest.harmoniumSourceSha256=Object.fromEntries(harmoniumSources.samples.map(row=>[row.file,createHash('sha256').update(readFileSync(join(sources[8],row.file))).digest('hex')]));
completeManifest.distillation.harmonium={recordedSource:'donyaquick, Freesound 330410, via tonejs-instruments',sourceCommit:harmoniumSources.commit,samples:harmoniumSources.samples.length,sourceRange:'C2-D5',playableRange:'C2-C6',bank:66,program:28,license:'CC BY 3.0',sampleRate:44100,terminalFadeSeconds:.005,releaseSeconds:.35,vorbisQuality:6};
writeFileSync(`${output}/manifest.json`,JSON.stringify(completeManifest,null,2)+'\n');
writeFileSync(`${output}/notices/GeneralUser-GS.txt`,`${banks[0].soundBankInfo.name}\n${banks[0].soundBankInfo.copyright}\n\n${banks[0].soundBankInfo.comment}\n`);
writeFileSync(`${output}/notices/MuseScore-General.txt`,`${timpaniBank.soundBankInfo.name}\n${timpaniBank.soundBankInfo.copyright}\n\n${timpaniBank.soundBankInfo.comment}\n\nSource: https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/MuseScore_General.sf2\n`);
writeFileSync(`${output}/notices/Jaw-Harp.txt`,readFileSync(join(sources[4],'JawHarp-SF2-20200606/readme.txt'),'utf8')+'\nSource: https://freepats.zenvoid.org/Ethnic/jaw-harp.html\n');
writeFileSync(`${output}/notices/Vinyl-Scratch.txt`,'Vinyl Scratch #6 by Joseph SARDIN\nSource: https://bigsoundbank.com/vinyl-scratch-6-s2863.html\nCC0 sample; source WAV SHA-256: '+createHash('sha256').update(readFileSync(sources[7])).digest('hex')+'\n');
writeFileSync(`${output}/notices/Ichiyanagi.txt`,readFileSync(join(sources[4],'Ichiyanagi_license.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'CL_Guitar_Release.txt'),'utf8'));
writeFileSync(`${output}/notices/Salamander.txt`,readFileSync(join(sources[4],'SalamanderGrandPiano-SF2-V3+20200602/readme.txt'),'utf8'));
writeFileSync(`${output}/notices/Muldjord.txt`,readFileSync(join(sources[4],'MuldjordKit-SF2-20201018/README.txt'),'utf8'));
writeFileSync(`${output}/notices/YR-bass.txt`,readFileSync(join(sources[4],'FingerBassYR SF2-20190930/README.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'PickedBassYR SF2-20190930/README.txt'),'utf8'));
writeFileSync(`${output}/notices/Bleymehl-bandoneon.txt`,`${qualityBandoneon(sources[4]).soundBankInfo.name}\n${qualityBandoneon(sources[4]).soundBankInfo.copyright}\n\n${qualityBandoneon(sources[4]).soundBankInfo.comment}\n\nSource: https://github.com/jebentancour/Bandonberry/blob/master/bandoneon_v2.sf2\n`);
writeFileSync(`${output}/notices/FSBS-electric.txt`,readFileSync(join(sources[4],'EGuitarFSBS-clean SF2-20260807/README.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'EGuitarFSBS-dist2 SF2-20220911/README.txt'),'utf8'));
writeFileSync(`${output}/notices/D-Smolken-double-bass.txt`,readFileSync(join(sources[4],'dsmolken_double_bass/LICENSE'),'utf8')+'\n\n'+readFileSync(join(sources[4],'dsmolken_double_bass/readme.txt'),'utf8')+'\n\nSource: https://github.com/sfzinstruments/dsmolken.double-bass\n');
writeFileSync(`${output}/notices/Tonejs-harmonium.txt`,'Indian harmonium samples by donyaquick, Freesound sound 330410, distributed in tonejs-instruments.\nSource sample: https://freesound.org/people/donyaquick/sounds/330410/\nSource library: https://github.com/nbrosowsky/tonejs-instruments/tree/622c2f1c32c8cfce4158ddc3eb26e518ddef37e5/samples/harmonium\nThe tonejs-instruments sample license is Creative Commons Attribution 3.0: https://creativecommons.org/licenses/by/3.0/\nThe samples are trimmed, converted to mono 44.1 kHz, given a short terminal fade and encoded to Ogg Vorbis in the distributed SF3 bank.\n');
mkdirSync('public',{recursive:true});
writeFileSync(`${output}/notices/BISA.txt`, `Berklee Intersectional Soundbox Archive (2025)\n${regionalSources.archive}\nCreative Commons Attribution 4.0: ${regionalSources.license}\n\n`
  +Object.entries(regionalSources.credits).map(([instrument,credit])=>`${instrument}: ${credit}`).join('\n')
  +'\n\nSources:\n'+regionalSources.sources.map(source=>`${source.file}: ${source.url}`).join('\n')
  +'\n\nModified for the app: mono 44.1 kHz, pinned single-note crops, source-group gain, small edge fades, pitch-center corrections, crossfaded sustain loops for quena and bowed erhu, SF3/Ogg Vorbis q6. The full source files and individual hashes are listed in scripts/lib/regional-sources.json.\n');
writeFileSync('public/soundfont-notices.txt', 'MixGenres distilled SoundFont banks\n\n'+['BISA.txt','GeneralUser-GS.txt','MuseScore-General.txt','Jaw-Harp.txt','Vinyl-Scratch.txt','Ichiyanagi.txt','FSS-steel-guitar.txt','Salamander.txt','Muldjord.txt','YR-bass.txt','FSBS-electric.txt','Bleymehl-bandoneon.txt','D-Smolken-double-bass.txt','Tonejs-harmonium.txt','VCSL.txt','GPL-3.txt','CC0.txt'].map(name=>`${name}\n\n${readFileSync(`${output}/notices/${name}`,'utf8')}`).join('\n\n')+'\n\nSpessaSynth core 4.3.22, Apache-2.0\n'+readFileSync('node_modules/spessasynth_core/LICENSE','utf8')+'\n\nstb-vorbis 0.0.6\n'+readFileSync('node_modules/stb-vorbis/LICENSE','utf8'));
