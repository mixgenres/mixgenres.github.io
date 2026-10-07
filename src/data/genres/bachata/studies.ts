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
    const studies: AuthoredCell[] = [
      cell('Vocal two-bar statement', 'lead', 'voice', [0, .75, 1.5, 2.5, 4, 5, 6], [.6, .6, .8, 1, .8, .8, 1.5], 'legato',
        { cycleLength: 2, pitches: [3, 3, 5, 4, 3, 2, 1].map(d => note(d, 62)), sectionUsage: ['verse', 'chorus'] }),
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
