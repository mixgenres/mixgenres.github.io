import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { BasicSoundBank, BasicPreset, BasicInstrument, EmptySample, SoundBankLoader, GeneratorTypes } from 'spessasynth_core';

export const QUALITY_SOURCES = {
  piano: 'SalamanderGrandPiano-SF2-V3+20200602/SalamanderGrandPiano-V3+20200602.sf2',
  drumkit: 'MuldjordKit-SF2-20201018/MuldjordKit 20201018.sf2',
  finger: 'FingerBassYR SF2-20190930/FingerBassYR 20190930.sf2',
  pick: 'PickedBassYR SF2-20190930/PickedBassYR 20190930.sf2',
  electricClean: 'EGuitarFSBS-clean SF2-20260807/EGuitarFSBS-clean bridge 20260807.sf2',
  electricDrive: 'EGuitarFSBS-dist2 SF2-20220911/EGuitarFSBS-dist2 bridge 20220911.sf2',
  bandoneon: 'bandoneon_v2.sf2',
  uprightPizz: 'dsmolken_double_bass/d_smolken_rubner_bass_pizz.sfz',
  uprightArco: 'dsmolken_double_bass/d_smolken_rubner_bass_arco.sfz',
} as const;
const load=(path:string)=>{const data=readFileSync(path);return SoundBankLoader.fromArrayBuffer(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength));};

/** Keep four recorded piano dynamics and both microphones across the full
 * keyboard. Preserve attacks and ten seconds of each natural decay; fade only
 * the cropped terminal 150ms. This is an explicit browser-size tradeoff. */
export function qualityPiano(root:string) {
  const source=load(join(root,QUALITY_SOURCES.piano));
  const layers=new Map([[4,[1,50]],[8,[51,75]],[12,[76,105]],[16,[106,127]]]);
  for(const instrument of source.instruments)instrument.zones=instrument.zones.filter(zone=>{
    const layer=Number(zone.sample.name.match(/v(\d+)_/)?.[1]),range=layers.get(layer);
    if(!range)return false;
    zone.velRange={min:range[0],max:range[1]};return true;
  });
  // Clone the selected zones into a fresh bank. Replacing a zone array does
  // not decrement upstream sample use counts, so pruning the source in-place
  // would accidentally retain all sixteen layers.
  const bank=new BasicSoundBank();bank.soundBankInfo={...source.soundBankInfo};
  bank.clonePreset(source.presets[0]);bank.removeUnusedElements();bank.flush();
  for(const sample of bank.samples) {
    const data=sample.getAudioData();
    const raw=Buffer.from(data.buffer,data.byteOffset,Math.min(data.length,Math.round(sample.sampleRate*10))*4);
    const pcm=execFileSync('ffmpeg',['-v','error','-f','f32le','-ar',String(sample.sampleRate),'-ac','1','-i','pipe:0',
      '-ar','44100','-f','f32le','pipe:1'],{input:raw,maxBuffer:8*1024*1024});
    const audio=new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
    if(data.length/sample.sampleRate>10)for(let f=Math.max(0,audio.length-6615);f<audio.length;f++)audio[f]*=(audio.length-f)/6615;
    const rateScale=44100/sample.sampleRate;
    sample.loopStart=Math.min(audio.length-1,Math.round(sample.loopStart*rateScale));
    sample.loopEnd=Math.min(audio.length,Math.round(sample.loopEnd*rateScale));
    sample.setAudioData(audio,44100);
  }
  const p=bank.presets[0];p.bankMSB=64;p.program=0;p.name='MixGenres Salamander C5';
  return bank;
}

export function qualityBass(root:string) {
  const bank=new BasicSoundBank();
  for(const [kind,program] of [['finger',33],['pick',34]] as const) {
    const source=load(join(root,QUALITY_SOURCES[kind]));
    const preset=source.presets[0];preset.bankMSB=64;preset.program=program;
    preset.name=`MixGenres YR ${kind} bass`;bank.clonePreset(preset);
  }
  return bank;
}

/** The upstream SF2 uses a chromatic keyboard layout, not GM drum keys, and
 * bakes different takes into neighboring MIDI velocities. Distill six recorded
 * dynamics and three nearby takes into explicit presets with a GM layout. */
