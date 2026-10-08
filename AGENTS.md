# Project guide for coding agents

- Treat `src/data` as the authority for genre identity, style descriptions, patterns, instruments, and song arrangements.
- This is a teaching instrument. Write concise, student-facing pattern names and make parts playable, varied, and stylistically specific. A song arrangement should develop across sections instead of repeating one loop throughout.
- Example songs are adaptations for learning, not verified transcriptions. Do not claim exact recording personnel, harmony, or note-for-note fidelity without direct evidence.
- Playback and export use the same SoundFont event plan and mix. Compute requested parts on demand; do not add pre-rendered audio caches or a second playback engine.
- Keep reference research lightweight: use streaming track pages for sound and score/tab pages such as Songsterr when useful. Aim for 5–8 distinct linked recordings per style under active review; record useful timecodes, and do not download or voice-process reference MP3s. Existing compact lists are seeds, not full coverage, in `docs/genres/*/references.json`.
- Run `npm test` for behavior changes and `npm run build` before finishing a code change. Keep checks focused on product behavior rather than adding report generators.
