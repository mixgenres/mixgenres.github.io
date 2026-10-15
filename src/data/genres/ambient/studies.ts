import type { AuthoredCell, GenrePackInput } from '../_shared/genrePack';
import type { MixContract, MixOverride } from '../../sound/schema/dynamicMix';

const chord = (degree: number, register: number) => ({ degree, register, voicing: 'chord' as const });

/** Instrument-specific companion parts for Atmospheric; each part stays in the
 * slow, long-envelope vocabulary of this style instead of borrowing a groove. */
export function authorAmbientStudies(pack: GenrePackInput): GenrePackInput {
  return { ...pack, styles: pack.styles.map(style => {
    if (style.id === 'dark-ambient') {
      const roles = { ...style.roles, percussion: [...new Set([...(style.roles.percussion ?? []), 'sampler'])] };
      const cells: AuthoredCell[] = [
        {
          name: 'Dark ambient ride-bell toll', shortName: 'Ride-bell toll', role: 'percussion', instruments: ['sampler'], cycleLength: 16,
          onsets: [7.5, 15.5], durations: [.3, .3], accents: [.55, .7], articulation: 'accent',
          pitches: [{ midi: [36] }, { midi: [36] }], sectionUsage: ['descent', 'climax'], supportedEnergy: [1, 2, 3, 4], difficulty: 2,
          description: 'Place a sampled ride bell late in the long phrase, then answer near its end; leave the drone exposed between attacks.',
        },
        {
          name: 'Dark ambient china-cymbal bloom', shortName: 'China-cymbal bloom', role: 'percussion', instruments: ['sampler'], cycleLength: 16,
          onsets: [11.5], durations: [.6], accents: [.42], articulation: 'accent',
          pitches: [{ midi: [37] }], sectionUsage: ['ritual', 'climax'], supportedEnergy: [2, 3, 4], difficulty: 3,
          description: 'Use one quiet sampled china-cymbal bloom as a distant metallic color; keep it isolated from the low drone.',
        },
      ];
      const instrumentDialects = { ...style.instrumentDialects,
        'sampler:percussion': { allowedTechniques: ['accent', 'staccato'], defaultTechnique: 'accent', samplePalette: [53, 52] },
      };
      const instrumentTechniques = { ...style.instrumentTechniques, sampler: ['accent', 'staccato'] };
      const mix: MixOverride<MixContract> = {
        ...style.mix,
        stage: style.mix.stage ? { ...style.mix.stage,
          rolePan: { ...style.mix.stage.rolePan, percussion: .08 }, roleWidth: { ...style.mix.stage.roleWidth, percussion: .16 },
        } : undefined,
        roles: { ...style.mix.roles, percussion: {
          mixFunctions: ['rhythmic-support'], priority: .4, gainDb: -2, foregroundGainDb: -1, supportGainDb: -1,
          presenceDb: .3, bodyDb: -.3, depth: .3, width: .16, transientEmphasis: .65,
          protectLowEnd: false, protectRhythmicDefinition: false, mayYieldSpectrally: true,
          mayYieldInGain: true, maskingPriority: .42, ambienceSend: .08,
        } },
        buses: style.mix.buses ? { ...style.mix.buses,
          roleBus: { ...style.mix.buses.roleBus, percussion: 'percussion' },
        } : undefined,
      };
      return { ...style, roles, cells: [...cells, ...style.cells], instrumentDialects, instrumentTechniques,
        mix, patterns: [...new Set([...style.patterns, ...cells.map(cell => cell.name)])] };
    }
    if (style.id !== 'atmospheric') return style;
    const roles = {
      ...style.roles,
      harmony: [...new Set([...(style.roles.harmony ?? []), 'piano'])],
      texture: [...new Set([...(style.roles.texture ?? []), 'string-ensemble'])],
    };
    const cells: AuthoredCell[] = [
      {
        name: 'Piano open-voicing breath and upper answer', role: 'harmony', instruments: ['piano'], cycleLength: 4,
        onsets: [0, 8], durations: [7.5, 7.5], articulation: 'legato', difficulty: 2,
        pitches: [chord(1, 48), chord(5, 55)], accents: [.62, .5], supportedEnergy: [1, 2, 3],
        description: 'Atmospheric piano foundation: leave a full phrase of air between open tonic and fifth voicings; let the pad melody remain in front.',
      },
      {
        name: 'String-ensemble slow-attack fifth cloud', role: 'texture', instruments: ['string-ensemble'], cycleLength: 4,
        onsets: [0, 8], durations: [7.75, 7.75], articulation: 'slow-attack', difficulty: 2,
        pitches: [chord(1, 60), chord(5, 67)], accents: [.4, .35], supportedEnergy: [1, 2],
        description: 'Atmospheric string-ensemble texture: two very slow open-fifth swells support the local pad phrase without adding a new beat.',
      },
    ];
    const instrumentDialects = { ...style.instrumentDialects,
      'piano:harmony': { ...style.instrumentDialects['piano:harmony'], allowedTechniques: style.instrumentTechniques.piano, defaultTechnique: 'legato' },
      'string-ensemble:texture': { ...style.instrumentDialects['string-ensemble:texture'], allowedTechniques: style.instrumentTechniques['string-ensemble'], defaultTechnique: 'slow-attack' },
    };
    return { ...style, roles, instrumentDialects, cells: [...cells, ...style.cells],
      patterns: [...new Set([...style.patterns, ...cells.map(cell => cell.name)])] };
  }) };
}
