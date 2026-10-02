import type { InstrumentDef } from '../../instruments/schema/instrument-def';
import { instrumentDSPOverrides } from './index';
import type { DspMode, InstrumentDSPProfile } from '../schema/dsp-profile';

const woodModes = (ratios: number[], gain = 0.16, q = 2.2): DspMode[] =>
  ratios.map((ratio, i) => ({ ratio, q: q - i * 0.15, gain: gain * (1 - i * 0.18) }));

const plucked = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const metalPick = d.excitationType === 'hard-pick' || d.excitationType === 'plectrum';
  const nail = d.excitationType === 'nail';
  const board = d.bodyConstruction === 'board';
  const skin = d.bodyConstruction === 'skin-faced';
  const electric = d.bodyConstruction === 'solid-electric' || /electric|distortion|overdrive|clavinet/.test(id);
  const courses = d.courses ?? d.luthierPhysics?.courses ?? 1;
  const isBanjo = id === 'banjo';
  const isFlamenco = /flamenco|spanish|nylon|vihuela|requinto|jarana|cuatro|tres/.test(id);
  const isJawari = /sitar|shamisen/.test(id);
  return {
    familyModel: 'pluck',
    excitationDynamics: {
      hardness: metalPick ? 0.82 : nail ? 0.68 : 0.48,
      pressureSensitivity: 0.72,
      nonlinearDrive: electric ? 0.42 : (isBanjo ? 0.22 : 0.10),
      attackCollision: metalPick ? 0.9 : nail ? 0.76 : 0.52,
      spectralSpread: isBanjo ? 0.95 : nail ? 0.72 : 0.5,
      directionalAsymmetry: nail ? 0.25 : 0.12,
    },
    coupledResonators: {
      bodyModes: woodModes(board ? [0.8, 1.7, 3.2] : skin ? [1.0, 2.1, 4.0] : [0.65, 1.4, 2.6], isBanjo ? 0.20 : 0.15),
      sympathetic: courses > 1 || !!d.sympatheticStrings || isBanjo || isJawari
        ? { coupling: isBanjo ? 0.30 : 0.18, q: isBanjo ? 35 : 24, ratios: isBanjo ? [1, 1.5, 2, 3] : [1, 1.125, 1.25, 1.5, 2], decayScale: isBanjo ? 0.45 : 0.8 }
        : undefined,
      bridge: { stiffness: isJawari ? 0.45 : 0.7, buzz: isJawari ? 0.78 : 0.12, settlingMs: isJawari ? 180 : 70 },
      soundboard: !electric ? { thudHz: isFlamenco ? 185 : 145, thudGain: isFlamenco ? 0.18 : 0.07, topModes: isFlamenco ? [190, 320, 580] : [120, 240, 480], coupling: isFlamenco ? 0.75 : 0.48 } : undefined,
    },
    mechanicalArtifacts: {
      airHiss: 0, keyThud: 0, valveClick: 0,
      fretBuzz: electric ? 0.18 : 0.11,
      stringSqueak: isFlamenco ? 0.16 : 0.09,
      pickZing: metalPick ? (isBanjo ? 0.42 : 0.20) : 0.04,
      handContact: 0.08, bodyKnock: isFlamenco ? 0.22 : 0.08,
      rimImpact: isBanjo ? 0.12 : 0, bellowsNoise: 0, damperNoise: 0.04,
    },
    articulationPhysics: {
      strikeZoneLocation: isBanjo ? 'mixed' : board ? 'bridge' : 'mixed',
      fleshVsNail: nail ? 0.85 : 0.25,
      handDamping: /muted|palm/.test(id) ? 0.82 : 0.12,
      attackToPitchCoupling: isBanjo ? 0.35 : 0.18,
      releaseCoupling: 0.2,
      continuousSustain: false,
      noteTransition: /slide|fretless/.test(id) ? 'slide' : 'retrigger',
    },
    genreDialects: {
      flamenco: { excitationBias: 0.15, attack: 1.2, body: 1.15, articulation: ['rasgueado', 'golpe', 'picado', 'alzapua'] },
      tango: { damping: 0.12, attack: 1.05, articulation: ['arrastre', 'staccato'] },
      bluegrass: { excitationBias: 0.16, brightness: 1.12, attack: 1.18 },
      jazz: { damping: 0.24, brightness: 0.86 },
      bossa: { damping: 0.16, excitationBias: -0.08 },
    },
  };
};

