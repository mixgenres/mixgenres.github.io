import { RECORDING_FORM_SCORES } from './recordingForms';
import { RECORDING_HARMONIES, parseHarmonicCells } from './recordingHarmonies';
import { STYLE_REFERENCES } from '../styles/styleReferences';
import type { SectionEnergy } from '../schema';
import type { FormStepTemplate } from '../styles/schema';

export interface RecordingArrangement {
  /** Quarter-note pulse in the editable score; rubato is still style-controlled. */
  bpm: number;
  /** Section:bars:energy, separated by commas. These are score adaptations. */
  form: string;
  /** Bar-by-bar harmony, keyed by section kind; repeated cells are explicit. */
  chords?: Record<string, string[]>;
  /** Restrict the existing style ensemble, retaining each part's authored role. */
  instruments?: string[];
  lead?: string;
  /** Explicit section personnel; omitted sections retain the complete ensemble. */
  sectionInstruments?: Record<string, string[]>;
  solos?: Record<string, string>;
  /** Instrument -> style-owned cell shortName for this exact sample section. */
  patternAssignments?: Record<string, Record<string, string>>;
  note: string;
  source?: string;
}

const song = (bpm: number, form: string, note: string, chords?: Record<string, string[]>, extra?: Partial<RecordingArrangement>): RecordingArrangement => ({ bpm, form, note, chords, ...extra });
const rockForm = 'intro:8:3,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,solo:16:4,chorus:16:5,outro:8:3';
const popForm = 'intro:4:2,verse:16:3,prechorus:8:3,chorus:8:4,verse:16:3,prechorus:8:3,chorus:8:4,bridge:8:2,chorus:16:5,outro:4:2';
/** An explicitly recurring cell applies to every section unless overridden. */
const loop = (chords: string[]) => ({ _: chords });

/** Recording-specific score adaptations, not claims of note-for-note transcription.
 * Every catalog recording has an explicit full form and harmonic plan.
 */
