# SoundFont playback

SoundFont is the app's only instrument playback engine. Live playback schedules events in an AudioWorklet; export renders the same requested parts through the sample runtime. There is no generated-oscillator fallback or legacy engine selector.

## Instruments and techniques

Genre data selects instrument roles and musical techniques. The planner maps those parts to packaged presets and note events. Articulations are expressed in the score and routed to alternate patches, note lengths, bends, or controllers where the bank supports them. Tango bandoneon uses dedicated samples with separate push/pull presets built from the available recorded notes.

The app packages 17 selectively built banks, about 131.5 MiB compressed. Banks load on demand. Spanish guitar, piano, bass, electric guitar, percussion, and bandoneon use dedicated material; other instruments use the closest available family preset. Some regional instruments and techniques remain approximations. A preset mapping does not prove acoustic authenticity.

## Live playback and export

AudioWorklet frames schedule live events. Pause preserves sample state; seek primes voices and controller history. MP3 export encodes bounded PCM blocks. Live and offline output share musical events and mix decisions, while their browser and Node mastering backends may sound slightly different.

See [bank sources and rebuild instructions](../src/assets/soundfonts/README.md) and [the shared mixing model](dynamic-mixing.md).