const bowed = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const fiddle = id === 'violin';
  const erhu = id === 'erhu' || id === 'jinghu';
  const heavy = /cello|bass|contrabass|upright/.test(id);
  return {
    familyModel: 'bow',
    excitationDynamics: {
      hardness: fiddle ? 0.62 : 0.48, pressureSensitivity: 0.86, nonlinearDrive: heavy ? 0.18 : 0.10,
      attackCollision: fiddle ? 0.70 : 0.52, spectralSpread: 0.52, directionalAsymmetry: 0.68,
    },
    coupledResonators: {
      bodyModes: woodModes(heavy ? [0.42, 0.91, 1.55, 2.2] : [0.72, 1.35, 2.1, 3.4], heavy ? 0.20 : 0.16, 2.5),
      bridge: { stiffness: erhu ? 0.32 : 0.65, buzz: fiddle ? 0.16 : 0.06, settlingMs: 110 },
      soundboard: { thudHz: heavy ? 90 : erhu ? 210 : 170, thudGain: heavy ? 0.10 : 0.05, topModes: heavy ? [95, 180, 310] : [240, 460, 720], coupling: 0.55 },
    },
    mechanicalArtifacts: {
      airHiss: 0, keyThud: 0, valveClick: 0, fretBuzz: 0,
      stringSqueak: erhu ? 0.20 : 0.08, pickZing: 0,
      handContact: 0.08, bodyKnock: 0.05, rimImpact: 0, bellowsNoise: 0, damperNoise: 0.08,
    },
    articulationPhysics: {
      strikeZoneLocation: erhu ? 'fingerboard' : 'bridge', fleshVsNail: 0,
      handDamping: 0.08, attackToPitchCoupling: 0.26, releaseCoupling: 0.42,
      continuousSustain: true, noteTransition: erhu ? 'slide' : 'legato',
    },
    genreDialects: {
      tango: { excitationBias: 0.14, attack: 1.18, damping: 0.08, articulation: ['marcato', 'arrastre', 'chicharra'] },
      flamenco: { excitationBias: 0.05, attack: 1.1 },
      celtic: { excitationBias: 0.08, attack: 1.12 },
      classical: { damping: 0.05, brightness: 0.95 },
    },
  };
};

const membrane = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const conga = /conga/.test(id);
  const tabla = /tabla/.test(id);
  const frame = /pandeiro|tambourine|bendir|frame/.test(id);
  const metal = /timbal|timbale|snare|steel|metal/.test(id);
  return {
    familyModel: 'membrane',
    excitationDynamics: {
      hardness: tabla ? 0.42 : conga ? 0.48 : 0.65, pressureSensitivity: 0.64,
      nonlinearDrive: metal ? 0.16 : 0.08, attackCollision: conga ? 0.88 : 0.72,
      spectralSpread: conga ? 0.86 : 0.68, directionalAsymmetry: 0.45,
    },
    coupledResonators: {
      bodyModes: woodModes(conga ? [0.52, 1.0, 1.85] : tabla ? [0.62, 1.22, 2.05] : [0.8, 1.7, 2.9], 0.20, 3.0),
      membrane2D: { radial: conga ? 0.82 : tabla ? 0.90 : 0.68, circular: conga ? 0.58 : 0.72, tension: d.luthierPhysics?.tension ?? 0.72, damping: d.luthierPhysics?.damping ?? 0.4, strikeZoneSensitivity: 0.92 },
      shell: { resonance: conga ? 0.82 : metal ? 0.58 : 0.38, coupling: conga ? 0.68 : 0.45, inharmonicity: metal ? 0.42 : 0.16 },
    },
    mechanicalArtifacts: {
      airHiss: 0, keyThud: 0, valveClick: 0, fretBuzz: 0, stringSqueak: 0, pickZing: 0,
      handContact: conga || tabla ? 0.34 : 0.20, bodyKnock: conga ? 0.18 : 0.08,
      rimImpact: frame || metal ? 0.34 : 0.12, bellowsNoise: 0, damperNoise: 0.12,
    },
    articulationPhysics: {
      strikeZoneLocation: conga || tabla ? 'mixed' : metal ? 'center' : 'edge',
      fleshVsNail: tabla ? 0.72 : conga ? 0.92 : 0.28,
      handDamping: conga ? 0.58 : tabla ? 0.28 : 0.10,
      attackToPitchCoupling: tabla ? 0.58 : 0.38, releaseCoupling: 0.22,
      continuousSustain: false, noteTransition: 'retrigger',
    },
    genreDialects: {
      salsa: { attack: 1.15, excitationBias: 0.12, articulation: ['open', 'slap', 'heel', 'toe', 'tapao'] },
      rumba: { attack: 1.20, brightness: 1.10, articulation: ['slap', 'open', 'muted'] },
      cumbia: { damping: 0.18, attack: 0.95 },
      hindustani: { brightness: 0.98, articulation: ['bol', 'na', 'tin', 'dha', 'meend'] },
    },
  };
};

