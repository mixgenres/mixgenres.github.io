import test from 'node:test';
import assert from 'node:assert/strict';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { instrumentPatternKinds } from '../src/engine/lookup/instruments';
import { canonicalPatternSection, makeSheet, rebuild } from '../src/engine/sheet/sheet';
import { resolveStyle } from '../src/engine/style';
import { ALL_STYLES } from '../src/engine/style/registry';

test('generated starters use compatible section-authored parts across the full style catalog', () => {
  let sectionSpecificCells = 0;

  for (const style of ALL_STYLES) {
    const genreId = style.primaryGenre;
    const sheet = makeSheet({ genreId, styleId: style.id });
    const allowed = resolveStyle({ genreId, styleId: style.id }).patterns?.allowed ?? [];

    for (const region of sheet.regions) {
      const section = canonicalPatternSection(region.kind);
      if (!section) continue;

      for (const track of sheet.tracks) {
        const instrumentId = track.instrumentId;
        if (!instrumentId) continue;
        if (region.activeInstrumentIds && !region.activeInstrumentIds.includes(instrumentId)) continue;
        const patternKinds = new Set(instrumentPatternKinds(instrumentId));
        const roleAlias = track.role === 'voice' ? 'lead' : track.role;
        const available = allowed.map(id => PATTERNS_BY_ID[id]).filter(pattern => {
          if (!pattern || pattern.enabled === false
            || pattern.sourceLevel !== 'style-authored'
            || pattern.provenance?.startsWith('Generic phrase-close')
            || pattern.provenance?.startsWith('Recomposition of')
) return false;
          const roleMatch = pattern.roles.includes(track.role) || pattern.roles.includes(roleAlias)
            || pattern.compatibleRoles?.includes(track.role) || pattern.compatibleRoles?.includes(roleAlias)
            || pattern.canCrossRole === true;
          const targets = [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])].map(String);
          const instrumentMatch = !targets.length || targets.some(target => patternKinds.has(target));
          const sectionMatch = pattern.sectionUsage?.some(value => canonicalPatternSection(value) === section);
          return roleMatch && instrumentMatch && sectionMatch;
        });
        if (!available.length) continue;

        sectionSpecificCells++;
        const selectedId = sheet.arrangement[region.id]?.[track.id];
        const selected = selectedId && selectedId !== 'silent' ? PATTERNS_BY_ID[selectedId] : undefined;
        assert.ok(selected?.sectionUsage?.some(value => canonicalPatternSection(value) === section),
          `${style.id}/${region.kind}/${track.instrumentId} should use its authored section-specific part`);
        assert.ok(allowed.includes(selectedId!),
          `${style.id}/${region.kind}/${track.instrumentId} should stay inside its selected style's pattern set`);
      }
    }
  }

  assert.ok(sectionSpecificCells > 0, 'the audit exercises section-specific cells in the catalog');
});

test('a returning starter section develops with a second full cell when the style authors one', () => {
  const sheet = makeSheet({ genreId: 'country', styleId: 'country-bluegrass' });
  const verses = sheet.regions.filter(region => region.kind === 'verse');
  const banjo = sheet.tracks.find(track => track.instrumentId === 'banjo');
  assert.ok(verses.length >= 2 && banjo);

  const firstId = sheet.arrangement[verses[0].id]?.[banjo.id];
  const returnId = sheet.arrangement[verses[1].id]?.[banjo.id];
  const first = firstId && PATTERNS_BY_ID[firstId];
  const returned = returnId && PATTERNS_BY_ID[returnId];
  const allowed = new Set(resolveStyle({ genreId: 'country', styleId: 'country-bluegrass' }).patterns?.allowed ?? []);

  assert.notEqual(returnId, firstId, 'the second verse should use an authored banjo phrase instead of copying the opening');
  assert.ok(first && returned && allowed.has(first.id) && allowed.has(returned.id));
  assert.equal(first.sourceLevel, 'style-authored');
  assert.equal(returned.sourceLevel, 'style-authored');
  assert.equal(first.category, returned.category, 'the phrase change keeps the banjo part function');
});

test('a missing authored pattern fails rebuild instead of becoming a silent bar', () => {
  const sheet = makeSheet({ genreId: 'tango', styleId: 'tango-golden-age' });
  const region = sheet.regions[0];
  const track = sheet.tracks[0];
  const arrangement = {
    ...sheet.arrangement,
    [region.id]: { ...sheet.arrangement[region.id], [track.id]: 'missing-authored-pattern' },
  };
  assert.throws(
    () => rebuild({ ...sheet, arrangement }),
    /Unknown authored pattern missing-authored-pattern/,
  );
});

