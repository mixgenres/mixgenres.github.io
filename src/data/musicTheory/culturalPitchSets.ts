export type CulturalHarmonyModel = 'functional' | 'modal-drone' | 'heterophonic' | 'fixed-cluster';

export interface CulturalRules {
  styleId: string;
  sourceModel: string;
  harmonyModel: CulturalHarmonyModel;
  pitchIntervals: number[];
  snapToChord: boolean;
  authoredTimingOnly: boolean;
  heterophonic: boolean;
  avoidBassFoundation: boolean;
}

export const PREVIEW_MODAL_INSTRUMENTS = ['guqin','guzheng','pipa','erhu','dizi','xiao','jinghu','bagpipes','uilleann-pipes','tin-whistle','low-whistle','celtic-harp','fiddle','concertina','bodhran','bones'];
export const PREVIEW_FIXED_INSTRUMENTS = ['sho','ryuteki','hichiriki'];
export const FIXED_CULTURAL_PITCH_INTERVALS = [0,2,4,7,9];
export const MODAL_CULTURAL_PITCH_INTERVALS = [0,2,4,5,7,9,10];
export const CELTIC_OPEN_HARMONY_INTERVALS = [0, 7, 12];
export const CELTIC_COLOR_INTERVALS = [2, 9];
export const SHO_HIGH_INTENSITY_INTERVALS = [0, 2, 4, 7, 9];
export const SHO_LOW_INTENSITY_INTERVALS = [0, 2, 5, 7];
