# Music engine and preparation cache

The song editor compiles four explicit musical layers. `compileSongPipeline` is the entry point; `arrangeBand` provides the performance projection used by composition callers. The Score panel exposes each layer and exports the complete notation, interpretation, transitions and sound plan.

```mermaid
flowchart LR
  UI[Song editor] --> N[1. Written notation]
  N --> B[2. Band interpretation]
  B --> P[3. Instrument mechanics]
  P --> S[Cached section DSP audio]
  S --> M[4. Continuous ensemble mix]
  M --> A[Prepared AudioBuffer]
  A --> T[Play / pause / seek]
```

## 1. Written notation

`score/notatedScore.ts` produces a compact `NotatedScore`: player/section cells, bar-relative fractional beats, written lengths, rests, pitch descriptors, techniques, variations and optional fingering. Quarter-note fractions retain tuplets and fine authored positions. Expressive microtiming is a separate field.

A pitch is an absolute note/chord, a harmony-relative degree, a named drum component, or an explicit lead-sheet instruction such as improvisation or chord voicing. An improvisation instruction is not presented as a completed written melody. The band layer must resolve it before sound preparation.

Genre and instrument rules live in `data/notation/rules.ts` and instrument definitions. Flamenco vocabulary includes compás, falseta, rasgueado, alzapúa, picado and remate. Written guitar string/fret directions use declared tuning and determine the sounding pitch; inconsistent literal pitches are rejected. Instruments without declared string-number rules must not acquire guessed fingering. Drum notation has distinct kit components, lanes, staff coordinates and noteheads.

## 2. Band interpretation

`band/interpretBand.ts` consumes those written cells. Existing genre/style phrase grammars, harmony, scale language, register, voice leading, solo policies and ensemble development remain in this layer. Literal pitches and explicitly written techniques survive phrase development. Written ties merge into a single physical attack and require a contiguous matching pitch.

`band/interactions.ts` makes relationships such as call/answer, following, mirroring, reinforcing and leaving space explicit. Responses consider actual preceding notes and local harmony; they cannot rewrite literal score pitches. `band/transitions.ts` records the chosen written boundary, chords, tempo, incoming held notes, bellows/button state and authored fill/rest/sustain. Transition fills come from the selected genre's catalog and policies; the planner does not add an arbitrary fill merely because a section ends.

The realized `MusicianScore` contains every final concert pitch, target frequency, velocity, technique and exact written beat. Gate ratios and expressive offsets remain separate. Playback projection makes no further pitch or arrangement choices. MusicXML preserves polyphonic voices, rests, ties, cents and drum identities. Authored TAB is exported when complete; otherwise standard notation is retained. MIDI and GP5 interchange still have their format-specific quantization and instrument limitations.

## 3. Instrument mechanics and DSP

`sound/transformMusicians.ts` materializes excitation, contact, pressure, envelope/release budgets, mutes, instrument/style parameters and instrument-specific mechanics. Notes retain this prepared physical state. Renderers consume it instead of reinterpreting the arrangement.

`playback/dspSections.ts` partitions DSP work by **attack ownership**, not by slicing notes or finished waveforms. The section that starts a note renders its entire hold and release, even across the next boundary. Initial controller values carry into each section; later changes remain active while its owned notes ring. Outgoing audio and the next section overlap naturally.

The current instrument models remain approximations. Separating and caching their controls does not itself make the bandoneon, violin or piano sound like a measured acoustic instrument. Timbre quality still needs model-specific work and listening against recordings.

## 4. Continuous ensemble mix

`playback/renderSongMix.ts` shares preparation between the player, auditions and audio exports. Instrument audio is independent of user faders, pan, mute and solo. These controls act once at the mix stage; authored musical expression controllers remain part of the physical stem. The ensemble retains its section automation, masking, foreground, room and master processing.

The browser sums cached section sources, including overlapping tails, into **one continuous offline master**. It does not create one final mix per note or cut the master at section edges. Prepared sections enter directly, avoiding duplicate whole-instrument PCM arrays. Idle render workers release their WASM heaps before the native master allocates buffers.