export function qualityDrumKit(root:string) {
  const source=load(join(root,QUALITY_SOURCES.drumkit)),bank=new BasicSoundBank();
  bank.soundBankInfo={...source.soundBankInfo};
  const input=source.instruments[0];
  const keys=new Map([[35,48],[36,49],[38,50],[40,51],[42,52],[46,53],[51,54],[53,55],
    [59,56],[49,58],[57,59],[52,60],[50,61],[48,62],[47,63],[41,64],[43,64]]);
  const layers=[{v:23,min:1,max:35},{v:45,min:36,max:55},{v:67,min:56,max:77},
    {v:89,min:78,max:98},{v:111,min:99,max:118},{v:125,min:119,max:127}];
  for(let take=0;take<3;take++) {
    const instrument=new BasicInstrument();instrument.name=`Muldjord GM take ${take+1}`;
    instrument.globalZone.copyFrom(input.globalZone);
    for(const [key,from] of keys)for(const layer of layers) {
      const candidates=Array.from({length:128},(_,v)=>v).sort((a,b)=>Math.abs(a-layer.v)-Math.abs(b-layer.v)||a-b);
      const seen=new Set<string>();let zones:typeof input.zones=[];
      for(const velocity of candidates){
        const match=input.zones.filter(z=>z.keyRange.min<=from&&z.keyRange.max>=from&&z.velRange.min<=velocity&&z.velRange.max>=velocity);
        const signature=match.map(z=>z.sample.name).join(':');
        if(seen.has(signature))continue;seen.add(signature);
        if(seen.size===take+1){zones=match;break;}
      }
      if(zones.length!==2)throw new Error(`Missing stereo kit region ${from}/${layer.v}/${take}`);
      for(const original of zones) {
        const zone=instrument.createZone(original.sample);zone.copyFrom(original);
        zone.keyRange={min:key,max:key};zone.velRange={min:layer.min,max:layer.max};
        // Changing the keyboard mapping must not transpose the drum recording.
        zone.setGenerator(GeneratorTypes.overridingRootKey,key);
        if(key===42||key===46)zone.setGenerator(GeneratorTypes.exclusiveClass,1);
      }
    }
    const preset=new BasicPreset(source);preset.name=`MixGenres Muldjord take ${take+1}`;
    preset.bankMSB=67;preset.program=take;preset.createZone(instrument);
    bank.clonePreset(preset);
    preset.bankMSB=68;preset.name+= ' choke';
    preset.globalZone.setGenerator(GeneratorTypes.releaseVolEnv,-12000,false);
    bank.clonePreset(preset);
  }
  for(const sample of bank.samples) {
    const original=sample.getAudioData(),limit=Math.min(original.length,Math.round(sample.sampleRate*8));
    if(limit===original.length)continue;
    const audio=original.slice(0,limit),fade=Math.round(sample.sampleRate*.15);
    for(let f=audio.length-fade;f<audio.length;f++)audio[f]*=(audio.length-f)/fade;
    sample.loopStart=Math.min(audio.length-1,sample.loopStart);sample.loopEnd=Math.min(audio.length,sample.loopEnd);
    sample.setAudioData(audio,sample.sampleRate);
  }
  return bank;
}

/** Separate three recorded takes from the source's velocity-coded variations.
 * Keep its soft/hard boundary, stereo microphones and key ranges. Some upper
 * notes have only hard recordings; retain that source limitation explicitly. */
