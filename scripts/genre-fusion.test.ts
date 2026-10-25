import test from 'node:test';
import assert from 'node:assert/strict';
import { GENRE_WORLDS, PATTERNS_BY_ID } from '../src/data/genres';
import { getCanonicalStyle } from '../src/engine/style/registry';
import { makeSheet, rebuild } from '../src/engine/sheet/sheet';
import { arrangeBand } from '../src/engine/band/arrangeBand';
import { compileSamplePlan } from '../src/engine/playback/soundfont/plan';
import { songMixOptions } from '../src/engine/playback/renderSongMix';
import { getInstrumentPerformanceProfile } from '../src/engine/lookup/performance';

test('every genre pair supports borrowed melody, percussion and a high instrument assigned to bass', () => {
  let combinations = 0;
  for (const host of GENRE_WORLDS) {
    const base = makeSheet({ genreId: host.id, styleId: getCanonicalStyle(host.id).id });
    const region = { ...base.regions[0], start: 0, end: 4, bars: 4, activeInstrumentIds: undefined };
    for (const guest of GENRE_WORLDS) {
      const style = getCanonicalStyle(guest.id);
      const patterns = (style.patterns?.allowed ?? []).map(id => PATTERNS_BY_ID[id]).filter(Boolean);
      const tracks = [
        { ...base.tracks[0], id: 'melody', instrumentId: 'guitar', instrument: 'guitar', role: 'lead' },
        { ...base.tracks[0], id: 'rhythm', instrumentId: 'drums', instrument: 'drums', role: 'percussion' },
        { ...base.tracks[0], id: 'low', instrumentId: 'flute', instrument: 'flute', role: 'bass' },
      ];
      const assignments = Object.fromEntries(tracks.map(track => {
        const pattern = patterns.find(pattern => pattern.roles.includes(track.role) && !pattern.arrangementVariation) ?? patterns[0];
        assert.ok(pattern, `${style.id} supplies playable teaching material`);
        return [track.id, pattern.id];
      }));
      const sheet = rebuild({ ...base, tracks, regions: [region],
        arrangement: { [region.id]: assignments }, lockedPatternAssignments: { [region.id]: assignments },
        partLens: { [region.id]: Object.fromEntries(tracks.map(track => [track.id,
          { genreId: guest.id, styleId: style.id, weight: 1 }])) },
        partRoles: {}, relationships: [], phrasePatternCache: {},
      });
      const performance = arrangeBand(sheet), label = `${host.id} + ${guest.id}`;
      const plan = compileSamplePlan(performance, songMixOptions(sheet));
      for (const track of tracks) {
        const notes = performance.notes.filter(note => note.trackId === track.id);
        assert.ok(notes.length, `${label}/${track.instrumentId}/${track.role} plays`);
        assert.ok(plan.events.some(event => event.type === 'on'
          && plan.tracks.find(part => part.id === track.id)!.channels.includes(event.channel)), `${label}/${track.id} reaches sample playback`);
        if (track.instrumentId !== 'drums') {
          const range = getInstrumentPerformanceProfile(track.instrumentId).capabilities;
          assert.ok(notes.every(note => note.midi >= range.lowMidi && note.midi <= range.highMidi), `${label}/${track.id} stays playable`);
        }
      }
      assert.ok(plan.events.every(event => Number.isFinite(event.time) && event.time >= 0), label);
      combinations++;
    }
  }
  assert.equal(combinations, GENRE_WORLDS.length ** 2);
});
