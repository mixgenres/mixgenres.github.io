import type { Performance } from '../../src/engine/band/performanceData';

/** Retain sounding notes and last controller state when sampling a later section. */
export function excerptPerformance(perf: Performance, start: number, seconds: number): Performance {
  const end = Math.min(perf.duration, start + seconds);
  if (!Number.isFinite(start) || start < 0 || end <= start) throw new Error('Invalid audio excerpt range');
  const priorControllers = new Map<string, Performance['ccs'][number]>();
  for (const cc of perf.ccs) if (cc.time < start) {
    const key = `${cc.trackId}:${cc.cc}`;
    const prior = priorControllers.get(key);
    if (!prior || prior.time <= cc.time) priorControllers.set(key, cc);
  }
  return { ...perf, duration: end - start, tail: 1,
    notes: perf.notes.filter(n => n.time < end && n.time + n.dur > start).map(n => {
      const onset = Math.max(start, n.time);
      return { ...n, time: onset - start, dur: Math.min(n.time + n.dur, end) - onset,
        pitchBend: n.pitchBend?.filter(b => n.time + b.offset >= onset && n.time + b.offset < end).map(b => ({ ...b, offset: n.time + b.offset - onset })) };
    }),
    ccs: [...[...priorControllers.values()].map(cc => ({ ...cc, time: 0 })),
      ...perf.ccs.filter(cc => cc.time >= start && cc.time < end).map(cc => ({ ...cc, time: cc.time - start }))],
    bars: perf.bars.filter(b => b.end > start && b.start < end).map(b => ({ ...b, start: Math.max(0, b.start - start), end: Math.min(end, b.end) - start })),
  };
}
export function chooseAudioWindows(perf: Performance, seconds = 2) {
  const candidates = perf.bars.map(bar => ({ start: bar.start, regionId: bar.regionId,
    score: perf.notes.filter(n => n.time >= bar.start && n.time < Math.min(perf.duration, bar.start + seconds)).length,
    tracks: new Set(perf.notes.filter(n => n.time >= bar.start && n.time < Math.min(perf.duration, bar.start + seconds)).map(n => n.trackId)).size }));
  candidates.sort((a, b) => b.tracks - a.tracks || b.score - a.score || a.start - b.start);
  const dense = candidates[0];
  return [{ name: 'opening', start: 0, regionId: perf.bars[0]?.regionId },
    ...(dense && dense.start >= seconds ? [{ name: 'ensemble', start: dense.start, regionId: dense.regionId }] : [])];
}
