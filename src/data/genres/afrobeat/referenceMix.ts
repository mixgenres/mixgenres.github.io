import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "afrobeat-modern-revival": {
    "recording": "Antibalas - Dirty Money",
    "audio": "samples/Antibalas - Dirty Money.mp3",
    "source": "original-with-vocals",
    "audioBytes": 5503473,
    "audioModifiedNs": 1791076906901982099,
    "windowsSeconds": [
      78.82,
      146.38
    ],
    "targets": {
      "rmsDbfs": -21.007,
      "crestDb": 14.332,
      "lowEnergyShare": 0.3629,
      "highEnergyShare": 0.1247,
      "sideMidRmsRatio": 0.3909
    }
  },
  "afrobeat-highlife": {
    "recording": "E.T. Mensah - All for You",
    "audio": "voiced/E.T. Mensah - All for You.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6412773,
    "audioModifiedNs": 1791084817783122298,
    "windowsSeconds": [
      56.08,
      104.16
    ],
    "targets": {
      "rmsDbfs": -21.351,
      "crestDb": 15.661,
      "lowEnergyShare": 0.6909,
      "highEnergyShare": 0.0642,
      "sideMidRmsRatio": 0.0878
    }
  },
  "afrobeat-classic-afrobeat": {
    "recording": "Fela Kuti - Water No Get Enemy",
    "audio": "voiced/Fela Kuti - Water No Get Enemy.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 23750662,
    "audioModifiedNs": 1791102385350533686,
    "windowsSeconds": [
      207.79,
      385.9
    ],
    "targets": {
      "rmsDbfs": -19.179,
      "crestDb": 15.628,
      "lowEnergyShare": 0.7241,
      "highEnergyShare": 0.0532,
      "sideMidRmsRatio": 0.3095
    }
  },
  "afrobeat-funk-heavy-afrobeat": {
    "recording": "Fela Kuti - Zombie",
    "audio": "voiced/Fela Kuti - Zombie.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 30076463,
    "audioModifiedNs": 1791152023405496326,
    "windowsSeconds": [
      263.15,
      488.7
    ],
    "targets": {
      "rmsDbfs": -16.295,
      "crestDb": 14.749,
      "lowEnergyShare": 0.5974,
      "highEnergyShare": 0.1131,
      "sideMidRmsRatio": 0.302
    }
  },
  "afrobeat-juju": {
    "recording": "King Sunny Adé - Ja Funmi",
    "audio": "samples/King Sunny Adé - Ja Funmi.mp3",
    "source": "original-with-vocals",
    "audioBytes": 10376920,
    "audioModifiedNs": 1791076906414533078,
    "windowsSeconds": [
      151.15,
      280.71
    ],
    "targets": {
      "rmsDbfs": -17.392,
      "crestDb": 17.607,
      "lowEnergyShare": 0.5982,
      "highEnergyShare": 0.0797,
      "sideMidRmsRatio": 0.1899
    }
  },
  "afrobeat-palm-wine": {
    "recording": "S.E. Rogie - My Lovely Elizabeth",
    "audio": "voiced/S.E. Rogie - My Lovely Elizabeth.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7488895,
    "audioModifiedNs": 1791083411067468720,
    "windowsSeconds": [
      65.51,
      121.66
    ],
    "targets": {
      "rmsDbfs": -20.912,
      "crestDb": 12.228,
      "lowEnergyShare": 0.3025,
      "highEnergyShare": 0.0016,
      "sideMidRmsRatio": 0.0588
    }
  },
  "afrobeat-jazz-heavy-afrobeat": {
    "recording": "Tony Allen - Ariya",
    "audio": "voiced/Tony Allen - Ariya.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 21018331,
    "audioModifiedNs": 1791097553580138040,
    "windowsSeconds": [
      183.89,
      341.51
    ],
    "targets": {
      "rmsDbfs": -19.003,
      "crestDb": 16.18,
      "lowEnergyShare": 0.5204,
      "highEnergyShare": 0.0766,
      "sideMidRmsRatio": 0.342
    }
  }
} satisfies ReferenceMixCatalog;
