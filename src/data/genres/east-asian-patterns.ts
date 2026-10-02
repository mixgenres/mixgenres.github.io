import type { MusicalPattern, Role } from '../schema';

function pattern(worldId: string, slug: string, name: string, roles: Role[], onsets: number[], durations: number[], description: string, articulations: string[] = ['accent', 'legato']): MusicalPattern {
  return { id: `${worldId}-${slug}`, worldId, name, shortName: name, family: name,
    category: roles.includes('percussion') ? 'groove' : roles.includes('bass') ? 'bass' : roles.includes('harmony') ? 'comping' : 'phrasePattern',
    description, tags: [worldId, slug], approaches: roles.includes('bass') ? ['groove'] : ['phrase'], scopes: ['measure', 'phrase', 'region', 'track', 'song'],
    roles, meter: '4/4', cycleLength: 1, subdivisions: 16, onsetGrid: onsets, durationGrid: durations,
    accentProfile: onsets.map((_, i) => i === 0 ? 1 : i % 2 ? 0.65 : 0.8),
    velocityProfile: onsets.map((_, i) => i === 0 ? 0.9 : 0.7), articulations, supportedEnergy: [1, 2, 3, 4, 5], variants: [],
    provenance: 'Authored teaching cell; a practical arrangement model, not a transcription or universal genre rule.' };
}
export const EAST_ASIAN_PATTERNS: Record<string, MusicalPattern[]> = {
  kpop: [
    pattern('kpop', 'backbeat', 'Dance Pop Backbeat', ['percussion', 'drums', 'pulse'], [0, 2, 4, 6, 8, 10, 12, 14], [1,1,1,1,1,1,1,1], 'Eighth-note pulse with backbeat accents; the kit supplies kick, snare and hat colors.', ['accent', 'staccato']),
    pattern('kpop', 'bass-syncopation', 'Syncopated Pop Bass', ['bass'], [0, 3, 6, 8, 11, 14], [2,2,1,2,2,1], 'Short bass notes anticipate the backbeat and the next phrase.', ['staccato', 'accent']),
    pattern('kpop', 'topline', 'Vocal Hook Phrase', ['voice', 'lead', 'melody'], [0, 3, 6, 8, 12], [2,2,1,3,3], 'A singable hook mixes pickups with longer landing notes.'),
    pattern('kpop', 'chord-stabs', 'Offbeat Chord Stabs', ['harmony', 'rhythm', 'keyboard', 'guitar'], [2,6,10,14], [2,2,2,2], 'Short harmony leaves room for the bass and vocal topline.', ['staccato', 'accent']),
    pattern('kpop', 'vocal-stack', 'Held Vocal Harmony', ['texture', 'voice', 'harmony'], [0,8], [7,7], 'Long harmony notes widen a refrain without doubling every lead onset.', ['legato']),
    pattern('kpop', 'pickup', 'Sixteenth Note Pickup', ['lead', 'melody', 'rhythm'], [0,6,10,12,14,15], [4,2,1,1,1,1], 'A sustained phrase gives way to a short pickup into the next bar.'),
  ],
  'chinese-traditional': [
    pattern('chinese-traditional', 'shared-tune', 'Ornamented Shared Melody', ['lead', 'melody', 'voice'], [0,3,4,7,8,12], [2,1,2,1,3,3], 'A shared pentatonic tune has short connecting ornaments and longer phrase tones.'),
    pattern('chinese-traditional', 'plucked-answer', 'Plucked String Answer', ['harmony', 'rhythm', 'counterline', 'melody'], [2,6,9,12,14], [2,2,2,1,1], 'Plucked strings answer with a related melodic variant; this is heterophonic support rather than a pop chord loop.', ['pluck', 'legato']),
    pattern('chinese-traditional', 'wind-phrase', 'Breath Shaped Phrase', ['lead', 'melody'], [0,5,8,11], [4,2,2,3], 'Wind phrases leave a breathing gap before the return.'),
    pattern('chinese-traditional', 'qin-space', 'Guqin Pluck and Resonance', ['lead', 'harmony', 'texture', 'melody'], [0,7,12], [5,3,3], 'Sparse attacks leave time for resonance and ornamental pitch motion.', ['pluck', 'harmonic']),
    pattern('chinese-traditional', 'phrase-marker', 'Light Phrase Punctuation', ['percussion', 'pulse'], [0,12], [1,1], 'Percussion marks phrase points without a Western backbeat.', ['tone', 'accent']),
    pattern('chinese-traditional', 'cadence', 'Pentatonic Phrase Cadence', ['lead', 'melody', 'harmony'], [0,4,8], [3,3,7], 'A descending response settles onto a long final tune tone.'),
  ],
  'japanese-pop': [
    pattern('japanese-pop', 'backbeat', 'Pop Eighth Note Backbeat', ['percussion', 'drums', 'pulse'], [0,2,4,6,8,10,12,14], [1,1,1,1,1,1,1,1], 'A steady backbeat supports melodic and harmonic movement.', ['accent', 'staccato']),
    pattern('japanese-pop', 'moving-bass', 'Melodic Pop Bass', ['bass'], [0,4,6,8,11,12,14], [3,1,1,2,1,1,1], 'Held roots alternate with short connecting bass notes.', ['pluck', 'accent']),
    pattern('japanese-pop', 'vocal-pickup', 'Rising Vocal Pickup', ['lead', 'voice', 'melody'], [0,4,7,8,10,13,15], [3,2,1,1,2,1,1], 'A developed vocal phrase uses pickups to connect the verse and refrain.'),
    pattern('japanese-pop', 'piano-voicings', 'Moving Piano Voicings', ['harmony', 'keyboard', 'piano', 'rhythm'], [0,4,8,12], [3,3,3,3], 'Quarter-note harmony makes inner voice movement audible.', ['legato', 'accent']),
    pattern('japanese-pop', 'refrain-pad', 'Sustained Refrain Harmony', ['texture', 'harmony'], [0,8], [7,7], 'Strings and synthesizers sustain the refrain while leaving topline space.', ['legato']),
    pattern('japanese-pop', 'answer', 'Instrumental Hook Answer', ['lead', 'melody', 'counterline'], [2,5,8,10,14], [2,2,1,3,1], 'A short instrumental answer follows the vocal phrase.'),
  ],
  'japanese-rock': [
    pattern('japanese-rock', 'driving-backbeat', 'Driving Rock Backbeat', ['percussion', 'drums', 'pulse'], [0,2,4,6,8,10,12,14,15], [1,1,1,1,1,1,1,1,1], 'An eighth-note backbeat adds a final pickup hit.', ['accent', 'staccato']),
    pattern('japanese-rock', 'bass-drive', 'Driving Eighth Note Bass', ['bass'], [0,2,4,6,8,10,12,14], [1,1,1,1,1,1,1,1], 'A firm bass ostinato locks the guitar riff to the drums.', ['pluck', 'accent']),
    pattern('japanese-rock', 'muted-verse', 'Palm Muted Verse Riff', ['rhythm', 'harmony', 'guitar', 'rhythm-guitar'], [0,2,4,7,8,10,12,14], [1,1,2,1,1,1,1,1], 'Muted notes and longer accents shape the verse riff.', ['mute', 'accent']),
    pattern('japanese-rock', 'chorus-chords', 'Ringing Chorus Chords', ['harmony', 'rhythm', 'guitar'], [0,4,8,12], [3,3,3,3], 'Longer chord attacks widen the chorus.', ['accent', 'legato']),
    pattern('japanese-rock', 'melodic-lead', 'Melodic Guitar Answer', ['lead', 'melody', 'voice'], [0,3,6,8,11,14], [2,2,1,2,2,1], 'A melodic lead phrase connects shorter attacks to a sustained answer.', ['legato', 'accent', 'bend']),
    pattern('japanese-rock', 'bridge-space', 'Half Time Bridge Phrase', ['lead', 'melody', 'texture', 'harmony'], [0,8,12], [6,3,3], 'A sparse half-time phrase creates contrast while the song tempo stays fixed.', ['legato']),
  ],
};
