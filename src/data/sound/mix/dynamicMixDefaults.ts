import type { MixContract } from '../schema/dynamicMix';

/** No automatic levelling is introduced into worlds that have not been calibrated. */
export const DYNAMIC_MIX_DEFAULTS: Required<MixContract> = {
  enabled: false,
  character: { dryness: .6, bassForward: .5, width: .5, brightness: .5, compressionRatio: 1.6,
    transientSnap: .4, subHarmonics: 0, sidechainDucking: 0, delaySend: 0, delayTimeSeconds: .32,
    delayFeedback: .28, delayToneHz: 4200, reverbType: 'room', saturationType: 'tape' },
  stage: { width: .4, depthRange: .35, centerAnchorRoles: ['low-anchor', 'pulse-anchor'],
    rolePan: {}, roleWidth: {}, preserveNaturalStage: true },
  dynamics: { foregroundContrastDb: 2, maxTrackBoostDb: 3, maxTrackCutDb: -5, ensembleBreathing: .5,
    crescendoExpansion: .5, silenceContrast: .5, peakSectionHeadroomDb: 3, busCompressionAmount: 0,
    busCompressionRatio: 1.6, densityCompensation: .3, sharedForeground: true },
  masking: { enabled: true, minOverlap: .2, minPriorityDifference: .15, maxPresenceCutDb: 2,
    maxBodyCutDb: .8, maxGainCutDb: .6, amount: .5, preserveCounterpoint: true },
  ambience: { roomSize: .35, foregroundDepthDifference: .35, reverbSend: .08, delaySend: 0,
    bloom: .3, preDelayMs: 12 },
  roles: {
    foreground: { priority: .9, foregroundGainDb: 1.2, depth: .2, mayYieldInGain: false },
    counterline: { priority: .8, foregroundGainDb: .8, depth: .3 },
    answer: { priority: .8, foregroundGainDb: 1, depth: .3 },
    'harmonic-support': { priority: .55, depth: .5, mayYieldSpectrally: true, mayYieldInGain: true },
    'rhythmic-support': { priority: .65, depth: .4, protectRhythmicDefinition: true, mayYieldSpectrally: true },
    'low-anchor': { priority: .85, depth: .3, protectLowEnd: true, protectRhythmicDefinition: true, mayYieldInGain: false },
    'pulse-anchor': { priority: .8, depth: .3, protectRhythmicDefinition: true, mayYieldInGain: false, mayYieldSpectrally: true },
    texture: { priority: .3, depth: .7, mayYieldSpectrally: true, mayYieldInGain: true },
    impact: { priority: .75, depth: .3 }, transition: { priority: .65, depth: .4 },
  },
  sections: {},
  transitions: { attackMs: 120, releaseMs: 450, sectionTransitionMs: 700, foregroundHandoffMs: 350,
    spectralRampMs: 250, lookaheadMs: 100 },
  buses: { glueAmount: .1, lowAnchorCompression: 0, rhythmCompression: 0, melodicCompression: 0,
    ensembleCompression: 0, parallelCompression: 0, sharedRoom: true, roleBus: {} },
};
