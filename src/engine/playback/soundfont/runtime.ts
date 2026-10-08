import { SpessaSynthProcessor, SoundBankLoader, KeyModifier, SpessaLog, type MIDIController } from 'spessasynth_core';
import type { BankId } from './presets';
import type { SamplePlan, SampleEvent } from './plan';
/** Shared live/offline event interpreter; no musical randomness or wall timers. */
export class SampleRuntime {
  readonly synth: SpessaSynthProcessor;
  private plan?: SamplePlan;
  private cursor = 0;
  private frame = 0;
  private synthFrame = 0;
  private readOffset = 128;
  private quantum:Float32Array[][]=[];
  private readonly effectsL=new Float32Array(128);
  private readonly effectsR=new Float32Array(128);
  private seeking = false;
  private targetFrame = 0;
  readonly loadedBanks = new Set<BankId>();
  constructor(readonly sampleRate: number, voiceCap = 512) {
    SpessaLog.setLogLevel(false, true, false);
    this.synth = new SpessaSynthProcessor(sampleRate, { maxBufferSize:128, effectsEnabled:false, eventsEnabled:false });
    this.synth.setSystemParameter('voiceCap', voiceCap);
    this.synth.setSystemParameter('autoAllocateVoices', false);
    this.synth.setSystemParameter('gain', .8);
    // Default/reset programs may precede the first score-selected patch.
    this.synth.onMissingPreset = () => undefined;
  }
  addBank(id: BankId, buffer: ArrayBuffer) {
    if (this.loadedBanks.has(id)) return;
    this.synth.soundBankManager.addSoundBank(SoundBankLoader.fromArrayBuffer(buffer), id);
    this.loadedBanks.add(id);
  }
  setPlan(plan: SamplePlan) {
    this.plan = plan;
    this.quantum=Array.from({length:Math.max(1,plan.tracks.length)},()=>[new Float32Array(128),new Float32Array(128)]);
    while (this.synth.midiChannels.length < plan.channels) this.synth.createMIDIChannel();
    this.rewind();
  }
  private rewind() {
    this.synth.stopAllChannels(true); this.synth.reset(); this.synth.keyModifierManager.clearMappings();
    this.cursor=0; this.frame=0; this.synthFrame=0; this.readOffset=128; this.seeking=false;
    if (!this.plan) return;
    for (const track of this.plan.tracks) for (const channel of track.channels) {
      const ch = this.synth.midiChannels[channel]; ch.setDrums(false);
      // SF2 velocity curves are retained. User balance is downstream in strips.
      this.synth.controllerChange(channel,7,127); this.synth.controllerChange(channel,11,127);
      this.synth.controllerChange(channel,10,64);
      for (const [cc,value] of [[101,0],[100,0],[6,24],[38,0],[101,127],[100,127]] as const) this.synth.controllerChange(channel,cc,value);
    }
  }
  seek(seconds: number) {
    this.rewind(); this.targetFrame = Math.max(0, Math.round((seconds-(this.plan?.origin ?? 0))*this.sampleRate)); this.seeking=this.targetFrame>0;
  }
  extendSeek(seconds:number) {
    this.targetFrame=Math.max(this.targetFrame,Math.round((seconds-(this.plan?.origin ?? 0))*this.sampleRate));
    this.seeking=this.frame<this.targetFrame;
  }
  get position() { return this.frame/this.sampleRate+(this.plan?.origin ?? 0); }
  get isSeeking() { return this.seeking; }
  get duration() { return this.plan ? this.plan.duration+this.plan.origin : 0; }
  get voiceCount() { return this.synth.voiceCount; }
  /** Replay into reusable silent scratch buffers. The worklet calls this in
   * bounded slices; controllers, sample age, pedal holds and releases stay exact. */
  prime(left: Float32Array, right: Float32Array, blocks = 16) {
    for (let i=0;i<blocks && this.frame<this.targetFrame;i++) {
      left.fill(0); right.fill(0);
      this.render(left,right,0,Math.min(left.length,this.targetFrame-this.frame));
    }
    this.seeking=this.frame<this.targetFrame;
  }
  render(left: Float32Array, right: Float32Array, start=0, length=left.length-start) {
    this.read(length,(offset,count)=>{
      for(const channels of this.quantum) for(let i=0;i<count;i++) {
        left[start+offset+i]+=channels[0][this.readOffset+i]; right[start+offset+i]+=channels[1][this.readOffset+i];
      }
    });
  }
  renderSplit(outputs: Float32Array[][], _scratchL: Float32Array, _scratchR: Float32Array, length: number, start=0) {
    this.read(length,(offset,count)=>{
      for(let track=0;track<outputs.length;track++) {
        outputs[track][0].set(this.quantum[track][0].subarray(this.readOffset,this.readOffset+count),start+offset);
        outputs[track][1].set(this.quantum[track][1].subarray(this.readOffset,this.readOffset+count),start+offset);
      }
    });
  }
  private read(length:number,copy:(offset:number,count:number)=>void) {
    let offset=0;
    while(offset<length) {
      if(this.readOffset===128){this.fillQuantum();this.readOffset=0;}
      const count=Math.min(length-offset,128-this.readOffset);
      copy(offset,count);offset+=count;this.readOffset+=count;this.frame+=count;
    }
  }
  private fillQuantum() {
    for(const channels of this.quantum){channels[0].fill(0);channels[1].fill(0);}
    this.effectsL.fill(0);this.effectsR.fill(0);
    const events=this.plan?.events ?? [];
    let offset=0;
    while(offset<128) {
      while(this.cursor<events.length && Math.round(events[this.cursor].time*this.sampleRate)<=this.synthFrame)this.dispatch(events[this.cursor++]);
      const next=this.cursor<events.length ? Math.round(events[this.cursor].time*this.sampleRate)-this.synthFrame : Infinity;
      const count=Math.min(128-offset,Math.max(1,next));
      this.synth.processSplit(this.quantum,this.effectsL,this.effectsR,offset,count);
      offset+=count;this.synthFrame+=count;
    }
  }
  private dispatch(event: SampleEvent) {
    if (event.type==='cc') { for (const channel of event.channels) this.synth.controllerChange(channel,event.cc as MIDIController,event.value); return; }
    if (event.type==='off') { this.synth.noteOff(event.channel,event.key); return; }
    if (event.type==='bend') { this.synth.pitchWheel(event.channel,Math.max(0,Math.min(16383,Math.round(8192+event.cents/2400*8192))),event.key); return; }
    // Key modifiers select the exact patch independently of channel 9 and
    // other sounding notes, including guitar body hits and pizzicato switches.
    const modifier=new KeyModifier();
    modifier.patch={bankMSB:event.patch.bank,bankLSB:0,program:event.patch.program,isGMGSDrum:event.patch.drum};
    modifier.gain=event.gain;
    this.synth.keyModifierManager.addMapping(event.channel,event.key,modifier);
    this.synth.pitchWheel(event.channel,Math.max(0,Math.min(16383,Math.round(8192+event.cents/2400*8192))),event.key);
    this.synth.noteOn(event.channel,event.key,event.velocity);
  }
  destroy() { this.synth.destroySynthProcessor(); this.loadedBanks.clear(); }
}
