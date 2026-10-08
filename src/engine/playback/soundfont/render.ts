import type { Performance } from '../../band/performanceData';
import type { Mp3RenderOptions } from '../mp3Export';
import { checkAbort, yieldToUI } from '../../../export/audioEncoding';
import { compileSamplePlan } from './plan';
import { loadSoundfontBank } from './banks';
import { SampleRuntime } from './runtime';

/** Direct Node/offline part rendering, shared with the live event interpreter. Studio
 * mastering and MP3 encoding remain in the existing export pipeline. */
export async function renderSampleTrack(performance: Performance, options: Mp3RenderOptions,
  trackId: string, startSample: number, endSample: number): Promise<{ left: Float32Array; right: Float32Array; startSample: number }> {
  const sampleRate=44100;
  const plan=compileSamplePlan(performance,{...options,selectedTrackIds:[trackId]});
  const runtime=new SampleRuntime(sampleRate);
  const scratchL=new Float32Array(128), scratchR=new Float32Array(128);
  try {
    // Load only the banks used by this part's events.
    for (const bank of plan.banks) { checkAbort(options.signal); runtime.addBank(bank,await loadSoundfontBank(bank,options.signal)); }
    await runtime.synth.processorInitialized;
    runtime.setPlan(plan); runtime.seek(startSample/sampleRate);
    let blocks=0;
    while(runtime.isSeeking) {
      checkAbort(options.signal); runtime.prime(scratchL,scratchR,128);
      if(options.yieldForUI!==false && ++blocks%4===0) await yieldToUI();
    }
    const left=new Float32Array(Math.max(0,endSample-startSample)), right=new Float32Array(left.length);
    for(let frame=0;frame<left.length;frame+=128) {
      if(frame%16384===0) {checkAbort(options.signal);if(options.yieldForUI!==false)await yieldToUI();}
      runtime.render(left,right,frame,Math.min(128,left.length-frame));
    }
    checkAbort(options.signal);
    return {left,right,startSample};
  } finally {runtime.destroy();}
}
