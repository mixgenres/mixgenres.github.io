import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "andean",
  "name": "Andean",
  "family": "Andes",
  "color": "#22f325",
  "description": "Andean is an independent musical world. Andes idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Huayno",
  "meter": "2/4",
  "tempo": [104, 120],
  "instruments": ["quena", "siku", "charango", "guitar", "bombo-andino"],
  "roles": {
    "lead": ["quena", "siku"],
    "harmony": ["charango", "guitar"],
    "percussion": ["bombo-andino"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor-pentatonic"],
  "chordQualities": ["Am", "C", "G", "E7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["huayno duple dance and quena reply", "sanjuanito even duple flute and charango", "saya drum and vocal response", "tinku heavy duple accents", "carnavalito charango dance ostinato", "nueva canción acoustic verse and instrumental reply", "Andean flute hook over modern backbeat"],
  "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "huayno",
      "name": "Huayno",
      "description": "Huayno: huayno duple dance and quena reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["huayno duple dance and quena reply"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [104, 120],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "huayno duple dance and quena reply quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "huayno duple dance and quena reply quena cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "huayno duple dance and quena reply siku statement", "role": "lead", "onsets": [0], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "huayno duple dance and quena reply siku cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "huayno duple dance and quena reply charango accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "huayno duple dance and quena reply charango cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "huayno duple dance and quena reply guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "huayno duple dance and quena reply guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "huayno duple dance and quena reply bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "huayno duple dance and quena reply bombo-andino cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "sanjuanito",
      "name": "Sanjuanito",
      "description": "Sanjuanito: sanjuanito even duple flute and charango. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sanjuanito even duple flute and charango"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sanjuanito even duple flute and charango quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sanjuanito even duple flute and charango quena cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sanjuanito even duple flute and charango siku statement", "role": "lead", "onsets": [0], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "sanjuanito even duple flute and charango siku cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sanjuanito even duple flute and charango charango accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "sanjuanito even duple flute and charango charango cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sanjuanito even duple flute and charango guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "sanjuanito even duple flute and charango guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sanjuanito even duple flute and charango bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sanjuanito even duple flute and charango bombo-andino cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "saya",
      "name": "Saya",
      "description": "Saya: saya drum and vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["saya drum and vocal response"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["voice", "quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "saya drum and vocal response quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "saya drum and vocal response quena cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "saya drum and vocal response siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "saya drum and vocal response siku cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "saya drum and vocal response charango accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "saya drum and vocal response charango cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "saya drum and vocal response guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "saya drum and vocal response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "saya drum and vocal response bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "saya drum and vocal response bombo-andino cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Saya vocal call before the instrumental response", "role": "lead", "instruments": ["voice"], "onsets": [0, 0.5, 1], "durations": [0.45, 0.45, 0.8], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "tinku",
      "name": "Tinku",
      "description": "Tinku: tinku heavy duple accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tinku heavy duple accents"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [124, 140],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tinku heavy duple accents quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tinku heavy duple accents quena cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tinku heavy duple accents siku statement", "role": "lead", "onsets": [0], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "tinku heavy duple accents siku cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tinku heavy duple accents charango accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tinku heavy duple accents charango cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tinku heavy duple accents guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "tinku heavy duple accents guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tinku heavy duple accents bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tinku heavy duple accents bombo-andino cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "carnavalito",
      "name": "Carnavalito",
      "description": "Carnavalito: carnavalito charango dance ostinato. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["carnavalito charango dance ostinato"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "2/4",
      "tempo": [118, 134],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "carnavalito charango dance ostinato quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "carnavalito charango dance ostinato quena cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "carnavalito charango dance ostinato siku statement", "role": "lead", "onsets": [0], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "carnavalito charango dance ostinato siku cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "carnavalito charango dance ostinato charango accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "carnavalito charango dance ostinato charango cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "carnavalito charango dance ostinato guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "carnavalito charango dance ostinato guitar cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "carnavalito charango dance ostinato bombo-andino pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "carnavalito charango dance ostinato bombo-andino cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "nueva-cancion",
      "name": "Nueva Canción",
      "description": "Nueva Canción: nueva canción acoustic verse and instrumental reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["nueva canción acoustic verse and instrumental reply"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "nueva canción acoustic verse and instrumental reply quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nueva canción acoustic verse and instrumental reply quena cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nueva canción acoustic verse and instrumental reply siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "nueva canción acoustic verse and instrumental reply siku cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nueva canción acoustic verse and instrumental reply charango accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "nueva canción acoustic verse and instrumental reply charango cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nueva canción acoustic verse and instrumental reply guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "nueva canción acoustic verse and instrumental reply guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "nueva canción acoustic verse and instrumental reply bombo-andino pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "nueva canción acoustic verse and instrumental reply bombo-andino cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
      "id": "andean-fusion",
      "name": "Andean Fusion",
      "description": "Andean Fusion: Andean flute hook over modern backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Andean flute hook over modern backbeat"],
      "techniques": ["breath-phrase", "trill", "tremolo", "strum", "call-response", "accent", "breath", "staccato", "legato", "vibrato", "tenuto", "muted-strum", "ghost", "roll", "open"],
      "harmony": ["Am", "C", "G", "E7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor-pentatonic",
      "roles": {
        "lead": ["quena", "siku"],
        "harmony": ["charango", "guitar"],
        "percussion": ["bombo-andino"]
      },
      "progressions": {
        "introduccion": ["Am", "C", "G", "Am"],
        "tema": ["Am", "C", "G", "Am"],
        "instrumental": ["C", "G", "E7", "Am"],
        "coda": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "tema", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "tema", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Andean flute hook over modern backbeat quena statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["quena"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Andean flute hook over modern backbeat quena cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["quena"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Andean flute hook over modern backbeat siku statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["siku"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Andean flute hook over modern backbeat siku cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["siku"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Andean flute hook over modern backbeat charango accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["charango"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Andean flute hook over modern backbeat charango cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["charango"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Andean flute hook over modern backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Andean flute hook over modern backbeat guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Andean flute hook over modern backbeat bombo-andino pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["bombo-andino"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Andean flute hook over modern backbeat bombo-andino cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["bombo-andino"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "quena": ["accent", "breath", "staccato", "legato", "vibrato"],
        "siku": ["accent", "breath", "staccato", "legato", "vibrato"],
        "charango": ["accent", "tremolo", "staccato", "legato", "tenuto"],
        "guitar": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
        "bombo-andino": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "quena:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "siku:lead": {
          "allowedTechniques": ["accent", "breath", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "charango:harmony": {
          "allowedTechniques": ["accent", "tremolo", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitar:harmony": {
          "allowedTechniques": ["accent", "tremolo", "strum", "muted-strum", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "variantId": "nylon"
        },
        "bombo-andino:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
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
