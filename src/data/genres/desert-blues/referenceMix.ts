import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "desert-blues-sahel-guitar": {
    "recording": "Ali Farka Touré - Savane",
    "audio": "samples/Ali Farka Touré - Savane.mp3",
    "source": "original-with-vocals",
    "audioBytes": 11352028,
    "audioModifiedNs": 1791077155083382499,
    "windowsSeconds": [
      163.16,
      303.01
    ],
    "targets": {
      "rmsDbfs": -18.425,
      "crestDb": 17.505,
      "lowEnergyShare": 0.3672,
      "highEnergyShare": 0.0943,
      "sideMidRmsRatio": 0.3971
    }
  },
  "desert-blues-psychedelic-desert": {
    "recording": "Mdou Moctar - Afrique Victime",
    "audio": "voiced/Mdou Moctar - Afrique Victime.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11522229,
    "audioModifiedNs": 1791152375894050803,
    "windowsSeconds": [
      100.8,
      187.2
    ],
    "targets": {
      "rmsDbfs": -12.648,
      "crestDb": 11.446,
      "lowEnergyShare": 0.6008,
      "highEnergyShare": 0.1349,
      "sideMidRmsRatio": 0.3456
    }
  },
  "desert-blues-acoustic-tuareg": {
    "recording": "Tinariwen - Imidiwan Ma Tenam",
    "audio": "voiced/Tinariwen - Imidiwan Ma Tenam.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11245416,
    "audioModifiedNs": 1791148698324680696,
    "windowsSeconds": [
      98.37,
      182.69
    ],
    "targets": {
      "rmsDbfs": -13.502,
      "crestDb": 12.082,
      "lowEnergyShare": 0.5305,
      "highEnergyShare": 0.0321,
      "sideMidRmsRatio": 0.4605
    }
  },
  "desert-blues-tishoumaren": {
    "recording": "Tinariwen - Sastanàqqàm",
    "audio": "voiced/Tinariwen - Sastanàqqàm.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8117939,
    "audioModifiedNs": 1791103179749282618,
    "windowsSeconds": [
      71.01,
      131.87
    ],
    "targets": {
      "rmsDbfs": -16.121,
      "crestDb": 14.187,
      "lowEnergyShare": 0.8272,
      "highEnergyShare": 0.0228,
      "sideMidRmsRatio": 0.2163
    }
  }
} satisfies ReferenceMixCatalog;
