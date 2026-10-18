import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban / Afro-Cuban",
  "color": "#266417",
  "description": "Timba is an independent musical world. Cuban / Afro-Cuban idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Classic Timba",
  "meter": "4/4",
  "tempo": [100, 116],
  "instruments": ["voice", "trumpet", "trombone", "piano", "synth", "bass", "congas", "timbales", "drums", "cowbell"],
  "roles": {
    "lead": ["voice", "trumpet", "trombone"],
    "harmony": ["piano"],
    "bass": ["bass"],
    "percussion": ["congas", "timbales", "drums", "cowbell"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "D7"],
  "harmonicRhythm": "bar",
  "cadences": ["Dm7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["timba piano tumbao and bass gear changes", "full gear vocabulary", "multiple piano/bass patterns per section", "songo drum conga interlock and bass displacement", "kit + conga groove", "more continuous pocket", "Irakere jazz funk horns and piano montuno", "Afro-Cuban jazz/funk", "complex odd accents", "NG La Banda dense horn bloques and bass tumbao", "aggressive horn bloques", "dense piano", "Charanga Habanera synth piano and explosive breaks", "extreme gear contrast", "sudden bombas", "displaced bass", "Bamboleo funk bass and female vocal response", "smoother pocket", "R&B-oriented vocal sections", "Paulito FG coro development and gear shifts", "lyrical verse, complex montuno escalation", "Manolin chant coro and percussion breaks", "hook-heavy coro repetition", "direct street groove", "Havana D Primera melodic trumpet and vocal coro", "polished modern tumbao", "controlled gears", "Maykel Blanco percussive piano and sharp bloques", "dancer-focused breaks", "frequent bloques", "timba funk slap bass and syncopated horn hits", "funk pocket + clave-aware percussion", "modern timba layered coro and band breaks", "International / Modern Timba: gear change", "International / Modern Timba: bomba", "International / Modern Timba: presión"],
  "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "classic-timba",
      "name": "Classic Timba",
      "description": "Classic Timba: timba piano tumbao and bass gear changes. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["timba piano tumbao and bass gear changes", "full gear vocabulary", "multiple piano/bass patterns per section"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "sudden breakdowns", "high-energy horn blocks", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "extended dominants", "chromatic passing harmony", "modal gears"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "timba piano tumbao and bass gear changes voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "timba piano tumbao and bass gear changes trumpet statement",
          "role": "lead",
          "onsets": [
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "timba piano tumbao and bass gear changes trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "timba piano tumbao and bass gear changes piano accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.75,
            1.5,
            2.5,
            3.25,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4,
            0.4,
            0.4,
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "timba piano tumbao and bass gear changes low anchor",
          "role": "bass",
          "onsets": [
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.6,
            0.6,
            0.5
          ]
        },
        {
          "name": "timba piano tumbao and bass gear changes congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "open",
            "ghost",
            "slap",
            "ghost",
            "open",
            "ghost",
            "slap",
            "ghost"
          ]
        },
        {
          "name": "timba piano tumbao and bass gear changes timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {"name":"timba piano tumbao and bass gear changes kit","role":"percussion","onsets":[0,0,0.5,1.5,1.5,1.75,2.5,2.75,3,3.5,4,4,5,5.5,5.5,5.75,6.5,7,7,7.5],"instruments":["drums"],"hits":["kick","cowbell","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","snare","kick","cowbell","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","snare"],"cycleLength":2,"accents":[0.92,0.48,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.78,0.92,0.48,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.78],"articulation":"accent","shortName":"Timba kit interlock","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"timba piano tumbao and bass gear changes drums cadence fill","role":"percussion","onsets":[2.5,3,3,3.5],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["cowbell","kick","cowbell","snare"],"accents":[0.48,0.92,0.48,0.78],"shortName":"Timba kit close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "timba piano tumbao and bass gear changes cowbell pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "bell",
            "bell",
            "bell",
            "bell",
            "bell",
            "bell",
            "bell",
            "bell"
          ]
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "songo",
      "name": "Songo",
      "description": "Songo: songo drum conga interlock and bass displacement. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Changuito songo drum-kit groove locking with syncopated electric bass and charanga flute", "songo drum conga interlock and bass displacement", "kit + conga groove", "more continuous pocket"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "ghosted snare", "syncopated kick", "funk bass", "Changuito innovative hybrid drum kit and timbale rhythm", "linear cowbell and woodblock patterns", "syncopated electric bass playing around the downbeat", "charanga flute blending with brass and electronics", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "jazz-funk sevenths/ninths", "smoother cycling"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Gm7", "C7", "Gm7", "C7"],
        "groove": ["Gm7", "C7", "Gm7", "C7", "Fmaj7", "Bbmaj7", "A7", "D7"],
        "coda": ["Gm7", "C7", "Gm7", "Gm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "songo drum conga interlock and bass displacement voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "songo drum conga interlock and bass displacement piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "songo drum conga interlock and bass displacement low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "songo drum conga interlock and bass displacement congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "songo drum conga interlock and bass displacement timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "songo drum conga interlock and bass displacement kit", "role": "percussion", "onsets": [0, 0, 0.5, 0.75, 1.5, 1.5, 1.75, 2.25, 2.5, 3, 3, 3.5, 4, 4, 4.75, 5, 5.5, 5.5, 5.75, 6.25, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["cowbell", "kick", "cowbell", "ghost", "cowbell", "kick", "snare", "ghost", "cowbell", "cowbell", "kick", "snare", "cowbell", "kick", "ghost", "cowbell", "cowbell", "kick", "snare", "ghost", "cowbell", "cowbell", "kick", "snare"], "cycleLength": 2, "accents": [0.65, 0.92, 0.65, 0.28, 0.65, 0.92, 0.85, 0.28, 0.65, 0.65, 0.92, 0.85, 0.65, 0.92, 0.28, 0.65, 0.65, 0.92, 0.85, 0.28, 0.65, 0.65, 0.92, 0.85], "articulation": "accent", "shortName": "Songo kit interlock", "description": "Practice this two-bar songo kit interlock. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "songo drum conga interlock and bass displacement drums cadence fill", "role": "percussion", "onsets": [2.25, 2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ghost", "cowbell", "cowbell", "kick", "snare"], "accents": [0.32, 0.5, 0.5, 0.92, 0.85], "shortName": "Songo kit close", "description": "Close with the last two beats of the songo kit interlock; keep the spaces clear and land the next phrase together."},
        {"name": "songo drum conga interlock and bass displacement cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "irakere-jazz-funk-precursor",
      "name": "Irakere / Jazz-Funk Precursor",
      "description": "Irakere / Jazz-Funk Precursor: Irakere jazz funk horns and piano montuno. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Irakere jazz funk horns and piano montuno", "Afro-Cuban jazz/funk", "complex odd accents"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "virtuosic horn lines", "jazz solo articulation", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "modal jazz", "altered dominants", "quartal voicings"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Irakere jazz funk horns and piano montuno voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Irakere jazz funk horns and piano montuno piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Irakere jazz funk horns and piano montuno low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Irakere jazz funk horns and piano montuno congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Irakere jazz funk horns and piano montuno timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Irakere jazz funk horns and piano montuno kit", "role": "percussion", "onsets": [0, 0, 0.75, 1, 1, 1.5, 1.75, 2.5, 2.5, 3, 3.5, 4, 4, 4.75, 5, 5.5, 5.5, 5.75, 6.5, 6.75, 7, 7], "instruments": ["drums"], "hits": ["kick", "ride", "kick", "ride", "snare", "ride", "ghost", "kick", "ride", "snare", "ride", "kick", "ride", "ride", "snare", "kick", "ride", "ghost", "ride", "kick", "ride", "snare"], "cycleLength": 2, "accents": [0.92, 0.5, 0.92, 0.5, 0.85, 0.5, 0.28, 0.92, 0.5, 0.85, 0.5, 0.92, 0.5, 0.5, 0.85, 0.92, 0.5, 0.28, 0.5, 0.92, 0.5, 0.85], "articulation": "accent", "shortName": "Jazz-funk bell pocket", "description": "Practice this two-bar jazz-funk bell pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Irakere jazz funk horns and piano montuno drums cadence fill", "role": "percussion", "onsets": [2.5, 2.75, 3, 3], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["ride", "kick", "ride", "snare"], "accents": [0.5, 0.92, 0.5, 0.85], "shortName": "Jazz-funk bell close", "description": "Close with the last two beats of the jazz-funk bell pocket; keep the spaces clear and land the next phrase together."},
        {"name": "Irakere jazz funk horns and piano montuno cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "ng-la-banda-early-timba",
      "name": "NG La Banda / Early Timba",
      "description": "NG La Banda / Early Timba: NG La Banda dense horn bloques and bass tumbao. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["NG La Banda dense horn bloques and bass tumbao", "aggressive horn bloques", "dense piano"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "very sharp brass attacks", "virtuosic rhythm-section interplay", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "sophisticated jazz-derived extensions"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "NG La Banda dense horn bloques and bass tumbao voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao trumpet statement",
          "shortName": "Bb Trumpet accent",
          "role": "lead",
          "onsets": [
            0,
            1.5,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28,
            0.28,
            0.28
          ],
          "articulation": "accent"
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao trombone statement",
          "shortName": "Trombone accent",
          "role": "lead",
          "onsets": [
            0,
            1.5,
            2.75,
            3.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28,
            0.28,
            0.28
          ],
          "articulation": "accent"
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao piano accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.75,
            1.25,
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "articulation": "staccato"
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao low anchor",
          "role": "bass",
          "onsets": [
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.6,
            0.6,
            0.5
          ]
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "NG La Banda dense horn bloques and bass tumbao timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {"name":"NG La Banda dense horn bloques and bass tumbao kit","role":"percussion","onsets":[0,0,0.75,1,1.5,1.5,2.5,2.5,3,3.5,4,4,4.5,5.5,5.5,5.5,6,6.75,7,7],"instruments":["drums"],"hits":["kick","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","cowbell","kick","snare","cowbell","cowbell","kick","snare","cowbell"],"cycleLength":2,"accents":[0.92,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.48,0.92,0.78,0.48,0.48,0.92,0.78,0.48],"articulation":"accent","shortName":"Bloque kit pocket","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"NG La Banda dense horn bloques and bass tumbao drums cadence fill","role":"percussion","onsets":[2,2.75,3,3],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["cowbell","kick","snare","cowbell"],"accents":[0.48,0.92,0.78,0.48],"shortName":"Bloque kit close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "NG La Banda dense horn bloques and bass tumbao cowbell pulse",
          "role": "percussion",
          "onsets": [
            0.5,
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "bell",
            "bell",
            "bell",
            "bell"
          ]
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "charanga-habanera",
      "name": "Charanga Habanera",
      "description": "Charanga Habanera: Charanga Habanera synth piano and explosive breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Charanga Habanera synth piano and explosive breaks", "extreme gear contrast", "sudden bombas", "displaced bass"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "hard mute/unmute, explosive percussion", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "simpler vamps during high-energy gears, richer harmony elsewhere"],
      "meter": "4/4",
      "tempo": [108, 124],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "synth"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Charanga Habanera synth piano and explosive breaks voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Charanga Habanera synth piano and explosive breaks piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Charanga Habanera synth piano and explosive breaks synth countertumbao", "shortName": "Synth countertumbao", "role": "harmony", "onsets": [0.5, 1.75, 2.5, 3.75], "instruments": ["synth"], "cycleLength": 1, "durations": [0.18, 0.18, 0.18, 0.18], "articulation": "staccato", "sectionUsage": ["coro", "mambo"]},
        {"name": "Charanga Habanera synth piano and explosive breaks low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Charanga Habanera synth piano and explosive breaks congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Charanga Habanera synth piano and explosive breaks timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Charanga Habanera synth piano and explosive breaks kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.5, 1.5, 2.5, 2.75, 3, 3.5, 3.5, 4, 4, 5, 5, 5.5, 5.5, 6.5, 7, 7, 7.5], "instruments": ["drums"], "hits": ["cowbell", "kick", "cowbell", "snare", "cowbell", "kick", "cowbell", "kick", "cowbell", "cowbell", "snare", "cowbell", "kick", "cowbell", "snare", "cowbell", "kick", "cowbell", "cowbell", "kick", "snare"], "cycleLength": 2, "accents": [0.65, 0.92, 0.65, 0.85, 0.65, 0.92, 0.65, 0.92, 0.65, 0.65, 0.85, 0.65, 0.92, 0.65, 0.85, 0.65, 0.92, 0.65, 0.65, 0.92, 0.85], "articulation": "accent", "shortName": "Charanga gear pocket", "description": "Practice this two-bar charanga gear pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Charanga Habanera synth piano and explosive breaks drums cadence fill", "role": "percussion", "onsets": [2.5, 3, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["cowbell", "cowbell", "kick", "snare"], "accents": [0.5, 0.5, 0.92, 0.85], "shortName": "Charanga gear close", "description": "Close with the last two beats of the charanga gear pocket; keep the spaces clear and land the next phrase together."},
        {"name": "Charanga Habanera synth piano and explosive breaks cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "synth": ["staccato", "accent", "legato"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "synth:harmony": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato",
          "patchId": "polysynth"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "bamboleo",
      "name": "Bamboleo",
      "description": "Bamboleo: Bamboleo funk bass and female vocal response. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Bamboleo funk bass and female vocal response", "smoother pocket", "R&B-oriented vocal sections"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "legato vocal backing", "polished keyboard voicings", "legato", "accent", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "R&B/jazz sevenths/ninths"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Bamboleo funk bass and female vocal response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "Bamboleo funk bass and female vocal response piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "Bamboleo funk bass and female vocal response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Bamboleo funk bass and female vocal response congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bamboleo funk bass and female vocal response timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Bamboleo funk bass and female vocal response kit", "role": "percussion", "onsets": [0, 0, 0.5, 1, 1.5, 1.75, 2, 2.5, 3, 3.5, 3.5, 4, 4, 4.5, 5.25, 5.5, 5.5, 6, 6.75, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["cowbell", "kick", "cowbell", "cowbell", "snare", "kick", "cowbell", "cowbell", "kick", "cowbell", "snare", "cowbell", "kick", "cowbell", "snare", "cowbell", "kick", "cowbell", "kick", "cowbell", "cowbell", "snare"], "cycleLength": 2, "accents": [0.65, 0.92, 0.65, 0.65, 0.85, 0.92, 0.65, 0.65, 0.92, 0.65, 0.85, 0.65, 0.92, 0.65, 0.85, 0.65, 0.92, 0.65, 0.92, 0.65, 0.65, 0.85], "articulation": "accent", "shortName": "Bamboleo kick dialogue", "description": "Practice this two-bar bamboleo kick dialogue. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Bamboleo funk bass and female vocal response drums cadence fill", "role": "percussion", "onsets": [2, 2.75, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["cowbell", "kick", "cowbell", "cowbell", "snare"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85], "shortName": "Bamboleo kick close", "description": "Close with the last two beats of the bamboleo kick dialogue; keep the spaces clear and land the next phrase together."},
        {"name": "Bamboleo funk bass and female vocal response cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "legato", "accent", "vibrato"],
        "trumpet": ["staccato", "legato", "accent", "tenuto", "vibrato"],
        "trombone": ["staccato", "legato", "accent"],
        "piano": ["staccato", "legato", "montuno", "accent", "tenuto"],
        "bass": ["staccato", "legato", "ghost-note", "slap", "ghost", "accent"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "legato", "accent", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "legato", "accent"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "legato", "montuno", "accent", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "legato", "ghost-note", "slap", "ghost", "accent"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "paulito-fg",
      "name": "Paulito FG",
      "description": "Paulito FG: Paulito FG coro development and gear shifts. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Paulito FG coro development and gear shifts", "lyrical verse, complex montuno escalation"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "restrained verse articulation", "hard coro gear", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "romantic extended harmony + timba dominant vamps"],
      "meter": "4/4",
      "tempo": [100, 116],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "Paulito FG coro development and gear shifts voice statement",
          "role": "lead",
          "onsets": [
            0,
            1.25,
            2.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.8,
            0.65,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Paulito FG coro development and gear shifts trumpet statement",
          "role": "lead",
          "onsets": [
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Paulito FG coro development and gear shifts trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Paulito FG coro development and gear shifts piano accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1,
            1.5,
            2,
            2.5,
            3.25,
            3.75
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.3,
            0.3,
            0.3,
            0.3,
            0.3,
            0.3,
            0.3
          ],
          "articulation": "staccato"
        },
        {
          "name": "Paulito FG coro development and gear shifts low anchor",
          "role": "bass",
          "onsets": [
            0,
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.4,
            0.65,
            0.45,
            0.38
          ]
        },
        {
          "name": "Paulito FG coro development and gear shifts congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "Paulito FG coro development and gear shifts timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {"name":"Paulito FG coro development and gear shifts kit","role":"percussion","onsets":[0,0,0.5,1,1.5,1.75,2,2.5,3,3.5,3.5,4,4,4.75,5,5,5.5,6.5,6.5,7,7.5],"instruments":["drums"],"hits":["kick","cowbell","cowbell","snare","cowbell","kick","cowbell","cowbell","kick","snare","cowbell","kick","cowbell","kick","snare","cowbell","cowbell","kick","cowbell","cowbell","snare"],"cycleLength":2,"accents":[0.92,0.48,0.48,0.78,0.48,0.92,0.48,0.48,0.92,0.78,0.48,0.92,0.48,0.92,0.78,0.48,0.48,0.92,0.48,0.48,0.78],"articulation":"accent","shortName":"Gear-change kit pocket","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"Paulito FG coro development and gear shifts drums cadence fill","role":"percussion","onsets":[2.5,2.5,3,3.5],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["kick","cowbell","cowbell","snare"],"accents":[0.92,0.48,0.48,0.78],"shortName":"Gear-change kit close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "Paulito FG coro development and gear shifts cowbell pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "manolin",
      "name": "Manolín",
      "description": "Manolín: Manolin chant coro and percussion breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Manolin chant coro and percussion breaks", "hook-heavy coro repetition", "direct street groove"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "shouted response", "aggressive percussion", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "simpler repetitive harmony"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "Manolin chant coro and percussion breaks voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.5,
            1.75
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28,
            0.55
          ],
          "articulation": "staccato"
        },
        {
          "name": "Manolin chant coro and percussion breaks trumpet statement",
          "role": "lead",
          "onsets": [
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Manolin chant coro and percussion breaks trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Manolin chant coro and percussion breaks piano accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.75,
            1.5,
            2.5,
            3.25,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.4,
            0.4,
            0.4,
            0.4,
            0.4,
            0.4
          ],
          "articulation": "staccato"
        },
        {
          "name": "Manolin chant coro and percussion breaks low anchor",
          "role": "bass",
          "onsets": [
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.6,
            0.6,
            0.5
          ]
        },
        {
          "name": "Manolin chant coro and percussion breaks congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.75,
            1.25,
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "open",
            "ghost",
            "slap",
            "open",
            "ghost",
            "slap"
          ]
        },
        {
          "name": "Manolin chant coro and percussion breaks timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "Manolin chant coro and percussion breaks timbales cadence fill",
          "role": "percussion",
          "onsets": [
            2.5,
            3,
            3.5,
            3.75
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll",
          "hits": [
            "rim",
            "rim",
            "bell",
            "bell"
          ]
        },
        {"name":"Manolin chant coro and percussion breaks kit","role":"percussion","onsets":[0,0,0.5,1,1.5,1.5,2.5,2.5,3,3,3.75,4,4,4.5,5.25,5.5,5.5,6.5,6.75,7,7.5],"instruments":["drums"],"hits":["kick","cowbell","cowbell","snare","kick","cowbell","kick","cowbell","snare","cowbell","kick","kick","cowbell","cowbell","snare","kick","cowbell","cowbell","kick","snare","cowbell"],"cycleLength":2,"accents":[0.92,0.48,0.48,0.78,0.92,0.48,0.92,0.48,0.78,0.48,0.92,0.92,0.48,0.48,0.78,0.92,0.48,0.48,0.92,0.78,0.48],"articulation":"accent","shortName":"Coro kit drive","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"Manolin chant coro and percussion breaks drums cadence fill","role":"percussion","onsets":[2.5,2.75,3,3.5],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["cowbell","kick","snare","cowbell"],"accents":[0.48,0.92,0.78,0.48],"shortName":"Coro kit close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "Manolin chant coro and percussion breaks cowbell pulse",
          "role": "percussion",
          "onsets": [
            1.5,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "bell",
            "bell"
          ]
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "havana-dprimera",
      "name": "Havana D'Primera",
      "description": "Havana D'Primera: Havana D Primera melodic trumpet and vocal coro. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Havana D Primera melodic trumpet and vocal coro", "polished modern tumbao", "controlled gears"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "tight brass", "clean piano articulation", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "balanced jazz/salsa vocabulary"],
      "meter": "4/4",
      "tempo": [98, 114],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "Havana D Primera melodic trumpet and vocal coro voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro trumpet statement",
          "role": "lead",
          "onsets": [
            0,
            0.5,
            1,
            2,
            2.75,
            3.25
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.25,
            0.45,
            0.65,
            0.25,
            0.4
          ],
          "articulation": "legato"
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro piano accompaniment",
          "role": "harmony",
          "onsets": [
            0.5,
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.28,
            0.28,
            0.28
          ],
          "articulation": "staccato"
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro low anchor",
          "role": "bass",
          "onsets": [
            0,
            1.5,
            2.25,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.78,
            0.35,
            0.65,
            0.32
          ]
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "Havana D Primera melodic trumpet and vocal coro timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {"name":"Havana D Primera melodic trumpet and vocal coro kit","role":"percussion","onsets":[0,0,0.5,0.75,1.5,1.5,2,2.75,3,3.5,3.5,4,4,5,5,5.5,5.5,6.5,7,7,7.5],"instruments":["drums"],"hits":["kick","cowbell","cowbell","kick","snare","cowbell","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","snare","cowbell","kick","cowbell","cowbell","kick","cowbell","snare"],"cycleLength":2,"accents":[0.92,0.48,0.48,0.92,0.78,0.48,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.78,0.48,0.92,0.48,0.48,0.92,0.48,0.78],"articulation":"accent","shortName":"Trumpet-response kit pocket","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"Havana D Primera melodic trumpet and vocal coro drums cadence fill","role":"percussion","onsets":[2.5,3,3,3.5],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["cowbell","kick","cowbell","snare"],"accents":[0.48,0.92,0.48,0.78],"shortName":"Trumpet-response kit close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "Havana D Primera melodic trumpet and vocal coro cowbell pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "maykel-blanco",
      "name": "Maykel Blanco",
      "description": "Maykel Blanco: Maykel Blanco percussive piano and sharp bloques. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["Maykel Blanco percussive piano and sharp bloques", "dancer-focused breaks", "frequent bloques"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "percussion showmanship", "sharp horn hits", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "functional timba with clear tension/release"],
      "meter": "4/4",
      "tempo": [106, 122],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "Maykel Blanco percussive piano and sharp bloques voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques trumpet statement",
          "role": "lead",
          "onsets": [
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques piano accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.5,
            1.5,
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.2,
            0.2,
            0.2,
            0.2,
            0.2,
            0.2
          ],
          "articulation": "accent"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques low anchor",
          "role": "bass",
          "onsets": [
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.6,
            0.6,
            0.5
          ]
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques timbales pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques timbales cadence fill",
          "role": "percussion",
          "onsets": [
            2.75,
            3,
            3.25,
            3.5,
            3.75
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "phraseEnd": true,
          "articulation": "roll",
          "hits": [
            "rim",
            "rim",
            "bell",
            "rim",
            "bell"
          ]
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques kit",
          "role": "percussion",
          "onsets": [
            0,
            0,
            0.75,
            1,
            1.5,
            1.75,
            2,
            2.75,
            3,
            3.5
          ],
          "instruments": [
            "drums"
          ],
          "hits": [
            "hat",
            "kick",
            "snare",
            "hat",
            "kick",
            "snare",
            "hat",
            "kick",
            "snare",
            "hat"
          ],
          "cycleLength": 1,
          "accents": [
            0.35,
            0.98,
            0.9,
            0.35,
            0.85,
            0.92,
            0.35,
            0.9,
            0.92,
            0.38
          ]
        },
        {
          "name": "Maykel Blanco percussive piano and sharp bloques cowbell pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "timba-funk",
      "name": "Timba-Funk",
      "description": "Timba-Funk: timba funk slap bass and syncopated horn hits. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["timba funk slap bass and syncopated horn hits", "funk pocket + clave-aware percussion"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "guitar muting", "slap/finger bass", "syncopated vocals", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "funk dominant/minor-seventh vamps"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano", "guitar"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "timba funk slap bass and syncopated horn hits voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits trumpet statement", "role": "lead", "onsets": [2, 2.75, 3.5], "instruments": ["trumpet"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits trombone statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["trombone"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name": "timba funk slap bass and syncopated horn hits piano accompaniment", "role": "harmony", "onsets": [0.25, 1.5, 2.75, 3.5], "instruments": ["piano"], "cycleLength": 1, "durations": [0.4, 0.4, 0.4, 0.4], "articulation": "staccato"},
        {"name": "timba funk slap bass and syncopated horn hits low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "timba funk slap bass and syncopated horn hits congas pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["congas"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba funk slap bass and syncopated horn hits timbales pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["timbales"], "cycleLength": 1, "articulation": "accent"},
        {"name": "timba funk slap bass and syncopated horn hits kit", "role": "percussion", "onsets": [0, 0, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.25, 3.5, 3.5, 4, 4, 4.5, 5, 5.25, 5.5, 5.75, 6.25, 6.5, 6.5, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "snare", "hat", "hat", "ghost", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "snare", "ghost", "hat", "kick", "hat", "hat", "kick", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.85, 0.28, 0.28, 0.28, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.85, 0.28, 0.28, 0.92, 0.28, 0.28, 0.92, 0.85, 0.28], "articulation": "accent", "shortName": "Timba funk cross-accent", "description": "Practice this two-bar timba funk cross-accent. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "timba funk slap bass and syncopated horn hits drums cadence fill", "role": "percussion", "onsets": [2.25, 2.5, 2.5, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.85, 0.5], "shortName": "Timba funk close", "description": "Close with the last two beats of the timba funk cross-accent; keep the spaces clear and land the next phrase together."},
        {"name": "timba funk slap bass and syncopated horn hits cowbell pulse", "role": "percussion", "onsets": [0, 0.5, 1, 1.75, 2, 2.75, 3, 3.5], "instruments": ["cowbell"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Timba funk muted guitar offbeat support", "role": "harmony", "instruments": ["guitar"], "onsets": [0.5, 1.5, 2.5, 3.5], "durations": [0.2, 0.2, 0.2, 0.2], "articulation": "muted-strum"}
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "international-modern-timba",
      "name": "International / Modern Timba",
      "description": "International / Modern Timba: modern timba layered coro and band breaks. The lead leaves space for instrumental replies; accompaniment and phrase endings follow the authored cells.",
      "patterns": ["modern timba layered coro and band breaks", "International / Modern Timba: gear change", "International / Modern Timba: bomba", "International / Modern Timba: presión"],
      "techniques": ["montuno", "short-chord-stab", "slap", "open-tone", "ghost-note", "roll", "staccato", "International / Modern Timba: gears", "International / Modern Timba: bloque unison", "International / Modern Timba: presión", "accent", "legato", "vibrato", "tenuto", "ghost", "open", "slap-tapao", "quinto-slap"],
      "harmony": ["Dm7", "G7", "Cmaj7", "A7", "Bb7", "International / Modern Timba: salsa-derived functional harmony", "International / Modern Timba: extended jazz harmony", "International / Modern Timba: modal montuno"],
      "meter": "4/4",
      "tempo": [102, 118],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "trumpet", "trombone"],
        "harmony": ["piano"],
        "bass": ["bass"],
        "percussion": ["congas", "timbales", "drums", "cowbell"]
      },
      "progressions": {
        "intro": ["Dm7", "G7", "Cmaj7", "A7"],
        "verso": ["Dm7", "G7", "Cmaj7", "A7"],
        "gear": ["Dm7", "Bb7", "A7", "Dm7"],
        "cierre": ["Dm7", "Dm7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verso", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "marcha", "bars": 8},
        {"label": "gear", "bars": 8},
        {"label": "break", "bars": 8},
        {"label": "coro", "bars": 8},
        {"label": "cierre", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {
          "name": "modern timba layered coro and band breaks voice statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "voice"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "modern timba layered coro and band breaks trumpet statement",
          "role": "lead",
          "onsets": [
            2,
            2.75,
            3.5
          ],
          "instruments": [
            "trumpet"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "modern timba layered coro and band breaks trombone statement",
          "role": "lead",
          "onsets": [
            0,
            0.75,
            1.5
          ],
          "instruments": [
            "trombone"
          ],
          "cycleLength": 1,
          "durations": [
            0.45,
            0.45,
            0.45
          ],
          "articulation": "legato"
        },
        {
          "name": "modern timba layered coro and band breaks piano accompaniment",
          "role": "harmony",
          "onsets": [
            0,
            0.5,
            1.25,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "piano"
          ],
          "cycleLength": 1,
          "durations": [
            0.28,
            0.22,
            0.28,
            0.22,
            0.28,
            0.22,
            0.28
          ],
          "articulation": "staccato"
        },
        {
          "name": "modern timba layered coro and band breaks low anchor",
          "role": "bass",
          "onsets": [
            1.5,
            2.5,
            3.5
          ],
          "instruments": [
            "bass"
          ],
          "cycleLength": 1,
          "articulation": "staccato",
          "durations": [
            0.6,
            0.6,
            0.5
          ]
        },
        {
          "name": "modern timba layered coro and band breaks congas pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1.25,
            1.5,
            2,
            2.5,
            3.25,
            3.5
          ],
          "instruments": [
            "congas"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "open",
            "ghost",
            "slap",
            "ghost",
            "open",
            "ghost",
            "slap",
            "ghost"
          ]
        },
        {
          "name": "modern timba layered coro and band breaks timbales pulse",
          "role": "percussion",
          "onsets": [
            0.5,
            1.5,
            2.5,
            3.25,
            3.75
          ],
          "instruments": [
            "timbales"
          ],
          "cycleLength": 1,
          "articulation": "accent",
          "hits": [
            "rim",
            "bell",
            "rim",
            "fill",
            "bell"
          ]
        },
        {"name":"modern timba layered coro and band breaks kit","role":"percussion","onsets":[0,0,0.5,1,1.25,1.5,1.5,2.5,2.75,3.5,3.5,4,4,4.5,5,5.5,5.75,6,6.5,6.5,7.25,7.5],"instruments":["drums"],"hits":["kick","cowbell","cowbell","cowbell","snare","kick","cowbell","cowbell","kick","snare","cowbell","kick","cowbell","cowbell","snare","cowbell","kick","cowbell","kick","cowbell","snare","cowbell"],"cycleLength":2,"accents":[0.92,0.48,0.48,0.48,0.78,0.92,0.48,0.48,0.92,0.78,0.48,0.92,0.48,0.48,0.78,0.48,0.92,0.48,0.92,0.48,0.78,0.48],"articulation":"accent","shortName":"Modern timba kit","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {"name":"modern timba layered coro and band breaks drums cadence fill","role":"percussion","onsets":[2,2.5,2.5,3.25,3.5],"instruments":["drums"],"cycleLength":1,"phraseEnd":true,"articulation":"accent","hits":["cowbell","kick","cowbell","snare","cowbell"],"accents":[0.48,0.92,0.48,0.78,0.48],"shortName":"Modern timba close","description":"Coordinate the syncopated kick and snare against the bell across two bars. Leave the conga spaces open and follow the band gear cues. Original teaching adaptation, not a recording transcription."},
        {
          "name": "modern timba layered coro and band breaks cowbell pulse",
          "role": "percussion",
          "onsets": [
            0,
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5
          ],
          "instruments": [
            "cowbell"
          ],
          "cycleLength": 1,
          "articulation": "accent"
        }
      ],
      "instrumentTechniques": {
        "voice": ["staccato", "accent", "legato", "vibrato"],
        "trumpet": ["staccato", "accent", "legato", "tenuto", "vibrato"],
        "trombone": ["staccato", "accent", "legato"],
        "piano": ["staccato", "montuno", "accent", "legato", "tenuto"],
        "bass": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
        "congas": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
        "timbales": ["open", "staccato", "roll", "accent"],
        "drums": ["ghost", "open", "staccato", "roll", "accent"],
        "cowbell": ["staccato", "open", "ghost", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trumpet:lead": {
          "allowedTechniques": ["staccato", "accent", "legato", "tenuto", "vibrato"],
          "defaultTechnique": "staccato"
        },
        "trombone:lead": {
          "allowedTechniques": ["staccato", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "piano:harmony": {
          "allowedTechniques": ["staccato", "montuno", "accent", "legato", "tenuto"],
          "defaultTechnique": "staccato"
        },
        "bass:bass": {
          "allowedTechniques": ["staccato", "ghost-note", "slap", "ghost", "accent", "legato"],
          "defaultTechnique": "staccato"
        },
        "congas:percussion": {
          "allowedTechniques": ["open", "staccato", "slap", "ghost", "slap-tapao", "quinto-slap", "accent"],
          "defaultTechnique": "open"
        },
        "timbales:percussion": {
          "allowedTechniques": ["open", "staccato", "roll", "accent"],
          "defaultTechnique": "open"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "open", "staccato", "roll", "accent"],
          "defaultTechnique": "ghost"
        },
        "cowbell:percussion": {
          "allowedTechniques": ["staccato", "open", "ghost", "accent"],
          "defaultTechnique": "staccato"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.68,"crescendoExpansion":0.82,"silenceContrast":0.72,"peakSectionHeadroomDb":4,"busCompressionAmount":0.16,"busCompressionRatio":1.7,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":1.5,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.36,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":18},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":80,"releaseMs":360,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.12,"lowAnchorCompression":0.05,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
