import type { MixBusId, MixContract, ResolvedMixContract } from '../../../data/sound/schema/dynamicMix';
import { MIX_BUSES, neutralTrackMixState, type MixAnalysisWindow, type MixScene, type TrackMixIntent } from './MixScene';
import { analyzeMasking, resolveForegroundOwnership, roleMixPolicy, mixRecordValue } from './MixAnalysis';

const clamp = (v: number, low = 0, high = 1) => Math.max(low, Math.min(high, v));
export function mixBusFor(intent: TrackMixIntent, mix: Required<MixContract>): MixBusId {
  const authored = mixRecordValue(mix.buses.roleBus, intent.authoredRole);
  if (authored && MIX_BUSES.includes(authored)) return authored;
  const has = (fn: TrackMixIntent['mixFunctions'][number]) => intent.mixFunctions.includes(fn);
  if (has('low-anchor')) return 'lowAnchor';
  if (/^(drums|drum-kit|percussion|hand-percussion)$/.test(intent.authoredRole)) return 'percussion';
  if (has('foreground') || has('counterline') || has('answer')) return 'melodic';
  if (has('pulse-anchor') || has('rhythmic-support')) return 'rhythm';
  if (has('texture')) return 'texture';
  if (has('harmonic-support')) return 'harmony';
  return 'ensemble';
}
export function planMixScene(analysis: MixAnalysisWindow, resolvedMix: ResolvedMixContract, styleId: string, sectionKind = ''): MixScene {
  const mix = resolvedMix.contract, dynamics = mix.dynamics, enabled = mix.enabled;
  const foreground = resolveForegroundOwnership(analysis, dynamics.sharedForeground);
  const masking = analyzeMasking(analysis, foreground, mix.masking.preserveCounterpoint, mix);
  const section = mixRecordValue(mix.sections, analysis.sectionId) ?? mixRecordValue(mix.sections, sectionKind) ?? {};
  const active = analysis.tracks.filter(t => t.activity > 0);
  const dense = clamp(active.reduce((sum, t) => sum + t.density * t.activity, 0) / 3);
  const intimate = active.length <= 2 && analysis.energy <= 2;
  const expansion = clamp((analysis.energy - 3) / 2) * dynamics.crescendoExpansion;
  const tracks: MixScene['tracks'] = Object.create(null);
  for (const intent of analysis.tracks) {
    const state = neutralTrackMixState(), policy = roleMixPolicy(intent, mix);
    state.bus = mixBusFor(intent, mix);
    if (enabled) {
      const spotlight = foreground.primaryTrackIds.includes(intent.trackId) ? intent.foreground
        : foreground.secondaryTrackIds.includes(intent.trackId) ? intent.foreground * .6 : 0;
      const sharing = foreground.sharedForeground ? .65 : 1;
      const contrast = dynamics.foregroundContrastDb * (section.foregroundContrast ?? 1);
      const anchor = intent.structuralImportance >= .8;
      state.gainOffsetDb = (policy.gainDb ?? 0) + (spotlight > 0
        ? Math.min(contrast, policy.foregroundGainDb ?? contrast * .6) * spotlight * sharing
        : policy.supportGainDb ?? 0);
      // Structural motors stay steady. Density compensation acts on supporting textures first.
      if (!anchor && spotlight === 0 && policy.mayYieldInGain !== false) state.gainOffsetDb -= dense * dynamics.densityCompensation * .6;
      state.presenceOffsetDb = (policy.presenceDb ?? 0) + spotlight * .5 * sharing;
      state.bodyOffsetDb = policy.bodyDb ?? 0;
      state.depth = clamp((section.depth ?? policy.depth ?? .45) - (intimate ? dynamics.silenceContrast * .08 : 0) - spotlight * mix.ambience.foregroundDepthDifference * mix.stage.depthRange);
      state.width = clamp(section.width ?? policy.width ?? mixRecordValue(mix.stage.roleWidth, intent.authoredRole)
        ?? (mix.stage.preserveNaturalStage ? 1 : mix.stage.width + expansion * .12));
      const centered = mix.stage.centerAnchorRoles.some(r => r === intent.authoredRole || intent.mixFunctions.includes(r as TrackMixIntent['mixFunctions'][number]));
      state.panOffset = centered ? 0 : clamp(mixRecordValue(mix.stage.rolePan, intent.authoredRole) ?? 0, -1, 1) * state.width;
      const room = (policy.ambienceSend ?? mix.ambience.reverbSend) * (section.ambience ?? 1) * (intimate ? 1 - dynamics.silenceContrast * .15 : 1);
      state.reverbSend = clamp(room * (.55 + state.depth) * (1 + expansion * mix.ambience.bloom), 0, .4);
      state.delaySend = clamp(mix.ambience.delaySend * (.6 + state.depth), 0, .25);
      state.reverbSendOffsetDb = 20 * Math.log10(Math.max(.001, state.reverbSend) / Math.max(.001, mix.ambience.reverbSend));
      state.delaySendOffsetDb = 20 * Math.log10(Math.max(.001, state.delaySend) / Math.max(.001, mix.ambience.delaySend));
      state.transientAmount = policy.transientEmphasis ?? mix.character.transientSnap ?? 0;
      state.compressionAmount = 0; // Natural track dynamics; bus glue is a separate control.
      if (mix.masking.enabled && policy.mayYieldSpectrally !== false) {
        const conflicts = masking.filter(r => r.sourceTrackId === intent.trackId && r.overlap >= mix.masking.minOverlap
          && r.priorityDifference >= mix.masking.minPriorityDifference);
        // Take the strongest request rather than stacking every foreground line's carve.
        const correction = conflicts.reduce((max, r) => Math.max(max, r.overlap * r.priorityDifference * mix.masking.amount), 0);
        state.presenceOffsetDb -= correction * mix.masking.maxPresenceCutDb;
        if (!policy.protectLowEnd && !policy.protectRhythmicDefinition) state.bodyOffsetDb -= correction * mix.masking.maxBodyCutDb;
        state.depth = clamp(state.depth + correction * mix.stage.depthRange * .2);
        if (!anchor && policy.mayYieldInGain !== false) state.gainOffsetDb -= correction * mix.masking.maxGainCutDb;
      }
      if (anchor && spotlight === 0) state.gainOffsetDb = policy.gainDb ?? 0;
      state.gainOffsetDb = clamp(state.gainOffsetDb, dynamics.maxTrackCutDb, dynamics.maxTrackBoostDb);
      state.presenceOffsetDb = clamp(state.presenceOffsetDb, -6, 3);
      state.bodyOffsetDb = clamp(state.bodyOffsetDb, -3, 3);
    }
    tracks[intent.trackId] = state;
  }
  const buses = Object.fromEntries(MIX_BUSES.map(id => {
    const amount = id === 'lowAnchor' ? mix.buses.lowAnchorCompression : id === 'rhythm' || id === 'percussion'
      ? mix.buses.rhythmCompression : id === 'melodic' ? mix.buses.melodicCompression : mix.buses.ensembleCompression;
    return [id, { gainOffsetDb: enabled && id !== 'lowAnchor' && id !== 'rhythm' && id !== 'percussion'
      ? ((analysis.energy - 3) / 2) * dynamics.ensembleBreathing * .5 : 0,
      compressionAmount: enabled ? clamp(amount + mix.buses.glueAmount * dynamics.busCompressionAmount) : 0,
      compressionRatio: dynamics.busCompressionRatio }];
  })) as MixScene['buses'];
  return { ...analysis, styleId, enabled, tracks, buses, foregroundTrackIds: foreground.primaryTrackIds,
    sharedForeground: foreground.sharedForeground, master: { gainOffsetDb: enabled
      ? clamp((section.gainDb ?? 0) - dense * dynamics.densityCompensation * dynamics.peakSectionHeadroomDb * .25, -6, 3) : 0,
      width: enabled ? clamp(section.width ?? mix.stage.width + expansion * .12) : 1 },
    transitions: mix.transitions, analysis, masking, resolvedMix };
}
