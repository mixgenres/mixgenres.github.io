# Mixing

The compiled performance contains one mix timeline used by live playback and export. It is built from authored part roles, section changes, phrase boundaries, solos, and note activity. The mixer does not infer musical priorities from instrument names or analyze audio at run time.

Genre and style data supply starting mix contracts. User mix settings override them. The planner resolves per-role gain, presence, stereo position, depth, and bus routing, then schedules the changes at phrase or section boundaries rather than per note.

The audio graph keeps track strips and buses connected during playback. Fader changes reuse the current performance; a new score recompiles the event plan and mix timeline. Export uses the same part events and automation. It renders only requested parts and applies the shared bus/master decisions.

Mix calibration is intentionally small and bounded. Style-specific targets adjust stereo width, bass weight, and brightness while authored mix settings remain primary. There is no automatic loudness servo or broad genre-wide leveler.
