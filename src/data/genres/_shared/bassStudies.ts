import type { AuthoredCell, GenrePackInput } from './genrePack';

interface BassStudy { onsets: number[]; degrees: number[]; durations: number[]; anticipations?: number[] }
const B = (onsets: number[], degrees: number[], durations: number[], anticipations?: number[]): BassStudy =>
  ({ onsets, degrees, durations, anticipations });

/** These folders inherited root/fifth motion even when their own description
 * calls for a pedal, melodic riff, sub line or anticipated bass. */
const MOTION: Record<string, string> = {
  afrobeat: 'riff', afrobeats: 'riff', amapiano: 'sub', ambient: 'pedal', arabic: 'pedal',
  bass: 'sub', blues: 'walking', cinematic: 'pedal', 'desert-blues': 'riff', electronic: 'riff',
  ethiopian: 'riff', funk: 'riff', gamelan: 'pedal', gnawa: 'riff', gospel: 'riff',
  'hip-hop': 'sub', house: 'house', 'indian-classical': 'pedal', industrial: 'riff', japanese: 'pedal',
  jazz: 'walking', kizomba: 'riff', mbalax: 'riff', metal: 'riff', pop: 'riff', punk: 'riff',
  qawwali: 'pedal', 'r-and-b': 'riff', reggae: 'reggae', reggaeton: 'dembow', rock: 'riff',
  salsa: 'tumbao', soukous: 'riff', steppe: 'pedal', swing: 'walking', timba: 'tumbao', zouk: 'riff',
};
const STYLE_MOTION: Record<string, string> = {
  'blues-hill-country': 'riff', 'blues-slow-blues': 'rootFifth',
  'funk-disco': 'octave', 'funk-philly-disco': 'octave', 'funk-hi-nrg': 'octave',
  'electronic-techno': 'sub', 'electronic-minimal': 'sub', 'electronic-trance': 'octave',
  'hip-hop-g-funk': 'riff', 'hip-hop-jazz-rap': 'riff', 'jazz-modal': 'pedal',
  'jazz-free-jazz': 'riff', 'jazz-jazz-fusion': 'riff', 'rock-rock-and-roll': 'walking',
  'rock-post-rock': 'pedal', 'rock-shoegaze': 'pedal', 'metal-doom': 'pedal',
};
const MODELS: Record<string, string> = {
  afrobeat: 'modal-vamp', amapiano: 'modal-vamp', ambient: 'modal-drone', arabic: 'modal-drone',
  'desert-blues': 'modal-vamp', ethiopian: 'modal-vamp', funk: 'modal-vamp', gamelan: 'modal-drone',
  gnawa: 'modal-drone', 'indian-classical': 'modal-drone', japanese: 'modal-drone', metal: 'power-riff',
  punk: 'power-riff', qawwali: 'modal-drone',
};

/** Separate original bass lessons for the 43 styles that shared the exact
 * [0,.75,1.5,2.5,3.75] cell. Degrees follow written chords; marked attacks
 * anticipate the next actual harmony. They are not reference transcriptions. */
