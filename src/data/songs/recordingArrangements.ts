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
  /** Extra teaching players remain available, but an exposed source study can
   * keep its written personnel instead of receiving an automatic tutti. */
  activateTeachingSupport?: boolean;
  lead?: string;
  /** Section (or `kind#N`) -> the part students should follow as the lead. */
  sectionLeads?: Record<string, string>;
  /** Explicit section personnel; omitted sections retain the complete ensemble. Keys may use `kind#N` to vary one occurrence. */
  sectionInstruments?: Record<string, string[]>;
  /** Sections where the sample has a sung or spoken lead; other sections stay instrumental. */
  vocalSections?: string[];
  /** Section (or `kind#N`) -> featured instrument. */
  solos?: Record<string, string>;
  /** Section (or `kind#N`) -> the featured passage's accompaniment mode. */
  soloModes?: Record<string, 'accompanied' | 'unaccompanied' | 'trading'>;
  /** Instrument (or instrument:role) -> style-owned cell shortName per section. Keys may use `kind#N` (one-based occurrence) to vary a specific return while inheriting the kind-level assignments. */
  patternAssignments?: Record<string, Record<string, string>>;
  /** Section-local tempo changes for forms whose named sections carry a tempo lift. */
  sectionBpm?: Record<string, number>;
  /** Preserve authored cues in samples when an automatic phrase swap would change the gesture. Supports the same optional `kind#N` occurrence key. */
  lockPatternAssignments?: Record<string, string[]>;
  note: string;
  source?: string;
}

const song = (bpm: number, form: string, note: string, chords?: Record<string, string[]>, extra?: Partial<RecordingArrangement>): RecordingArrangement => ({ bpm, form, note, chords, ...extra });
const rockForm = 'intro:8:3,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,solo:16:4,chorus:16:5,outro:8:3';
const popForm = 'intro:4:2,verse:16:3,prechorus:8:3,chorus:8:4,verse:16:3,prechorus:8:3,chorus:8:4,bridge:8:2,chorus:16:5,outro:4:2';
/** An explicitly recurring cell applies to every section unless overridden. */
const loop = (chords: string[]) => ({ _: chords });

