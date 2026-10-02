import { EAST_ASIAN_PATTERNS } from './east-asian-patterns';
import type { GenreWorld, GenreStyleDefinition } from '../schema';

type StyleInput = Pick<GenreStyleDefinition, 'id' | 'name' | 'description' | 'origin' | 'era' | 'tempoRange' | 'characteristicInstruments' | 'preferredMeters' | 'scaleMode' | 'coreConcepts' | 'rhythmicGrammar' | 'signatureCell' | 'sectionProgressions'>;

function style(worldId: string, input: StyleInput): GenreStyleDefinition {
  const instruments = input.characteristicInstruments;
  const lead = instruments[0];
  const support = instruments.slice(1);
  const traditional = worldId === 'chinese-traditional';
  const entries = traditional
    ? [
      ['intro', 'Intro', 'intro', 4, 'low', support.slice(0, 3)],
      ['theme', 'Theme', 'theme', 8, 'medium', instruments.slice(0, 5)],
      ['variation', 'Variation', 'variation', 8, 'high', instruments],
      ['answer', 'Instrumental answer', 'answer', 4, 'medium', support.slice(0, 5)],
      ['theme-return', 'Theme return', 'theme', 8, 'high', instruments],
      ['coda', 'Coda', 'coda', 4, 'low', instruments.slice(0, 3)],
    ] as const
    : [
      ['intro', 'Intro', 'intro', 4, 'low', support.slice(0, 3)],
      ['verse', 'Verse', 'verse', 8, 'medium', instruments.slice(0, 5)],
      ['pre-chorus', 'Pre-chorus', 'pre-chorus', 4, 'high', instruments.slice(0, 6)],
      ['chorus', 'Chorus', 'chorus', 8, 'peak', instruments],
      ['verse-2', 'Verse 2', 'verse', 8, 'medium', instruments.slice(0, 5)],
      ['bridge', 'Bridge', 'bridge', 8, 'medium', support.slice(0, 4)],
      ['final-chorus', 'Final chorus', 'chorus', 8, 'peak', instruments],
      ['outro', 'Outro', 'ending', 4, 'low', instruments.slice(0, 3)],
    ] as const;
  return {
    ...input,
    id: `${worldId}-${input.id}`,
    worldId,
    keySubstyles: [input.name],
    tuningSystem: '12-tet',
    grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
    arrangementSections: entries.map(([key, label, kind, bars, intensity, active]) => ({
      key, label, kind, bars, intensity, instruments: [...active],
      ...(lead && active.includes(lead) ? { leadInstrumentId: lead } : {}),
      ...(kind === 'intro' ? { tempoFeel: traditional ? 'free, phrase-led opening' : 'restrained opening; steady tempo' } : {}),
      ...(kind === 'pre-chorus' ? { tempoFeel: 'building subdivision over a steady pulse' } : {}),
      ...(kind === 'chorus' ? { tempoFeel: traditional ? 'expanded phrase' : 'full pulse; steady tempo' } : {}),
    })),
  };
}

function world(id: string, name: string, family: string, color: string, description: string, styles: GenreStyleDefinition[], substyles: string[], concepts: string[]): GenreWorld {
  return {
    id, name, family, color, description,
    level: id === 'chinese-traditional' ? 'family' : 'world',
    kind: id === 'chinese-traditional' ? 'family' : 'world',
    strictness: id === 'chinese-traditional' ? 'open' : 'flexible',
    styleDefinitions: styles, substyles, artists: [], concepts, roles: {}, patterns: EAST_ASIAN_PATTERNS[id] ?? [],
    crossLinks: [],
  };
}

