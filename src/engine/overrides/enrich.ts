import { buildInstrumentDSPProfile } from './instrument';
import type { InstrumentDef, TransitionMechanics, EnvironmentalReactivity, SpatialRadiation } from '../../data/instruments/schema/instrument-def';

export function enrichInstrumentPhysics(d: InstrumentDef): InstrumentDef {
  const id = d.id;
  const isString = d.family === 'plucked' || d.family === 'bowed';
  const isPerc = d.family === 'hand-drums' || d.family === 'metal-and-wood' || d.family === 'kit';
  const isWind = d.family === 'winds' || d.family === 'brass';
  const isFreeReed = ['accordion', 'bandoneon', 'concertina', 'harmonium', 'melodica', 'sho', 'harmonica'].includes(id);
  const isWoodwindReed = id.includes('sax') || id.includes('clarinet') || id.includes('oboe') || id.includes('bassoon');
  const isLipReed = id.includes('trumpet') || id.includes('trombone') || id.includes('horn') || id === 'tuba';
  const isStruckAcousticString = id === 'piano' || id === 'dulcimer' || id === 'celeste';

  const bodyConstruction = d.bodyConstruction ?? (d.family === 'plucked'
    ? (/electric|overdrive|distortion|pick-bass|slap-bass|sub-bass/i.test(id) ? 'solid-electric' : 'wood-box')
    : undefined);

  // Never invent a generic GM drum kit for arbitrary unpitched/effect objects.
  // Only actual percussion families may receive the low/mid/high fallback.
  const isPercussionFamily = d.family === 'hand-drums' || d.family === 'metal-and-wood' || d.family === 'body-percussion' || d.family === 'kit';
  const drum = d.drum ?? (d.voicing === 'unpitched' && isPercussionFamily ? { low: 36, mid: 38, high: 42 } : undefined);

  const transitionMechanics: TransitionMechanics = d.transitionMechanics ?? {
    legatoModes: isString ? ['hammer-on', 'pull-off', 'slide'] : isWind ? ['lip-slur', 'valve-cross'] : ['glissando'],
    stringSlideFrictionNoise: isString ? 0.15 : 0,
    valveActuationTimeMs: isWind ? 12 : 0,
    mechanicalKeyClickLevel: isFreeReed || isWind ? 0.08 : 0.02,
    portamentoCurve: 'continuous-linear',
  };

  const environmentalReactivity: EnvironmentalReactivity = d.environmentalReactivity ?? {
    tuningTemperatureCoefficientCents: isLipReed ? 0.8 : isString ? -0.5 : 0.1,
    randomTuningDriftCents: 1.2,
    harmonicSplitProbability: isLipReed || isWind ? 0.02 : 0,
  };

  const spatialRadiation: SpatialRadiation = d.spatialRadiation ?? {
    radiationPattern: isPerc ? 'omnidirectional' : 'cardioid',
    directionalCutoffHz: 2500,
    defaultMicrophoneArray: {
      technique: 'XY',
      distanceMeters: 1.2,
      offAxisDegrees: 15,
    },
  };

  const model = isStruckAcousticString ? 'struck-string'
    : isString ? (d.family === 'bowed' ? 'bowed-string' : 'plucked-string')
    : isPerc ? ((d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 'membrane' : 'metal-impact')
    : isFreeReed || isWoodwindReed ? 'blown-reed'
    : isLipReed ? 'lip-reed'
    : (isWind || id.includes('organ')) ? 'blown-air'
    : d.family === 'voice' ? 'voice-source'
    : d.family === 'electronic' ? (id.includes('fm') ? 'fm-synth' : id.includes('303') || id.includes('lead') || id.includes('pad') || id.includes('synth') ? 'subtractive-synth' : 'sample-playback')
    : 'hybrid';

  const parameters: Record<string, number | undefined> = {
    stiffness: isString ? (id.includes('bass') ? 0.72 : id.includes('guitar') ? 0.58 : 0.45) : undefined,
    damping: isString ? 0.32 : isPerc ? 0.45 : 0.28,
    inharmonicity: isString ? 0.22 : undefined,
    bodyResonance: isString || isStruckAcousticString ? 0.72 : 0.4,
    airResonance: (isWind || isFreeReed) ? 0.7 : undefined,
    membraneTension: isPerc && (d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 0.62 : undefined,
    membraneDamping: isPerc && (d.bodyConstruction ?? bodyConstruction) === 'skin-faced' ? 0.38 : undefined,
    pickupPosition: d.family === 'plucked' && (id.includes('electric') || (d.bodyConstruction ?? bodyConstruction) === 'solid-electric') ? 0.42 : undefined,
    pickupDistance: d.family === 'plucked' && (id.includes('electric') || (d.bodyConstruction ?? bodyConstruction) === 'solid-electric') ? 0.3 : undefined,
    nonlinearDrive: id.includes('distortion') || id.includes('overdrive') || id.includes('acid') ? 0.72 : 0.08,
    saturation: id.includes('tape') || id.includes('echo') ? 0.48 : 0.12,
    pluckPosition: isString && d.family === 'plucked' ? 0.24 : undefined,
    pluckHardness: isString && d.family === 'plucked' ? (d.excitationType === 'hard-pick' ? 0.75 : 0.55) : undefined,
    reedStiffness: (isFreeReed || isWoodwindReed) ? 0.52 : undefined,
    breathNoise: (isWind || isFreeReed || d.family === 'voice') ? 0.18 : undefined,
    transientSharpness: isPerc ? 0.76 : 0.42,
    noiseAmount: isPerc || isWind ? 0.22 : 0.06,
  };
  const cleanParameters = Object.fromEntries(Object.entries(parameters).filter(([, v]) => v !== undefined)) as Record<string, number>;
  const articulations = d.techniques.articulations;
  return {
    ...d,
    dspProfile: d.dspProfile ?? buildInstrumentDSPProfile(d),
    bodyConstruction: d.bodyConstruction ?? bodyConstruction,
    drum: d.drum ?? drum,
    transitionMechanics,
    environmentalReactivity,
    spatialRadiation,
    physicalModel: d.physicalModel ?? {
      model, parameters: cleanParameters,
      signalChain: d.family === 'electronic' ? ['preamp', 'filter', 'compressor', 'delay', 'reverb'] : ['preamp', 'eq', 'compressor', 'reverb'],
      synthesisNotes: ['Use velocity as excitation energy, not only loudness.', 'Preserve articulation-specific transients and release tails.', 'Apply style profile before humanization; never randomize idiomatic accents.']
    },
    articulationModels: d.articulationModels ?? articulations.map(a => ({
      id: a, method: a, synthesis: 'hybrid' as const,
      parameters: { intensity: 0.65, durationScale: 1, noiseMix: a.includes('ghost') || a.includes('breath') ? 0.3 : 0.08 }
    }))
  };
}

