export type ChordQuality = 'major' | 'minor' | 'major7' | 'minor7' | 'dominant7' | 'diminished' | 'augmented';

export interface NoteLike {
  midiValue: number;
  pitch?: number;
  name?: string;
  transpose(semitones: number): NoteLike;
}

export class NoteImpl implements NoteLike {
  public midiValue: number;
  public pitch: number;
  public name: string;

  constructor(midiValue: number, name: string = '') {
    this.midiValue = midiValue;
    this.pitch = midiValue;
    this.name = name;
  }

  public transpose(semitones: number): NoteLike {
    return new NoteImpl(this.midiValue + semitones, this.name);
  }
}

export type ChordNote = number | NoteLike;

export interface VoicingContext {
  genre?: {
    culturalHarmony?: {
      voicingRule?: string;
    };
  };
}

export class VoicingGenerator {
  public getStandardIntervals(quality: ChordQuality | string): number[] {
    switch (quality) {
      case 'major':
        return [0, 4, 7];
      case 'minor':
        return [0, 3, 7];
      case 'major7':
        return [0, 4, 7, 11];
      case 'minor7':
        return [0, 3, 7, 10];
      case 'dominant7':
        return [0, 4, 7, 10];
      case 'diminished':
        return [0, 3, 6];
      case 'augmented':
        return [0, 4, 8];
      default:
        return [0, 4, 7];
    }
  }

  public buildChord(root: ChordNote, quality: ChordQuality | string, ctx?: VoicingContext): ChordNote[] {
    const intervals = this.getStandardIntervals(quality);
    const transpose = (n: ChordNote, semitones: number): ChordNote => {
      if (typeof n !== 'number' && typeof n.transpose === 'function') return n.transpose(semitones);
      if (typeof n === 'number') return n + semitones;
      if (n && typeof n.midiValue === 'number') return { ...n, midiValue: n.midiValue + semitones, pitch: (n.pitch ?? n.midiValue) + semitones };
      return semitones;
    };

    let rawNotes = intervals.map(interval => transpose(root, interval));
    const voicingStyle = ctx?.genre?.culturalHarmony?.voicingRule || 'standard';

    switch (voicingStyle) {
      case 'drop_2':
        if (rawNotes.length >= 4) {
          rawNotes[rawNotes.length - 2] = transpose(rawNotes[rawNotes.length - 2], -12);
        }
        break;
      case 'open_spread':
        if (rawNotes.length >= 3) {
          rawNotes[1] = transpose(rawNotes[1], 12);
          if (rawNotes[3]) rawNotes[3] = transpose(rawNotes[3], 12);
        }
        break;
      case 'jazz_extended':
        if (quality === 'minor7') {
          rawNotes.push(transpose(root, 14));
        } else if (quality === 'major7') {
          rawNotes.push(transpose(root, 14));
          rawNotes[1] = transpose(rawNotes[1], -12);
        } else if (quality === 'dominant7') {
          rawNotes.push(transpose(root, 13));
        }
        break;
      case 'cluster':
        break;
    }

    return rawNotes.sort((a, b) => {
      const vA = typeof a === 'number' ? a : a.midiValue;
      const vB = typeof b === 'number' ? b : b.midiValue;
      return vA - vB;
    });
  }
}
