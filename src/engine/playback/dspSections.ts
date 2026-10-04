import type { Performance } from '../band/performanceData';
import type { Mp3RenderOptions } from './mp3Export';
import { createNoteTailResolver } from './noteLifetime';
import { planDSPSectionsWithTail } from './dspSectionPlan';
export { assembleDSPSections, type DSPSection } from './dspSectionPlan';

/** Standalone renders can resolve lifetimes from instrument physics. */
export function planDSPSections(performance: Performance, options: Mp3RenderOptions) {
  return planDSPSectionsWithTail(performance, options, createNoteTailResolver(performance, options));
}
