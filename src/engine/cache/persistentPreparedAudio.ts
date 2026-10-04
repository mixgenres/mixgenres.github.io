import { playbackResources } from '../playback/playbackResources';
import type { StemCacheEntry } from './stemCache';

const DB_NAME = 'mixgenres-prepared-audio';
const DB_VERSION = 1;
const PCM_STORE = 'pcm';
const ACCESS_STORE = 'access';
const META_STORE = 'meta';
const TOTAL_BYTES_KEY = 'total-bytes';
/** Bump whenever physical DSP output can change without preparedAudioKey changing. */
export const PERSISTENT_DSP_NAMESPACE = 'physical-dsp-v1';

interface PersistentPCMRecord {
  id: string;
  namespace: string;
  left: ArrayBuffer;
  right: ArrayBuffer;
  byteLength: number;
}
interface AccessRecord { id: string; lastAccess: number; byteLength: number }
interface MetaRecord { id: string; value: number }

let dbPromise: Promise<IDBDatabase | undefined> | undefined;
let hits = 0;
let misses = 0;
let writes = 0;
let bytes = 0;
let available = typeof indexedDB !== 'undefined';

function request<T>(value: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    value.onsuccess = () => resolve(value.result);
    value.onerror = () => reject(value.error ?? new Error('IndexedDB request failed'));
  });
}

function transactionDone(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onabort = () => reject(tx.error ?? new Error('IndexedDB transaction aborted'));
    tx.onerror = () => reject(tx.error ?? new Error('IndexedDB transaction failed'));
  });
}

function persistentId(key: string) { return `${PERSISTENT_DSP_NAMESPACE}:${key}`; }

async function openDatabase(): Promise<IDBDatabase | undefined> {
  if (!available) return undefined;
  if (dbPromise) return dbPromise;
  dbPromise = new Promise(resolve => {
    try {
      const open = indexedDB.open(DB_NAME, DB_VERSION);
      open.onupgradeneeded = () => {
        const db = open.result;
        if (!db.objectStoreNames.contains(PCM_STORE)) db.createObjectStore(PCM_STORE, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(ACCESS_STORE)) {
          const access = db.createObjectStore(ACCESS_STORE, { keyPath: 'id' });
          access.createIndex('lastAccess', 'lastAccess');
        }
        if (!db.objectStoreNames.contains(META_STORE)) db.createObjectStore(META_STORE, { keyPath: 'id' });
      };
      open.onsuccess = async () => {
        const db = open.result;
        db.onversionchange = () => db.close();
        try {
          const tx = db.transaction(META_STORE, 'readonly');
          const total = await request(tx.objectStore(META_STORE).get(TOTAL_BYTES_KEY) as IDBRequest<MetaRecord | undefined>);
          bytes = total?.value ?? 0;
        } catch { /* Cache telemetry must never block playback. */ }
        resolve(db);
      };
      open.onerror = () => { available = false; resolve(undefined); };
      open.onblocked = () => resolve(undefined);
    } catch {
      available = false;
      resolve(undefined);
    }
  });
  return dbPromise;
}

export async function persistentPreparedAudioAvailable(): Promise<boolean> {
  return !!await openDatabase();
}

/** Cheap existence probe used by the idle compiler so it does not hydrate
 * hundreds of megabytes merely to discover that a section is already built. */
export async function hasPersistentPreparedAudio(key: string): Promise<boolean> {
  const db = await openDatabase();
  if (!db) return false;
  try {
    const tx = db.transaction(PCM_STORE, 'readonly');
    return (await request(tx.objectStore(PCM_STORE).getKey(persistentId(key)))) !== undefined;
  } catch {
    return false;
  }
}

/** Read-through persistent cache for expensive, complete physical DSP sections.
 * Recency lives in a tiny side-store so a hit never rewrites the PCM blobs. */
