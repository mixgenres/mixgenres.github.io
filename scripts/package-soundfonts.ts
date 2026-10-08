/** Reproducible offline distillation. Downloads live outside the repository.
 * Usage: npm run soundfonts:package -- <general.sf2> <ichiyanagi.sf2> <steel.sf2> <vcsl-dir> <quality-source-dir> */
import { readFileSync, writeFileSync, mkdirSync, renameSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { basename, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { BasicSoundBank, BasicPreset, BasicInstrument, EmptySample, SoundBankLoader, SpessaLog, GeneratorTypes } from 'spessasynth_core';
import { BANK_PROGRAMS, SOUNDFONT_VERSION } from '../src/engine/playback/soundfont/presets';
import { qualityPiano, qualityBass, qualityDrumKit, qualityElectric, qualityBandoneon, qualityUprightBass, QUALITY_SOURCES } from './lib/qualitySoundfonts';
SpessaLog.setLogLevel(false, true, false);
const sources = process.argv.slice(2);
if (sources.length !== 5) throw new Error('Supply GeneralUser, Ichiyanagi and full FSS steel SF2 source paths, the selected VCSL WAV directory and quality source directory.');
const vorbisEncoder=process.env.MIXGENRES_VORBIS_ENCODER;
if(!vorbisEncoder&&!execFileSync('ffmpeg',['-hide_banner','-encoders'],{encoding:'utf8'}).includes('libvorbis'))throw new Error('Use ffmpeg with libvorbis, or supply MIXGENRES_VORBIS_ENCODER compiled from scripts/lib/encode-vorbis.c.');
const inputs = sources.slice(0,3).map(path => readFileSync(path));
const banks = inputs.map(data => SoundBankLoader.fromArrayBuffer(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)));
const output = 'src/assets/soundfonts'; mkdirSync(output, { recursive: true });
const staging='.cache/soundfont-package';mkdirSync(staging,{recursive:true});
const releases:Record<string,number>={};
const manifest: Record<string, { bytes: number; unpackedBytes: number; sha256: string; unpackedSha256:string; presets: string[]; samples: number; format:'sf2'|'sf3' }> = {};
for (const [id, programs] of Object.entries(BANK_PROGRAMS)) {
  const quality=id==='piano'?qualityPiano(sources[4]):id==='bass'?qualityBass(sources[4]):id==='drumkit'?qualityDrumKit(sources[4]):id==='electricClean'||id==='electricDrive'?qualityElectric(sources[4],id):id==='bandoneon'?qualityBandoneon(sources[4]):id==='upright'?qualityUprightBass(sources[4]):undefined;
  const source = banks[id === 'nylon' ? 1 : id === 'steel' ? 2 : 0];
  const selected = source.presets.filter(preset => id === 'nylon' || id === 'steel'
    ? !preset.isDrum && (id==='nylon'?[0,4,24].includes(preset.bankMSB):preset.bankMSB === 0)
    : id === 'percussion' ? preset.isGMGSDrum && preset.program === 0
      : !preset.isDrum && preset.bankMSB === 0 && preset.bankLSB === 0 && (programs as readonly number[]).includes(preset.program));
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
  if (id === 'percussion') {
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
  }
  bank.removeUnusedElements(); bank.flush();
  bank.soundBankInfo.name = `MixGenres ${id} (${SOUNDFONT_VERSION})`;
  for(const preset of bank.presets) {
    let release=.02;
    for(let key=0;key<128;key++) for(const velocity of [40,90,127]) for(const voice of preset.getVoiceParameters(key,velocity)) {
      release=Math.max(release,Math.min(6,Math.pow(2,voice.generators[GeneratorTypes.releaseVolEnv]/1200)));
    }
    releases[`${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}`]=release;
  }
  const compressed=id==='piano'||id==='drumkit'||id==='electricClean'||id==='electricDrive'||id==='upright';
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
for(const id of Object.keys(manifest))renameSync(`${staging}/${id}.sfpack`,`${output}/${id}.sfpack`);
const contentKey = createHash('sha256').update(SOUNDFONT_VERSION+JSON.stringify(manifest)).digest('hex').slice(0, 16);
writeFileSync('src/engine/playback/soundfont/bankIdentity.ts', `// Generated by scripts/package-soundfonts.ts; invalidates every physical sample cache.\nexport const SOUNDFONT_CONTENT_KEY = '${contentKey}';\nexport const SAMPLE_RELEASES:Readonly<Record<string,number>> = ${JSON.stringify(releases)};\nexport const BANK_FILES = ${JSON.stringify(Object.fromEntries(Object.entries(manifest).map(([id,{bytes,unpackedBytes,sha256,unpackedSha256}])=>[id,{bytes,unpackedBytes,sha256,unpackedSha256}])))};\n`);
const vcslSha256=Object.fromEntries(Array.from({length:3},(_,i)=>[`Cajon_hit${i+1}_mp_rr1.wav`,`Cajon_hit${i+1}_f_rr1.wav`,`Clap_rr${i+1}.wav`]).flat().map(file=>[file,createHash('sha256').update(readFileSync(join(sources[3],file))).digest('hex')]));
writeFileSync(`${output}/manifest.json`, JSON.stringify({ version: SOUNDFONT_VERSION,
  sourceSha256: inputs.map(data => createHash('sha256').update(data).digest('hex')), vcslCommit:'c1ea7bcc3c7309650ab0da9d15c9cd1fbc4a4c7e',vcslSha256, packs: manifest }, null, 2) + '\n');
const qualitySourceSha256=Object.fromEntries(Object.entries(QUALITY_SOURCES).map(([id,path])=>[id,createHash('sha256').update(readFileSync(join(sources[4],path))).digest('hex')]));
const completeManifest=JSON.parse(readFileSync(`${output}/manifest.json`,'utf8'));
completeManifest.qualitySourceSha256=qualitySourceSha256;
completeManifest.distillation={piano:{velocityLayers:[4,8,12,16],maxDecaySeconds:10,sampleRate:44100,terminalFadeSeconds:.15,vorbisQuality:6},drumkit:{velocityLayers:6,takes:3,layout:'GM',sourceLayout:'chromatic C3-F#4',maxDecaySeconds:8,terminalFadeSeconds:.15,vorbisQuality:6},electric:{recordedDynamics:2,softMaxVelocity:92,takes:3,upperRangeDynamics:'source hard recordings where soft recordings are absent',maxDecaySeconds:12,terminalFadeSeconds:.15,vorbisQuality:6}};
completeManifest.distillation.bandoneon={recordedSource:'Jörg Bleymehl 1930 ELA bandoneon',recordedSamples:12,presets:2,direction:'open/close use the same samples with a modest close-reed filter/attack offset'};
completeManifest.distillation.uprightBass={recordedSource:'D. Smolken 1958 Otto Rubner double bass, CGDA fifths tuning',sourceArchiveSha256:'380986bb52ee6b6469d28e9089792a3ed37cbd163fe5a19160bf4f98785e7ccb',presets:{pizzicato:4,arco:2},roundRobin:'four pizzicato recordings, and separate down/up bow recordings',velocityLayers:{pizzicato:3,arco:5},discarded:'unpitched noises and body-contact keys',sampleRate:44100,maxSampleSeconds:12,terminalFadeSeconds:.15,vorbisQuality:6};
writeFileSync(`${output}/manifest.json`,JSON.stringify(completeManifest,null,2)+'\n');
writeFileSync(`${output}/notices/GeneralUser-GS.txt`,`${banks[0].soundBankInfo.name}\n${banks[0].soundBankInfo.copyright}\n\n${banks[0].soundBankInfo.comment}\n`);
writeFileSync(`${output}/notices/Ichiyanagi.txt`,readFileSync(join(sources[4],'Ichiyanagi_license.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'CL_Guitar_Release.txt'),'utf8'));
writeFileSync(`${output}/notices/Salamander.txt`,readFileSync(join(sources[4],'SalamanderGrandPiano-SF2-V3+20200602/readme.txt'),'utf8'));
writeFileSync(`${output}/notices/Muldjord.txt`,readFileSync(join(sources[4],'MuldjordKit-SF2-20201018/README.txt'),'utf8'));
writeFileSync(`${output}/notices/YR-bass.txt`,readFileSync(join(sources[4],'FingerBassYR SF2-20190930/README.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'PickedBassYR SF2-20190930/README.txt'),'utf8'));
writeFileSync(`${output}/notices/Bleymehl-bandoneon.txt`,`${qualityBandoneon(sources[4]).soundBankInfo.name}\n${qualityBandoneon(sources[4]).soundBankInfo.copyright}\n\n${qualityBandoneon(sources[4]).soundBankInfo.comment}\n\nSource: https://github.com/jebentancour/Bandonberry/blob/master/bandoneon_v2.sf2\n`);
writeFileSync(`${output}/notices/FSBS-electric.txt`,readFileSync(join(sources[4],'EGuitarFSBS-clean SF2-20260807/README.txt'),'utf8')+'\n'+readFileSync(join(sources[4],'EGuitarFSBS-dist2 SF2-20220911/README.txt'),'utf8'));
writeFileSync(`${output}/notices/D-Smolken-double-bass.txt`,readFileSync(join(sources[4],'dsmolken_double_bass/LICENSE'),'utf8')+'\n\n'+readFileSync(join(sources[4],'dsmolken_double_bass/readme.txt'),'utf8')+'\n\nSource: https://github.com/sfzinstruments/dsmolken.double-bass\n');
mkdirSync('public',{recursive:true});
writeFileSync('public/soundfont-notices.txt', 'MixGenres distilled SoundFont banks\n\n'+['GeneralUser-GS.txt','Ichiyanagi.txt','FSS-steel-guitar.txt','Salamander.txt','Muldjord.txt','YR-bass.txt','FSBS-electric.txt','Bleymehl-bandoneon.txt','D-Smolken-double-bass.txt','VCSL.txt','GPL-3.txt','CC0.txt'].map(name=>`${name}\n\n${readFileSync(`${output}/notices/${name}`,'utf8')}`).join('\n\n')+'\n\nSpessaSynth core 4.3.22, Apache-2.0\n'+readFileSync('node_modules/spessasynth_core/LICENSE','utf8')+'\n\nstb-vorbis 0.0.6\n'+readFileSync('node_modules/stb-vorbis/LICENSE','utf8'));
