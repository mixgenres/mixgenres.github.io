import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_STYLES } from '../src/engine/style';
import { createMasterChain } from '../src/engine/studio/mixer';
import { ensembleHeadroom, resolvePlaybackMix, resolveMasterSettings } from '../src/engine/studio/masterSettings';
import { MASTER_MIX_DEFAULTS } from '../src/data/sound/mix/masterProfiles';
import { resolveStyle } from '../src/engine/style';
import { GENRE_WORLDS } from '../src/data/genres';
import { GENRE_PRODUCTION, STYLE_PRODUCTION } from '../src/data/genres/_shared/production';
import { measureAudio } from '../src/engine/studio/audioMetrics';
import { excerptPerformance } from './lib/audioExcerpt';
import type { Performance } from '../src/engine/band/performanceData';

class Param {
  value = 0;
  setTargetAtTime(value: number) { this.value = value; }
  setValueAtTime(value: number) { this.value = value; }
  cancelScheduledValues() {}
}
class Node {
  gain = new Param(); frequency = new Param(); Q = new Param(); threshold = new Param(); knee = new Param();
  ratio = new Param(); attack = new Param(); release = new Param(); pan = new Param(); delayTime = new Param();
  curve?: Float32Array; type = ''; oversample = ''; disconnected = false;
  connections: (Node | Param)[] = [];
  constructor(readonly kind: string) {}
  connect(target: Node | Param) { this.connections.push(target); }
  disconnect() { this.disconnected = true; }
}
function context() {
  const nodes: Node[] = [];
  const create = (kind: string) => { const node = new Node(kind); nodes.push(node); return node; };
  const ctx = { currentTime: 0, destination: new Node('destination'),
    createGain: () => create('gain'), createWaveShaper: () => create('shaper'), createBiquadFilter: () => create('filter'),
    createDynamicsCompressor: () => create('compressor'), createDelay: () => create('delay'),
    createStereoPanner: () => create('panner'), createChannelSplitter: () => create('splitter'), createChannelMerger: () => create('merger') };
  const snapshot = () => nodes.map(n => ({ kind: n.kind, type: n.type, curve: n.curve ? [...n.curve] : null,
    params: Object.fromEntries(Object.entries(n).filter(([, v]) => v instanceof Param).map(([k, v]) => [k, (v as Param).value])) }));
  return { ctx: ctx as unknown as BaseAudioContext, nodes, snapshot };
}

test('fresh and updated master graphs match for every catalog style, including transitions', () => {
  const live = context(); const chain = createMasterChain(live.ctx);
  const makeup = 10 ** (MASTER_MIX_DEFAULTS.programMakeupDb / 40);
  assert.equal(live.nodes.filter(n => n.kind === 'gain' && Math.abs(n.gain.value - makeup) < 1e-9).length, 2,
    'half of the program gain drives the style glue and half restores post-compressor level');
  for (const style of ALL_STYLES) {
    const mix = resolvePlaybackMix(style.primaryGenre, style.id);
    assert.ok(mix.mixCharacter, style.id);
    const fresh = context(); const other = createMasterChain(fresh.ctx, mix.mixCharacter, mix.context);
    chain.setMixCharacter(mix.mixCharacter!, mix.context);
    assert.deepEqual(live.snapshot(), fresh.snapshot(), style.id);
    other.dispose(); assert.ok(fresh.nodes.every(n => n.disconnected), 'all graph nodes must be disposed');
  }
  chain.dispose(); assert.ok(live.nodes.every(n => n.disconnected));
});

test('arrangement track count does not attenuate the whole program before shared mastering', () => {
  for (const trackCount of [1, 4, 8, 16, 32]) assert.equal(ensembleHeadroom(trackCount), 1);
});

test('reggaeton production profiles retain mono bass and independent transient controls', () => {
  const profiles = ALL_STYLES.filter(style => style.primaryGenre === 'reggaeton').map(style => {
    const mix = resolveStyle({genreId:'reggaeton',styleId:style.id}).resolvedMix.contract;
    assert.equal(mix.roles.bass.width,0,style.id);assert.equal(mix.stage.roleWidth.bass,0,style.id);
    const settings=resolveMasterSettings(mix.character,style.id);
    assert.equal(settings.subEnhancement,0,style.id);
    assert.equal(settings.glue.attack,mix.character.compressionAttackSeconds);
    assert.equal(settings.glue.release,mix.character.compressionReleaseSeconds);
    assert.equal(settings.drumKnock,mix.character.drumSaturation);
    assert.equal(settings.drumParallelCompression,mix.character.drumParallelCompression);
    assert.equal(resolveMasterSettings({...mix.character,bassForward:0}).drumKnock,settings.drumKnock);
    const graph=context(),chain=createMasterChain(graph.ctx,mix.character,style.id);
    assert.equal(chain.dynamicParameters.glueAttack.value,settings.glue.attack);
    assert.equal(chain.dynamicParameters.drumParallel.value,settings.drumParallelCompression);
    assert.equal(chain.dynamicParameters.subEnhancement.value,0);chain.dispose();
    return JSON.stringify(settings);
  });
  assert.equal(new Set(profiles).size,6,'each style has a distinct production profile');
});

