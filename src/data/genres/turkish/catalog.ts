import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "turkish",
  "name": "Turkish",
  "family": "Anatolia / Turkey",
  "color": "#7a74a6",
  "description": "Turkish is an independent musical world. Anatolia / Turkey idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Turkish Folk",
  "meter": "9/8",
  "tempo": [96, 112],
  "instruments": ["voice", "baglama", "frame-drum", "ney", "oud", "qanun", "guitar", "bass", "drums", "string-ensemble", "darbuka", "clarinet", "zurna"],
  "roles": {
    "lead": ["voice", "baglama"],
    "percussion": ["frame-drum"]
  },
  "pitchSystem": "maqam / microtonal inflection",
  "scales": ["harmonic-minor"],
  "chordQualities": ["D5"],
  "harmonicRhythm": "static",
  "cadences": ["D5"],
  "bassChordInteraction": "Sustain the modal center beneath the decorated melody.",
  "patternFamilies": ["Turkish folk baglama motif and aksak accents", "Ottoman classical samai cycle and makam phrase", "Anatolian rock baglama ostinato and electric band", "arabesque sustained vocal and string answer", "Roman halk asymmetric dance accents"],
  "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "turkish-folk",
      "name": "Turkish Folk",
      "description": "Turkish Folk: Turkish folk baglama motif and aksak accents. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Turkish folk baglama motif and aksak accents"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost"],
      "harmony": ["D5"],
      "meter": "9/8",
      "tempo": [96, 112],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "baglama"],
        "percussion": ["frame-drum"]
      },
      "progressions": {
        "taksim": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "instrumental": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taksim", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Turkish folk baglama motif and aksak accents voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Turkish folk baglama motif and aksak accents voice cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Turkish folk baglama motif and aksak accents baglama statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["baglama"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Turkish folk baglama motif and aksak accents baglama cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["baglama"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Turkish folk baglama motif and aksak accents frame-drum pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3], "instruments": ["frame-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Turkish folk baglama motif and aksak accents frame-drum cadence fill", "role": "percussion", "onsets": [3.5, 4.0, 4.25], "instruments": ["frame-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "baglama": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "frame-drum": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "baglama:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "frame-drum:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
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
      "id": "ottoman-classical",
      "name": "Ottoman Classical",
      "description": "Ottoman Classical: Ottoman classical samai cycle and makam phrase. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Ottoman classical samai cycle and makam phrase"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll", "accent", "staccato", "legato", "vibrato", "ghost"],
      "harmony": ["D5"],
      "meter": "10/4",
      "tempo": [76, 92],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["ney", "oud"],
        "harmony": ["qanun"],
        "percussion": ["frame-drum"]
      },
      "progressions": {
        "taksim": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "instrumental": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taksim", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Ottoman classical samai cycle and makam phrase ney statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["ney"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ottoman classical samai cycle and makam phrase ney cadence fill", "role": "lead", "onsets": [9.0, 9.5, 9.75], "instruments": ["ney"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ottoman classical samai cycle and makam phrase oud statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Ottoman classical samai cycle and makam phrase oud cadence fill", "role": "lead", "onsets": [9.0, 9.5, 9.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ottoman classical samai cycle and makam phrase qanun accompaniment", "role": "harmony", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["qanun"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Ottoman classical samai cycle and makam phrase qanun cadence fill", "role": "harmony", "onsets": [9.0, 9.5, 9.75], "instruments": ["qanun"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Ottoman classical samai cycle and makam phrase frame-drum pulse", "role": "percussion", "onsets": [0, 1, 2, 3], "instruments": ["frame-drum"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Ottoman classical samai cycle and makam phrase frame-drum cadence fill", "role": "percussion", "onsets": [9.0, 9.5, 9.75], "instruments": ["frame-drum"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "ney": ["microtonal-inflection", "ornament", "glissando"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "qanun": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
        "frame-drum": ["roll", "accent", "ghost"]
      },
      "instrumentDialects": {
        "ney:lead": {
          "allowedTechniques": ["microtonal-inflection", "ornament", "glissando"],
          "defaultTechnique": "microtonal-inflection"
        },
        "oud:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "qanun:harmony": {
          "allowedTechniques": ["tremolo", "trill", "glissando", "ornament", "microtonal-inflection"],
          "defaultTechnique": "tremolo"
        },
        "frame-drum:percussion": {
          "allowedTechniques": ["roll", "accent", "ghost"],
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
      "id": "anatolian-rock",
      "name": "Anatolian Rock",
      "description": "Anatolian Rock: Anatolian rock baglama ostinato and electric band. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Anatolian rock baglama ostinato and electric band"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll", "accent", "staccato", "legato", "vibrato", "tenuto", "ghost", "open"],
      "harmony": ["D5"],
      "meter": "9/8",
      "tempo": [108, 124],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice", "baglama"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "taksim": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "instrumental": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taksim", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Anatolian rock baglama ostinato and electric band voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Anatolian rock baglama ostinato and electric band voice cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Anatolian rock baglama ostinato and electric band baglama statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["baglama"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Anatolian rock baglama ostinato and electric band baglama cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["baglama"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Anatolian rock baglama ostinato and electric band guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Anatolian rock baglama ostinato and electric band guitar cadence fill", "role": "harmony", "onsets": [3.5, 4.0, 4.25], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Anatolian rock baglama ostinato and electric band low anchor", "role": "bass", "onsets": [0, 1.5, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6]},
        {"name": "Anatolian rock baglama ostinato and electric band bass cadence fill", "role": "bass", "onsets": [3.5, 4.0, 4.25], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Anatolian rock baglama ostinato and electric band kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Anatolian rock baglama ostinato and electric band drums cadence fill", "role": "percussion", "onsets": [3.5, 4.0, 4.25], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "baglama": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["tremolo", "glissando", "accent", "staccato", "legato", "vibrato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["roll", "accent", "ghost", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "baglama:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "glissando", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
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
      "id": "arabesque",
      "name": "Arabesque",
      "description": "Arabesque: arabesque sustained vocal and string answer. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["arabesque sustained vocal and string answer"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll", "accent", "staccato", "legato", "vibrato", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "4/4",
      "tempo": [70, 86],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["string-ensemble", "oud"],
        "percussion": ["darbuka"]
      },
      "progressions": {
        "taksim": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "instrumental": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taksim", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "rubato", "humanizeJitterMs": 7},
      "cells": [
        {"name": "arabesque sustained vocal and string answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "arabesque sustained vocal and string answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "arabesque sustained vocal and string answer string-ensemble accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["string-ensemble"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "arabesque sustained vocal and string answer string-ensemble cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["string-ensemble"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "arabesque sustained vocal and string answer oud accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "arabesque sustained vocal and string answer oud cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "arabesque sustained vocal and string answer darbuka pulse", "role": "percussion", "onsets": [0, 2.75], "instruments": ["darbuka"], "cycleLength": 1, "articulation": "accent"},
        {"name": "arabesque sustained vocal and string answer darbuka cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["darbuka"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "string-ensemble": ["tremolo", "accent", "legato", "staccato"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "darbuka": ["roll", "accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "string-ensemble:harmony": {
          "allowedTechniques": ["tremolo", "accent", "legato", "staccato"],
          "defaultTechnique": "tremolo"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "darbuka:percussion": {
          "allowedTechniques": ["roll", "accent", "open", "slap", "ghost"],
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
      "id": "roman-halk",
      "name": "Roman / Halk",
      "description": "Roman / Halk: Roman halk asymmetric dance accents. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["Roman halk asymmetric dance accents"],
      "techniques": ["tremolo", "ornament", "microtonal-inflection", "trill", "glissando", "roll", "accent", "staccato", "legato", "tenuto", "vibrato", "open", "slap", "ghost"],
      "harmony": ["D5"],
      "meter": "9/8",
      "tempo": [124, 140],
      "scale": "harmonic-minor",
      "roles": {
        "lead": ["clarinet", "zurna"],
        "harmony": ["oud"],
        "percussion": ["darbuka"]
      },
      "progressions": {
        "taksim": ["D5", "D5"],
        "theme": ["D5", "D5"],
        "instrumental": ["D5", "D5"],
        "coda": ["D5"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "taksim", "bars": 4},
        {"label": "theme", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "theme", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Roman halk asymmetric dance accents clarinet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["clarinet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Roman halk asymmetric dance accents clarinet cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["clarinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Roman halk asymmetric dance accents zurna statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["zurna"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Roman halk asymmetric dance accents zurna cadence fill", "role": "lead", "onsets": [3.5, 4.0, 4.25], "instruments": ["zurna"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Roman halk asymmetric dance accents oud accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5], "instruments": ["oud"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Roman halk asymmetric dance accents oud cadence fill", "role": "harmony", "onsets": [3.5, 4.0, 4.25], "instruments": ["oud"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Roman halk asymmetric dance accents darbuka pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3], "instruments": ["darbuka"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Roman halk asymmetric dance accents darbuka cadence fill", "role": "percussion", "onsets": [3.5, 4.0, 4.25], "instruments": ["darbuka"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "clarinet": ["trill", "accent", "staccato", "legato", "tenuto", "vibrato"],
        "zurna": ["accent", "staccato", "legato", "vibrato"],
        "oud": ["tremolo", "accent", "staccato", "legato", "vibrato"],
        "darbuka": ["roll", "accent", "open", "slap", "ghost"]
      },
      "instrumentDialects": {
        "clarinet:lead": {
          "allowedTechniques": ["trill", "accent", "staccato", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "trill"
        },
        "zurna:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "oud:harmony": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "tremolo"
        },
        "darbuka:percussion": {
          "allowedTechniques": ["roll", "accent", "open", "slap", "ghost"],
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
