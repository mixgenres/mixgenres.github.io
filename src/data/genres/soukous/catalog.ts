import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "soukous",
  "name": "Soukous",
  "family": "Democratic Republic of the Congo",
  "color": "#5a2768",
  "description": "Soukous is an independent musical world. Democratic Republic of the Congo idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Soukous",
  "meter": "4/4",
  "tempo": [114, 130],
  "instruments": ["voice", "guitar", "bass", "drums", "congas"],
  "roles": {
    "lead": ["voice", "guitar"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums", "congas"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["soukous interlocking lead and rhythm guitar", "Congolese rumba lyrical guitar and slower verse", "sebene long fast guitar interlock", "kwassa kwassa guitar dance and bass bounce", "ndombolo driven bass and dense guitar response"],
  "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "soukous",
      "name": "Soukous",
      "description": "Soukous: soukous interlocking lead and rhythm guitar. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["soukous interlocking lead and rhythm guitar"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "slap"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "congas"]
      },
      "progressions": {
        "intro": ["C", "F", "G", "C"],
        "rumba verse": ["C", "F", "G", "C"],
        "sebene": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "rumba verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sebene", "bars": 8},
        {"label": "sebene variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "soukous interlocking lead and rhythm guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soukous interlocking lead and rhythm guitar voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soukous interlocking lead and rhythm guitar guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soukous interlocking lead and rhythm guitar guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soukous interlocking lead and rhythm guitar guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "soukous interlocking lead and rhythm guitar guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soukous interlocking lead and rhythm guitar low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "soukous interlocking lead and rhythm guitar bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soukous interlocking lead and rhythm guitar kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "soukous interlocking lead and rhythm guitar drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "soukous interlocking lead and rhythm guitar congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "soukous interlocking lead and rhythm guitar congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "congas": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "hammer-on"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "congas:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
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
      "id": "congolese-rumba",
      "name": "Congolese Rumba",
      "description": "Congolese Rumba: Congolese rumba lyrical guitar and slower verse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Congolese rumba lyrical guitar and slower verse"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "slap"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "congas"]
      },
      "progressions": {
        "intro": ["C", "F", "G", "C"],
        "rumba verse": ["C", "F", "G", "C"],
        "sebene": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "rumba verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sebene", "bars": 8},
        {"label": "sebene variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Congolese rumba lyrical guitar and slower verse voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Congolese rumba lyrical guitar and slower verse voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Congolese rumba lyrical guitar and slower verse guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Congolese rumba lyrical guitar and slower verse guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Congolese rumba lyrical guitar and slower verse guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Congolese rumba lyrical guitar and slower verse guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Congolese rumba lyrical guitar and slower verse low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Congolese rumba lyrical guitar and slower verse bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Congolese rumba lyrical guitar and slower verse kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Congolese rumba lyrical guitar and slower verse drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Congolese rumba lyrical guitar and slower verse congas pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Congolese rumba lyrical guitar and slower verse congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "congas": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "hammer-on"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "congas:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
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
      "id": "sebene",
      "name": "Sebene",
      "description": "Sebene: sebene long fast guitar interlock. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["sebene long fast guitar interlock"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "slap"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [128, 144],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "congas"]
      },
      "progressions": {
        "intro": ["C", "F", "G", "C"],
        "rumba verse": ["C", "F", "G", "C"],
        "sebene": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "rumba verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sebene", "bars": 8},
        {"label": "sebene variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "sebene long fast guitar interlock voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sebene long fast guitar interlock voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sebene long fast guitar interlock guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "sebene long fast guitar interlock guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sebene long fast guitar interlock guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "sebene long fast guitar interlock guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sebene long fast guitar interlock low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "sebene long fast guitar interlock bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "sebene long fast guitar interlock kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "sebene long fast guitar interlock drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "sebene long fast guitar interlock congas pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "sebene long fast guitar interlock congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "congas": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "hammer-on"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "congas:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
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
      "id": "kwassa-kwassa",
      "name": "Kwassa-Kwassa",
      "description": "Kwassa-Kwassa: kwassa kwassa guitar dance and bass bounce. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["kwassa kwassa guitar dance and bass bounce"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "slap"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "congas"]
      },
      "progressions": {
        "intro": ["C", "F", "G", "C"],
        "rumba verse": ["C", "F", "G", "C"],
        "sebene": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "rumba verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sebene", "bars": 8},
        {"label": "sebene variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kwassa kwassa guitar dance and bass bounce voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kwassa kwassa guitar dance and bass bounce voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwassa kwassa guitar dance and bass bounce guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "kwassa kwassa guitar dance and bass bounce guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwassa kwassa guitar dance and bass bounce guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "kwassa kwassa guitar dance and bass bounce guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwassa kwassa guitar dance and bass bounce low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "kwassa kwassa guitar dance and bass bounce bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "kwassa kwassa guitar dance and bass bounce kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "kwassa kwassa guitar dance and bass bounce drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "kwassa kwassa guitar dance and bass bounce congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "kwassa kwassa guitar dance and bass bounce congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "congas": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "hammer-on"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "congas:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
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
      "id": "ndombolo",
      "name": "Ndombolo",
      "description": "Ndombolo: ndombolo driven bass and dense guitar response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["ndombolo driven bass and dense guitar response"],
      "techniques": ["fingerstyle", "hammer-on", "pull-off", "muted-strum", "call-response", "roll", "accent", "staccato", "legato", "vibrato", "strum", "ghost", "open", "slap"],
      "harmony": ["C", "F", "G", "Am"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "major",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums", "congas"]
      },
      "progressions": {
        "intro": ["C", "F", "G", "C"],
        "rumba verse": ["C", "F", "G", "C"],
        "sebene": ["Am", "F", "G", "C"],
        "coda": ["C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "rumba verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "sebene", "bars": 8},
        {"label": "sebene variation", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ndombolo driven bass and dense guitar response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ndombolo driven bass and dense guitar response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ndombolo driven bass and dense guitar response guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ndombolo driven bass and dense guitar response guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ndombolo driven bass and dense guitar response guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "ndombolo driven bass and dense guitar response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ndombolo driven bass and dense guitar response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "ndombolo driven bass and dense guitar response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ndombolo driven bass and dense guitar response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "ndombolo driven bass and dense guitar response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "ndombolo driven bass and dense guitar response congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "ndombolo driven bass and dense guitar response congas cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["congas"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
        "bass": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"],
        "congas": ["accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "guitar:lead": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "strum", "fingerstyle", "muted-strum", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "hammer-on"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
        },
        "congas:percussion": {
          "allowedTechniques": ["accent", "open", "slap", "ghost"],
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
