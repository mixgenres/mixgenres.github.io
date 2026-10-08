import { resolveMasterSettings } from '../masterSettings';
import type { MasterChain } from '../mixer';
import type { MixBusId } from '../../../data/sound/schema/dynamicMix';
import { MIX_BUSES, type MixSceneTimeline, neutralTrackMixState } from './MixScene';
import { compileAutomation, dbToGain, scheduleAutomation } from './MixAutomation';

export interface SongMixGraph {
  tracks: Map<string, { input: GainNode }>;
  schedule(contextTime?: number, songTime?: number): void;
  cancel(time?: number): void;
  dispose(): void;
}

/** Persistent channel strips and logical group buses. No note/phrase creates nodes. */
export function createSongMixGraph(ctx: BaseAudioContext, master: MasterChain, timeline: MixSceneTimeline,
  trackIds: string[], baselineHeadroom = 1): SongMixGraph {
  const nodes: AudioNode[] = [], automation: Array<{ param: AudioParam; points: ReturnType<typeof compileAutomation> }> = [];
  const gain = (value = 1) => { const node = ctx.createGain(); node.gain.value = value; nodes.push(node); return node; };
  const filter = (type: BiquadFilterType, frequency: number) => {
    const node = ctx.createBiquadFilter(); node.type = type; node.frequency.value = frequency; node.Q.value = .7; nodes.push(node); return node;
  };
  const automate = (param: AudioParam, value: Parameters<typeof compileAutomation>[1], kind?: Parameters<typeof compileAutomation>[2]) => {
    const points = compileAutomation(timeline, value, kind); automation.push({ param, points });
  };
  const ensemble = gain(baselineHeadroom);
  ensemble.connect(master.instBus);
  automate(ensemble.gain, scene => baselineHeadroom * dbToGain(scene.master.gainOffsetDb));
  const buses = new Map<MixBusId, GainNode>();
  for (const id of MIX_BUSES) {
    const input = gain(), level = gain();
    const compressor = ctx.createDynamicsCompressor(); nodes.push(compressor);
    compressor.threshold.value = -18; compressor.knee.value = 12; compressor.attack.value = .03; compressor.release.value = .25;
    input.connect(compressor); compressor.connect(level);
    if (id === 'percussion') level.connect(master.drumBus);
    else level.connect(ensemble);
    automate(level.gain, scene => dbToGain(scene.buses[id].gainOffsetDb) * (id === 'percussion' ? baselineHeadroom * dbToGain(scene.master.gainOffsetDb) : 1));
    automate(compressor.ratio, scene => 1 + scene.buses[id].compressionAmount * (scene.buses[id].compressionRatio - 1));
    buses.set(id, input);
  }
  // Dedicated sends replace the master's legacy all-instrument feed only for calibrated timelines.
  master.setFallbackSendsEnabled(true);
  const tracks = new Map<string, { input: GainNode }>();
  for (const id of trackIds) {
    const input = gain(), body = filter('lowshelf', 280), presence = filter('peaking', 2600), level = gain();
    input.connect(body); body.connect(presence);
    const splitter = ctx.createChannelSplitter(2), merger = ctx.createChannelMerger(2);
    nodes.push(splitter, merger);
    const ll = gain(), lr = gain(0), rl = gain(0), rr = gain();
    presence.connect(splitter); splitter.connect(ll, 0); splitter.connect(lr, 0); splitter.connect(rl, 1); splitter.connect(rr, 1);
    ll.connect(merger, 0, 0); rl.connect(merger, 0, 0); lr.connect(merger, 0, 1); rr.connect(merger, 0, 1);
    const pan = ctx.createStereoPanner(); nodes.push(pan);
    merger.connect(pan); pan.connect(level);
    const state = (scene: MixSceneTimeline['scenes'][number]) => scene.tracks[id] ?? neutralTrackMixState();
    automate(level.gain, scene => dbToGain(state(scene).gainOffsetDb));
    automate(body.gain, scene => state(scene).bodyOffsetDb, 'spectral');
    automate(presence.gain, scene => state(scene).presenceOffsetDb, 'spectral');
    automate(pan.pan, scene => state(scene).panOffset, 'spatial');
    automate(ll.gain, scene => (1 + state(scene).width) / 2, 'spatial');
    automate(rr.gain, scene => (1 + state(scene).width) / 2, 'spatial');
    automate(lr.gain, scene => (1 - state(scene).width) / 2, 'spatial');
    automate(rl.gain, scene => (1 - state(scene).width) / 2, 'spatial');
    // Routing changes crossfade parallel gains; the connections remain permanent.
    for (const busId of MIX_BUSES) {
      const route = gain(0); level.connect(route); route.connect(buses.get(busId)!);
      automate(route.gain, scene => state(scene).bus === busId ? 1 : 0, 'spatial');
    }
    const room = gain(0), echo = gain(0); level.connect(room); level.connect(echo);
    room.connect(master.roomInput); echo.connect(master.delayInput);
    automate(room.gain, scene => baselineHeadroom * state(scene).reverbSend * dbToGain(scene.master.gainOffsetDb));
    automate(echo.gain, scene => baselineHeadroom * state(scene).delaySend * dbToGain(scene.master.gainOffsetDb));
    tracks.set(id, { input });
  }
  const settings = (scene: MixSceneTimeline['scenes'][number]) => resolveMasterSettings(scene.resolvedMix.contract.character, scene.styleId);
  const masterParams = master.dynamicParameters;
  automate(masterParams.low, scene => settings(scene).lowDb, 'spectral');
  automate(masterParams.presence, scene => settings(scene).presenceDb, 'spectral');
  automate(masterParams.air, scene => settings(scene).airDb, 'spectral');
  automate(masterParams.width, scene => scene.enabled ? .2 + scene.master.width * 1.6 : settings(scene).widthGain, 'spatial');
  automate(masterParams.roomReturn, scene => settings(scene).roomDepth, 'spatial');
  automate(masterParams.fallbackAmbience, scene => scene.enabled ? 0 : 1);
  automate(masterParams.delayTime, scene => settings(scene).delayTimeSeconds, 'spatial');
  automate(masterParams.delayFeedback, scene => settings(scene).delayFeedback);
  automate(masterParams.delayTone, scene => settings(scene).delayToneHz, 'spectral');
  automate(masterParams.glueThreshold, scene => settings(scene).glue.threshold);
  automate(masterParams.glueRatio, scene => settings(scene).glue.ratio);
  const roomTimes = [.013, .019, .029, .037, .053, .071];
  master.roomDelayTimes.forEach((param, index) => automate(param,
    scene => roomTimes[index] * (scene.enabled ? .6 + scene.resolvedMix.contract.ambience.roomSize * 1.2 : 1), 'spatial'));
  automate(master.roomSize, scene => scene.enabled ? 1 + scene.resolvedMix.contract.ambience.bloom * Math.max(0, scene.energy - 3) * .05 : 1, 'spatial');
  automate(master.roomPreDelay, scene => scene.resolvedMix.contract.ambience.preDelayMs / 1000, 'spatial');
  return { tracks,
    schedule(contextTime = ctx.currentTime, songTime = 0) { for (const lane of automation) scheduleAutomation(lane.param, lane.points, contextTime, songTime); },
    cancel(time = ctx.currentTime) { for (const lane of automation) {
      if (typeof lane.param.cancelAndHoldAtTime === 'function') lane.param.cancelAndHoldAtTime(time);
      else lane.param.cancelScheduledValues(time);
    } },
    dispose() {
      const now = ctx.currentTime;
      for (const lane of automation) lane.param.cancelScheduledValues(now);
      for (const node of nodes) node.disconnect();
      master.setFallbackSendsEnabled(false);
    },
  };
}
