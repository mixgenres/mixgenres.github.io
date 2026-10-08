import { BASS_INSTRUMENT_PATTERN, DRUM_BUS_INSTRUMENT_PATTERN, SUB_BUS_INSTRUMENT_PATTERN } from '../../data/instruments/idClassifiers';

export function determineBusCategory(role?: string, instrumentId?: string): 'drums' | 'sub' | 'inst' {
  const r = (role || '').toLowerCase();
  const inst = (instrumentId || '').toLowerCase();
  if (SUB_BUS_INSTRUMENT_PATTERN.test(inst)) return 'sub';
  if (r === 'bass' || BASS_INSTRUMENT_PATTERN.test(inst)) return 'inst';
  if (r === 'drums' || r === 'percussion' || DRUM_BUS_INSTRUMENT_PATTERN.test(inst)) return 'drums';
  return 'inst';
}
