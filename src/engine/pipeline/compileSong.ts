import type { Sheet } from '../sheet/sheet';
import type { Performance } from '../band/performanceData';
import { compileNotatedScore, type NotatedScore } from '../score/notatedScore';
import { interpretNotatedScore } from '../band/interpretBand';
import { musicianScoreFromArrangement, compileMusicianScore, type MusicianScore } from '../score/musicianScore';
import { transformMusiciansToSound, type SoundPlan } from '../sound/transformMusicians';
import { compileMixSceneTimeline } from '../studio/dynamicMix/compileMixSceneTimeline';
import type { MixSceneTimeline } from '../studio/dynamicMix/MixScene';
import { contentKey } from '../cache/contentKey';
import { LRUMap, registerCache } from '../cache/lru';
import { planPartTransitions, type PartTransition } from '../band/transitions';

export interface PipelineTrace { version: 1; notation: string[]; interpretation: string; transitions: PartTransition[]; sound: string[]; mix: string }
export interface CompiledSong {
  notation: NotatedScore; interpretation: MusicianScore; sound: SoundPlan; mix: MixSceneTimeline; performance: Performance; trace: PipelineTrace;
}
const interpretations = new LRUMap<string, MusicianScore>(16, 'interpretedSongs'); registerCache(interpretations);
const mixPlans = new LRUMap<string, MixSceneTimeline>(32, 'mixPlans'); registerCache(mixPlans);

/** The one composition boundary used by UI, workers, preview and export.
 * 1 written notation -> 2 band interpretation -> 3 mechanics -> 4 mix. */
export function compileSongPipeline(sheet: Sheet): CompiledSong {
  const notation = compileNotatedScore(sheet);
  const notationKeys = notation.sections.flatMap(section => Object.values(section.cells).map(cell => cell.key));
  const interpretationKey = contentKey(['interpretation-v1', notationKeys, notation.sections.map(s => s.chords),
    sheet.regions.map(({ name: _name, ...region }) => region), sheet.arrangementContext, sheet.partLens, sheet.partRoles,
    sheet.bpm, sheet.timeSignature, sheet.tempoShift, sheet.relationships, sheet.styleId, sheet.styleInfluences, sheet.styleOverrides]);
  let interpreted = interpretations.get(interpretationKey);
  if (!interpreted) {
    interpreted = musicianScoreFromArrangement(sheet, interpretNotatedScore(sheet, notation));
    interpretations.set(interpretationKey, interpreted);
  }
  const interpretation = { ...interpreted, title: sheet.title,
    parts: interpreted.parts.map(part => ({ ...part, name: sheet.tracks.find(track => track.id === part.id)?.name ?? part.name })) };
  const performanceFromScore = compileMusicianScore(interpretation);
  const transitions = planPartTransitions(sheet, notation, performanceFromScore);
  const sound = transformMusiciansToSound(performanceFromScore, transitions);
  const mixKey = contentKey(['mix-v1', interpretationKey, sheet.relationships, sheet.styleOverrides]);
  let mix = mixPlans.get(mixKey);
  if (!mix) { mix = compileMixSceneTimeline(sheet, sound.performance); mixPlans.set(mixKey, mix); }
  const trace: PipelineTrace = { version: 1, notation: notationKeys, interpretation: interpretationKey, transitions, sound: sound.cells.map(cell => cell.key), mix: mixKey };
  const performance = { ...sound.performance, mixTimeline: mix, pipeline: trace };
  return { notation, interpretation, sound: { ...sound, performance }, mix, performance, trace };
}
