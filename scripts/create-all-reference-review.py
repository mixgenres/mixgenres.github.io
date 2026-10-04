"""Build a searchable all-sample review and evidence report without copying recordings."""
import argparse
import html
import json
import os
import statistics
from collections import Counter
from pathlib import Path
from urllib.parse import quote
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--phase', default='ensemble')
args = parser.parse_args()
root = Path.cwd()
folder = root / 'audit/all-samples'
phase = folder / args.phase
if phase.parent != folder:
    parser.error('Invalid phase')
latest_results = {r['styleId']: r for r in json.loads((phase / 'summary.json').read_text()).get('results', [])} if (phase / 'summary.json').exists() else {}
survey = json.loads((folder / 'reference-features.json').read_text())
escape = lambda value: html.escape(str(value), quote=True)
references = survey['entries']
cards, findings = [], []
def player(label, path, start=0, seconds=12):
    if not Path(path).exists():
        return ''
    url = quote(os.path.relpath(path, folder), safe='/') + f'#t={start},{start + seconds}'
    return f'<label>{escape(label)}<audio controls preload="none" src="{escape(url)}"></audio></label>'
for entry in references:
    windows = [w for w in entry['windows'] if w['status'] == 'measured']
    for match in entry['matches']:
        style = match['styleId']
        path = phase / f'{style}-comparison.json'
        latest = latest_results.get(style, {})
        comparison = json.loads(path.read_text()) if path.exists() and latest.get('status') != 'failed' else None
        voice_only = style == 'flamenco-tonas-martinetes'
        players = player('Album opening', entry['file'])
        if len(windows) > 1:
            players += player('Album body', entry['file'], windows[1]['start'])
        generated = phase / f'{style}.mp3'
        if comparison:
            if comparison.get('referenceSource') == 'separated accompaniment':
                players += player('Separated accompaniment', entry['accompanimentFile'], windows[1]['start'] if len(windows) > 1 else 0)
            players += player('Generated ensemble study', generated, seconds=comparison['generated']['durationSeconds'])
            if (root / 'audit/all-samples/gain-ab' / f'{match["genre"]}-before.mp3').exists():
                players += player('Before gain calibration (6s)', root / 'audit/all-samples/gain-ab' / f'{match["genre"]}-before.mp3', seconds=6)
                players += player('After gain calibration (6s)', root / 'audit/all-samples/gain-ab' / f'{match["genre"]}-after.mp3', seconds=6)
            warnings = Counter(f for w in comparison['windows'] for f in w['findings'])
            consistent = [f for f, count in warnings.items() if count >= min(2, len(comparison['windows']))]
            findings.append({'styleId': style, 'genre': match['genre'], 'name': match['name'],
                             'findingsAcrossWindows': consistent, 'buriedStems': comparison['stemBalanceWarnings'],
                             'medianSpectralDistance': statistics.median(w['differences']['spectralDistance'] for w in comparison['windows']),
                             'generatedRmsDbfs': comparison['generated']['rmsDbfs'],
                             'referenceMedianRmsDbfs': statistics.median(w['reference']['rmsDbfs'] for w in comparison['windows']),
                             'referenceSource': comparison.get('referenceSource', 'original album mix'),
                             'sourcesChangedDuringRender': comparison['sourcesChangedDuringRender']})
            details = '<ul>' + ''.join(f'<li>{escape(f)}</li>' for f in consistent) + '</ul>'
            if comparison['stemBalanceWarnings']:
                details += '<p>Parts more than 18 dB below the loudest raw stem (may reflect rests): ' + escape(', '.join(s['instrumentId'] for s in comparison['stemBalanceWarnings'])) + '.</p>'
            if comparison['sourcesChangedDuringRender']:
                details += '<p class="warn">Music source changed during rendering; rerender before accepting.</p>'
            details += f'<p>Study RMS {comparison["generated"]["rmsDbfs"]:.1f} dBFS; album median {statistics.median(w["rmsDbfs"] for w in windows):.1f} dBFS. RMS is not LUFS. The study excerpt comes from its busiest authored passage.</p>'
        else:
            details = '<p>Unaccompanied vocal style; no instrumental mix is expected.</p>' if voice_only else '<p>Album measured; generated comparison pending.</p>'
        cards.append(f'<article data-search="{escape(match["genre"] + " " + style + " " + entry["name"])}"><h2>{escape(style)}</h2><p>{escape(entry["name"])}</p>{players}{details}</article>')
