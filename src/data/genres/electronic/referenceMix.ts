import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "electronic-idm": {
    "recording": "Aphex Twin - Xtal",
    "audio": "samples/Aphex Twin - Xtal.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      102.99,
      191.27
    ],
    "targets": {
      "rmsDbfs": -13.59,
      "crestDb": 9.919,
      "lowEnergyShare": 0.9765,
      "highEnergyShare": 0.0048,
      "sideMidRmsRatio": 0.1444
    }
  },
  "electronic-detroit-techno": {
    "recording": "Derrick May - Strings of Life",
    "audio": "samples/Derrick May - Strings of Life.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      160.72,
      298.49
    ],
    "targets": {
      "rmsDbfs": -19.021,
      "crestDb": 17.56,
      "lowEnergyShare": 0.6145,
      "highEnergyShare": 0.1063,
      "sideMidRmsRatio": 0.1199
    }
  },
  "electronic-trance": {
    "recording": "Energy 52 - Café del Mar",
    "audio": "samples/Energy 52 - Café del Mar.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      81.44,
      151.25
    ],
    "targets": {
      "rmsDbfs": -15.706,
      "crestDb": 14.201,
      "lowEnergyShare": 0.59,
      "highEnergyShare": 0.0644,
      "sideMidRmsRatio": 0.2567
    }
  },
  "electronic-techno": {
    "recording": "Jeff Mills - The Bells",
    "audio": "samples/Jeff Mills - The Bells.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      101.22,
      187.98
    ],
    "targets": {
      "rmsDbfs": -12.583,
      "crestDb": 11.757,
      "lowEnergyShare": 0.5805,
      "highEnergyShare": 0.0391,
      "sideMidRmsRatio": 0.1716
    }
  },
  "electronic-melodic-electronic": {
    "recording": "Jon Hopkins - Open Eye Signal",
    "audio": "samples/Jon Hopkins - Open Eye Signal.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      168.75,
      313.4
    ],
    "targets": {
      "rmsDbfs": -19.12,
      "crestDb": 8.19,
      "lowEnergyShare": 0.8039,
      "highEnergyShare": 0.0282,
      "sideMidRmsRatio": 0.1729
    }
  },
  "electronic-synthwave": {
    "recording": "Kavinsky - Nightcall",
    "audio": "samples/Kavinsky - Nightcall.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      89.9,
      166.96
    ],
    "targets": {
      "rmsDbfs": -11.636,
      "crestDb": 10.573,
      "lowEnergyShare": 0.4908,
      "highEnergyShare": 0.0393,
      "sideMidRmsRatio": 0.1927
    }
  },
  "electronic-electro": {
    "recording": "Kraftwerk - Numbers",
    "audio": "samples/Kraftwerk - Numbers.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      70.16,
      130.29
    ],
    "targets": {
      "rmsDbfs": -23.675,
      "crestDb": 18.862,
      "lowEnergyShare": 0.5393,
      "highEnergyShare": 0.1109,
      "sideMidRmsRatio": 0.919
    }
  },
  "electronic-minimal": {
    "recording": "Robert Hood - Minus",
    "audio": "samples/Robert Hood - Minus.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      113.52,
      210.82
    ],
    "targets": {
      "rmsDbfs": -16.18,
      "crestDb": 12.123,
      "lowEnergyShare": 0.9029,
      "highEnergyShare": 0.0049,
      "sideMidRmsRatio": 0.1397
    }
  }
} satisfies ReferenceMixCatalog;
