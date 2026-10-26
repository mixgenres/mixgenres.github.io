import type { Performance } from '../../band/performanceData';
import type { Mp3RenderOptions } from '../mp3Export';
import { checkAbort, yieldToUI } from '../../../export/audioEncoding';
import { compileSamplePlan, type SamplePlan } from './plan';
import { loadSoundfontBank } from './banks';
import { SampleRuntime } from './runtime';

/** Direct Node/offline part rendering, shared with the live event interpreter. Studio
 * mastering and MP3 encoding remain in the existing export pipeline. */
export async function renderSampleTrack(performance: Performance, options: Mp3RenderOptions,
  trackId: string, startSample: number, endSample: number, compiledPlan?: SamplePlan,
  onProgress?: (fraction: number) => void): Promise<{ left: Float32Array; right: Float32Array; startSample: number }> {
  const sampleRate=44100;
  const plan=compiledPlan??compileSamplePlan(performance,{...options,selectedTrackIds:[trackId]});
  const runtime=new SampleRuntime(sampleRate);
  const scratchL=new Float32Array(128), scratchR=new Float32Array(128);
  try {
    // Load only the banks used by this part's events.
    for (const bank of plan.banks) { checkAbort(options.signal); runtime.addBank(bank,await loadSoundfontBank(bank,options.signal)); }
    onProgress?.(.05);
    await runtime.synth.processorInitialized;
    runtime.setPlan(plan); runtime.seek(startSample/sampleRate);
    let lastYield=globalThis.performance.now();
    while(runtime.isSeeking) {
      checkAbort(options.signal); runtime.prime(scratchL,scratchR,8);
      if(options.yieldForUI!==false && globalThis.performance.now()-lastYield>=16) {
        onProgress?.(.05+.1*Math.max(0,Math.min(1,runtime.position*sampleRate/Math.max(1,startSample))));
        await yieldToUI(); lastYield=globalThis.performance.now();
      }
    }
    const left=new Float32Array(Math.max(0,endSample-startSample)), right=new Float32Array(left.length);
    for(let frame=0;frame<left.length;frame+=128) {
      // A fixed number of audio frames is not a CPU budget: a dense piano or
      // orchestral part can cost far more than the same span of a single bass.
      if(frame%1024===0) {
        checkAbort(options.signal);
        if(options.yieldForUI!==false && globalThis.performance.now()-lastYield>=16) {
          onProgress?.(.15+.85*frame/Math.max(1,left.length));
          await yieldToUI(); lastYield=globalThis.performance.now();
        }
      }
      runtime.render(left,right,frame,Math.min(128,left.length-frame));
    }
    checkAbort(options.signal);
    onProgress?.(1);
    return {left,right,startSample};
  } finally {runtime.destroy();}
}
