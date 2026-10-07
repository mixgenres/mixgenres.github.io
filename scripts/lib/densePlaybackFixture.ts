import { addVoice, makeSheet, rebuild } from '../../src/engine/sheet/sheet';

/** A full big-band score with independent authored parts, not a larger fader
 * list around a small ensemble. Used for 12/15/30-player transport stress tests. */
export function densePlaybackFixture(count: 12 | 15 | 30) {
  let song = makeSheet('jazz', 'jazz-big-band');
  const originals = song.tracks;
  const additional = ['trumpet', 'guitar', 'alto-sax', 'tenor-sax', 'trumpet', 'trombone', 'guitar',
    'trumpet', 'trombone', 'alto-sax', 'tenor-sax', 'cello', 'cello', 'bandoneon', 'congas',
    'trumpet', 'trombone', 'alto-sax', 'cello', 'bandoneon', 'congas', 'guitar'];
  for (const id of additional.slice(0, count - song.tracks.length)) {
    song = addVoice(song, id, undefined, 'song');
    const added = song.tracks.at(-1)!, source = originals.find(track => track.instrumentId === id) ?? originals.find(track =>
      track.instrumentId === (id === 'congas' ? 'drums' : id === 'bandoneon' || id === 'guitar' ? 'piano' : 'tenor-sax'))!;
    // Exhausting the picker vocabulary must not silently turn a stress-test
    // player into an empty track. Give each chair the corresponding written part.
    song = rebuild({ ...song, arrangement: Object.fromEntries(song.regions.map(region => [region.id,
      { ...song.arrangement[region.id], [added.id]: song.arrangement[region.id][source.id] }])) });
  }
  return { ...song, catalogId: undefined, title: `${count}-player big band` };
}
