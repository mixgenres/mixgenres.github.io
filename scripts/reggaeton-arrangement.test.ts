import test from 'node:test';
import assert from 'node:assert/strict';
import { PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../src/data/genres';
import { SONGS_BY_ID } from '../src/data/songs/catalog';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { parseChord } from '../src/engine/sheet/musicTheory';
import { createGenreWorld } from '../src/data/genres/_shared/genrePack';
import { GENRE_PACK } from '../src/data/genres/reggaeton/catalog';

test('new reggaeton lessons preserve the existing saved pattern identities', () => {
  const withoutAdditions = createGenreWorld({ ...GENRE_PACK, styles: GENRE_PACK.styles.map(style => ({
    ...style, cells: style.cells.filter(cell => !cell.id),
  })) });
  const currentIds = new Set(PATTERNS_BY_WORLD.reggaeton.map(pattern => pattern.id));
  for (const pattern of withoutAdditions.patterns) assert.ok(currentIds.has(pattern.id), pattern.id);
});

test('classic, underground and melodic dembow keep their syncopated snare through verse and chorus development', () => {
  for (const style of ['classic', 'playero-underground', 'melodic']) {
    const patterns = PATTERNS_BY_WORLD.reggaeton.filter(pattern => pattern.styleIds?.includes(`reggaeton-${style}`)
      && pattern.instruments?.includes('drums'));
    for (const name of [style === 'melodic' ? 'Dembow pocket' : style === 'classic' ? 'Dembow' : 'Raw dembow',
      'Dembow verse', 'Dembow lift', 'Dembow turn']) {
      const pattern = patterns.find(pattern => pattern.shortName === name);
      assert.ok(pattern, `${style} has ${name}`);
      assert.deepEqual(pattern.events!.filter(event => event.hitType === 'snare').map(event => event.position),
        [.75, 1.5, 2.75, 3.5], `${style}/${name} retains the dembow snare instead of a rock backbeat`);
      assert.ok(pattern.shortName!.split(' ').length <= 2);
    }
    const verse = patterns.find(pattern => pattern.shortName === 'Dembow verse')!;
    const chorus = patterns.find(pattern => pattern.shortName === 'Dembow lift')!;
    assert.ok(chorus.events!.length > verse.events!.length, 'the hook lifts through a fuller kit texture');
    assert.ok(chorus.events!.some(event => event.hitType === 'openHat'));
    assert.ok(chorus.events!.filter(event => event.hitType === 'openHat').every(event => event.duration === .45),
      'the open-hat lift rings toward the next closed stroke');
  }
});

test('reggaeton samples develop their personnel and melodic guitar plays individual chord tones', () => {
  for (const style of ['classic', 'melodic']) {
    const song = createCatalogSong(`reggaeton-${style}_song`);
    const verse = song.regions.find(region => region.kind === 'verse')!;
    const chorus = song.regions.find(region => region.kind === 'chorus')!;
    const bridge = song.regions.find(region => region.kind === 'bridge')!;
    const kit = song.tracks.find(track => track.instrumentId === 'drums')!;
    assert.equal(PATTERNS_BY_ID[song.arrangement[verse.id][kit.id]].shortName, 'Dembow verse');
    assert.equal(PATTERNS_BY_ID[song.arrangement[chorus.id][kit.id]].shortName, 'Dembow lift');
    assert.ok(chorus.activeInstrumentIds!.includes('sampler') && !verse.activeInstrumentIds!.includes('sampler'));
    assert.ok(!bridge.activeInstrumentIds!.includes('drums'), 'the bridge leaves room for harmonic replies');
    assert.ok(!song.regions[0].activeInstrumentIds!.includes('voice'), 'the lead enters after the opening');
    assert.ok(song.tracks.some(track => track.instrumentId === 'bass'), 'optional bass remains available to experiment');
    assert.ok(!song.regions.some(region => region.activeInstrumentIds!.includes('bass')),
      'the teaching sample does not automatically double the synth sub with electric bass');
    if (style !== 'melodic') continue;
    assert.equal(song.bpm, 96);
    assert.equal(SONGS_BY_ID[song.catalogId!].track, 'Tattoo (Remix with Camilo)');
    const guitar = song.tracks.find(track => track.instrumentId === 'guitar')!;
    assert.equal(PATTERNS_BY_ID[song.arrangement[verse.id][guitar.id]].shortName, 'Guitar arpeggio');
    assert.equal(PATTERNS_BY_ID[song.arrangement[chorus.id][guitar.id]].shortName, 'Guitar answer');
    const performance = compileWholeSong(song);
    const guitarNotes = performance.notes.filter(note => note.trackId === guitar.id);
    const attacks = new Set<string>();
    for (const note of guitarNotes) {
      assert.ok(note.attackId && !attacks.has(note.attackId), 'each arpeggio attack is a single picked note');
      attacks.add(note.attackId);
      const harmony = parseChord(note.harmonicChord!);
      assert.ok(harmony.scale.includes((note.midi - harmony.rootPc + 12) % 12),
        'picked notes follow the local chord quality');
    }
    const voice = song.tracks.find(track => track.instrumentId === 'voice')!;
    const sung = performance.notes.filter(note => note.trackId === voice.id);
    assert.ok(sung.length > 30 && sung.every(note => [9, 11, 0, 2, 4, 5, 7].includes(note.midi % 12)),
      'the minor-key vocal guide agrees with its harmonic plan');
    assert.ok(performance.notes.every(note => Number.isFinite(note.time) && note.dur > 0 && note.vel > 0));
    const plan = compileSamplePlan(performance, songMixOptions(song));
    for (const track of song.tracks.filter(track => song.regions.some(region => region.activeInstrumentIds!.includes(track.instrumentId!)))) {
      const channels = plan.tracks.find(part => part.id === track.id)!.channels;
      assert.ok(plan.events.some(event => event.type === 'on' && channels.includes(event.channel)),
        `${track.instrumentId}/${track.role} reaches the shared SoundFont plan`);
    }
  }
});
