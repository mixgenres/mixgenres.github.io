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
    verse: { piano: 'PR piano montuno', tres: 'Cuban Tres variation' },
    chorus: { piano: 'Piano variation', tres: 'Cuban Tres variation' },
    coro: { piano: 'PR piano montuno', tres: 'PR tres reply' },
    mambo: { piano: 'Piano variation', tres: 'Cuban Tres variation' },
    soneo: { piano: 'Piano variation', tres: 'Cuban Tres variation' },
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
        taqsim: { ney: 'Ney breath-phrase' },
        intro: {
          ney: 'Ney statement', violin: 'Violin statement',
          oud: 'Oud accompaniment', qanun: 'Qanun accompaniment', riq: 'Riq pulse' },
        verse: {
          ney: 'Ney variation', violin: 'Violin variation', oud: 'Oud variation',
          qanun: 'Qanun variation', riq: 'riq variation' },
        response: {
          ney: 'Ney answering ornament', violin: 'Violin maqam response',
          oud: 'Oud instrumental answer', qanun: 'Qanun comping', riq: 'Riq pulse' },
        solo: {
          ney: 'Ney phrase', violin: 'Violin maqam response',
          oud: 'Oud instrumental answer', qanun: 'Qanun comping', riq: 'Riq pulse' },
        refrain: {
          ney: 'Ney variation', violin: 'Violin maqam response',
          oud: 'Oud comping', qanun: 'Qanun comping', riq: 'riq variation' },
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
        trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation',
        piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation',
        timbales: 'Timbales variation', claves: 'Claves variation' } }, lockPatternAssignments: { bloque: ['trumpet','trombone','piano','bass','congas','timbales','claves'] } }),
  'salsa::salsa-jazz': song(108, 'intro:16:2,A:32:3,montuno:32:4,solo:64:4,mambo:32:5,montuno:64:5,cierre:8:3', 'Extended piano feature and harmonically active instrumental development.', undefined, { solos: { solo: 'piano' }, patternAssignments: {
    intro: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    A: { piano: 'Piano variation', tres: 'Cuban Tres variation' },
    montuno: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    solo: { piano: 'Piano variation', tres: 'Cuban Tres variation' },
    mambo: { piano: 'Jazz chord comp', tres: 'Jazz tres line' },
    cierre: { piano: 'Jazz piano close', tres: 'Jazz tres close' } } }),
  'reggaeton::classic': song(96, 'intro:8:2,chorus:8:4,verse:16:3,chorus:8:4,verse:16:3,bridge:8:2,chorus:16:5,outro:8:3', 'Dembow hook entry, rap verses and repeated closing hook.'),
  'reggaeton::melodic': song(128, popForm, 'Straight disco/synth-pop pulse of this specific crossover recording; the existing melodic style patterns remain in use.'),
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
        intro: { guitar: 'Guitar basics', bass: 'Low anchor', shekere: 'Shekere basics' },
        groove: { guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': 'Talking-drum pulse', shekere: 'Shekere pulse', drums: 'Drum kit basics' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': 'Talking-drum pulse', shekere: 'Shekere pulse', drums: 'Drum kit basics' },
        response: { guitar: 'Guitar reply', bass: 'Bass reply', 'talking-drum': 'Talking Drum reply', shekere: 'Shekere pulse', drums: 'Drum kit basics' },
        'talking-drum': { guitar: 'Guitar accompaniment', bass: 'Low anchor', 'talking-drum': 'Talking Drum variation', shekere: 'Shekere basics', drums: 'Drum kit basics' },
        'verse-return': { voice: 'Vocal variation', guitar: 'Guitar variation', bass: 'Bass variation', 'talking-drum': 'Talking Drum reply', shekere: 'Shekere variation', drums: 'Drum kit variation' },
        'response-return': { guitar: 'Guitar variation', bass: 'Bass variation', 'talking-drum': 'Talking Drum variation', shekere: 'Shekere roll', drums: 'Drum kit reply' },
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
        intro: { guitar: 'Guitar basics', bass: 'Low anchor', drums: 'Drum kit basics', cowbell: 'Cowbell pulse', congas: 'Congas basics' },
        head: { trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: 'Kit', cowbell: 'Cowbell variation', congas: 'Congas pulse' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: 'Kit', cowbell: 'Cowbell pulse', congas: 'Congas pulse' },
        chorus: { trumpet: 'Bb Trumpet reply', guitar: 'Guitar reply', bass: 'Bass variation', drums: 'Drum kit reply', cowbell: 'Cowbell variation', congas: 'Congas variation' },
        'verse-return': { voice: 'Vocal variation', guitar: 'Guitar variation', bass: 'Bass reply', drums: 'Drum kit variation', cowbell: 'Cowbell pulse', congas: 'Congas reply' },
        'trumpet-feature': { trumpet: 'Bb Trumpet variation', guitar: 'Guitar accompaniment', bass: 'Bass variation', drums: 'Drum kit variation', cowbell: 'Cowbell pulse', congas: 'Congas variation' },
        'chorus-last': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', guitar: 'Guitar accent', bass: 'Bass accent', drums: 'Drum kit accent', cowbell: 'Cowbell variation', congas: 'Congas slap-tapao' },
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
        intro: { guitar: 'Guitar basics', shaker: 'Shaker basics' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', shaker: 'Shaker pulse' },
        response: { guitar: 'Guitar reply', shaker: 'Shaker reply' },
        'verse-return': { voice: 'Vocal variation', guitar: 'Guitar variation', shaker: 'Shaker variation' },
        'guitar-feature': { guitar: 'Guitar variation', shaker: 'Shaker pulse' },
        'response-return': { guitar: 'Guitar reply', shaker: 'Shaker roll' },
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
        intro: { guitar: 'Guitar short-chord-stab', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Drum kit basics', congas: 'Congas basics', shekere: 'Shekere basics' },
        groove: { guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass variation', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        head: { trumpet: 'Bb Trumpet staccato', 'tenor-sax': 'Tenor Saxophone tenuto', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        solo: { trumpet: 'Bb Trumpet variation', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        verse: { voice: 'Voice statement', guitar: 'Guitar short-chord-stab', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        coro: { voice: 'Vocal variation', trumpet: 'Bb Trumpet reply', 'tenor-sax': 'Tenor Saxophone reply', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        'verse-return': { voice: 'Vocal reply', guitar: 'Guitar variation', organ: 'Organ accompaniment', bass: 'Bass reply', drums: 'Drum kit ghost', congas: 'Congas ghost', shekere: 'Shekere variation' },
        'coro-last': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', 'tenor-sax': 'Tenor Saxophone variation', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass accent', drums: 'Drum kit accent', congas: 'Congas slap-tapao', shekere: 'Shekere roll' },
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
        intro: { rhodes: 'Rhodes comping', bass: 'Low anchor', drums: 'Drum kit basics', congas: 'Congas basics', shekere: 'Shekere basics' },
        groove: { rhodes: 'Rhodes comping', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', rhodes: 'Rhodes comping', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        'sax-trading': { 'tenor-sax': 'Tenor Saxophone variation', rhodes: 'Rhodes phrase answer', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        break: { rhodes: 'Rhodes phrase answer', guitar: 'Guitar basics', bass: 'Bass reply', drums: 'Drum kit basics' },
        'trumpet-trading': { trumpet: 'Bb Trumpet variation', rhodes: 'Rhodes phrase answer', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        outro: { rhodes: 'Rhodes phrase answer', } } }),
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
        intro: { bass: 'Low anchor', drums: 'Drum kit basics', shekere: 'Shekere basics' },
        riff: { guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', organ: 'Organ accompaniment', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere pulse' },
        chorus: { voice: 'Vocal variation', trumpet: 'Bb Trumpet reply', 'tenor-sax': 'Tenor Saxophone reply', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        solo: { 'tenor-sax': 'Tenor Saxophone variation', guitar: 'Guitar accompaniment', organ: 'Tonewheel organ accent', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere pulse' },
        'verse-return': { voice: 'Vocal reply', guitar: 'Guitar variation', organ: 'Tonewheel organ reply', bass: 'Bass reply', drums: 'Drum kit ghost', congas: 'Congas ghost', shekere: 'Shekere variation' },
        'chorus-last': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', 'tenor-sax': 'Tenor Saxophone variation', guitar: 'Guitar short-chord-stab', organ: 'Tonewheel organ accent', bass: 'Bass accent', drums: 'Drum kit accent', congas: 'Congas slap-tapao', shekere: 'Shekere roll' },
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
  'indian-classical::dhrupad': song(48, 'alap:64:1,jor:48:2,nom-tom:32:3,dhrupad:64:3,cadence:8:1', 'Drone persists through unmetered voice development; pakhawaj enters only with the composition.'),
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
      return: { voice: 'Kargyraa low variation', 'morin-khuur': 'morin khuur reply' },
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
const bachataUrbanInstrumentalParts = ['requinto','guitar','synth','bongos','guira','drums'];
const bachataInstrumentalSections = (parts: string[], ...sections: string[]) =>
  Object.fromEntries(sections.map(section => [section, parts]));
const SAMPLE_PATTERN_ASSIGNMENTS: Record<string, Partial<Pick<RecordingArrangement, 'instruments' | 'lead' | 'sectionLeads' | 'patternAssignments' | 'sectionInstruments' | 'solos' | 'soloModes' | 'lockPatternAssignments' | 'sectionBpm' | 'note' | 'source'>>> = {
  'folk::old-time': {
    note: 'Old-Time teaching score: keep the fiddle tune and open-string drone forward, give the banjo its clawhammer bum-ditty, and let guitar chops answer the bass on beats two and four. Alternate source-based banjo and guitar variations between strains; this is a playable study, not a transcription.',
    patternAssignments: {
      pickup: { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar backbeat chop' },
      A: { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar backbeat chop' },
      B: { banjo: '5-String Banjo variation', guitar: 'Guitar backbeat chop' },
      'A#2': { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar variation' },
      'B#2': { banjo: '5-String Banjo variation', guitar: 'Guitar backbeat chop' },
      'A#3': { banjo: 'Clawhammer bum-ditty', guitar: 'Guitar variation' },
      'B#3': { banjo: '5-String Banjo variation', guitar: 'Guitar backbeat chop' },
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
      refrain: { banjo: '5-String Banjo variation', guitar: 'Alternating-bass guitar' },
      solo: { banjo: '5-String Banjo variation', guitar: 'Alternating-bass guitar' },
      'verse#2': { banjo: '5-String Banjo variation', guitar: 'Guitar variation' },
      'refrain#2': { banjo: 'Banjo modal roll', guitar: 'Alternating-bass guitar' },
      'solo#2': { banjo: '5-String Banjo reply', guitar: 'Alternating-bass guitar' },
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
      B: { guitar: 'Guitar variation' },
      'A#2': { guitar: 'Guitar accompaniment' },
      solo: { guitar: 'Guitar reply' },
      'A#3': { guitar: 'Guitar variation' },
      coda: { guitar: 'Guitar accompaniment' },
    },
    lockPatternAssignments: {
      intro: ['guitar'], 'A#1': ['guitar'], B: ['guitar'], 'A#2': ['guitar'],
      solo: ['guitar'], 'A#3': ['guitar'], coda: ['guitar'],
    },
  },
  'arabic::instrumental-maqam': {
    patternAssignments: {
      exploration: { oud: 'Oud variation' },
      'upper-register': { oud: 'Oud reply' },
      modulation: { oud: 'Oud variation' },
      return: { oud: 'Oud reply' } } },
  'indian-classical::dhrupad': {
    patternAssignments: {
      jor: { 'rudra-veena': 'rudra veena variation' },
      'nom-tom': { 'rudra-veena': 'rudra veena reply' },
      dhrupad: { 'rudra-veena': 'rudra veena variation' },
      cadence: { 'rudra-veena': 'rudra veena reply' } } },
  'korean::pansori': {
    patternAssignments: {
      jinyangjo: { voice: 'Pansori Vocal' },
      'narration#2': { voice: 'Vocal reply' },
      jungmori: { voice: 'Vocal variation' },
      jungjungmori: { voice: 'Vocal reply' },
      jajinmori: { voice: 'Vocal variation' },
      cadence: { voice: 'Vocal reply' } } },
  'korean::samulnori': {
    patternAssignments: {
      opening: { gongs: 'Gongs basics' },
      youngnam: { gongs: 'Gongs groove' },
      honam: { gongs: 'Gongs variation' },
      jungbu: { gongs: 'Gongs reply' },
      exchange: { gongs: 'Gongs variation' },
      climax: { gongs: 'Gongs roll' },
      cadence: { gongs: 'Gongs basics' } } },
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
      response: { tar: 'Tar reply', santur: 'santur reply', tombak: 'tombak reply' },
      'verse#2': { voice: 'Vocal variation' },
      solo: { tar: 'Tar chaharmezrab' },
      'verse#3': { tar: 'Tar Phrase', santur: 'santur variation', tombak: 'tombak variation' },
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
      development: { tar: 'Tar gushe phrase', santur: 'Santur variation', tombak: 'tombak variation' },
      'theme#2': { tar: 'Measured opening', santur: 'Santur Answer', tombak: 'tombak reply' },
      coda: { tar: 'Tar forud', santur: 'Santur reply', tombak: 'Tombak measured cycle' } },
    lockPatternAssignments: {
      prelude: ['tar','santur','tombak'], theme: ['tar','santur','tombak'], solo: ['tar'],
      development: ['tar','santur','tombak'], 'theme#2': ['tar','santur','tombak'], coda: ['tar','santur','tombak'] } },
  'persian::avaz-e-dashti': {
    patternAssignments: {
      verse: { voice: 'Vocal variation' },
      response: { voice: 'Vocal reply' },
      gusheh: { voice: 'Vocal variation' },
      return: { voice: 'Vocal reply' },
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
      intro: { drums: 'Drum kit basics', shaker: 'Shaker basics' },
      'bass-entry': { 'synth:bass': 'Synthesizer basics', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      chords: { 'synth:lead': 'Synthesizer reply', rhodes: 'Electric Piano variation', 'synth:bass': 'Synthesizer variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      breakdown: { rhodes: 'Electric Piano reply' },
      variation: { 'synth:lead': 'Synthesizer variation', rhodes: 'Rhodes accompaniment', 'synth:bass': 'Synthesizer reply', drums: 'Drum kit variation', shaker: 'Shaker reply' },
      outro: { drums: 'Drum kit basics', shaker: 'Shaker basics' } } },
  'bollywood::disco-bollywood': {
    note: 'Bollywood disco arrangement study: establish kick, clap and octave bass, leave the verse comparatively lean, then widen the refrain with synth answers and string stabs. The instrumental passage varies the hook before the rhythm section strips back for the close.',
    sectionInstruments: {
      intro: ['guitar','bass','drums'],
      verse: ['voice','guitar','bass','drums'],
      chorus: ['voice','guitar','string-ensemble','synth','bass','drums'],
      solo: ['guitar','string-ensemble','synth','bass','drums'],
      outro: ['guitar','bass','drums'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: 'Drum kit basics' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: 'Four-on-floor backbeat' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', 'string-ensemble': 'Disco string stabs', synth: 'Disco synth answer', bass: 'Disco octave bass', drums: 'Four-on-floor backbeat' },
      solo: { guitar: 'Guitar variation', 'string-ensemble': 'Disco string stabs', synth: 'Synthesizer variation', bass: 'Disco octave bass', drums: 'Four-on-floor backbeat' },
      outro: { guitar: 'Guitar accompaniment', bass: 'Disco octave bass', drums: 'Drum kit basics' } } },
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
      intro: { 'synth:harmony': 'Synth hook', drums: 'Drum kit basics' },
      hook: { voice: 'Voice statement', 'synth:harmony': 'Synth hook', bass: 'Low anchor', drums: 'Kit' },
      verse: { voice: 'Vocal reply', 'synth:harmony': 'Synthesizer reply', bass: 'Bass basics', drums: 'Drum kit ghost' },
      chorus: { voice: 'Vocal variation', 'synth:harmony': 'Synthesizer variation', bass: 'Bass variation', drums: 'Drum kit variation' },
      breakdown: { 'synth:harmony': 'Synthesizer reply' },
      build: { 'synth:harmony': 'Synthesizer variation', bass: 'Bass reply', drums: 'Drum kit roll' },
      outro: { 'synth:harmony': 'Synthesizer reply', drums: 'Drum kit basics' } } },
  'jazz::big-band': {
    note: 'Big Band teaching arrangement: give piano a clear feature over the walking rhythm section, pass to an alto/tenor sax phrase exchange, then feature trumpet before the full horn section returns for the shout chorus and theme tag. These are section-role studies, not a transcription.',
    solos: { piano: 'piano', trumpet: 'trumpet' },
    sectionInstruments: {
      piano: ['piano','guitar','upright-bass','drums'],
      sax: ['alto-sax','tenor-sax','piano','guitar','upright-bass','drums'],
      trumpet: ['trumpet','piano','guitar','upright-bass','drums'] },
    patternAssignments: {
      piano: { piano: 'Piano variation', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: 'Drum kit variation' },
      sax: { 'alto-sax': 'Alto-sax statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      trumpet: { trumpet: 'Bb Trumpet variation', piano: 'Piano answer', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: 'Drum kit variation' },
      shout: { trumpet: 'Trumpet statement', trombone: 'Trombone staccato', 'alto-sax': 'Alto Saxophone variation', 'tenor-sax': 'Tenor Saxophone variation', piano: 'Piano answer', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor', drums: 'Drum kit variation' } },
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
      dawn: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute' },
      sea: { violin: 'Violin variation', flute: 'Concert Flute variation' },
      noon: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute' },
      waves: { violin: 'Violin variation', flute: 'Concert Flute variation' },
      dialogue: { violin: 'Violin reply', flute: 'Concert Flute reply' },
      storm: { violin: 'Violin variation', flute: 'Concert Flute variation' },
      coda: { violin: 'Impressionist Violin', flute: 'Impressionist Concert Flute' } },
    lockPatternAssignments: {
      dawn: ['violin','flute'], sea: ['violin','flute'], noon: ['violin','flute'],
      waves: ['violin','flute'], dialogue: ['violin','flute'], storm: ['violin','flute'], coda: ['violin','flute'] } },
  'bass::drum-bass': {
    note: 'Drum & Bass study: bring the break in through the DJ intro, build tension with a rolling snare pickup, and make the drop hit with a firmer two-step kick/snare shape. The breakdown strips back to sub and atmosphere before the last drop; sections use the style’s existing role cells.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      verse: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      build: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer reply', 'synth:bass': 'Synthesizer legato', 'drums:percussion': 'Drum kit roll', 'sampler:percussion': 'Sampler variation' },
      drop: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::jungle': {
    note: 'Jungle study: teach a chopped break against the syncopated sub, leave the break passage exposed, then bring the sampled hook back over the full rhythm section. The short fills set up phrase returns; no extra instrument part is invented for the song.',
    sectionInstruments: { intro: ['synth','drums','sampler'], break: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      chant: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler reply' },
      drop: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer reply', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler variation' },
      break: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::liquid': {
    note: 'Liquid study: keep the sub and broken drums grounded while the sustained harmony opens into a brighter melodic reply. The breakdown removes the main break so the return feels wide and lifted, then the final drop resolves into a light DJ outro.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      theme: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      build: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit roll', 'sampler:percussion': 'Sampler variation' },
      drop: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer reply', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::neurofunk': {
    note: 'Neurofunk study: contrast clipped, modulated bass attacks with a tight rolling break. Pull the kick-and-snare weight back for the breakdown, use a short snare roll to build pressure, then return with a denser bass variation and a sharp final fill.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      build: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit roll', 'sampler:percussion': 'Sampler variation' },
      drop: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synthesizer reply', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit accent', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      variation: { 'synth:lead': 'Synthesizer bend', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler variation' },
      outro: { } } },
  'bass::uk-garage': {
    note: 'UK Garage study: make the shuffled kick and clipped chord stabs bounce around the bassline. Trade a thinner A section for a fuller B section, open the breakdown, then return to the bass-and-vocal-hook groove with busier drum replies.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      A: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      B: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer legato', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::2-step': {
    note: '2-Step study: let the kick skip around a clear backbeat while the sub stays simple. Keep the verse’s ghosted shuffle lean, thicken the chorus with brighter chord and drum replies, then drop back to a sparse break before the last chorus.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      verse: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      chorus: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::dubstep': {
    note: 'Dubstep study: place the half-time snare in a wide, heavy drop, then use a contrasting bass phrase and filtered transition. The breakdown strips to sub and atmosphere; the second drop restores the chesty kick, snare, and bass together.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      theme: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      drop: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit accent', 'sampler:percussion': 'Sampler reply' },
      variation: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer reply', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler variation' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::grime': {
    note: 'Grime study: keep the square-wave bass hook blunt and exposed under the vocal-sized gaps. The verse holds its sparse drum frame, the hook adds a clipped synth answer, and the break drops out before a heavier final hook; there is no continuous choir pad.',
    sectionInstruments: { intro: ['synth','drums','sampler'], break: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      hook: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit accent', 'sampler:percussion': 'Sampler reply' },
      verse: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      break: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      outro: { } } },
  'bass::future-garage': {
    note: 'Future Garage study: keep the beat late and ghosted, with a deep sub under broken chord fragments. The A/B changes come from air, pitch-bent replies, and a different drum density; the breakdown and dissolve leave the reverb tail room to speak.',
    sectionInstruments: { opening: ['synth','drums','sampler'], breakdown: ['synth','sampler'], dissolve: ['synth','sampler'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synthesizer legato', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler pulse' },
      A: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit ghost', 'sampler:percussion': 'Sampler basics' },
      B: { 'synth:lead': 'Synthesizer bend', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer legato', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer legato', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      dissolve: { } } },
  'bass::breakbeat': {
    note: 'Breakbeat study: make the sampled kick-and-snare break the hook, then alternate it with a more open groove. Use sampler replies at the phrase edges, raise drum density through the build, and leave an instrumental breakdown before the full beat returns.',
    sectionInstruments: { intro: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','drums','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'drums:percussion': 'Drum kit basics', 'sampler:percussion': 'Sampler pulse' },
      groove: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer variation', 'drums:percussion': 'Drum kit variation', 'sampler:percussion': 'Sampler basics' },
      hook: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer bend', 'drums:percussion': 'Drum kit accent', 'sampler:percussion': 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth accompaniment', 'synth:bass': 'Low anchor', 'sampler:percussion': 'Sampler staccato' },
      build: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer accent', 'synth:bass': 'Synthesizer legato', 'drums:percussion': 'Drum kit roll', 'sampler:percussion': 'Sampler variation' },
      outro: { } } },
  'metal::heavy-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Guitar power-chord', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      riff: { 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': 'Gallop riff', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      bridge: { 'guitar:lead': 'Guitar reply', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Bass reply', 'drums:percussion': 'Drum kit variation' },
      solo: { 'guitar:lead': 'Guitar bend', 'guitar:harmony': 'Twin-lead harmony', 'bass:bass': 'Gallop bass', 'drums:percussion': 'Ride backbeat' },
      outro: { } } },
  'metal::thrash': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      breakdown: { 'guitar:lead': 'Palm-muted chug', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Low anchor', 'drums:percussion': 'Half-time break' },
      solo: { 'guitar:lead': 'Guitar variation', 'guitar:harmony': 'Power-chord accents', 'bass:bass': 'Thrash bass pulse', 'drums:percussion': 'Skank beat' },
      coda: { } } },
  'metal::doom': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': 'Doom power chord', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      bridge: { 'guitar:lead': 'Guitar reply', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      solo: { 'guitar:lead': 'Guitar vibrato', 'guitar:harmony': 'Sustained answer', 'bass:bass': 'Doom bass weight', 'drums:percussion': 'Half-time doom' },
      outro: { } } },
  'metal::death': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      riff: { 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      verse: { 'voice:lead': 'Vocal staccato', 'guitar:lead': 'Tremolo riff', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      chorus: { 'voice:lead': 'Vocal accent', 'guitar:lead': 'Guitar variation', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Bass variation', 'drums:percussion': 'Blast beat' },
      breakdown: { 'guitar:lead': 'Guitar staccato', 'guitar:harmony': 'Guitar accompaniment', 'bass:bass': 'Low pedal', 'drums:percussion': 'Death half-time' },
      solo: { 'guitar:lead': 'Guitar variation', 'guitar:harmony': 'Chromatic support', 'bass:bass': 'Low pedal', 'drums:percussion': 'Blast beat' },
      coda: { } } },
  'metal::black': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal' },
      riff: { 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      verse: { 'voice:lead': 'Vocal staccato', 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': 'Tremolo wall', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal', 'drums:percussion': 'Cymbal blast' },
      breakdown: { 'guitar:lead': 'Guitar variation', 'guitar:harmony': 'Frost chord bed', 'bass:bass': 'Black bass pedal' },
      outro: { } } },
  'metal::progressive-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      riff: { 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': '7/8 chug', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      bridge: { 'guitar:lead': 'Guitar reply', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': 'Drum kit variation' },
      build: { 'guitar:lead': 'Guitar variation', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': 'Drum kit roll' },
      climax: { 'guitar:lead': 'Guitar variation', 'guitar:harmony': '7/8 chord groups', 'bass:bass': '7/8 bass accents', 'drums:percussion': '7/8 drum map' },
      outro: { } } },
  'metal::industrial-metal': {
    patternAssignments: {
      intro: { 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      riff: { 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      verse: { 'voice:lead': 'Voice statement', 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
      chorus: { 'voice:lead': 'Vocal variation', 'guitar:lead': 'Machine chug', 'guitar:harmony': 'Machine stop hits', 'bass:bass': 'Machine bass pulse', 'drums:percussion': 'Mechanical stomp' },
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
      verse: { voice: 'Vocal verse phrase' },
      chorus: { voice: 'Vocal refrain lift' } } },
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
      jo: { hichiriki: 'Gagaku Hichiriki', ryuteki: 'Gagaku Ryuteki' },
      ha: { hichiriki: 'Hichiriki re-entry', ryuteki: 'Ryuteki re-entry' },
      kyu: { hichiriki: 'Hichiriki re-entry', ryuteki: 'Ryuteki re-entry' },
      cadence: { hichiriki: 'Gagaku Hichiriki', ryuteki: 'Gagaku Ryuteki' } },
    lockPatternAssignments: {
      opening: ['hichiriki','ryuteki'], jo: ['hichiriki','ryuteki'], ha: ['hichiriki','ryuteki'],
      kyu: ['hichiriki','ryuteki'], cadence: ['hichiriki','ryuteki'] } },
  'japanese::shakuhachi': {
    note: 'Shakuhachi honkyoku teaching score: leave one intentional ma after the response so its resonance can fade before the next breath-led phrase. This one-bar rest is a grid-based study of the space, not a fixed transcription of free-time timing.',
    sectionInstruments: { ma: [] },
    patternAssignments: {
      response: { shakuhachi: 'Shakuhachi reply' },
      development: { shakuhachi: 'Shakuhachi variation' },
      duet: { shakuhachi: 'Shakuhachi reply' },
      return: { shakuhachi: 'Shakuhachi variation' },
      cadence: { shakuhachi: 'Shakuhachi reply' } } },
  'chinese::guqin': {
    note: 'Guqin teaching score: move from a flowing statement through left-hand pitch shading and a more active phrase, then let the falling line settle. Return to the opening gesture before leaving a few exposed plucks and slides to decay. The final section is sparse resonance, not a full mute or a transcription.',
    patternAssignments: {
      opening: { guqin: 'Guqin phrase' },
      stream: { guqin: 'Left-hand pitch-shading response' },
      rapids: { guqin: 'Guqin variation' },
      falls: { guqin: 'Guqin reply' },
      return: { guqin: 'Guqin phrase' },
      silence: { guqin: 'Left-hand pitch-shading response' },
    },
    lockPatternAssignments: {
      opening: ['guqin'], stream: ['guqin'], rapids: ['guqin'], falls: ['guqin'],
      return: ['guqin'], silence: ['guqin'],
    },
  },
  'chinese::guzheng': {
    note: 'Guzheng teaching score: open with a localized yaozhi tremolo, expand into measured pentatonic plucks, and color selected arrivals with left-hand bends. Change the return phrase before settling on a long final tone; no Western chord backing is added.',
    patternAssignments: {
      opening: { guzheng: 'Guzheng phrase' },
      'theme#1': { guzheng: 'Lyrical bend-and-release phrase' },
      variation: { guzheng: 'Guzheng variation' },
      build: { guzheng: 'Guzheng phrase' },
      'theme#2': { guzheng: 'Guzheng reply' },
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
      march: { pipa: 'Pipa basics' },
      battle: { pipa: 'Pipa answer' },
      aftermath: { pipa: 'Pipa variation' },
      retreat: { pipa: 'Pipa reply' },
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
      'upper-register': { guitar: 'Guitar reply' },
      return: { guitar: 'Guitar variation' },
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
      'A#1': { dombra: 'dombra basics' },
      B: { dombra: 'dombra variation' },
      'A#2': { dombra: 'Dombra dombra' },
      C: { dombra: 'dombra reply' },
      'A#3': { dombra: 'dombra variation' },
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
      resonance: { sampler: 'Sampler reply' },
      feedback: { sampler: 'Sampler variation' },
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
      spectrum: { sampler: 'Sampler variation' },
      transformation: { sampler: 'Sampler reply' },
      noise: { sampler: 'Sampler variation' },
      return: { sampler: 'Upper entries' },
      decay: { synth: 'Spectrum anchor' },
    },
    lockPatternAssignments: {
      attack: ['synth','sampler'], spectrum: ['synth','sampler'], transformation: ['synth','sampler'],
      noise: ['synth','sampler'], return: ['synth','sampler'], decay: ['synth'],
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
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', organ: 'Tonewheel organ variation', bass: 'Bass variation', drums: 'One-drop drums', shaker: 'Shaker variation' },
      instrumental: { guitar: 'Guitar variation', organ: 'Low organ bubble', bass: 'Bass variation', drums: 'One-drop drums', shaker: 'Shaker variation' },
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
      A: { guitar: 'Offbeat guitar skank', organ: 'Organ 2/4 chop', bass: 'Bass variation', drums: 'One-drop drums', shaker: 'Shaker pulse' },
      breakdown: { bass: 'Bass reply', drums: 'Drum kit basics' },
      solo: { melodica: 'Melodica echo answer', organ: 'Tonewheel organ reply', bass: 'Bass variation', drums: 'One-drop drums' },
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
      response: { siku: 'Siku statement', charango: 'Charango reply', 'bombo-andino': 'Bombo andino reply' },
      interlude: { charango: 'Charango tremolo', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo andino ghost' },
      fuga: { quena: 'Quena variation', charango: 'Charango variation', guitar: 'Guitar variation', 'bombo-andino': 'Bombo andino variation' },
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
      B: { siku: 'Siku statement', charango: 'Charango variation', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo andino variation' },
      'B#1': { siku: 'siku variation' },
      'B#2': { siku: 'siku reply' },
      solo: { quena: 'Quena variation', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo andino ghost' },
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
      verse: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo andino basics' },
      chorus: { siku: 'Siku statement', charango: 'Charango variation', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo andino variation' },
      interlude: { quena: 'Quena variation', charango: 'Charango reply', 'bombo-andino': 'Bombo andino reply' },
      outro: { siku: 'siku reply' },
      'chorus#2': { siku: 'siku variation' } },
    lockPatternAssignments: { 'chorus#2': ['siku'], outro: ['siku'] } },
  'andean::tinku': {
    note: 'Heavy bombo accents frame a four-bar stomp break; the flutes and charango re-enter together for the final dance push.',
    sectionInstruments: {
      intro: ['quena','charango','bombo-andino'], A: ['quena','charango','guitar','bombo-andino'],
      B: ['siku','charango','guitar','bombo-andino'], break: ['bombo-andino'], cierre: ['quena','charango','bombo-andino'] },
    patternAssignments: {
      intro: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      A: { quena: 'Quena statement', charango: 'Charango accent', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo andino variation' },
      B: { siku: 'Siku statement', charango: 'Charango variation', guitar: 'Guitar accent', 'bombo-andino': 'Bombo andino roll' },
      'A#2': { quena: 'Quena variation' },
      'A#3': { quena: 'Quena reply' },
      'B#2': { siku: 'siku re-entry' },
      break: { 'bombo-andino': 'Bombo andino open' },
      cierre: { quena: 'Quena reply' } },
    lockPatternAssignments: { break: ['bombo-andino'], 'A#2': ['quena'], 'A#3': ['quena'], 'B#2': ['siku'], cierre: ['quena'] } },
  'andean::carnavalito': {
    note: 'Quena and siku take turns carrying the dance figure while the charango keeps the repeating ostinato in view.',
    sectionInstruments: {
      intro: ['quena','charango','bombo-andino'], A: ['quena','charango','bombo-andino'],
      B: ['siku','charango','guitar','bombo-andino'], cierre: ['quena','siku','charango','bombo-andino'] },
    patternAssignments: {
      intro: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo-andino pulse' },
      A: { quena: 'Quena statement', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo andino ghost' },
      B: { siku: 'Siku statement', charango: 'Charango variation', guitar: 'Guitar accompaniment', 'bombo-andino': 'Bombo andino variation' },
      'A#2': { quena: 'Quena variation' },
      'A#3': { quena: 'Quena reply' },
      'B#2': { siku: 'siku re-entry' },
      cierre: { quena: 'Quena reply', siku: 'siku re-entry' } },
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
      verse: { guitar: 'Guitar accompaniment', charango: 'Charango accompaniment', 'bombo-andino': 'Bombo andino ghost' },
      chorus: { quena: 'Quena statement', guitar: 'Guitar variation', charango: 'Charango variation', 'bombo-andino': 'Bombo-andino pulse' },
      bridge: { siku: 'Siku statement', guitar: 'Guitar accompaniment', charango: 'Charango reply' },
      'chorus#2': { quena: 'Quena variation' },
      'chorus#3': { quena: 'Quena reply' },
      cierre: { quena: 'Quena reply' } },
    lockPatternAssignments: { 'chorus#2': ['quena'], 'chorus#3': ['quena'], cierre: ['quena'] } },
  'andean::andean-fusion': {
    instruments: ['quena','siku','charango','bass','drums','bombo-andino','synth'],
    note: 'Electronic Andean-cumbia adaptation: add the bass and concise kit shuffle under the flutes and charango, then strip back to acoustic fragments and synth tail.',
    solos: { B: 'siku' },
    sectionInstruments: {
      opening: ['quena','synth'], A: ['quena','charango','bass','drums','bombo-andino'],
      groove: ['quena','charango','bass','drums','bombo-andino','synth'],
      B: ['siku','charango','bass','drums','bombo-andino','synth'],
      breakdown: ['charango','bombo-andino','synth'], dissolve: ['synth'] },
    lockPatternAssignments: { groove: ['bass','drums'], B: ['bass','drums'], dissolve: ['synth'] },
    patternAssignments: {
      opening: { quena: 'Quena statement', synth: 'Synth chord jab' },
      A: { quena: 'Quena statement', charango: 'Charango accompaniment', bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': 'Bombo-andino pulse' },
      groove: { quena: 'Quena variation', charango: 'Charango variation', bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': 'Bombo andino variation', synth: 'Synth chord jab' },
      B: { siku: 'Siku statement', charango: 'Charango variation', bass: 'Syncopated bass', drums: 'Kit backbeat', 'bombo-andino': 'Bombo andino variation', synth: 'Synth chord jab' },
      breakdown: { charango: 'Charango tremolo', 'bombo-andino': 'Bombo andino ghost', synth: 'Synth chord jab' },
    dissolve: { synth: 'Synth coda tail' } } },
  'ambient::atmospheric': {
    sectionInstruments: {
      opening: ['synth','piano'], A: ['synth','piano','string-ensemble'], B: ['synth','piano','string-ensemble'],
      release: ['synth','piano','string-ensemble'], dissolve: ['synth','string-ensemble'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth phrase', 'synth:harmony': 'Synth comping', piano: 'Piano answer', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String ensemble texture' },
      A: { 'synth:lead': 'Synthesizer reply', 'synth:harmony': 'Synth comping', piano: 'Piano reply', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String Ensemble reply' },
      B: { 'synth:lead': 'Synthesizer variation', 'synth:harmony': 'Synthesizer reply', piano: 'Piano variation', 'synth:texture': 'Synthesizer accent', 'string-ensemble:texture': 'String Ensemble variation' },
      release: { 'synth:lead': 'Synth phrase', 'synth:harmony': 'Synth comping', piano: 'Piano tenuto', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String Ensemble legato' },
      dissolve: { 'synth:lead': 'Synthesizer staccato', 'synth:harmony': 'Synth comping', 'synth:texture': 'Synth texture', 'string-ensemble:texture': 'String ensemble texture' } } },
  'ambient::drone': {
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      evolution: { 'synth:lead': 'Synthesizer re-entry', 'synth:texture': 'Synth accompaniment' },
      texture: { 'synth:lead': 'Synthesizer accent', 'synth:texture': 'Synth accompaniment' },
      climax: { 'synth:lead': 'Synthesizer vibrato', 'synth:texture': 'Synth accompaniment' },
      release: { 'synth:texture': 'Synth accompaniment' },
      dissolve: { 'synth:texture': 'Synth accompaniment' } } },
  'ambient::dark-ambient': {
    lockPatternAssignments: { descent: ['sampler'], ritual: ['sampler'], climax: ['sampler'] },
    sectionInstruments: {
      opening: ['synth'], descent: ['synth','sampler'], ritual: ['synth','sampler'],
      climax: ['synth','sampler'], void: ['synth'], dissolve: ['synth'] },
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      descent: { 'synth:lead': 'Synthesizer staccato', 'synth:texture': 'Synth answer', sampler: 'Ride-bell toll' },
      ritual: { 'synth:lead': 'Synthesizer reply', 'synth:texture': 'Synth accompaniment', sampler: 'China-cymbal bloom' },
      climax: { 'synth:lead': 'Synthesizer variation', 'synth:texture': 'Synth accompaniment', sampler: 'Ride-bell toll' },
      void: { 'synth:texture': 'Synth accompaniment' },
      dissolve: { 'synth:texture': 'Synth answer' } } },
  'ambient::organic-ambient': {
    sectionInstruments: {
      opening: ['guitar','string-ensemble'], theme: ['guitar','flute','string-ensemble'],
      texture: ['guitar','flute','string-ensemble'], solo: ['guitar','string-ensemble'],
      dissolve: ['guitar','string-ensemble'] },
    solos: { solo: 'guitar' },
    patternAssignments: {
      opening: { guitar: 'Guitar harmonic', 'string-ensemble': 'String-ensemble accompaniment' },
      theme: { guitar: 'Guitar statement', flute: 'Flute accompaniment', 'string-ensemble': 'String Ensemble slow-attack' },
      texture: { guitar: 'Guitar natural-harmonic', flute: 'Concert Flute tenuto', 'string-ensemble': 'String Ensemble accent' },
      solo: { guitar: 'Guitar glissando', 'string-ensemble': 'String-ensemble accompaniment' },
      dissolve: { 'string-ensemble': 'String Ensemble slow-attack' } } },
  'ambient::neo-classical-ambient': {
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' },
      A: { piano: 'Piano reply', synth: 'Held string-tail response', 'string-ensemble': 'String Ensemble reply' },
      B: { piano: 'Piano variation', synth: 'Synthesizer variation', 'string-ensemble': 'String Ensemble variation' },
      build: { piano: 'Piano accent', synth: 'Synthesizer variation', 'string-ensemble': 'String Ensemble accent' },
      release: { piano: 'Piano tenuto', synth: 'Held string-tail response', 'string-ensemble': 'String Ensemble variation' },
      dissolve: { synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' } } },
  'ambient::glitch-ambient': {
    sectionInstruments: {
      opening: ['piano','synth'], fragments: ['piano','synth','sampler'], loop: ['piano','synth','sampler'],
      rupture: ['synth','sampler'], dissolve: ['piano','synth'] },
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment' },
      fragments: { piano: 'Piano staccato', synth: 'Synthesizer reply', sampler: 'Sampler reply' },
      loop: { piano: 'Piano variation', synth: 'Synth texture', sampler: 'Sampler variation' },
      rupture: { synth: 'Synthesizer accent', sampler: 'Sampler basics' },
      dissolve: { piano: 'Piano tenuto', synth: 'Synth accompaniment' } } },
  'ambient::generative-ambient': {
    patternAssignments: {
      opening: { 'synth:lead': 'Synth statement', 'synth:texture': 'Synth accompaniment' },
      evolution: { 'synth:lead': 'Synthesizer variation', 'synth:texture': 'Synth accompaniment' },
      'texture-shift': { 'synth:lead': 'Synthesizer reply', 'synth:texture': 'Synthesizer accent' },
      dissolve: { 'synth:texture': 'Synth accompaniment' } } },
  'ambient::cinematic-ambient': {
    patternAssignments: {
      opening: { piano: 'Piano statement', synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' },
      theme: { piano: 'Piano re-entry', synth: 'Synth swell', 'string-ensemble': 'String ensemble swell' },
      build: { piano: 'Piano accent', synth: 'Synthesizer variation', 'string-ensemble': 'String Ensemble variation' },
      climax: { piano: 'Piano accent', synth: 'Synth swell', 'string-ensemble': 'String Ensemble accent' },
      release: { piano: 'Piano tenuto', synth: 'Synthesizer reply', 'string-ensemble': 'String ensemble swell' },
      dissolve: { synth: 'Synth accompaniment', 'string-ensemble': 'String-ensemble accompaniment' } } },
  'ambient::downtempo-ambient': {
    sectionInstruments: {
      intro: ['piano','rhodes','synth'], theme: ['piano','rhodes','synth','drums'],
      groove: ['piano','rhodes','synth','drums'], B: ['piano','rhodes','synth','drums'],
      breakdown: ['piano','rhodes','synth'], outro: ['piano','rhodes','synth'] },
    patternAssignments: {
      intro: { piano: 'Piano statement', rhodes: 'Rhodes accompaniment', 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' },
      theme: { piano: 'Piano reply', rhodes: 'Electric Piano variation', 'synth:bass': 'Low anchor', drums: 'Drum kit basics', 'synth:texture': 'Synthesizer reply' },
      groove: { piano: 'Piano variation', rhodes: 'Electric Piano legato', 'synth:bass': 'Low anchor', drums: 'Drum kit variation', 'synth:texture': 'Synthesizer variation' },
      B: { piano: 'Piano accent', rhodes: 'Electric Piano reply', 'synth:bass': 'Low anchor', drums: 'Drum kit ghost', 'synth:texture': 'Offbeat pad response' },
      breakdown: { piano: 'Piano tenuto', rhodes: 'Electric Piano tenuto', 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' },
      outro: { 'synth:bass': 'Low anchor', 'synth:texture': 'Synth accompaniment' } } },
  'amapiano::classic': {
    sectionInstruments: {
      intro: ['piano','shaker'], groove: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','rhodes','log-drum','drums','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      breakdown: ['piano','rhodes','shaker'], build: ['synth','log-drum','drums','shaker'], outro: ['piano','shaker'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', shaker: 'Shaker pulse' },
      groove: { synth: 'Synth statement', piano: 'Piano accompaniment', rhodes: 'Electric Piano reply', 'log-drum': 'Low anchor', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      verse: { synth: 'Synthesizer reply', rhodes: 'Electric Piano ghost', 'log-drum': 'log drum reply', drums: 'Drum kit ghost', shaker: 'Shaker variation' },
      drop: { synth: 'Synthesizer variation', piano: 'Piano variation', rhodes: 'Electric Piano variation', 'log-drum': 'log drum variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      breakdown: { piano: 'Piano tenuto', rhodes: 'Electric Piano ghost', shaker: 'Shaker ghost' },
      build: { synth: 'Synthesizer accent', 'log-drum': 'log drum roll', drums: 'Drum kit roll', shaker: 'Shaker roll' },
      outro: { } } },
  'amapiano::private-school': {
    sectionInstruments: {
      intro: ['rhodes','shaker'], theme: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['piano','rhodes','log-drum','drums','shaker'], groove: ['piano','rhodes','log-drum','drums','shaker'],
      solo: ['rhodes','log-drum','shaker'], breakdown: ['piano','rhodes','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      outro: ['rhodes','log-drum','shaker'] },
    solos: { solo: 'rhodes' },
    patternAssignments: {
      intro: { rhodes: 'Rhodes accompaniment', shaker: 'Shaker ghost' },
      theme: { synth: 'Synthesizer reply', piano: 'Piano accompaniment', rhodes: 'Electric Piano variation', 'log-drum': 'log drum ghost', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      verse: { piano: 'Piano reply', rhodes: 'Electric Piano ghost', 'log-drum': 'log drum ghost', drums: 'Drum kit ghost', shaker: 'Shaker basics' },
      groove: { piano: 'Piano accompaniment', rhodes: 'Electric Piano variation', 'log-drum': 'log drum reply', drums: 'Drum kit basics', shaker: 'Shaker variation' },
      solo: { rhodes: 'Rhodes solo line', 'log-drum': 'Low anchor', shaker: 'Shaker ghost' },
      breakdown: { piano: 'Piano tenuto', rhodes: 'Electric Piano tenuto', shaker: 'Shaker ghost' },
      drop: { synth: 'Synthesizer accent', piano: 'Piano variation', rhodes: 'Electric Piano variation', 'log-drum': 'log drum variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      outro: { } } },
  'amapiano::vocal': {
    sectionInstruments: {
      intro: ['piano','synth','shaker'], groove: ['piano','synth','log-drum','drums','shaker'], chorus: ['voice','piano','synth','log-drum','drums','shaker'],
      verse: ['voice','synth','log-drum','drums','shaker'], drop: ['piano','synth','log-drum','drums','shaker'],
      breakdown: ['piano','synth','shaker'], outro: ['piano','synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', synth: 'Synth accompaniment', shaker: 'Shaker ghost' },
      groove: { piano: 'Piano accompaniment', synth: 'Synthesizer reply', 'log-drum': 'Low anchor', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      chorus: { voice: 'Vocal variation', piano: 'Piano variation', synth: 'Synthesizer variation', 'log-drum': 'log drum variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      verse: { voice: 'Vocal staccato', synth: 'Synthesizer reply', 'log-drum': 'log drum reply', drums: 'Drum kit ghost', shaker: 'Shaker basics' },
      drop: { piano: 'Piano accent', synth: 'Synthesizer accent', 'log-drum': 'log drum roll', drums: 'Drum kit variation', shaker: 'Shaker roll' },
      breakdown: { piano: 'Piano tenuto', synth: 'Synthesizer legato', shaker: 'Shaker ghost' },
      outro: { } } },
  'amapiano::log-drum-heavy': {
    sectionInstruments: {
      intro: ['synth','shaker'], hook: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','piano','log-drum','drums','shaker'], drop: ['synth','piano','rhodes','log-drum','drums','shaker'],
      breakdown: ['synth','rhodes','log-drum','shaker'], outro: ['synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', shaker: 'Shaker pulse' },
      hook: { synth: 'Synthesizer reply', piano: 'Piano accompaniment', rhodes: 'Log-drum Rhodes bed', 'log-drum': 'Low anchor', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      verse: { synth: 'Synthesizer staccato', piano: 'Piano reply', 'log-drum': 'log drum ghost', drums: 'Drum kit ghost', shaker: 'Shaker basics' },
      drop: { synth: 'Synthesizer variation', piano: 'Piano accent', rhodes: 'Electric Piano ghost', 'log-drum': 'log drum roll', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      breakdown: { synth: 'Synthesizer variation', rhodes: 'Electric Piano tenuto', 'log-drum': 'log drum ghost', shaker: 'Shaker ghost' },
      outro: { } } },
  'amapiano::bacardi': {
    sectionInstruments: {
      intro: ['synth','drums','shaker'], groove: ['synth','piano','rhodes','log-drum','drums','shaker'],
      drop: ['synth','piano','rhodes','log-drum','drums','shaker'], break: ['synth','piano','rhodes','shaker'], outro: ['synth','shaker'] },
    patternAssignments: {
      intro: { synth: 'Synthesizer reply', drums: 'Drum kit ghost', shaker: 'Shaker pulse' },
      groove: { synth: 'Synthesizer accent', piano: 'Piano basics', rhodes: 'Electric Piano ghost', 'log-drum': 'log drum basics', drums: 'Drum kit basics', shaker: 'Shaker variation' },
      drop: { synth: 'Synthesizer variation', piano: 'Piano accent', rhodes: 'Electric Piano accent', 'log-drum': 'log drum roll', drums: 'Drum kit variation', shaker: 'Shaker roll' },
      break: { synth: 'Synthesizer staccato', piano: 'Piano tenuto', rhodes: 'Electric Piano ghost', shaker: 'Shaker ghost' },
      outro: { } } },
  'amapiano::gqom-crossover': {
    sectionInstruments: {
      intro: ['synth','sampler'], chant: ['synth','drums','sampler'], drop: ['synth','drums','sampler'],
      verse: ['synth','drums','sampler'], breakdown: ['synth','sampler'], outro: ['synth','sampler'] },
    patternAssignments: {
      intro: { 'synth:lead': 'Synth statement', 'synth:bass': 'Low anchor', sampler: 'Sampler pulse' },
      chant: { 'synth:lead': 'Synthesizer accent', 'synth:bass': 'Low anchor', drums: 'Drum kit basics', sampler: 'Sampler variation' },
      drop: { 'synth:lead': 'Synthesizer variation', 'synth:bass': 'Low anchor', drums: 'Drum kit variation', sampler: 'Sampler variation' },
      verse: { 'synth:lead': 'Synthesizer reply', 'synth:bass': 'Low anchor', drums: 'Drum kit ghost', sampler: 'Sampler reply' },
      breakdown: { 'synth:lead': 'Synthesizer staccato', 'synth:bass': 'Low anchor', sampler: 'Sampler pulse' },
      outro: { } } },
  'amapiano::kwaito-crossover': {
    sectionInstruments: {
      intro: ['synth','log-drum','shaker'], chorus: ['synth','piano','rhodes','log-drum','drums','shaker'],
      verse: ['synth','log-drum','drums','shaker'], break: ['synth','log-drum','shaker'], outro: ['synth','log-drum','shaker'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', 'log-drum': 'Low anchor', shaker: 'Shaker pulse' },
      chorus: { synth: 'Synthesizer accent', piano: 'Piano basics', rhodes: 'Electric Piano ghost', 'log-drum': 'log drum variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      verse: { synth: 'Synthesizer reply', 'log-drum': 'log drum reply', drums: 'Drum kit ghost', shaker: 'Shaker basics' },
      break: { synth: 'Synthesizer staccato', 'log-drum': 'log drum ghost', shaker: 'Shaker ghost' },
      outro: { } } },
  'afrobeats::contemporary-afrobeats': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','bass','drums','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['guitar','bass','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Low anchor', drums: 'Kit', shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar reply', bass: 'Bass reply', drums: 'Drum kit ghost', shaker: 'Shaker variation' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', rhodes: 'Electric Piano variation', bass: 'Bass variation', drums: 'Drum kit variation', shaker: 'Shaker pulse' },
      bridge: { guitar: 'Guitar rasgueado', rhodes: 'Electric Piano ghost', bass: 'Bass ghost-note', drums: 'Drum kit roll', shaker: 'Shaker roll' },
      outro: { } } },
  'afrobeats::afropop': {
    sectionInstruments: {
      intro: ['guitar','rhodes','bass','drums','shaker'],
      chorus: ['voice','guitar','rhodes','bass','drums','shaker'],
      verse: ['voice','guitar','bass','drums','shaker'],
      bridge: ['guitar','rhodes','bass','drums','shaker'],
      outro: ['voice','guitar','bass','drums','shaker'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Bass reply', drums: 'Kit', shaker: 'Shaker pulse' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', rhodes: 'Electric Piano variation', bass: 'Bass variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      verse: { voice: 'Voice statement', guitar: 'Guitar reply', bass: 'Bass ghost-note', drums: 'Drum kit ghost', shaker: 'Shaker pulse' },
      bridge: { guitar: 'Guitar rasgueado', rhodes: 'Electric Piano ghost', bass: 'Bass reply', drums: 'Drum kit basics', shaker: 'Shaker roll' },
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
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Bass reply', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar reply', bass: 'Bass ghost-note', drums: 'Drum kit ghost', shaker: 'Shaker variation' },
      prechorus: { voice: 'Vocal vibrato', rhodes: 'Electric Piano tenuto', bass: 'Bass reply', shaker: 'Shaker ghost' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', rhodes: 'Electric Piano variation', bass: 'Bass variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      bridge: { guitar: 'Guitar rasgueado', rhodes: 'Electric Piano ghost', bass: 'Bass legato', drums: 'Drum kit roll', shaker: 'Shaker roll' },
      outro: { } } },
  'afrobeats::alte': {
    sectionInstruments: {
      intro: ['rhodes','synth','drums','sampler'],
      chorus: ['voice','rhodes','synth','drums','sampler'],
      verse: ['voice','rhodes','synth','drums','sampler'],
      breakdown: ['rhodes','synth','sampler'],
      outro: ['voice','rhodes','synth','sampler'] },
    patternAssignments: {
      intro: { rhodes: 'Rhodes accompaniment', synth: 'Low anchor', drums: 'Drum kit ghost', sampler: 'Sampler pulse' },
      chorus: { voice: 'Vocal variation', rhodes: 'Electric Piano variation', synth: 'Synthesizer variation', drums: 'Drum kit variation', sampler: 'Sampler variation' },
      verse: { voice: 'Voice statement', rhodes: 'Electric Piano ghost', synth: 'Synthesizer reply', drums: 'Drum kit ghost', sampler: 'Sampler basics' },
      breakdown: { rhodes: 'Electric Piano tenuto', synth: 'Synthesizer legato', sampler: 'Sampler reply' },
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
      intro: { guitar: 'Guitar accompaniment', rhodes: 'Rhodes accompaniment', bass: 'Low anchor', drums: 'Drum kit basics', shaker: 'Shaker pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar reply', rhodes: 'Electric Piano ghost', bass: 'Bass reply', drums: 'Drum kit ghost', shaker: 'Shaker variation' },
      prechorus: { voice: 'Vocal vibrato', rhodes: 'Electric Piano tenuto', bass: 'Bass legato', shaker: 'Shaker ghost' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', rhodes: 'Electric Piano variation', bass: 'Bass variation', drums: 'Drum kit variation', shaker: 'Shaker variation' },
      bridge: { guitar: 'Guitar rasgueado', rhodes: 'Electric Piano reply', bass: 'Bass ghost-note', drums: 'Drum kit roll', shaker: 'Shaker roll' },
      outro: { } } },
  'timba::classic-timba': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse' },
      verse: { voice: 'Vocal staccato', piano: 'Piano montuno', bass: 'Bass reply', congas: 'Congas ghost', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      coro: { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Piano montuno', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit variation', cowbell: 'Cowbell open' },
      bomba: { bass: 'Bass slap', congas: 'Congas quinto-slap', timbales: 'Timbales open', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit variation', cowbell: 'Cowbell variation' },
      bloque: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      'coro-final': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano montuno', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit accent', cowbell: 'Cowbell variation' },
      cierre: { } } },
  'timba::charanga-habanera': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse' },
      verse: { voice: 'Vocal staccato', piano: 'Piano accompaniment', bass: 'Bass reply', congas: 'Congas ghost', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      coro: { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Piano montuno', synth: 'Synth countertumbao', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit variation', cowbell: 'Cowbell open' },
      'verse-return': { voice: 'Vocal variation', piano: 'Piano reply', bass: 'Bass reply', congas: 'Congas variation', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      gear: { bass: 'Bass slap', congas: 'Congas quinto-slap', timbales: 'Timbales open', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      bloque: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', synth: 'Synth countertumbao', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit variation', cowbell: 'Cowbell variation' },
      'coro-final': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano montuno', synth: 'Synth countertumbao', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit accent', cowbell: 'Cowbell variation' },
      cierre: { } } },
  'timba::maykel-blanco': {
    patternAssignments: {
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: 'Drum kit basics' },
      verse: { voice: 'Vocal staccato', piano: 'Piano reply', bass: 'Bass reply', congas: 'Congas ghost', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      coro: { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Piano montuno', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit variation', cowbell: 'Cowbell open' },
      bomba: { bass: 'Bass slap', congas: 'Congas quinto-slap', timbales: 'Timbales open', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      bloque: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano variation', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit variation', cowbell: 'Cowbell variation' },
      'coro-final': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano montuno', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit accent', cowbell: 'Cowbell variation' },
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
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: 'Drum kit basics' },
      riff: { trumpet: 'Bb Trumpet staccato', trombone: 'Trombone staccato', piano: 'Piano montuno', bass: 'Bass ghost-note', congas: 'Congas slap', timbales: 'Timbales open', drums: 'Drum kit basics' },
      head: { voice: 'Vocal staccato', trumpet: 'Trumpet statement', trombone: 'Trombone statement', piano: 'Piano montuno', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales pulse', drums: 'Drum kit variation' },
      solo: { trumpet: 'Bb Trumpet vibrato', trombone: 'Trombone staccato', piano: 'Piano accompaniment', bass: 'Bass slap', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit basics' },
      mambo: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass slap', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
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
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: 'Drum kit basics' },
      verse: { voice: 'Vocal staccato', piano: 'Piano montuno', bass: 'Bass ghost-note', congas: 'Congas ghost', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      chorus: { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Piano montuno', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit variation' },
      coro: { voice: 'Vocal variation', trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass slap', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      bloque: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      bomba: { bass: 'Bass slap', congas: 'Congas quinto-slap', timbales: 'Timbales open', drums: 'Drum kit accent' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit variation', cowbell: 'Cowbell open' },
      'coro-final': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano montuno', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit accent', cowbell: 'Cowbell variation' },
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
      intro: { piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', timbales: 'Timbales pulse', drums: 'Drum kit basics' },
      verse: { voice: 'Vocal vibrato', piano: 'Piano legato', bass: 'Bass ghost-note', congas: 'Congas ghost', timbales: 'Timbales pulse', drums: 'Drum kit ghost' },
      prechorus: { voice: 'Vocal variation', piano: 'Piano tenuto', bass: 'Bass legato', congas: 'Congas basics', timbales: 'Timbales staccato', drums: 'Drum kit ghost' },
      chorus: { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Piano montuno', bass: 'Bass variation', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit variation' },
      coro: { voice: 'Vocal variation', trumpet: 'Bb Trumpet tenuto', trombone: 'Trombone reply', piano: 'Piano montuno', bass: 'Bass ghost-note', congas: 'Congas open', timbales: 'Timbales pulse', drums: 'Drum kit basics', cowbell: 'Cowbell open' },
      solo: { trumpet: 'Bb Trumpet vibrato', trombone: 'Trombone staccato', piano: 'Piano accompaniment', bass: 'Bass ghost-note', congas: 'Congas variation', timbales: 'Timbales roll', drums: 'Drum kit basics' },
      mambo: { trumpet: 'Bb Trumpet accent', trombone: 'Trombone accent', piano: 'Piano accent', bass: 'Bass slap', congas: 'Congas slap-tapao', timbales: 'Timbales roll', drums: 'Drum kit accent', cowbell: 'Cowbell open' },
      'coro-final': { voice: 'Vocal accent', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano montuno', bass: 'Bass accent', congas: 'Congas slap-tapao', timbales: 'Timbales variation', drums: 'Drum kit accent', cowbell: 'Cowbell variation' },
      cierre: { } } },
  'tango::golden-age': {
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      A: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      B: { bandoneon: 'Bandoneon reply', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Four-beat marcato', 'upright-bass': 'Root–fifth bass' } } },
  'tango::canyengue': {
    solos: { arrastre: 'upright-bass' },
    sectionInstruments: { arrastre: ['upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Canyengue phrase', violin: 'Clipped answer', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      estribillo: { bandoneon: 'Canyengue phrase', violin: 'Clipped answer', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      copla: { bandoneon: 'Clipped phrase', violin: 'Violin variation', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      trio: { bandoneon: 'Canyengue phrase', violin: 'Violin reply', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' },
      arrastre: { 'upright-bass': 'Bass drag' },
      cierre: { bandoneon: 'Canyengue phrase', violin: 'Violin reply', piano: 'Canyengue mugre comp', 'upright-bass': 'Habanera bass' } },
    lockPatternAssignments: { intro: ['violin'], estribillo: ['violin'], copla: ['violin'], trio: ['violin'], cierre: ['violin'] } },
  'tango::guardia-nueva-de-caro': {
    solos: { violin: 'violin' },
    patternAssignments: {
      tema: { bandoneon: 'Bandoneon answer', violin: 'Violin counterline', piano: 'De Caro sync', 'upright-bass': 'Root–fifth bass' },
      violin: { violin: 'Violin variation', bandoneon: 'Bandoneon reply', piano: 'Piano reply', 'upright-bass': 'Root–fifth bass' },
      dialogo: { bandoneon: 'Bandoneon answer', violin: 'Violin counterline', piano: 'Piano reply', 'upright-bass': 'Root–fifth bass' },
      trio: { bandoneon: 'Bandoneon reply', violin: 'Violin variation', piano: 'De Caro sync', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation' } } },
  'tango::d-arienzo': {
    lockPatternAssignments: { parada: ['bandoneon','violin','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      tema: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      parada: { bandoneon: 'Parada hit', violin: 'Parada hit', piano: 'Parada hit', 'upright-bass': 'Parada hit' },
      contraste: { violin: 'Violin answer', piano: 'Hard marcato', 'upright-bass': 'Root–fifth bass' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Hard marcato', 'upright-bass': 'Upright bass variation' },
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
      crescendo: { bandoneon: 'Bandoneon reply', violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      'tema-reprise': { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Yumba', 'upright-bass': 'Yumba bass' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation' },
      coda: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Yumba', 'upright-bass': 'Yumba bass' } } },
  'tango::troilo': {
    patternAssignments: {
      tema: { bandoneon: 'Singing bandoneon', violin: 'Violin answer', piano: 'Troilo piano pocket', 'upright-bass': 'Root–fifth bass' },
      bandoneon: { bandoneon: 'Bandoneon variation', violin: 'Violin answer', piano: 'Troilo piano pocket', 'upright-bass': 'Root–fifth bass' },
      contracanto: { violin: 'Violin answer', piano: 'Piano reply', 'upright-bass': 'Upright bass reply' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation' },
      coda: { bandoneon: 'Bandoneon breath', violin: 'Violin answer', piano: 'Piano reply', 'upright-bass': 'Root–fifth bass' } } },
  'tango::salgan': {
    patternAssignments: {
      piano: { piano: 'Umpa-umpa piano', bandoneon: 'Bandoneon phrase', 'upright-bass': 'Root–fifth bass' },
      tema: { piano: 'Umpa-umpa piano', bandoneon: 'Bandoneon reply', violin: 'Violin answer', 'upright-bass': 'Root–fifth bass' },
      contrapunto: { piano: 'Piano reply', bandoneon: 'Bandoneon reply', violin: 'Violin answer', 'upright-bass': 'Upright bass reply' },
      'piano-solo': { piano: 'Piano variation', bandoneon: 'Bandoneon reply', violin: 'Violin answer', 'upright-bass': 'Root–fifth bass' },
      ensemble: { piano: 'Umpa-umpa piano', bandoneon: 'Bandoneon variation', violin: 'Violin variation', 'upright-bass': 'Upright bass variation' } } },
  'tango::tango-cancion': {
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      verse: { voice: 'Vocal phrase', bandoneon: 'Bandoneon reply', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      interlude: { bandoneon: 'Bandoneon variation', guitar: 'Guitar reply', piano: 'Piano reply', 'upright-bass': 'Upright bass reply' },
      refrain: { voice: 'Vocal variation', bandoneon: 'Bandoneon reply', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' },
      bandoneon: { bandoneon: 'Bandoneon variation', guitar: 'Guitar reply', piano: 'Piano reply', 'upright-bass': 'Upright bass reply' },
      cierre: { voice: 'Vocal variation', bandoneon: 'Bandoneon phrase', guitar: 'Tango guitar replies', piano: 'Tango piano anchors', 'upright-bass': 'Root–fifth bass' } } },
  'tango::milonga': {
    sectionInstruments: { traspie: ['bandoneon','guitar','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Milonga phrase', violin: 'Milonga answer', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      estribillo: { bandoneon: 'Milonga phrase', violin: 'Milonga answer', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      copla: { bandoneon: 'Milonga phrase', violin: 'Violin variation', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      interlude: { guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      traspie: { bandoneon: 'Milonga traspié', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' },
      cierre: { bandoneon: 'Milonga phrase', violin: 'Violin reply', guitar: 'Milonga guitar habanera', piano: 'Milonga piano lift', 'upright-bass': 'Habanera bass' } },
    lockPatternAssignments: { intro: ['violin'], estribillo: ['violin'], copla: ['violin'], cierre: ['violin'] } },
  'tango::vals': {
    patternAssignments: {
      intro: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' },
      tema: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' },
      trio: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Piano variation', 'upright-bass': 'Vals bass walk' },
      coda: { bandoneon: 'Vals melody', violin: 'Violin sweep', piano: 'Waltz chords', 'upright-bass': 'Three-beat bass' } } },
  'tango::piazzolla-nuevo-tango': {
    patternAssignments: {
      ostinato: { bandoneon: '3+3+2 hook', violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' },
      tema: { bandoneon: '3+3+2 hook', violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' },
      contraste: { bandoneon: 'Bandoneon reply', violin: 'Violin reply', piano: 'Piano reply', 'upright-bass': 'Upright bass reply' },
      bandoneon: { bandoneon: 'Bandoneon variation', violin: 'Sustained counterline', piano: '3+3+2 chords', 'upright-bass': 'Root–fifth bass' } } },
  'tango::electrotango-gotan': {
    patternAssignments: {
      intro: { synth: 'Root–fifth bass', drums: 'Percussion pulse' },
      loop: { bandoneon: 'Bandoneon hook', piano: 'Gotan offbeat chords', synth: 'Root–fifth bass', drums: 'Percussion pulse', sampler: 'Percussion pulse' },
      hook: { bandoneon: 'Bandoneon hook', piano: 'Gotan offbeat chords', synth: 'Gotan synth answer', drums: 'Percussion pulse', sampler: 'Sampler variation' },
      breakdown: { synth: 'Synthesizer variation', drums: 'Drum kit variation' },
      bandoneon: { bandoneon: 'Bandoneon variation', piano: 'Gotan offbeat chords', synth: 'Gotan synth answer', drums: 'Drum kit variation', sampler: 'Sampler variation' } } },
  'tango::electro-rock-bajofondo': {
    patternAssignments: {
      riff: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Root–fifth bass', drums: 'Percussion pulse', sampler: 'Percussion pulse' },
      verse: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Root–fifth bass', drums: 'Percussion pulse', sampler: 'Percussion pulse' },
      chorus: { bandoneon: 'Bandoneon variation', piano: 'Piano variation', synth: 'Synthesizer variation', drums: 'Drum kit variation', sampler: 'Sampler variation' },
      breakdown: { bandoneon: 'Bandoneon reply', piano: 'Piano reply', synth: 'Synthesizer reply', drums: 'Drum kit basics', sampler: 'Sampler basics' },
      tag: { bandoneon: 'Bandoneon hook', piano: 'Bajofondo piano backbeat', synth: 'Bajofondo synth answer', drums: 'Percussion pulse', sampler: 'Percussion pulse' } } },
  'tango::modern-orquesta': {
    sectionInstruments: {
      corte: [],
      'tutti-hit': ['bandoneon','violin','piano','upright-bass'] },
    patternAssignments: {
      intro: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Orquesta block chords', 'upright-bass': 'Root–fifth bass' },
      A: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Orquesta block chords', 'upright-bass': 'Root–fifth bass' },
      B: { bandoneon: 'Bandoneon reply', violin: 'Violin answer', piano: 'Piano reply', 'upright-bass': 'Upright bass reply' },
      'tutti-hit': { bandoneon: 'Tutti hit', violin: 'Tutti hit', piano: 'Tutti hit', 'upright-bass': 'Tutti hit' },
      variacion: { bandoneon: 'Bandoneon variation', violin: 'Violin variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation' },
      cierre: { bandoneon: 'Bandoneon phrase', violin: 'Violin answer', piano: 'Piano variation', 'upright-bass': 'Root–fifth bass' } } },
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
      response: { guembri: 'guembri reply', qraqeb: 'qraqeb reply' },
      cycle: { voice: 'Vocal reply', guembri: 'guembri variation', qraqeb: 'qraqeb variation' },
      acceleration: { voice: 'Vocal accent', guembri: 'guembri reply', qraqeb: 'qraqeb roll' },
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
      invocation: { guembri: 'Low anchor', qraqeb: 'qraqeb basics' },
      call: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      'cycle-a': { guembri: 'guembri variation', qraqeb: 'qraqeb pulse' },
      'response-a': { voice: 'Vocal reply', guembri: 'guembri reply', qraqeb: 'qraqeb reply' },
      'cycle-b': { guembri: 'guembri slap', qraqeb: 'qraqeb variation' },
      acceleration: { voice: 'Vocal accent', guembri: 'guembri reply', qraqeb: 'qraqeb variation' },
      solo: { guembri: 'guembri variation', qraqeb: 'qraqeb roll' },
      'final-response': { voice: 'Vocal variation', guembri: 'guembri reply', qraqeb: 'qraqeb open' },
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
      opening: { guembri: 'Low anchor', qraqeb: 'qraqeb basics' },
      theme: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      groove: { voice: 'Vocal reply', 'tenor-sax': 'Tenor Saxophone reply', guembri: 'guembri variation', qraqeb: 'qraqeb variation' },
      call: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      response: { 'tenor-sax': 'Tenor Saxophone reply', guembri: 'guembri reply', qraqeb: 'qraqeb reply' },
      solo: { 'tenor-sax': 'Tenor Saxophone variation', guembri: 'guembri slap', qraqeb: 'qraqeb roll' },
      breakdown: { guembri: 'guembri legato', qraqeb: 'qraqeb ghost' },
      'sax-climax': { 'tenor-sax': 'Tenor Saxophone accent', guembri: 'guembri variation', qraqeb: 'qraqeb open' },
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
      intro: { guembri: 'guembri legato' },
      verse: { voice: 'Voice statement', guembri: 'Low anchor', qraqeb: 'Qraqeb pulse' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar statement', guembri: 'guembri accent', qraqeb: 'qraqeb variation', drums: 'Kit' },
      solo: { guitar: 'Guitar variation', guembri: 'guembri slap', qraqeb: 'qraqeb roll', drums: 'Drum kit variation' },
      breakdown: { guembri: 'guembri legato' },
      build: { guembri: 'guembri accent', qraqeb: 'qraqeb roll', drums: 'Drum kit variation' },
      outro: { } } },
  'jazz::hard-bop': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      'trumpet-solo': { trumpet: 'Bb Trumpet variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation', drums: 'Drum kit variation' },
      'tenor-sax-solo': { 'tenor-sax': 'Tenor Saxophone variation', piano: 'Piano variation', 'upright-bass': 'Upright bass variation', drums: 'Drum kit variation' },
      'trumpet-trading': { trumpet: 'Bb Trumpet reply', piano: 'Piano reply', 'upright-bass': 'Upright bass basics', drums: 'Drum kit reply' },
      'tenor-sax-trading': { 'tenor-sax': 'Tenor Saxophone reply', piano: 'Piano reply', 'upright-bass': 'Upright bass basics', drums: 'Drum kit reply' },
      tag: { } } },
  'funk::funk': {
    note: 'One-chord pocket, call-response and an extended band vamp. The first A states the scratch; the next A pares it back to a two-hit variation, and the last A answers at the phrase edge while bass and drums keep the pocket.',
    sectionInstruments: {
      intro: ['guitar','bass','drums'],
      breakdown: ['bass','drums'],
      solo: ['trumpet','guitar','bass','drums'],
      outro: ['guitar','bass','drums'] },
    patternAssignments: {
      intro: { guitar: 'Muted guitar scratch', bass: 'Bass pocket', drums: 'Kit' },
      A: { voice: 'Voice statement', trumpet: 'Trumpet statement', guitar: 'Muted guitar scratch', clavinet: 'Clavinet accompaniment', bass: 'Bass pocket', drums: 'Kit' },
      'A#2': { voice: 'Vocal variation', trumpet: 'Bb Trumpet variation', guitar: 'Guitar variation' },
      'A#3': { voice: 'Vocal reply', trumpet: 'Bb Trumpet reply', guitar: 'Guitar reply' },
      breakdown: { bass: 'Low anchor', drums: 'Drum kit basics' },
      solo: { trumpet: 'Trumpet statement', guitar: 'Muted guitar scratch', bass: 'Bass pocket', drums: 'Kit' },
      outro: { guitar: 'Muted guitar scratch', bass: 'Bass pocket' } },
    lockPatternAssignments: { A: ['bass'], solo: ['guitar','bass'] } },
  'funk::james-brown-the-one': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'Low anchor', drums: 'Kit' },
      groove: { voice: 'Voice statement', trumpet: 'Trumpet statement', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      verse: { voice: 'Vocal staccato', trumpet: 'Bb Trumpet reply', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      chorus: { voice: 'Vocal variation', trumpet: 'Horn response', guitar: 'Guitar short-chord-stab', clavinet: 'Clavinet accent', bass: 'The One bass', drums: 'One and backbeat' },
      'break-hit': { trumpet: 'Band hit', guitar: 'Band hit', clavinet: 'Band hit', bass: 'Band hit', drums: 'Break hit' },
      solo: { trumpet: 'Bb Trumpet variation', guitar: 'Guitar accompaniment', clavinet: 'Clavinet accompaniment', bass: 'The One bass', drums: 'One and backbeat' },
      outro: { } },
    lockPatternAssignments: { 'break-hit': ['trumpet','guitar','clavinet','bass','drums'] } },
  'funk::p-funk': {
    solos: { breakdown: 'bass' },
    sectionInstruments: {
      intro: ['synth','bass','drums'],
      breakdown: ['synth','bass','drums'],
      outro: ['synth','bass','drums'] },
    patternAssignments: {
      intro: { synth: 'Synth statement', bass: 'Low anchor', drums: 'Kit' },
      chant: { voice: 'Vocal staccato', synth: 'Synth call', guitar: 'Guitar short-chord-stab', bass: 'Bass bubble', drums: 'Kit' },
      verse: { voice: 'Vocal variation', synth: 'Synth call', guitar: 'Guitar short-chord-stab', rhodes: 'Electric Piano ghost', bass: 'Bass bubble', drums: 'Kit' },
      chorus: { voice: 'Vocal variation', synth: 'Synthesizer variation', guitar: 'Guitar short-chord-stab', rhodes: 'Electric Piano accent', bass: 'Bass bubble', drums: 'Drum kit variation' },
      breakdown: { synth: 'Synthesizer variation', bass: 'Bass bubble', drums: 'Drum kit basics' },
      vamp: { voice: 'Vocal reply', synth: 'Synth call', guitar: 'Guitar variation', rhodes: 'Electric Piano variation', bass: 'Bass bubble', drums: 'Drum kit variation' },
      outro: { synth: 'Synthesizer reply', bass: 'Bass variation', drums: 'Drum kit basics' } },
    lockPatternAssignments: { chant: ['bass','synth'], breakdown: ['bass'], vamp: ['bass','synth'] } },
  'funk::jazz-funk': {
    sectionInstruments: {
      intro: ['rhodes','bass','drums'],
      B: ['voice','trumpet','tenor-sax','rhodes','guitar','bass','drums'],
      solo: ['synth','rhodes','guitar','bass','drums'],
      outro: ['rhodes','bass','drums'] },
    patternAssignments: {
      intro: { rhodes: 'Rhodes syncopation', bass: 'Bass variation', drums: 'Kit' },
      A: { voice: 'Voice statement', trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor Saxophone basics', rhodes: 'Rhodes syncopation', guitar: 'Guitar accompaniment', bass: 'Bass ostinato', drums: 'Kit' },
      B: { trumpet: 'Bb Trumpet reply', 'tenor-sax': 'Horn exchange', rhodes: 'Rhodes syncopation', guitar: 'Guitar accompaniment', bass: 'Bass ostinato', drums: 'Drum kit variation' },
      solo: { synth: 'Synthesizer variation', rhodes: 'Rhodes syncopation', bass: 'Bass ostinato', drums: 'Drum kit variation' },
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
      chorus: { voice: 'Vocal variation', guitar: 'Clipped guitar', synth: 'Synth hook', drums: 'Machine backbeat' },
      bridge: { guitar: 'Guitar variation', synth: 'Synth hook', drums: 'Machine backbeat' },
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
      chorus: { voice: 'Vocal variation', guitar: 'Muted guitar scratch', bass: 'Octave bass', drums: 'Four-on-floor', 'string-ensemble': 'String stabs' },
      breakdown: { bass: 'Bass variation', drums: 'Drum kit basics' },
      solo: { guitar: 'Guitar variation', bass: 'Octave bass', drums: 'Four-on-floor', 'string-ensemble': 'String stabs' },
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
      groove: { voice: 'Vocal variation', piano: 'Piano accompaniment', bass: 'Dance bass', drums: 'Dance backbeat', 'string-ensemble': 'String Ensemble reply' },
      solo: { piano: 'Piano variation', bass: 'Dance bass', drums: 'Dance backbeat', 'string-ensemble': 'String Ensemble accent' },
      breakdown: { bass: 'Low anchor', drums: 'Drum kit basics' },
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
      intro: { 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Kit' },
      verse: { voice: 'Voice statement', 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Kit' },
      chorus: { voice: 'Vocal variation', synth: 'Synthesizer variation', 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Clap backbeat' },
      'chorus#2': { synth: 'Synthesizer reply' },
      'chorus#3': { synth: 'Synthesizer variation' },
      breakdown: { 'synth-bass': 'synth bass variation', drums: 'Drum kit basics' },
      solo: { synth: 'Synthesizer variation', 'synth-bass': 'Synth-bass bounce', rhodes: 'Rhodes stabs', drums: 'Clap backbeat' },
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
      chorus: { voice: 'Vocal variation', synth: 'Synth hook', 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      breakdown: { 'synth-bass': 'synth bass variation', drums: 'Drum kit basics' },
      build: { synth: 'Synth hook', 'synth-bass': 'Octave synth bass', drums: 'Hi-NRG drive' },
      outro: { 'synth-bass': 'Octave synth bass' } },
    lockPatternAssignments: { verse: ['synth-bass','drums'], chorus: ['synth-bass','drums'], build: ['synth-bass','drums'] } },
  'afrobeat::classic-afrobeat': {
    patternAssignments: {
      intro: { guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      groove: { guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      head: { trumpet: 'Trumpet statement', 'tenor-sax': 'Tenor-sax statement', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      solo: { trumpet: 'Bb Trumpet reply', 'tenor-sax': 'Tenor Saxophone variation', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere eighth-note pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Low anchor', drums: 'Kit', congas: 'Congas pulse', shekere: 'Shekere eighth-note pulse' },
      coro: { voice: 'Vocal variation', trumpet: 'Bb Trumpet variation', 'tenor-sax': 'Tenor Saxophone reply', guitar: 'Guitar 16th-note interlock', organ: 'Organ offbeat stabs', bass: 'Bass variation', drums: 'Drum kit variation', congas: 'Congas variation', shekere: 'Shekere eighth-note pulse' },
      outro: { } } },
  'salsa::salsa-dura': {
    patternAssignments: {
      intro: { trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', bongos: 'Bongó martillo', timbales: 'Timbales pulse', claves: 'Son clave 3–2' },
      verse: { voice: 'Vocal guide phrase', trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', bongos: 'Bongó martillo', timbales: 'Timbales pulse', claves: 'Son clave 3–2' },
      montuno: { voice: 'Vocal reply', trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', timbales: 'Timbales pulse', claves: 'Son clave 3–2', cowbell: 'Campana in montuno' },
      coro: { voice: 'Vocal variation', trumpet: 'Trumpet phrase', trombone: 'Trombone phrase', piano: 'Piano montuno', bass: 'Bass tumbao', congas: 'Conga tumbao', timbales: 'Timbales pulse', claves: 'Son clave 3–2', cowbell: 'Campana in montuno' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', claves: 'Claves variation', cowbell: 'Campana in montuno' },
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
      'verse#2': { voice: 'Vocal reply' },
      'verse#3': { voice: 'Vocal variation' },
      interlude: { trumpet: 'Bb Trumpet variation', tres: 'Cuban Tres variation', bass: 'Bass variation', bongos: 'Bongos variation', claves: 'Claves variation', maracas: 'Maracas variation' },
      solo: { trumpet: 'Bb Trumpet variation', tres: 'Tres accompaniment', bass: 'Low anchor', bongos: 'Bongos pulse', claves: 'Claves pulse', maracas: 'Maracas pulse' },
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
      verse: { voice: 'Voice statement', trumpet: 'Bb Trumpet reply', tres: 'Cuban Tres variation', piano: 'Son montuno piano', bass: 'Bass variation', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      montuno: { voice: 'Vocal variation', trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', tres: 'Cuban Tres variation', piano: 'Son montuno piano', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
      coro: { voice: 'Vocal reply', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', tres: 'Tres guajeo reply', piano: 'Son montuno piano', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', tres: 'Cuban Tres variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales roll', claves: 'Claves pulse', cowbell: 'Son Montuno campana' },
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
      head: { trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', tres: 'Cuban Tres variation', piano: 'Mambo piano punches', bass: 'Bass variation', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales pulse', claves: 'Claves pulse' },
      mambo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', tres: 'Cuban Tres variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', claves: 'Claves pulse', cowbell: 'Mambo campana' },
      solo: { trumpet: 'Bb Trumpet variation', tres: 'Mambo tres answers', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', claves: 'Claves pulse', cowbell: 'Mambo campana' },
      break: { piano: 'Piano reply', bass: 'Bass reply', claves: 'Claves pulse' },
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
      verse: { voice: 'Voice statement', flute: 'Concert Flute reply', piano: 'Piano accompaniment', bass: 'Low anchor', congas: 'Congas pulse', guiro: 'Guiro pulse', timbales: 'Timbales pulse' },
      chorus: { voice: 'Vocal variation', flute: 'Concert Flute variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', guiro: 'Guiro pulse', timbales: 'Timbales variation' },
      flute: { flute: 'Concert Flute variation', piano: 'Piano reply', bass: 'Bass variation', congas: 'Congas pulse', guiro: 'Guiro pulse', timbales: 'Timbales pulse' },
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
      verse: { voice: 'Voice statement', flute: 'Concert Flute reply', violin: 'Violin reply', piano: 'Piano accompaniment', bass: 'Bass reply', congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      chorus: { voice: 'Vocal reply', flute: 'Concert Flute variation', violin: 'Violin variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', guiro: 'Guiro variation' },
      flute: { flute: 'Concert Flute variation', piano: 'Piano reply', bass: 'Bass variation', congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
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
      chorus: { voice: 'Vocal reply', flute: 'Concert Flute variation', violin: 'Violin variation', piano: 'Piano variation', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', guiro: 'Guiro variation' },
      verse: { voice: 'Voice statement', flute: 'Concert Flute reply', violin: 'Violin reply', piano: 'Piano accompaniment', bass: 'Bass reply', congas: 'Congas pulse', timbales: 'Timbales pulse', guiro: 'Guiro pulse' },
      solo: { flute: 'Concert Flute variation', violin: 'Violin reply', piano: 'Piano reply', bass: 'Bass variation', congas: 'Congas variation', timbales: 'Timbales variation', guiro: 'Guiro variation' },
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
      break: { piano: 'Piano reply', tres: 'Cuban Tres reply', bass: 'Bass reply', congas: 'Congas reply', bongos: 'Bongos reply', timbales: 'Timbales roll', claves: 'Claves pulse', drums: 'Boogaloo fill' },
      solo: { trumpet: 'Bb Trumpet variation', trombone: 'Trombone reply', piano: 'Piano reply', tres: 'Cuban Tres reply', bass: 'Bass variation', congas: 'Congas variation', bongos: 'Bongos variation', timbales: 'Timbales variation', claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      hook: { voice: 'Vocal reply', trumpet: 'Bb Trumpet variation', trombone: 'Trombone variation', piano: 'Piano variation', tres: 'Cuban Tres variation', bass: 'Bass variation', congas: 'Congas variation', bongos: 'Bongos variation', timbales: 'Timbales variation', claves: 'Claves pulse', drums: 'Boogaloo backbeat' },
      coda: { tres: 'Cuban Tres variation', claves: 'Claves pulse', drums: 'Boogaloo fill' } } },
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
      vamp: { trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Descarga piano vamp', tres: 'Cuban Tres variation', bass: 'Bass variation', congas: 'Congas variation', bongos: 'Bongos variation', timbales: 'Timbales variation', claves: 'Claves pulse' },
      'bass-solo': { trumpet: 'Bb Trumpet reply', trombone: 'Trombone reply', piano: 'Descarga piano vamp', tres: 'Descarga tres answer', bass: 'Bass variation', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales variation', claves: 'Claves pulse' },
      'piano-solo': { piano: 'Piano variation', tres: 'Cuban Tres reply', bass: 'Bass variation', congas: 'Congas pulse', bongos: 'Bongos pulse', timbales: 'Timbales variation', claves: 'Claves pulse' },
      'horn-solo': { trumpet: 'Bb Trumpet variation', trombone: 'Trombone reply', piano: 'Piano variation', tres: 'Cuban Tres variation', bass: 'Bass variation', congas: 'Congas variation', bongos: 'Bongos variation', timbales: 'Timbales variation', claves: 'Claves pulse' },
      percussion: { bass: 'Low anchor', congas: 'Congas variation', bongos: 'Bongos variation', timbales: 'Timbales roll', claves: 'Claves pulse' },
      cierre: { tres: 'Cuban Tres variation', claves: 'Claves pulse' } } },
  'mexican::banda': {
    sectionInstruments: {
      intro: ['trumpet','clarinet','trombone','tuba','drums'],
      interlude: ['trumpet','clarinet','trombone','tuba','drums'],
      cierre: ['trumpet','clarinet','trombone','tuba','drums'] },
    patternAssignments: {
      intro: { trumpet: 'Trumpet answer', clarinet: 'Clarinet answer', trombone: 'Trombone answer', tuba: 'Tuba answer', drums: 'Drums answer' },
      verse: { voice: 'Voice answer', trumpet: 'Trumpet answer', clarinet: 'Clarinet answer', trombone: 'Trombone answer', tuba: 'Tuba answer', drums: 'Drums answer' },
      'verse#2': { voice: 'Vocal variation' },
      chorus: { voice: 'Voice answer', trumpet: 'Bb Trumpet re-entry', clarinet: 'Clarinet variation', trombone: 'Trombone variation', tuba: 'Tuba re-entry', drums: 'Drum kit variation' },
      'chorus#1': { voice: 'Vocal reply' },
      'chorus#2': { voice: 'Vocal variation' },
      'chorus#3': { voice: 'Vocal reply' },
      interlude: { trumpet: 'Bb Trumpet re-entry', clarinet: 'Clarinet variation', trombone: 'Trombone answer', tuba: 'Tuba re-entry', drums: 'Drum kit variation' },
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
      response: { voice: 'Vocal variation', violin: 'Violin phrase', guitar: 'Guitar variation', jarana: 'Jarana jarocha variation' },
      violin: { violin: 'Violin variation', guitar: 'Guitar comping', jarana: 'Jarana comping' },
      cierre: { voice: 'Vocal variation', violin: 'Violin phrase', guitar: 'Guitar comping', jarana: 'Jarana comping' } } },
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
      intro: { violin: 'Fiddle pickup', guitar: 'Guitar accompaniment', piano: 'Piano upbeats', 'upright-bass': 'Low anchor', drums: 'Kit' },
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
      'banjo-break': { banjo: 'Banjo melody roll', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' },
      'fiddle-break': { violin: 'Fiddle shuffle', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' },
      tag: { voice: 'Vocal refrain phrase', violin: 'Fiddle vocal answer', banjo: 'Forward-reverse roll', guitar: 'Alternating-bass guitar', mandolin: 'Mandolin chop', 'upright-bass': 'Upright two-beat' } } },
  'country::bakersfield': {
    solos: { solo: 'pedal-steel' },
    sectionInstruments: {
      intro: ['pedal-steel','guitar','bass','drums'],
      solo: ['pedal-steel','guitar','bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: 'Kit' },
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
      chorus: { voice: 'Vocal variation', 'pedal-steel': 'Long steel response', guitar: 'Telecaster rhythm pulse', bass: 'Bass pulse', drums: 'Restrained backbeat' },
      solo: { 'pedal-steel': 'Long steel response', guitar: 'Telecaster answer lick', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      'steel-break': { 'pedal-steel': 'Steel feature phrase', guitar: 'Telecaster rhythm pulse', bass: 'Spacious bass pickup', drums: 'Restrained backbeat' },
      outro: { bass: 'Bass pulse' } } },
  'country::western-swing': {
    solos: { solo: 'violin' },
    sectionInstruments: {
      intro: ['violin','pedal-steel','guitar','piano','upright-bass','drums'],
      solo: ['violin','pedal-steel','guitar','piano','upright-bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', violin: 'Violin statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' },
      head: { voice: 'Vocal head phrase', violin: 'Fiddle head answer', 'pedal-steel': 'Steel chord answer', guitar: 'Swing guitar comp', piano: 'Piano four-beat comp', 'upright-bass': 'Walking bass line', drums: 'Ride swing groove' },
      solo: { violin: 'Swing fiddle line', 'pedal-steel': 'Steel chord answer', guitar: 'Swing guitar comp', piano: 'Piano four-beat comp', 'upright-bass': 'Walking bass line', drums: 'Ride swing groove' },
      tag: { voice: 'Voice statement', violin: 'Violin statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', 'upright-bass': 'Low anchor', drums: 'Kit' } } },
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
      bridge: { violin: 'Fiddle phrase answer', guitar: 'Alternating-bass pick', 'resonator-guitar': 'Dobro slide reply', 'upright-bass': 'Sparse root fifth', drums: 'Drum kit variation' },
      outro: { voice: 'Voice statement', guitar: 'Guitar accompaniment', 'upright-bass': 'Low anchor' } } },
  'country::country-pop': {
    solos: { solo: 'pedal-steel' },
    sectionInstruments: {
      intro: ['pedal-steel','guitar','bass','drums'],
      solo: ['pedal-steel','guitar','bass','drums'] },
    patternAssignments: {
      intro: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Guitar accompaniment', bass: 'Low anchor', drums: 'Kit' },
      verse: { voice: 'Vocal verse phrase', 'pedal-steel': 'Pedal-steel statement', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: 'Kit' },
      prechorus: { voice: 'Voice statement', 'pedal-steel': 'Pedal-steel statement', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: 'Pop backbeat' },
      chorus: { voice: 'Vocal chorus hook', 'pedal-steel': 'Steel chorus lift', guitar: 'Acoustic pop strum', bass: 'Chorus bass drive', drums: 'Pop backbeat' },
      solo: { 'pedal-steel': 'Steel break phrase', guitar: 'Acoustic pop strum', bass: 'Chorus bass drive', drums: 'Pop backbeat' },
      outro: { voice: 'Voice statement', 'pedal-steel': 'Steel chorus lift', guitar: 'Acoustic pop strum', bass: 'Low anchor', drums: 'Kit' } } },
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
      martinete: { voice: 'Vocal variation' },
      debla: { voice: 'Vocal reply' },
      cadence: { voice: 'Vocal variation' } } },
  'japanese::taiko': {
    sectionInstruments: { silence: [], break: [] } },
  'weird::musique-concrete': {
    sectionInstruments: { stop: [] },
    patternAssignments: {
      whistle: { sampler: 'Sound montage' },
      wheels: { sampler: 'Sampler variation' },
      cut: { sampler: 'Sampler accent' },
      'rhythm-montage': { sampler: 'Sampler variation' },
      steam: { sampler: 'Sampler reply' },
      recall: { sampler: 'Cut-and-recall montage' } } },
  'weird::free-improvisation': {
    sectionInstruments: { silence: [], stop: [] } },
  'korean::sanjo': {
    note: 'Sanjo study: keep the slow jinyangjo phrase open, move its motif through a later-cycle variation and reply as the jangdan quickens, then let the final phrase settle without a generic drum fill.',
    patternAssignments: {
      jinyangjo: { gayageum: 'Sanjo Gayageum' },
      jungmori: { gayageum: 'Gayageum variation' },
      jungjungmori: { gayageum: 'Gayageum reply' },
      jajinmori: { gayageum: 'Gayageum variation' },
      hwimori: { gayageum: 'Gayageum variation' },
      cadence: { gayageum: 'Gayageum reply' } },
    lockPatternAssignments: {
      jinyangjo: ['gayageum'], jungmori: ['gayageum'], jungjungmori: ['gayageum'],
      jajinmori: ['gayageum'], hwimori: ['gayageum'], cadence: ['gayageum'] } },
  'turkish::ottoman-classical': {
    note: 'Ottoman Classical study: introduce the ney and oud phrases in the daramad, exchange locally derived answers during development, and return to the opening material before the cadence. These cells are makam phrase guides, not a transcription.',
    patternAssignments: {
      daramad: { ney: 'Ottoman Classical Ney', oud: 'Ottoman Classical Oud' },
      'lower-register': { ney: 'Ney variation', oud: 'Oud variation' },
      development: { ney: 'Ney reply', oud: 'Oud reply' },
      'upper-register': { ney: 'Ney variation', oud: 'Oud variation' },
      return: { ney: 'Ottoman Classical Ney', oud: 'Ottoman Classical Oud' },
      cadence: { ney: 'Ney reply', oud: 'Oud reply' } },
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
      ostinato: { piano: 'Piano variation', 'string-ensemble': 'String Ensemble reply', cello: 'Cello re-entry', synth: 'Synth ostinato' },
      build: { piano: 'Piano reply', 'french-horn': 'French horn reply', 'string-ensemble': 'String Ensemble variation', cello: 'Cello vibrato', timpani: 'timpani roll', synth: 'Synth Resolution' },
      climax: { piano: 'Piano variation', 'french-horn': 'French horn variation', 'string-ensemble': 'String Ensemble accent', cello: 'Cello vibrato', timpani: 'timpani roll', synth: 'Synthesizer variation' } } },
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
      fanfare: { 'french-horn': 'French horn marcato', 'string-ensemble': 'String Ensemble accent', cello: 'Cello tenuto', timpani: 'timpani roll' },
      A: { piano: 'Piano sostenuto', 'french-horn': 'French horn variation', 'string-ensemble': 'String Ensemble legato', cello: 'Cello legato' },
      B: { piano: 'Piano reply', 'french-horn': 'French horn tenuto', 'string-ensemble': 'String Ensemble tremolo', cello: 'Cello vibrato' },
      development: { piano: 'Piano staccato', 'french-horn': 'French horn marcato', 'string-ensemble': 'String Ensemble variation', cello: 'Cello variation', timpani: 'timpani staccato' },
      battle: { piano: 'Piano variation', 'french-horn': 'French horn variation', 'string-ensemble': 'String Ensemble accent', cello: 'Cello accent', timpani: 'timpani roll' },
      coda: { 'french-horn': 'French horn tenuto', 'string-ensemble': 'String Ensemble legato', cello: 'Cello tenuto', timpani: 'timpani roll' } } },
  'cinematic::minimal-tension': {
    lead: 'piano',
    note: 'Minimal tension study: begin with a bare piano-and-cello cell, let a displaced synth pulse appear, then add semitone color and a slowly widening string layer. The climax releases back to the exposed figure without a drum beat.',
    sectionInstruments: {
      opening: ['piano','cello'], pulse: ['piano','cello','synth'],
      descent: ['piano','string-ensemble','cello','synth'],
      build: ['piano','string-ensemble','cello','synth'],
      climax: ['piano','string-ensemble','cello','synth'], release: ['piano','cello'] },
    patternAssignments: {
      opening: { piano: 'Piano staccato', cello: 'Cello basics' },
      pulse: { piano: 'Piano variation', cello: 'Cello reply', synth: 'Displaced two-note pulse' },
      descent: { piano: 'Piano reply', 'string-ensemble': 'String Ensemble variation', cello: 'Cello variation', synth: 'Synthesizer reply' },
      build: { piano: 'Piano variation', 'string-ensemble': 'String Ensemble tremolo', cello: 'Cello legato', synth: 'Synthesizer accent' },
      climax: { piano: 'Piano marcato', 'string-ensemble': 'String Ensemble accent', cello: 'Cello tremolo', synth: 'Synthesizer variation' },
      release: { piano: 'Piano staccato', cello: 'Cello tenuto' } } },
  'cinematic::hybrid': {
    instruments: ['piano','string-ensemble','cello','timpani','synth'], lead: 'piano',
    note: 'Hybrid score study: keep the opening hook dry and close, build a distinct low electronic pulse beneath it, then add short string and timpani impacts. Strip those layers before the hook returns and fades.',
    sectionInstruments: {
      opening: ['piano','synth'], A: ['piano','cello','synth'],
      evolution: ['piano','string-ensemble','cello','timpani','synth'], dissolve: ['piano','synth'] },
    patternAssignments: {
      opening: { piano: 'Piano staccato', synth: 'Synth accompaniment' },
      A: { piano: 'Piano reply', cello: 'Cello reply', synth: 'Synthesizer staccato' },
      evolution: { piano: 'Piano marcato', 'string-ensemble': 'String Ensemble accent', cello: 'Cello accent', timpani: 'timpani roll', synth: 'Synthesizer accent' },
      dissolve: { piano: 'Piano tenuto', synth: 'Synthesizer vibrato' } } },
  'cinematic::epic': {
    instruments: ['french-horn','string-ensemble','cello','timpani','synth'],
    note: 'Epic score study: begin on the low ostinato, set the horn against the timpani in battle passages, open into a sustained chorale, and cut to full silence before the final build. Thin the low percussion under the closing fall.',
    sectionInstruments: {
      opening: ['cello','synth'], battle: ['french-horn','string-ensemble','cello','timpani','synth'],
      chorale: ['french-horn','string-ensemble','cello','synth'], break: [],
      climax: ['french-horn','string-ensemble','cello','timpani','synth'],
      fall: ['french-horn','string-ensemble','cello'], coda: ['french-horn','string-ensemble','cello','timpani'] },
    patternAssignments: {
      opening: { cello: 'Cello basics', synth: 'Synth ostinato' },
      battle: { 'french-horn': 'French horn marcato', 'string-ensemble': 'String Ensemble accent', cello: 'Cello basics', timpani: 'timpani roll', synth: 'Synth ostinato' },
      chorale: { 'french-horn': 'French horn tenuto', 'string-ensemble': 'String Ensemble legato', cello: 'Cello tenuto', synth: 'Synthesizer vibrato' },
      climax: { 'french-horn': 'French horn variation', 'string-ensemble': 'String Ensemble variation', cello: 'Cello variation', timpani: 'timpani roll', synth: 'Synthesizer variation' },
      fall: { 'french-horn': 'French horn tenuto', 'string-ensemble': 'String Ensemble legato', cello: 'Cello tenuto' },
      coda: { 'french-horn': 'French horn tenuto', 'string-ensemble': 'String Ensemble legato', cello: 'Cello vibrato', timpani: 'timpani open' } } },
  'cinematic::ambient-score': {
    instruments: ['synth','string-ensemble','cello','piano'],
    note: 'Ambient score study: keep a quiet synthetic melody above slow strings, use piano replies to mark breaths, and bring cello forward only in the middle passage. Let the ending dissolve without a drum fill or forced climax.',
    sectionInstruments: {
      opening: ['synth','string-ensemble'], A: ['synth','string-ensemble','cello','piano'],
      solo: ['synth','string-ensemble','cello'], dissolve: ['synth','string-ensemble'] },
    patternAssignments: {
      opening: { synth: 'Synth slow motif', 'string-ensemble': 'String Ensemble tremolo' },
      A: { synth: 'Synth answering phrase', 'string-ensemble': 'String Ensemble tremolo', cello: 'Cello re-entry', piano: 'Piano breath reply' },
      solo: { synth: 'Synth slow motif', 'string-ensemble': 'String Ensemble tremolo', cello: 'Cello vibrato' },
      dissolve: { synth: 'Synth slow motif', 'string-ensemble': 'String Ensemble tremolo' } } },
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
      response: { voice: 'Lead call', choir: 'Group refrain', harmonium: 'Harmonium reply', dholak: 'Dholak fill', 'hand-percussion': 'Cycle claps' },
      cadence: { harmonium: 'Harmonium reply', dholak: 'Dholak fill' } } },
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
      refrain: { voice: 'Devotional line', choir: 'Quiet refrain', harmonium: 'Harmonium reply', dholak: 'Light dholak', 'hand-percussion': 'Refrain claps' },
      adlib: { voice: 'Devotional line', harmonium: 'Harmonium reply', dholak: 'Light dholak' },
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
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
    solos: { instrumental: 'cavaquinho' },
    note: 'Instrumental breaks alternate with the sung refrain. Keep the surdo relaxed behind the forward pandeiro and bright tamborim answers; the short high vocal-guide patch appears only in verse and refrain sections.',
    sectionInstruments: {
      intro: ['cavaquinho','bass','surdo','pandeiro'],
      tema: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      refrain: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      instrumental: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      coda: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths' },
      tema: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers' },
      refrain: { voice: 'Vocal variation', guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho variation', bass: 'Bass variation', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro variation', tamborim: 'Tamborim variation' },
      instrumental: { guitar: 'Guitar accompaniment', cavaquinho: 'Brazilian Cavaquinho variation', bass: 'Low anchor', surdo: 'Surdo beat anchor', pandeiro: 'Pandeiro sixteenths', tamborim: 'Tamborim offbeat answers' },
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
      B: { flute: 'Concert Flute variation', guitar: 'Guitar variation', 'upright-bass': 'Upright bass variation', drums: 'Drum kit variation' },
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
      chorus: { voice: 'Vocal variation', cavaquinho: 'Brazilian Cavaquinho variation', banjo: '5-String Banjo variation', bass: 'Bass variation', pandeiro: 'Pandeiro variation', tantan: 'Tantan variation' },
      solo: { cavaquinho: 'Brazilian Cavaquinho variation', banjo: '5-String Banjo reply', bass: 'Bass reply', pandeiro: 'Pandeiro reply', tantan: 'Tantan reply' },
      coda: { } } },
  'brazilian::partido-alto': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
    solos: { solo: 'cavaquinho' },
    note: 'Partido-alto teaching score: leave the opening instrumental, alternate a sung call with a short vocal reply, and feature cavaquinho in the solo. Keep surdo on the broad pulse while pandeiro and tamborim fill different rhythmic spaces.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      refrain: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      coda: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: 'Tamborim refrain accents' },
      refrain: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: 'Tamborim refrain accents' },
      verse: { voice: 'Vocal reply', guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho reply', bass: 'Bass reply', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro call response', tamborim: 'Tamborim reply' },
      solo: { guitar: 'Guitar accompaniment', cavaquinho: 'Brazilian Cavaquinho variation', bass: 'Bass variation', surdo: 'Surdo refrain anchor', pandeiro: 'Pandeiro variation', tamborim: 'Tamborim variation' },
      coda: { } } },
  'brazilian::samba-de-roda': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
    solos: { solo: 'guitar' },
    note: 'Samba de roda teaching arrangement: the voice calls and answers around the circle while pandeiro, surdo and tamborim hold separate jobs. Clear the singer for the short guitar feature, then bring the response back for the last refrain.',
    sectionInstruments: {
      call: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      response: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      coda: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      call: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro circle swing', tamborim: 'Tamborim response' },
      response: { voice: 'Vocal reply', guitar: 'Guitar reply', cavaquinho: 'Brazilian Cavaquinho reply', bass: 'Bass reply', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro reply', tamborim: 'Tamborim response' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro circle swing', tamborim: 'Tamborim response' },
      solo: { guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho reply', bass: 'Bass reply', surdo: 'Surdo circle anchor', pandeiro: 'Pandeiro variation', tamborim: 'Tamborim variation' },
      coda: { } } },
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
      B: { accordion: 'Accordion variation', voice: 'Vocal variation', zabumba: 'Zabumba variation', triangle: 'Triangle variation' },
      solo: { accordion: 'Accordion variation', zabumba: 'Zabumba reply', triangle: 'Triangle reply' },
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
      refrain: { accordion: 'Accordion variation', voice: 'Vocal variation', zabumba: 'Zabumba variation', triangle: 'Triangle variation' },
      solo: { accordion: 'Accordion variation', zabumba: 'Zabumba reply', triangle: 'Triangle reply' },
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
      chorus: { accordion: 'Accordion variation', guitar: 'Guitar variation', bass: 'Bass accent', zabumba: 'Zabumba variation', triangle: 'Triangle variation' },
      solo: { accordion: 'Accordion marcato', guitar: 'Guitar reply', bass: 'Bass re-entry', zabumba: 'Zabumba reply', triangle: 'Triangle reply' },
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
      intro: { guitar: 'Guitar fingerstyle', piano: 'Piano accompaniment', bass: 'Low anchor', drums: 'Kit', pandeiro: 'Pandeiro pulse' },
      verse: { voice: 'Voice statement', guitar: 'Guitar accompaniment', piano: 'Piano accompaniment', bass: 'Bass basics', drums: 'Drum kit ghost', pandeiro: 'Pandeiro pulse' },
      refrain: { voice: 'Vocal variation', guitar: 'Guitar variation', piano: 'Piano variation', bass: 'Bass variation', drums: 'Drum kit variation', pandeiro: 'Pandeiro variation' },
      interlude: { guitar: 'Guitar variation', piano: 'Piano reply', bass: 'Bass reply', drums: 'Drum kit ghost', pandeiro: 'Pandeiro reply' },
      coda: { } } },
  'brazilian::samba-reggae': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
    note: 'Samba-reggae teaching arrangement: separate the surdo calls from the lighter pandeiro lift and high tamborim answers. Let the chant lead the sung blocks, then strip the break to surdo before the full bloco pattern returns.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      chant: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      chorus: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      break: ['surdo'],
      coda: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers' },
      chant: { voice: 'Voice statement', guitar: 'Guitar accompaniment', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers' },
      verse: { voice: 'Vocal reply', guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho reply', bass: 'Bass reply', surdo: 'Surdo variation', pandeiro: 'Pandeiro variation', tamborim: 'Tamborim reply' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho variation', bass: 'Bass variation', surdo: 'Samba-reggae surdo calls', pandeiro: 'Samba-reggae pandeiro lift', tamborim: 'Samba-reggae tamborim answers' },
      break: { surdo: 'Surdo variation' },
      coda: { } } },
  'brazilian::samba-rock': {
    instruments: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
    solos: { solo: 'guitar' },
    note: 'Samba-rock teaching arrangement: bring the syncopated guitar and pandeiro backbeat forward over bass drum and bass. The verse stays lean, the chorus adds brighter tamborim punctuation, and the guitar takes the short instrumental feature.',
    sectionInstruments: {
      intro: ['guitar','cavaquinho','bass','surdo','pandeiro'],
      verse: ['voice','guitar','cavaquinho','bass','surdo','pandeiro'],
      chorus: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      solo: ['guitar','cavaquinho','bass','surdo','pandeiro','tamborim'],
      outro: ['voice','guitar','cavaquinho','bass','surdo','pandeiro','tamborim'] },
    patternAssignments: {
      intro: { guitar: 'Samba-rock backbeat', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat' },
      verse: { voice: 'Voice statement', guitar: 'Samba-rock backbeat', cavaquinho: 'Cavaquinho accompaniment', bass: 'Low anchor', surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat' },
      chorus: { voice: 'Vocal variation', guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho variation', bass: 'Bass variation', surdo: 'Surdo variation', pandeiro: 'Pandeiro variation', tamborim: 'Samba-rock tamborim fills' },
      solo: { guitar: 'Guitar variation', cavaquinho: 'Brazilian Cavaquinho reply', bass: 'Bass reply', surdo: 'Samba-rock bass drum', pandeiro: 'Samba-rock pandeiro backbeat', tamborim: 'Tamborim variation' },
      outro: { } } },
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
      build: { kamancheh: 'Kamancheh lament', setar: 'setar variation', 'string-ensemble': 'String swell', cello: 'Cello pedal' },
      climax: { kamancheh: 'Kamancheh lament', setar: 'setar reply', 'string-ensemble': 'String swell', cello: 'Cello pedal' },
      release: { kamancheh: 'Kamancheh return', setar: 'setar variation', cello: 'Cello pedal' },
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
      'verse#2': { voice: 'Vocal variation' },
      response: { voice: 'Vocal reply', synth: 'Keyboard lift' },
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
