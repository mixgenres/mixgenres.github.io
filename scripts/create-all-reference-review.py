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
survey = json.loads((folder / 'reference-features.json').read_text())
escape = lambda value: html.escape(str(value), quote=True)
references = survey['entries']
summary = json.loads((phase / 'summary.json').read_text()) if (phase / 'summary.json').exists() else {'results': []}
matched_style_ids = {match['styleId'] for entry in references for match in entry['matches']}
reference_by_file = {str(Path(entry['file']).resolve()): entry for entry in references}
voice_only_styles = {result['styleId'] for result in summary['results'] if result.get('status') == 'voice-only'}
failed_count = sum(result.get('status') == 'failed' for result in summary['results'])
cards, findings = [], []
def player(label, path, start=0, seconds=12):
    if not Path(path).exists():
        return ''
    url = quote(os.path.relpath(path, folder), safe='/') + f'#t={start},{start + seconds}'
    return f'<label>{escape(label)}<audio controls preload="none" src="{escape(url)}"></audio></label>'
for result in summary['results']:
    style, genre, name = result['styleId'], result['genre'], result['name']
    entry = reference_by_file.get(str(Path(result['file']).resolve()), {})
    windows = [w for w in entry.get('windows', []) if w['status'] == 'measured']
    comparison_path = Path(result['comparison']) if result.get('comparison') else None
    comparison = json.loads(comparison_path.read_text()) if comparison_path and comparison_path.exists() and result.get('status') != 'failed' else None
    players = player('Original recording', result['file'])
    if len(windows) > 1:
        players += player('Original developed passage', result['file'], windows[1]['start'])
    generated = phase / f'{style}.mp3'
    if comparison:
        if comparison.get('referenceSource') == 'separated accompaniment':
            accompaniment = entry.get('accompanimentFile')
            if accompaniment and Path(accompaniment).is_file():
                players += player('Voice-removed accompaniment', accompaniment, windows[1]['start'] if len(windows) > 1 else 0)
        players += player('Generated ensemble study', generated, seconds=comparison['generated']['durationSeconds'])
        if (root / 'audit/all-samples/gain-ab' / f'{genre}-before.mp3').exists():
            players += player('Before gain calibration (6s)', root / 'audit/all-samples/gain-ab' / f'{genre}-before.mp3', seconds=6)
            players += player('After gain calibration (6s)', root / 'audit/all-samples/gain-ab' / f'{genre}-after.mp3', seconds=6)
        warnings = Counter(f for w in comparison['windows'] for f in w['findings'])
        consistent = [f for f, count in warnings.items() if count >= min(2, len(comparison['windows']))]
        ref_windows = [w['reference'] for w in comparison['windows']]
        findings.append({'styleId': style, 'genre': genre, 'name': name, 'file': result['file'],
                         'findingsAcrossWindows': consistent, 'buriedStems': comparison['stemBalanceWarnings'],
                         'medianSpectralDistance': statistics.median(w['differences']['spectralDistance'] for w in comparison['windows']),
                         'generatedRmsDbfs': comparison['generated']['rmsDbfs'],
                         'referenceMedianRmsDbfs': statistics.median(w['rmsDbfs'] for w in ref_windows),
                         'referenceSource': comparison.get('referenceSource', 'original album mix'),
                         'sourcesChangedDuringRender': comparison['sourcesChangedDuringRender']})
        details = '<ul>' + ''.join(f'<li>{escape(f)}</li>' for f in consistent) + '</ul>'
        if comparison['stemBalanceWarnings']:
            details += '<p>Parts more than 18 dB below the loudest raw stem (may reflect rests): ' + escape(', '.join(s['instrumentId'] for s in comparison['stemBalanceWarnings'])) + '.</p>'
        if comparison['sourcesChangedDuringRender']:
            details += '<p class="warn">Music source changed during rendering; rerender before accepting.</p>'
        details += f'<p>Study RMS {comparison["generated"]["rmsDbfs"]:.1f} dBFS; this recording median {statistics.median(w["rmsDbfs"] for w in ref_windows):.1f} dBFS. RMS is not LUFS. The study excerpt comes from its busiest authored passage; compare equivalent musical functions before drawing conclusions.</p>'
    elif result.get('status') == 'voice-only':
        details = '<p>Unaccompanied vocal style; no instrumental mix is expected.</p>'
    elif result.get('status') == 'failed':
        details = f'<p class="warn">Comparison failed: {escape(result.get("reason", "unknown failure"))}</p>'
    else:
        details = '<p>Recording measured; generated comparison pending.</p>'
    cards.append(f'<article data-search="{escape(genre + " " + style + " " + name)}"><h2>{escape(style)}</h2><p>{escape(name)}</p>{players}{details}</article>')
