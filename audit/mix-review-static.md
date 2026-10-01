# Static Mix Review / Fix Record

Scope: all 32 canonical genre defaults, plus every authored style in Tango, Brazilian, and Reggaeton.
Execution constraint: no Node execution and no MP3 generation were used.

## Fixed gain contract
- Live playback now treats the authored track volume as a scalar on top of `makeupGain × roleGain`.
- MP3 export already used that same multiplication order; the live path was brought into parity.
- Rebuilding the live graph preserves the authored track scalar without discarding instrument calibration.
- MIDI CC 7/11 volume changes now retain the authored track-volume scalar.

## Fixed acoustic/electronic classification
- The catalog declared `bass-lead` and `crystal` as electronic, but the engine electronic-key registry omitted both.
- Both are now explicitly keyed as electronic, eliminating the live/export semantic disagreement for those instruments.
- A complete catalog comparison after the fix reports zero family-vs-engine-key mismatches.

## Fixed level-audit methodology
- The instrument-render audit previously measured only the first 256-sample block while `defaultTrackParams` had already applied `0.8 × makeupGain`.
- It now measures at unit track gain over a 1.5-second note window, so attack-ramping acoustic instruments are not falsely reported as quiet.
- The level-target report therefore applies the mix gain chain exactly once.

## Canonical defaults reviewed

### afrobeats — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `hand-percussion` | body-percussion | perc | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `log-drum` | hand-drums | perc | 0.82 | no |

### bachata — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `bongos` | hand-drums | percussion | 0.80 | no |
| `guiro` | metal-and-wood | perc | 0.82 | no |
| `requinto` | plucked | lead | 0.90 | no |
| `voice` | voice | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `maracas` | metal-and-wood | perc | 0.82 | no |

### blues — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `harmonica` | winds | melody | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `voice` | voice | lead | 0.90 | no |
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `trumpet` | brass | lead | 0.90 | no |

### brazilian — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `flute` | winds | melody | 0.90 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `voice` | voice | lead | 0.90 | no |
| `shaker` | metal-and-wood | perc | 0.82 | no |
| `tenor-sax` | winds | melody | 0.90 | no |

### country — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `steel-guitar` | plucked | comp | 0.82 | no |
| `fiddle` | bowed | lead | 0.90 | no |
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `voice` | voice | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `mandolin` | plucked | lead | 0.90 | no |

### cumbia — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `accordion` | bellows-and-keys | comp | 0.82 | no |
| `drums` | kit | percussion | 0.80 | no |
| `hand-percussion` | body-percussion | perc | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `flute` | winds | melody | 0.90 | no |
| `voice` | voice | lead | 0.90 | no |
| `guacharaca` | metal-and-wood | perc | 0.82 | no |
| `tambora` | hand-drums | perc | 0.82 | no |

### disco — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `strings` | bowed | comp | 0.82 | no |
| `brass` | brass | comp | 0.82 | no |
| `congas` | hand-drums | percussion | 0.80 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `horn-section` | brass | comp | 0.82 | no |

### drum-and-bass — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `sampler` | electronic | lead | 0.90 | yes |
| `dub-echo` | electronic | effect | 0.82 | yes |
| `voice` | voice | lead | 0.90 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `warm-pad` | electronic | pad | 0.82 | yes |
| `saw-lead` | electronic | lead | 0.90 | yes |

### electronic — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `synth` | electronic | lead | 0.90 | yes |
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `sampler` | electronic | lead | 0.90 | yes |
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `bass-lead` | electronic | bass | 0.68 | yes |
| `warm-pad` | electronic | pad | 0.82 | yes |
| `saw-lead` | electronic | lead | 0.90 | yes |

### flamenco — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `spanish-guitar` | plucked | harmony | 0.82 | no |
| `flute` | winds | melody | 0.90 | no |
| `palmas` | body-percussion | perc | 0.82 | no |
| `cajon` | hand-drums | percussion | 0.80 | no |
| `hand-percussion` | body-percussion | perc | 0.82 | no |
| `zapateado` | body-percussion | perc | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `castanets` | metal-and-wood | perc | 0.82 | no |

### folk — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `banjo` | plucked | comp | 0.82 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `drums` | kit | percussion | 0.80 | no |
| `voice` | voice | lead | 0.90 | no |
| `fiddle` | bowed | lead | 0.90 | no |
| `mandolin` | plucked | lead | 0.90 | no |

### funk — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `brass` | brass | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `clavinet` | bellows-and-keys | comp | 0.82 | no |
| `organ` | bellows-and-keys | comp | 0.82 | no |

### gospel — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `choir` | voice | comp | 0.82 | no |
| `drums` | kit | percussion | 0.80 | no |
| `tambourine` | metal-and-wood | perc | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |

### hip-hop — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `sampler` | electronic | lead | 0.90 | yes |
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `turntable` | electronic | lead | 0.90 | yes |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `warm-pad` | electronic | pad | 0.82 | yes |
| `voice` | voice | lead | 0.90 | no |

### house — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `sampler` | electronic | lead | 0.90 | yes |
| `noise-sweep` | electronic | effect | 0.82 | yes |
| `voice` | voice | lead | 0.90 | no |
| `bass` | plucked | bass | 0.68 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |

