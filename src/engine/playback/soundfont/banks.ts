import { SOUNDFONT_VERSION, type BankId } from './presets';
import { checkAbort } from '../../../export/audioEncoding';
import { BANK_FILES, SOUNDFONT_CONTENT_KEY } from './bankIdentity';
// Keep compressed data only. Decoded samples are owned by the active synth, not
// duplicated in a second unbounded global float-PCM cache.
const loaded = new Map<BankId, ArrayBuffer>();
const pending = new Map<BankId, Promise<ArrayBuffer>>();
const maxBankBytes=96*1024*1024;
let byteLength = 0;
let readBank: ((id: BankId) => Promise<ArrayBuffer>) | undefined;
let storageCleanup:Promise<void>|undefined;
const isSF2=(data:ArrayBuffer)=>data.byteLength>=12&&new DataView(data).getUint32(0,false)===0x52494646&&new DataView(data).getUint32(8,false)===0x7366626b;
async function validate(id:BankId,data:ArrayBuffer) {
  const meta=BANK_FILES[id],raw=isSF2(data);
  if(data.byteLength!==(raw?meta.unpackedBytes:meta.bytes))throw new Error(`Incomplete ${id} SoundFont download.`);
  if(globalThis.crypto?.subtle) {
    const digest=await crypto.subtle.digest('SHA-256',data);
    const hash=Array.from(new Uint8Array(digest),v=>v.toString(16).padStart(2,'0')).join('');
    if(hash!==(raw?meta.unpackedSha256:meta.sha256))throw new Error(`Corrupt ${id} SoundFont download.`);
  }
  return data;
}
/** Portable renderers/tests can supply disk/network assets without browser URLs. */
export function setSoundfontBankReader(reader: (id: BankId) => Promise<ArrayBuffer>) { readBank = reader; }
async function readCompressed(id: BankId): Promise<ArrayBuffer> {
  if (readBank) return validate(id,await readBank(id));
  const { bankURLs } = await import('./assets');
  const url = new URL(bankURLs[id], globalThis.location.href).href;
  let storage: Cache | undefined;
  try {
    const cacheName=`${SOUNDFONT_VERSION}:${SOUNDFONT_CONTENT_KEY}`;
    storage=await globalThis.caches?.open(cacheName);
    storageCleanup??=(async()=>{for(const name of await globalThis.caches?.keys()??[])if(name.startsWith('mixgenres-sf-v')&&name!==cacheName)await caches.delete(name);})().catch(()=>{});
    await storageCleanup;
  } catch { /* Private browsing still plays. */ }
  try {
    const cached=await storage?.match(url);
    if(cached?.ok)return await validate(id,await cached.arrayBuffer());
  } catch {try{await storage?.delete(url);}catch{/* Retry from network after a bad disk entry. */}}
  const response = await fetch(url).catch(error=>{throw new Error(`Could not fetch ${id} SoundFont: ${error instanceof Error?error.message:String(error)}.`);});
  if (!response.ok) throw new Error(`Could not load ${id} SoundFont (${response.status}).`);
  const data = await validate(id,await response.arrayBuffer());
  if (storage) { try { await storage.put(url, new Response(data)); } catch { /* Quota failure is recoverable. */ } }
  return data;
}
async function packedBank(id: BankId, signal?: AbortSignal): Promise<ArrayBuffer> {
  checkAbort(signal);
  let data = loaded.get(id);
  if (!data) {
    let job = pending.get(id);
    if (!job) {
      job = readCompressed(id).then(result => {
        const limit=maxBankBytes;
        // A large quality bank can still play on a constrained device without
        // making the compressed RAM cache exceed its advertised limit.
        if(result.byteLength>limit)return result;
        while (loaded.size && byteLength + result.byteLength > limit) {
          const oldest = loaded.keys().next().value!; byteLength -= loaded.get(oldest)!.byteLength; loaded.delete(oldest);
        }
        loaded.set(id, result); byteLength += result.byteLength; return result;
      }).finally(() => pending.delete(id));
      pending.set(id, job);
    }
    // A cancelled consumer releases immediately; shared downloads can still be
    // used by a replacement song, with no partial/poisoned cache entries.
    data = await new Promise<ArrayBuffer>((resolve, reject) => {
      const abort = () => { cleanup(); reject(new DOMException('Sample loading cancelled', 'AbortError')); };
      const cleanup = () => signal?.removeEventListener('abort', abort);
      signal?.addEventListener('abort', abort, { once: true });
      job.then(result => { cleanup(); resolve(result); }, error => { cleanup(); reject(error); });
    });
  }
  checkAbort(signal);
  if(loaded.has(id)){loaded.delete(id);loaded.set(id,data);}
  return data;
}
/** Warm only the compressed bank; avoid decoding every sample twice on Play. */
export async function prefetchSoundfontBank(id:BankId,signal?:AbortSignal) {await packedBank(id,signal);}
export async function loadSoundfontBank(id: BankId, signal?: AbortSignal): Promise<ArrayBuffer> {
  const data=await packedBank(id,signal);
  // Some servers transparently decode Content-Encoding. Accept raw SF2 too,
  // so a CDN/header configuration cannot make us decompress it twice.
  if(isSF2(data))return data.slice(0);
  const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream('gzip'));
  const decoded = await new Response(stream).arrayBuffer();
  if(!isSF2(decoded)||decoded.byteLength!==BANK_FILES[id].unpackedBytes)throw new Error(`Invalid ${id} SoundFont contents.`);
  checkAbort(signal); return decoded;
}
export function soundfontBankStats() { return { compressedBytes: byteLength, limitBytes: maxBankBytes, loaded: [...loaded.keys()], pending: pending.size }; }
