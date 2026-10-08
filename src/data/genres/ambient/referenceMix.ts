import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "ambient-downtempo-ambient": {
    "recording": "Bonobo - Kiara",
    "audio": "samples/Bonobo - Kiara.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      106.01,
      196.88
    ],
    "targets": {
      "rmsDbfs": -15.834,
      "crestDb": 14.839,
      "lowEnergyShare": 0.7298,
      "highEnergyShare": 0.0846,
      "sideMidRmsRatio": 0.1662
    }
  },
  "ambient-atmospheric": {
    "recording": "Brian Eno - An Ending (Ascent)",
    "audio": "samples/Brian Eno - An Ending (Ascent).mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      91.46,
      169.85
    ],
    "targets": {
      "rmsDbfs": -20.227,
      "crestDb": 14.991,
      "lowEnergyShare": 0.1178,
      "highEnergyShare": 0.002,
      "sideMidRmsRatio": 1.0636
    }
  },
  "ambient-cinematic-ambient": {
    "recording": "Hammock - Turn Away and Return",
    "audio": "samples/Hammock - Turn Away and Return.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      109.55,
      203.45
    ],
    "targets": {
      "rmsDbfs": -18.244,
      "crestDb": 12.707,
      "lowEnergyShare": 0.4181,
      "highEnergyShare": 0.0181,
      "sideMidRmsRatio": 0.6544
    }
  },
  "ambient-organic-ambient": {
    "recording": "Jon Hassell - Last Night the Moon Came",
    "audio": "samples/Jon Hassell - Last Night the Moon Came.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      182.78,
      339.44
    ],
    "targets": {
      "rmsDbfs": -23.779,
      "crestDb": 15.487,
      "lowEnergyShare": 0.3579,
      "highEnergyShare": 0.0168,
      "sideMidRmsRatio": 0.3589
    }
  },
  "ambient-glitch-ambient": {
    "recording": "Oval - Do While",
    "audio": "samples/Oval - Do While.mp3",
    "source": "original-with-vocals",
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
  "ambient-drone": {
    "recording": "Stars of the Lid - Requiem for Dying Mothers, Pt. 2",
    "audio": "samples/Stars of the Lid - Requiem for Dying Mothers, Pt. 2.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      160.0,
      297.15
    ],
    "targets": {
      "rmsDbfs": -16.787,
      "crestDb": 13.294,
      "lowEnergyShare": 0.9088,
      "highEnergyShare": 0.0051,
      "sideMidRmsRatio": 0.3008
    }
  },
  "ambient-neo-classical-ambient": {
    "recording": "Ólafur Arnalds - Near Light",
    "audio": "samples/Ólafur Arnalds - Near Light.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      73.13,
      135.82
    ],
    "targets": {
      "rmsDbfs": -14.775,
      "crestDb": 12.372,
      "lowEnergyShare": 0.3301,
      "highEnergyShare": 0.0235,
      "sideMidRmsRatio": 0.5561
    }
  }
} satisfies ReferenceMixCatalog;