const DETAILED_RECORDING_ARRANGEMENTS: Record<string, RecordingArrangement> = {
  'arabic::takht': song(84, 'taqsim:16:1,intro:16:2,verse:32:3,response:16:2,verse:32:4,solo:16:2,refrain:32:4,cadence:8:1',
    'Score adaptation for a small takht: expose the ney in the taqsim, give the oud a later accompanied feature, and keep the ney, violin, oud, qanun and riqq in distinct phrase roles.',
    loop(['G5','G5','C5','G5']), {
      instruments: ['ney','violin','oud','qanun','riq'], lead: 'ney',
      sectionInstruments: {
        taqsim: ['ney'],
        intro: ['ney','violin','oud','qanun','riq'],
        verse: ['ney','violin','oud','qanun','riq'],
        response: ['ney','violin','oud','qanun','riq'],
        solo: ['ney','violin','oud','qanun','riq'],
        refrain: ['ney','violin','oud','qanun','riq'],
        cadence: ['ney','violin','oud','qanun','riq'],
      },
      solos: { taqsim: 'ney', solo: 'oud' },
      patternAssignments: {
        taqsim: { ney: 'takht ney taqsim breath phrase' },
        intro: {
          ney: 'takht heterophonic oud qanun and ney ney statement',
          violin: 'takht heterophonic oud qanun and ney violin statement',
          oud: 'oud foundation pulse study', qanun: 'qanun foundation pulse study', riq: 'riq foundation pulse study',
        },
        verse: {
          ney: 'ney opening-motif development variation',
          violin: 'violin opening-motif development variation',
          oud: 'takht oud phrase-led plucked support',
          qanun: 'qanun opening-motif development variation',
          riq: 'riq opening-motif development variation',
        },
        response: {
          ney: 'takht ney answering ornament', violin: 'takht violin maqam response',
          oud: 'takht oud instrumental answer', qanun: 'takht qanun ornamented phrase reply',
          riq: 'takht heterophonic oud qanun and ney riq pulse',
        },
        solo: {
          ney: 'takht ney breath response to oud', violin: 'takht violin maqam response',
          oud: 'oud phrase answer study', qanun: 'takht qanun ornamented phrase reply',
          riq: 'takht heterophonic oud qanun and ney riq pulse',
        },
        refrain: {
          ney: 'ney opening-motif development variation', violin: 'takht violin maqam response',
          oud: 'takht oud phrase-led plucked support', qanun: 'takht qanun ornamented phrase reply',
          riq: 'riq opening-motif development variation',
        },
        cadence: {
          ney: 'takht heterophonic oud qanun and ney ney cadence fill',
          violin: 'takht heterophonic oud qanun and ney violin cadence fill',
          oud: 'takht heterophonic oud qanun and ney oud cadence fill',
          qanun: 'takht heterophonic oud qanun and ney qanun cadence fill',
          riq: 'takht heterophonic oud qanun and ney riq cadence fill',
        },
      },
    }),
  'tango::golden-age': song(124, 'intro:4:3,A:16:3,B:16:3,A:16:4,variacion:16:5,cierre:4:3', 'Orquesta típica conversation; bandoneón variation after the returning theme.'),
  'tango::troilo': song(124, 'intro:4:3,A:16:3,B:16:3,A:16:4,variacion:16:5,cierre:4:3', 'Bandoneón feature and flexible cadential responses.'),
  'tango::canyengue': song(116, 'intro:4:2,A:16:3,B:16:3,A:16:3,trio:16:4,A:16:3,cierre:2:2', 'Early dance-tango strains, compact attacks, lighter ensemble.'),
  'tango::guardia-nueva-de-caro': song(120, 'intro:4:2,A:16:3,B:16:4,A:16:3,trio:16:4,variacion:16:5,cierre:4:2', 'Independent violin counterlines and chromatic transitions.'),
  'tango::canaro': song(112, 'intro:4:2,A:16:3,B:16:3,verse:16:2,A:16:3,cierre:4:2', 'Instrumental opening gives way to the vocal episode; restrained pulse.'),
  'tango::d-arienzo': song(132, 'intro:4:3,A:16:4,B:16:4,A:16:4,trio:16:3,variacion:16:5,cierre:2:4', 'Relentless marcato with short orchestral breaks.'),
  'tango::di-sarli': song(118, 'intro:4:2,A:16:3,B:16:3,A:16:4,B:16:4,cierre:4:2', 'Piano foundation under long violin arcs.', undefined, { lead: 'violin' }),
  'tango::pugliese': song(118, 'intro:8:3,A:16:4,B:16:2,A:16:4,variacion:16:5,cierre:4:3', 'Yumba opening, lyrical contrast, then the full orchestral return.'),
  'tango::salgan': song(112, 'intro:8:2,A:16:3,B:16:4,A:16:3,solo:16:4,A:16:5,cierre:4:2', 'Piano-led counterpoint and chromatic harmonic motion.', undefined, { lead: 'piano', solos: { solo: 'piano' } }),
  'tango::tango-cancion': song(108, 'intro:8:2,verse:16:2,chorus:16:3,interlude:8:2,verse:16:3,chorus:16:4,cierre:4:2', 'Singer foreground; accompaniment retreats between vocal cadences.'),
  'tango::milonga': song(144, 'intro:4:2,A:16:3,B:16:3,verse:16:3,A:16:4,cierre:4:2', 'Light habanera-derived foundation and vocal/instrumental alternation.'),
  'tango::vals': song(174, 'intro:8:2,A:32:3,B:32:3,A:32:4,cierre:8:2', 'Three-beat rotation and sweeping repeated strains.'),
  'tango::piazzolla-nuevo-tango': song(128, 'intro:8:3,A:16:3,B:16:4,A:16:4,solo:16:3,A:16:5,outro:8:3', 'Persistent minor ostinato with chamber voices entering over it.', loop(['Am','Am','Am','Am','Dm','Dm','E7','E7']), { solos: { solo: 'bandoneon' } }),
  'tango::electrotango-gotan': song(96, 'intro:16:2,A:16:3,B:16:4,breakdown:8:1,A:16:3,B:32:4,outro:16:2', 'Loop-led electronic entry, bandoneón gestures, breakdown and dub-like exit.'),
  'tango::electro-rock-bajofondo': song(125, 'intro:8:2,A:16:3,chorus:16:5,A:16:3,breakdown:8:1,build:8:3,chorus:32:5,outro:8:2', 'Heavy full-band peaks separated by abrupt low-density drops.'),
  'rock::rock-roll': song(168, 'intro:12:4,verse:12:3,chorus:12:4,verse:12:3,chorus:12:4,solo:24:4,verse:12:3,chorus:12:5,outro:4:3', 'Twelve-bar vocal choruses and two guitar solo choruses.', loop(['Bb7','Bb7','Bb7','Bb7','Eb7','Eb7','Bb7','Bb7','F7','Eb7','Bb7','F7']), { solos: { intro: 'guitar', solo: 'guitar' } }),
  'rock::classic-rock': song(100, 'intro:8:2,verse:16:2,chorus:8:4,verse:16:2,chorus:8:4,solo:16:4,chorus:16:5,outro:16:4', 'Acoustic verses contrast with electric choruses and guitar lead.'),
  'rock::hard-rock': song(94, rockForm, 'Riff foundation, wide vocal gaps, guitar solo and returning riff.', loop(['E5','D5','A5','E5']), { solos: { solo: 'guitar' } }),
  'rock::alternative': song(88, 'intro:8:3,verse:16:3,chorus:16:4,verse:16:3,chorus:16:4,bridge:16:2,solo:16:5,outro:8:4', 'Abrupt harmonic shifts and layered guitar climaxes; contrasting verse, chorus and bridge harmonic cells.'),
  'rock::psychedelic': song(108, 'intro:8:3,verse:12:3,chorus:4:4,verse:12:3,chorus:4:4,solo:24:5,verse:12:4,outro:16:4', 'Dominant-sharp-nine colour, riff, guitar feature and extended exit.', loop(['E7#9','E7#9','G','A']), { solos: { solo: 'guitar' } }),
  'rock::progressive': song(132, 'intro:16:1,A:32:4,B:24:3,A:32:4,bridge:32:2,solo:32:4,A:32:5,outro:16:2', 'Acoustic prelude, recurring electric themes, middle development and reprise; meter follows the existing progressive style.'),
  'rock::indie': song(104, 'intro:8:3,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,solo:8:4,verse:16:3,chorus:8:5,outro:8:3', 'Interlocking guitar roles; short lead solo.', undefined, { solos: { solo: 'guitar' } }),
  'rock::shoegaze': song(170, 'intro:8:5,A:16:4,B:8:3,A:16:5,B:8:3,bridge:16:2,A:16:5,outro:16:4', 'Explosive guitar mass alternates with softer floating vocal sections.'),
  'rock::post-rock': song(80, 'opening:32:1,build:64:2,A:64:3,climax:64:5,breakdown:32:1,evolution:64:3,climax:64:5,outro:32:1', 'Long multi-episode score adaptation of Storm; gradual ensemble entrances, two large climaxes, quiet dissolution.'),
  'metal::heavy-metal': song(76, 'intro:8:2,riff:8:4,verse:16:3,riff:8:4,verse:16:3,bridge:16:4,solo:24:5,riff:16:4,outro:16:5', 'Slow riff narrative followed by a faster-feeling instrumental climax.', undefined, { solos: { solo: 'guitar' } }),
  'metal::thrash': song(212, 'intro:16:4,verse:32:4,prechorus:8:4,chorus:16:5,verse:32:4,prechorus:8:4,chorus:16:5,bridge:32:1,solo:32:3,build:16:4,solo:32:5,verse:32:4,chorus:16:5,outro:32:4', 'Fast riff sections frame a clean middle episode and two guitar features.', undefined, { solos: { solo: 'guitar' } }),
  'punk::punk': song(176, 'intro:8:4,chorus:8:4,verse:16:3,chorus:8:4,verse:16:3,chorus:16:5,outro:8:4', 'Short repeated sections, gang-response chorus, no added solo.'),
  'punk::hardcore': song(198, 'intro:4:4,verse:8:4,chorus:8:5,verse:8:4,chorus:8:5,outro:2:4', 'Compact hardcore statement with a hard stop.'),
  'punk::post-hardcore': song(94, 'intro:8:2,break:1:1,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,bridge:8:2,chorus:16:5,outro:4:3', 'Bass opening and suspended entrance before full-band responses.'),
  'pop::contemporary': song(103, popForm, 'Disco bass foundation, repeated chorus lifts and a reduced middle section.', loop(['Bm','F#m','Em','Bm'])),
  'pop::synth-pop': song(113, popForm, 'Synth foundation with recurring guitar response and sustained chorus lift.', { ...loop(['Cm','Eb','Ab','Cm']), chorus: ['Fm','Ab','Cm','Bb'] }),
  'pop::art-pop': song(108, 'intro:8:2,verse:16:3,prechorus:8:3,chorus:8:4,verse:16:3,prechorus:8:3,chorus:8:4,bridge:16:4,chorus:16:5,outro:16:3', 'Insistent drum and synth pulse; refrain expands into the extended closing section.', loop(['Cm','Ab','Bb','Cm'])),
  'pop::power-pop': song(128, 'intro:4:3,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,solo:8:4,chorus:16:5,outro:8:3', 'Economical guitar-pop sections and melodic lead break.', undefined, { solos: { solo: 'guitar' } }),
  'hip-hop::boom-bap': song(84, 'intro:8:2,verse:32:3,chorus:8:3,verse:32:4,chorus:8:3,outro:8:2', 'Two long rap verses over a sparse persistent piano/bass loop.'),
  'hip-hop::golden-age': song(96, 'intro:8:2,chorus:8:3,verse:16:3,chorus:8:4,verse:16:3,chorus:16:4,outro:8:2', 'Bass-led loop, relaxed verses and call-response hook.'),
  'r-and-b::alternative-r-b': song(108, 'intro:8:2,A:32:3,chorus:16:4,A:32:4,transition:16:2,B:48:2,solo:16:3,outro:16:1', 'Two distinct episodes connected by an extended texture/tempo-feel transition; no new style is introduced.'),
  'r-and-b::southern-soul': song(104, 'intro:8:1,verse:16:1,verse:16:2,bridge:16:3,chorus:16:4,chorus:32:5,outro:8:4', 'Quiet ballad opening progressively becomes a full soul shout.'),
  'funk::funk': song(108, 'intro:8:3,A:32:4,breakdown:16:2,A:32:4,solo:32:4,A:32:5,outro:16:3', 'One-chord pocket, call-response and an extended band vamp.', loop(['D9'])),
  'funk::james-brown-the-one': song(112, 'intro:8:3,A:32:4,B:16:3,A:32:4,solo:32:4,A:32:5,outro:16:3', 'The one remains the anchor through horn answers and the drum feature.'),
  'funk::jazz-funk': song(100, 'intro:16:2,A:32:3,B:16:4,solo:64:3,B:32:4,solo:64:4,A:32:5,outro:16:2', 'Long bass/synth ostinato with keyboard features and a contrasting middle.', loop(['Bbm7','Eb7']), { solos: { solo: 'synth' } }),
  'funk::minneapolis': song(112, 'intro:4:2,verse:16:2,chorus:8:3,verse:16:2,chorus:8:4,bridge:8:2,chorus:16:4,outro:8:2', 'Lean guitar/drum texture; avoid filling the empty low-end space.', loop(['A7','A7','D7','A7','E7','D7','A7','E7']), { instruments: ['voice','guitar','synth','drums'] }),
  'jazz::modal': song(136, 'intro:16:1,head:32:3,solo:64:3,solo:64:4,solo:64:3,head:32:3,tag:8:1', '32-bar AABA modal choruses: D Dorian, eight bars up a semitone, return.', { intro: ['Dm7'], head: [...Array(16).fill('Dm7'),...Array(8).fill('Ebm7'),...Array(8).fill('Dm7')], solo: [...Array(16).fill('Dm7'),...Array(8).fill('Ebm7'),...Array(8).fill('Dm7')], tag: ['Dm7'] }, { solos: { solo: 'trumpet' } }),
  'jazz::hard-bop': song(126, 'intro:8:2,head:32:3,solo:64:3,solo:64:4,solo:64:3,trading:32:4,head:32:4,tag:8:2', 'Piano call and horn response; successive full choruses retain the rhythm section.'),
  'jazz::gypsy-jazz': song(196, 'intro:8:2,head:16:3,solo:48:3,solo:48:4,head:16:4,tag:4:2', 'La pompe remains behind successive guitar/violin choruses.', loop(['Am','Am','Dm','Dm','E7','E7','Am','Am','Dm','Dm','Am','Am','E7','E7','Am','E7']), { solos: { solo: 'guitar' } }),
  'jazz::post-bop': song(120, 'intro:8:2,head:24:3,solo:72:3,solo:72:4,head:24:3,tag:8:1', 'Minor-blues-derived head with extended solo choruses and a recurring bass figure.'),
  'blues::modern-blues': song(90, 'intro:12:2,verse:12:3,verse:12:3,solo:24:4,verse:12:3,solo:12:4,outro:12:2', 'Minor twelve-bar form with guitar replies and sustained string colour.', loop(['Bm','Bm','Bm','Bm','Em','Em','Bm','Bm','G7','F#7','Bm','F#7']), { solos: { intro: 'guitar', solo: 'guitar' } }),
  'blues::texas': song(126, 'intro:12:4,verse:12:3,verse:12:3,solo:24:4,verse:12:3,solo:24:5,outro:4:4', 'Shuffled twelve-bar choruses; lead guitar and rhythm guitar retain distinct jobs.', loop(['E7','E7','E7','E7','A7','A7','E7','E7','B7','A7','E7','B7']), { solos: { solo: 'guitar' } }),
  'blues::chicago': song(108, 'intro:4:3,verse:16:3,verse:16:3,solo:16:4,verse:16:4,outro:4:3', 'Stop-time first eight bars followed by the answering blues cadence.', loop(['A7','A7','A7','A7','A7','A7','A7','A7','D7','D7','A7','A7','E7','D7','A7','E7'])),
  'salsa::son': song(84, 'intro:8:2,verse:16:2,verse:16:3,interlude:16:3,verse:16:3,solo:16:4,outro:8:2', 'Tres figure, sparse vocal verses, trumpet reply and instrumental close.', loop(['Dm','F','Gm','A7']), { solos: { solo: 'trumpet' } }),
  'salsa::salsa-dura': song(102, 'intro:8:3,verse:16:3,verse:16:3,montuno:16:4,coro:16:4,mambo:16:5,coro:32:5,cierre:4:3', 'Song opening moves to coro/pregón, trombone mambo and extended dance vamp.'),
  'salsa::salsa-jazz': song(108, 'intro:16:2,A:32:3,montuno:32:4,solo:64:4,mambo:32:5,montuno:64:5,cierre:8:3', 'Extended piano feature and harmonically active instrumental development.', undefined, { solos: { solo: 'piano' } }),
  'reggaeton::classic': song(96, 'intro:8:2,chorus:8:4,verse:16:3,chorus:8:4,verse:16:3,bridge:8:2,chorus:16:5,outro:8:3', 'Dembow hook entry, rap verses and repeated closing hook.'),
  'reggaeton::melodic': song(128, popForm, 'Straight disco/synth-pop pulse of this specific crossover recording; the existing melodic style patterns remain in use.'),
  'bachata::moderna': song(130, popForm, 'Requinto answers the singer; segunda and bongó carry the dance foundation.'),
  'reggae::roots': song(74, 'intro:4:2,chorus:8:3,verse:8:2,chorus:8:3,verse:8:2,chorus:16:4,outro:8:2', 'Short verse/refrain cycles over unhurried offbeats.', { ...loop(['A','A','D','A']), verse: ['A','E','A','D','A','E','D','A'] }),
  'reggae::dub': song(76, 'intro:8:2,A:16:3,breakdown:8:1,A:16:3,solo:16:4,breakdown:8:1,A:16:3,outro:16:1', 'Melodica feature, rhythm dropouts and delay tails frame the recurring riddim.', undefined, { solos: { solo: 'melodica' } }),
  'afrobeat::classic-afrobeat': song(104, 'intro:16:2,groove:32:3,head:32:4,solo:64:3,verse:32:3,coro:32:4,solo:32:4,coro:32:5,outro:16:3', 'Long interlocking band opening before vocals; horns, keys and percussion retain independent roles.'),
  'afrobeat::funk-heavy-afrobeat': song(116, 'intro:16:2,groove:32:3,head:32:4,solo:64:4,verse:32:3,coro:32:4,verse:32:4,coro:64:5,outro:16:3', 'Extended ostinato, late vocal entrance, repeated responses and horn punches.'),
  'mbalax::sabar-heavy': song(130, 'intro:10:2,groove:12:3,A:80:5,breakdown:15:3,solo:19:4,cierre:8:5', 'Sabar solo opening, Kaolack accompaniment, unison bàkk, short repeated rhythm and closing unison. Bar counts approximate the documented time landmarks.', undefined, { source: 'https://ocw.mit.edu/courses/21m-030-introduction-to-world-music-spring-2013/8af86ec7c48ba70e22026d9f02a3248c_MIT21M_030S13_listnsabar.pdf' }),
  'qawwali::contemporary-fusion': song(72, 'opening:16:1,verse:24:2,response:24:2,verse:24:3,cadence:16:1', 'The title track is voice over drone and keyboards, without the drum/guitar ensemble of other album tracks.', undefined, { instruments: ['voice','synth'], lead: 'voice', source: 'https://realworldrecords.com/releases/night-song/' }),
  'cinematic::modern-score': song(60, 'opening:8:1,ostinato:16:2,build:16:3,climax:16:5,release:8:2,outro:8:1', 'Four-chord ostinato grows from piano to full ensemble, then returns to exposed piano.', loop(['Am','Em','G','D'])),
  'cinematic::hybrid': song(72, 'opening:8:1,A:16:2,evolution:16:2,A:16:3,dissolve:8:1', 'Sparse repeated piano gesture above a slowly changing electronic bed.'),
  'cinematic::ambient-score': song(54, 'opening:16:1,A:32:2,solo:32:3,A:32:2,dissolve:16:1', 'Expressive synthesized lead over very slow sustained harmony; no dance climax.'),
  'ambient::generative-ambient': song(60, 'opening:32:1,evolution:128:2,texture-shift:128:2,evolution:128:3,dissolve:32:1', 'Long gradual process, continuing cells and minimal dynamic steps.'),
  'weird::process-generative': song(60, 'opening:32:1,evolution:128:2,texture-shift:128:2,evolution:128:3,dissolve:32:1', 'Long-form process adaptation using the existing generative pattern vocabulary.'),
  'indian-classical::instrumental-gat': song(72, 'alap:32:1,jod:32:2,jhala:24:3,gat:64:3,solo:64:4,jhala:32:5,cadence:8:2', 'Sitar development, pulse entrance, tabla gat and accelerating jhala; free sections are approximated on the score grid.'),
  'indian-classical::dhrupad': song(48, 'alap:64:1,jor:48:2,nom-tom:32:3,dhrupad:64:3,cadence:8:1', 'Drone persists through unmetered voice development; pakhawaj enters only with the composition.'),
  'gamelan::javanese': song(64, 'buka:8:1,main-cycle:32:3,irama-change:32:2,main-cycle:64:3,irama-change:32:4,suwuk:8:1', 'Colotomic cycles and irama changes; Western bar labels approximate cyclic time.'),
};

