# Engine API contract

The audited versions are `@elemaudio/core` 4.0.1 and `@elemaudio/offline-renderer` 4.0.3. The app constructs signals with the exported `el` standard library and submits them through the public offline renderer. The unused live worklet and its graph-rewriting/preparation worker have been removed, along with the web-renderer dependency.

| Boundary | Supported calls | Reference |
| --- | --- | --- |
| Signal construction | Typed `el` functions, keyed constants, documented noise seeds and delay/filter properties | [Core API](https://www.elementary.audio/docs/packages/core), [noise](https://www.elementary.audio/docs/reference/noise), [delay](https://www.elementary.audio/docs/reference/delay), [keys](https://www.elementary.audio/docs/guides/Understanding_Keys) |
| Physical audio | `new OfflineRenderer()`, `initialize`, awaited `render`, `process`, awaited `gc`, `reset` | [Offline renderer](https://www.elementary.audio/docs/packages/offline-renderer) |
| Native master | `OfflineAudioContext`, native nodes/AudioParams, `AudioBuffer`, `startRendering` | [OfflineAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) |
| Transport | `AudioContext.resume/suspend/close`, source-node `start/stop`, gain automation | [AudioBufferSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode) |
| Worker lifecycle | Typed messages, transferable PCM buffers, `Worker.terminate` | [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) |

`offlineRenderer.ts` gives our calls strict parameter types because the upstream renderer declarations have loose parameters. It does not assert an internal renderer shape, mutate a native processor, inspect the WASM heap, read opaque node properties/children, or generate packed instructions.

Each independent physical stem job initializes a fresh renderer. A public reset/GC reuse experiment did not reproduce fresh oscillator state in the locked backend. Independent jobs therefore use the documented constructor instead. `reset` is cleanup, not a native destructor. Version 4.0.3 exposes no public dispose method; playback terminates and replaces a worker after 64 renderer initializations so each WASM environment has a bounded lifetime without frequent worker restarts. Diagnostics report application-owned initialization, retirement and activity counters and retained PCM bytes, not private heap measurements.

Graph changes during a physical job use `await render(left, right)`, so Elementary owns reconciliation and keyed state. Event-free spans use the documented multi-block `process` call. Intermediate spans end on the same 64-sample event boundaries; a final partial block is retained only to its requested frame count. The documented noise seed remains explicit for repeatable output.

The public `createRef` API is available for future live control, but there is no live Elementary worklet in the current player. Reintroducing one would require mounting refs with `render` before calling their public property setters, as described in [Using Refs](https://www.elementary.audio/docs/guides/Using_Refs). Do not write into a renderer delegate or message queue.

Content-addressed musical/DSP caches, typed-array views, worker priorities and native PCM scheduling remain application-level optimizations. They do not change the dependency's lifecycle or graph representation. Physical DSP sections own complete attacks and releases. Transport chunks are separate sample-aligned windows with master pre/post-roll, scheduled contiguously; a missed preparation deadline pauses at the first unheard sample and resumes there.

`npm run lint` checks strict TypeScript and runs `audit:api`. `npm run check` also includes the API boundary guard. The guard rejects explicit loose types, type-check suppressions, internal Elementary members/imports and renderer calls outside the typed boundary. Runtime regressions exercise keyed reconciliation, fresh-job repeatability, controller/gesture behavior, audio exports, and transport scheduling. They complement the static guard; neither is a proof of every possible runtime parameter or device's performance.

`scripts/audit-tango-graph.ts` reports documented reconciliation statistics instead of traversing Elementary's opaque graph representation. Instrument probes initialize independent renderers rather than treating reset as fresh synthesis. Browser diagnostics measure output signal and underruns; they cannot certify acoustic authenticity or hardware audibility.
