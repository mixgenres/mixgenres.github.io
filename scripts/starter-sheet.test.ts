import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet, makeStarterSheet } from '../src/engine/sheet/sheet';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { resolveStyle } from '../src/engine/style';

test('new starters retain the style-authored ensemble and only add audible, genre-native parts', () => {
  for (const [genreId, styleId] of [
    ['tango', 'tango-golden-age'],
    ['latin', 'latin-tropical'],
  ]) {
    const original = makeSheet({ genreId, styleId });
    const starter = makeStarterSheet({ genreId, styleId });
    const originalIds = new Set(original.tracks.map(track => track.instrumentId));
    const allowed = new Set(resolveStyle({ genreId, styleId }).patterns?.allowed ?? []);
    assert.ok(starter.tracks.length <= 8 || original.tracks.length >= 8,
      `${styleId} should stay near the requested eight-track starter size`);
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
