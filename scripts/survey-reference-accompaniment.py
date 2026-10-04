"""Add existing separated accompaniment measurements without re-decoding original albums."""
import concurrent.futures
import hashlib
import importlib.util
import json
from pathlib import Path
spec = importlib.util.spec_from_file_location('metrics', Path(__file__).with_name('compare-reference-audio.py'))
metrics = importlib.util.module_from_spec(spec)
spec.loader.exec_module(metrics)
root = Path.cwd()
source = root / 'audit/all-samples/reference-features.json'
survey = json.loads(source.read_text())

def inspect(entry):
    accompaniment = root / 'voiced' / Path(entry['file']).name
    if not accompaniment.is_file():
        return entry
    entry['accompanimentFile'] = str(accompaniment)
    entry['accompanimentWindows'] = []
    for window in entry['windows']:
        try:
            pcm = metrics.decode(accompaniment, window['start'], survey['secondsPerWindow'])
            entry['accompanimentWindows'].append({'start': window['start'], 'status': 'measured', **metrics.features(pcm)})
        except Exception as error:
            entry['accompanimentWindows'].append({'start': window['start'], 'status': 'failed', 'error': str(error)})
    path = root / 'audit/all-samples/features' / (hashlib.sha256(entry['file'].encode()).hexdigest()[:16] + '.json')
    temporary = path.with_suffix('.tmp')
    temporary.write_text(json.dumps(entry, indent=2, allow_nan=False) + '\n')
    temporary.replace(path)
    return entry

with concurrent.futures.ThreadPoolExecutor(2) as pool:
    entries = []
    for entry in pool.map(inspect, survey['entries']):
        entries.append(entry)
        if len(entries) % 25 == 0:
            print(f'Checked {len(entries)}/369 accompaniment paths', flush=True)
survey['entries'] = entries
survey['accompanimentCount'] = sum('accompanimentFile' in entry for entry in entries)
source.write_text(json.dumps(survey, indent=2, allow_nan=False) + '\n')
print(f"Measured existing accompaniment for {survey['accompanimentCount']} recordings", flush=True)
