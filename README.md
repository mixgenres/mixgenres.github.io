# MixGenres

MixGenres is a browser-based songwriting and learning tool. Choose a musical style, start from an editable example, reshape its sections, chords, patterns, and parts, then play or export the result.

## Music and playback

`src/data` is the source of truth for genres, patterns, instruments, and example arrangements. Examples are educational adaptations, not note-for-note transcriptions. Keep a style's rhythm, phrasing, ensemble roles, and regional character distinct; prefer a few clear, playable ideas over generic filler.

One SoundFont engine powers live playback and MP3/WAV export. The score compiler decides notes, phrasing, and techniques; playback plans and renders only the requested parts, then sends them through the shared mixer. SoundFont banks load on demand. See [the engine pipeline](docs/engine-pipeline.md), [SoundFont playback](docs/soundfont-playback.md), and [mixing](docs/dynamic-mixing.md).

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

Use `npm run render-song -- <genre> /tmp/example.mp3 16` to render an audition. SoundFont source and packaging notes are in [the asset guide](src/assets/soundfonts/README.md).
