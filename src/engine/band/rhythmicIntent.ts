import { PITCH_APPROACH_CLASSIFIERS } from '../../data/performance/pitchApproachRules';
import { INSTRUMENTS_BY_ID, type InstrumentDef } from '../../engine/lookup/instruments';
import type { InstrumentKitComponent } from '../../data/instruments/schema/instrument-def';
import { resolveStyle } from '../../engine/style';
import { KIT_COMPONENT_MATCH_PATTERNS, KIT_INSTRUMENT_ID_MATCHERS, PREFERRED_KIT_COMPONENTS, STANDARD_DRUM_KIT_IDS } from '../../data/performance/kitIntentRules';
import type { RhythmicIntent } from '../../data/performance/schema/rhythmic-intent';

export type PitchApproach = 'tonal' | 'diatonic' | 'chordal' | 'chromatic' | 'mixed' | 'modal' | 'raga';

function defFor(instrumentId: string): InstrumentDef | undefined {
  return INSTRUMENTS_BY_ID[instrumentId];
}



function componentMatch(component: InstrumentKitComponent, intent: RhythmicIntent): number {
  const text = `${component.id} ${component.name}`.toLowerCase();
  const zone = new Set(component.strikeZones ?? []).values();
  void zone;
  const pattern = KIT_COMPONENT_MATCH_PATTERNS[intent].find(p => p.test(text));
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
  const kitKey = STANDARD_DRUM_KIT_IDS.includes(id)
    ? 'drums'
    : KIT_INSTRUMENT_ID_MATCHERS.find(rule => id.includes(rule.idFragment))?.key;
  return kitKey ? [...PREFERRED_KIT_COMPONENTS[kitKey][intent]] : [];
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

  if (PITCH_APPROACH_CLASSIFIERS.ragaText.test(text) || PITCH_APPROACH_CLASSIFIERS.ragaModel.test(pitchModel)) return 'raga';
  if (PITCH_APPROACH_CLASSIFIERS.modalText.test(text) || PITCH_APPROACH_CLASSIFIERS.modalModel.test(pitchModel)) return 'modal';
  if (PITCH_APPROACH_CLASSIFIERS.droneHarmony.test(harmonyModel) && role !== 'bass' && role !== 'comp' && role !== 'harmony') return 'modal';
  if (role === 'bass' && PITCH_APPROACH_CLASSIFIERS.bassRootMotion.test(bassModel)) return 'tonal';
  if (role === 'bass' && PITCH_APPROACH_CLASSIFIERS.bassMotif.test(bassModel)) return 'mixed';
  if (PITCH_APPROACH_CLASSIFIERS.tonalLead.test(pitchModel) && (role === 'lead' || role === 'melody')) return 'tonal';
  if (PITCH_APPROACH_CLASSIFIERS.flamenco.test(text)) return role === 'bass' || role === 'comp' || role === 'harmony' ? 'chordal' : 'modal';
  if (PITCH_APPROACH_CLASSIFIERS.jazz.test(text) || PITCH_APPROACH_CLASSIFIERS.chromaticModel.test(pitchModel)) return role === 'bass' ? 'mixed' : 'chromatic';
  if (PITCH_APPROACH_CLASSIFIERS.tango.test(text)) return 'mixed';
  if (PITCH_APPROACH_CLASSIFIERS.folk.test(text)) return 'modal';
  if (PITCH_APPROACH_CLASSIFIERS.latin.test(text)) return role === 'bass' ? 'chordal' : 'mixed';
  if (PITCH_APPROACH_CLASSIFIERS.popular.test(text)) return role === 'bass' ? 'mixed' : (role === 'lead' || role === 'melody' ? 'mixed' : 'chordal');
  if (PITCH_APPROACH_CLASSIFIERS.electronic.test(text)) return role === 'lead' || role === 'melody' ? 'mixed' : (role === 'bass' ? 'tonal' : 'chordal');
  if (PITCH_APPROACH_CLASSIFIERS.modalModelFinal.test(pitchModel)) return 'modal';
  if (role === 'lead' || role === 'melody') return 'diatonic';
  return 'chordal';
}

export function connectorPitchMode(approach: PitchApproach, strongBeat: boolean): 'target' | 'diatonic' | 'chromatic' {
  if (strongBeat) return 'target';
  if (approach === 'chromatic') return 'chromatic';
  return 'diatonic';
}
