"""Compare a generated study with each surveyed album window, preserving uncertainty."""
import argparse
import hashlib
import importlib.util
import json
from pathlib import Path
spec = importlib.util.spec_from_file_location('metrics', Path(__file__).with_name('compare-reference-audio.py'))
metrics = importlib.util.module_from_spec(spec)
spec.loader.exec_module(metrics)
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--reference', required=True)
parser.add_argument('--generated', required=True)
parser.add_argument('--render-report', required=True)
parser.add_argument('--seconds', required=True, type=float)
parser.add_argument('--output', required=True)
args = parser.parse_args()
reference_path = Path(args.reference).resolve()
feature_path = Path('audit/all-samples/features') / (hashlib.sha256(str(reference_path).encode()).hexdigest()[:16] + '.json')
reference = json.loads(feature_path.read_text())
generated = metrics.features(metrics.decode(args.generated, seconds=args.seconds))
render = json.loads(Path(args.render_report).read_text())
reference_windows = [w for w in reference.get('accompanimentWindows', []) if w['status'] == 'measured']
reference_source = 'separated accompaniment' if reference_windows else 'original album mix; may include vocals'
if not reference_windows:
    reference_windows = reference['windows']
windows = [{'start': window['start'], **metrics.compare(window, generated), 'reference': window}
           for window in reference_windows if window['status'] == 'measured']
stems = [d for d in render['diagnostics'] if d['stage'] == 'stem' and d['metrics']['rmsDbfs'] is not None]
loudest = max((s['metrics']['rmsDbfs'] for s in stems), default=-120)
buried = [{'instrumentId': s['instrumentId'], 'trackId': s['id'], 'differenceDb': s['metrics']['rmsDbfs'] - loudest}
          for s in stems if s['metrics']['rmsDbfs'] < loudest - 18]
accompaniment_file = reference.get('accompanimentFile')
report = {'referenceFile': str(reference_path),
          'referenceAudioFile': accompaniment_file if accompaniment_file and Path(accompaniment_file).is_file() else str(reference_path),
          'referenceSource': reference_source, 'generatedFile': args.generated,
          'playbackEngine': render.get('playbackEngine', 'unknown'), 'generated': generated,
          'windows': windows, 'stemBalanceWarnings': buried,
          'audioFingerprint': render['audioFingerprint'], 'sourcesChangedDuringRender': render['audioSourcesChangedDuringRender'],
          'evidence': 'Original album mixes may contain vocals. Generated instrumental studies are not transcriptions. Stem RMS differences may reflect rests; review musical role and activity before changing gain.'}
Path(args.output).write_text(json.dumps(report, indent=2, allow_nan=False) + '\n')
