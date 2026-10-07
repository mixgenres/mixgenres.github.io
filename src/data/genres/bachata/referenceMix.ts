import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "bachata-bachata-mambo": {
    "recording": "Antony Santos - El Baile del Perrito",
    "audio": "voiced/Antony Santos - El Baile del Perrito.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 19542865,
    "audioModifiedNs": 1791084560939521377,
    "windowsSeconds": [
      170.97,
      317.52
    ],
    "targets": {
      "rmsDbfs": -19.423,
      "crestDb": 16.635,
      "lowEnergyShare": 0.4534,
      "highEnergyShare": 0.0812,
      "sideMidRmsRatio": 0.0831
    }
  },
  "bachata-dominican": {
    "recording": "Antony Santos - Voy Pa'llá",
    "audio": "voiced/Antony Santos - Voy Pa'llá.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9001944,
    "audioModifiedNs": 1791081666244006073,
    "windowsSeconds": [
      78.74,
      146.24
    ],
    "targets": {
      "rmsDbfs": -21.136,
      "crestDb": 19.44,
      "lowEnergyShare": 0.4542,
      "highEnergyShare": 0.4031,
      "sideMidRmsRatio": 0.1327
    }
  },
  "bachata-moderna": {
    "recording": "Aventura - Obsesión",
    "audio": "voiced/Aventura - Obsesión.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10210884,
    "audioModifiedNs": 1791085868730133224,
    "windowsSeconds": [
      89.32,
      165.89
    ],
    "targets": {
      "rmsDbfs": -24.126,
      "crestDb": 18.912,
      "lowEnergyShare": 0.4082,
      "highEnergyShare": 0.1132,
      "sideMidRmsRatio": 0.3892
    }
  },
  "bachata-sensual": {
    "recording": "Daniel Santacruz - Lento",
    "audio": "samples/Daniel Santacruz - Lento.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6542923,
    "audioModifiedNs": 1791076992003337893,
    "windowsSeconds": [
      93.14,
      172.97
    ],
    "targets": {
      "rmsDbfs": -9.414,
      "crestDb": 11.159,
      "lowEnergyShare": 0.5805,
      "highEnergyShare": 0.0532,
      "sideMidRmsRatio": 0.4207
    }
  },
  "bachata-traditional-bolero-bachata": {
    "recording": "José Manuel Calderón - Borracho de Amor",
    "audio": "voiced/José Manuel Calderón - Borracho de Amor.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6554788,
    "audioModifiedNs": 1791082511423334498,
    "windowsSeconds": [
      57.33,
      106.47
    ],
    "targets": {
      "rmsDbfs": -25.84,
      "crestDb": 16.897,
      "lowEnergyShare": 0.4287,
      "highEnergyShare": 0.059,
      "sideMidRmsRatio": 0.2712
    }
  },
  "bachata-amargue": {
    "recording": "Luis Segura - Pena por Ti",
    "audio": "samples/Luis Segura - Pena por Ti.mp3",
    "source": "original-with-vocals",
    "audioBytes": 4393269,
    "audioModifiedNs": 1791076983865249930,
    "windowsSeconds": [
      62.55,
      116.17
    ],
    "targets": {
      "rmsDbfs": -14.541,
      "crestDb": 15.514,
      "lowEnergyShare": 0.4508,
      "highEnergyShare": 0.1503,
      "sideMidRmsRatio": 0.4715
    }
  },
  "bachata-urban": {
    "recording": "Prince Royce - Stand by Me",
    "audio": "voiced/Prince Royce - Stand by Me.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8984253,
    "audioModifiedNs": 1791149231566542422,
    "windowsSeconds": [
      78.59,
      145.95
    ],
    "targets": {
      "rmsDbfs": -22.829,
      "crestDb": 14.277,
      "lowEnergyShare": 0.6457,
      "highEnergyShare": 0.0598,
      "sideMidRmsRatio": 0.0037
    }
  },
  "bachata-fusion": {
    "recording": "Romeo Santos - Propuesta Indecente",
    "audio": "samples/Romeo Santos - Propuesta Indecente.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6502703,
    "audioModifiedNs": 1791077000468554923,
    "windowsSeconds": [
      93.81,
      174.23
    ],
    "targets": {
      "rmsDbfs": -11.384,
      "crestDb": 11.072,
      "lowEnergyShare": 0.3262,
      "highEnergyShare": 0.0934,
      "sideMidRmsRatio": 0.4601
    }
  }
} satisfies ReferenceMixCatalog;
