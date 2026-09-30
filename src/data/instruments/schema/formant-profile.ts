export interface FormantBand { freq: number; q: number; gain: number; }
export interface AcousticFormantProfile {
  f1: FormantBand;
  f2: FormantBand;
  f3?: FormantBand;
  tongueType: 'chiff' | 'reed-tongue' | 'lip-slap' | 'soft-puff';
  tongueFreq: number;
}
