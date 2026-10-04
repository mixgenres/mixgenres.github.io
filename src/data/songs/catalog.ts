import { GENRE_WORLDS } from '../genres';
import { STYLE_REFERENCES, styleReferenceKey } from '../styles/styleReferences';
import { REFERENCE_SELECTIONS } from './referenceSelections';
import { RECORDING_ARRANGEMENTS } from './recordingArrangements';

export interface SongTemplate {
  id: string;
  genreId: string;
  styleId: string;
  styleName: string;
  artist: string;
  track: string;
  name: string;
  referenceKey: string;
  /** Original credit and recording/version label, preserved without title extraction. */
  reference: { credit: string; recording: string };
  source?: string;
  selectedFromRepertoire: boolean;
  description: string;
}

export const songCatalog: SongTemplate[] = GENRE_WORLDS.flatMap(world => world.styleDefinitions.map(style => {
  const key = styleReferenceKey(world.id, style.name);
  const reference = STYLE_REFERENCES[key as keyof typeof STYLE_REFERENCES];
  const selection = REFERENCE_SELECTIONS[key];
  const artist = selection?.artist ?? reference.credit;
  const quoted = reference.recording.match(/“([^”]+)”/);
  const track = selection?.track ?? quoted?.[1] ?? reference.recording;
  if (!track || /repertoire|references|adjacent work/.test(track)) throw new Error(`Select a concrete recording for ${key}`);
  const arrangement = RECORDING_ARRANGEMENTS[key];
  if (!arrangement) throw new Error(`Missing full arrangement for ${key}`);
  return {
    id: `${style.id}_song`,
    genreId: world.id, styleId: style.id, styleName: style.name,
    artist, track, name: `${artist} — ${track}`, referenceKey: key,
    reference: { credit: reference.credit, recording: reference.recording },
    source: selection?.source ?? arrangement.source,
    selectedFromRepertoire: !!selection,
    description: arrangement.note,
  };
}));

export const SONGS_BY_ID = Object.fromEntries(songCatalog.map(song => [song.id, song]));
