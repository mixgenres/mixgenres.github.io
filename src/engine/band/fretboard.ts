import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';

type FretChoice = { midi: number; fret: number; stringIndex: number; cost: number };

/** Keep chord voicings within the instrument's actual string and hand limits. */
export function constrainToFretboard(notes: number[], instrumentId: string, low: number, high: number): number[] {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  const mechanics = def?.tuningAndMechanics;
  const strings = mechanics?.openStrings;
  const maxFret = mechanics?.frets;
  if (!strings?.length || maxFret === undefined || strings.length < 4 || def.family !== 'plucked') return notes;

  const handSpan = Math.max(1, mechanics?.maxFretStretch ?? 4);
  const candidates = notes.map(target => strings.flatMap((string, stringIndex) => {
    const choices: FretChoice[] = [];
    for (let fret = 0; fret <= maxFret; fret++) {
      const midi = string.midi + fret;
      if (midi < low || midi > high || midi % 12 !== target % 12) continue;
      // Prefer the intended octave/register, then low fret positions.
      choices.push({ midi, fret, stringIndex, cost: Math.abs(midi - target) * 5 + fret * 0.04 });
    }
    return choices;
  }));

  let best: FretChoice[] = [];
  let bestScore = Infinity;
  const assigned: FretChoice[] = [];
  const usedStrings = new Set<number>();
  const visit = (noteIndex: number, score: number) => {
    if (noteIndex === notes.length) {
      if (assigned.length > best.length || (assigned.length === best.length && score < bestScore)) {
        best = assigned.slice();
        bestScore = score;
      }
      return;
    }
    if (assigned.length + notes.length - noteIndex < best.length) return;

    // Drop a chord tone only when no physical string/hand assignment is better.
    visit(noteIndex + 1, score + 80);
    for (const choice of candidates[noteIndex] ?? []) {
      if (usedStrings.has(choice.stringIndex)) continue;
      const fretted = assigned.filter(x => x.fret > 0);
      if (choice.fret > 0 && fretted.length) {
        const minFret = Math.min(choice.fret, ...fretted.map(x => x.fret));
        const maxFretUsed = Math.max(choice.fret, ...fretted.map(x => x.fret));
        if (maxFretUsed - minFret > handSpan) continue;
      }
      usedStrings.add(choice.stringIndex);
      assigned.push(choice);
      visit(noteIndex + 1, score + choice.cost);
      assigned.pop();
      usedStrings.delete(choice.stringIndex);
    }
  };
  visit(0, 0);
  return best.map(x => x.midi).sort((a, b) => a - b);
}
