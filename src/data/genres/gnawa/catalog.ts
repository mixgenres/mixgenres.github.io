import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "gnawa",
  "name": "Gnawa",
  "family": "Morocco",
  "color": "#ca08f5",
  "description": "Gnawa is an independent musical world. Morocco idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Traditional",
  "meter": "6/8",
  "tempo": [88, 104],
  "instruments": ["voice", "guembri", "qraqeb", "tenor-sax", "drums", "guitar"],
  "roles": {
    "lead": ["voice"],
    "bass": ["guembri"],
    "percussion": ["qraqeb"]
  },
  "pitchSystem": "modal / drone-centered",
  "scales": ["minor-pentatonic"],
  "chordQualities": ["D5", "Dm7", "Gm7"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["guembri pluck and qraqeb ternary response", "lila trance cyclic guembri and accelerating chant", "Gnawa jazz guembri vamp and improvised horn", "Gnawa rock guembri figure and guitar response"],
  "techniques": ["pluck", "slap", "call-response", "melisma", "accent", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "traditional",
      "name": "Traditional",
      "description": "Traditional: guembri pluck and qraqeb ternary response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["guembri pluck and qraqeb ternary response"],
      "techniques": ["pluck", "slap", "call-response", "melisma", "accent", "roll", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["D5"],
      "meter": "6/8",
      "tempo": [88, 104],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice"],
        "bass": ["guembri"],
        "percussion": ["qraqeb"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "call": ["D5", "D5"],
        "trance cycle": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "call", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "trance cycle", "bars": 8},
        {"label": "acceleration", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "guembri pluck and qraqeb ternary response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "guembri pluck and qraqeb ternary response voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guembri pluck and qraqeb ternary response low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guembri"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "guembri pluck and qraqeb ternary response guembri cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guembri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "guembri pluck and qraqeb ternary response qraqeb pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["qraqeb"], "cycleLength": 1, "articulation": "accent"},
        {"name": "guembri pluck and qraqeb ternary response qraqeb cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["qraqeb"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guembri": ["accent", "slap", "staccato", "legato"],
        "qraqeb": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guembri:bass": {
          "allowedTechniques": ["accent", "slap", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "qraqeb:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "lila-trance",
      "name": "Lila / Trance",
      "description": "Lila / Trance: lila trance cyclic guembri and accelerating chant. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["lila trance cyclic guembri and accelerating chant"],
      "techniques": ["pluck", "slap", "call-response", "melisma", "accent", "roll", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["D5"],
      "meter": "6/8",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice"],
        "bass": ["guembri"],
        "percussion": ["qraqeb"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "call": ["D5", "D5"],
        "trance cycle": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "call", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "trance cycle", "bars": 8},
        {"label": "acceleration", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "lila trance cyclic guembri and accelerating chant voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "lila trance cyclic guembri and accelerating chant voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "lila trance cyclic guembri and accelerating chant low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guembri"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "lila trance cyclic guembri and accelerating chant guembri cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guembri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "lila trance cyclic guembri and accelerating chant qraqeb pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["qraqeb"], "cycleLength": 1, "articulation": "accent"},
        {"name": "lila trance cyclic guembri and accelerating chant qraqeb cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["qraqeb"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guembri": ["accent", "slap", "staccato", "legato"],
        "qraqeb": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guembri:bass": {
          "allowedTechniques": ["accent", "slap", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "qraqeb:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "gnawa-jazz",
      "name": "Gnawa Jazz",
      "description": "Gnawa Jazz: Gnawa jazz guembri vamp and improvised horn. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gnawa jazz guembri vamp and improvised horn"],
      "techniques": ["pluck", "slap", "call-response", "melisma", "accent", "roll", "staccato", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "6/8",
      "tempo": [104, 120],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "tenor-sax"],
        "bass": ["guembri"],
        "percussion": ["qraqeb", "drums"]
      },
      "progressions": {
        "vamp": ["Dm7", "Dm7"],
        "response": ["Dm7", "Gm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "call", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "trance cycle", "bars": 8},
        {"label": "acceleration", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Gnawa jazz guembri vamp and improvised horn voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gnawa jazz guembri vamp and improvised horn voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa jazz guembri vamp and improvised horn tenor-sax statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "Gnawa jazz guembri vamp and improvised horn tenor-sax cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa jazz guembri vamp and improvised horn low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guembri"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Gnawa jazz guembri vamp and improvised horn guembri cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guembri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa jazz guembri vamp and improvised horn qraqeb pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["qraqeb"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Gnawa jazz guembri vamp and improvised horn qraqeb cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["qraqeb"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Gnawa jazz guembri vamp and improvised horn kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Gnawa jazz guembri vamp and improvised horn drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "tenor-sax": ["accent", "staccato", "legato", "tenuto", "vibrato"],
        "guembri": ["accent", "slap", "staccato", "legato"],
        "qraqeb": ["accent", "roll", "ghost", "open"],
        "drums": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guembri:bass": {
          "allowedTechniques": ["accent", "slap", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "qraqeb:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
      "id": "gnawa-rock",
      "name": "Gnawa Rock",
      "description": "Gnawa Rock: Gnawa rock guembri figure and guitar response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Gnawa rock guembri figure and guitar response"],
      "techniques": ["pluck", "slap", "call-response", "melisma", "accent", "roll", "staccato", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Dm7", "Gm7"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "guitar"],
        "bass": ["guembri"],
        "percussion": ["qraqeb", "drums"]
      },
      "progressions": {
        "vamp": ["Dm7", "Dm7"],
        "response": ["Dm7", "Gm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "call", "bars": 8},
        {"label": "response", "bars": 8},
        {"label": "trance cycle", "bars": 8},
        {"label": "acceleration", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Gnawa rock guembri figure and guitar response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gnawa rock guembri figure and guitar response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa rock guembri figure and guitar response guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Gnawa rock guembri figure and guitar response guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa rock guembri figure and guitar response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["guembri"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Gnawa rock guembri figure and guitar response guembri cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["guembri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Gnawa rock guembri figure and guitar response qraqeb pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["qraqeb"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Gnawa rock guembri figure and guitar response qraqeb cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["qraqeb"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Gnawa rock guembri figure and guitar response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Gnawa rock guembri figure and guitar response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["accent", "pluck", "staccato", "legato", "vibrato"],
        "guembri": ["accent", "slap", "staccato", "legato"],
        "qraqeb": ["accent", "roll", "ghost", "open"],
        "drums": ["accent", "roll", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["accent", "pluck", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "solid-electric"
        },
        "guembri:bass": {
          "allowedTechniques": ["accent", "slap", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "qraqeb:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "roll", "ghost", "open"],
          "defaultTechnique": "accent"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
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
          "roomSize": 0.4,
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
