# REPORT: estimated per-track peak level (unit-gain instrument peak x real gain chain) vs a role-based target, per style.
# The instrument audit measures at unit track gain; makeup is applied exactly once here via effDb.
# Needs audit/instrument-render-audit.json (npm run check:instrument-render) and audit/song-levels/style-levels.json
# (npm run report:levels). Usage: python3 scripts/reports/level-targets-diff.py [styleId ...]
# Writes /tmp/current.tsv and /tmp/proposed.tsv; `git diff --no-index /tmp/current.tsv /tmp/proposed.tsv` is the per-song level diff.
import json,math,sys,subprocess,os
# Prefer the multi-note, multi-velocity peaks from `npm run calibrate:makeup`; fall back to the single-note audit.
if os.path.exists('audit/instrument-peaks.json'): raw=json.load(open('audit/instrument-peaks.json'))
else: raw={r['instrumentId']:r['peak'] for r in json.load(open('audit/instrument-render-audit.json'))['rows']}
S=json.load(open('audit/song-levels/style-levels.json'))
# role -> target peak dBFS before master (typical mix: lead/drums up front, comp/pad behind)
TARGET={'lead':-9,'melody':-9,'drums':-10,'percussion':-14,'perc':-14,'bass':-10,'comp':-17,'harmony':-17,'pad':-22}
def est(t,sec_vel=1.0):
    p=raw.get(t['inst']); 
    if not p: return None
    return 20*math.log10(p)+t['effDb']
rows=[]
for s in S:
    if 'tracks' not in s: continue
    for t in s['tracks']:
        if t['notes']==0: continue
        e=est(t)
        if e is None: continue
        tgt=TARGET.get(t['role'],-17)
        rows.append((s['styleId'],t['id'],t['inst'],t['role'],round(e,1),tgt,round(tgt-e,1)))
os.makedirs('audit/song-levels',exist_ok=True)
GATE='--gate' in sys.argv; args=[a for a in sys.argv[1:] if not a.startswith('--')]
sel=set(args) or {'kizomba-tarraxinha','tango-canyengue' ,'salsa-dura'}
with open('/tmp/current.tsv','w') as a, open('/tmp/proposed.tsv','w') as b:
    for r in rows:
        if r[0] in sel:
            a.write(f"{r[0]}\t{r[1]}\t{r[2]:<16}\t{r[3]:<10}\tpeak={r[4]:>6} dBFS\n")
            b.write(f"{r[0]}\t{r[1]}\t{r[2]:<16}\t{r[3]:<10}\tpeak={r[5]:>6} dBFS\t(gain {r[6]:+.1f} dB)\n")
hot=[r for r in rows if r[4]>0]; quiet=[r for r in rows if r[4]<-40]
print('track-lanes',len(rows),'| est peak >0 dBFS:',len(hot),'| < -40 dBFS:',len(quiet))
import collections
print('hot',collections.Counter(r[2] for r in hot).most_common(8))
print('quiet',collections.Counter(r[2] for r in quiet).most_common(10))
print('median est peak by role',{k:round(sorted(r[4] for r in rows if r[3]==k)[len([1 for r in rows if r[3]==k])//2],1) for k in set(r[3] for r in rows)})
print('songs where est spread >40dB:',sum(1 for s in {r[0] for r in rows} if max(r[4] for r in rows if r[0]==s)-min(r[4] for r in rows if r[0]==s)>40),'/',len({r[0] for r in rows}))

if GATE:
    # Level gate (all styles): est. pre-master peak must stay <= -3 dBFS, within 10 dB of its role target,
    # and no style may spread more than 20 dB between loudest and quietest active track.
    fails=[]
    for r in rows:
        if r[4]>-3: fails.append(f"{r[0]}/{r[1]} ({r[2]}) est peak {r[4]} dBFS > -3")
        elif abs(r[6])>10: fails.append(f"{r[0]}/{r[1]} ({r[2]}, {r[3]}) {r[4]} dBFS is {abs(r[6])} dB off target {r[5]}")
    for st in sorted({r[0] for r in rows}):
        v=[r[4] for r in rows if r[0]==st]
        if max(v)-min(v)>20: fails.append(f"{st}: track spread {round(max(v)-min(v),1)} dB > 20")
    print(f"LEVEL GATE: {len(fails)} failure(s)")
    for f in fails[:40]: print('  -',f)
    sys.exit(1 if fails else 0)
