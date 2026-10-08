import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "bass-2-step": {
    "recording": "Artful Dodger - Movin' Too Fast",
    "audio": "samples/Artful Dodger - Movin' Too Fast.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      82.71,
      153.61
    ],
    "targets": {
      "rmsDbfs": -19.31,
      "crestDb": 18.063,
      "lowEnergyShare": 0.5118,
      "highEnergyShare": 0.1557,
      "sideMidRmsRatio": 0.2626
    }
  },
  "bass-future-garage": {
    "recording": "Burial - Archangel",
    "audio": "samples/Burial - Archangel.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      83.48,
      155.03
    ],
    "targets": {
      "rmsDbfs": -13.487,
      "crestDb": 12.378,
      "lowEnergyShare": 0.816,
      "highEnergyShare": 0.0135,
      "sideMidRmsRatio": 0.1656
    }
  },
  "bass-drum-and-bass": {
    "recording": "Goldie - Inner City Life",
    "audio": "samples/Goldie - Inner City Life.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      77.58,
      144.08
    ],
    "targets": {
      "rmsDbfs": -29.847,
      "crestDb": 15.888,
      "lowEnergyShare": 0.5851,
      "highEnergyShare": 0.1731,
      "sideMidRmsRatio": 0.0036
    }
  },
  "bass-liquid": {
    "recording": "High Contrast - If We Ever",
    "audio": "samples/High Contrast - If We Ever.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      111.99,
      207.98
    ],
    "targets": {
      "rmsDbfs": -13.613,
      "crestDb": 11.419,
      "lowEnergyShare": 0.8131,
      "highEnergyShare": 0.097,
      "sideMidRmsRatio": 0.1408
    }
  },
  "bass-uk-garage": {
    "recording": "MJ Cole - Sincere",
    "audio": "samples/MJ Cole - Sincere.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      102.17,
      189.75
    ],
    "targets": {
      "rmsDbfs": -14.434,
      "crestDb": 12.868,
      "lowEnergyShare": 0.6346,
      "highEnergyShare": 0.0441,
      "sideMidRmsRatio": 0.5297
    }
  },
  "bass-neurofunk": {
    "recording": "Noisia - Stigma",
    "audio": "samples/Noisia - Stigma.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      134.33,
      249.47
    ],
    "targets": {
      "rmsDbfs": -13.411,
      "crestDb": 11.14,
      "lowEnergyShare": 0.7156,
      "highEnergyShare": 0.0745,
      "sideMidRmsRatio": 0.0849
    }
  },
  "bass-dubstep": {
    "recording": "Skream - Midnight Request Line",
    "audio": "samples/Skream - Midnight Request Line.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      82.92,
      153.99
    ],
    "targets": {
      "rmsDbfs": -15.907,
      "crestDb": 15.097,
      "lowEnergyShare": 0.8852,
      "highEnergyShare": 0.0704,
      "sideMidRmsRatio": 0.2128
    }
  },
  "bass-breakbeat": {
    "recording": "The Chemical Brothers - Block Rockin' Beats",
    "audio": "samples/The Chemical Brothers - Block Rockin' Beats.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      72.36,
      134.39
    ],
    "targets": {
      "rmsDbfs": -14.044,
      "crestDb": 11.389,
      "lowEnergyShare": 0.5657,
      "highEnergyShare": 0.1225,
      "sideMidRmsRatio": 0.2779
    }
  },
  "bass-grime": {
    "recording": "Wiley - Wot Do U Call It?",
    "audio": "samples/Wiley - Wot Do U Call It?.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      69.85,
      129.72
    ],
    "targets": {
      "rmsDbfs": -18.268,
      "crestDb": 17.77,
      "lowEnergyShare": 0.5054,
      "highEnergyShare": 0.2157,
      "sideMidRmsRatio": 0.0069
    }
  }
} satisfies ReferenceMixCatalog;
