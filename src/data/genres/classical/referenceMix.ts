import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "classical-baroque": {
    "recording": "J.S. Bach - Brandenburg Concerto No. 3",
    "audio": "samples/J.S. Bach - Brandenburg Concerto No. 3.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      219.27,
      407.22
    ],
    "targets": {
      "rmsDbfs": -29.261,
      "crestDb": 18.185,
      "lowEnergyShare": 0.2881,
      "highEnergyShare": 0.1103,
      "sideMidRmsRatio": 0.8355
    }
  }
} satisfies ReferenceMixCatalog;