### industrial — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `synth` | electronic | lead | 0.90 | yes |
| `drums` | kit | percussion | 0.80 | no |
| `sampler` | electronic | lead | 0.90 | yes |
| `bass-lead` | electronic | bass | 0.68 | yes |
| `noise-sweep` | electronic | effect | 0.82 | yes |
| `voice` | voice | lead | 0.90 | no |
| `distortion-guitar` | plucked | comp | 0.82 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |

### jazz — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `alto-sax` | winds | lead | 0.90 | no |
| `trumpet` | brass | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `ride` | metal-and-wood | perc | 0.82 | no |
| `tenor-sax` | winds | melody | 0.90 | no |
| `vibraphone` | metal-and-wood | comp | 0.82 | no |

### kizomba — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `acoustic-guitar` | plucked | harmony | 0.82 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `dikanza` | metal-and-wood | perc | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `rhodes` | bellows-and-keys | comp | 0.82 | no |

### metal — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `overdrive-guitar` | plucked | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `strings` | bowed | comp | 0.82 | no |
| `guitar-harmonics` | plucked | lead | 0.90 | no |

### punk-hardcore — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `distortion-guitar` | plucked | comp | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `voice` | voice | lead | 0.90 | no |
| `overdrive-guitar` | plucked | comp | 0.82 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `backing-vocals` | voice | comp | 0.82 | no |

### r-and-b — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `tambourine` | metal-and-wood | perc | 0.82 | no |
| `strings` | bowed | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `rhodes` | bellows-and-keys | comp | 0.82 | no |
| `warm-pad` | electronic | pad | 0.82 | yes |

### reggae — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `brass` | brass | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `horn-section` | brass | comp | 0.82 | no |

### reggaeton — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `synth` | electronic | lead | 0.90 | yes |
| `sampler` | electronic | lead | 0.90 | yes |
| `maracas` | metal-and-wood | perc | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `congas` | hand-drums | percussion | 0.80 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |

### rock — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `overdrive-guitar` | plucked | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `synth` | electronic | lead | 0.90 | yes |

### salsa — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `brass` | brass | comp | 0.82 | no |
| `timbales` | hand-drums | percussion | 0.80 | no |
| `congas` | hand-drums | percussion | 0.80 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `bass` | plucked | bass | 0.68 | no |
| `voice` | voice | lead | 0.90 | no |
| `bongos` | hand-drums | percussion | 0.80 | no |
| `claves` | metal-and-wood | perc | 0.82 | no |

### ska — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `brass` | brass | comp | 0.82 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `voice` | voice | lead | 0.90 | no |
| `tenor-sax` | winds | melody | 0.90 | no |
| `trombone` | brass | lead | 0.90 | no |

### soul — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `organ` | bellows-and-keys | comp | 0.82 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `brass` | brass | comp | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `horn-section` | brass | comp | 0.82 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |

### swing — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `brass` | brass | comp | 0.82 | no |
| `clarinet` | winds | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `drums` | kit | percussion | 0.80 | no |
| `tenor-sax` | winds | melody | 0.90 | no |
| `jazz-guitar` | plucked | comp | 0.82 | no |
| `trumpet` | brass | lead | 0.90 | no |

### tango — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `bandoneon` | bellows-and-keys | harmony | 0.82 | no |
| `violin` | bowed | melody | 0.86 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `upright-bass` | plucked | bass | 0.68 | no |
| `cello` | bowed | lead | 0.78 | no |
| `electric-guitar` | plucked | harmony | 0.82 | no |
| `spanish-guitar` | plucked | harmony | 0.82 | no |
| `accordion` | bellows-and-keys | comp | 0.82 | no |

### timba — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `timbales` | hand-drums | percussion | 0.80 | no |
| `congas` | hand-drums | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |
| `trombone` | brass | lead | 0.90 | no |
| `voice` | voice | lead | 0.90 | no |
| `bongos` | hand-drums | percussion | 0.80 | no |

### uk-bass — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `drums` | kit | percussion | 0.80 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `sampler` | electronic | lead | 0.90 | yes |
| `synth` | electronic | lead | 0.90 | yes |
| `acid-303` | electronic | lead | 0.90 | yes |
| `warm-pad` | electronic | pad | 0.82 | yes |
| `voice` | voice | lead | 0.90 | no |
| `piano` | bellows-and-keys | harmony | 0.76 | no |

### zouk — 8 tracks
| Instrument | Family | Role | Default volume | Electronic key |
|---|---|---|---:|---|
| `brass` | brass | comp | 0.82 | no |
| `drums` | kit | percussion | 0.80 | no |
| `bass` | plucked | bass | 0.68 | no |
| `synth` | electronic | lead | 0.90 | yes |
| `hand-percussion` | body-percussion | perc | 0.82 | no |
| `voice` | voice | lead | 0.90 | no |
| `sub-bass` | electronic | bass | 0.68 | yes |
| `rhodes` | bellows-and-keys | comp | 0.82 | no |

## Requested full style coverage
- Tango: 13 authored styles.
- Brazilian: 9 authored styles.
- Reggaeton: 12 authored styles.

The fixes are centralized in the runtime gain/classification path, so those styles inherit the same corrected contract without duplicating or stacking per-style gain logic.