missing = f'<details><summary>{len(survey["missing"])} catalog styles without a local reference</summary><ul>' + ''.join(f'<li>{escape(m["styleId"] + ": " + m["name"])}</li>' for m in survey['missing']) + '</ul></details>'
page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>All sample audio review</title><style>
:root{color-scheme:dark}body{font:16px/1.55 system-ui;margin:auto;max-width:1000px;padding:30px;background:#111722;color:#dce5ef}article{padding:22px;margin:20px 0;background:#1b2532;border:1px solid #40526a;border-radius:12px}h2{font-size:20px}label{display:grid;grid-template-columns:230px 1fr;align-items:center;margin:12px 0;gap:16px}audio{width:100%}input{font:inherit;width:95%;padding:12px;background:#1b2532;color:white;border:1px solid #40526a;border-radius:8px}.warn{color:#ffc58b}@media(max-width:650px){label{grid-template-columns:1fr}body{padding:16px}}
</style><h1>All sample audio review</h1>'''
screened_style_ids = {result['styleId'] for result in summary['results']}
instrumental_comparisons = {finding['styleId'] for finding in findings}
page += f'<p>{len(references)} local recordings measured at three positions; {len(instrumental_comparisons)} of {len(screened_style_ids) - len(voice_only_styles)} screened instrumental styles have generated comparisons. The latest sweep recorded {failed_count} render or comparison failures. Album mixes may include vocals. Generated studies use authored patterns, not transcribed arrangements.</p>'
page += '<p>Compare at similar listening loudness using each player’s volume control. Check body, instrument identity, foreground, rhythmic feel and blend separately. Numerical warnings require musical review. Short ensemble excerpts do not establish whole-song similarity.</p>' + missing
page += '<label for="filter">Find genre, style or recording</label><input id="filter" type="search" placeholder="Tango, flamenco, salsa, ambient…">' + ''.join(cards)
page += '''<script>document.getElementById('filter').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('article').forEach(a=>a.hidden=!a.dataset.search.toLowerCase().includes(q))});document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')document.querySelectorAll('audio').forEach(a=>{if(a!==e.target)a.pause()})},true)</script></html>'''
(folder / 'listen.html').write_text(page)
(folder / 'findings.json').write_text(json.dumps({'recordings': len(references), 'comparisons': len(findings),
    'stylesScreened': len(screened_style_ids), 'stylesWithComparison': len(instrumental_comparisons),
    'stylesWithReferences': len(matched_style_ids), 'missing': survey['missing'], 'findings': findings}, indent=2) + '\n')
counts = Counter(f for entry in findings for f in entry['findingsAcrossWindows'])
report = ['# All-sample mix analysis', '', f'{len(references)} local recordings measured at three 12-second windows each. {len(findings)} reference comparisons cover {len(instrumental_comparisons)} generated styles; {failed_count} reference comparisons had render or comparison errors. {len(survey["missing"])} catalog styles have no local reference.', '', '## Findings repeated across reference windows', '']
report += [f'- {count} styles: {finding}' for finding, count in counts.most_common()]
report += ['', '## Instrument gain corrections', '', 'Isolated probes covered 188 instruments, 79 mechanisms and 639 attacks/releases. There were no non-finite or silent-attack errors, but 72 overload warnings. Static metadata gains were corrected for 105 instruments. These trims preserve each instrument’s dynamics; no per-note or per-stem normalization was added.', '', 'The former guitar source was roughly 25 dB louder than many horns and basses. Its peaks reduced the complete ensemble level and buried the supporting instruments. The correction reduces excessive plucked-source gain and restores weak sources before ensemble mastering. A fixed 4 dB program lift then uses available output headroom with one gain for the whole mastered buffer; the 0.98 sample-peak ceiling remains. Raw stems bypass this lift.', '', '## Limits and remaining work', '', 'Original album windows can contain vocals and mastering effects. Two-second ensemble excerpts cannot prove melodic, structural or perceptual similarity. Spectral distance is a diagnostic, not an authenticity score. Stem RMS differences can reflect phrase rests.', '', 'Browser mastering includes native bus compression, EQ and stereo processing. Node comparisons use the portable mix path; the report does not claim those masters are identical.', '', 'The engine still uses approximate physical models and authored generative arrangements. Reference-specific instrument voicings, recorded room responses, playing envelopes and complete transcriptions need separate musical work.', '', '## Missing references', '']
report += [f'- {m["styleId"]}: {m["name"]}' for m in survey['missing']]
(folder / 'analysis.md').write_text('\n'.join(report) + '\n')
print(f'{len(findings)}/371 styles screened; player: {folder / "listen.html"}')
