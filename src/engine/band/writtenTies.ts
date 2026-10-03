import type { Performance, PerfNote } from './performanceData';

/** Ties join identical written pitches without a second physical attack. A tie
 * over a rest or into a different pitch is an authoring error, not a slur. */
export function resolveWrittenTies(performance: Performance): void {
  const starts: number[]=[]; let total=0;
  for (const bar of performance.bars) { starts.push(total); total+=bar.beatsPerBar; }
  const start=(note:PerfNote)=>starts[note.notation?.bar ?? note.bar]+(note.notation?.beat ?? 0);
  const removed=new Set<PerfNote>();
  const ordered=performance.notes.slice().sort((a,b)=>start(a)-start(b));
  for (const note of ordered) {
    if (removed.has(note) || !note.musicianNotation?.tieToNext) continue;
    let current=note;
    while (current.musicianNotation?.tieToNext) {
      const end=start(current)+(current.notation?.durationBeats ?? 0);
      const next=ordered.find(candidate=>!removed.has(candidate) && candidate!==note && candidate.trackId===note.trackId
        && candidate.midi===note.midi && Math.abs(start(candidate)-end)<1e-9);
      if (!next) throw new Error(`Written tie has no matching continuation: ${current.notationEventId ?? current.attackId}`);
      removed.add(next);
      note.dur=Math.max(0.000001,next.time+next.dur-note.time);
      note.notation={...note.notation!,durationBeats:start(next)+next.notation!.durationBeats-start(note)};
      current=next;
    }
    note.musicianNotation={...note.musicianNotation,tieToNext:false};
  }
  performance.notes=performance.notes.filter(note=>!removed.has(note));
}
