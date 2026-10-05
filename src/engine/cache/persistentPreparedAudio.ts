import { playbackResources } from '../playback/playbackResources';
import type { StemCacheEntry } from './stemCache';

declare const __AUDIO_CACHE_VERSION__: string;
/** Production builds derive this from the audio engine and authored data. */
export const PERSISTENT_DSP_NAMESPACE = `physical-dsp-v2:${typeof __AUDIO_CACHE_VERSION__ === 'undefined' ? 'node' : __AUDIO_CACHE_VERSION__}`;
const STORES = ['pcm', 'access', 'meta'];
const TOTAL = 'total-bytes';
interface PCMRecord { id: string; namespace: string; left: ArrayBuffer; right: ArrayBuffer; byteLength: number }
interface AccessRecord { id: string; lastAccess: number; byteLength: number }
interface WriteJob { entry: StemCacheEntry; epoch: number; resolve: (stored: boolean) => void }
interface Result<T> { ok: boolean; value?: T; error?: DOMException | null }

/** Storage is an optimization: timeouts, corruption and quota failures fall
 * back to synthesis. Tests inject an IDB factory and a small byte budget. */
export class PersistentAudioCache {
  private connection?: Promise<IDBDatabase | undefined>;
  private retryAfter = 0;
  private epoch = 0;
  private hits = 0;
  private misses = 0;
  private writes = 0;
  private bytes = 0;
  private quotaLimit = Infinity;
  private reads = new Map<string, Promise<StemCacheEntry | undefined>>();
  private absent = new Map<string, number>();
  private queue = new Map<string, WriteJob>();
  private queuedBytes = 0;
  private writer?: Promise<void>;
  private maintenance?: Promise<unknown>;

  constructor(private readonly options: {
    factory: () => IDBFactory | undefined; maxBytes: () => number;
    namespace: string; name?: string; timeoutMs?: number; maxEntryBytes?: () => number;
  }) {}

  private get limit() { return Math.min(this.options.maxBytes(), this.quotaLimit); }
  private get entryLimit() { return Math.min(this.limit, this.options.maxEntryBytes?.() ?? this.limit); }
  private id(key: string) { return `${this.options.namespace}:${key}`; }

  private open(): Promise<IDBDatabase | undefined> {
    if (this.connection) return this.connection;
    const factory = this.options.factory();
    if (!factory || Date.now() < this.retryAfter) return Promise.resolve(undefined);
    const opened = new Promise<IDBDatabase | undefined>(resolve => {
      let settled = false;
      const finish = (db?: IDBDatabase) => {
        if (settled) { db?.close(); return; }
        settled = true; clearTimeout(timer);
        if (!db) { this.retryAfter = Date.now() + 5000; this.connection = undefined; }
        resolve(db);
      };
      const timer = setTimeout(() => finish(), this.options.timeoutMs ?? 750);
      try {
        const request = factory.open(this.options.name ?? 'mixgenres-prepared-audio', 1);
        request.onupgradeneeded = () => {
          const db = request.result;
          for (const store of STORES) if (!db.objectStoreNames.contains(store)) {
            const created = db.createObjectStore(store, { keyPath: 'id' });
            if (store === 'access') created.createIndex('lastAccess', 'lastAccess');
          }
        };
        request.onsuccess = () => {
          const db = request.result;
          if (settled) { db.close(); return; }
          const closed = () => { if (this.connection === opened) this.connection = undefined; };
          db.onversionchange = () => { closed(); db.close(); };
          db.onclose = closed;
          this.maintenance = this.prune(db, this.limit, true);
          finish(db);
        };
        request.onerror = request.onblocked = () => finish();
      } catch { finish(); }
    });
    this.connection = opened;
    void opened.then(db => { if (!db && this.connection === opened) this.connection = undefined; });
    return opened;
  }

