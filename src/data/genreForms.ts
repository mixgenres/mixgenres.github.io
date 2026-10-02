import type { SectionEnergy, FormIntensity } from './schema';
import type { StyleDSPProfile } from './sound/schema/style-dsp';

export type { FormIntensity };
export interface FormStep {
  key: string;
  kind: string;
  bars: number;
  label: string;
  intensity: FormIntensity;
  instruments?: string[];
  patterns?: string[];
  featured?: string[];
}
export interface GenreForm { steps:FormStep[]; allowed:string[]; energyMappings?:Record<string,Partial<Record<string,SectionEnergy>>>; }
export const formSummary = (form: GenreForm): string => form.steps.map(s => s.label).join(' · ');
export const F = (
  key: string,
  kind: string,
  bars: number,
  label: string,
  intensity: FormIntensity,
  instruments?: string[],
  patterns?: string[],
  featured?: string[]
): FormStep => ({ key, kind, bars, label, intensity, instruments, patterns, featured });

export interface FormBlueprint {
  name: string;
  dspProfile?: StyleDSPProfile;
  sections: Array<{
    id: string;
    energy: 'low' | 'medium' | 'high' | 'peak';
    instruments?: string[];
    patterns?: string[];
    featured?: string[];
  }>;
}

export const FORM_BLUEPRINTS: Record<string, FormBlueprint> = {
  'death-metal-old-school': {
    name: 'Death Metal Old School',
    dspProfile: {
      master: {
        dynamics: { ratio: 2.0, threshold: -14, attack: 30, release: 100 },
        vintage: { saturation: 0.15 } // SSL Bus Comp glue
      },
      instruments: {
        'Electric Guitar': {
          distortion: { drive: 0.95, type: 'fuzz', tone: 6000, circuitModel: 'Boss HM-2 Heavy Metal pedal. Maxed out knobs (Swedish Chainsaw). Asymmetric diode clipping creating dense square waves.' },
          eq: { highPassCutoff: 120, midPeak: { freq: 1000, gain: 10.0, q: 1.5 }, lowPassCutoff: 8000 }
        },
        'Electric Bass': {
          distortion: { drive: 0.75, type: 'digital', tone: 4000, circuitModel: 'Darkglass B7K CMOS parallel distortion. Gritty upper-mid clank mixed with clean sub-bass.' },
          eq: { lowShelf: { freq: 60, gain: 4.0 }, midPeak: { freq: 2500, gain: 6.0, q: 2.0 } }
        },
        'Drum Kit': {
          dynamics: { ratio: 8.0, threshold: -20, attack: 1, release: 15 }, // Fast FET compression (1176 style) for transient snap
          eq: { highShelf: { freq: 8000, gain: 4.0 } }
        }
      }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Blast Beat'] },
      { id: 'Verse', energy: 'high', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Tremolo Picking'] },
      { id: 'Chorus', energy: 'peak', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Chainsaw Riff'] },
      { id: 'Outro', energy: 'low', instruments: ['Distortion Guitar', 'Drums'], patterns: ['Slow Groove'] },
    ],
  },
  'tech-death-modern': {
    name: 'Tech Death Modern',
    dspProfile: {
      distortion: { drive: 0.95, type: 'digital', tone: 10000, circuitModel: 'Axe-Fx / Kemper digital modeling. Extreme high-gain hard clipping paired with lightning-fast noise gates for zero sag and surgical clarity on 32nd notes.' },
      eq: { highPassCutoff: 120, midPeak: { freq: 1500, gain: 3.5, q: 1.5 } }
    },
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Polyrhythmic Riff'] },
      { id: 'Verse', energy: 'high', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Sweep Picking'] },
      { id: 'Breakdown', energy: 'peak', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Odd Time Groove'] },
    ],
  },
  'black-metal-traditional': {
    name: 'Black Metal Traditional',
    dspProfile: {
      distortion: { drive: 0.98, type: 'fuzz', tone: 14000, circuitModel: 'Transistor-based raw clipping through 4-track tape. Extreme high-end fizz, zero low-end body, replicating early 90s Norwegian lo-fi grimness.' },
      eq: { highPassCutoff: 200, highShelf: { freq: 6000, gain: 8.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['Distortion Guitar', 'Drums'], patterns: ['Tremolo Buzz'] },
      { id: 'Verse', energy: 'peak', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Cold Blast'] },
    ],
  },
  'doom-sludge-metal': {
    name: 'Doom / Sludge Metal',
    dspProfile: {
      distortion: { drive: 0.90, type: 'fuzz', tone: 3500, circuitModel: 'Electro-Harmonix Big Muff / Fuzz Face. Sluggish attack, wooly thick square-wave saturation crushing the sub-bass frequencies.' },
      eq: { lowShelf: { freq: 80, gain: 6.0 }, lowPassCutoff: 5000 }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Sludge Drone'] },
      { id: 'Riff', energy: 'high', instruments: ['Distortion Guitar', 'Bass', 'Drums'], patterns: ['Heavy Sabbath Groove'] },
    ],
  },
  'classic-rock': {
    name: 'Classic Rock',
    dspProfile: {
      distortion: { drive: 0.65, type: 'tube', tone: 6500, circuitModel: 'Marshall Plexi pushed to natural power-amp breakup. Warm even-order harmonics, highly responsive to picking dynamics.' },
      eq: { midPeak: { freq: 2500, gain: 2.5, q: 1.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Riff'] },
      { id: 'Verse', energy: 'medium', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Four on Floor'] },
      { id: 'Chorus', energy: 'high', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Driving Backbeat'] },
    ],
  },
  'punk-rock': {
    name: 'Punk Rock',
    dspProfile: {
      distortion: { drive: 0.75, type: 'tube', tone: 7500, circuitModel: 'Marshall JCM800. Aggressive, biting upper-midrange crunch with tight low-end for rapid downpicking.' },
      eq: { highPassCutoff: 100, midPeak: { freq: 3000, gain: 4.0, q: 1.2 } }
    },
    sections: [
      { id: 'Intro', energy: 'high', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Fast Downpick'] },
      { id: 'Verse', energy: 'high', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Punk Beat'] },
    ],
  },
  'shoegaze': {
    name: 'Shoegaze',
    dspProfile: {
      distortion: { drive: 0.95, type: 'fuzz', tone: 6000, circuitModel: 'ProCo Rat stacked into a Reverse Reverb. Massive intermodulation distortion creating a continuous wall of saturated noise.' },
      spatial: { reverbMix: 0.8, reverbTime: 3.5, reverbType: 'reverse' }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Wall of Sound'] },
      { id: 'Chorus', energy: 'peak', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Glider Swirl'] },
    ],
  },
  'techno-peak-time': {
    name: 'Techno Peak Time',
    dspProfile: {
      distortion: { drive: 0.60, type: 'analog_console', tone: 11000, circuitModel: 'Mackie CR1604 mixer channel overdrive. Hard-driven analog circuitry on Roland TR-909 kicks to create gritty midrange harmonic bumps.' },
      eq: { lowShelf: { freq: 50, gain: 4.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['909 Kick', 'Hi-hat'], patterns: ['Four on Floor'] },
      { id: 'Drop', energy: 'peak', instruments: ['909 Kick', 'Synth Bass', 'Clap'], patterns: ['Rumble Kick'] },
    ],
  },
  'dubstep-modern': {
    name: 'Dubstep Modern',
    dspProfile: {
      distortion: { drive: 0.85, type: 'digital', tone: 18000, circuitModel: 'Serum/Massive asymmetric diode clipping. Brutal high-frequency sizzle, squashed dynamic range, razor-sharp FM synthesis transients.' },
      dynamics: { ratio: 10.0, threshold: -20, attack: 2, release: 30 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Sub Bass', 'Hi-hat'], patterns: ['Half-time'] },
      { id: 'Drop', energy: 'peak', instruments: ['Growl Bass', 'Snare', 'Sub'], patterns: ['Wobble Heavy'] },
    ],
  },
  'synthwave': {
    name: 'Synthwave',
    dspProfile: {
      master: {
        vintage: { wowFlutter: 0.4, saturation: 0.35 }, // Master 2-track reel-to-reel wobble
        dynamics: { ratio: 4.0, threshold: -16, attack: 10, release: 200 } // Master bus pumping
      },
      instruments: {
        'Synth Bass': {
          distortion: { drive: 0.45, type: 'analog_console', tone: 2000, circuitModel: 'Overdriven Moog Ladder Filter. 24dB/octave analog clipping for fat, squelchy 16th notes.' },
          eq: { lowShelf: { freq: 60, gain: 4.0 }, midPeak: { freq: 800, gain: -3.0, q: 1.0 } }
        },
        'Drum Machine': {
          distortion: { drive: 0.5, type: 'digital', tone: 10000, circuitModel: 'LinnDrum / Oberheim DMX EPROM circuit. 8-bit non-linear compounding logic.' },
          vintage: { bitcrush: 8 }
        },
        'Lead Synth': {
          spatial: { reverbMix: 0.4, reverbTime: 3.0, reverbType: 'plate', delayMix: 0.35 }, // Lexicon 224 style expansive reverbs
          distortion: { drive: 0.15, type: 'tape', tone: 8000, circuitModel: 'Roland RE-201 Space Echo preamp drive.' }
        }
      }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Synth Arp', 'Synth Bass'], patterns: ['Retro 80s'] },
      { id: 'Chorus', energy: 'high', instruments: ['Synth Lead', 'Synth Bass', 'Drums'], patterns: ['Gated Snare'] },
    ],
  },
  'boom-bap-classic': {
    name: 'Boom Bap Classic',
    dspProfile: {
      distortion: { drive: 0.40, type: 'digital', tone: 8000, circuitModel: 'Akai MPC60 / E-mu SP-1200 12-bit sampler crunch. Gritty low-mid punch, aliasing distortion on the high end from degraded sample rates.' },
      vintage: { bitcrush: 12, saturation: 0.6 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Drums', 'Rhodes'], patterns: ['Swing Boom Bap'] },
      { id: 'Verse', energy: 'medium', instruments: ['Drums', 'Bass', 'Rhodes'], patterns: ['Boom Bap Pocket'] },
    ],
  },
  'trap-modern': {
    name: 'Trap Modern',
    dspProfile: {
      master: {
        distortion: { drive: 0.1, type: 'digital', tone: 20000, circuitModel: 'Fruity Soft Clipper. Shaves off 0dBFS peaks transparently, allowing 808s to dominate headroom.' }
      },
      instruments: {
        '808 Bass': {
          distortion: { drive: 0.40, type: 'digital', tone: 2500, circuitModel: 'Wavefolder / Hard Clipper. Generates massive odd-harmonics so sub-bass cuts through phone speakers.' },
          eq: { lowShelf: { freq: 40, gain: 8.0 }, highPassCutoff: 20 }
        },
        'Hi-hat': {
          vintage: { bitcrush: 12, wowFlutter: 0.3 }, // Cassette degradation for dark, rolling hats
          eq: { lowPassCutoff: 12000 }
        },
        'Snare': {
          dynamics: { ratio: 4.0, threshold: -12, attack: 5, release: 50 },
          spatial: { reverbMix: 0.15, reverbTime: 0.5, reverbType: 'plate' }
        }
      }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['808 Bass', 'Hi-hat'], patterns: ['Trap Roll'] },
      { id: 'Drop', energy: 'peak', instruments: ['808 Bass', 'Snare', 'Hi-hat', 'Synth'], patterns: ['Heavy 808'] },
    ],
  },
  'drill-uk': {
    name: 'Drill UK',
    dspProfile: {
      distortion: { drive: 0.50, type: 'analog_console', tone: 10000, circuitModel: 'Aggressive console saturation on 808 glides. Gritty, harmonic-rich bass transients tearing through heavy master limiting.' },
      dynamics: { ratio: 8.0, threshold: -18, attack: 5, release: 40 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['808 Slide', 'Hi-hat'], patterns: ['Drill Slide'] },
      { id: 'Drop', energy: 'peak', instruments: ['808 Slide', 'Snare', 'Hi-hat'], patterns: ['Syncopated Drill'] },
    ],
  },
  'lo-fi-chillhop': {
    name: 'Lo-Fi Chillhop',
    dspProfile: {
      distortion: { drive: 0.45, type: 'tape', tone: 4000, circuitModel: 'Roland SP-404 Vinyl Sim compression. Heavy high-frequency cut, boxy midrange distortion, pumpy attack, mechanical noise.' },
      eq: { lowPassCutoff: 5000, highPassCutoff: 100 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Rhodes', 'Vinyl Noise'], patterns: ['Laid Back'] },
      { id: 'Groove', energy: 'medium', instruments: ['Rhodes', 'Bass', 'Drums'], patterns: ['Dilla Swing'] },
    ],
  },
  'reggaeton-classic': {
    name: 'Reggaeton Classic',
    dspProfile: {
      distortion: { drive: 0.40, type: 'tube', tone: 9000, circuitModel: 'Driven LA-2A style optical compression on the Dembow loop. Saturation glued to the sub-bass with slightly distorted timbal impacts.' },
      eq: { lowShelf: { freq: 60, gain: 6.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Dembow Loop', 'Synth'], patterns: ['Dembow 3-3-2'] },
      { id: 'Coro', energy: 'high', instruments: ['Dembow Loop', 'Sub Bass', 'Synth Lead'], patterns: ['Perreo Drive'] },
    ],
  },
  'salsa-dura': {
    name: 'Salsa Dura',
    dspProfile: {
      distortion: { drive: 0.25, type: 'tape', tone: 13000, circuitModel: '1970s Fania Records analog tape drive. Pushed tape reels compressing aggressive brass overtones and saturating the percussion bus.' },
      vintage: { saturation: 0.4 }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['Piano', 'Bass', 'Congas', 'Timbales'], patterns: ['Montuno'] },
      { id: 'Montuno', energy: 'high', instruments: ['Piano', 'Bass', 'Congas', 'Timbales', 'Brass'], patterns: ['Tumbao'] },
    ],
  },
  'flamenco-traditional': {
    name: 'Flamenco Traditional',
    dspProfile: {
      distortion: { drive: 0.02, type: 'clean', tone: 15000, circuitModel: 'Ultra-fast solid-state clean preamps. Zero harmonic coloration to perfectly capture the sharp, percussive nail attacks (picado) and footwork.' },
      eq: { highPassCutoff: 120, midPeak: { freq: 4500, gain: 3.0, q: 1.5 } }
    },
    sections: [
      { id: 'Falseta', energy: 'low', instruments: ['Flamenco Guitar'], patterns: ['Picado'] },
      { id: 'Letra', energy: 'medium', instruments: ['Flamenco Guitar', 'Palmas', 'Cajón'], patterns: ['Rasgueado'] },
    ],
  },
  'reggae-roots': {
    name: 'Reggae Roots',
    dspProfile: {
      distortion: { drive: 0.30, type: 'tape', tone: 7000, circuitModel: 'Roland RE-201 Space Echo tape saturation. Overdriven delay repeats with heavy low-end dub mixing and spring reverb clangs.' },
      spatial: { reverbMix: 0.4, reverbTime: 2.5, reverbType: 'spring', delayMix: 0.5 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Bass', 'Drums', 'Guitar'], patterns: ['One Drop'] },
      { id: 'Verse', energy: 'medium', instruments: ['Bass', 'Drums', 'Guitar', 'Organ'], patterns: ['Skank'] },
    ],
  },
  'jazz-bebop': {
    name: 'Jazz Bebop',
    dspProfile: {
      distortion: { drive: 0.15, type: 'tube', tone: 6000, circuitModel: 'Rudy Van Gelder studio warmth. Dark hollow-body electric guitars pushing vintage tube amplifiers right to the edge of clean breakup.' },
      spatial: { reverbMix: 0.15, reverbTime: 0.8, reverbType: 'room' }
    },
    sections: [
      { id: 'Head', energy: 'medium', instruments: ['Upright Bass', 'Drums', 'Piano', 'Sax'], patterns: ['Walking Bass'] },
      { id: 'Solo', energy: 'high', instruments: ['Upright Bass', 'Drums', 'Sax'], patterns: ['Swing Ride'] },
    ],
  },
  'jazz-fusion': {
    name: 'Jazz Fusion',
    dspProfile: {
      distortion: { drive: 0.20, type: 'analog_console', tone: 14000, circuitModel: 'Late 70s SSL analog console. Punchy, clean VCA compression with mild overdrive on synthesizer leads and slap-bass transients.' },
      dynamics: { ratio: 4.0, threshold: -16, attack: 10, release: 80 }
    },
    sections: [
      { id: 'Intro', energy: 'medium', instruments: ['Slap Bass', 'Drums', 'Rhodes', 'Synth Lead'], patterns: ['Fusion Funk'] },
      { id: 'Solo', energy: 'peak', instruments: ['Slap Bass', 'Drums', 'Synth Lead'], patterns: ['Odd Meter'] },
    ],
  },
  'blues-chicago': {
    name: 'Blues Chicago',
    dspProfile: {
      distortion: { drive: 0.55, type: 'tube', tone: 5500, circuitModel: 'Fender Bassman Tweed 4x10 combo. Thick mid-range overdrive pushing the speaker cones into natural sagging and compression.' },
      eq: { midPeak: { freq: 1200, gain: 4.0, q: 1.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Shuffle'] },
      { id: 'Solo', energy: 'peak', instruments: ['Electric Guitar', 'Bass', 'Drums'], patterns: ['Chicago Bend'] },
    ],
  },
  'pop-modern': {
    name: 'Pop Modern',
    dspProfile: {
      distortion: { drive: 0.10, type: 'digital', tone: 20000, circuitModel: 'Pristine in-the-box mix. Transparent digital limiting with subtle parallel decapitator-style saturation exciter on vocal/bass chains.' },
      eq: { highShelf: { freq: 10000, gain: 3.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Piano', 'Drums'], patterns: ['Four on Floor'] },
      { id: 'Chorus', energy: 'high', instruments: ['Synth Bass', 'Drums', 'Synth Lead'], patterns: ['Modern Pop'] },
    ],
  },
  'synthpop-80s': {
    name: 'Synthpop 80s',
    dspProfile: {
      distortion: { drive: 0.25, type: 'analog_console', tone: 12000, circuitModel: 'Roland Juno analog chorus noise floor. Pushed bucket-brigade device (BBD) delay circuits creating a smeared, warm harmonic distortion.' },
      spatial: { reverbMix: 0.25, reverbTime: 2.5, reverbType: 'hall' }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Synth Bass', 'Synth Arp', 'Drums'], patterns: ['80s Pulse'] },
      { id: 'Chorus', energy: 'high', instruments: ['Synth Lead', 'Synth Bass', 'Drums'], patterns: ['LinnDrum Groove'] },
    ],
  },
  'country-modern': {
    name: 'Country Modern',
    dspProfile: {
      distortion: { drive: 0.05, type: 'clean', tone: 16000, circuitModel: 'Nashville pristine clean tracking. Transparent VCA compression, massive vocal presence, virtually zero harmonic distortion.' },
      dynamics: { ratio: 3.0, threshold: -12, attack: 20, release: 150 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Acoustic Guitar', 'Bass', 'Drums'], patterns: ['Train Beat'] },
      { id: 'Chorus', energy: 'high', instruments: ['Acoustic Guitar', 'Electric Guitar', 'Bass', 'Drums'], patterns: ['Nashville Two-Step'] },
    ],
  },
  tango: {
    name: 'Tango Traditional',
    dspProfile: {
      master: {
        vintage: { wowFlutter: 0.1, saturation: 0.25 }, // 1940s RCA Victor shellac/vinyl emulation
        eq: { highPassCutoff: 40, lowPassCutoff: 12000 }
      },
      instruments: {
        'Bandoneón': {
          distortion: { drive: 0.15, type: 'tube', tone: 4500, circuitModel: 'RCA 44 Ribbon Mic into tube preamp. Thickens the harsh reed transients into a warm, weeping midrange.' },
          eq: { midPeak: { freq: 2000, gain: 3.5, q: 1.2 } },
          spatial: { reverbMix: 0.1, reverbTime: 0.8, reverbType: 'room' }
        },
        'Upright Bass': {
          distortion: { drive: 0.2, type: 'tape', tone: 1000, circuitModel: 'Pushed magnetic tape. Saturates the low-end pizzicato attacks without clipping.' },
          eq: { lowShelf: { freq: 80, gain: 3.0 } }
        },
        'Violin': {
          spatial: { reverbMix: 0.25, reverbTime: 1.4, reverbType: 'chamber' }, // Darker, larger acoustic space for strings
          eq: { highShelf: { freq: 6000, gain: -2.0 } }
        }
      }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Piano', 'Bandoneón'], patterns: ['Marcato 4'] },
      { id: 'A', energy: 'medium', instruments: ['Piano', 'Bandoneón', 'Upright Bass'], patterns: ['Síncopa'] },
      { id: 'B', energy: 'high', instruments: ['Piano', 'Bandoneón', 'Upright Bass', 'Violin'], patterns: ['Marcato 4', 'Arrastre'], featured: ['Violin'] },
      { id: 'C', energy: 'low', instruments: ['Bandoneón'], patterns: ['Rubato'], featured: ['Bandoneón'] },
      { id: 'Outro', energy: 'high', instruments: ['Piano', 'Bandoneón', 'Upright Bass', 'Violin'], patterns: ['Síncopa'] },
    ],
  },
  flamenco: {
    name: 'Flamenco Bulerías',
    dspProfile: {
      distortion: { drive: 0.02, type: 'clean', tone: 15000, circuitModel: 'Ultra-fast solid-state clean preamps. Zero harmonic coloration to perfectly capture the sharp, percussive nail attacks (picado) and footwork.' },
      eq: { highPassCutoff: 120, midPeak: { freq: 4500, gain: 3.0, q: 1.5 } }
    },
    sections: [
      { id: 'Falseta', energy: 'low', instruments: ['Flamenco Guitar'], patterns: ['Picado'], featured: ['Flamenco Guitar'] },
      { id: 'Letra', energy: 'medium', instruments: ['Flamenco Guitar', 'Cajón', 'Palmas'], patterns: ['Rasgueado', 'Golpe'], featured: ['Voice'] },
      { id: 'Escobilla', energy: 'high', instruments: ['Cajón', 'Palmas', 'Flamenco Guitar'], patterns: ['Compás 12'], featured: ['Palmas'] },
      { id: 'Macho', energy: 'peak', instruments: ['Flamenco Guitar', 'Cajón', 'Palmas'], patterns: ['Bulerías Fast'], featured: ['Flamenco Guitar'] },
      { id: 'Cierre', energy: 'high', instruments: ['Flamenco Guitar', 'Cajón', 'Palmas'], patterns: ['Remate'] },
    ],
  },
  afrobeats: {
    name: 'Afrobeats Modern',
    dspProfile: {
      distortion: { drive: 0.15, type: 'tape', tone: 16000, circuitModel: 'Modern clean digital bus with parallel tape saturation on the drum stem. Glues the shaker and log drum transients together warmly.' },
      eq: { lowShelf: { freq: 55, gain: 5.0 } }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['Shaker', 'Log Drum'], patterns: ['Timeline Cycle'] },
      { id: 'Verse', energy: 'medium', instruments: ['Shaker', 'Log Drum', 'Electric Bass', 'Electric Guitar'], patterns: ['Syncopated Groove'] },
      { id: 'Chorus', energy: 'high', instruments: ['Shaker', 'Log Drum', 'Electric Bass', 'Electric Guitar', 'Horns'], patterns: ['3-2 Polyrhythm'], featured: ['Horns'] },
      { id: 'Bridge', energy: 'medium', instruments: ['Log Drum', 'Keys'], patterns: ['Sparse Beat'] },
      { id: 'Outro', energy: 'low', instruments: ['Shaker', 'Keys'] },
    ],
  },
  house: {
    name: 'House Club Mix',
    dspProfile: {
      distortion: { drive: 0.15, type: 'tube', tone: 18000, circuitModel: 'Subtle master bus tube warming. Clean transient retention with just a kiss of even-order harmonic excitement for club systems.' },
      dynamics: { ratio: 4.0, threshold: -14, attack: 15, release: 50 }
    },
    sections: [
      { id: 'Intro', energy: 'low', instruments: ['909 Kick', 'Hi-hat'], patterns: ['Four on Floor'] },
      { id: 'Build', energy: 'medium', instruments: ['909 Kick', 'Hi-hat', 'Snare Roll', 'Synth Arp'], patterns: ['Riser', 'Filter Sweep'] },
      { id: 'Drop', energy: 'peak', instruments: ['909 Kick', 'Hi-hat', 'Clap', 'Synth Bass', 'Lead Synth'], patterns: ['Four on Floor', 'Syncopated Bass'], featured: ['Synth Bass'] },
      { id: 'Breakdown', energy: 'low', instruments: ['Synth Pad', 'Vocal Chop'], patterns: ['Atmospheric'] },
      { id: 'Drop 2', energy: 'peak', instruments: ['909 Kick', 'Hi-hat', 'Clap', 'Synth Bass', 'Lead Synth', 'Ride Cymbal'], patterns: ['Four on Floor', 'Maximalist'], featured: ['Lead Synth'] },
      { id: 'Outro', energy: 'low', instruments: ['909 Kick', 'Hi-hat'], patterns: ['Fade Out'] },
    ],
  },
};

const POP = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('chorus-1','chorus',16,'Chorus','high'),F('verse-2','verse',16,'Verse 2','medium'),F('chorus-2','chorus',16,'Chorus 2','high'),F('bridge','bridge',8,'Bridge','high'),F('chorus-3','chorus',16,'Final Chorus','peak'),F('outro','ending',4,'Outro','low')],
  allowed:['intro','verse-1','chorus-1','verse-2','chorus-2','bridge','chorus-3','outro'],
});
const DANCE = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('groove-1','verse',16,'Groove','medium'),F('groove-2','chorus',24,'Main Groove','high'),F('break','breakdown',8,'Break','low'),F('groove-3','chorus',24,'Main Groove 2','peak'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','groove-1','groove-2','break','groove-3','outro'],
});
const JAZZ = (): GenreForm => ({
  steps:[F('head-in','verse',32,'Head In','medium'),F('solo-1','solo',32,'Solo','high'),F('solo-2','solo',32,'Second Solo','peak'),F('head-out','verse',16,'Head Out','high'),F('coda','coda',8,'Coda','low')],
  allowed:['head-in','solo-1','solo-2','head-out','coda'],
});
const BLUES = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('aab-1','verse',12,'AAB','medium'),F('aab-2','verse',12,'AAB','medium'),F('solo','solo',12,'Solo','peak'),F('aab-3','chorus',12,'AAB Return','high'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','aab-1','aab-2','solo','aab-3','outro'],
});
const LATIN = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('tema','verse',16,'Tema','medium'),F('groove-1','chorus',24,'Montuno','high'),F('mambo','bridge',8,'Mambo','peak'),F('groove-2','chorus',24,'Montuno 2','peak'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','tema','groove-1','mambo','groove-2','coda'],
});
const BALLAD = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('verse-2','verse',16,'Verse 2','medium'),F('bridge','bridge',8,'Bridge','high'),F('verse-3','chorus',16,'Return','high'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','verse-1','verse-2','bridge','verse-3','coda'],
});
const METAL = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','medium'),F('riff-1','verse',16,'Riff','high'),F('chorus','chorus',16,'Chorus','peak'),F('riff-2','verse',16,'Riff 2','high'),F('break','breakdown',8,'Breakdown','low'),F('solo','solo',16,'Solo','peak'),F('final','chorus',16,'Final Chorus','peak'),F('ending','ending',4,'Ending','low')],
  allowed:['intro','riff-1','chorus','riff-2','break','solo','final','ending'],
});
const TANGO = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['Piano', 'Bandoneón'], ['Marcato 4']),
    F('a', 'verse', 16, 'A', 'medium', ['Piano', 'Bandoneón', 'Upright Bass'], ['Síncopa']),
    F('b', 'bridge', 16, 'B', 'high', ['Piano', 'Bandoneón', 'Upright Bass', 'Violin'], ['Marcato 4', 'Arrastre'], ['Violin']),
    F('c', 'solo', 16, 'C', 'low', ['Bandoneón'], ['Rubato'], ['Bandoneón']),
    F('outro', 'ending', 8, 'Outro', 'high', ['Piano', 'Bandoneón', 'Upright Bass', 'Violin'], ['Síncopa']),
  ],
  allowed: ['intro', 'a', 'b', 'c', 'outro'],
});
const FLAMENCO = (): GenreForm => ({
  steps: [
    F('falseta', 'solo', 12, 'Falseta', 'low', ['Flamenco Guitar'], ['Picado'], ['Flamenco Guitar']),
    F('letra', 'verse', 12, 'Letra', 'medium', ['Flamenco Guitar', 'Cajón', 'Palmas'], ['Rasgueado', 'Golpe'], ['Voice']),
    F('escobilla', 'chorus', 8, 'Escobilla', 'high', ['Cajón', 'Palmas', 'Flamenco Guitar'], ['Compás 12'], ['Palmas']),
    F('macho', 'bridge', 8, 'Macho', 'peak', ['Flamenco Guitar', 'Cajón', 'Palmas'], ['Bulerías Fast'], ['Flamenco Guitar']),
    F('cierre', 'ending', 4, 'Cierre', 'high', ['Flamenco Guitar', 'Cajón', 'Palmas'], ['Remate']),
  ],
  allowed: ['falseta', 'letra', 'escobilla', 'macho', 'cierre'],
});
const AFROBEATS = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['Shaker', 'Log Drum'], ['Timeline Cycle']),
    F('verse', 'verse', 16, 'Verse', 'medium', ['Shaker', 'Log Drum', 'Electric Bass', 'Electric Guitar'], ['Syncopated Groove']),
    F('chorus', 'chorus', 16, 'Chorus', 'high', ['Shaker', 'Log Drum', 'Electric Bass', 'Electric Guitar', 'Horns'], ['3-2 Polyrhythm'], ['Horns']),
    F('bridge', 'bridge', 8, 'Bridge', 'medium', ['Log Drum', 'Keys'], ['Sparse Beat']),
    F('outro', 'ending', 8, 'Outro', 'low', ['Shaker', 'Keys']),
  ],
  allowed: ['intro', 'verse', 'chorus', 'bridge', 'outro'],
});
const HOUSE = (): GenreForm => ({
  steps: [
    F('intro', 'intro', 8, 'Intro', 'low', ['909 Kick', 'Hi-hat'], ['Four on Floor']),
    F('build', 'verse', 16, 'Build', 'medium', ['909 Kick', 'Hi-hat', 'Snare Roll', 'Synth Arp'], ['Riser', 'Filter Sweep']),
    F('drop', 'chorus', 24, 'Drop', 'peak', ['909 Kick', 'Hi-hat', 'Clap', 'Synth Bass', 'Lead Synth'], ['Four on Floor', 'Syncopated Bass'], ['Synth Bass']),
    F('breakdown', 'breakdown', 8, 'Breakdown', 'low', ['Synth Pad', 'Vocal Chop'], ['Atmospheric']),
    F('drop-2', 'chorus', 24, 'Drop 2', 'peak', ['909 Kick', 'Hi-hat', 'Clap', 'Synth Bass', 'Lead Synth', 'Ride Cymbal'], ['Four on Floor', 'Maximalist'], ['Lead Synth']),
    F('outro', 'ending', 8, 'Outro', 'low', ['909 Kick', 'Hi-hat'], ['Fade Out']),
  ],
  allowed: ['intro', 'build', 'drop', 'breakdown', 'drop-2', 'outro'],
});

const FORM_BUILDERS: Record<string,()=>GenreForm> = {
  afrobeats:AFROBEATS,bachata:POP,blues:BLUES,brazilian:DANCE,country:POP,cumbia:DANCE,disco:DANCE,electronic:DANCE,
  folk:POP,funk:DANCE,'hip-hop':POP,house:HOUSE,jazz:JAZZ,kizomba:BALLAD,tango:TANGO,
  flamenco:FLAMENCO,metal:METAL,'r-and-b':POP,reggae:DANCE,reggaeton:DANCE,rock:POP,salsa:LATIN,ska:DANCE,soul:POP,
  swing:JAZZ,timba:LATIN,zouk:BALLAD,'drum-and-bass':DANCE,industrial:DANCE,'punk-hardcore':METAL,'uk-bass':DANCE,
};
export const GENRE_FORMS: Record<string,GenreForm> = Object.fromEntries(Object.entries(FORM_BUILDERS).map(([id,build]) => [id,build()]));

export const PROGRESSIONS: Record<string,string[]> = {
  afrobeats:['Am7','Fmaj7','Cmaj7','G6'],bachata:['Am','F','C','G'],blues:['C7','F7','G7','C7'],brazilian:['Dm7','G7','Cmaj7','A7'],country:['G','C','D','G'],
  cumbia:['Am','G','F','E7'],disco:['Am7','D9','Am7','D9'],electronic:['Em','D','C','Em'],folk:['G','C','D','G'],funk:['Dm7','C','Bb','C'],
  'hip-hop':['Dm7','Bb','F','C'],house:['Fmaj7','Em7','Dm7','Cmaj7'],jazz:['Dm7','G7','Cmaj7','Am7'],kizomba:['Fmaj7','Em7','Am7','Dm7'],
  tango:['Am','E7','Am','Dm'],flamenco:['Am','G','F','E7'],metal:['E5','C5','D5','B5'],
  'r-and-b':['Dm7','G7','Cmaj7','Am7'],reggae:['Am','G','F','G'],reggaeton:['Am','F','C','G'],rock:['Em','C','D','B7'],salsa:['Cmaj7','Fmaj7','G7','Cmaj7'],
  ska:['C','Dm','F','G'],soul:['Cmaj7','Am7','Dm7','G7'],swing:['C6','A7','Dm7','G7'],timba:['Am7','Dm7','E7','Am7'],zouk:['Fmaj7','Bbmaj7','Am7','Dm7'],
  'drum-and-bass':['Em7','Cmaj7','G','D'],'industrial':['E5','F5','E5','F5'],'punk-hardcore':['E5','G5','A5','B5'],'uk-bass':['Am7','G','F','G'],
};
export const TEMPOS: Record<string,number> = {
  afrobeats:108,bachata:128,blues:92,brazilian:112,country:110,cumbia:102,disco:120,electronic:124,folk:96,funk:104,'hip-hop':90,
  house:124,jazz:140,kizomba:92,tango:120,flamenco:96,metal:150,'r-and-b':82,reggae:78,reggaeton:96,rock:128,salsa:96,
  ska:168,soul:94,swing:160,timba:100,zouk:100,'drum-and-bass':174,industrial:128,'punk-hardcore':180,'uk-bass':132,
};
export const TITLES: Record<string,string> = Object.fromEntries(Object.keys(GENRE_FORMS).map(id => [id, `${id} sketch`]));

/** Optional preference hints; empty keeps selection catalog-driven. */
export const DEFAULT_PATTERN_PREFERENCES: Record<string, Record<string, string>> = {};
