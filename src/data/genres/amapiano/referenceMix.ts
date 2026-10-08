import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "amapiano-vocal": {
    "recording": "DJ Maphorisa & Kabza De Small feat. Samthing Soweto - Amantombazane",
    "audio": "samples/DJ Maphorisa & Kabza De Small feat. Samthing Soweto - Amantombazane.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      126.02,
      234.03
    ],
    "targets": {
      "rmsDbfs": -23.254,
      "crestDb": 14.006,
      "lowEnergyShare": 0.4583,
      "highEnergyShare": 0.0098,
      "sideMidRmsRatio": 0.1957
    }
  },
  "amapiano-log-drum-heavy": {
    "recording": "Focalistic - Ke Star",
    "audio": "samples/Focalistic - Ke Star.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      94.51,
      175.51
    ],
    "targets": {
      "rmsDbfs": -11.362,
      "crestDb": 10.804,
      "lowEnergyShare": 0.9297,
      "highEnergyShare": 0.0292,
      "sideMidRmsRatio": 0.0684
    }
  },
  "amapiano-classic": {
    "recording": "Kabza De Small - Sponono",
    "audio": "samples/Kabza De Small - Sponono.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      140.17,
      260.32
    ],
    "targets": {
      "rmsDbfs": -22.054,
      "crestDb": 16.157,
      "lowEnergyShare": 0.6055,
      "highEnergyShare": 0.0088,
      "sideMidRmsRatio": 0.2085
    }
  },
  "amapiano-private-school": {
    "recording": "Kelvin Momo - Abantu",
    "audio": "samples/Kelvin Momo - Abantu.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      181.53,
      337.12
    ],
    "targets": {
      "rmsDbfs": -13.324,
      "crestDb": 12.321,
      "lowEnergyShare": 0.8983,
      "highEnergyShare": 0.0219,
      "sideMidRmsRatio": 0.125
    }
  },
  "amapiano-kwaito-crossover": {
    "recording": "M'Du - Umazola",
    "audio": "samples/M'Du - Umazola.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      122.5,
      227.5
    ],
    "targets": {
      "rmsDbfs": -14.131,
      "crestDb": 12.481,
      "lowEnergyShare": 0.7645,
      "highEnergyShare": 0.0335,
      "sideMidRmsRatio": 0.2112
    }
  }
} satisfies ReferenceMixCatalog;
