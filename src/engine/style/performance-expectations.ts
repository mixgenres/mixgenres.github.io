import type { ResolvedStyle } from '../../data/styles/schema';
import type { TechniqueExpectation, StyleReferenceExpectation } from '../../data/styles/schema/performance-expectation';
import { REFERENCE_EXPECTATIONS } from '../../data/styles/performanceExpectations';
import { R_AND_B_GENRE_ID } from '../../data/genres/genreIds';
import { getInstrumentPerformanceProfile, type InstrumentPerformanceProfile } from '../../engine/lookup/performance';

export type StylePerformanceSchema = {
  styleId: string;
  genreId: string;
  meter: string;
  tempo: number;
  subdivision: number;
  signatureCell?: string;
  feel: string;
  harmonicRhythm?: string;
  bassMotion?: string;
  melodyContour: string[];
  requiredPatterns: string[];
  forbiddenPatterns: string[];
  reference: StyleReferenceExpectation;
  instruments: Record<string, TechniqueExpectation>;
};



function referenceFor(style: ResolvedStyle): StyleReferenceExpectation {
  const id = style.primaryGenre === R_AND_B_GENRE_ID ? R_AND_B_GENRE_ID : style.primaryGenre;
  const base = REFERENCE_EXPECTATIONS[id] ?? REFERENCE_EXPECTATIONS.rock;
  const name = style.name.toLowerCase();
  const techniques = [...base.techniques];
  const articulation = [...base.articulation];
  if (/fingerstyle|classical|choro/.test(name)) techniques.push('fingerstyle', 'independent bass and melody');
  if (/flamenco|solea|buleria|alegria|seguiriya|rumba/.test(name)) techniques.push('rasgueado', 'golpe', 'picado');
  if (/metal|thrash|death|black|doom|sludge/.test(name)) techniques.push('palm-mute', 'tight riff articulation');
  if (/jazz|bebop|hard bop|swing|gypsy/.test(name)) techniques.push('voice leading', 'phrase development');
  if (/salsa|timba|son|mambo|charanga/.test(name)) techniques.push('clave', 'montuno/tumbao interaction');
  if (/bluegrass|honky|country|western/.test(name)) techniques.push('flatpick/fiddle articulation', 'double-stops');
  return { ...base, techniques: Array.from(new Set(techniques)), articulation: Array.from(new Set(articulation)) };
}

function normalizeRole(role: string): string {
  const r = role.toLowerCase();
  if (/bass/.test(r)) return 'bass';
  if (/drum|perc/.test(r)) return 'drums';
  if (/lead|melody|voice/.test(r)) return 'lead';
  return 'comp';
}

export function styleTechniqueExpectation(style: ResolvedStyle, profile: InstrumentPerformanceProfile, role: string): TechniqueExpectation {
  const ref = referenceFor(style);
  const styleArt = style.sound?.articulations?.[profile.instrumentId] ?? '';
  const roleRef = ref.roleExpectations[normalizeRole(role)] ?? [];
  const preferred = Array.from(new Set([
    ...ref.articulation,
    ...roleRef,
    ...(profile.genreProfiles[style.primaryGenre]?.preferredGestures ?? []),
    ...String(styleArt).split(/[ ,|/]+/).filter(Boolean),
  ]));
  const available = new Set(Object.keys(profile.gestures));
  const required = preferred.filter(x => available.has(x));
  const forbidden = Array.from(new Set([
    ...(profile.genreProfiles[style.primaryGenre]?.forbiddenGestures ?? []),
    ...(style.rules?.forbid ?? []).map(x => x.tag),
  ]));
  return { required: required.slice(0, 5), preferred, forbidden };
}

export function buildStylePerformanceSchema(style: ResolvedStyle, instruments: string[]): StylePerformanceSchema {
  const reference = referenceFor(style);
  const out: Record<string, TechniqueExpectation> = {};
  for (const instrumentId of instruments) {
    const profile = getInstrumentPerformanceProfile(instrumentId);
    out[instrumentId] = styleTechniqueExpectation(style, profile, profile.genreProfiles[style.primaryGenre]?.roles?.[0] ?? 'comp');
  }
  return {
    styleId: style.id,
    genreId: style.primaryGenre,
    meter: style.rhythm.meter,
    tempo: style.rhythm.defaultBpm,
    subdivision: style.contract.subdivision,
    signatureCell: style.rhythm.signatureCell,
    feel: style.rhythm.microtimingFeel,
    harmonicRhythm: style.harmony.harmonicRhythm,
    bassMotion: style.harmony.bassMotion,
    melodyContour: style.melody.contourArchetypes ?? [],
    requiredPatterns: style.patterns?.require ?? [],
    forbiddenPatterns: style.patterns?.avoid ?? [],
    reference,
    instruments: out,
  };
}
