import type { GenreStyleDefinition } from '../../schema';

const makeStyle = (
  id: string, name: string, description: string, tempoRange: [number, number],
  characteristicInstruments: string[], coreConcepts: string[], rhythmicGrammar: string,
): GenreStyleDefinition => ({
  id: `uk-bass-${id}`, worldId: 'uk-bass', name,
  origin: 'United Kingdom', era: '1990s–Present', description,
  characteristicInstruments, preferredMeters: ['4/4'], tempoRange,
  keySubstyles: [name], coreConcepts, rhythmicGrammar: [rhythmicGrammar],
  signatureCell: rhythmicGrammar,
  grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'swung' },
  tuningSystem: '12-tet',
});

export const UK_BASS_STYLES: GenreStyleDefinition[] = [
  makeStyle('two-step', 'UK Garage 2-Step', 'Swung garage drums with a broken kick pattern and deep bass.', [128, 138], ['drums', 'synth', 'synth', 'voice'], ['Skipped kick pattern', 'Swung hats', 'Vocal samples'], 'A syncopated kick and backbeat leave space for swung hats and bass.'),
  makeStyle('bassline', 'Bassline', 'Bass-led garage with a strong four-beat kick and syncopated low-end hooks.', [128, 138], ['drums', 'synth', 'synth', 'voice'], ['Four-beat kick', 'Prominent bass hook', 'Garage swing'], 'A steady kick supports syncopated bass answers and clipped vocal phrases.'),
  makeStyle('grime', 'Grime', 'Sparse, forceful 140 BPM rhythms with dark bass and space for MC phrasing.', [138, 142], ['drums', 'synth', 'synth', 'voice'], ['140 BPM pulse', 'Sparse syncopation', 'MC call and response'], 'A stark half-time backbeat frames short syncopated bass and MC phrases.'),
  makeStyle('uk-funky', 'UK Funky', 'Percussion-led UK dance music with house pulse, syncopation, and vocal hooks.', [125, 135], ['drums', 'congas', 'shaker', 'synth', 'voice'], ['Hand percussion', 'House-derived pulse', 'Syncopated vocals'], 'Four-beat dance pulse meets interlocking hand percussion and bass.'),
  makeStyle('dubstep', 'Dubstep', 'Half-time drums, deep sub-bass, and spacious syncopated phrases.', [138, 142], ['drums', 'synth', 'synth', 'sampler'], ['Half-time snare', 'Sub-bass pressure', 'Space and drop'], 'A half-time snare anchors a sparse kick and bass response.'),
  makeStyle('future-garage', 'Future Garage', 'Atmospheric garage with shuffling breaks, sub-bass, and spacious textures.', [120, 135], ['drums', 'synth', 'synth', 'sampler', 'voice'], ['Shuffling 2-step', 'Atmospheric pads', 'Chopped vocal texture'], 'A loose 2-step break and subdued bass sit beneath spacious textures.'),
  makeStyle('speed-garage', 'Speed Garage', 'Driving garage with a four-beat kick, swung percussion, and rolling bass.', [130, 140], ['drums', 'synth', 'synth', 'voice'], ['Four-beat kick', 'Swinging percussion', 'Rolling bass'], 'A four-beat kick drives shuffled percussion and bass fills.'),
  makeStyle('post-dubstep', 'Post-Dubstep', 'A flexible bass-led style with broken rhythms, deep low end, and experimental space.', [110, 135], ['drums', 'synth', 'synth', 'sampler', 'voice'], ['Broken beat', 'Sub-bass', 'Sound design and space'], 'Broken drum phrases and evolving bass textures avoid a fixed dance grid.'),
];

export const UK_BASS_WORLD_DETAILS = {
  family: 'UK bass music',
  description: 'A UK dance-music umbrella connecting garage, bassline, grime, dubstep, and related bass-led styles.',
  substyles: UK_BASS_STYLES.map(style => style.name),
  artists: ['MJ Cole', 'Burial', 'Wiley', 'El-B', 'DJ Q', 'Roska', 'Skream', 'Silva Bumpa'],
  concepts: ['2-step', 'garage swing', 'synth', 'half-time backbeat', 'bassline', 'MC phrasing'],
  crossLinks: ['UK Garage ↔ House', 'Grime ↔ Hip-Hop', 'Dubstep ↔ Reggae'],
  signatureCell: 'A bass-led UK dance groove shaped by swung garage, broken beats, or half-time weight',
  grooveMechanics: { swingPercentage: 54, anticipationOffsetSteps: 0, microtimingFeel: 'swung' as const, humanizeJitterMs: 5 },
};
