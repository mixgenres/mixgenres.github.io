import { performanceFixture } from './lib/playbackFixtures';
import type { RenderedPerformanceAudio } from '../src/engine/playback/mp3Export';
import test from 'node:test';
import assert from 'node:assert/strict';
import { IDBFactory, IDBObjectStore } from 'fake-indexeddb';
import { PersistentAudioCache } from '../src/engine/cache/persistentPreparedAudio';
import { PCMStemCache } from '../src/engine/cache/stemCache';
import { preparePartAudio, clearPreparedAudio, preparedAudioKey } from '../src/engine/cache/preparedAudio';
import { favoriteCatalogIds, prepareFavoriteOpenings } from '../src/engine/cache/favoritePlayback';
import { songCatalog } from '../src/data/songs/catalog';
import { createCatalogSong } from '../src/engine/sheet/songCatalog';
import { arrangeBand } from '../src/engine/band/arrangeBand';

const pcm = (frames = 4, sample = .25) => ({ left: new Float32Array(frames).fill(sample), right: new Float32Array(frames).fill(-sample), startSample: 0 });
function fixture(bytes = 64, namespace = 'test', factory = new IDBFactory()) {
  return { factory, cache: new PersistentAudioCache({ factory: () => factory, maxBytes: () => bytes, namespace, timeoutMs: 100 }) };
}
const turn = () => new Promise<void>(resolve => setImmediate(resolve));
async function database(factory: IDBFactory) {
  return new Promise<IDBDatabase>((resolve,reject) => {
    const request = factory.open('mixgenres-prepared-audio',1);
    request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
  });
}
async function mutate(db: IDBDatabase, work: (tx: IDBTransaction) => void) {
  await new Promise<void>((resolve,reject) => {
    const tx = db.transaction(['pcm','access','meta'],'readwrite');
    tx.oncomplete = () => resolve(); tx.onabort = () => reject(tx.error); work(tx);
  });
}

test('disk PCM round trips cropped stereo buffers, coalesces reads and accounts replacements', async () => {
  const {cache} = fixture();
  const large = pcm(40), entry = {left: large.left.subarray(4,8),right:large.right.subarray(8,12),startSample:0};
  assert.equal(await cache.put('a',entry),true);
  const first=cache.get('a'),second=cache.get('a'); assert.equal(first,second);
  assert.deepEqual((await first)?.left,entry.left); assert.equal((await first)?.left.buffer.byteLength,16);
  assert.equal(await cache.put('a',pcm(2)),true); assert.equal(cache.stats().bytes,16);
  assert.equal(await cache.put('b',pcm(4)),true); assert.equal(cache.stats().bytes,48);
});

test('disk LRU touches hits, protects just-written entries and keeps favorite openings', async t => {
  let now = 1000; t.mock.method(Date, 'now', () => ++now);
  const {cache}=fixture();
  await cache.put('a',pcm()); await cache.put('b',pcm());
  await cache.get('a'); await cache.put('c',pcm());
  assert.equal(await cache.has('a'),true); assert.equal(await cache.has('b'),false); assert.equal(await cache.has('c'),true);
  await cache.clear();
  await cache.put('mix:favorite:opening',pcm()); await cache.put('stem:a',pcm()); await cache.put('stem:b',pcm());
  assert.equal(await cache.has('mix:favorite:opening'),true); assert.equal(await cache.has('stem:b'),true);
  assert.equal(await cache.put('huge-stem',pcm(8)),false,'full sections cannot displace favorite openings');
  assert.equal(await cache.has('mix:favorite:opening'),true); assert.ok(cache.stats().bytes<=64);
});

test('same-timestamp eviction never throws away the new opening', async () => {
  const {cache}=fixture(32); const now=Date.now; Date.now=()=>100;
  try { await cache.put('z',pcm()); await cache.put('a',pcm()); assert.equal(await cache.has('a'),true); assert.equal(await cache.has('z'),false); }
  finally { Date.now=now; }
});

