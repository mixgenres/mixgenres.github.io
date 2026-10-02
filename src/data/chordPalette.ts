/** General music-theory chord/progression catalog. Genre aliases are secondary metadata.
 *
 * Three tiers, in this order:
 *  1. SHARED  - progressions every piano/guitar/bass learner runs into early on
 *               (open triads, simple 7ths, power chords). Reused across many genres.
 *  2. JAZZ    - functional jazz vocabulary (ii-V-I family, turnarounds, extended
 *               and altered dominants). Only this tier may contain chords voiced
 *               with more than six distinct notes (13(#11), alt dominants, etc).
 *  3. GENRE   - one exclusive cell per canonical genre: real vocabulary that
 *               belongs to that style and isn't just a shared/jazz cell relabelled.
 *
 * Every cell has exactly four chords (house rule from GENRE_CATALOG_REQUIREMENTS.md).
 */
export type ChordMood =
  | 'warm-resolved' | 'bittersweet' | 'smooth-jazzy' | 'floating-modal'
  | 'tense-dramatic' | 'earthy-bluesy' | 'festive-celebratory' | 'aggressive-driving';

export type ChordTier = 'shared' | 'jazz' | 'genre';

export interface ChordOption {
  id: string;
  /** General music-theory / lead-sheet name. This is what the UI should lead with. */
  name: string;
  chords: string[];
  mood: ChordMood;
  tier: ChordTier;
  blurb: string;
  genres: string[];
  /** Genre-specific musician vocabulary, never the primary name. */
  aliases?: string[];
  heardIn?: string[];
  origin?: string;
}

export const CHORD_TAXONOMY = [
  { id: 'maj7', name: 'Maj 7', symbol: 'Cmaj7', quality: 'major' },
  { id: 'min7', name: 'Min 7', symbol: 'Cm7', quality: 'minor' },
  { id: 'dom7', name: 'Dom 7', symbol: 'C7', quality: 'dominant' },
  { id: 'min7b5', name: 'Min 7b5', symbol: 'Cm7b5', quality: 'halfDiminished' },
  { id: 'minmaj7', name: 'Min Maj 7', symbol: 'Cm(maj7)', quality: 'minor' },
  { id: 'phrygian-dom', name: 'Phrygian Dom', symbol: 'C7(b9)', quality: 'dominant' },
  { id: 'dom7b9', name: 'Dom 7b9', symbol: 'C7b9', quality: 'dominant' },
  { id: 'aug7', name: 'Aug 7', symbol: 'C7#5', quality: 'augmented' },
  { id: 'sus4', name: 'Sus 4', symbol: 'Csus4', quality: 'suspended' },
  { id: 'andalusian', name: 'Andalusian', symbol: 'Am-G-F-E7', quality: 'minor' },
] as const;

export const CHORD_MOOD_ORDER_RAW: ChordMood[] = [
  'warm-resolved','bittersweet','smooth-jazzy','floating-modal',
  'tense-dramatic','earthy-bluesy','festive-celebratory','aggressive-driving',
];
export const CHORD_MOODS: Record<ChordMood, { label: string; description: string }> = {
  'warm-resolved': { label:'Warm', description:'Stable familiar resolution' },
  bittersweet: { label:'Bittersweet', description:'Minor color with release' },
  'smooth-jazzy': { label:'Extended / Jazz', description:'Seventh chords, extensions and functional motion' },
  'floating-modal': { label:'Modal', description:'Open harmony with limited dominant pull' },
  'tense-dramatic': { label:'Dramatic', description:'Strong tension toward cadence' },
  'earthy-bluesy': { label:'Blues', description:'Dominant harmony and blues movement' },
  'festive-celebratory': { label:'Festive', description:'Bright dance-oriented harmony' },
  'aggressive-driving': { label:'Driving', description:'Power, riff and dominant momentum' },
};
export const CHORD_MOOD_ORDER: ChordMood[] = [...CHORD_MOOD_ORDER_RAW];

/* ============================================================================
 * 1) SHARED — familiar to piano / guitar / bass learners, used across genres
 * ==========================================================================*/
