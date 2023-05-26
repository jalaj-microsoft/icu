window.BENCHMARK_DATA = {
  "lastUpdate": 1685112291846,
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
        "date": 1646687723129,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.9709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.6342,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 21.2039,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 27.2726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.8925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 34.5471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 20.2227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 13.0343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 127.91,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 21.2464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 46.4897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 37.0917,
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
        "date": 1646781983340,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.6575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.6535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.6002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.6551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.9137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.1037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.5609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.8223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 160.6396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.1973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.3594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.1063,
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
        "date": 1646782842182,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.0882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.6931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.2944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.4511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.4892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.6534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.3678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 150.6883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.5822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.7701,
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
        "date": 1646783538119,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.5512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.3321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.1556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.5313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.7608,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.9274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.0951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 160.8569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.9487,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 65.3219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.9768,
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
        "date": 1646785048122,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.1818,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.7888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.4003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.9438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 132.3933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 49.7584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.1491,
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
        "date": 1646797688844,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.1562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.4952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.3454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.1618,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.1899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.8306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.0854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.5777,
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
        "date": 1646798403576,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.1313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.8402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.4949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.3086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.8637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.1928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.5392,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.8036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.9737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.6197,
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
        "date": 1646854195632,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 25.472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 30.5239,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 40.2598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 50.1095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 49.7205,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 29.6729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.8631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 174.2079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 31.3829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 66.9547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 53.9703,
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
        "date": 1646863151281,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.5831,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.9255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.0531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.7263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 41.1722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.3582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.1776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.8306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.5464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.2988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 56.5475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.7208,
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
        "date": 1646868695178,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0804,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.6881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.2779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.4138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 132.6332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 49.8708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.0027,
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
        "date": 1646874957699,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.6767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.6079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.9186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.5817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.3517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.8306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.0065,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 55.5158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.398,
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
        "date": 1646883338288,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.4193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.1886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.1365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0266,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.3051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.7426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 55.0459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.3155,
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
        "date": 1646934825591,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.8488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.9274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.5673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.9195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.2551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.3111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 139.8679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.0708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 59.3599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.2843,
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
        "date": 1646940973512,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.7584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.4759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.8529,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.8425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.8328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.8045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6552,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.1183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.9164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.8058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.3511,
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
        "date": 1646957177193,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.4001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.1418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.1629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.2145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 142.8082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.9481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.3115,
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
        "date": 1646964819575,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.4229,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.2152,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.1895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.7871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 140.9397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.9802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.1946,
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
        "date": 1646976959809,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.4606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.7627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.5695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.5179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.4815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.6356,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.8151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.4311,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 155.9292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.0522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.1874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.3308,
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
        "date": 1647026804124,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.4202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.2022,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.1605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.2309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.9447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.1081,
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
        "date": 1647033792363,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 16.2777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.9434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.1576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.1392,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.3495,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.7339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.8948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.9523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.0701,
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
        "date": 1647288443974,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.7504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.4843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.8456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.6832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 48.2565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.5933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.2108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 165.3287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.1633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 66.5167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.0382,
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
        "date": 1647321860282,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.6815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.7548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.7633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.2799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.4475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.3075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.1996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 161.5122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.0871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.3161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.7862,
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
        "date": 1647353171748,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.3982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.8078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.4241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.3963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.7209,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.6634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 164.6922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.9017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 65.9242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.3282,
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
        "date": 1647353531557,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0918,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.3782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.7793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.9657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.7938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 162.2883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 65.8146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.3434,
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
        "date": 1647368291865,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.2112,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.1054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.2964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.8969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.9573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.1342,
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
        "date": 1647382198196,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.6721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.9914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.9527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 42.9164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.4465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.7084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 141.4399,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.5123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.1576,
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
        "date": 1647384269279,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 16.3524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.9997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.4308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.5397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.6486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 36.084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.0326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.9769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 131.7603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.5882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 48.5367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.3983,
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
        "date": 1647388016681,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.5618,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.1859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 139.1931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 57.3752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.799,
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
        "date": 1647394268198,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.3746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.0445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.2202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 143.2993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 54.97,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.2236,
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
        "date": 1647448385925,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.4746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.3447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.3621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.6682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.9561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0751,
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
        "date": 1647448390029,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.4046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.8448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.9828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.3388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.7748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.1606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.5061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.7884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 157.2184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 30.8844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.6561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.046,
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
        "date": 1647449626570,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.6498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.3744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.2909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.1741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.3917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.2867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.0334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.8101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 30.4351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.0095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 50.6044,
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
        "date": 1647535681311,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.1642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.2398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.4855,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 29.104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 36.2472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.3544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 13.607,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 134.9095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.8017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.0141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 39.9294,
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
        "date": 1647540694568,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.2078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.7951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.3148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.0053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.8153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.4984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 162.1361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.3498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 59.0191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.3646,
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
        "date": 1647543131300,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.4987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.2973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.3737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.1295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8269,
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
        "date": 1647893953075,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.6253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 25.1297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 29.4111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.3942,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.7203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.6931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.8637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.7248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 166.0507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 31.3589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.3626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.3976,
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
        "date": 1648066019137,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.6474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.7046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.8368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.3385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.1888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 162.0822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 57.9473,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.452,
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
        "date": 1648080012123,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.3955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.9657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.7595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.3113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.6328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.1148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.3968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 152.4792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.4126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.2191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 47.0778,
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
        "date": 1648081787158,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.5335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.7995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.4421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.4306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.3876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.8307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.3841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4441,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 153.0381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.0829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.7412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.054,
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
        "date": 1648157945680,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.3263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.8126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.6009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.4993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.2037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.71,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.5026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.6093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 160.1934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 30.6433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.6191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.0492,
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
        "date": 1648657689709,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.7749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.4422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.3471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.847,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 124.6032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.1513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.5198,
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
        "date": 1648667026337,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.1034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.0157,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.1211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 34.2883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 42.8674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.3458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.0054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.5475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 152.9359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.5695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.7967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.2213,
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
        "date": 1648674435668,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.9343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.4498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.6636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.6743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.4094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.9206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.0116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.8184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 156.046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.8949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.8583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.1001,
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
        "date": 1648699926450,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.7172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.9343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.1117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.0044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 48.0567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.9347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 29.032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.9859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 158.1523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.4043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.5912,
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
        "date": 1648751927661,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.1496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.3886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 21.594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.8518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 36.044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.2431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6745,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 152.817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.2215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.9149,
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
        "date": 1648770869648,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.4324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.5835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.4137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.9761,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 49.4671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.8846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.1027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.8208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.1589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.8973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 52.2798,
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
        "date": 1649089613170,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.5569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.8581,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.6247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.3866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.2777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.7789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.5112,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.9794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.7313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0676,
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
        "date": 1649275711771,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.0041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 142.1637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.5238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0353,
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
        "date": 1649713994831,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.3022,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.9763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 141.7148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.6938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.3091,
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
        "date": 1649972303056,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.2758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.9047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.8965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.3497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.2518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.8363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.2219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.5472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 142.2115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.1478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 57.3111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.6239,
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
        "date": 1649984504400,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.6195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.9958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.6768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.0526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.4588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.5235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.3863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.6025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 151.4295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.7572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.3216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 47.4644,
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
        "date": 1650482382018,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.8177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.9178,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.2629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 131.935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.1816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.5704,
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
        "date": 1651096055824,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.8275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.4003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 153.5029,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.5283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0383,
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
        "date": 1651251203011,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.1524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.7998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.1365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.4708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.9267,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.2425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.5235,
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
        "date": 1651255697286,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.9132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5311,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 141.6659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.6685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.1345,
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
        "date": 1651263097666,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.2116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.6986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.0823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.3447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.8861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.6644,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.1921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 160.9703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.5851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.8771,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 52.3397,
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
        "date": 1651265970789,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.6732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.9339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.3832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.8497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.6052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.79,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.0095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4053,
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
        "date": 1651282844359,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.3042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.0641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.4089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.7089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.9885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.2166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.0986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.0915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 161.649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.4666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.2957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.7109,
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
        "date": 1651871239345,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.8988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6601,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3923,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 142.6065,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.72,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.7629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.087,
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
        "date": 1651937913280,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.2955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.4476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.8456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 52.4802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 76.0249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.7881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.2677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.0083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.5453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.2814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.6101,
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
        "date": 1652204775829,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.8953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.7138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 169.8548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.5351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0052,
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
        "date": 1652283459878,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.1435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.5757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.1076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.1799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.7137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.6253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.3382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 157.7806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.6667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.6502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.7402,
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
        "date": 1652487434680,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.9336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.2981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.5815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.7312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.3242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.0106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.7347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.4273,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.4948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.0448,
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
        "date": 1652828447506,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.4307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7209,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7893,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.9089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.6876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.5447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.8581,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.628,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0481,
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
        "date": 1652994115809,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.4546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.6001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.1512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.1911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.7389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.3451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.4803,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.5003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.0105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 66.4896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.2336,
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
        "date": 1652995253588,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.3539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.0358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.3031,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 150.8733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.9705,
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
        "date": 1653073945408,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.6798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.0481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.9706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 133.6139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4105,
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
        "date": 1653097027110,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.6739,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.0256,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.2558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.3355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.9712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 133.1749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.9713,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.3884,
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
        "date": 1653419934786,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.1832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.3107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.7995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.1521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 42.9972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.7132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.1739,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.233,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.691,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.3772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.4624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.5449,
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
        "date": 1653435233553,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.1518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.8474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.3396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.5403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 49.6907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 29.2371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.2477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 165.0079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.7574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.1702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 52.7171,
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
        "date": 1653504095317,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.5062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.3063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.1259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.9969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.0763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.5758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.7472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.9998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 166.9843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.2167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.1268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 52.3393,
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
        "date": 1653590965684,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.9714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5607,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 138.7319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.9882,
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
        "date": 1653603433487,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.6737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.0372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.3318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.9426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.8091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.1439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 151.1452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 25.1876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.65,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 46.532,
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
        "date": 1653686508483,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.0436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.7671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.8151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.2845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.9816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 133.1825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4807,
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
        "date": 1654028292621,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.5186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.0611,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.6987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.7107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.5346,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.1341,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.0863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.0551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 163.2698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.9942,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 59.7244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.7684,
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
        "date": 1654206295616,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.3759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.1829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.0947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.8767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.2045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.5078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.0641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.5623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.2358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.6906,
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
        "date": 1654273167918,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.9502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.2551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.3833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.3377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0412,
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
        "date": 1654708486780,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.3333,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.0329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.2396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.9078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.8405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.9058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.5277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 136.6607,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.4318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.3878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 47.0682,
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
        "date": 1654732493781,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.2328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.1624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.8414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 140.7216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 55.6144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.6108,
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
        "date": 1654796224614,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.1137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.9761,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.6941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.7059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.6807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.9585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 156.6434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.8958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 66.4951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.0947,
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
        "date": 1654813076232,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.2636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.1146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.8059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.5633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.5621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.6462,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.3029,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 150.3457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.2168,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 47.9794,
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
        "date": 1655324665941,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.0086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.5134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.2681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.9802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.4602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 13.0781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 131.6445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.5513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 48.8715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.8188,
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
        "date": 1655413610597,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.8825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 29.163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 40.5694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 49.8281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.0206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.0681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 169.2398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 69.84,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.6394,
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
        "date": 1656002586446,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.8958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.0466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.5538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.8182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.1736,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.9863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.6213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 151.2047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.5441,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.9856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.7712,
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
        "date": 1656011445451,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.1387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.6989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.6362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.3922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 132.2066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.7248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8031,
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
        "date": 1656119727483,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.8163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.0238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.1086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.8456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.0444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.4046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.8401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 131.258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.5012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.2163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.9708,
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
        "date": 1656345861658,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0176,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.8754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.0357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.4145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.4627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.3117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.9166,
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
        "date": 1656348547959,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.7141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 16.8972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.1081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.0261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.5762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.0291,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.3129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.8111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.6314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.3751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.1944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.7384,
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
        "date": 1656360858575,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.9105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.7334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.3661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.8706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.3801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 133.9938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.6748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.7717,
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
        "date": 1656431965169,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.9227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.7017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.6298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.3665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.8685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.3639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 131.602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.6352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8125,
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
        "date": 1656433773857,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.7003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2302,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.2351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.2471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.0111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.9128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.0122,
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
        "date": 1656530403686,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.6994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.5067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.39,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.8667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.3909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 132.2537,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.4955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8356,
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
        "date": 1656534793574,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.3594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.87,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.5594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.1352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.8101,
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
        "date": 1656542009153,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.5498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.3174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.3968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.6468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.13,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.7197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.6813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 151.8173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 25.6433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 66.0808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.4951,
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
        "date": 1656546263616,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.7097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.3088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.2477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4392,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.2719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.8322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.9409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.9274,
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
        "date": 1656692044354,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.6984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.6708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.4915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.7542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.7206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.7862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.4545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 158.9562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.8935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 67.0979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 46.6956,
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
        "date": 1657613911545,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.1747,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.7744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 132.9007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.5762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8938,
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
        "date": 1657649527364,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0162,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.9299,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.6894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.6784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.3442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.8739,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.3544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 133.47,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.5722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.842,
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
        "date": 1657814992398,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.8837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.0412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.1557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.1988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.9047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.0243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.4189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.8832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 130.3556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.2615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 37.0558,
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
        "date": 1657821289165,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.9461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.0301,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.5368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.1304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.0106,
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
        "date": 1657822360983,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.7566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 16.8335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.0529,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.8746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 34.7681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.3678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.7225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 128.2318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 46.9413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.6181,
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
        "date": 1657928111607,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.3304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.0811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 141.2097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.3089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.7852,
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
        "date": 1658165314577,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.92,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.3309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.8328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.644,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.1281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.0455,
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
        "date": 1658177040385,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7771,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.1879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 26.7328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.2661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.1672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 25.3546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.9614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.1687,
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
        "date": 1658183689757,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.3802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.8756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.1951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.8017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.7852,
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
        "date": 1658504118429,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.1405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.0013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.4763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.8099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.9071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0761,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.3535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.9361,
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
        "date": 1658791259427,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.5636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.9679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.3941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.8702,
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
        "date": 1658792151822,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.2106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6199,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.6172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.7285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.1665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 134.4385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.3352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.1049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.7371,
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
        "date": 1659051471788,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.1048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.4222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7016,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.0067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.5406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.9882,
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
        "date": 1659135869185,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.05,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9267,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.0544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.7762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6481,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.0944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.9977,
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
        "date": 1659339721440,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.9359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.1296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.2012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.1832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 33.653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.1451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 19.4243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.8754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.6049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.5338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 46.9449,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 36.8632,
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
        "date": 1659718770955,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.3803,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.9316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.0009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.2907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.8872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.9954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.9555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.4946,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.8543,
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
        "date": 1660087707724,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.4155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.8057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 34.7397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 41.3542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.1505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.5277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.8002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 152.4467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.9817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.0694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.6668,
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
        "date": 1660232803211,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.1954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.8569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.7738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.9562,
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
        "date": 1660257356082,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.4758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.9304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.51,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.9572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.7345,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.6229,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.1372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.131,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.6028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.0289,
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
        "date": 1660671612486,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.8928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.7088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.348,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.0062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.2774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 128.6937,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.6988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8375,
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
        "date": 1660691868735,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.7741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 30.102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 42.367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 51.3224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 49.9135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.1056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.8809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 167.6586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 31.0459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 72.3448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 50.1325,
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
        "date": 1660692139738,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.2211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.7717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.2797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 40.2073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.5435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.4344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.2673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.1387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.8033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.8213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.8912,
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
        "date": 1660865774716,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.0289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.7703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.4675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.3472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 135.4583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.5559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.6282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.9501,
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
        "date": 1661038533038,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.8278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.1249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.9818,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.0049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.3227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.2947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.1884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.2042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.4105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.6891,
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
        "date": 1661200179269,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.1101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.3186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.1135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 130.4383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.9885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.6383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.9977,
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
        "date": 1661200555628,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.8671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.7181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 45.3431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.0833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 125.357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.7471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.3926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.6227,
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
        "date": 1661276423918,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.0731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.3012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.3757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 35.9553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.3801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 46.0438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.2699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.5276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.3038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.3865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.8436,
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
        "date": 1661285151171,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.1134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.5318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.7306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.6983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.7581,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.3844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.5115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 164.2564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.8439,
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
        "date": 1661540048957,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 19.7316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 27.8011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.5726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.8099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 18.7566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.7248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.9475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.3833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 45.4393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 38.1051,
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
        "date": 1661904797703,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5032,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.6575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.1835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.7989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.1097,
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
        "date": 1661905159874,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.537,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3205,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0481,
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
        "date": 1661986651251,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.5837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 17.4634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 19.8141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 27.8973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.6813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 35.8995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 18.8573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.8433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.2218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 20.446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 45.8787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 38.1061,
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
        "date": 1661989024044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7302,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.6389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.7233,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.9151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0498,
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
        "date": 1662053033145,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.3226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.4073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.5129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 34.642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 42.5439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.1856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.4876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.1414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 143.2504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.4148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.2044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 41.789,
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
        "date": 1662065782901,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 24.2749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.0647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.5238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.5542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 45.7392,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.3443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.3288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 151.0867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 29.6123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.0452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.665,
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
        "date": 1662138878328,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3611,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 181.0444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0596,
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
        "date": 1662481678074,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.0336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.3889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.5914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.4579,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.4724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.4841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.4042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.3945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 166.0074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.8893,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.7469,
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
        "date": 1662482548499,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0069,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.0869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 125.6624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.3578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.5374,
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
        "date": 1662578446127,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.2964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.2649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1251,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.7941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.2356,
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
        "date": 1662652399040,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.5829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.1606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.3459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.3466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.1471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.3204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 159.4567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.4662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.6963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.0234,
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
        "date": 1662654159005,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.0445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.8779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.1165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 125.6994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.7304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.4036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.6448,
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
        "date": 1662654927558,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 140.5536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0542,
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
        "date": 1662688149615,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.1717,
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
        "date": 1662688869802,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.4019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5546,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3068,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.7871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.196,
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
        "date": 1662690368933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.5441,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.0888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.5665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.5723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.5737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.0445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.4639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 163.006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.3488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.5511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 50.8414,
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
        "date": 1662694805950,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.1374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 124.148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.7598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.3149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4463,
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
        "date": 1662697667606,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.7523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.5351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 27.1556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.9194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.8672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.7049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.2027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.9142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 28.0374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.3509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.0666,
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
        "date": 1662713238565,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.8997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.1762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.4712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.4083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.8013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4737,
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
        "date": 1662765315567,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.1806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 124.3404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.9777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.4362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.4644,
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
        "date": 1662770422434,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.4038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2628,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.6335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0819,
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
        "date": 1662999407326,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.348,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5487,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.2955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.6608,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0299,
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
        "date": 1663029645037,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.19,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.29,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.1945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.0866,
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
        "date": 1663094392990,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7132,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3021,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 152.2368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.1625,
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
        "date": 1663264334087,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.1679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.62,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.7867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.7024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.2025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.5989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.5744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 169.2535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.7775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.3895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.7472,
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
        "date": 1663343649148,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.7191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.8886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.9082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 47.0526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.7376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.6518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 167.3383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.4218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.7761,
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
        "date": 1663345186423,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6171,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.3332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.8913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.9926,
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
        "date": 1663364772334,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 129.3214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.5064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.6019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.538,
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
        "date": 1663373762405,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.5858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5348,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.2981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.1963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.5741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.4135,
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
        "date": 1663381420835,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.5963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 25.5248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 29.5838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.7444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 49.0447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.3279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.5092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.2712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 164.6192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 31.3233,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 64.9792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.7903,
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
        "date": 1663625059211,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 23.1429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 25.8007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 29.6183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 38.2104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 49.0434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.7627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 28.9831,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 18.4465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 156.444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 30.7841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.5805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.9291,
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
        "date": 1663719958579,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.1949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 130.053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.4835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.5208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.7119,
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
        "date": 1663720850990,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.5061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.7134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.2556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 34.809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.4848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.2081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.4,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 26.9104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.9908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 46.9686,
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
        "date": 1663743418169,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.0908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.6186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.8536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.5691,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.8161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.5853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.5786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 165.1616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.2895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 50.7734,
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
        "date": 1663787793248,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.0916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.2212,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.2434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.2907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.5864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 160.2734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.6217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.0964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 50.9141,
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
        "date": 1663803315361,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.3363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.6392,
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
        "date": 1663849627076,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.5877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.3112,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 34.7009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.1562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.5996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.6517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.1454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.8076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 58.2147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.9708,
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
        "date": 1663870520411,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.6566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.2937,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 148.2939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.9544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.2746,
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
        "date": 1663880890402,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 125.7187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.5598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.7074,
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
        "date": 1663881838235,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 21.2709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.3153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.0417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.9453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 43.149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.0241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.4979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 150.2366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.8075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.2116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.8515,
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
        "date": 1663883155467,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7015,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3918,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 144.2384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.3381,
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
        "date": 1663883519620,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.8866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.9389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.8318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.9386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 41.2699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.6115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.9586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.7804,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.2282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.0637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.6628,
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
        "date": 1663885318120,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.9751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.0547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.9391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.2165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.0928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 126.2508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.5316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 50.5862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.7322,
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
        "date": 1663889688103,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.7003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.0806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 174.9605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.9128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.4587,
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
        "date": 1663891039604,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.6658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.4735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.6822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.5139,
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
        "date": 1663891961616,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.4131,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.2362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.6795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.7046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.8457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.4672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 25.4298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.2935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 165.8355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.7052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 62.1312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 51.0289,
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
        "date": 1663966909951,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 19.053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 21.0173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.9622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.6363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 41.8638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.1296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.7336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 150.1656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.7649,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 55.5914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 46.8267,
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
        "date": 1664236129532,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.5814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 139.1049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.335,
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
        "date": 1664321091998,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.7179,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.2172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 40.6315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.5012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 147.5559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.0192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.8465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.3249,
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
        "date": 1664472798527,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 15.357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 16.4633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 20.1221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 28.2976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 34.2025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 34.5862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 18.6508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 12.7869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 163.0047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 19.717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 47.0309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 35.5266,
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
        "date": 1664569211609,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.0636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.0217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 25.7224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.7763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 42.1935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 43.8213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.4133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.9201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.0277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.4243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.6767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 48.4346,
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
        "date": 1665072205062,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.8807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 22.6832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 26.8497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 36.1596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 44.2679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 44.8799,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.4455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 145.7989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 25.9588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 61.2813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.7334,
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
        "date": 1665073928052,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.6949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.7599,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.0978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.6616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.1698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 39.691,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 141.2863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 22.5806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.6669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 40.7642,
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
        "date": 1665081715868,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 16.8563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.5203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.2909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 30.8735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 37.8252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 20.6829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 13.5531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 134.0163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 22.2704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.4985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 37.1886,
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
        "date": 1665087752914,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 20.1886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.7071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 40.1746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 48.8124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 47.3253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 24.0792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 16.3174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 155.8134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.4489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 63.3975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.3188,
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
        "date": 1665163057025,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 17.8817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.3575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 23.1453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.5589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 38.8628,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.8407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.2932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.4101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 130.2378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.1541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.9411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 43.4198,
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
        "date": 1685074927478,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.7363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.2774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.2786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.6409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.0985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.4403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.1322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 149.4249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.7884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.3423,
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
        "date": 1685076065393,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 16.7968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 18.33,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 21.8702,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 29.1332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 36.3128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 37.7014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.3433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 13.6972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 128.0751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 22.1399,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 46.5312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 38.5989,
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
        "date": 1685081912994,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.7368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.6105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.1939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 33.2938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 42.0153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 22.395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 15.1228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 146.7405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.6609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 52.6683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 44.207,
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
        "date": 1685105926611,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 22.0767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 23.7439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 28.4519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 37.1734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 46.9378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 48.3915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 27.3712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 17.4841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 157.1675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 27.9726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 60.6343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 49.5839,
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
        "date": 1685112282788,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.5406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 20.1183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 24.3269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 32.9517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.4788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.5661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 23.0919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 126.6781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 24.494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 53.2011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 45.8354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}