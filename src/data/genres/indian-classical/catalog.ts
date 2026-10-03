import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "indian-classical",
  "name": "Indian Classical",
  "family": "South Asia",
  "color": "#9af20e",
  "description": "Indian Classical is an independent musical world. South Asia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Hindustani Khayal",
  "meter": "4/4",
  "tempo": [64, 80],
  "instruments": ["voice", "sarangi", "tanpura", "tabla", "rudra-veena", "pakhawaj", "sitar"],
  "roles": {
    "lead": ["voice", "sarangi"],
    "harmony": ["tanpura"],
    "percussion": ["tabla"]
  },
  "pitchSystem": "raga / shruti inflection",
  "scales": ["major"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["khayal vilambit bol alap and drut taan", "dhrupad long alap and pakhawaj cycle", "instrumental gat with tabla and jhala plucks", "thumri lyrical bol banav and flexible cadence", "Carnatic kriti pallavi anupallavi charanam", "ragam tanam pallavi and rhythmic improvisation", "varnam composed phrases and swara passages", "tillana rhythmic syllables and brisk melodic cadence"],
  "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "hindustani-khayal",
      "name": "Hindustani Khayal",
      "description": "Hindustani Khayal: khayal vilambit bol alap and drut taan. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["khayal vilambit bol alap and drut taan"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "vilambit": ["D5", "D5"],
        "drut": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "vilambit", "bars": 8},
        {"label": "drut", "bars": 8},
        {"label": "taan", "bars": 8},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "khayal vilambit bol alap and drut taan voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "khayal vilambit bol alap and drut taan sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "khayal vilambit bol alap and drut taan tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "khayal vilambit bol alap and drut taan tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "khayal vilambit bol alap and drut taan tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "dhrupad",
      "name": "Dhrupad",
      "description": "Dhrupad: dhrupad long alap and pakhawaj cycle. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dhrupad long alap and pakhawaj cycle"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major",
      "roles": {
        "lead": ["voice", "rudra-veena"],
        "harmony": ["tanpura"],
        "percussion": ["pakhawaj"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "jor": ["D5", "D5"],
        "nom tom": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "jor", "bars": 8},
        {"label": "nom tom", "bars": 8},
        {"label": "dhrupad", "bars": 8},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dhrupad long alap and pakhawaj cycle voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dhrupad long alap and pakhawaj cycle rudra-veena statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["rudra-veena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle rudra-veena cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["rudra-veena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dhrupad long alap and pakhawaj cycle tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "dhrupad long alap and pakhawaj cycle pakhawaj pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["pakhawaj"], "cycleLength": 1, "articulation": "accent"},
        {"name": "dhrupad long alap and pakhawaj cycle pakhawaj cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["pakhawaj"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "rudra-veena": ["tremolo", "accent", "staccato", "legato"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "pakhawaj": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "rudra-veena:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "pakhawaj:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "instrumental-gat",
      "name": "Instrumental Gat",
      "description": "Instrumental Gat: instrumental gat with tabla and jhala plucks. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["instrumental gat with tabla and jhala plucks"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "major",
      "roles": {
        "lead": ["sitar"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "alap": ["D5", "D5"],
        "jor": ["D5", "D5"],
        "gat": ["D5", "D5"],
        "cadence": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alap", "bars": 4},
        {"label": "jor", "bars": 8},
        {"label": "gat", "bars": 8},
        {"label": "jhala", "bars": 8, "soloInstrumentId": "sitar", "soloMode": "accompanied"},
        {"label": "cadence", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "instrumental gat with tabla and jhala plucks sitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["sitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "instrumental gat with tabla and jhala plucks sitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "instrumental gat with tabla and jhala plucks tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "instrumental gat with tabla and jhala plucks tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "instrumental gat with tabla and jhala plucks tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "sitar": ["tremolo", "accent", "staccato", "legato"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "sitar:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "thumri",
      "name": "Thumri",
      "description": "Thumri: thumri lyrical bol banav and flexible cadence. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["thumri lyrical bol banav and flexible cadence"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "sthayi": ["D5", "D5"],
        "antara": ["D5", "D5"],
        "return": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "sthayi", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "bol banav", "bars": 8},
        {"label": "return", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "thumri lyrical bol banav and flexible cadence voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "thumri lyrical bol banav and flexible cadence sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "thumri lyrical bol banav and flexible cadence tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "thumri lyrical bol banav and flexible cadence tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "thumri lyrical bol banav and flexible cadence tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "carnatic-kriti",
      "name": "Carnatic Kriti",
      "description": "Carnatic Kriti: Carnatic kriti pallavi anupallavi charanam. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Carnatic kriti pallavi anupallavi charanam"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "alapana": ["D5", "D5"],
        "pallavi": ["D5"],
        "charanam": ["D5", "D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "alapana", "bars": 4},
        {"label": "pallavi", "bars": 8},
        {"label": "anupallavi", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "swaras", "bars": 8},
        {"label": "pallavi", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Carnatic kriti pallavi anupallavi charanam voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Carnatic kriti pallavi anupallavi charanam sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Carnatic kriti pallavi anupallavi charanam tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "Carnatic kriti pallavi anupallavi charanam tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Carnatic kriti pallavi anupallavi charanam tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "ragam-tanam-pallavi",
      "name": "Ragam-Tanam-Pallavi",
      "description": "Ragam-Tanam-Pallavi: ragam tanam pallavi and rhythmic improvisation. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["ragam tanam pallavi and rhythmic improvisation"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "ragam": ["D5", "D5"],
        "tanam": ["D5", "D5"],
        "neraval": ["D5", "D5"],
        "pallavi": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "ragam", "bars": 4},
        {"label": "tanam", "bars": 8},
        {"label": "pallavi", "bars": 8},
        {"label": "neraval", "bars": 8},
        {"label": "swaras", "bars": 8},
        {"label": "tani", "bars": 8},
        {"label": "pallavi", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ragam tanam pallavi and rhythmic improvisation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ragam tanam pallavi and rhythmic improvisation sarangi statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ragam tanam pallavi and rhythmic improvisation tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "ragam tanam pallavi and rhythmic improvisation tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ragam tanam pallavi and rhythmic improvisation tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "varnam",
      "name": "Varnam",
      "description": "Varnam: varnam composed phrases and swara passages. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["varnam composed phrases and swara passages"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "pallavi": ["D5", "D5"],
        "anupallavi": ["D5", "D5"],
        "charanam": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pallavi", "bars": 4},
        {"label": "anupallavi", "bars": 8},
        {"label": "muktayi swara", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "chitta swaras", "bars": 8},
        {"label": "charanam", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "varnam composed phrases and swara passages voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "varnam composed phrases and swara passages sarangi statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "varnam composed phrases and swara passages tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "varnam composed phrases and swara passages tabla pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "varnam composed phrases and swara passages tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
      "id": "tillana",
      "name": "Tillana",
      "description": "Tillana: tillana rhythmic syllables and brisk melodic cadence. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["tillana rhythmic syllables and brisk melodic cadence"],
      "techniques": ["meend", "gamaka", "ornament", "tremolo", "jawari-pluck", "cyclic-drone", "roll", "breath-phrase", "accent", "staccato", "legato", "vibrato", "bowed-ornament", "open", "slap"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "major",
      "roles": {
        "lead": ["voice", "sarangi"],
        "harmony": ["tanpura"],
        "percussion": ["tabla"]
      },
      "progressions": {
        "pallavi": ["D5", "D5"],
        "anupallavi": ["D5", "D5"],
        "rhythmic syllables": ["D5", "D5"],
        "closing": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "pallavi", "bars": 4},
        {"label": "anupallavi", "bars": 8},
        {"label": "rhythmic syllables", "bars": 8},
        {"label": "charanam", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tillana rhythmic syllables and brisk melodic cadence voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence sarangi statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["sarangi"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence sarangi cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sarangi"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence tanpura accompaniment", "role": "harmony", "onsets": [0], "instruments": ["tanpura"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence tabla pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tillana rhythmic syllables and brisk melodic cadence tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "sarangi": ["meend", "gamaka", "bowed-ornament"],
        "tanpura": ["cyclic-drone", "jawari-pluck"],
        "tabla": ["meend", "accent", "open", "slap"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "sarangi:lead": {
          "allowedTechniques": ["meend", "gamaka", "bowed-ornament"],
          "defaultTechnique": "meend"
        },
        "tanpura:harmony": {
          "allowedTechniques": ["cyclic-drone", "jawari-pluck"],
          "defaultTechnique": "cyclic-drone"
        },
        "tabla:percussion": {
          "allowedTechniques": ["meend", "accent", "open", "slap"],
          "defaultTechnique": "meend"
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
