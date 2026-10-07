import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "funk-disco": {
    "recording": "Chic - Good Times",
    "audio": "voiced/Chic - Good Times.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 20111294,
    "audioModifiedNs": 1791156280709313033,
    "windowsSeconds": [
      175.95,
      326.76
    ],
    "targets": {
      "rmsDbfs": -21.227,
      "crestDb": 20.037,
      "lowEnergyShare": 0.5642,
      "highEnergyShare": 0.1852,
      "sideMidRmsRatio": 0.2732
    }
  },
  "funk-boogie": {
    "recording": "D-Train - You're the One for Me",
    "audio": "voiced/D-Train - You're the One for Me.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 17004895,
    "audioModifiedNs": 1791161297725645647,
    "windowsSeconds": [
      148.76,
      276.28
    ],
    "targets": {
      "rmsDbfs": -18.21,
      "crestDb": 17.319,
      "lowEnergyShare": 0.6833,
      "highEnergyShare": 0.149,
      "sideMidRmsRatio": 0.3658
    }
  },
  "funk-jazz-funk": {
    "recording": "Herbie Hancock - Chameleon",
    "audio": "samples/Herbie Hancock - Chameleon.mp3",
    "source": "original-with-vocals",
    "audioBytes": 22776752,
    "audioModifiedNs": 1791139944705308044,
    "windowsSeconds": [
      329.48,
      611.88
    ],
    "targets": {
      "rmsDbfs": -13.0,
      "crestDb": 13.636,
      "lowEnergyShare": 0.4184,
      "highEnergyShare": 0.2442,
      "sideMidRmsRatio": 0.2095
    }
  },
  "funk-james-brown-the-one": {
    "recording": "James Brown - Cold Sweat",
    "audio": "voiced/James Brown - Cold Sweat.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 17864854,
    "audioModifiedNs": 1791097743310963656,
    "windowsSeconds": [
      156.29,
      290.25
    ],
    "targets": {
      "rmsDbfs": -18.558,
      "crestDb": 15.471,
      "lowEnergyShare": 0.8659,
      "highEnergyShare": 0.0519,
      "sideMidRmsRatio": 0.0043
    }
  },
  "funk-funk": {
    "recording": "James Brown - Get Up (I Feel Like Being a) Sex Machine",
    "audio": "voiced/James Brown - Get Up (I Feel Like Being a) Sex Machine.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13128215,
    "audioModifiedNs": 1791103721317530739,
    "windowsSeconds": [
      114.85,
      213.29
    ],
    "targets": {
      "rmsDbfs": -17.015,
      "crestDb": 15.423,
      "lowEnergyShare": 0.8001,
      "highEnergyShare": 0.0802,
      "sideMidRmsRatio": 0.3031
    }
  },
  "funk-p-funk": {
    "recording": "Parliament - Give Up the Funk",
    "audio": "voiced/Parliament - Give Up the Funk.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13844108,
    "audioModifiedNs": 1791148312976929091,
    "windowsSeconds": [
      121.11,
      224.92
    ],
    "targets": {
      "rmsDbfs": -21.812,
      "crestDb": 20.118,
      "lowEnergyShare": 0.6437,
      "highEnergyShare": 0.0517,
      "sideMidRmsRatio": 0.238
    }
  },
  "funk-minneapolis": {
    "recording": "Prince - Kiss",
    "audio": "voiced/Prince - Kiss.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9409438,
    "audioModifiedNs": 1791089703894258168,
    "windowsSeconds": [
      82.31,
      152.85
    ],
    "targets": {
      "rmsDbfs": -20.504,
      "crestDb": 18.843,
      "lowEnergyShare": 0.7566,
      "highEnergyShare": 0.1549,
      "sideMidRmsRatio": 0.2104
    }
  },
  "funk-hi-nrg": {
    "recording": "Sylvester - You Make Me Feel (Mighty Real)",
    "audio": "voiced/Sylvester - You Make Me Feel (Mighty Real).mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9382282,
    "audioModifiedNs": 1791096443620043555,
    "windowsSeconds": [
      82.07,
      152.42
    ],
    "targets": {
      "rmsDbfs": -17.457,
      "crestDb": 16.708,
      "lowEnergyShare": 0.5887,
      "highEnergyShare": 0.1116,
      "sideMidRmsRatio": 0.5479
    }
  }
} satisfies ReferenceMixCatalog;
