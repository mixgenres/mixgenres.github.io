import test from 'node:test';
import assert from 'node:assert/strict';
import { compileWholeSong } from '../src/engine/band/arrangeBand';
import { readFileSync } from 'node:fs';
import { songCatalog } from '../src/data/songs/catalog';
import { PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../src/data/genres';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { parseChord, scalePcsForMode } from '../src/engine/sheet/musicTheory';
import { styleTheoryFor } from '../src/engine/lookup/theory';
import { renderPerformanceToAudio } from '../src/engine/playback/mp3Export';
import { setSoundfontBankReader } from '../src/engine/playback/soundfont/banks';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { PersianGenre } from '../src/data/genres/persian';
import { resolveTuningSystem } from '../src/engine/sheet/tuning';
import type { Performance } from '../src/engine/band/performanceData';
import type { Sheet } from '../src/engine/sheet/sheet';

setSoundfontBankReader(async id => {
  const bytes = readFileSync(`src/assets/soundfonts/${id}.sfpack`);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
});

/** A deliberately wide-spaced sample set: chamber minimalism, thrash, bluegrass,
 * golden-age tango, Celtic dance music, deep house, and Persian chamber stress
 * very different tonal, rhythmic, ensemble, and mix paths. */
const contrastingSamples = [
  {
    id: 'classical-minimalist_song', leadInstrument: 'violin',
    maxGeneratedPhraseEntryLeap: 7,
    chords: ['C', 'F', 'G7', 'Am'], regions: ['pulse', 'additive-entry', 'phase-overlap', 'full-ensemble', 'release', 'coda'],
    instruments: ['violin', 'flute', 'string-ensemble', 'marimba', 'cello'],
    soundPacks: ['strings', 'winds', 'mallets'],
  },
  {
    id: 'metal-thrash_song', leadInstrument: 'guitar',
    maxGeneratedPhraseEntryLeap: 7,
    chordPredicate: (chord: string) => chord.endsWith('5'), minimumBpm: 180,
    regions: ['intro', 'verse', 'chorus', 'breakdown', 'solo', 'coda'],
    instruments: ['guitar', 'bass', 'drums'], soundPacks: ['electricDrive', 'bass', 'drumkit'],
  },
  {
    id: 'country-bluegrass_song', leadInstrument: 'banjo',
    maxGeneratedPhraseEntryLeap: 12,
    chords: ['Bb', 'Eb', 'F7'], regions: ['intro', 'verse', 'chorus', 'banjo-break', 'fiddle-break', 'tag'],
    instruments: ['banjo', 'mandolin', 'guitar', 'upright-bass', 'violin'],
    soundPacks: ['guitars', 'strings', 'upright'],
  },
  {
    id: 'tango-golden-age_song', leadInstrument: 'bandoneon',
    maxGeneratedPhraseEntryLeap: 7,
    chords: ['Am', 'Dm', 'E7'], regions: ['intro', 'A', 'B', 'variacion', 'cierre'],
    instruments: ['bandoneon', 'violin', 'piano', 'upright-bass'],
    soundPacks: ['bandoneon', 'strings', 'piano', 'upright'],
  },
  {
    id: 'house-deep-house_song', leadInstrument: 'synth',
    chords: ['Am7', 'Dm7', 'Em7'], minimumBpm: 110,
    durationRangeSeconds: [350, 370], maxGeneratedPhraseEntryLeap: 7,
    regions: ['intro', 'bass-entry', 'chords', 'breakdown', 'variation', 'outro'],
    instruments: ['synth', 'rhodes', 'drums', 'shaker'],
    soundPacks: ['electronic', 'keys', 'percussion'],
  },
  {
    id: 'folk-celtic_song', leadInstrument: 'violin',
    maxGeneratedPhraseEntryLeap: 7,
    chords: ['Em', 'D', 'Bm'], regions: ['intro', 'A', 'B', 'variation', 'tag'],
    instruments: ['violin', 'tin-whistle', 'guitar', 'bouzouki', 'bodhran'],
    soundPacks: ['strings', 'winds', 'guitars', 'percussion'],
  },
  {
    id: 'persian-modern-persian_song', leadInstrument: 'kamancheh',
    maxGeneratedPhraseEntryLeap: 7,
    chords: ['D5'],
    regions: ['opening', 'lament', 'dialogue', 'build', 'climax', 'release', 'dissolve'],
    instruments: ['kamancheh', 'setar', 'string-ensemble', 'cello'],
    soundPacks: ['strings', 'guitars'],
  },
  {
    id: 'bollywood-disco-bollywood_song', leadInstrument: 'voice',
    chords: ['Am', 'G', 'F', 'E7'],
    regions: ['intro', 'chorus', 'verse', 'solo', 'outro'],
    instruments: ['voice', 'guitar', 'string-ensemble', 'synth', 'bass', 'drums'],
    excludedInstruments: ['bansuri', 'tabla'],
    soundPacks: ['electronic', 'electricClean', 'strings', 'bass', 'drumkit'],
  },
  {
    id: 'bollywood-electronic-club_song', leadInstrument: 'voice',
    chords: ['Em', 'C', 'D'], minimumBpm: 120,
    regions: ['intro', 'hook', 'verse', 'chorus', 'breakdown', 'build', 'outro'],
    instruments: ['voice', 'synth', 'bass', 'drums'],
    soundPacks: ['electronic', 'bass', 'percussion'],
  },
] as const;

function leadNotes(sheet: Sheet, performance: Performance, instrumentId: string) {
  const track = sheet.tracks.find(part => part.instrumentId === instrumentId && part.role === 'lead');
  assert.ok(track, `the authored ensemble has a ${instrumentId} lead part`);
  return performance.notes.filter(note => note.trackId === track.id && !note.drum)
    .sort((a, b) => a.time - b.time || a.midi - b.midi);
}

function contour(notes: ReturnType<typeof leadNotes>): string {
  return notes.slice(1, 25).map((note, index) => {
    const interval = note.midi - notes[index].midi;
    return interval > 0 ? '+' : interval < 0 ? '-' : '0';
  }).join('');
}

test('contrasting catalog songs retain distinct tone, phrase, form, timbre and playback-mix identities', () => {
  const signatures: string[] = [];
  const contours: string[] = [];

  for (const expected of contrastingSamples) {
    const entry = songCatalog.find(song => song.id === expected.id);
    assert.ok(entry, `catalog includes ${expected.id}`);
    const sheet = createCatalogSong(expected.id);
    const performance = compileWholeSong(sheet);
    const options = songMixOptions(sheet);
    const plan = compileSamplePlan(performance, {
      ...options,
      selectedTrackIds: sheet.tracks.map(track => track.id),
    });

    const chords = new Set(sheet.measures.map(measure => measure.chord).filter((chord): chord is string => !!chord));
    if ('chords' in expected) {
      for (const chord of expected.chords) assert.ok(chords.has(chord), `${entry.styleId} retains ${chord} in its tonal language`);
    } else {
      assert.ok([...chords].some(expected.chordPredicate), `${entry.styleId} retains power-chord harmony`);
    }
    if ('minimumBpm' in expected) assert.ok(sheet.bpm >= expected.minimumBpm, `${entry.styleId} is not slowed below its authored tempo`);

    const regionKinds = sheet.regions.map(region => region.kind);
    for (const region of expected.regions) assert.ok(regionKinds.includes(region), `${entry.styleId} has its ${region} section`);
    const instruments = new Set(sheet.tracks.map(track => track.instrumentId));
    for (const instrument of expected.instruments) assert.ok(instruments.has(instrument), `${entry.styleId} includes ${instrument}`);
    if ('excludedInstruments' in expected) {
      for (const instrument of expected.excludedInstruments) {
        assert.ok(!instruments.has(instrument), `${entry.styleId} does not leak in ${instrument}`);
      }
    }
    const packs = new Set(plan.banks);
    for (const pack of expected.soundPacks) assert.ok(packs.has(pack), `${entry.styleId} resolves the ${pack} playback samples`);

    const localPatterns = (PATTERNS_BY_WORLD[entry.genreId] ?? [])
      .filter(pattern => pattern.styleIds?.includes(entry.styleId));
    for (const instrumentId of expected.instruments) {
      const partPatterns = localPatterns.filter(pattern => pattern.instruments?.includes(instrumentId));
      assert.ok(new Set(partPatterns.map(pattern => pattern.shortName).filter(Boolean)).size >= 2,
        `${entry.styleId} gives ${instrumentId} more than one clearly named playable pattern`);
      assert.ok(partPatterns.some(pattern => pattern.pedagogicalStudy === 'variation' || pattern.arrangementVariation),
        `${entry.styleId} gives ${instrumentId} a phrase-level variation study`);
    }

    assert.ok(performance.notes.length > 100, `${entry.styleId} compiles a complete ensemble performance`);
    assert.ok(performance.mixTimeline && performance.mixTimeline.scenes.length > regionKinds.length,
      `${entry.styleId} gives phrases and section changes their own evolving mix scenes`);
    assert.ok(new Set(performance.mixTimeline!.scenes.map(scene => scene.energy)).size > 1,
      `${entry.styleId} develops its energy across the form`);
    assert.ok(plan.events.some(event => event.type === 'on'), `${entry.styleId} reaches the shared sample playback plan`);
    assert.ok(plan.events.every(event => Number.isFinite(event.time)), `${entry.styleId} has finite scheduled sample events`);
    assert.ok(performance.notes.every(note => note.attackId && note.phraseId && note.harmonicChord),
      `${entry.styleId} keeps attack, phrase and harmony identity through the engine boundary`);
    assert.ok(performance.notes.every(note => note.soundContext?.worldId === entry.genreId
      && note.soundContext.styleId === entry.styleId),
    `${entry.styleId} does not leak another genre's sound context into playback`);
    assert.ok(performance.mixTimeline!.scenes.every(scene => scene.styleId === entry.styleId),
      `${entry.styleId} keeps its own mix contract throughout the song`);

    const notes = leadNotes(sheet, performance, expected.leadInstrument);
    assert.ok(notes.length >= 24, `${entry.styleId} has enough played lead material to audit phrase contour`);
    assert.ok(Math.max(...notes.map(note => note.midi)) - Math.min(...notes.map(note => note.midi)) >= 7,
      `${entry.styleId} lead is not trapped in a single pitch`);
    assert.ok(new Set(notes.map(note => note.phraseId)).size >= 4, `${entry.styleId} lead develops over multiple phrases`);
    assert.ok(Math.max(...notes.map(note => note.vel)) - Math.min(...notes.map(note => note.vel)) >= 12,
      `${entry.styleId} lead carries more than one fixed dynamic level`);
    if ('maxGeneratedPhraseEntryLeap' in expected) {
      const attacks = new Map<string, { time: number; phraseId: string; midi: number[]; authoredPitch: boolean }>();
      for (const note of notes) {
        const key = note.attackId ?? `${note.phraseId}:${note.time}`;
        const attack = attacks.get(key) ?? { time: note.time, phraseId: note.phraseId ?? '', midi: [], authoredPitch: false };
        attack.midi.push(note.midi);
        attack.authoredPitch ||= Boolean(note.authoredPitch);
        attacks.set(key, attack);
      }
      const ordered = [...attacks.values()].sort((a, b) => a.time - b.time);
      let largestGeneratedEntryLeap = 0;
      for (let i = 1; i < ordered.length; i++) {
        const previous = ordered[i - 1], current = ordered[i];
        const previousRegion = previous.phraseId.slice(0, previous.phraseId.lastIndexOf(':'));
        const currentRegion = current.phraseId.slice(0, current.phraseId.lastIndexOf(':'));
        if (previous.phraseId !== current.phraseId && previousRegion === currentRegion && !current.authoredPitch) {
          const previousPitch = previous.midi[Math.floor(previous.midi.length / 2)];
          const currentPitch = current.midi[Math.floor(current.midi.length / 2)];
          largestGeneratedEntryLeap = Math.max(largestGeneratedEntryLeap, Math.abs(currentPitch - previousPitch));
        }
      }
      assert.ok(largestGeneratedEntryLeap <= expected.maxGeneratedPhraseEntryLeap,
        `${entry.styleId} carries pitch memory into derived phrase openings (largest leap ${largestGeneratedEntryLeap} semitones)`);
    }
    if ('durationRangeSeconds' in expected) {
      const duration = performance.bars.at(-1)?.end ?? 0;
      assert.ok(duration >= expected.durationRangeSeconds[0] && duration <= expected.durationRangeSeconds[1],
        `${entry.styleId} sample form has a reference-length arc (${duration.toFixed(1)}s)`);
    }

    signatures.push([
      entry.styleId,
      [...instruments].sort().join(','),
      [...chords].sort().join(','),
      regionKinds.join('>'),
      [...packs].sort().join(','),
    ].join('|'));
    contours.push(contour(notes));
  }

  assert.equal(new Set(signatures).size, contrastingSamples.length,
    'tonal vocabulary, ensemble, form and sample routing do not collapse to one catalog-wide recipe');
  assert.equal(new Set(contours).size, contrastingSamples.length,
    'the first played phrase contours remain distinguishable across these sonically distant styles');
});

function sectionParts(sheet: Sheet, kind: string): string[] {
  const section = sheet.regions.find(region => region.kind === kind);
  assert.ok(section, `sample score has a ${kind} section`);
  return [...(section.activeInstrumentIds ?? [])].sort();
}

function sectionPattern(sheet: Sheet, kind: string, instrumentId: string, role?: string): string | undefined {
  const section = sheet.regions.find(region => region.kind === kind);
  assert.ok(section, `sample score has a ${kind} section`);
  const track = sheet.tracks.find(part => part.instrumentId === instrumentId && (!role || part.role === role));
  assert.ok(track, `sample score has ${instrumentId}${role ? ` ${role}` : ''}`);
  const patternId = sheet.arrangement[section.id]?.[track.id];
  return patternId ? PATTERNS_BY_ID[patternId]?.shortName : undefined;
}

test('reference arrangements shape section entrances and instrument phrases instead of laying one loop over each form', () => {
  const deepHouse = createCatalogSong('house-deep-house_song');
  assert.deepEqual(sectionParts(deepHouse, 'intro'), ['drums', 'shaker'],
    'deep-house DJ intro exposes the light pulse before the low line enters');
  assert.deepEqual(sectionParts(deepHouse, 'breakdown'), ['rhodes'],
    'the breakdown opens space by removing the rhythm section and sub');
  assert.deepEqual(sectionParts(deepHouse, 'variation'), ['drums', 'rhodes', 'shaker', 'synth'],
    'the later groove restores the complete electronic and keyboard texture');
  assert.equal(sectionPattern(deepHouse, 'bass-entry', 'synth', 'bass'), 'Low anchor');
  assert.equal(sectionPattern(deepHouse, 'chords', 'synth', 'bass'), 'Synthesizer variation');
  assert.equal(sectionPattern(deepHouse, 'breakdown', 'rhodes'), 'Electric Piano reply');
  assert.equal(sectionPattern(deepHouse, 'variation', 'shaker'), 'Shaker reply');

  const bollywoodDisco = createCatalogSong('bollywood-disco-bollywood_song');
  assert.deepEqual(sectionParts(bollywoodDisco, 'intro'), ['bass', 'drums', 'guitar'],
    'the disco opening uses a compact rhythm-section pickup');
  assert.deepEqual(sectionParts(bollywoodDisco, 'verse'), ['bass', 'drums', 'guitar', 'voice'],
    'the verse stays lean while the vocal leads');
  assert.deepEqual(sectionParts(bollywoodDisco, 'chorus'), ['bass', 'drums', 'guitar', 'string-ensemble', 'synth', 'voice'],
    'the refrain adds orchestral strings and a distinct synth response');
  assert.deepEqual(sectionParts(bollywoodDisco, 'solo'), ['bass', 'drums', 'guitar', 'string-ensemble', 'synth'],
    'the instrumental feature gives the singer room');
  assert.equal(sectionPattern(bollywoodDisco, 'chorus', 'bass'), 'Disco octave bass');
  assert.equal(sectionPattern(bollywoodDisco, 'chorus', 'drums'), 'Four-on-floor backbeat');
  assert.equal(sectionPattern(bollywoodDisco, 'chorus', 'synth'), 'Disco synth answer');
  assert.equal(sectionPattern(bollywoodDisco, 'solo', 'synth'), 'Synthesizer variation');

  const club = createCatalogSong('bollywood-electronic-club_song');
  assert.deepEqual(sectionParts(club, 'intro'), ['drums', 'synth']);
  assert.deepEqual(sectionParts(club, 'breakdown'), ['synth'],
    'the club breakdown removes drums, bass and voice rather than keeping the same backing underneath');
  assert.deepEqual(sectionParts(club, 'build'), ['bass', 'drums', 'synth']);
  assert.equal(sectionPattern(club, 'verse', 'synth'), 'Synthesizer reply');
  assert.equal(sectionPattern(club, 'chorus', 'synth'), 'Synthesizer variation');
  assert.equal(sectionPattern(club, 'verse', 'drums'), 'Kit');
  assert.equal(sectionPattern(club, 'chorus', 'drums'), 'Drum kit variation');
});

test('Philly Disco strings move from their theme bed through replies into a source phrase', () => {
  const philly = createCatalogSong('funk-philly-disco_song');
  const strings = philly.tracks.find(track => track.instrumentId === 'string-ensemble');
  assert.ok(strings, 'the orchestral string section remains part of the Philly Disco ensemble');
  assert.equal(sectionPattern(philly, 'theme', 'string-ensemble'), 'String swell');
  assert.equal(sectionPattern(philly, 'groove', 'string-ensemble'), 'String Ensemble reply');
  assert.equal(sectionPattern(philly, 'solo', 'string-ensemble'), 'String swell');
  const groove = philly.regions.find(region => region.kind === 'groove')!;
  const grooveCells = new Set(philly.measures.slice(groove.start, groove.end)
    .map(measure => measure.patternDetailsByTrack?.[strings.id]?.patternId).filter(Boolean));
  assert.ok(grooveCells.size > 1,
    'the unpinned string reply develops through its repeated groove phrases');
});

function regionAudioWindow(performance: Performance, regionId: string): { start: number; end: number } {
  const bars = performance.bars.filter(bar => bar.regionId === regionId);
  assert.ok(bars.length, `performance has bars for ${regionId}`);
  return { start: bars[0].start, end: bars.at(-1)!.end };
}

test('minimalist pulse and Persian chamber dialogue keep their authored breathing and arc', () => {
  const minimalist = createCatalogSong('classical-minimalist_song');
  const minimalistPerformance = compileWholeSong(minimalist);
  const violinTrack = minimalist.tracks.find(track => track.instrumentId === 'violin')!;
  const pulse = minimalist.regions.find(region => region.kind === 'pulse')!;
  const pulseWindow = regionAudioWindow(minimalistPerformance, pulse.id);
  const pulseNotes = minimalistPerformance.notes.filter(note => note.trackId === violinTrack.id
    && note.time >= pulseWindow.start && note.time < pulseWindow.end).sort((a, b) => a.time - b.time);
  assert.equal(pulseNotes.length, 16,
    'the four-bar seed cell uses four bowed attacks per bar instead of an eighth-note wash');
  assert.ok(pulseNotes.slice(1).every((note, index) => Math.abs(note.time - pulseNotes[index].time - 0.5) < 0.015),
    'the opening seed retains a steady quarter-note frame');
  assert.equal(sectionPattern(minimalist, 'pulse', 'violin'), 'Violin seed cell');
  assert.equal(sectionPattern(minimalist, 'phase-overlap', 'violin'), 'Violin additive variation');
  assert.equal(sectionPattern(minimalist, 'phase-overlap', 'marimba'), 'Marimba phase shift');
  assert.equal(sectionPattern(minimalist, 'coda', 'violin'), 'Violin seed cell');
  const phase = minimalist.regions.find(region => region.kind === 'phase-overlap')!;
  const phaseWindow = regionAudioWindow(minimalistPerformance, phase.id);
  const phaseNotes = minimalistPerformance.notes.filter(note => note.trackId === violinTrack.id
    && note.time >= phaseWindow.start && note.time < phaseWindow.end);
  assert.ok(phaseNotes.some(note => Math.abs((note.time - phaseWindow.start) % 0.5 - 0.25) < 0.015),
    'the process section adds an eighth-note displacement instead of restoring the same pulse');
  assert.ok(minimalist.tracks.every(track => track.instrumentId !== 'drums' && track.instrumentId !== 'timpani'),
    'the minimalist pulse comes from pitched parts, not a drum track');

  const persian = createCatalogSong('persian-modern-persian_song');
  const persianPerformance = compileWholeSong(persian);
  assert.ok(persianPerformance.duration >= 150 && persianPerformance.duration <= 200,
    `the chamber arrangement has a compact full-song arc (${persianPerformance.duration}s), not a 26-minute score`);
  assert.equal(persian.bpm, 60, 'the slow modal phrase tempo remains explicit');
  assert.deepEqual(sectionParts(persian, 'opening'), ['kamancheh']);
  assert.deepEqual(sectionParts(persian, 'dialogue'), ['kamancheh', 'setar']);
  assert.deepEqual(sectionParts(persian, 'build'), ['cello', 'kamancheh', 'setar', 'string-ensemble']);
  assert.deepEqual(sectionParts(persian, 'dissolve'), ['kamancheh']);
  assert.equal(sectionPattern(persian, 'dialogue', 'setar'), 'Setar dialogue');
  assert.equal(sectionPattern(persian, 'build', 'string-ensemble'), 'String swell');
  const dialogue = persian.regions.find(region => region.kind === 'dialogue')!;
  const dialogueWindow = regionAudioWindow(persianPerformance, dialogue.id);
  const dialogueNotes = new Map(['kamancheh', 'setar'].map(instrumentId => {
    const trackId = persian.tracks.find(track => track.instrumentId === instrumentId)!.id;
    return [instrumentId, persianPerformance.notes.filter(note => note.trackId === trackId
      && note.time >= dialogueWindow.start && note.time < dialogueWindow.start + 8)
      .sort((a, b) => a.time - b.time)];
  }));
  for (const kamancheh of dialogueNotes.get('kamancheh')!) {
    for (const setar of dialogueNotes.get('setar')!) {
      assert.ok(kamancheh.time + kamancheh.dur <= setar.time + 0.02
        || setar.time + setar.dur <= kamancheh.time + 0.02,
      'the setar replies occupy kamancheh breaths instead of doubling held notes');
    }
  }
  const release = persian.regions.find(region => region.kind === 'release')!;
  const releaseWindow = regionAudioWindow(persianPerformance, release.id);
  const kamanchehId = persian.tracks.find(track => track.instrumentId === 'kamancheh')!.id;
  const releaseKamancheh = persianPerformance.notes.filter(note => note.trackId === kamanchehId
    && note.time >= releaseWindow.start && note.time < releaseWindow.end).sort((a, b) => a.time - b.time);
  assert.ok(releaseKamancheh.slice(1).every((note, index) => releaseKamancheh[index].time + releaseKamancheh[index].dur <= note.time + 0.02),
    'the returning monophonic kamancheh line does not retrigger over its own sustained note');
});

function excerptEnvelope(left: Float32Array, right: Float32Array): string {
  const bins = 16;
  return Array.from({ length: bins }, (_, bin) => {
    const start = Math.floor(bin * left.length / bins), end = Math.floor((bin + 1) * left.length / bins);
    let energy = 0;
    for (let i = start; i < end; i++) energy += left[i] ** 2 + right[i] ** 2;
    const rms = Math.sqrt(energy / Math.max(1, 2 * (end - start)));
    return rms > 0 ? Math.round(20 * Math.log10(rms)) : -120;
  }).join(',');
}

test('contrasting catalog studies render through the shared playback/export PCM path with distinct envelopes', async () => {
  const envelopes = new Set<string>();

  for (const expected of contrastingSamples) {
    const entry = songCatalog.find(song => song.id === expected.id)!;
    const refsPath = new URL(`../docs/genres/${entry.genreId}/references.json`, import.meta.url);
    const referenceDoc = JSON.parse(readFileSync(refsPath, 'utf8')) as {
      styles?: Array<{ styleId: string; recordings?: Array<{ url: string }> }>;
      references?: Array<{ styleId: string; recordings?: Array<{ url: string }> }>;
    };
    const referenceRows = referenceDoc.styles ?? referenceDoc.references ?? [];
    const reference = referenceRows.find(row => row.styleId === entry.styleId);
    assert.ok(reference, `${entry.styleId} has a documented reference set`);
    assert.ok(new Set(reference.recordings?.map(recording => recording.url)).size >= 5,
      `${entry.styleId} has five distinct streaming comparison candidates`);

    const sheet = createCatalogSong(expected.id);
    const performance = compileWholeSong(sheet);
    const audio = await renderPerformanceToAudio(performance, {
      ...songMixOptions(sheet),
      renderWindow: { start: 0, end: 8 },
      maxDurationSeconds: 8,
      yieldForUI: false,
    });
    const metrics = measureAudio(audio.left, audio.right, audio.sampleRate);
    assert.equal(metrics.nonFiniteSamples, 0, `${entry.styleId} produces finite PCM`);
    assert.equal(metrics.clippedSampleFraction, 0, `${entry.styleId} leaves output headroom`);
    assert.ok(metrics.samplePeak > 0.003 && metrics.samplePeak < 1,
      `${entry.styleId} is audible without hitting full scale (peak ${metrics.samplePeak})`);
    assert.ok((metrics.activeRmsDbfs ?? -120) > -55,
      `${entry.styleId} does not render as a tiny or nearly silent mix`);
    assert.ok(metrics.activeWindowFraction >= 0.5,
      `${entry.styleId} carries sound through its excerpt rather than dropping out`);
    assert.ok(Math.abs(metrics.dcOffset) < 0.02, `${entry.styleId} has no meaningful DC bias`);
    envelopes.add(excerptEnvelope(audio.left, audio.right));
  }

  assert.equal(envelopes.size, contrastingSamples.length,
    `the render path keeps all ${contrastingSamples.length} sonically distant studies from collapsing to one repeated audio envelope`);
});

test('Indian Classical sample leads use their authored raga pitch collections', () => {
  const studies = [
    ['indian-classical-hindustani-khayal', 'raga-todi', [0, 1, 3, 6, 7, 8, 11]],
    ['indian-classical-dhrupad', 'raga-yaman', [0, 2, 4, 6, 7, 9, 11]],
    ['indian-classical-instrumental-gat', 'raga-jog', [0, 3, 4, 5, 7, 10]],
    ['indian-classical-thumri', 'raga-pilu', [0, 2, 3, 4, 5, 7, 8, 9, 10, 11]],
    ['indian-classical-carnatic-kriti', 'raga-hamsadhwani', [0, 2, 4, 7, 11]],
    ['indian-classical-ragam-tanam-pallavi', 'raga-kalyani', [0, 2, 4, 6, 7, 9, 11]],
    ['indian-classical-varnam', 'raga-sahana', [0, 2, 4, 5, 7, 9, 10]],
    ['indian-classical-tillana', 'raga-behag', [0, 2, 4, 5, 6, 7, 9, 11]],
  ] as const;
  const pitchCollections = new Set<string>();

  for (const [styleId, scaleName, intervals] of studies) {
    const songId = `${styleId}_song`;
    assert.ok(songCatalog.some(song => song.id === songId), `${styleId} has a sample song`);
    const theory = styleTheoryFor(styleId, 'indian-classical');
    assert.equal(theory.defaultScale, scaleName, `${styleId} resolves its named raga study`);
    assert.deepEqual(scalePcsForMode(scaleName, 0), intervals, `${styleId} keeps its authored swara inventory`);
    pitchCollections.add(intervals.join(','));

    const sheet = createCatalogSong(songId);
    const performance = compileWholeSong(sheet);
    const lead = sheet.tracks.find(track => track.role === 'lead');
    assert.ok(lead, `${styleId} has a melodic foreground part`);
    const tonic = parseChord(sheet.measures.find(measure => measure.chord)?.chord ?? 'D5').rootPc;
    const allowed = new Set(scalePcsForMode(scaleName, tonic));
    const notes = performance.notes.filter(note => note.trackId === lead.id && !note.drum);
    const played = new Set(notes.map(note => note.midi % 12));
    assert.ok(played.size >= 4, `${styleId} plays a melodic pitch collection`);
    for (const pitchClass of played) {
      assert.ok(allowed.has(pitchClass), `${styleId} lead pitch ${pitchClass} stays within ${scaleName}`);
    }
  }

  assert.equal(pitchCollections.size, 7,
    'the eight studies retain seven pitch collections instead of sharing one major-scale fallback');
});

test('Persian Shur tuning and instrumental sample identities survive catalog resolution', () => {
  const styleIds = ['persian-dastgah', 'persian-radif', 'persian-avaz', 'persian-instrumental-ensemble', 'persian-modern-persian'];
  for (const styleId of styleIds) {
    const style = PersianGenre.styleDefinitions.find(item => item.id === styleId);
    assert.ok(style, `Persian catalog includes ${styleId}`);
    assert.equal(style.tuningSystem, 'persian-shur', `${styleId} retains its style-level Shur tuning`);
    const patterns = PersianGenre.patterns.filter(pattern => pattern.styleIds?.includes(styleId));
    assert.ok(patterns.length > 0, `${styleId} contributes playable part studies`);
    assert.ok(patterns.every(pattern => pattern.tuningSystem === 'persian-shur'),
      `${styleId} patterns do not fall back to the world 12-TET default`);
  }

  const shur = resolveTuningSystem('persian-shur');
  assert.equal(shur.getCentsOffset(64, 2, { instrumentId: 'tar' }), -50,
    'the Shur second carries a koron inflection in the D-centered lesson');
  assert.equal(shur.getCentsOffset(69, 2, { instrumentId: 'tar' }), -50,
    'the Shur fifth carries its authored alternate inflection');
  assert.equal(shur.getCentsOffset(67, 2, { instrumentId: 'tar' }), 0,
    'stable modal degrees remain at their authored pitch');

  const dastgah = createCatalogSong('persian-dastgah_song');
  const verseSections = dastgah.regions.filter(region => region.kind === 'verse');
  const dastgahVoice = dastgah.tracks.find(track => track.instrumentId === 'voice')!;
  assert.equal(verseSections.length, 3);
  assert.ok(verseSections[0].activeInstrumentIds?.includes('voice'));
  assert.equal(verseSections[0].leadInstrumentId, 'voice', 'the first sung phrase is identified as the foreground');
  assert.deepEqual(verseSections[1].activeInstrumentIds, ['voice'],
    'the avaz return becomes a genuinely unaccompanied singer passage');
  assert.deepEqual(verseSections[1].solo?.trackIds, [dastgahVoice.id]);
  assert.equal(verseSections[1].solo?.mode, 'unaccompanied');
  assert.equal(verseSections[1].leadInstrumentId, 'voice');
  assert.equal(verseSections[2].activeInstrumentIds?.includes('voice'), false,
    'the final verse gives the instruments room instead of extending the synthetic vocal layer');
  assert.equal(verseSections[2].leadInstrumentId, 'tar', 'the instrumental return names its actual lead');
  assert.equal(PATTERNS_BY_ID[dastgah.arrangement[verseSections[0].id]?.[dastgahVoice.id] ?? '']?.shortName, 'Vocal breath line');
  assert.equal(PATTERNS_BY_ID[dastgah.arrangement[verseSections[1].id]?.[dastgahVoice.id] ?? '']?.shortName, 'Vocal variation');
  const dastgahPerformance = compileWholeSong(dastgah);
  assert.equal(dastgahPerformance.notes.some(note => note.trackId === dastgahVoice.id
    && note.bar >= verseSections[2].start && note.bar < verseSections[2].end), false,
  'the instrumental return has no hidden vowel attacks');

  const instrumental = createCatalogSong('persian-instrumental-ensemble_song');
  assert.ok(instrumental.tracks.some(track => track.instrumentId === 'tar'));
  assert.ok(instrumental.tracks.every(track => track.instrumentId !== 'voice'),
    'an instrumental ensemble never resolves the generic vocal lead track');
  const partPattern = (kind: string, instrumentId: string) => {
    const region = instrumental.regions.find(item => item.kind === kind);
    assert.ok(region, `the instrumental score contains ${kind}`);
    const track = instrumental.tracks.find(item => item.instrumentId === instrumentId);
    assert.ok(track, `the instrumental score contains ${instrumentId}`);
    const patternId = instrumental.arrangement[region.id]?.[track.id];
    assert.ok(patternId, `${kind} assigns ${instrumentId}`);
    return PATTERNS_BY_ID[patternId]?.shortName;
  };
  assert.equal(partPattern('prelude', 'tar'), 'Measured opening');
  assert.equal(partPattern('theme', 'tar'), 'Tar gushe phrase');
  assert.equal(partPattern('solo', 'tar'), 'Tar chaharmezrab');
  assert.equal(partPattern('development', 'santur'), 'santur variation');
  assert.equal(partPattern('theme', 'santur'), 'Santur reply');
  assert.deepEqual(instrumental.regions.find(item => item.kind === 'solo')?.activeInstrumentIds, ['tar'],
    'the chaharmezrab section is a real unaccompanied tar feature');
  assert.equal(partPattern('coda', 'tar'), 'Tar forud');
  const instrumentalPerformance = compileWholeSong(instrumental);
  assert.ok(instrumentalPerformance.notes.length > 100);
  const tarTrackId = instrumental.tracks.find(track => track.instrumentId === 'tar')!.id;
  const shurInflected = instrumentalPerformance.notes.find(note => note.trackId === tarTrackId && note.midi === 64);
  assert.ok(shurInflected?.frequencyHz, 'the authored tar line reaches the tuned playback event plan');
  const expectedHz = 440 * 2 ** ((64 - 69) / 12) * 2 ** (-50 / 1200);
  assert.ok(Math.abs(shurInflected.frequencyHz - expectedHz) < 0.05,
    'the rendered Shur second is actually 50 cents below equal temperament');

  const chamber = createCatalogSong('persian-modern-persian_song');
  for (const instrumentId of ['kamancheh', 'setar', 'string-ensemble', 'cello']) {
    assert.ok(chamber.tracks.some(track => track.instrumentId === instrumentId),
      `the Contemporary Persian Chamber sample includes ${instrumentId}`);
  }
  const chamberPlan = compileSamplePlan(compileWholeSong(chamber), {
    ...songMixOptions(chamber), selectedTrackIds: chamber.tracks.map(track => track.id),
  });
  assert.ok(chamberPlan.banks.includes('strings'), 'the chamber kamancheh resolves to the bowed-string sample pack');
  assert.ok(chamber.tracks.every(track => track.instrumentId !== 'voice' && track.role !== 'percussion'),
    'the chamber adaptation does not inherit the vocal/tombak loop');
  assert.ok(compileWholeSong(chamber).notes.length > 100,
    'the chamber arrangement compiles a full playable performance');
});
