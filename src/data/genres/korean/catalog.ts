import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "korean",
  "name": "Korean",
  "family": "Korea",
  "color": "#9d42bc",
  "description": "Korean is an independent musical world. Korea idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Jeongak",
  "meter": "4/4",
  "tempo": [52, 68],
  "instruments": ["haegeum", "gayageum", "janggu", "voice", "buk", "gongs"],
  "roles": {
    "lead": ["haegeum"],
    "harmony": ["gayageum"],
    "percussion": ["janggu"]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["jeongak long heterophonic melody and slow jangdan", "pansori solo voice and buk cues", "sanjo slow to fast ornamented solo and janggu", "samulnori four percussion interlocking jangdan", "minyo folk vocal response and janggu cycle"],
  "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "jeongak",
      "name": "Jeongak",
      "description": "Jeongak: jeongak long heterophonic melody and slow jangdan. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["jeongak long heterophonic melody and slow jangdan"],
      "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch", "plucked-ornament"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["haegeum"],
        "harmony": ["gayageum"],
        "percussion": ["janggu"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow jangdan": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow jangdan", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "fast jangdan", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "jeongak long heterophonic melody and slow jangdan haegeum statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["haegeum"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "jeongak long heterophonic melody and slow jangdan haegeum cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["haegeum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jeongak long heterophonic melody and slow jangdan gayageum accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["gayageum"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "jeongak long heterophonic melody and slow jangdan gayageum cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["gayageum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "jeongak long heterophonic melody and slow jangdan janggu pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["janggu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "jeongak long heterophonic melody and slow jangdan janggu cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["janggu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "haegeum": ["continuous-pitch", "vibrato", "ornament", "glissando"],
        "gayageum": ["vibrato", "bend", "glissando", "plucked-ornament"],
        "janggu": ["roll"]
      },
      "instrumentDialects": {
        "haegeum:lead": {
          "allowedTechniques": ["continuous-pitch", "vibrato", "ornament", "glissando"],
          "defaultTechnique": "continuous-pitch"
        },
        "gayageum:harmony": {
          "allowedTechniques": ["vibrato", "bend", "glissando", "plucked-ornament"],
          "defaultTechnique": "vibrato"
        },
        "janggu:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
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
      "id": "pansori",
      "name": "Pansori",
      "description": "Pansori: pansori solo voice and buk cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["pansori solo voice and buk cues"],
      "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch", "staccato", "legato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "percussion": ["buk"]
      },
      "progressions": {
        "spoken opening": ["D5", "D5"],
        "slow narrative": ["D5", "D5"],
        "vocal development": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "spoken opening", "bars": 4},
        {"label": "slow narrative", "bars": 8},
        {"label": "vocal development", "bars": 8},
        {"label": "fast narrative", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "pansori solo voice and buk cues voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "pansori solo voice and buk cues voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "pansori solo voice and buk cues buk pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["buk"], "cycleLength": 1, "articulation": "accent"},
        {"name": "pansori solo voice and buk cues buk cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["buk"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "vibrato", "staccato", "legato"],
        "buk": ["roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "vibrato", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "buk:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
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
      "id": "sanjo",
      "name": "Sanjo",
      "description": "Sanjo: sanjo slow to fast ornamented solo and janggu. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["sanjo slow to fast ornamented solo and janggu"],
      "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch", "plucked-ornament"],
      "harmony": ["D5"],
      "meter": "6/8",
      "tempo": [88, 104],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gayageum"],
        "percussion": ["janggu"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow jangdan": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow jangdan", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "fast jangdan", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sanjo slow to fast ornamented solo and janggu gayageum statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gayageum"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sanjo slow to fast ornamented solo and janggu gayageum cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["gayageum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sanjo slow to fast ornamented solo and janggu janggu pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["janggu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sanjo slow to fast ornamented solo and janggu janggu cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["janggu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "gayageum": ["vibrato", "bend", "glissando", "plucked-ornament"],
        "janggu": ["roll"]
      },
      "instrumentDialects": {
        "gayageum:lead": {
          "allowedTechniques": ["vibrato", "bend", "glissando", "plucked-ornament"],
          "defaultTechnique": "vibrato"
        },
        "janggu:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
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
      "id": "samulnori",
      "name": "Samulnori",
      "description": "Samulnori: samulnori four percussion interlocking jangdan. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["samulnori four percussion interlocking jangdan"],
      "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch"],
      "harmony": ["D5"],
      "meter": "6/8",
      "tempo": [116, 132],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gongs"],
        "percussion": ["janggu", "buk", "gongs"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow jangdan": ["D5", "D5"],
        "fast jangdan": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow jangdan", "bars": 8},
        {"label": "fast jangdan", "bars": 8},
        {"label": "exchange", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "samulnori four percussion interlocking jangdan gongs statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gongs"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "samulnori four percussion interlocking jangdan janggu pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["janggu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samulnori four percussion interlocking jangdan janggu cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["janggu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samulnori four percussion interlocking jangdan buk pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["buk"], "cycleLength": 1, "articulation": "accent"},
        {"name": "samulnori four percussion interlocking jangdan buk cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["buk"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "samulnori four percussion interlocking jangdan gongs pulse", "role": "percussion", "onsets": [2.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "gongs": ["accent", "roll"],
        "janggu": ["roll"],
        "buk": ["roll"]
      },
      "instrumentDialects": {
        "gongs:lead": {
          "allowedTechniques": ["accent", "roll"],
          "defaultTechnique": "accent"
        },
        "janggu:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
        },
        "buk:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
        },
        "gongs:percussion": {
          "allowedTechniques": ["accent", "roll"],
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
    },
    {
      "id": "minyo",
      "name": "Minyo",
      "description": "Minyo: minyo folk vocal response and janggu cycle. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["minyo folk vocal response and janggu cycle"],
      "techniques": ["vibrato", "bend", "glissando", "ornament", "roll", "accent", "continuous-pitch", "staccato", "legato", "plucked-ornament"],
      "harmony": ["D5"],
      "meter": "6/8",
      "tempo": [100, 116],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["voice"],
        "harmony": ["gayageum"],
        "percussion": ["janggu"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "slow jangdan": ["D5", "D5"],
        "variation": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "slow jangdan", "bars": 8},
        {"label": "variation", "bars": 8},
        {"label": "fast jangdan", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "minyo folk vocal response and janggu cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "minyo folk vocal response and janggu cycle voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minyo folk vocal response and janggu cycle gayageum accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["gayageum"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "minyo folk vocal response and janggu cycle gayageum cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["gayageum"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minyo folk vocal response and janggu cycle janggu pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["janggu"], "cycleLength": 1, "articulation": "accent"},
        {"name": "minyo folk vocal response and janggu cycle janggu cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["janggu"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "vibrato", "staccato", "legato"],
        "gayageum": ["vibrato", "bend", "glissando", "plucked-ornament"],
        "janggu": ["roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "vibrato", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "gayageum:harmony": {
          "allowedTechniques": ["vibrato", "bend", "glissando", "plucked-ornament"],
          "defaultTechnique": "vibrato"
        },
        "janggu:percussion": {
          "allowedTechniques": ["roll"],
          "defaultTechnique": "roll"
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
