import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "afrobeat-modern-revival": {
    "recording": "Antibalas - Dirty Money",
    "audio": "samples/Antibalas - Dirty Money.mp3",
    "source": "original-with-vocals",
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
    "audio": "samples/E.T. Mensah - All for You.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Fela Kuti - Water No Get Enemy.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Fela Kuti - Zombie.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/S.E. Rogie - My Lovely Elizabeth.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Tony Allen - Ariya.mp3",
    "source": "separated-accompaniment",
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
