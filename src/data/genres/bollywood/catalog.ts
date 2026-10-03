import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "bollywood",
  "name": "Bollywood",
  "family": "India",
  "color": "#09b542",
  "description": "Bollywood is an independent musical world. India idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Modern",
  "meter": "4/4",
  "tempo": [104, 120],
  "instruments": ["voice", "bansuri", "guitar", "string-ensemble", "bass", "tabla", "drums"],
  "roles": {
    "lead": ["voice", "bansuri"],
    "harmony": ["guitar", "string-ensemble"],
    "bass": ["bass"],
    "percussion": ["tabla", "drums"]
  },
  "pitchSystem": "raga / shruti inflection",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "G", "C", "E7"],
  "harmonicRhythm": "bar",
  "cadences": ["E7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["modern film hook and orchestral response", "Golden Age melodic prelude and string answers", "disco octave bass and string refrain", "romantic legato vocal and arpeggiated strings", "folk cinematic drum cycle and flute reply", "club kick and synth film hook"],
  "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "modern",
      "name": "Modern",
      "description": "Modern: modern film hook and orchestral response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern film hook and orchestral response"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modern film hook and orchestral response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern film hook and orchestral response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern film hook and orchestral response bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modern film hook and orchestral response bansuri cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern film hook and orchestral response guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern film hook and orchestral response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern film hook and orchestral response string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modern film hook and orchestral response string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern film hook and orchestral response low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "modern film hook and orchestral response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modern film hook and orchestral response tabla pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "modern film hook and orchestral response tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "modern film hook and orchestral response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "modern film hook and orchestral response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "golden-age",
      "name": "Golden Age",
      "description": "Golden Age: Golden Age melodic prelude and string answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Golden Age melodic prelude and string answers"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Golden Age melodic prelude and string answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age melodic prelude and string answers bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Golden Age melodic prelude and string answers bansuri cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age melodic prelude and string answers guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Golden Age melodic prelude and string answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age melodic prelude and string answers string-ensemble accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Golden Age melodic prelude and string answers string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age melodic prelude and string answers low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Golden Age melodic prelude and string answers bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Golden Age melodic prelude and string answers tabla pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Golden Age melodic prelude and string answers tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "Golden Age melodic prelude and string answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Golden Age melodic prelude and string answers drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "disco-bollywood",
      "name": "Disco Bollywood",
      "description": "Disco Bollywood: disco octave bass and string refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["disco octave bass and string refrain"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "disco octave bass and string refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "disco octave bass and string refrain voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco octave bass and string refrain bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "disco octave bass and string refrain bansuri cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco octave bass and string refrain guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco octave bass and string refrain string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "disco octave bass and string refrain string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco octave bass and string refrain low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "disco octave bass and string refrain bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "disco octave bass and string refrain tabla pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "disco octave bass and string refrain tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "disco octave bass and string refrain kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "disco octave bass and string refrain drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "romantic",
      "name": "Romantic",
      "description": "Romantic: romantic legato vocal and arpeggiated strings. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["romantic legato vocal and arpeggiated strings"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "romantic legato vocal and arpeggiated strings voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "romantic legato vocal and arpeggiated strings bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "romantic legato vocal and arpeggiated strings bansuri cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "romantic legato vocal and arpeggiated strings guitar accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "romantic legato vocal and arpeggiated strings guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "romantic legato vocal and arpeggiated strings string-ensemble accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "romantic legato vocal and arpeggiated strings string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "romantic legato vocal and arpeggiated strings low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "romantic legato vocal and arpeggiated strings bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "romantic legato vocal and arpeggiated strings tabla pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "romantic legato vocal and arpeggiated strings tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "romantic legato vocal and arpeggiated strings kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "romantic legato vocal and arpeggiated strings drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "folk-cinematic",
      "name": "Folk-Cinematic",
      "description": "Folk-Cinematic: folk cinematic drum cycle and flute reply. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["folk cinematic drum cycle and flute reply"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "6/8",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "folk cinematic drum cycle and flute reply voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "folk cinematic drum cycle and flute reply voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk cinematic drum cycle and flute reply bansuri statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "folk cinematic drum cycle and flute reply bansuri cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk cinematic drum cycle and flute reply guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "folk cinematic drum cycle and flute reply guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk cinematic drum cycle and flute reply string-ensemble accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "folk cinematic drum cycle and flute reply string-ensemble cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk cinematic drum cycle and flute reply low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "folk cinematic drum cycle and flute reply bass cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "folk cinematic drum cycle and flute reply tabla pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "folk cinematic drum cycle and flute reply tabla cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "folk cinematic drum cycle and flute reply kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "folk cinematic drum cycle and flute reply drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
      "id": "electronic-club",
      "name": "Electronic / Club",
      "description": "Electronic / Club: club kick and synth film hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["club kick and synth film hook"],
      "techniques": ["melisma", "portamento", "legato", "strum", "ornament", "roll", "accent", "staccato", "vibrato", "legato-single-note", "muted-strum", "open", "slap", "ghost"],
      "harmony": ["Am", "F", "G", "C", "E7"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "bansuri"],
        "harmony": ["guitar", "string-ensemble"],
        "bass": ["bass"],
        "percussion": ["tabla", "drums"]
      },
      "progressions": {
        "prelude": ["Am", "F", "G", "Am"],
        "mukhda": ["Am", "F", "G", "Am"],
        "instrumental": ["C", "G", "F", "E7"],
        "coda": ["E7", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "prelude", "bars": 4},
        {"label": "mukhda", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "antara", "bars": 8},
        {"label": "mukhda", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "club kick and synth film hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "club kick and synth film hook voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "club kick and synth film hook bansuri statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["bansuri"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "club kick and synth film hook bansuri cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["bansuri"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "club kick and synth film hook guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "club kick and synth film hook guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "club kick and synth film hook string-ensemble accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "club kick and synth film hook string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "club kick and synth film hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "club kick and synth film hook bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "club kick and synth film hook tabla pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["tabla"], "cycleLength": 1, "articulation": "accent"},
        {"name": "club kick and synth film hook tabla cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["tabla"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"},
        {"name": "club kick and synth film hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "club kick and synth film hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "bansuri": ["ornament"],
        "guitar": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "portamento", "accent", "staccato"],
        "bass": ["legato", "accent", "staccato"],
        "tabla": ["accent", "open", "slap"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "bansuri:lead": {
          "allowedTechniques": ["ornament"],
          "defaultTechnique": "ornament"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "tabla:percussion": {
          "allowedTechniques": ["accent", "open", "slap"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost", "open"],
          "defaultTechnique": "roll"
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
