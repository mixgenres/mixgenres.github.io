import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "r-and-b-contemporary-randb": {
    "recording": "Aaliyah - One in a Million",
    "audio": "voiced/Aaliyah - One in a Million.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 12203601,
    "audioModifiedNs": 1791106201571395587,
    "windowsSeconds": [
      106.76,
      198.26
    ],
    "targets": {
      "rmsDbfs": -16.539,
      "crestDb": 15.596,
      "lowEnergyShare": 0.8098,
      "highEnergyShare": 0.0704,
      "sideMidRmsRatio": 0.0666
    }
  },
  "r-and-b-quiet-storm": {
    "recording": "Anita Baker - Sweet Love",
    "audio": "voiced/Anita Baker - Sweet Love.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10650806,
    "audioModifiedNs": 1791093798144377375,
    "windowsSeconds": [
      93.17,
      173.03
    ],
    "targets": {
      "rmsDbfs": -18.51,
      "crestDb": 17.2,
      "lowEnergyShare": 0.5199,
      "highEnergyShare": 0.1988,
      "sideMidRmsRatio": 0.3929
    }
  },
  "r-and-b-memphis-soul": {
    "recording": "Ann Peebles - I Can't Stand the Rain",
    "audio": "voiced/Ann Peebles - I Can't Stand the Rain.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6020933,
    "audioModifiedNs": 1791086638550417826,
    "windowsSeconds": [
      52.65,
      97.79
    ],
    "targets": {
      "rmsDbfs": -20.056,
      "crestDb": 15.907,
      "lowEnergyShare": 0.6065,
      "highEnergyShare": 0.1297,
      "sideMidRmsRatio": 0.1466
    }
  },
  "r-and-b-new-jack-swing": {
    "recording": "Bobby Brown - My Prerogative",
    "audio": "voiced/Bobby Brown - My Prerogative.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11808615,
    "audioModifiedNs": 1791160478065010811,
    "windowsSeconds": [
      103.3,
      191.85
    ],
    "targets": {
      "rmsDbfs": -16.627,
      "crestDb": 15.357,
      "lowEnergyShare": 0.7769,
      "highEnergyShare": 0.1375,
      "sideMidRmsRatio": 0.3632
    }
  },
  "r-and-b-neo-soul": {
    "recording": "D'Angelo - Brown Sugar",
    "audio": "samples/D'Angelo - Brown Sugar.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6637647,
    "audioModifiedNs": 1791077522742859059,
    "windowsSeconds": [
      95.74,
      177.8
    ],
    "targets": {
      "rmsDbfs": -23.143,
      "crestDb": 14.876,
      "lowEnergyShare": 0.7477,
      "highEnergyShare": 0.0122,
      "sideMidRmsRatio": 0.3546
    }
  },
  "r-and-b-alternative-randb": {
    "recording": "Frank Ocean - Pyramids",
    "audio": "samples/Frank Ocean - Pyramids.mp3",
    "source": "original-with-vocals",
    "audioBytes": 14265685,
    "audioModifiedNs": 1791139597895794190,
    "windowsSeconds": [
      207.52,
      385.4
    ],
    "targets": {
      "rmsDbfs": -10.141,
      "crestDb": 11.415,
      "lowEnergyShare": 0.645,
      "highEnergyShare": 0.0507,
      "sideMidRmsRatio": 0.1046
    }
  },
  "r-and-b-motown": {
    "recording": "Marvin Gaye - I Heard It Through the Grapevine",
    "audio": "samples/Marvin Gaye - I Heard It Through the Grapevine.mp3",
    "source": "original-with-vocals",
    "audioBytes": 4794814,
    "audioModifiedNs": 1791077510183744674,
    "windowsSeconds": [
      68.83,
      127.82
    ],
    "targets": {
      "rmsDbfs": -13.494,
      "crestDb": 14.003,
      "lowEnergyShare": 0.511,
      "highEnergyShare": 0.1927,
      "sideMidRmsRatio": 0.8186
    }
  },
  "r-and-b-southern-soul": {
    "recording": "Otis Redding - Try a Little Tenderness",
    "audio": "voiced/Otis Redding - Try a Little Tenderness.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8037588,
    "audioModifiedNs": 1791087851055066472,
    "windowsSeconds": [
      70.31,
      130.57
    ],
    "targets": {
      "rmsDbfs": -30.712,
      "crestDb": 16.543,
      "lowEnergyShare": 0.7297,
      "highEnergyShare": 0.0331,
      "sideMidRmsRatio": 0.004
    }
  },
  "r-and-b-philly-soul": {
    "recording": "The O'Jays - Love Train",
    "audio": "voiced/The O'Jays - Love Train.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7285246,
    "audioModifiedNs": 1791080742632832918,
    "windowsSeconds": [
      63.72,
      118.34
    ],
    "targets": {
      "rmsDbfs": -18.693,
      "crestDb": 16.488,
      "lowEnergyShare": 0.3769,
      "highEnergyShare": 0.1894,
      "sideMidRmsRatio": 0.4357
    }
  }
} satisfies ReferenceMixCatalog;
