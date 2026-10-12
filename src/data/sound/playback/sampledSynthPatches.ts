/** Pinned GeneralUser waveform sources; envelopes live in the instrument catalog.
 * SF2 supplies a lowpass filter, so ladder/bandpass/highpass are approximations. */
export const SAMPLED_SYNTH_PATCHES: Readonly<Record<string, {program:number;sourceProgram:number}>> = {
  'sub-bass':{program:0,sourceProgram:38}, 'bass-lead':{program:1,sourceProgram:38},
  polysynth:{program:2,sourceProgram:81}, 'saw-lead':{program:3,sourceProgram:81},
  'square-lead':{program:4,sourceProgram:80}, 'warm-pad':{program:5,sourceProgram:88},
  'halo-pad':{program:6,sourceProgram:89}, 'sweep-pad':{program:7,sourceProgram:81},
  'breathing-pad':{program:8,sourceProgram:88}, 'synth-strings':{program:9,sourceProgram:49},
  'synth-brass':{program:10,sourceProgram:61}, 'acid-sequencer':{program:11,sourceProgram:38},
  'ambient-drone':{program:12,sourceProgram:88}, 'noise-transition':{program:13,sourceProgram:121},
};
