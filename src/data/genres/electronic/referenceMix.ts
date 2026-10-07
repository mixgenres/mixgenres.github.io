import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "electronic-idm": {
    "recording": "Aphex Twin - Xtal",
    "audio": "voiced/Aphex Twin - Xtal.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11773082,
    "audioModifiedNs": 1791155283115430106,
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
    "audio": "voiced/Derrick May - Strings of Life.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 18371539,
    "audioModifiedNs": 1791098665709474248,
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
    "audio": "voiced/Energy 52 - Café del Mar.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9310277,
    "audioModifiedNs": 1791151515901233129,
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
    "audio": "voiced/Jeff Mills - The Bells.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11571417,
    "audioModifiedNs": 1791103341863715389,
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
    "audio": "voiced/Jon Hopkins - Open Eye Signal.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 19288947,
    "audioModifiedNs": 1791147077468047837,
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
    "audio": "voiced/Kavinsky - Nightcall.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10276693,
    "audioModifiedNs": 1791139591006859089,
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
    "audioBytes": 4823007,
    "audioModifiedNs": 1791077165325936978,
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
    "audio": "voiced/Robert Hood - Minus.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 12976708,
    "audioModifiedNs": 1791090677497589675,
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
