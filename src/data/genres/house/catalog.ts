import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "house",
  "name": "House",
  "family": "Chicago / Global electronic",
  "color": "#2ca63c",
  "description": "House is an independent musical world. Chicago / Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Deep House",
  "meter": "4/4",
  "tempo": [114, 130],
  "instruments": ["synth", "rhodes", "drums", "shaker", "piano", "organ"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["rhodes"],
    "bass": ["synth"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["Am7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["deep house warm offbeat chord and sub", "Chicago drum machine and organ stab", "piano house syncopated octave piano hook", "acid house resonant mono bass sequence", "tech house sparse bass and dry drum loop", "progressive house evolving arpeggio and long breakdown", "Afro-house layered percussion and modal chord answer"],
  "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "deep-house",
      "name": "Deep House",
      "description": "Deep House: deep house warm offbeat chord and sub. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["deep house warm offbeat chord and sub"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "deep house warm offbeat chord and sub synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "deep house warm offbeat chord and sub synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "deep house warm offbeat chord and sub rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "deep house warm offbeat chord and sub rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "deep house warm offbeat chord and sub low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "deep house warm offbeat chord and sub synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "deep house warm offbeat chord and sub kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "deep house warm offbeat chord and sub drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "deep house warm offbeat chord and sub shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "deep house warm offbeat chord and sub shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "chicago-house",
      "name": "Chicago House",
      "description": "Chicago House: Chicago drum machine and organ stab. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Chicago drum machine and organ stab"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Chicago drum machine and organ stab synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Chicago drum machine and organ stab synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago drum machine and organ stab rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Chicago drum machine and organ stab rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago drum machine and organ stab low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Chicago drum machine and organ stab synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Chicago drum machine and organ stab kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "Chicago drum machine and organ stab drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Chicago drum machine and organ stab shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Chicago drum machine and organ stab shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "garage-piano-house",
      "name": "Garage / Piano House",
      "description": "Garage / Piano House: piano house syncopated octave piano hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["piano house syncopated octave piano hook"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "tenuto", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "minor",
      "roles": {
        "lead": ["piano"],
        "harmony": ["organ"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "piano house syncopated octave piano hook piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "piano house syncopated octave piano hook piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "piano house syncopated octave piano hook organ accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["organ"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "piano house syncopated octave piano hook organ cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["organ"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "piano house syncopated octave piano hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "piano house syncopated octave piano hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "piano house syncopated octave piano hook kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "piano house syncopated octave piano hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "organ": ["staccato", "accent", "legato", "tenuto"],
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "organ:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "acid-house",
      "name": "Acid House",
      "description": "Acid House: acid house resonant mono bass sequence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["acid house resonant mono bass sequence"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "sequence": ["Am"],
        "drop": ["Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "acid house resonant mono bass sequence synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "acid house resonant mono bass sequence synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acid house resonant mono bass sequence low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "acid house resonant mono bass sequence synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acid house resonant mono bass sequence kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "acid house resonant mono bass sequence drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "acid-sequencer"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "tech-house",
      "name": "Tech House",
      "description": "Tech House: tech house sparse bass and dry drum loop. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tech house sparse bass and dry drum loop"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [118, 134],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "tech house sparse bass and dry drum loop synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tech house sparse bass and dry drum loop synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tech house sparse bass and dry drum loop rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tech house sparse bass and dry drum loop rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tech house sparse bass and dry drum loop low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "tech house sparse bass and dry drum loop synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tech house sparse bass and dry drum loop kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "tech house sparse bass and dry drum loop drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "tech house sparse bass and dry drum loop shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tech house sparse bass and dry drum loop shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "progressive-house",
      "name": "Progressive House",
      "description": "Progressive House: progressive house evolving arpeggio and long breakdown. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["progressive house evolving arpeggio and long breakdown"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "progressive house evolving arpeggio and long breakdown synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "progressive house evolving arpeggio and long breakdown synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "progressive house evolving arpeggio and long breakdown rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "progressive house evolving arpeggio and long breakdown rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "progressive house evolving arpeggio and long breakdown low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "progressive house evolving arpeggio and long breakdown synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "progressive house evolving arpeggio and long breakdown kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "progressive house evolving arpeggio and long breakdown drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "progressive house evolving arpeggio and long breakdown shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "progressive house evolving arpeggio and long breakdown shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
      "id": "afro-house",
      "name": "Afro-House",
      "description": "Afro-House: Afro-house layered percussion and modal chord answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Afro-house layered percussion and modal chord answer"],
      "techniques": ["short-chord-stab", "staccato", "filter-sweep", "glide", "roll", "arpeggio", "accent", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "Cmaj7", "G6", "Dm7", "G7"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "groove": ["Am7", "Fmaj7", "Cmaj7", "G6"],
        "build": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "groove", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "groove", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Afro-house layered percussion and modal chord answer synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Afro-house layered percussion and modal chord answer synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afro-house layered percussion and modal chord answer rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Afro-house layered percussion and modal chord answer rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afro-house layered percussion and modal chord answer low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Afro-house layered percussion and modal chord answer synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Afro-house layered percussion and modal chord answer kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "Afro-house layered percussion and modal chord answer drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Afro-house layered percussion and modal chord answer shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Afro-house layered percussion and modal chord answer shaker cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["shaker"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
        "rhodes": ["staccato", "accent", "legato", "tenuto"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "shaker": ["roll", "staccato", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        },
        "shaker:percussion": {
          "allowedTechniques": ["roll", "staccato", "accent", "ghost"],
          "defaultTechnique": "roll"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.64,
          "bassForward": 0.74,
          "width": 0.66,
          "brightness": 0.6,
          "compressionRatio": 2.4,
          "transientSnap": 0.72,
          "sidechainDucking": 0.32,
          "subHarmonics": 0.24,
          "delaySend": 0.05,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.66,
          "preserveNaturalStage": false
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
