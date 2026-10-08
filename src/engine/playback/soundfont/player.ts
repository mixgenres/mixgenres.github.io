import type { Sheet } from '../../sheet/sheet';
import type { Performance } from '../../band/performanceData';
import type { PlayerState } from '../playerTypes';
import type { SamplePlan } from './plan';
import { compileSamplePlan } from './plan';
import { compilePerformance } from '../compilePerformance';
import { songMixOptions } from '../renderSongMix';
import { prefetchSoundfontBank } from './banks';
import { loadLiveBank } from './liveBank';
import { createMasterChain, type MasterChain } from '../../studio/mixer';
import { createSongMixGraph, type SongMixGraph } from '../../studio/dynamicMix/MixGraph';
import { determineBusCategory } from '../mixBus';
import { INSTRUMENTS_BY_ID } from '../../lookup/instruments';
import { resolvePlaybackMix, ensembleHeadroom } from '../../studio/masterSettings';
import type { SampleCommand, SampleReply } from './protocol';

interface LiveGraph {
  node:AudioWorkletNode; master:MasterChain; scenes?:SongMixGraph; output:GainNode;
  guard:AudioWorkletNode; position:number;
  released?:boolean;
  plan?:SamplePlan;
  strips:Map<string,{gain:GainNode;pan:StereoPannerNode}>; nodes:AudioNode[]; banks:Set<string>;
}
/** Live-first sample player; it schedules SoundFont events without pre-rendering audio. */
export class SoundfontSongPlayer {
  private state:PlayerState={status:'idle',progress:0};
  private song?:Sheet;
  private activeSong?:Sheet;
  private preparedKey='';
  private playRequest=0;
  private seekRequest=0;
  private controller?:AbortController;
  private revision=0;
  private request=0;
  private wantsPlayback=false;
  private disposed=false;
  private ctx?:AudioContext;
  private graph?:LiveGraph;
  private prepared?:{performance:Performance;plan:SamplePlan;song:Sheet};
  private preparing:Promise<void>=Promise.resolve();
  private initializing?:{plan:SamplePlan;job:Promise<LiveGraph>};
  private offset=0;
  private voices=0;
  private peak=0;
  private observedSignalMs?:number;
  private clicked=0;
  private probe?:AnalyserNode;
  private readonly probeSamples=new Float32Array(256);
  private seeking=false;
  private raf?:number;
  private pending=new Map<number,{graph:LiveGraph;resolve:()=>void;reject:(error:Error)=>void}>();
  private scrubbing=false;
  private resumeScrub=false;
  private removeListeners:()=>void;
  constructor(private readonly onState:(state:PlayerState)=>void,private readonly onPosition:(seconds:number)=>void, private readonly diagnostics=false) {
    const stop=()=>this.stop();
    const hidden=()=>{if(document.visibilityState==='hidden')this.pause();};
    window.addEventListener('pagehide',stop);document.addEventListener('visibilitychange',hidden);document.addEventListener('freeze',stop);
    this.removeListeners=()=>{window.removeEventListener('pagehide',stop);document.removeEventListener('visibilitychange',hidden);document.removeEventListener('freeze',stop);};
  }
  get sampleDiagnostics(){return {voices:this.voices,peak:this.peak,observedSignalMs:this.observedSignalMs,seeking:this.seeking};}
  get snapshot(){return this.state;}
  get composition(){return this.activeSong ?? this.song;}
  get preparedDuration(){return this.prepared?this.prepared.plan.duration+this.prepared.plan.origin:0;}
  private publish(patch:Partial<PlayerState>){if(this.disposed)return;this.state={...this.state,...patch};this.onState(this.state);}
  configure(song:Sheet,force=false) {
    if(this.disposed||!force&&this.song===song)return;
    const musicalKey=JSON.stringify({...song,title:'',catalogId:undefined,
      regions:song.regions.map(({name:_name,formLabel:_label,...region})=>region),
      tracks:song.tracks.map(({volume:_volume,pan:_pan,muted:_muted,solo:_solo,name:_name,...track})=>track)});
    this.song=song;
    if(!force&&musicalKey===this.preparedKey&&this.prepared) {
      this.prepared.song=song;this.activeSong=song;this.balance(song);this.publish({composition:song});return;
    }
    const revision=++this.revision;
    this.controller?.abort();const controller=new AbortController();this.controller=controller;
    const playing=this.wantsPlayback&&!!this.graph;
    this.publish({composition:song,error:undefined,progress:0,...(!playing?{status:'compiling' as const}: {})});
    this.preparing=compilePerformance(song,controller.signal).then(async performance=>{
      if(controller.signal.aborted||revision!==this.revision)return;
      const plan=compileSamplePlan(performance,songMixOptions(song));
      // Fetch once while the UI is already open. The bank cache shares these
      // downloads with a pending Play and later exports.
      for(let i=0;i<plan.banks.length;i++) {
        await prefetchSoundfontBank(plan.banks[i],controller.signal);
        if(controller.signal.aborted||revision!==this.revision)return;
        this.publish({progress:(i+1)/Math.max(1,plan.banks.length)});
      }
      const previous=this.state.performance;
      this.prepared={performance,plan,song};this.preparedKey=musicalKey;
      if(playing&&this.wantsPlayback) {
        const graph=await this.ensureGraph(plan,song,controller.signal,true);
        if(controller.signal.aborted||revision!==this.revision){this.releaseGraph(graph);return;}
        const position=remapPosition(previous,performance,this.offset);
        const seekRevision=this.seekRequest;
        await this.command(graph,{type:'plan',plan,position,playing:this.wantsPlayback,catchUpTime:this.wantsPlayback?this.ctx!.currentTime:undefined});graph.plan=plan;
        if(controller.signal.aborted||revision!==this.revision){this.releaseGraph(graph);return;}
        if(seekRevision!==this.seekRequest)await this.command(graph,{type:'seek',position:remapPosition(previous,performance,this.offset),playing:this.wantsPlayback});
        else if(!this.wantsPlayback)await this.command(graph,{type:'pause'});
        if(controller.signal.aborted||revision!==this.revision){this.releaseGraph(graph);return;}
        this.commitGraph(graph);this.offset=graph.position;this.activeSong=song;this.balance(song);
        graph.scenes?.schedule(this.ctx!.currentTime,this.offset);
        this.publish({performance,composition:song,progress:1,status:this.wantsPlayback?'playing':'paused'});
      } else {
        this.activeSong=song;this.publish({performance,composition:song,progress:1,status:this.wantsPlayback?'starting':'ready'});
      }
    }).catch(error=>{if(!controller.signal.aborted)this.fail(error);});
  }
  private context() {
    if(!this.ctx) {
      if(typeof AudioContext==='undefined')throw new Error('SoundFont playback needs Web Audio support.');
      this.ctx=new AudioContext({sampleRate:44100,latencyHint:'interactive'});
    }
    return this.ctx;
  }
  private async ensureGraph(plan:SamplePlan,song:Sheet,signal:AbortSignal,replacement=false):Promise<LiveGraph> {
    const ctx=this.context();
    if(!ctx.audioWorklet)throw new Error('SoundFont playback needs AudioWorklet support.');
    if(!this.graph || this.graph.plan!==plan || replacement) {
      if(this.initializing?.plan===plan&&!replacement)return this.initializing.job;
      const job=(async()=>{
        const {default:workletURL}=await import('./processor.ts?worker&url');
        await ctx.audioWorklet.addModule(workletURL);
        if(signal.aborted)throw new DOMException('Sample preparation cancelled','AbortError');
        const node=new AudioWorkletNode(ctx,'mixgenres-soundfont',{numberOfInputs:0,numberOfOutputs:Math.max(1,plan.tracks.length),
          outputChannelCount:Array(Math.max(1,plan.tracks.length)).fill(2),processorOptions:{voiceCap:512}});
        node.onprocessorerror=()=>this.fail(new Error('The sample audio processor failed. Reload the page to try again.'));
        const mix=resolvePlaybackMix(song.worldId,song.styleId);
        const master=createMasterChain(ctx,mix.mixCharacter,mix.context);
        master.output.disconnect();
        const output=ctx.createGain();output.gain.value=0;
        const guard=new AudioWorkletNode(ctx,'mixgenres-sample-peak-guard',{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2]});
        master.output.connect(guard);guard.connect(output);output.connect(ctx.destination);
        const timeline=this.prepared?.performance.mixTimeline;
        const headroom=ensembleHeadroom(plan.tracks.length,mix.masterProfile.lift);
        const scenes=timeline?.scenes.some(scene=>scene.enabled)?createSongMixGraph(ctx,master,timeline,plan.tracks.map(t=>t.id),timeline.baselineHeadroom??headroom):undefined;
        const nodes:AudioNode[]=[],strips:LiveGraph['strips']=new Map();
        const solo=song.tracks.some(t=>t.solo);
        plan.tracks.forEach((track,index)=>{
          const gain=ctx.createGain(),pan=ctx.createStereoPanner(),trim=ctx.createGain();
          const authored=song.tracks.find(t=>t.id===track.id);
          gain.gain.value=authored?.muted||solo&&!authored?.solo?0:authored?.volume??1;
          pan.pan.value=((authored?.pan??track.pan)-.5)*2;
          node.connect(gain,index);gain.connect(pan);pan.connect(trim);
          const def=INSTRUMENTS_BY_ID[track.instrumentId];
          const bus=determineBusCategory(def?.acousticProfile?.role,track.instrumentId);
          trim.gain.value=scenes?1:headroom;
          trim.connect(scenes?.tracks.get(track.id)?.input ?? (bus==='drums'?master.drumBus:bus==='sub'?master.subBus:master.instBus));
          nodes.push(gain,pan,trim);strips.set(track.id,{gain,pan});
        });
        const graph:LiveGraph={node,master,scenes,output,guard,position:0,nodes,strips,banks:new Set()};
        node.port.onmessage=({data}:MessageEvent<SampleReply>)=>this.receive(data,graph);
        try {
          for(const bank of plan.banks) {
            const buffer=await loadLiveBank(bank,plan,signal);
            await this.command(graph,{type:'bank',id:bank,buffer},[buffer]);graph.banks.add(bank);
          }
          if(signal.aborted)throw new DOMException('Sample preparation cancelled','AbortError');
          return graph;
        } catch(error) {this.releaseGraph(graph);throw error;}
      })();
      this.initializing={plan,job};
      try{return await job;}finally{if(this.initializing?.job===job)this.initializing=undefined;}
    }
    return this.graph;
  }
  private receive(message:SampleReply,graph:LiveGraph) {
    if(message.type==='ack') {if(message.position!==undefined)graph.position=message.position;this.pending.get(message.request)?.resolve();this.pending.delete(message.request);}
    else if(message.type==='error') {const job=message.request===undefined?undefined:this.pending.get(message.request);if(job){job.reject(new Error(message.error));this.pending.delete(message.request!);}else this.fail(new Error(message.error));}
    else if(graph===this.graph) {if(this.wantsPlayback&&!message.seeking&&message.position<this.offset-.2)graph.scenes?.schedule(this.ctx!.currentTime,message.position);graph.position=message.position;this.offset=message.position;this.voices=message.voices;this.seeking=message.seeking;}
  }
  private command(graph:LiveGraph,command:SampleCommand extends infer C ? C extends SampleCommand ? Omit<C,'request'> : never : never,transfer:Transferable[]=[]):Promise<void> {
    const request=++this.request;
    return new Promise((resolve,reject)=>{this.pending.set(request,{graph,resolve,reject});graph.node.port.postMessage({...command,request},transfer);});
  }
  private balance(song:Sheet) {
    if(!this.graph||!this.ctx)return;
    const solo=song.tracks.some(t=>t.solo),now=this.ctx.currentTime;
    for(const track of song.tracks) {
      const strip=this.graph.strips.get(track.id);if(!strip)continue;
      strip.gain.gain.setTargetAtTime(track.muted||solo&&!track.solo?0:track.volume??1,now,.005);
      const defaultPan=this.graph.plan?.tracks.find(t=>t.id===track.id)?.pan??.5;
      strip.pan.pan.setTargetAtTime(((track.pan??defaultPan)-.5)*2,now,.005);
    }
  }
  async play(inputTime?:number):Promise<void> {
    if(this.disposed)return;
    const clicked=Number.isFinite(inputTime)&&inputTime!>0?inputTime!:performance.now();
    this.clicked=clicked;this.observedSignalMs=undefined;this.peak=0;
    this.wantsPlayback=true;const playRequest=++this.playRequest;
    let startingRevision=this.revision;
    try {
      const ctx=this.context();
      // Resume in the input handler, before compilation/network promises.
      await ctx.resume();
      this.publish({status:'starting'});
      let preparing:Promise<void>;
      do {preparing=this.preparing;await preparing;} while(preparing!==this.preparing&&this.wantsPlayback&&!this.disposed);
      if(!this.wantsPlayback||this.disposed||playRequest!==this.playRequest)return;
      if(!this.prepared||this.prepared.song!==this.song){this.wantsPlayback=false;this.publish({status:'error'});return;}
      const prepared=this.prepared;
      startingRevision=this.revision;
      const graph=await this.ensureGraph(prepared.plan,prepared.song,this.controller!.signal);
      if(!this.wantsPlayback||this.disposed||playRequest!==this.playRequest){if(graph!==this.graph)this.releaseGraph(graph);return;}
      if(this.prepared!==prepared){if(graph!==this.graph)this.releaseGraph(graph);return this.play(clicked);}
      const seekRevision=this.seekRequest;
      if(graph.plan===prepared.plan) await this.command(graph,{type:'play'});
      else {await this.command(graph,{type:'plan',plan:prepared.plan,position:this.offset,playing:true});graph.plan=prepared.plan;}
      if(!this.wantsPlayback||this.disposed||playRequest!==this.playRequest){if(graph!==this.graph)this.releaseGraph(graph);return;}
      if(seekRevision!==this.seekRequest&&graph!==this.graph)await this.command(graph,{type:'seek',position:this.offset,playing:true});
      if(!this.wantsPlayback||this.disposed||playRequest!==this.playRequest){if(graph!==this.graph)this.releaseGraph(graph);return;}
      this.commitGraph(graph);graph.output.gain.setTargetAtTime(1,ctx.currentTime,.003);this.activeSong=prepared.song;this.balance(prepared.song);graph.scenes?.schedule(ctx.currentTime,this.offset);
      this.publish({status:'playing',progress:1,performance:prepared.performance,composition:prepared.song,
        ...(this.diagnostics?{audioStartMs:undefined,outputLatencyMs:(ctx.baseLatency+(ctx.outputLatency??0))*1000+3}: {})});
      this.animate();
    } catch(error) {
      if(this.wantsPlayback&&!this.disposed&&playRequest===this.playRequest) {
        if(error instanceof Error&&error.name==='AbortError'&&startingRevision!==this.revision)return this.play(clicked);
        this.fail(error);
      }
    }
  }
  private animate(){if(this.raf)cancelAnimationFrame(this.raf);const tick=()=>{if(!this.wantsPlayback||this.disposed)return;this.observeSignal();this.onPosition(this.offset);this.raf=requestAnimationFrame(tick);};this.raf=requestAnimationFrame(tick);}
  position(){return this.offset;}
  locate(seconds:number) {
    const target=Math.max(0,Math.min(this.prepared ? this.preparedDuration : Infinity,Number.isFinite(seconds)?seconds:0));
    const request=++this.seekRequest;
    this.offset=target;this.onPosition(target);
    const graph=this.graph;
    if(graph) {
      const playing=this.wantsPlayback&&!this.scrubbing;
      if(playing)this.publish({status:'seeking'});
      graph.output.gain.setTargetAtTime(0,this.ctx!.currentTime,.003);
      void this.context().resume().then(()=>{
        if(request!==this.seekRequest||this.disposed)return;
        return this.command(graph,{type:'seek',position:target,playing:this.wantsPlayback&&!this.scrubbing});
      }).then(()=>{
        if(!this.disposed&&request===this.seekRequest&&graph===this.graph){this.offset=graph.position;graph.scenes?.schedule(this.ctx!.currentTime,this.offset);if(this.wantsPlayback&&!this.scrubbing)graph.output.gain.setTargetAtTime(1,this.ctx!.currentTime,.003);this.publish({status:this.wantsPlayback&&!this.scrubbing?'playing':'paused'});}
      }).catch(error=>{if(!this.disposed&&request===this.seekRequest)this.fail(error);});
    }
  }
  beginScrub(){this.resumeScrub=this.wantsPlayback;this.scrubbing=true;this.pause();}
  endScrub(){this.scrubbing=false;if(this.resumeScrub)void this.play();this.resumeScrub=false;}
  pause(){this.wantsPlayback=false;++this.playRequest;if(this.raf)cancelAnimationFrame(this.raf);if(this.graph&&this.ctx){const now=this.ctx.currentTime;this.graph.output.gain.setTargetAtTime(0,now,.003);void this.command(this.graph,{type:'pause',when:now+.015}).catch(()=>{});}this.publish({status:this.prepared?'paused':'idle'});}
  stop(){this.pause();++this.seekRequest;this.offset=0;this.onPosition(0);if(this.graph)void this.command(this.graph,{type:'seek',position:0,playing:false}).catch(()=>{});this.publish({status:this.prepared?'ready':'idle'});}
  toggle(inputTime?:number){if(this.wantsPlayback)this.pause();else void this.play(inputTime);}
  private observeSignal(){
    if(!this.probe)return;
    this.probe.getFloatTimeDomainData(this.probeSamples);
    for(const value of this.probeSamples)this.peak=Math.max(this.peak,Math.abs(value));
    if(this.observedSignalMs===undefined&&this.peak>.0002){this.observedSignalMs=performance.now()-this.clicked;this.publish({audioStartMs:this.observedSignalMs});}
  }
  private commitGraph(graph:LiveGraph) {
    if(this.graph===graph)return;
    const old=this.graph;this.graph=graph;
    if(this.diagnostics){this.probe=this.ctx!.createAnalyser();this.probe.fftSize=256;graph.output.connect(this.probe);}
    graph.output.gain.setTargetAtTime(this.wantsPlayback?1:0,this.ctx!.currentTime,.008);
    if(old){old.output.gain.setTargetAtTime(0,this.ctx!.currentTime,.008);setTimeout(()=>this.releaseGraph(old),60);}
  }
  private fail(error:unknown){if(this.disposed)return;if(this.diagnostics)console.error('SoundFont playback failed',error instanceof Error?error.stack:error);this.pause();for(const [id,job]of this.pending){job.reject(error instanceof Error?error:new Error(String(error)));this.pending.delete(id);}this.publish({status:'error',error:error instanceof Error?error.message:String(error)});}
  private releaseGraph(graph:LiveGraph){if(graph.released)return;graph.released=true;for(const [id,job]of this.pending)if(job.graph===graph){job.resolve();this.pending.delete(id);}graph.node.port.postMessage({type:'dispose',request:++this.request} satisfies SampleCommand);graph.node.disconnect();graph.node.port.close();graph.guard.disconnect();graph.output.disconnect();graph.scenes?.dispose();graph.master.dispose();for(const node of graph.nodes)node.disconnect();}
  dispose(){this.disposed=true;this.wantsPlayback=false;this.controller?.abort();this.removeListeners();if(this.raf)cancelAnimationFrame(this.raf);if(this.graph)this.releaseGraph(this.graph);this.graph=undefined;for(const pending of this.pending.values())pending.reject(new DOMException('Sample player disposed','AbortError'));this.pending.clear();void this.ctx?.close();}
}
function remapPosition(before:Performance|undefined,after:Performance,position:number) {
  const index=before?.bars.findIndex(bar=>position>=bar.start&&position<bar.end)??-1;
  const old=before?.bars[index],next=after.bars[index];
  return old&&next&&old.end>old.start?next.start+(position-old.start)/(old.end-old.start)*(next.end-next.start):Math.min(position,after.duration);
}
