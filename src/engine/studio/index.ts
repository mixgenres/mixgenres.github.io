/** Phase 3: track routing, levels, stereo placement, and mix effects. */
export {
  createMasterChain,
  getRoleGainLinear,
  type StudioMixState,
  type MixRoleProfile,
  type MasterChain,
} from './mixer.ts';
export { StereoFieldManager } from './panning.ts';
export * from './spatial.ts';