test('invalid audio cannot replace a valid cache entry', async () => {
  const {cache}=fixture(); await cache.put('a',pcm());
  assert.equal(await cache.put('a',pcm(100)),false);
  assert.equal(await cache.put('a',{...pcm(),right:new Float32Array(3)}),false);
  assert.equal(await cache.put('a',pcm(4,NaN)),false);
  assert.deepEqual((await cache.get('a'))?.left,pcm().left); assert.equal(cache.stats().bytes,32);
});

test('missing storage, blocked opens and hung transactions fall back within a deadline', async () => {
  const unavailable=new PersistentAudioCache({factory:()=>undefined,maxBytes:()=>64,namespace:'x',timeoutMs:10});
  assert.equal(await unavailable.put('a',pcm()),false); assert.equal(await unavailable.get('a'),undefined);
  const stuck={open:()=>({})} as unknown as IDBFactory;
  const bounded=new PersistentAudioCache({factory:()=>stuck,maxBytes:()=>64,namespace:'x',timeoutMs:10});
  assert.equal(await bounded.available(),false); assert.equal(await bounded.get('a'),undefined);
  const fakeDB={objectStoreNames:{contains:()=>true},transaction:()=>({objectStore:()=>({get:()=>({}),index:()=>({openCursor:()=>({})})}),abort(){}})};
  const fakeFactory={open(){const request: { result: typeof fakeDB; onsuccess?: () => void } = {result:fakeDB};queueMicrotask(()=>request.onsuccess?.());return request;}} as unknown as IDBFactory;
  const cache=new PersistentAudioCache({factory:()=>fakeFactory,maxBytes:()=>64,namespace:'x',timeoutMs:10});
  assert.equal(await cache.get('a'),undefined); await cache.flush();
});

test('corrupt stored PCM is discarded and can be synthesized again', async () => {
  const {cache,factory}=fixture(); await cache.put('a',pcm()); const db=await database(factory);
  await mutate(db,tx=>tx.objectStore('pcm').put({id:'test:a',namespace:'test',left:pcm(4,NaN).left.buffer,right:pcm().right.buffer,byteLength:32}));
  assert.equal(await cache.get('a'),undefined); await turn(); await turn();
  assert.equal(await cache.put('a',pcm()),true); assert.deepEqual((await cache.get('a'))?.left,pcm().left); db.close();
});

test('engine versions discard old artifacts and repair persisted byte totals', async () => {
  const {cache,factory}=fixture(); await cache.put('a',pcm()); const db=await database(factory);
  await mutate(db,tx=>tx.objectStore('meta').put({id:'total-bytes',value:90000}));
  db.close(); const next=fixture(64,'next',factory).cache;
  await next.put('b',pcm()); assert.equal(next.stats().bytes,32); assert.equal(await cache.has('a'),false);
});

test('quota failures reduce the budget, evict old stems and retry once', async () => {
  const {cache}=fixture(128); await cache.put('a',pcm()); await cache.put('b',pcm());
  const original=IDBObjectStore.prototype.put; let thrown=false;
  IDBObjectStore.prototype.put=function(...args: Parameters<typeof original>) {
    if(this.name==='pcm' && !thrown){thrown=true;throw new DOMException('full','QuotaExceededError');}
    return original.apply(this,args);
  };
  try { assert.equal(await cache.put('c',pcm()),true); assert.equal(cache.stats().maxBytes,64); assert.ok(cache.stats().bytes<=64); }
  finally { IDBObjectStore.prototype.put=original; }
});

test('write backlog is bounded and clearing prevents queued work from restoring old audio', async () => {
  const {cache}=fixture(1024);
  const writes=Array.from({length:20},(_,i)=>cache.put(String(i),pcm()));
  assert.ok(cache.stats().queuedWrites<=4);
  await cache.clear(); await Promise.all(writes); await cache.flush();
  assert.equal(cache.stats().bytes,0); assert.equal(await cache.has('19'),false);
  await cache.put('fresh',pcm()); assert.equal(await cache.has('fresh'),true);
});

