import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "zouk-kompa-crossover": {
    "recording": "Carimi - Kompa Mato",
    "audio": "voiced/Carimi - Kompa Mato.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10862880,
    "audioModifiedNs": 1791097978343674191,
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
    "audio": "voiced/Disclosure feat. Sam Smith - Latch.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10280889,
    "audioModifiedNs": 1791083520520431868,
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
    "audio": "voiced/Kaoma - Lambada.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8280006,
    "audioModifiedNs": 1791150878848610684,
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
    "audioBytes": 8552519,
    "audioModifiedNs": 1791077876121223018,
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
    "audio": "voiced/Kaysha - One Love.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9498334,
    "audioModifiedNs": 1791090877279332721,
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
    "audioBytes": 6814236,
    "audioModifiedNs": 1791139674790934516,
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
    "audio": "voiced/Patrick Saint-Éloi - West Indies.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13882658,
    "audioModifiedNs": 1791090280807989048,
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
    "audio": "voiced/Suzanna Lubrano - Tudo Pa Bo.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9475256,
    "audioModifiedNs": 1791098990654393073,
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
    "audioBytes": 6117159,
    "audioModifiedNs": 1791077877590725927,
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
