import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "hip-hop-golden-age": {
    "recording": "A Tribe Called Quest - Can I Kick It?",
    "audio": "samples/A Tribe Called Quest - Can I Kick It?.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      91.15,
      169.28
    ],
    "targets": {
      "rmsDbfs": -15.458,
      "crestDb": 14.099,
      "lowEnergyShare": 0.7922,
      "highEnergyShare": 0.0473,
      "sideMidRmsRatio": 0.2286
    }
  },
  "hip-hop-drill": {
    "recording": "Chief Keef - I Don't Like",
    "audio": "samples/Chief Keef - I Don't Like.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      108.15,
      200.86
    ],
    "targets": {
      "rmsDbfs": -13.364,
      "crestDb": 12.162,
      "lowEnergyShare": 0.8684,
      "highEnergyShare": 0.067,
      "sideMidRmsRatio": 0.1487
    }
  },
  "hip-hop-g-funk": {
    "recording": "Dr. Dre - Nuthin' but a 'G' Thang",
    "audio": "samples/Dr. Dre - Nuthin' but a 'G' Thang.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      99.69,
      185.14
    ],
    "targets": {
      "rmsDbfs": -23.874,
      "crestDb": 17.882,
      "lowEnergyShare": 0.8135,
      "highEnergyShare": 0.1119,
      "sideMidRmsRatio": 0.482
    }
  },
  "hip-hop-trap": {
    "recording": "Future - March Madness",
    "audio": "samples/Future - March Madness.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      86.11,
      159.91
    ],
    "targets": {
      "rmsDbfs": -11.156,
      "crestDb": 9.779,
      "lowEnergyShare": 0.887,
      "highEnergyShare": 0.0289,
      "sideMidRmsRatio": 0.1571
    }
  },
  "hip-hop-jazz-rap": {
    "recording": "Gang Starr - Mass Appeal",
    "audio": "samples/Gang Starr - Mass Appeal.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      78.96,
      146.64
    ],
    "targets": {
      "rmsDbfs": -14.568,
      "crestDb": 13.665,
      "lowEnergyShare": 0.833,
      "highEnergyShare": 0.0913,
      "sideMidRmsRatio": 0.2478
    }
  },
  "hip-hop-boom-bap": {
    "recording": "Nas - N.Y. State of Mind",
    "audio": "samples/Nas - N.Y. State of Mind.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      103.46,
      192.13
    ],
    "targets": {
      "rmsDbfs": -12.7,
      "crestDb": 11.999,
      "lowEnergyShare": 0.7589,
      "highEnergyShare": 0.0507,
      "sideMidRmsRatio": 0.0614
    }
  },
  "hip-hop-lo-fi": {
    "recording": "Nujabes - Feather",
    "audio": "samples/Nujabes - Feather.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      61.46,
      114.15
    ],
    "targets": {
      "rmsDbfs": -10.115,
      "crestDb": 9.396,
      "lowEnergyShare": 0.4573,
      "highEnergyShare": 0.0052,
      "sideMidRmsRatio": 0.0386
    }
  },
  "hip-hop-southern": {
    "recording": "OutKast - Rosa Parks",
    "audio": "samples/OutKast - Rosa Parks.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      93.55,
      173.74
    ],
    "targets": {
      "rmsDbfs": -15.066,
      "crestDb": 12.747,
      "lowEnergyShare": 0.8481,
      "highEnergyShare": 0.0321,
      "sideMidRmsRatio": 0.0989
    }
  }
} satisfies ReferenceMixCatalog;
