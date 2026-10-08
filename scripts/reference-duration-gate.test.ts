import assert from 'node:assert/strict';
import test from 'node:test';
import { checkReferenceDurationCandidate } from './reference-duration-gate';

test('pre-download duration gate blocks missing metadata and long mixes', () => {
  assert.equal(checkReferenceDurationCandidate({ title: 'A song' }).allowed, false);
  assert.equal(checkReferenceDurationCandidate({ title: 'A song', durationSeconds: 0 }).allowed, false);
  assert.equal(checkReferenceDurationCandidate({ title: 'One hour music mix', durationSeconds: 3600 }).allowed, false);
  assert.equal(checkReferenceDurationCandidate({ title: 'Continuous flamenco', durationSeconds: 480 }).allowed, false);
  assert.equal(checkReferenceDurationCandidate({ title: 'Night Mix', durationSeconds: 1200, longformReason: 'single composition' }).allowed, false);
});

test('ordinary songs pass and a documented long single work can pass below one hour', () => {
  assert.equal(checkReferenceDurationCandidate({ title: 'Alegrías, Chano Lobato', durationSeconds: 490 }).allowed, true);
  assert.equal(checkReferenceDurationCandidate({ title: 'Complete single movement', durationSeconds: 1200 }).allowed, false);
  assert.equal(checkReferenceDurationCandidate({ title: 'Complete single movement', durationSeconds: 1200, longformReason: 'one uninterrupted, named composition' }).allowed, true);
  assert.equal(checkReferenceDurationCandidate({ title: 'Complete single movement', durationSeconds: 3600, longformReason: 'one uninterrupted, named composition' }).allowed, false);
});
