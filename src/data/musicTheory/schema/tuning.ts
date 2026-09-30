export interface TuningOptions {
  instrumentId?: string;
  styleId?: string;
  genreId?: string;
  activeChordSymbol?: string;
  activeChordPc?: number;
  activeChordIntervals?: number[];
  previousMidi?: number;
  articulation?: string;
}
