import type { GenreSoloDefinition } from '../styles/schema';

const rhythmRoles = ['harmony', 'comp', 'guitar', 'rhythm-guitar', 'rhythmGuitar', 'piano', 'keyboard', 'bandoneon', 'pad', 'texture', 'bass', 'pulse', 'rhythm', 'percussion', 'aux-percussion', 'drums', 'drum-kit', 'drumKit', 'hand-percussion', 'bell', 'shaker'];

/** Product defaults, not claims that a genre has only one kind of solo. */
function definition(name: string, description: string, phraseBars = 4, rhythmOnly = false): GenreSoloDefinition {
  return {
    defaultMode: 'accompanied',
    modes: {
      accompanied: {
        name, description,
        accompaniment: rhythmOnly ? 'rhythm' : 'ensemble',
        supportRoles: rhythmOnly ? rhythmRoles : undefined,
        backingEnergyOffset: -1, phraseBars,
      },
      unaccompanied: {
        name: 'Unaccompanied solo',
        description: 'Only the chosen soloists play; backing instruments rest for this solo assignment.',
        accompaniment: 'none', backingEnergyOffset: 0, phraseBars,
      },
      trading: {
        name: 'Trading phrases',
        description: 'Chosen soloists take turns in equal phrases over the backing specified for this genre.',
        accompaniment: rhythmOnly ? 'rhythm' : 'ensemble',
        supportRoles: rhythmOnly ? rhythmRoles : undefined,
        backingEnergyOffset: -1, phraseBars, tradingBars: phraseBars,
      },
    },
  };
}

export const GENRE_SOLO_DEFINITIONS: Record<string, GenreSoloDefinition> = {
  tango: definition('Featured variation', 'A melodic variation over restrained ensemble accompaniment.'),
  salsa: definition('Descarga', 'Improvised phrases over the continuing clave, tumbao and guajeo.', 4),
  timba: definition('Improvised lead', 'Lead phrases over the continuing interlocking groove.'),
  jazz: definition('Solo over changes', 'Improvisation supported by bass, drums and chordal comping; other lead lines rest.', 4, true),
  swing: definition('Swing solo', 'A featured melodic improvisation with rhythm-section comping; other lead lines rest.', 4, true),
  blues: definition('Blues chorus', 'A featured blues line over the rhythm section, with twelve-bar chorus-length phrases.', 12, true),
  afrobeats: definition('Featured hook', 'A featured melodic line over the continuing dance groove.'),
  bachata: definition('Requinto feature', 'Melodic requinto-style phrases over a softer bachata accompaniment.'),
  brazilian: definition('Instrumental feature', 'Melodic variations over the selected style’s Brazilian groove.'),
  country: definition('Instrumental break', 'An instrumental melody or variation over the band’s accompaniment.'),
  cumbia: definition('Melodic feature', 'Lead variations over a continuing cumbia accompaniment.'),
  disco: definition('Instrumental feature', 'A featured instrumental line over the dance pulse.'),
  electronic: definition('Synth feature', 'A featured synthesized line over the programmed groove.', 8),
  folk: definition('Tune variation', 'A featured tune variation with restrained accompaniment.'),
  funk: definition('Groove solo', 'Syncopated solo phrases over the continuing pocket.'),
  gospel: definition('Featured response', 'A featured melodic response with ensemble support.'),
  'hip-hop': definition('Instrumental feature', 'A featured instrumental phrase over the beat.'),
  house: definition('Synth feature', 'A featured line over the continuing house pulse.', 8),
  kizomba: definition('Melodic feature', 'A melodic feature over a restrained dance accompaniment.'),
  flamenco: definition('Falseta with compás', 'A featured melodic passage over compás and rhythmic harmony; other lead lines rest.', 4, true),
  metal: definition('Lead break', 'A lead passage over restrained riff and rhythm accompaniment.'),
  'r-and-b': definition('Melodic feature', 'A featured line over a restrained pocket.'),
  reggae: definition('Instrumental feature', 'A melodic feature over the continuing bass, skank and drum groove.'),
  reggaeton: definition('Instrumental feature', 'A featured melodic phrase over dembow accompaniment.'),
  rock: definition('Lead break', 'A featured instrumental passage over the band’s backing.'),
  ska: definition('Instrumental break', 'A melodic feature over offbeat accompaniment.'),
  soul: definition('Featured response', 'A melodic feature over a restrained soul pocket.'),
  zouk: definition('Melodic feature', 'A featured melodic line over the rolling dance groove.'),
  'drum-and-bass': definition('Melodic feature', 'A featured line over continuing breakbeat and bass accompaniment.', 8),
  industrial: definition('Instrumental feature', 'A featured instrumental phrase over the mechanical groove.', 8),
  'punk-hardcore': definition('Short lead break', 'A short instrumental feature over the driving band.', 2),
  'uk-bass': definition('Melodic feature', 'A featured line over the selected style’s broken club groove.', 8),
  kpop: definition('Vocal or instrumental feature', 'A singer or lead instrument takes the hook while the bass, beat, and selected harmonic support continue.', 4, true),
  'chinese-traditional': definition('Ornamented melodic variation', 'A lead instrument varies the tune over a sparse heterophonic ensemble; an unaccompanied guqin passage is also idiomatic.', 4),
  'japanese-pop': definition('Melodic feature', 'A vocal or instrumental lead takes a short melodic feature over the selected pop backing.', 4, true),
  'japanese-rock': definition('Lead break', 'A guitar or vocal feature sits over the rhythm section while other lead lines rest.', 4, true),
};

// A palo's own pitch language wins: flamenco also uses major and minor tonality.
for (const policy of Object.values(GENRE_SOLO_DEFINITIONS.flamenco.modes)) policy.scaleMode = 'style';
for (const policy of Object.values(GENRE_SOLO_DEFINITIONS.blues.modes)) policy.scaleMode = 'blues';
GENRE_SOLO_DEFINITIONS.blues.modes.trading.tradingBars = 4;
GENRE_SOLO_DEFINITIONS.blues.modes.trading.description = 'Four-bar responses over the blues backing; the chorus continues through each handoff.';
GENRE_SOLO_DEFINITIONS.flamenco.modes.unaccompanied.name = 'Solo toque';
GENRE_SOLO_DEFINITIONS.flamenco.modes.unaccompanied.description = 'The chosen instrument carries melody and time without ensemble backing; the selected palo’s pitch language and compás remain.';
GENRE_SOLO_DEFINITIONS.flamenco.modes.trading.name = 'Compás-aligned responses';
GENRE_SOLO_DEFINITIONS.flamenco.modes.trading.description = 'Featured instruments exchange phrases on complete compás boundaries with rhythmic backing.';

for (const genre of ['jazz', 'swing', 'blues']) {
  GENRE_SOLO_DEFINITIONS[genre].modes.trading.tradingRestRoles = ['percussion', 'drums', 'drum-kit', 'drumKit', 'aux-percussion'];
}
