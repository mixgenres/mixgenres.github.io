import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "country-bluegrass": {
    "recording": "Bill Monroe - Blue Moon of Kentucky",
    "audio": "voiced/Bill Monroe - Blue Moon of Kentucky.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7238325,
    "audioModifiedNs": 1791089781749172188,
    "windowsSeconds": [
      63.31,
      117.58
    ],
    "targets": {
      "rmsDbfs": -24.633,
      "crestDb": 17.1,
      "lowEnergyShare": 0.2152,
      "highEnergyShare": 0.0623,
      "sideMidRmsRatio": 0.002
    }
  },
  "country-western-swing": {
    "recording": "Bob Wills - San Antonio Rose",
    "audio": "voiced/Bob Wills - San Antonio Rose.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 5294742,
    "audioModifiedNs": 1791084620113200764,
    "windowsSeconds": [
      46.31,
      86.0
    ],
    "targets": {
      "rmsDbfs": -16.33,
      "crestDb": 15.34,
      "lowEnergyShare": 0.2699,
      "highEnergyShare": 0.0365,
      "sideMidRmsRatio": 0.0023
    }
  },
  "country-bakersfield": {
    "recording": "Buck Owens - Act Naturally",
    "audio": "voiced/Buck Owens - Act Naturally.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 5662420,
    "audioModifiedNs": 1791141428211885947,
    "windowsSeconds": [
      49.52,
      91.97
    ],
    "targets": {
      "rmsDbfs": -21.586,
      "crestDb": 18.437,
      "lowEnergyShare": 0.621,
      "highEnergyShare": 0.1036,
      "sideMidRmsRatio": 0.7795
    }
  },
  "country-honky-tonk": {
    "recording": "Hank Williams - Honky Tonkin'",
    "audio": "voiced/Hank Williams - Honky Tonkin'.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6527701,
    "audioModifiedNs": 1791102970658056401,
    "windowsSeconds": [
      57.09,
      106.03
    ],
    "targets": {
      "rmsDbfs": -20.085,
      "crestDb": 18.004,
      "lowEnergyShare": 0.4785,
      "highEnergyShare": 0.0338,
      "sideMidRmsRatio": 0.0626
    }
  },
  "country-americana": {
    "recording": "Jason Isbell - Cover Me Up",
    "audio": "voiced/Jason Isbell - Cover Me Up.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13144976,
    "audioModifiedNs": 1791082328858165380,
    "windowsSeconds": [
      115.0,
      213.57
    ],
    "targets": {
      "rmsDbfs": -35.672,
      "crestDb": 17.167,
      "lowEnergyShare": 0.6388,
      "highEnergyShare": 0.0272,
      "sideMidRmsRatio": 0.2028
    }
  },
  "country-country-pop": {
    "recording": "Shania Twain - Man! I Feel Like a Woman!",
    "audio": "voiced/Shania Twain - Man! I Feel Like a Woman!.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9401089,
    "audioModifiedNs": 1791081568822427134,
    "windowsSeconds": [
      82.23,
      152.72
    ],
    "targets": {
      "rmsDbfs": -17.622,
      "crestDb": 16.346,
      "lowEnergyShare": 0.2272,
      "highEnergyShare": 0.2559,
      "sideMidRmsRatio": 0.4739
    }
  },
  "country-outlaw": {
    "recording": "Willie Nelson - Whiskey River",
    "audio": "voiced/Willie Nelson - Whiskey River.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6894497,
    "audioModifiedNs": 1791137624623925077,
    "windowsSeconds": [
      60.3,
      111.99
    ],
    "targets": {
      "rmsDbfs": -18.475,
      "crestDb": 13.78,
      "lowEnergyShare": 0.5337,
      "highEnergyShare": 0.0685,
      "sideMidRmsRatio": 0.0032
    }
  }
} satisfies ReferenceMixCatalog;
