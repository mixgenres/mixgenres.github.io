"""Create an offline A/B player for a completed local reference audit (stdlib only)."""
import argparse
import html
import json
from pathlib import Path
from urllib.parse import quote

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--phase', default='validated')
args = parser.parse_args()
root = Path.cwd()
folder = root / 'audit/reference-comparison'
phase = folder / args.phase
if phase.parent != folder or not phase.is_dir():
    parser.error('Phase must identify an existing comparison directory')
entries = json.loads((root / 'audit/default-reference-manifest.json').read_text())['entries']
escape = lambda value: html.escape(str(value), quote=True)
def href(path):
    import os
    return quote(os.path.relpath(path, folder), safe='/')
def player(label, path, limit=True):
    if not path or not Path(path).is_file():
        return ''
    src = href(path) + ('#t=0,20' if limit else '')
    return f'<div class="player"><strong>{escape(label)}</strong><audio controls preload="none" src="{escape(src)}"></audio></div>'
rows = []
for entry in entries:
    genre = entry['genre']
    comparison = phase / f'{genre}-comparison.json'
    metadata = phase / f'{genre}-render.json'
    report = json.loads(comparison.read_text()) if comparison.exists() else None
    render = json.loads(metadata.read_text()) if metadata.exists() else None
    details = '<p>No completed comparison. Check the preparation and render logs.</p>'
    if not entry['sample']:
        details = '<p class="missing">Missing local default reference; skipped.</p>'
    elif report:
        a, b, differences = report['reference'], report['generated'], report['differences']
        before_file = folder / 'before' / f'{genre}-comparison.json'
        before = json.loads(before_file.read_text()) if before_file.exists() else None
        baseline = f" (before: {before['differences']['spectralDistance']:.3f})" if before else ''
        details = f'''<p>Normalized spectral distance: <b>{differences['spectralDistance']:.3f}</b>{baseline}. Needs musical review.</p>
        <table><tr><th>Measured first window</th><th>Reference</th><th>Generated</th></tr>
        <tr><td>Centroid, Hz</td><td>{a['centroidHz']:.0f}</td><td>{b['centroidHz']:.0f}</td></tr>
        <tr><td>Estimated attacks/second</td><td>{a['estimatedAttacksPerSecond']:.2f}</td><td>{b['estimatedAttacksPerSecond']:.2f}</td></tr>
        <tr><td>Stereo correlation</td><td>{a['stereoCorrelation']:.3f}</td><td>{b['stereoCorrelation']:.3f}</td></tr>
        <tr><td>RMS, dBFS</td><td>{a['rmsDbfs']:.1f}</td><td>{b['rmsDbfs']:.1f}</td></tr></table>'''
        details += '<ul>' + ''.join(f'<li>{escape(f)}</li>' for f in report['findings']) + '</ul>'
        if render and render.get('audioSourcesChangedDuringRender', render.get('sourcesChangedDuringRender', False)):
            details += '<p class="missing">Source changed during this render; regenerate before accepting this result.</p>'
    players = player('Separated reference', entry['output'])
    players += player('Before changes', folder / 'before' / f'{genre}.mp3')
    players += player('Revised app default', phase / f'{genre}.mp3')
    rows.append(f'<article data-search="{escape(genre + " " + entry["name"])}"><h2>{escape(genre.title())}</h2><p>{escape(entry["name"])}</p>{players}{details}</article>')
page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Default reference audio review</title><style>
:root{color-scheme:dark}body{font:16px/1.55 system-ui;background:#10141d;color:#dbe4ef;margin:auto;max-width:1060px;padding:32px}h1,h2{color:#fff}h1{font-size:32px}header{max-width:800px}input{font:inherit;padding:12px;width:calc(100% - 26px);background:#202938;color:#fff;border:1px solid #52647c;border-radius:8px;margin:20px 0}article{border:1px solid #354354;border-radius:12px;background:#18202b;padding:24px;margin:20px 0}h2{margin:0}.player{display:grid;grid-template-columns:180px 1fr;align-items:center;gap:16px;margin:14px 0}audio{width:100%}table{border-collapse:collapse;width:100%}td,th{text-align:left;border-bottom:1px solid #354354;padding:8px}.missing{color:#ffbe8b}li{margin:8px 0}@media(max-width:600px){body{padding:16px}.player{grid-template-columns:1fr;gap:4px}}
</style><header><h1>Default reference audio review</h1><p>Reference, original generation and revised generation. Spectral distance measures normalized frequency-band distributions; it is not an authenticity score. These are original studies, not transcriptions.</p><p>Clips start at the beginning and request a 20-second playback window. Levels are unmodified: use each player's volume control to compare at similar loudness. Listen for instrument identity, phrasing, bass balance, compás/clave and stereo space independently.</p></header>
<label for="filter">Find a genre or recording</label><input id="filter" type="search" placeholder="Tango, flamenco, salsa, ambient…">'''
page += ''.join(rows)
page += '''<script>document.getElementById('filter').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('article').forEach(a=>a.hidden=!a.dataset.search.toLowerCase().includes(q))});document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')document.querySelectorAll('audio').forEach(a=>{if(a!==e.target)a.pause()})},true)</script></html>'''
output = folder / 'listen.html'
output.write_text(page)
print(output)
