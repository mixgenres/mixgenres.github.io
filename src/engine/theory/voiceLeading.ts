import type { ChordNote } from './voicings';

export class VoiceLeadingResolver {
  public applySmoothVoiceLeading(currentChord: ChordNote[], previousChord: ChordNote[] | null): ChordNote[] {
    if (!previousChord || previousChord.length === 0 || !currentChord || currentChord.length === 0) {
      return currentChord;
    }

    let bestInversion = currentChord;
    let minimumDistance = Infinity;
    const inversions = [
      currentChord,
      this.invertUp(currentChord, 1),
      this.invertUp(currentChord, 2),
      this.invertDown(currentChord, 1),
    ];

    for (const inversion of inversions) {
      const distance = this.calculateVoiceDistance(inversion, previousChord);
      if (distance < minimumDistance) {
        minimumDistance = distance;
        bestInversion = inversion;
      }
    }

    return [currentChord[0], ...bestInversion.slice(1)].sort((a, b) => this.pitchOf(a) - this.pitchOf(b));
  }

  private pitchOf(note: ChordNote): number {
    if (typeof note === 'number') return note;
    return note.pitch ?? note.midiValue;
  }

  private calculateVoiceDistance(chordA: ChordNote[], chordB: ChordNote[]): number {
    const length = Math.min(chordA.length, chordB.length);
    return chordA.slice(0, length).reduce<number>((sum, _, i) => {
      const a = chordA[i];
      const b = chordB[i];
      return a !== undefined && b !== undefined
        ? sum + Math.abs(this.pitchOf(a) - this.pitchOf(b))
        : sum;
    }, 0);
  }

  private invertUp(chord: ChordNote[], amount: number): ChordNote[] {
    if (!chord.length) return chord;
    const copy = [...chord];
    for (let i = 0; i < Math.min(amount, copy.length); i++) {
      const note = copy.shift();
      if (note === undefined) continue;
      if (typeof note === 'number') {
        copy.push(note + 12);
      } else {
        const pitch = this.pitchOf(note) + 12;
        copy.push({ ...note, pitch, midiValue: pitch });
      }
    }
    return copy;
  }

  private invertDown(chord: ChordNote[], amount: number): ChordNote[] {
    if (!chord.length) return chord;
    const copy = [...chord];
    for (let i = 0; i < Math.min(amount, copy.length); i++) {
      const note = copy.pop();
      if (note === undefined) continue;
      if (typeof note === 'number') {
        copy.unshift(note - 12);
      } else {
        const pitch = this.pitchOf(note) - 12;
        copy.unshift({ ...note, pitch, midiValue: pitch });
      }
    }
    return copy;
  }
}