export function qualityElectric(root:string,kind:'electricClean'|'electricDrive') {
  const source=load(join(root,QUALITY_SOURCES[kind])),input=source.instruments[0],bank=new BasicSoundBank();
  bank.soundBankInfo={...source.soundBankInfo};
  const ranges=[...new Map(input.zones.map(z=>[`${z.keyRange.min}:${z.keyRange.max}`,z.keyRange])).values()];
  const normalBank=kind==='electricClean'?69:71;
  for(let take=0;take<3;take++) {
    const instrument=new BasicInstrument();instrument.name=`FSBS ${kind} take ${take+1}`;
    instrument.globalZone.copyFrom(input.globalZone);
    for(const range of ranges)for(const [soft,min,max] of [[true,1,92],[false,93,127]] as const) {
      const regions=input.zones.filter(z=>z.keyRange.min===range.min&&z.keyRange.max===range.max);
      let names=[...new Set(regions.map(z=>z.sample.name).filter(n=>n.endsWith('_L')&&n.includes('_soft_')===soft))].sort();
      if(!names.length)names=[...new Set(regions.map(z=>z.sample.name).filter(n=>n.endsWith('_L')))].sort();
      const name=names[take%names.length],zones=[name,name.replace(/_L$/,'_R')].map(name=>regions.find(z=>z.sample.name===name)!);
      if(zones.some(z=>!z))throw new Error(`Missing FSBS stereo region ${range.min}/${soft}/${take}`);
      for(const original of zones) {
        const zone=instrument.createZone(original.sample);zone.copyFrom(original);zone.velRange={min,max};
      }
    }
    const preset=new BasicPreset(source);preset.name=`MixGenres FSBS ${kind==='electricClean'?'clean':'drive'} ${take+1}`;
    preset.bankMSB=normalBank;preset.program=take;preset.createZone(instrument);bank.clonePreset(preset);
    preset.bankMSB=normalBank+1;preset.name+=' damped';
    preset.globalZone.setGenerator(GeneratorTypes.initialFilterFc,-2400,false);
    preset.globalZone.setGenerator(GeneratorTypes.releaseVolEnv,-3600,false);bank.clonePreset(preset);
  }
  for(const sample of bank.samples) {
    const original=sample.getAudioData(),limit=Math.min(original.length,Math.round(sample.sampleRate*12));
    if(limit===original.length)continue;
    // These sources use one-shot decays. Reject a future active-loop source
    // rather than trimming through a sustaining loop without preserving it.
    if(bank.instruments.some(i=>i.zones.some(z=>z.sample===sample&&(z.getGenerator(GeneratorTypes.sampleModes,0)&1))))throw new Error('FSBS source unexpectedly uses active loops');
    const audio=original.slice(0,limit),fade=Math.round(sample.sampleRate*.15);
    for(let f=audio.length-fade;f<audio.length;f++)audio[f]*=(audio.length-f)/fade;
    sample.loopStart=Math.min(audio.length-1,sample.loopStart);sample.loopEnd=Math.min(audio.length,sample.loopEnd);
    sample.setAudioData(audio,sample.sampleRate);
  }
  return bank;
}

/** Preserve the twelve recorded notes and their original sustain loops. The
 * two direction presets share those samples; a small filter/attack offset
 * gives closing reeds a little more edge without claiming separate recordings. */
export function qualityBandoneon(root:string) {
  const source=load(join(root,QUALITY_SOURCES.bandoneon)),preset=source.presets.find(p=>p.program===0);
  if(!preset||source.samples.length!==12)throw new Error('Unexpected Bleymehl bandoneon source layout.');
  const bank=new BasicSoundBank();bank.soundBankInfo={...source.soundBankInfo};
  const copyPreset=(name:string,bankMSB:number)=>{const copy=new BasicPreset(source);copy.name=name;copy.bankMSB=bankMSB;copy.program=0;
    copy.globalZone.copyFrom(preset.globalZone);for(const original of preset.zones){const zone=copy.createZone(original.instrument);zone.copyFrom(original);}return copy;};
  const open=copyPreset('MixGenres bandoneon open',73);bank.clonePreset(open);
  const close=copyPreset('MixGenres bandoneon close',74);
  close.globalZone.setGenerator(GeneratorTypes.initialFilterFc,650,false);
  close.globalZone.setGenerator(GeneratorTypes.attackVolEnv,-350,false);bank.clonePreset(close);
  bank.removeUnusedElements();bank.flush();return bank;
}

/** Distill D. Smolken's recorded Rubner double bass directly from its SFZ
 * maps. Programs 0–3 are separate pizzicato round robins; programs 4–5 are
 * down/up arco strokes. The many unpitched scrape/noise keys are omitted. */
