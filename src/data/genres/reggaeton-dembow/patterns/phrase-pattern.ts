import type { MusicalPattern } from '../../../schema';

export const REGGAETON_DEMBOW_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "rg-11-dembow-vocal-pickup",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-modern"],
          "name": "Dembow Vocal Pickup",
          "family": "synth",
          "category": "phrasePattern",
          "description": "Short pickup into the next bar,",
          "tags": [
            "pickup",
            "vocal pocket"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "synth"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "synth"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            13,
            14,
            15
          ],
          "accentProfile": [
            0.5,
            0.7,
            0.9
          ],
          "syncopationRating": 1,
          "anticipationOffset": -1,
          "swingPercentage": 50,
          "articulations": [" vocal pocket"],
          "supportedEnergy": [1, 2],
          "phrasePosition": [
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
    
          "variants": [],
          "provenance": "Authored genre-pack pattern based on Voice; designed for engine-level recombination rather than literal transcription.",
          "authenticityTags": [
            "pickup",
            "vocal pocket"
          ],
          "danceTags": [
            "festival-fusion"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.82,
          "enabled": true
        },
  {
          "id": "rg-16-perreo-synth-hook",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow-perreo", "reggaeton-modern"],
          "name": "Perreo Minor Synth Hook",
          "family": "Melody",
          "category": "phrasePattern",
          "description": "Aggressive syncopated 16th minor synth hook driving over the Dembow beat",
          "tags": ["perreo", "synth", "lead", "minor-hook"],
          "scopes": ["measure", "phrase", "region", "track", "song"],
          "roles": ["lead", "melody"],
          "approaches": ["lead", "melody"],
          "instruments": ["synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [0, 3, 6, 8, 11, 14],
          "accentProfile": [1.0, 0.75, 0.85, 0.95, 0.75, 0.85],
          "velocityProfile": [0.9, 0.8, 0.85, 0.9, 0.8, 0.85],
          "durationGrid": [2, 2, 2, 2, 2, 2],
          "syncopationRating": 0.75,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["staccato", "fm-bite"],
          "supportedEnergy": [2, 3, 4, 5],
          "phrasePosition": ["start", "middle", "end"],
          "sectionUsage": ["intro", "verse", "chorus", "solo"],
          "variants": [],
          "provenance": "Authored native Reggaeton lead pattern.",
          "authenticityTags": ["reggaeton", "perreo", "synth-lead"],
          "danceTags": ["festival-fusion"],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.95,
          "enabled": true
        },
  {
          "id": "rg-17-melodic-pluck-lead",
          "worldId": "reggaeton-dembow",
          "styleIds": ["reggaeton-dembow-melodic", "reggaeton-modern"],
          "name": "Medellín Plucked Synth Lead",
          "family": "Melody",
          "category": "phrasePattern",
          "description": "Smooth Colombia Medellín style plucked synth melody with romantic vocal-style phrasing",
          "tags": ["medellin", "synth", "pluck", "lead"],
          "scopes": ["measure", "phrase", "region", "track", "song"],
          "roles": ["lead", "melody"],
          "approaches": ["lead", "melody"],
          "instruments": ["synth"],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [0, 2, 4, 7, 10, 12, 14],
          "accentProfile": [0.9, 0.7, 0.8, 0.85, 0.9, 0.7, 0.8],
          "durationGrid": [2, 2, 3, 2, 2, 2, 2],
          "syncopationRating": 0.6,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": ["tight-env-pluck"],
          "supportedEnergy": [1, 2, 3, 4],
          "phrasePosition": ["start", "middle", "end"],
          "sectionUsage": ["intro", "verse", "chorus"],
          "variants": [],
          "provenance": "Authored native Reggaeton lead pattern.",
          "authenticityTags": ["reggaeton", "melodic", "pluck-lead"],
          "danceTags": ["social-partner"],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.95,
          "enabled": true
        }
];
