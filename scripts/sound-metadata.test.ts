import { makeSheet } from '../src/engine/sheet/sheet';
import assert from 'node:assert/strict';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { GENRE_CONTRACTS } from '../src/data/styles/contracts';
import { resolveTrackSound, resolveTrackGain } from '../src/engine/playback/trackSound';
import { getGenreDialect } from '../src/engine/band/instrumentGenreDialect';
import { mergeDialectMetadata } from '../src/engine/style/contracts';
import { resolveSampleGesture } from '../src/engine/playback/soundfont/gestures';
import { codeForGesture } from '../src/engine/band/gestures';
import { getRoleGainLinear } from '../src/engine/studio/mixer';
import { patchForInstrument } from '../src/engine/playback/soundfont/presets';

const before = JSON.stringify(INSTRUMENTS_BY_ID);
let combinations = 0;
for (const genre of Object.keys(GENRE_CONTRACTS)) {
  const canonicalGenre = genre === 'r-and-b' ? 'rnb' : genre === 'punk' ? 'punk-hardcore' : genre;
  assert.equal(getGenreDialect({ genreId: genre, dialect: `flute:${genre}` }).id, canonicalGenre);
  for (const def of Object.values(INSTRUMENTS_BY_ID)) {
    const params = resolveTrackSound(def.id, genre, '', 'lead');
    assert.deepEqual(resolveTrackSound(def.id, genre, '', 'lead'), params, 'resolution must not accumulate multipliers');
    assert.equal(params.pan >= 0 && params.pan <= 1, true);
    assert.equal(params.roleGain, getRoleGainLinear('lead', genre, def.id));
    for (const value of [params.pan, params.drive, params.mute, params.roleGain]) assert.ok(Number.isFinite(value), `${genre}/${def.id}`);
    const preset = patchForInstrument(def.id, !!def.kit || !!def.drum || def.voicing === 'unpitched');
    assert.ok(preset.pack && Number.isInteger(preset.bank) && Number.isInteger(preset.program), `${genre}/${def.id} SoundFont assignment`);
    combinations++;
  }
}
assert.equal(JSON.stringify(INSTRUMENTS_BY_ID), before, 'resolution must never mutate authored metadata');
assert.equal(resolveSampleGesture('violin', codeForGesture('fingerstyle'), 80).action, 'arco');
assert.equal(resolveSampleGesture('violin', codeForGesture('pizzicato'), 80).action, 'pluck');
const inherited = { brightnessMultiplier: 1.1, roleVariants: { lead: { decayMultiplier: .8, bodyMultiplier: 1.2 } }, allowedTechniques: ['arco', 'pizzicato'] };
const patched = mergeDialectMetadata(inherited, { roleVariants: { lead: { decayMultiplier: .7 } } } as Partial<typeof inherited>);
assert.equal(patched.roleVariants.lead.bodyMultiplier, 1.2);
assert.equal(patched.roleVariants.lead.decayMultiplier, .7);
assert.deepEqual(patched.allowedTechniques, inherited.allowedTechniques);
console.log(`SoundFont metadata checks passed: ${combinations} genre/instrument combinations, stable sound resolution, preset assignment and technique excitation.`);

const gainParams = resolveTrackSound('violin', 'tango', '', 'lead');
assert.equal(resolveTrackGain(gainParams, 0), 0, 'zero user volume must survive note-on');
assert.equal(resolveTrackGain(gainParams, .5, .8, .7), resolveTrackGain(gainParams) * .5 * .8 * .7);

const { getEffectiveBpm } = await import('../src/engine/sheet/sheet');
const base = makeSheet('tango');
const tempo = { ...base, bpm: 100, tempoShift: 'pushed', regions: [{ ...base.regions[0], id: 'part', bpm: 120 }] };
assert.equal(getEffectiveBpm(tempo, 'part').bpm, 130, 'custom part BPM still inherits the displayed song feel');
assert.equal(getEffectiveBpm(tempo, 'part').feel.id, 'pushed');
