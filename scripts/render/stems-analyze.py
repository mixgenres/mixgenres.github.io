# Per-section RMS (dBFS) of FULL.mp3 and each stem from render/stems.ts. Usage: python3 scripts/render/stems-analyze.py <outDir>
import json,sys,subprocess,glob,os,numpy as np
d=sys.argv[1]; S=json.load(open(f'{d}/sections.json')); sr=22050
def load(f):
    raw=subprocess.run(['ffmpeg','-v','error','-i',f,'-ac','1','-ar',str(sr),'-f','f32le','-'],capture_output=True).stdout
    return np.frombuffer(raw,dtype=np.float32)
def db(x): 
    r=np.sqrt(np.mean(x**2)) if len(x) else 0
    return 20*np.log10(r) if r>1e-7 else -99
stems={t['id']:load(f"{d}/{t['id']}.mp3") for t in S['tracks'] if os.path.exists(f"{d}/{t['id']}.mp3")}
full=load(f'{d}/FULL.mp3')
print(f"== {S['genre']} / {S['styleId']}  dur={S['duration']:.0f}s")
hdr='section'.ljust(22)+'E  '+'FULL '+' '.join(f"{t['inst'][:9]:>9}" for t in S['tracks'] if t['id'] in stems)
print(hdr)
out=[]
for s in S['secs']:
    a,b=int(s['t0']*sr),int(s['t1']*sr)
    row=[db(full[a:b])]+[db(stems[t['id']][a:b]) for t in S['tracks'] if t['id'] in stems]
    out.append({'section':s['id'],'kind':s['kind'],'energy':s['energy'],'full':row[0],'stems':dict(zip([t['inst'] for t in S['tracks'] if t['id'] in stems],row[1:]))})
    print(f"{(s['kind'] or s['id'])[:20]:22}{str(s['energy'])[:3]:3}{row[0]:5.1f} "+' '.join(f"{v:9.1f}" for v in row[1:]))
json.dump(out,open(f'{d}/section-levels.json','w'),indent=1)
# summary
print('\nwhole-song stem RMS dBFS vs FULL:')
for t in S['tracks']:
    if t['id'] in stems: print(f"  {t['inst']:20} {db(stems[t['id']]):6.1f}  (rel FULL {db(stems[t['id']])-db(full):+.1f})")
