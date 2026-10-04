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
    workers: constrained ? small ? 1 : (device.cores ?? 2) >= 6 ? 3 : 2 : Math.max(1, Math.min(3, (device.cores ?? 2) - 1)),
    partCacheBytes: (constrained ? 24 : 48) * mb,
    // Complete physical DSP sections survive reloads in IndexedDB. Keep this
    // much larger than RAM while still bounding eviction on constrained devices.
    persistentPartCacheBytes: (constrained ? 192 : 512) * mb,
    mixCacheBytes: (constrained ? 4 : 12) * mb,
    playbackBufferBytes: (constrained ? 6 : 12) * mb,
    // Worker playback uses the shared physical cache, not this export cache.
    stemCacheBytes: (constrained ? 2 : 32) * mb,
    aheadSeconds: 4,
    // Idle preparation stays small for quick selection. Once playing, retain
    // enough PCM to absorb a slow render, GC, or a delayed mobile timer.
    playingAheadSeconds: 8,
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
