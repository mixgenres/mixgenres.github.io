import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "ethiopian-traditional-modal": {
    "recording": "Asnakech Worku - Tizita",
    "audio": "samples/Asnakech Worku - Tizita.mp3",
    "source": "original-with-vocals",
    "audioBytes": 11358271,
    "audioModifiedNs": 1791077190299602021,
    "windowsSeconds": [
      164.62,
      305.73
    ],
    "targets": {
      "rmsDbfs": -19.911,
      "crestDb": 15.891,
      "lowEnergyShare": 0.0079,
      "highEnergyShare": 0.0102,
      "sideMidRmsRatio": 0.3988
    }
  },
  "ethiopian-ethiopian-funk": {
    "recording": "Hailu Mergia - Musicawi Silt",
    "audio": "voiced/Hailu Mergia - Musicawi Silt.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9175430,
    "audioModifiedNs": 1791137270428235673,
    "windowsSeconds": [
      80.26,
      149.05
    ],
    "targets": {
      "rmsDbfs": -14.54,
      "crestDb": 13.942,
      "lowEnergyShare": 0.3001,
      "highEnergyShare": 0.3669,
      "sideMidRmsRatio": 0.0866
    }
  },
  "ethiopian-tizita": {
    "recording": "Mahmoud Ahmed - Tizita",
    "audio": "voiced/Mahmoud Ahmed - Tizita.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 21543876,
    "audioModifiedNs": 1791091193668376723,
    "windowsSeconds": [
      188.49,
      350.04
    ],
    "targets": {
      "rmsDbfs": -14.179,
      "crestDb": 12.608,
      "lowEnergyShare": 0.9251,
      "highEnergyShare": 0.0094,
      "sideMidRmsRatio": 0.1663
    }
  },
  "ethiopian-modern-ethio-jazz": {
    "recording": "Mulatu Astatke & The Heliocentrics - Cha Cha",
    "audio": "voiced/Mulatu Astatke & The Heliocentrics - Cha Cha.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11166029,
    "audioModifiedNs": 1791139301772269396,
    "windowsSeconds": [
      97.68,
      181.4
    ],
    "targets": {
      "rmsDbfs": -14.219,
      "crestDb": 12.908,
      "lowEnergyShare": 0.5734,
      "highEnergyShare": 0.0769,
      "sideMidRmsRatio": 0.0504
    }
  },
  "ethiopian-ethio-jazz": {
    "recording": "Mulatu Astatke - Yèkèrmo Sèw",
    "audio": "voiced/Mulatu Astatke - Yèkèrmo Sèw.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10244392,
    "audioModifiedNs": 1791082438234263426,
    "windowsSeconds": [
      89.62,
      166.43
    ],
    "targets": {
      "rmsDbfs": -17.68,
      "crestDb": 15.244,
      "lowEnergyShare": 0.4361,
      "highEnergyShare": 0.2285,
      "sideMidRmsRatio": 0.0038
    }
  }
} satisfies ReferenceMixCatalog;