const bellows = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const bandoneon = id === 'bandoneon';
  return {
    familyModel: 'bellows',
    excitationDynamics: {
      hardness: bandoneon ? 0.66 : 0.42, pressureSensitivity: 0.94,
      nonlinearDrive: bandoneon ? 0.32 : 0.14, attackCollision: bandoneon ? 0.86 : 0.48,
      spectralSpread: 0.64, directionalAsymmetry: 0.90,
      openingPullingBias: 1.05, closingPushingBias: bandoneon ? 1.22 : 1.08,
      bisonoricAsymmetry: bandoneon ? {
        opening: { attack: 1.10, formantShift: -0.08, pitchDriftCents: -3.5, pressure: 0.88 },
        closing: { attack: 1.32, formantShift: 0.11, pitchDriftCents: 2.8, pressure: 1.12 },
      } : undefined,
      kneeDropImpact: bandoneon ? { threshold: 0.72, gain: 0.9, saturation: 0.86, decayMs: 18 } : undefined,
    },
    coupledResonators: {
      bodyModes: woodModes(bandoneon ? [0.7, 1.0, 1.52, 2.1] : [0.8, 1.0, 1.5], bandoneon ? 0.18 : 0.14),
      airModes: [{ ratio: 1, q: 3.5, gain: 0.20 }, { ratio: 2, q: 2.8, gain: 0.10 }],
      sympathetic: { coupling: bandoneon ? 0.16 : 0.10, q: 30, ratios: [1, 2, 4], decayScale: 0.65 },
    },
    mechanicalArtifacts: {
      airHiss: 0.22, keyThud: 0.14, valveClick: 0.08, fretBuzz: 0, stringSqueak: 0,
      pickZing: 0, handContact: 0.18, bodyKnock: bandoneon ? 0.28 : 0.12,
      rimImpact: 0, bellowsNoise: bandoneon ? 0.34 : 0.22, damperNoise: 0.08,
    },
    articulationPhysics: {
      strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0.10,
      attackToPitchCoupling: 0.28, releaseCoupling: 0.72, continuousSustain: true,
      noteTransition: 'bellows-flow',
    },
    genreDialects: {
      tango: { excitationBias: 0.18, attack: 1.2, brightness: 1.05, articulation: ['marcato', 'arrastre', 'bellows-slap'] },
      vallenato: { excitationBias: 0.12, attack: 1.05, articulation: ['staccato', 'grace'] },
      cumbia: { damping: 0.10, attack: 1.0 },
    },
  };
};

const reservoir = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const highland = id === 'bagpipes';
  return {
    familyModel: 'air',
    excitationDynamics: {
      hardness: 0.34, pressureSensitivity: 0.88, nonlinearDrive: 0.18, attackCollision: 0.46,
      spectralSpread: 0.42, directionalAsymmetry: 0.54,
      continuousReservoir: {
        pressure: highland ? 0.90 : 0.72, pressureLoss: highland ? 0.09 : 0.16,
        chokeThreshold: highland ? 0.58 : 0.38, minimumFlow: 0.72,
        dronePhaseLock: highland ? 0.96 : 0.72, articulationNeverSilences: true,
      },
    },
    coupledResonators: {
      bodyModes: woodModes(highland ? [0.5, 1, 1.5, 2] : [0.65, 1.0, 1.4], 0.18, 2.6),
      airModes: highland ? [{ ratio: 1, q: 7, gain: 0.24 }, { ratio: 2, q: 5, gain: 0.12 }, { ratio: 3, q: 4, gain: 0.08 }] : undefined,
      sympathetic: highland ? { coupling: 0.30, q: 45, ratios: [1, 1.5, 2, 3], decayScale: 1.2 } : undefined,
    },
    mechanicalArtifacts: { airHiss: 0.30, keyThud: 0.08, valveClick: 0.05, fretBuzz: 0, stringSqueak: 0, pickZing: 0, handContact: 0.06, bodyKnock: 0.04, rimImpact: 0, bellowsNoise: 0.12, damperNoise: 0 },
    articulationPhysics: { strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0, attackToPitchCoupling: 0.18, releaseCoupling: 0.88, continuousSustain: true, noteTransition: 'reservoir-flow' },
    genreDialects: { 'highland-marching': { attack: 1.12, brightness: 1.08 }, piobaireachd: { damping: 0.06, articulation: ['grace', 'doubling', 'taorluath'] }, celtic: { attack: 1.04 } },
    tuning: highland ? { temperament: 'non-tempered', scale: 'Highland Mixolydian-derived chanter tuning', driftCents: 4 } : undefined,
  };
};

