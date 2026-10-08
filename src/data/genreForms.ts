import type { SectionEnergy, FormIntensity } from './schema';

export type { FormIntensity };
export interface FormStep {
  key: string;
  kind: string;
  bars: number;
  label: string;
  intensity: FormIntensity;
  instruments?: string[];
  patterns?: string[];
  featured?: string[];
}
export interface GenreForm { steps:FormStep[]; allowed:string[]; energyMappings?:Record<string,Partial<Record<string,SectionEnergy>>>; }
export const formSummary = (form: GenreForm): string => form.steps.map(s => s.label).join(' · ');
export const F = (
  key: string,
  kind: string,
  bars: number,
  label: string,
  intensity: FormIntensity,
  instruments?: string[],
  patterns?: string[],
  featured?: string[]
): FormStep => ({ key, kind, bars, label, intensity, instruments, patterns, featured });

export interface FormBlueprint {
  name: string;
  sections: Array<{
    id: string;
    energy: 'low' | 'medium' | 'high' | 'peak';
    instruments?: string[];
    patterns?: string[];
    featured?: string[];
  }>;
}

export const FORM_BLUEPRINTS: Record<string, FormBlueprint> = {
  'death-metal-old-school': {
    name: 'Death Metal Old School',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['guitar', 'bass', 'drums'], patterns: ['Blast Beat'] },
      { id: 'Verse', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Tremolo Picking'] },
      { id: 'Chorus', energy: 'peak', instruments: ['guitar', 'bass', 'drums'], patterns: ['Chainsaw Riff'] },
      { id: 'Outro', energy: 'low', instruments: ['guitar', 'drums'], patterns: ['Slow Groove'] },
    ],
  },
  'tech-death-modern': {
    name: 'Tech Death Modern',
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Polyrhythmic Riff'] },
      { id: 'Verse', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Sweep Picking'] },
      { id: 'Breakdown', energy: 'peak', instruments: ['guitar', 'bass', 'drums'], patterns: ['Odd Time Groove'] },
    ],
  },
  'black-metal-traditional': {
    name: 'Black Metal Traditional',
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['guitar', 'drums'], patterns: ['Tremolo Buzz'] },
      { id: 'Verse', energy: 'peak', instruments: ['guitar', 'bass', 'drums'], patterns: ['Cold Blast'] },
    ],
  },
  'doom-sludge-metal': {
    name: 'Doom / Sludge Metal',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['guitar', 'bass', 'drums'], patterns: ['Sludge Drone'] },
      { id: 'Riff', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Heavy Sabbath Groove'] },
    ],
  },
  'classic-rock': {
    name: 'Classic Rock',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['guitar', 'bass', 'drums'], patterns: ['Riff'] },
      { id: 'Verse', energy: 'medium', instruments: ['guitar', 'bass', 'drums'], patterns: ['Four on Floor'] },
      { id: 'Chorus', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Driving Backbeat'] },
    ],
  },
  'punk-rock': {
    name: 'Punk Rock',
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Fast Downpick'] },
      { id: 'Verse', energy: 'high', instruments: ['guitar', 'bass', 'drums'], patterns: ['Punk Beat'] },
    ],
  },
  'shoegaze': {
    name: 'Shoegaze',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['guitar', 'bass', 'drums'], patterns: ['Wall of Sound'] },
      { id: 'Chorus', energy: 'peak', instruments: ['guitar', 'bass', 'drums'], patterns: ['Glider Swirl'] },
    ],
  },
  'techno-peak-time': {
    name: 'Techno Peak Time',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['drums', 'drums'], patterns: ['Four on Floor'] },
      { id: 'Drop', energy: 'peak', instruments: ['drums', 'synth', 'drums'], patterns: ['Rumble Kick'] },
    ],
  },
  'dubstep-modern': {
    name: 'Dubstep Modern',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['synth', 'drums'], patterns: ['Half-time'] },
      { id: 'Drop', energy: 'peak', instruments: ['synth', 'drums', 'synth'], patterns: ['Wobble Heavy'] },
    ],
  },
  'synthwave': {
    name: 'Synthwave',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['synth', 'synth'], patterns: ['Retro 80s'] },
      { id: 'Chorus', energy: 'high', instruments: ['synth', 'synth', 'drums'], patterns: ['Gated Snare'] },
    ],
  },
  'boom-bap-classic': {
    name: 'Boom Bap Classic',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['drums', 'rhodes'], patterns: ['Swing Boom Bap'] },
      { id: 'Verse', energy: 'medium', instruments: ['drums', 'bass', 'rhodes'], patterns: ['Boom Bap Pocket'] },
    ],
  },
  'trap-modern': {
    name: 'Trap Modern',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['synth', 'drums'], patterns: ['Trap Roll'] },
      { id: 'Drop', energy: 'peak', instruments: ['synth', 'drums', 'drums', 'synth'], patterns: ['Heavy 808'] },
    ],
  },
  'drill-uk': {
    name: 'Drill UK',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['synth', 'drums'], patterns: ['Drill Slide'] },
      { id: 'Drop', energy: 'peak', instruments: ['synth', 'drums', 'drums'], patterns: ['Syncopated Drill'] },
    ],
  },
  'lo-fi-chillhop': {
    name: 'Lo-Fi Chillhop',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['rhodes', 'sampler'], patterns: ['Laid Back'] },
      { id: 'Groove', energy: 'medium', instruments: ['rhodes', 'bass', 'drums'], patterns: ['Dilla Swing'] },
    ],
  },
  'reggaeton-classic': {
    name: 'Reggaeton Classic',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['drums', 'synth'], patterns: ['Dembow 3-3-2'] },
      { id: 'Coro', energy: 'high', instruments: ['drums', 'synth', 'synth'], patterns: ['Perreo Drive'] },
    ],
  },
  'salsa-dura': {
    name: 'Salsa Dura',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['piano', 'bass', 'congas', 'timbales'], patterns: ['Montuno'] },
      { id: 'Montuno', energy: 'high', instruments: ['piano', 'bass', 'congas', 'timbales', 'horn-section'], patterns: ['Tumbao'] },
    ],
  },
  'flamenco-traditional': {
    name: 'Flamenco Traditional',
    sections: [
      { id: 'Falseta', energy: 'low', instruments: ['guitar'], patterns: ['Picado'] },
      { id: 'Letra', energy: 'medium', instruments: ['guitar', 'palmas', 'cajon'], patterns: ['Rasgueado'] },
    ],
  },
  'reggae-roots': {
    name: 'Reggae Roots',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['bass', 'drums', 'guitar'], patterns: ['One Drop'] },
      { id: 'Verse', energy: 'medium', instruments: ['bass', 'drums', 'guitar', 'organ'], patterns: ['Skank'] },
    ],
  },
  'jazz-bebop': {
    name: 'Jazz Bebop',
    sections: [
      { id: 'Head', energy: 'medium', instruments: ['upright-bass', 'drums', 'piano', 'tenor-sax'], patterns: ['Walking Bass'] },
      { id: 'Solo', energy: 'high', instruments: ['upright-bass', 'drums', 'tenor-sax'], patterns: ['Swing Ride'] },
    ],
  },
  'jazz-fusion': {
    name: 'Jazz Fusion',
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['bass', 'drums', 'rhodes', 'synth'], patterns: ['Fusion Funk'] },
      { id: 'Solo', energy: 'peak', instruments: ['bass', 'drums', 'synth'], patterns: ['Odd Meter'] },
    ],
  },
  'blues-chicago': {
    name: 'Blues Chicago',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['guitar', 'bass', 'drums'], patterns: ['Shuffle'] },
      { id: 'Solo', energy: 'peak', instruments: ['guitar', 'bass', 'drums'], patterns: ['Chicago Bend'] },
    ],
  },
  'pop-modern': {
    name: 'Pop Modern',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['piano', 'drums'], patterns: ['Four on Floor'] },
      { id: 'Chorus', energy: 'high', instruments: ['synth', 'drums', 'synth'], patterns: ['Modern Pop'] },
    ],
  },
  'synthpop-80s': {
    name: 'Synthpop 80s',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['synth', 'synth', 'drums'], patterns: ['80s Pulse'] },
      { id: 'Chorus', energy: 'high', instruments: ['synth', 'synth', 'drums'], patterns: ['LinnDrum Groove'] },
    ],
  },
  'country-modern': {
    name: 'Country Modern',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['guitar', 'bass', 'drums'], patterns: ['Train Beat'] },
      { id: 'Chorus', energy: 'high', instruments: ['guitar', 'guitar', 'bass', 'drums'], patterns: ['Nashville Two-Step'] },
    ],
  },
  tango: {
    name: 'Tango Traditional',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['piano', 'bandoneon'], patterns: ['Marcato 4'] },
      { id: 'A', energy: 'medium', instruments: ['piano', 'bandoneon', 'upright-bass'], patterns: ['Síncopa'] },
      { id: 'B', energy: 'high', instruments: ['piano', 'bandoneon', 'upright-bass', 'violin'], patterns: ['Marcato 4', 'Arrastre'], featured: ['violin'] },
      { id: 'C', energy: 'low', instruments: ['bandoneon'], patterns: ['Rubato'], featured: ['bandoneon'] },
      { id: 'Outro', energy: 'high', instruments: ['piano', 'bandoneon', 'upright-bass', 'violin'], patterns: ['Síncopa'] },
    ],
  },
  flamenco: {
    name: 'Flamenco Bulerías',
    sections: [
      { id: 'Falseta', energy: 'low', instruments: ['guitar'], patterns: ['Picado'], featured: ['guitar'] },
      { id: 'Letra', energy: 'medium', instruments: ['guitar', 'cajon', 'palmas'], patterns: ['Rasgueado', 'Golpe'], featured: ['voice'] },
      { id: 'Escobilla', energy: 'high', instruments: ['cajon', 'palmas', 'guitar'], patterns: ['Compás 12'], featured: ['palmas'] },
      { id: 'Macho', energy: 'peak', instruments: ['guitar', 'cajon', 'palmas'], patterns: ['Bulerías Fast'], featured: ['guitar'] },
      { id: 'Cierre', energy: 'high', instruments: ['guitar', 'cajon', 'palmas'], patterns: ['Remate'] },
    ],
  },
  afrobeats: {
    name: 'Afrobeats Modern',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['shaker', 'log-drum'], patterns: ['Timeline Cycle'] },
      { id: 'Verse', energy: 'medium', instruments: ['shaker', 'log-drum', 'bass', 'guitar'], patterns: ['Syncopated Groove'] },
      { id: 'Chorus', energy: 'high', instruments: ['shaker', 'log-drum', 'bass', 'guitar', 'horn-section'], patterns: ['3-2 Polyrhythm'], featured: ['horn-section'] },
      { id: 'Bridge', energy: 'medium', instruments: ['log-drum', 'piano'], patterns: ['Sparse Beat'] },
      { id: 'Outro', energy: 'low', instruments: ['shaker', 'piano'] },
    ],
  },
  house: {
    name: 'House Club Mix',
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['drums', 'drums'], patterns: ['Four on Floor'] },
      { id: 'Build', energy: 'medium', instruments: ['drums', 'drums', 'drums', 'synth'], patterns: ['Riser', 'Filter Sweep'] },
      { id: 'Drop', energy: 'peak', instruments: ['drums', 'drums', 'drums', 'synth', 'synth'], patterns: ['Four on Floor', 'Syncopated Bass'], featured: ['synth'] },
      { id: 'Breakdown', energy: 'low', instruments: ['synth', 'sampler'], patterns: ['Atmospheric'] },
      { id: 'Drop 2', energy: 'peak', instruments: ['drums', 'drums', 'drums', 'synth', 'synth', 'drums'], patterns: ['Four on Floor', 'Maximalist'], featured: ['synth'] },
      { id: 'Outro', energy: 'low', instruments: ['drums', 'drums'], patterns: ['Fade Out'] },
    ],
  },
};

