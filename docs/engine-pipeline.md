# Music and audio pipeline

The editor compiles a song into a musical performance once, then builds a small sample-event plan for its parts. The live player schedules that plan in an AudioWorklet; export renders selected parts directly through the same SoundFont sample runtime. Both paths feed the shared mixer and master.

```mermaid
flowchart LR
  UI[Song editor] --> N[Written notation]
  N --> B[Band interpretation]
  B --> P[Technique, phrasing and tuning]
  P --> E[Per-part SoundFont event plan]
  E --> W[Live AudioWorklet or direct part renderer]
  W --> M[Ensemble mix and mastering]
  M --> A[MP3 / WAV]
```

## Musical preparation

`score/notatedScore.ts` builds players and sections, fractional beats, note lengths, rests, pitches, techniques and optional fingering. `band/interpretBand.ts` resolves phrase grammar, harmony, register, voice leading and ensemble development. Interactions, solos and section transitions are decided before playback. Written and interpreted attacks preserve score timing, tuning and articulation.

`sound/transformMusicians.ts` resolves instrument mechanics, articulation, sound parameters and tuning into physical note data. This is the musical and performance description of what to play; it does not synthesize audio.

## SoundFont playback and mix

`playback/soundfont/plan.ts` maps those notes to bank, preset, key, velocity, controller and bend events. `soundfont/player.ts` schedules the plan in the live AudioWorklet. `soundfont/render.ts` interprets the same plan for export and analysis. The plan is cheap to rebuild when the musical content changes, and no audio is pre-rendered for playback.

`playback/mp3Export.ts` renders requested parts on demand, then applies track balance, bus routing, scene automation and the shared studio master. MP3 encoding streams bounded blocks; WAV and MP3 share the same rendered mix.

## Reuse and asset caching

| Reused or cached item | Why it remains |
|---|---|
| Notation, interpreted score and physical-part cells | Avoids repeating expensive musical decisions when only presentation or downstream mix settings change. |
| Resolved style and mix contracts | Reuses small deterministic metadata calculations. |
| Compressed SoundFont banks | Hash-verified downloads are reused across sessions; the browser cache is bounded. |

Rendered sample PCM, stems and complete mixes are not cached. Offline export and live playback render from the event plan when requested. Faders and scene automation are applied in the shared downstream mixer, so changing them never requires invalidating sample audio.

## Developer checks

`npm run test:soundfont` exercises presets, sample data, technique routing and event ownership. `npm run test:mix` covers shared bus and scene behavior. `npm run check` runs structural and behavior gates; `npm run check:audio` adds targeted sample rendering and export checks. See [SoundFont playback](./soundfont-playback.md) for live constraints, evidence and limitations.
