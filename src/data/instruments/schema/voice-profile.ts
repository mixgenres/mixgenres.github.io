export type GrooveRole = 'kick' | 'snare' | 'hat' | 'ride' | 'perc' | 'bass' | 'comp' | 'pad' | 'lead' | 'stab';
export type SustainClass = 'decaying' | 'sustained' | 'blown' | 'short' | 'percussive';
export interface VoiceProfile {
  id?: string; sustain: SustainClass; role: GrooveRole; centre: number; low: number; high: number;
  pan: number; trim: number; space: number; ring: number; ensembleSmearMs?: number; letRingAcrossSections?: boolean;
}
