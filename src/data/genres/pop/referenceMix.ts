import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "pop-indie-pop": {
    "recording": "Alvvays - Archie, Marry Me",
    "audio": "samples/Alvvays - Archie, Marry Me.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      68.23,
      126.71
    ],
    "targets": {
      "rmsDbfs": -13.494,
      "crestDb": 12.066,
      "lowEnergyShare": 0.4744,
      "highEnergyShare": 0.204,
      "sideMidRmsRatio": 0.4166
    }
  },
  "pop-power-pop": {
    "recording": "Big Star - September Gurls",
    "audio": "samples/Big Star - September Gurls.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      61.56,
      114.32
    ],
    "targets": {
      "rmsDbfs": -16.31,
      "crestDb": 14.784,
      "lowEnergyShare": 0.5923,
      "highEnergyShare": 0.2117,
      "sideMidRmsRatio": 0.5035
    }
  },
  "pop-dream-pop": {
    "recording": "Cocteau Twins - Heaven or Las Vegas",
    "audio": "samples/Cocteau Twins - Heaven or Las Vegas.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      80.7,
      149.87
    ],
    "targets": {
      "rmsDbfs": -17.592,
      "crestDb": 14.812,
      "lowEnergyShare": 0.3841,
      "highEnergyShare": 0.2879,
      "sideMidRmsRatio": 0.3232
    }
  },
  "pop-synth-pop": {
    "recording": "Depeche Mode - Enjoy the Silence",
    "audio": "samples/Depeche Mode - Enjoy the Silence.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      98.0,
      182.01
    ],
    "targets": {
      "rmsDbfs": -26.332,
      "crestDb": 15.247,
      "lowEnergyShare": 0.6651,
      "highEnergyShare": 0.109,
      "sideMidRmsRatio": 0.2996
    }
  },
  "pop-contemporary": {
    "recording": "Dua Lipa - Levitating",
    "audio": "samples/Dua Lipa - Levitating.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      80.55,
      149.6
    ],
    "targets": {
      "rmsDbfs": -14.125,
      "crestDb": 12.081,
      "lowEnergyShare": 0.8508,
      "highEnergyShare": 0.0331,
      "sideMidRmsRatio": 0.239
    }
  },
  "pop-art-pop": {
    "recording": "Kate Bush - Running Up That Hill",
    "audio": "samples/Kate Bush - Running Up That Hill.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      103.82,
      192.81
    ],
    "targets": {
      "rmsDbfs": -19.856,
      "crestDb": 15.548,
      "lowEnergyShare": 0.4807,
      "highEnergyShare": 0.0291,
      "sideMidRmsRatio": 0.7838
    }
  },
  "pop-dance-pop": {
    "recording": "Madonna - Into the Groove",
    "audio": "samples/Madonna - Into the Groove.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      80.93,
      150.3
    ],
    "targets": {
      "rmsDbfs": -18.227,
      "crestDb": 13.139,
      "lowEnergyShare": 0.7594,
      "highEnergyShare": 0.1255,
      "sideMidRmsRatio": 0.2369
    }
  },
  "pop-maximal-idol-pop": {
    "recording": "SHINee - Lucifer",
    "audio": "samples/SHINee - Lucifer.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      83.35,
      154.79
    ],
    "targets": {
      "rmsDbfs": -15.885,
      "crestDb": 14.581,
      "lowEnergyShare": 0.8175,
      "highEnergyShare": 0.1011,
      "sideMidRmsRatio": 0.2393
    }
  },
  "pop-city-pop": {
    "recording": "Tatsuro Yamashita - Sparkle",
    "audio": "samples/Tatsuro Yamashita - Sparkle.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      89.72,
      166.63
    ],
    "targets": {
      "rmsDbfs": -12.186,
      "crestDb": 12.973,
      "lowEnergyShare": 0.3083,
      "highEnergyShare": 0.2886,
      "sideMidRmsRatio": 0.2541
    }
  }
} satisfies ReferenceMixCatalog;
