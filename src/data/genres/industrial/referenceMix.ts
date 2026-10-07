import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "industrial-industrial-metal": {
    "recording": "Ministry - Just One Fix",
    "audio": "voiced/Ministry - Just One Fix.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11322732,
    "audioModifiedNs": 1791152505601811286,
    "windowsSeconds": [
      99.05,
      183.95
    ],
    "targets": {
      "rmsDbfs": -18.844,
      "crestDb": 14.243,
      "lowEnergyShare": 0.3951,
      "highEnergyShare": 0.4611,
      "sideMidRmsRatio": 0.5479
    }
  },
  "industrial-industrial-rock": {
    "recording": "Nine Inch Nails - Wish",
    "audio": "voiced/Nine Inch Nails - Wish.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8996788,
    "audioModifiedNs": 1791159572759148602,
    "windowsSeconds": [
      78.7,
      146.16
    ],
    "targets": {
      "rmsDbfs": -23.855,
      "crestDb": 14.726,
      "lowEnergyShare": 0.3455,
      "highEnergyShare": 0.2179,
      "sideMidRmsRatio": 0.4541
    }
  },
  "industrial-industrial-dance": {
    "recording": "Nitzer Ebb - Join in the Chant",
    "audio": "samples/Nitzer Ebb - Join in the Chant.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6552429,
    "audioModifiedNs": 1791077331179323283,
    "windowsSeconds": [
      95.46,
      177.28
    ],
    "targets": {
      "rmsDbfs": -16.042,
      "crestDb": 13.249,
      "lowEnergyShare": 0.6337,
      "highEnergyShare": 0.135,
      "sideMidRmsRatio": 0.2136
    }
  },
  "industrial-early-industrial": {
    "recording": "Throbbing Gristle - Hamburger Lady",
    "audio": "samples/Throbbing Gristle - Hamburger Lady.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6147533,
    "audioModifiedNs": 1791139685712871663,
    "windowsSeconds": [
      87.17,
      161.88
    ],
    "targets": {
      "rmsDbfs": -21.837,
      "crestDb": 18.567,
      "lowEnergyShare": 0.7507,
      "highEnergyShare": 0.0119,
      "sideMidRmsRatio": 0.3892
    }
  }
} satisfies ReferenceMixCatalog;