missing = '<details><summary>49 catalog styles without a local reference</summary><ul>' + ''.join(f'<li>{escape(m["styleId"] + ": " + m["name"])}</li>' for m in survey['missing']) + '</ul></details>'
page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>All sample audio review</title><style>
:root{color-scheme:dark}body{font:16px/1.55 system-ui;margin:auto;max-width:1000px;padding:30px;background:#111722;color:#dce5ef}article{padding:22px;margin:20px 0;background:#1b2532;border:1px solid #40526a;border-radius:12px}h2{font-size:20px}label{display:grid;grid-template-columns:230px 1fr;align-items:center;margin:12px 0;gap:16px}audio{width:100%}input{font:inherit;width:95%;padding:12px;background:#1b2532;color:white;border:1px solid #40526a;border-radius:8px}.warn{color:#ffc58b}@media(max-width:650px){label{grid-template-columns:1fr}body{padding:16px}}
</style><h1>All sample audio review</h1>'''
page += f'<p>369 recordings measured at three positions; {len(findings)}/371 generated styles screened. Album mixes may include vocals. Generated studies use authored patterns, not transcribed arrangements.</p>'
page += '<p>Compare at similar listening loudness using each player’s volume control. Check body, instrument identity, foreground, rhythmic feel and blend separately. Numerical warnings require musical review. Short ensemble excerpts do not establish whole-song similarity.</p>' + missing
page += '<label for="filter">Find genre, style or recording</label><input id="filter" type="search" placeholder="Tango, flamenco, salsa, ambient…">' + ''.join(cards)
page += '''<script>document.getElementById('filter').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('article').forEach(a=>a.hidden=!a.dataset.search.toLowerCase().includes(q))});document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')document.querySelectorAll('audio').forEach(a=>{if(a!==e.target)a.pause()})},true)</script></html>'''
(folder / 'listen.html').write_text(page)
(folder / 'findings.json').write_text(json.dumps({'recordings': len(references), 'stylesScreened': len(findings), 'stylesWithReferences': 371, 'missing': survey['missing'], 'findings': findings}, indent=2) + '\n')
counts = Counter(f for entry in findings for f in entry['findingsAcrossWindows'])
report = ['# All-sample mix analysis', '', f'{len(references)} local recordings decoded; three 12-second windows per recording. {len(findings)} of 370 instrumental styles rendered and screened; one matched style is unaccompanied voice. 49 catalog styles have no local reference.', '', '## Findings repeated across reference windows', '']
report += [f'- {count} styles: {finding}' for finding, count in counts.most_common()]
report += ['', '## Instrument gain corrections', '', 'Isolated probes covered 188 instruments, 79 mechanisms and 639 attacks/releases. There were no non-finite or silent-attack errors, but 72 overload warnings. Static metadata gains were corrected for 105 instruments. These trims preserve each instrument’s dynamics; no per-note or per-stem normalization was added.', '', 'The former guitar source was roughly 25 dB louder than many horns and basses. Its peaks reduced the complete ensemble level and buried the supporting instruments. The correction reduces excessive plucked-source gain and restores weak sources before ensemble mastering. A fixed 4 dB program lift then uses available output headroom with one gain for the whole mastered buffer; the 0.98 sample-peak ceiling remains. Raw stems bypass this lift.', '', '## Limits and remaining work', '', 'Original album windows can contain vocals and mastering effects. Two-second ensemble excerpts cannot prove melodic, structural or perceptual similarity. Spectral distance is a diagnostic, not an authenticity score. Stem RMS differences can reflect phrase rests.', '', 'Browser mastering includes native bus compression, EQ and stereo processing. Node comparisons use the portable mix path; the report does not claim those masters are identical.', '', 'The engine still uses approximate physical models and authored generative arrangements. Reference-specific instrument voicings, recorded room responses, playing envelopes and complete transcriptions need separate musical work.', '', '## Missing references', '']
report += [f'- {m["styleId"]}: {m["name"]}' for m in survey['missing']]
(folder / 'analysis.md').write_text('\n'.join(report) + '\n')
print(f'{len(findings)}/371 styles screened; player: {folder / "listen.html"}')
