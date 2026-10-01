# MixGenres

MixGenres is a browser-based musical generation and audio-rendering engine. A song style supplies musical rules for form, harmony, rhythm, patterns, instruments, performance, and production. Those rules guide song compilation and audio rendering; generated performances are still assembled from reusable patterns and engine rules.

## Musical source of truth

The resolved `SongStyle` provides the active style settings. Instrument capabilities and the genre contract also constrain what the engine can generate and play. A guitar can therefore be fingerstyle, flamenco, jazz comping, rock riffing, or metal rhythm depending on the style and role; a piano can use montuno, jazz comping, gospel, blues, rock, or another style-specific approach.

Style data and genre contracts guide generation through:

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

Note durations are derived from pattern durations, rhythmic spacing, and style/instrument behavior. During compilation, overlapping notes on monophonic instruments may be shortened to make room for a stronger attack, and notes may be omitted when an instrument's polyphony limit is reached. Playback then renders the compiled events using the selected instrument module and performance parameters.

## Reference calibration

The data includes representative repertoire references and authored genre/style descriptions. These provide curation context; they are not an automatic audio-matching or source-separation system. A generated song is a new composition guided by the catalog, not a reconstruction of a reference recording.

## Genre data

Each genre has style definitions, playable instruments, performance rules, patterns, and a compiled eight-part starter. Style coverage follows the genre's distinct traditions; a genre with fewer well-established substyles is not padded with invented categories. Drum & Bass distinguishes Jungle, Liquid, Dancefloor, Jump-Up, Techstep, Neurofunk, Atmospheric and Drumfunk; UK Bass distinguishes UK Garage, 2-Step, Speed Garage, Bassline, Dubstep, UK Funky, Future Garage and Grime. Soul and R&B have separate style records and ensembles. These rules guide new compositions; they do not promise note-for-note reproduction of a specific recording.

The generated catalog schemas in `audit/catalog-schemas/genres/` and `audit/catalog-schemas/starters/` capture genre/style references and each compiled starter's tracks, patterns, gestures, and event counts. Regenerate them with `npm run generate:catalog`.

## Validation and rendering

The available commands cover different checks:

- `npm run check` type-checks the project, checks the data boundary, and validates genre, style, pattern, variant, instrument, starter, and form-template IDs (`npm run check:ids`).
- `npm test` runs `check`, the filter test, and the engine-integrity audit.
- `npm run audit:run` compiles songs for every catalog style and checks style fields, pattern availability, and whether expected gestures appear in compiled notes. It does not render audio.
- `npm run audit:style` compiles every style and checks decision provenance and runtime fallbacks.
- `npm run generate:catalog` validates catalog references and regenerates the per-genre and per-starter JSON schemas.
- `npm run test:audio` compiles every public genre and renders a short MP3 excerpt to check the export path and encoded audio metadata. In Node, it does not run the browser master chain.
- `npm run build:static` builds the browser app.

Some audit scripts write generated reports under `audit/`; the audio regression script also writes MP3s under `/tmp/mixgenres-audio-regression`.

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
npm run render:song -- salsa /tmp/salsa.mp3
```

To run the style-performance compilation audit:

```bash
npm run audit:run
```
