import assert from 'node:assert/strict';
import { buildArrangementContext, decide } from '../src/engine/sheet/arrangementContext.ts';
import { realizeMidi } from '../src/engine/band/phrasePerformance.ts';

const contract = {
  interactionModel: 'homophonic',
  energyMappings: {
    1: { activity: 0.2, brightness: 0.2, fxWetness: 1.2 },
    2: { activity: 0.4, brightness: 0.4, fxWetness: 1.1 },
    3: { activity: 0.6, brightness: 0.6, fxWetness: 1 },
    4: { activity: 0.8, brightness: 0.8, fxWetness: 0.9 },
    5: { activity: 1, brightness: 1, fxWetness: 0.8 },
  },
} as any;

{
    const voices = [
      { id: 'gtr', instrumentId: 'spanish-guitar', name: 'Flamenco Guitar', instrument: 'Flamenco Guitar', role: 'lead', spotlight: 'auto' },
      { id: 'violin', instrumentId: 'violin', name: 'Violin', instrument: 'Violin', role: 'lead', spotlight: 'auto' },
    ] as any[];
    const context = buildArrangementContext(voices, contract, 0.6);
    assert.deepEqual(context.spotlightedTrackIds, [], 'featured instrument labels do not affect energy-driven behavior');
  }

{
    const voices = [
      { id: 'gtr', instrumentId: 'spanish-guitar', name: 'Flamenco Guitar', instrument: 'Flamenco Guitar', role: 'lead', spotlight: 'off' },
      { id: 'violin', instrumentId: 'violin', name: 'Violin', instrument: 'Violin', role: 'lead', spotlight: 'on' },
    ] as any[];
    const context = buildArrangementContext(voices, contract, 0.6);
    assert.deepEqual(context.spotlightedTrackIds, ['violin']);
  }

{
    const voices = [
      { id: 'palmas', instrumentId: 'palmas', name: 'Palmas', instrument: 'Palmas', role: 'percussion', spotlight: 'on' },
      { id: 'lead', instrumentId: 'guitar', name: 'Guitar', instrument: 'Guitar', role: 'lead', spotlight: 'auto' },
    ] as any[];
    const context = buildArrangementContext(voices, contract, 0.2);
    const decision = decide(voices[0].id, context);
    assert.equal(decision.plays, true);
    assert.equal(context.energyByTrack.palmas, 1);
  }
{
  const midi = realizeMidi({
    profile: { instrumentId: 'flute', family: 'winds', capabilities: { polyphony: 1, comfortableLowMidi: 60, lowMidi: 48, highMidi: 84 } },
    pattern: { roles: [] }, chord: 'Cm', phraseIndex: 0, barIndex: 0, onsetIndex: 0, phrasePosition: 0.2,
    soloist: true, soloGrammar: { scaleMode: 'phrygian', targetToneStrategy: 'chord-tone-on-beat-1', phraseStages: ['state'] },
    hybridTheory: { melody: { targetDegrees: [2], contour: [], approachDegrees: [] }, bass: { chromaticApproach: false } },
    hostProfile: { register: { highBias: 0 } },
  } as any, 0, 4, { previousMidi: 60, lastPhraseIndex: -1, phraseIndex: 0, contour: 0 });
  assert.equal(midi[0] % 12, 1, 'Phrygian second should be a semitone above tonic');
}
{
  const voices = [
    { id: 'horns', instrumentId: 'brass', name: 'Brass section', instrument: 'Brass section', role: 'harmony', spotlight: 'auto' },
    { id: 'piano', instrumentId: 'piano', name: 'Piano', instrument: 'Piano', role: 'harmony', spotlight: 'auto' },
  ] as any[];
  const context = buildArrangementContext(voices, contract, 1);
  assert.deepEqual(context.spotlightedTrackIds, [], 'section and part labels do not create automatic spotlights');
}
console.log('Arrangement/spotlight and solo-mode tests passed (5 cases).');
