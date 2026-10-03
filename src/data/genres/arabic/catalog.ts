import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "arabic",
  "name": "Arabic",
  "family": "Arab world",
  "color": "#c56279",
  "description": "Arabic is an independent musical world. Arab world idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Tarab",
  "meter": "4/4",
  "tempo": [70, 86],
  "instruments": ["voice", "ney", "oud", "qanun", "riq", "darbuka", "violin", "string-ensemble"],
  "roles": {
    "lead": ["voice", "ney"],
    "harmony": ["oud", "qanun"],
    "percussion": ["riq", "darbuka"]
  },
  "pitchSystem": "maqam / microtonal inflection",
  "scales": ["phrygian-dominant"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["tarab vocal melisma and oud answer", "takht heterophonic oud qanun and ney", "muwashshah ten-beat samai cycle", "maqam taqsim with sparse accompaniment", "orchestral unison maqam theme"],
  "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "tarab",
      "name": "Tarab",
      "description": "Tarab: tarab vocal melisma and oud answer. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["tarab vocal melisma and oud answer"],
      "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando", "accent", "staccato", "legato", "vibrato", "ghost", "roll", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [70, 86],
      "scale": "phrygian-dominant",
      "roles": {
        "lead": ["voice", "ney"],
        "harmony": ["oud", "qanun"],
        "percussion": ["riq", "darbuka"]
      },
      "progressions": {
        "bashraf": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "taqsim": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "bashraf", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "taqsim", "bars": 8, "soloInstrumentId": "ney", "soloMode": "unaccompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tarab vocal melisma and oud answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tarab vocal melisma and oud answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarab vocal melisma and oud answer ney statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["ney"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tarab vocal melisma and oud answer ney cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["ney"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarab vocal melisma and oud answer oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tarab vocal melisma and oud answer oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarab vocal melisma and oud answer qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tarab vocal melisma and oud answer qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tarab vocal melisma and oud answer riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tarab vocal melisma and oud answer riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "tarab vocal melisma and oud answer darbuka pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["darbuka"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tarab vocal melisma and oud answer darbuka cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["darbuka"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "ney": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "qanun": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
        "riq": ["accent", "ghost", "roll"],
        "darbuka": ["accent", "open", "slap", "roll", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "ney:lead": {
          "allowedTechniques": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
          "defaultTechnique": "breath-phrase"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "riq:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "darbuka:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "roll", "ghost"],
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
      "id": "takht",
      "name": "Takht",
      "description": "Takht: takht heterophonic oud qanun and ney. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["takht heterophonic oud qanun and ney"],
      "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando", "ornamented-slide", "celtic-ornament", "accent", "staccato", "legato", "vibrato", "ghost", "roll"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "phrygian-dominant",
      "roles": {
        "lead": ["ney", "violin"],
        "harmony": ["oud", "qanun"],
        "percussion": ["riq"]
      },
      "progressions": {
        "bashraf": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "taqsim": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "bashraf", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "taqsim", "bars": 8, "soloInstrumentId": "ney", "soloMode": "unaccompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "takht heterophonic oud qanun and ney ney statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["ney"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "takht heterophonic oud qanun and ney ney cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["ney"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "takht heterophonic oud qanun and ney violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "takht heterophonic oud qanun and ney violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "takht heterophonic oud qanun and ney oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "takht heterophonic oud qanun and ney oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "takht heterophonic oud qanun and ney qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "takht heterophonic oud qanun and ney qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "takht heterophonic oud qanun and ney riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "takht heterophonic oud qanun and ney riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "ney": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
        "violin": ["tremolo", "ornamented-slide", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "qanun": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
        "riq": ["accent", "ghost", "roll"]
      },
      "instrumentDialects": {
        "ney:lead": {
          "allowedTechniques": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
          "defaultTechnique": "breath-phrase"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "ornamented-slide", "celtic-ornament", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "riq:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
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
      "id": "muwashshah",
      "name": "Muwashshah",
      "description": "Muwashshah: muwashshah ten-beat samai cycle. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["muwashshah ten-beat samai cycle"],
      "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando", "accent", "staccato", "legato", "vibrato", "ghost", "roll", "open", "slap"],
      "harmony": ["D5"],
      "meter": "10/4",
      "tempo": [78, 94],
      "scale": "phrygian-dominant",
      "roles": {
        "lead": ["voice", "ney"],
        "harmony": ["oud", "qanun"],
        "percussion": ["riq", "darbuka"]
      },
      "progressions": {
        "bashraf": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "taqsim": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "bashraf", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "taqsim", "bars": 8, "soloInstrumentId": "ney", "soloMode": "unaccompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "muwashshah ten-beat samai cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "muwashshah ten-beat samai cycle voice cadence fill", "role": "lead", "onsets": [9.0, 9.5, 9.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "muwashshah ten-beat samai cycle ney statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["ney"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "muwashshah ten-beat samai cycle ney cadence fill", "role": "lead", "onsets": [9.0, 9.5, 9.75], "instruments": ["ney"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "muwashshah ten-beat samai cycle oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "muwashshah ten-beat samai cycle oud cadence fill", "role": "harmony", "onsets": [9.0, 9.5, 9.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "muwashshah ten-beat samai cycle qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "muwashshah ten-beat samai cycle qanun cadence fill", "role": "harmony", "onsets": [9.0, 9.5, 9.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "muwashshah ten-beat samai cycle riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "muwashshah ten-beat samai cycle riq cadence fill", "role": "percussion", "onsets": [9.0, 9.5, 9.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "muwashshah ten-beat samai cycle darbuka pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["darbuka"], "cycleLength": 1, "articulation": "accent"},
        {"name": "muwashshah ten-beat samai cycle darbuka cadence fill", "role": "percussion", "onsets": [9.0, 9.5, 9.75], "instruments": ["darbuka"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "ney": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "qanun": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
        "riq": ["accent", "ghost", "roll"],
        "darbuka": ["accent", "open", "slap", "roll", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "ney:lead": {
          "allowedTechniques": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
          "defaultTechnique": "breath-phrase"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "riq:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "darbuka:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "roll", "ghost"],
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
      "id": "instrumental-maqam",
      "name": "Instrumental Maqam",
      "description": "Instrumental Maqam: maqam taqsim with sparse accompaniment. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["maqam taqsim with sparse accompaniment"],
      "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando", "accent", "staccato", "legato", "vibrato"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "phrygian-dominant",
      "roles": {
        "lead": ["oud"]
      },
      "progressions": {
        "taqsim": ["D5", "D5"],
        "taqsim development": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taqsim", "bars": 4, "soloInstrumentId": "oud", "soloMode": "unaccompanied"},
        {"label": "taqsim development", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "maqam taqsim with sparse accompaniment oud statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["oud"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "maqam taqsim with sparse accompaniment oud cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "oud:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
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
      "id": "modern-arabic-orchestra",
      "name": "Modern Arabic Orchestra",
      "description": "Modern Arabic Orchestra: orchestral unison maqam theme. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["orchestral unison maqam theme"],
      "techniques": ["microtonal-inflection", "ornament", "tremolo", "trill", "breath-phrase", "glissando", "accent", "staccato", "legato", "vibrato", "ghost", "roll", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "phrygian-dominant",
      "roles": {
        "lead": ["voice", "ney"],
        "harmony": ["oud", "qanun", "string-ensemble"],
        "percussion": ["riq", "darbuka"]
      },
      "progressions": {
        "bashraf": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "taqsim": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "bashraf", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "taqsim", "bars": 8, "soloInstrumentId": "ney", "soloMode": "unaccompanied"},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "orchestral unison maqam theme voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "orchestral unison maqam theme voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral unison maqam theme ney statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["ney"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "orchestral unison maqam theme ney cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["ney"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral unison maqam theme oud accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "orchestral unison maqam theme oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral unison maqam theme qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "orchestral unison maqam theme qanun cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral unison maqam theme string-ensemble accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "orchestral unison maqam theme string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "orchestral unison maqam theme riq pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["riq"], "cycleLength": 1, "articulation": "accent"},
        {"name": "orchestral unison maqam theme riq cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["riq"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "orchestral unison maqam theme darbuka pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["darbuka"], "cycleLength": 1, "articulation": "accent"},
        {"name": "orchestral unison maqam theme darbuka cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["darbuka"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "ney": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "qanun": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
        "string-ensemble": ["tremolo", "accent", "legato", "staccato"],
        "riq": ["accent", "ghost", "roll"],
        "darbuka": ["accent", "open", "slap", "roll", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "ney:lead": {
          "allowedTechniques": ["breath-phrase", "microtonal-inflection", "ornament", "glissando"],
          "defaultTechnique": "breath-phrase"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["tremolo", "accent", "legato", "staccato"],
          "defaultTechnique": "tremolo"
        },
        "riq:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll"],
          "defaultTechnique": "accent"
        },
        "darbuka:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "roll", "ghost"],
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