const SHARED_CHORDS: ChordOption[] = [
  { id:'diatonic-I-V-vi-IV', tier:'shared', name:'I–V–vi–IV', chords:['C','G','Am','F'], mood:'warm-resolved', blurb:'The universal four-chord pop cycle', genres:['country','folk','rock'], aliases:['pop four-chord cycle'] },
  { id:'diatonic-I-IV-V-I', tier:'shared', name:'I–IV–V–I', chords:['G','C','D','G'], mood:'warm-resolved', blurb:'Tonic, subdominant, dominant, tonic', genres:['folk','country'], aliases:['folk cadence'] },
  { id:'doo-wop-I-vi-IV-V', tier:'shared', name:'I–vi–IV–V', chords:['C','Am','F','G'], mood:'warm-resolved', blurb:'The classic 1950s doo-wop cycle', genres:[], aliases:['50s progression'] },
  { id:'circle-turnaround', tier:'shared', name:'I–vi–ii–V', chords:['Cmaj7','Am7','Dm7','G7'], mood:'warm-resolved', blurb:'Seventh-chord circle-of-fifths turnaround', genres:['r-and-b','swing'], aliases:['circle-of-fifths turnaround'] },
  { id:'minor-i-VI-III-VII', tier:'shared', name:'i–VI–III–VII', chords:['Am','F','C','G'], mood:'bittersweet', blurb:'Natural-minor diatonic cycle', genres:['bachata','reggaeton','zouk'], aliases:['minor pop cycle'] },
  { id:'minor-i-VII-VI-VII', tier:'shared', name:'i–VII–VI–VII', chords:['Am','G','F','G'], mood:'floating-modal', blurb:'Repeating minor modal bass motion', genres:[], aliases:['reggae minor vamp'] },
  { id:'minor-i-iv-V-i', tier:'shared', name:'i–iv–V–i', chords:['Am','Dm','E','Am'], mood:'tense-dramatic', blurb:'Natural minor with raised dominant', genres:['rock','metal','tango'], aliases:['minor cadence with raised V'] },
  { id:'andalusian-cadence', tier:'shared', name:'i–♭VII–♭VI–V7', chords:['Am','G','F','E7'], mood:'tense-dramatic', blurb:'Descending minor-to-dominant cadence', genres:['flamenco','tango'], aliases:['Andalusian cadence','Phrygian/Andalusian turn'] },
  { id:'canon-descent', tier:'shared', name:'I–V–vi–iii', chords:['C','G','Am','Em'], mood:'bittersweet', blurb:'Descending stepwise diatonic motion', genres:['folk'], aliases:['Pachelbel-style descent'] },
  { id:'blues-12-bar', tier:'shared', name:'12-bar blues', chords:['C7','F7','G7','C7'], mood:'earthy-bluesy', blurb:'Core I–IV–V–I of 12-bar blues', genres:['blues','rock','country'], aliases:['12-bar blues skeleton'] },
  { id:'dominant-sequence', tier:'shared', name:'quick-change blues', chords:['A7','D7','A7','E7'], mood:'earthy-bluesy', blurb:'Quick-IV dominant blues movement', genres:['blues','funk','country'], aliases:['quick-four blues','dominant blues cycle'] },
  { id:'metal-power-riff', tier:'shared', name:'power-chord riff', chords:['E5','C5','D5','B5'], mood:'aggressive-driving', blurb:'Root-fifth power-chord riff shape', genres:['metal','punk-hardcore'], aliases:['metal power-chord cycle'] },
];

/* ============================================================================
 * 2) JAZZ — functional jazz vocabulary. Only tier allowed >6-note voicings.
 * ==========================================================================*/
