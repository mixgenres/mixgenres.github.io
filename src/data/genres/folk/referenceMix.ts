import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "folk-folk-revival": {
    "recording": "Bob Dylan - Don't Think Twice, It's All Right",
    "audio": "voiced/Bob Dylan - Don't Think Twice, It's All Right.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8761616,
    "audioModifiedNs": 1791147347181474217,
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
    "audio": "voiced/Doc Watson - Shady Grove.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7361449,
    "audioModifiedNs": 1791091274467897377,
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
    "audio": "voiced/Joni Mitchell - Both Sides, Now.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13171075,
    "audioModifiedNs": 1791103536032369378,
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
    "audio": "voiced/Nick Drake - Pink Moon.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9807629,
    "audioModifiedNs": 1791086572055301026,
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
    "audio": "voiced/The Chieftains - The Morning Dew.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8773190,
    "audioModifiedNs": 1791085758667504376,
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
    "audio": "voiced/Tommy Jarrell - Sail Away Ladies.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 5393990,
    "audioModifiedNs": 1791147585880173081,
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
