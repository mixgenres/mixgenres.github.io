import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "reggaeton",
  "name": "Reggaeton",
  "family": "Reggaeton",
  "color": "#559acc",
  "description": "Reggaeton is an independent musical world. Reggaeton idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic",
  "meter": "4/4",
  "tempo": [86, 102],
  "instruments": ["voice", "synth", "drums", "sampler"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["synth"],
    "bass": ["synth"],
    "percussion": ["drums", "sampler"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am", "F", "C", "G", "Dm", "Bb"],
  "harmonicRhythm": "bar",
  "cadences": ["C"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["classic dembow kick and snare cell", "Classic: dembow", "Classic: 808/sub", "Classic: syncopated vocal pickup", "Playero underground raw dembow and sample chop", "Playero / Underground: dembow", "Playero / Underground: 808/sub", "Playero / Underground: syncopated vocal pickup", "melodic reggaeton vocal over guitar arpeggio", "Melodic: dembow", "Melodic: 808/sub", "Melodic: syncopated vocal pickup", "neoperreo distorted sparse dembow and synth jab", "Neoperreo: dembow", "Neoperreo: 808/sub", "Neoperreo: syncopated vocal pickup", "Latin trap half-time 808 and hat rolls", "Latin Trap Crossover: dembow", "Latin Trap Crossover: 808/sub", "Latin Trap Crossover: syncopated vocal pickup", "experimental reggaeton displaced dembow fragments", "Experimental: dembow", "Experimental: 808/sub", "Experimental: syncopated vocal pickup"],
  "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic",
      "name": "Classic",
      "description": "Classic: classic dembow kick and snare cell. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["classic dembow kick and snare cell", "Classic: dembow", "Classic: 808/sub", "Classic: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Classic: vocal chop", "Classic: pitch correction", "Classic: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Classic: short minor/modal loops", "Classic: i-VI-III-VII", "Classic: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "classic dembow kick and snare cell voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "classic dembow kick and snare cell voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "classic dembow kick and snare cell synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "classic dembow kick and snare cell synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "classic dembow kick and snare cell kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "classic dembow kick and snare cell drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "classic dembow kick and snare cell sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "classic dembow kick and snare cell sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
      "id": "playero-underground",
      "name": "Playero / Underground",
      "description": "Playero / Underground: Playero underground raw dembow and sample chop. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Playero underground raw dembow and sample chop", "Playero / Underground: dembow", "Playero / Underground: 808/sub", "Playero / Underground: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Playero / Underground: vocal chop", "Playero / Underground: pitch correction", "Playero / Underground: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Playero / Underground: short minor/modal loops", "Playero / Underground: i-VI-III-VII", "Playero / Underground: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [90, 106],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Playero underground raw dembow and sample chop voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Playero underground raw dembow and sample chop voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Playero underground raw dembow and sample chop synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Playero underground raw dembow and sample chop synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Playero underground raw dembow and sample chop low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Playero underground raw dembow and sample chop synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Playero underground raw dembow and sample chop kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "Playero underground raw dembow and sample chop drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Playero underground raw dembow and sample chop sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Playero underground raw dembow and sample chop sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
      "id": "melodic",
      "name": "Melodic",
      "description": "Melodic: melodic reggaeton vocal over guitar arpeggio. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["melodic reggaeton vocal over guitar arpeggio", "Melodic: dembow", "Melodic: 808/sub", "Melodic: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Melodic: vocal chop", "Melodic: pitch correction", "Melodic: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Melodic: short minor/modal loops", "Melodic: i-VI-III-VII", "Melodic: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "melodic reggaeton vocal over guitar arpeggio voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "melodic reggaeton vocal over guitar arpeggio voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic reggaeton vocal over guitar arpeggio synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "melodic reggaeton vocal over guitar arpeggio synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic reggaeton vocal over guitar arpeggio low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "melodic reggaeton vocal over guitar arpeggio synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "melodic reggaeton vocal over guitar arpeggio kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "melodic reggaeton vocal over guitar arpeggio drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "melodic reggaeton vocal over guitar arpeggio sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "melodic reggaeton vocal over guitar arpeggio sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
      "id": "neoperreo",
      "name": "Neoperreo",
      "description": "Neoperreo: neoperreo distorted sparse dembow and synth jab. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["neoperreo distorted sparse dembow and synth jab", "Neoperreo: dembow", "Neoperreo: 808/sub", "Neoperreo: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Neoperreo: vocal chop", "Neoperreo: pitch correction", "Neoperreo: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Neoperreo: short minor/modal loops", "Neoperreo: i-VI-III-VII", "Neoperreo: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "neoperreo distorted sparse dembow and synth jab voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "neoperreo distorted sparse dembow and synth jab voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neoperreo distorted sparse dembow and synth jab synth accompaniment", "role": "harmony", "onsets": [0.75, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "neoperreo distorted sparse dembow and synth jab synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neoperreo distorted sparse dembow and synth jab low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "neoperreo distorted sparse dembow and synth jab synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neoperreo distorted sparse dembow and synth jab kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "neoperreo distorted sparse dembow and synth jab drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "neoperreo distorted sparse dembow and synth jab sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "neoperreo distorted sparse dembow and synth jab sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
      "id": "latin-trap-crossover",
      "name": "Latin Trap Crossover",
      "description": "Latin Trap Crossover: Latin trap half-time 808 and hat rolls. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Latin trap half-time 808 and hat rolls", "Latin Trap Crossover: dembow", "Latin Trap Crossover: 808/sub", "Latin Trap Crossover: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Latin Trap Crossover: vocal chop", "Latin Trap Crossover: pitch correction", "Latin Trap Crossover: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Latin Trap Crossover: short minor/modal loops", "Latin Trap Crossover: i-VI-III-VII", "Latin Trap Crossover: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "Latin trap half-time 808 and hat rolls voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Latin trap half-time 808 and hat rolls voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls synth accompaniment", "role": "harmony", "onsets": [0, 2], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "Latin trap half-time 808 and hat rolls synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls low anchor", "role": "bass", "onsets": [0, 1.75, 2.75], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Latin trap half-time 808 and hat rolls synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Latin trap half-time 808 and hat rolls kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Latin trap half-time 808 and hat rolls drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "Latin trap half-time 808 and hat rolls sampler pulse", "role": "percussion", "onsets": [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.25, 2.5, 2.75, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Latin trap half-time 808 and hat rolls sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
      "id": "experimental",
      "name": "Experimental",
      "description": "Experimental: experimental reggaeton displaced dembow fragments. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["experimental reggaeton displaced dembow fragments", "Experimental: dembow", "Experimental: 808/sub", "Experimental: syncopated vocal pickup"],
      "techniques": ["staccato", "glide", "roll", "ghost-note", "arpeggio", "pitch-bend", "Experimental: vocal chop", "Experimental: pitch correction", "Experimental: hi-hat rolls", "accent", "legato", "vibrato", "bend", "ghost", "open"],
      "harmony": ["Am", "F", "C", "G", "Dm", "Bb", "Experimental: short minor/modal loops", "Experimental: i-VI-III-VII", "Experimental: vi-IV-I-V"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Dm", "Bb", "F", "C"],
        "outro": ["C", "Am"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "hook", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "experimental reggaeton displaced dembow fragments voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "experimental reggaeton displaced dembow fragments voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "experimental reggaeton displaced dembow fragments synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "experimental reggaeton displaced dembow fragments synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "experimental reggaeton displaced dembow fragments kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85]},
        {"name": "experimental reggaeton displaced dembow fragments drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "experimental reggaeton displaced dembow fragments sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "experimental reggaeton displaced dembow fragments sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sub-bass"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "sampler:percussion": {
          "allowedTechniques": ["staccato", "accent"],
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
          "sidechainDucking": 0,
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
