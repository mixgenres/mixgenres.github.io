import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "brazilian-partido-alto": {
    "recording": "Candeia - Testamento de Partideiro",
    "audio": "samples/Candeia - Testamento de Partideiro.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      57.99,
      107.69
    ],
    "targets": {
      "rmsDbfs": -20.272,
      "crestDb": 17.965,
      "lowEnergyShare": 0.715,
      "highEnergyShare": 0.0358,
      "sideMidRmsRatio": 0.0029
    }
  },
  "brazilian-samba": {
    "recording": "Cartola - O Mundo É um Moinho",
    "audio": "samples/Cartola - O Mundo É um Moinho.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      81.92,
      152.13
    ],
    "targets": {
      "rmsDbfs": -26.334,
      "crestDb": 18.607,
      "lowEnergyShare": 0.1153,
      "highEnergyShare": 0.1262,
      "sideMidRmsRatio": 0.8522
    }
  },
  "brazilian-pagode": {
    "recording": "Fundo de Quintal - A amizade",
    "audio": "samples/Fundo de Quintal - A amizade.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      66.81,
      124.08
    ],
    "targets": {
      "rmsDbfs": -21.683,
      "crestDb": 15.367,
      "lowEnergyShare": 0.4285,
      "highEnergyShare": 0.0355,
      "sideMidRmsRatio": 0.445
    }
  },
  "brazilian-mpb": {
    "recording": "Gilberto Gil - Expresso 2222",
    "audio": "samples/Gilberto Gil - Expresso 2222.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      56.03,
      104.06
    ],
    "targets": {
      "rmsDbfs": -21.915,
      "crestDb": 16.344,
      "lowEnergyShare": 0.6616,
      "highEnergyShare": 0.2301,
      "sideMidRmsRatio": 0.4641
    }
  },
  "brazilian-samba-rock": {
    "recording": "Jorge Ben Jor - País Tropical",
    "audio": "samples/Jorge Ben Jor - País Tropical.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      127.89,
      237.52
    ],
    "targets": {
      "rmsDbfs": -18.508,
      "crestDb": 16.934,
      "lowEnergyShare": 0.7064,
      "highEnergyShare": 0.0443,
      "sideMidRmsRatio": 0.2439
    }
  },
  "brazilian-bossa-nova": {
    "recording": "João Gilberto - Chega de Saudade",
    "audio": "samples/João Gilberto - Chega de Saudade.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      70.01,
      130.03
    ],
    "targets": {
      "rmsDbfs": -14.203,
      "crestDb": 12.346,
      "lowEnergyShare": 0.832,
      "highEnergyShare": 0.0015,
      "sideMidRmsRatio": 0.0017
    }
  },
  "brazilian-forro": {
    "recording": "Luiz Gonzaga - Asa Branca",
    "audio": "samples/Luiz Gonzaga - Asa Branca.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      118.67,
      220.39
    ],
    "targets": {
      "rmsDbfs": -16.639,
      "crestDb": 14.206,
      "lowEnergyShare": 0.2358,
      "highEnergyShare": 0.3491,
      "sideMidRmsRatio": 0.1164
    }
  },
  "brazilian-baiao": {
    "recording": "Luiz Gonzaga - Baião",
    "audio": "samples/Luiz Gonzaga - Baião.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      58.16,
      108.02
    ],
    "targets": {
      "rmsDbfs": -20.552,
      "crestDb": 17.295,
      "lowEnergyShare": 0.1758,
      "highEnergyShare": 0.078,
      "sideMidRmsRatio": 0.0431
    }
  },
  "brazilian-xote": {
    "recording": "Luiz Gonzaga - Xote das Meninas",
    "audio": "samples/Luiz Gonzaga - Xote das Meninas.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      53.96,
      100.2
    ],
    "targets": {
      "rmsDbfs": -22.905,
      "crestDb": 18.232,
      "lowEnergyShare": 0.4937,
      "highEnergyShare": 0.0622,
      "sideMidRmsRatio": 0.0551
    }
  },
  "brazilian-samba-reggae": {
    "recording": "Olodum - Faraó",
    "audio": "samples/Olodum - Faraó.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      81.6,
      151.54
    ],
    "targets": {
      "rmsDbfs": -16.309,
      "crestDb": 15.769,
      "lowEnergyShare": 0.7374,
      "highEnergyShare": 0.0297,
      "sideMidRmsRatio": 0.5113
    }
  },
  "brazilian-samba-de-roda": {
    "recording": "Samba de Roda de Dona Dalva - Beira Mar",
    "audio": "samples/Samba de Roda de Dona Dalva - Beira Mar.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      80.98,
      150.39
    ],
    "targets": {
      "rmsDbfs": -15.232,
      "crestDb": 14.357,
      "lowEnergyShare": 0.365,
      "highEnergyShare": 0.1631,
      "sideMidRmsRatio": 0.4397
    }
  }
} satisfies ReferenceMixCatalog;