  private transaction<T>(db: IDBDatabase, mode: IDBTransactionMode,
    run: (tx: IDBTransaction, result: (value: T) => void, safe: (callback: () => void) => () => void) => void, stores = STORES): Promise<Result<T>> {
    return new Promise(resolve => {
      let tx: IDBTransaction | undefined, value: T | undefined, settled = false;
      const finish = (ok: boolean, error?: DOMException | null) => {
        if (settled) return;
        settled = true; clearTimeout(timer); resolve({ ok, value, error });
      };
      const timer = setTimeout(() => { finish(false); try { tx?.abort(); } catch { /* Already complete. */ } }, this.options.timeoutMs ?? 750);
      const failed = (error: unknown) => {
        finish(false, error instanceof DOMException ? error : undefined);
        try { tx?.abort(); } catch { /* Already complete. */ }
        if (error instanceof DOMException && error.name === 'InvalidStateError') this.connection = undefined;
      };
      const safe = (callback: () => void) => () => { try { callback(); } catch (error) { failed(error); } };
      try {
        tx = db.transaction(stores, mode);
        tx.oncomplete = () => finish(true);
        tx.onabort = tx.onerror = () => finish(false, tx?.error);
        run(tx, result => { value = result; }, safe);
      } catch (error) { failed(error); }
    });
  }

  async available() { return !!await this.open(); }

  async has(key: string): Promise<boolean> {
    const db = await this.open();
    if (!db) return false;
    const result = await this.transaction<boolean>(db, 'readonly', (tx, done) => {
      const read = tx.objectStore('pcm').getKey(this.id(key)); read.onsuccess = () => done(read.result !== undefined);
    }, ['pcm']);
    return result.ok && !!result.value;
  }

  get(key: string): Promise<StemCacheEntry | undefined> {
    if ((this.absent.get(key) ?? 0) > Date.now()) return Promise.resolve(undefined);
    const pending = this.reads.get(key);
    if (pending) return pending;
    const epoch = this.epoch;
    const read = this.read(key, epoch).finally(() => { if (this.reads.get(key) === read) this.reads.delete(key); });
    this.reads.set(key, read);
    return read;
  }

  private async read(key: string, epoch: number) {
    const db = await this.open(), id = this.id(key);
    const result = db ? await this.transaction<PCMRecord>(db, 'readonly', (tx, done) => {
      const read = tx.objectStore('pcm').get(id); read.onsuccess = () => done(read.result);
    }, ['pcm']) : undefined;
    const record = result?.ok ? result.value : undefined;
    if (epoch !== this.epoch) return undefined;
    if (!this.valid(record)) {
      this.misses++;
      if (record && db) void this.forget(db, id);
      if (result?.ok && !record) {
        if (this.absent.size >= 256) this.absent.delete(this.absent.keys().next().value!);
        this.absent.set(key, Date.now() + 10_000);
      }
      return undefined;
    }
    const entry = { left: new Float32Array(record.left), right: new Float32Array(record.right), startSample: 0 };
    if (entry.left.some(sample => !Number.isFinite(sample)) || entry.right.some(sample => !Number.isFinite(sample))) {
      this.misses++; if (db) void this.forget(db, id); return undefined;
    }
    this.hits++;
    // Touch only the access record; a hit never rewrites its PCM blob.
    if (db) void this.transaction(db, 'readwrite', (tx, _done, safe) => {
      const access = tx.objectStore('access'), request = access.get(id);
      request.onsuccess = safe(() => { if (request.result) access.put({ ...request.result, lastAccess: Date.now() }); });
    }, ['access']);
    return entry;
  }

  private valid(record: PCMRecord | undefined): record is PCMRecord {
    return !!record && record.namespace === this.options.namespace && record.left instanceof ArrayBuffer &&
      record.right instanceof ArrayBuffer && record.left.byteLength > 0 && record.left.byteLength % 4 === 0 &&
      record.left.byteLength === record.right.byteLength &&
      record.byteLength === record.left.byteLength + record.right.byteLength && record.byteLength <= this.entryLimit;
  }

