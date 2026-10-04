"""Decoded-MP3 feature comparison, not a perceptual authenticity classifier.

Requires NumPy and ffmpeg. All spectral comparisons normalize energy, so
turning up a quiet render cannot masquerade as a timbre improvement.
"""
import argparse
import json
import subprocess
from pathlib import Path

import numpy as np

SAMPLE_RATE = 22050
EDGES = [20, 80, 200, 500, 1500, 4000, 10000]


def decode(path, start=0, seconds=20):
    command = ["ffmpeg", "-v", "error", "-ss", str(start), "-i", str(path),
               "-t", str(seconds), "-vn", "-ar", str(SAMPLE_RATE), "-ac", "2",
               "-f", "f32le", "-c:a", "pcm_f32le", "pipe:1"]
    result = subprocess.run(command, check=True, capture_output=True)
    pcm = np.frombuffer(result.stdout, dtype="<f4").reshape(-1, 2).astype(np.float64)
    if len(pcm) < 2048 or not np.isfinite(pcm).all():
        raise ValueError(f"Too little or invalid decoded PCM: {path}")
    return pcm


def features(pcm):
    if pcm.ndim != 2 or pcm.shape[1] != 2 or len(pcm) < 2048 or not np.isfinite(pcm).all():
        raise ValueError("Expected finite stereo PCM with at least 2048 frames")
    if np.sqrt((pcm ** 2).mean()) < 1e-9:
        raise ValueError("Silent audio cannot establish reference similarity")
    mono = pcm.mean(axis=1)
    size, hop = 2048, 256
    frames = np.lib.stride_tricks.sliding_window_view(pcm, size, axis=0)[::hop]
    # Average channel powers, not channels: mono summing would cancel a wide
    # reference and confuse stereo phase differences with missing harmonics.
    spectrum = (np.abs(np.fft.rfft(frames * np.hanning(size), axis=2)) ** 2).mean(axis=1)
    frequencies = np.fft.rfftfreq(size, 1 / SAMPLE_RATE)
    selected = (frequencies >= 20) & (frequencies <= 10000)
    power = spectrum.mean(axis=0)
    total = max(float(power[selected].sum()), 1e-30)
    band_energy = [float(power[(frequencies >= low) & (frequencies < high)].sum() / total)
                   for low, high in zip(EDGES[:-1], EDGES[1:])]
    centroid = float((power[selected] * frequencies[selected]).sum() / total)
    distribution = power[selected] / total
    rolloff = float(frequencies[selected][min(len(distribution) - 1, np.searchsorted(np.cumsum(distribution), .85))])
    logarithmic_edges = np.geomspace(20, 10000, 25)
    fingerprint = np.array([power[(frequencies >= low) & (frequencies < high)].sum()
                            for low, high in zip(logarithmic_edges[:-1], logarithmic_edges[1:])])
    fingerprint /= max(float(fingerprint.sum()), 1e-30)

    # Positive spectral flux is an attack proxy, not a transcription. A robust
    # threshold/refractory interval limits double-counting one broad attack.
    magnitudes = np.sqrt(spectrum)
    flux = np.maximum(np.diff(magnitudes, axis=0), 0).sum(axis=1)
    flux /= max(float(magnitudes.sum(axis=1).mean()), 1e-30)
    flux = np.convolve(flux, np.ones(3) / 3, mode="same")
    threshold = float(np.median(flux) + 1.5 * np.std(flux))
    candidates = np.flatnonzero((flux[1:-1] > flux[:-2]) & (flux[1:-1] >= flux[2:]) & (flux[1:-1] > threshold)) + 1
    attacks = []
    for index in candidates:
        if not attacks or (index - attacks[-1]) * hop / SAMPLE_RATE >= .09:
            attacks.append(int(index))
        elif flux[index] > flux[attacks[-1]]:
            attacks[-1] = int(index)

    frame_rms = np.sqrt((frames ** 2).mean(axis=(1, 2)))
    q10, q90 = np.percentile(frame_rms, [10, 90])
    rms = float(np.sqrt((pcm ** 2).mean()))
    peak = float(np.max(np.abs(pcm)))
    centered = pcm - pcm.mean(axis=0)
    covariance = float((centered[:, 0] * centered[:, 1]).sum())
    correlation = covariance / max(float(np.sqrt((centered[:, 0] ** 2).sum() * (centered[:, 1] ** 2).sum())), 1e-30)
    side = (pcm[:, 0] - pcm[:, 1]) / 2
    side_mid = float(np.sqrt((side ** 2).mean() / max(float((mono ** 2).mean()), 1e-30)))

    # Aggregate pitch-class energy retains key/register evidence, but cannot
    # establish that the reference melody, harmony or voicing was reproduced.
    pitched_bins = (frequencies >= 65) & (frequencies <= 2000)
    midi = np.rint(69 + 12 * np.log2(frequencies[pitched_bins] / 440)).astype(int)
    chroma = np.bincount(midi % 12, weights=power[pitched_bins], minlength=12)
    chroma /= max(float(chroma.sum()), 1e-30)
    return {
        "durationSeconds": len(pcm) / SAMPLE_RATE, "rmsDbfs": float(20 * np.log10(max(rms, 1e-15))),
        "crestDb": float(20 * np.log10(max(peak, 1e-15) / max(rms, 1e-15))),
        "centroidHz": centroid, "rolloff85Hz": rolloff, "bandEnergy": band_energy,
        "spectralFingerprint": fingerprint.tolist(), "chroma": chroma.tolist(),
        "estimatedAttacksPerSecond": len(attacks) / (len(pcm) / SAMPLE_RATE),
        "spectralFluxMean": float(flux.mean()),
        "envelopeRangeDb": float(20 * np.log10(max(q90, 1e-15) / max(q10, 1e-15))),
        "stereoCorrelation": float(correlation), "sideMidRmsRatio": side_mid,
    }


