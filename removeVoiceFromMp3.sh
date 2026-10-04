#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

usage() {
  cat <<'USAGE'
Usage: ./removeVoiceFromMp3.sh [FILE] [--device auto|mps|cpu] [--output-dir DIR] [--force]
       ./removeVoiceFromMp3.sh --file FILE [options]

With FILE, process only that audio file (a samples/ filename also works).
Without FILE, process supported audio files in samples/.
Existing outputs are skipped unless --force is specified.
USAGE
}

INPUT_FILE=""
DEVICE="auto"
FORCE=0
OUTPUT_DIR=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) usage; exit 0 ;;
    --file|--device|--output-dir)
      [[ $# -ge 2 ]] || { echo "ERROR: $1 needs a value." >&2; exit 2; }
      case "$1" in
        --file) [[ -z "$INPUT_FILE" ]] || { echo "ERROR: Specify one input file." >&2; exit 2; }; INPUT_FILE="$2" ;;
        --device) DEVICE="$2" ;;
        --output-dir) OUTPUT_DIR="$2" ;;
      esac
      shift 2 ;;
    --force) FORCE=1; shift ;;
    --*) echo "ERROR: Unknown option: $1" >&2; usage >&2; exit 2 ;;
    *) [[ -z "$INPUT_FILE" ]] || { echo "ERROR: Specify one input file." >&2; exit 2; }; INPUT_FILE="$1"; shift ;;
  esac