export function qualityUprightBass(root:string) {
  type Region = { sample:string; lokey:number; hikey:number; lovel:number; hivel:number; root:number; seq:number; release:number };
  const bank=new BasicSoundBank();
  bank.soundBankInfo={...bank.soundBankInfo,name:'MixGenres D. Smolken Rubner upright bass',copyright:'D. Smolken 2013; CC0 1.0',comment:'Distilled from the SFZ pizzicato and arco maps. Musical samples only; unpitched noise keys omitted.'};
  const readRegions=(file:string):Region[]=>{
    const text=readFileSync(join(root,QUALITY_SOURCES[file as 'uprightPizz'|'uprightArco']),'utf8');
    let group:Record<string,string>={},current:Record<string,string>|undefined;
    const regions:Record<string,string>[]=[];
    for(const raw of text.split(/\r?\n/)) {
      const line=raw.trim();
      if(line==='<group>'){group={};current=undefined;continue;}
      if(line==='<region>'){current={...group};regions.push(current);continue;}
      const match=line.match(/^([a-zA-Z0-9_]+)=(.*)$/);
      if(!match||line.startsWith('//'))continue;
      (current??group)[match[1]]=match[2];
    }
    return regions.filter(r=>!!r.sample&&!/\\noises\\/i.test(r.sample)).map(r=>({
      sample:r.sample.replaceAll('\\','/'),lokey:Number(r.lokey),hikey:Number(r.hikey),
      lovel:Number(r.lovel??1),hivel:Number(r.hivel??127),root:Number(r.pitch_keycenter),
      seq:Number(r.seq_position??1),release:Number(r.ampeg_release??(file==='uprightArco'?.8:.3)),
    })).filter(r=>[r.lokey,r.hikey,r.lovel,r.hivel,r.root,r.seq,r.release].every(Number.isFinite));
  };
  const sources=[
    {kind:'pizz' as const, file:'uprightPizz', program:0, takes:4},
    {kind:'arco' as const, file:'uprightArco', program:4, takes:2},
  ];
  const loaded=new Map<string,EmptySample>();
  for(const source of sources) {
    const regions=readRegions(source.file);
    const groups=new Map<string,Region[]>();
    for(const region of regions) {
      const signature=[region.lokey,region.hikey,region.lovel,region.hivel].join(':');
      const list=groups.get(signature)??[];list.push(region);groups.set(signature,list);
    }
    if(!regions.length||![...groups.values()].every(list=>list.length>0))throw new Error(`Missing ${source.kind} upright bass zones.`);
    for(let take=0;take<source.takes;take++) {
      const instrument=new BasicInstrument();instrument.name=`D. Smolken upright ${source.kind} take ${take+1}`;
      for(const variants of groups.values()) {
        variants.sort((a,b)=>a.seq-b.seq||a.sample.localeCompare(b.sample));
        const original=variants[take%variants.length];
        let sample=loaded.get(original.sample);
        if(!sample) {
          const path=join(root,'dsmolken_double_bass',original.sample);
          const pcm=execFileSync('ffmpeg',['-v','error','-i',path,'-f','f32le','-ac','1','-ar','44100','pipe:1'],{maxBuffer:16*1024*1024});
          let audio=new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
          const limit=44100*12;
          if(audio.length>limit) {
            audio=audio.slice(0,limit);const fade=Math.min(6615,audio.length);
            for(let i=audio.length-fade;i<audio.length;i++)audio[i]*=(audio.length-i)/fade;
          }
          sample=new EmptySample();
          sample.name=original.sample.split('/').at(-1)!.replace(/\.wav$/i,'').slice(0,20);
          sample.originalKey=original.root;sample.setAudioData(audio,44100);loaded.set(original.sample,sample);
        }
        const zone=instrument.createZone(sample);
        zone.keyRange={min:original.lokey,max:original.hikey};
        zone.velRange={min:Math.max(1,original.lovel),max:Math.min(127,original.hivel)};
        zone.setGenerator(GeneratorTypes.overridingRootKey,original.root);
        zone.setGenerator(GeneratorTypes.sampleModes,0);
        zone.setGenerator(GeneratorTypes.releaseVolEnv,Math.max(-12000,Math.min(0,1200*Math.log2(original.release))));
      }
      const preset=new BasicPreset(bank);preset.name=`MixGenres Rubner ${source.kind} ${take+1}`;
      preset.bankMSB=64;preset.program=source.program+take;preset.createZone(instrument);
      bank.addInstruments(instrument);bank.addPresets(preset);
    }
  }
  for(const sample of loaded.values())bank.addSamples(sample);
  bank.removeUnusedElements();bank.flush();return bank;
}
