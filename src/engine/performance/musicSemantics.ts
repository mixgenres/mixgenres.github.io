import { INSTRUMENTS_BY_ID, type InstrumentDef, type InstrumentFamily } from '../../data/instruments';
import type { InstrumentKitComponent } from '../../data/instruments/types';
import { resolveStyle } from '../../data/styles';
import {
  resolveArticulation,
  resolveArticulationStack,
  resolveCrossInstrumentArticulation,
  type ArticulationSpec,
} from '../theory/articulation';

export type PitchApproach = 'tonal' | 'diatonic' | 'chordal' | 'chromatic' | 'mixed' | 'modal' | 'raga';

export type RhythmicIntent =
  | 'low' | 'backbeat' | 'offbeat' | 'ghost' | 'accent' | 'roll'
  | 'open' | 'rim' | 'bell' | 'slap' | 'pluck' | 'sustain' | 'mute' | 'scrape';

export interface RhythmTranslationInput {
  instrumentId: string;
  sourceHitType?: string;
  sourceArticulation?: string;
  accent?: number;
  beatInBar?: number;
  beatsPerBar?: number;
  styleId?: string;
  genreId?: string;
  seed?: number;
}

export interface RhythmTranslation {
  hitType?: string;
  articulation?: string;
  intent: RhythmicIntent;
  component?: InstrumentKitComponent;
}

const FAMILY_ALIASES: Record<string, InstrumentFamily[]> = {
  plucked: ['plucked', 'plucked-string'],
  bowed: ['bowed'],
  winds: ['winds'],
  brass: ['brass'],
  handDrums: ['hand-drums'],
  percussion: ['hand-drums', 'metal-and-wood', 'body-percussion', 'kit'],
  metal: ['metal-and-wood', 'body-percussion'],
  keys: ['bellows-and-keys'],
  electronic: ['electronic'],
};

function defFor(instrumentId: string): InstrumentDef | undefined {
  return INSTRUMENTS_BY_ID[instrumentId];
}

function familyMatches(def: InstrumentDef | undefined, families?: string[]): boolean {
  if (!def || !families?.length) return true;
  const expanded = new Set<string>();
  for (const family of families) {
    const canonical = family.toLowerCase();
    expanded.add(canonical);
    for (const f of FAMILY_ALIASES[canonical] ?? []) expanded.add(f);
  }
  return expanded.has(def.family) || (def.family === 'free-reed' && expanded.has('winds'));
}

const CAPABILITY_ALIASES: Record<string, string[]> = {
  bass: ['low-tone'],
  tip: ['tip', 'toe'],
  'side-tap': ['side-tap', 'golpe'],
  brush: ['brushed'],
  'picked-down': ['pick'],
  'picked-up': ['pick'],
  chug: ['palm-mute'],
  'fretless-slide': ['portamento', 'slide'],
  'soft-finger': ['fingerstyle'],
  'slap-bass': ['slap'],
  'rest-stroke': ['apoyando'],
  pluck: ['fingerstyle', 'pluck'],
  'mwah-growl': ['mwah-growl'],
  ponticello: ['ponticello'],
  tasto: ['tasto'],
  swell: ['crescendo'],
  scratch: ['scratch'],
};

function capabilityCandidates(def: InstrumentDef | undefined, requested: string): string[] {
  const caps = def?.luthierPhysics?.articulationCapabilities ?? [];
  const normalized = requested.toLowerCase();
  if (!caps.some(c => c.toLowerCase() === normalized)) return [];
  return CAPABILITY_ALIASES[normalized] ?? [requested];
}

function semanticFamily(instrumentId: string): string {
  const def = defFor(instrumentId);
  if (!def) return 'piano';
  if (def.acousticProfile?.role === 'effect') return 'effect';
  if (def.family === 'hand-drums') return 'hand-drums';
  if (def.family === 'body-percussion') {
    if (instrumentId.toLowerCase() === 'palmas') return 'palmas';
    if (instrumentId.toLowerCase() === 'zapateado') return 'zapateado';
    return 'percussion';
  }
  if (def.family === 'metal-and-wood' || def.family === 'kit') {
    const tuned = def.voicing !== 'unpitched' && /lead|melody|comp|harmony|pad/i.test(def.acousticProfile?.role ?? '');
    return tuned ? 'tuned-percussion' : 'percussion';
  }
  if (def.family === 'winds') return 'winds';
  if (def.family === 'brass') return 'brass';
  if (def.family === 'plucked' || def.family === 'plucked-string') {
    if (/bass|guitarron/i.test(instrumentId)) return 'bass';
    return 'guitar';
  }
  if (def.family === 'bowed') return 'strings';
  if (def.family === 'electronic') return 'synth';
  if (def.family === 'voice') return 'voice';
  if (def.family === 'free-reed' || (def.family === 'bellows-and-keys' && /accordion|bandoneon|concertina|melodeon|harmonium|free-reed/i.test(instrumentId))) return 'free-reed';
  if (def.family === 'bellows-and-keys') return 'piano';
  return def.family;
}