const STUDIES: Record<string, BassStudy> = {
  'afrobeat-classic-afrobeat': B([0,.75,1.5,2.75,3.5,4,4.75,5.5,6.5,7.5], [1,1,5,7,5,1,3,5,1,7], [.5,.45,.7,.4,.3,.5,.45,.6,.65,.3]),
  'afrobeat-juju': B([0,.5,1.75,2.5,3.5,4,5,5.75,6.5,7.5], [1,5,1,3,5,1,5,6,5,1], [.3,.8,.4,.65,.3,.7,.5,.4,.65,.3]),
  'afrobeat-funk-heavy-afrobeat': B([0,.5,1.25,1.75,2.5,3.5,4,4.75,5.5,6.25,7.5], [1,1,7,1,5,1,1,3,5,7,1], [.3,.5,.3,.5,.65,.3,.5,.5,.5,.7,.3]),
  'afrobeat-jazz-heavy-afrobeat': B([0,1,1.75,2.5,3.25,4,4.75,5.5,6.25,7.25], [1,3,5,6,7,1,5,3,2,1], [.7,.5,.5,.45,.5,.5,.5,.5,.65,.6]),
  'afrobeat-modern-revival': B([0,.75,1.5,2.25,3.5,4.5,5.25,6,7.25], [1,1,5,3,7,1,3,5,1], [.5,.5,.5,.8,.3,.5,.5,.9,.6]),
  'afrobeats-contemporary-afrobeats': B([0,1.25,2.5,3.25,4,5.5,6.25,7.5], [1,1,5,1,1,3,5,1], [.9,.8,.45,.5,1,.45,.7,.3]),
  'amapiano-bacardi': B([.5,1.5,2.25,3.5,4.5,5,5.75,6.5,7.5], [1,1,8,1,5,1,8,1,1], [.55,.4,.7,.3,.3,.5,.5,.6,.3]),
  'blues-hill-country': B([0,.5,1.5,2,3.5,4,4.5,5.5,6,7.5], [1,1,5,1,7,1,1,5,1,1], [.3,.7,.3,1,.3,.3,.7,.3,1,.3]),
  'blues-blues-fusion': B([0,.75,1.5,2.5,3,3.5,4,5.25,6,6.75,7.5], [1,3,5,6,7,6,5,3,2,7,1], [.5,.5,.7,.3,.3,.3,.8,.5,.5,.5,.3]),
  'brazilian-samba-reggae': B([0,.75,1.5,2,3.25,4,4.75,5.5,6,7.25], [1,1,5,1,5,1,3,5,1,1], [.5,.5,.3,.9,.5,.5,.5,.3,.9,.5]),
  'brazilian-samba-rock': B([0,.5,1.75,2.5,3.25,4,5.5,6.25,7,7.5], [1,5,1,3,5,1,3,5,7,1], [.3,.8,.4,.5,.5,1,.45,.5,.3,.3]),
  'desert-blues-sahel-guitar': B([0,.5,1.5,2.25,3,3.5,4,5,5.5,6.5,7.25], [1,1,5,7,5,3,1,5,7,5,1], [.3,.7,.45,.5,.3,.3,.7,.3,.7,.45,.6]),
  'electronic-detroit-techno': B([.5,1.25,2,2.75,3.5,4.5,5.25,6.5,7.25], [1,8,5,1,7,1,8,5,1], [.35,.5,.5,.5,.3,.5,.8,.45,.5]),
  'ethiopian-ethio-jazz': B([0,.5,1.75,2.5,3.5,4,5.25,6,6.5,7.5], [1,1,5,7,5,1,4,5,7,1], [.3,.8,.4,.65,.3,.9,.5,.3,.65,.3]),
  'ethiopian-ethiopian-funk': B([0,.75,1.25,2,2.75,3.5,4,4.5,5.75,6.5,7.25], [1,1,7,1,5,1,1,4,5,7,1], [.5,.3,.5,.5,.5,.3,.3,.8,.4,.5,.5]),
  'ethiopian-modern-ethio-jazz': B([0,1.25,2,2.75,3.5,4.5,5.25,6,7.5], [1,4,5,7,5,1,7,5,1], [.9,.5,.5,.5,.3,.5,.5,.9,.3]),
  'funk-funk': B([0,.5,1.25,1.75,2.5,3.25,3.5,4,4.75,5.5,6.25,7.5], [1,1,7,1,5,7,5,1,3,5,7,1], [.3,.5,.3,.5,.5,.15,.3,.5,.5,.5,.7,.3]),
  'funk-james-brown-the-one': B([0,1.5,2,2.75,3.5,4,5.5,6.25,7.5], [1,1,5,7,5,1,1,7,1], [.9,.3,.5,.5,.3,1,.45,.7,.3]),
  'funk-p-funk': B([0,.75,1.5,2.25,3.5,4,4.75,5.5,6.75,7.5], [1,8,7,5,3,1,5,7,8,1], [.5,.5,.45,.8,.3,.5,.5,.7,.4,.3]),
  'funk-jazz-funk': B([0,.5,1.25,2,2.75,3.5,4,5.25,6,6.75,7.5], [1,3,5,6,7,5,1,3,5,7,1], [.3,.5,.5,.5,.5,.3,.8,.5,.5,.5,.3]),
  'funk-minneapolis': B([0,.75,1.5,2,2.75,3.5,4.25,5,5.75,6.5,7.25], [1,8,1,5,7,1,1,8,5,7,1], [.5,.5,.3,.5,.5,.3,.5,.5,.5,.45,.5]),
  'funk-boogie': B([0,.5,1,1.75,2.5,3.5,4,4.5,5.25,6,6.75,7.5], [1,8,1,5,7,5,1,8,3,5,7,1], [.3,.3,.5,.5,.65,.3,.3,.5,.5,.5,.5,.3]),
  'gospel-contemporary': B([0,.75,1.5,2,3.5,4,5,5.5,6.5,7.25], [1,3,5,8,7,1,5,6,7,1], [.5,.5,.3,1,.3,.7,.3,.7,.5,.6]),
  'house-afro-house': B([.5,1.25,2.5,3.5,4.25,5,6.25,7.5], [1,5,1,7,1,3,5,1], [.5,.8,.65,.3,.5,.8,.7,.3]),
  'jazz-jazz-fusion': B([0,.75,1.5,2.25,3.25,4,4.75,5.5,6.25,7.5], [1,5,7,9,7,1,3,5,6,1], [.5,.5,.45,.7,.5,.5,.5,.5,.7,.3]),
  'latin-latin-funk': B([0,.5,1.25,2,2.75,3.5,4.25,5,5.75,6.5,7.25], [1,1,5,7,5,1,3,5,7,5,1], [.3,.5,.5,.5,.5,.3,.5,.5,.5,.45,.5]),
  'latin-latin-fusion': B([0,.75,1.5,2.75,3.5,4,5.25,6,7.5], [1,3,5,7,5,1,2,5,1], [.5,.5,.85,.5,.3,.9,.5,.9,.3]),
  'mbalax-classic': B([0,.5,1.5,2.25,3,3.5,4.25,5,5.75,6.5,7.5], [1,5,1,3,5,7,1,5,3,5,1], [.3,.7,.45,.5,.3,.3,.5,.5,.5,.6,.3]),
  'mbalax-pop-mbalax': B([0,.75,1.5,2.5,3.25,4,5.5,6.25,7,7.5], [1,3,5,1,7,1,3,5,7,1], [.5,.5,.65,.45,.5,1,.45,.5,.3,.3]),
  'pop-city-pop': B([0,.75,1.5,2.25,3,3.5,4,4.75,5.5,6.5,7.25], [1,3,5,7,6,5,1,3,5,2,1], [.5,.5,.45,.5,.3,.3,.5,.5,.7,.45,.6]),
  'rock-psychedelic': B([0,1.5,2.75,4,5.5,6.5,7.25], [1,5,7,1,3,2,1], [1,.8,.7,1,.7,.45,.6]),
  'soukous-soukous': B([0,.75,1.5,2.25,3.5,4,4.75,5.5,6.25,7.5], [1,5,1,3,5,1,5,3,2,1], [.5,.5,.45,.8,.3,.5,.5,.5,.7,.3]),
  'soukous-kwassa-kwassa': B([0,.5,1.25,2,2.75,3.5,4.25,5,5.5,6.25,7.5], [1,5,1,3,5,1,5,3,2,5,1], [.3,.5,.5,.5,.5,.3,.5,.3,.5,.7,.3]),
  'soukous-ndombolo': B([0,.75,1.5,2,2.75,3.5,4,4.75,5.5,6.5,7.25], [1,1,5,8,5,3,1,5,1,3,1], [.5,.5,.3,.5,.5,.3,.5,.5,.7,.45,.5]),
  'swing-fusion-swing': B([0,1,2,2.75,3.5,4,5,5.75,6.5,7.25], [1,3,5,6,7,1,5,3,2,1], [.7,.7,.5,.5,.3,.7,.5,.5,.45,.6]),
  'timba-songo': B([.75,1.5,2.5,3.5,4.75,5.5,6.25,7.5], [5,1,5,1,5,1,7,1], [.5,.75,.65,.8,.5,.45,.8,.3], [3,7]),
  'timba-irakere-jazz-funk-precursor': B([0,.75,1.5,2.25,3.5,4,5.25,6,7.5], [1,3,5,7,1,1,5,7,1], [.5,.5,.45,.8,.3,.9,.5,.9,.3], [4,8]),
  'timba-charanga-habanera': B([.5,1.5,2.25,3.5,4.25,5,6.5,7.5], [1,5,7,1,5,1,5,1], [.65,.45,.8,.8,.5,1,.65,.3], [3,7]),
  'timba-bamboleo': B([0,.75,1.5,2.75,3.5,4.5,5.25,6.5,7.5], [1,5,1,7,1,5,3,5,1], [.5,.5,.8,.5,.3,.5,.85,.6,.3], [4,8]),
  'timba-timba-funk': B([0,.5,1.25,2.5,3.5,4.25,5,5.75,6.5,7.5], [1,1,7,5,1,3,5,7,5,1], [.3,.5,.8,.65,.3,.5,.5,.5,.6,.3], [4,9]),
  'zouk-zouk-beton': B([0,.75,1.5,2.5,3.25,4,4.75,5.5,6.75,7.5], [1,5,1,3,5,1,5,7,5,1], [.5,.5,.65,.45,.5,.5,.5,.7,.4,.3]),
  'zouk-afro-zouk': B([0,1.25,2,2.75,3.5,4.25,5,6.5,7.5], [1,1,5,7,5,1,3,5,1], [.9,.5,.5,.5,.3,.5,1,.6,.3]),
  'zouk-zouk-fusion': B([0,.75,1.5,2.25,3.5,4.5,5.25,6,7.25], [1,3,5,7,1,5,3,2,1], [.5,.5,.45,.8,.3,.5,.5,.9,.6]),
  'r-and-b-contemporary-randb': B([0,1.5,2.75,3.5,4.5,6,7.25], [1,1,8,1,1,5,1], [1,.8,.4,.3,1,.8,.5]),
  'r-and-b-motown': B([0,.75,1.5,2,2.75,3.5,4,5.25,6,6.5,7.25], [1,3,5,6,5,3,1,2,3,5,7], [.5,.5,.3,.5,.5,.3,.8,.5,.3,.5,.5]),
  'r-and-b-southern-soul': B([0,1,2.5,3.25,4,5.5,6.25,7.5], [1,5,6,7,1,3,5,1], [.7,1,.45,.5,1,.45,.7,.3]),
  'r-and-b-memphis-soul': B([0,.5,1.75,2.5,3.5,4,5,5.75,6.5,7.5], [1,1,5,1,7,1,3,5,3,1], [.3,.8,.4,.65,.3,.7,.5,.5,.65,.3]),
  'r-and-b-philly-soul': B([0,1.5,2.5,3.25,4.5,5.5,6.25,7.25], [1,5,6,7,1,3,2,1], [1,.7,.45,.5,.7,.45,.65,.6]),
  'r-and-b-quiet-storm': B([0,3.5,4,7.5], [1,1,1,1], [2.8,.3,2.8,.3], [1,3]),
  'r-and-b-new-jack-swing': B([0,.75,1.5,2.25,3.5,4.25,5,5.75,6.5,7.5], [1,8,1,5,7,1,8,5,7,1], [.5,.5,.45,.8,.3,.5,.5,.5,.6,.3]),
  'r-and-b-neo-soul': B([0,1.25,2,2.75,3.5,4,5.5,6.25,7.25], [1,3,5,7,6,5,3,2,1], [.9,.5,.5,.5,.3,1,.45,.65,.6]),
  'r-and-b-alternative-randb': B([.5,2.25,3.5,5.25,6.5,7.5], [1,8,1,1,5,1], [1,.7,.3,.8,.6,.3]),
};