  put(key: string, entry: StemCacheEntry): Promise<boolean> {
    const size = entry.left.byteLength + entry.right.byteLength;
    if (!size || size > this.entryLimit || entry.left.length !== entry.right.length ||
      entry.left.some(sample => !Number.isFinite(sample)) || entry.right.some(sample => !Number.isFinite(sample))) return Promise.resolve(false);
    return new Promise(resolve => {
      const previous = this.queue.get(key);
      if (previous) { this.queuedBytes -= previous.entry.left.byteLength + previous.entry.right.byteLength; previous.resolve(false); this.queue.delete(key); }
      // Slow storage must not retain an unbounded write backlog.
      while (this.queue.size && (this.queue.size >= 4 || this.queuedBytes + size > Math.min(this.limit, 16 * 1024 * 1024))) {
        const oldest = this.queue.keys().next().value!, job = this.queue.get(oldest)!;
        this.queuedBytes -= job.entry.left.byteLength + job.entry.right.byteLength;
        this.queue.delete(oldest); job.resolve(false);
      }
      this.queue.set(key, { entry, epoch: this.epoch, resolve }); this.queuedBytes += size;
      this.startWriter();
    });
  }

  private startWriter() {
    if (this.writer) return;
    const writer = this.drain().finally(() => {
      if (this.writer === writer) this.writer = undefined;
      if (this.queue.size) this.startWriter();
    });
    this.writer = writer;
  }

  private async drain() {
    while (this.queue.size) {
      const key = this.queue.keys().next().value!, job = this.queue.get(key)!;
      this.queue.delete(key); this.queuedBytes -= job.entry.left.byteLength + job.entry.right.byteLength;
      try { job.resolve(await this.write(key, job)); } catch { job.resolve(false); }
    }
  }

  private async write(key: string, job: WriteJob) {
    const db = await this.open(); await this.maintenance;
    if (!db || job.epoch !== this.epoch) return false;
    const { entry } = job, byteLength = entry.left.byteLength + entry.right.byteLength;
    if (byteLength > this.entryLimit) return false;
    const id = this.id(key);
    // Copy only when the bounded queue reaches this write, never on enqueue.
    const record: PCMRecord = { id, namespace: this.options.namespace, left: entry.left.slice().buffer,
      right: entry.right.slice().buffer, byteLength };
    for (let attempt = 0; attempt < 2; attempt++) {
      if (job.epoch !== this.epoch) return false;
      let finalBytes = this.bytes;
      const result = await this.transaction(db, 'readwrite', (tx, _done, safe) => {
        const access = tx.objectStore('access'), pcm = tx.objectStore('pcm'), meta = tx.objectStore('meta');
        let previous = 0, stored = 0, reads = 0;
        const ready = safe(() => {
          if (++reads !== 2) return;
          let total = Math.max(0, stored - previous + byteLength);
          pcm.put(record); access.put({ id, lastAccess: Date.now(), byteLength } satisfies AccessRecord);
          const finish = () => { meta.put({ id: TOTAL, value: total }); finalBytes = total; };
          if (total <= this.limit) { finish(); return; }
          // Keep favorite opening mixes ahead of disposable full-song stems.
          const evict = (includeOpenings: boolean) => {
            const cursor = access.index('lastAccess').openCursor();
            cursor.onsuccess = safe(() => {
              const item = cursor.result;
              if (!item || total <= this.limit) {
              if (total > this.limit && !includeOpenings) {
                if (!id.startsWith(`${this.options.namespace}:mix:favorite:`)) throw new DOMException('Reserved for favorite openings', 'AbortError');
                  evict(true);
                }
                else finish();
                return;
              }
              const stale = item.value as AccessRecord;
            if (stale.id !== id && (includeOpenings || !stale.id.startsWith(`${this.options.namespace}:mix:favorite:`))) {
                total -= stale.byteLength; pcm.delete(stale.id); item.delete();
              }
              item.continue();
            });
          };
          evict(false);
        });
        const old = access.get(id); old.onsuccess = () => { previous = old.result?.byteLength ?? 0; ready(); };
        const total = meta.get(TOTAL); total.onsuccess = () => { stored = total.result?.value ?? 0; ready(); };
      });
      if (result.ok) { this.bytes = finalBytes; this.writes++; this.absent.delete(key); return true; }
      if (result.error?.name !== 'QuotaExceededError' || attempt) return false;
      this.quotaLimit = Math.max(byteLength, Math.floor(this.limit / 2));
      await this.prune(db, Math.max(0, this.limit - byteLength));
    }
    return false;
  }

