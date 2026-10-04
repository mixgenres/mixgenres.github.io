import test from 'node:test';
import assert from 'node:assert/strict';
import { makeSheet } from '../src/engine/sheet/sheet';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';
import { styleTheoryFor } from '../src/engine/lookup/theory';
import { createPhraseState, realizeMidi, type PhraseContext } from '../src/engine/band/phrasePerformance';
import { GESTURE_NAMES } from '../src/engine/band/gestures';
import { PATTERNS_BY_ID } from '../src/data/genres';
import { sliceBarNative } from '../src/engine/sheet/grid';
import { resolveVoiceParameters, getInstrumentModule } from '../src/engine/playback/instrumentRegistry';
import { resolveTrackSound } from '../src/engine/playback/trackSound';
import { ALL_STYLES } from '../src/engine/style';
import { BANDONEON_142_BUTTONS } from '../src/engine/band/fingering/bandoneon';

test('silent arrangement parts never acquire fallback attacks', () => {
  const sheet = makeSheet('tango');
  const track = sheet.tracks[0];
  const region = sheet.regions[1];
  sheet.arrangement[region.id][track.id] = 'silent';
  assert.ok(!compileWholeSong(sheet).notes.some(n => n.trackId === track.id && n.bar >= region.start && n.bar < region.end));
});

test('authored tango phrases keep their articulations and fractional note lengths', () => {
  const sheet = makeSheet('tango', 'tango-golden-age');
  const perf = compileWholeSong(sheet);
  for (const track of sheet.tracks) {
    for (const bar of perf.bars) {
      const detail = sheet.measures[bar.index].patternDetailsByTrack?.[track.id];
      const native = detail?.perf as ReturnType<typeof sliceBarNative> | undefined;
      const notes = perf.notes.filter(n => n.trackId === track.id && n.bar === bar.index && n.originCode === 0);
      if (!native || !notes.length) continue;
      for (const note of notes) {
        const index = Number(note.attackId!.split(':').at(-1));
        assert.equal(GESTURE_NAMES[note.gestureCode], native.articulations[index]);
        const expected = native.durations[index] / native.stepsPerBar * bar.beatsPerBar * 60 / bar.bpm;
        assert.ok(Math.abs(note.dur - expected) < .002, `${track.instrumentId}/${bar.index}: ${note.dur} vs ${expected}`);
      }
    }
  }
});

test('multi-bar pitch, microtiming and fine duration data survive slicing', () => {
  const sliced = sliceBarNative([0, 16, 19], [1, .7, .8], undefined, [.4, .72, 1.4], [0, .02, -.01], undefined, 32, 2, 1,
    ['marcato','legato','staccato'], [0, 16, 19], [{ degree: 1 }, { degree: 3 }, { degree: 5 }]);
  assert.deepEqual(sliced.onsets, [0, 3]);
  assert.deepEqual(sliced.pitches, [{ degree: 3 }, { degree: 5 }]);
  assert.deepEqual(sliced.durations, [.72, 1.4]);
  assert.deepEqual(sliced.microtiming, [.02, -.01]);
});

test('functional harmony uses the chord quality, and keyboard phrasing has no bellows', () => {
  for (const [chord, pc] of [['C', 4], ['Cm', 3], ['C7', 4]] as const) {
    const ctx = { authoredPitch: { degree: 3, register: 65 }, profile: getInstrumentPerformanceProfile('bandoneon'),
      chord, hybridTheory: styleTheoryFor('tango-golden-age', 'tango') } as PhraseContext;
    assert.equal(realizeMidi(ctx, 0, 1, createPhraseState())[0] % 12, pc, chord);
  }
  assert.equal(getInstrumentPerformanceProfile('piano').family, 'keyboard');
  assert.equal(styleTheoryFor('tango-golden-age', 'tango').bass.style, 'rootFifth');
});

test('authored descending motifs resolve downward instead of wrapping upward', () => {
  const ctx = { profile: getInstrumentPerformanceProfile('bandoneon'), chord: 'Am', hybridTheory: styleTheoryFor('tango-golden-age', 'tango') } as PhraseContext;
  const line = [5, 3, 2, 1].map(degree => realizeMidi({ ...ctx, authoredPitch: { degree, register: 65 } }, 0, 1, createPhraseState())[0]);
  assert.ok(line.every((midi, i) => !i || midi < line[i - 1]), String(line));
});

test('tango variants use their actual meters and accompaniment cells', () => {
  const cells = (style: string) => {
    const sheet = makeSheet('tango', `tango-${style}`);
    return Object.values(sheet.arrangement).flatMap(parts => Object.values(parts)).map(id => PATTERNS_BY_ID[id]).filter(Boolean);
  };
  assert.ok(cells('pugliese').some(p => p.name.includes('Yumba') && p.events?.filter(e => e.articulation === 'yumba').map(e => e.position).join(',') === '0,2'));
  assert.ok(cells('milonga').some(p => p.name.includes('Habanera') && p.events?.map(e => e.position).join(',') === '0,0.75,1,1.5'));
  const vals = makeSheet('tango', 'tango-vals');
  assert.equal(vals.timeSignature, '3/4');
  assert.ok(cells('piazzolla-nuevo-tango').some(p => p.name.includes('3+3+2')));
});

test('source-changing techniques do not alias a different excitation', () => {
  const params = resolveTrackSound('upright-bass', 'tango');
  assert.equal(resolveVoiceParameters({ id: 'v', note: 40, velocity: .8, gate: 1, action: 'arco' }, params).isDecayingInstrument, false);
  assert.equal(resolveVoiceParameters({ id: 'v', note: 40, velocity: .8, gate: 1, action: 'pizzicato' }, params).isDecayingInstrument, true);
  assert.equal(getInstrumentModule('celeste').id, 'marimba');
  assert.equal(getInstrumentModule('music-box').id, 'marimba');
});

test('every tango bandoneon button agrees with the sounding pitch and bellows direction', () => {
  for (const style of ALL_STYLES.filter(s => s.primaryGenre === 'tango')) {
    const sheet = makeSheet('tango', style.id), perf = compileWholeSong(sheet);
    const trackIds = new Set(sheet.tracks.filter(t => t.instrumentId === 'bandoneon').map(t => t.id));
    for (const note of perf.notes.filter(n => trackIds.has(n.trackId))) {
      const button = BANDONEON_142_BUTTONS[note.bandoneonButtonIndex!];
      assert.ok(button, `${style.id}/${note.midi}: no playable button`);
      assert.equal(note.midi, note.bellowsDirectionCode === 1 ? button.open : button.close, `${style.id}/${note.midi}/${button.id}`);
    }
  }
});
