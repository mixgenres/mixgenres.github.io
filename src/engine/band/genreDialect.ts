import { contractForGenre } from '../../engine/style/contracts';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';

import type { InstrumentDialect, PerformanceMode } from '../../engine/style/contracts';
export type { InstrumentDialect, PerformanceMode } from '../../engine/style/contracts';

export const DIALECTS: Record<string, InstrumentDialect> = {
  'congas:salsa': {
    id: 'congas:salsa',
    instrumentId: 'congas',
    name: 'Congas (Salsa/Timba)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'slap', 'muff', 'bass'],
    bodyMultiplier: 1.6, // Huge room resonance
    brightnessMultiplier: 1.1,
  },
  'congas:funk': {
    id: 'congas:funk',
    instrumentId: 'congas',
    name: 'Congas (Funk/Dry)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'slap', 'muff'],
    bodyMultiplier: 0.35, // Tight, dry studio sound
    decayMultiplier: 0.6,
  },
  'trumpet:salsa': {
    id: 'trumpet:salsa',
    instrumentId: 'trumpet',
    name: 'Trumpet (Salsa Mambo)',
    family: 'brass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'marcato',
    allowedTechniques: ['marcato', 'accent', 'staccato', 'fall'],
    bodyMultiplier: 1.3,
    brightnessMultiplier: 1.25,
  },
  'trumpet:jazz': {
    id: 'trumpet:jazz',
    instrumentId: 'trumpet',
    name: 'Trumpet (Cool Jazz)',
    family: 'brass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'legato',
    allowedTechniques: ['legato', 'staccato', 'fall', 'doit'],
    bodyMultiplier: 0.85,
    decayMultiplier: 0.9,
  },
  'upright-bass:salsa-tumbao': {
    id: 'upright-bass:salsa-tumbao',
    instrumentId: 'upright-bass',
    name: 'Upright Bass (Salsa Tumbao)',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pizzicato',
    allowedTechniques: ['pizzicato', 'slap-bass', 'mute'],
    pluckPositionOverride: 0.15,
    contactPointOverride: 0.2,
    decayMultiplier: 0.7,
    brightnessMultiplier: 1.15,
    micProximityPreset: 'close-mic',
  },
  'upright-bass:tango-arco': {
    id: 'upright-bass:tango-arco',
    instrumentId: 'upright-bass',
    name: 'Upright Bass (Tango Arco)',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'arco',
    allowedTechniques: ['arco', 'arrastre', 'chicharra', 'pizzicato', 'golpe'],
    bowPressureOverride: 0.65,
    decayMultiplier: 1.4,
    brightnessMultiplier: 0.85,
    micProximityPreset: 'hall-stage',
    bendGlideMs: 45,
  },
  'guitar:flamenco': {
    id: 'guitar:flamenco',
    instrumentId: 'guitarra_flamenca',
    name: 'Flamenco Guitar (Spanish Nylon)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'rasgueado', 'abanico', 'golpe', 'arrastre', 'palm-mute'],
    pluckPositionOverride: 0.22,
    brightnessMultiplier: 1.25,
    decayMultiplier: 0.85,
    micProximityPreset: 'close-mic',
  },
  'guitar:tango': {
    id: 'guitar:tango',
    instrumentId: 'guitarra_tango',
    name: 'Tango Guitar (Steel/Nylon Muted Chording)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'arrastre', 'palm-mute', 'chicharra'],
    pluckPositionOverride: 0.35,
    brightnessMultiplier: 0.9,
    decayMultiplier: 0.75,
    micProximityPreset: 'close-mic',
  },
  'guitar:blues': {
    id: 'guitar:blues',
    instrumentId: 'guitarra_blues',
    name: 'Blues Guitar (Slide & Bent Notes)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pick',
    allowedTechniques: ['pick', 'slide', 'bend', 'palm-mute'],
    pluckPositionOverride: 0.3,
    brightnessMultiplier: 1.1,
    decayMultiplier: 1.2,
    tuningSystemId: 'blues-continuum',
    micProximityPreset: 'direct-box',
    bendGlideMs: 40,
  },
  'cajon:flamenco': {
    id: 'cajon:flamenco',
    instrumentId: 'cajon_flamenco',
    name: 'Flamenco Cajón (Peru/Spain Mesh)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'center-bass',
    allowedTechniques: ['center-bass', 'edge-slap', 'rim-tap', 'side-wood'],
    micProximityPreset: 'close-mic',
  },
  'bandoneon:tango': {
    id: 'bandoneon:tango',
    instrumentId: 'bandoneon',
    name: 'Tango Bandoneón (Double Reed Free Air)',
    family: 'bellows',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'bellows-press',
    allowedTechniques: ['bellows-press', 'staccato-stab', 'bellows-shake'],
    micProximityPreset: 'room-ambient',
  },
  'oud:arabic-maqam': {
    id: 'oud:arabic-maqam',
    instrumentId: 'oud',
    name: 'Arabic Oud (Fretless Microtonal Lute)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'tremolo', 'glissando'],
    pluckPositionOverride: 0.25,
    brightnessMultiplier: 1.05,
    tuningSystemId: 'maqam-bayati',
    micProximityPreset: 'close-mic',
    bendGlideMs: 35,
  },
  'sitar:hindustani': {
    id: 'sitar:hindustani',
    instrumentId: 'sitar',
    name: 'Hindustani Sitar (Meend Bend & Sympathetic Strings)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'meend-bend', 'jhala-drone'],
    pluckPositionOverride: 0.2,
    brightnessMultiplier: 1.3,
    decayMultiplier: 1.5,
    tuningSystemId: 'just-intonation',
    micProximityPreset: 'room-ambient',
    bendGlideMs: 65,
  },
  'quena:andean-flute': {
    id: 'quena:andean-flute',
    instrumentId: 'quena',
    name: 'Andean Quena (Notched Cane Jet-Drive Flute)',
    family: 'wind',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'breath',
    allowedTechniques: ['breath', 'overblow', 'glissando'],
    brightnessMultiplier: 1.2,
    micProximityPreset: 'close-mic',
    bendGlideMs: 30,
  },
  'bagpipes:celtic': {
    id: 'bagpipes:celtic',
    instrumentId: 'bagpipes',
    name: 'Highland Bagpipes',
    family: 'winds',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'legato',
    allowedTechniques: ['legato', 'grace', 'accent'],
    decayMultiplier: 4.0,
    micProximityPreset: 'room-ambient',
  },
  'cowbell:salsa': {
    id: 'cowbell:salsa',
    instrumentId: 'cowbell',
    name: 'Salsa Cowbell / Claves',
    family: 'metal-and-wood',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'accent', 'staccato'],
    brightnessMultiplier: 1.5,
  },
  'kizomba:electronic-beat': {
    id: 'kizomba:electronic-beat',
    instrumentId: 'kizomba_synth_bass',
    name: 'Electronic Kizomba / Tarraxo Synth Bass',
    family: 'electronic',
    performanceMode: 'programmed-electronic',
    defaultTechnique: 'sub-sweep',
    allowedTechniques: ['sub-sweep', 'punch-stab'],
    micProximityPreset: 'direct-box',
  },
  'bass:reggae': {
    id: 'bass:reggae',
    instrumentId: 'bass',
    name: 'Reggae Bass (Deep/Muted)',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'legato',
    allowedTechniques: ['legato', 'staccato', 'palm-mute'],
    brightnessMultiplier: 0.35,
    bodyMultiplier: 2.0,
    decayMultiplier: 0.85,
    micProximityPreset: 'direct-box',
  },
  'log-drum:afrobeats': {
    id: 'log-drum:afrobeats',
    instrumentId: 'log-drum',
    name: 'Log Drum (Afrobeats/Amapiano)',
    family: 'percussion',
    performanceMode: 'programmed-electronic',
    defaultTechnique: 'open',
    allowedTechniques: ['open', 'accent', 'ghost'],
    bodyMultiplier: 2.5,
    brightnessMultiplier: 0.4,
    decayMultiplier: 1.2,
    micProximityPreset: 'close-mic',
  },
  'requinto:bachata': {
    id: 'requinto:bachata',
    instrumentId: 'requinto',
    name: 'Requinto (Bachata/Latin)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'apagado', 'staccato'],
    brightnessMultiplier: 1.4,
    bodyMultiplier: 0.6,
    decayMultiplier: 0.65,
    micProximityPreset: 'close-mic',
  },
  'drums:kizomba': {
    id: 'drums:kizomba',
    instrumentId: 'drums',
    name: 'Zouk/Kizomba Drum Kit',
    family: 'kit',
    performanceMode: 'programmed-electronic',
    defaultTechnique: 'strike',
    allowedTechniques: ['strike', 'accent', 'ghost'],
    bodyMultiplier: 1.5,
    brightnessMultiplier: 0.75,
    decayMultiplier: 1.1,
  },
};

