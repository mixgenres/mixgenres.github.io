import { SpessaSynthProcessor, SoundBankLoader, KeyModifier, SpessaLog, type MIDIController } from 'spessasynth_core';
import { BANK_PROGRAMS, type BankId } from './presets';
import type { SamplePlan, SampleEvent } from './plan';
// The synth selects by MIDI bank/program, without the plan's pack ID. Reserve
// a bank LSB per pack so shared preset numbers retain their recorded identity.
const bankNamespaces = new Map(Object.keys(BANK_PROGRAMS).map((id, index) => [id, index + 1]));
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
  constructor(readonly sampleRate: number, voiceCap = 350) {
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
    const bank = SoundBankLoader.fromArrayBuffer(buffer);
    for (const preset of bank.presets) if (!preset.isGMGSDrum) preset.bankLSB = bankNamespaces.get(id)!;
    this.synth.soundBankManager.addSoundBank(bank, id);
    this.loadedBanks.add(id);
  }
  setPlan(plan: SamplePlan) {
    this.plan = plan;
    // Playback and export use the same planned sample-zone count. A fixed
    // 350/512 voice pool silently stole active notes in dense arrangements;
    // size once, after the plan's banks are loaded, before the first render.
    // Keep some room for release overlap and zones that share envelope timing.
    const required = this.requiredVoices(plan);
    const planned = Math.ceil(required * 1.2) + 16;
    this.synth.setSystemParameter('voiceCap', Math.max(this.synth.systemParameters.voiceCap, planned));
    this.quantum=Array.from({length:Math.max(1,plan.tracks.length)},()=>[new Float32Array(128),new Float32Array(128)]);
    while (this.synth.midiChannels.length < plan.channels) this.synth.createMIDIChannel();
    this.rewind();
  }
  get voiceCapacity() { return this.synth.systemParameters.voiceCap; }
  private requiredVoices(plan: SamplePlan) {
    const presets = new Map<string, (typeof this.synth.soundBankManager.soundBankList)[number]['soundBank']['presets'][number]>();
    for (const entry of this.synth.soundBankManager.soundBankList) for (const preset of entry.soundBank.presets) {
      presets.set(`${entry.id}:${preset.bankMSB}:${preset.program}:${preset.isGMGSDrum}`, preset);
    }
    const onEvents = plan.events.filter((event): event is Extract<SampleEvent, { type: 'on' }> => event.type === 'on');
    // Validate the events that will actually reach the synth. This is separate
    // from voiceDemand because a live preparation step may replace a patch
    // while keeping the musical timing plan intact.
    for (const event of onEvents) {
      const key = `${event.patch.pack}:${event.patch.bank}:${event.patch.program}:${event.patch.drum}`;
      const preset = presets.get(key);
      if (!preset) throw new Error(`Missing SoundFont preset for ${key}:${event.key}:${event.velocity}`);
      if (preset.getVoiceParameters(event.key, event.velocity).length < 1) {
        throw new Error(`No playable SoundFont zone for ${key}:${event.key}:${event.velocity}`);
      }
    }
    const zoneCounts = new Map<string, number>();
    const edges: Array<{ time: number; count: number }> = [];
    for (const demand of plan.voiceDemand) {
      const eventPatchKey = `${demand.patch.pack}:${demand.patch.bank}:${demand.patch.program}:${demand.patch.drum}`;
      let patch = demand.patch;
      let preset = presets.get(eventPatchKey);
      let voiceCount = preset?.getVoiceParameters(demand.key, demand.velocity).length ?? 0;
      if (voiceCount < 1) {
        const replacement = onEvents.find(event => Math.abs(event.time - demand.start) < 1e-9
          && event.key === demand.key && event.velocity === demand.velocity);
        if (replacement) {
          patch = replacement.patch;
          preset = presets.get(`${patch.pack}:${patch.bank}:${patch.program}:${patch.drum}`);
          voiceCount = preset?.getVoiceParameters(demand.key, demand.velocity).length ?? 0;
        }
      }
      const zoneKey = `${patch.pack}:${patch.bank}:${patch.program}:${patch.drum}:${demand.key}:${demand.velocity}`;
      let voices = zoneCounts.get(zoneKey);
      if (voices === undefined) {
        if (!preset) {
          throw new Error(`Missing SoundFont preset for ${zoneKey}`);
        }
        voices = voiceCount;
        if (voices < 1) {
          throw new Error(`No playable SoundFont zone for ${zoneKey}`);
        }
        zoneCounts.set(zoneKey, voices);
      }
      edges.push({ time: demand.start, count: voices }, { time: demand.end, count: -voices });
    }
    // Note-offs/release completions at a shared instant free their zones before
    // the next attack at that instant, matching the event order in the plan.
    edges.sort((a, b) => a.time - b.time || a.count - b.count);
    let active = 0, peak = 0;
    for (const edge of edges) { active += edge.count; peak = Math.max(peak, active); }
    return peak;
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
    modifier.patch={bankMSB:event.patch.bank,bankLSB:event.patch.drum?0:bankNamespaces.get(event.patch.pack)!,
      program:event.patch.program,isGMGSDrum:event.patch.drum};
    modifier.gain=event.gain;
    this.synth.keyModifierManager.addMapping(event.channel,event.key,modifier);
    this.synth.pitchWheel(event.channel,Math.max(0,Math.min(16383,Math.round(8192+event.cents/2400*8192))),event.key);
    this.synth.noteOn(event.channel,event.key,event.velocity);
  }
  destroy() { this.synth.destroySynthProcessor(); this.loadedBanks.clear(); }
}
