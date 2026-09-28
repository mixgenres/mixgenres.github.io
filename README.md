# MixGenres

MixGenres is a browser-based musical generation and audio-rendering engine. A song style is treated as a **musical grammar**: its form, harmony, rhythm, pattern vocabulary, instrument palette, performance idioms, and production behavior are resolved before note realization.

## Musical source of truth

The resolved `SongStyle` is authoritative. Instrument classification never overrides the style grammar. A guitar can therefore be fingerstyle, flamenco, jazz comping, rock riffing, or metal rhythm depending on the authored style and role; a piano can be montuno, jazz comping, gospel, blues, rock, or another style-specific performance rather than a universal chord block.

Style schemas actively drive generation through:

- form and phrase lengths
- meter, subdivision, swing, anticipation, and microtiming
- harmonic rhythm, voicing, and bass motion
- melody contour, ornament vocabulary, and call/response
- instrument palette and pattern selection
- role-specific articulation and technique expectations
- section interaction, density, and register allocation
- style-specific mix and production behavior

Technique expectations are checked against the instrument's real gesture vocabulary before they are applied. A technique that the physical instrument cannot express is not invented as metadata.

## Instrument performance

Instrument profiles describe physical range, polyphony, excitation, sustained behavior, actuation limits, and technique gestures. Performance realization uses those capabilities together with the active style.

Examples include:

- flamenco guitar: rasgueado, golpe, picado, tremolo, alzapua, arrastre
- fingerstyle guitar: independent bass/upper voices and finger attacks
- rock/metal guitar: pick attack, muting, riff subdivision, tight stops
- piano: style-specific comping, montuno, extended voicing, space, and accents
- upright/double bass: walking, pizzicato, arco, ghosting, approach notes, and style-specific note length
- slap bass: thumb, pop, muted/dead notes, slides, hammer-ons and pull-offs
- bowed strings: style-appropriate sustain, bow articulation, portamento, spiccato, and phrase release
- winds/brass: breath, tonguing, falls, doits, shakes, register transitions, and phrase constraints

The engine does not shorten an authored physical note merely because another instrument overlaps it. Ensemble interaction primarily changes emphasis, density, and attention while preserving the instrument's declared articulation and decay behavior.

## Reference calibration

Style expectations are calibrated against documented musical practice and representative repertoire. References are used as a **sanity check**, not as a replacement for the authored style grammar. The style always wins when an intentional departure is authored.

## Validation

The project has two complementary validation layers:

1. **Schema validation** — every catalog style resolves to a complete musical/performance contract, and its selected patterns and instrument techniques are usable.
2. **Rendered-song validation** — default songs are compiled and rendered so rhythm, articulation, technique usage, instrument range, density, and mix behavior are tested on actual generated events/audio.

Generated audit reports are intentionally not stored in the repository. Long-lived source-of-truth data belongs in the engine and style definitions; transient validation output belongs in CI or local runs.

## Development

```bash
npm install
npm run check
npm run test
npm run test:audio
npm run build:static
```

To render a song locally:

```bash
npm run render-song -- salsa /tmp/salsa.mp3
```

To run the style-performance audit without creating repository report files:

```bash
npx tsx scripts/audit-style-performance.ts
```