/**
 * Resolve a requested technique against the actual instrument vocabulary.
 * The instrument's authored technique list has priority; a cross-family fusion
 * is only used when the requested technique is not natively supported.
 */
export function resolveInstrumentArticulation(
  instrumentId: string,
  requested: string | undefined,
): ArticulationSpec | undefined {
  if (!requested) return undefined;
  const def = defFor(instrumentId);
  const requestedSpec = resolveArticulation(requested);
  const authored = def?.techniques?.articulations ?? [];
  const authoredSpecs = resolveArticulationStack(authored);
  const authoredIds = new Set(authoredSpecs.map(s => s.id));

  // Physical-model capabilities are also part of the instrument contract.
  // Resolve them through a small canonical map so named capabilities cannot
  // silently evaporate just because the human-readable technique list omitted
  // the same term.
  const capabilityMatches = capabilityCandidates(def, requested);
  if (capabilityMatches.length) {
    for (const candidate of capabilityMatches) {
      const capabilitySpec = resolveArticulation(candidate);
      if (capabilitySpec && (familyMatches(def, capabilitySpec.instrumentFamilies) || candidate === requested)) {
        return capabilitySpec;
      }
    }
  }

  if (!requestedSpec) return undefined;

  // An explicitly authored technique is authoritative, even when a generic
  // spec carries a broad family tag.
  if (authored.some(a => a.toLowerCase() === requested.toLowerCase()) || authoredIds.has(requestedSpec.id)) {
    return requestedSpec;
  }

  if (familyMatches(def, requestedSpec.instrumentFamilies)) {
    return requestedSpec;
  }

  const familyKey = semanticFamily(instrumentId);
  const fusedName = resolveCrossInstrumentArticulation(requestedSpec.id, familyKey);
  const fusedSpec = resolveArticulation(fusedName);
  if (fusedSpec && (authoredIds.has(fusedSpec.id) || familyMatches(def, fusedSpec.instrumentFamilies))) {
    return fusedSpec;
  }

  return undefined;
}

/** Resolve a whole requested stack, dropping unsupported techniques instead of mis-rendering them. */
export function resolveSupportedArticulationStack(
  instrumentId: string,
  names: (string | undefined)[],
): ArticulationSpec[] {
  const out: ArticulationSpec[] = [];
  const seen = new Set<string>();
  for (const name of names) {
    if (!name) continue;
    const spec = resolveInstrumentArticulation(instrumentId, name);
    if (spec && !seen.has(spec.id)) {
      seen.add(spec.id);
      out.push(spec);
    }
  }
  return out;
}

