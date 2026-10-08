import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "folk-folk-revival": {
    "recording": "Bob Dylan - Don't Think Twice, It's All Right",
    "audio": "samples/Bob Dylan - Don't Think Twice, It's All Right.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      76.64,
      142.33
    ],
    "targets": {
      "rmsDbfs": -29.835,
      "crestDb": 16.524,
      "lowEnergyShare": 0.2348,
      "highEnergyShare": 0.0727,
      "sideMidRmsRatio": 0.3596
    }
  },
  "folk-appalachian": {
    "recording": "Doc Watson - Shady Grove",
    "audio": "samples/Doc Watson - Shady Grove.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      64.39,
      119.57
    ],
    "targets": {
      "rmsDbfs": -23.1,
      "crestDb": 18.16,
      "lowEnergyShare": 0.481,
      "highEnergyShare": 0.043,
      "sideMidRmsRatio": 0.3847
    }
  },
  "folk-contemporary-folk": {
    "recording": "Joni Mitchell - Both Sides, Now",
    "audio": "samples/Joni Mitchell - Both Sides, Now.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      115.22,
      213.99
    ],
    "targets": {
      "rmsDbfs": -19.508,
      "crestDb": 13.924,
      "lowEnergyShare": 0.7134,
      "highEnergyShare": 0.0107,
      "sideMidRmsRatio": 0.4758
    }
  },
  "folk-singer-songwriter": {
    "recording": "Nick Drake - Pink Moon",
    "audio": "samples/Nick Drake - Pink Moon.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      85.8
    ],
    "targets": {
      "rmsDbfs": -21.77,
      "crestDb": 14.737,
      "lowEnergyShare": 0.6718,
      "highEnergyShare": 0.0133,
      "sideMidRmsRatio": 0.2477
    }
  },
  "folk-celtic": {
    "recording": "The Chieftains - The Morning Dew",
    "audio": "samples/The Chieftains - The Morning Dew.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      76.74,
      142.52
    ],
    "targets": {
      "rmsDbfs": -34.531,
      "crestDb": 16.482,
      "lowEnergyShare": 0.3472,
      "highEnergyShare": 0.1251,
      "sideMidRmsRatio": 0.048
    }
  },
  "folk-old-time": {
    "recording": "Tommy Jarrell - Sail Away Ladies",
    "audio": "samples/Tommy Jarrell - Sail Away Ladies.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      47.18,
      87.61
    ],
    "targets": {
      "rmsDbfs": -22.0,
      "crestDb": 17.176,
      "lowEnergyShare": 0.0148,
      "highEnergyShare": 0.2434,
      "sideMidRmsRatio": 0.0239
    }
  }
} satisfies ReferenceMixCatalog;