const JAZZ_CHORDS: ChordOption[] = [
  { id:'jazz-ii-V-I', tier:'jazz', name:'ii–V–I', chords:['Dm7','G7','Cmaj7','Cmaj7'], mood:'smooth-jazzy', blurb:'Core functional jazz cadence', genres:['jazz','swing','r-and-b'], aliases:['jazz cadence'] },
  { id:'jazz-ii-V-I-vi', tier:'jazz', name:'ii–V–I–vi', chords:['Dm7','G7','Cmaj7','Am7'], mood:'smooth-jazzy', blurb:'Major-key ii–V–I with vi continuation', genres:['jazz','swing','r-and-b'], aliases:['jazz turnaround'] },
  { id:'jazz-iii-VI-ii-V', tier:'jazz', name:'iii–VI–ii–V', chords:['Em7','A7','Dm7','G7'], mood:'smooth-jazzy', blurb:'Descending-fifths turnaround', genres:['jazz','swing'], aliases:['cycle turnaround'] },
  { id:'jazz-minor-ii-V-i', tier:'jazz', name:'iiø7–V7–i', chords:['Bm7b5','E7','Am7','Am7'], mood:'smooth-jazzy', blurb:'Minor-key functional cadence', genres:['jazz','tango','r-and-b'], aliases:['minor ii–V–i'] },
  { id:'jazz-rhythm-changes-bridge', tier:'jazz', name:'III7–VI7–II7–V7', chords:['E7','A7','D7','G7'], mood:'smooth-jazzy', blurb:'Rhythm-changes bridge, cycle of dominants', genres:['jazz','swing'], aliases:['rhythm-changes bridge'] },
  { id:'jazz-extended-major', tier:'jazz', name:'ii9–V13–Imaj9', chords:['Dm9','G13','Cmaj9','Cmaj9'], mood:'smooth-jazzy', blurb:'Extended jazz voicings, ninth and thirteenth', genres:['jazz','r-and-b'], aliases:['extended jazz ii–V–I'] },
  { id:'jazz-extended-lydian', tier:'jazz', name:'Imaj9–II13–V13–Imaj9', chords:['Cmaj9','D13','G13','Cmaj9'], mood:'smooth-jazzy', blurb:'Bright tonic with extended dominants', genres:['jazz','fusion'], aliases:['jazz major-color vamp'] },
  { id:'jazz-altered-dominant', tier:'jazz', name:'ii9–V7♭9–Imaj9', chords:['Dm9','G7b9','Cmaj9','Cmaj9'], mood:'smooth-jazzy', blurb:'Altered dominant resolving to extended tonic', genres:['jazz','r-and-b'], aliases:['altered ii–V–I'] },
  { id:'jazz-tritone', tier:'jazz', name:'ii–♭II7–I', chords:['Dm9','Db7','Cmaj9','Cmaj9'], mood:'smooth-jazzy', blurb:'Dominant tritone substitution', genres:['jazz','fusion'], aliases:['tritone-sub ii–V–I'] },
  { id:'jazz-251-13', tier:'jazz', name:'ii13–V13–Imaj13', chords:['Dm13','G13','Cmaj13','Cmaj13'], mood:'smooth-jazzy', blurb:'Full 13th-colour functional cadence', genres:['jazz','fusion','r-and-b'], aliases:['13th voicing cadence'] },
  { id:'jazz-251-11', tier:'jazz', name:'ii11–V7♯11–Imaj9', chords:['Dm11','G7#11','Cmaj9','Cmaj9'], mood:'smooth-jazzy', blurb:'Eleventh and sharp-eleven colour', genres:['jazz','fusion'], aliases:['modern jazz colour'] },
  { id:'jazz-altered-full', tier:'jazz', name:'ii9–V7alt–Imaj9', chords:['Dm9','G7alt','Cmaj9','Cmaj9'], mood:'smooth-jazzy', blurb:'Fully altered dominant, seven-note voicing', genres:['jazz'], aliases:['altered dominant resolution'] },
];

/* ============================================================================
 * 3) GENRE-SPECIFIC — one exclusive cell per canonical genre (33 total)
 * ==========================================================================*/
