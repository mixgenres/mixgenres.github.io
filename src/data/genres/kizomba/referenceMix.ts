import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "kizomba-semba-derived": {
    "recording": "Bonga - Mona Ki Ngi Xica",
    "audio": "voiced/Bonga - Mona Ki Ngi Xica.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11811652,
    "audioModifiedNs": 1791161108100109226,
    "windowsSeconds": [
      103.33,
      191.9
    ],
    "targets": {
      "rmsDbfs": -21.13,
      "crestDb": 13.743,
      "lowEnergyShare": 0.8713,
      "highEnergyShare": 0.0051,
      "sideMidRmsRatio": 0.3147
    }
  },
  "kizomba-urban-kiz": {
    "recording": "DJ Snakes feat. Puto X - Memories",
    "audio": "voiced/DJ Snakes feat. Puto X - Memories.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 8933005,
    "audioModifiedNs": 1791157453126899471,
    "windowsSeconds": [
      78.14,
      145.12
    ],
    "targets": {
      "rmsDbfs": -12.396,
      "crestDb": 11.655,
      "lowEnergyShare": 0.9212,
      "highEnergyShare": 0.0342,
      "sideMidRmsRatio": 0.2164
    }
  },
  "kizomba-tarraxinha": {
    "recording": "DJ Znobia - Marimba",
    "audio": "voiced/DJ Znobia - Marimba.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9367733,
    "audioModifiedNs": 1791141555760412408,
    "windowsSeconds": [
      81.94,
      152.18
    ],
    "targets": {
      "rmsDbfs": -16.485,
      "crestDb": 15.474,
      "lowEnergyShare": 0.7098,
      "highEnergyShare": 0.0317,
      "sideMidRmsRatio": 0.0453
    }
  },
  "kizomba-fusion-kiz": {
    "recording": "David Carreira feat. Snoop Dogg - A Força Está em Nós",
    "audio": "voiced/David Carreira feat. Snoop Dogg - A Força Está em Nós.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7837939,
    "audioModifiedNs": 1791080830015706762,
    "windowsSeconds": [
      68.56,
      127.32
    ],
    "targets": {
      "rmsDbfs": -14.119,
      "crestDb": 13.614,
      "lowEnergyShare": 0.7565,
      "highEnergyShare": 0.108,
      "sideMidRmsRatio": 0.2542
    }
  },
  "kizomba-traditional": {
    "recording": "Eduardo Paim - Rosa Baila",
    "audio": "voiced/Eduardo Paim - Rosa Baila.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13117870,
    "audioModifiedNs": 1791104496137064271,
    "windowsSeconds": [
      114.76,
      213.13
    ],
    "targets": {
      "rmsDbfs": -19.334,
      "crestDb": 17.571,
      "lowEnergyShare": 0.6231,
      "highEnergyShare": 0.1966,
      "sideMidRmsRatio": 0.0065
    }
  },
  "kizomba-passada": {
    "recording": "Matias Damásio - Loucos",
    "audio": "samples/Matias Damásio - Loucos.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6526406,
    "audioModifiedNs": 1791077395745768252,
    "windowsSeconds": [
      93.38,
      173.43
    ],
    "targets": {
      "rmsDbfs": -11.531,
      "crestDb": 10.578,
      "lowEnergyShare": 0.6991,
      "highEnergyShare": 0.0313,
      "sideMidRmsRatio": 0.1927
    }
  },
  "kizomba-ghetto-zouk-crossover": {
    "recording": "Nelson Freitas - Rebound Chick",
    "audio": "samples/Nelson Freitas - Rebound Chick.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6814236,
    "audioModifiedNs": 1791139674790934516,
    "windowsSeconds": [
      97.08,
      180.29
    ],
    "targets": {
      "rmsDbfs": -14.288,
      "crestDb": 14.521,
      "lowEnergyShare": 0.4195,
      "highEnergyShare": 0.0513,
      "sideMidRmsRatio": 0.4895
    }
  }
} satisfies ReferenceMixCatalog;
