import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { BasicSoundBank, BasicPreset, BasicInstrument, EmptySample, GeneratorTypes } from 'spessasynth_core';
import { INSTRUMENTS_BY_ID } from '../../src/data/instruments';
import { recordedGroupGainLinear } from './recordedGroupGain';

export interface RegionalSources {
  sources: Array<{id:string;file:string;instrument:string;url:string;download:string;sha256:string}>;
  programs: Array<{program:number;instrument:string;name:string;release:number}>;
  zones: Array<{source:string;program:number;key:number;start?:number;end?:number;loop?:number[];fineTune?:number}>;
  credits: Record<string,string>; license:string; archive:string;
}
export function regionalSoundfont(root:string): BasicSoundBank {
  const manifest=JSON.parse(readFileSync('scripts/lib/regional-sources.json','utf8')) as RegionalSources;
  const waves=new Map<string,Float32Array>(),peaks=new Map<string,number>();
  for(const source of manifest.sources) {
    const file=join(root,'bisa',source.file),bytes=readFileSync(file);
    if(createHash('sha256').update(bytes).digest('hex')!==source.sha256)throw new Error(`Regional sample hash changed: ${source.file}`);
    const pcm=execFileSync('ffmpeg',['-v','error','-i',file,'-f','f32le','-ac','1','-ar','44100','pipe:1'],{maxBuffer:8*1024*1024});
    const wave=new Float32Array(pcm.buffer.slice(pcm.byteOffset,pcm.byteOffset+pcm.byteLength));
    waves.set(source.id,wave);let peak=0;for(const value of wave)peak=Math.max(peak,Math.abs(value));
    peaks.set(source.instrument,Math.max(peaks.get(source.instrument)??0,peak));
  }
  const bank=new BasicSoundBank();
  bank.soundBankInfo.name='Berklee Intersectional Soundbox Archive';
  bank.soundBankInfo.copyright=`CC BY 4.0; ${manifest.archive}`;
  for(const program of manifest.programs) {
    const preset=new BasicPreset(bank);preset.name=program.name;preset.bankMSB=76;preset.program=program.program;
    const instrument=new BasicInstrument();instrument.name=program.name;
    const rows=manifest.zones.filter(zone=>zone.program===program.program).sort((a,b)=>a.key-b.key);
    const range=INSTRUMENTS_BY_ID[program.instrument].acousticProfile!;
    const gain=recordedGroupGainLinear(peaks.get(program.instrument)!);
    for(let i=0;i<rows.length;i++) {
      const row=rows[i],wave=waves.get(row.source)!;
      const audio=wave.slice(Math.round((row.start??0)*44100),Math.round((row.end??wave.length/44100)*44100));
      if(audio.length<4410)throw new Error(`Regional note crop is too short: ${row.source}/${row.key}`);
      for(let frame=0;frame<audio.length;frame++)audio[frame]*=gain;
      // A short edge fade removes file boundaries, retaining the source's
      // attack, breath/bow motion, sympathetic strings and natural decay.
      const fade=132;for(let frame=0;frame<fade;frame++){audio[frame]*=frame/fade;audio[audio.length-1-frame]*=frame/fade;}
      const sample=new EmptySample();sample.name=`BISA ${program.program} ${row.key}`;sample.originalKey=row.key;sample.setAudioData(audio,44100);
      if(row.loop) {
        const crossing=(target:number)=> {
          const at=Math.round(target*44100);let best=at,distance=Infinity;
          for(let frame=Math.max(1,at-220);frame<Math.min(audio.length-1,at+220);frame++)if(audio[frame-1]<=0&&audio[frame]>0&&Math.abs(frame-at)<distance){best=frame;distance=Math.abs(frame-at);}
          return best;
        };
        sample.loopStart=crossing(row.loop[0]);sample.loopEnd=crossing(row.loop[1]);
        if(sample.loopEnd<=sample.loopStart+441||sample.loopEnd>=audio.length)throw new Error(`Invalid regional sustain loop: ${sample.name}`);
        // Crossfade into the waveform preceding the loop start, so the wrap
        // continues with the next source frame rather than a discontinuity.
        const blend=220;for(let frame=0;frame<blend;frame++){
          const t=(frame+1)/blend,at=sample.loopEnd-blend+frame;
          audio[at]=audio[at]*(1-t)+audio[sample.loopStart-blend+frame]*t;
        }
      }
      const zone=instrument.createZone(sample);
      zone.keyRange={min:i===0?range.low:Math.floor((rows[i-1].key+row.key)/2)+1,max:i===rows.length-1?range.high:Math.floor((row.key+rows[i+1].key)/2)};
      zone.velRange={min:1,max:127};zone.setGenerator(GeneratorTypes.sampleModes,row.loop?3:0);
      zone.setGenerator(GeneratorTypes.releaseVolEnv,Math.round(1200*Math.log2(program.release)));
      if(row.fineTune)zone.setGenerator(GeneratorTypes.fineTune,row.fineTune);
      bank.addSamples(sample);
    }
    preset.createZone(instrument);bank.addInstruments(instrument);bank.addPresets(preset);
  }
  return bank;
}