export function parseRecordingForm(value: string): Array<{ kind: string; bars: number; energy: SectionEnergy; intensity: FormStepTemplate['intensity'] }> {
  const levels = ['low','low','medium','high','peak'] as const;
  return value.split(',').map(token => {
    const [kind, bars, energy] = token.split(':');
    if (!kind || token.split(':').length !== 3 || !Number.isInteger(+energy) || !Number.isInteger(+bars) || +bars < 1 || +energy < 1 || +energy > 5) throw new Error(`Invalid recording section: ${token}`);
    return { kind, bars: +bars, energy: +energy as SectionEnergy, intensity: levels[+energy - 1] };
  });
}

/** All public songs require an authored score. */
export const RECORDING_ARRANGEMENTS: Record<string, RecordingArrangement> = Object.fromEntries([
  ...RECORDING_FORM_SCORES.map(line => {
    const [key, bpm, form, cells] = line.split('|');
    const reference = STYLE_REFERENCES[key as keyof typeof STYLE_REFERENCES];
    if (!reference || !cells || !form || !(+bpm > 0)) throw new Error(`Invalid recording score: ${key}`);
    return [key, { bpm: +bpm, form, chords: parseHarmonicCells(cells),
      note: reference.qualities.join('; '),
    }] as const;
  }),
  ...Object.entries(DETAILED_RECORDING_ARRANGEMENTS).map(([key, recording]) => {
    const chords = recording.chords ?? RECORDING_HARMONIES[key];
    if (!chords) throw new Error(`Missing recording harmony: ${key}`);
    return [key, { ...recording, chords }] as const;
  }),
]);

