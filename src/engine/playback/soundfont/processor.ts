import { SampleRuntime } from './runtime';
import type { SampleCommand, SampleReply } from './protocol';
import { StereoPeakGuard } from './peakGuard';
// AudioWorklet globals are absent from TypeScript's DOM library.
declare const currentTime:number;
declare const sampleRate: number;
declare function registerProcessor(name:string, processor: typeof AudioWorkletProcessor): void;
declare class AudioWorkletProcessor {
  readonly port: MessagePort;
  constructor(options?: AudioWorkletNodeOptions);
  process(inputs:Float32Array[][], outputs:Float32Array[][], parameters:Record<string,Float32Array>): boolean;
}
class MixGenresSampleProcessor extends AudioWorkletProcessor {
  private readonly runtime: SampleRuntime;
  private readonly scratchL = new Float32Array(128);
  private readonly scratchR = new Float32Array(128);
  private playing = false;
  private stopAt=Infinity;
  private catchUp?:{time:number;position:number};
  private pendingRequest?: number;
  private ticks = 0;
  private alive = true;
  constructor(options?: AudioWorkletNodeOptions) {
    super(options);
    this.runtime=new SampleRuntime(sampleRate, options?.processorOptions?.voiceCap ?? 512);
    this.port.onmessage=({data}:MessageEvent<SampleCommand>)=>{
      try {
        if(data.type==='bank') this.runtime.addBank(data.id,data.buffer);
        else if(data.type==='plan') { this.runtime.setPlan(data.plan); this.runtime.seek(data.position); this.playing=data.playing;this.stopAt=Infinity;this.catchUp=data.catchUpTime===undefined?undefined:{time:data.catchUpTime,position:data.position}; }
        else if(data.type==='seek') { this.runtime.seek(data.position); this.playing=data.playing;this.stopAt=Infinity;this.catchUp=undefined; }
        else if(data.type==='play') {this.playing=true;this.stopAt=Infinity;}
        else if(data.type==='pause') {this.stopAt=data.when??currentTime;this.catchUp=undefined;if(this.stopAt<=currentTime)this.playing=false;}
        else if(data.type==='dispose') {this.playing=false;this.alive=false;this.runtime.destroy();}
        // Every command supersedes a pending seek acknowledgement, so a pause
        // cannot leave an unresolved play promise or revive a cancelled start.
        if(this.pendingRequest!==undefined) this.reply({type:'ack',request:this.pendingRequest});
        this.pendingRequest=undefined;
        if((data.type==='plan'||data.type==='seek') && this.runtime.isSeeking) this.pendingRequest=data.request;
        else this.reply({type:'ack',request:data.request,position:this.runtime.position});
      } catch(error) {this.reply({type:'error',request:data.request,error:error instanceof Error?error.message:String(error)});}
    };
  }
  private reply(message:SampleReply) {this.port.postMessage(message);}
  override process(_inputs:Float32Array[][], outputs:Float32Array[][]): boolean {
    if(!this.alive)return false;
    try {
      if(currentTime>=this.stopAt)this.playing=false;
      if(this.runtime.isSeeking) {
        // No unbounded replay inside a quantum. A seek catches up silently over
        // multiple callbacks, instead of restarting old samples at their attack.
        if(this.catchUp&&this.playing)this.runtime.extendSeek(Math.min(this.runtime.duration,this.catchUp.position+currentTime-this.catchUp.time));
        // A fixed block count makes long seeks unnecessarily slow on fast
        // CPUs. Spend at most ~1ms plus one eight-block slice per callback,
        // and retain a hard cap even on unusually coarse clocks.
        const deadline=Date.now()+1;
        for(let blocks=0;blocks<128&&this.runtime.isSeeking;blocks+=8) {
          this.runtime.prime(this.scratchL,this.scratchR,8);
          if(Date.now()>=deadline)break;
        }
        if(!this.runtime.isSeeking && this.pendingRequest!==undefined) {
          this.catchUp=undefined;
          this.reply({type:'ack',request:this.pendingRequest,position:this.runtime.position});this.pendingRequest=undefined;
        }
      } else if(this.playing && this.runtime.duration>0) {
        const length=outputs[0]?.[0]?.length ?? 128;
        this.scratchL.fill(0);this.scratchR.fill(0);
        let offset=0;
        while(offset<length) {
          const remaining=Math.max(0,Math.round((this.runtime.duration-this.runtime.position)*sampleRate));
          if(!remaining) {this.runtime.seek(0);this.runtime.prime(this.scratchL,this.scratchR,16);if(this.runtime.isSeeking)break;}
          const count=Math.min(length-offset,Math.max(1,Math.round((this.runtime.duration-this.runtime.position)*sampleRate)));
          this.runtime.renderSplit(outputs,this.scratchL,this.scratchR,count,offset);offset+=count;
        }
      }
      if(++this.ticks%16===0)this.reply({type:'position',position:this.runtime.position,voices:this.runtime.voiceCount,seeking:this.runtime.isSeeking});
    } catch(error) {this.playing=false;this.reply({type:'error',error:error instanceof Error?error.message:String(error)});}
    return true;
  }
}
registerProcessor('mixgenres-soundfont',MixGenresSampleProcessor);

/** Final stereo protection after the shared studio chain. Native Web Audio
 * compressors can overshoot; a linked 3ms lookahead keeps dense scores safe. */
class MixGenresPeakGuard extends AudioWorkletProcessor {
  private readonly guard=new StereoPeakGuard(sampleRate);
  override process(inputs:Float32Array[][],outputs:Float32Array[][]) {
    const output=outputs[0],input=inputs[0];
    if(output?.length>=2)this.guard.process(input?.[0],input?.[1]??input?.[0],output[0],output[1]);
    return true;
  }
}
registerProcessor('mixgenres-sample-peak-guard',MixGenresPeakGuard);
