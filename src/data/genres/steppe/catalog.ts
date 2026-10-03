import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "steppe",
  "name": "Steppe",
  "family": "Central Asia / Mongolia",
  "color": "#694d56",
  "description": "Steppe is an independent musical world. Central Asia / Mongolia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Morin Khuur",
  "meter": "4/4",
  "tempo": [56, 72],
  "instruments": ["morin-khuur", "voice", "dombra", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["morin-khuur"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5", "D", "G", "A", "Bm"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["morin khuur long bowed melody and drone", "khoomei sustained fundamental and overtone melody", "sygyt high overtone line above steady fundamental", "kargyraa low throat drone and resonant overtones", "dombra alternating plucked kui and rapid ornaments", "steppe folk rock bowed hook and band backbeat"],
  "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "morin-khuur",
      "name": "Morin Khuur",
      "description": "Morin Khuur: morin khuur long bowed melody and drone. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["morin khuur long bowed melody and drone"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "legato", "staccato", "tenuto", "accent"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "morin-khuur", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "morin khuur long bowed melody and drone morin-khuur statement", "role": "lead", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "morin khuur long bowed melody and drone morin-khuur cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["morin-khuur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "morin-khuur:lead": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "khoomei",
      "name": "Khöömei",
      "description": "Khöömei: khoomei sustained fundamental and overtone melody. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["khoomei sustained fundamental and overtone melody"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "khoomei sustained fundamental and overtone melody voice statement", "role": "lead", "onsets": [0], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "khoomei sustained fundamental and overtone melody voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "khoomei sustained fundamental and overtone melody morin-khuur accompaniment", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "sygyt",
      "name": "Sygyt",
      "description": "Sygyt: sygyt high overtone line above steady fundamental. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["sygyt high overtone line above steady fundamental"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [54, 70],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sygyt high overtone line above steady fundamental voice statement", "role": "lead", "onsets": [0], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "sygyt high overtone line above steady fundamental voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sygyt high overtone line above steady fundamental morin-khuur accompaniment", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "kargyraa",
      "name": "Kargyraa",
      "description": "Kargyraa: kargyraa low throat drone and resonant overtones. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["kargyraa low throat drone and resonant overtones"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "texture": ["morin-khuur"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kargyraa low throat drone and resonant overtones voice statement", "role": "lead", "onsets": [0], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "kargyraa low throat drone and resonant overtones voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kargyraa low throat drone and resonant overtones morin-khuur accompaniment", "role": "texture", "onsets": [0], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:texture": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "dombra",
      "name": "Dombra",
      "description": "Dombra: dombra alternating plucked kui and rapid ornaments. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dombra alternating plucked kui and rapid ornaments"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["dombra"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "long melody": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "dombra", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dombra alternating plucked kui and rapid ornaments dombra statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["dombra"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dombra alternating plucked kui and rapid ornaments dombra cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["dombra"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "dombra": ["tremolo", "accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "dombra:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "folk-rock-fusion",
      "name": "Folk-Rock Fusion",
      "description": "Folk-Rock Fusion: steppe folk rock bowed hook and band backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["steppe folk rock bowed hook and band backbeat"],
      "techniques": ["harmonics", "arco", "tremolo", "ornament", "vibrato", "throat-singing", "overtones", "accent", "staccato", "legato", "tenuto", "harmonic", "ghost", "open", "roll"],
      "harmony": ["D", "G", "A", "Bm"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice", "morin-khuur"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "verse": ["D", "G", "D", "A"],
        "chorus": ["Bm", "G", "D", "A"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "long melody", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "morin-khuur", "soloMode": "accompanied"},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "steppe folk rock bowed hook and band backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "steppe folk rock bowed hook and band backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "steppe folk rock bowed hook and band backbeat morin-khuur statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["morin-khuur"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "steppe folk rock bowed hook and band backbeat morin-khuur cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["morin-khuur"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "steppe folk rock bowed hook and band backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "steppe folk rock bowed hook and band backbeat guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "steppe folk rock bowed hook and band backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "steppe folk rock bowed hook and band backbeat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "steppe folk rock bowed hook and band backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "steppe folk rock bowed hook and band backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "morin-khuur": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
        "guitar": ["tremolo", "harmonic", "vibrato", "accent", "staccato", "legato"],
        "bass": ["harmonic", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "morin-khuur:lead": {
          "allowedTechniques": ["arco", "tremolo", "vibrato", "legato", "staccato", "tenuto", "accent"],
          "defaultTechnique": "arco"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "harmonic", "vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["harmonic", "accent", "staccato", "legato"],
          "defaultTechnique": "harmonic"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.78,
          "bassForward": 0.46,
          "width": 0.48,
          "brightness": 0.6,
          "compressionRatio": 1.45,
          "transientSnap": 0.72,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.48,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.24,
          "reverbSend": 0.08,
          "delaySend": 0.03
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    }
  ]
};
