import { GeneratorTypes, type BasicPreset } from 'spessasynth_core';
type Modulator = ReturnType<BasicPreset['getVoiceParameters']>[number]['modulators'][number];

/** Positive release-time bound for modulators other than the standard CC72
 * envelope control, whose authored timeline is handled by the event planner. */
export function releaseModulationReserve(modulators: readonly Modulator[]): number {
  return modulators.filter(modulator=>modulator.destination===GeneratorTypes.releaseVolEnv)
    .reduce((reserve,modulator)=> {
      const source=modulator.primarySource,secondary=modulator.secondarySource;
      const standardRelease=source.isCC&&source.index===72&&source.isBipolar&&!source.isNegative
        &&source.curveType===0&&!secondary.isCC&&secondary.index===0&&modulator.transformAmount===3600;
      return reserve+(standardRelease?0:Math.abs(modulator.transformAmount));
    },0);
}