const GENRE_CHORDS: ChordOption[] = [
  { id:'bachata-minor-cadence', tier:'genre', name:'i–iv–V7–i', chords:['Am','Dm','E7','Am'], mood:'bittersweet', blurb:'Bachata romantica minor cadence', genres:['bachata'], aliases:['bachata bolero cadence'] },
  { id:'blues-minor-blues', tier:'genre', name:'i–iv–i–V', chords:['Am7','Dm7','Am7','E7'], mood:'earthy-bluesy', blurb:'Minor-key blues cadence', genres:['blues'], aliases:['minor blues changes'] },
  { id:'country-train-beat', tier:'genre', name:'I7–IV7–I7–V7', chords:['G7','C7','G7','D7'], mood:'earthy-bluesy', blurb:'Dominant-seventh train-beat progression', genres:['country'], aliases:['train-beat changes'] },
  { id:'electronic-natural-minor-loop', tier:'genre', name:'i–v–VI–VII', chords:['Am','Em','F','G'], mood:'floating-modal', blurb:'Anthemic natural-minor build loop', genres:['electronic'], aliases:['EDM build loop'] },
  { id:'folk-descending-bass', tier:'genre', name:'I–V/vii–vi–IV', chords:['C','G/B','Am','F'], mood:'warm-resolved', blurb:'Fingerstyle descending-bassline progression', genres:['folk'], aliases:['descending-bass fingerstyle'] },
  { id:'funk-dominant-9-vamp', tier:'genre', name:'I9–IV9–I9–IV9', chords:['E9','A9','E9','A9'], mood:'earthy-bluesy', blurb:'Static dominant-ninth funk vamp', genres:['funk'], aliases:['one-chord funk vamp'] },
  { id:'hiphop-soul-sample-loop', tier:'genre', name:'i–iv–i–iv', chords:['Fm7','Bbm7','Fm7','Bbm7'], mood:'floating-modal', blurb:'Static minor-seventh sample-style loop', genres:['hip-hop'], aliases:['boom-bap sample loop'] },
  { id:'kizomba-ballad-loop', tier:'genre', name:'IV–iii–vi–ii', chords:['Fmaj7','Em7','Am7','Dm7'], mood:'bittersweet', blurb:'Romantic kizomba ballad guitar loop', genres:['kizomba'], aliases:['kizomba ballad loop'] },
  { id:'tango-relative-major', tier:'genre', name:'I–V7–I–vi', chords:['C','G7','C','Am'], mood:'bittersweet', blurb:'Relative-major tango lyrical section', genres:['tango'], aliases:['tango relative-major turn'] },
  { id:'flamenco-phrygian-vamp', tier:'genre', name:'i–♭II–i–♭II', chords:['Am','Bb','Am','Bb'], mood:'tense-dramatic', blurb:'Phrygian tonic to flat-two vamp', genres:['flamenco'], aliases:['soleá Phrygian vamp'] },
  { id:'metal-natural-minor-riff', tier:'genre', name:'i–III–VII–i', chords:['Em','G','D','Em'], mood:'tense-dramatic', blurb:'Riff-friendly natural-minor progression', genres:['metal'], aliases:['metal riff cycle'] },
  { id:'rnb-neo-soul-turnaround', tier:'genre', name:'IV–iii–VI7–ii', chords:['Fmaj7','Em7','A7','Dm7'], mood:'smooth-jazzy', blurb:'Neo-soul secondary-dominant turnaround', genres:['r-and-b'], aliases:['neo-soul turnaround'] },
  { id:'reggaeton-dembow-resolve', tier:'genre', name:'i–VI–iv–V7', chords:['Am','F','Dm','E7'], mood:'tense-dramatic', blurb:'Dembow minor loop with dominant resolve', genres:['reggaeton'], aliases:['dembow resolving loop'] },
  { id:'rock-mixolydian-riff', tier:'genre', name:'I–IV–♭VII–IV', chords:['E','A','D','A'], mood:'aggressive-driving', blurb:'Mixolydian flat-seven rock riff', genres:['rock'], aliases:['classic-rock mixolydian riff'] },
  { id:'salsa-montuno-vamp', tier:'genre', name:'I–IV–V–I', chords:['Cmaj7','Fmaj7','G7','Cmaj7'], mood:'festive-celebratory', blurb:'Major-seventh salsa piano montuno', genres:['salsa'], aliases:['salsa montuno vamp'] },
  { id:'swing-rhythm-changes-A', tier:'genre', name:'I–VI7–ii7–V7', chords:['Cmaj7','A7','Dm7','G7'], mood:'smooth-jazzy', blurb:'Rhythm-changes A-section turnaround', genres:['swing','jazz'], aliases:['rhythm changes A section'] },
  { id:'timba-minor-vamp', tier:'genre', name:'i7–iv7–V7–i7', chords:['Am7','Dm7','E7','Am7'], mood:'tense-dramatic', blurb:'Afro-Cuban minor vamp with dominant return', genres:['timba'], aliases:['timba minor vamp'] },
  { id:'zouk-romantic-loop', tier:'genre', name:'IV–♭VII–vi–ii', chords:['Fmaj7','Bbmaj7','Am7','Dm7'], mood:'bittersweet', blurb:'Romantic major-seventh zouk loop', genres:['zouk'], aliases:['zouk love-song loop'] },
  { id:'dnb-atmospheric-pad', tier:'genre', name:'i7–♭VI–i7–♭VI', chords:['Am7','Fmaj7','Am7','Fmaj7'], mood:'floating-modal', blurb:'Static atmospheric drum-and-bass pad', genres:['drum-and-bass'], aliases:['liquid DnB pad loop'] },
  { id:'punk-three-chord-trick', tier:'genre', name:'I–IV–V–I', chords:['E5','A5','B5','E5'], mood:'aggressive-driving', blurb:'Classic punk three-chord trick', genres:['punk-hardcore'], aliases:['punk three-chord trick'] },
];

export const CHORD_PALETTE: ChordOption[] = [...SHARED_CHORDS, ...JAZZ_CHORDS, ...GENRE_CHORDS];

/** Flat vocabulary of typical jazz chord symbols (mood-board / reference use). */
export const JAZZ_CHORD_LIBRARY = [
  'Cmaj7','Cmaj9','Cmaj13','Cmaj13#11',
  'Cm7','Cm9','Cm11','Cm13',
  'C7','C9','C13','C7#11',
  'C7b9','C7#9','C7b13','C7alt',
  'Cm7b5','Cdim7','C7sus4','C13sus4',
  'C6','C6/9','C9sus4','Cadd9',
] as const;

