import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "r-and-b",
  "name": "R&B",
  "family": "R&B",
  "color": "#18bff6",
  "description": "R&B is an independent musical world. R&B idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Contemporary R&B",
  "meter": "4/4",
  "tempo": [74, 90],
  "instruments": ["voice", "rhodes", "guitar", "bass", "drums"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["rhodes", "guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["dorian"],
  "chordQualities": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
  "harmonicRhythm": "bar",
  "cadences": ["Cmaj7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["contemporary R&B sparse beat and vocal runs", "Motown tambourine backbeat and bass countermelody", "Southern soul organ and gospel vocal response", "Memphis soul dry horn stabs and guitar pocket", "Philly soul strings and layered vocal refrain", "quiet storm intimate electric piano and long vocal phrases", "new jack swing swung machine sixteenths", "neo soul behind-beat drums and extended Rhodes voicings", "alternative R&B fragmented beat and textural vocal"],
  "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "contemporary-randb",
      "name": "Contemporary R&B",
      "description": "Contemporary R&B: contemporary R&B sparse beat and vocal runs. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["contemporary R&B sparse beat and vocal runs"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [74, 90],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "contemporary R&B sparse beat and vocal runs voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "contemporary R&B sparse beat and vocal runs voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary R&B sparse beat and vocal runs rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary R&B sparse beat and vocal runs rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary R&B sparse beat and vocal runs guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "contemporary R&B sparse beat and vocal runs guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary R&B sparse beat and vocal runs low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "contemporary R&B sparse beat and vocal runs bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "contemporary R&B sparse beat and vocal runs kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "contemporary R&B sparse beat and vocal runs drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "motown",
      "name": "Motown",
      "description": "Motown: Motown tambourine backbeat and bass countermelody. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Motown tambourine backbeat and bass countermelody"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Motown tambourine backbeat and bass countermelody voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Motown tambourine backbeat and bass countermelody voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Motown tambourine backbeat and bass countermelody rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Motown tambourine backbeat and bass countermelody rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Motown tambourine backbeat and bass countermelody guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Motown tambourine backbeat and bass countermelody guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Motown tambourine backbeat and bass countermelody low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Motown tambourine backbeat and bass countermelody bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Motown tambourine backbeat and bass countermelody kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Motown tambourine backbeat and bass countermelody drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "southern-soul",
      "name": "Southern Soul",
      "description": "Southern Soul: Southern soul organ and gospel vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Southern soul organ and gospel vocal response"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 66, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Southern soul organ and gospel vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Southern soul organ and gospel vocal response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Southern soul organ and gospel vocal response rhodes accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Southern soul organ and gospel vocal response rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Southern soul organ and gospel vocal response guitar accompaniment", "role": "harmony", "onsets": [0, 1.6666666666666665, 2, 3.6666666666666665], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Southern soul organ and gospel vocal response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Southern soul organ and gospel vocal response low anchor", "role": "bass", "onsets": [0, 0.6666666666666666, 1, 1.6666666666666665, 2, 3], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6]},
        {"name": "Southern soul organ and gospel vocal response bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Southern soul organ and gospel vocal response kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Southern soul organ and gospel vocal response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "memphis-soul",
      "name": "Memphis Soul",
      "description": "Memphis Soul: Memphis soul dry horn stabs and guitar pocket. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Memphis soul dry horn stabs and guitar pocket"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Memphis soul dry horn stabs and guitar pocket voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Memphis soul dry horn stabs and guitar pocket voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Memphis soul dry horn stabs and guitar pocket rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Memphis soul dry horn stabs and guitar pocket rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Memphis soul dry horn stabs and guitar pocket guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Memphis soul dry horn stabs and guitar pocket guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Memphis soul dry horn stabs and guitar pocket low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Memphis soul dry horn stabs and guitar pocket bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Memphis soul dry horn stabs and guitar pocket kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Memphis soul dry horn stabs and guitar pocket drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "philly-soul",
      "name": "Philly Soul",
      "description": "Philly Soul: Philly soul strings and layered vocal refrain. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Philly soul strings and layered vocal refrain"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Philly soul strings and layered vocal refrain voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Philly soul strings and layered vocal refrain voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly soul strings and layered vocal refrain rhodes accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Philly soul strings and layered vocal refrain rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly soul strings and layered vocal refrain guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Philly soul strings and layered vocal refrain guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly soul strings and layered vocal refrain low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Philly soul strings and layered vocal refrain bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Philly soul strings and layered vocal refrain kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Philly soul strings and layered vocal refrain drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "quiet-storm",
      "name": "Quiet Storm",
      "description": "Quiet Storm: quiet storm intimate electric piano and long vocal phrases. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["quiet storm intimate electric piano and long vocal phrases"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [64, 80],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "quiet storm intimate electric piano and long vocal phrases voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "quiet storm intimate electric piano and long vocal phrases voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet storm intimate electric piano and long vocal phrases rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "quiet storm intimate electric piano and long vocal phrases rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet storm intimate electric piano and long vocal phrases guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "quiet storm intimate electric piano and long vocal phrases guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet storm intimate electric piano and long vocal phrases low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "quiet storm intimate electric piano and long vocal phrases bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "quiet storm intimate electric piano and long vocal phrases kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "quiet storm intimate electric piano and long vocal phrases drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "new-jack-swing",
      "name": "New Jack Swing",
      "description": "New Jack Swing: new jack swing swung machine sixteenths. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["new jack swing swung machine sixteenths"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "new jack swing swung machine sixteenths voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "new jack swing swung machine sixteenths voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "new jack swing swung machine sixteenths rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "new jack swing swung machine sixteenths rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "new jack swing swung machine sixteenths guitar accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "new jack swing swung machine sixteenths guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "new jack swing swung machine sixteenths low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "new jack swing swung machine sixteenths bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "new jack swing swung machine sixteenths kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "new jack swing swung machine sixteenths drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "neo-soul",
      "name": "Neo-Soul",
      "description": "Neo-Soul: neo soul behind-beat drums and extended Rhodes voicings. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["neo soul behind-beat drums and extended Rhodes voicings"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [70, 86],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "neo soul behind-beat drums and extended Rhodes voicings voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "neo soul behind-beat drums and extended Rhodes voicings drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
      "id": "alternative-randb",
      "name": "Alternative R&B",
      "description": "Alternative R&B: alternative R&B fragmented beat and textural vocal. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["alternative R&B fragmented beat and textural vocal"],
      "techniques": ["melisma", "vibrato", "legato", "ghost-note", "slide", "short-chord-stab", "call-response", "accent", "staccato", "ghost", "tenuto", "legato-single-note", "open", "roll"],
      "harmony": ["Dm9", "G13", "Cmaj9", "A7", "Am9", "D9", "Gmaj7", "Cmaj7"],
      "meter": "4/4",
      "tempo": [76, 92],
      "scale": "dorian",
      "roles": {
        "lead": ["voice"],
        "harmony": ["rhodes", "guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm9", "G13", "Cmaj9", "A7"],
        "verse": ["Am9", "D9", "Gmaj7", "Cmaj7"],
        "outro": ["Cmaj7", "Dm9"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "bridge", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "alternative R&B fragmented beat and textural vocal voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "alternative R&B fragmented beat and textural vocal voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alternative R&B fragmented beat and textural vocal rhodes accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "alternative R&B fragmented beat and textural vocal rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alternative R&B fragmented beat and textural vocal guitar accompaniment", "role": "harmony", "onsets": [0.5, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "alternative R&B fragmented beat and textural vocal guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alternative R&B fragmented beat and textural vocal low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "alternative R&B fragmented beat and textural vocal bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "alternative R&B fragmented beat and textural vocal kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "alternative R&B fragmented beat and textural vocal drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "vibrato", "accent", "staccato"],
        "rhodes": ["legato", "ghost", "accent", "staccato", "tenuto"],
        "guitar": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
        "bass": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "vibrato", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["legato", "ghost", "accent", "staccato", "tenuto"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "vibrato", "slide", "short-chord-stab", "legato-single-note", "accent", "staccato"],
          "defaultTechnique": "legato",
          "variantId": "solid-electric"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slide", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
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
