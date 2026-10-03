import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "electronic",
  "name": "Electronic",
  "family": "Global electronic",
  "color": "#165181",
  "description": "Electronic is an independent musical world. Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Techno",
  "meter": "4/4",
  "tempo": [124, 140],
  "instruments": ["synth", "drums"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["synth"],
    "bass": ["synth"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm", "Bb", "C", "Am", "F", "G", "Ebmaj7", "Cm7", "Abmaj7", "Fm7", "Gm7", "Em"],
  "harmonicRhythm": "bar",
  "cadences": ["Am"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["techno steady kick and looping synth pulse", "Detroit syncopated machine chords and bass", "electro broken drum machine and robotic bass", "trance arpeggio build and sustained pad release", "IDM displaced drum fragments and rests", "minimal sparse machine clicks and bass", "synthwave eighth-note bass and gated backbeat", "melodic electronic layered arpeggio and hook"],
  "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "techno",
      "name": "Techno",
      "description": "Techno: techno steady kick and looping synth pulse. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Pounding 909 kick drum on all 4 beats with driving offbeat open hi-hat sizzle", "techno steady kick and looping synth pulse"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "heavy Roland TR-909 kick drum on every beat", "offbeat open hi-hat sizzle", "hypnotic repetitive modular synth sequence", "industrial tension and release", "bend", "accent", "legato", "vibrato", "open", "ghost"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm", "Dm", "Dm", "Dm"],
        "buildup": ["Dm", "Dm", "Bb", "C"],
        "drop": ["Dm", "Dm", "Dm", "Dm", "Dm", "Dm", "Bb", "C"],
        "coda": ["Dm", "Dm", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "techno steady kick and looping synth pulse synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "techno steady kick and looping synth pulse synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "techno steady kick and looping synth pulse low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "techno steady kick and looping synth pulse synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "techno steady kick and looping synth pulse kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "techno steady kick and looping synth pulse drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["open", "staccato", "roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "acid-sequencer"
        },
        "drums:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent", "ghost"],
          "defaultTechnique": "open"
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
      "id": "detroit-techno",
      "name": "Detroit Techno",
      "description": "Detroit Techno: Detroit syncopated machine chords and bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Detroit syncopated machine chords and bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Detroit syncopated machine chords and bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Detroit syncopated machine chords and bass synth accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Detroit syncopated machine chords and bass low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Detroit syncopated machine chords and bass synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Detroit syncopated machine chords and bass kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "Detroit syncopated machine chords and bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "electro",
      "name": "Electro",
      "description": "Electro: electro broken drum machine and robotic bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["electro broken drum machine and robotic bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "electro broken drum machine and robotic bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro broken drum machine and robotic bass synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro broken drum machine and robotic bass low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "electro broken drum machine and robotic bass synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "electro broken drum machine and robotic bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "electro broken drum machine and robotic bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "trance",
      "name": "Trance",
      "description": "Trance: trance arpeggio build and sustained pad release. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["trance arpeggio build and sustained pad release"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [130, 146],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "trance arpeggio build and sustained pad release synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "trance arpeggio build and sustained pad release synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "trance arpeggio build and sustained pad release low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "trance arpeggio build and sustained pad release synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "trance arpeggio build and sustained pad release kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "trance arpeggio build and sustained pad release drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "idm",
      "name": "IDM",
      "description": "IDM: IDM displaced drum fragments and rests. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Micro-edited 64th-note glitch drum roll juxtaposed with warm melancholic synth chord", "IDM displaced drum fragments and rests"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "micro-edited drum glitching (Amen chop)", "haunting analog synth nostalgia", "irregular rhythmic drill rolls", "unexpected harmonic detuning", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Ebmaj7", "Cm7", "Abmaj7", "Bb"],
        "verse": ["Ebmaj7", "Cm7", "Abmaj7", "Bb", "Fm7", "Gm7", "Abmaj7", "Bb"],
        "coda": ["Abmaj7", "Bb", "Ebmaj7", "Ebmaj7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "IDM displaced drum fragments and rests synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "IDM displaced drum fragments and rests synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "IDM displaced drum fragments and rests low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "IDM displaced drum fragments and rests synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "IDM displaced drum fragments and rests kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "IDM displaced drum fragments and rests drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "minimal",
      "name": "Minimal",
      "description": "Minimal: minimal sparse machine clicks and bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["minimal sparse machine clicks and bass"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "minimal sparse machine clicks and bass synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal sparse machine clicks and bass synth accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal sparse machine clicks and bass low anchor", "role": "bass", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "minimal sparse machine clicks and bass synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "minimal sparse machine clicks and bass kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "minimal sparse machine clicks and bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "synthwave",
      "name": "Synthwave",
      "description": "Synthwave: synthwave eighth-note bass and gated backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Driving 16th-note analog synth bass arp driving into massive gated reverb snare", "synthwave eighth-note bass and gated backbeat"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "relentless 16th-note bass arpeggios", "gated reverb snare hits", "soaring lead synthesizer melodies", "80s action film nostalgic mood", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "chorus": ["F", "G", "Am", "Em", "F", "G", "Am", "Am"],
        "coda": ["F", "G", "Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "synthwave eighth-note bass and gated backbeat synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synthwave eighth-note bass and gated backbeat synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synthwave eighth-note bass and gated backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "synthwave eighth-note bass and gated backbeat synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "synthwave eighth-note bass and gated backbeat kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "synthwave eighth-note bass and gated backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
      "id": "melodic-electronic",
      "name": "Melodic Electronic",
      "description": "Melodic Electronic: melodic electronic layered arpeggio and hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["melodic electronic layered arpeggio and hook"],
      "techniques": ["staccato", "glide", "filter-sweep", "arpeggio", "roll", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am", "F", "G"],
      "meter": "4/4",
      "tempo": [114, 130],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "DJ intro": ["Am", "Am"],
        "sequence": ["Am", "Am"],
        "breakdown": ["F", "G", "Am", "Am"],
        "outro": ["Am", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "DJ intro", "bars": 4},
        {"label": "sequence", "bars": 8},
        {"label": "build", "bars": 8},
        {"label": "breakdown", "bars": 8},
        {"label": "drop", "bars": 8},
        {"label": "sequence", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "melodic electronic layered arpeggio and hook synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic electronic layered arpeggio and hook synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic electronic layered arpeggio and hook low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "melodic electronic layered arpeggio and hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic electronic layered arpeggio and hook kit", "role": "percussion", "onsets": [0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5], "instruments": ["drums"], "hits": ["kick", "openHat", "kick", "snare", "openHat", "kick", "openHat", "kick", "snare", "openHat"], "cycleLength": 1, "accents": [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85]},
        {"name": "melodic electronic layered arpeggio and hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "saw-lead"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
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
    }
  ]
};
