import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "swing-balboa": {
    "recording": "Artie Shaw - Begin the Beguine",
    "audio": "voiced/Artie Shaw - Begin the Beguine.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7927790,
    "audioModifiedNs": 1791155922954393777,
    "windowsSeconds": [
      69.34,
      128.78
    ],
    "targets": {
      "rmsDbfs": -16.004,
      "crestDb": 14.895,
      "lowEnergyShare": 0.5159,
      "highEnergyShare": 0.1355,
      "sideMidRmsRatio": 0.5353
    }
  },
  "swing-fusion-swing": {
    "recording": "Billie Eilish - bad guy",
    "audio": "samples/Billie Eilish - bad guy.mp3",
    "source": "original-with-vocals",
    "audioBytes": 4992069,
    "audioModifiedNs": 1791077593500748931,
    "windowsSeconds": [
      72.07,
      133.85
    ],
    "targets": {
      "rmsDbfs": -15.155,
      "crestDb": 9.834,
      "lowEnergyShare": 0.83,
      "highEnergyShare": 0.007,
      "sideMidRmsRatio": 0.1986
    }
  },
  "swing-electro-swing": {
    "recording": "Caravan Palace - Lone Digger",
    "audio": "voiced/Caravan Palace - Lone Digger.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6804505,
    "audioModifiedNs": 1791080660508834181,
    "windowsSeconds": [
      59.51,
      110.53
    ],
    "targets": {
      "rmsDbfs": -14.778,
      "crestDb": 14.005,
      "lowEnergyShare": 0.4494,
      "highEnergyShare": 0.0879,
      "sideMidRmsRatio": 0.2656
    }
  },
  "swing-lindy-hop": {
    "recording": "Count Basie - Jumpin' at the Woodside",
    "audio": "samples/Count Basie - Jumpin' at the Woodside.mp3",
    "source": "original-with-vocals",
    "audioBytes": 5414334,
    "audioModifiedNs": 1791077588609480106,
    "windowsSeconds": [
      78.63,
      146.02
    ],
    "targets": {
      "rmsDbfs": -18.353,
      "crestDb": 14.047,
      "lowEnergyShare": 0.226,
      "highEnergyShare": 0.2849,
      "sideMidRmsRatio": 0.0032
    }
  },
  "swing-slow-swing": {
    "recording": "Duke Ellington - In a Sentimental Mood",
    "audio": "voiced/Duke Ellington - In a Sentimental Mood.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10348825,
    "audioModifiedNs": 1791158906891526781,
    "windowsSeconds": [
      90.53,
      168.12
    ],
    "targets": {
      "rmsDbfs": -23.207,
      "crestDb": 15.537,
      "lowEnergyShare": 0.1885,
      "highEnergyShare": 0.0474,
      "sideMidRmsRatio": 0.4863
    }
  },
  "swing-charleston": {
    "recording": "James P. Johnson - Charleston",
    "audio": "voiced/James P. Johnson - Charleston.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 4327153,
    "audioModifiedNs": 1791150057503994786,
    "windowsSeconds": [
      37.84,
      70.27
    ],
    "targets": {
      "rmsDbfs": -17.247,
      "crestDb": 15.981,
      "lowEnergyShare": 0.0703,
      "highEnergyShare": 0.2079,
      "sideMidRmsRatio": 0.0014
    }
  },
  "swing-west-coast-swing": {
    "recording": "Jordan Davis - Slow Dance in a Parking Lot",
    "audio": "voiced/Jordan Davis - Slow Dance in a Parking Lot.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9645597,
    "audioModifiedNs": 1791098351908742800,
    "windowsSeconds": [
      84.38,
      156.7
    ],
    "targets": {
      "rmsDbfs": -17.884,
      "crestDb": 16.23,
      "lowEnergyShare": 0.6007,
      "highEnergyShare": 0.0951,
      "sideMidRmsRatio": 0.5417
    }
  }
} satisfies ReferenceMixCatalog;