const DEFAULT_DIALECT_SHAPE: InstrumentDialect = {
  id: 'generic:dialect',
  instrumentId: '',
  name: 'Acoustic Dialect',
  family: 'plucked',
  performanceMode: 'acoustic-ensemble',
  defaultTechnique: 'default',
  allowedTechniques: ['default'],
  brightnessMultiplier: 1.0,
  decayMultiplier: 1.0,
};

export function resolveDialect(
  instrumentId: string,
  worldId = '',
  styleId = ''
): InstrumentDialect | null {
  const normId = instrumentId.toLowerCase().replace(/_/g, '-');
  if (worldId) {
    try {
      const contract = contractForGenre(worldId);
      if (contract?.instrumentDialects) {
        // 1. Exact match
        const exact = contract.instrumentDialects[normId] || contract.instrumentDialects[instrumentId];
        if (exact) {
          return {
            ...DEFAULT_DIALECT_SHAPE,
            id: `${normId}:${worldId}`,
            instrumentId: normId,
            name: `${normId} (${worldId})`,
            ...exact,
          };
        }

        // 2. Family / related instrument matches
        const related: string[] = [];
        if (normId.includes('bass')) related.push('upright-bass', 'bass', 'pick-bass');
        if (normId.includes('guitar')) related.push('guitar', 'spanish-guitar', 'acoustic-guitar', 'electric-guitar');
        if (normId.includes('sax')) related.push('tenor-sax', 'alto-sax', 'soprano-sax', 'bari-sax');
        if (normId.includes('drum')) related.push('drums', 'brush-kit');

        for (const rel of related) {
          const matched = contract.instrumentDialects[rel];
          if (matched) {
            return {
              ...DEFAULT_DIALECT_SHAPE,
              id: `${normId}:${worldId}`,
              instrumentId: normId,
              name: `${normId} (${worldId})`,
              ...matched,
            };
          }
        }

        // 3. Match by instrument family
        const def = INSTRUMENTS_BY_ID[normId] || INSTRUMENTS_BY_ID[instrumentId];
        if (def && contract.instrumentDialects[def.family]) {
          return {
            ...DEFAULT_DIALECT_SHAPE,
            id: `${def.family}:${worldId}`,
            instrumentId: normId,
            name: `${def.name} (${worldId} ${def.family})`,
            family: def.family,
            ...contract.instrumentDialects[def.family],
          };
        }
      }
    } catch {
      // Contract lookup fallback
    }
  }

  return fallbackDialectForSparseContracts(instrumentId, worldId, styleId);
}

