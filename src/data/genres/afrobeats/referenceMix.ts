import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "afrobeats-afrofusion": {
    "recording": "Burna Boy - Anybody",
    "audio": "voiced/Burna Boy - Anybody.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7810733,
    "audioModifiedNs": 1791137359794562667,
    "windowsSeconds": [
      68.32,
      126.89
    ],
    "targets": {
      "rmsDbfs": -13.315,
      "crestDb": 11.638,
      "lowEnergyShare": 0.7944,
      "highEnergyShare": 0.0427,
      "sideMidRmsRatio": 0.106
    }
  },
  "afrobeats-afropop": {
    "recording": "Davido - Fall",
    "audio": "voiced/Davido - Fall.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10301764,
    "audioModifiedNs": 1791099966010907119,
    "windowsSeconds": [
      90.12,
      167.36
    ],
    "targets": {
      "rmsDbfs": -15.985,
      "crestDb": 13.437,
      "lowEnergyShare": 0.6742,
      "highEnergyShare": 0.059,
      "sideMidRmsRatio": 0.3359
    }
  },
  "afrobeats-alte": {
    "recording": "Santi - Rapid Fire",
    "audio": "voiced/Santi - Rapid Fire.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7784752,
    "audioModifiedNs": 1791088958486328844,
    "windowsSeconds": [
      68.09,
      126.45
    ],
    "targets": {
      "rmsDbfs": -16.085,
      "crestDb": 13.557,
      "lowEnergyShare": 0.4109,
      "highEnergyShare": 0.0812,
      "sideMidRmsRatio": 0.3371
    }
  },
  "afrobeats-randb-afrobeats": {
    "recording": "Tems - Free Mind",
    "audio": "voiced/Tems - Free Mind.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9907854,
    "audioModifiedNs": 1791156042270448788,
    "windowsSeconds": [
      86.67,
      160.96
    ],
    "targets": {
      "rmsDbfs": -13.656,
      "crestDb": 12.498,
      "lowEnergyShare": 0.8873,
      "highEnergyShare": 0.0167,
      "sideMidRmsRatio": 0.1605
    }
  },
  "afrobeats-contemporary-afrobeats": {
    "recording": "Wizkid - Ojuelegba",
    "audio": "voiced/Wizkid - Ojuelegba.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8932000,
    "audioModifiedNs": 1791089601883305869,
    "windowsSeconds": [
      78.13,
      145.1
    ],
    "targets": {
      "rmsDbfs": -11.512,
      "crestDb": 10.976,
      "lowEnergyShare": 0.8221,
      "highEnergyShare": 0.0222,
      "sideMidRmsRatio": 0.0027
    }
  }
} satisfies ReferenceMixCatalog;