export const KPOP_WORLD = world('kpop', 'K-Pop', 'Korean popular music', '#BE9BCB',
  'Contemporary Korean popular music: a broad production and performance culture drawing on pop, hip-hop, R&B, rock, and electronic dance music.', [
    style('kpop', { id: 'dance-pop', name: 'K-Pop Dance Pop', origin: 'South Korea', era: '1990s–Present', description: 'Sectional dance-pop production with a strong topline, layered vocals, contrastive pre-chorus, and a high-impact refrain.', tempoRange: [112, 132], preferredMeters: ['4/4'], scaleMode: 'minor/major pop', characteristicInstruments: ['voice', 'backing-vocals', 'synth', 'sub-bass', 'drums', 'piano', 'electric-guitar', 'sampler'], coreConcepts: ['hook-led topline', 'pre-chorus lift', 'layered vocal harmonies', 'contrasting post-chorus hook', 'electronic and live-band hybrid'], rhythmicGrammar: ['A clear pop backbeat supports syncopated bass and a rising pre-chorus; the refrain opens into broader drums and stacked vocal hooks.'], signatureCell: 'Verse space tightens into a rising pre-chorus, then releases into a wide vocal hook.', sectionProgressions: { intro: ['F#m', 'D', 'A', 'E'], verse: ['F#m', 'D', 'A', 'E'], 'pre-chorus': ['Bm', 'C#m', 'D', 'E'], chorus: ['A', 'E', 'F#m', 'D'], bridge: ['D', 'E', 'C#m', 'F#m'] } }),
    style('kpop', { id: 'band-pop', name: 'K-Pop Band Pop', origin: 'South Korea', era: '2000s–Present', description: 'Band-led Korean pop with live drums and guitars, melodic bass, and polished vocal arrangements.', tempoRange: [96, 126], preferredMeters: ['4/4'], scaleMode: 'major/minor pop', characteristicInstruments: ['voice', 'electric-guitar', 'bass', 'drums', 'piano', 'synth', 'strings'], coreConcepts: ['live-band foundation', 'singable refrain', 'vocal stacking', 'dynamic bridge'], rhythmicGrammar: ['A steady backbeat grows from a restrained verse to a full-band refrain, with a bridge that resets the vocal and band energy.'], signatureCell: 'Restrained guitar verse expands into a full-band melodic chorus.', sectionProgressions: { intro: ['G', 'D', 'Em', 'C'], verse: ['G', 'D', 'Em', 'C'], chorus: ['C', 'D', 'G', 'Em'], bridge: ['Am', 'C', 'G', 'D'] } }),
  ], ['Dance pop', 'Band pop', 'Hip-hop influenced pop', 'R&B influenced pop'], ['hook writing', 'vocal layering', 'pre-chorus build', 'dance production', 'hybrid instrumentation']);

export const CHINESE_TRADITIONAL_WORLD = world('chinese-traditional', 'Chinese Traditional', 'Chinese musical traditions', '#C98A62',
  'A broad family of regional Chinese traditions. This playable ensemble focuses on melodic heterophony and the distinct timbres of bowed, plucked, and wind instruments.', [
    style('chinese-traditional', { id: 'silk-and-bamboo', name: 'Silk and Bamboo Ensemble', origin: 'Jiangnan, China', era: 'Traditional', description: 'Chamber texture built from ornamented melodic lines, with plucked strings and winds shaping a shared tune.', tempoRange: [68, 116], preferredMeters: ['4/4', '2/4'], scaleMode: 'pentatonic', characteristicInstruments: ['erhu', 'pipa', 'guzheng', 'dizi', 'guqin', 'jinghu', 'paigu'], coreConcepts: ['heterophonic melodic variation', 'pentatonic melody', 'ornament and pitch inflection', 'plucked-string articulation', 'regional diversity'], rhythmicGrammar: ['A lead tune is ornamented and echoed by related instruments; light percussion marks phrase points without imposing a Western backbeat.'], signatureCell: 'Dizi or erhu states a pentatonic phrase as pipa and zither answer with varied ornaments.', sectionProgressions: { intro: ['D', 'D'], theme: ['D', 'G', 'D', 'A'], variation: ['D', 'Bm', 'G', 'A'], coda: ['G', 'A', 'D', 'D'] } }),
    style('chinese-traditional', { id: 'qin-solo', name: 'Guqin Meditative Solo', origin: 'China', era: 'Ancient tradition–Present', description: 'Spacious guqin-centered music with quiet plucks, ringing harmonics, and flexible phrase timing.', tempoRange: [48, 82], preferredMeters: ['4/4'], scaleMode: 'pentatonic', characteristicInstruments: ['guqin', 'dizi', 'erhu', 'guzheng'], coreConcepts: ['open-string resonance', 'harmonics', 'breath-shaped phrasing', 'sparse texture'], rhythmicGrammar: ['Sparse, flexible phrases leave room for decays and ornamental inflections; pulse is suggested rather than driven by percussion.'], signatureCell: 'A quiet pluck and harmonic opens a phrase answered by a breath-shaped wind line.', sectionProgressions: { intro: ['D', 'D'], theme: ['D', 'G', 'D', 'D'], coda: ['G', 'D', 'D', 'D'] } }),
  ], ['Silk and bamboo chamber traditions', 'Guqin music', 'Regional opera'], ['heterophony', 'pentatonic melody', 'ornamentation', 'regional traditions', 'phrase-shaped timing']);

