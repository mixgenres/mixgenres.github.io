import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "weird",
  "name": "Weird",
  "family": "Experimental / boundary-breaking",
  "color": "#498c38",
  "description": "Weird is an independent musical world. Experimental / boundary-breaking idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Deconstructed",
  "meter": "4/4",
  "tempo": [100, 116],
  "instruments": ["piano", "sampler", "synth", "voice", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["piano"],
    "harmony": ["sampler"],
    "texture": ["synth"]
  },
  "pitchSystem": "xenharmonic / freely selected",
  "scales": ["chromatic"],
  "chordQualities": ["D5", "Eb5"],
  "harmonicRhythm": "bar",
  "cadences": ["D5"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["deconstructed interrupted pulse and isolated attacks", "conflicting meters", "intentionally misaligned ostinati", "broken form", "musique concrete sparse sample montage", "sound-event montage", "prepared piano dry repeated figures and metallic response", "percussive repeated cells", "glitch short gated fragments and displaced clicks", "micro-cuts", "skips", "broken loops", "microsound tiny isolated attacks and long gaps", "granular impulses", "generative independent cycle entries", "rule-derived loops", "probability chains", "phase repeating ostinati with displaced entrances", "identical loop with gradual temporal displacement", "microtonal sustained inflected pitch cells", "ordinary or experimental rhythm", "free improvisation irregular calls and silence", "gesture-response rather than meter", "noise dense attacks and abrupt rests", "density envelopes", "drone sustained resonance and overtone change", "sustained tone fields", "spectral slow harmonic resonance and timbral swell", "evolving timbral envelopes", "no wave jagged guitar and dry drum interruptions", "jagged stop/start rhythm", "Zeuhl repeated bass and chanted angular figures", "ritual ostinato", "irregular meter", "repeated bass cells", "polymetric displaced repeating accents", "long cycle against stable reference meter", "circuit bent unstable sample pulses and stops", "unstable clock/rhythm"],
  "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "deconstructed",
      "name": "Deconstructed",
      "description": "Deconstructed: deconstructed interrupted pulse and isolated attacks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["deconstructed interrupted pulse and isolated attacks", "conflicting meters", "intentionally misaligned ostinati", "broken form"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "abrupt mute", "extreme articulation changes", "accent", "legato", "tenuto", "bend", "vibrato"],
      "harmony": ["D5", "Eb5", "polytonality, clusters, chromatic cells"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "chromatic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "deconstructed interrupted pulse and isolated attacks piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "deconstructed interrupted pulse and isolated attacks piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "deconstructed interrupted pulse and isolated attacks sampler accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 3.25], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "deconstructed interrupted pulse and isolated attacks sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "deconstructed interrupted pulse and isolated attacks synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "sampler": ["staccato", "accent", "legato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "noise-transition"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "musique-concrete",
      "name": "Musique Concrète",
      "description": "Musique Concrète: musique concrete sparse sample montage. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["musique concrete sparse sample montage", "sound-event montage"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "reverse, splice, speed change, filtering", "accent", "legato"],
      "harmony": ["D5", "Eb5", "spectral relationship rather than chord progression"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "chromatic",
      "roles": {
        "lead": ["sampler"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "musique concrete sparse sample montage sampler statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "musique concrete sparse sample montage sampler cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "musique concrete sparse sample montage sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "sampler:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "piano",
      "name": "Prepared Piano",
      "description": "Prepared Piano: prepared piano dry repeated figures and metallic response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["prepared piano dry repeated figures and metallic response", "percussive repeated cells"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "preparation-specific attacks", "accent", "legato", "tenuto"],
      "harmony": ["D5", "Eb5", "altered pitch set from prepared instrument"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "chromatic",
      "roles": {
        "lead": ["piano"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "prepared piano dry repeated figures and metallic response piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "prepared piano dry repeated figures and metallic response piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "accent", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "glitch",
      "name": "Glitch",
      "description": "Glitch: glitch short gated fragments and displaced clicks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["glitch short gated fragments and displaced clicks", "micro-cuts", "skips", "broken loops"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "buffer repeat, bitcrush, stutter", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "fragments/static pitch field"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "glitch short gated fragments and displaced clicks synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "glitch short gated fragments and displaced clicks synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "glitch short gated fragments and displaced clicks sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "noise-transition"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "microsound",
      "name": "Microsound",
      "description": "Microsound: microsound tiny isolated attacks and long gaps. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["microsound tiny isolated attacks and long gaps", "granular impulses"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "micro-granulation, ultra-short envelopes", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "spectral bands"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "microsound tiny isolated attacks and long gaps synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "microsound tiny isolated attacks and long gaps synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "microsound tiny isolated attacks and long gaps sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "process-generative",
      "name": "Process / Generative",
      "description": "Process / Generative: generative independent cycle entries. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["generative independent cycle entries", "rule-derived loops", "probability chains"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "algorithmic mutation", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "constrained pitch-set evolution"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "generative independent cycle entries synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "generative independent cycle entries synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "generative independent cycle entries sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sweep-pad"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "phase",
      "name": "Phase",
      "description": "Phase: phase repeating ostinati with displaced entrances. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["phase repeating ostinati with displaced entrances", "identical loop with gradual temporal displacement"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "accent", "legato", "tenuto", "bend", "vibrato"],
      "harmony": ["D5", "Eb5", "emergent composite sonority"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "chromatic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "phase repeating ostinati with displaced entrances piano statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "phase repeating ostinati with displaced entrances piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "phase repeating ostinati with displaced entrances sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "phase repeating ostinati with displaced entrances sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "phase repeating ostinati with displaced entrances synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "sampler": ["staccato", "accent", "legato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sweep-pad"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "microtonal",
      "name": "Microtonal",
      "description": "Microtonal: microtonal sustained inflected pitch cells. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["microtonal sustained inflected pitch cells", "ordinary or experimental rhythm"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "continuous pitch bend / alternate tuning", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "just intonation, EDOs, spectral intervals"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "microtonal sustained inflected pitch cells synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "microtonal sustained inflected pitch cells synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "microtonal sustained inflected pitch cells sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sweep-pad"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "free-improvisation",
      "name": "Free Improvisation",
      "description": "Free Improvisation: free improvisation irregular calls and silence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["free improvisation irregular calls and silence", "gesture-response rather than meter"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "extended instrument techniques", "accent", "legato", "tenuto", "bend", "vibrato"],
      "harmony": ["D5", "Eb5", "unconstrained or locally emergent"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "chromatic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "free improvisation irregular calls and silence piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "free improvisation irregular calls and silence piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free improvisation irregular calls and silence sampler accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "free improvisation irregular calls and silence sampler cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free improvisation irregular calls and silence synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "sampler": ["staccato", "accent", "legato"],
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "sampler:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "synth:texture": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "sweep-pad"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "noise",
      "name": "Noise",
      "description": "Noise: noise dense attacks and abrupt rests. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["noise dense attacks and abrupt rests", "density envelopes"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "feedback, distortion, saturation", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "spectrum/noise bands"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "noise dense attacks and abrupt rests synth statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "noise dense attacks and abrupt rests synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "noise dense attacks and abrupt rests sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "noise-transition"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "drone",
      "name": "Drone",
      "description": "Drone: drone sustained resonance and overtone change. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["drone sustained resonance and overtone change", "sustained tone fields"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "feedback, bow sustain, overtone emphasis", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "very slow spectral/interval change"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "drone sustained resonance and overtone change synth statement", "role": "lead", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "drone sustained resonance and overtone change synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "drone sustained resonance and overtone change sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "spectral",
      "name": "Spectral",
      "description": "Spectral: spectral slow harmonic resonance and timbral swell. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["spectral slow harmonic resonance and timbral swell", "evolving timbral envelopes"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "multiphonics, harmonics, spectral orchestration", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "overtone-derived chord fields"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "spectral slow harmonic resonance and timbral swell synth statement", "role": "lead", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "spectral slow harmonic resonance and timbral swell synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "spectral slow harmonic resonance and timbral swell sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "ambient-drone"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "no-wave",
      "name": "No Wave",
      "description": "No Wave: no wave jagged guitar and dry drum interruptions. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["no wave jagged guitar and dry drum interruptions", "jagged stop/start rhythm"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "scratch guitar, dead notes, abrasive attack", "accent", "legato", "vibrato", "dead-note", "harmonic", "bend", "ghost", "open"],
      "harmony": ["D5", "Eb5", "atonal/chromatic clusters"],
      "meter": "4/4",
      "tempo": [124, 140],
      "scale": "chromatic",
      "roles": {
        "lead": ["voice", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "no wave jagged guitar and dry drum interruptions voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "no wave jagged guitar and dry drum interruptions voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "no wave jagged guitar and dry drum interruptions guitar statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "no wave jagged guitar and dry drum interruptions guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "no wave jagged guitar and dry drum interruptions low anchor", "role": "bass", "onsets": [0, 1.75, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "no wave jagged guitar and dry drum interruptions bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "no wave jagged guitar and dry drum interruptions kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "no wave jagged guitar and dry drum interruptions drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "guitar": ["staccato", "dead-note", "tremolo", "harmonic", "bend", "glissando", "accent", "legato", "vibrato"],
        "bass": ["staccato", "dead-note", "harmonic", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "guitar:lead": {
          "allowedTechniques": ["staccato", "dead-note", "tremolo", "harmonic", "bend", "glissando", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "dead-note", "harmonic", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "zeuhl",
      "name": "Zeuhl",
      "description": "Zeuhl: Zeuhl repeated bass and chanted angular figures. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Zeuhl repeated bass and chanted angular figures", "ritual ostinato", "irregular meter", "repeated bass cells"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "chant, dramatic ensemble unison", "accent", "legato", "vibrato", "tenuto", "harmonic", "ghost", "open"],
      "harmony": ["D5", "Eb5", "modal/altered, chromatic ostinato fields"],
      "meter": "7/8",
      "tempo": [116, 132],
      "scale": "chromatic",
      "roles": {
        "lead": ["voice"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Zeuhl repeated bass and chanted angular figures voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Zeuhl repeated bass and chanted angular figures voice cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.25], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zeuhl repeated bass and chanted angular figures piano accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Zeuhl repeated bass and chanted angular figures piano cadence fill", "role": "harmony", "onsets": [2.5, 3.0, 3.25], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zeuhl repeated bass and chanted angular figures low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Zeuhl repeated bass and chanted angular figures bass cadence fill", "role": "bass", "onsets": [2.5, 3.0, 3.25], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Zeuhl repeated bass and chanted angular figures kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "Zeuhl repeated bass and chanted angular figures drums cadence fill", "role": "percussion", "onsets": [2.5, 3.0, 3.25], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "piano": ["staccato", "accent", "legato", "tenuto"],
        "bass": ["staccato", "harmonic", "accent", "legato"],
        "drums": ["staccato", "roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "harmonic", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["staccato", "roll", "accent", "ghost", "open"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "polymetric",
      "name": "Polymetric",
      "description": "Polymetric: polymetric displaced repeating accents. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["polymetric displaced repeating accents", "long cycle against stable reference meter"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "precise accent displacement", "accent", "legato", "tenuto", "bend", "vibrato"],
      "harmony": ["D5", "Eb5", "riff-based pedal harmony"],
      "meter": "7/8",
      "tempo": [108, 124],
      "scale": "chromatic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["sampler"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "polymetric displaced repeating accents piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "polymetric displaced repeating accents piano cadence fill", "role": "lead", "onsets": [2.5, 3.0, 3.25], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "polymetric displaced repeating accents sampler accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["sampler"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "polymetric displaced repeating accents sampler cadence fill", "role": "harmony", "onsets": [2.5, 3.0, 3.25], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "polymetric displaced repeating accents synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.5], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "sampler": ["accent", "staccato", "legato"],
        "synth": ["accent", "staccato", "bend", "legato", "vibrato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "sampler:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "synth:texture": {
          "allowedTechniques": ["accent", "staccato", "bend", "legato", "vibrato"],
          "defaultTechnique": "accent",
          "patchId": "sweep-pad"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
        },
        "dynamics": {
          "maxTrackBoostDb": 3,
          "maxTrackCutDb": -6,
          "peakSectionHeadroomDb": 3
        }
      }
    },
    {
      "id": "circuit-bent-broken-electronics",
      "name": "Circuit-Bent / Broken Electronics",
      "description": "Circuit-Bent / Broken Electronics: circuit bent unstable sample pulses and stops. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["circuit bent unstable sample pulses and stops", "unstable clock/rhythm"],
      "techniques": ["harmonics", "glissando", "pitch-bend", "tremolo", "staccato", "roll", "prepared", "voltage/pitch instability", "random trigger", "bend", "accent", "legato", "vibrato"],
      "harmony": ["D5", "Eb5", "unstable oscillator pitch relationships"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "chromatic",
      "roles": {
        "lead": ["synth"],
        "texture": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "process": ["D5", "D5"],
        "disruption": ["Eb5", "D5"],
        "dissolve": ["D5", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "process", "bars": 8},
        {"label": "disruption", "bars": 8},
        {"label": "development", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "circuit bent unstable sample pulses and stops synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "circuit bent unstable sample pulses and stops synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "circuit bent unstable sample pulses and stops sampler accompaniment", "role": "texture", "onsets": [0], "instruments": ["sampler"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["staccato", "bend", "accent", "legato", "vibrato"],
        "sampler": ["staccato", "accent", "legato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["staccato", "bend", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato",
          "patchId": "noise-transition"
        },
        "sampler:texture": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "character": {
          "dryness": 0.28,
          "bassForward": 0.46,
          "width": 0.78,
          "brightness": 0.44,
          "compressionRatio": 1.45,
          "transientSnap": 0.46,
          "sidechainDucking": 0,
          "subHarmonics": 0,
          "delaySend": 0.28,
          "reverbType": "room",
          "saturationType": "tape"
        },
        "stage": {
          "width": 0.78,
          "preserveNaturalStage": true
        },
        "ambience": {
          "roomSize": 0.72,
          "reverbSend": 0.3,
          "delaySend": 0.28
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
