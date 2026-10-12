import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_PATTERNS } from '../src/data/genres';
import { instrumentPatternKinds } from '../src/engine/lookup/instruments';
import { patternsForPickerVoice } from '../src/engine/sheet/patternPicker';

test('instrument picker narrows the global catalog to playable instrument and role matches', () => {
  const enabled = ALL_PATTERNS.filter(pattern => pattern.enabled !== false);
  const kinds = new Set(instrumentPatternKinds('flute'));
  const candidates = patternsForPickerVoice(enabled, 'flute', 'lead');
  assert.ok(candidates.length > 0);
  assert.ok(candidates.length < enabled.length / 10, 'instrument-specific picking should not render the global catalog');
  assert.ok(candidates.every(pattern => {
    const instruments = [...(pattern.instruments ?? []), ...(pattern.compatibleInstruments ?? [])].map(String);
    const roles = [...pattern.roles, ...(pattern.compatibleRoles ?? [])].map(String);
    return (!instruments.length || instruments.some(instrument => kinds.has(instrument)))
      && (roles.some(role => role === 'lead' || kinds.has(role)) || pattern.canCrossRole);
  }));
});

