# Mixing

The compiled performance contains one mix timeline used by live playback and export. It is built from authored part roles, section changes, phrase boundaries, solos, and note activity. The mixer does not infer musical priorities from instrument names or analyze audio at run time.

Genre and style data supply starting mix contracts. User mix settings override them. The planner resolves per-role gain, presence, stereo position, depth, and bus routing, then schedules changes at phrase or section boundaries. Transient emphasis uses compiled musical attacks: a bounded envelope adds up to 3 dB over the first 60 ms, returning to the original sustained level. Chord tones share one envelope, and sample velocity/layer selection stays independent. Browser live/export and the portable renderer use the same transient lane, including excerpt and seek interpolation.

The audio graph keeps track strips and buses connected during playback. Fader changes reuse the current performance; a new score recompiles the event plan and mix timeline. Export uses the same part events and automation. It renders only requested parts and applies the shared bus/master decisions.

Mix calibration is intentionally small and bounded. Style-specific targets adjust stereo width, bass weight, and brightness while authored mix settings remain primary. There is no automatic loudness servo or broad genre-wide leveler.

The shared master applies a fixed 18 dB program lift, split evenly before and after the style's glue compressor. Track count no longer scales every strip down: it is not a usable peak estimate, and the linked output guard handles summed peaks. Live playback and browser export use the same lift and a -2 dBFS sample-peak ceiling, leaving headroom for lossy encoding. This preserves the arrangement's relative dynamics instead of riding gain from bar to bar.

Low-anchor parts reach the master's dedicated bass path, including kick ducking, rather than disappearing into the general instrument bus. Mixed sections crossfade fixed tape/tube/clip saturation paths and automate the compressor knee and spring return as well as the existing gain, EQ, ambience and dynamics controls. The graph stays connected throughout playback.
