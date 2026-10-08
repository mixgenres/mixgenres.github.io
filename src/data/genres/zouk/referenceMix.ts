import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "zouk-kompa-crossover": {
    "recording": "Carimi - Kompa Mato",
    "audio": "samples/Carimi - Kompa Mato.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      95.03,
      176.48
    ],
    "targets": {
      "rmsDbfs": -14.686,
      "crestDb": 13.13,
      "lowEnergyShare": 0.6386,
      "highEnergyShare": 0.0429,
      "sideMidRmsRatio": 0.2523
    }
  },
  "zouk-zouk-fusion": {
    "recording": "Disclosure feat. Sam Smith - Latch",
    "audio": "samples/Disclosure feat. Sam Smith - Latch.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      89.94,
      167.03
    ],
    "targets": {
      "rmsDbfs": -15.091,
      "crestDb": 10.686,
      "lowEnergyShare": 0.8951,
      "highEnergyShare": 0.0185,
      "sideMidRmsRatio": 0.1612
    }
  },
  "zouk-lambazouk-oriented": {
    "recording": "Kaoma - Lambada",
    "audio": "samples/Kaoma - Lambada.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      72.43,
      134.51
    ],
    "targets": {
      "rmsDbfs": -25.583,
      "crestDb": 16.659,
      "lowEnergyShare": 0.571,
      "highEnergyShare": 0.1338,
      "sideMidRmsRatio": 0.0036
    }
  },
  "zouk-zouk-beton": {
    "recording": "Kassav' - Zouk la sé sèl médikaman nou ni",
    "audio": "samples/Kassav' - Zouk la sé sèl médikaman nou ni.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      124.54,
      231.29
    ],
    "targets": {
      "rmsDbfs": -17.237,
      "crestDb": 15.939,
      "lowEnergyShare": 0.6721,
      "highEnergyShare": 0.071,
      "sideMidRmsRatio": 0.186
    }
  },
  "zouk-zouk-randb": {
    "recording": "Kaysha - One Love",
    "audio": "samples/Kaysha - One Love.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      83.09,
      154.31
    ],
    "targets": {
      "rmsDbfs": -28.874,
      "crestDb": 14.673,
      "lowEnergyShare": 0.44,
      "highEnergyShare": 0.0446,
      "sideMidRmsRatio": 0.0028
    }
  },
  "zouk-ghetto-zouk": {
    "recording": "Nelson Freitas - Rebound Chick",
    "audio": "samples/Nelson Freitas - Rebound Chick.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      97.08,
      180.29
    ],
    "targets": {
      "rmsDbfs": -14.288,
      "crestDb": 14.521,
      "lowEnergyShare": 0.4195,
      "highEnergyShare": 0.0513,
      "sideMidRmsRatio": 0.4895
    }
  },
  "zouk-zouk-love": {
    "recording": "Patrick Saint-Éloi - West Indies",
    "audio": "samples/Patrick Saint-Éloi - West Indies.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      121.45,
      225.56
    ],
    "targets": {
      "rmsDbfs": -17.016,
      "crestDb": 15.351,
      "lowEnergyShare": 0.5251,
      "highEnergyShare": 0.1367,
      "sideMidRmsRatio": 0.3875
    }
  },
  "zouk-cabo-zouk": {
    "recording": "Suzanna Lubrano - Tudo Pa Bo",
    "audio": "samples/Suzanna Lubrano - Tudo Pa Bo.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      82.88,
      153.93
    ],
    "targets": {
      "rmsDbfs": -16.558,
      "crestDb": 15.869,
      "lowEnergyShare": 0.7622,
      "highEnergyShare": 0.0806,
      "sideMidRmsRatio": 0.3309
    }
  },
  "zouk-orchestral-zouk-love": {
    "recording": "Édith Lefel - La Sirène",
    "audio": "samples/Édith Lefel - La Sirène.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      89.04,
      165.37
    ],
    "targets": {
      "rmsDbfs": -14.084,
      "crestDb": 13.833,
      "lowEnergyShare": 0.2402,
      "highEnergyShare": 0.0885,
      "sideMidRmsRatio": 0.4321
    }
  }
} satisfies ReferenceMixCatalog;
