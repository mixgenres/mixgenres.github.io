import { BasicSoundBank, SoundBankLoader, SpessaLog } from 'spessasynth_core';
import { StbVorbis } from 'stb-vorbis';
import type { SamplePatch } from './presets';
export interface BankAttack { patch: SamplePatch; key: number; velocity: number }

/** Run in a worker before a bank reaches the live audio thread. Only recordings
 * used by the compiled song are decoded; live note attacks never run Vorbis. */
export async function prepareBankForLive(buffer:ArrayBuffer,attacks:readonly BankAttack[]):Promise<ArrayBuffer> {
  SpessaLog.setLogLevel(false,true,false);await StbVorbis.ready;
  const source=SoundBankLoader.fromArrayBuffer(buffer),bank=new BasicSoundBank();bank.soundBankInfo={...source.soundBankInfo};
  const selected=new Set<typeof source.presets[number]>();
  const usedSamples=new Set<typeof source.samples[number]>();
  for(const preset of source.presets) {
    const notes=attacks.filter(a=>a.patch.bank===preset.bankMSB&&a.patch.program===preset.program&&a.patch.drum===preset.isGMGSDrum);
    if(!notes.length)continue;
    selected.add(preset);
    for(const attack of notes)for(const voice of preset.getVoiceParameters(attack.key,attack.velocity))usedSamples.add(voice.sample);
  }
  // Normal/mute/take presets can share instruments. Collect their union before
  // pruning, or selecting one patch could erase recordings needed by another.
  for(const instrument of source.instruments)instrument.zones=instrument.zones.filter(z=>usedSamples.has(z.sample));
  for(const preset of selected)bank.clonePreset(preset);
  if(!bank.presets.length)throw new Error('No playable sample presets in the prepared bank.');
  bank.removeUnusedElements();bank.flush();
  for(const sample of bank.samples)if(sample.isCompressed) {
    const pcm=sample.getAudioData();
    if(!pcm.length||!pcm.every(Number.isFinite))throw new Error(`Invalid sample data: ${sample.name}`);
    sample.setAudioData(pcm,sample.sampleRate);
  }
  return bank.writeSF2();
}
