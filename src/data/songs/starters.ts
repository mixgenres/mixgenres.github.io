export interface SongTemplate {
  id: string;
  name: string;
  genreId?: string;
  bpm: number;
  key: string;
  scale: string;
  instruments: string[];
  styleId?: string;
}

export const starterSongs: SongTemplate[] = [
  { id: "tango_starter", name: "Noche de Buenos Aires", genreId: "tango", bpm: 126, key: "D", scale: "minor", instruments: ["bandoneon", "violin", "piano", "upright-bass", "cello", "voice", "strings"] },
  { id: "tango_pugliese_starter", name: "Yumba de Medianoche", genreId: "tango", styleId: "tango-pugliese", bpm: 124, key: "A", scale: "minor", instruments: ["bandoneon", "violin", "piano", "upright-bass", "cello", "strings", "voice"] },
  { id: "tango_troilo_starter", name: "Barrio de Aníbal", genreId: "tango", styleId: "tango-troilo", bpm: 122, key: "D", scale: "minor", instruments: ["bandoneon", "violin", "piano", "upright-bass", "cello", "voice", "strings"] },
  { id: "tango_cancion_starter", name: "Sur de la Noche", genreId: "tango", styleId: "tango-cancion", bpm: 98, key: "A", scale: "minor", instruments: ["voice", "bandoneon", "piano", "upright-bass", "violin", "cello", "strings"] },
  { id: "electrotango_starter", name: "Pulso de Neón", genreId: "tango", styleId: "tango-tango-electronico", bpm: 108, key: "D", scale: "minor", instruments: ["bandoneon", "sub-bass", "drums", "sampler", "synth", "electric-guitar", "piano"] },
  { id: "lofi_starter", name: "Midnight Coffee", genreId: "hip-hop", bpm: 78, key: "Eb", scale: "major", instruments: ["piano", "bass", "drums", "turntable", "rhodes", "synth"] },
  { id: "synthwave_starter", name: "Neon Overdrive", genreId: "electronic", bpm: 115, key: "F", scale: "minor", instruments: ["synth", "sub-bass", "drums", "sampler", "synth-strings", "piano"] },
  { id: "flamenco_starter", name: "Fuego en las Palmas", genreId: "flamenco", bpm: 160, key: "A", scale: "phrygian", instruments: ["guitar", "palmas", "cajon", "voice", "strings", "bass"] },
  { id: "funk_starter", name: "Mothership Groove", genreId: "funk", bpm: 105, key: "E", scale: "dorian", instruments: ["guitar", "trumpet", "bass", "drums", "organ", "tenor-sax"] },
  { id: "celtic_starter", name: "The Rolling Wave", genreId: "folk", bpm: 115, key: "D", scale: "mixolydian", instruments: ["fiddle", "flute", "guitar", "drums", "bass", "voice"] },
  { id: "chacarera_starter", name: "Patio Santiagueño", genreId: "folk", styleId: "folk-chacarera", bpm: 120, key: "A", scale: "minor", instruments: ["voice", "guitar", "bombo-leguero", "violin", "bass", "accordion"] },
  { id: "country_starter", name: "Whiskey and Dust", genreId: "country", bpm: 110, key: "G", scale: "major", instruments: ["guitar", "slide-guitar", "bass", "drums", "fiddle", "voice"] },
  { id: "kpop_starter", name: "Neon Lights", genreId: "kpop", bpm: 124, key: "Db", scale: "minor", instruments: ["voice", "backing-vocals", "synth", "sub-bass", "drums", "piano", "electric-guitar", "sampler"] },
  { id: "chinese_traditional_starter", name: "Jiangnan Spring", genreId: "chinese-traditional", bpm: 88, key: "D", scale: "pentatonic", instruments: ["dizi", "erhu", "pipa", "guzheng", "guqin", "jinghu", "paigu"] },
  { id: "japanese_pop_starter", name: "Paper Lanterns", genreId: "japanese-pop", bpm: 122, key: "D", scale: "major", instruments: ["voice", "piano", "synth", "electric-guitar", "bass", "drums", "strings", "sampler"] },
  { id: "japanese_rock_starter", name: "After the Rain", genreId: "japanese-rock", bpm: 148, key: "E", scale: "minor", instruments: ["voice", "electric-guitar", "bass", "drums", "piano", "synth", "strings"] },
  { id: "jazz_starter", name: "Midnight at the Vanguard", genreId: "jazz", bpm: 145, key: "Bb", scale: "major", instruments: ["piano", "upright-bass", "brush-kit", "tenor-sax", "trumpet", "jazz-guitar"] },
  { id: "reggae_starter", name: "Kingston Echoes", genreId: "reggae", bpm: 75, key: "C", scale: "minor", instruments: ["organ", "guitar", "bass", "drums", "voice", "shaker"] },
  { id: "house_starter", name: "Warehouse 4AM", genreId: "house", bpm: 122, key: "G", scale: "minor", instruments: ["piano", "sub-bass", "drums", "synth", "sampler", "shaker"] },
  { id: "metal_starter", name: "Absolute Zero", genreId: "metal", bpm: 135, key: "E", scale: "phrygian", instruments: ["distortion-guitar", "bass", "drums", "electric-guitar", "strings", "voice"] },
  { id: "afrobeat_starter", name: "Lagos Groove", genreId: "afrobeats", bpm: 115, key: "F", scale: "dorian", instruments: ["guitar", "trumpet", "bass", "drums", "shaker", "voice", "piano"] },
  { id: "neosoul_starter", name: "Brown Sugar Pocket", genreId: "r-and-b", bpm: 72, key: "Eb", scale: "minor", instruments: ["rhodes", "bass", "drums", "voice", "guitar", "tenor-sax"] },
  { id: "cyberpunk_starter", name: "Night City Override", genreId: "industrial", bpm: 100, key: "F", scale: "phrygian", instruments: ["sub-bass", "drums", "synth", "sampler", "strings", "electric-guitar"] },
  { id: "bossa_starter", name: "Corcovado Breeze", genreId: "brazilian", bpm: 135, key: "C", scale: "major", instruments: ["guitar", "upright-bass", "drums", "flute", "voice", "piano"] }
];
