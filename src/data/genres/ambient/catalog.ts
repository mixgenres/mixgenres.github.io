import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "ambient",
  "name": "Ambient",
  "family": "Global electronic / experimental",
  "color": "#fff66a",
  "description": "Ambient is an independent musical world. Global electronic / experimental idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Atmospheric",
  "meter": "4/4",
  "tempo": [56, 72],
  "instruments": ["piano", "synth", "string-ensemble", "guitar", "flute", "sampler", "rhodes", "drums"],
  "roles": {
    "lead": ["piano"],
    "texture": ["synth", "string-ensemble"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major-pentatonic"],
  "chordQualities": ["D5", "Dmaj7", "Gmaj7"],
  "harmonicRhythm": "bar",
  "cadences": ["Gmaj7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["slow pad overlap and spacious motif", "continuous drone with sparse overtones", "dark low drones and isolated metallic attacks", "acoustic harmonics over breathing texture", "quiet piano motif with long string tails", "glitch fragments separated by silence", "independent repeating processes", "long orchestral swell and motif return", "soft downtempo beat under evolving pads"],
  "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "atmospheric",
      "name": "Atmospheric",
      "description": "Atmospheric: slow pad overlap and spacious motif. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["slow pad overlap and spacious motif"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [56, 72],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "slow pad overlap and spacious motif piano statement", "role": "lead", "onsets": [0], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "slow pad overlap and spacious motif piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "slow pad overlap and spacious motif synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "slow pad overlap and spacious motif string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
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
      "description": "Drone: continuous drone with sparse overtones. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["continuous drone with sparse overtones"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [48, 64],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "continuous drone with sparse overtones synth statement", "role": "lead", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "continuous drone with sparse overtones synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "continuous drone with sparse overtones synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
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
      "id": "dark-ambient",
      "name": "Dark Ambient",
      "description": "Dark Ambient: dark low drones and isolated metallic attacks. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["dark low drones and isolated metallic attacks"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [52, 68],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "dark low drones and isolated metallic attacks synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "dark low drones and isolated metallic attacks synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "dark low drones and isolated metallic attacks synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
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
      "id": "organic-ambient",
      "name": "Organic Ambient",
      "description": "Organic Ambient: acoustic harmonics over breathing texture. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["acoustic harmonics over breathing texture"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "harmonic", "legato-single-note", "accent", "staccato", "vibrato", "tenuto"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [60, 76],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["guitar"],
        "texture": ["flute", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "acoustic harmonics over breathing texture guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "acoustic harmonics over breathing texture guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "acoustic harmonics over breathing texture flute accompaniment", "role": "texture", "onsets": [0], "instruments": ["flute"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "acoustic harmonics over breathing texture string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "guitar": ["legato", "harmonic", "glissando", "legato-single-note", "accent", "staccato", "vibrato"],
        "flute": ["legato", "glissando", "accent", "staccato", "tenuto", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["legato", "harmonic", "glissando", "legato-single-note", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "flute:texture": {
          "allowedTechniques": ["legato", "glissando", "accent", "staccato", "tenuto", "vibrato"],
          "defaultTechnique": "legato"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
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
      "id": "neo-classical-ambient",
      "name": "Neo-Classical Ambient",
      "description": "Neo-Classical Ambient: quiet piano motif with long string tails. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["quiet piano motif with long string tails"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "quiet piano motif with long string tails piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "quiet piano motif with long string tails piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet piano motif with long string tails synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "quiet piano motif with long string tails string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
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
      "id": "glitch-ambient",
      "name": "Glitch Ambient",
      "description": "Glitch Ambient: glitch fragments separated by silence. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["glitch fragments separated by silence"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [68, 84],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth"],
        "percussion": ["sampler"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "glitch fragments separated by silence piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "glitch fragments separated by silence piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "glitch fragments separated by silence synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "glitch fragments separated by silence sampler pulse", "role": "percussion", "onsets": [0, 0.75, 1, 1.75, 2.5, 3, 3.75], "instruments": ["sampler"], "cycleLength": 1, "articulation": "accent"},
        {"name": "glitch fragments separated by silence sampler cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["sampler"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "sampler": ["legato", "accent"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "sampler:percussion": {
          "allowedTechniques": ["legato", "accent"],
          "defaultTechnique": "legato"
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
      "id": "generative-ambient",
      "name": "Generative Ambient",
      "description": "Generative Ambient: independent repeating processes. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["independent repeating processes"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [58, 74],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["synth"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "independent repeating processes synth statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "independent repeating processes synth cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "independent repeating processes synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "synth": ["legato", "accent", "staccato", "vibrato"]
      },
      "instrumentDialects": {
        "synth:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "halo-pad"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
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
      "id": "cinematic-ambient",
      "name": "Cinematic Ambient",
      "description": "Cinematic Ambient: long orchestral swell and motif return. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["long orchestral swell and motif return"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [62, 78],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "texture": ["synth", "string-ensemble"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "long orchestral swell and motif return piano statement", "role": "lead", "onsets": [0], "instruments": ["piano"], "cycleLength": 1, "durations": [1.5], "articulation": "legato"},
        {"name": "long orchestral swell and motif return piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "long orchestral swell and motif return synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"},
        {"name": "long orchestral swell and motif return string-ensemble accompaniment", "role": "texture", "onsets": [0], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "string-ensemble": ["legato", "slow-attack", "accent", "staccato"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "string-ensemble:texture": {
          "allowedTechniques": ["legato", "slow-attack", "accent", "staccato"],
          "defaultTechnique": "legato"
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
      "id": "downtempo-ambient",
      "name": "Downtempo Ambient",
      "description": "Downtempo Ambient: soft downtempo beat under evolving pads. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["soft downtempo beat under evolving pads"],
      "techniques": ["sustain", "legato", "slow-attack", "harmonics", "glissando", "volume-swell", "accent", "staccato", "tenuto", "vibrato", "ghost", "open", "roll"],
      "harmony": ["D5", "Dmaj7", "Gmaj7"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "major-pentatonic",
      "roles": {
        "lead": ["piano"],
        "harmony": ["rhodes"],
        "bass": ["synth"],
        "percussion": ["drums"],
        "texture": ["synth"]
      },
      "progressions": {
        "opening": ["D5", "D5"],
        "evolution": ["D5", "D5"],
        "texture shift": ["Dmaj7", "Gmaj7"],
        "dissolve": ["Gmaj7", "D5"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "evolution", "bars": 8},
        {"label": "texture shift", "bars": 8},
        {"label": "dissolve", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "soft downtempo beat under evolving pads piano statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "soft downtempo beat under evolving pads piano cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "soft downtempo beat under evolving pads rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["synth"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "soft downtempo beat under evolving pads synth cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "soft downtempo beat under evolving pads kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "soft downtempo beat under evolving pads drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]},
        {"name": "soft downtempo beat under evolving pads synth accompaniment", "role": "texture", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [4.0], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "piano": ["legato", "accent", "staccato", "tenuto"],
        "rhodes": ["legato", "accent", "staccato", "tenuto"],
        "synth": ["legato", "accent", "staccato", "vibrato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "piano:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "synth:bass": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
        },
        "synth:texture": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "ambient-drone"
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
