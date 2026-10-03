import { GENRE_WORLDS } from '../genres';

export interface SongTemplate {
  id: string;
  name: string;
  genreId: string;
  bpm: number;
  key: string;
  scale: string;
  instruments: string[];
  styleId: string;
}

/** Every public style has a starter using its authored personnel and pitch language.
 * makeSheet supplies the full arrangement, cadence variants and solo assignments.
 */
export const starterSongs: SongTemplate[] = GENRE_WORLDS.flatMap(world =>
  world.styleDefinitions.map(style => ({
    id: `${style.id}_starter`, name: `${style.name} Study`, genreId: world.id, styleId: style.id,
    bpm: Math.round((style.tempoRange[0] + style.tempoRange[1]) / 2),
    key: Object.values(style.sectionProgressions ?? {})[0]?.[0]?.match(/^[A-G][b#]?/)?.[0] ?? 'D',
    scale: style.scaleMode!, instruments: [...style.characteristicInstruments],
  })));
