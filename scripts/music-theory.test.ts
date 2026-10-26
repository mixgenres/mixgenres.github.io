import test from 'node:test';
import assert from 'node:assert/strict';
import { parseChord, validateChordSymbol } from '../src/engine/sheet/musicTheory';
import { grooveFor, swingOffsetBeats } from '../src/engine/band/groove';

test('added tones do not acquire unrequested sevenths or extensions', () => {
  for (const [symbol, intervals] of [
    ['Cadd2', [0, 2, 4, 7]], ['Cadd4', [0, 4, 5, 7]],
    ['Cadd9', [0, 4, 7, 14]], ['Cadd11', [0, 4, 7, 17]],
    ['Cadd13', [0, 4, 7, 21]], ['Cadd#11', [0, 4, 7, 18]],
    ['CADD9', [0, 4, 7, 14]],
    ['Cmaddb9', [0, 3, 7, 13]], ['C6/9', [0, 4, 7, 9, 14]],
    ['C7#11', [0, 4, 7, 10, 18]], ['C7b13', [0, 4, 7, 10, 20]],
    ['C9#11', [0, 4, 7, 10, 14, 18]],
  ] as const) {
    assert.equal(validateChordSymbol(symbol).valid, true, symbol);
    assert.deepEqual(parseChord(symbol).intervals, intervals, symbol);
  }
});

test('accepted quality aliases keep their chord identity and omitted thirds stay absent', () => {
  for (const [symbol, canonical] of [
    ['Cmajor7', 'Cmaj7'], ['Cminor9', 'Cm9'], ['Cmin7', 'Cm7'],
    ['C+7', 'Caug7'], ['CmMaj7', 'Cmmaj7'], ['Cø', 'Cm7b5'],
  ]) {
    assert.deepEqual(parseChord(symbol).intervals, parseChord(canonical).intervals, symbol);
    assert.equal(parseChord(symbol).quality, parseChord(canonical).quality, symbol);
  }
  assert.deepEqual(parseChord('C+7').intervals, [0, 4, 8, 10]);
  assert.deepEqual(parseChord('C7(no3)').intervals, [0, 7, 10]);
  assert.deepEqual(parseChord('C7(no3)').guideTones, [10]);
  assert.equal(parseChord('C7(no3)/E').bassPc, 4);
});

test('eighth swing carries both interior sixteenths while tuplets keep their written positions', () => {
  const groove = { ...grooveFor('jazz'), swing: 2 / 3, swingUnit: 8 as const };
  const played = [0, .25, .5, .75, 1].map(beat => beat + swingOffsetBeats(beat, groove));
  [0, 1 / 3, 2 / 3, 5 / 6, 1].forEach((expected, i) => assert.ok(Math.abs(played[i] - expected) < 1e-9));
  for (const beat of [1 / 3, 2 / 3]) assert.equal(swingOffsetBeats(beat, groove), 0);
  for (const beat of [0, .25, .5, .75]) assert.equal(swingOffsetBeats(beat, { ...groove, swing: .5 }), 0);
  [0, .25, .5, .75].forEach((beat, i) => assert.ok(Math.abs(
    swingOffsetBeats(beat, { ...groove, swingUnit: 16 }) - (i % 2 ? 1 / 12 : 0)) < 1e-9));
});
