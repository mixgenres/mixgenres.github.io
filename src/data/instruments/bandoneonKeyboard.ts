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
  const pc: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  // Source chart uses German Helmholtz notation: uppercase = octave 2,
  // lowercase = octave 3; each numeric suffix raises the octave by one.
  const octave = (m[1] === m[1].toUpperCase() ? 2 : 3) + Number(m[3] || 0);
  return (octave + 1) * 12 + pc[letter] + sharp;
};

// Zug/open is the upper half of each button in the source chart.
const RIGHT: Array<[string, string, string]> = [
  ['15', 'h3', 'a3'], ['16', 'gis3', 'gis3'], ['17', 'g3', 'fis3'], ['18', 'f3', 'f3'],
  ['4/4', 'cis1', 'c1'], ['0/0', 'a3', 'g3'], ['1/1', 'fis3', 'ais2'], ['2/2', 'e3', 'c3'], ['3/3', 'dis3', 'dis3'],
  ['*', 'c1', 'd1'], ['†', 'd1', 'cis1'], ['0/1', 'g1', 'gis1'], ['1/2', 'ais2', 'ais1'], ['2/3', 'c3', 'c2'], ['3/4', 'd3', 'd3'],
  ['6/0', 'h', 'h'], ['+', 'e1', 'fis1'], ['0', 'cis2', 'fis2'], ['1', 'fis1', 'g1'], ['2', 'a1', 'h1'], ['3', 'c2', 'd2'], ['4', 'e2', 'g2'],
  ['8/0', 'a', 'a'], ['4/0', 'f1', 'f1'], ['2/0', 'ais1', 'e1'], ['5', 'gis1', 'a1'], ['6', 'h1', 'cis2'], ['7', 'd2', 'e2'], ['8', 'gis2', 'a2'], ['9', 'h2', 'cis3'],
  ['7/0', 'ais', 'ais'], ['5/0', 'dis1', 'dis1'], ['3/0', 'f2', 'f2'], ['10', 'dis2', 'e2'], ['11', 'fis2', 'gis2'], ['12', 'a2', 'h2'], ['13', 'cis3', 'e3'], ['14', 'g2', 'dis2'],
];

const LEFT: Array<[string, string, string]> = [
  ['2/2', 'Gis', 'Gis'], ['3/3', 'Ais', 'Ais'], ['4/4', 'cis', 'dis'], ['†', 'f', 'dis1'], ['0/0', 'gis1', 'g1'],
  ['1/1', 'E', 'D'], ['1/2', 'A', 'd'], ['2/3', 'g', 'ais'], ['3/4', 'dis', 'c1'], ['4/0', 'f1', 'cis'], ['+', 'ais', 'c'], ['6/0', 'F', 'Fis'],
  ['1', 'd', 'G'], ['2', 'a', 'g'], ['3', 'c1', 'h'], ['4', 'e1', 'd1'], ['0', 'c', 'f1'], ['2/0', 'G', 'fis'],
  ['5', 'e', 'A'], ['6', 'gis', 'e'], ['7', 'h', 'a'], ['8', 'd1', 'cis1'], ['9', 'fis1', 'e1'], ['3/0', 'cis1', 'gis'], ['16', 'Fis', 'H'],
  ['5/0', 'D', 'E'], ['10', 'H', 'e'], ['11', 'g1', 'fis1'], ['12', 'a1', 'gis1'], ['13', 'dis1', 'h1'], ['14', 'fis', 'f'], ['15', 'Dis', 'Cis'], ['*', 'C', 'F'],
];

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
