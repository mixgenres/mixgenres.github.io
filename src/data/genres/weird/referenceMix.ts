import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "weird-circuit-bent-broken-electronics": {
    "recording": "Brian Charette Circuit Bent Organ Trio - Doll Fin",
    "audio": "voiced/Brian Charette Circuit Bent Organ Trio - Doll Fin.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 19445681,
    "audioModifiedNs": 1791095742465059448,
    "windowsSeconds": [
      170.13,
      315.95
    ],
    "targets": {
      "rmsDbfs": -18.337,
      "crestDb": 13.662,
      "lowEnergyShare": 0.6134,
      "highEnergyShare": 0.0133,
      "sideMidRmsRatio": 0.0684
    }
  },
  "weird-deconstructed": {
    "recording": "Captain Beefheart - Frownland",
    "audio": "voiced/Captain Beefheart - Frownland.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 4063739,
    "audioModifiedNs": 1791108102157986841,
    "windowsSeconds": [
      35.54,
      65.99
    ],
    "targets": {
      "rmsDbfs": -21.394,
      "crestDb": 15.865,
      "lowEnergyShare": 0.3763,
      "highEnergyShare": 0.2181,
      "sideMidRmsRatio": 0.6391
    }
  },
  "weird-no-wave": {
    "recording": "DNA - You & You",
    "audio": "samples/DNA - You & You.mp3",
    "source": "original-with-vocals",
    "audioBytes": 3063351,
    "audioModifiedNs": 1791077846396685131,
    "windowsSeconds": [
      44.51,
      82.66
    ],
    "targets": {
      "rmsDbfs": -12.645,
      "crestDb": 13.058,
      "lowEnergyShare": 0.7649,
      "highEnergyShare": 0.0682,
      "sideMidRmsRatio": 0.7682
    }
  },
  "weird-zeuhl": {
    "recording": "Magma - De Futura",
    "audio": "voiced/Magma - De Futura.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 42237068,
    "audioModifiedNs": 1791094383976493048,
    "windowsSeconds": [
      369.55,
      686.31
    ],
    "targets": {
      "rmsDbfs": -20.84,
      "crestDb": 17.115,
      "lowEnergyShare": 0.63,
      "highEnergyShare": 0.1065,
      "sideMidRmsRatio": 0.3226
    }
  },
  "weird-noise": {
    "recording": "Merzbow - Woodpecker No. 1",
    "audio": "voiced/Merzbow - Woodpecker No. 1.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 16203374,
    "audioModifiedNs": 1791147829804423664,
    "windowsSeconds": [
      141.75,
      263.25
    ],
    "targets": {
      "rmsDbfs": -13.374,
      "crestDb": 8.151,
      "lowEnergyShare": 0.197,
      "highEnergyShare": 0.4731,
      "sideMidRmsRatio": 0.3822
    }
  },
  "weird-polymetric": {
    "recording": "Meshuggah - Bleed",
    "audio": "voiced/Meshuggah - Bleed.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 12007134,
    "audioModifiedNs": 1791138378165311657,
    "windowsSeconds": [
      105.04,
      195.08
    ],
    "targets": {
      "rmsDbfs": -15.857,
      "crestDb": 13.924,
      "lowEnergyShare": 0.5508,
      "highEnergyShare": 0.3103,
      "sideMidRmsRatio": 0.5822
    }
  },
  "weird-glitch": {
    "recording": "Oval - Do While",
    "audio": "samples/Oval - Do While.mp3",
    "source": "original-with-vocals",
    "audioBytes": 34805233,
    "audioModifiedNs": 1791140347597120101,
    "windowsSeconds": [
      505.71,
      939.18
    ],
    "targets": {
      "rmsDbfs": -15.526,
      "crestDb": 14.646,
      "lowEnergyShare": 0.245,
      "highEnergyShare": 0.0169,
      "sideMidRmsRatio": 0.4288
    }
  },
  "weird-musique-concrete": {
    "recording": "Pierre Schaeffer - Étude aux chemins de fer",
    "audio": "voiced/Pierre Schaeffer - Étude aux chemins de fer.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6943587,
    "audioModifiedNs": 1791082055292326241,
    "windowsSeconds": [
      60.73,
      112.79
    ],
    "targets": {
      "rmsDbfs": -29.649,
      "crestDb": 18.599,
      "lowEnergyShare": 0.0281,
      "highEnergyShare": 0.029,
      "sideMidRmsRatio": 0.0147
    }
  },
  "weird-microsound": {
    "recording": "Ryoji Ikeda - data.matrix",
    "audio": "voiced/Ryoji Ikeda - data.matrix.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 24047408,
    "audioModifiedNs": 1791085262699735048,
    "windowsSeconds": [
      210.39,
      390.72
    ],
    "targets": {
      "rmsDbfs": -25.747,
      "crestDb": 21.176,
      "lowEnergyShare": 0.6109,
      "highEnergyShare": 0.3062,
      "sideMidRmsRatio": 0.4024
    }
  },
  "weird-drone": {
    "recording": "Sunn O))) - It Took the Night to Believe",
    "audio": "voiced/Sunn O))) - It Took the Night to Believe.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14269361,
    "audioModifiedNs": 1791153027123851601,
    "windowsSeconds": [
      124.83,
      231.83
    ],
    "targets": {
      "rmsDbfs": -10.998,
      "crestDb": 10.703,
      "lowEnergyShare": 0.8294,
      "highEnergyShare": 0.0579,
      "sideMidRmsRatio": 0.4855
    }
  }
} satisfies ReferenceMixCatalog;
