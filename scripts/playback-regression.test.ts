import test from 'node:test';
import assert from 'node:assert/strict';
import { el } from '@elemaudio/core';
import { createOfflineRenderer, finishOfflineRender, offlineRendererStats } from '../src/engine/playback/offlineRenderer';

// Exercise the actual dependency through its public interface, including a
// topology change and keyed property reconciliation between processing spans.
test('public renderer reconciles keyed controls and clears prior DSP graphs', async () => {
  const renderer = await createOfflineRenderer();
  try {
    await renderer.render(el.const({ key: 'level', value: .25 }), 0);
    const left = new Float32Array(2048), right = new Float32Array(2048);
    renderer.process([], [left, right]);
    assert.equal(left.at(-1), .25);
    assert.equal(right.at(-1), 0);
    await renderer.render(el.const({ key: 'level', value: .75 }), 0);
    renderer.process([], [left, right]);
    assert.equal(left.at(-1), .75);
    await renderer.render(el.cycle(220), el.cycle(330));
    renderer.process([], [left, right]);
    assert.ok(left.some(sample => Math.abs(sample) > .1));
    assert.ok(right.some(sample => Math.abs(sample) > .1));
  } finally { await finishOfflineRender(renderer); }
  assert.equal(offlineRendererStats().activeRenders, 0);
  const fresh = await createOfflineRenderer();
  try {
    await fresh.render(0, 0);
    const left = new Float32Array(2048), right = new Float32Array(2048);
    fresh.process([], [left, right]);
    assert.ok(left.every(sample => sample === 0));
    assert.ok(right.every(sample => sample === 0));
  } finally { await finishOfflineRender(fresh); }
});
