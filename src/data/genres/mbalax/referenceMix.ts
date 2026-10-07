import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "mbalax-electronic-fusion": {
    "recording": "Baaba Maal - Fulani Rock",
    "audio": "voiced/Baaba Maal - Fulani Rock.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11351901,
    "audioModifiedNs": 1791080330343170154,
    "windowsSeconds": [
      99.31,
      184.43
    ],
    "targets": {
      "rmsDbfs": -13.271,
      "crestDb": 12.171,
      "lowEnergyShare": 0.6174,
      "highEnergyShare": 0.041,
      "sideMidRmsRatio": 0.4457
    }
  },
  "mbalax-sabar-heavy": {
    "recording": "Doudou N'Diaye Rose - Rose Rhythm",
    "audio": "voiced/Doudou N'Diaye Rose - Rose Rhythm.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10222407,
    "audioModifiedNs": 1791099628928796185,
    "windowsSeconds": [
      89.43,
      166.08
    ],
    "targets": {
      "rmsDbfs": -27.406,
      "crestDb": 20.566,
      "lowEnergyShare": 0.4076,
      "highEnergyShare": 0.081,
      "sideMidRmsRatio": 0.5131
    }
  },
  "mbalax-pop-mbalax": {
    "recording": "Youssou N'Dour & Neneh Cherry - 7 Seconds",
    "audio": "voiced/Youssou N'Dour & Neneh Cherry - 7 Seconds.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10843055,
    "audioModifiedNs": 1791138682912240036,
    "windowsSeconds": [
      94.85,
      176.16
    ],
    "targets": {
      "rmsDbfs": -17.902,
      "crestDb": 15.314,
      "lowEnergyShare": 0.6114,
      "highEnergyShare": 0.0426,
      "sideMidRmsRatio": 0.5791
    }
  },
  "mbalax-classic": {
    "recording": "Youssou N'Dour - Birima",
    "audio": "voiced/Youssou N'Dour - Birima.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14652822,
    "audioModifiedNs": 1791105023759600240,
    "windowsSeconds": [
      128.19,
      238.06
    ],
    "targets": {
      "rmsDbfs": -17.372,
      "crestDb": 15.753,
      "lowEnergyShare": 0.3986,
      "highEnergyShare": 0.0513,
      "sideMidRmsRatio": 0.0034
    }
  }
} satisfies ReferenceMixCatalog;