const brass = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const trumpet = id === 'trumpet' || id === 'trumpet';
  const mute = id.includes('muted');
  return {
    familyModel: 'lip',
    excitationDynamics: {
      hardness: 0.48, pressureSensitivity: 0.95, nonlinearDrive: 0.32, attackCollision: 0.72,
      spectralSpread: 0.62, directionalAsymmetry: 0.40,
      lipTensionResistance: { resistance: trumpet ? 0.82 : 0.72, pressureToBrightness: trumpet ? 1.25 : 0.95, standingWavePushback: 0.72, nonlinearBlare: trumpet ? 0.92 : 0.68 },
    },
    coupledResonators: {
      bodyModes: woodModes(trumpet ? [0.9, 1.35, 2.1, 3.2] : [0.7, 1.1, 1.8], 0.15, 2.8),
      airModes: [{ ratio: 1, q: 4, gain: 0.18 }, { ratio: 2.01, q: 3, gain: 0.09 }],
      shell: { resonance: mute ? 0.82 : 0.42, coupling: mute ? 0.64 : 0.32, inharmonicity: mute ? 0.08 : 0.04 },
    },
    mechanicalArtifacts: { airHiss: 0.10, keyThud: 0, valveClick: trumpet ? 0.18 : 0.14, fretBuzz: 0, stringSqueak: 0, pickZing: 0, handContact: 0.04, bodyKnock: 0.04, rimImpact: 0, bellowsNoise: 0, damperNoise: 0.03 },
    articulationPhysics: { strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0, attackToPitchCoupling: 0.38, releaseCoupling: 0.32, continuousSustain: true, noteTransition: 'lip-slur' },
    genreDialects: { salsa: { excitationBias: 0.14, attack: 1.22, brightness: 1.15, articulation: ['accent', 'fall', 'shake'] }, jazz: { damping: 0.10, brightness: 0.94 }, mariachi: { attack: 1.10, brightness: 1.08 } },
  };
};


const freeReed = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const sho = id === 'sho';
  const harmonica = id === 'harmonica';
  const melodica = id === 'melodica';
  return {
    familyModel: 'reed',
    excitationDynamics: {
      hardness: sho ? 0.24 : harmonica ? 0.34 : 0.30,
      pressureSensitivity: 0.88,
      nonlinearDrive: sho ? 0.06 : 0.10,
      attackCollision: 0.30,
      spectralSpread: sho ? 0.34 : 0.46,
      directionalAsymmetry: harmonica ? 0.42 : 0.16,
    },
    coupledResonators: {
      bodyModes: woodModes(sho ? [0.55, 1.0, 1.52, 2.1] : [0.72, 1.0, 1.7], 0.15, 2.8),
      airModes: sho ? [{ ratio: 1, q: 5, gain: 0.22 }, { ratio: 2, q: 4, gain: 0.14 }, { ratio: 3, q: 3, gain: 0.09 }] : [{ ratio: 1, q: 3.5, gain: 0.18 }, { ratio: 2, q: 2.8, gain: 0.08 }],
      sympathetic: sho ? { coupling: 0.26, q: 32, ratios: [1, 1.25, 1.5, 2], decayScale: 1.0 } : undefined,
    },
    mechanicalArtifacts: { airHiss: sho ? 0.10 : 0.14, keyThud: melodica ? 0.08 : 0, valveClick: 0, fretBuzz: 0, stringSqueak: 0, pickZing: 0, handContact: 0.02, bodyKnock: 0.03, rimImpact: 0, bellowsNoise: 0, damperNoise: 0, reedChatter: harmonica ? 0.12 : 0.06 },
    articulationPhysics: { strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0, attackToPitchCoupling: 0.24, releaseCoupling: 0.38, continuousSustain: true, noteTransition: 'legato' },
    genreDialects: { 'japanese-traditional': { damping: 0.02, brightness: 0.96 }, blues: { excitationBias: 0.08, brightness: 1.06 }, folk: { attack: 1.04 } },
  };
};

