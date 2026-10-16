import test from 'node:test';
import assert from 'node:assert/strict';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { INSTRUMENT_CATALOG, WORLD_INSTRUMENT_HINTS } from '../src/data/instruments';
import { instrumentPatternKinds } from '../src/engine/lookup/instruments';
import type { MusicalPattern } from '../src/data/schema';
import { resolveStyle, getCanonicalStyle } from '../src/engine/style';
import {
  addRandomInstrument, makeSheet, randomInstrumentCandidates, switchSectionWorld,
  randomizeInstruments,
} from '../src/engine/sheet/sheet';

test('random instrument suggestions stay inside each style’s authored instrument vocabulary', () => {
  const foreignChoices: Record<string, string[]> = {
    afrobeat: ['charango'],
    tango: ['resonator-guitar'],
    country: ['cuatro'],
    classical: ['low-whistle'],
    ethiopian: ['guitarron'],
    brazilian: ['bouzouki'],
    qawwali: ['dikanza'],
    salsa: ['guembri'],
  };

  for (const [genreId, forbidden] of Object.entries(foreignChoices)) {
    const style = getCanonicalStyle(genreId);
    const styleId = style.id!;
    const sheet = makeSheet({ genreId, styleId });
    const suggestions = randomInstrumentCandidates(sheet);
    for (const instrumentId of forbidden) {
      assert.equal(suggestions.includes(instrumentId), false,
        `${genreId}/${style.id} must not suggest the unrelated ${instrumentId}`);
    }

    const added = addRandomInstrument(sheet);
    const newTrack = added.tracks.find(track => !sheet.tracks.some(current => current.instrumentId === track.instrumentId));
    if (newTrack) {
      const instrumentId = newTrack.instrumentId;
      if (!instrumentId) throw new Error(`${genreId} added a track without an instrument ID`);
      assert.ok(suggestions.includes(instrumentId), `${genreId} adds only an offered instrument`);
      for (const region of added.regions) {
        const patternId: string | undefined = added.arrangement[region.id]?.[newTrack.id];
        if (!patternId || patternId === 'silent') continue;
        const pattern: MusicalPattern | undefined = PATTERNS_BY_ID[patternId];
        if (!pattern) throw new Error(`${genreId}/${newTrack.instrumentId} references missing pattern ${patternId}`);
        assert.equal(pattern.worldId, genreId, `${genreId}/${newTrack.instrumentId} does not cross into another genre`);
        assert.ok(resolveStyle({ genreId, styleId }).patterns?.allowed?.includes(patternId),
          `${genreId}/${newTrack.instrumentId} uses an allowed style pattern`);
      }
    } else {
      assert.equal(added, sheet, `${genreId} with no native addition remains unchanged`);
    }
  }
});

test('Afrobeats does not offer a log drum as percussion when its authored cells assign it bass', () => {
  const styles = [
    'afrobeats-contemporary-afrobeats',
    'afrobeats-afropop',
    'afrobeats-afrofusion',
    'afrobeats-randb-afrobeats',
  ];
  for (const styleId of styles) {
    const sheet = makeSheet({ genreId: 'afrobeats', styleId });
    assert.equal(randomInstrumentCandidates(sheet).includes('log-drum'), false,
      `${styleId} must not infer a percussion role from the log drum's bass pattern alias`);
  }
});

test('section additions rank against the selected section genre in a mixed song', () => {
  const brazilian = makeSheet({ genreId: 'brazilian', styleId: 'brazilian-samba' });
  const region = brazilian.regions.find(candidate => candidate.kind === 'verse') ?? brazilian.regions[0];
  const mixed = switchSectionWorld(brazilian, region.id, 'ethiopian', 'ethiopian-ethio-jazz');
  const style = resolveStyle({ genreId: 'ethiopian', styleId: 'ethiopian-ethio-jazz' });
  const palette = new Set(style.sound.instrumentPalette.map(item => item.value));
  const hints = new Set(WORLD_INSTRUMENT_HINTS.ethiopian ?? []);
  const exactTargets = new Set((style.patterns?.allowed ?? []).flatMap(id => {
    const pattern = PATTERNS_BY_ID[id];
    return pattern ? [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])] : [];
  }));
  const suggestions = randomInstrumentCandidates(mixed, region.id, 'section');
  assert.ok(suggestions.length > 0, 'the switched section has available Ethiopian instruments');
  for (const id of suggestions) {
    assert.ok(palette.has(id) || hints.has(id) || exactTargets.has(id),
      `${id} is authored for Ethiopian style rather than inherited from Brazilian`);
  }

  const added = addRandomInstrument(mixed, region.id, 'section');
  const newTrack = added.tracks.find(track => !mixed.tracks.some(current => current.instrumentId === track.instrumentId));
  assert(newTrack, 'an Ethiopian part is added to the selected section');
  const patternId = added.arrangement[region.id]?.[newTrack.id];
  assert(patternId && patternId !== 'silent');
  const pattern = PATTERNS_BY_ID[patternId];
  assert.equal(pattern?.worldId, 'ethiopian');
  assert.ok(pattern?.styleIds?.includes('ethiopian-ethio-jazz'));
});

