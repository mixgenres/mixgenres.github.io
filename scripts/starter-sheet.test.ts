import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet, makeStarterSheet, switchSongWorld } from '../src/engine/sheet/sheet';
import { GENRE_WORLDS } from '../src/data/genres';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { ALL_STYLES, resolveStyle } from '../src/engine/style';

test('every style starter exposes eight distinct instruments', () => {
  for (const style of ALL_STYLES) {
    const starter = makeStarterSheet({ genreId: style.primaryGenre, styleId: style.id });
    assert.equal(starter.tracks.length, 8, `${style.id} starter has eight tracks`);
    assert.equal(new Set(starter.tracks.map(track => track.instrumentId)).size, 8,
      `${style.id} starter has eight distinct instruments`);
    for (const track of starter.tracks) {
      assert.ok(starter.regions.some(region => starter.arrangement[region.id]?.[track.id]
        && starter.arrangement[region.id][track.id] !== 'silent'),
      `${style.id}/${track.instrumentId} enters at least one section`);
    }
  }
});

test('new starters retain the style-authored ensemble and only add audible, genre-native parts', () => {
  for (const [genreId, styleId] of [
    ['tango', 'tango-golden-age'],
    ['latin', 'latin-tropical'],
  ]) {
    const original = makeSheet({ genreId, styleId });
    const starter = makeStarterSheet({ genreId, styleId });
    const originalIds = new Set(original.tracks.map(track => track.instrumentId));
    const allowed = new Set(resolveStyle({ genreId, styleId }).patterns?.allowed ?? []);
    assert.ok(starter.tracks.length <= 8,
      `${styleId} should stay within the requested eight-track starter size`);
    if (styleId === 'latin-tropical') {
      assert.equal(starter.tracks.length, 8,
        'a style with authored active variation parts expands its seven-part ensemble to eight');
    }

    for (const track of starter.tracks) {
      if (originalIds.has(track.instrumentId)) continue;
      assert.ok(starter.regions.some(region => starter.arrangement[region.id]?.[track.id]
        && starter.arrangement[region.id][track.id] !== 'silent'),
      `${styleId}/${track.instrumentId} must enter at least one section`);
    }

    for (const region of starter.regions) {
      for (const track of starter.tracks) {
        const patternId = starter.arrangement[region.id]?.[track.id];
        if (!patternId || patternId === 'silent') continue;
        const pattern = PATTERNS_BY_ID[patternId];
        assert(pattern, `${styleId}/${track.instrumentId} references a catalog pattern`);
        assert.equal(pattern.worldId, region.genre ?? genreId,
          `${styleId}/${track.instrumentId} keeps its section's genre vocabulary`);
        if (!originalIds.has(track.instrumentId)) {
          assert.ok(pattern.styleIds?.includes(styleId) && allowed.has(pattern.id),
            `${styleId}/${track.instrumentId} uses an authorized style-authored part`);
        }
      }
    }
  }
});

test('traditional starter additions stay inside the style-native acoustic palette', () => {
  for (const [genreId, styleId] of [
    ['tango', 'tango-golden-age'],
    ['tango', 'tango-pugliese'],
    ['flamenco', 'flamenco-solea'],
    ['flamenco', 'flamenco-seguiriya'],
  ] as const) {
    const starter = makeStarterSheet({ genreId, styleId });
    const authored = new Set(resolveStyle({ genreId, styleId }).arrangement.ensemble.flatMap(part => part.instrumentIds));
    const additions = starter.tracks.map(track => track.instrumentId)
      .filter((id): id is string => !!id && !authored.has(id));
    assert.ok(additions.length > 0, `${styleId} should expose authored support colors`);
    assert.ok(additions.every(id => !['synth', 'sampler', 'drums'].includes(id)),
      `${styleId} should not reach eight by adding generic electronic or drum-kit parts`);
  }
});

test('whole-song genre changes retain the eight-part teaching roster', () => {
  const original = makeStarterSheet({ genreId: 'tango', styleId: 'tango-golden-age' });
  for (const world of GENRE_WORLDS) {
    const changed = switchSongWorld(original, world.id);
    const instruments = new Set(changed.tracks.map(track => track.instrumentId));
    assert.equal(instruments.size, 8, `${world.id} genre switch keeps eight distinct instruments`);
    assert.ok(changed.tracks.every(track => changed.regions.some(region =>
      region.activeInstrumentIds?.includes(track.instrumentId ?? '')
      && changed.arrangement[region.id]?.[track.id]
      && changed.arrangement[region.id][track.id] !== 'silent')),
    `${world.id} genre switch keeps every roster part audible in at least one section`);
  }
});
