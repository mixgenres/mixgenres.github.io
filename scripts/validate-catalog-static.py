from __future__ import annotations
from pathlib import Path
import re, json

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
GENRES = SRC / "data/genres"
FORMS = SRC / "data/styles/styleFormTemplates.ts"

failures: list[str] = []

def fail(msg: str) -> None:
    failures.append(msg)

# The expansion must be represented by the repository's existing genre-local
# styles/patterns layout; the old monolithic expansion module must not return.
if (SRC / "data/catalogExpansion.ts").exists():
    fail("legacy monolithic src/data/catalogExpansion.ts still exists")

forms_text = FORMS.read_text()
ids_match = re.search(r'export const CATALOG_EXPANSION_STYLE_IDS = \[(.*?)\] as const;', forms_text, re.S)
if not ids_match:
    fail("CATALOG_EXPANSION_STYLE_IDS export is missing")
    expansion_ids: set[str] = set()
else:
    expansion_ids = set(re.findall(r'"([^"]+)"', ids_match.group(1)))

if len(expansion_ids) != 145:
    fail(f"expected 145 expansion style IDs, found {len(expansion_ids)}")

source_files = list(GENRES.rglob("*.ts"))
source_text = "\n".join(p.read_text(errors="ignore") for p in source_files)
quoted_ids = set(re.findall(r'["\']id["\']\s*:\s*["\']([^"\']+)["\']', source_text))

for sid in sorted(expansion_ids):
    if sid not in quoted_ids:
        fail(f"missing style definition ID: {sid}")

# New patterns use the established pattern-ID namespaces.
pattern_ids = set(re.findall(r'["\']id["\']\s*:\s*["\']((?:tech|style)-[^"\']+)["\']', source_text))
if len(pattern_ids) != 487:
    fail(f"expected 487 expansion pattern IDs, found {len(pattern_ids)}")

# Check every expansion style's source placement. Resolve by exact filename first;
# flat legacy worlds are allowed to keep definitions inline in their existing index.
for sid in sorted(expansion_ids):
    matches = list(GENRES.rglob(f"{sid}.ts"))
    if matches:
        if all("/styles/" not in str(p).replace("\\\\", "/") for p in matches):
            fail(f"style file {sid}.ts is not inside an existing styles directory")
        continue
    if not any(sid in p.read_text(errors="ignore") for p in GENRES.glob("*/index.ts")):
        fail(f"missing authored style definition for {sid}")

# Validate expansion pattern grids directly from source objects. New pattern IDs are
# only emitted in genre-local pattern files or legacy flat genre indexes.
for p in source_files:
    text = p.read_text(errors="ignore")
    if not ("tech-" in text or "style-" in text):
        continue
    for m in re.finditer(r"[\"']id[\"']\s*:\s*[\"']((?:tech|style)-[^\"']+)[\"']", text):
        chunk = text[m.start():m.start()+6000]
        sub = re.search(r"[\"']subdivisions[\"']\s*:\s*(\d+)", chunk)
        onset = re.search(r"[\"']onsetGrid[\"']\s*:\s*\[([^\]]*)\]", chunk, re.S)
        if sub and onset:
            n = int(sub.group(1))
            values = [int(x) for x in re.findall(r'-?\\d+', onset.group(1))]
            if any(x < 0 or x >= n for x in values):
                fail(f"{m.group(1)} contains an onset outside 0..{n-1}")
        for field in ("accentProfile", "velocityProfile", "durationGrid"):
            fm = re.search(rf"[\"']{field}[\"']\s*:\s*\[([^\]]*)\]", chunk, re.S)
            if fm and onset:
                a = len(re.findall(r'-?\\d+(?:\\.\\d+)?', fm.group(1)))
                o = len(re.findall(r'-?\\d+', onset.group(1)))
                if a != o:
                    fail(f"{m.group(1)} {field} length {a} != onsetGrid length {o}")

if failures:
    print("FAIL")
    for item in failures:
        print("-", item)
    raise SystemExit(1)

print(f"PASS: {len(expansion_ids)} expansion styles, {len(pattern_ids)} expansion patterns; genre-local layout verified.")
