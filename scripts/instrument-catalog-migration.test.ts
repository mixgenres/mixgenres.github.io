import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveDialect } from '../src/engine/band/genreDialect';

test('style dialect vocabulary stays inside physical instrument capabilities', () => {
  const flamencoGuitar = resolveDialect('guitar', 'flamenco');
  const piano = resolveDialect('piano', 'flamenco');
  assert.ok(flamencoGuitar?.allowedTechniques.includes('rasgueado'));
  assert.ok(flamencoGuitar?.allowedTechniques.includes('golpe'));
  assert.equal(piano?.allowedTechniques.includes('rasgueado'), false);
  assert.equal(resolveDialect('guitar', 'tango')?.variantId, 'nylon');
  assert.equal(resolveDialect('guitar', 'kizomba')?.variantId, 'nylon');
  assert.equal(resolveDialect('guitar', 'metal')?.variantId, 'solid-electric');
  assert.equal(resolveDialect('guitar', 'jazz')?.variantId, 'archtop-electric');
});

