import { PERCUSSION_KIT_IDS, PERCUSSION_SAMPLE_KEYS, RECORDED_PERCUSSION_ALIASES, RECORDED_PERCUSSION_PATCHES } from './percussion';
import { ELECTRONIC_KIT_PROGRAMS } from '../../../data/sound/playback/electronicKits';
import { SAMPLED_SYNTH_PATCHES } from '../../../data/sound/playback/sampledSynthPatches';

/** Zero-based General MIDI programs. World instruments with no sampled match
 * use an explicit family approximation, exposed in the bank coverage report. */
export const SOUNDFONT_VERSION = 'mixgenres-sf-v9';
export const BANK_PROGRAMS = {
  keys: [4, 5, 6, 7, 16, 19, 20, 21, 22],
  mallets: [8, 9, 10, 11, 12, 13, 14, 15, 117],
  guitars: [24, 25, 26, 28, 31, 32, 35, 36, 38, 46, 104, 105, 106, 107, 108],
  strings: [40, 41, 42, 45, 48, 49, 110],
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
export function electronicKitPatch(variantId?: string): SamplePatch | undefined {
  const program = variantId ? ELECTRONIC_KIT_PROGRAMS[variantId] : undefined;
  return program === undefined ? undefined : { bank: 0, program, drum: true, pack: 'percussion' };
}
export const SYNTH_SAMPLE_PROGRAMS: Readonly<Record<string, number>> = Object.fromEntries(Object.entries(SAMPLED_SYNTH_PATCHES).map(([id,patch])=>[id,patch.program]));
const ids: Record<string, number> = {};
function assign(program: number, instruments: string) { for (const id of instruments.split(' ')) ids[id] = program; }
function patchForProgram(program: number, pack: BankId): SamplePatch { return { bank: 0, program, drum: false, pack }; }
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
assign(75, 'pan-flute siku'); assign(77, 'shakuhachi'); assign(79, 'ocarina');
assign(81, 'synth'); assign(98, 'crystal'); assign(109, 'bagpipes uilleann-pipes'); assign(111, 'suona zurna');
assign(104, 'sitar tanpura rudra-veena veena'); assign(105, 'banjo');
assign(106, 'shamisen biwa oud bouzouki bandola-llanera baglama dombra setar tar');
assign(107, 'koto gayageum guqin pipa guzheng'); assign(108, 'kalimba berimbau');
export const INSTRUMENT_PROGRAMS: Readonly<Record<string, number>> = ids;

export function patchForInstrument(id: string, percussion = false): SamplePatch {
  if (id === 'synth' || id === 'synth-bass') return {bank:75,program:id==='synth-bass'?0:3,drum:false,pack:'electronic'};
  // GeneralUser GS includes an actual mandolin in its GS variation bank. The
  // GM slot used by the old mapping is Shamisen, which is the wrong timbre for
  // country bluegrass chop parts.
  if (id === 'mandolin') return {bank:16,program:25,drum:false,pack:'guitars'};
  // Keep other bright folk lutes on the actual GS mandolin variation, rather
  // than the Japanese Shamisen patch that is a poor fit for their attack.
  if (id === 'bouzouki' || id === 'dombra') return {bank:16,program:25,drum:false,pack:'guitars'};
  // Setar/tar/baglama are long-neck plucked lutes. The available GS sitar is
  // still an approximation, but its sustained buzz/twang is a closer source
  // family than the default Shamisen sample.
  if (id === 'setar' || id === 'tar' || id === 'baglama') return patchForProgram(104, 'guitars');
  // No dedicated kamancheh multisample is packaged yet. Keep it in the bowed
  // strings bank with the violin proxy, rather than failing playback or
  // silently selecting a plucked-string patch.
  if (id === 'kamancheh') return patchForProgram(40, 'strings');
  // Qanun is a plucked zither; the GS Koto zone has a more appropriate pluck
  // than the hammered dulcimer patch shared with santur.
  if (id === 'qanun') return patchForProgram(107, 'guitars');
  // Pipa is a fretted plucked lute, not a zither. The GS mandolin variation
  // gives it a closer bright, course-like attack than the Koto patch; it is
  // still a family approximation rather than a dedicated pipa recording.
  if (id === 'pipa') return { bank: 16, program: 25, drum: false, pack: 'guitars' };
  // Ney, xiao, and quena are end-blown flutes. The breathier GS shakuhachi
  // variation is a closer source family than the straight concert-flute patch.
  if (id === 'ney' || id === 'xiao' || id === 'quena') return patchForProgram(77, 'winds');
  // Oud is a short-necked gut-string lute; the GM Shamisen slot is a bright
  // Japanese plucked-string patch and reads as the wrong instrument. The
  // curated nylon-guitar source is the closer available warm, rounded pluck.
  if (id === 'oud') return {bank:64,program:24,drum:false,pack:'nylon'};
  // The source bank has five recorded whistle roots in its GS variation bank.
  // Low whistle shares these recordings in a lower written register; a
  // dedicated low-whistle multisample set is still needed.
  if (id === 'tin-whistle' || id === 'low-whistle') return {bank:24,program:75,drum:false,pack:'winds'};
  // The GM Jazz Guitar patch is a poor pedal-steel stand-in. These use the
  // packaged clean electric recordings; plan.ts may select the driven bank
  // when a style explicitly calls for more edge.
  if (id === 'pedal-steel' || id === 'lap-steel') return {bank:69,program:0,drum:false,pack:'electricClean'};
  if (id === 'harmonium') return {bank:66,program:28,drum:false,pack:'keys'};
  if (id === 'piano') return {bank:64,program:0,drum:false,pack:'piano'};
  if (id === 'bass') return {bank:64,program:33,drum:false,pack:'bass'};
  if (id === 'bandoneon') return {bank:73,program:0,drum:false,pack:'bandoneon'};
  if (id === 'upright-bass') return {bank:64,program:0,drum:false,pack:'upright'};
  if (id === 'khomus') return {bank:66,program:22,drum:false,pack:'percussion'};
  if (id === 'balafon') return {bank:66,program:23,drum:false,pack:'mallets'};
  if (id === 'gamelan-metallophone' || id === 'bonang' || id === 'reyong') return {bank:0,program:14,drum:false,pack:'mallets'};
  // Sampler is a playable multisample palette, not the generic synth patch.
  // Notes select individual recorded kit hits in the pitched MIDI range.
  if (id === 'sampler') return {bank:67,program:0,drum:false,pack:'drumkit'};
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
