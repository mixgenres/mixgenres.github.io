/** Linked stereo lookahead limiter, O(1) per frame, with no callback allocation.
 * The monotonic queue finds the peak from the delayed frame through its future. */
export class StereoPeakGuard {
  readonly latencyFrames:number;
  private readonly left:Float32Array;
  private readonly right:Float32Array;
  private readonly peaks:Float32Array;
  private readonly indices:Float64Array;
  private readonly mask:number;
  private readonly release:number;
  private frame=0;
  private head=0;
  private tail=0;
  private gain=1;
  constructor(sampleRate:number,private readonly ceiling=.92) {
    this.latencyFrames=Math.ceil(sampleRate*.003);
    const size=2**Math.ceil(Math.log2(this.latencyFrames+2));this.mask=size-1;
    this.left=new Float32Array(size);this.right=new Float32Array(size);
    this.peaks=new Float32Array(size);this.indices=new Float64Array(size);
    this.release=1-Math.exp(-1/(sampleRate*.05));
  }
  process(inputL:Float32Array|undefined,inputR:Float32Array|undefined,outputL:Float32Array,outputR:Float32Array) {
    for(let i=0;i<outputL.length;i++,this.frame++) {
      const l=Number.isFinite(inputL?.[i])?inputL![i]:0,r=Number.isFinite(inputR?.[i])?inputR![i]:0;
      const slot=this.frame&this.mask;this.left[slot]=l;this.right[slot]=r;
      const peak=Math.max(Math.abs(l),Math.abs(r));
      while(this.tail>this.head&&this.peaks[(this.tail-1)&this.mask]<=peak)this.tail--;
      this.peaks[this.tail&this.mask]=peak;this.indices[this.tail&this.mask]=this.frame;this.tail++;
      const oldest=this.frame-this.latencyFrames;
      while(this.tail>this.head&&this.indices[this.head&this.mask]<oldest)this.head++;
      const target=Math.min(1,this.ceiling/Math.max(this.peaks[this.head&this.mask],1e-12));
      this.gain=Math.min(target,this.gain+(1-this.gain)*this.release);
      const read=oldest&this.mask;
      outputL[i]=oldest<0?0:this.left[read]*this.gain;outputR[i]=oldest<0?0:this.right[read]*this.gain;
    }
  }
}