test('RAM PCM owns compact arrays and preserves good entries on invalid replacement', () => {
  const cache=new PCMStemCache(64),large=pcm(100);
  cache.set('a',{left:large.left.subarray(1,5),right:large.right.subarray(2,6),startSample:0});
  assert.equal(cache.get('a')!.left.buffer.byteLength,16); assert.equal(cache.byteLength,32);
  cache.set('a',large); assert.equal(cache.byteLength,32); assert.equal(cache.get('a')!.left.length,4);
  cache.set('b',pcm());cache.set('c',pcm());assert.equal(cache.has('a'),false); assert.equal(cache.byteLength,64);
});

test('shared preparation cancels only after the final consumer and isolates cache domains', async () => {
  const a=new PCMStemCache(128), b=new PCMStemCache(128); const one=new AbortController(),two=new AbortController();
  let finish!:(value:RenderedPerformanceAudio)=>void, signal!:AbortSignal, calls=0;
  const render=(received:AbortSignal)=>{signal=received;calls++;return new Promise<RenderedPerformanceAudio>(resolve=>finish=resolve);};
  const first=preparePartAudio('same',one.signal,render,true,a);const rejected=assert.rejects(first,{name:'AbortError'});
  const second=preparePartAudio('same',two.signal,render,true,a);await turn();one.abort(); await rejected;assert.equal(signal.aborted,false);
  const other=await preparePartAudio('same',undefined,async()=>({sampleRate:44100,...pcm(4,.5)}),true,b);
  assert.equal(other.left[0],.5);assert.equal(calls,1);finish({sampleRate:44100,...pcm()}); await second;
  assert.equal(a.get('same')!.left[0],.25);assert.equal(b.get('same')!.left[0],.5); clearPreparedAudio();
});

test('prepared identities are independent of instrument-map insertion order', () => {
  const performance=performanceFixture();
  assert.equal(preparedAudioKey(performance,{trackInstruments:new Map([['b','piano'],['a','guitar']])}),
    preparedAudioKey(performance,{trackInstruments:new Map([['a','guitar'],['b','piano']])}));
});

test('favorite preparation covers every tango and flamenco style using real transport windows', async () => {
  assert.deepEqual(favoriteCatalogIds,songCatalog.filter(song=>['tango','flamenco'].includes(song.genreId)).map(song=>song.id));
  assert.ok(favoriteCatalogIds.length>10);
  const visited:string[]=[],windows:Array<{start:number;end:number}>=[];let flushed=0;
  await prepareFavoriteOpenings(new AbortController().signal,favoriteCatalogIds.at(-1),{
    compile:async song=>{visited.push(song.catalogId!);return performanceFixture({duration:10});},
    render:async(_performance,_song,_signal,window,priority)=>{windows.push(window!);assert.equal(priority!(),50);return {sampleRate:44100,...pcm()};},
    flush:async()=>{flushed++;},
  });
  assert.equal(visited[0],favoriteCatalogIds.at(-1)); assert.equal(new Set(visited).size,favoriteCatalogIds.length);
  assert.equal(flushed,favoriteCatalogIds.length); assert.equal(windows.length,3*favoriteCatalogIds.length);
  const a=createCatalogSong(favoriteCatalogIds[0]),b=createCatalogSong(favoriteCatalogIds[0]);
  const options={trackInstruments:new Map(a.tracks.map(track=>[track.id,track.instrumentId??track.instrument]))};
  assert.equal(preparedAudioKey(arrangeBand(a),options),preparedAudioKey(arrangeBand(b),options),'prewarmed audio must match catalog playback');
});

test('favorite preparation stops between songs when playback takes over', async () => {
  const controller=new AbortController();let compiled=0;
  await assert.rejects(prepareFavoriteOpenings(controller.signal,undefined,{
    compile:async()=>{compiled++;return performanceFixture({duration:10});},
    render:async()=>{controller.abort();return {sampleRate:44100,...pcm()};},flush:async()=>{},
  }),{name:'AbortError'}); assert.equal(compiled,1);
});
