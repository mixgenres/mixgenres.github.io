import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveDialect } from '../src/engine/band/genreDialect';

test('style dialect vocabulary stays inside physical instrument capabilities', () => {
  const flamencoGuitar = resolveDialect('guitar', 'flamenco');
  const piano = resolveDialect('piano', 'flamenco');
  assert.ok(flamencoGuitar?.allowedTechniques.includes('rasgueado'));
  assert.ok(flamencoGuitar?.allowedTechniques.includes('golpe'));
  assert.equal(piano?.allowedTechniques.includes('rasgueado'), false);
  for (const genre of ['tango', 'kizomba', 'metal', 'jazz']) {
    const dialect = resolveDialect('guitar', genre);
    assert.ok(dialect, `${genre} guitar has a resolved dialect`);
    assert.ok(Array.isArray(dialect.allowedTechniques), `${genre} guitar dialect keeps technique capabilities`);
  }
});
