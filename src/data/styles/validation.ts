import type { SongStyle } from './schema';

export interface StyleValidationCatalogs {
  genreIds: ReadonlySet<string>;
  styleIds: ReadonlySet<string>;
  instrumentRoles: ReadonlyMap<string, string | undefined>;
}

/** Validate a resolved style at the catalog boundary, including its references. */
export function validateSongStyle(style: SongStyle, catalogs: StyleValidationCatalogs): string[] {
  const errors: string[] = [];
  const fail = (message: string) => errors.push(`style ${style.id || '<unknown>'}: ${message}`);
  const finite = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

  if (!style.id?.trim()) fail('id must be a non-empty string');
  if (!style.name?.trim()) fail('name must be a non-empty string');
  if (!style.summary?.trim()) fail('summary must be a non-empty string');
  if (!Array.isArray(style.genres) || style.genres.length === 0) fail('genres must contain at least one genre id');
  for (const genreId of style.genres ?? []) if (!catalogs.genreIds.has(genreId)) fail(`unknown genre reference ${genreId}`);
  if (!catalogs.genreIds.has(style.primaryGenre)) fail(`unknown primaryGenre ${style.primaryGenre}`);
  if (!(style.genres ?? []).includes(style.primaryGenre)) fail(`primaryGenre ${style.primaryGenre} is not in genres`);
  if (!['canonical', 'form', 'era', 'school', 'fusion', 'regional'].includes(style.kind)) fail(`invalid style kind ${style.kind}`);
  if (!Array.isArray(style.signatureTraits) || style.signatureTraits.some(x => typeof x !== 'string' || !x.trim())) fail('signatureTraits must be non-empty strings');

  if (style.extends && !catalogs.styleIds.has(style.extends)) fail(`unknown extends style ${style.extends}`);
  for (const influence of style.influences ?? []) {
    const ref = influence.source.styleId ?? influence.source.genreId;
    if (!ref) fail('influence must reference a style or genre');
    else if (influence.source.styleId && !catalogs.styleIds.has(influence.source.styleId)) fail(`unknown influence style ${influence.source.styleId}`);
    else if (influence.source.genreId && !catalogs.genreIds.has(influence.source.genreId)) fail(`unknown influence genre ${influence.source.genreId}`);
    if (!finite(influence.weight) || influence.weight < 0 || influence.weight > 1) fail(`influence weight must be between 0 and 1 (${String(influence.weight)})`);
  }

  const rhythm = style.rhythm;
  if (!rhythm) fail('resolved rhythm is required');
  else {
    const [low, high] = rhythm.tempoRange ?? [];
    const validTempoRange = finite(low) && finite(high) && low > 0 && high >= low && high <= 400;
    if (!validTempoRange) fail('tempoRange must be an ascending positive pair no higher than 400 BPM');
    if (!finite(rhythm.defaultBpm) || !validTempoRange) fail(`defaultBpm ${String(rhythm.defaultBpm)} must be within tempoRange`);
    else if (rhythm.defaultBpm < low || rhythm.defaultBpm > high) fail(`defaultBpm ${rhythm.defaultBpm} must be within tempoRange`);
    if (typeof rhythm.meter !== 'string' || (!/^\d+\/\d+$/.test(rhythm.meter) && rhythm.meter !== 'free')) fail(`invalid meter ${String(rhythm.meter)}`);
    if (!finite(rhythm.swingPercentage) || rhythm.swingPercentage < 0 || rhythm.swingPercentage > 100) fail('swingPercentage must be between 0 and 100');
    if (!finite(rhythm.anticipationOffsetSteps) || !finite(rhythm.humanizeJitterMs) || rhythm.humanizeJitterMs < 0) fail('rhythm timing values must be finite and jitter non-negative');
  }

  const form = style.form;
  if (!form?.templates?.length) fail('resolved form must contain at least one template');
  else for (const [i, weighted] of form.templates.entries()) {
    if (!finite(weighted.w) || weighted.w <= 0) fail(`form template ${i} must have a positive finite weight`);
    if (!Array.isArray(weighted.value) || weighted.value.length === 0) fail(`form template ${i} must contain steps`);
    for (const [j, step] of (weighted.value ?? []).entries()) {
      if (!step.key?.trim() || !step.kind?.trim() || !finite(step.bars) || step.bars <= 0) fail(`form template ${i} step ${j} has invalid key, kind, or bar count`);
    }
  }

  const ensemble = style.arrangement?.ensemble;
  if (!ensemble?.length) fail('resolved arrangement must contain at least one instrument role');
  else for (const [i, part] of ensemble.entries()) {
    if (!part.role?.trim()) fail(`ensemble part ${i} has no role`);
    if (!Array.isArray(part.instrumentIds) || part.instrumentIds.length === 0) fail(`ensemble part ${i} (${part.role}) has no instruments`);
    if (!finite(part.priority) || part.priority < 0) fail(`ensemble part ${i} (${part.role}) has invalid priority`);
    for (const instrumentId of part.instrumentIds ?? []) {
      if (!catalogs.instrumentRoles.has(instrumentId)) fail(`ensemble role ${part.role} references unknown instrument ${instrumentId}`);
      else {
        const declaredRole = catalogs.instrumentRoles.get(instrumentId);
        if (!declaredRole) fail(`instrument ${instrumentId} has no declared acoustic role`);
        else if (declaredRole !== part.role) fail(`instrument ${instrumentId} declares role ${declaredRole} but is assigned role ${part.role}`);
      }
    }
  }

  for (const [i, weighted] of (style.sound?.instrumentPalette ?? []).entries()) {
    if (!catalogs.instrumentRoles.has(weighted.value)) fail(`sound instrument palette entry ${i} references unknown instrument ${weighted.value}`);
    if (!finite(weighted.w) || weighted.w <= 0) fail(`sound instrument palette entry ${i} must have a positive finite weight`);
  }

  for (const [aspect, rules] of Object.entries(style.rules ?? {})) {
    for (const [i, rule] of (rules ?? []).entries()) if (!rule.tag?.trim()) fail(`${aspect} rule ${i} has an empty tag`);
  }
  return errors;
}
