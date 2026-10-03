import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "bass",
  "name": "Bass",
  "family": "United Kingdom / Global electronic",
  "color": "#9eca04",
  "description": "Bass is an independent musical world. United Kingdom / Global electronic idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Drum & Bass",
  "meter": "4/4",
  "tempo": [164, 180],
  "instruments": ["synth", "drums", "sampler"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["synth"],
    "bass": ["synth"],
    "percussion": ["drums", "sampler"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Am7", "Fmaj7", "G"],
  "harmonicRhythm": "bar",
  "cadences": ["Am7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["fast two-step kick and snare break", "chopped jungle break with syncopated sub", "liquid broken beat under extended pads", "neurofunk staccato bass modulation", "swung garage skip and chord stabs", "two-step skipped kick and offbeat chords", "half-time snare with sustained sub", "grime sparse square bass and clipped hook", "future garage displaced ghost percussion", "broken funk beat with sample responses"],
  "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "drum-and-bass",
      "name": "Drum & Bass",
      "description": "Drum & Bass: fast two-step kick and snare break. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fast two-step kick and snare break"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [164, 180],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "fast two-step kick and snare break synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fast two-step kick and snare break synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fast two-step kick and snare break synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fast two-step kick and snare break synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fast two-step kick and snare break low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "fast two-step kick and snare break synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fast two-step kick and snare break kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "fast two-step kick and snare break drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "fast two-step kick and snare break sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "fast two-step kick and snare break sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "jungle",
      "name": "Jungle",
      "description": "Jungle: chopped jungle break with syncopated sub. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["chopped jungle break with syncopated sub"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [160, 176],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "chopped jungle break with syncopated sub synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "chopped jungle break with syncopated sub synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chopped jungle break with syncopated sub synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "chopped jungle break with syncopated sub synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chopped jungle break with syncopated sub low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "chopped jungle break with syncopated sub synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "chopped jungle break with syncopated sub kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "chopped jungle break with syncopated sub drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "chopped jungle break with syncopated sub sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "chopped jungle break with syncopated sub sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "liquid",
      "name": "Liquid",
      "description": "Liquid: liquid broken beat under extended pads. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["liquid broken beat under extended pads"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [162, 178],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "liquid broken beat under extended pads synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "liquid broken beat under extended pads synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "liquid broken beat under extended pads synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "liquid broken beat under extended pads synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "liquid broken beat under extended pads low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "liquid broken beat under extended pads synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "liquid broken beat under extended pads kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "liquid broken beat under extended pads drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "liquid broken beat under extended pads sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "liquid broken beat under extended pads sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "neurofunk",
      "name": "Neurofunk",
      "description": "Neurofunk: neurofunk staccato bass modulation. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["neurofunk staccato bass modulation"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [166, 182],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "neurofunk staccato bass modulation synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "neurofunk staccato bass modulation synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neurofunk staccato bass modulation synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "neurofunk staccato bass modulation synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neurofunk staccato bass modulation low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "neurofunk staccato bass modulation synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neurofunk staccato bass modulation kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "neurofunk staccato bass modulation drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "neurofunk staccato bass modulation sampler pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "neurofunk staccato bass modulation sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
          "patchId": "bass-lead"
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
      "id": "uk-garage",
      "name": "UK Garage",
      "description": "UK Garage: swung garage skip and chord stabs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["swung garage skip and chord stabs"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "swung garage skip and chord stabs synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "swung garage skip and chord stabs synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "swung garage skip and chord stabs synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "swung garage skip and chord stabs synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "swung garage skip and chord stabs low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "swung garage skip and chord stabs synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "swung garage skip and chord stabs kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "swung garage skip and chord stabs drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "swung garage skip and chord stabs sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "swung garage skip and chord stabs sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "2-step",
      "name": "2-Step",
      "description": "2-Step: two-step skipped kick and offbeat chords. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["two-step skipped kick and offbeat chords"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "two-step skipped kick and offbeat chords synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "two-step skipped kick and offbeat chords synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "two-step skipped kick and offbeat chords synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "two-step skipped kick and offbeat chords synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "two-step skipped kick and offbeat chords low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "two-step skipped kick and offbeat chords synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "two-step skipped kick and offbeat chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "two-step skipped kick and offbeat chords drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "two-step skipped kick and offbeat chords sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "two-step skipped kick and offbeat chords sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "dubstep",
      "name": "Dubstep",
      "description": "Dubstep: half-time snare with sustained sub. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["half-time snare with sustained sub"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "half-time snare with sustained sub synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "half-time snare with sustained sub synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "half-time snare with sustained sub synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "half-time snare with sustained sub synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "half-time snare with sustained sub low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "half-time snare with sustained sub synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "half-time snare with sustained sub kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "half-time snare with sustained sub drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "half-time snare with sustained sub sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "half-time snare with sustained sub sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
          "patchId": "bass-lead"
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
      "id": "grime",
      "name": "Grime",
      "description": "Grime: grime sparse square bass and clipped hook. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["grime sparse square bass and clipped hook"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [132, 148],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "grime sparse square bass and clipped hook synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "grime sparse square bass and clipped hook synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "grime sparse square bass and clipped hook synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "grime sparse square bass and clipped hook synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "grime sparse square bass and clipped hook low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "grime sparse square bass and clipped hook synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "grime sparse square bass and clipped hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1.5, 1.75, 2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "grime sparse square bass and clipped hook drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "grime sparse square bass and clipped hook sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "grime sparse square bass and clipped hook sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "future-garage",
      "name": "Future Garage",
      "description": "Future Garage: future garage displaced ghost percussion. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["future garage displaced ghost percussion"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [122, 138],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "future garage displaced ghost percussion synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "future garage displaced ghost percussion synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "future garage displaced ghost percussion synth accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "future garage displaced ghost percussion synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "future garage displaced ghost percussion low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "future garage displaced ghost percussion synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "future garage displaced ghost percussion kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "future garage displaced ghost percussion drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "future garage displaced ghost percussion sampler pulse", "role": "percussion", "onsets": [0, 0.5, 1.5, 2, 2.75, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "future garage displaced ghost percussion sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
      "id": "breakbeat",
      "name": "Breakbeat",
      "description": "Breakbeat: broken funk beat with sample responses. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["broken funk beat with sample responses"],
      "techniques": ["glide", "staccato", "roll", "ghost-note", "filter-sweep", "pitch-bend", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["Am7", "Fmaj7", "G"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["synth"],
        "bass": ["synth"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "DJ intro": ["Am7", "Am7"],
        "groove": ["Am7", "Am7"],
        "build": ["Fmaj7", "G", "Am7", "Am7"],
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
        {"name": "broken funk beat with sample responses synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "broken funk beat with sample responses synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "broken funk beat with sample responses synth accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "broken funk beat with sample responses synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "broken funk beat with sample responses low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "broken funk beat with sample responses synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "broken funk beat with sample responses kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.85, 0.45]},
        {"name": "broken funk beat with sample responses drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "broken funk beat with sample responses sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "broken funk beat with sample responses sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"],
        "sampler": ["staccato", "accent"]
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