const POP = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('chorus-1','chorus',16,'Chorus','high'),F('verse-2','verse',16,'Verse 2','medium'),F('chorus-2','chorus',16,'Chorus 2','high'),F('bridge','bridge',8,'Bridge','high'),F('chorus-3','chorus',16,'Final Chorus','peak'),F('outro','ending',4,'Outro','low')],
  allowed:['intro','verse-1','chorus-1','verse-2','chorus-2','bridge','chorus-3','outro'],
});
const DANCE = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('groove-1','verse',16,'Groove','medium'),F('groove-2','chorus',24,'Main Groove','high'),F('break','breakdown',8,'Break','low'),F('groove-3','chorus',24,'Main Groove 2','peak'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','groove-1','groove-2','break','groove-3','outro'],
});
const JAZZ = (): GenreForm => ({
  steps:[F('head-in','verse',32,'Head In','medium'),F('solo-1','solo',32,'Solo','high'),F('solo-2','solo',32,'Second Solo','peak'),F('head-out','verse',16,'Head Out','high'),F('coda','coda',8,'Coda','low')],
  allowed:['head-in','solo-1','solo-2','head-out','coda'],
});
const BLUES = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('aab-1','verse',12,'AAB','medium'),F('aab-2','verse',12,'AAB','medium'),F('solo','solo',12,'Solo','peak'),F('aab-3','chorus',12,'AAB Return','high'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','aab-1','aab-2','solo','aab-3','outro'],
});
const LATIN = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('tema','verse',16,'Tema','medium'),F('groove-1','chorus',24,'Montuno','high'),F('mambo','bridge',8,'Mambo','peak'),F('groove-2','chorus',24,'Montuno 2','peak'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','tema','groove-1','mambo','groove-2','coda'],
});
const BALLAD = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('verse-2','verse',16,'Verse 2','medium'),F('bridge','bridge',8,'Bridge','high'),F('verse-3','chorus',16,'Return','high'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','verse-1','verse-2','bridge','verse-3','coda'],
});
const METAL = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','medium'),F('riff-1','verse',16,'Riff','high'),F('chorus','chorus',16,'Chorus','peak'),F('riff-2','verse',16,'Riff 2','high'),F('break','breakdown',8,'Breakdown','low'),F('solo','solo',16,'Solo','peak'),F('final','chorus',16,'Final Chorus','peak'),F('ending','ending',4,'Ending','low')],
  allowed:['intro','riff-1','chorus','riff-2','break','solo','final','ending'],
});
const TANGO = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['piano', 'bandoneon'], ['Marcato 4']),
    F('a', 'verse', 16, 'A', 'medium', ['piano', 'bandoneon', 'upright-bass'], ['Síncopa']),
    F('b', 'bridge', 16, 'B', 'high', ['piano', 'bandoneon', 'upright-bass', 'violin'], ['Marcato 4', 'Arrastre'], ['violin']),
    F('c', 'solo', 16, 'C', 'low', ['bandoneon'], ['Rubato'], ['bandoneon']),
    F('outro', 'ending', 8, 'Outro', 'high', ['piano', 'bandoneon', 'upright-bass', 'violin'], ['Síncopa']),
  ],
  allowed: ['intro', 'a', 'b', 'c', 'outro'],
});
const FLAMENCO = (): GenreForm => ({
  steps: [
    F('falseta', 'solo', 12, 'Falseta', 'low', ['guitar'], ['Picado'], ['guitar']),
    F('letra', 'verse', 12, 'Letra', 'medium', ['guitar', 'cajon', 'palmas'], ['Rasgueado', 'Golpe'], ['voice']),
    F('escobilla', 'chorus', 8, 'Escobilla', 'high', ['cajon', 'palmas', 'guitar'], ['Compás 12'], ['palmas']),
    F('macho', 'bridge', 8, 'Macho', 'peak', ['guitar', 'cajon', 'palmas'], ['Bulerías Fast'], ['guitar']),
    F('cierre', 'ending', 4, 'Cierre', 'high', ['guitar', 'cajon', 'palmas'], ['Remate']),
  ],
  allowed: ['falseta', 'letra', 'escobilla', 'macho', 'cierre'],
});
const AFROBEATS = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['shaker', 'log-drum'], ['Timeline Cycle']),
    F('verse', 'verse', 16, 'Verse', 'medium', ['shaker', 'log-drum', 'bass', 'guitar'], ['Syncopated Groove']),
    F('chorus', 'chorus', 16, 'Chorus', 'high', ['shaker', 'log-drum', 'bass', 'guitar', 'horn-section'], ['3-2 Polyrhythm'], ['horn-section']),
    F('bridge', 'bridge', 8, 'Bridge', 'medium', ['log-drum', 'piano'], ['Sparse Beat']),
    F('outro', 'ending', 8, 'Outro', 'low', ['shaker', 'piano']),
  ],
  allowed: ['intro', 'verse', 'chorus', 'bridge', 'outro'],
});
const HOUSE = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['drums', 'drums'], ['Four on Floor']),
    F('build', 'verse', 16, 'Build', 'medium', ['drums', 'drums', 'drums', 'synth'], ['Riser', 'Filter Sweep']),
    F('drop', 'chorus', 24, 'Drop', 'peak', ['drums', 'drums', 'drums', 'synth', 'synth'], ['Four on Floor', 'Syncopated Bass'], ['synth']),
    F('breakdown', 'breakdown', 8, 'Breakdown', 'low', ['synth', 'sampler'], ['Atmospheric']),
    F('drop-2', 'chorus', 24, 'Drop 2', 'peak', ['drums', 'drums', 'drums', 'synth', 'synth', 'drums'], ['Four on Floor', 'Maximalist'], ['synth']),
    F('outro', 'ending', 8, 'Outro', 'low', ['drums', 'drums'], ['Fade Out']),
  ],
  allowed: ['intro', 'build', 'drop', 'breakdown', 'drop-2', 'outro'],
});