test('song-wide random additions must be supported by every section style', () => {
  const base = makeSheet({ genreId: 'brazilian', styleId: 'brazilian-samba' });
  const region = base.regions.find(candidate => candidate.kind === 'verse') ?? base.regions[0];
  const mixed = switchSectionWorld(base, region.id, 'ethiopian', 'ethiopian-ethio-jazz');
  const suggestions = randomInstrumentCandidates(mixed, region.id, 'song');

  for (const id of suggestions) {
    assert.ok(mixed.regions.every(section => {
      const genreId = section.genre ?? mixed.worldId;
      const styleId = section.styleId ?? (genreId === mixed.worldId ? mixed.styleId : undefined) ?? getCanonicalStyle(genreId).id;
      const style = resolveStyle({ genreId, styleId });
      const kinds = new Set(INSTRUMENT_CATALOG.find(instrument => instrument.id === id) ? [id] : []);
      return kinds.size > 0 && style.sound.instrumentPalette.some(item => item.value === id)
        || kinds.size > 0 && style.patterns?.allowed?.some(patternId => {
          const pattern = PATTERNS_BY_ID[patternId];
          return pattern && [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])].includes(id);
        });
    }), `${id} is supported by each section's own style`);
  }
  const added = addRandomInstrument(mixed, region.id, 'song');
  if (!suggestions.length) assert.equal(added, mixed, 'no cross-style fallback is inserted when there is no shared part');
  else assert.equal(added.tracks.length, mixed.tracks.length + 1);
});

test('instrument randomization preserves a style role when no distinct authored patch exists', () => {
  const sheet = makeSheet({ genreId: 'ambient', styleId: 'ambient-drone' });
  const before = sheet.tracks.map(track => ({ instrumentId: track.instrumentId, role: track.role }));
  const randomized = randomizeInstruments(sheet);
  assert.deepEqual(randomized.tracks.map(track => ({ instrumentId: track.instrumentId, role: track.role })), before,
    'randomization keeps the authored drone and texture jobs instead of borrowing a foreign patch');
});

test('randomized parts never receive an unrelated role or instrument pattern', () => {
  for (const genreId of ['brazilian', 'tango', 'country', 'afrobeat', 'ethiopian']) {
    const sheet = makeSheet(genreId);
    const randomized = randomizeInstruments(sheet);
    for (const region of randomized.regions) {
      const sectionGenre = region.genre ?? randomized.worldId;
      for (const track of randomized.tracks) {
        const patternId = randomized.arrangement[region.id]?.[track.id];
        if (!patternId || patternId === 'silent') continue;
        const pattern = PATTERNS_BY_ID[patternId];
        if (!pattern) throw new Error(`${genreId}/${track.instrumentId} references missing pattern ${patternId}`);
        assert.equal(pattern.worldId, sectionGenre,
          `${genreId}/${track.instrumentId} stays in ${sectionGenre}'s pattern vocabulary`);
        assert.ok(pattern.roles.includes(track.role) || pattern.compatibleRoles?.includes(track.role) || pattern.canCrossRole,
          `${genreId}/${track.instrumentId} keeps its ${track.role} part role`);
        const targets = [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])];
        if (!track.instrumentId) throw new Error(`${genreId}/${track.id} has no instrument identity`);
        const kinds = new Set(instrumentPatternKinds(track.instrumentId));
        assert.ok(!targets.length || targets.some(target => kinds.has(String(target))),
          `${genreId}/${track.instrumentId} matches ${pattern.name}'s instrument targets`);
      }
    }
  }
});
