import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "turkish-anatolian-rock": {
    "recording": "Erkin Koray - Cemalim",
    "audio": "voiced/Erkin Koray - Cemalim.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 19045499,
    "audioModifiedNs": 1791100170477342184,
    "windowsSeconds": [
      166.62,
      309.44
    ],
    "targets": {
      "rmsDbfs": -17.317,
      "crestDb": 14.084,
      "lowEnergyShare": 0.6964,
      "highEnergyShare": 0.036,
      "sideMidRmsRatio": 0.3513
    }
  },
  "turkish-turkish-folk": {
    "recording": "Neşet Ertaş - Neredesin Sen",
    "audio": "voiced/Neşet Ertaş - Neredesin Sen.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13105241,
    "audioModifiedNs": 1791085663429355524,
    "windowsSeconds": [
      114.64,
      212.91
    ],
    "targets": {
      "rmsDbfs": -29.299,
      "crestDb": 20.857,
      "lowEnergyShare": 0.3857,
      "highEnergyShare": 0.0112,
      "sideMidRmsRatio": 0.1048
    }
  },
  "turkish-arabesque": {
    "recording": "Orhan Gencebay - Batsın Bu Dünya",
    "audio": "voiced/Orhan Gencebay - Batsın Bu Dünya.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13470949,
    "audioModifiedNs": 1791162121031283190,
    "windowsSeconds": [
      117.85,
      218.86
    ],
    "targets": {
      "rmsDbfs": -25.045,
      "crestDb": 16.66,
      "lowEnergyShare": 0.3054,
      "highEnergyShare": 0.2294,
      "sideMidRmsRatio": 0.6769
    }
  },
  "turkish-roman-halk": {
    "recording": "Selim Sesler - Keşan'a Giden Yollar",
    "audio": "samples/Selim Sesler - Keşan'a Giden Yollar.mp3",
    "source": "original-with-vocals",
    "audioBytes": 7270663,
    "audioModifiedNs": 1791077800693563754,
    "windowsSeconds": [
      104.46,
      194.01
    ],
    "targets": {
      "rmsDbfs": -16.348,
      "crestDb": 13.87,
      "lowEnergyShare": 0.0688,
      "highEnergyShare": 0.1579,
      "sideMidRmsRatio": 0.0001
    }
  },
  "turkish-ottoman-classical": {
    "recording": "Tanburi Cemil Bey - Hicaz Taksim",
    "audio": "voiced/Tanburi Cemil Bey - Hicaz Taksim.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8252878,
    "audioModifiedNs": 1791148962154393696,
    "windowsSeconds": [
      72.19,
      134.07
    ],
    "targets": {
      "rmsDbfs": -19.795,
      "crestDb": 17.425,
      "lowEnergyShare": 0.0863,
      "highEnergyShare": 0.0005,
      "sideMidRmsRatio": 0.007
    }
  }
} satisfies ReferenceMixCatalog;
