import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "latin-electrocumbia": {
    "recording": "Bomba Estéreo - Fuego",
    "audio": "samples/Bomba Estéreo - Fuego.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      68.95,
      128.05
    ],
    "targets": {
      "rmsDbfs": -13.317,
      "crestDb": 12.899,
      "lowEnergyShare": 0.5384,
      "highEnergyShare": 0.129,
      "sideMidRmsRatio": 10.5064
    }
  },
  "latin-cumbia-villera": {
    "recording": "Damas Gratis - Se Te Ve la Tanga",
    "audio": "samples/Damas Gratis - Se Te Ve la Tanga.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      91.38,
      169.71
    ],
    "targets": {
      "rmsDbfs": -12.961,
      "crestDb": 12.679,
      "lowEnergyShare": 0.6311,
      "highEnergyShare": 0.1312,
      "sideMidRmsRatio": 0.1835
    }
  },
  "latin-vallenato": {
    "recording": "Diomedes Díaz - Bonita",
    "audio": "samples/Diomedes Díaz - Bonita.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      106.56,
      197.9
    ],
    "targets": {
      "rmsDbfs": -20.481,
      "crestDb": 17.889,
      "lowEnergyShare": 0.2385,
      "highEnergyShare": 0.3006,
      "sideMidRmsRatio": 0.243
    }
  },
  "latin-chicha": {
    "recording": "Los Mirlos - La Danza de los Mirlos",
    "audio": "samples/Los Mirlos - La Danza de los Mirlos.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      73.19,
      135.92
    ],
    "targets": {
      "rmsDbfs": -20.667,
      "crestDb": 17.209,
      "lowEnergyShare": 0.3246,
      "highEnergyShare": 0.1374,
      "sideMidRmsRatio": 0.4044
    }
  },
  "latin-bolero": {
    "recording": "Los Panchos - Sabor a Mí",
    "audio": "samples/Los Panchos - Sabor a Mí.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      59.21,
      109.95
    ],
    "targets": {
      "rmsDbfs": -21.317,
      "crestDb": 17.2,
      "lowEnergyShare": 0.4981,
      "highEnergyShare": 0.1433,
      "sideMidRmsRatio": 0.1246
    }
  },
  "latin-sonidera": {
    "recording": "Los Ángeles Azules - Cómo Te Voy a Olvidar",
    "audio": "samples/Los Ángeles Azules - Cómo Te Voy a Olvidar.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      93.93,
      174.44
    ],
    "targets": {
      "rmsDbfs": -18.602,
      "crestDb": 16.602,
      "lowEnergyShare": 0.572,
      "highEnergyShare": 0.0923,
      "sideMidRmsRatio": 0.1422
    }
  },
  "latin-latin-funk": {
    "recording": "Mandrill - Fencewalk",
    "audio": "samples/Mandrill - Fencewalk.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      116.39,
      216.15
    ],
    "targets": {
      "rmsDbfs": -18.878,
      "crestDb": 16.139,
      "lowEnergyShare": 0.2374,
      "highEnergyShare": 0.1934,
      "sideMidRmsRatio": 0.1424
    }
  },
  "latin-latin-fusion": {
    "recording": "Quantic & His Combo Bárbaro - Un Canto a Mi Tierra",
    "audio": "samples/Quantic & His Combo Bárbaro - Un Canto a Mi Tierra.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      84.23,
      156.43
    ],
    "targets": {
      "rmsDbfs": -14.654,
      "crestDb": 13.634,
      "lowEnergyShare": 0.4295,
      "highEnergyShare": 0.0817,
      "sideMidRmsRatio": 0.3047
    }
  },
  "latin-latin-pop": {
    "recording": "Shakira - Ojos Así",
    "audio": "samples/Shakira - Ojos Así.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      82.68,
      153.54
    ],
    "targets": {
      "rmsDbfs": -14.074,
      "crestDb": 12.743,
      "lowEnergyShare": 0.765,
      "highEnergyShare": 0.1113,
      "sideMidRmsRatio": 0.2976
    }
  },
  "latin-cumbia": {
    "recording": "Totó la Momposina - El Pescador",
    "audio": "samples/Totó la Momposina - El Pescador.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      89.98,
      167.11
    ],
    "targets": {
      "rmsDbfs": -22.369,
      "crestDb": 18.997,
      "lowEnergyShare": 0.394,
      "highEnergyShare": 0.0215,
      "sideMidRmsRatio": 0.517
    }
  },
  "latin-tropical": {
    "recording": "Víctor Manuelle - Que Suenen los Tambores",
    "audio": "samples/Víctor Manuelle - Que Suenen los Tambores.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      100.12,
      185.93
    ],
    "targets": {
      "rmsDbfs": -15.335,
      "crestDb": 14.235,
      "lowEnergyShare": 0.4282,
      "highEnergyShare": 0.1536,
      "sideMidRmsRatio": 0.4823
    }
  }
} satisfies ReferenceMixCatalog;
