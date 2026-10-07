import type { Performance } from '../band/performanceData';
import { contentKey } from '../cache/contentKey';
import type { Mp3RenderOptions } from './mp3Export';
import { planDSPSectionsWithTail, type DSPSection } from './dspSectionPlan';
import { preparedNoteLifetimes } from './preparedNoteLifetimes';

// Compiled performances are immutable snapshots. Each player owns its own
// bounded configuration cache: an ensemble must not evict its first player's
// plan while preparing its ninth. GC reclaims all plans with replaced songs.
const plans = new WeakMap<Performance, Map<string, Map<string, Promise<DSPSection[]>>>>();

/** Plan/hash attack ownership once per instrument, independent of transport
 * windows and faders. Later playback windows only select overlapping sections. */
export async function preparedDSPSections(performance: Performance, options: Mp3RenderOptions) {
  const ids = options.selectedTrackIds ?? [...options.trackInstruments.keys()];
  const key = contentKey([ids, ids.map(id => [options.trackInstruments.get(id), options.trackRoles?.get(id)]),
    options.worldId, options.styleId, options.maxDurationSeconds, options.rawOutputStartSample]);
  let players = plans.get(performance);
  if (!players) { players = new Map(); plans.set(performance, players); }
  const playerKey = JSON.stringify(ids);
  let cache = players.get(playerKey);
  if (!cache) { cache = new Map(); players.set(playerKey, cache); }
  let plan = cache.get(key);
  if (!plan) {
    plan = preparedNoteLifetimes(performance, options).then(tail =>
      planDSPSectionsWithTail(performance, { ...options, renderWindow: undefined }, tail));
    cache.set(key, plan);
    if (cache.size > 8) cache.delete(cache.keys().next().value!);
    const current = plan;
    void plan.catch(() => { if (cache.get(key) === current) cache.delete(key); });
  }
  const sections = await plan;
  const window = options.renderWindow;
  return window ? sections.filter(section => section.startSample / 44100 < window.end &&
    section.startSample / 44100 + section.performance.duration > window.start) : sections;
}
