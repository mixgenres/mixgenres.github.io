import type { GenreStyleDefinition } from '../../schema';

const makeStyle = (
  id: string, name: string, origin: string, description: string,
  tempoRange: [number, number], characteristicInstruments: string[],
  coreConcepts: string[], rhythmicGrammar: string, signatureCell: string,
): GenreStyleDefinition => ({
  id: `drum-and-bass-${id}`, worldId: 'drum-and-bass', name, origin,
  era: '1990s–Present', description, characteristicInstruments,
  preferredMeters: ['4/4'], tempoRange, keySubstyles: [name], coreConcepts,
  rhythmicGrammar: [rhythmicGrammar], signatureCell,
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' },
  tuningSystem: '12-tet',
});

export const DRUM_AND_BASS_STYLES: GenreStyleDefinition[] = [
  makeStyle('jungle', 'Jungle', 'United Kingdom', 'Ragga vocals, chopped breakbeats, and rolling sub-bass.', [160, 175], ['drums', 'sampler', 'synth', 'bass', 'voice'], ['Amen and break chopping', 'Reggae and dancehall bass influence', 'Ragga vocal samples'], 'Syncopated breakbeats with rapid edits over a deep sub-bass line.', 'A chopped break answers the snare while a sub-bass anchors the bar.'),
  makeStyle('liquid', 'Liquid Drum & Bass', 'United Kingdom', 'Melodic, soulful drum and bass with warm harmony and flowing breaks.', [165, 175], ['drums', 'upright-bass', 'piano', 'rhodes', 'voice'], ['Soulful harmony', 'Melodic bass lines', 'Smooth rolling breaks'], 'Fast breakbeats stay light beneath sustained chords and melodic bass.', 'A rolling break supports a warm chord progression and singing bass line.'),
  makeStyle('jump-up', 'Jump-Up', 'United Kingdom', 'Direct dance-floor drum and bass with punchy drums and a prominent bass hook.', [170, 176], ['drums', 'synth', 'synth', 'sampler'], ['Bass call and response', 'Short hook phrases', 'Strong dance-floor backbeat'], 'A clear kick and snare frame short, syncopated bass responses.', 'A bass hook answers each snare-led break phrase.'),
  makeStyle('techstep', 'Techstep', 'United Kingdom', 'Dark, stripped drum and bass built around tense breaks and hard-edged bass.', [170, 178], ['drums', 'synth', 'synth', 'sampler'], ['Dark bass design', 'Tight break programming', 'Sparse harmonic movement'], 'A clipped break and repeating low bass figure drive the track.', 'A dry break locks to a repeating, distorted bass motif.'),
  makeStyle('neurofunk', 'Neurofunk', 'United Kingdom', 'Highly produced drum and bass with intricate, modulated bass lines.', [172, 178], ['drums', 'synth', 'synth', 'sampler', 'synth', 'synth'], ['Modulated bass sound design', 'Detailed drum edits', 'Counter-rhythmic layers'], 'Interlocking bass phrases and precise break edits create a dense groove.', 'Two modulated bass phrases interlock around a tight break.'),
  makeStyle('dancefloor', 'Dancefloor Drum & Bass', 'United Kingdom', 'Bright, high-impact drum and bass with clear hooks and large section changes.', [172, 178], ['drums', 'synth', 'synth', 'voice'], ['Anthemic hooks', 'Broad synth chords', 'Builds and drops'], 'A forceful break supports a memorable lead hook and contrastive drops.', 'A full break and synth hook return together after a breakdown.'),
  makeStyle('atmospheric', 'Atmospheric Drum & Bass', 'United Kingdom', 'Airy pads and spacious melodic lines over fast, restrained breaks.', [165, 175], ['drums', 'synth', 'synth', 'flute', 'piano'], ['Long pads', 'Open melodic space', 'Restrained breakbeats'], 'Fast breaks remain soft while sustained textures carry the harmony.', 'A light break runs beneath a spacious pad and slow melody.'),
  makeStyle('halftime', 'Half-Time Drum & Bass', 'United Kingdom', 'A half-time snare feel keeps the drum and bass tempo while opening the groove.', [160, 176], ['drums', 'synth', 'synth', 'sampler'], ['Half-time backbeat', 'Sub-bass phrases', 'Sparse syncopation'], 'The snare marks a broad half-time pulse against a fast underlying tempo.', 'A sparse half-time backbeat leaves room for a rolling sub phrase.'),
];

export const DRUM_AND_BASS_WORLD_DETAILS = {
  family: 'Drum and bass',
  description: 'Fast breakbeat-driven dance music built around drums and bass.',
  substyles: DRUM_AND_BASS_STYLES.map(style => style.name),
  artists: ['Goldie', 'Roni Size', 'LTJ Bukem', 'Ragga Twins', 'Andy C', 'Shy FX', 'Calibre', 'High Contrast'],
  concepts: ['breakbeat', 'synth', 'Amen break', 'syncopation', 'bass call and response', 'build and drop'],
  crossLinks: ['Jungle ↔ Reggae', 'Liquid DnB ↔ Soul', 'Techstep ↔ Techno'],
  signatureCell: 'Fast syncopated breakbeat over a deep, independent bass line',
  grooveMechanics: { swingPercentage: 50, anticipationOffsetSteps: 0, microtimingFeel: 'straight' as const, humanizeJitterMs: 3 },
};