  private async forget(db: IDBDatabase, id: string) {
    await this.transaction(db, 'readwrite', tx => { tx.objectStore('pcm').delete(id); tx.objectStore('access').delete(id); });
    await this.prune(db, this.limit, true);
  }

  private async prune(db: IDBDatabase, limit: number, repair = false) {
    let finalBytes = this.bytes;
    const result = await this.transaction(db, 'readwrite', (tx, _done, safe) => {
      const access = tx.objectStore('access'), pcm = tx.objectStore('pcm'), meta = tx.objectStore('meta');
      if (repair) {
        // Inspect keys only: legacy/orphan blobs must not escape byte accounting.
        const keys = pcm.openKeyCursor();
        keys.onsuccess = safe(() => {
          const item = keys.result;
          if (!item) return;
          const id = String(item.primaryKey);
          if (!id.startsWith(`${this.options.namespace}:`)) { pcm.delete(id); access.delete(id); item.continue(); return; }
          const row = access.getKey(id);
          row.onsuccess = safe(() => { if (row.result === undefined) pcm.delete(id); item.continue(); });
        });
      }
      let total = 0;
      const rows: AccessRecord[] = [];
      const cursor = access.index('lastAccess').openCursor(null, 'prev');
      cursor.onsuccess = safe(() => {
        const item = cursor.result;
        if (!item) {
          rows.sort((a,b) => Number(b.id.startsWith(`${this.options.namespace}:mix:favorite:`)) - Number(a.id.startsWith(`${this.options.namespace}:mix:favorite:`)) || b.lastAccess-a.lastAccess);
          for (const row of rows) {
            if (total + row.byteLength > limit) { pcm.delete(row.id); access.delete(row.id); }
            else total += row.byteLength;
          }
          meta.put({ id: TOTAL, value: total }); finalBytes = total; return;
        }
        const row = item.value as AccessRecord;
        if ((repair && !row.id.startsWith(`${this.options.namespace}:`)) || !Number.isSafeInteger(row.byteLength) ||
          row.byteLength <= 0 || row.byteLength > this.entryLimit) { pcm.delete(row.id); item.delete(); }
        else rows.push(row);
        item.continue();
      });
    });
    if (result.ok) this.bytes = finalBytes;
  }

  async flush() { while (this.writer) await this.writer; }

  async clear() {
    this.epoch++;
    for (const job of this.queue.values()) job.resolve(false);
    this.queue.clear(); this.queuedBytes = 0; this.reads.clear(); this.absent.clear();
    const db = await this.open();
    if (!db) return;
    const result = await this.transaction(db, 'readwrite', tx => {
      for (const store of STORES) tx.objectStore(store).clear();
      tx.objectStore('meta').put({ id: TOTAL, value: 0 });
    });
    if (result.ok) this.bytes = 0;
  }

  stats() { return { available: !!this.options.factory(), hits: this.hits, misses: this.misses, writes: this.writes,
    bytes: this.bytes, maxBytes: this.limit, queuedWrites: this.queue.size, queuedBytes: this.queuedBytes }; }
}

const cache = new PersistentAudioCache({ factory: () => typeof indexedDB === 'undefined' ? undefined : indexedDB,
  maxBytes: () => playbackResources().persistentPartCacheBytes, maxEntryBytes: () => playbackResources().partCacheBytes,
  namespace: PERSISTENT_DSP_NAMESPACE });
export const persistentPreparedAudioAvailable = () => cache.available();
export const hasPersistentPreparedAudio = (key: string) => cache.has(key);
export const getPersistentPreparedAudio = (key: string) => cache.get(key);
export async function putPersistentPreparedAudio(key: string, entry: StemCacheEntry) { await cache.put(key, entry); }
export const clearPersistentPreparedAudio = () => cache.clear();
export const flushPersistentPreparedAudio = () => cache.flush();
export const persistentPreparedAudioStats = () => cache.stats();