export const JAPANESE_POP_WORLD = world('japanese-pop', 'Japanese Pop', 'Japanese popular music', '#D17C84',
  'Japanese popular music across changing eras, with melodic hooks, carefully shaped harmony, and production that ranges from band arrangements to electronic pop.', [
    style('japanese-pop', { id: 'j-pop', name: 'J-Pop', origin: 'Japan', era: '1970s–Present', description: 'Melody-forward Japanese pop with harmonic motion, bright arrangement layers, and a clearly shaped vocal refrain.', tempoRange: [96, 138], preferredMeters: ['4/4'], scaleMode: 'major/minor pop', characteristicInstruments: ['voice', 'piano', 'synth', 'electric-guitar', 'bass', 'drums', 'strings', 'sampler'], coreConcepts: ['melodic development', 'bright extended harmony', 'layered arrangement', 'contrastive refrain'], rhythmicGrammar: ['A songlike verse builds through harmonic motion toward a memorable refrain, with instrumental colors changing between sections.'], signatureCell: 'A rising melodic pickup leads from moving verse harmony into a broad refrain.', sectionProgressions: { intro: ['D', 'A', 'Bm', 'G'], verse: ['D', 'A', 'Bm', 'G'], 'pre-chorus': ['Em', 'A', 'F#m', 'Bm'], chorus: ['G', 'A', 'D', 'Bm'], bridge: ['Em', 'F#m', 'G', 'A'] } }),
  ], ['J-Pop', 'City pop', 'Idol pop', 'Shibuya-kei'], ['melodic hooks', 'harmonic movement', 'arrangement contrast', 'vocal production']);

export const JAPANESE_ROCK_WORLD = world('japanese-rock', 'Japanese Rock', 'Japanese popular music', '#818FA8',
  'Japanese rock from guitar-band pop to heavier alternative styles, centered on tightly arranged bands and melodic, high-energy refrains.', [
    style('japanese-rock', { id: 'j-rock', name: 'J-Rock', origin: 'Japan', era: '1970s–Present', description: 'Guitar-led Japanese rock with active bass and drums, melodic lead lines, and dynamic verse-to-chorus contrast.', tempoRange: [104, 168], preferredMeters: ['4/4'], scaleMode: 'major/minor rock', characteristicInstruments: ['voice', 'electric-guitar', 'bass', 'drums', 'piano', 'synth', 'strings'], coreConcepts: ['guitar-band interplay', 'melodic lead guitar', 'driving bass', 'dynamic refrain', 'instrumental break'], rhythmicGrammar: ['A tight rock backbeat anchors active guitar and bass lines; verses leave vocal space and choruses widen into sustained chords and melodic hooks.'], signatureCell: 'Palm-muted verse riff opens into ringing power chords and a lead-guitar answer.', sectionProgressions: { intro: ['Em', 'C', 'G', 'D'], verse: ['Em', 'C', 'G', 'D'], chorus: ['G', 'D', 'Em', 'C'], bridge: ['C', 'D', 'Bm', 'Em'] } }),
  ], ['J-Rock', 'Alternative rock', 'Visual kei', 'Pop punk'], ['guitar-band interplay', 'melodic lead', 'dynamic contrast', 'instrumental breaks']);
