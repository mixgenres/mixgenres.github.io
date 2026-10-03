import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "industrial",
  "name": "Industrial",
  "family": "United Kingdom / Germany / Global",
  "color": "#eb2a26",
  "description": "Industrial is an independent musical world. United Kingdom / Germany / Global idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "EBM",
  "meter": "4/4",
  "tempo": [120, 136],
  "instruments": ["synth", "sampler", "drums", "voice", "guitar", "bass"],
  "roles": {
    "lead": ["synth"],
    "harmony": ["sampler"],
    "bass": ["synth"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["E5", "G5", "F5"],
  "harmonicRhythm": "bar",
  "cadences": ["E5"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["EBM rigid sequenced bass and drum machine", "early industrial metallic pulses and tape interruptions", "industrial dance hard machine kick and stab", "industrial rock distorted riff and machine backbeat", "industrial metal chug and mechanical double kick"],
  "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "ebm",
      "name": "EBM",
      "description": "EBM: EBM rigid sequenced bass and drum machine. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["EBM rigid sequenced bass and drum machine"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [120, 136],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "EBM rigid sequenced bass and drum machine synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "EBM rigid sequenced bass and drum machine synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "EBM rigid sequenced bass and drum machine sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "EBM rigid sequenced bass and drum machine sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "EBM rigid sequenced bass and drum machine low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "EBM rigid sequenced bass and drum machine synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "EBM rigid sequenced bass and drum machine kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "EBM rigid sequenced bass and drum machine drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
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
      "id": "early-industrial",
      "name": "Early Industrial",
      "description": "Early Industrial: early industrial metallic pulses and tape interruptions. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["early industrial metallic pulses and tape interruptions"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "early industrial metallic pulses and tape interruptions synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "early industrial metallic pulses and tape interruptions synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "early industrial metallic pulses and tape interruptions sampler accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "early industrial metallic pulses and tape interruptions sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "early industrial metallic pulses and tape interruptions low anchor", "role": "bass", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "early industrial metallic pulses and tape interruptions synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "early industrial metallic pulses and tape interruptions kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "early industrial metallic pulses and tape interruptions drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
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
      "id": "industrial-dance",
      "name": "Industrial Dance",
      "description": "Industrial Dance: industrial dance hard machine kick and stab. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["industrial dance hard machine kick and stab"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "bend", "accent", "legato", "vibrato", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "minor",
      "roles": {
        "lead": ["synth"],
        "harmony": ["sampler"],
        "bass": ["synth"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial dance hard machine kick and stab synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial dance hard machine kick and stab synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial dance hard machine kick and stab sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "industrial dance hard machine kick and stab sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial dance hard machine kick and stab low anchor", "role": "bass", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "industrial dance hard machine kick and stab synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial dance hard machine kick and stab kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "industrial dance hard machine kick and stab drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:bass": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "bass-lead"
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
      "id": "industrial-rock",
      "name": "Industrial Rock",
      "description": "Industrial Rock: industrial rock distorted riff and machine backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["industrial rock distorted riff and machine backbeat"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "accent", "legato", "vibrato", "bend", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [112, 128],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial rock distorted riff and machine backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial rock distorted riff and machine backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial rock distorted riff and machine backbeat guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial rock distorted riff and machine backbeat guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial rock distorted riff and machine backbeat synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "industrial rock distorted riff and machine backbeat synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial rock distorted riff and machine backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "industrial rock distorted riff and machine backbeat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial rock distorted riff and machine backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "industrial rock distorted riff and machine backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "industrial rock distorted riff and machine backbeat sampler pulse", "role": "percussion", "onsets": [0, 1, 1.5, 2, 3, 3.5], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "industrial rock distorted riff and machine backbeat sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "bass": ["staccato", "palm-mute", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:lead": {
          "allowedTechniques": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "palm-mute", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
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
      "id": "industrial-metal",
      "name": "Industrial Metal",
      "description": "Industrial Metal: industrial metal chug and mechanical double kick. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["industrial metal chug and mechanical double kick"],
      "techniques": ["palm-mute", "staccato", "distortion", "roll", "pitch-bend", "filter-sweep", "accent", "legato", "vibrato", "bend", "tight-palm-mute", "ghost", "open"],
      "harmony": ["E5", "G5", "F5"],
      "meter": "4/4",
      "tempo": [130, 146],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "guitar"],
        "harmony": ["synth"],
        "bass": ["bass"],
        "percussion": ["drums", "sampler"]
      },
      "progressions": {
        "intro": ["E5", "E5", "G5", "E5"],
        "motor": ["E5", "E5", "G5", "E5"],
        "refrain": ["E5", "F5", "E5", "E5"],
        "ending": ["E5", "E5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "riff",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "motor", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "motor", "bars": 8},
        {"label": "ending", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 3},
      "cells": [
        {"name": "industrial metal chug and mechanical double kick voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal chug and mechanical double kick voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial metal chug and mechanical double kick guitar statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "industrial metal chug and mechanical double kick guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial metal chug and mechanical double kick synth accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "industrial metal chug and mechanical double kick synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial metal chug and mechanical double kick low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "industrial metal chug and mechanical double kick bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "industrial metal chug and mechanical double kick kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "industrial metal chug and mechanical double kick drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "industrial metal chug and mechanical double kick sampler pulse", "role": "percussion", "onsets": [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "industrial metal chug and mechanical double kick sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
        "synth": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
        "bass": ["staccato", "palm-mute", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"],
        "sampler": ["staccato", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:lead": {
          "allowedTechniques": ["staccato", "palm-mute", "bend", "tight-palm-mute", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric",
          "drive": 0.8
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "bend", "filter-sweep", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "square-lead"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "palm-mute", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
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
