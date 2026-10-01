// Canonical audit orchestrator.
// T0: type/data gates. T1: all-style data reach + symbolic checks, sharded in parallel.
// T2: section-aware full-length audio fingerprints, sharded/cached. T3: browser master chain.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { flag, writeReport } from '../lib/io.ts';
import { ALL_STYLES } from '../../src/engine/style/registry.ts';
import { GENRE_NAMES } from '../../src/data/genres/index.ts';

const tier = Number(flag('tier') ?? process.env.AUDIT_TIER ?? 1);
const shards = Math.max(1, Math.min(16, Number(flag('shards') ?? process.env.AUDIT_SHARDS ?? 8)));
const audioShards = Math.max(1, Math.min(8, Number(flag('audio-shards') ?? process.env.AUDIO_SHARDS ?? 4)));
if (![0,1,2,3].includes(tier)) throw new Error('tier must be 0..3');
mkdirSync('audit', { recursive: true });
const started=Date.now();
function gitSha(): string | null { try { return execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim() || null; } catch { return null; } }
function sourceHash(): string {
  const files=['package.json','tsconfig.json','src/engine/band/arrangeBand.ts','src/engine/style/resolve.ts','src/engine/sheet/sheet.ts','src/engine/playback/mp3Export.ts'];
  const h=createHash('sha256'); for(const file of files) if(existsSync(file)) h.update(file).update(readFileSync(file)); return h.digest('hex');
}
function run(label:string,args:string[]): {label:string;status:'PASS'|'FAIL';code:number} {
  try { execFileSync('npm',args,{stdio:'inherit',env:process.env}); return {label,status:'PASS',code:0}; }
  catch(error) { const code=typeof error==='object'&&error&&'status' in error?Number((error as {status?:number}).status??1):1; return {label,status:'FAIL',code}; }
}
function runShard(label:string, script:string, count:number, total:number): Promise<{label:string;status:'PASS'|'FAIL';shards:number}> {
  const jobs: Promise<number>[]=[];
  for(let i=0;i<count;i++){
    const start=Math.floor(total*i/count), end=Math.floor(total*(i+1)/count); if(start>=end) continue;
    jobs.push(new Promise(resolve=>{const child=spawn(process.execPath,['--import','tsx',script,`--start=${start}`,`--end=${end}`],{stdio:'inherit',env:process.env});child.on('close',code=>resolve(code??1));}));
  }
  return Promise.all(jobs).then(codes=>({label,status:codes.every(c=>c===0)?'PASS':'FAIL',shards:codes.length}));
}

const results:Array<Record<string,unknown>>=[];
results.push(run('type', ['run','check:tsc']));
results.push(run('data-boundary', ['run','check:data-boundary']));
results.push(run('ids', ['run','check:ids']));
if(tier>=1){
  results.push(await runShard('style-audit','scripts/audit/style-audit.ts',shards,ALL_STYLES.length));
}
if(tier>=2) results.push(await runShard('audio','scripts/checks/audio-audit.ts',audioShards,Object.keys(GENRE_NAMES).length));
if(tier>=3) results.push(run('browser-master',['run','audit:browser']));

const failures=results.filter(r=>r.status==='FAIL');
const payload={schemaVersion:2,generatedAt:new Date().toISOString(),gitSha:gitSha(),engineSourceHash:sourceHash(),tier,styleCount:ALL_STYLES.length,durationMs:Date.now()-started,results,strict:process.env.STRICT==='1',failures};
writeReport('run.json',payload);
writeFileSync('audit/last-success.json',JSON.stringify(payload,null,2)+'\n');
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',tier,styles:ALL_STYLES.length,durationMs:payload.durationMs,gitSha:payload.gitSha},null,2));
if(failures.length) process.exit(1);
