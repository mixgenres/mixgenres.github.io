"""Screen every local recording at three positions; never infer instrument identity from spectra."""
import argparse
import concurrent.futures
import hashlib
import importlib.util
import json
import subprocess
from pathlib import Path

spec = importlib.util.spec_from_file_location('metrics', Path(__file__).with_name('compare-reference-audio.py'))
metrics = importlib.util.module_from_spec(spec)
spec.loader.exec_module(metrics)


def inspect(entry, seconds):
    source = Path(entry['file'])
    stat = source.stat()
    signature = hashlib.sha256(f'{stat.st_size}:{stat.st_mtime_ns}:{seconds}'.encode()).hexdigest()
    target = Path('audit/all-samples/features') / (hashlib.sha256(str(source).encode()).hexdigest()[:16] + '.json')
    if target.exists():
        prior = json.loads(target.read_text())
        if prior.get('signature') == signature:
            return prior
    report = {**entry, 'signature': signature, 'analysisSource': 'original album mix; may include vocals', 'windows': []}
    try:
        duration = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', str(source)]))
        report['durationSeconds'] = duration
        starts = sorted(set(round(max(0, min(duration - seconds, position)), 2) for position in [0, duration * .35, duration * .65]))
        for start in starts:
            pcm = metrics.decode(source, start, seconds)
            if (pcm ** 2).mean() < 1e-18:
                report['windows'].append({'start': start, 'status': 'silent'})
            else:
                report['windows'].append({'start': start, 'status': 'measured', **metrics.features(pcm)})
        report['status'] = 'measured' if any(w['status'] == 'measured' for w in report['windows']) else 'silent'
    except Exception as error:
        report['status'] = 'failed'
        report['error'] = str(error)
    target.write_text(json.dumps(report, indent=2, allow_nan=False) + '\n')
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--seconds', type=float, default=12)
    parser.add_argument('--jobs', type=int, default=2)
    args = parser.parse_args()
    if args.seconds <= 0 or not 1 <= args.jobs <= 4:
        parser.error('Positive seconds and 1–4 jobs required')
    inventory = json.loads(Path('audit/all-samples/inventory.json').read_text())
    Path('audit/all-samples/features').mkdir(parents=True, exist_ok=True)
    results = []
    with concurrent.futures.ThreadPoolExecutor(args.jobs) as pool:
        for result in pool.map(lambda entry: inspect(entry, args.seconds), inventory['entries']):
            results.append(result)
            if len(results) % 25 == 0:
                print(f"Analyzed {len(results)}/{len(inventory['entries'])}", flush=True)
    counts = {status: sum(r['status'] == status for r in results) for status in set(r['status'] for r in results)}
    Path('audit/all-samples/reference-features.json').write_text(json.dumps({'secondsPerWindow': args.seconds, 'counts': counts, 'entries': results, 'missing': inventory['missing']}, indent=2, allow_nan=False) + '\n')
    print(counts, flush=True)
    if counts.get('failed'):
        raise SystemExit(1)


if __name__ == '__main__':
    main()