export async function getPersistentPreparedAudio(key: string): Promise<StemCacheEntry | undefined> {
  const db = await openDatabase();
  if (!db) { misses++; return undefined; }
  const id = persistentId(key);
  return new Promise(resolve => {
    try {
      const tx = db.transaction([PCM_STORE, ACCESS_STORE], 'readwrite');
      const pcm = tx.objectStore(PCM_STORE);
      const access = tx.objectStore(ACCESS_STORE);
      let record: PersistentPCMRecord | undefined;
      let settled = false;
      const fail = () => {
        if (settled) return;
        settled = true;
        misses++;
        resolve(undefined);
      };
      const read = pcm.get(id) as IDBRequest<PersistentPCMRecord | undefined>;
      read.onsuccess = () => {
        record = read.result;
        if (record?.namespace === PERSISTENT_DSP_NAMESPACE) {
          access.put({ id, lastAccess: Date.now(), byteLength: record.byteLength } satisfies AccessRecord);
        } else record = undefined;
      };
      read.onerror = () => { record = undefined; };
      tx.oncomplete = () => {
        if (settled) return;
        settled = true;
        if (!record) { misses++; resolve(undefined); return; }
        hits++;
        resolve({ left: new Float32Array(record.left), right: new Float32Array(record.right), startSample: 0 });
      };
      tx.onabort = tx.onerror = fail;
    } catch {
      misses++;
      resolve(undefined);
    }
  });
}

/** Async write-back. Callers should not await this on the playback critical path. */
export async function putPersistentPreparedAudio(key: string, entry: StemCacheEntry): Promise<void> {
  const db = await openDatabase();
  if (!db) return;
  const left = entry.left.slice().buffer;
  const right = entry.right.slice().buffer;
  const byteLength = left.byteLength + right.byteLength;
  const maxBytes = playbackResources().persistentPartCacheBytes;
  if (byteLength > maxBytes) return;
  const id = persistentId(key);

  await new Promise<void>(resolve => {
    try {
      const tx = db.transaction([PCM_STORE, ACCESS_STORE, META_STORE], 'readwrite');
      const pcm = tx.objectStore(PCM_STORE);
      const access = tx.objectStore(ACCESS_STORE);
      const meta = tx.objectStore(META_STORE);
      let previousBytes = 0;
      let storedTotal = bytes;
      let reads = 0;
      let finalTotal = bytes;
      const ready = () => {
        if (++reads !== 2) return;
        let total = Math.max(0, storedTotal - previousBytes + byteLength);
        pcm.put({ id, namespace: PERSISTENT_DSP_NAMESPACE, left, right, byteLength } satisfies PersistentPCMRecord);
        access.put({ id, lastAccess: Date.now(), byteLength } satisfies AccessRecord);
        if (total <= maxBytes) {
          finalTotal = total;
          meta.put({ id: TOTAL_BYTES_KEY, value: finalTotal } satisfies MetaRecord);
          return;
        }
        const cursor = access.index('lastAccess').openCursor();
        cursor.onsuccess = () => {
          const item = cursor.result;
          if (!item || total <= maxBytes) {
            finalTotal = Math.max(0, total);
            meta.put({ id: TOTAL_BYTES_KEY, value: finalTotal } satisfies MetaRecord);
            return;
          }
          const stale = item.value as AccessRecord;
          total -= stale.byteLength;
          pcm.delete(stale.id);
          item.delete();
          item.continue();
        };
      };
      const previous = access.get(id) as IDBRequest<AccessRecord | undefined>;
      previous.onsuccess = () => { previousBytes = previous.result?.byteLength ?? 0; ready(); };
      previous.onerror = () => ready();
      const total = meta.get(TOTAL_BYTES_KEY) as IDBRequest<MetaRecord | undefined>;
      total.onsuccess = () => { storedTotal = total.result?.value ?? bytes; ready(); };
      total.onerror = () => ready();
      tx.oncomplete = () => { bytes = finalTotal; writes++; resolve(); };
      tx.onabort = tx.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
}

export function persistentPreparedAudioStats() {
  return { available, hits, misses, writes, bytes, maxBytes: playbackResources().persistentPartCacheBytes };
}

/** Explicit dev/user cleanup; normal RAM resets intentionally keep compiled DSP on disk. */
export async function clearPersistentPreparedAudio(): Promise<void> {
  const db = await openDatabase();
  if (!db) return;
  try {
    const tx = db.transaction([PCM_STORE, ACCESS_STORE, META_STORE], 'readwrite');
    tx.objectStore(PCM_STORE).clear();
    tx.objectStore(ACCESS_STORE).clear();
    tx.objectStore(META_STORE).put({ id: TOTAL_BYTES_KEY, value: 0 } satisfies MetaRecord);
    await transactionDone(tx);
    bytes = 0;
  } catch { /* Best-effort cache cleanup. */ }
}
