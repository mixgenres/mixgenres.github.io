import type { MixScene, MixSceneTimeline, TrackMixState } from './MixScene';

export interface AutomationPoint { time: number; value: number }
export const dbToGain = (db: number) => Math.pow(10, db / 20);

/** One set of scalar ramps serves Web Audio and the portable PCM runtime. */
export function compileAutomation(timeline: MixSceneTimeline, value: (scene: MixScene) => number,
  kind: 'gain' | 'spectral' | 'spatial' = 'gain'): AutomationPoint[] {
  const points: AutomationPoint[] = [];
  let previous: MixScene | undefined;
  for (const scene of timeline.scenes) {
    const target = value(scene);
    if (!Number.isFinite(target)) throw new Error('Invalid compiled mix automation');
    if (!previous) { points.push({ time: 0, value: target }); previous = scene; continue; }
    const prevValue = value(previous);
    const durationMs = scene.sectionId !== previous.sectionId ? scene.transitions.sectionTransitionMs
      : kind === 'spectral' ? scene.transitions.spectralRampMs : kind === 'spatial' ? scene.transitions.foregroundHandoffMs
        : target > prevValue ? scene.transitions.attackMs : scene.transitions.releaseMs;
    const rampDuration = Math.min(Math.max(.005, durationMs / 1000), (scene.endTime - scene.startTime) / 2,
      (previous.endTime - previous.startTime) / 2);
    const start = Math.max(points.at(-1)!.time, scene.startTime - Math.min(scene.transitions.lookaheadMs / 1000, rampDuration / 2));
    if (target !== prevValue) {
      points.push({ time: start, value: prevValue });
      points.push({ time: Math.max(start + .001, start + rampDuration), value: target });
    }
    previous = scene;
  }
  const offset = timeline.sourceStartTime ?? 0;
  if (offset === 0 || !points.length) return points;
  return [{ time: 0, value: automationValueAt(points, offset) },
    ...points.filter(point => point.time > offset && point.time <= offset + timeline.duration).map(point => ({ ...point, time: point.time - offset })),
    { time: timeline.duration, value: automationValueAt(points, offset + timeline.duration) }];
}
export function automationValueAt(points: AutomationPoint[], time: number): number {
  if (!points.length) return 0;
  let lo = 0, hi = points.length;
  while (lo < hi) { const mid = (lo + hi) >>> 1; if (points[mid].time <= time) lo = mid + 1; else hi = mid; }
  const a = points[Math.max(0, lo - 1)], b = points[lo];
  if (!b || time <= a.time) return a.value;
  return a.value + (b.value - a.value) * (time - a.time) / (b.time - a.time);
}
/** Seek/loop restores the interpolated value, then schedules only the remaining ramps. */
export function scheduleAutomation(param: AudioParam, points: AutomationPoint[], contextTime = 0, songTime = 0) {
  if (!points.length) return;
  param.cancelScheduledValues(contextTime);
  param.setValueAtTime(automationValueAt(points, songTime), contextTime);
  for (const point of points) if (point.time > songTime) param.linearRampToValueAtTime(point.value, contextTime + point.time - songTime);
}
export function trackState(scene: MixScene, trackId: string): TrackMixState | undefined { return scene.tracks[trackId]; }

/** No re-planning for a render excerpt: retain the original lanes and slice their clock. */
export function excerptMixTimeline(timeline: MixSceneTimeline, start: number, duration: number): MixSceneTimeline {
  if (!Number.isFinite(start) || !Number.isFinite(duration) || start < 0 || duration <= 0 || start + duration > timeline.duration + .000001) {
    throw new Error('Invalid mix timeline excerpt');
  }
  return { ...timeline, duration, sourceStartTime: (timeline.sourceStartTime ?? 0) + start };
}
