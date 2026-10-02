/** Ordered text classifiers used by engine algorithms to resolve instrument families. */
export const ELECTRIC_INSTRUMENT_PATTERN = /electric|distortion|synth|acid|clavinet|sub-bass|rhodes|fm-ep/;
export const ELECTRONIC_GAIN_INSTRUMENT_PATTERN = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/;
export const SUB_BUS_INSTRUMENT_PATTERN = /sub-bass|808|909|log-drum|subwoofer/i;
export const BASS_INSTRUMENT_PATTERN = /bass|tuba|guitarron|bassoon/i;
export const DRUM_BUS_INSTRUMENT_PATTERN = /drum|kick|snare|hats|cajon|conga|bongo|timbal|pandeiro|shaker|guiro|cabasa|maracas|surdo|bodhran|taiko|paigu|tam-tam|percussion|perc/i;
export const FAMILY_NOISE_SCALE_RULES = [
  { pattern: /hand-drums|kit|metal-and-wood/, scale: 0.62 },
  { pattern: /bowed|strings/, scale: 0.30 },
  { pattern: /plucked/, scale: 0.34 },
  { pattern: /winds|brass/, scale: 0.28 },
  { pattern: /bellows/, scale: 0.26 },
  { pattern: /key/, scale: 0.24 },
] as const;
export const GENRE_TREATMENT_INSTRUMENT_CLASSIFIERS = {
  bassFamily: /bass/,
  bassInstrument: /bass|tuba|bassoon|guitarron|sub/,
  drumFamily: /drum|percussion|membrane|hand-drum/,
  drumInstrument: /kick|snare|clap|tom|conga|bongo|timbale|cowbell|shaker|tambourine|guiro/,
  pluckedFamily: /pluck|guitar|string/,
  pluckedInstrument: /guitar|oud|banjo|mandolin|koto|sitar|charango|tres|cuatro|cavaquinho|harp|kora|pipa|guzheng|shamisen|requinto/,
  keysFamily: /key/,
  keysInstrument: /piano|rhodes|organ|clavinet|harpsichord/,
  bowedFamily: /bowed|string/,
  bowedInstrument: /violin|viola|cello|fiddle|string/,
  windFamily: /wind|brass|reed/,
  windInstrument: /sax|trumpet|trombone|horn|flute|clarinet|oboe|bassoon|tuba|whistle/,
} as const;
export const ELECTRONIC_STUDIO_INSTRUMENT_PATTERN = /electric|distortion|overdrive|synth|acid|clavinet|sub-bass|rhodes|fm-ep/;
export const BUS_CATEGORY_ROLE_IDS = { bass: 'bass', drums: ['drums', 'percussion'] } as const;
export const ELECTRONIC_PLAYBACK_INSTRUMENT_PATTERN = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/;
export const SCRAPER_INSTRUMENT_PATTERN = /guiro|guacharaca|dikanza|cabasa/;
export const METAL_SHELL_INSTRUMENT_PATTERN = /timbal|metal|steel|agogo|bell|snare-metal/;
export const WOOD_BOX_INSTRUMENT_PATTERN = /cajon|cajón|box|slit-drum/;
export const HORN_INSTRUMENT_PATTERN = /horn/;
export const BRASS_REED_INSTRUMENT_PATTERNS = {
  reed: /clarinet|oboe|bassoon|sax|hichiriki|english-horn/i,
  doubleReed: /oboe|bassoon|english-horn|hichiriki/i,
  fipple: /recorder|tin-whistle|low-whistle/i,
  endBlown: /quena|shakuhachi|xiao|dizi|ryuteki|pan-flute|ocarina/i,
} as const;
export const GUITAR_INSTRUMENT_PATTERNS = {
  acousticTango: /acoustic-guitar|guitar/,
  urbanAcoustic: /guitar|acoustic-guitar|spanish-guitar/,
  jawari: /sitar|shamisen|tambura/,
} as const;

export const DRUM_COMPONENT_PATTERNS = {
  cymbal: /crash|ride|splash|china/,
  rimshot: /rimshot/,
  muted: /ti-ke|mute|slap/,
  smallHead: /chacha/,
  open: /conga-open|tumba-open/,
  slap: /quinto-slap|slap-tapao/,
  mutedTouch: /heel|toe|tapao/,
  bell: /bell/,
} as const;
