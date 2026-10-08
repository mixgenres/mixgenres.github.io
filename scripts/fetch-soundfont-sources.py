#!/usr/bin/env python3
"""Fetch versioned sources, verify their SF2 hashes, then distill the app banks.
Original recordings stay outside src/. Requires Python, bsdtar, ffmpeg and npm.
Usage: python3 scripts/fetch-soundfont-sources.py [source-directory] [--verify-only]
"""
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / 'src/assets/soundfonts/manifest.json').read_text())
args = [arg for arg in sys.argv[1:] if not arg.startswith('--')]
DEST = Path(args[0]).resolve() if args else ROOT / 'audit/soundfont-sources'
DEST.mkdir(parents=True, exist_ok=True)
GENERAL_COMMIT = '684543d5e5efaef08d02be50dcda8d552478fa60'


def sha(path):
    digest = hashlib.sha256()
    with path.open('rb') as source:
        while chunk := source.read(1024 * 1024):
            digest.update(chunk)
    return digest.hexdigest()


def download(url, path, expected=None):
    if path.exists() and (expected is None or sha(path) == expected):
        return
    if '--verify-only' in sys.argv:
        raise RuntimeError(f'Missing or changed source: {path}')
    print(f'Downloading {path.name}', flush=True)
    temp = path.with_suffix(path.suffix + '.part')
    with urllib.request.urlopen(url, timeout=90) as response, temp.open('wb') as output:
        while chunk := response.read(1024 * 1024):
            output.write(chunk)
    if expected and sha(temp) != expected:
        temp.unlink()
        raise RuntimeError(f'Source hash changed: {path.name}')
    temp.replace(path)


def archive_source(url, archive_name, relative, expected):
    target = DEST / relative
    if not target.exists() or sha(target) != expected:
        download(url, DEST / archive_name)
        subprocess.run(['bsdtar', '-xf', str(DEST / archive_name), '-C', str(DEST)], check=True)
    if sha(target) != expected:
        raise RuntimeError(f'Source hash changed: {target}; refusing to silently repackage')
    return target


general = DEST / 'GeneralUser-GS.sf2'
download(f'https://raw.githubusercontent.com/mrbumpy409/GeneralUser-GS/{GENERAL_COMMIT}/GeneralUser-GS.sf2',
         general, MANIFEST['sourceSha256'][0])
nylon = archive_source('https://drive.google.com/uc?export=download&id=1Wib1vV4PRNOhjXg0KAR7s-OQLsT3SE_0',
                       'ichiyanagi-v1_03.zip', 'Classical-Guitar_Ichiyanagi-v1_03.sf2', MANIFEST['sourceSha256'][1])
steel = archive_source('https://freepats.zenvoid.org/Guitar/FSS-SteelStringGuitar/FSS-SteelStringGuitar-SF2-20200521.tar.xz',
                       'FSS-SteelStringGuitar-SF2-20200521.tar.xz',
                       'FSS-SteelStringGuitar-SF2-20200521/FSS-SteelStringGuitar-20200521.sf2', MANIFEST['sourceSha256'][2])
for id, url, archive, relative in [
    ('piano', 'https://freepats.zenvoid.org/Piano/SalamanderGrandPiano/SalamanderGrandPiano-SF2-V3%2B20200602.tar.xz',
     'SalamanderGrandPiano-SF2-V3+20200602.tar.xz', 'SalamanderGrandPiano-SF2-V3+20200602/SalamanderGrandPiano-V3+20200602.sf2'),
    ('drumkit', 'https://github.com/freepats/muldjordkit/releases/download/2020-10-18/MuldjordKit-SF2-20201018.7z',
     'MuldjordKit-SF2-20201018.7z', 'MuldjordKit-SF2-20201018/MuldjordKit 20201018.sf2'),
    ('finger', 'https://github.com/freepats/electric-bass-YR/releases/download/2019-09-30/FingerBassYR-SF2-20190930.7z',
     'FingerBassYR-SF2-20190930.7z', 'FingerBassYR SF2-20190930/FingerBassYR 20190930.sf2'),
    ('pick', 'https://github.com/freepats/electric-bass-YR/releases/download/2019-09-30/PickedBassYR-SF2-20190930.7z',
     'PickedBassYR-SF2-20190930.7z', 'PickedBassYR SF2-20190930/PickedBassYR 20190930.sf2'),
    ('electricClean', 'https://github.com/freepats/electric-guitar-FSBS-clean/releases/download/2026-08-07/EGuitarFSBS-clean-SF2-20260807.7z',
     'EGuitarFSBS-clean-SF2-20260807.7z', 'EGuitarFSBS-clean SF2-20260807/EGuitarFSBS-clean bridge 20260807.sf2'),
    ('electricDrive', 'https://github.com/freepats/electric-guitar-FSBS-dist2/releases/download/2022-09-11/EGuitarFSBS-dist2-SF2-20220911.7z',
     'EGuitarFSBS-dist2-SF2-20220911.7z', 'EGuitarFSBS-dist2 SF2-20220911/EGuitarFSBS-dist2 bridge 20220911.sf2'),
    ('bandoneon', 'https://raw.githubusercontent.com/jebentancour/Bandonberry/master/bandoneon_v2.sf2',
     'bandoneon_v2.sf2', 'bandoneon_v2.sf2'),
]:
    archive_source(url, archive, relative, MANIFEST['qualitySourceSha256'][id])

upright_archive = DEST / 'DSmolken.double_bass.v1.001.zip'
download('https://github.com/sfzinstruments/dsmolken.double-bass/releases/download/v1.001/DSmolken.double_bass.v1.001.zip',
         upright_archive, '380986bb52ee6b6469d28e9089792a3ed37cbd163fe5a19160bf4f98785e7ccb')
upright_sfzs = [
    ('dsmolken_double_bass/d_smolken_rubner_bass_pizz.sfz','1cac0ffee2b9eb94efdac80e0e8dc21b0f7550119d6bf4afa119b534cccaf717'),
    ('dsmolken_double_bass/d_smolken_rubner_bass_arco.sfz','d27f0d8bd11aa1db0ad278b5813533ff5490c1e192add2f2afd40ec10349a034'),
]
if any(not (DEST / relative).exists() or sha(DEST / relative) != expected for relative, expected in upright_sfzs):
    subprocess.run(['bsdtar', '-xf', str(upright_archive), '-C', str(DEST)], check=True)
for relative, expected in upright_sfzs:
    if sha(DEST / relative) != expected:
        raise RuntimeError(f'Source hash changed: {DEST / relative}; refusing to silently repackage')

vcsl = DEST / 'vcsl'
vcsl.mkdir(exist_ok=True)
for name, expected in MANIFEST['vcslSha256'].items():
    folder = 'Cajon' if name.startswith('Cajon') else 'Claps'
    path = urllib.parse.quote(f'Idiophones/Struck Idiophones/{folder}/{name}')
    download(f"https://raw.githubusercontent.com/sgossner/VCSL/{MANIFEST['vcslCommit']}/{path}", vcsl / name, expected)

if '--verify-only' in sys.argv:
    print('All pinned SoundFont and WAV sources match the manifest.')
else:
    subprocess.run(['npm', 'run', 'soundfonts:package', '--', str(general), str(nylon), str(steel), str(vcsl), str(DEST)], cwd=ROOT, check=True)
