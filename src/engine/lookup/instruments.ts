export { FAMILY_LABELS, FAMILY_ORDER, WORLD_INSTRUMENT_HINTS } from '../../data/instruments/families';
import { enrichInstrumentPhysics } from '../overrides/enrich';
import type { InstrumentDef, InstrumentTechniqueProfile } from '../../data/instruments/schema/instrument-def';
import { INSTRUMENT_CATALOG } from '../../data/instruments';
export { INSTRUMENT_CATALOG } from '../../data/instruments';
export type { InstrumentDef, InstrumentFamily, DrumVoice, InstrumentTechniqueProfile } from '../../data/instruments/schema/instrument-def';
/** Engine-side physics enrichment and runtime instrument queries. */
/**
 * Engine-facing realism layer. Every catalog entry receives explicit physical
 * assumptions, signal-chain intent, and articulation synthesis metadata.
 */
export const ENRICHED_INSTRUMENT_CATALOG = INSTRUMENT_CATALOG.map(enrichInstrumentPhysics);

export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(ENRICHED_INSTRUMENT_CATALOG.map(i => [i.id, i]));

export function instrument(id: string): InstrumentDef {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(
      `UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}". ` +
      `No catalog fallback is permitted.`
    );
  }
  return def;
}

/** Pattern vocabulary aliases. Genre pattern data uses musical roles/kinds
 * (e.g. "keys", "guitar", "percussion") rather than catalog IDs. Keep that
 * vocabulary separate from the concrete GeneralUser patch selected by a track. */
export function instrumentPatternKinds(id: string): string[] {
  const d = INSTRUMENTS_BY_ID[id];
  if (!d) return [];
  const out = new Set<string>([id]);
  if (d.voicing === 'bass') out.add('bass');
  if (d.voicing === 'unpitched') out.add('percussion');
  if (d.voicing === 'single') { out.add('melody'); out.add('lead'); }
  if (d.voicing === 'chord') out.add('harmony');
  if (d.family === 'kit') { out.add('drums'); out.add('percussion'); out.add('pulse'); }
  if (d.family === 'plucked') { out.add('guitar'); out.add('plucked'); }
  if (d.family === 'bowed') { out.add('strings'); if (id === 'violin' || id === 'fiddle') out.add('violin'); if (id === 'cello') out.add('cello'); }
  if (d.family === 'winds' && ['soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax'].includes(id)) out.add('sax');
  if (id === 'flute' || id === 'dizi' || id === 'xiao' || id === 'tin-whistle' || id === 'low-whistle' || id === 'quena') { out.add('flute'); out.add('lead'); }
  if (d.family === 'brass') out.add('brass');
  if (d.family === 'voice') { out.add('voice'); out.add('coro'); }
  if (id === 'backing-vocals' || id === 'choir') out.add('coro');
  if (d.family === 'bellows-and-keys') { out.add('keys'); if (id.includes('accordion') || id.includes('concertina')) out.add('accordion'); }
  if (d.family === 'electronic') { out.add('synth'); out.add('texture'); }
  if (id === 'piano') { out.add('piano'); out.add('keys'); }
  if (id === 'rhodes') { out.add('piano'); out.add('keys'); }
  if (id === 'organ') { out.add('organ'); out.add('keys'); }
  if (id === 'electric-guitar' || id.includes('guitar')) out.add('electric-guitar');
  if (id === 'congas') out.add('congas');
  if (id === 'bongos') out.add('bongos');
  if (id === 'timbales') out.add('timbales');
  if (id === 'guiro' || id === 'guacharaca') { out.add('guiro'); out.add('guacharaca'); }
  if (id === 'pandeiro' || id === 'tamborim') { out.add('hand-percussion'); out.add('pandeiro'); }
  if (id === 'bodhran') { out.add('bodhran'); out.add('percussion'); }
  if (id === 'cajon') { out.add('cajon'); out.add('percussion'); }
  if (id === 'palmas' || id === 'zapateado') { out.add('palmas'); out.add('percussion'); }
  if (id === 'tambora') { out.add('tambora'); out.add('percussion'); }
  if (id === 'taiko' || id === 'kane' || id === 'paigu') { out.add('percussion'); }
  if (id === 'tabla') { out.add('tabla'); out.add('percussion'); }
  if (id === 'shaker') { out.add('shaker'); out.add('percussion'); }
  if (id === 'log-drum') { out.add('log-drum'); out.add('percussion'); out.add('bass'); }
  if (id === 'uilleann-pipes' || id === 'bagpipes') { out.add('uilleann-pipes'); out.add('bagpipes'); out.add('lead'); }
  if (id === 'celtic-harp' || id === 'harp') { out.add('celtic-harp'); out.add('harp'); out.add('harmony'); }
  if (id === 'tres') { out.add('tres'); out.add('guitar'); }
  if (id === 'charango') { out.add('charango'); out.add('guitar'); }
  if (id === 'requinto') { out.add('requinto'); out.add('guitar'); }
  if (id === 'guitarron') { out.add('guitarron'); out.add('bass'); }
  if (id === 'erhu') { out.add('erhu'); out.add('strings'); out.add('lead'); }
  if (id === 'pipa') { out.add('pipa'); out.add('plucked'); out.add('lead'); }
  if (id === 'guzheng' || id === 'guqin') { out.add('guzheng'); out.add('plucked'); out.add('harmony'); }
  if (id === 'koto') { out.add('koto'); out.add('plucked'); out.add('harmony'); }
  if (id === 'shamisen') { out.add('shamisen'); out.add('plucked'); out.add('lead'); }
  if (id === 'shakuhachi') { out.add('shakuhachi'); out.add('flute'); out.add('lead'); }
  if (id === 'steel-drums') { out.add('steel-drums'); out.add('percussion'); out.add('melody'); }
  if (id === 'slide-guitar') { out.add('slide-guitar'); out.add('guitar'); out.add('lead'); }
  if (id === 'harmonium') { out.add('harmonium'); out.add('keys'); out.add('drone'); }
  if (id === 'drone') { out.add('drone'); out.add('pad'); out.add('texture'); }
  return [...out];
}

export function isPercussive(id: string): boolean {
  const def = INSTRUMENTS_BY_ID[id];
  return !!def && (def.kit === true || def.drum !== undefined);
}

export function cleanInstrumentName(name: string): string {
  return name
    .replace(/\s*\([^)]*GM[^)]*\)/gi, '')
    .replace(/\s*\([^)]*approx[^)]*\)/gi, '')
    .replace(/\s*\(GM approximation\)/gi, '')
    .replace(/GM approximation/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Instruments a world tends to reach for first, by world id.
 * Maps to canonical 32 genre baseline instrumentation.
 */
/** Return the authored technique profile for an instrument, with a safe fallback. */
export function techniqueProfile(id: string): InstrumentTechniqueProfile {
  const def = INSTRUMENTS_BY_ID[id];
  if (!def) {
    throw new Error(`UNRESOLVED_MUSICAL_IDENTITY_ERROR: unknown instrument "${id}" has no technique profile.`);
  }
  return def.techniques;
}

/** Pick style-specific idiomatic articulations without inventing unsupported gestures. */
export function genreTechniquesForInstrument(id: string, styleId?: string): string[] {
  const p = techniqueProfile(id);
  if (!styleId) return p.articulations;
  const key = styleId.toLowerCase();
  for (const [style, arts] of Object.entries(p.genreTechniques ?? {})) {
    if (key === style || key.includes(style) || style.includes(key)) return arts.filter(a => p.articulations.includes(a));
  }
  return p.articulations;
}
