import type { Performance, PerfNote } from './performanceData';

/** Ties join identical written pitches without a second physical attack. A tie
 * over a rest or into a different pitch is an authoring error, not a slur. */
export function resolveWrittenTies(performance: Performance): void {
  const starts: number[]=[]; let total=0;
  for (const bar of performance.bars) { starts.push(total); total+=bar.beatsPerBar; }
  const start=(note:PerfNote)=>starts[note.notation?.bar ?? note.bar]+(note.notation?.beat ?? 0);
  const pitch=(note:PerfNote)=>note.frequencyHz === undefined
    ? note.midi * 100 + (note.tuningCents ?? 0) : 6900 + 1200 * Math.log2(note.frequencyHz / 440);
  const pitched=(note:PerfNote)=>note.pitchIdentity !== 'unpitched' && !note.drum && !note.percussion;
  const sameSound=(a:PerfNote,b:PerfNote)=>a.midi===b.midi && pitched(a)===pitched(b)
    && (pitched(a) ? Math.abs(pitch(a)-pitch(b))<.01
      : a.percussion?.componentId===b.percussion?.componentId && a.gestureCode===b.gestureCode);
  const removed=new Set<PerfNote>();
  const ordered=performance.notes.slice().sort((a,b)=>start(a)-start(b));
  for (const note of ordered) {
    if (removed.has(note) || !note.musicianNotation?.tieToNext) continue;
    let current=note;
    while (current.musicianNotation?.tieToNext) {
      if (!Number.isFinite(start(current)) || !(current.notation?.durationBeats! > 0)) {
        throw new Error('Written tie requires a positive notated duration and a valid bar.');
      }
      const end=start(current)+(current.notation?.durationBeats ?? 0);
      const next=ordered.find(candidate=>!removed.has(candidate) && candidate!==note && candidate.trackId===note.trackId
        && sameSound(note,candidate)
        && Math.abs(start(candidate)-end)<1e-9);
      if (!next) throw new Error(`Written tie has no matching continuation: ${current.notationEventId ?? current.attackId}`);
      if (next.pitchBend?.length) {
        const offset=next.time-note.time;
        note.pitchBend=[...(note.pitchBend ?? []), ...next.pitchBend.map(point=>({...point,offset:offset+point.offset}))]
          .sort((a,b)=>a.offset-b.offset);
      }
      removed.add(next);
      const duration=next.time+next.dur-note.time;
      if (!Number.isFinite(duration) || duration<=0) throw new Error('Written tie has an invalid performed duration.');
      note.dur=duration;
      note.notation={...note.notation!,durationBeats:start(next)+next.notation!.durationBeats-start(note)};
      current=next;
    }
    note.musicianNotation={...note.musicianNotation,tieToNext:false};
  }
  performance.notes=performance.notes.filter(note=>!removed.has(note));
}
