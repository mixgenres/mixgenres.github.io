import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "blues-slow-blues": {
    "recording": "Albert King - As the Years Go Passing By",
    "audio": "samples/Albert King - As the Years Go Passing By.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      165.2,
      306.8
    ],
    "targets": {
      "rmsDbfs": -33.897,
      "crestDb": 20.153,
      "lowEnergyShare": 0.0243,
      "highEnergyShare": 0.048,
      "sideMidRmsRatio": 0.1144
    }
  },
  "blues-modern-blues": {
    "recording": "B.B. King - The Thrill Is Gone",
    "audio": "samples/B.B. King - The Thrill Is Gone.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      232.98,
      432.69
    ],
    "targets": {
      "rmsDbfs": -19.986,
      "crestDb": 17.79,
      "lowEnergyShare": 0.5325,
      "highEnergyShare": 0.1195,
      "sideMidRmsRatio": 0.3989
    }
  },
  "blues-piedmont": {
    "recording": "Blind Blake - West Coast Blues",
    "audio": "samples/Blind Blake - West Coast Blues.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      48.4,
      89.89
    ],
    "targets": {
      "rmsDbfs": -18.047,
      "crestDb": 14.613,
      "lowEnergyShare": 0.457,
      "highEnergyShare": 0.0211,
      "sideMidRmsRatio": 0.382
    }
  },
  "blues-blues-fusion": {
    "recording": "Marian Hill - Down",
    "audio": "samples/Marian Hill - Down.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      72.73,
      135.07
    ],
    "targets": {
      "rmsDbfs": -15.09,
      "crestDb": 13.663,
      "lowEnergyShare": 0.8825,
      "highEnergyShare": 0.0545,
      "sideMidRmsRatio": 0.1226
    }
  },
  "blues-chicago": {
    "recording": "Muddy Waters - Hoochie Coochie Man",
    "audio": "samples/Muddy Waters - Hoochie Coochie Man.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      79.11,
      146.91
    ],
    "targets": {
      "rmsDbfs": -23.414,
      "crestDb": 14.341,
      "lowEnergyShare": 0.1737,
      "highEnergyShare": 0.0604,
      "sideMidRmsRatio": 0.0118
    }
  },
  "blues-hill-country": {
    "recording": "R.L. Burnside - It's Bad You Know",
    "audio": "samples/R.L. Burnside - It's Bad You Know.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      99.03,
      183.91
    ],
    "targets": {
      "rmsDbfs": -15.054,
      "crestDb": 15.304,
      "lowEnergyShare": 0.6456,
      "highEnergyShare": 0.067,
      "sideMidRmsRatio": 0.3725
    }
  },
  "blues-delta": {
    "recording": "Robert Johnson - Cross Road Blues",
    "audio": "samples/Robert Johnson - Cross Road Blues.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      52.06,
      96.68
    ],
    "targets": {
      "rmsDbfs": -20.235,
      "crestDb": 15.994,
      "lowEnergyShare": 0.0237,
      "highEnergyShare": 0.0703,
      "sideMidRmsRatio": 0.0042
    }
  },
  "blues-texas": {
    "recording": "Stevie Ray Vaughan - Pride and Joy",
    "audio": "samples/Stevie Ray Vaughan - Pride and Joy.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      84.42,
      156.79
    ],
    "targets": {
      "rmsDbfs": -18.076,
      "crestDb": 15.368,
      "lowEnergyShare": 0.5843,
      "highEnergyShare": 0.2231,
      "sideMidRmsRatio": 0.3533
    }
  }
} satisfies ReferenceMixCatalog;
