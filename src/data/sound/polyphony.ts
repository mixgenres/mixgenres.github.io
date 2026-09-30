/** Ordered fallbacks used when an InstrumentDef does not author polyphony. */
export const POLYPHONY_FALLBACK_RULES: Array<{ roles?: string[]; instrumentPattern?: RegExp; voices: number }> = [
  { roles: ['bass'], instrumentPattern: /bass|tuba|sousaphone/i, voices: 4 },
  { roles: ['lead', 'voice', 'melody'], instrumentPattern: /sax|flute|trumpet|violin|whistle|oboe|clarinet/i, voices: 4 },
  { roles: ['drums'], instrumentPattern: /drums|kick|snare|hats|cajon|timbales|conga|bongo/i, voices: 12 },
  { roles: ['comp', 'pad'], instrumentPattern: /piano|rhodes|clav|guitar|harp|strings|organ|synth/i, voices: 8 },
];
