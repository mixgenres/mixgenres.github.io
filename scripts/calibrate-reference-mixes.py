"""Build folder-owned production evidence from local instrumental references.

A spectral survey cannot infer notes/instruments or a room impulse response.
Only compactness and gentle low/high tonal balance are adjusted automatically.
Missing references remain explicit; another genre never supplies their profile.
"""
import concurrent.futures
import importlib.util
import json
import subprocess
from pathlib import Path
from statistics import median

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('metrics', ROOT / 'scripts/compare-reference-audio.py')
metrics = importlib.util.module_from_spec(spec)
spec.loader.exec_module(metrics)


def inspect(entry):
    original = Path(entry['file'])
    accompaniment = ROOT / 'voiced' / original.name
    separated = accompaniment.is_file() and accompaniment.stat().st_size > 0
    source = accompaniment if separated else original
    windows = []
    # Developed passages, not a possibly silent intro or a synthetic count-in.
    starts = [w['start'] for w in entry.get('windows', []) if w.get('status') == 'measured' and w['start'] > 0]
    if not starts:
        duration = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
            '-of', 'default=nw=1:nk=1', str(original)]))
        starts = sorted({round(max(0, min(duration - 8, duration * position)), 2) for position in (.35, .65)})
    for start in starts[:2]:
        try:
            feature = metrics.features(metrics.decode(source, start, 8))
            if max(feature['bandEnergy']) > .98:
                continue  # Single-band tones/count-ins cannot establish a mix.
            windows.append({'start': start, **feature})
        except Exception as error:
            print(f'Unusable window: {source.name} at {start}: {error}', flush=True)
    if not windows:
        return entry, None
    summary = {
        'rmsDbfs': round(median(w['rmsDbfs'] for w in windows), 3),
        'crestDb': round(median(w['crestDb'] for w in windows), 3),
        'lowEnergyShare': round(median(sum(w['bandEnergy'][:2]) for w in windows), 4),
        'highEnergyShare': round(median(sum(w['bandEnergy'][4:]) for w in windows), 4),
        'sideMidRmsRatio': round(median(w['sideMidRmsRatio'] for w in windows), 4),
    }
    return entry, {
        'recording': entry.get('name', original.stem),
        'audio': str(source.relative_to(ROOT)),
        'source': 'separated-accompaniment' if separated else 'original-with-vocals',
        'audioBytes': source.stat().st_size,
        'audioModifiedNs': source.stat().st_mtime_ns,
        'windowsSeconds': [w['start'] for w in windows],
        'targets': summary,
    }


def main():
    inventory = json.loads((ROOT / 'audit/all-samples/inventory.json').read_text())
    previous = json.loads((ROOT / 'audit/all-samples/reference-features.json').read_text())
    by_file = {Path(item['file']).name: item for item in previous['entries']}
    genres = {}
    missing = list(inventory.get('missing', []))
    with concurrent.futures.ThreadPoolExecutor(2) as pool:
        entries = []
        for item in inventory['entries']:
            entry = by_file.get(Path(item['file']).name)
            if entry is None:
                entry = {**item, 'windows': []}
            entries.append(entry)
        for index, (entry, profile) in enumerate(pool.map(inspect, entries)):
            for match in entry['matches']:
                if profile:
                    genres.setdefault(match['genre'], {})[match['styleId']] = profile
                else:
                    missing.append({**match, 'reason': 'no usable developed reference window'})
            if (index + 1) % 40 == 0:
                print(f'Measured {index + 1}/{len(entries)} recordings', flush=True)
    for genre, profiles in genres.items():
        target = ROOT / 'src/data/genres' / genre / 'referenceMix.ts'
        target.write_text("import type { ReferenceMixCatalog } from '../_shared/referenceMix';\n\n"
            + '/** Local recording measurements; original mixes may still contain vocals. */\n'
            + 'export const REFERENCE_MIX = ' + json.dumps(profiles, indent=2, ensure_ascii=False)
            + ' satisfies ReferenceMixCatalog;\n')
        index_path = target.with_name('index.ts')
        source = index_path.read_text()
        if "from '../_shared/referenceMix'" not in source:
            source = "import { applyReferenceMix } from '../_shared/referenceMix';\nimport { REFERENCE_MIX } from './referenceMix';\n" + source
            source = source.replace('createGenreWorld(GENRE_PACK)', 'createGenreWorld(applyReferenceMix(GENRE_PACK, REFERENCE_MIX))')
            index_path.write_text(source)
    report = {'genres': len(genres), 'measuredStyles': sum(len(v) for v in genres.values()),
              'separatedStyles': sum(p['source'] == 'separated-accompaniment' for v in genres.values() for p in v.values()),
              'missing': missing, 'method': 'Median of two developed 8-second windows. No vocal extraction is run. RMS is evidence, not automatic loudness normalization.'}
    (ROOT / 'audit/reference-mix-coverage.json').write_text(json.dumps(report, indent=2, ensure_ascii=False) + '\n')
    print(json.dumps({k: v for k, v in report.items() if k != 'missing'}, ensure_ascii=False), flush=True)


if __name__ == '__main__':
    main()
