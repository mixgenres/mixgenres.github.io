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
  shekere: [69, 70, 54], 'talking-drum': [64, 63, 62], janggu: [64, 38, 62], kendang: [64, 63, 38], 'log-drum': [45, 47, 50], timpani: [48, 50, 53],
  'cumbia-drum': [64, 63, 62], 'bombo-andino': [35, 36, 43], tambora: [35, 38, 64], 'tambor-alegre': [64, 63, 62], 'bombo-leguero': [35, 36, 43],
  taiko: [35, 38, 50], paigu: [47, 50, 48], buk: [64, 63, 38], dholak: [64, 63, 62], 'frame-drum': [54, 64, 63], kebero: [64, 63, 62],
  mridangam: [64, 63, 62], pakhawaj: [64, 63, 62], qraqeb: [56, 67, 68], riq: [54, 75, 56], sabar: [64, 63, 62], tombak: [64, 63, 62],
};

/** IDs that intentionally use the GM kit preset instead of a named component. */
export const PERCUSSION_KIT_IDS = new Set(['drums', 'drum-kit']);

/** Regional instruments with recordings in the curated VCSL source set. These
 * routes use their own named bank 66 presets; the GM note map below remains
 * for instruments without an appropriate compact recording source. */
export const RECORDED_PERCUSSION_ALIASES: Readonly<Record<string,string>> = {
  tombak:'darbuka', guira:'guiro', guacharaca:'guiro', dikanza:'guiro', washboard:'guiro',
  'frame-drum':'frame-drum', riq:'frame-drum', pandeiro:'frame-drum', shekere:'shaker', maracas:'shaker',
};
export const RECORDED_PERCUSSION_PATCHES: Readonly<Record<string,{program:number;takes:number}>> = {
  congas:{program:2,takes:2}, bongos:{program:4,takes:2}, darbuka:{program:6,takes:2},
  'frame-drum':{program:8,takes:2}, guiro:{program:10,takes:2}, claves:{program:12,takes:1},
  agogo:{program:13,takes:1}, cowbell:{program:14,takes:1}, shaker:{program:15,takes:2},
  tambourine:{program:17,takes:2}, gongs:{program:19,takes:1}, 'log-drum':{program:20,takes:3},
};
export const RECORDED_PERCUSSION_KEYS = new Set([
  'congas','bongos','darbuka','frame-drum','guiro','claves','agogo','cowbell','shaker','tambourine','gongs','log-drum',
]);
export function recordedPercussionKey(id:string,midi:number,source:{low:number;mid:number;high:number},action:string) {
  const instrument=RECORDED_PERCUSSION_ALIASES[id]??id;
  const low=midi===source.low,high=midi===source.high;
  if(instrument==='congas')return /slap|mute|heel/.test(action)?(low?38:high?40:39):/tumba/.test(action)?35:low?35:high?37:36;
  if(instrument==='bongos')return (low?35:36)+(/mute|slap/.test(action)?2:0);
  if(instrument==='darbuka')return /rim|tap|slap|ghost/.test(action)?(low?36:high?38:37):low?35:high?39:37;
  if(instrument==='frame-drum')return /mute|choke|closed/.test(action)?37:/brush|hand/.test(action)?35:36;
  if(instrument==='guiro')return /fast|short/.test(action)?35:/hit|tap/.test(action)?36:/slow|drag|long/.test(action)?38:37;
  if(instrument==='agogo')return low?35:36;
  if(instrument==='cowbell')return /double/.test(action)?37:/mute|choke/.test(action)?36:35;
  if(instrument==='shaker')return /up|reverse|pickup/.test(action)?36:35;
  if(instrument==='tambourine')return /up|reverse|pickup/.test(action)?36:35;
  if(instrument==='log-drum')return high||midi>source.mid?50:47;
  return 35;
}
