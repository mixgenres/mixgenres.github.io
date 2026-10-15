import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { PatternEvent } from '../../schema';

const note = (degree: number, register: number): PatternEvent['pitch'] => ({ degree, register, voicing: 'single' });
const chord: PatternEvent['pitch'] = { voicing: 'chord', register: 57 };
function cell(name: string, role: string, instrument: string, onsets: number[], durations: number[], articulation: string,
  options: Partial<AuthoredCell> = {}): AuthoredCell {
  return { name, role, instruments: [instrument], onsets, durations, articulation, ...options };
}
const eighths = [0, .5, 1, 1.5, 2, 2.5, 3, 3.5];
const length = (onsets: number[], duration: number) => Array.from({ length: onsets.length }, () => duration);
const vocalPhrasing: Record<string, {
  verseOnsets: number[]; verseDurations: number[]; verseDegrees: number[];
  refrainOnsets: number[]; refrainDurations: number[]; refrainDegrees: number[];
  verseRegister: number; refrainRegister: number; verseDescription: string; refrainDescription: string;
}> = {
  dominican: {
    verseOnsets: [0, .75, 1.5, 2.5, 4, 5, 6.25], verseDurations: [.55, .5, .8, .8, .55, .6, 1.1], verseDegrees: [3, 3, 5, 4, 3, 2, 1],
    refrainOnsets: [0, .5, 1.5, 2.5, 3, 4, 5.5, 6.5], refrainDurations: [.45, .45, .75, .45, .75, .45, .6, 1.1], refrainDegrees: [5, 5, 6, 5, 3, 5, 4, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Sing a short, stepwise derecho verse and release its cadence so the requinto can answer.',
    refrainDescription: 'Lift the chorus to a brighter chord tone, hold the landing, and leave a clear gap for the guitar response.',
  },
  amargue: {
    verseOnsets: [0, 1, 2, 3, 4, 5.5, 6.5], verseDurations: [.9, .7, .9, .6, 1, .7, .9], verseDegrees: [5, 4, 3, 2, 3, 2, 1],
    refrainOnsets: [0, .5, 1.5, 2.5, 4, 5, 6.25], refrainDurations: [.7, .55, .8, .8, .8, .8, 1], refrainDegrees: [3, 5, 6, 5, 4, 3, 1],
    verseRegister: 61, refrainRegister: 63,
    verseDescription: 'Shape the lament as a descending line with space around its held notes; keep the cadence plaintive and controlled.',
    refrainDescription: 'Rise briefly above the verse, then settle by step instead of filling the vocal gaps with extra notes.',
  },
  'traditional-bolero-bachata': {
    verseOnsets: [0, .75, 1.5, 2.5, 4, 4.75, 6], verseDurations: [1.25, .8, 1.25, 1.1, 1.1, .8, 1.5], verseDegrees: [1, 3, 5, 4, 3, 2, 1],
    refrainOnsets: [0, 1, 2, 3, 4, 5, 6], refrainDurations: [1, .8, 1.2, .8, 1.1, .8, 1.2], refrainDegrees: [3, 4, 5, 6, 5, 3, 1],
    verseRegister: 61, refrainRegister: 63,
    verseDescription: 'Trace the bolero arpeggio with a long, connected vocal line and let the cadence breathe over the broken chords.',
    refrainDescription: 'Open the bridge by rising through chord tones, then resolve into a sustained note with room for requinto.',
  },
  moderna: {
    verseOnsets: [0, .5, 1.5, 2, 2.75, 4, 5, 6.5], verseDurations: [.45, .6, .55, .7, .45, .5, .6, 1], verseDegrees: [3, 2, 3, 5, 4, 3, 2, 1],
    refrainOnsets: [0, .75, 1.5, 2.5, 3.25, 4, 5.25, 6.5], refrainDurations: [.55, .55, .65, .7, .4, .75, .65, 1], refrainDegrees: [5, 5, 6, 5, 3, 5, 4, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Use light syllabic pickups before longer melody notes; keep the verse clear of the requinto answer.',
    refrainDescription: 'Give the refrain a wider melodic lift and a held landing, keeping the second-guitar rhythm crisp underneath.',
  },
  sensual: {
    verseOnsets: [0, .75, 1.5, 3, 4, 5.5, 6.5], verseDurations: [1, .8, 1.1, .7, 1.2, .6, 1.1], verseDegrees: [3, 4, 5, 4, 3, 2, 1],
    refrainOnsets: [0, 1, 2.25, 3.5, 4, 5.5, 6.5], refrainDurations: [1.1, .6, .9, .5, 1.1, .6, 1.1], refrainDegrees: [5, 5, 6, 5, 3, 2, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Stretch only the arrival notes; leave the longer spaces open for the sparse guitar answer.',
    refrainDescription: 'Sustain the hook tones across the pulse, then release before the next phrase instead of adding a constant vocal pad.',
  },
  'bachata-mambo': {
    verseOnsets: [0, .75, 1.5, 2.25, 4, 4.75, 5.5, 6.5], verseDurations: [.45, .45, .65, .55, .45, .5, .65, .9], verseDegrees: [3, 3, 5, 4, 3, 2, 3, 1],
    refrainOnsets: [0, .5, 1.5, 2, 3, 4, 5.5, 6.5], refrainDurations: [.4, .4, .6, .5, .6, .4, .55, .9], refrainDegrees: [5, 5, 6, 5, 3, 5, 4, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Keep the verse calls compact so each cadence leaves space for the requinto and bongó fills.',
    refrainDescription: 'Use a short lifted refrain and stop singing through the mambo feature; let the picked run take over.',
  },
  urban: {
    verseOnsets: [0, .5, 1.25, 2, 2.5, 4, 5, 6.25, 7], verseDurations: [.35, .35, .5, .55, .4, .4, .5, .35, .8], verseDegrees: [3, 3, 5, 4, 3, 2, 3, 2, 1],
    refrainOnsets: [0, .5, 1.5, 2.25, 3, 4, 5.25, 6.5], refrainDurations: [.4, .4, .7, .45, .65, .4, .6, 1], refrainDegrees: [5, 5, 6, 5, 3, 5, 4, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Place the syncopated pickups cleanly against the programmed backbeat, then leave a pocket at the cadence.',
    refrainDescription: 'Make the refrain hook easy to follow above the R&B rhythm; leave the requinto solo without a vocal guide.',
  },
  fusion: {
    verseOnsets: [0, .75, 1.5, 2.5, 4, 4.75, 6.25], verseDurations: [.8, .55, .8, .7, .65, .55, 1], verseDegrees: [1, 3, 5, 4, 3, 2, 1],
    refrainOnsets: [0, .5, 1.5, 2.5, 3.5, 4, 5.5, 6.5], refrainDurations: [.55, .45, .7, .6, .4, .75, .6, 1], refrainDegrees: [5, 5, 6, 5, 4, 5, 3, 1],
    verseRegister: 62, refrainRegister: 64,
    verseDescription: 'Connect the smooth melody through the chord changes, then leave the crossover interlude open for instrumental exchange.',
    refrainDescription: 'Lift the sung hook across the fusion harmony and resolve with a held tonic rather than another continuous fill.',
  },
};

/** Original teaching cells based on the folder's reference repertoire and
 * instrument practice. These are not transcriptions of the reference hooks.
 * Derecho supports the singer; majao opens the chorus; mambo drives the feature.
 * Bolero/amargue retain a lighter pulse rather than receiving a dance mix.
 */
export function authorBachataStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    const bolero = style.id === 'traditional-bolero-bachata';
    const lament = style.id === 'amargue';
    const smooth = style.id === 'sensual';
    const modern = ['moderna', 'urban', 'fusion'].includes(style.id);
    const leadRegister = bolero || lament ? 64 : 69;
    const guitarOnsets = bolero ? [0, .5, 1, 1.5, 2, 2.5, 3, 3.5] : [.5, 1, 1.5, 2.5, 3, 3.5];
    const harmonyPitch = bolero ? [1, 3, 5, 3, 1, 3, 5, 3].map(d => note(d, 55)) : guitarOnsets.map(() => chord);
    const voice = vocalPhrasing[style.id];
    const versePhrase = cell('Bachata vocal verse phrase study', 'lead', 'voice', voice.verseOnsets, voice.verseDurations, 'legato',
      { cycleLength: 2, pitches: voice.verseDegrees.map(d => note(d, voice.verseRegister)), sectionUsage: ['verse'],
        shortName: 'Vocal verse phrase', difficulty: 1, description: voice.verseDescription });
    const refrainPhrase = cell('Bachata vocal refrain lift study', 'lead', 'voice', voice.refrainOnsets, voice.refrainDurations, 'legato',
      { cycleLength: 2, pitches: voice.refrainDegrees.map(d => note(d, voice.refrainRegister)), sectionUsage: ['chorus', 'prechorus', 'bridge'],
        shortName: 'Vocal refrain lift', difficulty: 2, description: voice.refrainDescription });
    const studies: AuthoredCell[] = [
      versePhrase,
      refrainPhrase,
      cell('Requinto answering thirds', 'lead', 'requinto', [2, 2.5, 3, 3.5, 6, 6.5, 7], [.3, .3, .3, .4, .3, .3, .7], 'legato',
        { cycleLength: 2, pitches: [3, 5, 6, 5, 4, 2, 1].map(d => note(d, leadRegister)),
          articulations: ['accent', 'legato', 'hammer-on', 'pull-off', 'accent', 'legato', 'legato'], sectionUsage: ['verse'] }),
      cell('Requinto opening hook study', 'lead', 'requinto', [0, .5, 1, 1.5, 2.5, 3, 4, 4.5, 5.5, 6, 7],
        [.3, .3, .3, .6, .3, .7, .3, .7, .3, .7, .8], 'accent',
        { cycleLength: 2, pitches: [1, 3, 5, 6, 5, 3, 4, 2, 3, 2, 1].map(d => note(d, leadRegister)), sectionUsage: ['intro', 'chorus'] }),
      cell(bolero ? 'Bolero broken-chord segunda' : 'Derecho muted segunda', 'harmony', 'guitar', guitarOnsets,
        length(guitarOnsets, bolero ? .45 : .18), bolero ? 'arpeggio' : 'muted-strum',
        { pitches: harmonyPitch, accents: guitarOnsets.map((_, i) => i % 3 === 0 ? .82 : .55), sectionUsage: ['intro', 'verse'] }),
      cell('Majao open segunda accents', 'harmony', 'guitar', [0, .5, 1.5, 2, 2.5, 3.5], [.28, .18, .22, .28, .18, .22], 'strum',
        { pitches: Array(6).fill(chord), accents: [.95, .55, .8, .95, .55, .8], sectionUsage: ['chorus'], supportedEnergy: [3, 4, 5] }),
      cell('Bass derecho root and fifth', 'bass', 'bass', [0, 1.5, 2, 3.5], [1.1, .35, 1.1, .35], 'accent',
        { pitches: [1, 5, 1, 5].map(d => note(d, 40)), accents: [.9, .7, .85, .7], sectionUsage: ['intro', 'verse'] }),
      cell('Bass majao syncopation', 'bass', 'bass', [0, .75, 1.5, 2.5, 3.5], [.6, .55, .7, .75, .4], 'accent',
        { pitches: [1, 1, 5, 1, 5].map(d => note(d, 40)), sectionUsage: ['chorus', 'mambo', 'solo'], supportedEnergy: [3, 4, 5] }),
      cell('Bongo derecho martillo', 'percussion', 'bongos', eighths, length(eighths, .14), 'open',
        { articulations: ['open', 'ghost', 'slap', 'ghost', 'open', 'ghost', 'open', 'open'],
          accents: [.8, .35, .75, .35, .8, .35, .9, .65], sectionUsage: ['intro', 'verse'] }),
      cell('Bongo majao open-tone drive', 'percussion', 'bongos', eighths, length(eighths, .2), 'open',
        { articulations: ['open', 'slap', 'open', 'ghost', 'open', 'slap', 'open', 'slap'],
          accents: [.95, .65, .8, .4, .95, .65, .9, .8], sectionUsage: ['chorus', 'mambo', 'solo'], supportedEnergy: [3, 4, 5] }),
      cell('Guira derecho long and short strokes', 'percussion', 'guira', [0, 1, 1.5, 2, 3, 3.5], [.65, .18, .18, .65, .18, .18], 'scrape',
        { articulations: ['long-scrape', 'short-scrape', 'short-scrape', 'long-scrape', 'short-scrape', 'short-scrape'],
          accents: [.85, .55, .65, .85, .55, .65], sectionUsage: ['intro', 'verse'] }),
      cell('Guira majao even scrape', 'percussion', 'guira', eighths, length(eighths, .22), 'short-scrape',
        { accents: [.95, .6, .8, .6, .95, .6, .8, .6], sectionUsage: ['chorus', 'mambo', 'solo'], supportedEnergy: [3, 4, 5] }),
      cell('Requinto mambo picked run', 'lead', 'requinto', [0, .5, .75, 1, 1.5, 2, 2.5, 2.75, 3, 3.5], Array.from({ length: 10 }, () => .18), 'accent',
        { pitches: [1, 3, 4, 5, 3, 1, 5, 6, 5, 3].map(d => note(d, leadRegister)),
          articulations: ['accent', 'accent', 'hammer-on', 'accent', 'pull-off', 'accent', 'accent', 'hammer-on', 'pull-off', 'accent'],
          sectionUsage: ['mambo', 'solo', 'requinto'], supportedEnergy: [4, 5] }),
      cell('Segunda mambo offbeat drive', 'harmony', 'guitar', [.5, 1.5, 2.5, 3.5], [.22, .22, .22, .22], 'muted-strum',
        { pitches: Array(4).fill(chord), accents: [.85, .9, .85, .95], sectionUsage: ['mambo', 'solo', 'requinto'], supportedEnergy: [4, 5] }),
      cell('Requinto descending cierre', 'lead', 'requinto', [2, 2.5, 3, 3.5], [.25, .25, .25, .45], 'legato',
        { pitches: [5, 4, 2, 1].map(d => note(d, leadRegister)), articulations: ['accent', 'pull-off', 'legato', 'legato'], phraseEnd: true }),
      cell('Bass cierre pickup', 'bass', 'bass', [2, 3, 3.5], [.6, .3, .4], 'accent',
        { pitches: [1, 5, 7].map(d => note(d, 40)), phraseEnd: true }),
      cell('Bongo phrase-ending open tones', 'percussion', 'bongos', [2.5, 3, 3.25, 3.5, 3.75], [.12, .12, .12, .12, .12], 'open',
        { articulations: ['ghost', 'slap', 'ghost', 'open', 'open'], accents: [.45, .8, .4, .9, .75], phraseEnd: true }),
      cell('Guira cierre long scrape', 'percussion', 'guira', [3], [.75], 'long-scrape', { phraseEnd: true }),
    ];
    // The earlier generic cells for the core ensemble are replaced. Electronic
    // layers remain only in the styles which explicitly authored those players.
    const extra = style.cells.filter(c => !c.instruments?.some(id => ['voice', 'requinto', 'guitar', 'bass', 'bongos', 'guira'].includes(id)));
    if (bolero || lament || smooth) {
      for (const c of studies) {
        if (c.name.includes('majao') || c.name.includes('Majao') || c.name.includes('mambo')) c.supportedEnergy = [4, 5];
      }
    }
    const dialects = { ...style.instrumentDialects,
      'requinto:lead': { ...style.instrumentDialects['requinto:lead'], defaultTechnique: 'accent' },
      'guitar:harmony': { ...style.instrumentDialects['guitar:harmony'], defaultTechnique: bolero ? 'arpeggio' : 'muted-strum', variantId: bolero ? 'nylon' : modern ? 'solid-electric' : 'steel-acoustic' },
      'bass:bass': { ...style.instrumentDialects['bass:bass'], defaultTechnique: 'accent' },
    };
    const width = bolero ? .38 : lament ? .4 : modern || smooth ? .5 : .38;
    const roles = Object.fromEntries(Object.entries(style.mix.roles ?? {}).map(([role, policy]) => [role, { ...policy,
      depth: role === 'bass' ? .12 : role === 'percussion' ? .18 : role === 'harmony' ? .22 : .14,
      ambienceSend: role === 'bass' ? .025 : smooth ? .1 : .06,
      ...(role === 'harmony' || role === 'percussion' ? { supportGainDb: -.25, mayYieldInGain: false } : {}),
    }]));
    return { ...style, cells: [...studies, ...extra], instrumentDialects: dialects, bassMotion: 'root-fifth',
      groove: { ...style.groove, anticipationOffsetSteps: 0 },
      mix: { ...style.mix, roles,
        character: { ...style.mix.character, width, dryness: smooth ? .7 : .82, bassForward: modern || smooth ? .7 : .64,
          compressionRatio: modern ? 2.4 : 1.8, delaySend: smooth ? .06 : .015 },
        stage: { ...style.mix.stage, width, depthRange: .18,
          roleWidth: { lead: .32, harmony: Math.min(.56, width + .08), bass: .08, percussion: Math.min(.5, width + .03) },
          rolePan: { lead: .04, harmony: -.08, bass: 0, percussion: .08 } },
        ambience: { ...style.mix.ambience, roomSize: .25, reverbSend: smooth ? .1 : .055, delaySend: smooth ? .05 : .015,
          foregroundDepthDifference: .12, bloom: .15 },
        dynamics: { ...style.mix.dynamics, foregroundContrastDb: 1.6, densityCompensation: .2, ensembleBreathing: .3 },
        sections: { ...style.mix.sections,
          intro: { gainDb: -.5, width, depth: .2 }, chorus: { gainDb: .5, width: Math.min(.6, width + .04), foregroundContrast: 1.05 },
          mambo: { gainDb: .6, width: Math.min(.6, width + .06), depth: .16 } },
        buses: { ...style.mix.buses, glueAmount: modern ? .3 : .22, lowAnchorCompression: .12, rhythmCompression: .2 },
      },
      patterns: [...new Set([...style.patterns, ...studies.map(c => c.name)])] };
  }) };
}
