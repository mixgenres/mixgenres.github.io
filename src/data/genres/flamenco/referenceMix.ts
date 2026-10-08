import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "flamenco-tonas-martinetes": {
    "recording": "Antonio Mairena - Martinete y Debla",
    "audio": "samples/Antonio Mairena - Martinete y Debla.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      101.74,
      188.94
    ],
    "targets": {
      "rmsDbfs": -15.048,
      "crestDb": 14.428,
      "lowEnergyShare": 0.0,
      "highEnergyShare": 0.2141,
      "sideMidRmsRatio": 0.438
    }
  },
  "flamenco-nuevo-flamenco": {
    "recording": "Camarón - La Leyenda del Tiempo",
    "audio": "samples/Camarón - La Leyenda del Tiempo.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      77.41,
      143.75
    ],
    "targets": {
      "rmsDbfs": -13.377,
      "crestDb": 12.548,
      "lowEnergyShare": 0.3584,
      "highEnergyShare": 0.0878,
      "sideMidRmsRatio": 0.2318
    }
  },
  "flamenco-tientos": {
    "recording": "Camarón - Moraíto como un lirio",
    "audio": "samples/Camarón - Moraíto como un lirio.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      94.2,
      174.94
    ],
    "targets": {
      "rmsDbfs": -22.236,
      "crestDb": 21.097,
      "lowEnergyShare": 0.3306,
      "highEnergyShare": 0.063,
      "sideMidRmsRatio": 0.5401
    }
  },
  "flamenco-granaina-malaguena": {
    "recording": "Camarón - Que he dejao de quererte",
    "audio": "samples/Camarón - Que he dejao de quererte.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      42.35,
      78.64
    ],
    "targets": {
      "rmsDbfs": -26.121,
      "crestDb": 22.106,
      "lowEnergyShare": 0.1384,
      "highEnergyShare": 0.0733,
      "sideMidRmsRatio": 0.3179
    }
  },
  "flamenco-fandangos": {
    "recording": "Camarón - Salud antes que dinero",
    "audio": "samples/Camarón - Salud antes que dinero.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      60.55,
      112.45
    ],
    "targets": {
      "rmsDbfs": -28.589,
      "crestDb": 22.141,
      "lowEnergyShare": 0.2332,
      "highEnergyShare": 0.0049,
      "sideMidRmsRatio": 0.4671
    }
  },
  "flamenco-alegrias": {
    "recording": "Camarón de la Isla - Bahía de Cádiz",
    "audio": "samples/Camarón de la Isla - Bahía de Cádiz.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      61.61,
      114.41
    ],
    "targets": {
      "rmsDbfs": -17.107,
      "crestDb": 15.827,
      "lowEnergyShare": 0.311,
      "highEnergyShare": 0.0601,
      "sideMidRmsRatio": 0.487
    }
  },
  "flamenco-tangos": {
    "recording": "Camarón de la Isla - Como el Agua",
    "audio": "samples/Camarón de la Isla - Como el Agua.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      77.77,
      144.43
    ],
    "targets": {
      "rmsDbfs": -19.914,
      "crestDb": 17.961,
      "lowEnergyShare": 0.3943,
      "highEnergyShare": 0.0978,
      "sideMidRmsRatio": 0.5624
    }
  },
  "flamenco-solea": {
    "recording": "Camarón de la Isla - De tus ojos soy cautivo",
    "audio": "samples/Camarón de la Isla - De tus ojos soy cautivo.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      67.9,
      126.09
    ],
    "targets": {
      "rmsDbfs": -25.829,
      "crestDb": 21.438,
      "lowEnergyShare": 0.2365,
      "highEnergyShare": 0.0174,
      "sideMidRmsRatio": 0.3222
    }
  },
  "flamenco-bulerias": {
    "recording": "Paco de Lucía - Almoraima",
    "audio": "samples/Paco de Lucía - Almoraima.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      102.5,
      190.35
    ],
    "targets": {
      "rmsDbfs": -33.857,
      "crestDb": 18.31,
      "lowEnergyShare": 0.2825,
      "highEnergyShare": 0.0343,
      "sideMidRmsRatio": 0.0059
    }
  },
  "flamenco-sevillanas": {
    "recording": "Paco de Lucía - El Cobre",
    "audio": "samples/Paco de Lucía - El Cobre.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      67.24,
      124.88
    ],
    "targets": {
      "rmsDbfs": -18.535,
      "crestDb": 14.946,
      "lowEnergyShare": 0.2591,
      "highEnergyShare": 0.1256,
      "sideMidRmsRatio": 0.2474
    }
  },
  "flamenco-rumba": {
    "recording": "Paco de Lucía - Entre dos aguas",
    "audio": "samples/Paco de Lucía - Entre dos aguas.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      113.41,
      210.62
    ],
    "targets": {
      "rmsDbfs": -15.893,
      "crestDb": 12.939,
      "lowEnergyShare": 0.419,
      "highEnergyShare": 0.0321,
      "sideMidRmsRatio": 0.0031
    }
  },
  "flamenco-guajira": {
    "recording": "Paco de Lucía - Guajiras de Lucía",
    "audio": "samples/Paco de Lucía - Guajiras de Lucía.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      71.48,
      132.76
    ],
    "targets": {
      "rmsDbfs": -28.477,
      "crestDb": 16.111,
      "lowEnergyShare": 0.3151,
      "highEnergyShare": 0.0266,
      "sideMidRmsRatio": 0.0154
    }
  },
  "flamenco-taranta": {
    "recording": "Paco de Lucía - Tío Sabas",
    "audio": "samples/Paco de Lucía - Tío Sabas.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      106.89,
      198.52
    ],
    "targets": {
      "rmsDbfs": -17.583,
      "crestDb": 16.544,
      "lowEnergyShare": 0.0793,
      "highEnergyShare": 0.0578,
      "sideMidRmsRatio": 0.2294
    }
  },
  "flamenco-flamenco-jazz": {
    "recording": "Paco de Lucía - Zyryab",
    "audio": "samples/Paco de Lucía - Zyryab.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      132.07,
      245.27
    ],
    "targets": {
      "rmsDbfs": -15.469,
      "crestDb": 14.176,
      "lowEnergyShare": 0.1861,
      "highEnergyShare": 0.0955,
      "sideMidRmsRatio": 0.292
    }
  },
  "flamenco-flamenco-rock": {
    "recording": "Pata Negra - Blues de la Frontera",
    "audio": "samples/Pata Negra - Blues de la Frontera.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      88.72,
      164.77
    ],
    "targets": {
      "rmsDbfs": -19.182,
      "crestDb": 16.635,
      "lowEnergyShare": 0.2343,
      "highEnergyShare": 0.2146,
      "sideMidRmsRatio": 0.5087
    }
  },
  "flamenco-urban-experimental": {
    "recording": "Rosalía - Malamente",
    "audio": "samples/Rosalía - Malamente.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      58.85,
      109.29
    ],
    "targets": {
      "rmsDbfs": -11.302,
      "crestDb": 11.658,
      "lowEnergyShare": 0.5271,
      "highEnergyShare": 0.0585,
      "sideMidRmsRatio": 0.2963
    }
  },
  "flamenco-farruca": {
    "recording": "Sabicas - Farruca",
    "audio": "samples/Sabicas - Farruca.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      96.55,
      179.3
    ],
    "targets": {
      "rmsDbfs": -19.265,
      "crestDb": 14.014,
      "lowEnergyShare": 0.3753,
      "highEnergyShare": 0.0503,
      "sideMidRmsRatio": 0.0026
    }
  }
} satisfies ReferenceMixCatalog;
