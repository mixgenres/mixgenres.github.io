import assert from 'node:assert/strict';
import { INSTRUMENTS_BY_ID } from '../src/data/instruments';
import { GENRE_CONTRACTS } from '../src/data/styles/contracts';
import { resolveTrackSound, resolveTrackGain } from '../src/engine/playback/trackSound';
import { resolveVoiceParameters } from '../src/engine/playback/instrumentRegistry';
import { getGenreDialect } from '../src/engine/band/instrumentGenreDialect';
import { mergeDialectMetadata } from '../src/engine/style/contracts';
import { resolveRenderGesture } from '../src/engine/playback/renderGesture';
import { codeForGesture } from '../src/engine/band/gestures';
import { getRoleGainLinear } from '../src/engine/studio/mixer';

const before = JSON.stringify(INSTRUMENTS_BY_ID);
let combinations = 0;
for (const genre of Object.keys(GENRE_CONTRACTS)) {
  assert.equal(getGenreDialect({ genreId: genre, dialect: `flute:${genre}` }).id, genre === 'r-and-b' ? 'rnb' : genre);
  for (const def of Object.values(INSTRUMENTS_BY_ID)) {
    const params = resolveTrackSound(def.id, genre, '', 'lead');
    assert.deepEqual(resolveTrackSound(def.id, genre, '', 'lead'), params, 'resolution must not accumulate multipliers');
    assert.equal(params.model, def.elementaryModel, 'genre production must preserve the physical model');
    assert.equal(params.roleGain, getRoleGainLinear('lead', genre, def.id));
    const resolved = resolveVoiceParameters({ id: 'note', note: 60, velocity: .7, gate: 1 }, params);
    for (const value of [params.brightness, params.body, params.decay, resolved.attack, resolved.release, resolved.sustain, resolved.envDecay]) assert.ok(Number.isFinite(value), `${genre}/${def.id}`);
    assert.equal(resolved.isDecayingInstrument, ['decaying', 'short', 'percussive'].includes(def.acousticProfile!.sustain));
    const explicit = resolveVoiceParameters({ id: 'note', note: 60, velocity: .7, gate: 1, attack: .12, decay: .23, sustain: .34, release: .45 }, params);
    assert.deepEqual([explicit.attack, explicit.envDecay, explicit.sustain, explicit.release], [.12, .23, .34, .45]);
    combinations++;
  }
}
assert.equal(JSON.stringify(INSTRUMENTS_BY_ID), before, 'resolution must never mutate authored metadata');
assert.equal(resolveRenderGesture('violin', codeForGesture('fingerstyle')).excitationOverride, 'bow');
assert.equal(resolveRenderGesture('violin', codeForGesture('pizzicato')).excitationOverride, 'fingerpad');
const inherited = { brightnessMultiplier: 1.1, roleVariants: { lead: { decayMultiplier: .8, bodyMultiplier: 1.2 } }, allowedTechniques: ['arco', 'pizzicato'] };
const patched = mergeDialectMetadata(inherited, { roleVariants: { lead: { decayMultiplier: .7 } } } as Partial<typeof inherited>);
assert.equal(patched.roleVariants.lead.bodyMultiplier, 1.2);
assert.equal(patched.roleVariants.lead.decayMultiplier, .7);
assert.deepEqual(patched.allowedTechniques, inherited.allowedTechniques);
console.log(`Sound metadata checks passed: ${combinations} genre/instrument combinations, assigned roles, stable resolution, sustain, explicit envelopes, excitation and partial metadata inheritance.`);

const gainParams = resolveTrackSound('violin', 'tango', '', 'lead');
assert.equal(resolveTrackGain(gainParams, 0), 0, 'zero user volume must survive note-on');
assert.equal(resolveTrackGain(gainParams, .5, .8, .7), resolveTrackGain(gainParams) * .5 * .8 * .7);

const { getEffectiveBpm } = await import('../src/engine/sheet/sheet');
const tempo = { bpm: 100, tempoShift: 'pushed', regions: [{ id: 'part', bpm: 120 }] } as any;
assert.equal(getEffectiveBpm(tempo, 'part').bpm, 130, 'custom part BPM still inherits the displayed song feel');
assert.equal(getEffectiveBpm(tempo, 'part').feel.id, 'pushed');
