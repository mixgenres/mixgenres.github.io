import { PERCUSSION_KIT_IDS, PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_PATCHES } from './percussion';

/** Zero-based General MIDI programs. World instruments with no sampled match
 * use an explicit family approximation, exposed in the bank coverage report. */
export const SOUNDFONT_VERSION = 'mixgenres-sf-v6';
export const BANK_PROGRAMS = {
  keys: [4, 5, 6, 7, 16, 19, 20, 21, 22],
  mallets: [8, 9, 10, 11, 12, 13, 14, 15, 117],
  guitars: [24, 25, 26, 28, 31, 32, 35, 36, 38, 46, 104, 105, 106, 107, 108],
  strings: [40, 41, 42, 45, 48, 49],
  winds: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 109, 111],
  brass: [56, 57, 58, 59, 60, 61],
  electronic: [52, 53, 80, 81, 88, 89, 98, 120, 121],
  percussion: [],
  nylon: [],
  steel: [],
  piano: [],
  bass: [],
  drumkit: [],
  electricClean: [],
  electricDrive: [],
  bandoneon: [],
  upright: [],
} as const;
export type BankId = keyof typeof BANK_PROGRAMS;
export interface SamplePatch { bank: number; program: number; drum: boolean; pack: BankId }
const ids: Record<string, number> = {};
function assign(program: number, instruments: string) { for (const id of instruments.split(' ')) ids[id] = program; }
assign(0, 'piano'); assign(4, 'rhodes'); assign(5, 'fm-ep'); assign(6, 'harpsichord'); assign(7, 'clavinet');
assign(8, 'celeste'); assign(9, 'glockenspiel'); assign(10, 'music-box'); assign(11, 'vibraphone');
assign(12, 'marimba marimba-de-chonta'); assign(13, 'xylophone');
assign(14, 'tubular-bells'); assign(117, 'steel-drums'); assign(15, 'dulcimer santur qanun'); assign(16, 'organ');
assign(20, 'harmonium sho'); assign(21, 'accordion concertina melodica'); assign(22, 'harmonica'); assign(23, 'bandoneon');
assign(24, 'guitar requinto cuatro cavaquinho charango tres jarana vihuela krar');
assign(25, 'resonator-guitar bajo-sexto'); assign(26, 'pedal-steel lap-steel');
assign(32, 'upright-bass guitarron guembri'); assign(33, 'bass'); assign(38, 'synth-bass');
assign(40, 'violin sarangi haegeum erhu jinghu gaohu ajaeng masenqo morin-khuur rebab');
assign(41, 'viola'); assign(42, 'cello'); assign(48, 'string-ensemble'); assign(46, 'harp kora');
assign(52, 'choir'); assign(53, 'voice'); assign(56, 'trumpet'); assign(57, 'trombone');
assign(58, 'tuba'); assign(60, 'french-horn'); assign(61, 'horn-section');
assign(64, 'soprano-sax'); assign(65, 'alto-sax'); assign(66, 'tenor-sax'); assign(67, 'bari-sax');
assign(68, 'oboe hichiriki'); assign(69, 'english-horn duduk'); assign(70, 'bassoon'); assign(71, 'clarinet');
assign(72, 'piccolo'); assign(73, 'flute ney bansuri quena xiao dizi ryuteki'); assign(74, 'recorder');
assign(75, 'pan-flute siku'); assign(77, 'shakuhachi'); assign(78, 'tin-whistle low-whistle'); assign(79, 'ocarina');
assign(81, 'synth'); assign(98, 'crystal'); assign(109, 'bagpipes uilleann-pipes'); assign(111, 'suona zurna');
assign(104, 'sitar tanpura rudra-veena veena'); assign(105, 'banjo');
assign(106, 'shamisen biwa oud bouzouki mandolin bandola-llanera baglama dombra setar tar');
assign(107, 'koto gayageum guqin pipa guzheng'); assign(108, 'kalimba berimbau');
export const INSTRUMENT_PROGRAMS: Readonly<Record<string, number>> = ids;

export function patchForInstrument(id: string, percussion = false): SamplePatch {
  if (id === 'piano') return {bank:64,program:0,drum:false,pack:'piano'};
  if (id === 'bass') return {bank:64,program:33,drum:false,pack:'bass'};
  if (id === 'bandoneon') return {bank:73,program:0,drum:false,pack:'bandoneon'};
  if (id === 'upright-bass') return {bank:64,program:0,drum:false,pack:'upright'};
  if (id === 'khomus') return {bank:66,program:22,drum:false,pack:'percussion'};
  if (id === 'balafon') return {bank:66,program:23,drum:false,pack:'mallets'};
  if (id === 'gamelan-metallophone' || id === 'bonang') return {bank:0,program:14,drum:false,pack:'mallets'};
  if (id === 'sampler') return {bank:0,program:81,drum:false,pack:'electronic'};
  if (id === 'turntable') return {bank:66,program:24,drum:false,pack:'electronic'};
  // MuseScore General's dedicated chromatic timpani patch is sampled as a
  // pitched instrument; don't route this orchestral instrument through a kit.
  if (id === 'timpani') return {bank:0,program:47,drum:false,pack:'percussion'};
  const recorded=RECORDED_PERCUSSION_PATCHES[RECORDED_PERCUSSION_ALIASES[id]??id];
  if(recorded)return {bank:66,program:recorded.program,drum:false,pack:'percussion'};
  if (percussion) {
    if (!PERCUSSION_KIT_IDS.has(id) && !PERCUSSION_SAMPLE_KEYS[id]) {
      throw new Error(`No explicit SoundFont percussion mapping for ${id}`);
    }
    return { bank: 0, program: 0, drum: true, pack: 'percussion' };
  }
  const program = ids[id];
  if (program === undefined) throw new Error(`No SoundFont patch mapping for ${id}`);
  const pack = (Object.entries(BANK_PROGRAMS) as Array<[BankId, readonly number[]]>).find(([, programs]) => programs.includes(program))?.[0];
  if (!pack) throw new Error(`No packaged SoundFont program ${program}`);
  return { bank: 0, program, drum: false, pack };
}
export const NYLON_PATCH: SamplePatch = { bank: 64, program: 24, drum: false, pack: 'nylon' };
export const STEEL_PATCH: SamplePatch = { bank: 64, program: 25, drum: false, pack: 'steel' };
/** These kit components have recorded stereo velocity layers. Other GM
 * percussion stays in the general bank rather than selecting a missing zone. */
export const SAMPLED_KIT_KEYS = [35,36,38,40,41,42,43,46,47,48,49,50,51,52,53,57,59] as const;