`SongPlayer.configure` owns preparation after an edit. Play waits for that job and starts one looping `AudioBufferSourceNode`. Pause, resume and seek read that buffer; they never request DSP. A low-latency output context and a short start ramp reduce warm startup delay.

## Cache dependencies

| Cache | Identity and invalidation | Bound |
|---|---|---|
| Written player/section | Pattern events, role, instrument, meter and notation rules | 2,048 cells |
| Base band player/section | Written cell, harmony, tempo, phrase context, solo/lens policy and relevant next chord | 2,048 cells |
| Realized ensemble | All musical inputs and relationships; excludes faders/pan/mute/solo | 16 songs |
| Part transition | Boundary events, outgoing/incoming harmony, tempo, policy and actual held/mechanical state | 2,048 transitions |
| Physical player/section | Interpreted notes, physical controller identities, instrument/style and incoming transition | 2,048 cells |
| Raw DSP section PCM | Exact timed notes and controllers, instrument/role/style, complete hold/tail window | 192 MiB, 128 entries |
| Complete mixed PCM / native buffer | Active players, section identities, user balance and musical mix timeline | 32 MiB, 128 entries |

Caches use deterministic content identities and bounded LRU eviction. A changed boundary invalidates dependent interpretation/physical state. A local interior edit reuses unaffected player/sections. Mix-only edits preserve physical PCM. Simultaneous requests share preparation jobs; cancelling one subscriber does not cancel another. Main-thread PCM survives worker reassignment. Workers do not keep a duplicate DSP stem cache for these jobs.

Prepared PCM is generated from DSP after editing; it is not a distributed SoundFont or instrument bank. Caches are session-local and disappear on reload. Large entries beyond a cache's byte budget are played but not retained. Initial cold synthesis can still take significant time; there is no claim of instant first-load sound. During song playback the only continuous work is buffer output and transport/playhead updates. Optional `?dev=audio` diagnostics measure click-to-signal at the player's output separately from hardware latency.

## Verification

- `npm run test:score`: first-pass notation, pitch/beat preservation, ties, drum notation, fingering, interactions, transition invalidation and preparation contracts.
- `npm run audit:accuracy`: all catalog styles through notation, interpretation and physical controls; saves complete review data.
- `npm run check:audio`: structural/behavior checks, PCM regressions, instrument mechanisms and ensemble excerpts.
- `node --import tsx scripts/benchmark-dsp-cache.ts`: complete 40-bar Golden Age tango; compares cold preparation, replay, mixer edits and a one-bar edit, and asserts rendering does not mutate notes.
- Browser player and native-master passes verify actual transport and output. Numerical and structural checks do not certify perceptual authenticity.

## Golden Age comparison

The Golden Age example uses its complete recording arrangement. Exact player, bar and note counts depend on the selected style and edits; the benchmark reports the current example counts. Caching must preserve those musical events and sentences.

The existing Golden Age calibration reference is Aníbal Troilo's **Quejas de bandoneón**. [Todo Tango documents the 27 September 1944 recording](https://www.todotango.com/musica/tema/691/Quejas-de-bandoneon/). [Arranger Korey Ireland describes his work from that recording and orchestra manuscripts](https://www.communitytangoorchestra.org/arrangement/quejas-de-bandoneon/), and highlights its [low-register trio shared between bandoneon and piano, and demanding variation](https://www.communitytangoorchestra.org/arrangements/new-arrangement-quejas-de-bandoneon/).

| Reference property | Current study / engine |
|---|---|
| A composed lower-register trio and distinctive variation | Separate sections and player sentences exist; short catalog motifs are not a transcription of that melodic development |
| Bandoneon/piano sharing and ensemble response | Explicit player relationships, harmonic interpretation and authored patterns; four-part ensemble is smaller than an orquesta típica |
| Sustained lyrical arcs alongside articulated dance rhythm | Exact written lengths, gate expression, techniques and continuous release tails survive the cache |
| Acoustic timbre, collective phrasing and recorded orchestral depth | Current DSP cores remain approximations; cache integrity is not evidence of matching the recording |

The comparison establishes a musical reference and exposes remaining composition/timbre gaps. It does not claim an audio listening verdict or equivalence to Troilo's recording.
