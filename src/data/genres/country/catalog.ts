import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "country",
  "name": "Country",
  "family": "United States / Appalachia",
  "color": "#e909c2",
  "description": "Country is an independent musical world. United States / Appalachia idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Honky-Tonk",
  "meter": "4/4",
  "tempo": [100, 116],
  "instruments": ["voice", "pedal-steel", "guitar", "bass", "drums", "violin", "banjo", "mandolin", "upright-bass", "piano", "resonator-guitar"],
  "roles": {
    "lead": ["voice", "pedal-steel"],
    "harmony": ["guitar"],
    "bass": ["bass"],
    "percussion": ["drums"]
  },
  "pitchSystem": "12-tet",
  "scales": ["major"],
  "chordQualities": ["C", "F", "G7", "G", "D", "Em", "E", "A", "B7", "E7", "A7", "D7", "G#dim", "Am7", "C#dim", "Am"],
  "harmonicRhythm": "bar",
  "cadences": ["D7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["honky-tonk boom chick and steel answers", "bluegrass banjo roll and mandolin chop", "Bakersfield twang guitar and crisp backbeat", "outlaw low guitar riff and restrained snare", "Western Swing fiddle line and walking bass", "Americana fingerpicked verse and fiddle response", "country pop chorus lift and acoustic strum"],
  "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "honky-tonk",
      "name": "Honky-Tonk",
      "description": "Honky-Tonk: honky-tonk boom chick and steel answers. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Weeping steel guitar slide leading into twin fiddle turnaround over two-step bass", "honky-tonk boom chick and steel answers"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "twin fiddle leads", "steely weeping slide licks", "honky-tonk upright piano tinkle", "unflinching heartbreak lyricism", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["C", "F", "G7", "C"],
        "verse": ["C", "C", "F", "C", "C", "C", "G7", "G7", "C", "C", "F", "C", "C", "G7", "C", "C"],
        "coda": ["F", "G7", "C", "C"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "honky-tonk boom chick and steel answers voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "honky-tonk boom chick and steel answers voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "honky-tonk boom chick and steel answers pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "honky-tonk boom chick and steel answers pedal-steel cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pedal-steel"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "honky-tonk boom chick and steel answers guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "honky-tonk boom chick and steel answers guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "honky-tonk boom chick and steel answers low anchor", "role": "bass", "onsets": [0, 2], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "honky-tonk boom chick and steel answers bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "honky-tonk boom chick and steel answers kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "honky-tonk boom chick and steel answers drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
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
      "id": "bluegrass",
      "name": "Bluegrass",
      "description": "Bluegrass: bluegrass banjo roll and mandolin chop. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Rapid 3-finger banjo roll erupting into syncopated mandolin chop on the backbeat", "bluegrass banjo roll and mandolin chop"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "three-finger Scruggs banjo rolls", "percussive mandolin backbeat chop", "high lonesome tenor harmonies", "blistering acoustic solo trades", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [140, 156],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin", "banjo"],
        "harmony": ["guitar", "mandolin"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["G", "C", "D", "G"],
        "verse": ["G", "G", "C", "G", "G", "Em", "D", "G"],
        "chorus": ["C", "G", "D", "G", "C", "G", "D", "G"],
        "solo": ["G", "C", "D", "G"],
        "coda": ["C", "D", "G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "banjo break", "bars": 8, "soloInstrumentId": "banjo", "soloMode": "accompanied"},
        {"label": "verse", "bars": 8},
        {"label": "fiddle break", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "refrain", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "bluegrass banjo roll and mandolin chop voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass banjo roll and mandolin chop voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bluegrass banjo roll and mandolin chop violin statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass banjo roll and mandolin chop violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bluegrass banjo roll and mandolin chop banjo statement", "role": "lead", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["banjo"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "bluegrass banjo roll and mandolin chop banjo cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["banjo"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bluegrass banjo roll and mandolin chop guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bluegrass banjo roll and mandolin chop guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bluegrass banjo roll and mandolin chop mandolin accompaniment", "role": "harmony", "onsets": [0, 1.5, 3], "instruments": ["mandolin"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "bluegrass banjo roll and mandolin chop mandolin cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["mandolin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "bluegrass banjo roll and mandolin chop low anchor", "role": "bass", "onsets": [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5]},
        {"name": "bluegrass banjo roll and mandolin chop upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "banjo": ["slide", "accent", "staccato", "legato", "tenuto"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "mandolin": ["accent", "staccato", "legato"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "banjo:lead": {
          "allowedTechniques": ["slide", "accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "slide"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "mandolin:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
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
      "id": "bakersfield",
      "name": "Bakersfield",
      "description": "Bakersfield: Bakersfield twang guitar and crisp backbeat. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Treble-heavy Telecaster twang lick backed by snappy drum rimshots", "Bakersfield twang guitar and crisp backbeat"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "snappy treble-boosted Fender Telecaster twang", "driving rock-influenced drum backbeat", "pedal steel harmony fills", "punchy straightforward vocal delivery", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["E", "A", "B7", "E"],
        "verse": ["E", "E", "A", "E", "E", "E", "B7", "B7", "E", "E", "A", "E", "E", "B7", "E", "E"],
        "chorus": ["A", "A", "E", "E", "B7", "B7", "E", "E"],
        "coda": ["A", "B7", "E", "E"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Bakersfield twang guitar and crisp backbeat voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bakersfield twang guitar and crisp backbeat voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bakersfield twang guitar and crisp backbeat pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bakersfield twang guitar and crisp backbeat pedal-steel cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pedal-steel"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bakersfield twang guitar and crisp backbeat guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bakersfield twang guitar and crisp backbeat guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bakersfield twang guitar and crisp backbeat low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "Bakersfield twang guitar and crisp backbeat bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Bakersfield twang guitar and crisp backbeat kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Bakersfield twang guitar and crisp backbeat drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
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
      "id": "outlaw",
      "name": "Outlaw",
      "description": "Outlaw: outlaw low guitar riff and restrained snare. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Phaser-soaked electric guitar chug locked with driving four-on-the-floor kick", "outlaw low guitar riff and restrained snare"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "driving four-on-the-floor rock beat", "phaser-drenched Telecaster rhythm", "nylon-string trigger acoustic leads", "rebellious narrative lyrics", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["A", "D", "E", "A"],
        "verse": ["A", "A", "D", "A", "A", "A", "E", "A"],
        "chorus": ["D", "D", "A", "A", "E", "E", "A", "A"],
        "coda": ["D", "E", "A", "A"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "outlaw low guitar riff and restrained snare voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "outlaw low guitar riff and restrained snare voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "outlaw low guitar riff and restrained snare pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "outlaw low guitar riff and restrained snare pedal-steel cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pedal-steel"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "outlaw low guitar riff and restrained snare guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "outlaw low guitar riff and restrained snare guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "outlaw low guitar riff and restrained snare low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "outlaw low guitar riff and restrained snare bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "outlaw low guitar riff and restrained snare kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "outlaw low guitar riff and restrained snare drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
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
      "id": "western-swing",
      "name": "Western Swing",
      "description": "Western Swing: Western Swing fiddle line and walking bass. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Triple fiddle swinging harmonization over walking bass and hot steel guitar riff", "Western Swing fiddle line and walking bass"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "twin and triple fiddle jazz harmonies", "swinging lap steel improvisation", "jazz chord substitutions (diminished/augmented)", "driving 4-beat swing rhythm", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [128, 144],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin", "pedal-steel"],
        "harmony": ["guitar", "piano"],
        "bass": ["upright-bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["G", "E7", "A7", "D7"],
        "verse": ["G", "G#dim", "Am7", "D7", "G", "G#dim", "Am7", "D7", "G", "G7", "C", "C#dim", "G", "E7", "A7", "D7"],
        "chorus": ["C", "C#dim", "G", "E7", "A7", "D7", "G", "G"],
        "coda": ["G", "E7", "A7", "D7", "G", "G"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "walking",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "chorus", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "solo", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 60, "anticipationOffsetSteps": 0, "microtimingFeel": "swung", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Western Swing fiddle line and walking bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass pedal-steel statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Western Swing fiddle line and walking bass pedal-steel cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pedal-steel"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass guitar accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Western Swing fiddle line and walking bass guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass piano accompaniment", "role": "harmony", "onsets": [0.5, 1.6666666666666665, 3], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Western Swing fiddle line and walking bass piano cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["piano"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass low anchor", "role": "bass", "onsets": [0, 1, 2, 3], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6]},
        {"name": "Western Swing fiddle line and walking bass upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Western Swing fiddle line and walking bass kit", "role": "percussion", "onsets": [0, 0, 0.6666666666666666, 1, 1, 1.6666666666666665, 2, 2, 2.6666666666666665, 3, 3, 3.6666666666666665], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "Western Swing fiddle line and walking bass drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "piano": ["accent", "staccato", "legato", "tenuto"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "piano:harmony": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
          "defaultTechnique": "accent"
        },
        "upright-bass:bass": {
          "allowedTechniques": ["accent", "staccato", "legato", "tenuto"],
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
      "id": "americana",
      "name": "Americana",
      "description": "Americana: Americana fingerpicked verse and fiddle response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Warm fingerpicked acoustic guitar paired with plaintive close-harmony vocals", "Americana fingerpicked verse and fiddle response"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "intimate acoustic songwriting", "rich close-harmony vocals", "organic analog production", "literary introspective lyricism", "accent", "staccato", "legato", "vibrato", "drone-double-stop", "ornamented-slide", "tenuto"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "major",
      "roles": {
        "lead": ["voice", "violin"],
        "harmony": ["guitar", "resonator-guitar"],
        "bass": ["upright-bass"]
      },
      "progressions": {
        "intro": ["Am", "F", "C", "G"],
        "verse": ["Am", "F", "C", "G", "Am", "F", "C", "G"],
        "chorus": ["F", "C", "G", "Am", "F", "C", "G", "G"],
        "coda": ["F", "G", "C", "C"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "violin", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Americana fingerpicked verse and fiddle response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Americana fingerpicked verse and fiddle response voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Americana fingerpicked verse and fiddle response violin statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["violin"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Americana fingerpicked verse and fiddle response violin cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["violin"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Americana fingerpicked verse and fiddle response guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Americana fingerpicked verse and fiddle response guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Americana fingerpicked verse and fiddle response resonator-guitar accompaniment", "role": "harmony", "onsets": [0, 0.75, 1.5, 2.5, 3.25], "instruments": ["resonator-guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Americana fingerpicked verse and fiddle response resonator-guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["resonator-guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "Americana fingerpicked verse and fiddle response low anchor", "role": "bass", "onsets": [0, 1.5, 2, 3.5], "instruments": ["upright-bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.5]},
        {"name": "Americana fingerpicked verse and fiddle response upright-bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["upright-bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "violin": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "resonator-guitar": ["slide", "fingerstyle", "double-stop"],
        "upright-bass": ["accent", "staccato", "legato", "tenuto"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "violin:lead": {
          "allowedTechniques": ["shuffle-bow", "drone-double-stop", "ornamented-slide", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "shuffle-bow"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "resonator-guitar:harmony": {
          "allowedTechniques": ["slide", "fingerstyle", "double-stop"],
          "defaultTechnique": "slide"
        },
        "upright-bass:bass": {
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
      "id": "country-pop",
      "name": "Country Pop",
      "description": "Country Pop: country pop chorus lift and acoustic strum. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["country pop chorus lift and acoustic strum"],
      "techniques": ["fingerstyle", "double-stop", "slide", "hammer-on", "pull-off", "shuffle-bow", "brush", "accent", "staccato", "legato", "vibrato", "ghost", "open", "roll"],
      "harmony": ["G", "C", "D7", "Em"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "major",
      "roles": {
        "lead": ["voice", "pedal-steel"],
        "harmony": ["guitar"],
        "bass": ["bass"],
        "percussion": ["drums"]
      },
      "progressions": {
        "intro": ["G", "C", "G", "D7"],
        "verse": ["G", "Em", "C", "D7"],
        "tag": ["D7", "G"]
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
        {"label": "solo", "bars": 8, "soloInstrumentId": "pedal-steel", "soloMode": "accompanied"},
        {"label": "chorus", "bars": 8},
        {"label": "tag", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "country pop chorus lift and acoustic strum voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "country pop chorus lift and acoustic strum voice cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["voice"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "country pop chorus lift and acoustic strum pedal-steel statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["pedal-steel"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "country pop chorus lift and acoustic strum pedal-steel cadence fill", "role": "lead", "onsets": [3.0, 3.5, 3.75], "instruments": ["pedal-steel"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "country pop chorus lift and acoustic strum guitar accompaniment", "role": "harmony", "onsets": [0, 1.5, 2.5, 3.5], "instruments": ["guitar"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "country pop chorus lift and acoustic strum guitar cadence fill", "role": "harmony", "onsets": [3.0, 3.5, 3.75], "instruments": ["guitar"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "country pop chorus lift and acoustic strum low anchor", "role": "bass", "onsets": [0, 2.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6]},
        {"name": "country pop chorus lift and acoustic strum bass cadence fill", "role": "bass", "onsets": [3.0, 3.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "phraseEnd": true, "articulation": "ornament"},
        {"name": "country pop chorus lift and acoustic strum kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat"], "cycleLength": 1, "accents": [0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45, 0.45, 0.85, 0.45]},
        {"name": "country pop chorus lift and acoustic strum drums cadence fill", "role": "percussion", "onsets": [3.0, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "roll", "hits": ["tom", "snare", "snare"]}
      ],
      "instrumentTechniques": {
        "voice": ["accent", "staccato", "legato", "vibrato"],
        "pedal-steel": ["vibrato"],
        "guitar": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
        "bass": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
        "drums": ["accent", "ghost", "open", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "accent"
        },
        "pedal-steel:lead": {
          "allowedTechniques": ["vibrato"],
          "defaultTechnique": "vibrato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["hammer-on", "pull-off", "slide", "fingerstyle", "double-stop", "accent", "staccato", "legato", "vibrato"],
          "defaultTechnique": "hammer-on",
          "variantId": "steel-acoustic"
        },
        "bass:bass": {
          "allowedTechniques": ["slide", "hammer-on", "pull-off", "fingerstyle", "accent", "staccato", "legato"],
          "defaultTechnique": "slide"
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
    }
  ]
};
