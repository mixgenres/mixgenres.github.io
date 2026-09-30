import type { FormIntensity } from '../schema';
import type { SectionEnergy } from '../primitives';

export const FORM_INTENSITY_TO_ENERGY: Record<FormIntensity, SectionEnergy> = {
  low: 1,
  medium: 3,
  high: 4,
  peak: 5,
};

export const ENERGY_TO_FORM_INTENSITY: Record<SectionEnergy, FormIntensity> = {
  1: 'low',
  2: 'low',
  3: 'medium',
  4: 'high',
  5: 'peak',
};

export const ENERGY_LABELS: Record<SectionEnergy, string> = {
  1: 'Bare',
  2: 'Held back',
  3: 'Steady',
  4: 'Driving',
  5: 'Full',
};