const SALSA_FORM_PATTERN_ASSIGNMENTS: Record<string, NonNullable<RecordingArrangement['patternAssignments']>> = {
  'salsa::puerto-rican-salsa': {
    intro: { piano: 'PR piano montuno', tres: 'PR tres reply' },
    verse: { piano: 'PR piano montuno', tres: "PR tres reply" },
    chorus: { piano: "PR piano montuno", tres: "PR tres reply" },
    coro: { piano: 'PR piano montuno', tres: 'PR tres reply' },
    mambo: { piano: "PR piano montuno", tres: "PR tres reply" },
    soneo: { piano: "PR piano montuno", tres: "PR tres reply" },
    cierre: { piano: 'PR piano close', tres: 'PR tres close' },
  },
};

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
        cadence: ['ney','violin','oud','qanun','riq'] },
      solos: { taqsim: 'ney', solo: 'oud' },
      patternAssignments: {
        taqsim: { ney: "Ney phrase" },
        intro: {
          ney: 'Ney statement', violin: 'Violin statement',
          oud: 'Oud accompaniment', qanun: 'Qanun accompaniment', riq: 'Riq pulse' },
        verse: {
          ney: "Takht Ney", violin: "Takht Violin", oud: "Oud accompaniment",
          qanun: "Qanun accompaniment", riq: "Riq pulse" },
        response: {
          ney: 'Ney answering ornament', violin: 'Violin maqam response',
          oud: 'Oud instrumental answer', qanun: 'Qanun comping', riq: 'Riq pulse' },
        solo: {
          ney: 'Ney phrase', violin: 'Violin maqam response',
          oud: 'Oud instrumental answer', qanun: 'Qanun comping', riq: 'Riq pulse' },
        refrain: {
          ney: "Takht Ney", violin: 'Violin maqam response',
          oud: 'Oud comping', qanun: 'Qanun comping', riq: "Riq pulse" },
        cadence: { } } }),
  'tango::golden-age': song(124, 'intro:8:2,A:16:3,B:16:4,A:16:3,variacion:16:5,cierre:4:3', 'Dance-floor score: state the tune plainly, lift the second strain, return to the melody, then give the bandoneons a short closing variation.', undefined, { solos: { variacion: 'bandoneon' } }),
  'tango::troilo': song(124, 'intro:8:2,tema:24:3,bandoneon:16:4,contracanto:16:2,tema:24:4,variacion:16:5,coda:4:2', 'Troilo score: a singing bandoneon theme opens into a feature, falls back for a quiet countermelody, then gathers for the final variation.', undefined, {
    solos: { bandoneon: 'bandoneon', variacion: 'bandoneon' },
    sectionInstruments: { contracanto: ['violin','piano','upright-bass'] } }),
  'tango::canyengue': song(116, 'intro:4:2,estribillo:8:3,copla:8:3,estribillo:8:3,trio:8:4,copla:8:3,arrastre:1:2,cierre:2:3', 'Canyengue teaching score: clipped two-beat bandoneon calls trade with the fiddle, the trio briefly changes harmony, and a one-bar low arrastre pulls the cadence into the tonic close.'),
  'tango::guardia-nueva-de-caro': song(120, 'intro:8:2,tema:16:3,violin:16:4,dialogo:16:3,trio:16:4,tema:16:3,variacion:16:5,coda:4:2', 'De Caro score: the violin steps forward, trades counterlines with the bandoneon, and returns to the tune before the final variation.', undefined, {
    solos: { violin: 'violin' },
    sectionInstruments: { dialogo: ['bandoneon','violin','piano','upright-bass'] } }),
  'tango::canaro': song(112, 'intro:4:2,tema:16:3,refrain:16:4,tema:16:3,interlude:8:2,refrain:16:4,cierre:4:2', 'Canaro score adaptation: compact bandoneon statements give way to a violin-led refrain, then a short instrumental link returns to the dance pulse.', undefined, {
    sectionInstruments: {
      intro: ['bandoneon','piano','upright-bass'],
      refrain: ['violin','piano','upright-bass'],
      interlude: ['bandoneon','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      tema: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      refrain: { violin: 'Violin refrain', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      interlude: { bandoneon: 'Bandoneon refrain', piano: 'Piano pickup', 'upright-bass': 'Root–fifth bass' },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' } } }),
  'flamenco::granaina': song(60, 'salida:8:1,cante:24:2,falseta:16:3,cante:24:3,cadence:8:1', 'Free-time Granaína score adaptation: the voice shapes the long copla, the guitar takes one exposed falseta, and the cadence follows the final vocal release.', {
    _: ['Bm','A','G','F#'], falseta: ['Bm','A','G','F#'] }, {
    instruments: ['voice','guitar'], lead: 'voice', solos: { salida: 'guitar', falseta: 'guitar' },
    sectionInstruments: { salida: ['guitar'], cante: ['voice','guitar'], falseta: ['guitar'], cadence: ['voice','guitar'] } }),
  'flamenco::malaguena': song(56, 'salida:8:1,cante:24:2,guitar-answer:12:2,cante:24:3,cadence:8:1', 'Free-time Malagueña score adaptation: let the singer set the phrase lengths, answer with a spacious arpeggio, then close after the cante settles.', {
    _: ['Am','G','F','E'], 'guitar-answer': ['Am','G','F','E'] }, {
    instruments: ['voice','guitar'], lead: 'voice', solos: { salida: 'guitar', 'guitar-answer': 'guitar' },
    sectionInstruments: { salida: ['guitar'], cante: ['voice','guitar'], 'guitar-answer': ['guitar'], cadence: ['voice','guitar'] } }),
  'tango::d-arienzo': song(132, 'intro:4:3,tema:16:4,parada:1:1,tema:16:4,contraste:16:3,syncopa-burst:1:4,tema:16:5,variacion:16:5,cierre:2:4', 'D’Arienzo teaching score: hard marcato drives the theme, a clipped ensemble parada opens a true pocket of air, then three offbeat bandoneon attacks cut across the steady pulse before the final push. This is a playable style study, not a recording transcription.', undefined, {
    // A short collective parada lands on beat one; its clean release leaves
    // the rest of the bar empty before the lower-energy contrast returns.
    sectionInstruments: { parada: ['bandoneon','violin','piano','upright-bass'], contraste: ['violin','piano','upright-bass'] } }),
  'tango::di-sarli': song(118, 'piano:8:2,tema:32:3,contraste:16:2,tema:32:4,violin:16:4,tema:16:5,coda:4:2', 'Di Sarli score adaptation: rolling piano opens the piece, long violin lines carry the themes, and a quieter piano pickup clears space for the featured return.', undefined, {
    solos: { violin: 'violin' },
    sectionInstruments: { piano: ['piano','upright-bass'], contraste: ['violin','piano','upright-bass'] },
    patternAssignments: {
      piano: { piano: 'Rolling piano', 'upright-bass': 'Root–fifth bass' },
      contraste: { violin: 'Lyrical violin', piano: 'Piano pickup', 'upright-bass': 'Root–fifth bass' },
      violin: { violin: 'Violin return', piano: 'Rolling piano', 'upright-bass': 'Root–fifth bass' },
      coda: { violin: 'Lyrical violin', piano: 'Piano pickup', 'upright-bass': 'Root–fifth bass' } } }),
  'tango::pugliese': song(118, 'yumba:8:3,tema:16:4,silencio:1:1,contraste:16:2,crescendo:16:4,tema-reprise:16:5,variacion:16:5,coda:3:3,chan-chan:1:5', 'Pugliese score: weighted yumba attacks give way to a full-bar silence, a tense reduced return, and a slow ensemble crescendo. After the varied reprise, a separated chan-chan close leaves a final pocket of silence.', undefined, {
    solos: { variacion: 'bandoneon' },
    // Pugliese's dramatic break is a written ensemble rest, with the next
    // contrast rebuilding tension rather than filling the gap with a loop.
    sectionInstruments: {
      silencio: [],
      'chan-chan': ['bandoneon','violin','piano','upright-bass'] },
    lockPatternAssignments: { 'chan-chan': ['bandoneon','violin','piano','upright-bass'] },
    patternAssignments: {
      'chan-chan': { bandoneon: 'Chan-chan close', violin: 'Chan-chan close', piano: 'Chan-chan close', 'upright-bass': 'Chan-chan close' } } }),
  'tango::salgan': song(112, 'piano:8:2,tema:16:3,contrapunto:16:4,tema:16:3,piano-solo:16:4,ensemble:16:5,coda:4:2', 'Salgán score: piano sets the pulse, inner voices answer the tune, and a piano feature opens into a compact ensemble finish.', undefined, { lead: 'piano', solos: { 'piano-solo': 'piano' } }),
  'tango::modern-orquesta': song(124, 'intro:8:2,A:24:4,B:16:2,A:24:5,corte:1:1,tutti-hit:1:5,variacion:24:5,cierre:4:3', 'Modern orquesta teaching score: alternate forceful ensemble strains with a reduced lyrical passage. A full-bar corte creates a true pause; one coordinated tutti hit cues the full-band variation. This is an arrangement study, not a reconstruction of a named recording.', {
    _: ['Am','Dm','E7','Am'], B: ['C','F','G7','C'] }, {
    sectionInstruments: {
      corte: [],
      'tutti-hit': ['bandoneon','violin','piano','upright-bass'] } }),
  'tango::tango-cancion': song(108, 'intro:8:2,verse:16:3,interlude:8:2,verse:16:3,respiro:1:1,refrain:16:4,bandoneon:8:3,refrain:16:5,cierre:4:2', 'Tango canción score adaptation: let the singer finish the verse, leave a full-bar respiro before the refrain, then answer the vocal cadence with bandoneon.', undefined, {
    solos: { bandoneon: 'bandoneon' },
    sectionInstruments: {
      intro: ['bandoneon','piano','guitar','upright-bass'],
      interlude: ['bandoneon','piano','guitar','upright-bass'],
      // A written breath in the score: no ensemble part should fill the gap.
      respiro: [] } }),
  'tango::milonga': song(144, 'intro:4:2,estribillo:8:3,copla:16:3,estribillo:8:4,copla:16:3,interlude:8:2,traspie:2:4,estribillo:16:5,cierre:4:2', 'Milonga score: the habanera bass keeps its quick two-beat bounce through refrain and copla. A brief bandoneon traspié adds double-time pickups over the steady accompaniment, then the final refrain returns to the regular pulse.', undefined, {
    solos: { traspie: 'bandoneon' },
    sectionInstruments: {
      interlude: ['guitar','piano','upright-bass'],
      // Expose the two-bar double-time lead turn against the continuing
      // habanera accompaniment, then restore the violin on the refrain.
      traspie: ['bandoneon','guitar','piano','upright-bass'] } }),
  'tango::vals': song(174, 'intro:8:2,tema:24:3,tema:24:4,trio:24:3,tema:24:5,coda:8:2', 'Vals score: flowing three-beat strains cross the bar line; the trio supplies the contrast before the final sweep.'),
  'gnawa::traditional': song(98, 'opening:4:1,call:8:2,response:8:3,cycle:16:3,acceleration:16:4,call:8:4,response:16:5,cycle:16:4,cadence:4:2', 'Traditional Gnawa teaching score: introduce the guembri drone before the lead call, let guembri and qraqeb answer without constant vocal doubling, then thicken the cycle and release to an instrumental cadence. Keep one modal center throughout.', loop(['D5'])),
  'gnawa::lila-trance': song(100, 'invocation:8:1,call:8:2,cycle-a:16:3,response-a:8:3,cycle-b:16:4,acceleration:16:5,solo:8:4,final-response:16:5,cadence:4:2', 'Lila teaching score: begin with guembri and qraqeb, place the chant in short calls, and build the repeated cycle with a measured tempo rise. The guembri feature and final response carry the peak before an instrumental cadence; this is a compact study, not a ceremony transcription.', loop(['D5']), {
    sectionBpm: { invocation: 100, call: 100, 'cycle-a': 102, 'response-a': 104, 'cycle-b': 108, acceleration: 112, solo: 112, 'final-response': 116, cadence: 108 } }),
  'gnawa::gnawa-jazz': song(112, 'opening:8:1,theme:16:2,groove:16:3,call:16:3,response:16:3,solo:24:4,breakdown:8:1,theme:16:3,sax-climax:24:5,outro:8:2', 'Gnawa-jazz teaching score: keep the guembri vamp and qraqeb compound pulse underneath short voice calls and saxophone answers. Drop to a reduced vamp before the second feature; the sample leaves the drum kit out so a generic backbeat does not cover the hand percussion.', {
    _: ['Dm7','Dm7','Gm7','Dm7'], response: ['Dm7','Gm7'] }, {
    instruments: ['voice','tenor-sax','guembri','qraqeb'],
    solos: { solo: 'tenor-sax', 'sax-climax': 'tenor-sax' },
    sectionInstruments: {
      opening: ['guembri','qraqeb'],
      theme: ['voice','guembri','qraqeb'],
      groove: ['voice','tenor-sax','guembri','qraqeb'],
      call: ['voice','guembri','qraqeb'],
      response: ['tenor-sax','guembri','qraqeb'],
      solo: ['tenor-sax','guembri','qraqeb'],
      breakdown: ['guembri','qraqeb'],
      'sax-climax': ['tenor-sax','guembri','qraqeb'],
      outro: ['guembri','qraqeb'] } }),
  'gnawa::gnawa-rock': song(112, 'intro:8:1,verse:16:2,chorus:16:4,verse:16:3,solo:16:4,breakdown:8:1,build:8:3,chorus:24:5,outro:8:2', 'Gnawa-rock teaching score: give the guembri a sparse opening, let short vocal calls sit over its riff and qraqeb, then bring guitar and the rock kit into the chorus. Strip back for the breakdown and rebuild into the final full-band chorus; this arrangement is a style study, not a reconstruction of a named recording.', {
    _: ['Em','G','D','Em'] }, {
    solos: { solo: 'guitar' },
    sectionInstruments: {
      intro: ['guembri'],
      verse: ['voice','guembri','qraqeb'],
      chorus: ['voice','guitar','guembri','qraqeb','drums'],
      solo: ['guitar','guembri','qraqeb','drums'],
      breakdown: ['guembri'],
      build: ['guembri','qraqeb','drums'],
      outro: ['guitar','guembri','qraqeb','drums'] },
    sectionBpm: { intro: 108, verse: 112, chorus: 116, solo: 120, breakdown: 108, build: 112, outro: 116 } }),
  'tango::piazzolla-nuevo-tango': song(128, 'intro:8:2,ostinato:16:3,tema:16:4,contraste:16:2,bandoneon:16:4,corte:1:1,arrastre:1:3,tema:16:5,ostinato:8:4,coda:8:2', 'Nuevo tango study: the 3+3+2 ostinato anchors angular themes, loosens for a lyrical contrast, then cuts to a full-bar ensemble suspension. Bandoneon and bass answer the silence with a one-bar arrastre into the returning hook.', loop(['Am','Am','Am','Am','Dm','Dm','E7','E7']), {
    solos: { bandoneon: 'bandoneon', arrastre: 'bandoneon' },
    sectionInstruments: { corte: [], arrastre: ['bandoneon','upright-bass'] },
    patternAssignments: { arrastre: { bandoneon: 'Bandoneon drag', 'upright-bass': 'Bass drag' } } }),
  'tango::electrotango-gotan': song(96, 'intro:16:1,loop:16:2,hook:16:4,breakdown:16:1,hook:16:4,bandoneon:8:3,hook:16:5,outro:16:2', 'Electrotango score: introduce the beat gradually, build around a recurring hook, strip back for a breakdown, and restore the bandoneon over the final loop.', undefined, {
    solos: { bandoneon: 'bandoneon' },
    sectionInstruments: { breakdown: ['synth','drums'] } }),
  'tango::electro-rock-bajofondo': song(125, 'intro:8:2,riff:16:4,verse:16:3,chorus:16:5,breakdown:8:1,build:8:3,chorus:32:5,tag:8:4,outro:8:2', 'Electro-rock score: a distorted riff and rock backbeat trade with tango syncopation; the breakdown and rebuild set up an extended chorus.'),
  'rock::rock-roll': song(168, 'intro:12:4,verse:12:3,chorus:12:4,verse:12:3,chorus:12:4,solo:24:4,verse:12:3,chorus:12:5,outro:4:3', 'Twelve-bar vocal choruses and two guitar solo choruses.', loop(['Bb7','Bb7','Bb7','Bb7','Eb7','Eb7','Bb7','Bb7','F7','Eb7','Bb7','F7']), { solos: { intro: 'guitar', solo: 'guitar' } }),
  'rock::classic-rock': song(100, 'intro:8:2,verse:16:2,chorus:8:4,verse:16:2,chorus:8:4,solo:16:4,chorus:16:5,outro:16:4', 'Acoustic verses contrast with electric choruses and guitar lead.'),
  'rock::hard-rock': song(94, rockForm, 'Riff foundation, wide vocal gaps, guitar solo and returning riff.', loop(['E5','D5','A5','E5']), { solos: { solo: 'guitar' } }),
  'rock::alternative': song(88, 'intro:8:3,verse:16:3,chorus:16:4,verse:16:3,chorus:16:4,bridge:16:2,solo:16:5,outro:8:4', 'Abrupt harmonic shifts and layered guitar climaxes; contrasting verse, chorus and bridge harmonic cells.'),
  'rock::psychedelic': song(108, 'intro:8:3,verse:12:3,chorus:4:4,verse:12:3,chorus:4:4,solo:24:5,verse:12:4,outro:16:4', 'Dominant-sharp-nine colour, riff, guitar feature and extended exit.', loop(['E7#9','E7#9','G','A']), { solos: { solo: 'guitar' } }),
  'rock::progressive': song(132, 'intro:16:1,A:32:4,B:24:3,A:32:4,bridge:32:2,solo:32:4,A:32:5,outro:16:2', 'Acoustic prelude, recurring electric themes, middle development and reprise; meter follows the existing progressive style.'),
  'rock::indie': song(104, 'intro:8:3,verse:16:3,chorus:8:4,verse:16:3,chorus:8:4,solo:8:4,verse:16:3,chorus:8:5,outro:8:3', 'Interlocking guitar roles; short lead solo.', undefined, { solos: { solo: 'guitar' } }),
  'rock::shoegaze': song(170, 'intro:8:5,A:16:4,B:8:3,A:16:5,B:8:3,bridge:16:2,A:16:5,outro:16:4', 'Explosive guitar mass alternates with softer floating vocal sections.'),
  'rock::post-rock': song(80, 'opening:32:1,build:64:2,A:64:3,climax:64:5,breakdown:32:1,evolution:64:3,climax:64:5,outro:32:1', 'Long multi-episode score adaptation of Storm; gradual ensemble entrances, two large climaxes, quiet dissolution.'),
  'metal::heavy-metal': song(136, 'intro:4:2,riff:8:4,verse:8:3,chorus:8:5,verse:8:3,chorus:8:5,bridge:4:2,solo:8:5,riff:8:4,outro:4:2', 'Heavy Metal teaching adaptation: introduce the gallop, open into a twin-lead chorus, then hand the instrumental feature to guitar before the final riff and held close.', {
    _: ['E5','G5','A5','E5'], solo: ['B5','A5','G5','F#5'], bridge: ['C5','D5','E5','B5'] }, { solos: { solo: 'guitar' }, sectionInstruments: { intro: ['guitar','bass','drums'], riff: ['guitar','bass','drums'], bridge: ['guitar','bass','drums'], solo: ['guitar','bass','drums'], outro: ['guitar','bass','drums'] } }),
  'metal::thrash': song(188, 'intro:4:3,verse:8:4,chorus:8:5,verse:8:4,chorus:8:5,breakdown:4:1,solo:8:5,verse:8:4,chorus:8:5,coda:2:3', 'Thrash teaching adaptation: downpicked sixteenths and a skank beat drive the vocal sections; a brief half-time gap resets the groove before the guitar feature and final chorus.', {
    _: ['E5','F5','E5','D5'], chorus: ['E5','G5','A5','E5'], breakdown: ['Em','C','Am','B7'], solo: ['Em','C','Am','B7'] }, { solos: { solo: 'guitar' }, sectionInstruments: { intro: ['guitar','bass','drums'], breakdown: ['guitar','bass','drums'], solo: ['guitar','bass','drums'], coda: ['guitar','bass','drums'] } }),
  'metal::doom': song(64, 'intro:4:1,verse:8:3,chorus:8:4,verse:8:3,chorus:8:5,bridge:4:2,solo:8:4,chorus:8:5,outro:4:1', 'Doom teaching adaptation: make the low power chords and half-time drum weight carry the form; expose the sustained guitar answer, then let the final chord ring into space.', {
    _: ['Em','Bb','A','Em'], chorus: ['C','B7','Em','Em'], bridge: ['Bb','A','Em','Em'], solo: ['Em','Bb','A','Em'] }, { solos: { solo: 'guitar' }, sectionInstruments: { intro: ['guitar','bass','drums'], bridge: ['guitar','bass','drums'], solo: ['guitar','bass','drums'], outro: ['guitar','bass','drums'] } }),
  'metal::death': song(190, 'intro:4:2,riff:8:4,verse:8:4,chorus:8:5,breakdown:4:2,solo:8:5,riff:8:4,chorus:8:5,coda:2:3', 'Death Metal teaching adaptation: cycle the tremolo riff against a kick-snare blast, break into a short half-time passage, then return to the faster riff for the coda.', {
    _: ['D5','Eb5','F5','D5'], breakdown: ['D5','F5','Eb5','D5'], solo: ['D5','Eb5','F5','D5'] }, { solos: { solo: 'guitar' }, sectionInstruments: { intro: ['guitar','bass','drums'], breakdown: ['guitar','bass','drums'], solo: ['guitar','bass','drums'], coda: ['guitar','bass','drums'] } }),
  'metal::black': song(178, 'intro:8:1,riff:8:3,verse:16:4,chorus:8:5,verse:16:4,breakdown:4:2,riff:16:5,outro:8:2', 'Black Metal teaching adaptation: open with a cold, exposed tremolo line, sustain the full blast texture through the verses, thin the breakdown, and let the final tremolo phrase recede.', {
    _: ['Em','F','Em','B5'], chorus: ['F','Em','F','B5'], breakdown: ['Em','F','Em','Em'] }, { sectionInstruments: { intro: ['guitar','bass'], breakdown: ['guitar','bass'], outro: ['guitar','bass'] } }),
  'metal::progressive-metal': song(136, 'intro:4:1,riff:8:3,verse:8:3,chorus:8:4,verse:8:3,chorus:8:4,bridge:8:2,build:8:4,climax:8:5,outro:4:2', 'Progressive Metal teaching adaptation: keep the riff in 7/8, make the 2+2+3 accent groups audible across guitar, bass, and drums, and grow the final unison peak from a sparse bridge.', {
    _: ['D5','F5','C5','D5'], bridge: ['Bb','C','D5','D5'], climax: ['D5','F5','C5','D5'] }, { solos: { climax: 'guitar' }, sectionInstruments: { intro: ['guitar','bass','drums'], bridge: ['guitar','bass','drums'], outro: ['guitar','bass','drums'] } }),
  'metal::industrial-metal': song(140, 'intro:4:2,riff:8:4,verse:8:3,chorus:8:5,verse:8:3,chorus:8:5,breakdown:4:1,hit:1:5,stop:1:1,riff:8:5,outro:4:2', 'Industrial Metal teaching adaptation: lock clipped guitar, bass, and drum attacks together; land one synchronized hit, cut to a full-bar rest, then bring the machine riff back at full weight.', {
    _: ['E5','E5','G5','A5'], chorus: ['E5','G5','A5','E5'], hit: ['E5','E5','E5','E5'] }, { sectionInstruments: { intro: ['guitar','bass','drums'], hit: ['guitar','bass','drums'], stop: [], outro: ['guitar','bass','drums'] } }),
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
  'funk::james-brown-the-one': song(112, 'intro:4:2,groove:8:4,verse:8:3,chorus:8:4,break-hit:1:5,break-rest:1:1,solo:8:4,chorus:8:5,outro:4:3', 'James Brown / The One teaching score: interlocking guitar, clavinet, bass and drum attacks leave deliberate holes. The band lands one clipped hit together, cuts to a full-bar rest, then returns with the trumpet feature and chorus.', undefined, {
    solos: { solo: 'trumpet' },
    sectionInstruments: {
      intro: ['trumpet','guitar','clavinet','bass','drums'],
      'break-hit': ['trumpet','guitar','clavinet','bass','drums'],
      'break-rest': [],
      solo: ['trumpet','guitar','clavinet','bass','drums'] } }),
  'funk::jazz-funk': song(100, 'intro:16:2,A:32:3,B:16:4,solo:64:3,B:32:4,solo:64:4,A:32:5,outro:16:2', 'Long bass/synth ostinato with keyboard features and a contrasting middle.', loop(['Bbm7','Eb7']), { solos: { solo: 'synth' } }),
  'funk::minneapolis': song(112, 'intro:4:2,verse:16:2,chorus:8:3,verse:16:2,chorus:8:4,bridge:8:2,chorus:16:4,outro:8:2', 'Lean guitar/drum texture; avoid filling the empty low-end space.', loop(['A7','A7','D7','A7','E7','D7','A7','E7']), { instruments: ['voice','guitar','synth','drums'] }),
  'jazz::modal': song(136, 'intro:16:1,head:32:3,solo:64:3,solo:64:4,solo:64:3,head:32:3,tag:8:1', '32-bar AABA modal choruses: D Dorian, eight bars up a semitone, return. The bass states a sparse four-bar motif under the heads, answers more actively beneath the second solo, then returns to the motif.', { intro: ['Dm7'], head: [...Array(16).fill('Dm7'),...Array(8).fill('Ebm7'),...Array(8).fill('Dm7')], solo: [...Array(16).fill('Dm7'),...Array(8).fill('Ebm7'),...Array(8).fill('Dm7')], tag: ['Dm7'] }, { solos: { solo: 'trumpet' }, patternAssignments: {
    intro: { 'upright-bass': 'Low anchor' },
    head: { 'upright-bass': 'Dorian bass motif' },
    'solo#1': { 'upright-bass': 'Dorian bass motif' },
    'solo#2': { 'upright-bass': 'Modal bass answer' },
    'solo#3': { 'upright-bass': 'Dorian bass motif' },
    'head#2': { 'upright-bass': 'Modal bass answer' },
    tag: { 'upright-bass': 'Low anchor' },
  } }),
  'jazz::hard-bop': song(126, 'intro:8:2,head:32:3,trumpet-solo:32:3,tenor-sax-solo:32:4,trumpet-trading:4:4,tenor-sax-trading:4:4,head:32:5,tag:8:2', 'Hard-bop score: state the blues head over ride and walking bass, give trumpet and tenor sax separate choruses, trade four-bar phrases over the rhythm section, then bring the head back.', undefined, {
    solos: {
      'trumpet-solo': 'trumpet', 'tenor-sax-solo': 'tenor-sax',
      'trumpet-trading': 'trumpet', 'tenor-sax-trading': 'tenor-sax' },
    sectionInstruments: {
      'trumpet-solo': ['trumpet','piano','upright-bass','drums'],
      'tenor-sax-solo': ['tenor-sax','piano','upright-bass','drums'],
      'trumpet-trading': ['trumpet','piano','upright-bass','drums'],
      'tenor-sax-trading': ['tenor-sax','piano','upright-bass','drums'] } }),
  'jazz::gypsy-jazz': song(196, 'intro:8:2,head:16:3,solo:48:3,solo:48:4,head:16:4,tag:4:2', 'La pompe remains behind successive guitar/violin choruses.', loop(['Am','Am','Dm','Dm','E7','E7','Am','Am','Dm','Dm','Am','Am','E7','E7','Am','E7']), { solos: { solo: 'guitar' } }),
  'jazz::post-bop': song(120, 'intro:8:2,head:24:3,solo:72:3,solo:72:4,head:24:3,tag:8:1', 'Minor-blues-derived head with extended solo choruses and a recurring bass figure.'),
  'blues::modern-blues': song(90, 'intro:12:2,verse:12:3,verse:12:3,solo:24:4,verse:12:3,solo:12:4,outro:12:2', 'Minor twelve-bar form with guitar replies and sustained string colour.', loop(['Bm','Bm','Bm','Bm','Em','Em','Bm','Bm','G7','F#7','Bm','F#7']), { solos: { intro: 'guitar', solo: 'guitar' } }),
  'blues::texas': song(126, 'intro:12:4,verse:12:3,verse:12:3,solo:24:4,verse:12:3,solo:24:5,outro:4:4', 'Shuffled twelve-bar choruses; lead guitar and rhythm guitar retain distinct jobs.', loop(['E7','E7','E7','E7','A7','A7','E7','E7','B7','A7','E7','B7']), { solos: { solo: 'guitar' } }),
  'blues::chicago': song(108, 'intro:4:3,stop-time:8:4,verse:16:3,solo:16:4,verse:16:4,outro:4:3', 'Chicago blues score: an eight-bar stop-time call hits on beat one, leaves air before the harmonica answer on beat three, then opens into the amplified shuffle and guitar feature.', {
    intro: ['A7','A7','A7','A7'],
    'stop-time': Array(8).fill('A7'),
    verse: ['A7','A7','A7','A7','A7','A7','A7','A7','D7','D7','A7','A7','E7','D7','A7','E7'],
    solo: ['A7','A7','A7','A7','A7','A7','A7','A7','D7','D7','A7','A7','E7','D7','A7','E7'],
    outro: ['E7','D7','A7','E9'] }, { solos: { solo: 'guitar' }, patternAssignments: {
    'stop-time': {
      voice: 'Stop-time vocal call', guitar: 'Stop-time guitar hit', harmonica: 'Stop-time harp answer',
      piano: 'Stop-time piano hit', bass: 'Stop-time bass hit', drums: 'Stop-time drum hit' } } }),
  'salsa::son': song(84, 'intro:8:2,verse:16:2,verse:16:3,interlude:16:3,verse:16:3,solo:16:4,outro:8:2', 'Tres figure, sparse vocal verses, trumpet reply and instrumental close.', loop(['Dm','F','Gm','A7']), { solos: { solo: 'trumpet' } }),
  'salsa::salsa-dura': song(102, 'intro:8:3,verse:16:3,verse:16:3,montuno:16:4,coro:16:4,mambo:16:5,bloque:2:5,silencio:1:1,coro:32:5,cierre:4:3',
    'Teaching arrangement: expose the horn and rhythm-section entrance, keep the verse on bongó, change to campana at the montuno, and drop the vocal guide from the instrumental mambo. Close the mambo with a short collective bloque, leave one bar of silence, then bring the coro back over the full montuno groove.',
    undefined, { sectionInstruments: {
      intro: ['trumpet','trombone','piano','bass','congas','bongos','timbales','claves'],
      verse: ['voice','trumpet','trombone','piano','bass','congas','bongos','timbales','claves'],
      montuno: ['voice','trumpet','trombone','piano','bass','congas','timbales','claves','cowbell'],
      coro: ['voice','trumpet','trombone','piano','bass','congas','timbales','claves','cowbell'],
      mambo: ['trumpet','trombone','piano','bass','congas','timbales','claves','cowbell'],
      bloque: ['trumpet','trombone','piano','bass','congas','timbales','claves'],
      silencio: [],
      cierre: ['trumpet','trombone','piano','bass','congas','bongos','timbales','claves'] }, patternAssignments: {
      bloque: {
        trumpet: "Trumpet phrase", trombone: "Trombone phrase",
        piano: "Piano montuno", bass: "Bass tumbao", congas: "Conga tumbao",
        timbales: "Timbales pulse", claves: "Son clave 3–2" } }, lockPatternAssignments: { bloque: ['trumpet','trombone','piano','bass','congas','timbales','claves'] } }),
  'salsa::salsa-jazz': song(108, 'intro:16:2,A:32:3,montuno:32:4,solo:64:4,mambo:32:5,montuno:64:5,cierre:8:3', 'Extended piano feature and harmonically active instrumental development.', undefined, { solos: { solo: 'piano' }, patternAssignments: {
    intro: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    A: { piano: "Jazz chord comp", tres: "Jazz tres line" },
    montuno: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    solo: { piano: "Jazz chord comp", tres: "Jazz tres line" },
    mambo: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    cierre: { piano: 'Jazz piano close', tres: 'Jazz tres close' } } }),
  'reggaeton::classic': song(96, 'intro:8:2,chorus:8:4,verse:16:3,chorus:8:4,verse:16:3,bridge:8:2,chorus:16:5,outro:8:3',
    'Original dembow teaching arrangement: bring the vocal hook over the full beat, thin the verse, then lift the returning chorus. The bridge exposes the bass and short synth replies before the final hook.', undefined, {
      activateTeachingSupport: false, instruments: ['voice','synth','drums','sampler'],
      vocalSections: ['verse','chorus'],
      sectionInstruments: { intro: ['synth','drums'], verse: ['voice','synth','drums'],
        chorus: ['voice','synth','drums','sampler'], bridge: ['synth','sampler'], outro: ['synth','drums'] },
      patternAssignments: { intro: { drums: 'Dembow' }, verse: { drums: 'Dembow verse' },
        chorus: { drums: 'Dembow lift' }, outro: { drums: 'Dembow' } },
    }),
  'reggaeton::melodic': song(96, 'intro:4:1,verse:8:2,prechorus:4:3,chorus:8:4,verse:8:3,prechorus:4:3,chorus:8:4,bridge:4:1,chorus:8:5,outro:4:1',
    'Minor-key melodic reggaeton study: sing over a light dembow, pick one guitar note at a time, and keep the pad soft. Drop the drums for the bridge, then return with a higher guitar answer. Original teaching adaptation.', undefined, {
      source: 'https://music.apple.com/us/song/1520712876',
      activateTeachingSupport: false, instruments: ['voice','guitar','synth','drums','sampler'],
      vocalSections: ['verse','prechorus','chorus'],
      sectionInstruments: { intro: ['guitar','synth'], verse: ['voice','guitar','synth','drums'],
        prechorus: ['voice','guitar','synth','drums'], chorus: ['voice','guitar','synth','drums','sampler'],
        bridge: ['guitar','synth'], outro: ['guitar','synth'] },
      patternAssignments: { intro: { guitar: 'Guitar arpeggio', 'synth:harmony': 'Soft pad' },
        verse: { guitar: 'Guitar arpeggio', drums: 'Dembow verse' },
        prechorus: { guitar: 'Guitar arpeggio', drums: 'Dembow pocket' },
        chorus: { guitar: 'Guitar answer', drums: 'Dembow lift', sampler: 'Shaker replies' },
        bridge: { guitar: 'Guitar answer', 'synth:harmony': 'Soft pad' },
        outro: { guitar: 'Guitar answer', 'synth:harmony': 'Soft pad' } },
    }),
  'bachata::moderna': song(130, popForm, 'Requinto answers the singer; segunda and bongó carry the dance foundation.'),
  'reggae::roots': song(74, 'intro:4:2,verse:8:3,chorus:8:4,verse:8:3,instrumental:8:3,chorus:16:5,outro:8:2', 'Roots Reggae teaching arrangement: leave the opening beat empty, let the bass and one-drop drums carry the verse, add the organ bubble as an instrumental answer, then return to a fuller vocal refrain.', { ...loop(['A','A','D','A']), verse: ['A','E','A','D','A','E','D','A'] }),
  'reggae::dub': song(76, 'intro:8:2,A:16:3,breakdown:8:1,A:16:3,solo:16:4,breakdown:8:1,A:16:3,outro:16:1', 'Melodica feature, rhythm dropouts and delay tails frame the recurring riddim.', undefined, { solos: { solo: 'melodica' } }),
  'afrobeat::classic-afrobeat': song(104, 'intro:8:2,groove:16:3,head:16:4,solo:16:4,verse:16:3,coro:16:4,solo:16:4,coro:16:5,outro:8:3', 'Classic Afrobeat score: establish the interlocking rhythm section before the horn theme, keep verses clear of horn doubling, feature tenor sax instrumentally, then bring the horns back for the vocal coro.', undefined, {
    solos: { solo: 'tenor-sax' },
    sectionInstruments: {
      intro: ['guitar','organ','bass','drums','congas','shekere'],
      groove: ['guitar','organ','bass','drums','congas','shekere'],
      head: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
      solo: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
      verse: ['voice','guitar','organ','bass','drums','congas','shekere'],
      coro: ['voice','trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
      outro: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'] } }),
  'afrobeat::juju': song(112, 'intro:8:2,groove:16:3,verse:16:3,response:8:4,talking-drum:8:4,verse-return:16:4,response-return:8:5,outro:8:3',
    'Juju score adaptation: layer the interlocking guitar and percussion before the voice, leave vocal gaps for talking-drum answers, and give the talking drum one accompanied feature.', undefined, {
      solos: { 'talking-drum': 'talking-drum' },
      sectionInstruments: {
        intro: ['guitar','bass','shekere'],
        groove: ['guitar','bass','talking-drum','shekere','drums'],
        verse: ['voice','guitar','bass','talking-drum','shekere','drums'],
        response: ['guitar','bass','talking-drum','shekere','drums'],
        'talking-drum': ['guitar','bass','talking-drum','shekere','drums'],
        'verse-return': ['voice','guitar','bass','talking-drum','shekere','drums'],
        'response-return': ['guitar','bass','talking-drum','shekere','drums'],
        outro: ['guitar','bass','talking-drum','shekere','drums'] },
      patternAssignments: {
        intro: { guitar: "Guitar accompaniment", bass: 'Low anchor', shekere: "Shekere pulse" },
        groove: { guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': 'Talking-drum pulse', shekere: 'Shekere pulse', drums: "Jùjú kit response" },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': 'Talking-drum pulse', shekere: 'Shekere pulse', drums: "Jùjú kit response" },
        response: { guitar: "Guitar accompaniment", bass: "Low anchor", 'talking-drum': "Talking-drum pulse", shekere: 'Shekere pulse', drums: "Jùjú kit response" },
        'talking-drum': { guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': "Talking-drum pulse", shekere: "Shekere pulse", drums: "Jùjú kit response" },
        'verse-return': { voice: "Juju Vocal", guitar: "Guitar accompaniment", bass: "Low anchor", 'talking-drum': "Talking-drum pulse", shekere: "Shekere pulse", drums: "Jùjú kit response" },
        'response-return': { guitar: "Guitar accompaniment", bass: "Low anchor", 'talking-drum': "Talking-drum pulse", shekere: "Shekere pulse", drums: "Jùjú kit response" },
        outro: { } } }),
  'afrobeat::highlife': song(112, 'intro:4:2,head:8:3,verse:12:3,chorus:8:4,verse-return:12:3,trumpet-feature:8:4,chorus-last:16:5,outro:4:3',
    'Highlife score adaptation: state the horn-and-guitar hook over the bell timeline, leave the first chorus to the band, then give the voice short verses and the trumpet a separate feature before a fuller final chorus.',
    { _: ['C','F','C','G7'], 'chorus-last': ['F','G7','C','C'] }, {
      solos: { 'trumpet-feature': 'trumpet' },
      sectionInstruments: {
        intro: ['guitar','bass','drums','cowbell','congas'],
        head: ['trumpet','guitar','bass','drums','cowbell','congas'],
        verse: ['voice','guitar','bass','drums','cowbell','congas'],
        chorus: ['trumpet','guitar','bass','drums','cowbell','congas'],
        'verse-return': ['voice','guitar','bass','drums','cowbell','congas'],
        'trumpet-feature': ['trumpet','guitar','bass','drums','cowbell','congas'],
        'chorus-last': ['voice','trumpet','guitar','bass','drums','cowbell','congas'],
        outro: ['trumpet','guitar','bass','drums','cowbell','congas'] },
      patternAssignments: {
        intro: { guitar: "Guitar accompaniment", bass: 'Low anchor', drums: "Highlife bell pocket", cowbell: 'Cowbell pulse', congas: "Congas pulse" },
        head: { trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: "Highlife bell pocket", cowbell: "Cowbell pulse", congas: 'Congas pulse' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: "Highlife bell pocket", cowbell: 'Cowbell pulse', congas: 'Congas pulse' },
        chorus: { trumpet: "Highlife Trumpet", guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Highlife bell pocket", cowbell: "Cowbell pulse", congas: "Congas pulse" },
        'verse-return': { voice: "Highlife Vocal", guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Highlife bell pocket", cowbell: 'Cowbell pulse', congas: "Congas pulse" },
        'trumpet-feature': { trumpet: "Highlife Trumpet", guitar: 'Guitar accompaniment', bass: "Low anchor", drums: "Highlife bell pocket", cowbell: 'Cowbell pulse', congas: "Congas pulse" },
        'chorus-last': { voice: "Highlife Vocal", trumpet: "Highlife Trumpet", guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Highlife bell pocket", cowbell: "Cowbell pulse", congas: "Congas pulse" },
        outro: { } } }),
  'afrobeat::palm-wine': song(96, 'intro:4:1,verse:12:2,response:8:2,verse-return:12:3,guitar-feature:8:3,response-return:8:4,outro:4:1',
    'Palm-wine score adaptation: keep the acoustic guitar central, use its bass-and-treble picking as both accompaniment and answer, let the vocal guide enter only for verse phrases, then feature the guitar before an instrumental close.',
    { _: ['G','C','G','D7'], response: ['C','G','D7','G'] }, {
      solos: { 'guitar-feature': 'guitar' },
      sectionInstruments: {
        intro: ['guitar','shaker'],
        verse: ['voice','guitar','shaker'],
        response: ['guitar','shaker'],
        'verse-return': ['voice','guitar','shaker'],
        'guitar-feature': ['guitar','shaker'],
        'response-return': ['guitar','shaker'],
        outro: ['guitar'] },
      patternAssignments: {
        intro: { guitar: "Guitar accompaniment", shaker: "Shaker pulse" },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', shaker: 'Shaker pulse' },
        response: { guitar: "Guitar accompaniment", shaker: "Shaker pulse" },
        'verse-return': { voice: "Palm-Wine Vocal", guitar: "Guitar accompaniment", shaker: "Shaker pulse" },
        'guitar-feature': { guitar: "Guitar accompaniment", shaker: 'Shaker pulse' },
        'response-return': { guitar: "Guitar accompaniment", shaker: "Shaker pulse" },
        outro: { } } }),
  'afrobeat::funk-heavy-afrobeat': song(116, 'intro:4:2,groove:8:3,head:8:4,solo:8:4,verse:8:3,coro:8:4,verse-return:8:3,coro-last:16:5,outro:4:3',
    'Funk-heavy Afrobeat teaching score: hold the scratch-guitar and bass vamp, keep horns out until their head, clear the voice from the trumpet feature, and reunite voice and horns for the coro.', undefined, {
      solos: { solo: 'trumpet' },
      sectionInstruments: {
        intro: ['guitar','organ','bass','drums','congas','shekere'],
        groove: ['guitar','organ','bass','drums','congas','shekere'],
        head: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        solo: ['trumpet','guitar','organ','bass','drums','congas','shekere'],
        verse: ['voice','guitar','organ','bass','drums','congas','shekere'],
        coro: ['voice','trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        'verse-return': ['voice','guitar','organ','bass','drums','congas','shekere'],
        'coro-last': ['voice','trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        outro: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'] },
      patternAssignments: {
        intro: { guitar: "Guitar accompaniment", organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Afro-funk sixteenth pocket", congas: "Congas pulse", shekere: "Shekere pulse" },
        groove: { guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-funk sixteenth pocket", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        head: { trumpet: "Funk-Heavy Afrobeat Trumpet", 'tenor-sax': "Funk-Heavy Tenor Sax", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: 'Low anchor', drums: "Afro-funk sixteenth pocket", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        solo: { trumpet: "Funk-Heavy Afrobeat Trumpet", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-funk sixteenth pocket", congas: "Congas pulse", shekere: 'Shekere pulse' },
        verse: { voice: 'Voice statement', guitar: "Guitar accompaniment", organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Afro-funk sixteenth pocket", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        coro: { voice: "Funk-Heavy Afrobeat Vocal", trumpet: "Funk-Heavy Afrobeat Trumpet", 'tenor-sax': "Funk-Heavy Tenor Sax", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-funk sixteenth pocket", congas: "Congas pulse", shekere: 'Shekere pulse' },
        'verse-return': { voice: "Funk-Heavy Afrobeat Vocal", guitar: "Guitar accompaniment", organ: 'Organ accompaniment', bass: "Low anchor", drums: "Afro-funk sixteenth pocket", congas: "Congas pulse", shekere: "Shekere pulse" },
        'coro-last': { voice: "Funk-Heavy Afrobeat Vocal", trumpet: "Funk-Heavy Afrobeat Trumpet", 'tenor-sax': "Funk-Heavy Tenor Sax", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-funk sixteenth pocket", congas: "Congas pulse", shekere: "Shekere pulse" },
        outro: { } } }),
  'afrobeat::jazz-heavy-afrobeat': song(108, 'intro:8:2,groove:16:3,head:16:4,sax-trading:16:4,break:4:1,trumpet-trading:16:4,head:16:5,outro:8:2',
    'Jazz-heavy Afrobeat teaching score: let electric piano and drums establish the groove, bring in the horn head, trade sax and trumpet features over the ostinato, then leave a short keyboard-and-rhythm break before the closing head.', undefined, {
      solos: { 'sax-trading': 'tenor-sax', 'trumpet-trading': 'trumpet' },
      sectionInstruments: {
        intro: ['rhodes','bass','drums','congas','shekere'],
        groove: ['rhodes','guitar','organ','bass','drums','congas','shekere'],
        head: ['trumpet','tenor-sax','rhodes','guitar','organ','bass','drums','congas','shekere'],
        'sax-trading': ['tenor-sax','rhodes','guitar','organ','bass','drums','congas','shekere'],
        break: ['rhodes','guitar','bass','drums'],
        'trumpet-trading': ['trumpet','rhodes','guitar','organ','bass','drums','congas','shekere'],
        outro: ['trumpet','tenor-sax','rhodes','guitar','organ','bass','drums','congas','shekere'] },
      patternAssignments: {
        intro: { rhodes: 'Rhodes comping', bass: 'Low anchor', drums: "Afro-jazz ride dialogue", congas: "Congas pulse", shekere: "Shekere pulse" },
        groove: { rhodes: 'Rhodes comping', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Afro-jazz ride dialogue", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', rhodes: 'Rhodes comping', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Afro-jazz ride dialogue", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        'sax-trading': { 'tenor-sax': "Jazz-Heavy Tenor Sax", rhodes: 'Rhodes phrase answer', guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-jazz ride dialogue", congas: "Congas pulse", shekere: "Shekere pulse" },
        break: { rhodes: 'Rhodes phrase answer', guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Afro-jazz ride dialogue" },
        'trumpet-trading': { trumpet: "Jazz-Heavy Afrobeat Trumpet", rhodes: 'Rhodes phrase answer', guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Afro-jazz ride dialogue", congas: "Congas pulse", shekere: "Shekere pulse" },
        outro: { rhodes: 'Rhodes phrase answer', guitar: "Guitar accompaniment", organ: "Organ accompaniment", shekere: "Shekere pulse" } } }),
  'afrobeat::modern-revival': song(112, 'intro:8:2,riff:8:3,verse:16:3,chorus:8:4,solo:8:4,verse-return:16:3,chorus-last:16:5,outro:4:3',
    'Modern Afrobeat revival teaching score: build from a compact rhythm-section riff, add voice for the verse, stack horns and percussion for the chorus, feature one sax, and close with a full-band hit.', undefined, {
      solos: { solo: 'tenor-sax' },
      sectionInstruments: {
        intro: ['bass','drums','shekere'],
        riff: ['guitar','organ','bass','drums','congas','shekere'],
        verse: ['voice','guitar','organ','bass','drums','congas','shekere'],
        chorus: ['voice','trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        solo: ['tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        'verse-return': ['voice','guitar','organ','bass','drums','congas','shekere'],
        'chorus-last': ['voice','trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'],
        outro: ['trumpet','tenor-sax','guitar','organ','bass','drums','congas','shekere'] },
      patternAssignments: {
        intro: { bass: 'Low anchor', drums: "Modern Afrobeat pocket", shekere: "Shekere pulse" },
        riff: { guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Modern Afrobeat pocket", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: "Modern Afrobeat pocket", congas: 'Congas pulse', shekere: 'Shekere pulse' },
        chorus: { voice: "Modern Revival Vocal", trumpet: "Modern Revival Trumpet", 'tenor-sax': "Modern Tenor Sax", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Modern Afrobeat pocket", congas: "Congas pulse", shekere: 'Shekere pulse' },
        solo: { 'tenor-sax': "Modern Tenor Sax", guitar: 'Guitar accompaniment', organ: "Organ accompaniment", bass: "Low anchor", drums: "Modern Afrobeat pocket", congas: "Congas pulse", shekere: 'Shekere pulse' },
        'verse-return': { voice: "Modern Revival Vocal", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Modern Afrobeat pocket", congas: "Congas pulse", shekere: "Shekere pulse" },
        'chorus-last': { voice: "Modern Revival Vocal", trumpet: "Modern Revival Trumpet", 'tenor-sax': "Modern Tenor Sax", guitar: "Guitar accompaniment", organ: "Organ accompaniment", bass: "Low anchor", drums: "Modern Afrobeat pocket", congas: "Congas pulse", shekere: "Shekere pulse" },
        outro: { } } }),
  'timba::classic-timba': song(104, 'intro:8:2,verse:12:3,coro:16:4,bomba:8:4,mambo:12:5,bloque:2:5,silencio:1:1,coro-final:24:5,cierre:4:3',
    'Timba teaching adaptation: thin the verse around a short vocal phrase, open the coro with the bell and horn replies, drop piano and horns for a bass-led bomba, then bring the band back in a two-bar bloque after a full-bar stop.', {
      _: ['Am','Dm','E7','Am'],
      bomba: ['Am','Am','Am','E7'],
      mambo: ['Dm','Dm','E7','E7'],
      bloque: ['E7','E7'] }, {
      solos: { verse: 'voice', coro: 'voice', bomba: 'bass', mambo: 'trumpet', 'coro-final': 'voice', cierre: 'trumpet' },
      sectionInstruments: {
        intro: ['piano','bass','congas','timbales'],
        verse: ['voice','piano','bass','congas','timbales','drums'],
        coro: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        bomba: ['bass','congas','timbales','drums','cowbell'],
        mambo: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        bloque: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        silencio: [],
        'coro-final': ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] } }),
  'timba::charanga-habanera': song(110, 'intro:8:2,verse:12:3,coro:16:4,verse-return:12:3,gear:8:5,bloque:2:5,silencio:1:1,mambo:12:5,coro-final:24:5,cierre:4:3',
    'Charanga Habanera teaching adaptation: keep the verse lean, add the montuno bell only when the coro opens, pull piano and horns out for a bass/percussion gear, then use a hard bloque and one-bar cut to launch the instrumental mambo and final coro.', {
      _: ['Am','Dm','E7','Am'],
      gear: ['Am','Am','E7','E7'],
      mambo: ['Dm','Dm','E7','E7'],
      bloque: ['E7','E7'] }, {
      solos: { verse: 'voice', coro: 'voice', 'verse-return': 'voice', gear: 'bass', mambo: 'trumpet', 'coro-final': 'voice', cierre: 'trumpet' },
      sectionInstruments: {
        intro: ['piano','bass','congas','timbales'],
        verse: ['voice','piano','bass','congas','timbales','drums'],
        coro: ['voice','trumpet','trombone','piano','synth','bass','congas','timbales','drums','cowbell'],
        'verse-return': ['voice','piano','bass','congas','timbales','drums'],
        gear: ['bass','congas','timbales','drums','cowbell'],
        bloque: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        silencio: [],
        mambo: ['trumpet','trombone','piano','synth','bass','congas','timbales','drums','cowbell'],
        'coro-final': ['voice','trumpet','trombone','piano','synth','bass','congas','timbales','drums','cowbell'],
        cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] } }),
  'timba::maykel-blanco': song(108, 'intro:8:2,verse:12:3,coro:16:4,bomba:8:5,bloque:2:5,silencio:1:1,mambo:12:5,coro-final:24:5,cierre:4:3',
    'Maykel Blanco teaching adaptation: hold back the horns for the verse, hit a percussive coro, strip to bass and hand percussion for the bomba, then use sharp horn/piano accents around a full-band stop before the mambo and final coro.', {
      _: ['Dm','Gm','A7','Dm'],
      bomba: ['Dm','Dm','Dm','A7'],
      mambo: ['Gm','Gm','A7','A7'],
      bloque: ['A7','A7'] }, {
      solos: { verse: 'voice', coro: 'voice', bomba: 'bass', mambo: 'trumpet', 'coro-final': 'voice', cierre: 'trumpet' },
      sectionInstruments: {
        intro: ['piano','bass','congas','timbales','drums'],
        verse: ['voice','piano','bass','congas','timbales','drums'],
        coro: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        bomba: ['bass','congas','timbales','drums','cowbell'],
        bloque: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        silencio: [],
        mambo: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        'coro-final': ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
        cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] } }),
  'mbalax::sabar-heavy': song(130, 'intro:10:2,groove:12:3,A:80:5,breakdown:15:3,solo:19:4,cierre:8:5', 'Sabar solo opening, Kaolack accompaniment, unison bàkk, short repeated rhythm and closing unison. Bar counts approximate the documented time landmarks.', undefined, { source: 'https://ocw.mit.edu/courses/21m-030-introduction-to-world-music-spring-2013/8af86ec7c48ba70e22026d9f02a3248c_MIT21M_030S13_listnsabar.pdf' }),
  'qawwali::contemporary-fusion': song(72, 'opening:16:1,verse:24:2,response:24:2,verse:24:3,cadence:16:1', 'The title track opens on its keyboard drone before the voice enters; this teaching adaptation omits the drum/guitar ensemble of other album tracks.', undefined, { instruments: ['voice','synth'], source: 'https://realworldrecords.com/releases/night-song/' }),
  'cinematic::modern-score': song(60, 'opening:8:1,ostinato:16:2,build:16:3,climax:16:5,release:8:2,outro:8:1', 'Four-chord ostinato grows from piano to full ensemble, then returns to exposed piano.', loop(['Am','Em','G','D'])),
  'cinematic::hybrid': song(72, 'opening:8:1,A:16:2,evolution:16:2,A:16:3,dissolve:8:1', 'Sparse repeated piano gesture above a slowly changing electronic bed.'),
  'cinematic::ambient-score': song(54, 'opening:16:1,A:32:2,solo:32:3,A:32:2,dissolve:16:1', 'Expressive synthesized lead over very slow sustained harmony; no dance climax.'),
  'ambient::generative-ambient': song(60, 'opening:32:1,evolution:128:2,texture-shift:128:2,evolution:128:3,dissolve:32:1', 'Long gradual process, continuing cells and minimal dynamic steps.'),
  'weird::process-generative': song(60, 'opening:32:1,evolution:128:2,texture-shift:128:2,evolution:128:3,dissolve:32:1', 'Long-form process adaptation using the existing generative pattern vocabulary.'),
  'indian-classical::instrumental-gat': song(72, 'alap:32:1,jod:32:2,jhala:24:3,gat:64:3,solo:64:4,jhala:32:5,cadence:8:2,tihai:4:5,sam:1:5', 'Sitar development moves from the open alap into a pulsed gat and faster jhala. A four-bar study closes with three matching sitar and tabla phrases, then a shared tonic landing on sam. The fixed-grid timing makes the form playable; it is not a transcription.'),
  'indian-classical::dhrupad': song(48, 'alap:64:1,jor:48:2,nom-tom:32:3,dhrupad:63:3,cadence:8:1', 'Drone persists through unmetered voice development; pakhawaj enters with complete twelve-pulse practice cycles in the composition.'),
  'steppe::sygyt': song(60, 'drone:8:1,whistle:24:2,variation:24:3,whistle-return:24:2,cadence:8:1', 'Sygyt learning score: keep the morin-khuur drone exposed at the opening, bring in the vocal guide for a two-bar overtone phrase, change its contour for the variation and returning whistle, then release through a short descending cadence. The GM Voice Oohs patch is only a pitch guide; it does not reproduce Tuvan throat-singing timbre, and these cells are not a transcription.', {
    drone: ['D5'], whistle: ['D5','D5','D5'], variation: ['D5','D5','D5'], 'whistle-return': ['D5','D5','D5'], cadence: ['D5'],
  }, {
    instruments: ['voice','morin-khuur'],
    vocalSections: ['whistle','variation','whistle-return','cadence'],
    sectionInstruments: {
      drone: ['morin-khuur'],
      whistle: ['voice','morin-khuur'],
      variation: ['voice','morin-khuur'],
      'whistle-return': ['voice','morin-khuur'],
      cadence: ['voice','morin-khuur'],
    },
    patternAssignments: {
      whistle: { voice: 'Sygyt overtone phrase' },
      variation: { voice: 'Sygyt overtone variation' },
      'whistle-return': { voice: 'Sygyt overtone phrase' },
      cadence: { voice: 'Sygyt release' },
    },
    lockPatternAssignments: {
      whistle: ['voice'], variation: ['voice'], 'whistle-return': ['voice'], cadence: ['voice'],
    },
  }),
  'steppe::kargyraa': song(48, 'drone:8:1,phrase:12:2,response:12:3,return:8:2,cadence:4:1', 'Kargyraa learning score: establish the low morin-khuur drone, let a restrained low-register voice guide state and return to the phrase, and give the bowed instrument its own response before the close. Keep the guide sparse and low; GM Voice Oohs marks pitch and timing but does not reproduce the vocal subharmonics, roughness, or changing resonance. This is a playing study, not a transcription.', {
    _: ['D5'],
  }, {
    instruments: ['voice','morin-khuur'],
    vocalSections: ['phrase','return','cadence'],
    sectionInstruments: {
      drone: ['morin-khuur'],
      phrase: ['voice','morin-khuur'],
      response: ['morin-khuur'],
      return: ['voice','morin-khuur'],
      cadence: ['voice','morin-khuur'],
    },
    patternAssignments: {
      drone: { 'morin-khuur': 'Low morin drone' },
      phrase: { voice: 'Kargyraa low phrase', 'morin-khuur': 'Low morin drone' },
      response: { 'morin-khuur': 'Morin khuur answer' },
      return: { voice: 'Kargyraa low variation', 'morin-khuur': "Morin khuur answer" },
      cadence: { voice: 'Kargyraa close', 'morin-khuur': 'Low morin drone' },
    },
    lockPatternAssignments: {
      drone: ['morin-khuur'],
      phrase: ['voice','morin-khuur'],
      response: ['morin-khuur'],
      return: ['voice','morin-khuur'],
      cadence: ['voice','morin-khuur'],
    },
  }),
  'gamelan::javanese': song(64, 'buka:4:1,main-cycle:16:3,irama-change:1:2,irama-II:24:3,main-cycle:16:4,suwuk:1:1', 'Javanese teaching score: the kendang signals an irama shift, the balungan opens into a slower pulse while bonang fills four subdivisions per note, then the main pulse returns before a single sustained suwuk close. The fixed grid demonstrates ensemble roles; it is not a transcription.', undefined, {
    source: 'https://academic.oup.com/book/35097/chapter-abstract/299163245' }) };

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
    const patternAssignments = SALSA_FORM_PATTERN_ASSIGNMENTS[key];
    return [key, { bpm: +bpm, form, chords: parseHarmonicCells(cells),
      note: reference.qualities.join('; '), ...(patternAssignments ? { patternAssignments } : {}) }] as const;
  }),
  ...Object.entries(DETAILED_RECORDING_ARRANGEMENTS).map(([key, recording]) => {
    const chords = recording.chords ?? RECORDING_HARMONIES[key];
    if (!chords) throw new Error(`Missing recording harmony: ${key}`);
    return [key, { ...recording, chords }] as const;
  }),
]);

/** Section-specific sample-score cells for styles whose form needs explicit
 * phrase development. These remain local to the exact recorded style sample. */
const bachataCoreInstrumentalParts = ['requinto','guitar','bass','bongos','guira'];
const bachataModernInstrumentalParts = ['requinto','guitar','synth','bass','bongos','guira','drums'];
const bachataUrbanInstrumentalParts = ['requinto','guitar','synth','bass','bongos','guira','drums'];
const bachataInstrumentalSections = (parts: string[], ...sections: string[]) =>
  Object.fromEntries(sections.map(section => [section, parts]));
const SAMPLE_PATTERN_ASSIGNMENTS: Record<string, Partial<Pick<RecordingArrangement, 'instruments' | 'lead' | 'sectionLeads' | 'patternAssignments' | 'sectionInstruments' | 'solos' | 'soloModes' | 'lockPatternAssignments' | 'sectionBpm' | 'note' | 'source'>>> = {
  'folk::old-time': {
    note: 'Old-Time teaching score: keep the fiddle tune and open-string drone forward, give the banjo its clawhammer bum-ditty, and let guitar chops answer the bass on beats two and four. Alternate source-based banjo and guitar variations between strains; this is a playable study, not a transcription.',
    patternAssignments: {
      pickup: { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar backbeat chop' },
      A: { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar backbeat chop' },
      B: { banjo: "Clawhammer bum-ditty", guitar: 'Guitar backbeat chop' },
      'A#2': { banjo: 'Clawhammer bum-ditty', guitar: "Guitar backbeat chop" },
      'B#2': { banjo: "Clawhammer bum-ditty", guitar: 'Guitar backbeat chop' },
      'A#3': { banjo: 'Clawhammer bum-ditty', guitar: "Guitar backbeat chop" },
      'B#3': { banjo: "Clawhammer bum-ditty", guitar: 'Guitar backbeat chop' },
      tag: { banjo: 'Banjo tag roll', guitar: 'Guitar tag chop' },
    },
    lockPatternAssignments: {
      pickup: ['banjo','guitar'], A: ['banjo','guitar'], B: ['banjo','guitar'],
      'A#2': ['banjo','guitar'], 'B#2': ['banjo','guitar'],
      'A#3': ['banjo','guitar'], 'B#3': ['banjo','guitar'], tag: ['banjo','guitar'],
    },
  },
  'folk::appalachian': {
    note: 'Appalachian teaching score: place an even modal banjo roll beneath the fiddle, use alternating bass and chord strokes on guitar, and let the longer instrumental passages hand the foreground between them. Each part uses its own playable source cell rather than sharing a generic offbeat loop.',
    solos: { solo: 'violin' },
    patternAssignments: {
      intro: { banjo: 'Banjo modal roll', guitar: 'Alternating-bass guitar' },
      verse: { banjo: 'Banjo modal roll', guitar: 'Alternating-bass guitar' },
      refrain: { banjo: "Banjo modal roll", guitar: 'Alternating-bass guitar' },
      solo: { banjo: "Banjo modal roll", guitar: 'Alternating-bass guitar' },
      'verse#2': { banjo: "Banjo modal roll", guitar: "Alternating-bass guitar" },
      'refrain#2': { banjo: 'Banjo modal roll', guitar: 'Alternating-bass guitar' },
      'solo#2': { banjo: "Banjo modal roll", guitar: 'Alternating-bass guitar' },
      tag: { banjo: 'Banjo modal close', guitar: 'Guitar turnaround' },
    },
    lockPatternAssignments: {
      intro: ['banjo','guitar'], verse: ['banjo','guitar'], refrain: ['banjo','guitar'],
      solo: ['banjo','guitar'], 'verse#2': ['banjo','guitar'],
      'refrain#2': ['banjo','guitar'], 'solo#2': ['banjo','guitar'], tag: ['banjo','guitar'],
    },
  },
  'blues::piedmont': {
    note: 'Piedmont fingerstyle study: keep the alternating thumb and syncopated treble together through the A strain, shift the treble response for B, then let the guitar answer its own solo phrase before the theme returns. The score teaches a local playing pattern, not a transcription.',
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment' },
      'A#1': { guitar: 'Guitar accompaniment' },
      B: { guitar: "Guitar accompaniment" },
      'A#2': { guitar: 'Guitar accompaniment' },
      solo: { guitar: "Guitar accompaniment" },
      'A#3': { guitar: "Guitar accompaniment" },
      coda: { guitar: 'Guitar accompaniment' },
    },
    lockPatternAssignments: {
      intro: ['guitar'], 'A#1': ['guitar'], B: ['guitar'], 'A#2': ['guitar'],
      solo: ['guitar'], 'A#3': ['guitar'], coda: ['guitar'],
    },
  },
  'arabic::instrumental-maqam': {
    patternAssignments: {
      exploration: { oud: "Instrumental Maqam Oud" },
      'upper-register': { oud: "Instrumental Maqam Oud" },
      modulation: { oud: "Instrumental Maqam Oud" },
      return: { oud: "Instrumental Maqam Oud" } } },
  'indian-classical::dhrupad': {
    instruments: ['voice','rudra-veena','tanpura','pakhawaj'],
    note: 'Dhrupad teaching score: keep the alap and jor open around rudra-veena and tanpura, let nom-tom bring in the voice without percussion, then enter the pakhawaj only with the measured dhrupad composition. The final cadence releases the cycle rather than carrying the pulse through every section.',
    sectionInstruments: {
      alap: ['rudra-veena','tanpura'],
      jor: ['rudra-veena','tanpura'],
      'nom-tom': ['voice','rudra-veena','tanpura'],
      dhrupad: ['voice','rudra-veena','tanpura','pakhawaj'],
      cadence: ['voice','rudra-veena','tanpura'] },
    patternAssignments: {
      alap: { 'rudra-veena': 'Dhrupad Rudra veena', tanpura: 'Tanpura accompaniment' },
      jor: { 'rudra-veena': "Dhrupad Rudra veena", tanpura: 'Tanpura accompaniment' },
      'nom-tom': { voice: 'Dhrupad Vocal', 'rudra-veena': "Dhrupad Rudra veena", tanpura: 'Tanpura accompaniment' },
      dhrupad: { voice: "Dhrupad Vocal", 'rudra-veena': "Dhrupad Rudra veena", tanpura: 'Tanpura accompaniment', pakhawaj: "Pakhawaj pulse" },
      cadence: { voice: "Dhrupad Vocal", 'rudra-veena': "Dhrupad Rudra veena", tanpura: 'Tanpura accompaniment' } } },
  'indian-classical::hindustani-khayal': {
    instruments: ['voice','sarangi','tanpura','tabla'],
    note: 'Khayal teaching score: keep the alap open, bring the singer into the vilambit and drut sections, then trade sarangi replies and tabla variations around the taan before a shared modal cadence. The voice and sarangi cells are guides for bol-alap, meend, and taan phrasing rather than a fixed transcription.',
    sectionInstruments: {
      alap: ['sarangi','tanpura'],
      vilambit: ['voice','sarangi','tanpura','tabla'],
      'bol-alap': ['voice','sarangi','tanpura','tabla'],
      drut: ['voice','sarangi','tanpura','tabla'],
      taan: ['voice','sarangi','tanpura','tabla'],
      cadence: ['voice','sarangi','tanpura'] },
    patternAssignments: {
      alap: { sarangi: 'Hindustani Khayal Sarangi', tanpura: 'Tanpura accompaniment' },
      vilambit: { voice: 'Hindustani Khayal Vocal', sarangi: 'Hindustani Khayal Sarangi', tanpura: 'Tanpura accompaniment', tabla: 'Tabla pulse' },
      'bol-alap': { voice: "Hindustani Khayal Vocal", sarangi: "Hindustani Khayal Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      drut: { voice: "Hindustani Khayal Vocal", sarangi: "Hindustani Khayal Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      taan: { voice: "Hindustani Khayal Vocal", sarangi: "Hindustani Khayal Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      cadence: { voice: 'Hindustani Khayal Vocal', sarangi: "Hindustani Khayal Sarangi", tanpura: 'Tanpura accompaniment' } } },
  'indian-classical::thumri': {
    instruments: ['voice','sarangi','tanpura','tabla'],
    note: 'Thumri teaching score: let the voice carry the lyrical sthayi and antara, leave the alap open, then turn the bol-banav into a more ornamented answer before the laggi lift and shared cadence. Sarangi and tabla change cells around the sung line rather than repeating one accompaniment loop.',
    sectionInstruments: {
      alap: ['sarangi','tanpura'],
      sthayi: ['voice','sarangi','tanpura','tabla'],
      antara: ['voice','sarangi','tanpura','tabla'],
      'bol-banav': ['voice','sarangi','tanpura','tabla'],
      laggi: ['voice','sarangi','tanpura','tabla'],
      cadence: ['voice','sarangi','tanpura'] },
    patternAssignments: {
      alap: { sarangi: 'Thumri Sarangi', tanpura: 'Tanpura accompaniment' },
      sthayi: { voice: 'Thumri Vocal', sarangi: 'Thumri Sarangi', tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      antara: { voice: "Thumri Vocal", sarangi: "Thumri Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      'bol-banav': { voice: "Thumri Vocal", sarangi: "Thumri Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      laggi: { voice: "Thumri Vocal", sarangi: "Thumri Sarangi", tanpura: 'Tanpura accompaniment', tabla: "Tabla pulse" },
      cadence: { voice: 'Thumri Vocal', sarangi: "Thumri Sarangi", tanpura: 'Tanpura accompaniment' } } },
  'korean::pansori': {
    patternAssignments: {
      jinyangjo: { voice: 'Pansori Vocal' },
      'narration#2': { voice: "Pansori Vocal" },
      jungmori: { voice: "Pansori Vocal" },
      jungjungmori: { voice: "Pansori Vocal" },
      jajinmori: { voice: "Pansori Vocal" },
      cadence: { voice: "Pansori Vocal" } } },
  'korean::samulnori': {
    patternAssignments: {
      opening: { gongs: "Gongs groove" },
      youngnam: { gongs: 'Gongs groove' },
      honam: { gongs: "Samulnori Gongs" },
      jungbu: { gongs: "Samulnori Gongs" },
      exchange: { gongs: "Samulnori Gongs" },
      climax: { gongs: "Samulnori Gongs" },
      cadence: { gongs: "Gongs groove" } } },
  'persian::dastgah': {
    instruments: ['voice','tar','santur','tombak'],
    note: 'Dastgah Shur learning score: introduce the measured tar and santur, bring the voice in for a shaped daramad line, leave a tar-and-santur answer, then expose an unaccompanied avaz and tar chaharmezrab. The third verse returns instrumentally before a shared forud. The vowel patch is a restrained pitch guide, not a recorded singer.',
    sectionLeads: { prelude: 'tar', verse: 'voice', response: 'tar', 'verse#2': 'voice', solo: 'tar', 'verse#3': 'tar', cadence: 'tar' },
    sectionInstruments: {
      prelude: ['tar','santur','tombak'],
      verse: ['voice','tar','santur','tombak'],
      response: ['tar','santur','tombak'],
      'verse#2': ['voice'],
      solo: ['tar'],
      'verse#3': ['tar','santur','tombak'],
      cadence: ['tar','santur','tombak'] },
    solos: { 'verse#2': 'voice', solo: 'tar' },
    soloModes: { 'verse#2': 'unaccompanied', solo: 'unaccompanied' },
    patternAssignments: {
      prelude: { tar: 'Tar reply', santur: 'Santur answer', tombak: 'Tombak cycle' },
      verse: { voice: 'Vocal breath line', tar: 'Tar reply', santur: 'Santur answer', tombak: 'Tombak cycle' },
      response: { tar: 'Tar reply', santur: "Santur answer", tombak: "Tombak cycle" },
      'verse#2': { voice: "Vocal breath line" },
      solo: { tar: 'Tar chaharmezrab' },
      'verse#3': { tar: "Tar chaharmezrab", santur: "Santur answer", tombak: "Tombak cycle" },
      cadence: { tar: 'Tar reply', santur: 'Santur answer', tombak: 'Tombak cycle' } },
    lockPatternAssignments: {
      prelude: ['tar','santur','tombak'], verse: ['voice','tar','santur','tombak'], response: ['tar','santur','tombak'],
      'verse#2': ['voice'], solo: ['tar'], 'verse#3': ['tar','santur','tombak'], cadence: ['tar','santur','tombak'] } },
  'persian::persian-instrumental-ensemble': {
    lead: 'tar',
    instruments: ['tar','santur','tombak'],
    note: 'Persian instrumental ensemble study: open with the measured tar pishdaramad and quiet santur responses, then raise the tar into its gushe line. Clear santur and tombak for the unaccompanied chaharmezrab, restore the ensemble for a changed development phrase, and resolve together through forud. These are local style studies, not a transcription.',
    sectionInstruments: {
      prelude: ['tar','santur','tombak'],
      theme: ['tar','santur','tombak'],
      solo: ['tar'],
      development: ['tar','santur','tombak'],
      coda: ['tar','santur','tombak'] },
    patternAssignments: {
      prelude: { tar: 'Measured opening', santur: 'Santur reply', tombak: 'Tombak measured cycle' },
      theme: { tar: 'Tar gushe phrase', santur: 'Santur reply', tombak: 'Tombak measured cycle' },
      solo: { tar: 'Tar chaharmezrab' },
      development: { tar: 'Tar gushe phrase', santur: "Santur reply", tombak: "Tombak measured cycle" },
      'theme#2': { tar: 'Measured opening', santur: "Santur reply", tombak: "Tombak measured cycle" },
      coda: { tar: 'Tar forud', santur: 'Santur reply', tombak: 'Tombak measured cycle' } },
    lockPatternAssignments: {
      prelude: ['tar','santur','tombak'], theme: ['tar','santur','tombak'], solo: ['tar'],
      development: ['tar','santur','tombak'], 'theme#2': ['tar','santur','tombak'], coda: ['tar','santur','tombak'] } },
  'persian::avaz-e-dashti': {
    patternAssignments: {
      verse: { voice: "Dashti breath line" },
      response: { voice: "Dashti breath line" },
      gusheh: { voice: "Dashti breath line" },
      return: { voice: "Dashti breath line" },
      forud: { voice: 'Dashti forud' } } },
  'house::deep-house': {
    note: 'Deep-house arrangement study: start with a DJ-friendly percussion entrance, let the sub and warm Rhodes arrive in stages, then thin the breakdown before the groove returns with a changed keyboard and drum response. The long sections teach small, deliberate changes inside a steady pulse.',
    sectionInstruments: {
      intro: ['drums','shaker'],
      'bass-entry': ['synth','drums','shaker'],
      chords: ['synth','rhodes','drums','shaker'],
      breakdown: ['rhodes'],
      variation: ['synth','rhodes','drums','shaker'],
      outro: ['drums','shaker'] },
    patternAssignments: {
      intro: { drums: "Kit", shaker: "Shaker pulse" },
      'bass-entry': { 'synth:bass': "Low anchor", drums: "Kit", shaker: 'Shaker pulse' },
      chords: { 'synth:lead': "Deep House Synthesizer", rhodes: "Rhodes accompaniment", 'synth:bass': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      breakdown: { rhodes: "Rhodes accompaniment" },
      variation: { 'synth:lead': "Deep House Synthesizer", rhodes: 'Rhodes accompaniment', 'synth:bass': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      outro: { drums: "Kit", shaker: "Shaker pulse" } } },
  'bollywood::disco-bollywood': {
    note: 'Bollywood disco arrangement study: establish kick, clap and octave bass, leave the verse comparatively lean, then widen the refrain with synth answers and string stabs. The instrumental passage varies the hook before the rhythm section strips back for the close.',
    sectionInstruments: {
      intro: ['guitar','bass','drums'],
      verse: ['voice','guitar','bass','drums'],
      chorus: ['voice','guitar','string-ensemble','synth','bass','drums'],
      solo: ['guitar','string-ensemble','synth','bass','drums'],
      outro: ['guitar','bass','drums'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: "Four-on-floor backbeat" },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: 'Four-on-floor backbeat' },
      chorus: { voice: "Disco Bollywood Vocal", guitar: "Guitar accompaniment", 'string-ensemble': 'Disco string stabs', synth: 'Disco synth answer', bass: 'Disco octave bass', drums: 'Four-on-floor backbeat' },
      solo: { guitar: "Guitar accompaniment", 'string-ensemble': "Disco string stabs", synth: "Disco synth answer", bass: "Disco octave bass", drums: "Four-on-floor backbeat" },
      outro: { guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: "Four-on-floor backbeat" } } },
  'bollywood::electronic-club': {
    note: 'Electronic Bollywood arrangement study: keep the opening instrumental, give the verse a vocal line over a separated kick and bass, widen the hook with syncopated synth stabs, then leave a brief drumless synth breakdown before a clear build and full return.',
    sectionInstruments: {
      intro: ['synth','drums'],
      hook: ['voice','synth','bass','drums'],
      verse: ['voice','synth','bass','drums'],
      chorus: ['voice','synth','bass','drums'],
      breakdown: ['synth'],
      build: ['synth','bass','drums'],
      outro: ['synth','drums'] },
    patternAssignments: {
      intro: { 'synth:harmony': 'Synth hook', drums: "Bollywood club pulse" },
      hook: { voice: 'Voice statement', 'synth:harmony': 'Synth hook', bass: 'Low anchor', drums: "Bollywood club pulse" },
      verse: { voice: "Electronic Club Vocal", 'synth:harmony': "Synth hook", bass: "Low anchor", drums: "Bollywood club pulse" },
      chorus: { voice: "Electronic Club Vocal", 'synth:harmony': "Synth hook", bass: "Low anchor", drums: "Bollywood club pulse" },
      breakdown: { 'synth:harmony': "Synth hook" },
      build: { 'synth:harmony': "Synth hook", bass: "Low anchor", drums: "Bollywood club pulse" },
      outro: { 'synth:harmony': "Synth hook", drums: "Bollywood club pulse" } } },
  'jazz::big-band': {
    note: 'Big Band teaching arrangement: give piano a clear feature over the walking rhythm section, pass to an alto/tenor sax phrase exchange, then feature trumpet before the full horn section returns for the shout chorus and theme tag. These are section-role studies, not a transcription.',
    solos: { piano: 'piano', trumpet: 'trumpet' },
    sectionInstruments: {
      piano: ['piano','guitar','upright-bass','drums'],
      sax: ['alto-sax','tenor-sax','piano','guitar','upright-bass','drums'],
      trumpet: ['trumpet','piano','guitar','upright-bass','drums'] },
    patternAssignments: {
      piano: { piano: "Piano accompaniment", guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: "Kit" },
      sax: { 'alto-sax': 'Alto-sax statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      trumpet: { trumpet: "Big Band Trumpet", piano: 'Piano answer', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: "Kit" },
      shout: { trumpet: 'Trumpet statement', trombone: "Trombone answer", 'alto-sax': "Big Alto Sax", 'tenor-sax': "Big Tenor Sax", piano: 'Piano answer', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: "Kit" } },
    lockPatternAssignments: { sax: ['alto-sax','tenor-sax'], shout: ['trumpet','trombone','alto-sax','tenor-sax'] } },
  'classical::minimalist': {
    note: 'Minimalist process study: expose a two-bar violin seed, add cello and marimba, add one violin pickup as the marimba shifts by an eighth, then strip back to the seed and a sustained close. The mallet and bowed lines carry the pulse; there is no drum beat underneath.',
    sectionInstruments: {
      pulse: ['violin'],
      'additive-entry': ['violin','cello','marimba'],
      'phase-overlap': ['violin','cello','marimba','string-ensemble'],
      'full-ensemble': ['violin','flute','string-ensemble','cello','marimba'],
      release: ['violin','cello'],
      coda: ['violin','string-ensemble','cello'] },
    patternAssignments: {
      pulse: { violin: 'Violin seed cell' },
      'additive-entry': { violin: 'Violin seed cell', cello: 'Low anchor', marimba: 'Marimba chord-tone cell' },
      'phase-overlap': { violin: 'Violin additive variation', cello: 'Low anchor', marimba: 'Marimba phase shift', 'string-ensemble': 'String-ensemble accompaniment' },
      'full-ensemble': { violin: 'Violin additive variation', flute: 'Flute answering line', cello: 'Low anchor', marimba: 'Marimba chord-tone cell', 'string-ensemble': 'String-ensemble accompaniment' },
      release: { violin: 'Violin seed cell', cello: 'Low anchor' },
      coda: { violin: 'Violin seed cell', cello: 'Cello cadence pedal', 'string-ensemble': 'String-ensemble accompaniment' } },
    lockPatternAssignments: {
      pulse: ['violin'],
      'additive-entry': ['violin'],
      'phase-overlap': ['violin','marimba'],
      'full-ensemble': ['violin'],
      release: ['violin'],
      coda: ['violin','cello'] } },
  'classical::impressionist': {
    note: 'Impressionist color study: state the whole-tone phrase, shift it into a later-cycle variation, let the violin and flute answer one another in the dialogue, and return to the opening contour for the coda.',
    patternAssignments: {
      dawn: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute', 'string-ensemble': 'String-ensemble accompaniment', cello: 'Low anchor', timpani: 'Timpani pulse' },
      sea: { violin: "Impressionist Violin", flute: "Impressionist Concert Flute", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      noon: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute', 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      waves: { violin: "Impressionist Violin", flute: "Impressionist Concert Flute", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      dialogue: { violin: "Impressionist Violin", flute: "Impressionist Concert Flute", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      storm: { violin: "Impressionist Violin", flute: "Impressionist Concert Flute", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      coda: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute', 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" } },
    lockPatternAssignments: {
      dawn: ['violin','flute'], sea: ['violin','flute'], noon: ['violin','flute'],
      waves: ['violin','flute'], dialogue: ['violin','flute'], storm: ['violin','flute'], coda: ['violin','flute'] } },
  'bass::drum-bass': {
    note: 'Drum & Bass study: bring the break in through the DJ intro, build tension with a rolling snare pickup, and make the drop hit with a firmer two-step kick/snare shape. The breakdown strips back to sub and atmosphere before the last drop; sections use the style’s existing role cells.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      verse: { 'synth:lead': "Drum Bass Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      build: { 'synth:lead': "Drum Bass Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      drop: { 'synth:lead': "Drum Bass Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Drum Bass Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::jungle': {
    note: 'Jungle study: teach a chopped break against the syncopated sub, leave the break passage exposed, then bring the sampled hook back over the full rhythm section. The short fills set up phrase returns; no extra instrument part is invented for the song.',
    sectionInstruments: { intro: ['synth','drums','sampler'], break: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      chant: { 'synth:lead': "Jungle Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      drop: { 'synth:lead': "Jungle Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      break: { 'synth:lead': "Jungle Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::liquid': {
    note: 'Liquid study: keep the sub and broken drums grounded while the sustained harmony opens into a brighter melodic reply. The breakdown removes the main break so the return feels wide and lifted, then the final drop resolves into a light DJ outro.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      theme: { 'synth:lead': "Liquid Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      build: { 'synth:lead': "Liquid Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      drop: { 'synth:lead': "Liquid Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Liquid Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::neurofunk': {
    note: 'Neurofunk study: contrast clipped, modulated bass attacks with a tight rolling break. Pull the kick-and-snare weight back for the breakdown, use a short snare roll to build pressure, then return with a denser bass variation and a sharp final fill.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': "Neurofunk Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      build: { 'synth:lead': "Neurofunk Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      drop: { 'synth:lead': "Neurofunk Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Neurofunk Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      variation: { 'synth:lead': "Neurofunk Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::uk-garage': {
    note: 'UK Garage study: make the shuffled kick and clipped chord stabs bounce around the bassline. Trade a thinner A section for a fuller B section, open the breakdown, then return to the bass-and-vocal-hook groove with busier drum replies.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      A: { 'synth:lead': "UK Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      B: { 'synth:lead': "UK Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "UK Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::2-step': {
    note: '2-Step study: let the kick skip around a clear backbeat while the sub stays simple. Keep the verse’s ghosted shuffle lean, thicken the chorus with brighter chord and drum replies, then drop back to a sparse break before the last chorus.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      verse: { 'synth:lead': "2-Step Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      chorus: { 'synth:lead': "2-Step Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "2-Step Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::dubstep': {
    note: 'Dubstep study: place the half-time snare in a wide, heavy drop, then use a contrasting bass phrase and filtered transition. The breakdown strips to sub and atmosphere; the second drop restores the chesty kick, snare, and bass together.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      theme: { 'synth:lead': "Dubstep Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      drop: { 'synth:lead': "Dubstep Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      variation: { 'synth:lead': "Dubstep Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Dubstep Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::grime': {
    note: 'Grime study: keep the square-wave bass hook blunt and exposed under the vocal-sized gaps. The verse holds its sparse drum frame, the hook adds a clipped synth answer, and the break drops out before a heavier final hook; there is no continuous choir pad.',
    sectionInstruments: { intro: ['synth','drums','sampler'], break: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      hook: { 'synth:lead': "Grime Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      verse: { 'synth:lead': "Grime Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      break: { 'synth:lead': "Grime Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'bass::future-garage': {
    note: 'Future Garage study: keep the beat late and ghosted, with a deep sub under broken chord fragments. The A/B changes come from air, pitch-bent replies, and a different drum density; the breakdown and dissolve leave the reverb tail room to speak.',
    sectionInstruments: { opening: ['synth','drums','sampler'], breakdown: ['synth','sampler'], dissolve: ['synth','sampler'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      A: { 'synth:lead': "Future Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      B: { 'synth:lead': "Future Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Future Garage Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      dissolve: { } } },
  'bass::breakbeat': {
    note: 'Breakbeat study: make the sampled kick-and-snare break the hook, then alternate it with a more open groove. Use sampler replies at the phrase edges, raise drum density through the build, and leave an instrumental breakdown before the full beat returns.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': "Kit", 'sampler:percussion': 'Sampler pulse' },
      groove: { 'synth:lead': "Breakbeat Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      hook: { 'synth:lead': "Breakbeat Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      breakdown: { 'synth:lead': "Breakbeat Synthesizer", 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': "Sampler pulse" },
      build: { 'synth:lead': "Breakbeat Synthesizer", 'synth:harmony': "Synth accompaniment", 'synth:bass': "Low anchor", 'drums:percussion': "Kit", 'sampler:percussion': "Sampler pulse" },
      outro: { } } },
  'metal::heavy-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': "Gallop riff", 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      riff: { 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      chorus: { 'voice:lead': "Heavy Metal Vocal", 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      bridge: { 'guitar:lead': "Gallop riff", 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': "Gallop bass", 'drums:percussion': "Metal gallop kick" },
      solo: { 'guitar:lead': "Gallop riff", 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      outro: { } } },
  'metal::thrash': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      chorus: { 'voice:lead': "Thrash Vocal", 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      breakdown: { 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Low anchor', 'drums:percussion': 'Half-time break' },
      solo: { 'guitar:lead': "Thrash Guitar", 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      coda: { } } },
  'metal::doom': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      chorus: { 'voice:lead': "Doom Vocal", 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      bridge: { 'guitar:lead': "Doom Guitar", 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      solo: { 'guitar:lead': "Doom Guitar", 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      outro: { } } },
  'metal::death': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      riff: { 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      verse: { 'voice:lead': "Death Vocal", 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      chorus: { 'voice:lead': "Death Vocal", 'guitar:lead': "Death Guitar", 'guitar:harmony': 'Chromatic support', 'bass:bass': "Low anchor", 'drums:percussion': 'Blast beat' },
      breakdown: { 'guitar:lead': "Tremolo riff", 'guitar:harmony': 'Guitar accompaniment', 'bass:bass': 'Low pedal', 'drums:percussion': 'Death half-time' },
      solo: { 'guitar:lead': "Death Guitar", 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      coda: { } } },
  'metal::black': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal' },
      riff: { 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      verse: { 'voice:lead': "Black Vocal", 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      chorus: { 'voice:lead': "Black Vocal", 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      breakdown: { 'guitar:lead': "Black Guitar", 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal' },
      outro: { } } },
  'metal::progressive-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      riff: { 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      chorus: { 'voice:lead': "Progressive Metal Vocal", 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      bridge: { 'guitar:lead': "7/8 chug", 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': "Kit" },
      build: { 'guitar:lead': "Progressive Metal Guitar", 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': "Kit" },
      climax: { 'guitar:lead': "Progressive Metal Guitar", 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      outro: { } } },
  'metal::industrial-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      riff: { 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      chorus: { 'voice:lead': "Industrial Metal Vocal", 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      breakdown: { 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      hit: { 'guitar:lead': 'Machine lead hit', 'guitar:harmony': 'Machine chord hit', 'bass:bass': 'Machine bass hit', 'drums:percussion': 'Machine drum hit' },
      outro: { } } },
  'bachata::dominican': {
    note: 'Bachata teaching score: separate the vocal verse and lifted refrain, keep the intro and coda instrumental, then clear the voice for the requinto-and-bongó mambo. Original pedagogical phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'mambo', 'cierre'),
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      chorus: { voice: 'Vocal refrain lift' } } },
  'bachata::amargue': {
    note: 'Amargue teaching score: keep the falling vocal lament distinct from the rising refrain, expose the requinto in its solo, and leave the opening and close instrumental. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'solo', 'cierre'),
    solos: { solo: 'requinto' },
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      chorus: { voice: 'Vocal refrain lift' } } },
  'bachata::traditional-bolero-bachata': {
    note: 'Bolero bachata teaching score: let the vocal line follow the broken-chord segunda, lift into the bridge, and hand the solo section to requinto. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'solo', 'cierre'),
    solos: { solo: 'requinto' },
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      bridge: { voice: 'Vocal refrain lift' } } },
  'bachata::moderna': {
    note: 'Modern bachata teaching score: keep the verse close, lift the prechorus and refrain, and leave the intro and outro for requinto and rhythm-section parts. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataModernInstrumentalParts, 'intro', 'outro'),
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      prechorus: { voice: 'Vocal refrain lift' },
      chorus: { voice: 'Vocal refrain lift' },
      bridge: { voice: 'Vocal verse phrase' } } },
  'bachata::sensual': {
    note: 'Sensual bachata teaching score: use held vocal arrivals over sparse guitar answers, then leave the break and outro open so the lead does not become a continuous pad. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'break', 'outro'),
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      chorus: { voice: 'Vocal refrain lift' },
      bridge: { voice: 'Vocal verse phrase' } } },
  'bachata::bachata-mambo': {
    note: 'Bachata mambo teaching score: keep vocal phrases out of the instrumental mambo bars so requinto runs and bongó fills can carry the peak. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'mambo', 'cierre'),
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      chorus: { voice: 'Vocal refrain lift' } } },
  'bachata::urban': {
    note: 'Urban bachata teaching score: keep the syncopated verse and refrain clear above the produced rhythm, and leave intro, requinto solo, and outro free of the sustained vocal guide. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataUrbanInstrumentalParts, 'intro', 'solo', 'outro'),
    solos: { solo: 'requinto' },
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase', bass: 'Bass majao syncopation' },
      chorus: { voice: 'Vocal refrain lift', bass: 'Bass majao syncopation' } } },
  'bachata::fusion': {
    note: 'Bachata fusion teaching score: separate the vocal hook from the instrumental exchange and mambo, preserving clear space for the crossover parts. Original study phrases, not a transcription.',
    sectionInstruments: bachataInstrumentalSections(bachataCoreInstrumentalParts, 'intro', 'interlude', 'mambo', 'cierre'),
    patternAssignments: {
      verse: { voice: 'Vocal verse phrase' },
      prechorus: { voice: 'Vocal refrain lift' },
      chorus: { voice: 'Vocal refrain lift' } } },
  'flamenco::bulerias': {
    note: 'Bulerías teaching score: after the guitar feature, leave a one-compás instrumental llamada as the cue for cante to return. End with a separate one-compás guitar remate and sparse palmas/cajón accents, then let the final hit breathe. These are original concept studies, not a transcription.',
    sectionInstruments: {
      llamada: ['guitar','palmas'],
      remate: ['guitar','palmas','cajon'] },
    patternAssignments: {
      intro: { guitar: 'Bulería compás', palmas: 'Palmas compás', cajon: 'Cajón pulse' },
      compas: { guitar: 'Bulería compás', palmas: 'Palmas compás', cajon: 'Cajón pulse' },
      falseta: { guitar: 'Bulería falseta', palmas: 'Palmas compás', cajon: 'Cajón pulse' },
      llamada: { guitar: 'Guitar llamada', palmas: 'Palmas compás' },
      remate: { guitar: 'Guitar remate', palmas: 'Palmas remate', cajon: 'Cajón remate' } },
    lockPatternAssignments: {
      llamada: ['guitar'],
      remate: ['guitar','palmas','cajon'] } },
  'gamelan::javanese': {
    sectionBpm: { buka: 64, 'main-cycle': 64, 'irama-change': 64, 'irama-II': 32, suwuk: 48 },
    sectionInstruments: { 'irama-change': ['kendang','gongs'] },
    patternAssignments: {
      'main-cycle': { 'gamelan-metallophone:lead': 'Balungan pulse', bonang: 'Bonang double subdivision' },
      'irama-change': { kendang: 'Kendang irama cue', gongs: 'Gongs pulse' },
      'irama-II': { 'gamelan-metallophone:lead': 'Balungan slow pulse', bonang: 'Bonang deep subdivision' },
      suwuk: {
        'gamelan-metallophone:lead': 'Suwuk close', rebab: 'Suwuk close',
        bonang: 'Suwuk close', kendang: 'Suwuk close', gongs: 'Suwuk close' } },
    lockPatternAssignments: {
      'main-cycle': ['gamelan-metallophone:lead','bonang'],
      'irama-change': ['kendang','gongs'],
      'irama-II': ['gamelan-metallophone:lead','bonang'],
      suwuk: ['gamelan-metallophone:lead','rebab','bonang','kendang','gongs'] } },
  'gamelan::balinese-gong-kebyar': {
    note: 'Balinese Gong Kebyar teaching score: the opening lands as a coordinated ensemble flare, then the metallophone pair moves from beat-led polos and offbeat sangsih into a denser interlock. A short syncopated angsel cue stops the group before the bright return; the closing suwuk eases the tempo. These are playable concept studies on a fixed grid, not a transcription.',
    source: 'https://www.lyrichordmedia.com/linernotes/lyrcd7179us.pdf',
    sectionBpm: { buka: 132, kebyar: 132, theme: 120, kotekan: 132, angsel: 132, 'kotekan-fast': 132, suwuk: 116 },
    sectionInstruments: { buka: ['gamelan-metallophone','reyong','kendang','gongs'], angsel: ['gamelan-metallophone','reyong','kendang','gongs'] },
    patternAssignments: {
      buka: {
        'gamelan-metallophone:lead': 'Buka flare', 'gamelan-metallophone:harmony': 'Buka support',
        reyong: 'Reyong flare', kendang: 'Kendang cue', gongs: 'Gong flare' },
      kotekan: { 'gamelan-metallophone:lead': 'Kotekan polos', 'gamelan-metallophone:harmony': 'Kotekan sangsih' },
      angsel: {
        'gamelan-metallophone:lead': 'Lead angsel', 'gamelan-metallophone:harmony': 'Metal angsel',
        reyong: 'Reyong angsel', kendang: 'Kendang angsel', gongs: 'Gong angsel' },
      'kotekan-fast': { 'gamelan-metallophone:lead': 'Fast polos', 'gamelan-metallophone:harmony': 'Fast sangsih' } },
    lockPatternAssignments: {
      buka: ['gamelan-metallophone:lead','gamelan-metallophone:harmony','reyong','kendang','gongs'],
      kotekan: ['gamelan-metallophone:lead','gamelan-metallophone:harmony'],
      angsel: ['gamelan-metallophone:lead','gamelan-metallophone:harmony','reyong','kendang','gongs'],
      'kotekan-fast': ['gamelan-metallophone:lead','gamelan-metallophone:harmony'] } },
  'japanese::gagaku': {
    note: 'Gagaku jo–ha–kyū teaching score: the grid approximates a spacious jo, a measured ha, and a quicker kyū before settling for the cadence. Jo is traditionally free rhythm, and many pieces do not contain all three movements; this sample makes the formal idea playable on a fixed grid.',
    source: 'https://www2.ntj.jac.go.jp/dglib/contents/learn/edc22/en/category/bugaku/column.html',
    sectionBpm: { jo: 56, ha: 64, kyu: 72, cadence: 56 },
    patternAssignments: {
      opening: { hichiriki: 'Gagaku Hichiriki', ryuteki: 'Gagaku Ryuteki' },
      jo: { hichiriki: 'Gagaku Hichiriki', ryuteki: 'Gagaku Ryuteki', sho: 'Sho comping' },
      ha: { hichiriki: "Gagaku Hichiriki", ryuteki: "Gagaku Ryuteki", sho: "Sho comping" },
      kyu: { hichiriki: "Gagaku Hichiriki", ryuteki: "Gagaku Ryuteki", sho: "Sho comping" },
      cadence: { hichiriki: 'Gagaku Hichiriki', ryuteki: 'Gagaku Ryuteki' } },
    lockPatternAssignments: {
      opening: ['hichiriki','ryuteki'], jo: ['hichiriki','ryuteki'], ha: ['hichiriki','ryuteki'],
      kyu: ['hichiriki','ryuteki'], cadence: ['hichiriki','ryuteki'] } },
  'japanese::shakuhachi': {
    note: 'Shakuhachi honkyoku teaching score: leave one intentional ma after the response so its resonance can fade before the next breath-led phrase. This one-bar rest is a grid-based study of the space, not a fixed transcription of free-time timing.',
    sectionInstruments: { ma: [] },
    patternAssignments: {
      response: { shakuhachi: "Shakuhachi Shakuhachi" },
      development: { shakuhachi: "Shakuhachi Shakuhachi" },
      duet: { shakuhachi: "Shakuhachi Shakuhachi" },
      return: { shakuhachi: "Shakuhachi Shakuhachi" },
      cadence: { shakuhachi: "Shakuhachi Shakuhachi" } } },
  'chinese::guqin': {
    note: 'Guqin teaching score: move from a flowing statement through left-hand pitch shading and a more active phrase, then let the falling line settle. Return to the opening gesture before leaving a few exposed plucks and slides to decay. The final section is sparse resonance, not a full mute or a transcription.',
    patternAssignments: {
      opening: { guqin: 'Guqin phrase' },
      stream: { guqin: 'Left-hand pitch-shading response' },
      rapids: { guqin: "Left-hand pitch-shading response" },
      falls: { guqin: "Guqin phrase" },
      return: { guqin: 'Guqin phrase' },
      silence: { guqin: 'Left-hand pitch-shading response' },
    },
    lockPatternAssignments: {
      opening: ['guqin'], stream: ['guqin'], rapids: ['guqin'], falls: ['guqin'],
      return: ['guqin'], silence: ['guqin'],
    },
    sectionInstruments: {
      silence: ['guqin'],
    },
  },
  'chinese::guzheng': {
    note: 'Guzheng teaching score: open with a localized yaozhi tremolo, expand into measured pentatonic plucks, and color selected arrivals with left-hand bends. Change the return phrase before settling on a long final tone; no Western chord backing is added.',
    patternAssignments: {
      opening: { guzheng: 'Guzheng phrase' },
      'theme#1': { guzheng: 'Lyrical bend-and-release phrase' },
      variation: { guzheng: "Lyrical bend-and-release phrase" },
      build: { guzheng: 'Guzheng phrase' },
      'theme#2': { guzheng: "Guzheng phrase" },
      cadence: { guzheng: 'Lyrical bend-and-release phrase' },
    },
    lockPatternAssignments: {
      opening: ['guzheng'], 'theme#1': ['guzheng'], variation: ['guzheng'],
      build: ['guzheng'], 'theme#2': ['guzheng'], cadence: ['guzheng'],
    },
  },
  'chinese::pipa': {
    note: 'Pipa teaching score: establish the alternating tan-tiao motif, move through a measured foundation pattern, then reserve the five-finger lunzhi tremolo and sweeping accents for the battle passage. Thin the aftermath, answer the return phrase, and close on the motif’s held tone. This is a technique-led study, not a Ten Sides transcription.',
    patternAssignments: {
      muster: { pipa: 'Alternating tan-tiao motif' },
      march: { pipa: "Alternating tan-tiao motif" },
      battle: { pipa: 'Pipa answer' },
      aftermath: { pipa: "Pipa answer" },
      retreat: { pipa: "Alternating tan-tiao motif" },
      cadence: { pipa: 'Alternating tan-tiao motif' },
    },
    lockPatternAssignments: {
      muster: ['pipa'], march: ['pipa'], battle: ['pipa'], aftermath: ['pipa'],
      retreat: ['pipa'], cadence: ['pipa'],
    },
  },
  'flamenco::taranta': {
    note: 'Taranta guitar study: keep the free-time salida broad, let picado carry the falseta, then answer it with a shorter upper-register phrase before returning to the low thumb and a spacious cadence. The grid remains a flexible guide for free-time phrasing.',
    patternAssignments: {
      opening: { guitar: 'Guitar compás' },
      'lower-register': { guitar: 'Guitar compás' },
      falseta: { guitar: 'Picado line' },
      'upper-register': { guitar: "Picado line" },
      return: { guitar: "Picado line" },
      cadence: { guitar: 'Guitar compás' },
    },
    lockPatternAssignments: {
      opening: ['guitar'], 'lower-register': ['guitar'], falseta: ['guitar'],
      'upper-register': ['guitar'], return: ['guitar'], cadence: ['guitar'],
    },
  },
  'steppe::dombra': {
    note: 'Dombra kui study: state the alternating plucked motif, reduce it for the A strain, vary its contour through B, and use a short answer in the contrasting C passage. Bring the main kui back for the final A and cadence. The modal center stays fixed; this is a learning arrangement, not a transcription.',
    patternAssignments: {
      intro: { dombra: 'Dombra dombra' },
      'A#1': { dombra: "Dombra Dombra" },
      B: { dombra: "Dombra Dombra" },
      'A#2': { dombra: 'Dombra dombra' },
      C: { dombra: "Dombra Dombra" },
      'A#3': { dombra: "Dombra Dombra" },
      cadence: { dombra: 'Dombra dombra' },
    },
    lockPatternAssignments: {
      intro: ['dombra'], 'A#1': ['dombra'], B: ['dombra'], 'A#2': ['dombra'],
      C: ['dombra'], 'A#3': ['dombra'], cadence: ['dombra'],
    },
  },
  'weird::drone': {
    note: 'Drone process study: keep the synth fundamental continuous while the sampler gradually changes its upper resonance, adds density at feedback, then withdraws before the final decay. The stable pitch is intentional; section change comes from texture and entrance density.',
    sectionInstruments: {
      opening: ['synth','sampler'], mass: ['synth','sampler'], resonance: ['synth','sampler'],
      feedback: ['synth','sampler'], release: ['synth','sampler'], decay: ['synth'],
    },
    patternAssignments: {
      opening: { synth: 'Sustained anchor', sampler: 'Upper resonance' },
      mass: { sampler: 'Sampler pulse' },
      resonance: { sampler: "Sampler pulse" },
      feedback: { sampler: "Sampler pulse" },
      release: { sampler: 'Sampler pulse' },
      decay: { synth: 'Sustained anchor' },
    },
    lockPatternAssignments: {
      opening: ['synth','sampler'], mass: ['synth','sampler'], resonance: ['synth','sampler'],
      feedback: ['synth','sampler'], release: ['synth','sampler'], decay: ['synth'],
    },
  },
  'weird::spectral': {
    note: 'Spectral process study: retain one steady anchor while upper entries first brighten the spectrum, then shift their spacing and density through the transformation. Reintroduce the opening color before removing the sampler for the final decay; the phrase is a timbre process, not a chord progression.',
    sectionInstruments: {
      attack: ['synth','sampler'], spectrum: ['synth','sampler'], transformation: ['synth','sampler'],
      noise: ['synth','sampler'], return: ['synth','sampler'], decay: ['synth'],
    },
    patternAssignments: {
      attack: { synth: 'Spectrum anchor', sampler: 'Upper entries' },
      spectrum: { sampler: "Upper entries" },
      transformation: { sampler: "Upper entries" },
      noise: { sampler: "Upper entries" },
      return: { sampler: 'Upper entries' },
      decay: { synth: 'Spectrum anchor' },
    },
    lockPatternAssignments: {
      attack: ['synth','sampler'], spectrum: ['synth','sampler'], transformation: ['synth','sampler'],
      noise: ['synth','sampler'], return: ['synth','sampler'], decay: ['synth'],
    },
  },
  'weird::zeuhl': {
    // The style's odd-meter motor is a foundation, not a single loop for the
    // whole score. Rotate through its authored replies and variations, and
    // thin the breakdown/coda so the chant and final return have real shape.
    sectionInstruments: {
      opening: ['piano','bass','drums'],
      'bass-cell': ['piano','bass','drums'],
      theme: ['piano','bass','drums'],
      development: ['piano','bass','drums'],
      breakdown: ['piano','bass'],
      chant: ['voice','piano','bass','drums'],
      climax: ['piano','bass','drums'],
      coda: ['piano','bass'],
    },
    patternAssignments: {
      opening: { piano: 'Piano accents', bass: 'Bass motor', drums: '7/8 kit cycle' },
      'bass-cell': { piano: 'Piano accents', bass: 'Bass motor', drums: '7/8 kit cycle' },
      theme: { piano: "Piano accents", bass: "Bass motor", drums: "7/8 kit cycle" },
      development: { piano: "Piano accents", bass: "Bass motor", drums: "7/8 kit cycle" },
      breakdown: { piano: "Piano accents", bass: "Bass motor" },
      chant: { voice: 'Angular chant', piano: "Piano accents", bass: "Bass motor", drums: "7/8 kit cycle" },
      climax: { piano: "Piano accents", bass: "Bass motor", drums: "7/8 kit cycle" },
      coda: { piano: 'Piano accents', bass: "Bass motor" },
    },
  },
  'reggae::roots': {
    note: 'Original Roots Reggae teaching score: the one-drop anchors a beat-one pocket, short vocal phrases share space with the bass, and an instrumental section exposes the organ bubble before the fuller refrain returns.',
    sectionInstruments: {
      intro: ['guitar','organ','bass','drums','shaker'],
      verse: ['voice','guitar','organ','bass','drums','shaker'],
      chorus: ['voice','guitar','organ','bass','drums','shaker'],
      instrumental: ['guitar','organ','bass','drums','shaker'],
      outro: ['guitar','organ','bass','drums','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Offbeat guitar skank', organ: 'Organ 2/4 chop', bass: 'Low anchor', drums: 'One-drop drums', shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: 'Offbeat guitar skank', organ: 'Organ 2/4 chop', bass: 'Low anchor', drums: 'One-drop drums', shaker: 'Shaker pulse' },
      chorus: { voice: "Roots Vocal", guitar: "Offbeat guitar skank", organ: "Organ 2/4 chop", bass: "Low anchor", drums: 'One-drop drums', shaker: "Shaker pulse" },
      instrumental: { guitar: "Offbeat guitar skank", organ: 'Low organ bubble', bass: "Low anchor", drums: 'One-drop drums', shaker: "Shaker pulse" },
      outro: { } } },
  'indian-classical::instrumental-gat': {
    note: 'Instrumental-gat teaching score: develop from the alap through a pulsed gat and faster jhala, then play one four-bar tihai and resolve together on sam. In this 16-beat practice cycle, the sitar repeats the same short descent three times while the tabla moves from a light theka into the matching answers. This fixed-grid study is not a transcription.',
    sectionBpm: { jhala: 96, cadence: 80, tihai: 96, sam: 96 },
    sectionInstruments: {
      tihai: ['sitar','tabla','tanpura'],
      sam: ['sitar','tabla','tanpura'] },
    patternAssignments: {
      tihai: { sitar: 'Sitar tihai phrase', tabla: 'Tabla tihai accents', tanpura: 'Tanpura accompaniment' },
      sam: { sitar: 'Sam landing', tabla: 'Sam landing', tanpura: 'Tanpura accompaniment' } },
    lockPatternAssignments: { tihai: ['sitar','tabla'], sam: ['sitar','tabla'] } },
  'reggae::dub': {
    note: 'Dub teaching score: short offbeat chords and a one-drop foundation give the delay room to answer; bass-and-drum dropouts expose the melodica echo phrase before the full riddim returns.',
    sectionInstruments: {
      intro: ['bass','drums','shaker'],
      A: ['guitar','organ','bass','drums','shaker'],
      breakdown: ['bass','drums'],
      solo: ['melodica','organ','bass','drums'],
      outro: ['bass','shaker'] },
    patternAssignments: {
      intro: { bass: 'Low anchor', drums: 'One-drop drums', shaker: 'Shaker pulse' },
      A: { guitar: 'Offbeat guitar skank', organ: 'Organ 2/4 chop', bass: "Low anchor", drums: 'One-drop drums', shaker: 'Shaker pulse' },
      breakdown: { bass: "Low anchor", drums: "One-drop drums" },
      solo: { melodica: 'Melodica echo answer', organ: "Organ 2/4 chop", bass: "Low anchor", drums: 'One-drop drums' },
      outro: { } } },
  'andean::huayno': {
    note: 'Instrumental huayno sample: siku opens, quena takes the copla, then a faster, denser fuga lifts the dance before a compact cierre.',
    sectionBpm: { fuga: 120 },
    solos: { interlude: 'charango', fuga: 'quena' },
    sectionInstruments: {
      intro: ['siku','charango','bombo-andino'], verse: ['quena','charango','guitar','bombo-andino'],
      response: ['siku','charango','bombo-andino'], interlude: ['charango','guitar','bombo-andino'],
      fuga: ['quena','charango','guitar','bombo-andino'], cierre: ['quena','charango','guitar','bombo-andino'] },
    patternAssignments: {
      intro: { siku: 'Siku statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      verse: { quena: 'Quena statement', charango: 'Charango accompaniment', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      response: { siku: 'Siku statement', charango: "Charango accompaniment", 'bombo-andino': "Bombo-andino pulse" },
      interlude: { charango: "Charango accompaniment", guitar: 'Guitar accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      fuga: { quena: "Huayno Quena", charango: "Charango accompaniment", guitar: "Guitar accompaniment", 'bombo-andino': "Bombo-andino pulse" },
      cierre: { } } },
  'andean::sanjuanito': {
    note: 'The A/B strains trade quena and siku lead phrases; the instrumental solo opens space for the returning flute answer.',
    solos: { solo: 'quena' },
    sectionInstruments: {
      intro: ['siku','charango','bombo-andino'], A: ['quena','charango','bombo-andino'],
      B: ['siku','charango','guitar','bombo-andino'], solo: ['quena','charango','bombo-andino'],
      cierre: ['quena','charango','bombo-andino'] },
    patternAssignments: {
      intro: { siku: 'Siku statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      A: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      B: { siku: 'Siku statement', charango: "Charango accompaniment", guitar: 'Guitar accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      'B#1': { siku: "Sanjuanito Siku" },
      'B#2': { siku: "Sanjuanito Siku" },
      solo: { quena: "Sanjuanito Quena", charango: 'Charango accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      cierre: { } },
    lockPatternAssignments: { 'B#1': ['siku'], 'B#2': ['siku'] } },
  'andean::saya': {
    instruments: ['quena','siku','charango','guitar','bombo-andino'],
    note: 'Instrumental saya adaptation: the bombo pulse remains the anchor while quena and siku exchange short calls; no sustained vowel layer is added over the groove.',
    solos: { interlude: 'quena' },
    sectionInstruments: {
      intro: ['charango','bombo-andino'], verse: ['quena','charango','bombo-andino'],
      chorus: ['siku','charango','guitar','bombo-andino'], interlude: ['quena','charango','bombo-andino'],
      outro: ['siku','charango','bombo-andino'] },
    patternAssignments: {
      intro: { charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      verse: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      chorus: { siku: 'Siku statement', charango: "Charango accompaniment", guitar: 'Guitar accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      interlude: { quena: "Saya Quena", charango: "Charango accompaniment", 'bombo-andino': "Bombo-andino pulse" },
      outro: { siku: "Saya Siku" },
      'chorus#2': { siku: "Saya Siku" } },
    lockPatternAssignments: { 'chorus#2': ['siku'], outro: ['siku'] } },
  'andean::tinku': {
    note: 'Heavy bombo accents frame a four-bar stomp break; the flutes and charango re-enter together for the final dance push.',
    sectionInstruments: {
      intro: ['quena','charango','bombo-andino'], A: ['quena','charango','guitar','bombo-andino'],
      B: ['siku','charango','guitar','bombo-andino'], break: ['bombo-andino'], cierre: ['quena','charango','bombo-andino'] },
    patternAssignments: {
      intro: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      A: { quena: 'Quena statement', charango: "Charango accompaniment", guitar: 'Guitar accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      B: { siku: 'Siku statement', charango: "Charango accompaniment", guitar: "Guitar accompaniment", 'bombo-andino': "Bombo-andino pulse" },
      'A#2': { quena: "Tinku Quena" },
      'A#3': { quena: "Tinku Quena" },
      'B#2': { siku: "Tinku Siku" },
      break: { 'bombo-andino': "Bombo-andino pulse" },
      cierre: { quena: "Tinku Quena" } },
    lockPatternAssignments: { break: ['bombo-andino'], 'A#2': ['quena'], 'A#3': ['quena'], 'B#2': ['siku'], cierre: ['quena'] } },
  'andean::carnavalito': {
    note: 'Quena and siku take turns carrying the dance figure while the charango keeps the repeating ostinato in view.',
    sectionInstruments: {
      intro: ['quena','charango','bombo-andino'], A: ['quena','charango','bombo-andino'],
      B: ['siku','charango','guitar','bombo-andino'], cierre: ['quena','siku','charango','bombo-andino'] },
    patternAssignments: {
      intro: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      A: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      B: { siku: 'Siku statement', charango: "Charango accompaniment", guitar: 'Guitar accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      'A#2': { quena: "Carnavalito Quena" },
      'A#3': { quena: "Carnavalito Quena" },
      'B#2': { siku: "Carnavalito Siku" },
      cierre: { quena: "Carnavalito Quena", siku: "Carnavalito Siku" } },
    lockPatternAssignments: { 'A#2': ['quena'], 'A#3': ['quena'], 'B#2': ['siku'], cierre: ['quena','siku'] } },
  'andean::nueva-cancion': {
    note: 'Acoustic verse texture gives way to flute replies in the refrain and bridge; the closing section reunites the plucked parts.',
    solos: { bridge: 'siku' },
    sectionInstruments: {
      intro: ['guitar','charango'], verse: ['guitar','charango','bombo-andino'],
      chorus: ['quena','guitar','charango','bombo-andino'], bridge: ['siku','guitar','charango'],
      cierre: ['quena','charango','guitar','bombo-andino'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', charango: 'Charango accompaniment' },
      verse: { guitar: 'Guitar accompaniment', charango: 'Charango accompaniment', 'bombo-andino': "Bombo-andino pulse" },
      chorus: { quena: 'Quena statement', guitar: "Guitar accompaniment", charango: "Charango accompaniment", 'bombo-andino': 'Bombo-andino pulse' },
      bridge: { siku: 'Siku statement', guitar: 'Guitar accompaniment', charango: "Charango accompaniment" },
      'chorus#2': { quena: "Nueva Canción Quena" },
      'chorus#3': { quena: "Nueva Canción Quena" },
      cierre: { quena: "Nueva Canción Quena" } },
    lockPatternAssignments: { 'chorus#2': ['quena'], 'chorus#3': ['quena'], cierre: ['quena'] } },
  'andean::andean-fusion': {
    instruments: ['quena','siku','charango','guitar','bass','drums','bombo-andino','synth'],
    note: 'Electronic Andean-cumbia teaching adaptation: the guitar and charango support the flute handoff, while bass, bombo and a concise kit shuffle lift the central groove before the acoustic breakdown and synth tail.',
    solos: { B: 'siku' },
    sectionInstruments: {
      opening: ['quena','synth'], A: ['quena','charango','guitar','bass','drums','bombo-andino'],
      groove: ['quena','charango','guitar','bass','drums','bombo-andino','synth'],
      B: ['siku','charango','guitar','bass','drums','bombo-andino','synth'],
      breakdown: ['charango','bombo-andino','synth'], dissolve: ['synth'] },
    lockPatternAssignments: { groove: ['bass','drums'], B: ['bass','drums'], dissolve: ['synth'] },
    patternAssignments: {
      opening: { quena: 'Quena statement', synth: 'Synth chord jab' },
      A: { quena: 'Quena statement', charango: 'Charango accompaniment', guitar: 'Guitar accompaniment', bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': 'Bombo-andino pulse' },
      groove: { quena: "Andean Fusion Quena", charango: "Charango accompaniment", guitar: "Guitar accompaniment", bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': "Bombo-andino pulse", synth: 'Synth chord jab' },
      B: { siku: 'Siku statement', charango: "Charango accompaniment", guitar: "Guitar accompaniment", bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': "Bombo-andino pulse", synth: 'Synth chord jab' },
      breakdown: { charango: "Charango accompaniment", 'bombo-andino': "Bombo-andino pulse", synth: 'Synth chord jab' },
    dissolve: { synth: 'Synth coda tail' } } },
  'latin::tropical': {
    sectionInstruments: {
      intro: ['horn-section','piano','bass','congas','timbales','guiro'],
      verse: ['horn-section','piano','bass','congas','timbales','guiro'],
      prechorus: ['horn-section','piano','guitar','bass','congas','timbales','guiro','cumbia-drum'],
      chorus: ['horn-section','piano','guitar','bass','congas','timbales','guiro','cumbia-drum'],
      'chorus#2': ['horn-section','piano','guitar','bass','congas','timbales','guiro','cumbia-drum'],
      mambo: ['horn-section','piano','guitar','bass','congas','timbales','guiro','cumbia-drum'],
      'chorus#3': ['horn-section','piano','guitar','bass','congas','timbales','guiro','cumbia-drum'],
      coda: ['piano','bass','congas','timbales','guiro'],
    },
    patternAssignments: {
      prechorus: { guitar: 'Guitar accompaniment', 'cumbia-drum': "Cumbia-drum pulse" },
      chorus: { guitar: "Guitar accompaniment", 'cumbia-drum': "Cumbia-drum pulse" },
      'chorus#2': { guitar: "Guitar accompaniment", 'cumbia-drum': "Cumbia-drum pulse" },
      mambo: { guitar: "Guitar accompaniment", 'cumbia-drum': "Cumbia-drum pulse" },
      'chorus#3': { guitar: "Guitar accompaniment", 'cumbia-drum': "Cumbia-drum pulse" },
    },
  },
  'ambient::atmospheric': {
    sectionInstruments: {
      opening: ['synth','piano'], A: ['synth','piano','string-ensemble'], B: ['synth','piano','string-ensemble'],
      release: ['synth','piano','string-ensemble'], dissolve: ['synth','string-ensemble'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth phrase', 'synth:harmony': 'Synth comping', piano: 'Piano answer', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String ensemble texture' },
      A: { 'synth:lead': "Synth phrase", 'synth:harmony': 'Synth comping', piano: "Piano answer", 'synth:texture': 'Synth texture', 'string-ensemble:texture': "String ensemble texture" },
      B: { 'synth:lead': "Synth phrase", 'synth:harmony': "Synth comping", piano: "Piano answer", 'synth:texture': "Synth texture", 'string-ensemble:texture': "String ensemble texture" },
      release: { 'synth:lead': 'Synth phrase', 'synth:harmony': 'Synth comping', piano: "Piano answer", 'synth:texture': 'Synth texture', 'string-ensemble:texture': "String ensemble texture" },
      dissolve: { 'synth:lead': "Synth phrase", 'synth:harmony': 'Synth comping', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String ensemble texture' } } },
  'ambient::drone': {
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      evolution: { 'synth:lead': "Drone Synthesizer", 'synth:texture': 'Synth accompaniment' },
      texture: { 'synth:lead': "Drone Synthesizer", 'synth:texture': 'Synth accompaniment' },
      climax: { 'synth:lead': "Drone Synthesizer", 'synth:texture': 'Synth accompaniment' },
      release: { 'synth:texture': 'Synth accompaniment' },
      dissolve: { 'synth:texture': 'Synth accompaniment' } } },
  'ambient::dark-ambient': {
    lockPatternAssignments: { descent: ['sampler'], ritual: ['sampler'], climax: ['sampler'] },
    sectionInstruments: {
      opening: ['synth'], descent: ['synth','sampler'], ritual: ['synth','sampler'],
      climax: ['synth','sampler'], void: ['synth'], dissolve: ['synth'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      descent: { 'synth:lead': "Dark Ambient Synthesizer", 'synth:texture': 'Synth answer', sampler: 'Ride-bell toll' },
      ritual: { 'synth:lead': "Dark Ambient Synthesizer", 'synth:texture': 'Synth accompaniment', sampler: 'China-cymbal bloom' },
      climax: { 'synth:lead': "Dark Ambient Synthesizer", 'synth:texture': 'Synth accompaniment', sampler: 'Ride-bell toll' },
      void: { 'synth:texture': 'Synth accompaniment' },
      dissolve: { 'synth:texture': 'Synth answer' } } },
  'ambient::organic-ambient': {
    sectionInstruments: {
      opening: ['guitar','string-ensemble'], theme: ['guitar','flute','string-ensemble'],
      texture: ['guitar','flute','string-ensemble'], solo: ['guitar','string-ensemble'],
      dissolve: ['guitar','string-ensemble'] },
    solos: { solo: 'guitar' },
    patternAssignments: {
      opening: { guitar: "Organic Ambient Guitar", 'string-ensemble': 'String-ensemble accompaniment' },
      theme: { guitar: 'Guitar statement', flute: 'Flute accompaniment', 'string-ensemble': 'String-ensemble accompaniment' },
      texture: { guitar: "Organic Ambient Guitar", flute: 'Flute variation', 'string-ensemble': 'String Ensemble variation' },
      solo: { guitar: "Organic Ambient Guitar", 'string-ensemble': 'String-ensemble accompaniment' },
      dissolve: { 'string-ensemble': 'String-ensemble accompaniment' } } },
  'ambient::neo-classical-ambient': {
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' },
      A: { piano: "Neo-Classical Ambient Piano", synth: 'Held string-tail response', 'string-ensemble': "Held string-tail response" },
      B: { piano: "Neo-Classical Ambient Piano", synth: "Held string-tail response", 'string-ensemble': "Held string-tail response" },
      build: { piano: "Neo-Classical Ambient Piano", synth: "Held string-tail response", 'string-ensemble': "Held string-tail response" },
      release: { piano: "Neo-Classical Ambient Piano", synth: 'Held string-tail response', 'string-ensemble': "Held string-tail response" },
      dissolve: { synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' } } },
  'ambient::glitch-ambient': {
    sectionInstruments: {
      opening: ['piano','synth'], fragments: ['piano','synth','sampler'], loop: ['piano','synth','sampler'],
      rupture: ['synth','sampler'], dissolve: ['piano','synth'] },
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment' },
      fragments: { piano: "Glitch Ambient Piano", synth: "Synth texture", sampler: "Sampler pulse" },
      loop: { piano: "Glitch Ambient Piano", synth: 'Synth texture', sampler: "Sampler pulse" },
      rupture: { synth: "Synth texture", sampler: "Sampler pulse" },
      dissolve: { piano: "Glitch Ambient Piano", synth: 'Synth accompaniment' } } },
  'ambient::generative-ambient': {
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      evolution: { 'synth:lead': "Generative Ambient Synthesizer", 'synth:texture': 'Synth accompaniment' },
      'texture-shift': { 'synth:lead': "Generative Ambient Synthesizer", 'synth:texture': "Synth accompaniment" },
      dissolve: { 'synth:texture': 'Synth accompaniment' } } },
  'ambient::cinematic-ambient': {
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' },
      theme: { piano: "Cinematic Ambient Piano", synth: 'Synth swell', 'string-ensemble': 'String ensemble swell' },
      build: { piano: "Cinematic Ambient Piano", synth: "Synth swell", 'string-ensemble': "String ensemble swell" },
      climax: { piano: "Cinematic Ambient Piano", synth: 'Synth swell', 'string-ensemble': "String ensemble swell" },
      release: { piano: "Cinematic Ambient Piano", synth: "Synth swell", 'string-ensemble': 'String ensemble swell' },
      dissolve: { synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' } } },
  'ambient::downtempo-ambient': {
    sectionInstruments: {
      intro: ['piano','rhodes','synth'], theme: ['piano','rhodes','synth','drums'],
      groove: ['piano','rhodes','synth','drums'], B: ['piano','rhodes','synth','drums'],
      breakdown: ['piano','rhodes','synth'], outro: ['piano','rhodes','synth'] },
    patternAssignments: {
      intro: { piano: 'Piano statement', rhodes: 'Rhodes accompaniment', 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' },
      theme: { piano: "Downtempo Ambient Piano", rhodes: "Rhodes accompaniment", 'synth:bass': 'Low anchor', drums: "Downtempo half-time space", 'synth:texture': "Offbeat pad response" },
      groove: { piano: "Downtempo Ambient Piano", rhodes: "Rhodes accompaniment", 'synth:bass': 'Low anchor', drums: "Downtempo half-time space", 'synth:texture': "Offbeat pad response" },
      B: { piano: "Downtempo Ambient Piano", rhodes: "Rhodes accompaniment", 'synth:bass': 'Low anchor', drums: "Downtempo half-time space", 'synth:texture': 'Offbeat pad response' },
      breakdown: { piano: "Downtempo Ambient Piano", rhodes: "Rhodes accompaniment", 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' },
      outro: { 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' } } },
  'amapiano::classic': {
    sectionInstruments: {
      intro: ['piano','shaker'], groove: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','rhodes','log-drum','drums','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      breakdown: ['piano','rhodes','shaker'], build: ['synth','log-drum','drums','shaker'], outro: ['piano','shaker'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', shaker: 'Shaker pulse' },
      groove: { synth: 'Synth statement', piano: 'Piano accompaniment', rhodes: "Classic Rhodes reply", 'log-drum': 'Low anchor', drums: "Kit", shaker: 'Shaker pulse' },
      verse: { synth: "Classic Synthesizer", rhodes: "Classic Rhodes reply", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      drop: { synth: "Classic Synthesizer", piano: "Classic piano stabs", rhodes: "Classic Rhodes reply", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      breakdown: { piano: "Classic piano stabs", rhodes: "Classic Rhodes reply", shaker: "Shaker pulse" },
      build: { synth: "Classic Synthesizer", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      outro: { } } },
  'amapiano::private-school': {
    sectionInstruments: {
      intro: ['rhodes','shaker'], theme: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['piano','rhodes','log-drum','drums','shaker'], groove: ['piano','rhodes','log-drum','drums','shaker'],
      solo: ['rhodes','log-drum','shaker'], breakdown: ['piano','rhodes','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      outro: ['rhodes','log-drum','shaker'] },
    solos: { solo: 'rhodes' },
    patternAssignments: {
      intro: { rhodes: 'Rhodes accompaniment', shaker: "Shaker pulse" },
      theme: { synth: "Private School Synthesizer", piano: 'Piano accompaniment', rhodes: "Rhodes solo line", 'log-drum': "Low anchor", drums: "Kit", shaker: 'Shaker pulse' },
      verse: { piano: "Private piano answers", rhodes: "Rhodes solo line", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      groove: { piano: 'Piano accompaniment', rhodes: "Rhodes solo line", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      solo: { rhodes: 'Rhodes solo line', 'log-drum': 'Low anchor', shaker: "Shaker pulse" },
      breakdown: { piano: "Private piano answers", rhodes: "Rhodes solo line", shaker: "Shaker pulse" },
      drop: { synth: "Private School Synthesizer", piano: "Private piano answers", rhodes: "Rhodes solo line", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      outro: { } } },
  'amapiano::vocal': {
    sectionInstruments: {
      intro: ['piano','synth','shaker'], groove: ['piano','synth','log-drum','drums','shaker'], chorus: ['voice','piano','synth','log-drum','drums','shaker'],
      verse: ['voice','synth','log-drum','drums','shaker'], drop: ['piano','synth','log-drum','drums','shaker'],
      breakdown: ['piano','synth','shaker'], outro: ['piano','synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', synth: 'Synth accompaniment', shaker: "Shaker pulse" },
      groove: { piano: 'Piano accompaniment', synth: "Synth accompaniment", 'log-drum': 'Low anchor', drums: "Kit", shaker: 'Shaker pulse' },
      chorus: { voice: "Vocal Vocal", piano: "Piano accompaniment", synth: "Synth accompaniment", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      verse: { voice: "Vocal Vocal", synth: "Synth accompaniment", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      drop: { piano: "Piano accompaniment", synth: "Synth accompaniment", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      breakdown: { piano: "Piano accompaniment", synth: "Synth accompaniment", shaker: "Shaker pulse" },
      outro: { } } },
  'amapiano::log-drum-heavy': {
    sectionInstruments: {
      intro: ['synth','shaker'], hook: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','piano','log-drum','drums','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      breakdown: ['synth','rhodes','log-drum','shaker'], outro: ['synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', shaker: 'Shaker pulse' },
      hook: { synth: "Log-Drum Heavy Synthesizer", piano: 'Piano accompaniment', rhodes: 'Log-drum Rhodes bed', 'log-drum': 'Low anchor', drums: "Kit", shaker: 'Shaker pulse' },
      verse: { synth: "Log-Drum Heavy Synthesizer", piano: "Heavy piano stabs", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      drop: { synth: "Log-Drum Heavy Synthesizer", piano: "Heavy piano stabs", rhodes: "Log-drum Rhodes bed", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      breakdown: { synth: "Log-Drum Heavy Synthesizer", rhodes: "Log-drum Rhodes bed", 'log-drum': "Low anchor", shaker: "Shaker pulse" },
      outro: { } } },
  'amapiano::bacardi': {
    sectionInstruments: {
      intro: ['synth','drums','shaker'], groove: ['synth','piano','rhodes','log-drum','drums','shaker'],
      drop: ['synth','piano','rhodes','log-drum','drums','shaker'], break: ['synth','piano','rhodes','shaker'], outro: ['synth','shaker'] },
    patternAssignments: {
      intro: { synth: "Bacardi Synthesizer", drums: "Kit", shaker: 'Shaker pulse' },
      groove: { synth: "Bacardi Synthesizer", piano: "Bacardi piano bounce", rhodes: "Bacardi Rhodes reply", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      drop: { synth: "Bacardi Synthesizer", piano: "Bacardi piano bounce", rhodes: "Bacardi Rhodes reply", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      break: { synth: "Bacardi Synthesizer", piano: "Bacardi piano bounce", rhodes: "Bacardi Rhodes reply", shaker: "Shaker pulse" },
      outro: { } } },
  'amapiano::gqom-crossover': {
    sectionInstruments: {
      intro: ['synth','sampler'], chant: ['synth','drums','sampler'], drop: ['synth','drums','sampler'],
      verse: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:bass': 'Low anchor', sampler: 'Sampler pulse' },
      chant: { 'synth:lead': "Gqom Crossover Synthesizer", 'synth:bass': 'Low anchor', drums: "Kit", sampler: "Sampler pulse" },
      drop: { 'synth:lead': "Gqom Crossover Synthesizer", 'synth:bass': 'Low anchor', drums: "Kit", sampler: "Sampler pulse" },
      verse: { 'synth:lead': "Gqom Crossover Synthesizer", 'synth:bass': 'Low anchor', drums: "Kit", sampler: "Sampler pulse" },
      breakdown: { 'synth:lead': "Gqom Crossover Synthesizer", 'synth:bass': 'Low anchor', sampler: 'Sampler pulse' },
      outro: { } } },
  'amapiano::kwaito-crossover': {
    sectionInstruments: {
      intro: ['synth','log-drum','shaker'], chorus: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','log-drum','drums','shaker'], break: ['synth','log-drum','shaker'], outro: ['synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', 'log-drum': 'Low anchor', shaker: 'Shaker pulse' },
      chorus: { synth: "Kwaito Crossover Synthesizer", piano: "Kwaito piano offbeats", rhodes: "Kwaito Rhodes bed", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      verse: { synth: "Kwaito Crossover Synthesizer", 'log-drum': "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      break: { synth: "Kwaito Crossover Synthesizer", 'log-drum': "Low anchor", shaker: "Shaker pulse" },
      outro: { } } },
  'afrobeats::contemporary-afrobeats': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','bass','drums','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['guitar','bass','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Low anchor', drums: "Afrobeats rim pocket", shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Afrobeats rim pocket", shaker: "Shaker pulse" },
      chorus: { voice: "Contemporary Afrobeats Vocal", guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afrobeats rim pocket", shaker: 'Shaker pulse' },
      bridge: { guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afrobeats rim pocket", shaker: "Shaker pulse" },
      outro: { } } },
  'afrobeats::afropop': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['voice','guitar','bass','drums','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: "Low anchor", drums: "Afropop clap pocket", shaker: 'Shaker pulse' },
      chorus: { voice: "Afropop Vocal", guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afropop clap pocket", shaker: "Shaker pulse" },
      verse: { voice: 'Voice statement', guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Afropop clap pocket", shaker: 'Shaker pulse' },
      bridge: { guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afropop clap pocket", shaker: "Shaker pulse" },
      outro: { } } },
  'afrobeats::afrofusion': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','bass','drums','shaker'],
      prechorus: ['voice','rhodes','bass','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['guitar','bass','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: "Low anchor", drums: "Afrofusion broken pocket", shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: "Guitar accompaniment", bass: "Low anchor", drums: "Afrofusion broken pocket", shaker: "Shaker pulse" },
      prechorus: { voice: "Afrofusion Vocal", rhodes: "Rhodes accompaniment", bass: "Low anchor", shaker: "Shaker pulse" },
      chorus: { voice: "Afrofusion Vocal", guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afrofusion broken pocket", shaker: "Shaker pulse" },
      bridge: { guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Afrofusion broken pocket", shaker: "Shaker pulse" },
      outro: { } } },
  'afrobeats::alte': {
    sectionInstruments: {
      intro: ['rhodes','synth','drums','sampler'],
      chorus: ['voice','rhodes','synth','drums','sampler'],
      verse: ['voice','rhodes','synth','drums','sampler'],
      breakdown: ['rhodes','synth','sampler'],
      outro: ['voice','rhodes','synth','sampler'] },
    patternAssignments: {
      intro: { rhodes: 'Rhodes accompaniment', synth: 'Low anchor', drums: "Alté half-time space", sampler: 'Sampler pulse' },
      chorus: { voice: "Alté Vocal", rhodes: "Rhodes accompaniment", synth: "Low anchor", drums: "Alté half-time space", sampler: "Sampler pulse" },
      verse: { voice: 'Voice statement', rhodes: "Rhodes accompaniment", synth: "Low anchor", drums: "Alté half-time space", sampler: "Sampler pulse" },
      breakdown: { rhodes: "Rhodes accompaniment", synth: "Low anchor", sampler: "Sampler pulse" },
      outro: { } } },
  'afrobeats::r-b-afrobeats': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','rhodes','bass','drums','shaker'],
      prechorus: ['voice','rhodes','bass','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['guitar','rhodes','bass','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Low anchor', drums: "Kit", shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      prechorus: { voice: "R&B Afrobeats Vocal", rhodes: "Rhodes accompaniment", bass: "Low anchor", shaker: "Shaker pulse" },
      chorus: { voice: "R&B Afrobeats Vocal", guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      bridge: { guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: "Low anchor", drums: "Kit", shaker: "Shaker pulse" },
      outro: { } } },
  'timba::classic-timba': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse' },
      verse: { voice: "Classic Timba Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Timba kit interlock" },
      coro: { voice: "Classic Timba Vocal", trumpet: "Classic Timba Trumpet", trombone: "Classic Timba Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Timba kit interlock", cowbell: "Cowbell pulse" },
      bomba: { bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Timba kit interlock", cowbell: "Cowbell pulse" },
      mambo: { trumpet: "Classic Timba Trumpet", trombone: "Classic Timba Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Timba kit interlock", cowbell: "Cowbell pulse" },
      bloque: { trumpet: "Classic Timba Trumpet", trombone: "Classic Timba Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Timba kit interlock", cowbell: "Cowbell pulse" },
      'coro-final': { voice: "Classic Timba Vocal", trumpet: "Classic Timba Trumpet", trombone: "Classic Timba Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Timba kit interlock", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'timba::charanga-habanera': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse' },
      verse: { voice: "Charanga Habanera Vocal", piano: 'Piano accompaniment', bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Charanga gear pocket" },
      coro: { voice: "Charanga Habanera Vocal", trumpet: "Charanga Habanera Trumpet", trombone: "Charanga Habanera Trombone", piano: "Piano accompaniment", synth: 'Synth countertumbao', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Charanga gear pocket", cowbell: "Cowbell pulse" },
      'verse-return': { voice: "Charanga Habanera Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Charanga gear pocket" },
      gear: { bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Charanga gear pocket", cowbell: "Cowbell pulse" },
      bloque: { trumpet: "Charanga Habanera Trumpet", trombone: "Charanga Habanera Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Charanga gear pocket", cowbell: "Cowbell pulse" },
      mambo: { trumpet: "Charanga Habanera Trumpet", trombone: "Charanga Habanera Trombone", piano: "Piano accompaniment", synth: 'Synth countertumbao', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Charanga gear pocket", cowbell: "Cowbell pulse" },
      'coro-final': { voice: "Charanga Habanera Vocal", trumpet: "Charanga Habanera Trumpet", trombone: "Charanga Habanera Trombone", piano: "Piano accompaniment", synth: 'Synth countertumbao', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Charanga gear pocket", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'timba::maykel-blanco': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: "Kit" },
      verse: { voice: "Maykel Blanco Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Kit" },
      coro: { voice: "Maykel Blanco Vocal", trumpet: "Maykel Blanco Trumpet", trombone: "Maykel Blanco Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Kit", cowbell: "Cowbell pulse" },
      bomba: { bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Kit", cowbell: "Cowbell pulse" },
      bloque: { trumpet: "Maykel Blanco Trumpet", trombone: "Maykel Blanco Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Kit", cowbell: "Cowbell pulse" },
      mambo: { trumpet: "Maykel Blanco Trumpet", trombone: "Maykel Blanco Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Kit", cowbell: "Cowbell pulse" },
      'coro-final': { voice: "Maykel Blanco Vocal", trumpet: "Maykel Blanco Trumpet", trombone: "Maykel Blanco Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Kit", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'timba::irakere-jazz-funk-precursor': {
    solos: { solo: 'trumpet' },
    sectionInstruments: {
      intro: ['piano','bass','congas','timbales','drums'],
      riff: ['trumpet','trombone','piano','bass','congas','timbales','drums'],
      head: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums'],
      solo: ['trumpet','trombone','piano','bass','congas','timbales','drums'],
      mambo: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: "Jazz-funk bell pocket" },
      riff: { trumpet: "Irakere Precursor Trumpet", trombone: "Irakere Precursor Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Jazz-funk bell pocket" },
      head: { voice: "Irakere Precursor Vocal", trumpet: 'Trumpet statement', trombone: 'Trombone statement', piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Jazz-funk bell pocket" },
      solo: { trumpet: "Irakere Precursor Trumpet", trombone: "Irakere Precursor Trombone", piano: 'Piano accompaniment', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Jazz-funk bell pocket" },
      mambo: { trumpet: "Irakere Precursor Trumpet", trombone: "Irakere Precursor Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Jazz-funk bell pocket", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'timba::ng-la-banda-early-timba': {
    solos: { solo: 'trumpet', bomba: 'bass' },
    sectionInstruments: {
      intro: ['piano','bass','congas','timbales','drums'],
      verse: ['voice','piano','bass','congas','timbales','drums'],
      chorus: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums'],
      coro: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      bloque: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      bomba: ['bass','congas','timbales','drums'],
      silencio: [],
      mambo: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      'coro-final': ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: "Bloque kit pocket" },
      verse: { voice: "NG Timba Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Bloque kit pocket" },
      chorus: { voice: "NG Timba Vocal", trumpet: "Bb Trumpet accent", trombone: "Trombone accent", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket" },
      coro: { voice: "NG Timba Vocal", trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket", cowbell: "Cowbell pulse" },
      bloque: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket", cowbell: "Cowbell pulse" },
      bomba: { bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket" },
      mambo: { trumpet: "Bb Trumpet accent", trombone: "Trombone accent", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket", cowbell: "Cowbell pulse" },
      'coro-final': { voice: "NG Timba Vocal", trumpet: "Bb Trumpet accent", trombone: "Trombone accent", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bloque kit pocket", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'timba::bamboleo': {
    solos: { solo: 'trumpet' },
    sectionInstruments: {
      intro: ['piano','bass','congas','timbales','drums'],
      verse: ['voice','piano','bass','congas','timbales','drums'],
      prechorus: ['voice','piano','bass','congas','timbales','drums'],
      chorus: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums'],
      coro: ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      solo: ['trumpet','trombone','piano','bass','congas','timbales','drums'],
      mambo: ['trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      'coro-final': ['voice','trumpet','trombone','piano','bass','congas','timbales','drums','cowbell'],
      cierre: ['trumpet','trombone','piano','bass','congas','timbales','drums'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: "Bamboleo kick dialogue" },
      verse: { voice: "Bamboleo Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Bamboleo kick dialogue" },
      prechorus: { voice: "Bamboleo Vocal", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bamboleo kick dialogue" },
      chorus: { voice: "Bamboleo Vocal", trumpet: "Bamboleo Trumpet", trombone: "Bamboleo Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bamboleo kick dialogue" },
      coro: { voice: "Bamboleo Vocal", trumpet: "Bamboleo Trumpet", trombone: "Bamboleo Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: 'Timbales pulse', drums: "Bamboleo kick dialogue", cowbell: "Cowbell pulse" },
      solo: { trumpet: "Bamboleo Trumpet", trombone: "Bamboleo Trombone", piano: 'Piano accompaniment', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bamboleo kick dialogue" },
      mambo: { trumpet: "Bamboleo Trumpet", trombone: "Bamboleo Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bamboleo kick dialogue", cowbell: "Cowbell pulse" },
      'coro-final': { voice: "Bamboleo Vocal", trumpet: "Bamboleo Trumpet", trombone: "Bamboleo Trombone", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", drums: "Bamboleo kick dialogue", cowbell: "Cowbell pulse" },
      cierre: { } } },
  'tango::golden-age': {
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      A: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      B: { bandoneon: "Bandoneon phrase", violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: "Bandoneon phrase", violin: "Violin answer", piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' } } },
  'tango::canyengue': {
    solos: { arrastre: 'upright-bass' },
    sectionInstruments: { arrastre: ['upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Canyengue phrase', violin: 'Clipped answer', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      estribillo: { bandoneon: 'Canyengue phrase', violin: 'Clipped answer', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      copla: { bandoneon: 'Clipped phrase', violin: "Clipped answer", piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      trio: { bandoneon: 'Canyengue phrase', violin: "Clipped answer", piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      arrastre: { 'upright-bass': 'Bass drag' },
      cierre: { bandoneon: 'Canyengue phrase', violin: "Clipped answer", piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' } },
    lockPatternAssignments: { intro: ['violin'], estribillo: ['violin'], copla: ['violin'], trio: ['violin'], cierre: ['violin'] } },
  'tango::guardia-nueva-de-caro': {
    solos: { violin: 'violin' },
    patternAssignments: {
      tema: { bandoneon: 'Bandoneon answer', violin: 'Violin counterline', piano: 'De Caro sync', 'upright-bass': 'Root–fifth bass' },
      violin: { violin: "Violin counterline", bandoneon: "Bandoneon answer", piano: "De Caro sync", 'upright-bass': 'Root–fifth bass' },
      dialogo: { bandoneon: 'Bandoneon answer', violin: 'Violin counterline', piano: "De Caro sync", 'upright-bass': 'Root–fifth bass' },
      trio: { bandoneon: "Bandoneon answer", violin: "Violin counterline", piano: 'De Caro sync', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: "Bandoneon answer", violin: "Violin counterline", piano: "De Caro sync", 'upright-bass': "Root–fifth bass" } } },
  'tango::d-arienzo': {
    lockPatternAssignments: { parada: ['bandoneon','violin','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      tema: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      parada: { bandoneon: 'Parada hit', violin: 'Parada hit', piano: 'Parada hit', 'upright-bass': 'Parada hit' },
      contraste: { violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: "Bandoneon phrase", violin: "Violin answer", piano: 'Hard marcato', 'upright-bass': "Root–fifth bass" },
      'syncopa-burst': { bandoneon: 'Síncopa burst', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' } } },
  'tango::pugliese': {
    sectionInstruments: {
      yumba: ['bandoneon','piano','upright-bass'],
      tema: ['bandoneon','violin','piano','upright-bass'],
      silencio: [],
      contraste: ['violin','piano','upright-bass'],
      crescendo: ['bandoneon','violin','piano','upright-bass'],
      'tema-reprise': ['bandoneon','violin','piano','upright-bass'],
      variacion: ['bandoneon','violin','piano','upright-bass'],
      coda: ['bandoneon','violin','piano','upright-bass'] },
    solos: { variacion: 'bandoneon' },
    patternAssignments: {
      yumba: { bandoneon: 'Bandoneon phrase', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      tema: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      contraste: { violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      crescendo: { bandoneon: "Bandoneon phrase", violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      'tema-reprise': { bandoneon: "Bandoneon phrase", violin: "Violin answer", piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      variacion: { bandoneon: "Bandoneon phrase", violin: "Violin answer", piano: "Chan-chan close", 'upright-bass': "Chan-chan close" },
      coda: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' } } },
  'tango::troilo': {
    patternAssignments: {
      tema: { bandoneon: 'Singing bandoneon', violin: 'Violin answer', piano: 'Troilo piano pocket', 'upright-bass': 'Root–fifth bass' },
      bandoneon: { bandoneon: "Bandoneon breath", violin: 'Violin answer', piano: 'Troilo piano pocket', 'upright-bass': 'Root–fifth bass' },
      contracanto: { violin: 'Violin answer', piano: "Troilo piano pocket", 'upright-bass': "Root–fifth bass" },
      variacion: { bandoneon: "Bandoneon breath", violin: "Violin answer", piano: "Troilo piano pocket", 'upright-bass': "Root–fifth bass" },
      coda: { bandoneon: 'Bandoneon breath', violin: 'Violin answer', piano: "Troilo piano pocket", 'upright-bass': 'Root–fifth bass' } } },
  'tango::salgan': {
    patternAssignments: {
      piano: { piano: 'Umpa-umpa piano', bandoneon: 'Bandoneon phrase', 'upright-bass': 'Root–fifth bass' },
      tema: { piano: 'Umpa-umpa piano', bandoneon: "Bandoneon phrase", violin: 'Violin answer', 'upright-bass': 'Root–fifth bass' },
      contrapunto: { piano: "Umpa-umpa piano", bandoneon: "Bandoneon phrase", violin: 'Violin answer', 'upright-bass': "Root–fifth bass" },
      'piano-solo': { piano: "Umpa-umpa piano", bandoneon: "Bandoneon phrase", violin: 'Violin answer', 'upright-bass': 'Root–fifth bass' },
      ensemble: { piano: 'Umpa-umpa piano', bandoneon: "Bandoneon phrase", violin: "Violin answer", 'upright-bass': "Root–fifth bass" } } },
  'tango::tango-cancion': {
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      verse: { voice: 'Vocal phrase', bandoneon: "Bandoneon phrase", guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      interlude: { bandoneon: "Bandoneon phrase", guitar: "Tango guitar replies", piano: "Tango piano anchors", 'upright-bass': "Root–fifth bass" },
      refrain: { voice: "Vocal phrase", bandoneon: "Bandoneon phrase", guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      bandoneon: { bandoneon: "Bandoneon phrase", guitar: "Tango guitar replies", piano: "Tango piano anchors", 'upright-bass': "Root–fifth bass" },
      cierre: { voice: "Vocal phrase", bandoneon: 'Bandoneon phrase', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' } } },
  'tango::milonga': {
    sectionInstruments: { traspie: ['bandoneon','guitar','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Milonga phrase', violin: 'Milonga answer', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      estribillo: { bandoneon: 'Milonga phrase', violin: 'Milonga answer', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      copla: { bandoneon: 'Milonga phrase', violin: "Milonga answer", guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      interlude: { guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      traspie: { bandoneon: 'Milonga traspié', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      cierre: { bandoneon: 'Milonga phrase', violin: "Milonga answer", guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' } },
    lockPatternAssignments: { intro: ['violin'], estribillo: ['violin'], copla: ['violin'], cierre: ['violin'] } },
  'tango::vals': {
    patternAssignments: {
      intro: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' },
      tema: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' },
      trio: { bandoneon: "Vals melody", violin: "Violin sweep", piano: "Waltz chords", 'upright-bass': 'Vals bass walk' },
      coda: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' } } },
  'tango::piazzolla-nuevo-tango': {
    patternAssignments: {
      ostinato: { bandoneon: '3+3+2 hook', violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' },
      tema: { bandoneon: '3+3+2 hook', violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' },
      contraste: { bandoneon: "3+3+2 hook", violin: "Sustained counterline", piano: "3+3+2 chords", 'upright-bass': "Root–fifth bass" },
      bandoneon: { bandoneon: "3+3+2 hook", violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' } } },
  'tango::electrotango-gotan': {
    patternAssignments: {
      intro: { synth: 'Root–fifth bass', drums: "Electrotango electronic pulse" },
      loop: { bandoneon: 'Bandoneon hook', piano: 'Gotan offbeat chords', synth: 'Root–fifth bass', drums: "Electrotango electronic pulse", sampler: 'Percussion pulse' },
      hook: { bandoneon: 'Bandoneon hook', piano: 'Gotan offbeat chords', synth: 'Gotan synth answer', drums: "Electrotango electronic pulse", sampler: "Percussion pulse" },
      breakdown: { synth: "Gotan synth answer", drums: "Electrotango electronic pulse" },
      bandoneon: { bandoneon: "Bandoneon hook", piano: 'Gotan offbeat chords', synth: 'Gotan synth answer', drums: "Electrotango electronic pulse", sampler: "Percussion pulse" } } },
  'tango::electro-rock-bajofondo': {
    patternAssignments: {
      riff: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Root–fifth bass', drums: "Tango rock syncopation", sampler: 'Percussion pulse' },
      verse: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Root–fifth bass', drums: "Tango rock syncopation", sampler: 'Percussion pulse' },
      chorus: { bandoneon: "Bandoneon hook", piano: "Bajofondo piano backbeat", synth: "Bajofondo synth answer", drums: "Tango rock syncopation", sampler: "Percussion pulse" },
      breakdown: { bandoneon: "Bandoneon hook", piano: "Bajofondo piano backbeat", synth: "Bajofondo synth answer", drums: "Tango rock syncopation", sampler: "Percussion pulse" },
      tag: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Bajofondo synth answer', drums: "Tango rock syncopation", sampler: 'Percussion pulse' } } },
  'tango::modern-orquesta': {
    sectionInstruments: {
      corte: [],
      'tutti-hit': ['bandoneon','violin','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Orquesta block chords', 'upright-bass': 'Root–fifth bass' },
      A: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Orquesta block chords', 'upright-bass': 'Root–fifth bass' },
      B: { bandoneon: "Bandoneon phrase", violin: 'Violin answer', piano: "Orquesta block chords", 'upright-bass': "Root–fifth bass" },
      'tutti-hit': { bandoneon: 'Tutti hit', violin: 'Tutti hit', piano: 'Tutti hit', 'upright-bass': 'Tutti hit' },
      variacion: { bandoneon: "Bandoneon phrase", violin: "Violin answer", piano: "Orquesta block chords", 'upright-bass': "Root–fifth bass" },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: "Orquesta block chords", 'upright-bass': 'Root–fifth bass' } } },
  'gnawa::traditional': {
    sectionInstruments: {
      opening: ['guembri'],
      call: ['voice','guembri','qraqeb'],
      response: ['guembri','qraqeb'],
      cycle: ['voice','guembri','qraqeb'],
      acceleration: ['voice','guembri','qraqeb'],
      cadence: ['guembri','qraqeb'] },
    patternAssignments: {
      opening: { guembri: 'Low anchor' },
      call: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      response: { guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      cycle: { voice: "Traditional Vocal", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      acceleration: { voice: "Traditional Vocal", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      cadence: { guembri: 'Guembri close', qraqeb: 'Qraqeb close' } } },
  'gnawa::lila-trance': {
    sectionInstruments: {
      invocation: ['guembri','qraqeb'],
      call: ['voice','guembri','qraqeb'],
      'cycle-a': ['guembri','qraqeb'],
      'response-a': ['voice','guembri','qraqeb'],
      'cycle-b': ['guembri','qraqeb'],
      acceleration: ['voice','guembri','qraqeb'],
      solo: ['guembri','qraqeb'],
      'final-response': ['voice','guembri','qraqeb'],
      cadence: ['guembri','qraqeb'] },
    patternAssignments: {
      invocation: { guembri: 'Low anchor', qraqeb: "Qraqeb pulse" },
      call: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      'cycle-a': { guembri: "Low anchor", qraqeb: 'qraqeb pulse' },
      'response-a': { voice: "Lila Trance Vocal", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      'cycle-b': { guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      acceleration: { voice: "Lila Trance Vocal", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      solo: { guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      'final-response': { voice: "Lila Trance Vocal", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      cadence: { guembri: 'guembri close', qraqeb: 'qraqeb close' } } },
  'afrobeat::palm-wine': {
    patternAssignments: { outro: { guitar: 'Guitar close' } } },
  'gnawa::gnawa-jazz': {
    sectionInstruments: {
      opening: ['guembri','qraqeb'],
      theme: ['voice','guembri','qraqeb'],
      groove: ['voice','tenor-sax','guembri','qraqeb'],
      call: ['voice','guembri','qraqeb'],
      response: ['tenor-sax','guembri','qraqeb'],
      solo: ['tenor-sax','guembri','qraqeb'],
      breakdown: ['guembri','qraqeb'],
      'sax-climax': ['tenor-sax','guembri','qraqeb'],
      outro: ['guembri','qraqeb'] },
    solos: { solo: 'tenor-sax', 'sax-climax': 'tenor-sax' },
    patternAssignments: {
      opening: { guembri: 'Low anchor', qraqeb: "Qraqeb pulse" },
      theme: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      groove: { voice: "Gnawa Jazz Vocal", 'tenor-sax': "Gnawa Tenor Sax", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      call: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      response: { 'tenor-sax': "Gnawa Tenor Sax", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      solo: { 'tenor-sax': "Gnawa Tenor Sax", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      breakdown: { guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      'sax-climax': { 'tenor-sax': "Gnawa Tenor Sax", guembri: "Low anchor", qraqeb: "Qraqeb pulse" },
      outro: { } } },
  'gnawa::gnawa-rock': {
    sectionInstruments: {
      intro: ['guembri'],
      verse: ['voice','guembri','qraqeb'],
      chorus: ['voice','guitar','guembri','qraqeb','drums'],
      solo: ['guitar','guembri','qraqeb','drums'],
      breakdown: ['guembri'],
      build: ['guembri','qraqeb','drums'],
      outro: ['guitar','guembri','qraqeb','drums'] },
    solos: { solo: 'guitar' },
    patternAssignments: {
      intro: { guembri: "Low anchor" },
      verse: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      chorus: { voice: "Gnawa Rock Vocal", guitar: 'Guitar statement', guembri: "Low anchor", qraqeb: "Qraqeb pulse", drums: "Gnawa rock cross-accent" },
      solo: { guitar: "Gnawa Rock Guitar", guembri: "Low anchor", qraqeb: "Qraqeb pulse", drums: "Gnawa rock cross-accent" },
      breakdown: { guembri: "Low anchor" },
      build: { guembri: "Low anchor", qraqeb: "Qraqeb pulse", drums: "Gnawa rock cross-accent" },
      outro: { } } },
  'jazz::hard-bop': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      'trumpet-solo': { trumpet: "Hard Bop Trumpet", piano: "Piano accompaniment", 'upright-bass': "Low anchor", drums: "Kit" },
      'tenor-sax-solo': { 'tenor-sax': "Hard Tenor Sax", piano: "Piano accompaniment", 'upright-bass': "Low anchor", drums: "Kit" },
      'trumpet-trading': { trumpet: "Hard Bop Trumpet", piano: "Piano accompaniment", 'upright-bass': "Low anchor", drums: "Kit" },
      'tenor-sax-trading': { 'tenor-sax': "Hard Tenor Sax", piano: "Piano accompaniment", 'upright-bass': "Low anchor", drums: "Kit" },
      tag: { } } },
  'funk::funk': {
    note: 'One-chord pocket, call-response and an extended band vamp. The first A states the scratch; the next A pares it back to a two-hit variation, and the last A answers at the phrase edge while bass and drums keep the pocket.',
    sectionInstruments: {
      intro: ['guitar','bass','drums'],
      breakdown: ['bass','drums'],
      solo: ['trumpet','guitar','bass','drums'],
      outro: ['guitar','bass','drums'] },
    patternAssignments: {
      intro: { guitar: 'Muted guitar scratch', bass: 'Bass pocket', drums: "Sixteenth funk pocket" },
      A: { voice: 'Voice statement', trumpet: 'Trumpet statement', guitar: 'Muted guitar scratch', clavinet: 'Clavinet accompaniment', bass: 'Bass pocket', drums: "Sixteenth funk pocket" },
      'A#2': { voice: "Funk Vocal", trumpet: "Funk Trumpet", guitar: "Guitar accompaniment" },
      'A#3': { voice: "Funk Vocal", trumpet: "Funk Trumpet", guitar: "Muted guitar scratch" },
      breakdown: { bass: 'Low anchor', drums: "Sixteenth funk pocket" },
      solo: { trumpet: 'Trumpet statement', guitar: 'Muted guitar scratch', bass: 'Bass pocket', drums: "Sixteenth funk pocket" },
      outro: { guitar: 'Muted guitar scratch', bass: 'Bass pocket' } },
    lockPatternAssignments: { A: ['bass'], solo: ['guitar','bass'] } },
  'funk::james-brown-the-one': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'Low anchor', drums: "Downbeat snare chatter" },
      groove: { voice: 'Voice statement', trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      verse: { voice: "James One Vocal", trumpet: "James One Trumpet", guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      chorus: { voice: "James One Vocal", trumpet: 'Horn response', guitar: "Guitar accompaniment", clavinet: "Clavinet accompaniment", bass: 'The One bass', drums: 'One and backbeat' },
      'break-hit': { trumpet: 'Band hit', guitar: 'Band hit', clavinet: 'Band hit', bass: 'Band hit', drums: 'Break hit' },
      solo: { trumpet: "James One Trumpet", guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      outro: { } },
    lockPatternAssignments: { 'break-hit': ['trumpet','guitar','clavinet','bass','drums'] } },
  'funk::p-funk': {
    solos: { breakdown: 'bass' },
    sectionInstruments: {
      intro: ['synth','bass','drums'],
      breakdown: ['synth','bass','drums'],
      outro: ['synth','bass','drums'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', bass: 'Low anchor', drums: "P-Funk open pocket" },
      chant: { voice: "P-Funk Vocal", synth: 'Synth call', guitar: "Guitar accompaniment", bass: 'Bass bubble', drums: "P-Funk open pocket" },
      verse: { voice: "P-Funk Vocal", synth: 'Synth call', guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: 'Bass bubble', drums: "P-Funk open pocket" },
      chorus: { voice: "P-Funk Vocal", synth: "P-Funk Synthesizer", guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: 'Bass bubble', drums: "P-Funk open pocket" },
      breakdown: { synth: "P-Funk Synthesizer", bass: 'Bass bubble', drums: "P-Funk open pocket" },
      vamp: { voice: "P-Funk Vocal", synth: 'Synth call', guitar: "Guitar accompaniment", rhodes: "Rhodes accompaniment", bass: 'Bass bubble', drums: "P-Funk open pocket" },
      outro: { synth: "P-Funk Synthesizer", bass: "Low anchor", drums: "P-Funk open pocket" } },
    lockPatternAssignments: { chant: ['bass','synth'], breakdown: ['bass'], vamp: ['bass','synth'] } },
  'funk::jazz-funk': {
    sectionInstruments: {
      intro: ['rhodes','bass','drums'],
      B: ['voice','trumpet','tenor-sax','rhodes','guitar','bass','drums'],
      solo: ['synth','rhodes','guitar','bass','drums'],
      outro: ['rhodes','bass','drums'] },
    patternAssignments: {
      intro: { rhodes: 'Rhodes syncopation', bass: "Low anchor", drums: "Jazz-funk ride pocket" },
      A: { voice: 'Voice statement', trumpet: 'Trumpet statement', 'tenor-sax': "Horn exchange", rhodes: 'Rhodes syncopation', guitar: 'Guitar accompaniment', bass: 'Bass ostinato', drums: "Jazz-funk ride pocket" },
      B: { trumpet: "Jazz-Funk Trumpet", 'tenor-sax': 'Horn exchange', rhodes: 'Rhodes syncopation', guitar: 'Guitar accompaniment', bass: 'Bass ostinato', drums: "Jazz-funk ride pocket" },
      solo: { synth: "Jazz-Funk Trumpet", rhodes: 'Rhodes syncopation', bass: 'Bass ostinato', drums: "Jazz-funk ride pocket" },
      outro: { } },
    lockPatternAssignments: { A: ['rhodes','bass'], B: ['rhodes','tenor-sax'], solo: ['rhodes','bass'] } },
  'funk::minneapolis': {
    note: 'Lean Minneapolis guitar and drum-machine texture with a bright synth hook. Keep the machine backbeat fixed; thin the clipped guitar to a late two-hit answer in the bridge so the hook and bass space open up.',
    sectionInstruments: {
      intro: ['guitar','synth','drums'],
      verse: ['voice','guitar','synth','drums'],
      chorus: ['voice','guitar','synth','drums'],
      bridge: ['guitar','synth','drums'],
      outro: ['guitar','synth','drums'] },
    patternAssignments: {
      intro: { guitar: 'Clipped guitar', synth: 'Synth statement', drums: 'Machine backbeat' },
      verse: { voice: 'Voice statement', guitar: 'Clipped guitar', synth: 'Synth statement', drums: 'Machine backbeat' },
      chorus: { voice: "Minneapolis Vocal", guitar: 'Clipped guitar', synth: 'Synth hook', drums: 'Machine backbeat' },
      bridge: { guitar: "Guitar accompaniment", synth: 'Synth hook', drums: 'Machine backbeat' },
      outro: { guitar: 'Clipped guitar', drums: 'Machine backbeat' } },
    lockPatternAssignments: { verse: ['drums'], chorus: ['drums'], bridge: ['drums'] } },
  'funk::disco': {
    sectionInstruments: {
      intro: ['guitar','bass','drums'],
      verse: ['voice','guitar','bass','drums'],
      chorus: ['voice','guitar','bass','drums','string-ensemble'],
      breakdown: ['bass','drums'],
      solo: ['guitar','bass','drums','string-ensemble'],
      outro: ['guitar','bass','drums'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', bass: 'Octave bass', drums: 'Four-on-floor' },
      verse: { voice: 'Voice statement', guitar: 'Muted guitar scratch', bass: 'Octave bass', drums: 'Four-on-floor' },
      chorus: { voice: "Disco Vocal", guitar: 'Muted guitar scratch', bass: 'Octave bass', drums: 'Four-on-floor', 'string-ensemble': 'String stabs' },
      breakdown: { bass: "Low anchor", drums: "Kit" },
      solo: { guitar: "Guitar accompaniment", bass: 'Octave bass', drums: 'Four-on-floor', 'string-ensemble': 'String stabs' },
      outro: { } },
    lockPatternAssignments: { chorus: ['bass','drums','string-ensemble'], solo: ['bass','drums'] } },
  'funk::philly-disco': {
    sectionInstruments: {
      intro: ['piano','bass','drums'],
      theme: ['voice','piano','bass','drums','string-ensemble'],
      groove: ['voice','piano','bass','drums','string-ensemble'],
      solo: ['piano','bass','drums','string-ensemble'],
      breakdown: ['bass','drums'],
      outro: ['piano','bass','drums'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', drums: 'Kit' },
      theme: { voice: 'Voice statement', piano: 'Piano accompaniment', bass: 'Dance bass', drums: 'Dance backbeat', 'string-ensemble': 'String swell' },
      groove: { voice: "Philly Disco Vocal", piano: 'Piano accompaniment', bass: 'Dance bass', drums: 'Dance backbeat', 'string-ensemble': "String swell" },
      solo: { piano: "Piano accompaniment", bass: 'Dance bass', drums: 'Dance backbeat', 'string-ensemble': "String swell" },
      breakdown: { bass: 'Low anchor', drums: "Kit" },
      outro: { } },
    lockPatternAssignments: { theme: ['bass'], groove: ['bass'] } },
  'funk::boogie': {
    note: 'Keep the octave synth-bass bounce and Rhodes/clap pocket through the hooks. Reduce the bass to its four-note syncopated variation in the breakdown, then restore the full bounce for the solo and final chorus.',
    sectionInstruments: {
      intro: ['synth-bass','rhodes','drums'],
      verse: ['voice','synth-bass','rhodes','drums'],
      chorus: ['voice','synth','synth-bass','rhodes','drums'],
      breakdown: ['synth-bass','drums'],
      solo: ['synth','synth-bass','rhodes','drums'],
      outro: ['synth-bass','rhodes','drums'] },
    patternAssignments: {
      intro: { 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: "Boogie clap pocket" },
      verse: { voice: 'Voice statement', 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: "Boogie clap pocket" },
      chorus: { voice: "Boogie Vocal", synth: "Boogie Synthesizer", 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Clap backbeat' },
      'chorus#2': { synth: "Boogie Synthesizer" },
      'chorus#3': { synth: "Boogie Synthesizer" },
      breakdown: { 'synth-bass': "Synth-bass bounce", drums: "Boogie clap pocket" },
      solo: { synth: "Boogie Synthesizer", 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Clap backbeat' },
      outro: { 'synth-bass': 'Synth-bass bounce' } },
    lockPatternAssignments: { verse: ['synth-bass','rhodes'], chorus: ['synth-bass','rhodes'], solo: ['synth-bass'] } },
  'funk::hi-nrg': {
    note: 'Drive the verse, chorus and build with the alternating octave bass and even kick pulse. The breakdown keeps the bass moving with a four-note syncopated answer, then restores the full eighth-note push for the build.',
    sectionInstruments: {
      intro: ['synth-bass','drums'],
      verse: ['voice','synth','synth-bass','drums'],
      chorus: ['voice','synth','synth-bass','drums'],
      breakdown: ['synth-bass','drums'],
      build: ['synth','synth-bass','drums'],
      outro: ['synth-bass','drums'] },
    patternAssignments: {
      intro: { 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      verse: { voice: 'Voice statement', synth: 'Synth statement', 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      chorus: { voice: "Hi-NRG Vocal", synth: 'Synth hook', 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      breakdown: { 'synth-bass': "Octave synth bass", drums: "Kit" },
      build: { synth: 'Synth hook', 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      outro: { 'synth-bass': 'Octave synth bass' } },
    lockPatternAssignments: { verse: ['synth-bass','drums'], chorus: ['synth-bass','drums'], build: ['synth-bass','drums'] } },
  'afrobeat::classic-afrobeat': {
    patternAssignments: {
      intro: { guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: "Interlocking Afrobeat kit", congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      groove: { guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: "Interlocking Afrobeat kit", congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: "Interlocking Afrobeat kit", congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      solo: { trumpet: "Classic Afrobeat Trumpet", 'tenor-sax': "Classic Tenor Sax", guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: "Low anchor", drums: "Interlocking Afrobeat kit", congas: "Congas pulse", shekere: 'Shekere eighth-note pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: "Interlocking Afrobeat kit", congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      coro: { voice: "Classic Afrobeat Vocal", trumpet: "Classic Afrobeat Trumpet", 'tenor-sax': "Classic Tenor Sax", guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: "Low anchor", drums: "Interlocking Afrobeat kit", congas: "Congas pulse", shekere: 'Shekere eighth-note pulse' },
      outro: { } } },
  'salsa::salsa-dura': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', bongos: 'Bongó martillo', timbales: 'Timbales pulse', claves: 'Son clave 3–2' },
      verse: { voice: 'Vocal guide phrase', trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', bongos: 'Bongó martillo', timbales: 'Timbales pulse', claves: 'Son clave 3–2' },
      montuno: { voice: "Vocal guide phrase", trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', timbales: 'Timbales pulse', claves: 'Son clave 3–2', cowbell: 'Campana in montuno' },
      coro: { voice: "Vocal guide phrase", trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', timbales: 'Timbales pulse', claves: 'Son clave 3–2', cowbell: 'Campana in montuno' },
      mambo: { trumpet: "Trumpet phrase", trombone: "Trombone phrase", piano: "Piano montuno", bass: "Bass tumbao", congas: "Conga tumbao", timbales: "Timbales pulse", claves: "Son clave 3–2", cowbell: 'Campana in montuno' },
      cierre: { trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', bongos: 'Bongó martillo', timbales: 'Timbales pulse', claves: 'Son clave 3–2' } } },
  'salsa::son': {
    sectionInstruments: {
      intro: ['trumpet','tres','bass','bongos','claves','maracas'],
      verse: ['voice','trumpet','tres','bass','bongos','claves','maracas'],
      interlude: ['trumpet','tres','bass','bongos','claves','maracas'],
      solo: ['trumpet','tres','bass','bongos','claves','maracas'],
      outro: ['trumpet','tres','bass','bongos','claves','maracas'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', tres: 'Tres accompaniment', bass: 'Low anchor', bongos: 'Bongos pulse', claves: 'Claves pulse', maracas: 'Maracas pulse' },
      verse: { voice: 'Voice statement', trumpet: 'Trumpet statement', tres: 'Tres accompaniment', bass: 'Low anchor', bongos: 'Bongos pulse', claves: 'Claves pulse', maracas: 'Maracas pulse' },
      'verse#2': { voice: "Son Vocal" },
      'verse#3': { voice: "Son Vocal" },
      interlude: { trumpet: "Son Trumpet", tres: "Tres accompaniment", bass: "Low anchor", bongos: "Bongos pulse", claves: "Claves pulse", maracas: "Maracas pulse" },
      solo: { trumpet: "Son Trumpet", tres: 'Tres accompaniment', bass: 'Low anchor', bongos: 'Bongos pulse', claves: 'Claves pulse', maracas: 'Maracas pulse' },
      outro: { trumpet: 'Trumpet statement', tres: 'Tres accompaniment', bass: 'Low anchor', bongos: 'Bongos pulse', claves: 'Claves pulse', maracas: 'Maracas pulse' } } },
  // In the montuno/coro the son-montuno bongocero changes to bell time.
  // Model the handoff as an instrument change so the bongo pattern does not
  // keep playing underneath a second synthetic bell at the same rate.
  'salsa::son-montuno': {
    sectionInstruments: {
      intro: ['trumpet','tres','piano','bass','congas','bongos','timbales','claves'],
      verse: ['voice','trumpet','tres','piano','bass','congas','bongos','timbales','claves'],
      montuno: ['voice','trumpet','trombone','tres','piano','bass','congas','timbales','claves','cowbell'],
      coro: ['voice','trumpet','trombone','tres','piano','bass','congas','timbales','claves','cowbell'],
      mambo: ['trumpet','trombone','tres','piano','bass','congas','timbales','claves','cowbell'],
      cierre: ['trumpet','tres','piano','bass','congas','bongos','timbales','claves'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', tres: 'Tres guajeo reply', piano: 'Son montuno piano', bass: 'Low anchor', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      verse: { voice: 'Voice statement', trumpet: "Son Montuno Trumpet", tres: "Tres guajeo reply", piano: 'Son montuno piano', bass: "Low anchor", congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      montuno: { voice: "Son Montuno Vocal", trumpet: "Son Montuno Trumpet", trombone: "Son Montuno Trombone", tres: "Tres guajeo reply", piano: 'Son montuno piano', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
      coro: { voice: "Son Montuno Vocal", trumpet: "Son Montuno Trumpet", trombone: "Son Montuno Trombone", tres: 'Tres guajeo reply', piano: 'Son montuno piano', bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
      mambo: { trumpet: "Son Montuno Trumpet", trombone: "Son Montuno Trombone", tres: "Tres guajeo reply", piano: "Son montuno piano", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
      cierre: { claves: 'Claves pulse' } } },
  'salsa::mambo': {
    solos: { solo: 'trumpet' },
    sectionInstruments: {
      intro: ['trumpet','trombone','tres','piano','bass','congas','bongos','timbales','claves'],
      head: ['trumpet','trombone','tres','piano','bass','congas','bongos','timbales','claves'],
      mambo: ['trumpet','trombone','tres','piano','bass','congas','timbales','claves','cowbell'],
      solo: ['trumpet','tres','piano','bass','congas','timbales','claves','cowbell'],
      break: ['piano','bass','claves'],
      cierre: ['trumpet','trombone','tres','piano','bass','congas','bongos','timbales','claves'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', trombone: 'Trombone statement', tres: 'Mambo tres answers', piano: 'Mambo piano punches', bass: 'Low anchor', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      head: { trumpet: "Mambo Trumpet", trombone: "Mambo Trombone", tres: "Mambo tres answers", piano: 'Mambo piano punches', bass: "Low anchor", congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      mambo: { trumpet: "Mambo Trumpet", trombone: "Mambo Trombone", tres: "Mambo tres answers", piano: "Mambo piano punches", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", claves: 'Claves pulse', cowbell: 'Mambo campana' },
      solo: { trumpet: "Mambo Trumpet", tres: 'Mambo tres answers', piano: "Mambo piano punches", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", claves: 'Claves pulse', cowbell: 'Mambo campana' },
      break: { piano: "Mambo piano punches", bass: "Low anchor", claves: 'Claves pulse' },
      cierre: { claves: 'Claves pulse' } } },
  'salsa::cha-cha-cha': {
    solos: { flute: 'flute' },
    sectionInstruments: {
      intro: ['flute','piano','bass','congas','guiro','timbales'],
      verse: ['voice','flute','piano','bass','congas','guiro','timbales'],
      chorus: ['voice','flute','piano','bass','congas','guiro','timbales'],
      flute: ['flute','piano','bass','congas','guiro','timbales'],
      cierre: ['flute','piano','bass','congas','guiro','timbales'] },
    patternAssignments: {
      intro: { flute: 'Flute statement', piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', guiro: 'Guiro pulse', timbales: 'Timbales pulse' },
      verse: { voice: 'Voice statement', flute: "Cha-Cha-Chá Concert Flute", piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', guiro: 'Guiro pulse', timbales: 'Timbales pulse' },
      chorus: { voice: "Cha-Cha-Chá Vocal", flute: "Cha-Cha-Chá Concert Flute", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", guiro: 'Guiro pulse', timbales: "Timbales pulse" },
      flute: { flute: "Cha-Cha-Chá Concert Flute", piano: "Piano accompaniment", bass: "Low anchor", congas: 'Congas pulse', guiro: 'Guiro pulse', timbales: 'Timbales pulse' },
      cierre: { } } },
  'salsa::charanga': {
    solos: { flute: 'flute' },
    sectionInstruments: {
      intro: ['flute','violin','piano','bass','congas','timbales','guiro'],
      verse: ['voice','flute','violin','piano','bass','congas','timbales','guiro'],
      chorus: ['voice','flute','violin','piano','bass','congas','timbales','guiro'],
      flute: ['flute','piano','bass','congas','timbales','guiro'],
      cierre: ['flute','violin','piano','bass','congas','timbales','guiro'] },
    patternAssignments: {
      intro: { flute: 'Flute statement', violin: 'Violin statement', piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      verse: { voice: 'Voice statement', flute: "Charanga Concert Flute", violin: "Charanga Violin", piano: 'Piano accompaniment', bass: "Low anchor", congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      chorus: { voice: "Charanga Vocal", flute: "Charanga Concert Flute", violin: "Charanga Violin", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", guiro: "Guiro pulse" },
      flute: { flute: "Charanga Concert Flute", piano: "Piano accompaniment", bass: "Low anchor", congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      cierre: { } } },
  'salsa::pachanga': {
    solos: { solo: 'flute' },
    sectionInstruments: {
      intro: ['flute','violin','piano','bass','congas','timbales','guiro'],
      chorus: ['voice','flute','violin','piano','bass','congas','timbales','guiro'],
      verse: ['voice','flute','violin','piano','bass','congas','timbales','guiro'],
      solo: ['flute','violin','piano','bass','congas','timbales','guiro'],
      cierre: ['flute','violin','piano','bass','congas','timbales','guiro'] },
    patternAssignments: {
      intro: { flute: 'Flute statement', violin: 'Violin statement', piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      chorus: { voice: "Pachanga Vocal", flute: "Pachanga Concert Flute", violin: "Pachanga Violin", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", guiro: "Guiro pulse" },
      verse: { voice: 'Voice statement', flute: "Pachanga Concert Flute", violin: "Pachanga Violin", piano: 'Piano accompaniment', bass: "Low anchor", congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      solo: { flute: "Pachanga Concert Flute", violin: "Pachanga Violin", piano: "Piano accompaniment", bass: "Low anchor", congas: "Congas pulse", timbales: "Timbales pulse", guiro: "Guiro pulse" },
      cierre: { } } },
  'salsa::boogaloo': {
    solos: { solo: 'trumpet' },
    sectionInstruments: {
      intro: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves','drums'],
      hook: ['voice','trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves','drums'],
      verse: ['voice','piano','tres','bass','congas','bongos','timbales','claves','drums'],
      break: ['piano','tres','bass','congas','bongos','timbales','claves','drums'],
      solo: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves','drums'],
      coda: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves','drums'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', trombone: 'Trombone statement', piano: 'Boogaloo backbeat', tres: 'Boogaloo tres pickup', bass: 'Low anchor', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      verse: { voice: 'Voice statement', piano: 'Boogaloo backbeat', tres: 'Boogaloo tres pickup', bass: 'Low anchor', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      break: { piano: "Boogaloo backbeat", tres: "Boogaloo tres pickup", bass: "Low anchor", congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse', drums: 'Boogaloo fill' },
      solo: { trumpet: "Boogaloo Trumpet", trombone: "Boogaloo Trombone", piano: "Boogaloo backbeat", tres: "Boogaloo tres pickup", bass: "Low anchor", congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      hook: { voice: "Boogaloo Vocal", trumpet: "Boogaloo Trumpet", trombone: "Boogaloo Trombone", piano: "Boogaloo backbeat", tres: "Boogaloo tres pickup", bass: "Low anchor", congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      coda: { tres: "Boogaloo tres pickup", claves: 'Claves pulse', drums: 'Boogaloo fill' } } },
  'salsa::descarga': {
    instruments: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'],
    solos: { 'bass-solo': 'bass', 'piano-solo': 'piano', 'horn-solo': 'trumpet' },
    sectionInstruments: {
      intro: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'],
      vamp: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'],
      'bass-solo': ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'],
      'piano-solo': ['piano','tres','bass','congas','bongos','timbales','claves'],
      'horn-solo': ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'],
      percussion: ['bass','congas','bongos','timbales','claves'],
      cierre: ['trumpet','trombone','piano','tres','bass','congas','bongos','timbales','claves'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', trombone: 'Trombone statement', piano: 'Descarga piano vamp', tres: 'Descarga tres answer', bass: 'Low anchor', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      vamp: { trumpet: "Descarga Trumpet", trombone: "Descarga Trombone", piano: 'Descarga piano vamp', tres: "Descarga tres answer", bass: "Low anchor", congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse' },
      'bass-solo': { trumpet: "Descarga Trumpet", trombone: "Descarga Trombone", piano: 'Descarga piano vamp', tres: 'Descarga tres answer', bass: "Low anchor", congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: "Timbales pulse", claves: 'Claves pulse' },
      'piano-solo': { piano: "Descarga piano vamp", tres: "Descarga tres answer", bass: "Low anchor", congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: "Timbales pulse", claves: 'Claves pulse' },
      'horn-solo': { trumpet: "Descarga Trumpet", trombone: "Descarga Trombone", piano: "Descarga piano vamp", tres: "Descarga tres answer", bass: "Low anchor", congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse' },
      percussion: { bass: 'Low anchor', congas: "Congas pulse", bongos: "Bongos pulse", timbales: "Timbales pulse", claves: 'Claves pulse' },
      cierre: { tres: "Descarga tres answer", claves: 'Claves pulse' } } },
  'mexican::banda': {
    sectionInstruments: {
      intro: ['trumpet','clarinet','trombone','tuba','drums'],
      interlude: ['trumpet','clarinet','trombone','tuba','drums'],
      cierre: ['trumpet','clarinet','trombone','tuba','drums'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet answer', clarinet: 'Clarinet answer', trombone: 'Trombone answer', tuba: 'Tuba answer', drums: 'Drums answer' },
      verse: { voice: 'Voice answer', trumpet: 'Trumpet answer', clarinet: 'Clarinet answer', trombone: 'Trombone answer', tuba: 'Tuba answer', drums: 'Drums answer' },
      'verse#2': { voice: "Voice answer" },
      chorus: { voice: 'Voice answer', trumpet: "Trumpet answer", clarinet: "Clarinet answer", trombone: "Trombone answer", tuba: "Tuba answer", drums: "Drums answer" },
      'chorus#1': { voice: "Voice answer" },
      'chorus#2': { voice: "Voice answer" },
      'chorus#3': { voice: "Voice answer" },
      interlude: { trumpet: "Trumpet answer", clarinet: "Clarinet answer", trombone: 'Trombone answer', tuba: "Tuba answer", drums: "Drums answer" },
      cierre: { trumpet: 'Trumpet answer', clarinet: 'Clarinet answer', trombone: 'Trombone answer', tuba: 'Tuba answer', drums: 'Drums answer' } } },
  'mexican::son-huasteco': {
    sectionInstruments: {
      intro: ['violin','guitar','jarana'],
      response: ['voice','violin','guitar','jarana'],
      violin: ['violin','guitar','jarana'],
      cierre: ['voice','violin','guitar','jarana'] },
    patternAssignments: {
      intro: { violin: 'Violin phrase', guitar: 'Guitar comping', jarana: 'Jarana comping' },
      verse: { voice: 'Vocal phrase', violin: 'Violin phrase', guitar: 'Guitar comping', jarana: 'Jarana comping' },
      response: { voice: "Vocal phrase", violin: 'Violin phrase', guitar: "Guitar comping", jarana: "Jarana comping" },
      violin: { violin: "Violin phrase", guitar: 'Guitar comping', jarana: 'Jarana comping' },
      cierre: { voice: "Vocal phrase", violin: 'Violin phrase', guitar: 'Guitar comping', jarana: 'Jarana comping' } } },
  'country::honky-tonk': {
    solos: { 'fiddle-break': 'violin', 'fiddle-return': 'violin', 'steel-break': 'pedal-steel' },
    note: 'Honky-Tonk teaching score: the verse keeps a buoyant two-beat bass-and-backbeat pocket, then the choruses and steel break open into the Ray Price 4/4 shuffle with a walking bass and triplet-lifted hats. The fiddle and steel trade the foreground in separate phrases. This demonstrates the style contrast; it is not a transcription.',
    source: 'https://www.countrymusichalloffame.org/hall-of-fame/ray-price',
    sectionInstruments: {
      intro: ['violin','guitar','piano','upright-bass','drums'],
      verse: ['voice','violin','guitar','piano','upright-bass','drums'],
      chorus: ['voice','pedal-steel','guitar','piano','upright-bass','drums'],
      'fiddle-break': ['violin','guitar','piano','upright-bass','drums'],
      'fiddle-return': ['violin','guitar','piano','upright-bass','drums'],
      'steel-break': ['pedal-steel','guitar','piano','upright-bass','drums'],
      tag: ['voice','pedal-steel','guitar','piano','upright-bass','drums'] },
    patternAssignments: {
      intro: { violin: 'Fiddle pickup', guitar: 'Guitar accompaniment', piano: 'Piano upbeats', 'upright-bass': 'Low anchor', drums: "Honky-tonk shuffle" },
      verse: { voice: 'Vocal breath phrase', violin: 'Fiddle answer', guitar: 'Boom-chick guitar', piano: 'Piano upbeats', 'upright-bass': 'Two-beat bass', drums: 'Two-step backbeat' },
      chorus: { voice: 'Vocal breath phrase', 'pedal-steel': 'Steel answer', guitar: 'Boom-chick guitar', piano: 'Piano upbeats', 'upright-bass': 'Walking bass quarters', drums: 'Ray Price Beat' },
      'fiddle-break': { violin: 'Fiddle break phrase', guitar: 'Boom-chick guitar', piano: 'Piano upbeats', 'upright-bass': 'Two-beat bass', drums: 'Two-step backbeat' },
      'fiddle-return': { violin: 'Fiddle break turnaround', guitar: 'Boom-chick guitar', piano: 'Piano upbeats', 'upright-bass': 'Two-beat bass', drums: 'Two-step backbeat' },
      'steel-break': { 'pedal-steel': 'Steel break phrase', guitar: 'Boom-chick guitar', piano: 'Piano upbeats', 'upright-bass': 'Walking bass quarters', drums: 'Ray Price Beat' },
      tag: { piano: 'Piano turnaround pickup', 'upright-bass': 'Low anchor' } },
    lockPatternAssignments: {
      chorus: ['upright-bass','drums'],
      'steel-break': ['upright-bass','drums'] } },
  'country::bluegrass': {
    solos: { 'banjo-break': 'banjo', 'fiddle-break': 'violin' },
    sectionInstruments: {
      intro: ['banjo','guitar','mandolin','upright-bass'],
      verse: ['voice','violin','banjo','guitar','mandolin','upright-bass'],
      chorus: ['voice','violin','banjo','guitar','mandolin','upright-bass'],
      'banjo-break': ['banjo','guitar','mandolin','upright-bass'],
      'fiddle-break': ['violin','guitar','mandolin','upright-bass'],
      tag: ['voice','violin','banjo','guitar','mandolin','upright-bass'] },
    patternAssignments: {
      intro: { banjo: 'Alternating-thumb roll', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' },
      verse: { voice: 'Vocal verse line', violin: 'Fiddle vocal answer', banjo: 'Banjo forward roll', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' },
      chorus: { voice: 'Vocal refrain phrase', violin: 'Fiddle vocal answer', banjo: 'Forward-reverse roll', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' },
      'verse#2': { guitar: "Alternating-bass guitar", mandolin: "Mandolin chop", 'upright-bass': "Upright two-beat" },
      'chorus#2': { voice: "Bluegrass Vocal", violin: "Bluegrass Violin", banjo: 'Banjo melody roll', guitar: "Alternating-bass guitar", mandolin: "Mandolin chop", 'upright-bass': "Upright two-beat" },
      'banjo-break': { banjo: 'Banjo melody roll', guitar: "Alternating-bass guitar", mandolin: "Mandolin chop", 'upright-bass': "Upright two-beat" },
      'fiddle-break': { violin: 'Fiddle shuffle', guitar: "Alternating-bass guitar", mandolin: "Mandolin chop", 'upright-bass': "Upright two-beat" },
      tag: { voice: 'Vocal refrain phrase', violin: 'Fiddle vocal answer', banjo: 'Forward-reverse roll', guitar: "Alternating-bass guitar", mandolin: "Mandolin chop", 'upright-bass': "Upright two-beat" } } },
  'country::bakersfield': {
    solos: { solo: 'pedal-steel' },
    sectionInstruments: {
      intro: ['pedal-steel','guitar','bass','drums'],
      solo: ['pedal-steel','guitar','bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: "Twang two-step" },
      verse: { voice: 'Vocal refrain lift', 'pedal-steel': 'Steel turnaround', guitar: 'Telecaster backbeat', bass: 'Bass fifth approach', drums: 'Crisp snare backbeat' },
      chorus: { voice: 'Vocal refrain lift', 'pedal-steel': 'Steel turnaround', guitar: 'Telecaster backbeat', bass: 'Bass fifth approach', drums: 'Crisp snare backbeat' },
      solo: { 'pedal-steel': 'Steel break phrase', guitar: 'Telecaster backbeat', bass: 'Bass fifth approach', drums: 'Crisp snare backbeat' },
      tag: { } } },
  'country::outlaw': {
    solos: { solo: 'guitar', 'steel-break': 'pedal-steel' },
    sectionInstruments: {
      intro: ['pedal-steel','guitar','bass','drums'],
      verse: ['voice','guitar','bass','drums'],
      solo: ['pedal-steel','guitar','bass','drums'],
      'steel-break': ['pedal-steel','guitar','bass','drums'] },
    patternAssignments: {
      intro: { 'pedal-steel': 'Pedal steel pulse', guitar: 'Telecaster rhythm pulse', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      verse: { voice: 'Conversational vocal', guitar: 'Telecaster rhythm pulse', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      chorus: { voice: "Voice pulse", 'pedal-steel': 'Long steel response', guitar: 'Telecaster rhythm pulse', bass: 'Bass pulse', drums: 'Restrained backbeat' },
      solo: { 'pedal-steel': 'Long steel response', guitar: 'Telecaster answer lick', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      'steel-break': { 'pedal-steel': 'Steel feature phrase', guitar: 'Telecaster rhythm pulse', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      outro: { bass: 'Bass pulse' } } },
  'country::western-swing': {
    solos: { solo: 'violin' },
    sectionInstruments: {
      intro: ['violin','pedal-steel','guitar','piano','upright-bass','drums'],
      solo: ['violin','pedal-steel','guitar','piano','upright-bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', violin: 'Violin statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: "Dance-band ride" },
      head: { voice: 'Vocal head phrase', violin: 'Fiddle head answer', 'pedal-steel': 'Steel chord answer', guitar: 'Swing guitar comp', piano: 'Piano four-beat comp', 'upright-bass': 'Walking bass line', drums: 'Ride swing groove' },
      solo: { violin: 'Swing fiddle line', 'pedal-steel': 'Steel chord answer', guitar: 'Swing guitar comp', piano: 'Piano four-beat comp', 'upright-bass': 'Walking bass line', drums: 'Ride swing groove' },
      tag: { voice: 'Voice statement', violin: 'Violin statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: "Dance-band ride" } } },
  'country::americana': {
    solos: { bridge: 'violin' },
    sectionInstruments: {
      intro: ['guitar','upright-bass'],
      verse: ['voice','violin','guitar','resonator-guitar','upright-bass'],
      chorus: ['voice','violin','guitar','resonator-guitar','upright-bass','drums'],
      bridge: ['violin','guitar','resonator-guitar','upright-bass','drums'],
      outro: ['voice','guitar','upright-bass'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor' },
      verse: { voice: 'Vocal held verse', guitar: 'Alternating-bass pick', 'resonator-guitar': 'Dobro slide reply', 'upright-bass': 'Sparse root fifth' },
      chorus: { guitar: 'Open chorus strum', 'upright-bass': 'Sparse root fifth', drums: 'Roots backbeat' },
      bridge: { violin: 'Fiddle phrase answer', guitar: 'Alternating-bass pick', 'resonator-guitar': 'Dobro slide reply', 'upright-bass': 'Sparse root fifth', drums: "Roots backbeat" },
      outro: { voice: 'Voice statement', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor' } } },
  'country::country-pop': {
    solos: { solo: 'pedal-steel' },
    sectionInstruments: {
      intro: ['pedal-steel','guitar','bass','drums'],
      solo: ['pedal-steel','guitar','bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: "Country chorus lift" },
      verse: { voice: 'Vocal verse phrase', 'pedal-steel': 'Pedal-steel statement', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: "Country chorus lift" },
      prechorus: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: 'Pop backbeat' },
      chorus: { voice: 'Vocal chorus hook', 'pedal-steel': 'Steel chorus lift', guitar: 'Acoustic pop strum', bass: 'Chorus bass drive', drums: 'Pop backbeat' },
      solo: { 'pedal-steel': 'Steel break phrase', guitar: 'Acoustic pop strum', bass: 'Chorus bass drive', drums: 'Pop backbeat' },
      outro: { voice: 'Voice statement', 'pedal-steel': 'Steel chorus lift', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: "Country chorus lift" } } },
  'flamenco::sevillanas': {
    patternAssignments: { link: { cajon: 'Cajón link remate' } } },
  // Alegrías' named silencio is the exposed slow guitar passage. The cantaor,
  // palmas and cajón leave it open so the guitar can carry its own space.
  'flamenco::alegrias': {
    sectionInstruments: { silencio: ['guitar'], 'silencio-answer': ['guitar'] },
    patternAssignments: {
      silencio: { guitar: 'Silencio falseta' },
      'silencio-answer': { guitar: 'Silencio answer' } },
    lockPatternAssignments: { silencio: ['guitar'], 'silencio-answer': ['guitar'] } },
  // These form labels mean actual ensemble rests; keeping a low-energy pattern
  // running through them erased the intended ma, breath and hard stop.
  'flamenco::tonas-martinetes': {
    sectionInstruments: { pause: [] },
    patternAssignments: {
      martinete: { voice: "Cante phrase" },
      debla: { voice: "Cante phrase" },
      cadence: { voice: "Cante phrase" } } },
  'japanese::taiko': {
    sectionInstruments: { silence: [], break: [] } },
  'weird::musique-concrete': {
    sectionInstruments: { stop: [] },
    patternAssignments: {
      whistle: { sampler: 'Sound montage' },
      wheels: { sampler: "Sound montage" },
      cut: { sampler: "Sound montage" },
      'rhythm-montage': { sampler: "Sound montage" },
      steam: { sampler: "Sound montage" },
      recall: { 'sampler:texture': 'Cut-and-recall montage' } } },
  'weird::free-improvisation': {
    sectionInstruments: { silence: [], stop: [] } },
  'korean::sanjo': {
    note: 'Sanjo study: keep the slow jinyangjo phrase open, move its motif through a later-cycle variation and reply as the jangdan quickens, then let the final phrase settle without a generic drum fill.',
    patternAssignments: {
      jinyangjo: { gayageum: 'Sanjo Gayageum' },
      jungmori: { gayageum: "Sanjo Gayageum" },
      jungjungmori: { gayageum: "Sanjo Gayageum" },
      jajinmori: { gayageum: "Sanjo Gayageum" },
      hwimori: { gayageum: "Sanjo Gayageum" },
      cadence: { gayageum: "Sanjo Gayageum" } },
    lockPatternAssignments: {
      jinyangjo: ['gayageum'], jungmori: ['gayageum'], jungjungmori: ['gayageum'],
      jajinmori: ['gayageum'], hwimori: ['gayageum'], cadence: ['gayageum'] } },
  'turkish::ottoman-classical': {
    note: 'Ottoman Classical study: introduce the ney and oud phrases in the daramad, exchange locally derived answers during development, and return to the opening material before the cadence. These cells are makam phrase guides, not a transcription.',
    patternAssignments: {
      daramad: { ney: 'Ottoman Classical Ney', oud: 'Ottoman Classical Oud' },
      'lower-register': { ney: "Ottoman Classical Ney", oud: "Ottoman Classical Oud" },
      development: { ney: "Ottoman Classical Ney", oud: "Ottoman Classical Oud" },
      'upper-register': { ney: "Ottoman Classical Ney", oud: "Ottoman Classical Oud" },
      return: { ney: 'Ottoman Classical Ney', oud: 'Ottoman Classical Oud' },
      cadence: { ney: "Ottoman Classical Ney", oud: "Ottoman Classical Oud" } },
    lockPatternAssignments: {
      daramad: ['ney','oud'], 'lower-register': ['ney','oud'], development: ['ney','oud'],
      'upper-register': ['ney','oud'], return: ['ney','oud'], cadence: ['ney','oud'] } },
  'steppe::khoomei': {
    note: 'Khöömei learning score: short voice-guide phrases sit above the morin-khuur, and the response changes from the held home pitch to a higher overtone focus. The GM Voice Oohs patch cues pitch only; it does not reproduce Tuvan throat-singing timbre, and this is not a transcription.',
    sectionInstruments: {
      opening: ['morin-khuur'], verse: ['voice','morin-khuur'], drone: ['morin-khuur'],
      response: ['voice','morin-khuur'], cadence: ['morin-khuur'] },
    patternAssignments: {
      verse: { voice: 'Khöömei Vocal' },
      response: { voice: 'Khoomei overtone answer' } },
    lockPatternAssignments: { verse: ['voice'], response: ['voice'] } },
  'cinematic::modern-score': {
    lead: 'piano',
    note: 'Modern score study: let the piano and a quiet synth establish the motif, add cello and strings before the horn, then reserve timpani for the full climax. The release drops to exposed piano.',
    sectionInstruments: {
      opening: ['piano','synth'],
      ostinato: ['piano','string-ensemble','cello','synth'],
      build: ['piano','french-horn','string-ensemble','cello','timpani','synth'],
      climax: ['piano','french-horn','string-ensemble','cello','timpani','synth'],
      release: ['piano'], outro: ['piano'] },
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment' },
      ostinato: { piano: "Modern Score Piano", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", synth: 'Synth ostinato' },
      build: { piano: "Modern Score Piano", 'french-horn': "Modern French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse", synth: 'Synth Resolution' },
      climax: { piano: "Modern Score Piano", 'french-horn': "Modern French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse", synth: "Synth ostinato" } } },
  'cinematic::golden-age': {
    instruments: ['piano','french-horn','string-ensemble','cello','timpani'], lead: 'french-horn',
    note: 'Golden Age score study: state a brass fanfare, broaden into a singing string theme, soften the second theme, and rebuild through development and battle passages. The reprise gathers the ensemble before a short orchestral coda.',
    sectionInstruments: {
      fanfare: ['french-horn','string-ensemble','cello','timpani'],
      A: ['piano','french-horn','string-ensemble','cello','timpani'],
      B: ['piano','french-horn','string-ensemble','cello'],
      development: ['piano','french-horn','string-ensemble','cello','timpani'],
      battle: ['piano','french-horn','string-ensemble','cello','timpani'],
      coda: ['french-horn','string-ensemble','cello','timpani'] },
    patternAssignments: {
      fanfare: { 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      A: { piano: "Golden Age Piano", 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor" },
      B: { piano: "Golden Age Piano", 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor" },
      development: { piano: "Golden Age Piano", 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      battle: { piano: "Golden Age Piano", 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" },
      coda: { 'french-horn': "Golden French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" } } },
  'cinematic::minimal-tension': {
    lead: 'piano',
    note: 'Minimal tension study: begin with a bare piano-and-cello cell, let a displaced synth pulse appear, then add semitone color and a slowly widening string layer. The climax releases back to the exposed figure without a drum beat.',
    sectionInstruments: {
      opening: ['piano','cello'], pulse: ['piano','cello','synth'],
      descent: ['piano','string-ensemble','cello','synth'],
      build: ['piano','string-ensemble','cello','synth'],
      climax: ['piano','string-ensemble','cello','synth'], release: ['piano','cello'] },
    patternAssignments: {
      opening: { piano: "Minimal Tension Piano", cello: "Low anchor" },
      pulse: { piano: "Minimal Tension Piano", cello: "Low anchor", synth: 'Displaced two-note pulse' },
      descent: { piano: "Minimal Tension Piano", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", synth: "Displaced two-note pulse" },
      build: { piano: "Minimal Tension Piano", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", synth: "Displaced two-note pulse" },
      climax: { piano: "Minimal Tension Piano", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", synth: "Displaced two-note pulse" },
      release: { piano: "Minimal Tension Piano", cello: "Low anchor" } } },
  'cinematic::hybrid': {
    instruments: ['piano','string-ensemble','cello','timpani','synth'], lead: 'piano',
    note: 'Hybrid score study: keep the opening hook dry and close, build a distinct low electronic pulse beneath it, then add short string and timpani impacts. Strip those layers before the hook returns and fades.',
    sectionInstruments: {
      opening: ['piano','synth'], A: ['piano','cello','synth'],
      evolution: ['piano','string-ensemble','cello','timpani','synth'], dissolve: ['piano','synth'] },
    patternAssignments: {
      opening: { piano: "Hybrid Piano", synth: 'Synth accompaniment' },
      A: { piano: "Hybrid Piano", cello: "Low anchor", synth: "Synth accompaniment" },
      evolution: { piano: "Hybrid Piano", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse", synth: "Synth accompaniment" },
      dissolve: { piano: "Hybrid Piano", synth: "Synth accompaniment" } } },
  'cinematic::epic': {
    instruments: ['french-horn','string-ensemble','cello','timpani','synth'],
    note: 'Epic score study: begin on the low ostinato, set the horn against the timpani in battle passages, open into a sustained chorale, and cut to full silence before the final build. Thin the low percussion under the closing fall.',
    sectionInstruments: {
      opening: ['cello','synth'], battle: ['french-horn','string-ensemble','cello','timpani','synth'],
      chorale: ['french-horn','string-ensemble','cello','synth'], break: [],
      climax: ['french-horn','string-ensemble','cello','timpani','synth'],
      fall: ['french-horn','string-ensemble','cello'], coda: ['french-horn','string-ensemble','cello','timpani'] },
    patternAssignments: {
      opening: { cello: "Low anchor", synth: 'Synth ostinato' },
      battle: { 'french-horn': "Epic French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse", synth: 'Synth ostinato' },
      chorale: { 'french-horn': "Epic French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", synth: "Synth ostinato" },
      climax: { 'french-horn': "Epic French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse", synth: "Synth ostinato" },
      fall: { 'french-horn': "Epic French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor" },
      coda: { 'french-horn': "Epic French horn", 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", timpani: "Timpani pulse" } } },
  'cinematic::ambient-score': {
    instruments: ['synth','string-ensemble','cello','piano'],
    note: 'Ambient score study: keep a quiet synthetic melody above slow strings, use piano replies to mark breaths, and bring cello forward only in the middle passage. Let the ending dissolve without a drum fill or forced climax.',
    sectionInstruments: {
      opening: ['synth','string-ensemble'], A: ['synth','string-ensemble','cello','piano'],
      solo: ['synth','string-ensemble','cello'], dissolve: ['synth','string-ensemble'] },
    patternAssignments: {
      opening: { synth: 'Synth slow motif', 'string-ensemble': "String-ensemble accompaniment" },
      A: { synth: 'Synth answering phrase', 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor", piano: 'Piano breath reply' },
      solo: { synth: 'Synth slow motif', 'string-ensemble': "String-ensemble accompaniment", cello: "Low anchor" },
      dissolve: { synth: 'Synth slow motif', 'string-ensemble': "String-ensemble accompaniment" } } },
  'pop::power-pop': {
    patternAssignments: { chorus: { synth: 'Synth swell' } } },
  'tango::chacarera-crossover': {
    patternAssignments: {
      response: { 'bombo-leguero': 'Bombo cross-accent' },
      interlude: {
        violin: 'Violin interlude',
        'bombo-leguero': 'Bombo cross-accent' } } },
  'qawwali::traditional': {
    sectionInstruments: {
      harmonium: ['harmonium'],
      invocation: ['voice','harmonium'],
      refrain: ['voice','choir','harmonium','dholak','hand-percussion'],
      verse: ['voice','harmonium','dholak'],
      response: ['voice','choir','harmonium','dholak','hand-percussion'],
      cadence: ['voice','harmonium','dholak'] },
    patternAssignments: {
      harmonium: { harmonium: 'Harmonium drone' },
      invocation: { voice: 'Lead call', harmonium: 'Harmonium drone' },
      refrain: { voice: 'Lead call', choir: 'Group refrain', harmonium: 'Harmonium pulse', dholak: 'Dholak cycle', 'hand-percussion': 'Cycle claps' },
      verse: { voice: 'Lead call', harmonium: 'Harmonium pulse', dholak: 'Dholak cycle' },
      response: { voice: 'Lead call', choir: 'Group refrain', harmonium: "Harmonium accompaniment", dholak: 'Dholak fill', 'hand-percussion': 'Cycle claps' },
      cadence: { harmonium: "Harmonium accompaniment", dholak: 'Dholak fill' } } },
  'qawwali::hamd-naat': {
    sectionInstruments: {
      prelude: ['harmonium'],
      verse: ['voice','harmonium','dholak'],
      refrain: ['voice','choir','harmonium','dholak','hand-percussion'],
      adlib: ['voice','harmonium','dholak'],
      cadence: ['voice','harmonium'] },
    patternAssignments: {
      prelude: { harmonium: 'Harmonium drone' },
      verse: { voice: 'Devotional line', harmonium: 'Harmonium drone', dholak: 'Light dholak' },
      refrain: { voice: 'Devotional line', choir: 'Quiet refrain', harmonium: "Harmonium accompaniment", dholak: 'Light dholak', 'hand-percussion': 'Refrain claps' },
      adlib: { voice: 'Devotional line', harmonium: "Harmonium accompaniment", dholak: 'Light dholak' },
      cadence: { harmonium: 'Harmonium drone' } } },
  'qawwali::ghazal-qawwali': {
    sectionInstruments: {
      prelude: ['harmonium'],
      verse: ['voice','harmonium','dholak'],
      refrain: ['voice','choir','harmonium','dholak','hand-percussion'],
      response: ['voice','harmonium','dholak','hand-percussion'],
      adlib: ['voice','harmonium','dholak'],
      cadence: ['voice','harmonium'] },
    patternAssignments: {
      prelude: { harmonium: 'Harmonium bed' },
      verse: { voice: 'Long couplet', harmonium: 'Harmonium bed', dholak: 'Soft dholak' },
      refrain: { voice: 'Long couplet', choir: 'Couplet refrain', harmonium: 'Harmonium bed', dholak: 'Soft dholak', 'hand-percussion': 'Refrain claps' },
      response: { voice: 'Long couplet', harmonium: 'Couplet reply', dholak: 'Soft dholak', 'hand-percussion': 'Refrain claps' },
      adlib: { voice: 'Long couplet', harmonium: 'Couplet reply', dholak: 'Soft dholak' },
      cadence: { harmonium: 'Couplet reply' } } },
  'brazilian::samba': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
    solos: { instrumental: 'cavaquinho' },
    note: 'Instrumental breaks alternate with the sung refrain. Keep the surdo relaxed behind the forward pandeiro and tamborim; agogô enters in a light low-high weave, then answers more brightly in the refrain. The short vocal-guide patch appears only in verse and refrain sections.',
    sectionInstruments: {
      intro: ['cavaquinho','bass','surdo','pandeiro'],
      tema: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      refrain: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      instrumental: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      coda: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths' },
      tema: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers', agogo: 'Agogô low-high weave' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers', agogo: 'Agogô low-high weave' },
      refrain: { voice: "Samba Vocal", guitar: "Samba chord sync", cavaquinho: "Cavaquinho offbeats", bass: "Low anchor", surdo: 'Surdo beat anchor', pandeiro: "Pandeiro sixteenths", tamborim: "Tamborim offbeat answers", agogo: 'Agogô refrain answer' },
      instrumental: { guitar: 'Guitar accompaniment', cavaquinho: "Cavaquinho offbeats", bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers', agogo: 'Agogô refrain answer' },
      coda: { } } },
  'brazilian::bossa-nova': {
    instruments: ['flute','guitar','upright-bass','drums'],
    solos: { solo: 'flute' },
    note: 'Instrumental bossa score: short nylon guitar chord anticipations sit opposite the two-beat bass, with quiet brush-kit support. The flute carries the bridge and solo; the sample omits the synthetic vocal guide and extra piano doubling.',
    sectionInstruments: {
      intro: ['guitar'],
      A: ['guitar','upright-bass','drums'],
      B: ['flute','guitar','upright-bass','drums'],
      solo: ['flute','guitar','upright-bass','drums'],
      coda: ['flute','guitar','upright-bass'] },
    patternAssignments: {
      intro: { guitar: 'Bossa chord anticipations' },
      A: { guitar: 'Bossa chord anticipations', 'upright-bass': 'Bossa two-beat bass', drums: 'Soft bossa brushes' },
      B: { flute: "Bossa Concert Flute", guitar: "Bossa chord anticipations", 'upright-bass': "Bossa two-beat bass", drums: "Soft bossa brushes" },
      solo: { flute: 'Flute statement', guitar: 'Bossa chord anticipations', 'upright-bass': 'Bossa two-beat bass', drums: 'Soft bossa brushes' },
      coda: { guitar: 'Bossa chord anticipations', 'upright-bass': 'Bossa two-beat bass' } } },
  'brazilian::pagode': {
    instruments: ['voice','cavaquinho','banjo','bass','pandeiro','tantan'],
    solos: { solo: 'cavaquinho' },
    note: 'Pagode teaching arrangement: the cavaquinho and banjo interlock above the tantan and pandeiro. Keep the guide vocal to sung sections, then hand the instrumental break to the cavaquinho before a compact ensemble close.',
    sectionInstruments: {
      intro: ['cavaquinho','banjo','bass','pandeiro','tantan'],
      verse: ['voice','cavaquinho','banjo','bass','pandeiro','tantan'],
      chorus: ['voice','cavaquinho','banjo','bass','pandeiro','tantan'],
      solo: ['cavaquinho','banjo','bass','pandeiro','tantan'],
      coda: ['voice','cavaquinho','banjo','bass','pandeiro','tantan'] },
    patternAssignments: {
      intro: { cavaquinho: 'Cavaquinho accompaniment', banjo: 'Banjo accompaniment', bass: 'Low anchor', pandeiro: 'Pagode pandeiro turn', tantan: 'Tantan low reply' },
      verse: { voice: 'Voice statement', cavaquinho: 'Cavaquinho accompaniment', banjo: 'Banjo accompaniment', bass: 'Low anchor', pandeiro: 'Pagode pandeiro turn', tantan: 'Tantan low reply' },
      chorus: { voice: "Pagode Vocal", cavaquinho: "Pagode cavaquinho", banjo: "Pagode banjo answers", bass: "Low anchor", pandeiro: "Pagode pandeiro turn", tantan: "Tantan low reply" },
      solo: { cavaquinho: "Pagode cavaquinho", banjo: "Pagode banjo answers", bass: "Low anchor", pandeiro: "Pagode pandeiro turn", tantan: "Tantan low reply" },
      coda: { } } },
  'brazilian::partido-alto': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
    solos: { solo: 'cavaquinho' },
    note: 'Partido-alto teaching score: leave the opening instrumental, alternate a sung call with a short vocal reply, and feature cavaquinho in the solo. Keep surdo on the broad pulse while pandeiro, tamborim and agogô answer in distinct rhythmic spaces; lift the refrain with a compact bell figure.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      refrain: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      coda: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: 'Tamborim refrain accents' },
      refrain: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: 'Tamborim refrain accents', agogo: 'Agogô refrain lift' },
      verse: { voice: "Partido Alto Vocal", guitar: "Partido guitar anchors", cavaquinho: "Partido cavaquinho lift", bass: "Low anchor", surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: "Tamborim refrain accents", agogo: 'Agogô call answer' },
      solo: { guitar: 'Guitar accompaniment', cavaquinho: "Partido cavaquinho lift", bass: "Low anchor", surdo: 'Surdo refrain anchor', pandeiro: "Pandeiro call response", tamborim: "Tamborim refrain accents", agogo: 'Agogô call answer' },
      coda: { } } },
  'brazilian::samba-de-roda': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
    solos: { solo: 'guitar' },
    note: 'Samba de roda teaching arrangement: the voice calls and answers around the circle while pandeiro, surdo and tamborim hold separate jobs. A few agogô pickups cue the response without filling the call. Clear the singer for the short guitar feature, then bring the response back for the last refrain.',
    sectionInstruments: {
      call: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      response: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      coda: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'] },
    patternAssignments: {
      call: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro circle swing', tamborim: 'Tamborim response', agogo: 'Agogô call pickup' },
      response: { voice: "Samba Roda Vocal", guitar: "Roda guitar anchors", cavaquinho: "Roda cavaquinho lift", bass: "Low anchor", surdo: 'Surdo circle anchor', pandeiro: "Pandeiro circle swing", tamborim: 'Tamborim response', agogo: 'Agogô circle reply' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro circle swing', tamborim: 'Tamborim response', agogo: 'Agogô circle reply' },
      solo: { guitar: "Roda guitar anchors", cavaquinho: "Roda cavaquinho lift", bass: "Low anchor", surdo: 'Surdo circle anchor', pandeiro: "Pandeiro circle swing", tamborim: "Tamborim response" },
      coda: { agogo: 'Agogô call pickup' } } },
  'brazilian::forro': {
    instruments: ['accordion','voice','zabumba','triangle'],
    solos: { solo: 'accordion' },
    note: 'Pé-de-serra teaching arrangement: the accordion leads over the alternating low/high zabumba strokes and a lighter damped triangle subdivision. Guitar and separate bass are left out so the traditional trio pocket stays clear; the vocal guide is used only in the sung A/B sections.',
    sectionInstruments: {
      intro: ['accordion','zabumba','triangle'],
      A: ['accordion','voice','zabumba','triangle'],
      B: ['accordion','voice','zabumba','triangle'],
      solo: ['accordion','zabumba','triangle'],
      coda: ['accordion','zabumba','triangle'] },
    patternAssignments: {
      intro: { accordion: 'Accordion statement', zabumba: 'Zabumba pulse', triangle: 'Triangle eighth-note pulse' },
      A: { accordion: 'Accordion statement', voice: 'Voice statement', zabumba: 'Zabumba pulse', triangle: 'Triangle eighth-note pulse' },
      B: { accordion: "Forró Accordion", voice: "Forró Vocal", zabumba: "Zabumba pulse", triangle: "Triangle eighth-note pulse" },
      solo: { accordion: "Forró Accordion", zabumba: "Zabumba pulse", triangle: "Triangle eighth-note pulse" },
      coda: { } } },
  'brazilian::baiao': {
    instruments: ['accordion','voice','zabumba','triangle'],
    solos: { solo: 'accordion' },
    note: 'Baião teaching arrangement: the accordion melody develops over an explicit low/high zabumba exchange, while the triangle keeps its independent even subdivision. The vocal guide stays in the verses and refrain instead of masking the instrumental groove.',
    sectionInstruments: {
      intro: ['accordion','zabumba','triangle'],
      verse: ['accordion','voice','zabumba','triangle'],
      refrain: ['accordion','voice','zabumba','triangle'],
      solo: ['accordion','zabumba','triangle'],
      coda: ['accordion','zabumba','triangle'] },
    patternAssignments: {
      intro: { accordion: 'Accordion statement', zabumba: 'Baião zabumba alternation', triangle: 'Baião triangle time' },
      verse: { accordion: 'Accordion statement', voice: 'Voice statement', zabumba: 'Baião zabumba alternation', triangle: 'Baião triangle time' },
      refrain: { accordion: "Baião Accordion", voice: "Baião Vocal", zabumba: "Baião zabumba alternation", triangle: "Baião triangle time" },
      solo: { accordion: "Baião Accordion", zabumba: "Baião zabumba alternation", triangle: "Baião triangle time" },
      coda: { } } },
  'brazilian::xote': {
    instruments: ['accordion','guitar','bass','zabumba','triangle'],
    lead: 'accordion',
    solos: { solo: 'accordion' },
    note: 'Instrumental xote learning score: let the accordion carry the relaxed, singing melody over guitar, bass, soft two-beat zabumba and lightly marked triangle. Give the accordion the featured break and return with its varied refrain. No vocal part: the lyric-free Voice Oohs patch is omitted.',
    sectionInstruments: {
      intro: ['accordion','guitar','bass','zabumba','triangle'],
      verse: ['accordion','guitar','bass','zabumba','triangle'],
      chorus: ['accordion','guitar','bass','zabumba','triangle'],
      solo: ['accordion','guitar','bass','zabumba','triangle'],
      coda: ['accordion','guitar','bass','zabumba','triangle'] },
    patternAssignments: {
      intro: { accordion: 'Accordion statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', zabumba: 'Xote two-beat drum', triangle: 'Xote light triangle' },
      verse: { accordion: 'Accordion statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', zabumba: 'Xote two-beat drum', triangle: 'Xote light triangle' },
      chorus: { accordion: "Xote Accordion", guitar: "Guitar accompaniment", bass: "Low anchor", zabumba: "Xote two-beat drum", triangle: "Xote light triangle" },
      solo: { accordion: "Xote Accordion", guitar: "Guitar accompaniment", bass: "Low anchor", zabumba: "Xote two-beat drum", triangle: "Xote light triangle" },
      coda: { } } },
  'brazilian::mpb': {
    instruments: ['voice','guitar','piano','bass','drums','pandeiro'],
    solos: { interlude: 'guitar' },
    note: 'MPB teaching arrangement: the guitar and piano share the harmony while melodic bass supports the lyric. Keep the opening instrumental, lift the refrain with denser rhythm-section patterns, and feature guitar in the interlude.',
    sectionInstruments: {
      intro: ['guitar','piano','bass','drums','pandeiro'],
      verse: ['voice','guitar','piano','bass','drums','pandeiro'],
      refrain: ['voice','guitar','piano','bass','drums','pandeiro'],
      interlude: ['guitar','piano','bass','drums','pandeiro'],
      coda: ['voice','guitar','piano','bass','drums','pandeiro'] },
    patternAssignments: {
      intro: { guitar: "MPB guitar colors", piano: 'Piano accompaniment', bass: 'Low anchor', drums: "MPB cross-stick kit", pandeiro: 'Pandeiro pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', bass: "Low anchor", drums: "MPB cross-stick kit", pandeiro: 'Pandeiro pulse' },
      refrain: { voice: "MPB Vocal", guitar: "MPB guitar colors", piano: "MPB piano colors", bass: "Low anchor", drums: "MPB cross-stick kit", pandeiro: "Pandeiro pulse" },
      interlude: { guitar: "MPB guitar colors", piano: "MPB piano colors", bass: "Low anchor", drums: "MPB cross-stick kit", pandeiro: "Pandeiro pulse" },
      coda: { } } },
  'brazilian::samba-reggae': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
    note: 'Samba-reggae teaching arrangement: separate the surdo calls from the lighter pandeiro lift, tamborim answers and agogô cross-rhythm. Let the chant lead the sung blocks, then strip the break to surdo before the full bloco pattern returns.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      chant: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      chorus: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      break: ['surdo'],
      coda: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers' },
      chant: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers', agogo: 'Agogô cross-rhythm' },
      verse: { voice: "Samba-Reggae Vocal", guitar: "Reggae guitar chops", cavaquinho: "Reggae cavaquinho strums", bass: "Low anchor", surdo: "Samba-reggae surdo calls", pandeiro: "Samba-reggae pandeiro lift", tamborim: "Samba-reggae tamborim answers", agogo: 'Agogô cross-rhythm' },
      chorus: { voice: "Samba-Reggae Vocal", guitar: "Reggae guitar chops", cavaquinho: "Reggae cavaquinho strums", bass: "Low anchor", surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers', agogo: 'Agogô block lift' },
      break: { surdo: "Samba-reggae surdo calls" },
      coda: { } } },
  'brazilian::samba-rock': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
    solos: { solo: 'guitar' },
    note: 'Samba-rock teaching arrangement: bring the syncopated guitar and pandeiro backbeat forward over bass drum and bass. Keep agogô to clipped chorus accents and an outro turn; the verse stays lean, and the guitar takes the short instrumental feature.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro'],
      chorus: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'],
      outro: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim','agogo'] },
    patternAssignments: {
      intro: { guitar: 'Samba-rock backbeat', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat' },
      verse: { voice: 'Voice statement', guitar: 'Samba-rock backbeat', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat' },
      chorus: { voice: "Samba-Rock Vocal", guitar: "Samba-rock backbeat", cavaquinho: "Cavaquinho upstrokes", bass: "Low anchor", surdo: "Samba-rock bass drum", pandeiro: "Samba-rock pandeiro backbeat", tamborim: 'Samba-rock tamborim fills', agogo: 'Agogô backbeat accents' },
      solo: { guitar: "Samba-rock backbeat", cavaquinho: "Cavaquinho upstrokes", bass: "Low anchor", surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat', tamborim: "Samba-rock tamborim fills", agogo: 'Agogô backbeat accents' },
      outro: { agogo: 'Agogô turnaround reply' } } },
  'persian::contemporary-persian-chamber': {
    note: 'Contemporary Persian chamber study: open with exposed kamancheh, bring in the setar as a distinct dialogue voice, then add the held string bed and cello for the build. The return thins again so long modal phrases and their rests stay audible.',
    sectionInstruments: {
      opening: ['kamancheh'],
      lament: ['kamancheh','cello'],
      dialogue: ['kamancheh','setar'],
      build: ['kamancheh','setar','string-ensemble','cello'],
      climax: ['kamancheh','setar','string-ensemble','cello'],
      release: ['kamancheh','setar','cello'],
      dissolve: ['kamancheh'] },
    patternAssignments: {
      opening: { kamancheh: 'Kamancheh lament' },
      lament: { kamancheh: 'Kamancheh lament', cello: 'Cello pedal' },
      dialogue: { kamancheh: 'Kamancheh lament', setar: 'Setar dialogue' },
      build: { kamancheh: 'Kamancheh lament', setar: "Setar dialogue", 'string-ensemble': 'String swell', cello: 'Cello pedal' },
      climax: { kamancheh: 'Kamancheh lament', setar: "Setar dialogue", 'string-ensemble': 'String swell', cello: 'Cello pedal' },
      release: { kamancheh: 'Kamancheh return', setar: "Setar dialogue", cello: 'Cello pedal' },
      dissolve: { kamancheh: 'Kamancheh return' } },
    lockPatternAssignments: {
      dialogue: ['kamancheh','setar'],
      release: ['kamancheh'],
      dissolve: ['kamancheh'] } },
  'qawwali::contemporary-fusion': {
    sectionInstruments: {
      opening: ['synth'],
      verse: ['voice','synth'],
      response: ['voice','synth'],
      cadence: ['voice','synth'] },
    patternAssignments: {
      opening: { synth: 'Drone bed' },
      verse: { voice: 'Melisma line', synth: 'Drone bed' },
      'verse#2': { voice: "Contemporary Fusion Vocal" },
      response: { voice: "Contemporary Fusion Vocal", synth: 'Keyboard lift' },
      cadence: { voice: 'Melisma line', synth: 'Drone bed' } } } };
for (const [key, changes] of Object.entries(SAMPLE_PATTERN_ASSIGNMENTS)) {
  const arrangement = RECORDING_ARRANGEMENTS[key];
  if (!arrangement) throw new Error(`Missing sample arrangement for section pattern assignments: ${key}`);
  RECORDING_ARRANGEMENTS[key] = {
    ...arrangement,
    ...(changes.instruments ? { instruments: changes.instruments } : {}),
    ...(changes.lead ? { lead: changes.lead } : {}),
    ...(changes.sectionLeads ? { sectionLeads: { ...arrangement.sectionLeads, ...changes.sectionLeads } } : {}),
    ...(changes.sectionInstruments ? { sectionInstruments: { ...arrangement.sectionInstruments, ...changes.sectionInstruments } } : {}),
    ...(changes.solos ? { solos: { ...arrangement.solos, ...changes.solos } } : {}),
    ...(changes.soloModes ? { soloModes: { ...arrangement.soloModes, ...changes.soloModes } } : {}),
    ...(changes.patternAssignments ? { patternAssignments: { ...arrangement.patternAssignments, ...changes.patternAssignments } } : {}),
    ...(changes.lockPatternAssignments ? { lockPatternAssignments: { ...arrangement.lockPatternAssignments, ...changes.lockPatternAssignments } } : {}),
    ...(changes.sectionBpm ? { sectionBpm: { ...arrangement.sectionBpm, ...changes.sectionBpm } } : {}),
    ...(changes.note ? { note: changes.note } : {}),
    ...(changes.source ? { source: changes.source } : {}) };
}

// A style may offer a voice part without every example song using it. The
// authored arrangement note is the cue for samples whose source description
// explicitly calls for vocals; place that part only in sung form sections.
// Structured voice assignments above take precedence, and explicit
// instrumental notes (for example the bossa score) never acquire a voice.
const VOCAL_CUE = /\b(?:vocal(?:s|ist|ly)?|voice|singer|singing|lyric(?:s|-centered)?|chant|choir|rap(?:ping)?|spoken|cante|coro|soneo|melisma|throat singing|overtone singing)\b/i;
const INSTRUMENTAL_CUE = /\b(?:instrumental|omit(?:s|ted)?|without|no)\b.{0,45}\b(?:voice|vocal|vowel|sing(?:er|ing)?)\b|\b(?:voice|vocal|vowel)\b.{0,45}\b(?:omitted|absent|without)\b/i;
const VOCAL_FORM_SECTION = /^(?:verse|pre-?chorus|chorus|refrain|stanza|response|call|coro|soneo|hook|chant|aria|recitative|nom-tom|dhrupad|gusheh|return|lead-adlib|jinyangjo|jungmori|jungjungmori|jajinmori|a|b|c)$/i;
function hasStructuredVoice(recording: RecordingArrangement): boolean {
  return recording.instruments?.includes('voice') === true
    || recording.lead === 'voice'
    || Object.values(recording.sectionInstruments ?? {}).some(instruments => instruments.includes('voice'))
    || Object.values(recording.solos ?? {}).includes('voice')
    || Object.values(recording.patternAssignments ?? {}).some(assignments => Object.keys(assignments).some(target => target === 'voice' || target.startsWith('voice:')))
    || Object.values(recording.lockPatternAssignments ?? {}).some(assignments => assignments.some(target => target === 'voice' || target.startsWith('voice:')));
}
for (const recording of Object.values(RECORDING_ARRANGEMENTS)) {
  if (hasStructuredVoice(recording) || !VOCAL_CUE.test(recording.note) || INSTRUMENTAL_CUE.test(recording.note)) continue;
  const sections = [...new Set(parseRecordingForm(recording.form).map(section => section.kind)
    .filter(kind => VOCAL_FORM_SECTION.test(kind)))];
  // Bulerías' compás is where cante returns after the guitar falseta; llamada
  // and remate remain instrumental cues.
  if (/cante to return/i.test(recording.note)) sections.push('compas');
  if (sections.length) recording.vocalSections = [...new Set(sections)];
}

// Free cante and exposed guitar studies retain their written personnel. The
// eight-player teaching roster is available to the editor, but enabling it is
// an arrangement choice; it must not inject a metronomic band into free cante.
for (const style of ['tonas-martinetes', 'taranta', 'granaina', 'malaguena']) {
  const recording = RECORDING_ARRANGEMENTS[`flamenco::${style}`];
  recording.activateTeachingSupport = false;
  recording.instruments ??= style === 'tonas-martinetes' ? ['voice'] : style === 'taranta' ? ['guitar'] : ['voice','guitar'];
}

// Kizomba's rhythm section has a written two-bar pocket, rather than the
// inherited rock backbeat. Place the developed pickup only on returning
// phrases and keep the sparse electronic breaks genuinely sparse.
const KIZOMBA_GUITAR_COMP: Record<string,string> = {
  traditional:'Traditional guitar chords', 'semba-derived':'Semba guitar dance',
  passada:'Passada guitar comp', tarraxinha:'Tarraxinha guitar chops',
  'urban-kiz':'Urban guitar chops', 'ghetto-zouk-crossover':'Ghetto guitar chops',
  'fusion-kiz':'Fusion guitar comp',
};
const KIZOMBA_CLOSES: Record<string,[string,string]> = {
  traditional:['Guitar phrase close','Synth chord tail'], 'semba-derived':['Semba guitar tag','Semba key tag'],
  passada:['Passada guitar release','Passada reply close'], tarraxinha:['Tarraxinha release','Tarraxinha pad tail'],
  'urban-kiz':['Urban guitar cut','Urban hook pickup'],
  'ghetto-zouk-crossover':['Ghetto guitar tag','Ghetto hook close'], 'fusion-kiz':['Fusion guitar tag','Fusion synth pickup'],
};
const KIZOMBA_SYNTH_COMP: Record<string,string> = {
  traditional:'Soft synth bed', 'semba-derived':'Semba key replies', passada:'Passada synth reply',
  tarraxinha:'Tarraxinha synth pad', 'urban-kiz':'Urban synth hook',
  'ghetto-zouk-crossover':'Ghetto synth answer', 'fusion-kiz':'Fusion synth reply',
};
for (const [style, guitarComp] of Object.entries(KIZOMBA_GUITAR_COMP)) {
  const recording=RECORDING_ARRANGEMENTS[`kizomba::${style}`];
  const occurrences=new Map<string,number>();
  for (const section of parseRecordingForm(recording.form)) {
    const occurrence=(occurrences.get(section.kind)??0)+1;
    occurrences.set(section.kind,occurrence);
    const key=`${section.kind}#${occurrence}`;
    recording.patternAssignments ??= {};
    recording.patternAssignments[key]={
      ...recording.patternAssignments[section.kind],
      ...recording.patternAssignments[key],
      bass:occurrence>1?'Bass return':'Bass pickup',
      drums:occurrence>1?'Drum pickup':'Dance pocket',
      dikanza:'Dikanza weave',
      synth:KIZOMBA_SYNTH_COMP[style],
      guitar:section.kind==='solo'||section.kind==='response'||occurrence>1&&section.kind==='verse'?'Guitar answer':guitarComp,
      ...(['outro','coda'].includes(section.kind)?{guitar:KIZOMBA_CLOSES[style][0],synth:KIZOMBA_CLOSES[style][1]}:{}),
    };
  }
  if (style==='tarraxinha') recording.sectionInstruments={...recording.sectionInstruments,
    intro:['synth'], groove:['bass','drums','dikanza'],
    hook:['guitar','synth','bass','drums','dikanza'], breakdown:['synth'], outro:['guitar','synth','bass']};
  if (style==='urban-kiz') recording.sectionInstruments={...recording.sectionInstruments,
    intro:['synth','bass'], A:['guitar','synth','bass','drums'],
    drop:['guitar','synth','bass','drums','dikanza'], break:[],
    B:['synth','bass','drums'],outro:['guitar','synth','bass']};
}

// The reprise uses a complete written phrase rather than a shifted motif drill.
RECORDING_ARRANGEMENTS['tango::pugliese'].patternAssignments!['tema-reprise'] = {
  ...RECORDING_ARRANGEMENTS['tango::pugliese'].patternAssignments!['tema-reprise'],
  bandoneon: 'Bandoneon theme return',
};
