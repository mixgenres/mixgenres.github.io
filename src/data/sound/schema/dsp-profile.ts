
export type ExcitationKind =
  | 'pluck' | 'bow' | 'hammer' | 'mallet' | 'membrane' | 'reed' | 'lip'
  | 'air' | 'bellows' | 'scrape' | 'shaker' | 'voice' | 'electronic' | 'impact';

export interface DspMode {
  ratio: number;
  q: number;
  gain: number;
  decayScale?: number;
  /** Optional fixed acoustic resonance frequency, used for absolute air/body modes. */
  frequencyHz?: number;
}

export interface InstrumentPhysicalDetails {
  system: string;
  construction: string;
  exciter: string;
  asymmetries: string[];
  coupling: string[];
  artifactSources: string[];
  detail: string[];
  response: {
    contactHardness: number;
    resonatorQ: number;
    nonlinearTransfer: number;
    inharmonicity: number;
    bodyCoupling: number;
  };
}

export interface InstrumentSpecificMechanisms {
  accordion?: {
    bellowsMode: 'pressure-driven' | 'pressure-and-register';
    reedBankFootages: string[];
    registerSelection: string;
    musetteDetunePolicy: 'none-by-default' | 'explicit-register';
    cassottoPolicy: 'none-by-default' | 'explicit-chamber';
    palletMechanism: string;
  };
  keyboard?: {
    action: 'hammer-string' | 'quill-string' | 'tangent-string' | 'hammer-tine' | 'electronic-tine' | 'organ-key';
    resonator: string;
    damperSystem: string;
    mechanicalContact: string;
  };
  bowedString?: {
    bowContact: string;
    stopping: string;
    bridgeTransfer: string;
    bodyCoupling: string;
  };
  zither?: {
    stringCount?: number;
    bridgeSystem: string;
    afterlength: string;
    leftHandTechnique: string;
  };
  koto?: {
    stringCount: 13;
    bridgeSystem: 'movable-ji';
    pickSystem: 'tsume';
    leftHandPitchControl: 'press-and-pull-behind-ji';
    tuningFamilies: string[];
    sawari: false;
  };
  bisonoric?: { opening: string; closing: string; kneeDropImpact: boolean; dryReedBanks: string };
  reservoir?: { pressureLoss: number; dronePhaseAlignment: number; articulation: string; scale: string };
  banjoHead?: { sympatheticDrone5th: boolean; headTensionSnap: number; pickMaterial: 'metal'; mylarDecay: number };
  trumpet?: { embouchureTension: number; pressureToBrightnessCurve: number; muteDamping: number; muteCombResonance: number };
  membrane?: { strikeZoneLocation: string; openToneShellCoupling: number; slapSkinOnly: number; handDamping: number };
  flamencoGuitar?: { soundboardThudHz: number; fleshVsNail: number; rasgueadoMicroTransients: number; golpeBodyCoupling: number };
}

export interface InstrumentCharacter {
  energySource: string;
  energyPath: string;
  bodyArchitecture: string;
  primaryCollision: string;
  asymmetries: string[];
  couplingPaths: string[];
  techniqueBindings: string[];
}

export type InstrumentDSPOverride = Partial<InstrumentDSPProfile>;

export interface InstrumentDSPProfile {
  instrumentCharacter?: InstrumentCharacter;
  familyModel: ExcitationKind;
  excitationDynamics: {
    hardness: number;
    pressureSensitivity: number;
    nonlinearDrive: number;
    attackCollision: number;
    spectralSpread: number;
    directionalAsymmetry: number;
    openingPullingBias?: number;
    closingPushingBias?: number;
    bisonoricAsymmetry?: {
      opening: { attack: number; formantShift: number; pitchDriftCents: number; pressure: number };
      closing: { attack: number; formantShift: number; pitchDriftCents: number; pressure: number };
    };
    kneeDropImpact?: { threshold: number; gain: number; saturation: number; decayMs: number };
    continuousReservoir?: {
      pressure: number;
      pressureLoss: number;
      chokeThreshold: number;
      minimumFlow: number;
      dronePhaseLock: number;
      articulationNeverSilences: boolean;
    };
    lipTensionResistance?: {
      resistance: number;
      pressureToBrightness: number;
      standingWavePushback: number;
      nonlinearBlare: number;
    };
  };
  coupledResonators: {
    bodyModes: DspMode[];
    airModes?: DspMode[];
    membrane2D?: { radial: number; circular: number; tension: number; damping: number; strikeZoneSensitivity: number };
    sympathetic?: { coupling: number; q: number; ratios: number[]; decayScale: number };
    bridge?: { stiffness: number; buzz: number; settlingMs: number };
    shell?: { resonance: number; coupling: number; inharmonicity: number };
    soundboard?: { thudHz: number; thudGain: number; topModes: number[]; coupling: number };
  };
  mechanicalArtifacts: {
    airHiss: number;
    keyThud: number;
    valveClick: number;
    fretBuzz: number;
    stringSqueak: number;
    pickZing: number;
    handContact: number;
    bodyKnock: number;
    rimImpact: number;
    bellowsNoise: number;
    damperNoise: number;
    palletClick?: number;
    slideNoise?: number;
    reedChatter?: number;
    bellowsFold?: number;
    bowRosin?: number;
    hammerClick?: number;
    pedalNoise?: number;
    membraneFingerNoise?: number;
    seedRattle?: number;
    fippleNoise?: number;
    muteContact?: number;
    breathBurst?: number;
    keyworkClick?: number;
  };
  articulationPhysics: {
    strikeZoneLocation: 'center' | 'edge' | 'rim' | 'mixed' | 'bridge' | 'fingerboard' | 'none';
    fleshVsNail: number;
    handDamping: number;
    attackToPitchCoupling: number;
    releaseCoupling: number;
    continuousSustain: boolean;
    noteTransition: 'retrigger' | 'legato' | 'slide' | 'lip-slur' | 'bellows-flow' | 'reservoir-flow' | 'mixed';
  };
  genreDialects: Record<string, {
    excitationBias?: number;
    brightness?: number;
    damping?: number;
    attack?: number;
    body?: number;
    articulation?: string[];
  }>;
  instrumentSpecific?: InstrumentSpecificMechanisms;
  physicalDetails?: InstrumentPhysicalDetails;
  tuning?: {
    temperament: '12-tet' | 'just' | 'non-tempered' | 'instrument-specific';
    scale?: string;
    driftCents?: number;
  };
}

