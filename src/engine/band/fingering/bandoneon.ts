/**
 * Physical 142-tone Rheinische Tonlage map for the tango bandoneón.
 * 38 right-hand + 33 left-hand buttons; each button has a different pitch
 * on Zug (opening) and Druck (closing).
 *
 * The labels and pitch pairs are transcribed from the Bandonionfabrik
 * Rheinische 142 fingering chart; the runtime normalizes German H -> B.
 */
export type BandoneonSide = 'right' | 'left';
export type BandoneonDirection = 'open' | 'close';

export interface BandoneonButton {
  id: string;
  side: BandoneonSide;
  open: number;
  close: number;
}

const note = (name: string): number => {
  const m = /^([A-Ha-h])(is)?(\d*)$/.exec(name);
  if (!m) throw new Error(`Invalid bandoneón pitch ${name}`);
  const letter = m[1].toUpperCase() === 'H' ? 'B' : m[1].toUpperCase();
  const sharp = m[2] === 'is' ? 1 : 0;
  // Source chart uses German Helmholtz notation: uppercase = octave 2,
  // lowercase = octave 3; each numeric suffix raises the octave by one.
  const octave = (m[1] === m[1].toUpperCase() ? 2 : 3) + Number(m[3] || 0);
  return (octave + 1) * 12 + GERMAN_PITCH_CLASS[letter] + sharp;
};

// Zug/open is the upper half of each button in the source chart.
import { RIGHT, LEFT, GERMAN_PITCH_CLASS } from '../../../data/instruments/fingering/bandoneon';

function build(side: BandoneonSide, rows: Array<[string, string, string]>): BandoneonButton[] {
  return rows.map(([id, open, close]) => ({ id, side, open: note(open), close: note(close) }));
}

export const BANDONEON_142_BUTTONS: readonly BandoneonButton[] = Object.freeze([
  ...build('right', RIGHT),
  ...build('left', LEFT),
]);

export function bandoneonCandidates(midi: number, direction: BandoneonDirection): BandoneonButton[] {
  return BANDONEON_142_BUTTONS.filter(button => (direction === 'open' ? button.open : button.close) === midi);
}

export function bandoneonPlayable(midi: number): boolean {
  return bandoneonCandidates(midi, 'open').length > 0 || bandoneonCandidates(midi, 'close').length > 0;
}
