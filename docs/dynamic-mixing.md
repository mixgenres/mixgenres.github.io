# Dynamic role-aware mixing

The compiled `Performance.mixTimeline` is the source of musical mix decisions.
`arrangeBand` builds it after final phrase shaping, solo enforcement, fingering,
and pitch folding. A composition worker returns the same serializable timeline.
Neither playback nor export chooses musical priorities from measured audio.

## Data and resolution

`src/data/sound/schema/dynamicMix.ts` defines the contract. World defaults live in
`WorldContract.timbreSpace.mix`; `mixCharacter` remains supported. Song styles and
human-readable starter profiles use recursive `MixOverride<MixContract>` values.
Nested partials inherit sibling fields. Arrays replace; zero and false are real
values. Invalid mix numbers and malformed scalar values inherit safe values.

Precedence is safe defaults, genre, parent styles in order, applicable sound
influences, the selected style, and user `sound.mix` overrides. Rhythm or melody
influences never import production. Per-part guest lenses never change the global
mix identity. Every resolved leaf has provenance and a decision trace, including
defaults and inherited role policies. The resolved contract and trace are frozen.
The style resolution cache keys actual override values and influence order.

Tango is enabled and calibrated structurally for Tradicional, Guardia Vieja,
Troilo, Pugliese, Milonga, Vals, Nuevo, Piazzolla, Canción and Electrónico. Guardia
Vieja and Piazzolla now have explicit selectable musical style seeds, rather than
unreachable starter profiles. Values are engineering starting points pending
listening/render validation. Worlds without authored dynamic contracts resolve to
neutral mix targets. Set `sound.mix.enabled` to false to retain the baseline mix
for a style.

## Compilation

The planner reads resolved section roles, explicit lead assignments, solo/trading
plans, relationships, phrase boundaries and compiled events. Instrument identity
is consulted only to match an explicitly authored section lead assignment; it
never supplies priority or foreground on its own.

Occupied time is a union of note intervals, including notes sustained across
boundaries. Voiced chords share attack IDs and count as one transient. Activity,
register, sustain and temporal overlap are computed symbolically. Counterlines
can share foreground. An answer can take attention while its caller rests.
Structural importance is independent of foreground importance. Anchors retain
steady gain while masking corrections prefer restrained presence EQ and depth.
Multiple masking requests use the strongest correction instead of accumulating
cuts for every foreground line.

Scenes occur at phrase/section boundaries, solo trading turns, and substantial
ensemble entrances/dropouts. There is no scene or analysis invocation per note.
Sparse sections can move closer; energetic sections can broaden and bloom.
Authored note velocity, phrase dynamics, CC expression, solo backing policy, and
user gain remain separate from scene automation. Density headroom is restrained
and does not target equal loudness between sections.

## Runtime and caching

`MixGraph` creates persistent track EQ, dynamic gain, stereo controls, sends and
logical group buses. Connections are established once per composition. Bus
changes crossfade permanent routing gains. Web Audio ramps execute a common
`compileAutomation` result, with bounded lookahead. Seek restores the value at the
seek time and schedules remaining points; transport loops restart the same lanes.
The master output ceiling remains in the common mastering chain.

MP3/WAV exports render through the same offline graph and timeline. The live
worklet transport also consumes that timeline through the same `MixGraph`.
Composition changes determine active-track routing; fader updates reuse the
compiled performance. Export renders each requested part on demand, then applies
track balance, buses and scene automation. Raw-part exports intentionally omit
scene and bus processing. Ensemble headroom is compiled once and shared by both
consumers. Render excerpts retain the original ramps and interpolate their
starting state. Selected-track exports retain the song's authored timeline
rather than replanning hierarchy based on selected tracks.

Node environments and explicit master bypass use a portable symbolic-mix runtime
for gain, stereo, EQ and bounded ambience. It consumes identical automation
targets and leaves the source part buffers untouched. It does not emulate browser mastering
or promise sample-identical reverb/compression with Web Audio. Diagnostics continue
to report whether browser mastering ran. Native track-strip renders report stem
and output PCM metrics; they do not label unused accumulation buffers as measured
bus audio.

No adaptive metering servo, multiband processing, loudness targeting or transient
processor was introduced. Track `transientAmount` and `compressionAmount` are
reserved intent fields; current audible automation is gain, presence/body EQ,
stage width/pan, depth via ambience sends, room size, and group/master parameters.
Additional genres should receive individually authored contracts and render
calibration rather than inheriting an enabled generic automatic leveler.

## Developer trace and deferred validation

Call `formatMixTrace(performance.mixTimeline)` explicitly in development to view
foreground owners, anchors, masking requests, scene offsets and the complete
resolution trace. The runtime does not log automatically or expose DSP controls
in the product UI.

Coverage in `scripts/dynamic-mix.test.ts` includes recursive inheritance,
provenance, safe values, style/influence precedence, override-cache invalidation,
Tango differentiation, role/solo interpretation, shared foreground, temporal
masking, chord attacks, sustains, neutral fallback, deterministic scenes,
automation seeks, persistent graphs, live/offline scheduling parity, and part
buffer immutability.

Run the focused mix tests, type and API checks, behavior checks and static build:

```sh
npm run test:mix
npm run lint
npm run check
npm run test:audio
npm run build:static
```

Listen across Troilo/Pugliese/Milonga/Nuevo/Piazzolla foreground handoffs, sparse
sections, counterpoint, trading solos and dense climaxes before changing these
calibration values. Check full playback/export, mute plus solo, user faders,
controller expression, seeking, looping, and switching to an uncalibrated world.