const wind = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const reed = /clarinet|oboe|bassoon|sax|hichiriki|shawm|duduk|harmonica|melodica/.test(id);
  const doubleReed = /oboe|bassoon|english-horn|hichiriki/.test(id);
  return {
    familyModel: reed ? 'reed' : 'air',
    excitationDynamics: { hardness: doubleReed ? 0.54 : 0.36, pressureSensitivity: 0.82, nonlinearDrive: doubleReed ? 0.18 : 0.08, attackCollision: doubleReed ? 0.58 : 0.36, spectralSpread: 0.50, directionalAsymmetry: 0.30 },
    coupledResonators: { bodyModes: woodModes(doubleReed ? [0.8, 1.2, 1.9] : [0.65, 1.0, 1.6], 0.14, 2.7), airModes: [{ ratio: 1, q: 3.5, gain: 0.20 }, { ratio: 2, q: 2.6, gain: 0.08 }] },
    mechanicalArtifacts: { airHiss: reed ? 0.18 : 0.28, keyThud: 0.12, valveClick: 0, fretBuzz: 0, stringSqueak: 0, pickZing: 0, handContact: 0.04, bodyKnock: 0.02, rimImpact: 0, bellowsNoise: 0, damperNoise: 0 },
    articulationPhysics: { strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0, attackToPitchCoupling: 0.26, releaseCoupling: 0.46, continuousSustain: true, noteTransition: 'legato' },
    genreDialects: { jazz: { excitationBias: 0.08, brightness: 1.08 }, klezmer: { attack: 1.12, articulation: ['scoop', 'bend', 'growl'] }, bossa: { damping: 0.08 } },
  };
};

const struck = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const piano = id === 'piano';
  const mallet = /marimba|xylophone|vibraphone|glockenspiel|celeste|steel-drums|tubular-bells|music-box/.test(id);
  return {
    familyModel: piano ? 'hammer' : 'mallet',
    excitationDynamics: { hardness: piano ? 0.72 : mallet ? 0.68 : 0.60, pressureSensitivity: 0.72, nonlinearDrive: 0.08, attackCollision: 0.88, spectralSpread: 0.74, directionalAsymmetry: 0.18 },
    coupledResonators: { bodyModes: woodModes(piano ? [0.5, 1, 1.99, 3.01] : [1, 2.76, 5.4], 0.20, 3.0), soundboard: piano ? { thudHz: 95, thudGain: 0.10, topModes: [110, 220, 480, 980], coupling: 0.88 } : undefined, sympathetic: piano ? { coupling: 0.34, q: 40, ratios: [1, 1.5, 2, 3, 4], decayScale: 1.1 } : undefined },
    mechanicalArtifacts: { airHiss: 0, keyThud: piano ? 0.18 : 0.02, valveClick: 0, fretBuzz: 0, stringSqueak: 0, pickZing: 0, handContact: 0.02, bodyKnock: piano ? 0.16 : 0.05, rimImpact: 0, bellowsNoise: 0, damperNoise: piano ? 0.22 : 0.08 },
    articulationPhysics: { strikeZoneLocation: piano ? 'bridge' : 'center', fleshVsNail: 0, handDamping: 0.04, attackToPitchCoupling: 0.42, releaseCoupling: 0.48, continuousSustain: false, noteTransition: 'retrigger' },
    genreDialects: { jazz: { attack: 1.04, damping: 0.08 }, salsa: { attack: 1.12, excitationBias: 0.08 }, classical: { damping: 0.02 } },
  };
};

const electronic = (d: InstrumentDef): InstrumentDSPProfile => {
  const id = d.id.toLowerCase();
  const acid = /303|acid/.test(id);
  const bass = /bass|sub/.test(id);
  const pad = /pad|string|sweep|halo|warm/.test(id);
  return {
    familyModel: 'electronic',
    excitationDynamics: {
      hardness: acid ? 0.72 : bass ? 0.44 : pad ? 0.22 : 0.52,
      pressureSensitivity: 0.50,
      nonlinearDrive: acid ? 0.52 : bass ? 0.22 : 0.10,
      attackCollision: acid ? 0.62 : 0.16,
      spectralSpread: acid ? 0.82 : pad ? 0.34 : 0.60,
      directionalAsymmetry: 0.10,
    },
    coupledResonators: {
      bodyModes: acid
        ? [{ ratio: 1, q: 7, gain: 0.16 }, { ratio: 2.03, q: 5, gain: 0.10 }, { ratio: 3.97, q: 4, gain: 0.06 }]
        : [{ ratio: 1, q: 2.2, gain: 0.08 }, { ratio: 2, q: 1.8, gain: 0.04 }],
      shell: acid ? { resonance: 0.42, coupling: 0.18, inharmonicity: 0.05 } : undefined,
    },
    mechanicalArtifacts: {
      airHiss: 0.02, keyThud: 0.02, valveClick: 0, fretBuzz: 0, stringSqueak: 0,
      pickZing: acid ? 0.08 : 0, handContact: 0, bodyKnock: 0, rimImpact: 0,
      bellowsNoise: 0, damperNoise: pad ? 0.08 : 0.02,
    },
    articulationPhysics: {
      strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0,
      attackToPitchCoupling: acid ? 0.34 : 0.08, releaseCoupling: pad ? 0.65 : 0.22,
      continuousSustain: pad || bass, noteTransition: 'legato',
    },
    genreDialects: {
      house: { attack: 1.04, brightness: 1.05, damping: 0.02 },
      techno: { attack: 1.10, brightness: 1.12, excitationBias: 0.08 },
      reggaeton: { attack: 1.08, brightness: 1.06 },
      kizomba: { damping: 0.06, brightness: 0.98 },
      zouk: { damping: 0.04, brightness: 1.01 },
      dub: { damping: 0.16, brightness: 0.88 },
    },
  };
};

