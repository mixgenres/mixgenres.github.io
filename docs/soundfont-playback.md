# SoundFont playback

SoundFont is the app's only instrument playback engine. Live playback schedules events in an AudioWorklet; export renders the same requested parts through the sample runtime. There is no generated-oscillator fallback or legacy engine selector.

## Instruments and techniques

Genre data selects instrument roles and musical techniques. The planner maps those parts to packaged presets and note events. Articulations are expressed in the score and routed to alternate patches, note lengths, bends, or controllers where the bank supports them. Tango bandoneon uses dedicated samples with separate push/pull presets built from the available recorded notes.

The app packages 17 selectively built banks, about 81.6 MiB compressed. Banks load on demand. Spanish guitar, piano, bass, electric guitar, bandoneon, timpani, and twelve percussion families use dedicated recordings. Other instruments use the closest available named GM tone. Some regional instruments and techniques remain approximations; a preset mapping does not prove acoustic authenticity. Unused GM programs are omitted, and every bank uses the same q6 SF3 encoding.

## Live playback and export

AudioWorklet frames schedule live events. Pause preserves sample state; seek primes voices and controller history. MP3 export encodes bounded PCM blocks. Live and offline output share musical events and mix decisions, while their browser and Node mastering backends may sound slightly different.

See [bank sources and rebuild instructions](../src/assets/soundfonts/README.md) and [the shared mixing model](dynamic-mixing.md).
