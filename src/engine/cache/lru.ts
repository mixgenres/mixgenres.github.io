/**
 * Lightweight, bounded LRU Map for engine-wide caching hygiene.
 * Automatically evicts the least recently used entry when reaching capacity.
 */
export class LRUMap<K, V> {
  private map = new Map<K, V>();
  private hits = 0;
  private misses = 0;

  constructor(public readonly maxSize: number, public readonly name: string = 'unnamed') {}

  /**
   * @static
   * Registers a cache in the engine's global dev registry.
   */
  public static register(cache: LRUMap<unknown, unknown>): void {
    registerCache(cache);
  }

  get(key: K): V | undefined {
    const v = this.map.get(key);
    if (v !== undefined) {
      // Refresh recency
      this.map.delete(key);
      this.map.set(key, v);
      this.hits++;
      return v;
    }
    this.misses++;
    return undefined;
  }

  set(key: K, value: V): this {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.maxSize) {
      const oldestKey = this.map.keys().next().value;
      if (oldestKey !== undefined) {
        this.map.delete(oldestKey);
      }
    }
    this.map.set(key, value);
    return this;
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  protected peek(key: K): V | undefined { return this.map.get(key); }

  delete(key: K): boolean {
    return this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }

  get size(): number {
    return this.map.size;
  }

  keys(): IterableIterator<K> {
    return this.map.keys();
  }

  values(): IterableIterator<V> {
    return this.map.values();
  }

  entries(): IterableIterator<[K, V]> {
    return this.map.entries();
  }

  getStats(): { name: string; size: number; maxSize: number; hits: number; misses: number; hitRate: number } {
    const total = this.hits + this.misses;
    return {
      name: this.name,
      size: this.map.size,
      maxSize: this.maxSize,
      hits: this.hits,
      misses: this.misses,
      hitRate: total > 0 ? this.hits / total : 0,
    };
  }
}

// Registry for global dev telemetry
const REGISTERED_CACHES = new Set<LRUMap<unknown, unknown>>();

export function registerCache(cache: LRUMap<unknown, unknown>): void {
  REGISTERED_CACHES.add(cache);
}

export function cacheStats(): Record<string, ReturnType<LRUMap<unknown, unknown>['getStats']>> {
  const result: Record<string, ReturnType<LRUMap<unknown, unknown>['getStats']>> = {};
  for (const c of REGISTERED_CACHES) {
    result[c.name] = c.getStats();
  }
  return result;
}
