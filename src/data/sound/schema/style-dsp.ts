export interface TrackDSPProfile {
  dynamics?: {
    ratio: number;
    threshold: number;
    attack: number;
    release: number;
  };
  distortion?: {
    drive: number;
    type: 'tube' | 'tape' | 'digital' | 'fuzz' | 'analog_console' | 'clean';
    tone: number;
    circuitModel: string;
  };
  eq?: {
    highPassCutoff?: number;
    lowShelf?: { freq: number; gain: number };
    midPeak?: { freq: number; gain: number; q: number };
    highShelf?: { freq: number; gain: number };
    lowPassCutoff?: number;
  };
  spatial?: {
    reverbMix: number;
    reverbTime: number;
    reverbType: 'room' | 'hall' | 'plate' | 'spring' | 'chamber' | 'reverse';
    delayMix?: number;
  };
  vintage?: {
    saturation?: number;
    wowFlutter?: number;
    bitcrush?: number;
  };
}

export interface StyleDSPProfile {
  master?: TrackDSPProfile;
  instruments?: Record<string, TrackDSPProfile>;
  // Direct fallback properties for top-level access
  dynamics?: TrackDSPProfile['dynamics'];
  distortion?: TrackDSPProfile['distortion'];
  eq?: TrackDSPProfile['eq'];
  spatial?: TrackDSPProfile['spatial'];
  vintage?: TrackDSPProfile['vintage'];
}

export interface Section {
  id: string;
  energy?: 'low' | 'medium' | 'high' | 'peak' | number;
  instruments?: string[];
  patterns?: string[];
  featured?: string[];
  bars?: number;
}

export interface SongStyle {
  id: string;
  name: string;
  dspProfile?: StyleDSPProfile;
  sections?: Section[];
}