const voice = (_d: InstrumentDef): InstrumentDSPProfile => ({
  familyModel: 'voice',
  excitationDynamics: {
    hardness: 0.18, pressureSensitivity: 0.92, nonlinearDrive: 0.12,
    attackCollision: 0.24, spectralSpread: 0.42, directionalAsymmetry: 0.12,
  },
  coupledResonators: {
    bodyModes: [
      { ratio: 1.00, q: 3.0, gain: 0.18 },
      { ratio: 2.10, q: 2.6, gain: 0.12 },
      { ratio: 3.65, q: 2.0, gain: 0.08 },
    ],
  },
  mechanicalArtifacts: {
    airHiss: 0.22, keyThud: 0, valveClick: 0, fretBuzz: 0, stringSqueak: 0,
    pickZing: 0, handContact: 0, bodyKnock: 0.02, rimImpact: 0, bellowsNoise: 0, damperNoise: 0,
  },
  articulationPhysics: {
    strikeZoneLocation: 'none', fleshVsNail: 0, handDamping: 0,
    attackToPitchCoupling: 0.48, releaseCoupling: 0.42, continuousSustain: true, noteTransition: 'legato',
  },
  genreDialects: {
    jazz: { brightness: 0.96, damping: 0.04 },
    flamenco: { attack: 1.08, brightness: 1.04 },
    salsa: { attack: 1.10, brightness: 1.05 },
  },
});

const generic = (d: InstrumentDef): InstrumentDSPProfile => {
  throw new Error(
    `UNRESOLVED_MUSICAL_IDENTITY_ERROR: instrument "${d.id}" reached the generic DSP path. ` +
    `Author an instrument-specific physical model instead of synthesizing a placeholder.`
  );
};

