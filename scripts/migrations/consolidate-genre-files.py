"""Consolidate genre-local styles, patterns and metadata while retaining barrels.

Run from the repository root: python3 scripts/migrations/consolidate-genre-files.py
The migration refuses ambiguous exports/imports or duplicate declarations.
"""
from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[2]
GENRES = ROOT / "src/data/genres"


def declaration(source: str, export_name: str, local_name: str) -> str:
    lines = source.splitlines()
    imports = [line for line in lines if line.startswith("import ")]
    if any(not line.startswith("import type ") for line in imports):
        raise ValueError("unexpected runtime import")
    body = "\n".join(line for line in lines if not line.startswith("import "))
    body, count = re.subn(rf"export const {re.escape(export_name)}\b", f"const {local_name}", body, count=1)
    if count != 1:
        raise ValueError(f"expected one export named {export_name}")
    return body


def assert_unique_names(blocks: list[str], kind: str) -> None:
    names: set[str] = set()
    for block in blocks:
        for name in re.findall(r"^(?:export )?const\s+(\w+)", block, re.M):
            if name in names:
                raise ValueError(f"duplicate {kind} declaration: {name}")
            names.add(name)


def migrate_styles(genre: Path) -> None:
    folder = genre / "styles"
    barrel = folder / "index.ts"
    if not barrel.exists():
        return
    text = barrel.read_text()
    imports = re.findall(r"import \{ STYLE_DEFINITION as (\w+) \} from './([^']+)';", text)
    if not imports:
        if (genre / "styles.ts").exists() and barrel.exists():
            name_match = re.search(r"export \{ (\w+) \} from '../styles';", text)
            if name_match:
                index = (genre / "index.ts").read_text().replace("from './styles/index';", "from './styles';")
                (genre / "index.ts").write_text(index)
                barrel.unlink()
                folder.rmdir()
        return  # already consolidated or intentionally empty
    blocks = [declaration((folder / f"{file}.ts").read_text(), "STYLE_DEFINITION", alias) for alias, file in imports]
    assert_unique_names(blocks, "style")
    exported = re.search(r"export const (\w+): Partial<GenreWorld>", text)
    if not exported:
        raise ValueError(f"cannot find style barrel export: {barrel}")
    name = exported.group(1)
    output = "import type { GenreStyleDefinition, GenreWorld } from '../../schema';\n\n"
    output += "\n\n".join(blocks) + f"\n\nexport const {name}: Partial<GenreWorld> = {{ styleDefinitions: [{', '.join(a for a, _ in imports)}] }};\n"
    (genre / "styles.ts").write_text(output)
    index = (genre / "index.ts").read_text().replace("from './styles/index';", "from './styles';")
    (genre / "index.ts").write_text(index)
    barrel.unlink()
    for _, file in imports:
        (folder / f"{file}.ts").unlink()
    if not list(folder.glob("*.ts")):
        folder.rmdir()


def migrate_patterns(genre: Path) -> None:
    folder = genre / "patterns"
    barrel = folder / "index.ts"
    if not barrel.exists():
        return
    text = barrel.read_text()
    imports = re.findall(r"import \{ (\w+) \} from './([^']+)';", text)
    if not imports:
        if (genre / "patterns.ts").exists() and barrel.exists():
            name_match = re.search(r"export \{ (\w+) \} from '../patterns';", text)
            if name_match:
                index = (genre / "index.ts").read_text().replace("from './patterns/index';", "from './patterns';")
                (genre / "index.ts").write_text(index)
                barrel.unlink()
                folder.rmdir()
        return
    blocks = [declaration((folder / f"{file}.ts").read_text(), symbol, symbol) for symbol, file in imports]
    assert_unique_names(blocks, "pattern group")
    tail = text[text.index("const PATTERN_GROUPS"):]
    exported = re.search(r"export const (\w+): Partial<GenreWorld>", tail)
    if not exported:
        raise ValueError(f"cannot find pattern barrel export: {barrel}")
    output = "import type { GenreWorld, MusicalPattern } from '../../schema';\n\n"
    output += "\n\n".join(blocks) + "\n\n" + tail
    (genre / "patterns.ts").write_text(output)
    index = (genre / "index.ts").read_text().replace("from './patterns/index';", "from './patterns';")
    (genre / "index.ts").write_text(index)
    barrel.unlink()
    for _, file in imports:
        (folder / f"{file}.ts").unlink()
    if not list(folder.glob("*.ts")):
        folder.rmdir()


def migrate_meta(genre: Path) -> None:
    files = [genre / f"{name}.ts" for name in ("world", "culture", "roles", "feel", "harmony") if (genre / f"{name}.ts").exists()]
    if not files:
        return
    blocks: list[str] = []
    exports: list[tuple[str, str]] = []
    imported_types = {"GenreWorld"}
    for path in files:
        source = path.read_text()
        if any(line.startswith("import ") and not line.startswith("import type ") for line in source.splitlines()):
            raise ValueError(f"unexpected runtime import: {path}")
        for line in source.splitlines():
            match = re.match(r"import type \{([^}]+)\} from ['\"]\.\./\.\./schema['\"]", line)
            if match:
                imported_types.update(item.strip().split(" as ")[-1] for item in match.group(1).split(","))
        block = "\n".join(line for line in source.splitlines() if not line.startswith("import "))
        blocks.append(block)
        match = re.search(r"^export const (\w+)", block, re.M)
        if not match:
            raise ValueError(f"missing metadata export: {path}")
        exports.append((path.stem, match.group(1)))
    assert_unique_names(blocks, "metadata")
    index = (genre / "index.ts").read_text()
    for filename, name in exports:
        index = index.replace(f"import {{ {name} }} from './{filename}';", f"import {{ {name} }} from './meta';")
    output = f"import type {{ {', '.join(sorted(imported_types))} }} from '../../schema';\n\n" + "\n\n".join(blocks) + "\n"
    (genre / "meta.ts").write_text(output)
    (genre / "index.ts").write_text(index)
    for path in files:
        path.unlink()


def main() -> None:
    genres = [p for p in GENRES.iterdir() if p.is_dir() and (p / "index.ts").exists()]
    # Build every output before deleting source files; exceptions leave the input intact.
    for genre in genres:
        migrate_styles(genre)
        migrate_patterns(genre)
        migrate_meta(genre)
    print(f"Consolidated genre data in {len(genres)} barrel-backed genre folders.")


if __name__ == "__main__":
    main()
