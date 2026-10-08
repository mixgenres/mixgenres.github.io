import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "gamelan-gamelan-angklung": {
    "recording": "Balinese gamelan angklung ensembles - Sekar Muncerat",
    "audio": "samples/Balinese gamelan angklung ensembles - Sekar Muncerat.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      122.66,
      227.79
    ],
    "targets": {
      "rmsDbfs": -18.046,
      "crestDb": 15.521,
      "lowEnergyShare": 0.0659,
      "highEnergyShare": 0.1019,
      "sideMidRmsRatio": 0.0009
    }
  },
  "gamelan-degung": {
    "recording": "Gamelan Degung of Bandung - Ujung Laut",
    "audio": "samples/Gamelan Degung of Bandung - Ujung Laut.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      66.32,
      123.17
    ],
    "targets": {
      "rmsDbfs": -11.899,
      "crestDb": 11.031,
      "lowEnergyShare": 0.0257,
      "highEnergyShare": 0.1475,
      "sideMidRmsRatio": 0.1753
    }
  },
  "gamelan-balinese-gong-kebyar": {
    "recording": "Gong Kebyar of Peliatan - Sekar Djepun",
    "audio": "samples/Gong Kebyar of Peliatan - Sekar Djepun.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      181.48,
      337.03
    ],
    "targets": {
      "rmsDbfs": -18.475,
      "crestDb": 15.386,
      "lowEnergyShare": 0.3366,
      "highEnergyShare": 0.2471,
      "sideMidRmsRatio": 0.8993
    }
  }
} satisfies ReferenceMixCatalog;
