import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "amapiano-vocal": {
    "recording": "DJ Maphorisa & Kabza De Small feat. Samthing Soweto - Amantombazane",
    "audio": "voiced/DJ Maphorisa & Kabza De Small feat. Samthing Soweto - Amantombazane.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14405218,
    "audioModifiedNs": 1791085520929086894,
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
    "audio": "voiced/Focalistic - Ke Star.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10803322,
    "audioModifiedNs": 1791142233953769300,
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
    "audio": "voiced/Kabza De Small - Sponono.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 16022738,
    "audioModifiedNs": 1791102574174952346,
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
    "audio": "voiced/Kelvin Momo - Abantu.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 20748719,
    "audioModifiedNs": 1791161532021562978,
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
    "audio": "voiced/M'Du - Umazola.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14002791,
    "audioModifiedNs": 1791094854130259322,
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
