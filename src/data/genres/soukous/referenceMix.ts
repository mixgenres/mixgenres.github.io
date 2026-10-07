import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "soukous-ndombolo": {
    "recording": "Awilo Longomba - Coupé Bibamba",
    "audio": "samples/Awilo Longomba - Coupé Bibamba.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6164301,
    "audioModifiedNs": 1791077573292903289,
    "windowsSeconds": [
      89.71,
      166.61
    ],
    "targets": {
      "rmsDbfs": -14.593,
      "crestDb": 14.195,
      "lowEnergyShare": 0.405,
      "highEnergyShare": 0.078,
      "sideMidRmsRatio": 0.6654
    }
  },
  "soukous-congolese-rumba": {
    "recording": "Franco & TPOK Jazz - Mario",
    "audio": "voiced/Franco & TPOK Jazz - Mario.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 34522529,
    "audioModifiedNs": 1791100541385829041,
    "windowsSeconds": [
      302.05,
      560.95
    ],
    "targets": {
      "rmsDbfs": -20.169,
      "crestDb": 16.888,
      "lowEnergyShare": 0.7129,
      "highEnergyShare": 0.0654,
      "sideMidRmsRatio": 0.4249
    }
  },
  "soukous-soukous": {
    "recording": "Kanda Bongo Man - Monie",
    "audio": "voiced/Kanda Bongo Man - Monie.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7574617,
    "audioModifiedNs": 1791107810172021306,
    "windowsSeconds": [
      66.26,
      123.05
    ],
    "targets": {
      "rmsDbfs": -15.872,
      "crestDb": 14.824,
      "lowEnergyShare": 0.4926,
      "highEnergyShare": 0.0541,
      "sideMidRmsRatio": 0.245
    }
  },
  "soukous-kwassa-kwassa": {
    "recording": "Kanda Bongo Man - Sai",
    "audio": "voiced/Kanda Bongo Man - Sai.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 15328776,
    "audioModifiedNs": 1791089950072729180,
    "windowsSeconds": [
      134.1,
      249.04
    ],
    "targets": {
      "rmsDbfs": -18.757,
      "crestDb": 15.569,
      "lowEnergyShare": 0.3542,
      "highEnergyShare": 0.1299,
      "sideMidRmsRatio": 0.291
    }
  },
  "soukous-sebene": {
    "recording": "Zaïko Langa Langa - Sentiment Awa",
    "audio": "voiced/Zaïko Langa Langa - Sentiment Awa.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8532763,
    "audioModifiedNs": 1791148412084099438,
    "windowsSeconds": [
      74.64,
      138.62
    ],
    "targets": {
      "rmsDbfs": -15.751,
      "crestDb": 14.917,
      "lowEnergyShare": 0.7857,
      "highEnergyShare": 0.0976,
      "sideMidRmsRatio": 0.2608
    }
  }
} satisfies ReferenceMixCatalog;
