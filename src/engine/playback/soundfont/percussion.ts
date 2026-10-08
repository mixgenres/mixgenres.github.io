/** Explicit low/mid/high mappings into the shipped GeneralUser drum preset.
 * These note choices avoid the former silent default to generic tom pitches.
 * Entries are nearest timbre matches where the catalog has no dedicated
 * regional percussion recording; they are not claims of source authenticity.
 */
export const PERCUSSION_SAMPLE_KEYS: Readonly<Record<string, readonly [number, number, number]>> = {
  palmas: [39, 39, 39], 'hand-percussion': [39, 54, 69], 'foot-stomp': [35, 36, 37], cajon: [36, 38, 37], zapateado: [36, 37, 76],
  castanets: [75, 76, 77], congas: [64, 63, 62], bongos: [61, 60, 60], cuica: [78, 79, 79], cowbell: [56, 56, 56], agogo: [67, 68, 68],
  claves: [75, 75, 75], woodblock: [76, 77, 77], triangle: [80, 81, 81], maracas: [70, 70, 70], shaker: [70, 69, 70], guiro: [73, 74, 74], guira: [73, 74, 74], guacharaca: [73, 74, 74],
  cabasa: [69, 69, 69], tambourine: [54, 54, 54], timbales: [65, 66, 37], gongs: [51, 49, 57], kane: [53, 51, 81], bones: [75, 76, 77], dikanza: [73, 74, 74], washboard: [73, 74, 74],
  repinique: [65, 38, 37], tantan: [35, 38, 64], zabumba: [35, 36, 38], bombo: [35, 36, 43], bata: [63, 64, 62], surdo: [35, 36, 43],
  pandeiro: [54, 39, 54], bodhran: [35, 38, 40], tamborim: [75, 76, 77], darbuka: [64, 63, 62], tabla: [64, 63, 62], djembe: [64, 63, 62],
  shekere: [69, 70, 54], 'talking-drum': [64, 63, 62], janggu: [64, 38, 62], kendang: [64, 63, 38], 'log-drum': [45, 47, 50],
  'cumbia-drum': [64, 63, 62], 'bombo-andino': [35, 36, 43], tambora: [35, 38, 64], 'tambor-alegre': [64, 63, 62], 'bombo-leguero': [35, 36, 43],
  taiko: [35, 38, 50], paigu: [47, 50, 48], buk: [64, 63, 38], dholak: [64, 63, 62], 'frame-drum': [54, 64, 63], kebero: [64, 63, 62],
  mridangam: [64, 63, 62], pakhawaj: [64, 63, 62], qraqeb: [56, 67, 68], riq: [54, 75, 56], sabar: [64, 63, 62], tombak: [64, 63, 62],
};

/** Timpani currently has no dedicated source bank; its catalog definition
 * inherits the kit route. Keep it explicit here so that this limitation cannot
 * become an accidental default for arbitrary unpitched instruments. */
export const PERCUSSION_KIT_IDS = new Set(['drums', 'drum-kit', 'timpani']);
