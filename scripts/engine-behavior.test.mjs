import test from 'node:test';
import assert from 'node:assert/strict';
import { velocityForEnergy } from '../src/engine/band/velocity.ts';
import { spotlightGain } from '../src/engine/band/spotlight.ts';

test('energy 1 to 5 has a strong dynamic span and clamps', () => {
  const table = [1, 2, 3, 4, 5].map(level => velocityForEnergy(level / 5, 1, 1.18));
  assert.equal(table[0], 72);
  assert.equal(table[4], 119);
  assert.ok(table[4] - table[0] >= 45);
  assert.equal(velocityForEnergy(0.2, 1, 1.18), 72);
  assert.equal(velocityForEnergy(1, 1, 1.18), 119);
});

test('spotlight changes melodic balance while keeping pulse roles stable', () => {
  assert.equal(spotlightGain('lead', 'on', true), 1.18);
  assert.equal(spotlightGain('comp', 'off', true), 0.78);
  assert.equal(spotlightGain('lead', 'auto', true), 0.78);
  assert.equal(spotlightGain('lead', undefined, true), 0.78);
  assert.equal(spotlightGain('percussion', 'off', true), 1);
  assert.equal(spotlightGain('lead', 'off', false), 1);
});
