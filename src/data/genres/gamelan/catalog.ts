import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gamelan",
  "name": "Gamelan",
  "family": "Indonesia",
  "color": "#51547e",
  "description": "Gamelan is an independent musical world. Indonesia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Javanese",
  "meter": "4/4",
  "tempo": [64, 80],
  "instruments": ["gamelan-metallophone", "rebab", "bonang", "kendang", "gongs"],
  "roles": {
    "lead": ["gamelan-metallophone", "rebab"],
    "harmony": ["bonang"],
    "percussion": ["kendang", "gongs"]
  },
  "pitchSystem": "traditional pentatonic/modal tuning",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["Javanese balungan and gong punctuation", "Balinese kotekan interlock and abrupt ensemble cues", "Sundanese degung bonang phrase and gong cadence", "slower cyclical metallophone/gong texture", "angklung short repeating interlock and drum cues", "lighter interlocking cyclic pattern"],
  "techniques": ["damping", "interlocking-pattern", "paired-tuning", "alternating-mallets", "roll", "tempo-cue"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "javanese",
      "name": "Javanese",
      "description": "Javanese: Javanese balungan and gong punctuation. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Javanese balungan and gong punctuation"],
      "techniques": ["damping", "interlocking-pattern", "paired-tuning", "alternating-mallets", "roll", "tempo-cue", "accent", "staccato", "legato", "vibrato", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gamelan-metallophone", "rebab"],
        "harmony": ["bonang"],
        "percussion": ["kendang", "gongs"]
      },
      "progressions": {
        "buka": ["D5", "D5"],
        "main cycle": ["D5", "D5"],
        "irama change": ["D5", "D5"],
        "suwuk": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "buka", "bars": 4},
        {"label": "main cycle", "bars": 8},
        {"label": "irama change", "bars": 8},
        {"label": "main cycle", "bars": 8},
        {"label": "suwuk", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Javanese balungan and gong punctuation gamelan-metallophone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Javanese balungan and gong punctuation gamelan-metallophone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Javanese balungan and gong punctuation rebab statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["rebab"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Javanese balungan and gong punctuation rebab cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["rebab"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Javanese balungan and gong punctuation bonang accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bonang"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Javanese balungan and gong punctuation bonang cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["bonang"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Javanese balungan and gong punctuation kendang pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Javanese balungan and gong punctuation kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Javanese balungan and gong punctuation gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "gamelan-metallophone": ["damping", "interlocking-pattern", "paired-tuning"],
        "rebab": ["accent", "staccato", "legato", "vibrato"],
        "bonang": ["damping", "interlocking-pattern", "paired-tuning"],
        "kendang": ["roll", "tempo-cue", "slap"],
        "gongs": ["roll", "accent"]
      },
      "instrumentDialects": {
        "gamelan-metallophone:lead": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "rebab:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "bonang:harmony": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "kendang:percussion": {
          "allowedTechniques": ["roll", "tempo-cue", "slap"],
          "defaultTechnique": "roll"
        },
        "gongs:percussion": {
          "allowedTechniques": ["roll", "accent"],
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
      "id": "balinese-gong-kebyar",
      "name": "Balinese Gong Kebyar",
      "description": "Balinese Gong Kebyar: Balinese kotekan interlock and abrupt ensemble cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Balinese kotekan interlock and abrupt ensemble cues"],
      "techniques": ["damping", "interlocking-pattern", "paired-tuning", "alternating-mallets", "roll", "tempo-cue", "slap", "accent"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gamelan-metallophone"],
        "harmony": ["gamelan-metallophone", "bonang"],
        "percussion": ["kendang", "gongs"]
      },
      "progressions": {
        "buka": ["D5", "D5"],
        "main cycle": ["D5", "D5"],
        "irama change": ["D5", "D5"],
        "suwuk": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "buka", "bars": 4},
        {"label": "main cycle", "bars": 8},
        {"label": "irama change", "bars": 8},
        {"label": "main cycle", "bars": 8},
        {"label": "suwuk", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Balinese kotekan interlock and abrupt ensemble cues gamelan-metallophone statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues gamelan-metallophone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues gamelan-metallophone accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues gamelan-metallophone cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues bonang accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["bonang"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues bonang cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["bonang"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues kendang pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Balinese kotekan interlock and abrupt ensemble cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "gamelan-metallophone": ["damping", "interlocking-pattern", "paired-tuning"],
        "bonang": ["damping", "interlocking-pattern", "paired-tuning"],
        "kendang": ["roll", "tempo-cue", "slap"],
        "gongs": ["roll", "accent"]
      },
      "instrumentDialects": {
        "gamelan-metallophone:lead": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "gamelan-metallophone:harmony": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "bonang:harmony": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "kendang:percussion": {
          "allowedTechniques": ["roll", "tempo-cue", "slap"],
          "defaultTechnique": "roll"
        },
        "gongs:percussion": {
          "allowedTechniques": ["roll", "accent"],
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
      "id": "degung",
      "name": "Degung",
      "description": "Degung: Sundanese degung bonang phrase and gong cadence. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Sundanese degung bonang phrase and gong cadence", "slower cyclical metallophone/gong texture"],
      "techniques": ["damping", "interlocking-pattern", "paired-tuning", "alternating-mallets", "roll", "tempo-cue", "accent", "staccato", "legato", "vibrato", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gamelan-metallophone", "rebab"],
        "harmony": ["bonang"],
        "percussion": ["kendang", "gongs"]
      },
      "progressions": {
        "buka": ["D5", "D5"],
        "main cycle": ["D5", "D5"],
        "irama change": ["D5", "D5"],
        "suwuk": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "buka", "bars": 4},
        {"label": "main cycle", "bars": 8},
        {"label": "irama change", "bars": 8},
        {"label": "main cycle", "bars": 8},
        {"label": "suwuk", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Sundanese degung bonang phrase and gong cadence gamelan-metallophone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Sundanese degung bonang phrase and gong cadence gamelan-metallophone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Sundanese degung bonang phrase and gong cadence rebab statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["rebab"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Sundanese degung bonang phrase and gong cadence rebab cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["rebab"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Sundanese degung bonang phrase and gong cadence bonang accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bonang"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Sundanese degung bonang phrase and gong cadence bonang cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["bonang"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Sundanese degung bonang phrase and gong cadence kendang pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Sundanese degung bonang phrase and gong cadence kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Sundanese degung bonang phrase and gong cadence gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "gamelan-metallophone": ["damping", "interlocking-pattern", "paired-tuning"],
        "rebab": ["accent", "staccato", "legato", "vibrato"],
        "bonang": ["damping", "interlocking-pattern", "paired-tuning"],
        "kendang": ["roll", "tempo-cue", "slap"],
        "gongs": ["roll", "accent"]
      },
      "instrumentDialects": {
        "gamelan-metallophone:lead": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "rebab:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "bonang:harmony": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "kendang:percussion": {
          "allowedTechniques": ["roll", "tempo-cue", "slap"],
          "defaultTechnique": "roll"
        },
        "gongs:percussion": {
          "allowedTechniques": ["roll", "accent"],
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
      "id": "gamelan-angklung",
      "name": "Gamelan Angklung",
      "description": "Gamelan Angklung: angklung short repeating interlock and drum cues. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["angklung short repeating interlock and drum cues", "lighter interlocking cyclic pattern"],
      "techniques": ["damping", "interlocking-pattern", "paired-tuning", "alternating-mallets", "roll", "tempo-cue", "accent", "staccato", "legato", "vibrato", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["gamelan-metallophone", "rebab"],
        "harmony": ["bonang"],
        "percussion": ["kendang", "gongs"]
      },
      "progressions": {
        "buka": ["D5", "D5"],
        "main cycle": ["D5", "D5"],
        "irama change": ["D5", "D5"],
        "suwuk": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "buka", "bars": 4},
        {"label": "main cycle", "bars": 8},
        {"label": "irama change", "bars": 8},
        {"label": "main cycle", "bars": 8},
        {"label": "suwuk", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "angklung short repeating interlock and drum cues gamelan-metallophone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "angklung short repeating interlock and drum cues gamelan-metallophone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["gamelan-metallophone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "angklung short repeating interlock and drum cues rebab statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["rebab"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "angklung short repeating interlock and drum cues rebab cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["rebab"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "angklung short repeating interlock and drum cues bonang accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bonang"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "angklung short repeating interlock and drum cues bonang cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["bonang"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "angklung short repeating interlock and drum cues kendang pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["kendang"], "cycleLength": 1, "articulation": "accent"},
        {"name": "angklung short repeating interlock and drum cues kendang cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["kendang"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "angklung short repeating interlock and drum cues gongs pulse", "role": "percussion", "onsets": [3.5], "instruments": ["gongs"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "gamelan-metallophone": ["damping", "interlocking-pattern", "paired-tuning"],
        "rebab": ["accent", "staccato", "legato", "vibrato"],
        "bonang": ["damping", "interlocking-pattern", "paired-tuning"],
        "kendang": ["roll", "tempo-cue", "slap"],
        "gongs": ["roll", "accent"]
      },
      "instrumentDialects": {
        "gamelan-metallophone:lead": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "rebab:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "bonang:harmony": {
          "allowedTechniques": ["damping", "interlocking-pattern", "paired-tuning"],
          "defaultTechnique": "damping"
        },
        "kendang:percussion": {
          "allowedTechniques": ["roll", "tempo-cue", "slap"],
          "defaultTechnique": "roll"
        },
        "gongs:percussion": {
          "allowedTechniques": ["roll", "accent"],
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
