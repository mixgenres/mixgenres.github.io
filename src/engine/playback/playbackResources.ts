/** Resource limits follow device capabilities, with a conservative touch-device
 * fallback for browsers that do not expose deviceMemory (including iOS). */
export interface PlaybackDevice { memoryGB?: number; cores?: number; touch?: boolean }
export function playbackResourceLimits(device: PlaybackDevice) {
  const constrained = device.touch || (device.memoryGB !== undefined && device.memoryGB <= 4) ||
    (device.cores !== undefined && device.cores <= 2);
  const small = (device.memoryGB !== undefined && device.memoryGB <= 2) || (device.cores ?? 2) <= 2;
  const mb = 1024 * 1024;
  return {
    constrained: !!constrained,
    workers: constrained ? small ? 1 : 2 : Math.max(1, Math.min(3, (device.cores ?? 2) - 1)),
    partCacheBytes: (constrained ? 12 : 48) * mb,
    mixCacheBytes: (constrained ? 4 : 12) * mb,
    playbackBufferBytes: (constrained ? 4 : 12) * mb,
    stemCacheBytes: (constrained ? 8 : 32) * mb,
    aheadSeconds: 4,
  };
}
export function playbackResources() {
  const nav = typeof navigator === 'undefined' ? undefined : navigator as Navigator & { deviceMemory?: number };
  // Reproduce the constrained profile in the diagnostics page on a desktop.
  const params = typeof location === 'undefined' ? undefined : new URLSearchParams(location.search);
  const mobileAudit = params?.get('dev') === 'audio' && params.get('budget') === 'mobile';
  return playbackResourceLimits({ memoryGB: nav?.deviceMemory, cores: nav?.hardwareConcurrency,
    touch: mobileAudit || !!nav?.maxTouchPoints && (typeof matchMedia === 'undefined' || matchMedia('(pointer: coarse)').matches) });
}
