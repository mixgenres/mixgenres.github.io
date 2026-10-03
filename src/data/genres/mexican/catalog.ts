import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "mexican",
  "name": "Mexican",
  "family": "Mexico",
  "color": "#0195df",
  "description": "Mexican is an independent musical world. Mexico idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Mariachi",
  "meter": "3/4",
  "tempo": [104, 120],
  "instruments": ["voice", "trumpet", "violin", "guitar", "vihuela", "guitarron", "accordion", "bajo-sexto", "bass", "drums", "clarinet", "trombone", "tuba", "harp", "jarana", "foot-stomp", "bombo"],
  "roles": {
    "lead": ["voice", "trumpet", "violin"],
    "harmony": ["guitar", "vihuela"],
    "bass": ["guitarron"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["G", "C", "D7", "Em", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["G"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["mariachi violin trumpet answer and vihuela strum", "ranchera vocal phrase and guitarron waltz", "norteño accordion and bajo sexto polka", "banda brass response and tuba bass dance", "son jarocho sesquialtera jarana and harp exchange", "son huasteco violin flourishes and vocal falsetto", "corrido narrative verse and accordion turnaround", "tierra caliente fiddle and guitar dance", "conjunto accordion polka and bajo sexto", "bolero ranchero intimate guitar and trumpet answer"],
  "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "mariachi",
      "name": "Mariachi",
      "description": "Mariachi: mariachi violin trumpet answer and vihuela strum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["mariachi violin trumpet answer and vihuela strum"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "3/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "mariachi violin trumpet answer and vihuela strum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum trumpet statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum trumpet cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "mariachi violin trumpet answer and vihuela strum violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum guitar accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "mariachi violin trumpet answer and vihuela strum guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum vihuela accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "mariachi violin trumpet answer and vihuela strum vihuela cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "mariachi violin trumpet answer and vihuela strum low anchor", "role": "bass", "onsets": [0], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "mariachi violin trumpet answer and vihuela strum guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
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
      "id": "ranchera",
      "name": "Ranchera",
      "description": "Ranchera: ranchera vocal phrase and guitarron waltz. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["ranchera vocal phrase and guitarron waltz"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "3/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ranchera vocal phrase and guitarron waltz voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz trumpet statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz trumpet cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "ranchera vocal phrase and guitarron waltz violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz guitar accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ranchera vocal phrase and guitarron waltz guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz vihuela accompaniment", "role": "harmony", "onsets": [1, 2], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "ranchera vocal phrase and guitarron waltz vihuela cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "ranchera vocal phrase and guitarron waltz low anchor", "role": "bass", "onsets": [0], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "ranchera vocal phrase and guitarron waltz guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
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
      "id": "norteno",
      "name": "Norteño",
      "description": "Norteño: norteño accordion and bajo sexto polka. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["norteño accordion and bajo sexto polka"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "norteño accordion and bajo sexto polka voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "norteño accordion and bajo sexto polka voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka accordion statement", "role": "lead", "onsets": [0], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "norteño accordion and bajo sexto polka accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "norteño accordion and bajo sexto polka bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "norteño accordion and bajo sexto polka bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "norteño accordion and bajo sexto polka kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "norteño accordion and bajo sexto polka drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
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
      "id": "banda",
      "name": "Banda",
      "description": "Banda: banda brass response and tuba bass dance. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["banda brass response and tuba bass dance"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [116, 132],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "clarinet"],
        "harmony": ["trombone"],
        "bass": ["tuba"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "banda brass response and tuba bass dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance trumpet statement", "role": "lead", "onsets": [0], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance trumpet cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance clarinet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["clarinet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "banda brass response and tuba bass dance clarinet cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["clarinet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance trombone accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "banda brass response and tuba bass dance trombone cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance low anchor", "role": "bass", "onsets": [0], "instruments": ["tuba"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "banda brass response and tuba bass dance tuba cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["tuba"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "banda brass response and tuba bass dance kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "banda brass response and tuba bass dance drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "clarinet": ["vibrato", "trill", "accent", "staccato", "legato", "tenuto"],
        "trombone": ["accent", "staccato", "legato"],
        "tuba": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "clarinet:lead": {
          "allowedTechniques": ["vibrato", "trill", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "trombone:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "tuba:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
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
      "id": "son-jarocho",
      "name": "Son Jarocho",
      "description": "Son Jarocho: son jarocho sesquialtera jarana and harp exchange. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["son jarocho sesquialtera jarana and harp exchange"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "ghost"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["voice", "harp", "requinto"],
        "harmony": ["jarana"],
        "bass": ["guitarron"],
        "percussion": ["foot-stomp"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son jarocho sesquialtera jarana and harp exchange voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange harp statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["harp"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange harp cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["harp"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange jarana accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["jarana"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son jarocho sesquialtera jarana and harp exchange jarana cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["jarana"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "son jarocho sesquialtera jarana and harp exchange guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son jarocho sesquialtera jarana and harp exchange foot-stomp pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["foot-stomp"], "cycleLength": 1, "articulation": "accent"},
        {"name": "son jarocho sesquialtera jarana and harp exchange foot-stomp cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["foot-stomp"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "harp": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "jarana": ["accent", "staccato", "legato", "tenuto"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"],
        "foot-stomp": ["accent", "ghost"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "harp:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "jarana:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "foot-stomp:percussion": {
          "allowedTechniques": ["accent", "ghost"],
          "defaultTechnique": "accent"
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
      "id": "son-huasteco",
      "name": "Son Huasteco",
      "description": "Son Huasteco: son huasteco violin flourishes and vocal falsetto. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["son huasteco violin flourishes and vocal falsetto"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "drone-double-stop", "folk-vibrato", "muted-strum", "tenuto"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar", "jarana"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "son huasteco violin flourishes and vocal falsetto voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "son huasteco violin flourishes and vocal falsetto voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "son huasteco violin flourishes and vocal falsetto violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son huasteco violin flourishes and vocal falsetto guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "son huasteco violin flourishes and vocal falsetto jarana accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["jarana"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "son huasteco violin flourishes and vocal falsetto jarana cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["jarana"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "jarana": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "jarana:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
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
      "id": "corrido",
      "name": "Corrido",
      "description": "Corrido: corrido narrative verse and accordion turnaround. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["corrido narrative verse and accordion turnaround"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "corrido narrative verse and accordion turnaround voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "corrido narrative verse and accordion turnaround voice cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround accordion statement", "role": "lead", "onsets": [0], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45], "articulation": "legato"},
        {"name": "corrido narrative verse and accordion turnaround accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "corrido narrative verse and accordion turnaround bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "corrido narrative verse and accordion turnaround low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "corrido narrative verse and accordion turnaround bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
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
      "id": "tierra-caliente",
      "name": "Tierra Caliente",
      "description": "Tierra Caliente: tierra caliente fiddle and guitar dance. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["tierra caliente fiddle and guitar dance"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "drone-double-stop", "folk-vibrato", "muted-strum", "tenuto", "ghost", "roll", "open"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "6/8",
      "tempo": [124, 140],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar"],
        "bass": ["guitarron"],
        "percussion": ["bombo"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "tierra caliente fiddle and guitar dance voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "tierra caliente fiddle and guitar dance voice cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance violin statement", "role": "lead", "onsets": [2, 2.75], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.25], "articulation": "legato"},
        {"name": "tierra caliente fiddle and guitar dance violin cadence fill", "role": "lead", "onsets": [2.0, 2.5, 2.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance guitar accompaniment", "role": "harmony", "onsets": [0.5, 1, 2, 2.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "tierra caliente fiddle and guitar dance guitar cadence fill", "role": "harmony", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance low anchor", "role": "bass", "onsets": [0, 1.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "tierra caliente fiddle and guitar dance guitarron cadence fill", "role": "bass", "onsets": [2.0, 2.5, 2.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "tierra caliente fiddle and guitar dance bombo pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.5, 2, 2.5], "instruments": ["bombo"], "cycleLength": 1, "articulation": "accent"},
        {"name": "tierra caliente fiddle and guitar dance bombo cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75], "instruments": ["bombo"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"],
        "bombo": ["accent", "ghost", "roll", "open"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "bombo:percussion": {
          "allowedTechniques": ["accent", "ghost", "roll", "open"],
          "defaultTechnique": "accent"
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
      "id": "conjunto",
      "name": "Conjunto",
      "description": "Conjunto: conjunto accordion polka and bajo sexto. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["conjunto accordion polka and bajo sexto"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "muted-strum", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "2/4",
      "tempo": [112, 128],
      "scale": "major",
      "roles": {
        "lead": ["accordion"],
        "harmony": ["bajo-sexto"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "conjunto accordion polka and bajo sexto accordion statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["accordion"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "conjunto accordion polka and bajo sexto accordion cadence fill", "role": "lead", "onsets": [1.0, 1.5, 1.75], "instruments": ["accordion"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto bajo-sexto accompaniment", "role": "harmony", "onsets": [0.5, 1.5], "instruments": ["bajo-sexto"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "conjunto accordion polka and bajo sexto bajo-sexto cadence fill", "role": "harmony", "onsets": [1.0, 1.5, 1.75], "instruments": ["bajo-sexto"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto low anchor", "role": "bass", "onsets": [0], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6]},
        {"name": "conjunto accordion polka and bajo sexto bass cadence fill", "role": "bass", "onsets": [1.0, 1.5, 1.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "conjunto accordion polka and bajo sexto kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "conjunto accordion polka and bajo sexto drums cadence fill", "role": "percussion", "onsets": [1.0, 1.5, 1.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "accordion": ["tremolo", "accent", "staccato", "legato", "tenuto"],
        "bajo-sexto": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "bass": ["accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "accordion:lead": {
          "allowedTechniques": ["tremolo", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "tremolo"
        },
        "bajo-sexto:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "drums:percussion": {
          "allowedTechniques": ["accent", "ghost", "open", "roll"],
          "defaultTechnique": "accent"
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
      "id": "bolero-ranchero",
      "name": "Bolero Ranchero",
      "description": "Bolero Ranchero: bolero ranchero intimate guitar and trumpet answer. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["bolero ranchero intimate guitar and trumpet answer"],
      "techniques": ["strum", "tremolo", "vibrato", "double-stop", "trill", "melisma", "arpeggio", "accent", "staccato", "legato", "tenuto", "drone-double-stop", "folk-vibrato", "muted-strum"],
      "harmony": ["G", "C", "D7", "Em", "Am"],
      "meter": "4/4",
      "tempo": [72, 88],
      "scale": "major",
      "roles": {
        "lead": ["voice", "trumpet", "violin"],
        "harmony": ["guitar", "vihuela"],
        "bass": ["guitarron"]
      },
      "progressions": {
        "introduccion": ["G", "C", "D7", "G"],
        "copla": ["Em", "Am", "D7", "G"],
        "coda": ["G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "introduccion", "bars": 4},
        {"label": "copla", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "copla", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "estribillo", "bars": 8},
        {"label": "coda", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bolero ranchero intimate guitar and trumpet answer voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer violin statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer vihuela accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["vihuela"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bolero ranchero intimate guitar and trumpet answer vihuela cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["vihuela"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bolero ranchero intimate guitar and trumpet answer low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["guitarron"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "bolero ranchero intimate guitar and trumpet answer guitarron cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitarron"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["vibrato", "accent", "staccato", "legato"],
        "trumpet": ["vibrato", "accent", "staccato", "legato", "tenuto"],
        "violin": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
        "guitar": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
        "vihuela": ["accent", "staccato", "legato"],
        "guitarron": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "vibrato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["vibrato", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "vibrato"
        },
        "violin:lead": {
          "allowedTechniques": ["tremolo", "vibrato", "drone-double-stop", "double-stop", "folk-vibrato", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo"
        },
        "guitar:harmony": {
          "allowedTechniques": ["tremolo", "vibrato", "strum", "arpeggio", "double-stop", "muted-strum", "accent", "staccato", "legato"],
          "defaultTechnique": "tremolo",
          "variantId": "nylon"
        },
        "vihuela:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "guitarron:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
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
