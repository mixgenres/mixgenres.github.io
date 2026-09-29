import { INSTRUMENTS_BY_ID, type InstrumentDef } from '../../engine/lookup/instruments';
import type { InstrumentKitComponent } from '../../data/instruments/schema/instrument-def';
import { resolveStyle } from '../../engine/style';

export type PitchApproach = 'tonal' | 'diatonic' | 'chordal' | 'chromatic' | 'mixed' | 'modal' | 'raga';
export type RhythmicIntent =
  | 'low' | 'backbeat' | 'offbeat' | 'ghost' | 'accent' | 'roll'
  | 'open' | 'rim' | 'bell' | 'slap' | 'pluck' | 'sustain' | 'mute' | 'scrape';

function defFor(instrumentId: string): InstrumentDef | undefined {
  return INSTRUMENTS_BY_ID[instrumentId];
}



function componentMatch(component: InstrumentKitComponent, intent: RhythmicIntent): number {
  const text = `${component.id} ${component.name}`.toLowerCase();
  const zone = new Set(component.strikeZones ?? []).values();
  void zone;
  const rules: Record<RhythmicIntent, RegExp[]> = {
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
  const pattern = rules[intent].find(p => p.test(text));
  if (pattern) return 3;
  const zoneNames = component.strikeZones ?? [];
  if (intent === 'rim' && zoneNames.includes('rim')) return 2;
  if (intent === 'bell' && zoneNames.includes('bell')) return 2;
  if (intent === 'open' && zoneNames.includes('open')) return 2;
  if (intent === 'slap' && zoneNames.includes('slap')) return 2;
  if (intent === 'low' && zoneNames.includes('bass')) return 2;
  return 0;
}

function preferredComponentIds(instrumentId: string, intent: RhythmicIntent): string[] {
  const id = instrumentId.toLowerCase();
  if (id.includes('conga')) {
    return ({
      low: ['tumba-open', 'conga-open'],
      backbeat: ['conga-open', 'tumba-open'],
      offbeat: ['conga-toe', 'conga-open'],
      ghost: ['conga-heel', 'conga-slap-tapao', 'conga-toe'],
      accent: ['quinto-slap', 'conga-open'],
      roll: ['quinto-slap', 'conga-toe'],
      open: ['conga-open', 'tumba-open'],
      rim: ['conga-slap-tapao', 'quinto-slap'],
      bell: ['conga-open'],
      slap: ['quinto-slap', 'conga-slap-tapao'],
      pluck: ['conga-toe'],
      sustain: ['tumba-open'],
      mute: ['conga-slap-tapao', 'conga-heel'],
      scrape: ['conga-toe', 'conga-heel'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  if (id.includes('bongo')) {
    return ({
      low: ['hembra-open'], backbeat: ['hembra-open'], offbeat: ['macho-finger-tap', 'macho-thumb'],
      ghost: ['macho-finger-tap', 'macho-thumb'], accent: ['macho-slap'], roll: ['macho-finger-tap'],
      open: ['hembra-open'], rim: ['macho-slap'], bell: ['macho-thumb'], slap: ['macho-slap'],
      pluck: ['macho-finger-tap'], sustain: ['hembra-open'], mute: ['macho-thumb'], scrape: ['macho-finger-tap'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  if (id.includes('timbale')) {
    return ({
      low: ['hembra-open', 'macho-open'], backbeat: ['macho-open', 'hembra-open'], offbeat: ['cascara'],
      ghost: ['cascara'], accent: ['macho-open', 'hembra-open'], roll: ['cascara'], open: ['macho-open', 'hembra-open'],
      rim: ['cascara'], bell: ['mambo-bell-mouth', 'cha-cha-bell'], slap: ['macho-open'], pluck: ['cascara'],
      sustain: ['macho-open'], mute: ['cascara'], scrape: ['cascara'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  if (id.includes('tabla')) {
    return ({
      low: ['bayan-ghe', 'bayan-meend'], backbeat: ['dayan-na'], offbeat: ['dayan-ti-ke'], ghost: ['dayan-ti-ke'],
      accent: ['dayan-na', 'dayan-tun'], roll: ['dayan-ti-ke', 'dayan-na'], open: ['dayan-tun'], rim: ['dayan-na'],
      bell: ['dayan-na'], slap: ['dayan-ti-ke'], pluck: ['dayan-ti-ke'], sustain: ['dayan-tun'],
      mute: ['dayan-ti-ke'], scrape: ['dayan-na'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  if (id.includes('bata')) {
    return ({
      low: ['iya-enu', 'itotele-enu'], backbeat: ['itotele-enu', 'okonkolo-chacha'], offbeat: ['okonkolo-chacha', 'iya-chacha'],
      ghost: ['okonkolo-chacha', 'iya-chacha'], accent: ['iya-chacha', 'itotele-enu'], roll: ['okonkolo-chacha'],
      open: ['iya-enu', 'itotele-enu'], rim: ['iya-chacha'], bell: ['iya-chacha'], slap: ['iya-chacha'],
      pluck: ['okonkolo-chacha'], sustain: ['iya-enu'], mute: ['iya-chacha'], scrape: ['iya-chacha'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  if (id.includes('cajon')) {
    return ({
      low: ['cajon-bass'], backbeat: ['cajon-slap'], offbeat: ['cajon-tip'], ghost: ['cajon-tip', 'cajon-side'],
      accent: ['cajon-slap'], roll: ['cajon-tip', 'cajon-slap'], open: ['cajon-bass'], rim: ['cajon-side'],
      bell: ['cajon-side'], slap: ['cajon-slap'], pluck: ['cajon-tip'], sustain: ['cajon-bass'],
      mute: ['cajon-side'], scrape: ['cajon-side'],
    } as Record<RhythmicIntent, string[]>)[intent];
  }
  return [];
}

function choosePreferredComponent(components: InstrumentKitComponent[], preferredIds: string[], seed = 0): InstrumentKitComponent | undefined {
  const preferred = preferredIds
    .map(id => components.find(c => c.id.toLowerCase() === id.toLowerCase()))
    .filter((c): c is InstrumentKitComponent => Boolean(c));
  if (!preferred.length) return undefined;
  if (preferred.length === 1) return preferred[0];
  const phase = Math.abs(Math.sin(seed * 78.233 + 11.135) * 43758.5453) % 1;
  if (phase < 0.72) return preferred[0];
  return preferred[1 + Math.floor(((phase - 0.72) / 0.28) * (preferred.length - 1))] ?? preferred[preferred.length - 1];
}

export function findKitComponent(instrumentId: string, intent: RhythmicIntent, preferredId?: string, seed = 0): InstrumentKitComponent | undefined {
  const components = defFor(instrumentId)?.kitComponents ?? [];
  if (!components.length) return undefined;
  if (preferredId) {
    const normalized = preferredId.trim().toLowerCase();
    const exact = components.find(c => c.id.toLowerCase() === normalized);
    if (exact) return exact;
  }
  const preferred = preferredComponentIds(instrumentId, intent);
  const chosenPreferred = choosePreferredComponent(components, preferred, seed);
  if (chosenPreferred) return chosenPreferred;
  let best: InstrumentKitComponent | undefined;
  let bestScore = -1;
  for (const component of components) {
    const score = componentMatch(component, intent);
    if (score > bestScore) {
      best = component;
      bestScore = score;
    }
  }
  return bestScore > 0 ? best : undefined;
}

export function pitchApproachFor(options: {
  instrumentId: string;
  role?: string;
  styleId?: string;
  genreId?: string;
}): PitchApproach {
  const role = options.role ?? '';
  const text = `${options.styleId ?? ''} ${options.genreId ?? ''}`.toLowerCase();
  let pitchModel = '';
  let harmonyModel = '';
  let bassModel = '';
  try {
    const resolved = resolveStyle({ styleId: options.styleId ?? '' });
    pitchModel = resolved.contract.pitchModel.toLowerCase();
    harmonyModel = resolved.contract.harmonyModel.toLowerCase();
    bassModel = resolved.contract.bass.style.toLowerCase();
  } catch {}

  if (/raga|hindustani|carnatic|indian/.test(text) || /raga|indian/.test(pitchModel)) return 'raga';
  if (/maqam|arabic|middle-east|rast|bayati|segah/.test(text) || /maqam|arabic/.test(pitchModel)) return 'modal';
  if (/modal-drone|heterophonic/.test(harmonyModel) && role !== 'bass' && role !== 'comp' && role !== 'harmony') return 'modal';
  if (role === 'bass' && /root|root-fifth|drone/.test(bassModel)) return 'tonal';
  if (role === 'bass' && /walking|tumbao|riff|syncopated|dembow|sub/.test(bassModel)) return 'mixed';
  if (/tonal/.test(pitchModel) && (role === 'lead' || role === 'melody')) return 'tonal';
  if (/flamenco/.test(text)) return role === 'bass' || role === 'comp' || role === 'harmony' ? 'chordal' : 'modal';
  if (/bebop|hard-bop|post-bop|jazz|swing|blues/.test(text) || /blue-note|chromatic/.test(pitchModel)) return role === 'bass' ? 'mixed' : 'chromatic';
  if (/tango/.test(text)) return 'mixed';
  if (/celtic|irish|scottish|folk|traditional/.test(text)) return 'modal';
  if (/salsa|son|timba|mambo|bachata|cumbia|reggaeton|samba|afrobeat|highlife|african/.test(text)) return role === 'bass' ? 'chordal' : 'mixed';
  if (/funk|soul|gospel|rnb|rock|pop|indie|metal/.test(text)) return role === 'bass' ? 'mixed' : (role === 'lead' || role === 'melody' ? 'mixed' : 'chordal');
  if (/house|techno|electronic|edm|club|uk-bass|garage|dubstep/.test(text)) return role === 'lead' || role === 'melody' ? 'mixed' : (role === 'bass' ? 'tonal' : 'chordal');
  if (/modal|pentatonic|minor|dorian|mixolydian/.test(pitchModel)) return 'modal';
  if (role === 'lead' || role === 'melody') return 'diatonic';
  return 'chordal';
}

export function connectorPitchMode(approach: PitchApproach, strongBeat: boolean): 'target' | 'diatonic' | 'chromatic' {
  if (strongBeat) return 'target';
  if (approach === 'chromatic') return 'chromatic';
  return 'diatonic';
}
