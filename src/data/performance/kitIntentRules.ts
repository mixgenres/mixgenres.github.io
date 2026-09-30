import type { RhythmicIntent } from './schema/rhythmic-intent';

export const KIT_COMPONENT_MATCH_PATTERNS: Record<RhythmicIntent, RegExp[]> = {
  low: [/low|bass|tumba|bayan-ghe|dayan-na|hembra-open|macho-open/],
  backbeat: [/mid|open|head|macho-open|hembra-open/],
  offbeat: [/tap|finger|toe|rim|edge|tip/],
  ghost: [/heel|toe|tap|finger|mute|closed|edge/],
  accent: [/slap|high|open|bell|rim|accent/],
  roll: [/roll|buzz|trem|shake/],
  open: [/open|natural|ordinario/],
  rim: [/rim|edge|cascara|shell/],
  bell: [/bell|campana|agogo/],
  slap: [/slap|tapao|quinto|macho-slap|center-slap/],
  pluck: [/pluck|finger|snap/],
  sustain: [/open|ring|sustain/],
  mute: [/closed|mute|heel|damp/],
  scrape: [/scrape|cascara|shell|edge/],
};

export const PREFERRED_KIT_COMPONENTS: Record<string, Record<RhythmicIntent, string[]>> = {
  drums: {
    low: ['kick'], backbeat: ['snare-center'], offbeat: ['hihat-closed'],
    ghost: ['snare-ghost'], accent: ['crash-1', 'snare-rimshot'],
    roll: ['snare-center', 'snare-ghost'], open: ['hihat-open'], rim: ['snare-cross-stick'],
    bell: ['ride-bell'], slap: ['snare-rimshot'], pluck: ['hihat-closed'],
    sustain: ['ride-bow'], mute: ['hihat-pedal'], scrape: ['hihat-closed'],
  },
  conga: {
    low: ['tumba-open', 'conga-open'], backbeat: ['conga-open', 'tumba-open'],
    offbeat: ['conga-toe', 'conga-open'], ghost: ['conga-heel', 'conga-slap-tapao', 'conga-toe'],
    accent: ['quinto-slap', 'conga-open'], roll: ['quinto-slap', 'conga-toe'],
    open: ['conga-open', 'tumba-open'], rim: ['conga-slap-tapao', 'quinto-slap'], bell: ['conga-open'],
    slap: ['quinto-slap', 'conga-slap-tapao'], pluck: ['conga-toe'], sustain: ['tumba-open'],
    mute: ['conga-slap-tapao', 'conga-heel'], scrape: ['conga-toe', 'conga-heel'],
  },
  bongo: {
    low: ['hembra-open'], backbeat: ['hembra-open'], offbeat: ['macho-finger-tap', 'macho-thumb'],
    ghost: ['macho-finger-tap', 'macho-thumb'], accent: ['macho-slap'], roll: ['macho-finger-tap'],
    open: ['hembra-open'], rim: ['macho-slap'], bell: ['macho-thumb'], slap: ['macho-slap'],
    pluck: ['macho-finger-tap'], sustain: ['hembra-open'], mute: ['macho-thumb'], scrape: ['macho-finger-tap'],
  },
  timbale: {
    low: ['hembra-open', 'macho-open'], backbeat: ['macho-open', 'hembra-open'], offbeat: ['cascara'],
    ghost: ['cascara'], accent: ['macho-open', 'hembra-open'], roll: ['cascara'], open: ['macho-open', 'hembra-open'],
    rim: ['cascara'], bell: ['mambo-bell-mouth', 'cha-cha-bell'], slap: ['macho-open'], pluck: ['cascara'],
    sustain: ['macho-open'], mute: ['cascara'], scrape: ['cascara'],
  },
  tabla: {
    low: ['bayan-ghe', 'bayan-meend'], backbeat: ['dayan-na'], offbeat: ['dayan-ti-ke'], ghost: ['dayan-ti-ke'],
    accent: ['dayan-na', 'dayan-tun'], roll: ['dayan-ti-ke', 'dayan-na'], open: ['dayan-tun'], rim: ['dayan-na'],
    bell: ['dayan-na'], slap: ['dayan-ti-ke'], pluck: ['dayan-ti-ke'], sustain: ['dayan-tun'],
    mute: ['dayan-ti-ke'], scrape: ['dayan-na'],
  },
  bata: {
    low: ['iya-enu', 'itotele-enu'], backbeat: ['itotele-enu', 'okonkolo-chacha'], offbeat: ['okonkolo-chacha', 'iya-chacha'],
    ghost: ['okonkolo-chacha', 'iya-chacha'], accent: ['iya-chacha', 'itotele-enu'], roll: ['okonkolo-chacha'],
    open: ['iya-enu', 'itotele-enu'], rim: ['iya-chacha'], bell: ['iya-chacha'], slap: ['iya-chacha'],
    pluck: ['okonkolo-chacha'], sustain: ['iya-enu'], mute: ['iya-chacha'], scrape: ['iya-chacha'],
  },
  cajon: {
    low: ['cajon-bass'], backbeat: ['cajon-slap'], offbeat: ['cajon-tip'], ghost: ['cajon-tip', 'cajon-side'],
    accent: ['cajon-slap'], roll: ['cajon-tip', 'cajon-slap'], open: ['cajon-bass'], rim: ['cajon-side'],
    bell: ['cajon-side'], slap: ['cajon-slap'], pluck: ['cajon-tip'], sustain: ['cajon-bass'],
    mute: ['cajon-side'], scrape: ['cajon-side'],
  },
};
export const STANDARD_DRUM_KIT_IDS = ['drums', 'drum-kit', 'acoustic-drums'];
export const KIT_INSTRUMENT_ID_MATCHERS = [
  { idFragment: 'conga', key: 'conga' },
  { idFragment: 'bongo', key: 'bongo' },
  { idFragment: 'timbale', key: 'timbale' },
  { idFragment: 'tabla', key: 'tabla' },
  { idFragment: 'bata', key: 'bata' },
  { idFragment: 'cajon', key: 'cajon' },
];