export function authorBassStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const key = `${pack.id}-${style.id}`, study = STUDIES[key];
    const bassMotion = STYLE_MOTION[key] ?? (style.bassMotion === 'root-fifth' ? MOTION[pack.id] : undefined) ?? style.bassMotion;
    const harmonyModel = key === 'jazz-modal' ? 'modal-vamp' : key === 'jazz-big-band' ? 'blues-form'
      : MODELS[pack.id] ?? style.harmonyModel;
    if (!study) return { ...style, bassMotion, harmonyModel };
    if ([study.degrees, study.durations].some(values => values.length !== study.onsets.length)) throw new Error(`Misaligned bass study: ${key}`);
    const cells = style.cells.map((cell): AuthoredCell => {
      if (cell.role !== 'bass' || cell.pitches?.some(Boolean)) return cell;
      if (pack.id === 'r-and-b' && cell.phraseEnd) return { ...cell,
        pitches: cell.onsets.map((_, i) => ({ degree: study.degrees[(study.degrees.length - cell.onsets.length + i + study.degrees.length) % study.degrees.length],
          register: 36, voicing: 'single' })) };
      if (cell.phraseEnd || pack.id !== 'r-and-b' && JSON.stringify(cell.onsets) !== '[0,0.75,1.5,2.5,3.75]') return cell;
      const accents = study.degrees.map((degree, i) => study.anticipations?.includes(i) ? .82 : degree === 1 ? .9 : degree === 5 ? .7 : .57);
      return { ...cell, cycleLength: 2, onsets: [...study.onsets], durations: [...study.durations],
        accents, velocities: accents,
        pitches: study.degrees.map((degree, i) => ({ degree, register: 36, voicing: 'single',
          ...(study.anticipations?.includes(i) ? { reference: 'next-chord' as const } : {}) })),
        description: `Original ${style.name} bass study. Keep the written syncopations, holds and rests; marked pickups anticipate the next chord. Not a recording transcription.`,
      };
    });
    return { ...style, bassMotion, harmonyModel, cells };
  }) };
}
