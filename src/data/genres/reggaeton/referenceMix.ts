import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "reggaeton-experimental": {
    "recording": "Arca feat. Rosalía - KLK",
    "audio": "voiced/Arca feat. Rosalía - KLK.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9101198,
    "audioModifiedNs": 1791092434841586780,
    "windowsSeconds": [
      79.61,
      147.85
    ],
    "targets": {
      "rmsDbfs": -17.248,
      "crestDb": 15.087,
      "lowEnergyShare": 0.8001,
      "highEnergyShare": 0.0807,
      "sideMidRmsRatio": 0.347
    }
  },
  "reggaeton-latin-trap-crossover": {
    "recording": "Bad Bunny - Soy Peor",
    "audio": "voiced/Bad Bunny - Soy Peor.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10767795,
    "audioModifiedNs": 1791147981900721647,
    "windowsSeconds": [
      94.19,
      174.93
    ],
    "targets": {
      "rmsDbfs": -17.768,
      "crestDb": 16.368,
      "lowEnergyShare": 0.6287,
      "highEnergyShare": 0.2325,
      "sideMidRmsRatio": 0.371
    }
  },
  "reggaeton-playero-underground": {
    "recording": "Daddy Yankee & DJ Playero - Yamilet",
    "audio": "voiced/Daddy Yankee & DJ Playero - Yamilet.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7632047,
    "audioModifiedNs": 1791090131317173785,
    "windowsSeconds": [
      66.76,
      123.98
    ],
    "targets": {
      "rmsDbfs": -20.835,
      "crestDb": 17.746,
      "lowEnergyShare": 0.8472,
      "highEnergyShare": 0.099,
      "sideMidRmsRatio": 0.2041
    }
  },
  "reggaeton-classic": {
    "recording": "Daddy Yankee - Gasolina",
    "audio": "voiced/Daddy Yankee - Gasolina.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10158730,
    "audioModifiedNs": 1791107161118342189,
    "windowsSeconds": [
      88.86,
      165.03
    ],
    "targets": {
      "rmsDbfs": -28.836,
      "crestDb": 18.738,
      "lowEnergyShare": 0.2629,
      "highEnergyShare": 0.0633,
      "sideMidRmsRatio": 0.0036
    }
  },
  "reggaeton-melodic": {
    "recording": "Rauw Alejandro - Todo de Ti",
    "audio": "samples/Rauw Alejandro - Todo de Ti.mp3",
    "source": "original-with-vocals",
    "audioBytes": 5153101,
    "audioModifiedNs": 1791077531687041638,
    "windowsSeconds": [
      74.01,
      137.45
    ],
    "targets": {
      "rmsDbfs": -10.31,
      "crestDb": 11.206,
      "lowEnergyShare": 0.5379,
      "highEnergyShare": 0.0638,
      "sideMidRmsRatio": 0.1889
    }
  },
  "reggaeton-neoperreo": {
    "recording": "Tomasa del Real - Barre con el Pelo",
    "audio": "voiced/Tomasa del Real - Barre con el Pelo.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8102292,
    "audioModifiedNs": 1791138065452214296,
    "windowsSeconds": [
      70.87,
      131.62
    ],
    "targets": {
      "rmsDbfs": -11.173,
      "crestDb": 10.059,
      "lowEnergyShare": 0.9073,
      "highEnergyShare": 0.0257,
      "sideMidRmsRatio": 0.165
    }
  }
} satisfies ReferenceMixCatalog;
