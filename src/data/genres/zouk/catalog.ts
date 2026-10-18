import type { GenrePackInput } from '../_shared/genrePack';

export const GENRE_PACK: GenrePackInput = {
  "id": "zouk",
  "name": "Zouk",
  "family": "French Caribbean",
  "color": "#bc1267",
  "description": "Zouk is an independent musical world. French Caribbean idioms, style-owned pattern grammar, performance vocabulary, harmony, instrumentation, arrangement, and production are resolved from the selected style.",
  "defaultStyle": "Zouk Love",
  "meter": "4/4",
  "tempo": [82, 98],
  "instruments": ["voice", "guitar", "synth", "bass", "drums", "shaker"],
  "roles": {
    "lead": ["voice"],
    "harmony": ["guitar", "synth"],
    "bass": ["bass"],
    "percussion": ["drums", "shaker"]
  },
  "pitchSystem": "12-tet",
  "tuningSystem": "12-tet",
  "scales": ["minor"],
  "chordQualities": ["Dm", "Gm", "C", "F", "Bb", "A7", "G", "Am", "Em", "Am7", "Fmaj7", "Dm7", "G7", "Cmaj7"],
  "harmonicRhythm": "bar",
  "cadences": ["Am7"],
  "bassChordInteraction": "Anchor chord roots, answer the lead in phrase gaps, and approach the next chord at the turnaround.",
  "patternFamilies": ["zouk love smooth vocal and syncopated guitar", "slow continuous groove", "slow groove + string countermelody", "zouk beton fast horn breaks and percussion", "faster denser percussion", "orchestral zouk love string swell and warm guitar", "Cabo zouk guitar arpeggio and bass anticipation", "softer programmed rhythm", "ghetto zouk sparse electronic bass and R&B vocal", "programmed urban drums", "sub-bass", "zouk R&B melisma and Rhodes chords", "zouk pulse + R&B drum phrasing", "Afro zouk percussion interlock and guitar hook", "African guitar/percussion overlay", "kompa crossover guitar offbeats and flowing bass", "guitar ostinato", "steady kick/snare", "zouk fusion layered guitar and keyboard response", "broken beat", "atmospheric pauses", "lambazouk lilting syncopated bass and acoustic hook", "faster continuous dance groove"],
  "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab"],
  "forbiddenPatterns": ["patterns owned by another genre", "generic four-on-the-floor unless the selected style specifies it"],
  "styles": [
    {
      "id": "zouk-love",
      "name": "Zouk Love",
      "description": "Zouk Love: swaying 4/4 and a warm, syncopated guitar/key pocket support long Creole vocal phrases. Keep the verse intimate, answer lyric gaps, and widen the refrain without filling every beat.",
      "patterns": ["Silky romantic Creole vocal melody floating over warm DX7 keys and gentle zouk love beat", "zouk love smooth vocal and syncopated guitar", "slow continuous groove", "slow groove + string countermelody"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "sustained keys", "soft vocal phrasing", "sweeping strings", "melodic fills", "silky romantic Creole vocal delivery", "lush DX7 electric piano layers", "gentle flowing zouk drum pulse with soft rimshots", "intimate close partner dance connection", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "rimshot", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "romantic extended chords", "slow harmonic rhythm", "maj7/min9/add9", "chromatic passing chords"],
      "meter": "4/4",
      "tempo": [82, 98],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Dm", "Gm", "C", "F"],
        "verse": ["Dm", "Gm", "C", "F", "Bb", "Gm", "A7", "Dm"],
        "chorus": ["Gm", "C", "F", "Dm", "Gm", "A7", "Dm", "Dm"],
        "coda": ["Gm", "A7", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "zouk love smooth vocal and syncopated guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"zouk love smooth vocal and syncopated guitar guitar accompaniment","role":"harmony","onsets":[0,0.75,1.5,2.5,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.3,0.18,0.3,0.24,0.18],"articulation":"staccato","shortName":"Zouk love strums","accents":[0.76,0.42,0.62,0.7,0.46],"microtiming":[0,-3,0,-2,-3],"description":"Keep the guitar soft and syncopated, with a small pickup after the downbeat and open space before the vocal answers. Let the bass and keys carry the long sustain."},
        {"name": "zouk love smooth vocal and syncopated guitar keyboard chord bed", "shortName": "Warm key bed", "description": "Hold two soft chords on beats one and three beneath the close vocal. Let the syncopated guitar provide the short attacks and leave the singer's gaps clear.", "role": "harmony", "onsets": [0, 2], "instruments": ["synth"], "cycleLength": 1, "durations": [1.7, 1.7], "articulation": "legato"},
        {"name": "zouk love smooth vocal and syncopated guitar keyboard breath", "shortName": "Key breath", "description": "Resolve with one quiet chord near the end of the phrase, then leave a beat of air for the next vocal entry.", "role": "harmony", "onsets": [3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45], "phraseEnd": true, "articulation": "legato"},
        {"name": "zouk love smooth vocal and syncopated guitar low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "zouk love smooth vocal and syncopated guitar kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Zouk love pocket", "description": "Practice this two-bar zouk love pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "zouk love smooth vocal and syncopated guitar drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Zouk love close", "description": "Close with the last two beats of the zouk love pocket; keep the spaces clear and land the next phrase together."},
        {"name": "zouk love smooth vocal and syncopated guitar shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "rimshot", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "rimshot", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "zouk-beton",
      "name": "Zouk Béton",
      "description": "Zouk Béton: a fast band groove locks bass to drums while clipped guitar and keyboard offbeats leave room for brass punches. Use short stops and pickups before the full-band return.",
      "patterns": ["Explosive Antillean brass fanfare over driving bassline and carnival zouk beat", "zouk beton fast horn breaks and percussion", "faster denser percussion"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "stronger synth/brass stabs", "driving syncopated slap/finger basslines", "explosive brass section fanfares", "crisp Simmons electronic drum fills", "Creole carnival party euphoria", "accent", "staccato", "vibrato", "strum", "legato-single-note", "slap", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "simpler repetitive dance cycles"],
      "meter": "4/4",
      "tempo": [116, 132],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["C", "G", "Am", "F"],
        "verse": ["C", "G", "Am", "F", "C", "G", "Am", "F"],
        "chorus": ["F", "G", "Em", "Am", "Dm", "G", "C", "C"],
        "coda": ["F", "G", "C", "C"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "zouk beton fast horn breaks and percussion voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"zouk beton fast horn breaks and percussion guitar accompaniment","role":"harmony","onsets":[0.25,0.75,1.5,2.25,2.75,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.18,0.18,0.22,0.18,0.18,0.22],"articulation":"staccato","shortName":"Beton guitar cuts","accents":[0.72,0.45,0.84,0.5,0.66,0.76],"microtiming":[0,-2,0,-2,0,-2],"description":"Use clipped chord cuts around the horn punches, varying the pickup placement instead of strumming a steady pop loop. Leave the full-band break and return clear."},
        {"name": "zouk beton fast horn breaks and percussion keyboard offbeat chops", "shortName": "Keyboard chops", "description": "Add three tight chord answers between the guitar attacks. Keep the keyboard short so the horn punches and rhythm section retain their bite.", "role": "harmony", "onsets": [0.75, 2.25, 3.75], "instruments": ["synth"], "cycleLength": 1, "durations": [0.22, 0.22, 0.22], "accents": [0.72, 0.86, 0.68], "articulation": "staccato"},
        {"name": "zouk beton fast horn breaks and percussion keyboard turnaround", "shortName": "Keyboard pickup", "description": "Use one clipped chord as a pickup after the horn break; let the full band answer on the next downbeat.", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.2], "accents": [0.85], "phraseEnd": true, "articulation": "staccato"},
        {"name": "zouk beton fast horn breaks and percussion low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "zouk beton fast horn breaks and percussion kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 3.75, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.5, 7.0, 7, 7.5, 7.75], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Zouk béton drive", "description": "Practice this two-bar zouk béton drive. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "zouk beton fast horn breaks and percussion drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5, 3.75], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92], "shortName": "Zouk béton close", "description": "Close with the last two beats of the zouk béton drive; keep the spaces clear and land the next phrase together."},
        {"name": "zouk beton fast horn breaks and percussion shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "slap", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "slap", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "orchestral-zouk-love",
      "name": "Orchestral Zouk Love",
      "description": "Orchestral Zouk Love: long vocal phrases and warm guitar sit beneath strings and brass that swell into the refrain. Keep the verse intimate, then widen the ensemble in clear layers.",
      "patterns": ["orchestral zouk love string swell and warm guitar", "slow continuous groove", "slow groove + string countermelody"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "sustained keys", "soft vocal phrasing", "sweeping strings", "melodic fills", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "romantic extended chords", "slow harmonic rhythm", "maj7/min9/add9", "chromatic passing chords"],
      "meter": "4/4",
      "tempo": [80, 96],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "orchestral zouk love string swell and warm guitar voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"orchestral zouk love string swell and warm guitar guitar accompaniment","role":"harmony","onsets":[0.5,2.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.44,0.5],"articulation":"staccato","shortName":"Orchestral guitar bed","accents":[0.44,0.56],"microtiming":[-2,-2],"description":"Give the guitar two warm chord supports beneath the string and brass swells. Hold back on extra attacks so the orchestral lift can grow without masking the vocal."},
        {"name": "orchestral zouk love string swell and warm guitar orchestral keyboard bed", "shortName": "Orchestral key bed", "description": "Sustain one warm chord under the strings and vocal, releasing before the next bar. Let the guitar carry the rhythmic detail in the dense ensemble.", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.75], "articulation": "legato"},
        {"name": "orchestral zouk love string swell and warm guitar keyboard landing", "shortName": "Keyboard landing", "description": "Hold the closing harmony through the phrase, then release with the strings instead of adding another fast fill.", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.75], "phraseEnd": true, "articulation": "legato"},
        {"name": "orchestral zouk love string swell and warm guitar low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "orchestral zouk love string swell and warm guitar kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "rim", "hat", "kick", "hat", "hat", "hat", "rim", "hat", "hat", "kick", "hat", "hat", "rim", "hat", "kick", "hat", "hat", "kick", "hat", "rim", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.92, 0.42, 0.28, 0.42, 0.65, 0.28, 0.42, 0.92, 0.28, 0.42, 0.65, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.65, 0.28], "articulation": "accent", "shortName": "Orchestral zouk rim", "description": "Practice this two-bar orchestral zouk rim. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "orchestral zouk love string swell and warm guitar drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "rim", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.5, 0.5], "shortName": "Orchestral zouk close", "description": "Close with the last two beats of the orchestral zouk rim; keep the spaces clear and land the next phrase together."},
        {"name": "orchestral zouk love string swell and warm guitar shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":3.4,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.5903999999999999},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.8064,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.8351999999999999,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "cabo-zouk",
      "name": "Cabo-Zouk",
      "description": "Cabo-Zouk: Cape Verdean melodic inflection rides a supple zouk pulse, with picked guitar arpeggios and bass anticipations around the vocal.",
      "patterns": ["Cabo zouk guitar arpeggio and bass anticipation", "softer programmed rhythm"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "Lusophone vocal ornament", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "R&B-derived seventh/ninth voicings"],
      "meter": "4/4",
      "tempo": [86, 102],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Cabo zouk guitar arpeggio and bass anticipation voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"Cabo zouk guitar arpeggio and bass anticipation guitar accompaniment","role":"harmony","onsets":[0,0.5,1,1.5,2.5,3,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.22,0.22,0.22,0.22,0.22,0.22,0.22],"articulation":"staccato","shortName":"Cabo guitar arpeggio","pitches":[{"degree":1,"register":55,"voicing":"single"},{"degree":5,"register":55,"voicing":"single"},{"degree":3,"register":55,"voicing":"single"},{"degree":5,"register":55,"voicing":"single"},{"degree":1,"register":55,"voicing":"single"},{"degree":3,"register":55,"voicing":"single"},{"degree":5,"register":55,"voicing":"single"}],"accents":[0.7,0.42,0.56,0.42,0.72,0.48,0.62],"description":"Pick one chord tone at a time in a rolling seven-note arpeggio. Let the bass anticipation pull into the next bar; keep the guitar line smooth beneath the intimate vocal."},
        {"name":"Cabo zouk guitar arpeggio and bass anticipation warm synth pad","shortName":"Cabo synth pad","description":"Hold two soft chord tones across the arpeggio, releasing at the midpoint before the bass anticipation. Keep the pad under the vocal and let the guitar carry the moving picked line.","role":"harmony","onsets":[0,2],"instruments":["synth"],"cycleLength":1,"durations":[1.7,1.7],"articulation":"tenuto","accents":[0.44,0.52],"microtiming":[0,-2]},
        {"name": "Cabo zouk guitar arpeggio and bass anticipation synth cadence pickup", "shortName": "Cabo pad pickup", "description": "Add one brief chord pickup at the close, then leave the bass anticipation and guitar turnaround audible.", "role": "harmony", "onsets": [3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.35], "phraseEnd": true, "articulation": "staccato"},
        {"name": "Cabo zouk guitar arpeggio and bass anticipation low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "Cabo zouk guitar arpeggio and bass anticipation kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.75, 2.0, 2.5, 2.5, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Cabo zouk pocket", "description": "Practice this two-bar cabo zouk pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Cabo zouk guitar arpeggio and bass anticipation drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Cabo zouk close", "description": "Close with the last two beats of the cabo zouk pocket; keep the spaces clear and land the next phrase together."},
        {"name": "Cabo zouk guitar arpeggio and bass anticipation shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "ghetto-zouk",
      "name": "Ghetto Zouk",
      "description": "Ghetto Zouk: sparse electronic low end and programmed percussion leave wide gaps for R&B vocal phrases. Use muted guitar and compact synth replies rather than a continuous backing wash.",
      "patterns": ["Smooth R&B vocal melody gliding over punchy electronic zouk beat and deep sub-bass drop", "ghetto zouk sparse electronic bass and R&B vocal", "programmed urban drums", "sub-bass"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "vocal layering", "electronic fills", "R&B chord progressions over zouk rhythms", "crisp electronic drum machine programming with sub-bass", "multilingual lyrics (Portuguese, English, French)", "sleek club production", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "modern R&B loops"],
      "meter": "4/4",
      "tempo": [88, 104],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Dm", "Bb", "F", "C"],
        "verse": ["Dm", "Bb", "F", "C", "Dm", "Bb", "F", "C"],
        "chorus": ["Bb", "C", "Dm", "Am", "Bb", "C", "Dm", "Dm"],
        "coda": ["Bb", "C", "Dm", "Dm"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "ghetto zouk sparse electronic bass and R&B vocal voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"ghetto zouk sparse electronic bass and R&B vocal guitar accompaniment","role":"harmony","onsets":[0.75,2.75],"instruments":["guitar"],"cycleLength":1,"durations":[0.2,0.28],"articulation":"staccato","shortName":"Ghetto muted chords","accents":[0.4,0.56],"microtiming":[-3,-2],"description":"Add two muted guitar anticipations in the vocal gaps. Leave the low end and synth hook exposed; do not fill the open spaces with a strum stream."},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal sparse synth chord", "shortName": "Sparse synth chord", "description": "Place one held chord between the guitar's sparse attacks. Keep the programmed low end separate and leave room around the R&B vocal.", "role": "harmony", "onsets": [1.5], "instruments": ["synth"], "cycleLength": 1, "durations": [1.45], "articulation": "legato"},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal synth cadence", "shortName": "Synth cadence", "description": "Use one low, sustained chord at the phrase close; do not fill the vocal's last syllable with extra attacks.", "role": "harmony", "onsets": [3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.85], "phraseEnd": true, "articulation": "legato"},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1.5, 2.0, 2, 2.5, 3.0, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5.5, 5.5, 6.0, 6, 6.5, 7.0, 7.25, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "hat", "hat", "snare", "hat", "hat", "hat", "kick", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.28, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28], "articulation": "accent", "shortName": "Ghetto zouk half-time", "description": "Practice this two-bar ghetto zouk half-time. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3.25, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "snare", "hat", "hat", "kick", "hat"], "accents": [0.5, 0.85, 0.5, 0.5, 0.92, 0.5], "shortName": "Ghetto zouk close", "description": "Close with the last two beats of the ghetto zouk half-time; keep the spaces clear and land the next phrase together."},
        {"name": "ghetto zouk sparse electronic bass and R&B vocal shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "zouk-randb",
      "name": "Zouk R&B",
      "description": "Zouk R&B: melismatic vocals and Rhodes answers ride a light zouk sway. Keep guitar on offbeat lifts and let bass, keys, and voice trade short replies.",
      "patterns": ["zouk R&B melisma and Rhodes chords", "zouk pulse + R&B drum phrasing"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "melisma", "synth pad swells", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "min9/maj9/sus/add9"],
      "meter": "4/4",
      "tempo": [84, 100],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "zouk R&B melisma and Rhodes chords voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"zouk R&B melisma and Rhodes chords guitar accompaniment","role":"harmony","onsets":[0.75,1.75,2.75,3.75],"instruments":["guitar"],"cycleLength":1,"durations":[0.18,0.18,0.2,0.18],"articulation":"staccato","shortName":"R&B guitar lift","accents":[0.58,0.44,0.68,0.48],"microtiming":[-2,-2,-2,-2],"description":"Place light upper-upstroke chords just before each beat. The Rhodes supplies the later chord answers, leaving the vocal runs and programmed lilt clear."},
        {"name": "zouk R&B melisma and Rhodes chords Rhodes offbeat chops", "shortName": "Rhodes chops", "description": "Answer the guitar on beats two and four with short warm chords. Leave the vocal's melisma and the syncopated bass in front.", "role": "harmony", "onsets": [1.5, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.3, 0.3], "accents": [0.82, 0.72], "articulation": "staccato"},
        {"name": "zouk R&B melisma and Rhodes chords Rhodes cadence chop", "shortName": "Rhodes cadence", "description": "Place one soft final chord in the vocal gap, then release into the next breath.", "role": "harmony", "onsets": [3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45], "phraseEnd": true, "articulation": "staccato"},
        {"name": "zouk R&B melisma and Rhodes chords low anchor", "role": "bass", "onsets": [0, 1.5, 3.25], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [2, 2, 0.75]},
        {"name": "zouk R&B melisma and Rhodes chords kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.25, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.75, 6.0, 6.5, 6.5, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.92, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Zouk R&B pocket", "description": "Practice this two-bar zouk r&b pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "zouk R&B melisma and Rhodes chords drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.5, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Zouk R&B close", "description": "Close with the last two beats of the zouk r&b pocket; keep the spaces clear and land the next phrase together."},
        {"name": "zouk R&B melisma and Rhodes chords shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "afro-zouk",
      "name": "Afro-Zouk",
      "description": "Afro-Zouk: interlock guitar pickups with the layered percussion accents instead of imposing a straight backbeat. Let the hook hand off between singer and instruments through the refrain.",
      "patterns": ["Afro zouk percussion interlock and guitar hook", "African guitar/percussion overlay"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "guitar arpeggio", "vocal call-response", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "repeating pop/African cycles"],
      "meter": "4/4",
      "tempo": [94, 110],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "Afro zouk percussion interlock and guitar hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"Afro zouk percussion interlock and guitar hook guitar accompaniment","role":"harmony","onsets":[0.25,1,1.75,2.75,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.18,0.3,0.18,0.18,0.3],"articulation":"staccato","shortName":"Afro guitar interlock","accents":[0.56,0.75,0.44,0.68,0.53],"microtiming":[0,-2,-3,0,-2],"description":"Thread short guitar pushes between the percussion accents; vary the spaces so the hook locks with the layered groove instead of stamping a straight backbeat."},
        {"name": "Afro zouk percussion interlock and guitar hook synth reply hook", "shortName": "Afro-zouk hook", "description": "Play three upper single-note answers between the guitar and percussion accents. Keep the hook short enough to leave the vocal line clear.", "role": "harmony", "onsets": [0.75, 2, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.42, 0.42, 0.6], "pitches": [{"degree": 5, "register": 72, "voicing": "single"}, {"degree": 3, "register": 72, "voicing": "single"}, {"degree": 1, "register": 72, "voicing": "single"}], "articulation": "legato"},
        {"name": "Afro zouk percussion interlock and guitar hook synth cadence reply", "shortName": "Afro-zouk reply", "description": "Answer the final guitar pickup with two descending single notes, then leave space for the next vocal call.", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.4], "pitches": [{"degree": 3, "register": 72, "voicing": "single"}, {"degree": 1, "register": 72, "voicing": "single"}], "phraseEnd": true, "articulation": "legato"},
        {"name": "Afro zouk percussion interlock and guitar hook low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "Afro zouk percussion interlock and guitar hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.42, 0.92, 0.28, 0.85, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28], "articulation": "accent", "shortName": "Afro-zouk cross-accent", "description": "Practice this two-bar afro-zouk cross-accent. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "Afro zouk percussion interlock and guitar hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5], "shortName": "Afro-zouk cross-accent close", "description": "Close with the last two beats of the afro-zouk cross-accent; keep the spaces clear and land the next phrase together."},
        {"name": "Afro zouk percussion interlock and guitar hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "kompa-crossover",
      "name": "Kompa Crossover",
      "description": "Kompa Crossover: keep the continuous bass flow and dry offbeat guitar chop, then layer zouk vocal and keyboard replies without disturbing the dance pull.",
      "patterns": ["kompa crossover guitar offbeats and flowing bass", "guitar ostinato", "steady kick/snare"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "clean guitar picking", "keyboard fills", "accent", "staccato", "vibrato", "strum", "pick", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "diatonic extended chords"],
      "meter": "4/4",
      "tempo": [96, 112],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "kompa crossover guitar offbeats and flowing bass voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"kompa crossover guitar offbeats and flowing bass guitar accompaniment","role":"harmony","onsets":[0.5,1.5,2.5,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.2,0.2,0.2,0.2],"articulation":"staccato","shortName":"Kompa offbeat guitar","accents":[0.8,0.62,0.75,0.6],"microtiming":[-3,-3,-3,-3],"description":"Keep an even, dry offbeat chop through the bar while the flowing bass carries the continuous pull. This is the kompa anchor; do not add extra fills over the voice."},
        {"name":"kompa crossover guitar offbeats and flowing bass synth chord bed","shortName":"Kompa synth bed","description":"Place two compact chord supports on the strong beats while guitar owns the offbeat chop and bass carries the continuous pull. Keep the keyboard out of the guitar’s rhythmic slot.","role":"harmony","onsets":[0,2],"instruments":["synth"],"cycleLength":1,"durations":[0.58,0.58],"articulation":"staccato","accents":[0.56,0.64],"microtiming":[0,0]},
        {"name": "kompa crossover guitar offbeats and flowing bass synth phrase landing", "shortName": "Kompa chord landing", "description": "Sustain the closing chord and release with the phrase; keep the guitar attack and bass continuity distinct.", "role": "harmony", "onsets": [0], "instruments": ["synth"], "cycleLength": 1, "durations": [3.75], "phraseEnd": true, "articulation": "legato"},
        {"name": "kompa crossover guitar offbeats and flowing bass low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "kompa crossover guitar offbeats and flowing bass kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2, 2.5, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Kompa kick weave", "description": "Practice this two-bar kompa kick weave. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "kompa crossover guitar offbeats and flowing bass drums cadence fill", "role": "percussion", "onsets": [2.0, 2, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.92, 0.5, 0.5, 0.85, 0.5, 0.92], "shortName": "Kompa kick close", "description": "Close with the last two beats of the kompa kick weave; keep the spaces clear and land the next phrase together."},
        {"name": "kompa crossover guitar offbeats and flowing bass shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "pick", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "pick", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "pick", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "pick", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "zouk-fusion",
      "name": "Zouk Fusion",
      "description": "Zouk Fusion: use a broken-beat zouk foundation and trade syncopated guitar breaks with keyboard hooks across contrasting sections, leaving space between textures.",
      "patterns": ["zouk fusion layered guitar and keyboard response", "broken beat", "atmospheric pauses"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "reverb swells", "granular vocals", "filtered percussion", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "open", "roll"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "suspended/modal pads", "slow bass movement"],
      "meter": "4/4",
      "tempo": [92, 108],
      "scale": "minor",
      "roles": {
        "lead": ["voice"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "root-fifth",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 0, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "zouk fusion layered guitar and keyboard response voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"zouk fusion layered guitar and keyboard response guitar accompaniment","role":"harmony","onsets":[0.5,1.25,2,2.75,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.2,0.18,0.24,0.18,0.2],"articulation":"staccato","shortName":"Fusion guitar breaks","accents":[0.62,0.42,0.76,0.45,0.68],"microtiming":[-2,-3,0,-3,-2],"description":"Use broken chord hits with a longer center accent and gaps around the keyboard hook. Let the guitar pivot between the contrasting sections rather than sit under every beat."},
        {"name": "zouk fusion layered guitar and keyboard response synth hook", "shortName": "Synth hook", "description": "Let the keyboard answer the guitar in three upper single notes. Keep the phrase distinct from the chordal guitar attack and stop before the vocal pickup.", "role": "harmony", "onsets": [0.75, 2.25, 3.25], "instruments": ["synth"], "cycleLength": 1, "durations": [0.42, 0.42, 0.6], "pitches": [{"degree": 5, "register": 72, "voicing": "single"}, {"degree": 3, "register": 72, "voicing": "single"}, {"degree": 1, "register": 72, "voicing": "single"}], "articulation": "legato"},
        {"name": "zouk fusion layered guitar and keyboard response synth hook cadence", "shortName": "Synth hook cadence", "description": "Finish with a two-note answer in the guitar's gap, then leave the next entrance unobstructed.", "role": "harmony", "onsets": [2.75, 3.5], "instruments": ["synth"], "cycleLength": 1, "durations": [0.45, 0.4], "pitches": [{"degree": 3, "register": 72, "voicing": "single"}, {"degree": 1, "register": 72, "voicing": "single"}], "phraseEnd": true, "articulation": "legato"},
        {"name": "zouk fusion layered guitar and keyboard response low anchor", "role": "bass", "onsets": [0, 0.75, 1.5, 2.5, 3.75], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.6, 0.6, 0.25]},
        {"name": "zouk fusion layered guitar and keyboard response kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 0.75, 1.0, 1, 1.5, 2.0, 2.5, 2.5, 3.0, 3.25, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "kick", "hat", "snare", "hat", "hat", "hat", "kick", "hat", "snare", "hat", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "hat", "kick", "hat", "snare"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.42, 0.92, 0.28, 0.85], "articulation": "accent", "shortName": "Zouk fusion broken pocket", "description": "Practice this two-bar zouk fusion broken pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "zouk fusion layered guitar and keyboard response drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "hat", "kick", "hat", "snare"], "accents": [0.5, 0.5, 0.5, 0.92, 0.5, 0.85], "shortName": "Zouk fusion close", "description": "Close with the last two beats of the zouk fusion broken pocket; keep the spaces clear and land the next phrase together."},
        {"name": "zouk fusion layered guitar and keyboard response shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "accent", "open", "roll"],
        "shaker": ["ghost", "accent", "roll"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "accent", "open", "roll"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "accent", "roll"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    },
    {
      "id": "lambazouk-oriented",
      "name": "Lambazouk-Oriented",
      "description": "Lambazouk-Oriented: a lilting acoustic hook rides anticipated bass and a quicker lambada-derived dance pull. Keep the syncopations elastic and the turnarounds easy to feel.",
      "patterns": ["lambazouk lilting syncopated bass and acoustic hook", "faster continuous dance groove"],
      "techniques": ["muted-strum", "arpeggio", "legato", "portamento", "ghost-note", "short-chord-stab", "bright percussion", "rolling guitar/keys", "accent", "staccato", "vibrato", "strum", "legato-single-note", "ghost", "roll", "open"],
      "harmony": ["Am7", "Fmaj7", "C", "G", "Dm7", "G7", "Cmaj7", "simple major/minor dance loops"],
      "meter": "4/4",
      "tempo": [104, 120],
      "scale": "minor",
      "roles": {
        "lead": ["voice", "accordion"],
        "harmony": ["guitar", "synth"],
        "bass": ["bass"],
        "percussion": ["drums", "shaker"]
      },
      "progressions": {
        "intro": ["Am7", "Fmaj7", "C", "G"],
        "verse": ["Dm7", "G7", "Cmaj7", "Am7"],
        "outro": ["Am7", "Am7"]
      },
      "requiresChords": true,
      "harmonicRhythm": "bar",
      "harmonyModel": "functional",
      "bassMotion": "tumbao",
      "form": [
        {"label": "intro", "bars": 4},
        {"label": "verse", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "verse", "bars": 8},
        {"label": "instrumental", "bars": 8},
        {"label": "refrain", "bars": 8},
        {"label": "outro", "bars": 4}
      ],
      "groove": {"swingPercentage": 50, "anticipationOffsetSteps": 1, "microtimingFeel": "straight", "humanizeJitterMs": 7},
      "cells": [
        {"name": "lambazouk lilting syncopated bass and acoustic hook voice statement", "role": "lead", "onsets": [0, 0.75, 1.5], "instruments": ["voice"], "cycleLength": 1, "durations": [0.45, 0.45, 0.45], "articulation": "legato"},
        {"name":"lambazouk lilting syncopated bass and acoustic hook guitar accompaniment","role":"harmony","onsets":[0.25,0.75,1.5,2.25,3,3.5],"instruments":["guitar"],"cycleLength":1,"durations":[0.18,0.22,0.28,0.18,0.28,0.18],"articulation":"staccato","shortName":"Lambazouk guitar lift","accents":[0.56,0.7,0.48,0.62,0.76,0.5],"microtiming":[0,-2,-3,0,-2,-3],"description":"Give the acoustic chords a lilting pattern of short pickups and longer replies. Keep the supple forward pull against the anticipated bass; do not flatten it into straight four-on-the-floor strums."},
        {"name":"lambazouk lilting syncopated bass and acoustic hook synth chord lift","shortName":"Lambazouk chord lift","description":"Add two light synth lifts between the acoustic guitar’s syncopations. Let the anticipated bass provide the forward pull and keep the chords short.","role":"harmony","onsets":[0.5,2.5],"instruments":["synth"],"cycleLength":1,"durations":[0.3,0.3],"articulation":"staccato","accents":[0.56,0.68],"microtiming":[-2,-2]},
        {"name": "lambazouk lilting syncopated bass and acoustic hook synth cadence landing", "shortName": "Lambazouk landing", "description": "Hold a single chord into the phrase close, then release before the next guitar pickup.", "role": "harmony", "onsets": [3], "instruments": ["synth"], "cycleLength": 1, "durations": [0.8], "phraseEnd": true, "articulation": "legato"},
        {"name": "lambazouk lilting syncopated bass and acoustic hook low anchor", "role": "bass", "onsets": [1.5, 2.5, 3.5], "instruments": ["bass"], "cycleLength": 1, "articulation": "staccato", "durations": [0.6, 0.6, 0.5]},
        {"name": "lambazouk lilting syncopated bass and acoustic hook kit", "role": "percussion", "onsets": [0.0, 0, 0.5, 1.0, 1, 1.5, 1.5, 2.0, 2.5, 2.75, 3.0, 3, 3.5, 3.5, 4.0, 4, 4.5, 5.0, 5, 5.5, 5.5, 6.0, 6.5, 6.75, 7.0, 7, 7.5, 7.5], "instruments": ["drums"], "hits": ["hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "kick", "hat", "kick", "hat", "hat", "snare", "hat", "kick", "hat", "hat", "kick", "hat", "snare", "hat", "kick"], "cycleLength": 2, "accents": [0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.92, 0.42, 0.92, 0.28, 0.42, 0.85, 0.28, 0.92, 0.42, 0.28, 0.92, 0.42, 0.85, 0.28, 0.92], "articulation": "accent", "shortName": "Lambazouk dance pocket", "description": "Practice this two-bar lambazouk dance pocket. Keep the strong anchors clear, play the smaller strokes lightly, and leave its written gaps open. Original ensemble study, not a recording transcription."},
        {"name": "lambazouk lilting syncopated bass and acoustic hook drums cadence fill", "role": "percussion", "onsets": [2.0, 2.5, 2.75, 3.0, 3, 3.5, 3.5], "instruments": ["drums"], "cycleLength": 1, "phraseEnd": true, "articulation": "accent", "hits": ["hat", "hat", "kick", "hat", "snare", "hat", "kick"], "accents": [0.5, 0.5, 0.92, 0.5, 0.85, 0.5, 0.92], "shortName": "Lambazouk dance close", "description": "Close with the last two beats of the lambazouk dance pocket; keep the spaces clear and land the next phrase together."},
        {"name": "lambazouk lilting syncopated bass and acoustic hook shaker pulse", "role": "percussion", "onsets": [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5], "instruments": ["shaker"], "cycleLength": 1, "articulation": "accent"},
        {"name": "Lambazouk accordion reply to the vocal call", "role": "lead", "instruments": ["accordion"], "onsets": [2, 2.75, 3.5], "durations": [0.4, 0.4, 0.4], "articulation": "legato"}
      ],
      "instrumentTechniques": {
        "voice": ["legato", "accent", "staccato", "vibrato"],
        "guitar": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
        "synth": ["legato", "portamento", "accent", "staccato", "vibrato"],
        "bass": ["legato", "ghost-note", "ghost", "accent", "staccato"],
        "drums": ["ghost", "roll", "accent", "open"],
        "shaker": ["ghost", "roll", "accent"]
      },
      "instrumentDialects": {
        "voice:lead": {
          "allowedTechniques": ["legato", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato"
        },
        "guitar:harmony": {
          "allowedTechniques": ["legato", "strum", "arpeggio", "short-chord-stab", "legato-single-note", "muted-strum", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "variantId": "nylon"
        },
        "synth:harmony": {
          "allowedTechniques": ["legato", "portamento", "accent", "staccato", "vibrato"],
          "defaultTechnique": "legato",
          "patchId": "warm-pad"
        },
        "bass:bass": {
          "allowedTechniques": ["legato", "ghost-note", "ghost", "accent", "staccato"],
          "defaultTechnique": "legato"
        },
        "drums:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent", "open"],
          "defaultTechnique": "ghost"
        },
        "shaker:percussion": {
          "allowedTechniques": ["ghost", "roll", "accent"],
          "defaultTechnique": "ghost"
        }
      },
      "mix": {
        "enabled": true,
        "character": {"dryness":0.64,"bassForward":0.46,"width":0.48,"brightness":0.6,"compressionRatio":1.45,"transientSnap":0.72,"subHarmonics":0,"sidechainDucking":0,"delaySend":0.05,"reverbType":"room","saturationType":"tape"},
        "stage": {"width":0.48,"depthRange":0.38,"centerAnchorRoles":["bass","percussion"],"rolePan":{"lead":0,"harmony":-0.12,"bass":0,"percussion":0.12},"roleWidth":{"lead":0.16,"harmony":0.62,"bass":0.16,"percussion":0.34},"preserveNaturalStage":true},
        "dynamics": {"foregroundContrastDb":2.8,"maxTrackBoostDb":3,"maxTrackCutDb":-6,"ensembleBreathing":0.48,"crescendoExpansion":0.45,"silenceContrast":0.72,"peakSectionHeadroomDb":3,"busCompressionAmount":0.22,"busCompressionRatio":2,"densityCompensation":0.34,"sharedForeground":true},
        "masking": {"enabled":true,"minOverlap":0.2,"minPriorityDifference":0.14,"maxPresenceCutDb":2.2,"maxBodyCutDb":0.9,"maxGainCutDb":0.8,"amount":0.52,"preserveCounterpoint":true},
        "ambience": {"roomSize":0.4,"foregroundDepthDifference":0.34,"reverbSend":0.08,"delaySend":0.03,"bloom":0.3,"preDelayMs":12},
        "roles": {"lead":{"mixFunctions":["foreground"],"priority":0.9,"gainDb":0.8,"foregroundGainDb":1.4,"supportGainDb":-0.2,"presenceDb":0.8,"bodyDb":0,"width":0.16,"transientEmphasis":0.15,"maskingPriority":0.95,"ambienceSend":0.1,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.2},"harmony":{"mixFunctions":["harmonic-support"],"priority":0.55,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.2,"width":0.62,"transientEmphasis":0.15,"maskingPriority":0.52,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":false,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48},"bass":{"mixFunctions":["low-anchor"],"priority":0.82,"gainDb":0.4,"foregroundGainDb":0.5,"supportGainDb":-1,"presenceDb":-0.15,"bodyDb":0.55,"width":0.16,"transientEmphasis":0.3,"maskingPriority":0.86,"ambienceSend":0.16,"protectLowEnd":true,"protectRhythmicDefinition":true,"mayYieldSpectrally":false,"mayYieldInGain":false,"depth":0.3},"percussion":{"mixFunctions":["pulse-anchor","rhythmic-support"],"priority":0.72,"gainDb":-1.2,"foregroundGainDb":0,"supportGainDb":-1,"presenceDb":0.25,"bodyDb":0,"width":0.34,"transientEmphasis":0.6,"maskingPriority":0.72,"ambienceSend":0.16,"protectLowEnd":false,"protectRhythmicDefinition":true,"mayYieldSpectrally":true,"mayYieldInGain":true,"depth":0.48}},
        "sections": {"intro":{"gainDb":-1,"depth":0.46,"width":0.39359999999999995},"breakdown":{"gainDb":-1.5,"ambience":1.12},"chorus":{"gainDb":0.7,"width":0.5376000000000001,"foregroundContrast":1.1},"climax":{"gainDb":0.8,"width":0.5568,"foregroundContrast":1.2}},
        "transitions": {"attackMs":120,"releaseMs":480,"sectionTransitionMs":640,"foregroundHandoffMs":320,"spectralRampMs":240,"lookaheadMs":100},
        "buses": {"glueAmount":0.18,"lowAnchorCompression":0.18,"rhythmCompression":0.12,"melodicCompression":0.08,"ensembleCompression":0.14,"parallelCompression":0,"sharedRoom":true,"roleBus":{"lead":"melodic","harmony":"harmony","bass":"lowAnchor","percussion":"percussion"}}
      }
    }
  ]
};