const EXACT: Record<string, Partial<InstrumentDSPProfile>> = {
  bandoneon: bellows({ id: 'bandoneon', name: 'Bandoneon', family: 'bellows-and-keys', voicing: 'single', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
  bagpipes: reservoir({ id: 'bagpipes', name: 'Great Highland Bagpipes', family: 'free-reed', voicing: 'single', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
  'uilleann-pipes': reservoir({ id: 'uilleann-pipes', name: 'Uilleann pipes', family: 'free-reed', voicing: 'single', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
  banjo: plucked({ id: 'banjo', name: '5-String Banjo', family: 'plucked', voicing: 'chord', bodyConstruction: 'skin-faced', excitationType: 'hard-pick', courses: 1, techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
  trumpet: brass({ id: 'trumpet', name: 'Bb Trumpet', family: 'brass', voicing: 'single', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
  congas: membrane({ id: 'congas', name: 'Congas', family: 'hand-drums', voicing: 'unpitched', bodyConstruction: 'skin-faced', excitationType: 'fingerpad', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
    tabla: membrane({ id: 'tabla', name: 'Indian Tabla Pair', family: 'hand-drums', voicing: 'unpitched', bodyConstruction: 'skin-faced', excitationType: 'fingerpad', techniques: { articulations: [], techniqueMethods: [], playingStyles: [] } }),
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMergeDSP<T>(base: T, patch: Partial<T>): T {
  if (!isRecord(patch)) return patch;
  const out: Record<string, unknown> = isRecord(base) ? { ...base } : {};
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    const current = out[key];
    if (Array.isArray(value)) {
      out[key] = value;
    } else if (isRecord(value) && isRecord(current)) {
      out[key] = deepMergeDSP(current, value);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}

export function buildInstrumentDSPProfile(def: InstrumentDef): InstrumentDSPProfile {
  const id = def.id.toLowerCase();
  let profile: InstrumentDSPProfile;
  if (EXACT[id]) {
    profile = EXACT[id] as InstrumentDSPProfile;
  } else if (def.family === 'plucked' || def.family === 'plucked-string' || def.excitationType === 'plectrum' || def.excitationType === 'nail' || def.excitationType === 'hard-pick') {
    profile = plucked(def);
  } else if (def.family === 'bowed') {
    profile = bowed(def);
  } else if (def.family === 'hand-drums' || def.family === 'body-percussion' || def.family === 'kit' || def.drum) {
    profile = membrane(def);
  } else if (def.family === 'bellows-and-keys' && /accordion|bandoneon|concertina|harmonium/.test(id)) {
    profile = bellows(def);
  } else if (def.family === 'bellows-and-keys' && /piano|harpsichord|rhodes|fm-ep|clavinet/.test(id)) {
    profile = struck(def);
  } else if (def.family === 'bellows-and-keys' && /organ/.test(id)) {
    profile = electronic(def);
  } else if (def.family === 'brass') {
    profile = brass(def);
  } else if (def.family === 'winds' || def.family === 'free-reed') {
    if (def.id === 'bagpipes' || def.id === 'uilleann-pipes') profile = reservoir(def);
    else if (def.id === 'sho' || def.id === 'harmonica' || def.id === 'melodica') profile = freeReed(def);
    else profile = wind(def);
  } else if (def.excitationType === 'hammer' || def.excitationType === 'mallet' || def.family === 'metal-and-wood') {
    profile = struck(def);
  } else if (def.family === 'electronic') {
    profile = electronic(def);
  } else if (def.family === 'voice') {
    profile = voice(def);
  } else {
    profile = generic(def);
  }

  // Every definition inherits its measured/declared physical values as subtle calibration, rather than losing them to family defaults.
  const lp = def.luthierPhysics;
  if (lp) {
    profile.excitationDynamics.hardness = Math.min(1, profile.excitationDynamics.hardness * (0.75 + lp.tension * 0.35));
    profile.excitationDynamics.nonlinearDrive = Math.min(0.95, profile.excitationDynamics.nonlinearDrive + lp.harmonicRichness * 0.04);
  }

  // Every declared playing style gets a physical dialect, even when the instrument did not
  // have a hand-authored override. These are deliberately small deltas: the style changes
  // how the instrument is played, not what instrument it is.
  if (id === 'bandoneon') profile.instrumentSpecific = { bisonoric: { opening: 'Abrir: softer attack, slight negative pressure drift, lower chamber formant', closing: 'Cerrar: harder attack, positive pressure drift, brighter chamber formant', kneeDropImpact: true, dryReedBanks: 'two-chörig octave register (16-foot + 8-foot relative to written pitch), no musette beating' } };
  if (id === 'bagpipes' || id === 'uilleann-pipes') profile.instrumentSpecific = { reservoir: { pressureLoss: profile.excitationDynamics.continuousReservoir?.pressureLoss ?? 0.1, dronePhaseAlignment: profile.excitationDynamics.continuousReservoir?.dronePhaseLock ?? 0.9, articulation: 'grace-note interruption of continuous flow', scale: id === 'bagpipes' ? 'non-tempered Highland chanter / Mixolydian-derived' : 'instrument-specific chanter tuning' } };
  if (id === 'banjo') {
    profile.coupledResonators.membrane2D = { radial: 0.94, circular: 0.78, tension: 0.90, damping: 0.72, strikeZoneSensitivity: 0.98 };
    profile.instrumentSpecific = { banjoHead: { sympatheticDrone5th: true, headTensionSnap: 0.94, pickMaterial: 'metal', mylarDecay: 0.94 } };
  }
  if (id === 'trumpet') profile.instrumentSpecific = { trumpet: { embouchureTension: 0.86, pressureToBrightnessCurve: 1.28, muteDamping: 0, muteCombResonance: 0 } };
  if (id === 'congas' || id === 'tabla') profile.instrumentSpecific = { membrane: { strikeZoneLocation: id === 'congas' ? 'center vs edge vs rim' : 'syahi center vs ring', openToneShellCoupling: id === 'congas' ? 0.86 : 0.62, slapSkinOnly: id === 'congas' ? 0.92 : 0.68, handDamping: profile.articulationPhysics.handDamping } };

  for (const style of def.techniques.playingStyles ?? []) {
    const key = style.toLowerCase();
    if (profile.genreDialects[key]) continue;
    const percussion = /salsa|rumba|cumbia|merengue|timba|reggaeton|funk|rock|ska/.test(key);
    const intimate = /jazz|bossa|ballad|classical|chamber|tango|milonga/.test(key);
    profile.genreDialects[key] = {
      excitationBias: percussion ? 0.06 : intimate ? -0.03 : 0,
      brightness: percussion ? 1.04 : intimate ? 0.96 : 1,
      damping: percussion ? -0.03 : intimate ? 0.04 : 0,
      attack: percussion ? 1.06 : 1,
    };
  }
  const override = instrumentDSPOverrides[id];
  if (override) {
    profile = deepMergeDSP(profile, override);
  }

  // Normalize the physical energy-source contract after generated/hand-authored
  // overrides. This prevents a copied transition flag from changing the
  // instrument's excitation family (for example, a banjo becoming a
  // continuous reservoir instrument).
  if (def.family === 'plucked' || def.family === 'plucked-string') {
    profile.articulationPhysics.continuousSustain = false;
    const slideLike = id === 'guitar' || id === 'bass';
    profile.articulationPhysics.noteTransition = slideLike ? 'slide' : 'retrigger';
  } else if (def.family === 'bowed') {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = id === 'erhu' || id === 'jinghu' ? 'slide' : 'legato';
  } else if (def.family === 'hand-drums' || def.family === 'metal-and-wood' || def.family === 'kit' || def.family === 'body-percussion') {
    profile.articulationPhysics.continuousSustain = false;
    profile.articulationPhysics.noteTransition = 'retrigger';
  } else if (def.family === 'winds') {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = 'legato';
  } else if (def.family === 'brass') {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = id === 'trombone' ? 'slide' : 'lip-slur';
  } else if (def.family === 'free-reed') {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = 'legato';
  } else if (def.family === 'bellows-and-keys' && /accordion|bandoneon|concertina|harmonium/.test(id)) {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = 'bellows-flow';
  } else if (def.family === 'voice') {
    profile.articulationPhysics.continuousSustain = true;
    profile.articulationPhysics.noteTransition = 'legato';
  }

  // Bring authored luthier measurements into the actual resonator graph rather
  // than leaving them as descriptive metadata.
  if (def.luthierPhysics) {
    const lp = def.luthierPhysics;
    const densityGain = 0.90 + (1 - Math.max(0, Math.min(1, lp.materialDensity))) * 0.12;
    const densityQ = 0.86 + Math.max(0, Math.min(1, lp.materialDensity)) * 0.28;
    profile.coupledResonators.bodyModes = profile.coupledResonators.bodyModes.map(m => ({
      ...m,
      gain: m.gain * densityGain,
      q: m.q * densityQ,
    }));
    if (profile.coupledResonators.soundboard && lp.soundboardResonanceHz) {
      profile.coupledResonators.soundboard = {
        ...profile.coupledResonators.soundboard,
        thudHz: lp.soundboardResonanceHz,
      };
    }
    if (lp.airResonanceHz) {
      const existingAirModes = profile.coupledResonators.airModes ?? [];
      profile.coupledResonators.airModes = existingAirModes.length
        ? existingAirModes.map((m, i) => i === 0 ? { ...m, frequencyHz: lp.airResonanceHz } : m)
        : [{ frequencyHz: lp.airResonanceHz, ratio: 1, q: 3.5, gain: 0.12 }];
    }
    if (lp.fretBuzzAmount !== undefined) {
      profile.mechanicalArtifacts.fretBuzz = Math.max(
        profile.mechanicalArtifacts.fretBuzz,
        Math.max(0, Math.min(1, lp.fretBuzzAmount)),
      );
    }
  }

  // Do not let a generated family profile make every genre look like the same player.
  // When the source definition names genre-specific techniques, those techniques become
  // the articulation vocabulary for that dialect. The physical instrument stays constant;
  // the performance grammar changes.
  for (const style of def.techniques.playingStyles ?? []) {
    const key = style.toLowerCase();
    const declared = def.techniques.genreTechniques?.[style] ?? def.techniques.genreTechniques?.[key];
    const fallback = (def.techniques.techniqueMethods ?? []).slice(0, 4);
    const articulation = (declared && declared.length ? declared : fallback).map(String);
    if (!profile.genreDialects[key]) profile.genreDialects[key] = {};
    profile.genreDialects[key].articulation = articulation;
  }
  return profile;
}