/** Section-specific sample-score cells for styles whose form needs explicit
 * phrase development. These remain local to the exact recorded style sample. */
const SAMPLE_PATTERN_ASSIGNMENTS: Record<string, Pick<RecordingArrangement, 'patternAssignments' | 'sectionInstruments'>> = {
  'flamenco::sevillanas': {
    patternAssignments: { link: { cajon: 'Sevillanas cajón link remate' } },
  },
  'cinematic::modern-score': {
    sectionInstruments: { release: ['piano'], outro: ['piano'] },
    patternAssignments: {
      ostinato: { synth: 'modern score synth ostinato and resolution lift' },
      build: { synth: 'modern score synth ostinato and resolution lift' },
      climax: { synth: 'synth opening-motif development variation' },
    },
  },
  'pop::power-pop': {
    patternAssignments: { chorus: { synth: 'power-pop chorus pad bloom' } },
  },
  'tango::chacarera-crossover': {
    patternAssignments: {
      response: { 'bombo-leguero': 'bombo-leguero response cross-accent' },
      interlude: {
        violin: 'chacarera violin interlude variation',
        'bombo-leguero': 'bombo-leguero response cross-accent',
      },
    },
  },
};
for (const [key, changes] of Object.entries(SAMPLE_PATTERN_ASSIGNMENTS)) {
  const arrangement = RECORDING_ARRANGEMENTS[key];
  if (!arrangement) throw new Error(`Missing sample arrangement for section pattern assignments: ${key}`);
  RECORDING_ARRANGEMENTS[key] = {
    ...arrangement,
    ...(changes.sectionInstruments ? { sectionInstruments: { ...arrangement.sectionInstruments, ...changes.sectionInstruments } } : {}),
    ...(changes.patternAssignments ? { patternAssignments: { ...arrangement.patternAssignments, ...changes.patternAssignments } } : {}),
  };
}