test('ducking preserves full dry tone at rest and subtracts only the detected low band', () => {
  const graph = context(); const chain = createMasterChain(graph.ctx);
  const control = graph.nodes.find(n => n.kind === 'shaper' && n.curve?.[512] === 0 && n.curve?.[1024] === -1)!;
  assert.ok(control);
  const depth = control.connections[0] as Node;
  assert.equal(depth.gain,chain.dynamicParameters.duckDepth);
  const targets = depth.connections.filter(n => n instanceof Param) as Param[];
  assert.equal(targets.length, 2);
  assert.equal(targets[0].value,0);assert.equal(targets[1].value,1);
  assert.equal(control.curve![0],0,'no attenuation for negative detector noise');
  assert.ok((chain.instBus as unknown as Node).connections.some(n=>n instanceof Node&&n.kind==='gain'),'full dry instrument route survives');
  const subDuck = graph.nodes.find(n => n.gain === targets[1])!;
  const subBus = chain.subBus as unknown as Node;
  assert.ok(subBus.connections.includes(subDuck));
  assert.equal(subBus.connections.length, 1, 'sub signal must not bypass ducking');
  chain.dispose();
});

test('all worlds and styles have explicit production controls and style targets resolve',()=>{
  assert.equal(GENRE_WORLDS.length,55);
  for(const world of GENRE_WORLDS)assert(GENRE_PRODUCTION[world.id],world.id);
  for(const id of Object.keys(STYLE_PRODUCTION))assert(ALL_STYLES.some(style=>style.id===id),id);
  for(const style of ALL_STYLES) {
    const mix=resolveStyle({genreId:style.primaryGenre,styleId:style.id}).resolvedMix.contract;
    for(const key of ['compressionAttackSeconds','compressionReleaseSeconds','drumSaturation','drumParallelCompression','subEnhancement'] as const)
      assert(Number.isFinite(mix.character[key]),`${style.id}: ${key}`);
    assert.equal(mix.character.subEnhancement,0,style.id);
    assert.equal(resolveMasterSettings(mix.character,style.id).glue.ratio,mix.character.compressionRatio,`${style.id}: authored compression wins`);
  }
  for(const saturationType of ['tube','tape','hard-clip'] as const) {
    const graph=context(),mix=resolvePlaybackMix('jazz','jazz-cool');
    const chain=createMasterChain(graph.ctx,{...mix.mixCharacter!,drumSaturation:0,saturationType});
    assert.equal(chain.dynamicParameters.drumDry.value,1,'zero saturation preserves the full dry signal');
    assert.equal(chain.dynamicParameters.drumWet.value,0,'zero saturation bypasses waveshaper clipping');
    chain.dispose();
  }
});

test('all saturation modes preserve exact silence', () => {
  for (const saturationType of ['tube', 'tape', 'hard-clip'] as const) {
    const graph = context();
    const mix = resolvePlaybackMix('tango', 'tango-electrotango-gotan');
    const chain = createMasterChain(graph.ctx, { ...mix.mixCharacter!, saturationType });
    const curve = graph.nodes.find(n => n.kind === 'shaper')!.curve!;
    assert.equal(curve[(curve.length - 1) / 2], 0);
    chain.dispose();
  }
});

test('PCM measurements reveal silence, clipping, invalid samples, DC and mono cancellation', () => {
  const l = new Float32Array([1, -1, 1, -1]), r = new Float32Array([-1, 1, -1, 1]);
  const result = measureAudio(l, r, 10);
  assert.equal(result.samplePeakDbfs, 0); assert.equal(result.rmsDbfs, 0);
  assert.equal(result.clippedSampleFraction, 1); assert.equal(result.stereoCorrelation, -1); assert.equal(result.monoRmsDbfs, null);
  assert.equal(measureAudio(new Float32Array(4), new Float32Array(4), 10).rmsDbfs, null);
  assert.equal(measureAudio(new Float32Array([NaN, Infinity]), new Float32Array(2), 10).nonFiniteSamples, 2);
  assert.equal(measureAudio(new Float32Array([0.25, 0.25]), new Float32Array([0.25, 0.25]), 10).dcOffset, 0.25);
  assert.throws(() => measureAudio(l, r.subarray(1), 10));
});

test('later excerpts preserve controllers and notes already sounding', () => {
  const perf = { duration: 10, tail: 1, bars: [], blends: {},
    notes: [{ trackId: 'v0', time: 3, dur: 4, midi: 60, vel: 80, bar: 1, gestureCode: 0, hitFunctionCode: 0, accent: 1 }],
    ccs: [{ time: 1, trackId: 'v0', cc: 7, value: 80 }, { time: 2, trackId: 'v0', cc: 7, value: 40 }, { time: 5, trackId: 'v0', cc: 11, value: 64 }] } satisfies Performance;
  const excerpt = excerptPerformance(perf, 4, 2);
  assert.equal(excerpt.notes[0].time, 0); assert.equal(excerpt.notes[0].dur, 2);
  assert.deepEqual(excerpt.ccs.map(c => [c.time, c.cc, c.value]), [[0, 7, 40], [1, 11, 64]]);
});