def compare(reference, generated):
    p, q = np.array(reference["spectralFingerprint"]), np.array(generated["spectralFingerprint"])
    midpoint = (p + q) / 2
    def divergence(a):
        mask = a > 0
        return float((a[mask] * np.log2(a[mask] / np.maximum(midpoint[mask], 1e-30))).sum())
    spectral_distance = float(np.sqrt(max(0, (divergence(p) + divergence(q)) / 2)))
    differences = {
        "spectralDistance": spectral_distance,
        "centroidRatio": generated["centroidHz"] / max(reference["centroidHz"], 1e-15),
        "lowBodyEnergyRatio": sum(generated["bandEnergy"][:2]) / max(sum(reference["bandEnergy"][:2]), 1e-9),
        "rmsLevelDifferenceDb": generated["rmsDbfs"] - reference["rmsDbfs"],
        "crestDifferenceDb": generated["crestDb"] - reference["crestDb"],
        "attackDensityDifference": generated["estimatedAttacksPerSecond"] - reference["estimatedAttacksPerSecond"],
        "envelopeRangeDifferenceDb": generated["envelopeRangeDb"] - reference["envelopeRangeDb"],
        "stereoWidthDifference": generated["sideMidRmsRatio"] - reference["sideMidRmsRatio"],
        "bandEnergyDifference": [b - a for a, b in zip(reference["bandEnergy"], generated["bandEnergy"])],
    }
    findings = []
    if differences["lowBodyEnergyRatio"] < .5 and sum(reference["bandEnergy"][:2]) > .1:
        findings.append("Low-frequency body is weak relative to this reference; inspect fundamentals, bass register and source balance.")
    if differences["lowBodyEnergyRatio"] > 2 and sum(generated["bandEnergy"][:2]) > .2:
        findings.append("Low-frequency energy is disproportionately strong; inspect bass masking before adding more weight.")
    if differences["rmsLevelDifferenceDb"] < -6:
        findings.append("Generated average level is over 6 dB lower. Compare at matched listening loudness before judging tone.")
    if differences["crestDifferenceDb"] > 6:
        findings.append("Generated peaks stand much farther above average level; inspect isolated transients and gain staging.")
    # Diagnostic review thresholds, not empirical similarity/pass criteria.
    if differences["centroidRatio"] > 1.5:
        findings.append("Generated spectral energy is substantially brighter than this reference window.")
    if differences["centroidRatio"] < 2 / 3:
        findings.append("Generated spectral energy is substantially darker than this reference window.")
    if abs(differences["attackDensityDifference"]) > 1:
        findings.append("Estimated attack density differs; inspect articulation, event density and phrase gaps.")
    if abs(differences["stereoWidthDifference"]) > .2:
        findings.append("Stereo width differs substantially; inspect source decorrelation and mix placement.")
    if abs(differences["envelopeRangeDifferenceDb"]) > 6:
        findings.append("Envelope variation differs; inspect sustains, overlap, phrase dynamics and compression.")
    return {"differences": differences, "findings": findings,
            "status": "needs-musical-review", "evidence": "Decoded MP3 feature comparison. No perceptual certification or note-for-note alignment."}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reference", required=True)
    parser.add_argument("--generated")
    parser.add_argument("--seconds", type=float, default=20)
    parser.add_argument("--reference-start", type=float, default=0)
    parser.add_argument("--generated-start", type=float, default=0)
    parser.add_argument("--output")
    args = parser.parse_args()
    if args.seconds <= 0 or min(args.reference_start, args.generated_start) < 0:
        parser.error("Window must have a positive duration and nonnegative starts")
    reference = features(decode(args.reference, args.reference_start, args.seconds))
    report = {"referenceFile": str(Path(args.reference).resolve()), "bandEdgesHz": EDGES,
              "referenceStart": args.reference_start, "reference": reference}
    if args.generated:
        generated = features(decode(args.generated, args.generated_start, args.seconds))
        report.update({"generatedFile": str(Path(args.generated).resolve()), "generatedStart": args.generated_start,
                       "generated": generated, **compare(reference, generated)})
    serialized = json.dumps(report, indent=2, allow_nan=False) + "\n"
    if args.output:
        Path(args.output).parent.mkdir(parents=True, exist_ok=True)
        Path(args.output).write_text(serialized)
    print(serialized)


if __name__ == "__main__":
    main()
