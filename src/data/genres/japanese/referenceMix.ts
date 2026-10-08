import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "japanese-gagaku": {
    "recording": "Imperial Household Agency - Etenraku",
    "audio": "samples/Imperial Household Agency - Etenraku.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      202.92,
      376.86
    ],
    "targets": {
      "rmsDbfs": -15.938,
      "crestDb": 13.42,
      "lowEnergyShare": 0.0009,
      "highEnergyShare": 0.4667,
      "sideMidRmsRatio": 0.7824
    }
  },
  "japanese-shakuhachi": {
    "recording": "Katsuya Yokoyama - Shika no Tōne",
    "audio": "samples/Katsuya Yokoyama - Shika no Tōne.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      199.62,
      370.72
    ],
    "targets": {
      "rmsDbfs": -27.315,
      "crestDb": 17.266,
      "lowEnergyShare": 0.0011,
      "highEnergyShare": 0.0717,
      "sideMidRmsRatio": 1.2168
    }
  },
  "japanese-taiko": {
    "recording": "Kodo - O-Daiko",
    "audio": "samples/Kodo - O-Daiko.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      176.52,
      327.82
    ],
    "targets": {
      "rmsDbfs": -22.973,
      "crestDb": 13.015,
      "lowEnergyShare": 0.7611,
      "highEnergyShare": 0.0012,
      "sideMidRmsRatio": 0.4989
    }
  },
  "japanese-koto-sankyoku": {
    "recording": "Michio Miyagi - Haru no Umi",
    "audio": "samples/Michio Miyagi - Haru no Umi.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      163.83,
      304.26
    ],
    "targets": {
      "rmsDbfs": -33.256,
      "crestDb": 16.465,
      "lowEnergyShare": 0.448,
      "highEnergyShare": 0.0085,
      "sideMidRmsRatio": 0.3579
    }
  },
  "japanese-shamisen-minyo": {
    "recording": "Takio Ito - Soran Bushi",
    "audio": "samples/Takio Ito - Soran Bushi.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      65.41,
      121.47
    ],
    "targets": {
      "rmsDbfs": -28.458,
      "crestDb": 17.013,
      "lowEnergyShare": 0.0827,
      "highEnergyShare": 0.0492,
      "sideMidRmsRatio": 0.4723
    }
  }
} satisfies ReferenceMixCatalog;
