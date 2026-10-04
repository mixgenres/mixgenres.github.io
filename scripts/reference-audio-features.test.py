import importlib.util
from pathlib import Path
import unittest
import numpy as np
spec = importlib.util.spec_from_file_location('features', Path(__file__).with_name('compare-reference-audio.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
class FeatureTests(unittest.TestCase):
    def tone(self, frequency=440):
        x = .1 * np.sin(2 * np.pi * frequency * np.arange(module.SAMPLE_RATE) / module.SAMPLE_RATE)
        return np.stack([x, x], axis=1)
    def test_known_frequency_and_gain_invariance(self):
        x = self.tone()
        a, b = module.features(x), module.features(x * 3)
        self.assertAlmostEqual(a['centroidHz'], 440, delta=1)
        self.assertAlmostEqual(module.compare(a, b)['differences']['spectralDistance'], 0, places=7)
        self.assertGreater(b['rmsDbfs'], a['rmsDbfs'])
    def test_stereo_phase_does_not_erase_spectral_energy(self):
        x = self.tone(); inverse = x.copy(); inverse[:, 1] *= -1
        a, b = module.features(x), module.features(inverse)
        self.assertAlmostEqual(a['centroidHz'], b['centroidHz'])
        self.assertAlmostEqual(b['stereoCorrelation'], -1)
    def test_silence_and_nonfinite_audio_are_not_matches(self):
        with self.assertRaises(ValueError): module.features(np.zeros((22050, 2)))
        with self.assertRaises(ValueError): module.features(np.full((22050, 2), np.nan))
if __name__ == '__main__': unittest.main()
