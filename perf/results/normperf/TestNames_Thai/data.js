window.BENCHMARK_DATA = {
  "lastUpdate": 1685111904594,
  "repoUrl": "https://github.com/jalaj-microsoft/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "80ee559205dd165c2d647610376d6f9a06822ae4",
          "message": "ICU-21843 Add ICU4C performance tests to continuous integration\n\nSee #1987",
          "timestamp": "2022-03-07T12:53:44-08:00",
          "tree_id": "7da686bd1662079612215dc8b0f27437626720c3",
          "url": "https://github.com/unicode-org/icu/commit/80ee559205dd165c2d647610376d6f9a06822ae4"
        },
        "date": 1646687318894,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.9258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.8884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.9725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avetlov@riverlogic.com",
            "name": "Alexey Vetlov",
            "username": "avetlov"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "1393face12f7205a133a63f13bb592f561b4abfb",
          "message": "ICU-21768 Fixed (u_snprintf improperly counts the required buffer size). Modified TestSnprintf to test the null buffer case.",
          "timestamp": "2022-03-08T23:09:54Z",
          "tree_id": "586d92fe70bb8985ec51cb46c5c3b4f26dadd05c",
          "url": "https://github.com/unicode-org/icu/commit/1393face12f7205a133a63f13bb592f561b4abfb"
        },
        "date": 1646781675392,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.9993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "31871cc14f5b55a53511884d9787494905a80a00",
          "message": "ICU-21801 Fix array comparison warning in uspoof_impl.cpp\n\nSee #2015",
          "timestamp": "2022-03-08T15:21:53-08:00",
          "tree_id": "bd6da903ad6a15330b5714ac76b55b1000680a13",
          "url": "https://github.com/unicode-org/icu/commit/31871cc14f5b55a53511884d9787494905a80a00"
        },
        "date": 1646782436922,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.6697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.9218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.3994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.5834,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "f57ef9ebf72d889e9b93be90fbc020fae0e374ae",
          "message": "ICU-21527 Assert pattern equality instead of object equality",
          "timestamp": "2022-03-08T15:31:52-08:00",
          "tree_id": "ecf2895c54243a8853b544b889a8c7677e6381b5",
          "url": "https://github.com/unicode-org/icu/commit/f57ef9ebf72d889e9b93be90fbc020fae0e374ae"
        },
        "date": 1646783075328,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.85,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f79f03dad5ffcd0e7ac9e1bcbd05fc38bff8e3a2",
          "message": "ICU-21322 Add parse and format methods for DecimalQuantity with exponent\n\nSee #2012",
          "timestamp": "2022-03-08T15:56:50-08:00",
          "tree_id": "e99f29d061b511c3a728814891002ca64d0008cd",
          "url": "https://github.com/unicode-org/icu/commit/f79f03dad5ffcd0e7ac9e1bcbd05fc38bff8e3a2"
        },
        "date": 1646784562165,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3299,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.0286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel.bevenius@gmail.com",
            "name": "Daniel Bevenius",
            "username": "danbev"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "55a51fa9bde41598fb70c5931d313e908f21ca65",
          "message": "ICU-21784 suppress -Wunused-function warning in unistr.cpp\n\nThis commit adds an ignore of the unused function\nuprv_UnicodeStringDummy.",
          "timestamp": "2022-03-09T03:31:37Z",
          "tree_id": "6f7b710d4a93a3e7597bccfba1321df26f0084ee",
          "url": "https://github.com/unicode-org/icu/commit/55a51fa9bde41598fb70c5931d313e908f21ca65"
        },
        "date": 1646797349457,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2399,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexandermv@gmail.com",
            "name": "Alexander Morozov",
            "username": "alxrmorozov"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "234cbe2c17034c68d6dd6df09fda79a052f0a238",
          "message": "ICU-21805 Remove useless check",
          "timestamp": "2022-03-09T03:37:37Z",
          "tree_id": "9e1ab2725eb42216e690fc018fce2b085fddb70f",
          "url": "https://github.com/unicode-org/icu/commit/234cbe2c17034c68d6dd6df09fda79a052f0a238"
        },
        "date": 1646797891505,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.4939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "77e0c9e371994b739e4049ab4dc476ab8b8c5719",
          "message": "ICU-21900 Adjusts performance alert threshold to 150%, i.e. the alert only is\ntriggered if the current measured execution time is 50% higher than the previous\ntime.\nThe current setting of 100% means that even a 1% increase from previous time\ntriggers the alert already.",
          "timestamp": "2022-03-09T11:10:43-08:00",
          "tree_id": "430a4aa2ed3e70bf913386f73e673d6391f87c4b",
          "url": "https://github.com/unicode-org/icu/commit/77e0c9e371994b739e4049ab4dc476ab8b8c5719"
        },
        "date": 1646853803745,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.9806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.8845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 12.048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.2362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.4364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "bb822ba38a8b8e0ebd33d8311579043bd7978794",
          "message": "ICU-21936 Make the internal units converters public\n\nSee #2021",
          "timestamp": "2022-03-09T22:42:04+01:00",
          "tree_id": "1e1a52e65f91a8ea8454578ce854063b1be82290",
          "url": "https://github.com/unicode-org/icu/commit/bb822ba38a8b8e0ebd33d8311579043bd7978794"
        },
        "date": 1646862788187,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.1308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.0873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.3222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.2954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.3141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "571d12abfbe73a974fbe9d260b85975cbfd5f43c",
          "message": "ICU-21409 add word for bell to laodict",
          "timestamp": "2022-03-09T15:14:42-08:00",
          "tree_id": "360a095baf4597f47ff422696cb50d2e95e1e59d",
          "url": "https://github.com/unicode-org/icu/commit/571d12abfbe73a974fbe9d260b85975cbfd5f43c"
        },
        "date": 1646868357330,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.0615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mspector@fastmail.com",
            "name": "Michael Spector",
            "username": "spektom"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e730bce02f15fecc290fe042cdf6f74cc9a78a4c",
          "message": "ICU-21815 Remove unused line",
          "timestamp": "2022-03-10T01:00:26Z",
          "tree_id": "d9fdd09810b4069b89b80efbb1e108c11f85f1bb",
          "url": "https://github.com/unicode-org/icu/commit/e730bce02f15fecc290fe042cdf6f74cc9a78a4c"
        },
        "date": 1646874635278,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.8577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.961,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.8686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.3553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.3943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.4385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "8a5f045992eab8898eff5f6628650e75b8f13bc3",
          "message": "ICU-21900 Fix issue filtering in commit checker",
          "timestamp": "2022-03-09T19:20:02-08:00",
          "tree_id": "40c23771b9eb09cead8bd04f2a099e81767191cb",
          "url": "https://github.com/unicode-org/icu/commit/8a5f045992eab8898eff5f6628650e75b8f13bc3"
        },
        "date": 1646883004855,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.1932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.5759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.5935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "996378821c4ee89e68dc74183359e00f7130de0d",
          "message": "ICU-21839 Add ICU4J test that ISO8601 inherits patterns/symbols grom Gregorian",
          "timestamp": "2022-03-10T09:37:21-08:00",
          "tree_id": "0106e37264406db1343e6cef2ec0b5afbf40768c",
          "url": "https://github.com/unicode-org/icu/commit/996378821c4ee89e68dc74183359e00f7130de0d"
        },
        "date": 1646934491663,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.7288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.7052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.2401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.2176,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "f374427f6018056a6643c6519bbfadf869755ae0",
          "message": "ICU-21900 integrate CLDR release-41-beta1 to ICU main for 71rc",
          "timestamp": "2022-03-10T11:17:09-08:00",
          "tree_id": "52377cd9d7b956ff5192e4fa0fe3d53b630e9a63",
          "url": "https://github.com/unicode-org/icu/commit/f374427f6018056a6643c6519bbfadf869755ae0"
        },
        "date": 1646940592106,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.7695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.8494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.3032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.2849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.3105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7fe330119e6b5503232cfd780869f5ff685ecdea",
          "message": "ICU-21900 ICU4C 71 change report\n\nSee #2024. Includes update to generator that removes the minor version indication from the reports.",
          "timestamp": "2022-03-10T15:50:45-08:00",
          "tree_id": "006f83812ce403ec53e3769323919eb155941a7e",
          "url": "https://github.com/unicode-org/icu/commit/7fe330119e6b5503232cfd780869f5ff685ecdea"
        },
        "date": 1646956857307,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.7076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "19c13048d24f0dc010d48249331913bf436fedb0",
          "message": "ICU-21900 Update ICU4J Change report (BRS#20)\n\nUpdate to show only major release numbers.",
          "timestamp": "2022-03-10T17:58:16-08:00",
          "tree_id": "eceff86f8dff9a267d5dfed594393cb554113fef",
          "url": "https://github.com/unicode-org/icu/commit/19c13048d24f0dc010d48249331913bf436fedb0"
        },
        "date": 1646964486695,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 12.0679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 12.0835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 12.1182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.6374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.6317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.6898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b5f10c4a1c19a0fe50bc4faa73062df4ed7d41fc",
          "message": "ICU-21332 Add tests from ICU4C TestDelimiters() into related ICU4J test",
          "timestamp": "2022-03-10T21:20:11-08:00",
          "tree_id": "3155b8800258c99573d9556c3e7be8ede960b1ba",
          "url": "https://github.com/unicode-org/icu/commit/b5f10c4a1c19a0fe50bc4faa73062df4ed7d41fc"
        },
        "date": 1646976608277,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.4574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.5213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.5119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.9481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.0675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.1018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zhin@google.com",
            "name": "Ng Zhi An",
            "username": "ngzhian"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e0bb2ccdeb2d14000c2af63fc530b019f9361200",
          "message": "ICU-21844 Fix variable shadowing",
          "timestamp": "2022-03-11T19:10:53Z",
          "tree_id": "e2752ea8ab56cc092a5a06e9079d324bc5af7500",
          "url": "https://github.com/unicode-org/icu/commit/e0bb2ccdeb2d14000c2af63fc530b019f9361200"
        },
        "date": 1647026489918,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.9259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.4658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.6748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.5549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "df6a8c877c76a120846323e7662016d534d0690f",
          "message": "ICU-13619 Now that UDATPG_NARROW is @stable, can reference it in header",
          "timestamp": "2022-03-11T13:06:50-08:00",
          "tree_id": "3b6dbaef199f1c19fb5e03bbf08bd8e40c6d29a6",
          "url": "https://github.com/unicode-org/icu/commit/df6a8c877c76a120846323e7662016d534d0690f"
        },
        "date": 1647033449682,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.1847,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "29111fd19582bb995f6a3a8052d21e4fd756b3b4",
          "message": "ICU-21824 make the Unicode license match exactly\n\nThe ICU copy of the Unicode license was missing some lines that are\nconsidered part of the license text.\n\nSee https://github.com/unicode-org/template-repo/blob/main/LICENSE\nand https://www.unicode.org/license.txt",
          "timestamp": "2022-03-14T19:50:44Z",
          "tree_id": "fc1f892d2ef84e0169155887767528a32ca956a5",
          "url": "https://github.com/unicode-org/icu/commit/29111fd19582bb995f6a3a8052d21e4fd756b3b4"
        },
        "date": 1647288113545,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "bfca3ccaac707f5168f5888b2446a4518426bb04",
          "message": "ICU-21875 improve C API coverage",
          "timestamp": "2022-03-15T05:07:59Z",
          "tree_id": "8225a14dcf2fd2abc50cc44b8cbc4b0d4b5643be",
          "url": "https://github.com/unicode-org/icu/commit/bfca3ccaac707f5168f5888b2446a4518426bb04"
        },
        "date": 1647321524872,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "811351f67cca8291f0404d9ee30f0acf191b926b",
          "message": "ICU-21900 BRS71 Updated serialization test data for 71.1",
          "timestamp": "2022-03-15T09:47:57-04:00",
          "tree_id": "6fec003664bd37e4fd2da820024913a5620c6207",
          "url": "https://github.com/unicode-org/icu/commit/811351f67cca8291f0404d9ee30f0acf191b926b"
        },
        "date": 1647352822945,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "5b4559df24b8b610998b9c3596534dbcf6744bc4",
          "message": "ICU-21900 BRS71 Cleanup import statements in ICU4J",
          "timestamp": "2022-03-15T09:47:25-04:00",
          "tree_id": "710673993a1d12aa96e3404892847295c45f2e07",
          "url": "https://github.com/unicode-org/icu/commit/5b4559df24b8b610998b9c3596534dbcf6744bc4"
        },
        "date": 1647353094300,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.5198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.6159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.0123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.9901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dbf7c20be650d9425ba8f25784c3f70b4c07f838",
          "message": "ICU-21942 Fix Kosovo 3-letter code to be XKK for uloc_getISO3Country etc.",
          "timestamp": "2022-03-15T10:59:13-07:00",
          "tree_id": "33cac0a5222e84bdd8a8acd8d8f0092e4f2a2765",
          "url": "https://github.com/unicode-org/icu/commit/dbf7c20be650d9425ba8f25784c3f70b4c07f838"
        },
        "date": 1647367836366,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.2602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shaobero@adobe.com",
            "name": "shaobero",
            "username": "shaobero"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b1269c91211deab8f94c3cf85accb51e5a71ca5c",
          "message": "ICU-21823 Adding changes to fix charset detection incase of no match",
          "timestamp": "2022-03-15T21:47:40Z",
          "tree_id": "4dccceca277645512aea849db22a064750395d60",
          "url": "https://github.com/unicode-org/icu/commit/b1269c91211deab8f94c3cf85accb51e5a71ca5c"
        },
        "date": 1647381708666,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3016,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.6895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.6957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "f30956fc9c9fd9e83189ac1c8b372dea0832eb90",
          "message": "ICU-21840 Fix formatting Aliases\n\nSee #2016",
          "timestamp": "2022-03-15T23:27:43+01:00",
          "tree_id": "effd861fbdf9feda8b88ac7df6e6337ffc160e42",
          "url": "https://github.com/unicode-org/icu/commit/f30956fc9c9fd9e83189ac1c8b372dea0832eb90"
        },
        "date": 1647383917207,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.5481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.5478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.5136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.0188,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.2042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "741bbddcf9279f41385862be8913ed13b9e342c0",
          "message": "ICU-21900 BRS71RC Update version number and regenerate configure",
          "timestamp": "2022-03-15T18:26:10-05:00",
          "tree_id": "1b2b5e930f41b85f81e6baf2dc1b46dda2462bd9",
          "url": "https://github.com/unicode-org/icu/commit/741bbddcf9279f41385862be8913ed13b9e342c0"
        },
        "date": 1647387655952,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.8378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 8.9253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 8.9134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 8.9703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "33c9b61b26250e9fe39e098f9f131549d9aa516f",
          "message": "ICU-21871 Make behavior consistent on list format of empty strings",
          "timestamp": "2022-03-15T18:11:57-07:00",
          "tree_id": "fecddd3c2aad1ff68252adb1d70169a10776b5b8",
          "url": "https://github.com/unicode-org/icu/commit/33c9b61b26250e9fe39e098f9f131549d9aa516f"
        },
        "date": 1647393858799,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.1582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.6041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.8825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.2374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.6416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "633070497465bea1d19d66ad2162a1ec5f4bdda3",
          "message": "ICU-21944 Sync recent uloc_getLanguage/Countries updates to ICU4J; add \"mo\" mapping for C",
          "timestamp": "2022-03-16T09:01:59-07:00",
          "tree_id": "3ddb1ecd0ec14e15c35b4d94a5ec8352fd487ac8",
          "url": "https://github.com/unicode-org/icu/commit/633070497465bea1d19d66ad2162a1ec5f4bdda3"
        },
        "date": 1647447652614,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.2102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 8.897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 8.8943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 8.9099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8575c0dacef68253329608650b25412e6db7ca78",
          "message": "ICU-21900 check non-stable API macros, move class boilerplate out of conditionals",
          "timestamp": "2022-03-16T09:03:05-07:00",
          "tree_id": "a400718b943fe30bfd9da7c0ac9a99ed55899aa7",
          "url": "https://github.com/unicode-org/icu/commit/8575c0dacef68253329608650b25412e6db7ca78"
        },
        "date": 1647448009753,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "89c5d03023d5e96945188bc365a3d15e53441c86",
          "message": "ICU-21900 BRS71 ICU4J API signature file",
          "timestamp": "2022-03-16T12:36:40-04:00",
          "tree_id": "45a430aee8792898a7dc2a9bc6970172d466a6b5",
          "url": "https://github.com/unicode-org/icu/commit/89c5d03023d5e96945188bc365a3d15e53441c86"
        },
        "date": 1647449287762,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.2913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.2694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.2696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.7602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.8912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.0895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "0f49e5086850b0a5171000964a07b570749dc1c3",
          "message": "ICU-21843 Increase performance alert threshold to 200% to avoid false alerts\nfrom occasional spikes.",
          "timestamp": "2022-03-17T09:31:53-07:00",
          "tree_id": "ba17dca7ac476bc685815bcd81bb86df6a6f1d95",
          "url": "https://github.com/unicode-org/icu/commit/0f49e5086850b0a5171000964a07b570749dc1c3"
        },
        "date": 1647535341207,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.7631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.7081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.6571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.6257,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.5298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ee6433c297477453bf12cd1cdb83a58ef74aea4e",
          "message": "ICU-21949 tzdata2022a update in ICU",
          "timestamp": "2022-03-17T13:56:20-04:00",
          "tree_id": "e98ba87a01a2366cff5ef67b84a910d40deb71cf",
          "url": "https://github.com/unicode-org/icu/commit/ee6433c297477453bf12cd1cdb83a58ef74aea4e"
        },
        "date": 1647540388569,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.1063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ee6433c297477453bf12cd1cdb83a58ef74aea4e",
          "message": "ICU-21949 tzdata2022a update in ICU",
          "timestamp": "2022-03-17T13:56:20-04:00",
          "tree_id": "e98ba87a01a2366cff5ef67b84a910d40deb71cf",
          "url": "https://github.com/unicode-org/icu/commit/ee6433c297477453bf12cd1cdb83a58ef74aea4e"
        },
        "date": 1647542809523,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.0144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.0436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.5177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.4957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.5442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "09331b75bf4eba38e9e4eb3c06109c54ad940dd4",
          "message": "ICU-21901 BRS71GA Update version number",
          "timestamp": "2022-03-21T15:01:26-05:00",
          "tree_id": "5a68777dbd795812fe73f8d7d51314dfe6a1d6dd",
          "url": "https://github.com/unicode-org/icu/commit/09331b75bf4eba38e9e4eb3c06109c54ad940dd4"
        },
        "date": 1647893576652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.2993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.2959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d9cc717e2b93b8b27b84b2969c3bfc9a4d0a593",
          "message": "ICU-21956 Merge maint-71 to main\n\nMerging the maint/maint-71 branch into the main branch.",
          "timestamp": "2022-03-23T12:50:13-07:00",
          "tree_id": "5a68777dbd795812fe73f8d7d51314dfe6a1d6dd",
          "url": "https://github.com/unicode-org/icu/commit/1d9cc717e2b93b8b27b84b2969c3bfc9a4d0a593"
        },
        "date": 1648065663759,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2271,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7852,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9b3c0c328c78d5ea74bfdff9026f31e91b173c0b",
          "message": "ICU-21901 integrate CLDR release-41-beta2 to ICU main for 71ga",
          "timestamp": "2022-03-23T16:43:02-07:00",
          "tree_id": "aea6b6784ef5f219025dc77f8d8bf48d19777bc9",
          "url": "https://github.com/unicode-org/icu/commit/9b3c0c328c78d5ea74bfdff9026f31e91b173c0b"
        },
        "date": 1648079647030,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0942,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2aa2a7221c2d28c331ffbe0209b74d3156bbe312",
          "message": "ICU-21953 remove outdated ucdterms.txt\n\nThis is an old version of the Unicode license from 2004,\nwhen the ICU license was different from the Unicode license.\n\nWe should have removed this file in 2016,\nwhen the Unicode license was revised,\nand when the ICU project became a project of the Unicode Consortium,\nadopting the Unicode license for all of ICU.\n\nSince 2016, the Unicode data files are covered by the same license as the\ntop license text in the ICU LICENSE file.",
          "timestamp": "2022-03-24T00:14:02Z",
          "tree_id": "1ceb57fa15c77488db9f7db1a5f553c0d902a004",
          "url": "https://github.com/unicode-org/icu/commit/2aa2a7221c2d28c331ffbe0209b74d3156bbe312"
        },
        "date": 1648081430642,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.8243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.0682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.9175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.3371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.3953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ed1d9efc153bce41d61dd10b0ee4641b8513c431",
          "message": "ICU-21954 LICENSE: add more license texts from icu4c files",
          "timestamp": "2022-03-24T21:22:05Z",
          "tree_id": "95b674daae808a0ca19eb48d26139fbd81742c43",
          "url": "https://github.com/unicode-org/icu/commit/ed1d9efc153bce41d61dd10b0ee4641b8513c431"
        },
        "date": 1648157567287,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.0423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.8684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.9676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.4844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.4532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "2612b8b55af90106c11422a3558006bdc8016bc4",
          "message": "ICU-21965 fix utilities.jar module name\n\ncom.ibm.icu.utilities - otherwise the automatic module name is unusable",
          "timestamp": "2022-03-30T11:09:53-05:00",
          "tree_id": "c25c55651b6b9eedb525e2eafeff337ca86dedcb",
          "url": "https://github.com/unicode-org/icu/commit/2612b8b55af90106c11422a3558006bdc8016bc4"
        },
        "date": 1648657325425,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.2176,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2239,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 8.9304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 8.9305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 8.9358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "b144aac447e4ddbc20cbec90ed625ef983a64fd9",
          "message": "ICU-21762 Export Script_Extensions with --all flag in icuexportdata\n\nSee #2054",
          "timestamp": "2022-03-30T11:44:02-07:00",
          "tree_id": "9f2a01db8caee468c31e2289b4569774b0bebc48",
          "url": "https://github.com/unicode-org/icu/commit/b144aac447e4ddbc20cbec90ed625ef983a64fd9"
        },
        "date": 1648666601320,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.2377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.2365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.2432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 8.9105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 8.9192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 8.9408,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "c205e7ee49a7086a28b9c275fcfdac9ca3dc815d",
          "message": "ICU-21971 Added a new numeric currecny code SLE/695 for Sierra Leone Leone.",
          "timestamp": "2022-03-30T13:49:51-07:00",
          "tree_id": "f4b713638cc22c33d7948a0c67f139597d39895e",
          "url": "https://github.com/unicode-org/icu/commit/c205e7ee49a7086a28b9c275fcfdac9ca3dc815d"
        },
        "date": 1648674090339,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3176,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "861e55c246bf56867699a11d274c1875e0690fcc",
          "message": "ICU-21972 Use a shared props file for the ICU Major Version number in the Windows Visual Studio project files.",
          "timestamp": "2022-03-30T20:55:36-07:00",
          "tree_id": "69b9145357b51f281cc1709e50a968a3b0498b49",
          "url": "https://github.com/unicode-org/icu/commit/861e55c246bf56867699a11d274c1875e0690fcc"
        },
        "date": 1648699603385,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jubrianc@microsoft.com",
            "name": "Julien Brianceau",
            "username": "jbrianceau"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "a2c90781f14869f6fbd9267d03e155efa192b245",
          "message": "ICU-21967 Remove obsolete references in makedata.vcxproj and makedata_uwp.vcxproj\n\nThese references should have been removed in ICU-20489 and ICU-21420.\nTake the opportunity to update the doc as well.",
          "timestamp": "2022-03-31T11:23:29-07:00",
          "tree_id": "f609c16843cff6482f6dd06be11b759537e87d3b",
          "url": "https://github.com/unicode-org/icu/commit/a2c90781f14869f6fbd9267d03e155efa192b245"
        },
        "date": 1648751600803,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.9125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.8742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.9275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.8619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0537,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daju@microsoft.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "committer": {
            "email": "41210545+daniel-ju@users.noreply.github.com",
            "name": "Daniel Ju",
            "username": "daniel-ju"
          },
          "distinct": true,
          "id": "f4f74c1f2ee380c20434f224d7fea05fdb4e91d6",
          "message": "ICU-21957 BRS72RC Update version number to 72.0.1",
          "timestamp": "2022-03-31T16:39:13-07:00",
          "tree_id": "490d3bcef2c5aed9fa04a64e006f6eea14f5098b",
          "url": "https://github.com/unicode-org/icu/commit/f4f74c1f2ee380c20434f224d7fea05fdb4e91d6"
        },
        "date": 1648770549087,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.0625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.0747,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "4833cc89b2fae2e8863b46bf1dc785964847e882",
          "message": "ICU-20715 CollationDataBuilder reset outdated prefix+contraction values\n\nSee #2052",
          "timestamp": "2022-04-04T16:10:13Z",
          "tree_id": "32748a15222ff1509cad57b04d3294c0f402e8df",
          "url": "https://github.com/unicode-org/icu/commit/4833cc89b2fae2e8863b46bf1dc785964847e882"
        },
        "date": 1649089285157,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.2636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.2716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4747484273dc65a18a0469aca4d36840d64c10c6",
          "message": "ICU-21966 Cleanup -Wunused-but-set-variable\n\nSee #2055",
          "timestamp": "2022-04-06T12:51:46-07:00",
          "tree_id": "61c6000acd9127af32ccdebbe58a5458d0f63962",
          "url": "https://github.com/unicode-org/icu/commit/4747484273dc65a18a0469aca4d36840d64c10c6"
        },
        "date": 1649275381220,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.5687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.5321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1408,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.257,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "87cee860e035e93cee30cc0dab1be8a697f42646",
          "message": "ICU-21984 Fix DateIntervalFormat.normalizeHourMetacharacters() so that it doesn't require the hour and day-period\nfields to appear in any particular order or position in the skeleton string.",
          "timestamp": "2022-04-11T14:37:15-07:00",
          "tree_id": "9d15834932f32762c8a0a350e9263a8dd2a38900",
          "url": "https://github.com/unicode-org/icu/commit/87cee860e035e93cee30cc0dab1be8a697f42646"
        },
        "date": 1649713655903,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.1374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1239,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "131146a5f43955eee68693e1e627df13da1ae384",
          "message": "ICU-21984 Fix DateIntervalFormat.normalizeHourMetacharacters() so that it doesn't require the hour and day-period\nfields to appear in any particular order or position in the skeleton string.",
          "timestamp": "2022-04-14T14:21:02-07:00",
          "tree_id": "fb805e6034ebad2b48accba6256dbdf1297371ac",
          "url": "https://github.com/unicode-org/icu/commit/131146a5f43955eee68693e1e627df13da1ae384"
        },
        "date": 1649971913640,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47824c5568f0a1528c44e5264cb65e9e18705c18",
          "message": "ICU-21956 Merge maint-71 to main",
          "timestamp": "2022-04-14T17:45:38-07:00",
          "tree_id": "b53a205780b474ed928dcf2732513ac8de8743a6",
          "url": "https://github.com/unicode-org/icu/commit/47824c5568f0a1528c44e5264cb65e9e18705c18"
        },
        "date": 1649984134901,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.34,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fca6b342c03d89998eba227d284e232dabbfab47",
          "message": "ICU-21994 Fix heap-buffer-overflow",
          "timestamp": "2022-04-20T12:03:35-07:00",
          "tree_id": "09972e260fbe59552e69bb75887d064410144398",
          "url": "https://github.com/unicode-org/icu/commit/fca6b342c03d89998eba227d284e232dabbfab47"
        },
        "date": 1650482048000,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.31,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1923,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17109322+hugovdm@users.noreply.github.com",
            "name": "Hugo van der Merwe",
            "username": "hugovdm"
          },
          "committer": {
            "email": "17109322+hugovdm@users.noreply.github.com",
            "name": "Hugo van der Merwe",
            "username": "hugovdm"
          },
          "distinct": true,
          "id": "50e14fe15bcde3311f3e76bb196977a0724d7e8b",
          "message": "ICU-21959 Update stale Jira tickets in ICU4J TODOs\n\nSee #2062",
          "timestamp": "2022-04-27T23:31:46+02:00",
          "tree_id": "320adf839470614e0950cfe770d84936a3fe9df2",
          "url": "https://github.com/unicode-org/icu/commit/50e14fe15bcde3311f3e76bb196977a0724d7e8b"
        },
        "date": 1651095700143,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6821,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "cb6b778e1b5ef6a1bb82e085aaf427fc086331c9",
          "message": "ICU-21959 Online demos how to update\n\nSee #2069",
          "timestamp": "2022-04-29T09:36:51-07:00",
          "tree_id": "0e8fc014a5ef382a0bcb4e65b3f1013839bed3db",
          "url": "https://github.com/unicode-org/icu/commit/cb6b778e1b5ef6a1bb82e085aaf427fc086331c9"
        },
        "date": 1651250863892,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.5629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.6403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.5224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.66,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.4395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "43d082665e72d853ef66626e0b17470722776497",
          "message": "ICU-22006 icupkg: %%ALIAS & %%Parent do not need truncation parent",
          "timestamp": "2022-04-29T17:50:11Z",
          "tree_id": "cc8b7de3a086a733ec693be2cd739669cd6d57c9",
          "url": "https://github.com/unicode-org/icu/commit/43d082665e72d853ef66626e0b17470722776497"
        },
        "date": 1651255285724,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5597,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "505535813fd539800de0930883cdb0e0ba678842",
          "message": "ICU-22007 remove outdated terms of use from Unicode conversion files",
          "timestamp": "2022-04-29T19:51:01Z",
          "tree_id": "0648d877b9f7113b462aa8be66a35844db09208a",
          "url": "https://github.com/unicode-org/icu/commit/505535813fd539800de0930883cdb0e0ba678842"
        },
        "date": 1651262508222,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.2076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.2084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "07a50207b7a0ae162a5b51856f43576f39751377",
          "message": "ICU-21679 avoid escape of U+FFFF in a character literal",
          "timestamp": "2022-04-29T20:43:53Z",
          "tree_id": "0eab5a9224a4cf8dcff516967a14f248572b25be",
          "url": "https://github.com/unicode-org/icu/commit/07a50207b7a0ae162a5b51856f43576f39751377"
        },
        "date": 1651265638549,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.2419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.2614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e96e9410bde06962c211fa6f21c3d91263a90f86",
          "message": "ICU-22005 Fix int32 overflow in FormattedStringBuilder\n\nSee #2070",
          "timestamp": "2022-04-29T18:25:01-07:00",
          "tree_id": "02cea832ea6354cb413ef3ac4167fba0fde781bd",
          "url": "https://github.com/unicode-org/icu/commit/e96e9410bde06962c211fa6f21c3d91263a90f86"
        },
        "date": 1651282485293,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "eea7985e5a7108d00f1224ed36f0220fa9441cdc",
          "message": "ICU-22016 utrie2.h need not include mutex.h",
          "timestamp": "2022-05-06T20:50:58Z",
          "tree_id": "f2382974fa83f3747ccc3c7bf9e390d0f9d141dc",
          "url": "https://github.com/unicode-org/icu/commit/eea7985e5a7108d00f1224ed36f0220fa9441cdc"
        },
        "date": 1651870917574,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.5982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.9444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.8721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.3103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.3143,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.5962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "fda4a82bba405579a280b71922056c801c2b3ca2",
          "message": "ICU-21960 fix clang 13 C++20 warnings",
          "timestamp": "2022-05-07T15:21:08Z",
          "tree_id": "d4b6c9e51f35a2735c3c07de3993e596cb42e051",
          "url": "https://github.com/unicode-org/icu/commit/fda4a82bba405579a280b71922056c801c2b3ca2"
        },
        "date": 1651937533856,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chetanladdha@microsoft.com",
            "name": "Chetan Laddha",
            "username": "chetanladdha"
          },
          "committer": {
            "email": "chetan.laddha@gmail.com",
            "name": "Chetan Laddha",
            "username": "chetanladdha"
          },
          "distinct": true,
          "id": "5961aacd3c66f3bb8f51d9b4833c03613c57dc01",
          "message": "ICU-21945 Add support for Visual Studio 2022\n\nSee #2059",
          "timestamp": "2022-05-10T22:57:18+05:30",
          "tree_id": "0a38273102e79b4fb0c96aae8fd320b79fae8c57",
          "url": "https://github.com/unicode-org/icu/commit/5961aacd3c66f3bb8f51d9b4833c03613c57dc01"
        },
        "date": 1652204313120,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.4518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.7943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.5331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.4689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "bdcec144b9f627c8f96261a6afeebb52e4d81ab0",
          "message": "ICU-22012 Add four Japanese word into the dictionary\n\nSee #2072",
          "timestamp": "2022-05-11T08:19:53-07:00",
          "tree_id": "85e2beca4e203db5c621d2700bc85b0a8c9b1b52",
          "url": "https://github.com/unicode-org/icu/commit/bdcec144b9f627c8f96261a6afeebb52e4d81ab0"
        },
        "date": 1652283093623,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.1194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.6555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.6659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.6694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "f8a0810a5a9a8811d13e1e4d9ef266ef5a102729",
          "message": "ICU-22030 Modifies GHA CI performance testing so that existing files in the\nperformance results publishing repository are no longer deleted when the test\nresults are forwarded. This concretely affects the README file in the icu-perf\nrepository, which got deleted with the first data transfer.\n\nRestoring the README file in icu-perf will be a complementary PR.",
          "timestamp": "2022-05-13T17:00:05-07:00",
          "tree_id": "9ba8576b904411dc587d6603ba71189588114912",
          "url": "https://github.com/unicode-org/icu/commit/f8a0810a5a9a8811d13e1e4d9ef266ef5a102729"
        },
        "date": 1652487097562,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.0478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.6826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "distinct": true,
          "id": "85705f04e03f9cb41d4406bcd38c3e419eb7889d",
          "message": "ICU-21960 C++20 Warnings from ATOMIC_VAR_INIT\n\nRemove the ICU macros ATOMIC_INT32_T_INITIALIZER and U_INITONCE_INITIALIZER,\nwhich made use of C++ ATOMIC_VAR_INIT, which has been removed from C++20.\n\nWith modern C++ features being available, these macros no longer served\nany real need.",
          "timestamp": "2022-05-17T15:45:06-07:00",
          "tree_id": "4f972e8ea8588a819020277d8c518b5102e52695",
          "url": "https://github.com/unicode-org/icu/commit/85705f04e03f9cb41d4406bcd38c3e419eb7889d"
        },
        "date": 1652828109699,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.5194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.5413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.5504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.4417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.4838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3d89af0f72d78d0825fbf17fd7808a4d80b6b4ad",
          "message": "ICU-22023 Fix Calendar::get() return out of bound value and SimpleDateTime::format assert while TimeZone is \"UTC\" and value is -1e-9\n\nSee #2086",
          "timestamp": "2022-05-19T13:45:59-07:00",
          "tree_id": "b9cf8e61607c058b52fb71efef44dedd843e1ae7",
          "url": "https://github.com/unicode-org/icu/commit/3d89af0f72d78d0825fbf17fd7808a4d80b6b4ad"
        },
        "date": 1652993762261,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.9837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.8746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "f6300c97cd4b8f1224776e43226d3a8bbb695c2c",
          "message": "ICU-22040 Update clang-13 build bots to clang-14. Add libc++ build bot.",
          "timestamp": "2022-05-19T14:05:14-07:00",
          "tree_id": "4a40a3af51ba2ebe33f2fbb66613585625f0a00c",
          "url": "https://github.com/unicode-org/icu/commit/f6300c97cd4b8f1224776e43226d3a8bbb695c2c"
        },
        "date": 1652994919768,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.8365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.8005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "8fcb22f88e7100cd714861b672a3137c7d431a01",
          "message": "ICU-22037 Adds performance tests for ICU forward and backward\nstring search.\n\nICU-22037 Removes a left-over escaped doublequote; removes a\ntest print-out.",
          "timestamp": "2022-05-20T11:56:11-07:00",
          "tree_id": "52eaabe6b81058bf46f32476bad6441fe6d1175c",
          "url": "https://github.com/unicode-org/icu/commit/8fcb22f88e7100cd714861b672a3137c7d431a01"
        },
        "date": 1653073613345,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.2026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "fcc981a5b7a11628187ee6a1f97203449b48bd36",
          "message": "ICU-21935 Add DisplayOptions\n\nSee #2061",
          "timestamp": "2022-05-21T03:20:37+02:00",
          "tree_id": "11b85ea79fcb3796ba2871ae8602fce888bb0309",
          "url": "https://github.com/unicode-org/icu/commit/fcc981a5b7a11628187ee6a1f97203449b48bd36"
        },
        "date": 1653096676446,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "74a723f22fe2c53445087215d0d1acee69efdda6",
          "message": "ICU-21959 Fix the URL to the icu-le-hb repository.\n\nhttps://sourceforge.net/p/icu/mailman/message/37657918/",
          "timestamp": "2022-05-24T20:55:00+02:00",
          "tree_id": "9acb2514b5ff0f3877d1f8808f75c88511903b33",
          "url": "https://github.com/unicode-org/icu/commit/74a723f22fe2c53445087215d0d1acee69efdda6"
        },
        "date": 1653419432351,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.2963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.2999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.302,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f5f4813d161d685a807aa5ea25efa685b0f6eaeb",
          "message": "ICU-22043 Change minimum ZONE_OFFSET value from -12h to -16h\n\nSee #2100",
          "timestamp": "2022-05-24T16:11:39-07:00",
          "tree_id": "affebcf816f9f90df71ea765d812209d8e6490d9",
          "url": "https://github.com/unicode-org/icu/commit/f5f4813d161d685a807aa5ea25efa685b0f6eaeb"
        },
        "date": 1653434798154,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.8845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.9674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.8681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.7795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.7571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.7117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e17219582ed0396d993927066e95af0c9199f8db",
          "message": "ICU-21980 add missing comments, finish change log",
          "timestamp": "2022-05-25T18:23:11Z",
          "tree_id": "f3a73d2dbd02b2945b6b3253c0c5e0532259f4fd",
          "url": "https://github.com/unicode-org/icu/commit/e17219582ed0396d993927066e95af0c9199f8db"
        },
        "date": 1653503711359,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.4357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.4468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.5854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.2334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.2022,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.1637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8d5a97ae0f49f6974372736ca67db15c37522f6f",
          "message": "ICU-21935 DisplayOptions cleanup",
          "timestamp": "2022-05-26T18:30:07Z",
          "tree_id": "398c8d5544c475dd1e10c83bfec4a84e5b6f66d9",
          "url": "https://github.com/unicode-org/icu/commit/8d5a97ae0f49f6974372736ca67db15c37522f6f"
        },
        "date": 1653590500933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.1059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.1162,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.1294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 8.8523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 8.8307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 8.8963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fc64f8db3f21464b748d4e22383268e9cf5cdb58",
          "message": "ICU-22041 Fix \"Africa/Casablanca\" show strange LONG displayName\n\nSee #2096",
          "timestamp": "2022-05-26T14:59:10-07:00",
          "tree_id": "458cb5f8db5aad448a044731d505ac5a4701a132",
          "url": "https://github.com/unicode-org/icu/commit/fc64f8db3f21464b748d4e22383268e9cf5cdb58"
        },
        "date": 1653603070851,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.2034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "64b35481263ac4df37a28a9c549553ecc9710db2",
          "message": "ICU-21957 integrate CLDR release-42-m1 (early milestone) to ICU main for 72 (rebased on main) +\nFormattedStringBuilderTest::testInsertOverflow infolns,logKnownIssue skip for CI exhaustive crash",
          "timestamp": "2022-05-27T13:50:43-07:00",
          "tree_id": "df4c6331dadbb97587cbcf5982199f57d20160b3",
          "url": "https://github.com/unicode-org/icu/commit/64b35481263ac4df37a28a9c549553ecc9710db2"
        },
        "date": 1653686132927,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "younies@chromium.org",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "d6fc9b828c95f0d8d10a8648b3471459d05fb8c4",
          "message": "ICU-21935 Add DisplayOptions to NumberFormatterSettings\n\nSee #2099",
          "timestamp": "2022-05-31T13:02:01-07:00",
          "tree_id": "e043f84264e963b665a5b126a084fab5dd042bbd",
          "url": "https://github.com/unicode-org/icu/commit/d6fc9b828c95f0d8d10a8648b3471459d05fb8c4"
        },
        "date": 1654027952755,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "c5d0fff5a07390f8cf65db8e177489e5b03ff422",
          "message": "ICU-21980 parse multiple `@missing` lines",
          "timestamp": "2022-06-02T21:29:24Z",
          "tree_id": "14e81937066103dfc9353c958a0bb41c72dbf84d",
          "url": "https://github.com/unicode-org/icu/commit/c5d0fff5a07390f8cf65db8e177489e5b03ff422"
        },
        "date": 1654205954177,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "33af80e980ff918ab4e34d85dd9e3d864ad17e2e",
          "message": "ICU-21957 improve logKnownIssue skip for FormattedStringBuilderTest::testInsertOverflow crash",
          "timestamp": "2022-06-03T09:02:31-07:00",
          "tree_id": "62e75a5c1e84e5ed56035da1986beab420f8c1f4",
          "url": "https://github.com/unicode-org/icu/commit/33af80e980ff918ab4e34d85dd9e3d864ad17e2e"
        },
        "date": 1654272845942,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3199,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "agrieve@chromium.org",
            "name": "agrieve",
            "username": "agrieve"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "18dd0e4c223716b73e2b0735cc2b653cef5ee1ab",
          "message": "ICU-21960 Add missing \"const\" to kAttributeKey\n\nThis variable was flagged by a chromium check that looks for variables named like constants that end up in the `.data` ELF section (rather than in `.rodata`).",
          "timestamp": "2022-06-08T16:56:24Z",
          "tree_id": "27918448252d8943e20b1969b94b193224488ead",
          "url": "https://github.com/unicode-org/icu/commit/18dd0e4c223716b73e2b0735cc2b653cef5ee1ab"
        },
        "date": 1654708022471,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.0953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "0dcb1cb065d60685aa487848050c3b385c9e6c0b",
          "message": "ICU-22035 Remove instances of pre c++11 default constructor prevention pattern",
          "timestamp": "2022-06-08T16:28:02-07:00",
          "tree_id": "eff466f1fdf88e3b23d1de71c12ac226948e7455",
          "url": "https://github.com/unicode-org/icu/commit/0dcb1cb065d60685aa487848050c3b385c9e6c0b"
        },
        "date": 1654732090497,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.0197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.1217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "1eb6f38b96116b456eaf2c06726a7d764c4df62d",
          "message": "ICU-22053 Clean up usages of Macro Header Guards",
          "timestamp": "2022-06-09T10:18:28-07:00",
          "tree_id": "ec128dbd6d1be5eb97d215131cd69b53c0d201c3",
          "url": "https://github.com/unicode-org/icu/commit/1eb6f38b96116b456eaf2c06726a7d764c4df62d"
        },
        "date": 1654795781473,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "df8fbc22e8dbb7adb7a0677692184e508ebd7e2e",
          "message": "ICU-22036 Modify ICU4J performance test framework to work when executed by\nGitHub Action. This includes introducing a new flag (-a) to indicate\ninvocation from command line/GHA shell, moving elements of the workflow\nfrom Perl into the Java framework (calculation of iteration numbers), and\ngenerating NDJSON output for GitHub Benchmark processing.\nBackward compatibility with the Perl script invocation has been preserved.\n\nICU-22036 Adds a comment clarifying the reason why NDJSON output is generated.",
          "timestamp": "2022-06-09T14:57:21-07:00",
          "tree_id": "85631259fdd484ac01da942bdb50b24f3d40e06b",
          "url": "https://github.com/unicode-org/icu/commit/df8fbc22e8dbb7adb7a0677692184e508ebd7e2e"
        },
        "date": 1654812678309,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3069,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.3799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.3055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c5872e7f679e2acdcc00fda97da92e2d82dbc5e3",
          "message": "ICU-22017 Fix numbering system resolution in NumberRangeFormatter\n\nSee #2085",
          "timestamp": "2022-06-15T13:08:46-07:00",
          "tree_id": "ad7ac4ace1153b30fadd7deadaac7d7e44615d15",
          "url": "https://github.com/unicode-org/icu/commit/c5872e7f679e2acdcc00fda97da92e2d82dbc5e3"
        },
        "date": 1655324340188,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "5a77fd9d110fba9f6fd4b16a5b969d64facd766e",
          "message": "ICU-21997 Fixes currency code retrieval for locale: instead of selecting the\nfirst currency in the list now select the first legal tender currency in the\nlist. Or the first currency if the list has no legal tender currencies (which\nis the previous behaviour).\n\nICU-21997 Removed an overlooked earlier unit test attempt.\n\nICU-21997 Shields C++ unit test from compilation when configuration flag\nUCONFIG_NO_FORMATTING is set.",
          "timestamp": "2022-06-16T13:49:15-07:00",
          "tree_id": "a749cb19ab2ddd2b88b536b237fe01a7cf76dec7",
          "url": "https://github.com/unicode-org/icu/commit/5a77fd9d110fba9f6fd4b16a5b969d64facd766e"
        },
        "date": 1655413238310,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "2f6cc2f7e736878c5ea8ec2c8e067b74805eeafc",
          "message": "ICU-22070 Return if UErrorCode is error in calendar.cpp",
          "timestamp": "2022-06-23T09:26:41-07:00",
          "tree_id": "5810453e007e207811355c0fe52a81a09ea8e327",
          "url": "https://github.com/unicode-org/icu/commit/2f6cc2f7e736878c5ea8ec2c8e067b74805eeafc"
        },
        "date": 1656002228031,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "harris.pc@gmail.com",
            "name": "Paul Harris",
            "username": "paulharris"
          },
          "committer": {
            "email": "29107334+jefgen@users.noreply.github.com",
            "name": "Jeff Genovy",
            "username": "jefgen"
          },
          "distinct": true,
          "id": "86cc2b98cbf694074cfe951467cc373d26fa9df2",
          "message": "ICU-22002 Don't undef __STRICT_ANSI__",
          "timestamp": "2022-06-23T11:55:06-07:00",
          "tree_id": "dd0638ba208752e363678cf0bd3a696689f351a2",
          "url": "https://github.com/unicode-org/icu/commit/86cc2b98cbf694074cfe951467cc373d26fa9df2"
        },
        "date": 1656011125065,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.9551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.0363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.0085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.6321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.6587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "43f2ae75ca9f70475f0c36e0c3edfb48b568dcbc",
          "message": "ICU-22004 Avoid UBSan bug by casting only when success",
          "timestamp": "2022-06-24T18:00:03-07:00",
          "tree_id": "8e486672184faf7753fdca3ac821a798f44d29be",
          "url": "https://github.com/unicode-org/icu/commit/43f2ae75ca9f70475f0c36e0c3edfb48b568dcbc"
        },
        "date": 1656119388855,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.267,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "6df8bb7307ae9f9ebc961f0887c106f64ea05aa9",
          "message": "ICU-22036 Adds ICU4J performance tests to post-merge continuous integration\nworkflow. Also fixes a tiny oversight in the ICU4J performance framework.",
          "timestamp": "2022-06-27T08:47:48-07:00",
          "tree_id": "f40e02e24289a5397ac51ef5272fedc20596f358",
          "url": "https://github.com/unicode-org/icu/commit/6df8bb7307ae9f9ebc961f0887c106f64ea05aa9"
        },
        "date": 1656345527817,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.7253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1579,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "929cf40ecbf464bb133113995185c7353f2e106d",
          "message": "ICU-22059 Add one Thai word into the Thai dictionary\n\nSee #2112",
          "timestamp": "2022-06-27T09:27:56-07:00",
          "tree_id": "06e8f81c97ab94be546a5187c8e251db670d5e2f",
          "url": "https://github.com/unicode-org/icu/commit/929cf40ecbf464bb133113995185c7353f2e106d"
        },
        "date": 1656348160872,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d7c424b00f89ad2cb6734b106964ed72a3390415",
          "message": "ICU-22073 Do not throw away CompactDecimalFormat's affixes",
          "timestamp": "2022-06-27T12:53:22-07:00",
          "tree_id": "ec0d98e1ce9116d2d5820db9421d646147cb6f92",
          "url": "https://github.com/unicode-org/icu/commit/d7c424b00f89ad2cb6734b106964ed72a3390415"
        },
        "date": 1656360522276,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.3159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.0354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.6062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a",
          "message": "ICU-22028 Export collation and normalization data for ICU4X",
          "timestamp": "2022-06-28T08:37:32-07:00",
          "tree_id": "dc6bb456103fdf93ff19ad327327005cd0d65e6f",
          "url": "https://github.com/unicode-org/icu/commit/3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a"
        },
        "date": 1656431506530,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "ea970109f85a85e720c9259f101ec33be6e9d912",
          "message": "ICU-22028 Export collation and normalization data for ICU4X",
          "timestamp": "2022-06-28T09:07:30-07:00",
          "tree_id": "6da2a4d39d5743dbd057c6ebd599885404d26bbc",
          "url": "https://github.com/unicode-org/icu/commit/ea970109f85a85e720c9259f101ec33be6e9d912"
        },
        "date": 1656433428526,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.3145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.12,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656530074427,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.9819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.9776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.1389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.6381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.7179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.7388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@users.noreply.github.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "783b4f7b6a7f0996563c802bcec296e2a81d882f",
          "message": "ICU-22061 rename",
          "timestamp": "2022-06-29T13:16:26-07:00",
          "tree_id": "acffa8df9f2a19ac3aa86209887641a5cf2fcb49",
          "url": "https://github.com/unicode-org/icu/commit/783b4f7b6a7f0996563c802bcec296e2a81d882f"
        },
        "date": 1656534439818,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656541652794,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.3248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@users.noreply.github.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "6cb4fd58488060ac87f71d2702b56f972e5861a8",
          "message": "ICU-22061 rename",
          "timestamp": "2022-06-29T16:28:44-07:00",
          "tree_id": "c222a2addef0db0bb07146e49550eef2671edc21",
          "url": "https://github.com/unicode-org/icu/commit/6cb4fd58488060ac87f71d2702b56f972e5861a8"
        },
        "date": 1656545939942,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.1234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "e2ae4f5324e863a92bf79892ef1a2e0d6b183af7",
          "message": "ICU-22054 Remove declarations for unimplemented APIs\n\nThis patch also includes marking `=delete` on specific `normal` member functions, as opposed to compiler generated functions,\nbased on the description of such functions' surrounding comments.",
          "timestamp": "2022-07-01T08:57:10-07:00",
          "tree_id": "fda6935be0dbf84c2fec7832622127bc05ca0b48",
          "url": "https://github.com/unicode-org/icu/commit/e2ae4f5324e863a92bf79892ef1a2e0d6b183af7"
        },
        "date": 1656691634285,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daschuer@mixxx.org",
            "name": "Daniel Schürmann",
            "username": "daschuer"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "9f358ccb2472866a849aa4f393ef4528448c3e9d",
          "message": "ICU-22010 Add early check for AX_CHECK_COMPILE_FLAG\n\nThis helps to avoid missleading error message:\n\n```\n./source/configure: line 7981: syntax error near unexpected token 'newline'\n./source/configure: line 7981: 'AX_CHECK_COMPILE_FLAG('\n```",
          "timestamp": "2022-07-12T13:30:01+05:30",
          "tree_id": "cb81138f619f83e5a8667ed95e034c4d81ae9b8b",
          "url": "https://github.com/unicode-org/icu/commit/9f358ccb2472866a849aa4f393ef4528448c3e9d"
        },
        "date": 1657613516510,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1855,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "721d41153ec4f80cd8556ac57dc023d169ef9dd2",
          "message": "ICU-22071 Fixed DateTimePatternGenerator to respect the locale's \"rg\" subtag (when it has one) when determining the hour cycle.",
          "timestamp": "2022-07-12T10:55:03-07:00",
          "tree_id": "c8298bfaaccafa158a689ec1bfd5c56a0cc8f44d",
          "url": "https://github.com/unicode-org/icu/commit/721d41153ec4f80cd8556ac57dc023d169ef9dd2"
        },
        "date": 1657649137001,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6348,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6333,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc",
          "message": "ICU-22085 Fix old typo on calculating path size in loadTestData() and add a few small changes to support running ICU unit tests in Xcode.",
          "timestamp": "2022-07-14T08:53:16-07:00",
          "tree_id": "35a3d64dc578f2aac68d1255b7f91072d95f1e29",
          "url": "https://github.com/unicode-org/icu/commit/4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc"
        },
        "date": 1657814626595,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.9543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.9075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.2966,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.4572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.5398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "william.marlow@ibm.com",
            "name": "William Marlow",
            "username": "lux01"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "9a7b0e08d0bb8ed11775c76f935eabc155fdc795",
          "message": "ICU-22086 Add ibm-clang_r/ibm-clang++_r to runConfigureICU",
          "timestamp": "2022-07-14T17:38:59Z",
          "tree_id": "0fedd85fc633e091452763491c5688581ca32177",
          "url": "https://github.com/unicode-org/icu/commit/9a7b0e08d0bb8ed11775c76f935eabc155fdc795"
        },
        "date": 1657820978289,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2212,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2271,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.0094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "6394a48d067134a99faca4c7329accee0c580301",
          "message": "ICU-21957 integrate CLDR release-42-m2 (mid milestone) to ICU main for 72",
          "timestamp": "2022-07-14T10:56:39-07:00",
          "tree_id": "313c19455be6773aa335e6e10e0b9518d142b996",
          "url": "https://github.com/unicode-org/icu/commit/6394a48d067134a99faca4c7329accee0c580301"
        },
        "date": 1657822000371,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.205,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.2058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "a8594a401f3241b19f9b8b61bf786fde917b4c72",
          "message": "ICU-22056 Add a new unum_hasAttribute() method.",
          "timestamp": "2022-07-15T16:03:56-07:00",
          "tree_id": "1db5acef8d7251a4829b61c61c686f5822486667",
          "url": "https://github.com/unicode-org/icu/commit/a8594a401f3241b19f9b8b61bf786fde917b4c72"
        },
        "date": 1657927747567,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.7454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.2175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.1258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "9c72bf975890a1edacce046a2e55e88023a86389",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T10:05:10-07:00",
          "tree_id": "cf9c0091bce7abf7054b71884fd644acc42cae16",
          "url": "https://github.com/unicode-org/icu/commit/9c72bf975890a1edacce046a2e55e88023a86389"
        },
        "date": 1658164885144,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "8e4af7693ded13e4eb1056044651760bcec05d27",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T13:25:43-07:00",
          "tree_id": "bab799ee9751794cad779d688f0b42f6513b3c01",
          "url": "https://github.com/unicode-org/icu/commit/8e4af7693ded13e4eb1056044651760bcec05d27"
        },
        "date": 1658176553524,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.1823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.1827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.2215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "9d230f923c51bb72af9420e8cf53a019894a8e52",
          "message": "ICU-21939 Fix bogus \"conflicting fields\" error in DateIntervalFormat.",
          "timestamp": "2022-07-18T15:16:40-07:00",
          "tree_id": "c0319f3181cebd91a769eaebd21495a02b16a9cb",
          "url": "https://github.com/unicode-org/icu/commit/9d230f923c51bb72af9420e8cf53a019894a8e52"
        },
        "date": 1658183331706,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.4955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.4925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "86166e0a2dd1119e086d04b8973dc486b4af8dcc",
          "message": "ICU-22075 Adds a random waiting period (0 - 179 secs) to each test that runs as\npart of a high concurrency performance test setup. This will disperse commits\nof performance test results into the data branch over a wider time frame and\ndrastically reduces the chance of data uploads failing after ten unsuccesful\ncommit attempts.\n\nTest runs showed a huge drop in failed commits/retry, from a high of 113\nwithout wait down to only 4 with the extra wait.\n\nICU-22075 Add comment explaining the rationale of the random\nsleep period prior to test execution.",
          "timestamp": "2022-07-22T08:14:58-07:00",
          "tree_id": "e00a8df1e80c75ce21faf8a38134eaaa9b3b31d3",
          "url": "https://github.com/unicode-org/icu/commit/86166e0a2dd1119e086d04b8973dc486b4af8dcc"
        },
        "date": 1658503745092,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1537,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "c258f3d6f81a2514b76d72c5deae8cbc295aecd6",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:29-07:00",
          "tree_id": "1e4ac369923311e8ac0922960bbb1cc63650003f",
          "url": "https://github.com/unicode-org/icu/commit/c258f3d6f81a2514b76d72c5deae8cbc295aecd6"
        },
        "date": 1658790892420,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.0968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "ed2b3a335bb0dc7f0a3866807c326277c8b8119d",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:31-07:00",
          "tree_id": "55e92ebb6e61c3ea32ba795080b0831e075ef7b8",
          "url": "https://github.com/unicode-org/icu/commit/ed2b3a335bb0dc7f0a3866807c326277c8b8119d"
        },
        "date": 1658791771177,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.7593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.7565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.6794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.4338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.3673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.4665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "58a51495dd1c94d29cda93ffc29a904d77e50d31",
          "message": "ICU-22088 Various fixes to make dealing with NUMBERING_SYSTEM formatters easier.",
          "timestamp": "2022-07-28T16:18:01-07:00",
          "tree_id": "69c47d1745ae982673f69de39b18f9c44cdc75b7",
          "url": "https://github.com/unicode-org/icu/commit/58a51495dd1c94d29cda93ffc29a904d77e50d31"
        },
        "date": 1659051130654,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 6.556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 6.5594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 6.6158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 6.9296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 6.9216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 6.9452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447",
          "message": "ICU-21957 integrate CLDR release-42-alpha0 (first with Survey Tool data) to ICU main for 72 (#2142)",
          "timestamp": "2022-07-29T15:32:45-07:00",
          "tree_id": "6e9b3f20e3d80a16de21313da72a5cb5b6ac2361",
          "url": "https://github.com/unicode-org/icu/commit/dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447"
        },
        "date": 1659135529768,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "4cf4116dadd2f34c20d9df42b1272cac7dcb30c4",
          "message": "ICU-22074 Increase the valgrind CI timeout",
          "timestamp": "2022-08-01T12:51:55+05:30",
          "tree_id": "5219374afb583705529f150783e07b0ac009b0c1",
          "url": "https://github.com/unicode-org/icu/commit/4cf4116dadd2f34c20d9df42b1272cac7dcb30c4"
        },
        "date": 1659339346512,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1345,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0266970e977b9e2488dfbf788cc280be3a0338ca",
          "message": "ICU-21957 integrate CLDR release-42-alpha1 to ICU main for 72",
          "timestamp": "2022-08-05T09:39:58-07:00",
          "tree_id": "ae5c1572c4ed62ac177b5a843ecc6451b53749b2",
          "url": "https://github.com/unicode-org/icu/commit/0266970e977b9e2488dfbf788cc280be3a0338ca"
        },
        "date": 1659718411252,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1701,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d99abb6d65fd48db3bbf6aad523e7aaa793781ec",
          "message": "ICU-21957 integrate CLDR release-42-alpha1b to ICU main for 72",
          "timestamp": "2022-08-09T16:05:20-07:00",
          "tree_id": "114745d9b1092b441127d501c28853c12f8182a3",
          "url": "https://github.com/unicode-org/icu/commit/d99abb6d65fd48db3bbf6aad523e7aaa793781ec"
        },
        "date": 1660087260594,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.5762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.5758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.6348,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.1971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.2634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0eecb25011de051c57f68c75d767ad3586de7859",
          "message": "ICU-22101 Error prone reports \"StringSplitter\" error in PluralRules.java\n\nString.split(String) and Pattern.split(CharSequence) have surprising behaviour.\n\"a::b:\".split(\":\") produces [\"a\", \"b\"], when one would expect [\"a\", \"\", \"b\", \"\"]\n\nThe recommended fix is to use the Guava Splitter, or setting an explicit limit:\nString.split(String,int limit) and Pattern.split(CharSequence,int limit)",
          "timestamp": "2022-08-11T08:27:19-07:00",
          "tree_id": "724c7700b37e1fcbaf574d25414c4370ec250537",
          "url": "https://github.com/unicode-org/icu/commit/0eecb25011de051c57f68c75d767ad3586de7859"
        },
        "date": 1660232445935,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3ef03a408714cf0be1f6be62e3fad57757403da3",
          "message": "ICU-21947 Replace FixedDecimal with DecimalQuantity in PluralRule sample parsing\n\nSee #2007",
          "timestamp": "2022-08-11T15:10:37-07:00",
          "tree_id": "2216414cc87171c10282454fcf0a35d917a80fbd",
          "url": "https://github.com/unicode-org/icu/commit/3ef03a408714cf0be1f6be62e3fad57757403da3"
        },
        "date": 1660256970444,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8492a8291670aa0af0f3fa6c088ddaf4ff373833",
          "message": "ICU-22105 Fixed the unit-conversion logic to work correctly with negative temperature values.",
          "timestamp": "2022-08-16T10:18:24-07:00",
          "tree_id": "ade7eb2c651708551e62d475d3987927dec81353",
          "url": "https://github.com/unicode-org/icu/commit/8492a8291670aa0af0f3fa6c088ddaf4ff373833"
        },
        "date": 1660671246843,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1831,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1842,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "59615c93f694227eaacf242d22a549c316557cdf",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:53:56-07:00",
          "tree_id": "4f51bc73e1477d7f636740f5506076ee6756f1af",
          "url": "https://github.com/unicode-org/icu/commit/59615c93f694227eaacf242d22a549c316557cdf"
        },
        "date": 1660691438232,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.6527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.6485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.6987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.1394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.1402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.1866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "01c194a366f2b18dd89cae4952e60c4719897d1f",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:54:01-07:00",
          "tree_id": "1431d8b0ce6c447915eebcb86c86a9307f8df52f",
          "url": "https://github.com/unicode-org/icu/commit/01c194a366f2b18dd89cae4952e60c4719897d1f"
        },
        "date": 1660691767213,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.4733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.4762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.5641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "26733782601ec384b8070019a8121795f01000cd",
          "message": "ICU-22118 tzdata2022b updates in icu code\n\nSee #2157",
          "timestamp": "2022-08-18T19:12:31-04:00",
          "tree_id": "5db269c3b030282c375195f2c01fbe94b8459a95",
          "url": "https://github.com/unicode-org/icu/commit/26733782601ec384b8070019a8121795f01000cd"
        },
        "date": 1660865397771,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.1904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.1914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.2677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b95c6b1f3eb12eb84c2dabe438fe36be55a0772c",
          "message": "ICU-21946 RBBI Break Cache Optimizations\n\nAdjust RuleBasedBreakIterator::BreakCache::populateNear() to retain the cache\nthe cache contents in additional cases where are still useful, resulting in\nimproved performance.\n\nThis change is related to PR #2039, which addressed the same problem. This one\nretains the cache contents in more situations.",
          "timestamp": "2022-08-20T16:16:30-07:00",
          "tree_id": "4d8c5b400952f14136ae2a89ba22db2a736a2745",
          "url": "https://github.com/unicode-org/icu/commit/b95c6b1f3eb12eb84c2dabe438fe36be55a0772c"
        },
        "date": 1661038194676,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.6702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.purdie@linuxfoundation.org",
            "name": "Richard Purdie",
            "username": "rpurdie"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23",
          "message": "ICU-22109 icu-config hardcodes build paths unnecessarily\n\nThe makefile hardcodes paths to the build directory into icu-config. It doesn’t\nneed to do this and it unnecessarily breaks build reproducibility. This patch\nmakes a simple change to avoid this.\n\nSigned-off-by: Richard Purdie <richard.purdie@linuxfoundation.org>",
          "timestamp": "2022-08-22T15:02:39-05:00",
          "tree_id": "2f9a426bc80fc925c0774e0e8263f93d45635d65",
          "url": "https://github.com/unicode-org/icu/commit/4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23"
        },
        "date": 1661199795722,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.0014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ca9bdb97801cb1d0383c36b66b43bf0587b7697a",
          "message": "ICU-21957 integrate CLDR release-42-alpha2 to ICU main for 72",
          "timestamp": "2022-08-22T13:07:59-07:00",
          "tree_id": "b48551e7f45f096b68a791d5158448659d5c0d62",
          "url": "https://github.com/unicode-org/icu/commit/ca9bdb97801cb1d0383c36b66b43bf0587b7697a"
        },
        "date": 1661200198111,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4804,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8c669a7c2e6da8a1fbff1c5054bfffccb115c769",
          "message": "ICU-22012 Add more Japanese words into the dictionary",
          "timestamp": "2022-08-23T10:18:45-07:00",
          "tree_id": "9f7136671717ceea712b975ae541f65937d4ab53",
          "url": "https://github.com/unicode-org/icu/commit/8c669a7c2e6da8a1fbff1c5054bfffccb115c769"
        },
        "date": 1661276029717,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.8553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49d192fefe09fcc38547203487cf4e63d2dad61f",
          "message": "ICU-22112 word break updates for @,colon; colon tailorings for fi,sv\n\nSee #2159",
          "timestamp": "2022-08-23T12:45:55-07:00",
          "tree_id": "860bf4fdbcdb8953fab05089e4b3d0b92fbd27bc",
          "url": "https://github.com/unicode-org/icu/commit/49d192fefe09fcc38547203487cf4e63d2dad61f"
        },
        "date": 1661284785629,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.0008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.613,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "37e295627156bc334e1f1e88807025fac984da0e",
          "message": "ICU-21957 ICU4J API status and change report",
          "timestamp": "2022-08-26T11:33:50-07:00",
          "tree_id": "22673db46dd386a73e7498417bba169e1e62c780",
          "url": "https://github.com/unicode-org/icu/commit/37e295627156bc334e1f1e88807025fac984da0e"
        },
        "date": 1661539698412,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.0136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.0075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.3683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3e6219ba4d309acb7f48deca96100127ade8d084",
          "message": "ICU-21957 BRS72 organize import statements",
          "timestamp": "2022-08-30T19:34:01-04:00",
          "tree_id": "b0d2f65c1c26b0904a5b30ddac24f9151758e67f",
          "url": "https://github.com/unicode-org/icu/commit/3e6219ba4d309acb7f48deca96100127ade8d084"
        },
        "date": 1661904455525,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.5208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.4155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.4677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.9236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.8976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.9384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3d935f2d493bc613d9884a7878d04fb5515f5005",
          "message": "ICU-21957 BRS72 Updating currency numeric code data.",
          "timestamp": "2022-08-30T19:34:49-04:00",
          "tree_id": "f1ca2d572a984c9eac3146ef873f3cd4e95cdb74",
          "url": "https://github.com/unicode-org/icu/commit/3d935f2d493bc613d9884a7878d04fb5515f5005"
        },
        "date": 1661904820006,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.5323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.2964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.0033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.6516,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.4612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.3959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "5334e2819d769c5992dae2c07a999b90e26db308",
          "message": "ICU-21958 ICU 70 API Promotions",
          "timestamp": "2022-08-31T15:38:22-07:00",
          "tree_id": "3e789d667b6ae477513c5444f8705583ac00b853",
          "url": "https://github.com/unicode-org/icu/commit/5334e2819d769c5992dae2c07a999b90e26db308"
        },
        "date": 1661986273792,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8050af54847348504a879564c28008203510201d",
          "message": "ICU-21980 Unicode 15 update 2022aug30",
          "timestamp": "2022-08-31T16:15:42-07:00",
          "tree_id": "95cbedfa8185c379bfc37eb45bca48716bae6869",
          "url": "https://github.com/unicode-org/icu/commit/8050af54847348504a879564c28008203510201d"
        },
        "date": 1661988625541,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.3764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.4752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.4151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.8402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.9492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.9354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9acba58c493123234b9c3ed4326d35d8f73cbcc1",
          "message": "ICU-22116 Updating minimum Java runtime support to Java 8",
          "timestamp": "2022-09-01T13:02:27-04:00",
          "tree_id": "3effaf2286da632e64849215f3216eb05a4448f1",
          "url": "https://github.com/unicode-org/icu/commit/9acba58c493123234b9c3ed4326d35d8f73cbcc1"
        },
        "date": 1662052642451,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.5368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4ab713b1c6fb604d3854e7781bee2051878d6814",
          "message": "ICU-22081 Added missing copyright notice to PersonName.java.",
          "timestamp": "2022-09-01T13:36:05-07:00",
          "tree_id": "30653b09944911ad017a064338ff8254052c36ae",
          "url": "https://github.com/unicode-org/icu/commit/4ab713b1c6fb604d3854e7781bee2051878d6814"
        },
        "date": 1662065384859,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.7517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.7702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.0912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.1872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "baa104b50b51218b35e4bd629aa45f3ea88a4a96",
          "message": "ICU-21957 Clean-up of TODO and logKnownIssue entries (BRS task):\n\nRemoved logKnownIssue(ICU-21322) in plurults.cpp, ICU-21322 is done and the\nentire if-statement was commented out.\n\nReplaced CLDR-13700 with CLDR-13701 in several TODOs. 13700 is a duplicate of\n13701.\n\nLikewise for CLDR-14502 --> CLDR-14582.\n\nPR#1999 from ICU 71 release missed some of the cases.",
          "timestamp": "2022-09-02T09:54:57-07:00",
          "tree_id": "91b7432c24997b436155399ab6c285c33f6ed5ee",
          "url": "https://github.com/unicode-org/icu/commit/baa104b50b51218b35e4bd629aa45f3ea88a4a96"
        },
        "date": 1662138480678,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.9766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "6e3a9230563b97cb925723a6d9e91888396f2035",
          "message": "ICU-22116 Update CI job for ICU4J to use Java 8 instead of Java 7\n\nSee #2173",
          "timestamp": "2022-09-06T09:09:22-07:00",
          "tree_id": "c82f414f17d7a8f69e9a123155d5900893e5f77e",
          "url": "https://github.com/unicode-org/icu/commit/6e3a9230563b97cb925723a6d9e91888396f2035"
        },
        "date": 1662481319807,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "00003dcbf2065d79fa45f8d53ef779861f71adb5",
          "message": "ICU-21957 Update TODO ticket reference: CLDR-13044 (done) ---> ICU-21420 (open).",
          "timestamp": "2022-09-06T09:14:07-07:00",
          "tree_id": "4d26f8c373ecc777e50d8ad362170299340629a3",
          "url": "https://github.com/unicode-org/icu/commit/00003dcbf2065d79fa45f8d53ef779861f71adb5"
        },
        "date": 1662482166481,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9209,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9205,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "030fa1a4791ee7c2f58505ebb61253c3032916ec",
          "message": "ICU-21148 Consistently use standard lowercase true/false everywhere.\n\nThis is the normal standard way in C, C++ as well as Java and there's no\nlonger any reason for ICU to be different. The various internal macros\nproviding custom boolean constants can all be deleted and code as well\nas documentation can be updated to use lowercase true/false everywhere.",
          "timestamp": "2022-09-07T20:56:33+02:00",
          "tree_id": "849f746cda1267d213f8ae31b557ea7d847f3acc",
          "url": "https://github.com/unicode-org/icu/commit/030fa1a4791ee7c2f58505ebb61253c3032916ec"
        },
        "date": 1662578077731,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9847,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "03b94e9cb3045072c73d50938ee0e14597d24ce0",
          "message": "ICU-22068 Cleanup inconsistent annotations between declarations and definitions\n\nThis cleans up inconsistent annotations between declared APIs in headers\nvs defined implementations in cpp's. This better ensures the API's\nreferenceable in headers represent what is exposed and defined in the\nultimate binary library's symbol table.",
          "timestamp": "2022-09-08T08:34:56-07:00",
          "tree_id": "a65dc75f11c10725ce59a87a1d3376169142f030",
          "url": "https://github.com/unicode-org/icu/commit/03b94e9cb3045072c73d50938ee0e14597d24ce0"
        },
        "date": 1662652016999,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d",
          "message": "ICU-22114 Update pipeline workflows to use macOS-latest",
          "timestamp": "2022-09-08T09:02:31-07:00",
          "tree_id": "6d3af8477fed20b557199ee7fe82c616f56eb3b8",
          "url": "https://github.com/unicode-org/icu/commit/bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d"
        },
        "date": 1662653789965,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4903,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "48124d170635f4abcd7440c5beeb6ea9878de32b",
          "message": "ICU-22072 Update Darwin Specific Macros\n\n* Update `U_PF_IPHONE` to be 0 when building for macOS/macCatalyst.\n* add macro definition for `attribute((visibility(\"hidden\")))` for cases\n  where internal structs exist within exposed classes.",
          "timestamp": "2022-09-08T09:08:57-07:00",
          "tree_id": "0dafe5b7ad2082eb0fdf56246a27bbef07669cd9",
          "url": "https://github.com/unicode-org/icu/commit/48124d170635f4abcd7440c5beeb6ea9878de32b"
        },
        "date": 1662654599373,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "1de1e36d6f6050d05b2db027f4c64ae6823eae2a",
          "message": "ICU-21957 integrate CLDR release-42-alpha3 to ICU main for 72",
          "timestamp": "2022-09-08T18:19:10-07:00",
          "tree_id": "43c37bedd13165396856bfd9fd7a067a73e93291",
          "url": "https://github.com/unicode-org/icu/commit/1de1e36d6f6050d05b2db027f4c64ae6823eae2a"
        },
        "date": 1662687788433,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5",
          "message": "ICU-21957 BRS 72rc, update urename.h",
          "timestamp": "2022-09-08T18:19:30-07:00",
          "tree_id": "0c076a705771be959218146920f7658d04800557",
          "url": "https://github.com/unicode-org/icu/commit/d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5"
        },
        "date": 1662688496623,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.9228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.9042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "5de6ee0c61b38feb4e35b842bc81d9d8030d2afa",
          "message": "ICU-21959 fix DateIntervalFormat general usage example",
          "timestamp": "2022-09-08T18:59:19-07:00",
          "tree_id": "0397c38bdb1077ee68baebac985ebe4ad514188a",
          "url": "https://github.com/unicode-org/icu/commit/5de6ee0c61b38feb4e35b842bc81d9d8030d2afa"
        },
        "date": 1662689992561,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.47,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4691,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44496574+floratmin@users.noreply.github.com",
            "name": "floratmin",
            "username": "floratmin"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "1dfe456fe8a98de1f8ea966c45ef157f16160da6",
          "message": "ICU-21983 Fix fraction precision skeleton\n\nSee #2058",
          "timestamp": "2022-09-08T20:17:48-07:00",
          "tree_id": "3d308762dd0f304b04e153e238616d745d769ee9",
          "url": "https://github.com/unicode-org/icu/commit/1dfe456fe8a98de1f8ea966c45ef157f16160da6"
        },
        "date": 1662694434437,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.0004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.6281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.6288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "baee21aa7ac4ad952dd93c3430326f35cc54941b",
          "message": "ICU-22125 Add note about future deprecation to MeasureUnit createMetricTon/getMetricTon/METRIC_TON",
          "timestamp": "2022-09-08T20:59:07-07:00",
          "tree_id": "0de5e44d6f2ee5329452d8a04fed8b26ad09528d",
          "url": "https://github.com/unicode-org/icu/commit/baee21aa7ac4ad952dd93c3430326f35cc54941b"
        },
        "date": 1662697230105,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.6832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.7795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.9962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.3638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.4915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.5068,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b9fdd2a7cfcf77454762ce9479bdfc40fe14168e",
          "message": "ICU-22025 Rename the enum type for Hebrew calendar to Month",
          "timestamp": "2022-09-09T01:29:06-07:00",
          "tree_id": "7fa42099194411991193f0d32c484edf4a92baa6",
          "url": "https://github.com/unicode-org/icu/commit/b9fdd2a7cfcf77454762ce9479bdfc40fe14168e"
        },
        "date": 1662712900818,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.2071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.14,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.3188,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.7197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.9003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "e4df3043677bf7fc10ec03c8cc37142fc46a7fda",
          "message": "ICU-21957 Update double-conversion to 256ac809561b756645e73ab7127c2aaaeabaa427\n\nSee #2179",
          "timestamp": "2022-09-09T15:47:12-07:00",
          "tree_id": "ca2a638aaa9226a53a37118d05ee384d7996789f",
          "url": "https://github.com/unicode-org/icu/commit/e4df3043677bf7fc10ec03c8cc37142fc46a7fda"
        },
        "date": 1662764947401,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5157,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "krlmlr@users.noreply.github.com",
            "name": "Kirill Müller",
            "username": "krlmlr"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "a48ae42864e8fcb702a5dfb6f6a076e4dde7e397",
          "message": "ICU-22117 Replace uprv_strncpy() by uprv_memcpy()\n\nThis fixes a warning on gcc 9.4.0, which is triggered because the third argument to strncpy() depends on the length of the second argument (but should actually indicate the buffer size). Replacing by memcpy() seems harmless because a null terminator is appended further below, and the buffer is sized to be \"large enough\" elsewhere.\n\nSee https://github.com/duckdb/duckdb/issues/4391 for details.\n\nFixing the warning is important for us, because the checks in the duckdb repository treat all warnings as errors.",
          "timestamp": "2022-09-09T17:07:53-07:00",
          "tree_id": "5204a95a33d0eb3b78a5a30a3fee3cee294a0da7",
          "url": "https://github.com/unicode-org/icu/commit/a48ae42864e8fcb702a5dfb6f6a076e4dde7e397"
        },
        "date": 1662770088675,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.8259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.6353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.3455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.8359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.9466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "99dee47fb783b1839af5cc742797ba5cdf8924ac",
          "message": "ICU-21959 add the uemoji feature to ICU Data Build Tool chapter",
          "timestamp": "2022-09-12T08:57:06-07:00",
          "tree_id": "5d7f297d26373540044bd9d1355a8b92bf240108",
          "url": "https://github.com/unicode-org/icu/commit/99dee47fb783b1839af5cc742797ba5cdf8924ac"
        },
        "date": 1662999061566,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.0601,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.0102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.9933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.5832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cfd99f3f3f309fc224a43377395085bea58b58cb",
          "message": "ICU-22143 Increase COMPACT_MAX_DIGITS from 15 to 20, needed for new ja data",
          "timestamp": "2022-09-12T17:17:19-07:00",
          "tree_id": "587d6e1872cc987a2bd6e5d4d8f00882be138e94",
          "url": "https://github.com/unicode-org/icu/commit/cfd99f3f3f309fc224a43377395085bea58b58cb"
        },
        "date": 1663029238035,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.6648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.3615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.4631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.2351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "06259cc6c33d220108d68818a9cdaec8942f9552",
          "message": "ICU-21957 integrate CLDR release-42-beta1 to ICU main for 72",
          "timestamp": "2022-09-13T11:18:37-07:00",
          "tree_id": "cb8a27062497043f6cc5be9122738e0d43981cad",
          "url": "https://github.com/unicode-org/icu/commit/06259cc6c33d220108d68818a9cdaec8942f9552"
        },
        "date": 1663094006857,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.5037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "db5903479332caf213e3d6813dfa75ed7e91720c",
          "message": "ICU-22124 Adding a tech preview implementation of MessageFormat v2\n\nSee #2170",
          "timestamp": "2022-09-15T10:32:13-07:00",
          "tree_id": "5bf067f7e5996c2571bf2c901465dd8757b4af77",
          "url": "https://github.com/unicode-org/icu/commit/db5903479332caf213e3d6813dfa75ed7e91720c"
        },
        "date": 1663263950517,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b7340487995b6db9e70567690d2d14870739e97f",
          "message": "ICU-21957 fix NumberFormatterSettings::unitDisplayCase status, remove FormattedNumber:getGender",
          "timestamp": "2022-09-16T08:34:28-07:00",
          "tree_id": "9b37f45d9b4d6104f4c533de4df87c275083a6b9",
          "url": "https://github.com/unicode-org/icu/commit/b7340487995b6db9e70567690d2d14870739e97f"
        },
        "date": 1663343313731,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.5891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.5831,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.3352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.5615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9dc1c020a19a5b950af3e6304b97e7396b92aaaf",
          "message": "ICU-20512 Add extra matchers to handle empty currency symbols",
          "timestamp": "2022-09-16T09:00:50-07:00",
          "tree_id": "24a6fbc2a421138fe4900be8283523091a3cfbc7",
          "url": "https://github.com/unicode-org/icu/commit/9dc1c020a19a5b950af3e6304b97e7396b92aaaf"
        },
        "date": 1663344812579,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "498abf69611ca32ed41c5811f82ab7dfcb244757",
          "message": "ICU-21125 Improvements to resource fallback:\n\n- Added code to use the parentLocales data in supplementalData.xml to determine the \"parent locale ID\" to use when\n  the requested resource bundle is not present (ICU-21126).\n- Added code to change the parent-chain search path to handle the script better (ICU-21125; algorithm was described\n  in CLDR-15265):\n  - The base search patch is now ll_Ssss_RR -> ll_RR -> ll_Ssss -> ll -> root\n  - If the requested script is not the default script for the requested language and region, we automatically\n    avoid fallbacks that will implicitly change the script.\n- Added new code to the CLDR-to-ICU data generation tool to generate source code, and used it to generate the lookup\n  tables for the new resource-fallback logic (we can't use the existing resource files for this, since that would\n  involve opening a resource bundle while trying to open another resource bundle).  The data-generation stuff is\n  intended to be generic enough to allow for us to generate more static data tables in the future.\n- Commented out a few collator tests, and changed one resource bundle test, because they're incompatible with the\n  new fallback logic (specifically, the default-script logic).",
          "timestamp": "2022-09-16T14:26:50-07:00",
          "tree_id": "4e378c360728a7aa22646c603405ea06d07168d3",
          "url": "https://github.com/unicode-org/icu/commit/498abf69611ca32ed41c5811f82ab7dfcb244757"
        },
        "date": 1663364443593,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "17435c4533c173b228d60e47413f35c1c6a9d748",
          "message": "ICU-22151 Update timezone-region supplementation mapping data for Jan Mayen and some others",
          "timestamp": "2022-09-16T16:49:42-07:00",
          "tree_id": "b53cde68b9a46dfbf1b6ce2fe8afcb340e7a4275",
          "url": "https://github.com/unicode-org/icu/commit/17435c4533c173b228d60e47413f35c1c6a9d748"
        },
        "date": 1663373407162,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "e646ea23e9988fff220ae8c135adf577dfe4c65c",
          "message": "ICU-20512 ICU4J: just add test of parse with empty curr symbol, code already works",
          "timestamp": "2022-09-16T19:01:06-07:00",
          "tree_id": "99ac611eaa8870e031f49960b83b84848d839c25",
          "url": "https://github.com/unicode-org/icu/commit/e646ea23e9988fff220ae8c135adf577dfe4c65c"
        },
        "date": 1663381025358,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.62,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b403a10e514d7317999c78a53e300b15c85616a5",
          "message": "ICU-21957 integrate CLDR release-42-beta1b to ICU main for 72",
          "timestamp": "2022-09-19T14:43:59-07:00",
          "tree_id": "04722e603f2a579cf386a39865f6ee0178114e18",
          "url": "https://github.com/unicode-org/icu/commit/b403a10e514d7317999c78a53e300b15c85616a5"
        },
        "date": 1663624703671,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.8088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.5596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.8506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.4189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.2082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.5036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f5367befba65cc6a94cea5ff557bf72f1af9254c",
          "message": "ICU-22124 Update the MessageFormat v2 links to the main branch",
          "timestamp": "2022-09-20T16:47:38-07:00",
          "tree_id": "6a3c5be851b439f5e83d53d6b21a2431eedb8e83",
          "url": "https://github.com/unicode-org/icu/commit/f5367befba65cc6a94cea5ff557bf72f1af9254c"
        },
        "date": 1663719554807,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.1387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.1762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.5505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.6474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "dbfe83010856a58698edf68476ef693236f49a5a",
          "message": "ICU-22122 Support Locale Tags (ms, mu and rg)\n\nSee #2182",
          "timestamp": "2022-09-20T16:51:24-07:00",
          "tree_id": "4817fd24c8d0124c0b6375b844fafa8a93c32998",
          "url": "https://github.com/unicode-org/icu/commit/dbfe83010856a58698edf68476ef693236f49a5a"
        },
        "date": 1663720349574,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "b08e51fa911c03c9b98eed36594b1c1970e2ccf9",
          "message": "ICU-21957 BRS72RC Update version number and regenerate configure",
          "timestamp": "2022-09-21T12:06:18+05:30",
          "tree_id": "1cdef136e269849dc95bf823bc26c3cf34ced39d",
          "url": "https://github.com/unicode-org/icu/commit/b08e51fa911c03c9b98eed36594b1c1970e2ccf9"
        },
        "date": 1663743047288,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.8472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.0628,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.8776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "b23d6c1afe339a09da31943f5fe104cd3f2689ff",
          "message": "ICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\n\nICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\r\n\r\nFix for apireport, see #2193",
          "timestamp": "2022-09-21T11:50:09-07:00",
          "tree_id": "2d04f8c14ced0ad2bb157e2c6f7df13de67bcf0d",
          "url": "https://github.com/unicode-org/icu/commit/b23d6c1afe339a09da31943f5fe104cd3f2689ff"
        },
        "date": 1663787383833,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.8515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.8263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.8349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.3328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.2857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.3659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "4f707beadeb1bccdbe15fc45c7fa03b13141a959",
          "message": "ICU-21957 Update ICU4J & ICU4C Change Reports BRS#19 and BRS#20\n\nSee #2193",
          "timestamp": "2022-09-21T16:16:28-07:00",
          "tree_id": "525225c26a294115e70799ecf39e6a85b6810271",
          "url": "https://github.com/unicode-org/icu/commit/4f707beadeb1bccdbe15fc45c7fa03b13141a959"
        },
        "date": 1663802937784,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "329c95e3b9df2d22fb20b02044a035fb509ef5f4",
          "message": "ICU-21957 BRS72 Cleanup import statements",
          "timestamp": "2022-09-22T08:07:12-04:00",
          "tree_id": "fd306139753f0b8e767268d57390120887aa73d9",
          "url": "https://github.com/unicode-org/icu/commit/329c95e3b9df2d22fb20b02044a035fb509ef5f4"
        },
        "date": 1663849173345,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0c9d6f6b856c698bf8631c3971ff1fd8581b402b",
          "message": "ICU-21957 Fix status tags for U_HIDDEN, unum_hasAttribute",
          "timestamp": "2022-09-22T10:50:22-07:00",
          "tree_id": "284aa4e537dcb92e7f3c21d350654e469bc666fb",
          "url": "https://github.com/unicode-org/icu/commit/0c9d6f6b856c698bf8631c3971ff1fd8581b402b"
        },
        "date": 1663870139112,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 12.0019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 12.0189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 12.1309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.5869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.6906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.6675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "b5acb0ffc2fee16bf09bb657b19278c60f9f03e0",
          "message": "ICU-21957 Fixed java compiler warnings",
          "timestamp": "2022-09-22T16:37:56-04:00",
          "tree_id": "29fa83c5f6eaf9f033d4bd23b94f0a6101619241",
          "url": "https://github.com/unicode-org/icu/commit/b5acb0ffc2fee16bf09bb657b19278c60f9f03e0"
        },
        "date": 1663880534439,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.8778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "306be3ddf6160ac4799a20dc67704891101dc9bd",
          "message": "ICU-21957 BRS72 J API signature file",
          "timestamp": "2022-09-22T16:39:47-04:00",
          "tree_id": "b9e110ee3d076db6c0277539125e2e7d750e8cc0",
          "url": "https://github.com/unicode-org/icu/commit/306be3ddf6160ac4799a20dc67704891101dc9bd"
        },
        "date": 1663881394335,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.8177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.2911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ef706cddf1aa4a94b796411925bbf4be63a110a8",
          "message": "ICU-21957 BRS72 ICU4J serialization test data",
          "timestamp": "2022-09-22T16:49:16-04:00",
          "tree_id": "7a931aa92a3a77163857f33bf61fc2279fb77205",
          "url": "https://github.com/unicode-org/icu/commit/ef706cddf1aa4a94b796411925bbf4be63a110a8"
        },
        "date": 1663882733201,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.4632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.9029,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.9025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9169,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cd12cebb8768edc4d47c158c903be40c32af4cde",
          "message": "ICU-21879 Fix UserGuide link to info in Korean transliteration",
          "timestamp": "2022-09-22T13:54:40-07:00",
          "tree_id": "92eec4df02a7500358b90dad09e005b9fd90cac1",
          "url": "https://github.com/unicode-org/icu/commit/cd12cebb8768edc4d47c158c903be40c32af4cde"
        },
        "date": 1663883154005,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.1849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.6884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7c1f8d675b2424e07942010cfd86feabaa83a6cc",
          "message": "ICU-21957 update API Changes in ICU4C 72",
          "timestamp": "2022-09-22T14:55:24-07:00",
          "tree_id": "c83ef7f23364370852bacc7dbe033e770de8dd2b",
          "url": "https://github.com/unicode-org/icu/commit/7c1f8d675b2424e07942010cfd86feabaa83a6cc"
        },
        "date": 1663884919696,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8f5529f30d25b282dfd7b12f87b1b69ab704a0eb",
          "message": "ICU-20894 Add UserGuide info on date pattern chars B, b",
          "timestamp": "2022-09-22T16:14:44-07:00",
          "tree_id": "1d83d348bba378665bf1005bb1d2c53b30ca1bb6",
          "url": "https://github.com/unicode-org/icu/commit/8f5529f30d25b282dfd7b12f87b1b69ab704a0eb"
        },
        "date": 1663889333094,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.2806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.7132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.7531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663890661582,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.5258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.5261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.5142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.8687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.9061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663891588848,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.4746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.4801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.4755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.5822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.6393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.8354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5",
          "message": "ICU-22158 Make TestAlgorithmicParentFallback() test more robust to different default locales.",
          "timestamp": "2022-09-23T13:37:42-07:00",
          "tree_id": "fcd14af32a7124526598b13771c483a8314acedd",
          "url": "https://github.com/unicode-org/icu/commit/2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5"
        },
        "date": 1663966487413,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9346,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6",
          "message": "ICU-22081 Fix table in PersonNameFormatter Javadoc.",
          "timestamp": "2022-09-26T16:17:17-07:00",
          "tree_id": "7e8bb38007c260785083dae5351b83062631707e",
          "url": "https://github.com/unicode-org/icu/commit/e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6"
        },
        "date": 1664235617335,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.0072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.1692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.3236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.4389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e72233f8b7526bbb840ae7742948a892686acfee",
          "message": "ICU-21959 fix file-level doxygen issues",
          "timestamp": "2022-09-27T15:58:43-07:00",
          "tree_id": "e935fae45795ccdd00637839bd409b521f5265ff",
          "url": "https://github.com/unicode-org/icu/commit/e72233f8b7526bbb840ae7742948a892686acfee"
        },
        "date": 1664320742079,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.2366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.1878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.2598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.6771,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49b08b414d5cb03901eaeca5e223ec835f59d3c5",
          "message": "ICU-21958 integrate CLDR release-42-beta2 to ICU main for 72",
          "timestamp": "2022-09-29T10:12:36-07:00",
          "tree_id": "9f70acc7afe174eafa0a00cbe205f70fc144472d",
          "url": "https://github.com/unicode-org/icu/commit/49b08b414d5cb03901eaeca5e223ec835f59d3c5"
        },
        "date": 1664472406983,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.4554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.04,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.0897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "702e529d31acf4a2ae225147876be7ac99c11a74",
          "message": "ICU-22165 Update ICU tzdata to 2022d",
          "timestamp": "2022-09-30T15:56:00-04:00",
          "tree_id": "0ac7309770029b5e6a07ef9634629c85e5de1c75",
          "url": "https://github.com/unicode-org/icu/commit/702e529d31acf4a2ae225147876be7ac99c11a74"
        },
        "date": 1664568683249,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "fe17bab2bb1499a30f10453228ab31173f0d2e83",
          "message": "ICU-21958 integrate CLDR release-42-beta3 to ICU main for 72",
          "timestamp": "2022-10-06T08:40:32-07:00",
          "tree_id": "d7afe17aae18d2fa4edc38a5a0d269d7ca13be5b",
          "url": "https://github.com/unicode-org/icu/commit/fe17bab2bb1499a30f10453228ab31173f0d2e83"
        },
        "date": 1665071749703,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8437,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.5655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "599ecdc4a181062c47ea500a72145c40e42982d8",
          "message": "ICU-21958 Improved process for Releasing ICU API Docs",
          "timestamp": "2022-10-06T09:07:55-07:00",
          "tree_id": "d63d033e13575c68686acb09a088dff586018ce8",
          "url": "https://github.com/unicode-org/icu/commit/599ecdc4a181062c47ea500a72145c40e42982d8"
        },
        "date": 1665073453347,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 9.464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 9.4598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 9.488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 10.0585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 10.0567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 10.0901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "be9a07907c7bc452bdcf9ec8b3511338718aa2cf",
          "message": "ICU-21958 Fix typo in displayoptions.h documentation",
          "timestamp": "2022-10-06T11:21:21-07:00",
          "tree_id": "2071800fd38dfad3febb25135d4322865b313800",
          "url": "https://github.com/unicode-org/icu/commit/be9a07907c7bc452bdcf9ec8b3511338718aa2cf"
        },
        "date": 1665081311804,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.3927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.9706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1462,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe@felipegasper.com",
            "name": "Felipe Gasper",
            "username": "FGasper"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ff4ecd9f5017b940a7a29e5a25a70289dc3652db",
          "message": "ICU-22170 Fix typo in resource bundle documentation.\n\nhttps://unicode-org.atlassian.net/browse/ICU-22170",
          "timestamp": "2022-10-06T13:00:31-07:00",
          "tree_id": "7cbd9ccfdce9b92a9b79154d1263690414f6ac98",
          "url": "https://github.com/unicode-org/icu/commit/ff4ecd9f5017b940a7a29e5a25a70289dc3652db"
        },
        "date": 1665087311528,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.7088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.7153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.7492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.3468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.4144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "c203003b173fb867db26ebb2e838ca142400d1bb",
          "message": "ICU-21958 Revise C++ API Change reports\n\nAfter updating icu4c displayoptions.h",
          "timestamp": "2022-10-07T09:57:56-07:00",
          "tree_id": "09efaf3a4e405b24546df4f4bf982b08910341a3",
          "url": "https://github.com/unicode-org/icu/commit/c203003b173fb867db26ebb2e838ca142400d1bb"
        },
        "date": 1665162730411,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 11.3289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 11.3254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 11.39,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 12.0734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 12.072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 12.1545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "18182903cdabff007d90be4fd6b3743e753f5e22",
          "message": "ICU-22356 Use ConstChar16Ptr to safely cast from UChar* to char16_t*.\n\nThis is necessary for this header file to be usable by clients that\ndefine UCHAR_TYPE as a type not compatible with char16_t, eg. uint16_t.",
          "timestamp": "2023-05-18T10:47:55-07:00",
          "tree_id": "38ff36de982b5159afbc7c6833f55027bd2015b3",
          "url": "https://github.com/jalaj-microsoft/icu/commit/18182903cdabff007d90be4fd6b3743e753f5e22"
        },
        "date": 1685074478666,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.4177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.4284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.4041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.2826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.2938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.4522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "distinct": true,
          "id": "8dc0aa7bb85f8fbde54eb6ba987c1003eac80741",
          "message": "version number update",
          "timestamp": "2023-05-26T08:43:02+05:30",
          "tree_id": "5e6d78a1d340212aa4f84b4c70adea5b2e15791c",
          "url": "https://github.com/jalaj-microsoft/icu/commit/8dc0aa7bb85f8fbde54eb6ba987c1003eac80741"
        },
        "date": 1685075675116,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7942,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.8075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "distinct": true,
          "id": "4813cf51679fa4448bbdf90064932d45baa1606e",
          "message": "ICU-22389 Version number update",
          "timestamp": "2023-05-26T10:53:57+05:30",
          "tree_id": "5e6d78a1d340212aa4f84b4c70adea5b2e15791c",
          "url": "https://github.com/jalaj-microsoft/icu/commit/4813cf51679fa4448bbdf90064932d45baa1606e"
        },
        "date": 1685081504246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.8388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.8484,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.5229,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.5072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.6021,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "distinct": true,
          "id": "c294f6c6b4cf82be38e38e9f4536fd458f5f8ec6",
          "message": "ICU-22389 missing jar files",
          "timestamp": "2023-05-26T17:33:46+05:30",
          "tree_id": "b1c677500825002880dbd8cc45d677f3d9c9e1c5",
          "url": "https://github.com/jalaj-microsoft/icu/commit/c294f6c6b4cf82be38e38e9f4536fd458f5f8ec6"
        },
        "date": 1685105506850,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 10.6363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 10.6676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 10.5858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 11.7768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 11.8225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 11.9171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "distinct": true,
          "id": "7082ca887858c63c6e5f459632e2cf55a5e7fd0f",
          "message": "ICU-22389 Version number update",
          "timestamp": "2023-05-26T19:20:03+05:30",
          "tree_id": "b1c677500825002880dbd8cc45d677f3d9c9e1c5",
          "url": "https://github.com/jalaj-microsoft/icu/commit/7082ca887858c63c6e5f459632e2cf55a5e7fd0f"
        },
        "date": 1685111896772,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestICU_NFC_NFD_Text",
            "value": 8.9323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_NFC_Text",
            "value": 8.9319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFC_Orig_Text",
            "value": 8.9401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFD_Text",
            "value": 9.7444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_NFC_Text",
            "value": 9.7459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestICU_NFD_Orig_Text",
            "value": 9.7854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}