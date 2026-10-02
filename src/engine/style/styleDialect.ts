import { DEFAULT_STYLE_MASTER_PROFILE } from '../../data/sound/mix/masterProfiles';
import type { SongStyle } from '../../data/styles/schema';
import { styleTheoryFor } from '../../engine/lookup/theory';
import { profileForStyle } from './profiles';


/** Apply the authored style dialect without introducing generic replacement patterns. */
export function applyStyleDialect(style: SongStyle, _index?: number): SongStyle {
  const profile = profileForStyle(style.primaryGenre, style.name);
  // GenreStyleDefinition already carries the rhythm, form and personnel. Do not
  // invent a substitute dialect or progression from a style name/index.
  if (!profile) return style;
  const theory = styleTheoryFor(style.id, style.primaryGenre);
  const base = profile;
  const rhythm = { ...(style.rhythm ?? {}) };
  rhythm.defaultBpm = base.bpm ?? rhythm.defaultBpm;
  rhythm.tempoRange = base.tempoRange ?? rhythm.tempoRange;
  rhythm.meter = base.meter ?? rhythm.meter;
  rhythm.feel = base.feel ?? rhythm.feel;
  rhythm.swingPercentage = base.swing ?? rhythm.swingPercentage;
  rhythm.signatureCell = base.signatureCell;
  rhythm.timelineClave = base.timeline ?? rhythm.timelineClave;
  rhythm.microtimingFeel = /laid-back|behind|space/.test(base.feel ?? '') ? 'laid-back' : /shuffle|swing/.test(base.feel ?? '') ? 'swung' : rhythm.microtimingFeel;

  style.rhythm = rhythm;
  style.summary = `${style.name}: ${base.signatureCell}`;
  style.signatureTraits = [
    base.signatureCell,
    `${theory.meter} ${theory.harmonicModel}`,
    ...theory.rhythm.signature,
    `bass:${theory.bass.style}`,
    ...base.contours,
    ...(base.arrangement ?? []),
  ].filter(Boolean).slice(0, 14);
  if (style.sourceProvenance?.['form.templates'] !== 'style') style.form = {
    ...(style.form ?? {}),
    sectionVocab: base.form,
    templates: [{w:1, value: base.form.map((label, i) => ({
      key: `${label.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i}`,
      label, kind: label, bars: label === 'intro' || label === 'outro' || label === 'coda' || label === 'cierre' ? 4 : 8,
      intensity: i === base.form.length - 1 ? 'low' : i >= base.form.length - 2 ? 'high' : 'medium'
    }))}],
    preferredMeters: [rhythm.meter ?? '4/4'],
  };
  style.harmony = {
    ...(style.harmony ?? {}),
    model: theory.harmonicModel ?? base.harmonyModel ?? style.harmony?.model ?? 'functional',
    modePolicy: theory.defaultScale ?? base.modePolicy ?? style.harmony?.modePolicy ?? 'major',
    progressionTemplates: (base.progressions.length ? base.progressions : theory.progressions).map(value => ({w:1,value})),
    harmonicRhythm: theory.harmonicRhythm ?? base.harmonicRhythm ?? style.harmony?.harmonicRhythm,
    bassMotion: theory.bass.style ?? base.bassMotion ?? style.harmony?.bassMotion,
  };
  style.melody = {
    ...(style.melody ?? {}),
    contourArchetypes: Array.from(new Set([...theory.melody.contour, ...base.contours])),
    phraseLengthsBars: theory.melody.phraseBars.length ? theory.melody.phraseBars : [4,8],
  };
  style.arrangement = {
    ...(style.arrangement ?? {}),
    doublingRules: base.arrangement,
  };
  style.sound = {
    ...(style.sound ?? {}),
    instrumentPalette: base.instruments.map(value => ({value,w:1})),
    masterProfile: { ...DEFAULT_STYLE_MASTER_PROFILE, ...(style.sound?.masterProfile ?? {}) },
  };
  return style;
}