export function fallbackDialectForSparseContracts(
  instrumentId: string,
  worldId = '',
  styleId = ''
): InstrumentDialect | null {
  const token = `${worldId}:${styleId}:${instrumentId}`.toLowerCase();
  
  if (token.includes('salsa') && /(bass|upright)/.test(instrumentId)) {
    return DIALECTS['upright-bass:salsa-tumbao'];
  }
  if (instrumentId.includes('conga') && (token.includes('salsa') || token.includes('timba') || token.includes('cumbia'))) {
    return DIALECTS['congas:salsa'];
  }
  if (instrumentId.includes('conga') && (token.includes('funk') || token.includes('soul') || token.includes('disco'))) {
    return DIALECTS['congas:funk'];
  }
  if (instrumentId.includes('trumpet') && (token.includes('salsa') || token.includes('timba'))) {
    return DIALECTS['trumpet:salsa'];
  }
  if (instrumentId.includes('trumpet') && token.includes('jazz')) {
    return DIALECTS['trumpet:jazz'];
  }
  if (token.includes('tango') && /(bass|upright)/.test(instrumentId)) {
    return DIALECTS['upright-bass:tango-arco'];
  }
  if (token.includes('flamenco') && instrumentId.includes('guitar')) {
    return DIALECTS['guitar:flamenco'];
  }
  if (token.includes('tango') && instrumentId.includes('guitar')) {
    return DIALECTS['guitar:tango'];
  }
  if (token.includes('blues') && (instrumentId.includes('guitar') || instrumentId.includes('guitarra'))) {
    return DIALECTS['guitar:blues'];
  }
  if (token.includes('flamenco') && instrumentId.includes('cajon')) {
    return DIALECTS['cajon:flamenco'];
  }
  if (token.includes('tango') && instrumentId.includes('bandoneon')) {
    return DIALECTS['bandoneon:tango'];
  }
  if (instrumentId.includes('oud') || token.includes('maqam') || token.includes('middle_east')) {
    return DIALECTS['oud:arabic-maqam'];
  }
  if (instrumentId.includes('sitar') || token.includes('raga') || token.includes('india')) {
    return DIALECTS['sitar:hindustani'];
  }
  if (instrumentId.includes('quena') || instrumentId.includes('zampona') || token.includes('andean')) {
    return DIALECTS['quena:andean-flute'];
  }
  if ((token.includes('kizomba') || token.includes('tarraxo') || token.includes('dembow')) && (instrumentId.includes('bass') || instrumentId.includes('synth'))) {
    return DIALECTS['kizomba:electronic-beat'];
  }
  if (instrumentId.includes('bass') && (token.includes('reggae') || token.includes('dub') || token.includes('dancehall'))) {
    return DIALECTS['bass:reggae'];
  }
  if (instrumentId.includes('log-drum')) {
    return DIALECTS['log-drum:afrobeats'];
  }
  if (instrumentId.includes('requinto') || token.includes('bachata')) {
    return DIALECTS['requinto:bachata'];
  }
  if (instrumentId.includes('drum') && (token.includes('kizomba') || token.includes('zouk') || token.includes('tarraxo'))) {
    return DIALECTS['drums:kizomba'];
  }
  if (instrumentId.includes('bagpipe') || instrumentId.includes('uilleann')) {
    return DIALECTS['bagpipes:celtic'];
  }
  if (instrumentId.includes('cowbell') || instrumentId.includes('claves') || instrumentId.includes('woodblock')) {
    return DIALECTS['cowbell:salsa'];
  }

  return null;
}


/** Resolve the production/performance mode when a style has not authored one.
 * This is deliberately conservative: acoustic traditions stay acoustic;
 * styles whose defining groove is programmed stay on the electronic path.
 */
export function performanceModeForContext(worldId = '', styleId = ''): PerformanceMode {
  const token = `${worldId}:${styleId}`.toLowerCase();
  if (/house|techno|electronic|drum-and-bass|uk-bass|industrial|reggaeton|hip-hop|trap|modern-kizomba|tarraxo/.test(token)) return 'programmed-electronic';
  if (/cumbia|afrobeats|funk|ska|soul|r-and-b|rock|pop|zouk/.test(token)) return 'hybrid';
  return 'acoustic-ensemble';
}
