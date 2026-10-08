import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {SoundfontSongPlayer} from '../src/engine/playback/soundfont/player';
import {compileSamplePlan,type SamplePlan} from '../src/engine/playback/soundfont/plan';
import {setSoundfontBankReader} from '../src/engine/playback/soundfont/banks';
import {songMixOptions} from '../src/engine/playback/renderSongMix';
import {makeSheet,setSongBpm,type Sheet} from '../src/engine/sheet/sheet';
import {arrangeBand} from '../src/engine/band/arrangeBand';
import type {Performance} from '../src/engine/band/performanceData';
import type {SampleCommand} from '../src/engine/playback/soundfont/protocol';
setSoundfontBankReader(async id=>{const d=readFileSync(`src/assets/soundfonts/${id}.sfpack`);return d.buffer.slice(d.byteOffset,d.byteOffset+d.byteLength);});
const flush=()=>new Promise<void>(resolve=>setImmediate(resolve));
function deferred(){let resolve!:()=>void;const promise=new Promise<void>(yes=>{resolve=yes;});return {promise,resolve};}
type Command=SampleCommand extends infer C?C extends SampleCommand?Omit<C,'request'>:never:never;
interface Graph {plan?:SamplePlan;position:number;level:number;output:GainNode;scenes?:undefined}
// Test-owned player seams; sample synthesis itself is tested against real banks.
interface Harness extends Pick<SoundfontSongPlayer,'play'|'configure'|'pause'|'stop'|'snapshot'|'dispose'|'position'> {
  song:Sheet;activeSong:Sheet;prepared:{performance:Performance;plan:SamplePlan;song:Sheet};
  preparedKey:string;preparing:Promise<void>;controller:AbortController;graph:Graph;ctx:AudioContext;
  wantsPlayback:boolean;offset:number;
  ensureGraph:(plan:SamplePlan)=>Promise<Graph>;command:(graph:Graph,command:Command)=>Promise<void>;
  commitGraph:(graph:Graph)=>void;releaseGraph:(graph:Graph)=>void;animate:()=>void;balance:()=>void;
}
function fixture(){
  const oldWindow=globalThis.window,oldDocument=globalThis.document;
  globalThis.window=new EventTarget() as unknown as Window&typeof globalThis;
  globalThis.document=Object.assign(new EventTarget(),{visibilityState:'visible'}) as unknown as Document;
  const song=makeSheet('tango'),performance=arrangeBand(song),plan=compileSamplePlan(performance,songMixOptions(song));
  const player=new SoundfontSongPlayer(()=>{},()=>{}) as unknown as Harness;
  const graph=(p?:SamplePlan):Graph=>{
    const g={plan:p,position:0,level:0,output:undefined as unknown as GainNode};
    g.output={gain:{setTargetAtTime(value:number){g.level=value;}}} as unknown as GainNode;return g;
  };
  const original=graph(plan),commands:Array<{graph:Graph;command:Command}>=[],released:Graph[]=[];
  Object.assign(player,{song,activeSong:song,prepared:{performance,plan,song},preparing:Promise.resolve(),controller:new AbortController(),graph:original,
    ctx:{currentTime:0,resume:async()=>{},close:async()=>{},baseLatency:0} as unknown as AudioContext,
    ensureGraph:async(p:SamplePlan)=>p===player.graph.plan?player.graph:graph(),
    command:async(g:Graph,c:Command)=>{commands.push({graph:g,command:c});if(c.type==='plan'||c.type==='seek')g.position=c.position;},
    commitGraph:(g:Graph)=>{player.graph=g;g.level=player.wantsPlayback?1:0;},releaseGraph:(g:Graph)=>{released.push(g);},animate:()=>{},balance:()=>{}});
  return {player,song,original,commands,released,cleanup:()=>{player.dispose();globalThis.window=oldWindow;globalThis.document=oldDocument;}};
}
test('warm sample resume reuses the sounding sample state, and Pause cancels a pending Play',async()=>{
  const f=fixture();try {
    await f.player.play();assert.deepEqual(f.commands.map(c=>c.command.type),['play']);
    f.player.pause();const gate=deferred();f.player.preparing=gate.promise;
    const pending=f.player.play();await flush();f.player.pause();gate.resolve();await pending;
    assert.equal(f.player.snapshot.status,'paused');assert.equal(f.commands.filter(c=>c.command.type==='play').length,1);
  }finally{f.cleanup();}
});
test('Pause during a staged tempo replacement cannot start the new sample graph',async()=>{
  const f=fixture();try {
    await f.player.play();const gate=deferred(),base=f.player.command;let staged:Graph|undefined;
    f.player.command=async(g,c)=>{await base(g,c);if(c.type==='plan'){staged=g;await gate.promise;}};
    f.player.configure(setSongBpm(f.song,110));
    for(let i=0;i<200&&!staged;i++)await new Promise(resolve=>setTimeout(resolve,5));
    assert(staged,'replacement reaches sample priming');f.player.pause();gate.resolve();await f.player.preparing;
    assert.equal(f.player.snapshot.status,'paused');assert.equal(f.player.graph,staged);assert.equal(staged.level,0);
    assert(f.commands.some(c=>c.graph===staged&&c.command.type==='pause'));
  }finally{f.cleanup();}
});
test('Stop during a staged replacement preserves zero and discards an obsolete seek position',async()=>{
  const f=fixture();try {
    f.player.offset=20;await f.player.play();const gate=deferred(),base=f.player.command;let staged:Graph|undefined;
    f.player.command=async(g,c)=>{await base(g,c);if(c.type==='plan'){staged=g;await gate.promise;}};
    f.player.configure(setSongBpm(f.song,110));
    for(let i=0;i<200&&!staged;i++)await new Promise(resolve=>setTimeout(resolve,5));
    assert(staged);f.player.stop();gate.resolve();await f.player.preparing;
    assert.equal(f.player.position(),0);assert.equal(staged.level,0);
    assert(f.commands.some(c=>c.graph===staged&&c.command.type==='seek'&&c.command.position===0&&!c.command.playing));
  }finally{f.cleanup();}
});