const FORM_BUILDERS: Record<string,()=>GenreForm> = {
  afrobeats:AFROBEATS,bachata:POP,blues:BLUES,brazilian:DANCE,country:POP,cumbia:DANCE,disco:DANCE,electronic:DANCE,
  folk:POP,funk:DANCE,gospel:POP,'hip-hop':POP,house:HOUSE,jazz:JAZZ,kizomba:BALLAD,tango:TANGO,
  flamenco:FLAMENCO,metal:METAL,'r-and-b':POP,reggae:DANCE,reggaeton:DANCE,rock:POP,salsa:LATIN,ska:DANCE,soul:POP,
  swing:JAZZ,timba:LATIN,zouk:BALLAD,'drum-and-bass':DANCE,industrial:DANCE,'punk-hardcore':METAL,'uk-bass':DANCE,
};
export const GENRE_FORMS: Record<string,GenreForm> = Object.fromEntries(Object.entries(FORM_BUILDERS).map(([id,build]) => [id,build()]));

export const PROGRESSIONS: Record<string,string[]> = {
  afrobeats:['Am7','Fmaj7','Cmaj7','G6'],bachata:['Am','F','C','G'],blues:['C7','F7','G7','C7'],brazilian:['Dm7','G7','Cmaj7','A7'],country:['G','C','D','G'],
  cumbia:['Am','G','F','E7'],disco:['Am7','D9','Am7','D9'],electronic:['Em','D','C','Em'],folk:['G','C','D','G'],funk:['Dm7','C','Bb','C'],gospel:['C','F','G','Am'],
  'hip-hop':['Dm7','Bb','F','C'],house:['Fmaj7','Em7','Dm7','Cmaj7'],jazz:['Dm7','G7','Cmaj7','Am7'],kizomba:['Fmaj7','Em7','Am7','Dm7'],
  tango:['Am','E7','Am','Dm'],flamenco:['Am','G','F','E7'],metal:['E5','C5','D5','B5'],
  'r-and-b':['Dm7','G7','Cmaj7','Am7'],reggae:['Am','G','F','G'],reggaeton:['Am','F','C','G'],rock:['Em','C','D','B7'],salsa:['Cmaj7','Fmaj7','G7','Cmaj7'],
  ska:['C','Dm','F','G'],soul:['Cmaj7','Am7','Dm7','G7'],swing:['C6','A7','Dm7','G7'],timba:['Am7','Dm7','E7','Am7'],zouk:['Fmaj7','Bbmaj7','Am7','Dm7'],
  'drum-and-bass':['Em7','Cmaj7','G','D'],'industrial':['E5','F5','E5','F5'],'punk-hardcore':['E5','G5','A5','B5'],'uk-bass':['Am7','G','F','G'],
};
export const TEMPOS: Record<string,number> = {
  afrobeats:108,bachata:128,blues:92,brazilian:112,country:110,cumbia:102,disco:120,electronic:124,folk:96,funk:104,gospel:104,'hip-hop':90,
  house:124,jazz:140,kizomba:92,tango:120,flamenco:96,metal:150,'r-and-b':82,reggae:78,reggaeton:96,rock:128,salsa:96,
  ska:168,soul:94,swing:160,timba:100,zouk:100,'drum-and-bass':174,industrial:128,'punk-hardcore':180,'uk-bass':132,
};
export const TITLES: Record<string,string> = Object.fromEntries(Object.keys(GENRE_FORMS).map(id => [id, `${id} sketch`]));

/** Optional preference hints; empty keeps selection catalog-driven. */
export const DEFAULT_PATTERN_PREFERENCES: Record<string, Record<string, string>> = {};
