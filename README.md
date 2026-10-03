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

## Musical solos and roles

Click the role icon to open the role sheet and change the musical role or select **Solo in this part**. Click the instrument name to open the instrument selector and control silence for the part or song. Assignments use track IDs and are independent of part names. **Genre default** follows the current part's resolved genre/style; accompanied, unaccompanied, and trading modes can be chosen explicitly. With several soloists, accompanied and unaccompanied modes feature them together; trading rotates through them in selection order.

Genre definitions live in `src/data/performance/soloDefinitions.ts`. Each specifies backing coverage, a backing energy offset, phrase length, and trading length. Styles can override the full definition through `arrangement.soloDefinition`. Backing offsets affect resolved performance energy without changing authored energy values. Muted or silent soloists are excluded; if none can play, normal ensemble behavior resumes. Live playback and MP3 export use the same compiled solo events.

The defaults represent selectable arrangement choices, not exclusive rules about a genre. Jazz accompaniment/trading and unaccompanied passages are described in the [Smithsonian jazz glossary](https://amhistory.si.edu/jazz/education/Glossary.pdf); Flamenco's rhythm-backed guitar passages are illustrated by [José del Calli's account of accompanying falsetas](https://tablaoflamenco1911.com/es/palmas-flamencas/). All genres offer an unaccompanied override.

## Reference calibration

Style expectations are calibrated against documented musical practice and representative repertoire. References are used as a **sanity check**, not as a replacement for the authored style grammar. The style always wins when an intentional departure is authored.

## Validation

The project has two complementary validation layers:

1. **Schema validation** — every catalog style resolves to a complete musical/performance contract, and its selected patterns and instrument techniques are usable.
2. **Behavior and audio validation** — focused regressions verify musical interactions; optional PCM checks cover shared renderer mechanisms rather than rendering every genre and style.

Generated audit reports are intentionally not stored in the repository. Long-lived source-of-truth data belongs in `src/data`; transient validation output belongs in CI or local runs.

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

To inspect every catalog property and resolved profile without rendering audio:

```bash
npm run audit:catalog
```

## Sound metadata resolution

Playback and export synthesize instruments from their physical DSP models at 44.1 kHz. Instrument definitions store model parameters and performance behavior. Workers render the requested music, and an in-memory stem cache reuses those results for playback and mixing. There is no downloadable instrument audio library or alternate sample playback backend.

Live playback and MP3 export share `resolveTrackSound` and `resolveTrackGain`. Resolution starts with the catalog's physical model, applies the resolved instrument/style dialect once, and uses the track's assigned role for dialect variants and balance. Partial style dialects retain inherited techniques and physical fields. Authored DSP genre dialects take precedence over generic timbre treatment. Live envelope updates share the same sustain and envelope calculation as graph construction; volume and expression controllers multiply independently instead of replacing the assigned role or user level.

Spotlight controls, state, gain processing, form metadata and APIs have been removed. Musical solo assignments live in the role sheet and retain genre/style policies. Energy selection has its own sheet; effective tempo feel is shown beside BPM.

The genre review keeps continuing dance grooves as accompaniment for dance-oriented features, rhythm-section comping for jazz/swing/blues, and compás with rhythmic harmony for flamenco. Flamenco pitch language follows the selected style rather than a universal Phrygian override. Jazz/swing/blues trading can rest backing during percussion turns. All genres retain explicit unaccompanied and trading options as creative choices; these options are not claims that every mode is customary in every tradition. Phrase lengths are editable policy defaults, and do not infer behavior from part names.

Review references: [Jazz in America: rhythm-section roles](https://www.jazzinamerica.org/LessonPlan/8/3/204), [Smithsonian: salsa and clave](https://latino.si.edu/exhibitions/puro-ritmo/qr/salsas-roots-case), [Andalusian flamenco teaching materials: tonalities and compás](https://www.juntadeandalucia.es/cultura/flamenco/sites/default/files/flamenco/docs/gestion_cultural_materiales_didacticos.pdf).
