import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "jazz",
  "name": "Jazz",
  "family": "African American / United States",
  "color": "#2b21d9",
  "description": "Jazz is an independent musical world. African American / United States idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Hard Bop",
  "meter": "4/4",
  "tempo": [142, 158],
  "instruments": ["trumpet", "tenor-sax", "piano", "upright-bass", "drums", "alto-sax", "trombone", "guitar", "violin", "rhodes", "synth", "bass"],
  "roles": {
    "lead": ["trumpet", "tenor-sax"],
    "harmony": ["piano"],
    "bass": ["upright-bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["dorian", "chromatic"],
  "chordQualities": ["Fm7", "Bbm7", "C7#9", "Ab7", "Db7", "Eb7", "Abmaj7", "Bb7", "Ebmaj7", "C7b9", "Abm7", "Gbmaj7", "Am7", "D7", "Gmaj7", "Dm7", "G7", "Cmaj7", "A7b9", "Fmaj7", "Em7", "A7", "Ebm7", "Dm9", "A7alt", "Am6", "E7", "Dm6", "C#dim", "F7", "F", "B", "Eb", "A", "D", "Ab", "Db", "G"],
  "harmonicRhythm": "bar",
  "cadences": ["A7b9"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["hard bop blues horn head and ride comping", "bebop chromatic head with walking bass", "cool restrained horn with brushed comping", "modal long Dorian vamp and quartal space", "post bop angular head and shifting harmonic color", "big band brass reed call and ensemble shout", "gypsy jazz la pompe rhythm and guitar run", "fusion electric bass ostinato and straight-eighth solo", "free jazz fragmented phrases and collective response"],
  "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "hard-bop",
      "name": "Hard Bop",
      "description": "Hard Bop: hard bop blues horn head and ride comping. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Art Blakey explosive drum press-roll erupting into soulful minor-blues horn unison", "hard bop blues horn head and ride comping"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "heavy gospel and blues chord inflections", "Art Blakey driving press-rolls and thunderous hi-hat snaps on 2 and 4", "earthy memorable horn themes", "funky walking basslines", "accent", "tenuto", "ghost", "roll", "open"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [142, 158],
      "scale": "dorian",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Fm7", "Bbm7", "C7#9", "Fm7"],
        "head": ["Fm7", "Bbm7", "C7#9", "Fm7", "Ab7", "Db7", "C7#9", "Fm7"],
        "solo": ["Fm7", "Bbm7", "C7#9", "Fm7", "Bbm7", "Eb7", "Abmaj7", "C7#9"],
        "coda": ["Bbm7", "C7#9", "Fm7", "Fm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "hard bop blues horn head and ride comping trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hard bop blues horn head and ride comping trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hard bop blues horn head and ride comping tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "hard bop blues horn head and ride comping tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hard bop blues horn head and ride comping piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "hard bop blues horn head and ride comping piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hard bop blues horn head and ride comping low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "hard bop blues horn head and ride comping upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "hard bop blues horn head and ride comping kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "hard bop blues horn head and ride comping drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "roll", "accent", "open"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "roll", "accent", "open"],
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
      "id": "bebop",
      "name": "Bebop",
      "description": "Bebop: bebop chromatic head with walking bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Rapid chromatic enclosure lick landing on #11 upper chord extension with ride cymbal drive", "bebop chromatic head with walking bass"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "lightning-fast chromatic approach notes and enclosures", "extended upper chord tones (9ths, 11ths, b13ths, #11ths)", "snappy ii-V-I substitutions and tritone subs", "unison trumpet/alto horn heads and blistering solos", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [182, 198],
      "scale": "dorian",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Fm7", "Bb7", "Ebmaj7", "C7b9"],
        "head": ["Fm7", "Bb7", "Ebmaj7", "C7b9", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"],
        "bridge": ["Abm7", "Db7", "Gbmaj7", "Gbmaj7", "Am7", "D7", "Gmaj7", "C7b9"],
        "coda": ["Fm7", "Bb7", "Ebmaj7", "Ebmaj7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bebop chromatic head with walking bass trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bebop chromatic head with walking bass trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bebop chromatic head with walking bass tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bebop chromatic head with walking bass tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bebop chromatic head with walking bass piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bebop chromatic head with walking bass piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bebop chromatic head with walking bass low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "bebop chromatic head with walking bass upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bebop chromatic head with walking bass kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "bebop chromatic head with walking bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "cool",
      "name": "Cool",
      "description": "Cool: cool restrained horn with brushed comping. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Miles Davis Harmon-muted trumpet line whispering gently over brushed snare and cool bass", "cool restrained horn with brushed comping"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "subtle breathy tone with minimal vibrato (Miles Harmon mute)", "intricate contrapuntal horn arrangements", "relaxed laid-back swing feel", "understated lyrical melodic purity", "ghost", "accent", "tenuto", "open", "roll"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "dorian",
      "roles": {
        "lead": ["alto-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7b9"],
        "head": ["Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Cmaj7"],
        "bridge": ["Fmaj7", "Fm7", "Em7", "A7", "Dm7", "D7", "G7", "A7b9"],
        "coda": ["Dm7", "G7", "Cmaj7", "Cmaj7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "alto-sax", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "cool restrained horn with brushed comping alto-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["alto-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "cool restrained horn with brushed comping alto-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["alto-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cool restrained horn with brushed comping piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "cool restrained horn with brushed comping piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cool restrained horn with brushed comping low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "cool restrained horn with brushed comping upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "cool restrained horn with brushed comping kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "cool restrained horn with brushed comping drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "alto-sax": ["staccato", "legato", "ghost", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "alto-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "ghost", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "modal",
      "name": "Modal",
      "description": "Modal: modal long Dorian vamp and quartal space. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modal long Dorian vamp and quartal space"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Dm7", "Ebm7"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "dorian",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "head": ["Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Dm7", "Dm7", "Dm7", "Dm7"],
        "solo": ["Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Dm7", "Dm7", "Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "pedal",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "modal long Dorian vamp and quartal space trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modal long Dorian vamp and quartal space trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modal long Dorian vamp and quartal space tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "modal long Dorian vamp and quartal space tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modal long Dorian vamp and quartal space piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "modal long Dorian vamp and quartal space piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modal long Dorian vamp and quartal space low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "modal long Dorian vamp and quartal space upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "modal long Dorian vamp and quartal space kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "modal long Dorian vamp and quartal space drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "post-bop",
      "name": "Post-Bop",
      "description": "Post-Bop: post bop angular head and shifting harmonic color. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["post bop angular head and shifting harmonic color"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Dm9", "Ebmaj7", "Fmaj7", "G7", "Fm7", "Bb7", "A7alt"],
      "meter": "4/4",
      "tempo": [136, 152],
      "scale": "dorian",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "head": ["Dm9", "Ebmaj7", "Fmaj7", "G7"],
        "solo": ["Fm7", "Bb7", "Ebmaj7", "A7alt"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "post bop angular head and shifting harmonic color trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "post bop angular head and shifting harmonic color trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "post bop angular head and shifting harmonic color tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "post bop angular head and shifting harmonic color tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "post bop angular head and shifting harmonic color piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "post bop angular head and shifting harmonic color piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "post bop angular head and shifting harmonic color low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "post bop angular head and shifting harmonic color upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "post bop angular head and shifting harmonic color kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "post bop angular head and shifting harmonic color drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "big-band",
      "name": "Big Band",
      "description": "Big Band: big band brass reed call and ensemble shout. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["big band brass reed call and ensemble shout"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "accent", "tenuto", "ghost", "legato-single-note", "open", "roll"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [148, 164],
      "scale": "dorian",
      "roles": {
        "lead": ["trumpet", "trombone", "alto-sax", "tenor-sax"],
        "harmony": ["piano", "guitar"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "head": ["Dm7", "G7", "Cmaj7", "A7"],
        "solo": ["Fm7", "Bb7", "Ebmaj7", "A7b9"],
        "tag": ["A7b9", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "sax soli", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "shout chorus", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "big band brass reed call and ensemble shout trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "big band brass reed call and ensemble shout trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout trombone statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "big band brass reed call and ensemble shout trombone cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trombone"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout alto-sax statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["alto-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "big band brass reed call and ensemble shout alto-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["alto-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "big band brass reed call and ensemble shout tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "big band brass reed call and ensemble shout piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "big band brass reed call and ensemble shout guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "big band brass reed call and ensemble shout upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "big band brass reed call and ensemble shout kit", "role": "percussion", "onsets": [0, 0, 1, 1.5, 1.6666666666666665, 2, 2, 3, 3.6666666666666665, 3.75], "instruments": ["drums"], "hits": ["ride", "kick", "ride", "snare", "ride", "ride", "kick", "ride", "ride", "snare"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85]},
        {"name": "big band brass reed call and ensemble shout drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "trombone": ["staccato", "legato", "accent"],
        "alto-sax": ["staccato", "legato", "ghost", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "guitar": ["staccato", "legato", "vibrato", "comping", "legato-single-note", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "alto-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "ghost", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
          "peakSectionHeadroomDb": 4
        }
      }
    },
    {
      "id": "gypsy-jazz",
      "name": "Gypsy Jazz",
      "description": "Gypsy Jazz: gypsy jazz la pompe rhythm and guitar run. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Crisp percussive La Pompe guitar chop driving blinding chromatic Django acoustic guitar arpeggio", "gypsy jazz la pompe rhythm and guitar run"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "\"La Pompe\" percussive acoustic guitar rhythm strumming on 2 and 4", "virtuosic chromatic Selmer acoustic guitar runs", "sweet singing Grappelli-style violin glissandi and vibrato", "driving bass pulse without drums", "strum", "legato-single-note", "accent", "folk-vibrato", "ghost", "tenuto"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [168, 184],
      "scale": "dorian",
      "roles": {
        "lead": ["guitar", "violin"],
        "harmony": ["guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am6", "E7", "Am6", "E7"],
        "head": ["Am6", "Am6", "Dm6", "Dm6", "E7", "E7", "Am6", "E7"],
        "bridge": ["Cmaj7", "C#dim", "Dm7", "G7", "Cmaj7", "F7", "E7", "E7"],
        "coda": ["Dm6", "E7", "Am6", "Am6"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "gypsy jazz la pompe rhythm and guitar run guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gypsy jazz la pompe rhythm and guitar run guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gypsy jazz la pompe rhythm and guitar run violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "gypsy jazz la pompe rhythm and guitar run violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gypsy jazz la pompe rhythm and guitar run guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "gypsy jazz la pompe rhythm and guitar run guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "gypsy jazz la pompe rhythm and guitar run low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "gypsy jazz la pompe rhythm and guitar run upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "guitar": ["staccato", "legato", "vibrato", "strum", "comping", "legato-single-note", "accent"],
        "violin": ["staccato", "legato", "vibrato", "folk-vibrato", "accent"],
        "upright-bass": ["staccato", "legato", "ghost", "accent", "tenuto"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "strum", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "steel-acoustic"
        },
        "violin:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "folk-vibrato", "accent"],
          "defaultTechnique": "staccato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "strum", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "steel-acoustic"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
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
      "id": "jazz-fusion",
      "name": "Jazz Fusion",
      "description": "Jazz Fusion: fusion electric bass ostinato and straight-eighth solo. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["fusion electric bass ostinato and straight-eighth solo"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "legato-single-note", "accent", "tenuto", "ghost", "open", "roll"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Fm7", "Bb7", "Ebmaj7", "A7b9"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "dorian",
      "roles": {
        "lead": ["guitar", "tenor-sax"],
        "harmony": ["rhodes", "synth"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "head": ["Dm7", "G7", "Cmaj7", "A7"],
        "trading": ["Fm7", "Bb7", "Ebmaj7", "A7b9"],
        "tag": ["A7b9", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "head", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "guitar", "soloMode": "accompanied"},
        {"label": "trading", "bars": 8},
        {"label": "head", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "fusion electric bass ostinato and straight-eighth solo guitar statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion electric bass ostinato and straight-eighth solo guitar cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion electric bass ostinato and straight-eighth solo tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "fusion electric bass ostinato and straight-eighth solo tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion electric bass ostinato and straight-eighth solo rhodes accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["rhodes"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion electric bass ostinato and straight-eighth solo rhodes cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["rhodes"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion electric bass ostinato and straight-eighth solo synth accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "fusion electric bass ostinato and straight-eighth solo synth cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion electric bass ostinato and straight-eighth solo low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "fusion electric bass ostinato and straight-eighth solo bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "fusion electric bass ostinato and straight-eighth solo kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "fusion electric bass ostinato and straight-eighth solo drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "guitar": ["staccato", "legato", "vibrato", "comping", "legato-single-note", "accent"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "rhodes": ["staccato", "legato", "ghost", "accent", "tenuto"],
        "synth": ["staccato", "legato", "vibrato", "accent"],
        "bass": ["staccato", "legato", "ghost-note", "ghost", "accent"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "guitar:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "comping", "legato-single-note", "accent"],
          "defaultTechnique": "staccato",
          "variantId": "solid-electric"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "rhodes:harmony": {
          "allowedTechniques": ["staccato", "legato", "ghost", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent"],
          "defaultTechnique": "staccato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost-note", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
      "id": "free-jazz",
      "name": "Free Jazz",
      "description": "Free Jazz: free jazz fragmented phrases and collective response. Melodic and rhythmic study over a modal center; chord symbols are playback anchors, not a Western chord progression.",
      "patterns": ["High multiphonic saxophone shriek erupting over frantic multidirectional free drum flurry", "free jazz fragmented phrases and collective response"],
      "techniques": ["legato", "staccato", "chromatic-approach", "walking", "comping", "ghost-note", "brush", "vibrato", "abandonment of preset chord changes and fixed meters", "overblowing, multiphonics, and screeches on horns", "intense collective improvisation and energy waves", "free harmonic and microtonal exploration", "accent", "tenuto", "ghost", "harmonic", "open", "roll"],
      "harmony": ["D5", "Eb5"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "chromatic",
      "roles": {
        "lead": ["trumpet", "tenor-sax"],
        "harmony": ["piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "head": ["F", "B", "Eb", "A", "D", "Ab", "Db", "G"]
      },
      "requiresChords": false,
      "harmonicRhythm": "static",
      "harmonyModel": "modal-drone",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "opening", "bars": 4},
        {"label": "collective", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "trumpet", "soloMode": "accompanied"},
        {"label": "collective", "bars": 8},
        {"label": "closing", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "free jazz fragmented phrases and collective response trumpet statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [1.5, 1.5, 1.5], "articulation": "legato"},
        {"name": "free jazz fragmented phrases and collective response trumpet cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["trumpet"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free jazz fragmented phrases and collective response tenor-sax statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["tenor-sax"], "cycleLength": 1, "durations": [1.5, 1.25, 0.5], "articulation": "legato"},
        {"name": "free jazz fragmented phrases and collective response tenor-sax cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["tenor-sax"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free jazz fragmented phrases and collective response piano accompaniment", "role": "harmony", "onsets": [0, 2.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4], "articulation": "staccato"},
        {"name": "free jazz fragmented phrases and collective response piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free jazz fragmented phrases and collective response low anchor", "role": "bass", "onsets": [0], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2]},
        {"name": "free jazz fragmented phrases and collective response upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "free jazz fragmented phrases and collective response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "free jazz fragmented phrases and collective response drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "trumpet": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "tenor-sax": ["staccato", "legato", "vibrato", "accent", "tenuto"],
        "piano": ["staccato", "legato", "accent", "tenuto"],
        "upright-bass": ["staccato", "legato", "ghost", "harmonic", "accent", "tenuto"],
        "drums": ["ghost", "staccato", "accent", "open", "roll"]
      },
      "instrumentDialects": {
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "tenor-sax:lead": {
          "allowedTechniques": ["staccato", "legato", "vibrato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost", "harmonic", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "staccato", "accent", "open", "roll"],
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
