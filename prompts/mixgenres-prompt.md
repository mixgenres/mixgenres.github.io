ABSOLUTE SCOPE BOUNDARY & HARD EXCLUSIONS
YOU ARE STRICTLY FORBIDDEN FROM TOUCHING:
Any UI components, views, pages, or layout files (src/ui/, components, HTML, CSS, Tailwind classes).
Any SEO elements, meta tags, headers, analytics, landing page copy, or web marketing scripts.
Any front-end state management or visual controls.
YOUR EDITS ARE EXCLUSIVELY RESTRICTED TO:
The Data Layer (schemas, definitions, metadata resolution, genre/instrument patterns, canonical song mappings).
The Performance, Arrangement & Fusion Engines (ensemble logic, deterministic micro-timing, phrasing, harmonized rules, energy flow, part transitions).
The Audio Engine, DSP & Export Pipeline (synth modules, physical models, Web Audio graph, offline audio rendering, MP3 encoder pipeline).
1. Execution Directives & Workflow Protocols
NO AUDIT DOCUMENTS OR FINDINGS FILES: Do NOT write findings reports, summary notes, or auxiliary markdown documentation. Do NOT ask for approval. Instantly begin writing and refactoring the production TypeScript and Audio Engine code.
IMMEDIATE CODE EXECUTION: Output complete, fully realized TypeScript files. Do not provide partial code snippets, diffs, placeholder functions, or "rest unchanged" comments.
ZERO APPROXIMATION / ZERO DYNAMIC FALLBACKS: Remove all dynamic fallbacks, approximation markers, synthetic stubs, or dynamic audio degradation paths. If an instrument or technique is defined, its synthesis model and performance rules MUST be 100% implemented, static, robust, and physically accurate. Do not allow silent fallbacks to generic audio nodes.
100% DETERMINISTIC REPRODUCIBILITY: Given a seed, key, tempo, and genre/fusion configuration, the engine MUST generate identical sample-accurate Web Audio buffers, micro-timing grids, and MP3 binaries every single time. Eliminate unseeded runtime Math.random() calls across the entire codebase.
2. Hardened Audio DSP Engine & MP3 Production Pipeline
2.1 Synthesis & DSP Hardening
Pure Code Synthesis: Eliminate all sample dependencies. Every sound must be procedurally generated via deterministic Web Audio API nodes, custom AudioWorklets, Karplus-Strong physical modeling, FM synthesis, modal synthesis, and formant filtering.
Signal Chain Integrity: Implement zero-crossing gain envelopes, anti-aliasing filters, band-limited oscillators, and master brickwall limiting to prevent digital clipping, popping, or DC offset across all track counts.
Physical Playability Limits: Hard-code realistic physical constraints per instrument (fingerboard span, vocal range, breath/bow fatigue, max simultaneous polyphony, drum limb availability).
2.2 Micro-Timing & Master Clock
Sample-Accurate Scheduling: The playback and offline rendering engines must use absolute Web Audio time scheduling (AudioContext.currentTime / OfflineAudioContext).
Idiosyncratic Feel Logic: Hard-code exact per-instrument time offsets (e.g., bass sitting on/ahead of the beat, Neo-Soul/D'Angelo lay-back), MPC swing ratios, and velocity curves directly into the performance grid using seed-deterministic math.
2.3 Hardened MP3 & Audio Export Pipeline
Offline Audio Processing: Build a dedicated, non-realtime OfflineAudioContext engine for exports.
Robust MP3 Encoding: Integrate a static, deterministic LAME/WASM MP3 encoding pipeline that converts AudioBuffer streams into MP3 binaries without audio glitches, buffer underruns, or truncation at song boundaries.
3. Exhaustive Universal Genre & Musicology Overhaul
Every single style, genre, sub-style, and instrument MUST be fully reworked, deeply articulated, and expanded. Every genre pattern, chord progression, instrument voicing, and rhythm cell MUST be validated against canonical real-world reference songs.
3.1 Electronic, Dance & Club
House / Techno / Trance: 4/4 macro-grids, sidechain envelope pumping (ducking bass/synths to kick), 909/808 synthesis models, 303 acid glides (accent + filter envelope tie), riser/drop tension curves, build-up snare rolls, and LFO filter sweeps.
Bass Music (Dubstep / D&B / UK Garage): Reese bass detuning, LFO wobble rate automation synced to tempo grids (1/4 to 1/32 triplets), 2-step syncopated snare placements, granular synthesis emulation, and half-time breakdowns.
Global Club (Amapiano / Reggaeton / Afrobeats): Shaker polyrhythms, log drum synthesis (pitch envelope decay + heavy sine sub), Dembow rhythm structures (3+3+2 tresillo variants), and Dancehall cross-rhythms.
3.2 Hip-Hop & R&B
Trap & Drill: 808 sub-bass synthesis with glide/portamento pitch-envelope matrices, triplet and 1/32nd note hi-hat ratchets, syncopated 808 sliding (Drill), and dark Phrygian/harmonic minor loops.
Boom Bap & Lo-Fi: Hard MPC swing (e.g., 58-62%), vinyl crackle generation, tape wow/flutter pitch modulation, bit-crushed drum hits, and chopped jazz-chord stab placements.
R&B / Neo-Soul: Melisma (vocal run pitch grids), dense extended chords (minor 11ths, 13ths), extreme micro-timing lay-back (snare dragging by 10-20ms), and pentatonic bass fills.
3.3 Rock, Metal & Punk
Classic / Grunge / Punk: Power chord (root-fifth-octave) locking, palm-muted 8th notes, feedback generation (delay + distortion loops), down-stroke aggression velocity curves.
Modern & Extreme Metal (Djent / Black / Death): Polymetric riffing (e.g., 4/4 drums over 7/8 guitar riffs interlocking every 28 beats), double-kick blast beats, tremolo picking grids, extreme string bending, and pinch harmonics.
Shoegaze / Math Rock: Wall-of-sound convolution reverb matrices, glide guitar (whammy bar continuous pitch shifting synced to strum), and tapping arpeggio grids.
3.4 Jazz, Blues & Traditional Western
Jazz (All Eras): Swing ratios mapped to tempo, walking bass rules (chromatic approaches, voice leading), rootless A/B shell voicings, drop-2, quartal stacks, Freddie Green comping, and La Pompe strumming (Gypsy Jazz).
Blues & Country: 12-bar shuffle matrices, turnarounds, Travis picking (alternating thumb bass), pedal steel pitch bending (multiple strings bending to specific intervals simultaneously).
Classical & Cinematic: Baroque counterpoint (strict voice leading, fugue subject parsing), Romantic rubato (tempo flexing), Cinematic trailer scoring (Brahms hits, ostinato spiccato strings, Shepard tone risers, brass swells).
3.5 Flamenco, Tango & Latin World
Flamenco: Full compás engine (12-count cycles: Soleá, Bulerías). Authentic guitar techniques: Rasgueado, alzapúa, picado, arpegio. Percussion: Palmas (claras/sordas), cajón, and taconeo.
Tango: Marcato in 4, Yumba, 3-3-2 syncopation. Full technique modeling: Bandoneón (bellows swell, arrastre), Violin (chicharra, látigo), Contrabass (tambor slaps).
Latin: Salsa/Son (Clave 2-3 / 3-2, Montuno, Tumbao), Samba (Surdo, Tamborim, Cuíca friction models).
4. Advanced Real-Song Mapping & Energy Flow Engine
You must implement a mathematically rigorous matrix linking Chords + Parts + Energy + Instruments to ensure generated tracks structure themselves indistinguishably from canonical real-world songs.
4.1 Structural Role Mapping Matrix
Parts Dictionary: Songs must be built from defined structural blocks (Intro, Verse, Pre-Chorus, Chorus, Bridge, Breakdown, Drop, Solo, Outro).
Harmonic Rhythm per Part: The engine must alter chord progression density based on the part (e.g., Verse holds chords for 2 bars; Chorus changes every 1/2 bar; Bridge introduces dominant/secondary-dominant substitutions).
Instrument Role Automation: Automatically assign and rotate instrument roles based on the target style. (e.g., A "Lead" role becomes a Distorted Guitar in Rock, a Supersaw in EDM, a Saxophone in Jazz).
4.2 Seamless Energy Dynamics & Transitions
Abrupt, blocky section changes are strictly forbidden. The engine must evaluate the Energy Delta (
) between Part[n] and Part[n+1] and construct organic transitions.
Anticipation & Pushes: Rhythm sections must anticipate the downbeat of a new section by pushing chords/crashes on the "and" of beat 4.
Drum Fills & Percussive Bridges: Automatically inject idiomatically correct drum fills in the final 1-2 bars of a section based on the target genre (e.g., Tom rolls in Rock; snare risers in EDM; silence/drop-outs in Hip-Hop).
Continuous Parameter Automation: Implement smooth Web Audio linearRampToValueAtTime automations across section boundaries for filter cutoffs, reverb throws, and master width.
Voice-Leading Across Boundaries: The final chord voicing of a Verse must algebraically voice-lead into the first chord of the Chorus to prevent jarring harmonic leaps.
Tension and Release: Scale velocity, polyphony, rhythm density, and frequency bandwidth dynamically. A "Chorus" (Energy Level 9) must have a wider stereo spread, denser low-end, and higher polyphony than a "Verse" (Energy Level 4).
5. Universal Fusion Engine
The Fusion engine translates rhythm, harmony, timbre, technique, and form across genres via an explicit role-based matrix:
Rhythmic & Metric Translation: Non-4/4 time structures (e.g., 12-count compás) must not be crushed into 4/4. Translate via 12/8 lattices, 6/4-3/4 alternations, or explicit polymetric alignments. Adjust swing/straight ratios universally across participating instruments.
Harmonic Interoperability: Automate structural harmonic cross-translations (e.g., Flamenco Phrygian dominant over Jazz dominant 
, or Tango descending chromatic basslines to Jazz line-clichés).
6. Codebase Cleanup & Refactoring
Dead Code Elimination: Delete all unused code, obsolete exports, dead types, commented-out logic, and non-static asset references.
No Narrative Comments: Remove all conversational comments (“Here we...”, “Note that...”), banner lines, and TODO tags. Retain only concise, essential musical logic comments.
Type Safety: Enforce strict TypeScript typing across all engine components. Absolutely no any types.
Clean Dependencies: Remove unused packages from package.json. Ensure static browser viability without server-side dependencies.
Human-Centric README: Rewrite README.md into a concise, professional, production manual detailing the audio synthesis pipeline, the Energy/Parts transition matrix, and the directory layout.