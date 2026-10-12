import assert from 'node:assert/strict';
import test from 'node:test';
import { recordedGroupGainLinear } from './lib/recordedGroupGain';

test('recorded take gain levels quiet and hot groups while preserving their internal dynamics', () => {
  const softLayer = 10 ** (-30 / 20);
  const loudLayer = 10 ** (-18 / 20);
  const gain = recordedGroupGainLinear(loudLayer);
  assert.ok(gain > 1);
  assert.ok(Math.abs(20 * Math.log10(loudLayer * gain) + 10) < 1e-9);
  assert.ok(Math.abs((loudLayer * gain) / (softLayer * gain) - loudLayer / softLayer) < 1e-9);
  assert.ok(Math.abs(20 * Math.log10(recordedGroupGainLinear(softLayer)) - 18) < 1e-9,
    'very quiet source noise receives no more than the bounded lift');
  const hotPeak = 10 ** (-2 / 20);
  const trim = recordedGroupGainLinear(hotPeak);
  assert.ok(trim < 1);
  assert.ok(Math.abs(20 * Math.log10(hotPeak * trim) + 10) < 1e-9,
    'hotter groups receive the same source target as quiet groups');
});
