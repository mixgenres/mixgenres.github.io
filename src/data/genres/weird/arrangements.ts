import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';

type Style = GenrePackInput['styles'][number];
type StyleEdit = Partial<Style>;

const cell = (
  name: string, shortName: string, role: string, instrument: string,
  onsets: number[], durations: number[], extra: Partial<AuthoredCell> = {},
): AuthoredCell => ({
  name, shortName, role, instruments: [instrument], onsets, durations, ...extra,
});

const score = (label: string, bars: number, intensity: 'low' | 'medium' | 'high' | 'peak' = 'medium') => ({ label, bars, intensity });
const commonForm = (labels: Array<[string, number, 'low' | 'medium' | 'high' | 'peak']>) => labels.map(([label, bars, intensity]) => score(label, bars, intensity));

const EDITS: Record<string, StyleEdit> = {
  deconstructed: {
    description: 'Broken phrases make silence structural: state a small piano idea, interrupt it with isolated sampler attacks, then let the parts reassemble without a regular backbeat.',
    patterns: ['interrupted motif with unequal gaps', 'isolated ensemble attacks', 'return of fragments after silence'],
    harmony: ['open pitch field', 'cluster against a single anchor', 'nonfunctional pitch contrast'],
    tempo: [88, 112], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { opening: ['D5'], process: ['D5', 'Eb5', 'A5'], disruption: ['Eb5'], reassembly: ['D5', 'A5'], dissolve: ['D5'] },
    form: commonForm([['opening', 4, 'low'], ['fragments', 8, 'medium'], ['rupture', 2, 'low'], ['reassembly', 8, 'high'], ['dissolve', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 14 },
    cells: [
      cell('deconstructed broken motif piano', 'Broken motif', 'lead', 'piano', [0, 1.25, 3.5], [.28, .62, .18], { accents: [.96, .48, .82], articulation: 'staccato', description: 'Play three unequal attacks with a deliberate empty span before the last one; preserve the interruption instead of filling it.' }),
      cell('deconstructed isolated sampler response', 'Sampler response', 'harmony', 'sampler', [.5, 2.75], [.18, .3], { accents: [.65, .92], articulation: 'staccato', description: 'Two dry response hits sit between the piano fragments. Keep the long gaps audible.' }),
      cell('deconstructed synth resonance', 'Resonance cue', 'texture', 'synth', [1.75, 3.75], [.7, .16], { accents: [.42, .74], articulation: 'staccato', description: 'A low-level tone links two unrelated attacks, then stops cleanly before the next phrase.' }),
    ],
  },
  'musique-concrete': {
    description: 'Treat the sampler as a source of distinct found-sound gestures: expose one sound, cut to a different register or timbre, and recall a fragment after a true pause. The current bank supplies percussion samples rather than recorded field audio.',
    patterns: ['found-sound montage with unequal segment lengths', 'register contrast between source fragments', 'silence as a splice'],
    harmony: ['timbre and register relations; no chord progression'],
    tempo: [64, 80], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { source: ['D5'], montage: ['D5'], recall: ['D5'] },
    form: commonForm([['source', 8, 'low'], ['montage', 12, 'medium'], ['overlap', 8, 'high'], ['silence', 4, 'low'], ['recall', 8, 'medium'], ['stop', 1, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 0 },
    instrumentDialects: { 'sampler:lead': { samplePalette: [38, 40, 42, 46, 49, 51, 53, 57] }, 'sampler:texture': { samplePalette: [35, 36, 41, 43, 48, 50, 52, 59] } },
    cells: [
      cell('musique concrete source montage', 'Sound montage', 'lead', 'sampler', [0, .625, 2.375, 3.75], [.35, .8, .18, .42], { accents: [.75, .9, .52, .88], articulation: 'staccato', description: 'A short source, a longer excerpt, and two recalls form a beginner montage study. Change source or register between gestures; the current playback uses pitched percussion samples, not field recordings.' }),
      cell('musique concrete overlapping fragment', 'Fragment overlap', 'texture', 'sampler', [1.5, 2.875], [.92, .35], { accents: [.42, .78], articulation: 'legato', description: 'Two longer fragments overlap the montage without establishing a regular chord loop.' }),
    ],
  },
  piano: {
    description: 'A prepared-piano study contrasts dry repeated attacks with longer ringing notes and sudden register changes. Playback currently uses the sampled acoustic-piano bank; it does not emulate physical piano preparations.',
    patterns: ['dry repeated-note cell with changing accents', 'register-shifted response', 'short attacks against natural piano decay'],
    harmony: ['restricted pitch collection', 'register and resonance contrast'],
    tempo: [72, 96], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { cell: ['D5'], response: ['Eb5'], return: ['D5'] },
    form: commonForm([['cell', 8, 'medium'], ['register shift', 8, 'high'], ['interlude', 4, 'low'], ['resonance', 8, 'medium'], ['return', 8, 'high'], ['close', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 4 },
    cells: [
      cell('prepared piano dry repeated figure', 'Dry piano figure', 'lead', 'piano', [0, .5, 1.25, 2.5, 3.25], [.2, .2, .55, .2, .7], { accents: [.9, .58, .72, .55, .92], articulation: 'staccato', description: 'Repeat a compact five-note figure with unequal accents, then leave the last tone to the piano sample’s natural decay.' }),
      cell('prepared piano register answer', 'Register answer', 'lead', 'piano', [.25, 1.75, 3], [.28, .62, .32], { accents: [.7, .95, .62], articulation: 'staccato', sectionUsage: ['bridge', 'solo'], description: 'Move the answer into a contrasting register and retain the asymmetric spacing.' }),
      cell('prepared piano cadence release', 'Piano release', 'lead', 'piano', [0, 2.5], [.35, 1.1], { phraseEnd: true, accents: [.84, .62], articulation: 'tenuto', description: 'A separated attack resolves into one longer final piano tone.' }),
    ],
  },
  glitch: {
    description: 'Glitch here means a stable musical pulse broken by displaced sample attacks, skips, and edited returns. The rhythm is made by placement and rests; no automatic note gate truncates sustained sounds.',
    patterns: ['displaced sample clicks over a stable pulse', 'short stutter burst followed by a gap', 'edited return with a missing attack'],
    harmony: ['small pitch field with abrupt register cuts'],
    tempo: [104, 124], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { frame: ['D5'], fragments: ['D5'], rupture: ['Eb5'], return: ['D5'] },
    form: commonForm([['frame', 4, 'low'], ['fragments', 8, 'medium'], ['stutter', 4, 'high'], ['rupture', 2, 'low'], ['return', 8, 'high'], ['cut', 2, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 2 },
    instrumentDialects: { 'synth:lead': { patchId: 'square-lead' }, 'sampler:texture': { samplePalette: [38, 42, 46, 51] } },
    cells: [
      cell('glitch displaced pulse synth', 'Displaced pulse', 'lead', 'synth', [0, .5, 1.75, 2, 3.25], [.3, .3, .12, .12, .42], { accents: [.88, .54, .76, .6, .92], articulation: 'staccato', description: 'Keep the first pulse legible, place a tight two-hit stutter away from it, and leave the final beat open.' }),
      cell('glitch sample click response', 'Click response', 'texture', 'sampler', [.25, 1.5, 3.5], [.12, .14, .18], { accents: [.55, .86, .68], articulation: 'staccato', probabilities: [1, .62, .48], description: 'A few dry sample clicks answer the pulse. The later clicks may drop out, making each pass a small edited variation.' }),
      cell('glitch edited return', 'Edited return', 'lead', 'synth', [0, 1.25, 3], [.25, .2, .4], { phraseEnd: true, accents: [.9, .54, .94], articulation: 'staccato' }),
    ],
  },
  microsound: {
    description: 'Microsound is built from tiny sound events, near-silence, and changes in event density. The event length is intentionally short as a musical gesture; sustained instruments are not shortened by a global playback gate.',
    patterns: ['micro-impulse cluster with a long silent span', 'density increase then exposed single event', 'tiny attacks at contrasting levels'],
    harmony: ['spectral register bands; no functional chords'],
    tempo: [52, 68], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { field: ['D5'], cluster: ['D5'], release: ['D5'] },
    form: commonForm([['field', 4, 'low'], ['impulses', 8, 'medium'], ['density', 8, 'high'], ['silence', 4, 'low'], ['cluster', 8, 'peak'], ['release', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 1 },
    instrumentDialects: { 'synth:lead': { patchId: 'noise-transition' }, 'sampler:texture': { samplePalette: [38, 42, 46, 53, 57] } },
    cells: [
      cell('microsound micro impulse cluster', 'Impulse cluster', 'lead', 'synth', [0, .125, .375, 2.5], [.05, .05, .07, .06], { accents: [.72, .5, .92, .64], articulation: 'staccato', description: 'Play three near-adjacent impulses, wait through a broad gap, then place one quiet return. The tiny written durations belong only to this microsound exercise.' }),
      cell('microsound sampler grain response', 'Grain response', 'texture', 'sampler', [.75, 1.625, 3.25], [.06, .06, .1], { accents: [.48, .7, .56], articulation: 'staccato', probabilities: [1, .55, .42], description: 'Sparse percussion-sample grains thicken the middle of the phrase and thin again near its end.' }),
    ],
  },
  'process-generative': {
    description: 'Generative studies keep a recognizable seed cell while conditional attacks alter its density on successive bars. Learn the rule and anchor first; let the optional events create variation without forcing a new chord loop.',
    patterns: ['seed cell with conditional entries', 'probability thinning and return', 'independent attacks over a stable reference'],
    harmony: ['one pitch anchor with slow register change'],
    tempo: [76, 96], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { seed: ['D5'], evolution: ['D5'], return: ['D5'] },
    form: commonForm([['seed', 4, 'low'], ['iteration', 12, 'medium'], ['mutation', 8, 'high'], ['constraint', 4, 'medium'], ['convergence', 8, 'high'], ['release', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 5 },
    instrumentDialects: { 'synth:lead': { patchId: 'sweep-pad' }, 'sampler:texture': { samplePalette: [38, 42, 48, 53] } },
    cells: [
      cell('generative stable seed cell', 'Seed cell', 'lead', 'synth', [0, .75, 2.5], [.52, .34, .72], { accents: [.9, .58, .76], articulation: 'staccato', probabilities: [1, .78, .54], description: 'Keep the opening seed recognizable; conditional second and third attacks change the contour density between bars.' }),
      cell('generative independent sampler entries', 'Independent entries', 'texture', 'sampler', [.5, 1.75, 3.25], [.12, .16, .1], { accents: [.52, .84, .58], articulation: 'staccato', probabilities: [.7, .42, .62], description: 'Independent clicks enter at different rates from the lead seed. A missing event is a valid state of the process.' }),
    ],
  },
  phase: {
    description: 'A phase study teaches a one-bar cell against a two-bar cycle, so their accent relationships change on the second bar. This playback can model stable cycles and displaced accents, but it does not automate a performer gradually accelerating one line.',
    patterns: ['repeated cell against a longer cycle', 'displaced accents over shared notes', 'unison return after a cycle offset'],
    harmony: ['shared pitch collection; composite rhythm carries the change'],
    tempo: [96, 116], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { unison: ['D5'], displacement: ['D5'], return: ['D5'] },
    form: commonForm([['unison', 4, 'medium'], ['displacement', 12, 'medium'], ['offset', 8, 'high'], ['rejoin', 4, 'low'], ['second process', 12, 'high'], ['coda', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 0 },
    cells: [
      cell('phase repeating piano cell', 'Repeating cell', 'lead', 'piano', [0, .5, 1, 1.5, 2, 2.5, 3, 3.5], [.32, .32, .32, .32, .32, .32, .32, .32], { accents: [.9, .48, .65, .48, .82, .48, .66, .52], articulation: 'staccato', description: 'Repeat an even eight-note cell with accents every other attack; keep the notes and spacing unchanged while another part shifts its emphasis.' }),
      cell('phase displaced sampler accents', 'Displaced accents', 'harmony', 'sampler', [.25, 1.25, 2.25, 3.25], [.14, .14, .14, .14], { accents: [.5, .9, .5, .78], articulation: 'staccato', description: 'The sampler marks a competing accent cycle without changing the piano cell.' }),
      cell('phase synth cycle anchor', 'Cycle anchor', 'texture', 'synth', [0, 2, 4.5, 6.5], [1.7, 1.7, 1.2, 1.2], { cycleLength: 2, articulation: 'legato', description: 'A two-bar synth cycle returns against the piano’s one-bar loop; the longer cycle changes the accent relationship without adding a backbeat.' }),
    ],
  },
  microtonal: {
    description: 'A microtonal study must carry explicit pitch offsets, not just a label. The lead alternates quarter-tone inflections around a stable pitch anchor; the sample bank remains 12-TET, with offsets applied by the playback tuning path.',
    patterns: ['quarter-tone inflection around a stable pitch', 'held note with changing pitch center', 'microtonal answer after a breath'],
    harmony: ['12-TET anchor with authored ±50-cent pitch offsets'],
    tempo: [60, 84], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { anchor: ['D5'], inflection: ['D5'], return: ['D5'] },
    form: commonForm([['anchor', 8, 'low'], ['inflection', 12, 'medium'], ['development', 12, 'high'], ['contrast', 8, 'medium'], ['return', 8, 'high'], ['coda', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 8 },
    cells: [
      cell('microtonal quarter-tone lead cell', 'Quarter-tone cell', 'lead', 'synth', [0, 1, 2.5, 3.25], [.72, .46, .92, .38], { pitches: [{ degree: 1 }, { degree: 2, cents: -50 }, { degree: 3, cents: 50 }, { degree: 1 }], accents: [.8, .55, .88, .62], articulation: 'legato', description: 'Hold the tonic, shade the second down by a quarter tone, lift the third by a quarter tone, and return to the anchor.' }),
      cell('microtonal sampler pitch reference', 'Pitch reference', 'texture', 'sampler', [0, 2], [.18, .18], { accents: [.48, .58], articulation: 'staccato', description: 'Two quiet attacks mark the anchor without imposing equal-tempered chord changes.' }),
      cell('microtonal inflected release', 'Inflected release', 'lead', 'synth', [0, 1.75, 3], [.6, .92, .5], { phraseEnd: true, pitches: [{ degree: 3, cents: 50 }, { degree: 2, cents: -50 }, { degree: 1 }], articulation: 'legato' }),
    ],
  },
  'free-improvisation': {
    description: 'A free-improvisation study organizes musical conversation through gesture, answer, and silence rather than a repeating meter. The score grid is only a placement aid; each phrase should leave room for the next player.',
    patterns: ['uneven solo gesture with open tail', 'short reply after an unmeasured-feeling gap', 'ensemble call and response with no backbeat'],
    harmony: ['open pitch field and optional shared anchor'],
    tempo: [58, 88], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { gesture: ['D5'], dialogue: ['D5', 'Eb5'], return: ['D5'] },
    form: commonForm([['gesture', 5, 'low'], ['response', 7, 'medium'], ['gesture two', 3, 'high'], ['silence', 2, 'low'], ['dialogue', 11, 'high'], ['rupture', 4, 'peak'], ['return', 9, 'medium'], ['stop', 2, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 16 },
    cells: [
      cell('free improvisation piano gesture', 'Open gesture', 'lead', 'piano', [0, .875, 2.75], [.62, .28, .88], { accents: [.86, .48, .72], articulation: 'legato', description: 'Offer a compact three-note gesture with an unequal final gap; do not imply a recurring beat.' }),
      cell('free improvisation sampler answer', 'Open answer', 'harmony', 'sampler', [1.5, 3.5], [.18, .34], { accents: [.74, .54], articulation: 'staccato', probabilities: [.6, .42], description: 'Answer only when the lead leaves space. The optional second attack is a response choice, not a fixed accompaniment loop.' }),
      cell('free improvisation synth texture', 'Held response', 'texture', 'synth', [.25, 3], [1.05, .62], { accents: [.32, .45], articulation: 'legato', description: 'Two low-level tones open and close a shared pitch field; leave the middle free.' }),
    ],
  },
  noise: {
    description: 'Noise music uses changes in density, spectral weight, and ensemble release as form. This sampler study can model impact clusters and silence, but does not claim to reproduce a particular noise recording or distortion chain.',
    patterns: ['dense impact cluster with a clean release', 'low-frequency swell against bright attacks', 'density drop into exposed silence'],
    harmony: ['noise and pitch bands; no chord progression'],
    tempo: [72, 108], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { field: ['C5'], eruption: ['C5'], rupture: ['C5'], release: ['C5'] },
    form: commonForm([['field', 8, 'medium'], ['eruption', 16, 'peak'], ['modulation', 12, 'high'], ['rupture', 4, 'low'], ['eruption return', 16, 'peak'], ['release', 4, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 6 },
    instrumentDialects: { 'synth:lead': { patchId: 'noise-transition' }, 'sampler:texture': { samplePalette: [38, 40, 49, 53, 57] } },
    cells: [
      cell('noise density rise synth', 'Density rise', 'lead', 'synth', [0, .25, .75, 1.5, 2.5, 3.25], [.18, .18, .34, .65, .32, .82], { accents: [.58, .72, .82, .9, .7, 1], articulation: 'staccato', description: 'Grow from sparse attacks into a denser six-event cluster, then stop together at the bar line.' }),
      cell('noise impact sample response', 'Impact cluster', 'texture', 'sampler', [0, .5, 1.75, 3], [.2, .24, .16, .32], { accents: [.95, .62, .84, .52], articulation: 'staccato', probabilities: [1, .65, .82, .48], description: 'Bright percussion impacts vary in density under the lead; do not fill the gaps with a steady pulse.' }),
    ],
  },
  drone: {
    description: 'A drone study sustains one pitch anchor while the upper resonance enters, changes weight, and gradually releases. It should feel continuous and non-metric rather than a repeated four-beat pad loop.',
    patterns: ['long anchor tone with slow upper entry', 'overtone change over an unchanged fundamental', 'gradual release into silence'],
    harmony: ['single sustained anchor and upper partial field'],
    tempo: [40, 60], harmonicRhythm: 'static', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { anchor: ['F5'], mass: ['F5'], upperVoice: ['F5'], release: ['F5'] },
    form: commonForm([['anchor', 8, 'low'], ['mass', 16, 'medium'], ['upper voice', 16, 'high'], ['feedback', 16, 'peak'], ['release', 8, 'low'], ['decay', 8, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 0 },
    instrumentDialects: { 'synth:lead': { patchId: 'ambient-drone' }, 'sampler:texture': { samplePalette: [49, 51, 53, 57] } },
    cells: [
      cell('drone sustained lead anchor', 'Sustained anchor', 'lead', 'synth', [0], [4], { accents: [.58], articulation: 'legato', description: 'Hold one low-level anchor throughout the measure; the long note should overlap its next entry rather than pulse.' }),
      cell('drone upper sampler resonance', 'Upper resonance', 'texture', 'sampler', [1.5], [2.5], { accents: [.26], articulation: 'legato', probabilities: [.62], description: 'A quiet upper resonance enters late and only on some cycles, so the fundamental stays perceptually stable.' }),
    ],
  },
  spectral: {
    description: 'Spectral music grows from the changing color of a sustained sonority. Hold an anchor, introduce upper register energy gradually, and let a brighter noise band bloom before returning to the first spectrum.',
    patterns: ['sustained anchor with slowly added upper partials', 'register and density transformation', 'spectral bloom followed by a quiet return'],
    harmony: ['anchor pitch with upper spectral bands'],
    tempo: [48, 72], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { attack: ['E5'], spectrum: ['E5'], transformation: ['E5'], return: ['E5'], decay: ['E5'] },
    form: commonForm([['attack', 8, 'low'], ['spectrum', 16, 'medium'], ['transformation', 16, 'high'], ['noise bloom', 8, 'peak'], ['return', 12, 'medium'], ['decay', 8, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 0 },
    instrumentDialects: { 'synth:lead': { patchId: 'halo-pad' }, 'sampler:texture': { samplePalette: [49, 51, 53, 57] } },
    cells: [
      cell('spectral sustained anchor', 'Spectrum anchor', 'lead', 'synth', [0], [4], { pitches: [{ degree: 1 }], accents: [.52], articulation: 'legato', description: 'Sustain the anchor while upper entries change the perceived spectrum rather than introducing a chord loop.' }),
      cell('spectral upper register entries', 'Upper entries', 'texture', 'sampler', [.5, 2, 3.5], [.35, .85, .42], { accents: [.34, .52, .72], articulation: 'legato', probabilities: [.45, .72, .4], description: 'Staggered quiet entries brighten the texture over time; do not play all upper notes at once.' }),
    ],
  },
  'no-wave': {
    description: 'No Wave combines angular guitar attacks, dry bass motion, and a tense drum part that changes between section accents and noisy interruption. The kit should not settle into a generic pop backbeat.',
    patterns: ['angular guitar chord attack with a held gap', 'bass response under clipped guitar', 'uneven kick and snare interruption'],
    harmony: ['chromatic power sonorities and abrupt root shifts'],
    tempo: [124, 152], harmonicRhythm: 'bar', harmonyModel: 'functional', bassMotion: 'riff', requiresChords: true,
    roles: { lead: ['voice'], harmony: ['guitar'], bass: ['bass'], percussion: ['drums'] },
    progressions: { A: ['E5', 'F5', 'Bb5', 'E5'], B: ['F5', 'Bb5', 'E5'], C: ['Bb5', 'E5', 'F5'], coda: ['E5'] },
    form: commonForm([['intro', 4, 'medium'], ['A', 8, 'high'], ['B', 5, 'peak'], ['A return', 8, 'high'], ['C', 7, 'peak'], ['coda', 3, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 4 },
    instrumentDialects: { 'guitar:harmony': { variantId: 'solid-electric', drive: .72 }, 'drums:percussion': { variantId: 'acoustic-kit' }, 'bass:bass': { variantId: 'electric-bass' } },
    cells: [
      cell('no wave vocal jagged phrase', 'Jagged vocal', 'lead', 'voice', [0, .75, 2.5, 3.25], [.35, .22, .52, .24], { accents: [.9, .5, .78, .95], articulation: 'staccato', description: 'Use a clipped four-entry vocal phrase with uneven gaps; the voice should not become a generic sustained vowel pad.' }),
      cell('no wave jagged guitar attacks', 'Guitar attacks', 'harmony', 'guitar', [0, .5, 2, 3.25], [.22, .18, .34, .2], { accents: [.96, .55, .82, .72], articulation: 'palm-mute', description: 'Play dry angular chord attacks with an exposed hole before the final pickup.' }),
      cell('no wave broken bass line', 'Broken bass', 'bass', 'bass', [0, 1.5, 2.75], [.72, .35, .5], { accents: [.92, .54, .82], articulation: 'staccato', description: 'Anchor the bar, leave the middle open, then push into the next guitar attack.' }),
      cell('no wave uneven kit', 'Uneven kit', 'percussion', 'drums', [0, .5, 1, 1.75, 2.5, 3], [.18, .12, .16, .12, .18, .15], { hits: ['kick', 'hat', 'snare', 'hat', 'kick', 'snare'], accents: [.94, .4, .82, .42, .74, .92], articulation: 'accent', description: 'An uneven six-event kit phrase gives the band pulse without locking every bar to a kick-snare alternation.' }),
    ],
  },
  zeuhl: {
    description: 'Zeuhl pairs a cycling low-register bass ostinato with a forceful chant and ritual ensemble accents. Let the bass carry the motor, then change density for the breakdown and final chant rather than placing every instrument on the same hits.',
    patterns: ['cycling bass motor in 7/8', 'chant phrase against repeated bass cell', 'ensemble accents around a reduced breakdown'],
    harmony: ['D minor anchor with chromatic neighboring sonorities'],
    tempo: [112, 132], harmonicRhythm: 'phrase', harmonyModel: 'functional', bassMotion: 'riff', requiresChords: true,
    progressions: { opening: ['Dm'], bassCell: ['Dm', 'Eb'], theme: ['Dm', 'Eb', 'Dm'], development: ['Dm', 'F', 'Eb', 'Dm'], breakdown: ['Dm'], chant: ['Dm', 'Eb'], climax: ['Dm', 'F', 'Eb', 'Dm'], coda: ['Dm'] },
    form: commonForm([['opening', 8, 'low'], ['bass cell', 16, 'medium'], ['theme', 16, 'high'], ['development', 24, 'high'], ['breakdown', 8, 'low'], ['chant', 16, 'high'], ['climax', 24, 'peak'], ['coda', 8, 'medium']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 4 },
    cells: [
      cell('zeuhl angular chant phrase', 'Angular chant', 'lead', 'voice', [0, .75, 1.5, 2.5], [.42, .24, .7, .4], { accents: [.95, .58, .88, .7], articulation: 'accent', description: 'Deliver a four-note chant with a short pickup and a held middle tone over the cycling bass.' }),
      cell('zeuhl piano ensemble accents', 'Piano accents', 'harmony', 'piano', [0, 1.5, 2.5], [.3, .3, .3], { accents: [.88, .62, .9], articulation: 'staccato', description: 'Sparse piano attacks mark the angular 7/8 groups and leave the chant exposed between them.' }),
      cell('zeuhl cycling bass motor', 'Bass motor', 'bass', 'bass', [0, .75, 1.5, 2.5], [.62, .3, .58, .35], { accents: [.98, .55, .86, .72], articulation: 'staccato', description: 'Keep the low motor recurring across the uneven bar; shift accents with the section instead of adding a straight four-beat pulse.' }),
      cell('zeuhl asymmetric kit cycle', '7/8 kit cycle', 'percussion', 'drums', [0, .5, 1.5, 2, 2.5, 3], [.18, .12, .18, .12, .18, .15], { hits: ['kick', 'hat', 'snare', 'hat', 'kick', 'snare'], accents: [.94, .42, .86, .45, .72, .92], articulation: 'accent', description: 'Keep the kick, snare, and hats inside the seven-eighth cycle; do not force a four-on-the-floor interpretation.' }),
    ],
  },
  polymetric: {
    description: 'This seven-eighth study sets a 3+2+2 accent cycle against a contrasting 2+2+3 layer. The playback engine keeps both parts on one shared meter, so this teaches opposing accent groupings rather than independent simultaneous meters.',
    patterns: ['3+2+2 seven-eighth lead grouping', '2+2+3 counter-accent grouping', 'shared downbeat with offset internal accents'],
    harmony: ['F5 anchor with chromatic neighboring power sonorities'],
    tempo: [104, 124], harmonicRhythm: 'phrase', harmonyModel: 'functional', bassMotion: 'rootFifth', requiresChords: true,
    progressions: { intro: ['F5'], riff: ['F5', 'Gb5'], verse: ['F5', 'Gb5', 'F5'], chorus: ['F5', 'Gb5', 'F5'], bridge: ['Gb5'], solo: ['F5', 'Gb5'], outro: ['F5'] },
    form: commonForm([['intro', 8, 'medium'], ['riff', 16, 'high'], ['verse', 16, 'high'], ['chorus', 8, 'peak'], ['bridge', 8, 'low'], ['solo', 16, 'high'], ['riff return', 24, 'peak'], ['outro', 8, 'medium']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight', humanizeJitterMs: 2 },
    cells: [
      cell('polymetric 3 2 2 piano grouping', '3+2+2 grouping', 'lead', 'piano', [0, .75, 1.5, 2.5], [.38, .28, .38, .32], { accents: [.96, .58, .78, .58], articulation: 'staccato', description: 'Accent the first attack of each 3+2+2 group and keep the connecting notes lighter.' }),
      cell('polymetric 2 2 3 sampler grouping', '2+2+3 accents', 'harmony', 'sampler', [0, 1, 2, 2.5], [.18, .18, .18, .18], { accents: [.52, .88, .52, .82], articulation: 'staccato', description: 'Place a competing 2+2+3 accent shape over the piano’s 3+2+2 grouping.' }),
      cell('polymetric displaced synth anchor', 'Offset anchor', 'texture', 'synth', [.5, 2], [1.25, 1.2], { accents: [.42, .6], articulation: 'legato', description: 'Two longer tones soften the metric clash without filling each subdivision.' }),
    ],
  },
  'circuit-bent-broken-electronics': {
    description: 'Circuit-bent studies make instability audible through irregular trigger gaps, pitch jumps, and a sampler response that can vanish on a later pass. The synth patch is a SoundFont approximation; no claim is made that it reproduces a particular bent toy circuit.',
    patterns: ['unstable trigger cell with skipped return', 'pitch jump after a short pulse cluster', 'sampler response with a chance dropout'],
    harmony: ['D minor anchor with unstable upper notes'],
    tempo: [88, 112], harmonicRhythm: 'phrase', harmonyModel: 'modal-drone', bassMotion: 'pedal', requiresChords: false,
    progressions: { intro: ['Dm'], head: ['Dm'], electronics: ['Dm'], coda: ['Dm'] },
    form: commonForm([['intro', 8, 'low'], ['head', 16, 'medium'], ['electronics', 12, 'high'], ['solo', 16, 'medium'], ['head return', 16, 'peak'], ['coda', 8, 'low']]),
    groove: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'rubato', humanizeJitterMs: 11 },
    instrumentDialects: { 'synth:lead': { patchId: 'square-lead' }, 'sampler:texture': { samplePalette: [35, 40, 42, 51, 59] } },
    cells: [
      cell('circuit bent unstable trigger synth', 'Unstable trigger', 'lead', 'synth', [0, .375, 1.75, 2, 3.375], [.22, .18, .32, .15, .42], { accents: [.92, .54, .78, .6, .86], articulation: 'staccato', probabilities: [1, .72, .55, .4, .68], description: 'Keep a short trigger recognizable while optional returns and gaps make the loop unstable.' }),
      cell('circuit bent sampler dropout', 'Sampler dropout', 'texture', 'sampler', [.5, 1.5, 3], [.12, .18, .12], { accents: [.72, .92, .48], articulation: 'staccato', probabilities: [.82, .52, .36], description: 'A few percussion samples answer the synth, with later triggers increasingly likely to drop out.' }),
    ],
  },
};

const MIX: Record<string, { character: Record<string, number | string>; ambience?: Record<string, number> }> = {
  'musique-concrete': { character: { dryness: .92, width: .56, transientSnap: .72, compressionRatio: 1.15, delaySend: .01 }, ambience: { roomSize: .18, reverbSend: .025, delaySend: .01, bloom: .04, preDelayMs: 2 } },
  piano: { character: { dryness: .88, width: .46, transientSnap: .78, compressionRatio: 1.2, delaySend: .02 }, ambience: { roomSize: .22, reverbSend: .05, delaySend: .02, bloom: .08, preDelayMs: 4 } },
  glitch: { character: { dryness: .94, width: .48, transientSnap: .9, compressionRatio: 1.8, delaySend: .015 }, ambience: { roomSize: .16, reverbSend: .025, delaySend: .015, bloom: .02, preDelayMs: 2 } },
  microsound: { character: { dryness: .9, width: .52, transientSnap: .94, compressionRatio: 1.35, delaySend: .01 }, ambience: { roomSize: .14, reverbSend: .02, delaySend: .01, bloom: .02, preDelayMs: 1 } },
  noise: { character: { dryness: .76, width: .64, transientSnap: .82, compressionRatio: 2, delaySend: .02 }, ambience: { roomSize: .28, reverbSend: .08, delaySend: .02, bloom: .08, preDelayMs: 5 } },
  drone: { character: { dryness: .22, width: .76, transientSnap: .28, compressionRatio: 1.12, delaySend: .12 }, ambience: { roomSize: .88, reverbSend: .34, delaySend: .12, bloom: .52, preDelayMs: 38 } },
  spectral: { character: { dryness: .28, width: .78, transientSnap: .32, compressionRatio: 1.15, delaySend: .1 }, ambience: { roomSize: .82, reverbSend: .3, delaySend: .1, bloom: .46, preDelayMs: 32 } },
  'no-wave': { character: { dryness: .9, width: .58, transientSnap: .86, compressionRatio: 1.85, delaySend: .015 }, ambience: { roomSize: .18, reverbSend: .03, delaySend: .015, bloom: .025, preDelayMs: 2 } },
  zeuhl: { character: { dryness: .7, bassForward: .66, width: .68, transientSnap: .8, compressionRatio: 1.8 }, ambience: { roomSize: .3, reverbSend: .12, delaySend: .04, bloom: .12, preDelayMs: 8 } },
  'circuit-bent-broken-electronics': { character: { dryness: .78, width: .56, brightness: .62, transientSnap: .84, compressionRatio: 1.9, delaySend: .025 }, ambience: { roomSize: .25, reverbSend: .08, delaySend: .025, bloom: .06, preDelayMs: 4 } },
};

const PLAYING_STUDIES: Record<string, Pick<Style, 'techniques' | 'instrumentTechniques'>> = {
  deconstructed: { techniques: ['staccato', 'tenuto', 'accent', 'dynamic contrast', 'ensemble release'], instrumentTechniques: { piano: ['staccato', 'tenuto', 'accent'], sampler: ['staccato', 'ghost', 'accent'], synth: ['staccato', 'legato', 'bend'] } },
  'musique-concrete': { techniques: ['sample selection', 'one-shot chop', 'register contrast', 'silence'], instrumentTechniques: { sampler: ['staccato', 'ghost', 'accent'] } },
  piano: { techniques: ['staccato', 'tenuto', 'accent', 'register shift', 'natural decay'], instrumentTechniques: { piano: ['staccato', 'tenuto', 'accent'] } },
  glitch: { techniques: ['sample skip', 'staccato', 'accent', 'displaced return'], instrumentTechniques: { synth: ['staccato', 'bend', 'accent'], sampler: ['staccato', 'ghost', 'accent'] } },
  microsound: { techniques: ['micro-impulse', 'staccato', 'density change', 'silence'], instrumentTechniques: { synth: ['staccato', 'accent'], sampler: ['staccato', 'ghost', 'accent'] } },
  'process-generative': { techniques: ['conditional entry', 'probability thinning', 'cell return'], instrumentTechniques: { synth: ['staccato', 'legato', 'accent'], sampler: ['staccato', 'ghost', 'accent'] } },
  phase: { techniques: ['repeated cell', 'accent displacement', 'stable cycle'], instrumentTechniques: { piano: ['staccato', 'accent'], sampler: ['staccato', 'ghost', 'accent'], synth: ['legato', 'tenuto', 'accent'] } },
  microtonal: { techniques: ['quarter-tone inflection', 'pitch bend', 'legato', 'tenuto'], instrumentTechniques: { synth: ['bend', 'vibrato', 'legato', 'tenuto'], sampler: ['staccato', 'accent'] } },
  'free-improvisation': { techniques: ['gesture and response', 'rubato', 'legato', 'open silence'], instrumentTechniques: { piano: ['staccato', 'legato', 'tenuto'], sampler: ['staccato', 'ghost'], synth: ['legato', 'bend', 'vibrato'] } },
  noise: { techniques: ['density swell', 'impact cluster', 'dynamic release', 'silence'], instrumentTechniques: { synth: ['staccato', 'accent', 'bend'], sampler: ['staccato', 'ghost', 'accent'] } },
  drone: { techniques: ['legato', 'tenuto', 'slow entry', 'gradual release'], instrumentTechniques: { synth: ['legato', 'tenuto', 'portamento'], sampler: ['legato', 'tenuto'] } },
  spectral: { techniques: ['legato', 'tenuto', 'register entry', 'density swell'], instrumentTechniques: { synth: ['legato', 'tenuto', 'vibrato'], sampler: ['legato', 'tenuto'] } },
  'no-wave': { techniques: ['staccato', 'palm mute', 'dead note', 'uneven accents', 'vocal attack'], instrumentTechniques: { voice: ['staccato', 'accent', 'fall'], guitar: ['palm-mute', 'dead-note', 'short-chord-stab', 'accent'], bass: ['staccato', 'dead-note', 'pick'], drums: ['accent', 'ghost', 'rimshot', 'open'] } },
  zeuhl: { techniques: ['chant', 'repeated bass cell', 'asymmetric accents', 'ensemble unison'], instrumentTechniques: { voice: ['accent', 'legato', 'staccato'], piano: ['staccato', 'accent', 'tenuto'], bass: ['staccato', 'accent', 'legato'], drums: ['accent', 'ghost', 'roll'] } },
  polymetric: { techniques: ['3+2+2 accents', '2+2+3 counter-accents', 'shared downbeat'], instrumentTechniques: { piano: ['staccato', 'accent'], sampler: ['staccato', 'ghost', 'accent'], synth: ['legato', 'tenuto', 'accent'] } },
  'circuit-bent-broken-electronics': { techniques: ['unstable trigger', 'conditional dropout', 'pitch bend', 'staccato'], instrumentTechniques: { synth: ['staccato', 'bend', 'vibrato', 'accent'], sampler: ['staccato', 'ghost', 'accent'] } },
};

/** Replace generated placeholder cells with teachable, style-owned studies. */
export function authorWeirdArrangements(pack: GenrePackInput): GenrePackInput {
  return {
    ...pack,
    styles: pack.styles.map(style => {
      const edit = EDITS[style.id];
      if (!edit) return style;
      const mix = MIX[style.id];
      return {
        ...style,
        ...edit,
        ...(PLAYING_STUDIES[style.id] ?? {}),
        ...(mix ? { mix: {
          ...style.mix,
          character: { ...style.mix.character, ...mix.character },
          ...(mix.ambience ? { ambience: { ...style.mix.ambience, ...mix.ambience } } : {}),
        } } : {}),
      };
    }),
  };
}