function classifyIntent(sourceHitType?: string, sourceArticulation?: string, accent = 0.7, beatInBar = 0): RhythmicIntent {
  const text = `${sourceHitType ?? ''} ${sourceArticulation ?? ''}`.toLowerCase();
  if (/palmas[- ]?sordas|ghost|dead|muff|muted|mute|soft|heel/.test(text) || accent < 0.42) return 'ghost';
  if (/roll|trem|redoble|repique|riff|run|flam|drag|ruff/.test(text)) return 'roll';
  if (/bell|campana|cowbell|mambo-bell|ride-bell/.test(text)) return 'bell';
  if (/palmas[- ]?claras|palmas[- ]?fuertes/.test(text)) return 'accent';
  if (/rim|cascara|side-stick|side stick|rimshot|edge/.test(text)) return 'rim';
  if (/slap|pop|tapao|quinto-slap|macho-slap|snap|golpe/.test(text)) return 'slap';
  if (/martillo|thumb|finger|toe|tip/.test(text)) return 'offbeat';
  if (/open|abierto|ordinario|natural/.test(text)) return 'open';
  if (/pluck|pick|pizz|fingerstyle|tirando|apoyando|arpeggio|rasgue/.test(text)) return 'pluck';
  if (/sustain|legato|tenuto|hold|drone/.test(text)) return 'sustain';
  if (/scrape|brush|guacharaca|cascara|chicharra/.test(text)) return 'scrape';
  if (/caj[oó]n[- ]?(grave|bajo)|grave|kick|bass|low|tumba|surdo|heel/.test(text)) return 'low';
  if (/caj[oó]n[- ]?(agudo|alto)/.test(text)) return 'slap';
  if (/snare|backbeat|clap|rimshot/.test(text)) return 'backbeat';
  if (/hat|upstroke|offbeat|skank|bubble|sincopa/.test(text)) return 'offbeat';
  if (Math.abs(beatInBar - Math.round(beatInBar)) < 0.08 && accent >= 0.86) return 'accent';
  return accent >= 0.84 ? 'accent' : 'offbeat';
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

function supportedTechniqueIds(instrumentId: string): Set<string> {
  const def = defFor(instrumentId);
  return new Set(resolveArticulationStack(def?.techniques?.articulations ?? []).map(s => s.id));
}

function firstSupported(instrumentId: string, candidates: string[], seed = 0): string | undefined {
  const supported = supportedTechniqueIds(instrumentId);
  const available = candidates
    .map(candidate => resolveArticulation(candidate)?.id ?? candidate)
    .filter((canonical, index, list) => supported.has(canonical) && list.indexOf(canonical) === index);
  if (!available.length) return undefined;
  if (available.length === 1) return available[0];

  // Keep the first candidate as the strongest stylistic default, but allow the
  // same rhythmic job to rotate into another genuinely supported technique.
  // The caller supplies a stable per-note seed, so this is repeatable rather
  // than random and remains easy to reproduce/debug.
  const phase = Math.abs(Math.sin(seed * 12.9898 + 78.233) * 43758.5453) % 1;
  if (phase < 0.68) return available[0];
  const alt = 1 + Math.floor(((phase - 0.68) / 0.32) * (available.length - 1));
  return available[Math.min(available.length - 1, alt)];
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

/**
 * Translate the rhythmic job of one instrument into a target instrument's own
 * stroke vocabulary. This keeps the rhythm cell while changing the physical
 * action to something that instrument can actually play.
 */
export function translateRhythmToInstrument(input: RhythmTranslationInput): RhythmTranslation {
  const intent = classifyIntent(input.sourceHitType, input.sourceArticulation, input.accent ?? 0.7, input.beatInBar ?? 0);
  const def = defFor(input.instrumentId);
  const family = semanticFamily(input.instrumentId);
  const component = findKitComponent(input.instrumentId, intent, undefined, input.seed ?? 0);
  const exactTargetComponent = input.sourceHitType ? findKitComponent(input.instrumentId, intent, input.sourceHitType, input.seed ?? 0) : undefined;

  if (exactTargetComponent && (def?.family === 'hand-drums' || def?.family === 'metal-and-wood' || def?.family === 'body-percussion')) {
    return { hitType: exactTargetComponent.id, intent, component: exactTargetComponent };
  }

  if (component && (def?.family === 'hand-drums' || def?.family === 'metal-and-wood' || def?.family === 'body-percussion')) {
    return { hitType: component.id, intent, component };
  }

  if (def?.acousticProfile?.role === 'effect') {
    return { intent };
  }

  if (def?.kit) {
    const kitMap: Record<RhythmicIntent, string[]> = {
      low: ['kick'], backbeat: ['snare'], offbeat: ['hat'], ghost: ['ghost', 'snare'], accent: ['crash', 'snare', 'hat'], roll: ['snare', 'hat'],
      open: ['hat'], rim: ['rim', 'snare'], bell: ['ride', 'hat'], slap: ['snare'], pluck: ['hat'], sustain: ['ride', 'hat'], mute: ['rim', 'ghost'], scrape: ['hat', 'rim'],
    };
    const source = input.sourceHitType?.toLowerCase();
    const validSource = source && /^(kick|snare|hat|ride|crash|rim|ghost|clap|tom|brush)$/.test(source) ? source : undefined;
    let canonical = validSource ?? kitMap[intent][0];
    try {
      const allowed = resolveStyle({ styleId: input.styleId ?? '' }).contract.percussion.allowedHitTypes;
      if (allowed.length) {
        canonical = (validSource && allowed.includes(validSource))
          ? validSource
          : (kitMap[intent].find(v => allowed.includes(v)) ?? allowed[0]);
      }
    } catch {
      // The translation still has a deterministic generic kit role without a resolved style.
    }
    return { hitType: canonical, intent };
  }

  const style = `${input.styleId ?? ''} ${input.genreId ?? ''}`.toLowerCase();
  const phraseDense = /jazz|bebop|funk|afrobeat|flamenco|timba|salsa|samba|rock|metal/.test(style);
  const candidates: Record<string, Record<RhythmicIntent, string[]>> = {
    'tuned-percussion': {
      low: ['staccato', 'accent'], backbeat: ['accent', 'staccato'], offbeat: ['staccato', 'accent'], ghost: ['staccato'],
      accent: ['accent'], roll: ['roll', 'tremolo'], open: ['legato', 'staccato'], rim: ['staccato'], bell: ['accent'],
      slap: ['staccato', 'accent'], pluck: ['staccato'], sustain: ['legato', 'tenuto'], mute: ['staccato'], scrape: ['staccato'],
    },
    palmas: {
      low: ['ghost', 'staccato'], backbeat: ['accent', 'staccato'], offbeat: ['ghost', 'staccato'], ghost: ['ghost'],
      accent: ['accent', 'open'], roll: ['staccato'], open: ['open'], rim: ['staccato'], bell: ['accent'], slap: ['accent'],
      pluck: ['staccato'], sustain: ['open'], mute: ['ghost'], scrape: ['staccato'],
    },
    zapateado: {
      low: ['staccato'], backbeat: ['accent', 'staccato'], offbeat: ['staccato', 'ghost'], ghost: ['ghost'],
      accent: ['golpe', 'accent'], roll: ['staccato'], open: ['staccato'], rim: ['golpe', 'staccato'], bell: ['accent'], slap: ['golpe'],
      pluck: ['staccato'], sustain: ['staccato'], mute: ['ghost'], scrape: ['golpe'],
    },
    effect: {
      low: [], backbeat: [], offbeat: [], ghost: [], accent: [], roll: [], open: [], rim: [], bell: [], slap: [], pluck: [],
      sustain: [], mute: [], scrape: [],
    },
    guitar: {
      low: ['palm-mute', 'staccato'], backbeat: ['staccato', 'downstroke', 'accent'], offbeat: ['upstroke', 'staccato', 'fingerstyle'],
      ghost: ['palm-mute', 'ghost'], accent: ['pick', 'accent'], roll: ['tremolo-picking', 'rasgueado'], open: ['fingerstyle', 'pluck'],
      rim: ['golpe', 'staccato'], bell: ['accent'], slap: ['thumb-slap', 'slap'], pluck: ['fingerstyle', 'pick'], sustain: ['legato', 'tenuto'],
      mute: ['palm-mute', 'staccato'], scrape: ['rasgueado', 'golpe'],
    },
    bass: {
      low: ['fingerstyle', 'pluck'], backbeat: ['staccato', 'fingerstyle'], offbeat: ['ghost', 'palm-mute'], ghost: ['ghost', 'palm-mute'],
      accent: ['slap', 'pop', 'accent'], roll: ['fast-picking', 'tremolo'], open: ['fingerstyle'], rim: ['ghost-note-thump', 'staccato'],
      bell: ['accent'], slap: ['slap'], pluck: ['fingerstyle', 'pick'], sustain: ['legato', 'tenuto'], mute: ['palm-mute'], scrape: ['slap'],
    },
    strings: {
      low: ['pizzicato', 'staccato'], backbeat: ['spiccato', 'staccato', 'arco'], offbeat: ['staccato', 'spiccato'], ghost: ['pizzicato', 'staccato'],
      accent: ['marcato', 'accent', 'spiccato'], roll: ['tremolo'], open: ['arco', 'legato'], rim: ['col-legno-battuto', 'accent'],
      bell: ['pizzicato', 'accent'], slap: ['bartok-pizzicato', 'pizzicato'], pluck: ['pizzicato'], sustain: ['arco', 'legato'], mute: ['con-sordino', 'pizzicato'], scrape: ['col-legno-battuto'],
    },
    winds: {
      low: ['accent', 'staccato'], backbeat: ['tongued', 'staccato', 'accent'], offbeat: ['staccato', 'tongued'], ghost: ['subtone', 'ghost'],
      accent: ['marcato', 'accent'], roll: ['flutter-tongue', 'trill'], open: ['legato', 'breath'], rim: ['tongue-slap', 'staccato'], bell: ['accent'],
      slap: ['tongue-slap', 'accent'], pluck: ['tongued', 'staccato'], sustain: ['legato', 'breath'], mute: ['stopped', 'staccato'], scrape: ['tongue-slap'],
    },
    brass: {
      low: ['staccato', 'accent'], backbeat: ['staccato', 'martellato', 'accent'], offbeat: ['staccato', 'accent'], ghost: ['subtone', 'staccato'],
      accent: ['marcato', 'sforzando', 'accent'], roll: ['flutter-tongue', 'shake', 'trill'], open: ['legato', 'breath'], rim: ['tongue-slap', 'accent'],
      bell: ['accent'], slap: ['tongue-slap', 'staccato'], pluck: ['tongued', 'staccato'], sustain: ['legato', 'breath'], mute: ['stopped', 'cup-mute'], scrape: ['flutter-tongue'],
    },
    piano: {
      low: ['accent', 'staccato'], backbeat: ['staccato', 'accent'], offbeat: ['staccato', 'accent'], ghost: ['muted-key-thump', 'ghost', 'staccato'],
      accent: ['marcato', 'accent'], roll: ['trill', 'tremolo'], open: ['tenuto', 'legato'], rim: ['accent'], bell: ['accent'], slap: ['accented-staccato-octave', 'staccato'],
      pluck: ['staccato'], sustain: ['sostenuto', 'tenuto', 'legato'], mute: ['muted-key-thump', 'staccato'], scrape: ['cluster-tap', 'staccato'],
    },
    'free-reed': {
      low: ['accent', 'staccato'], backbeat: ['staccato', 'accent'], offbeat: ['staccato', 'accent'], ghost: ['chapa', 'staccato'],
      accent: ['accent', 'martellato'], roll: ['trill', 'tremolo'], open: ['legato', 'tenuto'], rim: ['golpe-caja', 'accent'], bell: ['accent'], slap: ['bellows-slap', 'accent'],
      pluck: ['staccato'], sustain: ['legato', 'tenuto'], mute: ['chapa', 'staccato'], scrape: ['chapa', 'staccato'],
    },
    voice: {
      low: ['portato', 'staccato'], backbeat: ['staccato', 'accent'], offbeat: ['staccato', 'portato'], ghost: ['portato', 'legato'], accent: ['accent', 'sforzando'], roll: ['vibrato', 'trill'],
      open: ['legato', 'tenuto'], rim: ['staccato'], bell: ['accent'], slap: ['staccato'], pluck: ['staccato'], sustain: ['legato', 'tenuto'], mute: ['staccato', 'portato'], scrape: ['staccato'],
    },
    percussion: {
      low: ['low-tone', 'staccato'], backbeat: ['accent', 'staccato'], offbeat: ['staccato', 'accent'], ghost: ['ghost', 'low-tone'], accent: ['accent', 'marcato'], roll: ['roll', 'flam'],
      open: ['open', 'staccato'], rim: ['rimshot', 'accent'], bell: ['accent'], slap: ['slap', 'accent'], pluck: ['staccato'], sustain: ['tenuto', 'open'], mute: ['choke', 'ghost'], scrape: ['brushed', 'roll'],
    },
    synth: {
      low: ['short-decay-pluck', 'staccato'], backbeat: ['tight-env-pluck', 'staccato'], offbeat: ['gated', 'staccato'], ghost: ['noise-click', 'staccato'],
      accent: ['fm-bite', 'accent'], roll: ['lfo-amp-fast', 'trill'], open: ['legato', 'tenuto'], rim: ['noise-transient'], bell: ['resonance-spike'],
      slap: ['fm-bite'], pluck: ['short-decay-pluck'], sustain: ['legato', 'tenuto'], mute: ['low-cutoff-pluck', 'staccato'], scrape: ['filter-sweep-fast', 'noise-burst'],
    },
  };

  const familyCandidates = candidates[family];
  const selected = familyCandidates ? firstSupported(input.instrumentId, familyCandidates[intent], input.seed ?? 0) : undefined;
  if (selected) return { articulation: selected, intent };

  // As a final safe fallback, retain the source technique only when the target
  // instrument explicitly advertises it. Otherwise use a family-neutral attack.
  const direct = resolveInstrumentArticulation(input.instrumentId, input.sourceArticulation);
  if (direct) return { articulation: direct.id, intent };

  const fallback = firstSupported(input.instrumentId, phraseDense ? ['accent', 'staccato', 'open'] : ['staccato', 'accent', 'open'], input.seed ?? 0);
  return { articulation: fallback, intent };
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
  } catch {
    // A missing style falls through to conservative genre heuristics.
  }

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

/** Choose the pitch class behavior for a connector between two harmonic targets. */
export function connectorPitchMode(approach: PitchApproach, strongBeat: boolean): 'target' | 'diatonic' | 'chromatic' {
  if (strongBeat) return 'target';
  if (approach === 'chromatic') return 'chromatic';
  return 'diatonic';
}