done
[[ "$DEVICE" == "auto" || "$DEVICE" == "mps" || "$DEVICE" == "cpu" ]] || { echo "ERROR: Invalid device: $DEVICE" >&2; exit 2; }
if [[ -n "$INPUT_FILE" ]]; then
  if [[ ! -f "$INPUT_FILE" && "$INPUT_FILE" != /* ]]; then INPUT_FILE="$ROOT/samples/$INPUT_FILE"; fi
  [[ -f "$INPUT_FILE" ]] || { echo "ERROR: Input file does not exist: $INPUT_FILE" >&2; exit 2; }
  INPUT_FILE="$(cd "$(dirname "$INPUT_FILE")" && pwd)/$(basename "$INPUT_FILE")"
fi

SAMPLES="$ROOT/samples"
VOICED="$ROOT/voiced"
[[ -z "$OUTPUT_DIR" ]] || VOICED="$OUTPUT_DIR"
valid_audio() {
  [[ -s "$1" ]] && command -v ffprobe >/dev/null 2>&1 &&
    [[ -n "$(ffprobe -v error -select_streams a:0 -show_entries stream=codec_name -of csv=p=0 "$1" 2>/dev/null)" ]]
}
if [[ -n "$INPUT_FILE" && "$FORCE" -eq 0 ]] && valid_audio "$VOICED/$(basename "$INPUT_FILE")"; then
  echo "SKIP: $VOICED/$(basename "$INPUT_FILE") already exists."
  exit 0
fi

VENV="$ROOT/.demucs-mps-venv"
TMP=""

MODEL="htdemucs_ft"

# ============================================================
# Cleanup
# ============================================================

cleanup() {
  [[ -z "$TMP" ]] || rm -rf "$TMP"
}

trap cleanup EXIT INT TERM

# ============================================================
# Verify native Apple Silicon
# ============================================================

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "ERROR: This script is intended for macOS."
  exit 1
fi

if [[ "$(uname -m)" != "arm64" ]]; then
  echo
  echo "ERROR: Terminal is not running natively as Apple Silicon."
  echo
  echo "Detected:"
  uname -m
  echo
  echo "Expected:"
  echo "arm64"
  echo
  echo "If Terminal/iTerm is running through Rosetta, disable"
  echo "'Open using Rosetta' and run this again."
  exit 1
fi

echo "Apple Silicon detected: $(uname -m)"

# ============================================================
# Homebrew
# ============================================================

if ! command -v brew >/dev/null 2>&1; then
  echo "Installing Homebrew..."

  /bin/bash -c \
    "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  eval "$(/opt/homebrew/bin/brew shellenv)"
fi

BREW_PREFIX="$(brew --prefix)"

if [[ "$BREW_PREFIX" != "/opt/homebrew" ]]; then
  echo
  echo "ERROR: Homebrew does not appear to be native Apple Silicon."
  echo "Found: $BREW_PREFIX"
  echo "Expected: /opt/homebrew"
  exit 1
fi

# ============================================================
# Dependencies
# ============================================================

echo
echo "==> Checking dependencies..."

brew list python@3.11 >/dev/null 2>&1 || brew install python@3.11
command -v ffmpeg >/dev/null 2>&1 || brew install ffmpeg
command -v git >/dev/null 2>&1 || brew install git

PYTHON="$(brew --prefix python@3.11)/bin/python3.11"

# Verify Python itself is ARM64.

PYTHON_ARCH="$("$PYTHON" -c 'import platform; print(platform.machine())')"

if [[ "$PYTHON_ARCH" != "arm64" ]]; then
  echo "ERROR: Python is not ARM64."
  echo "Python architecture: $PYTHON_ARCH"
  exit 1
fi

echo "Python: $("$PYTHON" --version)"
echo "Python architecture: $PYTHON_ARCH"

# ============================================================
# Virtual environment
# ============================================================

if [[ ! -x "$VENV/bin/python" ]]; then
  echo
  echo "==> Creating Demucs MPS environment..."
  "$PYTHON" -m venv "$VENV"
fi

VPYTHON="$VENV/bin/python"

# Reuse a working environment; do not upgrade packages on every audio file.

# ============================================================
# Install known-working Apple Silicon PyTorch pair
# ============================================================

if ! "$VPYTHON" -c 'import torch' >/dev/null 2>&1; then
  echo
  echo "==> Installing ARM64 PyTorch with MPS support..."

  "$VPYTHON" -m pip install \
    "numpy<2" \
    "torch==2.0.1" \
    "torchaudio==2.0.2"
fi

# PyTorch 2.0.1 has an official macOS arm64 Python 3.11 wheel.
# This also avoids incompatibilities between old Demucs and newer
# torchaudio APIs.

# ============================================================
# Install upstream Demucs containing the MPS fix
# ============================================================

if ! "$VPYTHON" -c 'import demucs' >/dev/null 2>&1; then
  echo
  echo "==> Installing Demucs with Apple MPS support..."

  "$VPYTHON" -m pip install "numpy<2"

  "$VPYTHON" -m pip install \
    "git+https://github.com/facebookresearch/demucs.git@main"
fi

# ============================================================
# Verify MPS really works
# ============================================================

echo
echo "==> Checking Apple Metal GPU..."

if [[ "$DEVICE" == "auto" ]]; then
  DEVICE="$("$VPYTHON" -c 'import torch; print("mps" if torch.backends.mps.is_available() else "cpu")')"
fi
if [[ "$DEVICE" == "mps" ]]; then
"$VPYTHON" <<'PY'
import platform
import torch

print("Machine:", platform.machine())
print("PyTorch:", torch.__version__)
print("MPS built:", torch.backends.mps.is_built())
print("MPS available:", torch.backends.mps.is_available())

if platform.machine() != "arm64":
    raise SystemExit(
        "ERROR: Python is not running natively on Apple Silicon."
    )

if not torch.backends.mps.is_built():
    raise SystemExit(
        "ERROR: This PyTorch build does not contain MPS support."
    )

if not torch.backends.mps.is_available():
    raise SystemExit(
        "ERROR: Apple Metal/MPS is not available."
    )

# Actually allocate and calculate on the GPU.
x = torch.randn(2048, 2048, device="mps")
y = x @ x

# Force execution instead of leaving the work queued.
result = float(y[0, 0].cpu())

print("MPS compute test: PASS")
print("GPU test value:", result)
PY

echo
echo "Apple MPS GPU: READY"
else
  echo "CPU selected (Metal is unavailable or --device cpu was requested)."
fi

# ============================================================
# Input directories
# ============================================================

if [[ ! -d "$SAMPLES" ]]; then
  echo
  echo "ERROR: samples directory does not exist:"
  echo "$SAMPLES"
  exit 1
fi

mkdir -p "$VOICED"

# Each invocation owns its temporary directory, so single-file runs cannot
# remove another invocation's stems or source WAV.
TMP="$(mktemp -d "$ROOT/.demucs-work.XXXXXX")"

# ============================================================
# MPS configuration
# ============================================================

# Allows unsupported individual PyTorch MPS operations to fall
# back to CPU instead of crashing. HTDemucs itself also explicitly
# moves unsupported complex-number operations to CPU.
export PYTORCH_ENABLE_MPS_FALLBACK=1

# ============================================================
# Counters
# ============================================================

processed=0
skipped=0
failed=0

# ============================================================
# Process samples
# ============================================================

while IFS= read -r -d '' INPUT; do

  filename="$(basename "$INPUT")"

  extension="${filename##*.}"
  extension_lower="$(printf '%s' "$extension" | tr '[:upper:]' '[:lower:]')"

  OUTPUT="$VOICED/$filename"

  echo
  echo "============================================================"
  echo "$filename"
  echo "============================================================"

  # ----------------------------------------------------------
  # Skip files we've already generated
  # ----------------------------------------------------------

  if [[ "$FORCE" -eq 0 ]] && valid_audio "$OUTPUT"; then
    echo "SKIP: voiced/$filename already exists."
    skipped=$((skipped + 1))
    continue
  fi

  # ----------------------------------------------------------
  # Per-song temporary directory
  # ----------------------------------------------------------

  WORK="$(mktemp -d "$TMP/song.XXXXXX")"

  SOURCE_WAV="$WORK/source.wav"
  DEMUCS_OUT="$WORK/separated"

  echo "Preparing audio..."

  # Always hand Demucs a WAV.
  #
  # This avoids historical torchaudio/FFmpeg backend issues on
  # macOS while keeping decoding completely outside Demucs.

  if ! ffmpeg \
    -hide_banner \
    -loglevel error \
    -y \
    -i "$INPUT" \
    -vn \
    -ac 2 \
    -ar 44100 \
    -c:a pcm_f32le \
    "$SOURCE_WAV"
  then
    echo "ERROR: Could not decode $filename"
    rm -rf "$WORK"
    failed=$((failed + 1))
    continue
  fi

  echo
  echo "Separating vocals..."
  echo "Device: $DEVICE"
  echo "Model:  $MODEL"
  echo

  # ----------------------------------------------------------
  # DEMUCS
  # ----------------------------------------------------------
  #
  # --two-stems=vocals
  #     vocals + accompaniment/no_vocals
  #
  # -d mps
  #     FORCE Apple Metal GPU
  #
  # --float32
  #     avoid unnecessarily quantizing Demucs' intermediate output
  #
  # --shifts 1
  #     good performance / quality tradeoff for batch processing
  #
  # --overlap 0.25
  #     standard Demucs overlap
  #
  # -j 0
  #     don't create CPU worker processes around GPU inference
  #

  if ! "$VPYTHON" -m demucs.separate \
    -n "$MODEL" \
    -d "$DEVICE" \
    --two-stems=vocals \
    --float32 \
    --shifts 1 \
    --overlap 0.25 \
    -j 0 \
    -o "$DEMUCS_OUT" \
    "$SOURCE_WAV"
  then
    echo
    echo "ERROR: Demucs failed for:"
    echo "$filename"

    rm -rf "$WORK"

    failed=$((failed + 1))
    continue
  fi

  # ----------------------------------------------------------
  # Find accompaniment
  # ----------------------------------------------------------

  INSTRUMENTAL="$(
    find "$DEMUCS_OUT" \
      -type f \
      -name 'no_vocals.wav' \
      -print \
      -quit
  )"

  if [[ -z "$INSTRUMENTAL" ]]; then
    echo "ERROR: no_vocals.wav was not produced."

    rm -rf "$WORK"

    failed=$((failed + 1))
    continue
  fi

  # ----------------------------------------------------------
  # Encode using original extension + filename
  # ----------------------------------------------------------

  echo
  echo "Writing $OUTPUT..."

  # Publish only a completely encoded output; interrupted runs cannot leave
  # a partial MP3 that a later invocation mistakes for a finished song.
  FINAL_OUTPUT="$OUTPUT"
  OUTPUT="$WORK/$filename"

  case "$extension_lower" in

    mp3)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -i "$INPUT" \
        -map 0:a:0 \
        -map_metadata 1 \
        -c:a libmp3lame \
        -b:a 320k \
        "$OUTPUT"
      ;;

    wav)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -map 0:a:0 \
        -c:a pcm_s24le \
        "$OUTPUT"
      ;;

    flac)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -i "$INPUT" \
        -map 0:a:0 \
        -map_metadata 1 \
        -c:a flac \
        -compression_level 8 \
        "$OUTPUT"
      ;;

    m4a|mp4)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -i "$INPUT" \
        -map 0:a:0 \
        -map_metadata 1 \
        -c:a aac \
        -b:a 320k \
        "$OUTPUT"
      ;;

    aac)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -c:a aac \
        -b:a 320k \
        "$OUTPUT"
      ;;

    ogg|oga)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -i "$INPUT" \
        -map 0:a:0 \
        -map_metadata 1 \
        -c:a libvorbis \
        -q:a 8 \
        "$OUTPUT"
      ;;

    opus)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -i "$INPUT" \
        -map 0:a:0 \
        -map_metadata 1 \
        -c:a libopus \
        -b:a 256k \
        "$OUTPUT"
      ;;

    aif|aiff)
      ffmpeg \
        -hide_banner \
        -loglevel error \
        -y \
        -i "$INSTRUMENTAL" \
        -map 0:a:0 \
        -c:a pcm_s24be \
        "$OUTPUT"
      ;;

    *)
      echo "Unsupported format: $extension"

      rm -rf "$WORK"

      failed=$((failed + 1))
      continue
      ;;
  esac

  mv -f "$OUTPUT" "$FINAL_OUTPUT"

  # ----------------------------------------------------------
  # Delete ALL temporary source + stem data for this song
  # ----------------------------------------------------------

  rm -rf "$WORK"

  echo "DONE: voiced/$filename"

  processed=$((processed + 1))

done < <(
  if [[ -n "$INPUT_FILE" ]]; then
    printf '%s\0' "$INPUT_FILE"
  else
  find "$SAMPLES" \
    -maxdepth 1 \
    -type f \
    \( \
      -iname '*.mp3'  -o \
      -iname '*.wav'  -o \
      -iname '*.flac' -o \
      -iname '*.m4a'  -o \
      -iname '*.mp4'  -o \
      -iname '*.aac'  -o \
      -iname '*.ogg'  -o \
      -iname '*.oga'  -o \
      -iname '*.opus' -o \
      -iname '*.aif'  -o \
      -iname '*.aiff' \
    \) \
    -print0
  fi
)

# ============================================================
# Summary
# ============================================================

echo
echo "============================================================"
echo "Finished"
echo "============================================================"
echo
echo "Processed: $processed"
echo "Skipped:   $skipped"
echo "Failed:    $failed"
echo
echo "Output:"
echo "$VOICED"
echo
[[ "$failed" -eq 0 ]]
