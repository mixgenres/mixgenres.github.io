export interface SongTemplate {
  id: string;
  name: string;
  /** Genre world id (must match a `GENRE_WORLDS_BY_ID` key). */
  genreId?: string;
  /** Style id within the world (must match a style `id`). Patterns owned by this style supply the arrangement. */
  styleId?: string;
  bpm: number;
  key: string;
  scale: string;
  /** Instrument ids that exist in the instrument catalog / playback registry. */
  instruments: string[];
}

export const starterSongs: SongTemplate[] = [
  { id: "tango_starter", name: "Noche de Buenos Aires", genreId: "tango", styleId: "tango-tango-nuevo", bpm: 118, key: "D", scale: "minor", instruments: ["bandoneon", "violin", "piano", "bass"] },
  { id: "lofi_starter", name: "Midnight Coffee", genreId: "hip-hop", styleId: "hip-hop-lo-fi", bpm: 78, key: "Eb", scale: "major", instruments: ["piano", "bass", "drums", "sampler"] },
  { id: "synthwave_starter", name: "Neon Overdrive", genreId: "electronic", styleId: "electronic-synthwave", bpm: 115, key: "F", scale: "minor", instruments: ["saw-lead", "polysynth", "bass", "drums"] },
  { id: "flamenco_starter", name: "Fuego en las Palmas", genreId: "flamenco", styleId: "flamenco-alegrias-style", bpm: 160, key: "A", scale: "phrygian", instruments: ["spanish-guitar", "palmas", "cajon"] },
  { id: "funk_starter", name: "Mothership Groove", genreId: "funk", styleId: "funk-p-funk", bpm: 105, key: "E", scale: "dorian", instruments: ["electric-guitar", "brass", "bass", "drums"] },
  // No dedicated Celtic style exists; folk-old-time is the closest fiddle/guitar reel style.
  { id: "celtic_starter", name: "The Rolling Wave", genreId: "folk", styleId: "folk-old-time", bpm: 115, key: "D", scale: "mixolydian", instruments: ["fiddle", "flute", "acoustic-guitar", "drums"] },
  { id: "country_starter", name: "Whiskey and Dust", genreId: "country", styleId: "country-neotraditional", bpm: 110, key: "G", scale: "major", instruments: ["acoustic-guitar", "steel-guitar", "bass", "drums"] },
  // No K-pop world exists; electronic-garage (130–138 BPM synth/bass/drums) is the closest dance-pop fit.
  { id: "kpop_starter", name: "Neon Lights Drop", genreId: "electronic", styleId: "electronic-garage", bpm: 130, key: "Db", scale: "minor", instruments: ["synth", "polysynth", "bass", "drums"] },
  { id: "jazz_starter", name: "Midnight at the Vanguard", genreId: "jazz", styleId: "jazz-hard-bop", bpm: 145, key: "Bb", scale: "major", instruments: ["piano", "upright-bass", "drums", "trumpet"] },
  { id: "reggae_starter", name: "Kingston Echoes", genreId: "reggae-dub", styleId: "reggae-dub-roots-reggae", bpm: 75, key: "C", scale: "minor", instruments: ["organ", "electric-guitar", "bass", "drums"] },
  { id: "house_starter", name: "Warehouse 4AM", genreId: "house-techno", styleId: "house-techno-melodic-techno", bpm: 122, key: "G", scale: "minor", instruments: ["piano", "bass", "drums"] },
  { id: "metal_starter", name: "Absolute Zero", genreId: "metal", styleId: "metal-heavy-metal", bpm: 135, key: "E", scale: "phrygian", instruments: ["electric-guitar", "bass", "drums"] },
  { id: "afrobeat_starter", name: "Lagos Groove", genreId: "afrobeats", styleId: "afrobeats-afrobeat", bpm: 115, key: "F", scale: "dorian", instruments: ["electric-guitar", "brass", "bass", "drums"] },
  // No soul / neo-soul world exists; lovers rock (72–86 BPM, piano + guitar + bass + drums) is the closest slow-groove fit.
  { id: "neosoul_starter", name: "Brown Sugar Pocket", genreId: "reggae-dub", styleId: "reggae-dub-lovers-rock", bpm: 72, key: "Eb", scale: "minor", instruments: ["piano", "electric-guitar", "bass", "drums"] },
  // No cyberpunk world exists; electronic-synthwave shares its tempo range and synth palette.
  { id: "cyberpunk_starter", name: "Night City Override", genreId: "electronic", styleId: "electronic-synthwave", bpm: 100, key: "F", scale: "phrygian", instruments: ["bass", "drums", "polysynth", "warm-pad"] },
  { id: "bossa_starter", name: "Corcovado Breeze", genreId: "samba-bossa", styleId: "samba-bossa-bossa-nova", bpm: 135, key: "C", scale: "major", instruments: ["acoustic-guitar", "upright-bass", "drums", "flute"] }
];
