window.BENCHMARK_DATA = {
  "lastUpdate": 1685075046935,
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
        "date": 1646687303485,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57753.3272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115436.0109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11716.2784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40376.3128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1997.3709,
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
        "date": 1646781858189,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 71486.9938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 119536.4062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12044.2993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41738.1805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2108.3561,
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
        "date": 1646782507659,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 82806.8562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137160.6815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.6963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14283.5767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49539.7767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2473.6473,
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
        "date": 1646783182556,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 58438.2949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 102889.2616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11519.5039,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 43152.7895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2303.3569,
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
        "date": 1646784584989,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60740.2048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108671.6256,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12148.0555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40672.6704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2128.1877,
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
        "date": 1646797523219,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60695.8278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108594.9259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12145.9521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40647.1669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2127.3278,
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
        "date": 1646798056062,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53541.1919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 95853.0754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.4439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10728.5826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 35901.0666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1878.9982,
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
        "date": 1646853821411,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 58779.1854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108603.7883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12145.3091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40685.0559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2126.3341,
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
        "date": 1646862960505,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 81315.7386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 135772.5027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.5064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14162.6683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49330.9347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2442.2194,
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
        "date": 1646868553863,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 75008.7699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 125643.5667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12783.0657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42453.0676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2216.9744,
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
        "date": 1646874816593,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 80011.335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 132042.2446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.8129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13498.8736,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46287.5878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2367.0469,
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
        "date": 1646883156907,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57749.1685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115432.7108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.0643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11959.8408,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41167.304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2032.3684,
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
        "date": 1646934658885,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53458.4397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 95518.3096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.4127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.5681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11096.4697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36858.3434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1898.0053,
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
        "date": 1646940690078,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 75953.5328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 126216.7128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.7077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12853.7972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42716.167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2215.0423,
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
        "date": 1646957030492,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53876.394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 96110.7862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.5886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11131.3426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 37074.5412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1903.0681,
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
        "date": 1646964653929,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60559.2151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108589.8022,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12597.9258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42069.4374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2156.6565,
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
        "date": 1646976782719,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 84313.8582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 139316.6034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.3885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14610.8504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49678.6641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2521.3017,
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
        "date": 1647026640499,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 83636.3704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 139998.1759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.9251,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14215.1979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47322.0812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2499.4716,
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
        "date": 1647033625844,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72344.9959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 128443.1678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14897.0478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49999.2865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2509.9772,
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
        "date": 1647288285534,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68610.8865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 116791.6621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.7718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3199,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12230.6617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39571.2937,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2057.2686,
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
        "date": 1647321688113,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60573.8329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108586.4225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12631.9945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41910.3238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2153.6835,
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
        "date": 1647352866697,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 84645.4944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 140464.333,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.4619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14640.8183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49352.795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2526.8732,
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
        "date": 1647353122908,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 62684.0103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 105344.61,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4341,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11548.8962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46536.1877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2448.7446,
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
        "date": 1647367989842,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60536.0782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108601.4249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12589.6549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41950.9995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2160.1548,
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
        "date": 1647381721632,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 70109.2137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 122518.1361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.3594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14158.1654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47662.6429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2424.7533,
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
        "date": 1647384114161,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 70230.479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 117258.9123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.4696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.2838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11829.7268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39946.6525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2064.4373,
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
        "date": 1647387551055,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60549.1078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108592.2565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12593.9318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41956.455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2159.2983,
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
        "date": 1647393890536,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60631.6138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108678.4844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12601.4315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41987.9789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2161.8868,
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
        "date": 1647447439158,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53499.6225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 106143.0259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10888.5,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36200.3769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1890.9374,
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
        "date": 1647447978552,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 80535.5908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 132688.4417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.1197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13228.9776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 45399.6573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2270.94,
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
        "date": 1647449457081,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60619.2008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120238.9382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4918,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12356.2223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40994.9377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2144.1049,
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
        "date": 1647535514041,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53483.2018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 106159.1216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10891.8828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36206.0775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1890.3095,
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
        "date": 1647540557899,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 66380.2027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 112715.9908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.1382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11310.8461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 37640.8159,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1943.3163,
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
        "date": 1647542965896,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 80963.7407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 135387.4491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5299,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13998.4076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47832.3753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2419.636,
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
        "date": 1647893759709,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 84258.1895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 141336.3622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13863.593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47350.5066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2397.0865,
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
        "date": 1648065813899,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72151.5047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 140643.4988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.4641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14443.2139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47969.5207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2480.4615,
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
        "date": 1648079818378,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60626.6764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120316.0883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2131,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12341.737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41013.2305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2147.5645,
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
        "date": 1648081595510,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60656.8951,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120313.9126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12331.465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41011.3355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2141.156,
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
        "date": 1648157866906,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 52819.0135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 104014.9083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.2247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10611.8543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 35324.2067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1848.4165,
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
        "date": 1648657488495,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 82682.5404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137829.1798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.6469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14245.0682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48680.8103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2453.1323,
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
        "date": 1648666691154,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 70620.8317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 500833.297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 1.4734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 18.6107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 18.7944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0.0001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14740.6115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48825.4161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2578.5054,
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
        "date": 1648674262511,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 69704.1236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 136825.8515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.6528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13139.0701,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 43477.8134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2277.244,
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
        "date": 1648699765708,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53406.749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 105969.0993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10865.8578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36201.7194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1891.1597,
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
        "date": 1648751786223,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 74081.9634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 124470.3779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.1552,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11808.3913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41270.6877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2185.2525,
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
        "date": 1648770713077,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 52322.9442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 102639.6935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.1369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.8289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10547.61,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 34955.2756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1841.0275,
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
        "date": 1649089453488,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72697.4,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 144021.3397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5199,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.3741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14763.3978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49170.4366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2565.9334,
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
        "date": 1649275553763,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 81292.6139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 135344.646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.4297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.0374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13910.6783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48073.2429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2406.2534,
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
        "date": 1649713816558,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 71031.9407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137979.1692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.503,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.2782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14192.2898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47436.8321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2462.4805,
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
        "date": 1649972093161,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60451.5164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120266.7254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12314.2413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41054.3994,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2142.2161,
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
        "date": 1649984306235,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60643.8283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120254.6925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12321.2566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41019.1602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2140.7522,
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
        "date": 1650482218004,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60853.2891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120259.6538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12326.0175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41021.1365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2143.8425,
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
        "date": 1651095877735,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53507.8969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 106163.7061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10868.3443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36216.3696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1893.8625,
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
        "date": 1651251030875,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57776.4909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129873.7993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11322.751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39073.6431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1945.8291,
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
        "date": 1651255375937,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73162.825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 144179.427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14713.669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49049.8865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2561.23,
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
        "date": 1651262675557,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53347.1883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 106162.2704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10872.572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36199.89,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1891.838,
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
        "date": 1651265810926,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 74637.4295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 122496.3728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.7123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13376.3749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48840.7118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2313.8649,
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
        "date": 1651282665709,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72306.0604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 144443.287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.3901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14787.2135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49187.8965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2572.2931,
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
        "date": 1651871072914,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57812.905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129918.52,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11348.7941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39193.8755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1946.6254,
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
        "date": 1651937716988,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60772.5336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120246.0868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12323.7285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40972.3989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2142.7614,
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
        "date": 1652204477801,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 85392.1826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 142295.2349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.9055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.3588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14434.0261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49410.0913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2423.8817,
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
        "date": 1652283246831,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72476.791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 141966.319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14409.6833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47851.1764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2508.0583,
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
        "date": 1652487255011,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60503.9749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120234.1321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12321.7485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41015.1927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2141.7473,
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
        "date": 1652828281737,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60800.522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120277.7308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12425.5559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41221.1085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2148.7554,
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
        "date": 1652993954965,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 83270.7203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 139499.2762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.6038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.6608,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2852,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14604.0424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49408.4881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2535.2266,
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
        "date": 1652995079303,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57774.5413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129885.0514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.8858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11500.5746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39472.2993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1981.4238,
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
        "date": 1653073777801,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 65577.5624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 128128.9489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.5195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.7323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12838.4814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42533.3515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2373.959,
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
        "date": 1653096857692,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60869.6451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120296.5521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12431.3201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41202.6634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2149.9005,
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
        "date": 1653419296306,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60900.5293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120284.1891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2112,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12435.1776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41203.3768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2150.2769,
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
        "date": 1653434744134,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60824.079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120233.5596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12435.2631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41158.8041,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2149.7456,
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
        "date": 1653503851827,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53775.9469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 106244.9504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.9906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10993.1796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36379.2296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1904.0485,
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
        "date": 1653590619236,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 77977.2809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137598.8166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13483.1574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 45885.4733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2171.3965,
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
        "date": 1653603244785,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 87540.7663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 145930.5092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.6092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 10.2522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14969.086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50522.1411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2545.6829,
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
        "date": 1653685955338,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 79944.107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 130303.4414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.551,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13001.9905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44090.2358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2323.8731,
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
        "date": 1654028124710,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60827.0325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120255.5417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5169,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12429.0841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41231.0532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.1652,
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
        "date": 1654206129463,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57891.8864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129896.2287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11440.9982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39398.8343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1970.9788,
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
        "date": 1654272999853,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 86754.3682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 141975.3859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.6071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 10.0326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.3915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14684.156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49400.2181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2571.2673,
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
        "date": 1654708250490,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 58612.2694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 102652.5307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.7421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11237.2746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 38029.817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1967.6448,
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
        "date": 1654731727897,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 88866.0086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 146897.5664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.6144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8437,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.5517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 15508.1874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 52311.5717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2739.9403,
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
        "date": 1654795955500,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60618.8175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108302.5286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12464.7019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42292.422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2162.1778,
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
        "date": 1654812805649,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 79513.8175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 132123.788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.19,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14122.2238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48657.8589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2450.6853,
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
        "date": 1655324509822,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 77619.594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 139754.863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.7436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12273.088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41152.9177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2182.3439,
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
        "date": 1655413419051,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 77876.3869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 128769.0093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13517.1211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46533.2802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2377.5009,
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
        "date": 1656002361932,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 78298.586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129563.0526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.7053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13581.0375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 45742.1428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2413.1225,
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
        "date": 1656011282706,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 85664.4156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 142186.2896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 15181.5289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 51659.5099,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2641.3767,
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
        "date": 1656119553596,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57864.9542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115467.4412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11631.3962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40788.7786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1980.4303,
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
        "date": 1656345728339,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60788.5705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108242.3442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12503.8715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42194.0326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.8516,
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
        "date": 1656348085038,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60806.7776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108230.9402,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4301,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3333,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0644,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12503.0887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42118.2406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.4152,
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
        "date": 1656360362875,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60719.8571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108221.7067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12498.7614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42170.8276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.4764,
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
        "date": 1656431487321,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57940.0768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115468.7228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.0062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11614.783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40774.2075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1980.2192,
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
        "date": 1656433270999,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57836.7558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129913.0713,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11432.7459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 39321.8918,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1973.5599,
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
        "date": 1656530123192,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60581.1509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108242.7684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12496.5719,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42261.7172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.3657,
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
        "date": 1656534561794,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 65512.1802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 117222.4541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.8735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13745.7214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47289.6643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2430.6829,
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
        "date": 1656541718642,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57821.9429,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115478.669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.9971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11624.0949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40794.8694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1983.4211,
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
        "date": 1656546072602,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 69812.195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137681.1608,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.0915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13503.0226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44146.34,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2305.2059,
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
        "date": 1656691801466,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57846.2783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115452.0486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.0807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11603.767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40779.0631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1978.9602,
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
        "date": 1657613586034,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57849.2454,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115433.2618,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11617.4945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40699.3554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1979.1983,
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
        "date": 1657649284083,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60589.9785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108222.9238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12502.0488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42207.697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.6665,
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
        "date": 1657815006190,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 63445.7324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 105500.6294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.0807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11113.9436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 36997.0587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1943.1247,
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
        "date": 1657821111029,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60847.773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108288.2217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12503.5181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42213.7971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.4976,
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
        "date": 1657822152605,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72916.3362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129932.5949,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.9921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8803,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14998.6242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50761.957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2581.2432,
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
        "date": 1657927531801,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60681.9517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108216.0406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4301,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12498.1617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42210.4989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.7487,
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
        "date": 1658164975000,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 77733.1442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129126.2042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.1269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13980.2833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47232.678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2412.3022,
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
        "date": 1658176707605,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 41436.9226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 92859.6866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 4.9308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.4686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 8182.4214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 28175.6464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1409.9007,
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
        "date": 1658183413870,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60498.7678,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108296.781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3202,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12503.8316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42263.0819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.7699,
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
        "date": 1658503795986,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60575.9952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108262.1584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12513.7445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42233.2471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2153.0674,
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
        "date": 1658791385103,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 69697.6889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 112779.1439,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.6455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12152.4701,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40542.1597,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2157.7835,
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
        "date": 1658791405916,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60863.1613,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120270.4973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4929,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12439.1325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41249.2493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.0665,
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
        "date": 1659051201896,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 82167.4538,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 136765.5752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.7652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14560.8557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49697.9315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2565.6598,
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
        "date": 1659135581309,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60610.7816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108273.2793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12500.5663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42243.7708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.6534,
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
        "date": 1659339433027,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 70853.0344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 127695.9636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.5918,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.6663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14812.443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49454.4153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2530.6654,
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
        "date": 1659718521025,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60608.7992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108242.2258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12532.8095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42303.2221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2169.7806,
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
        "date": 1660087346750,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 69339.1592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 122150.13,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5069,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13642.9941,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46197.4793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2341.5069,
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
        "date": 1660232573185,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72064.7633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 127574.7115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.7622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.6184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13305.0492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48635.7203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2471.0768,
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
        "date": 1660257038593,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60733.7395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108292.2063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.068,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12508.8652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42262.4978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2151.9143,
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
        "date": 1660671326602,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 79725.2106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 134822.1338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.3281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14256.1373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48098.1529,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2501.6636,
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
        "date": 1660691422509,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 53337.2956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 95493.5637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12518.3463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42160.4366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2153.6981,
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
        "date": 1660691805501,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60416.7665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120336.3629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.4966,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12430.9842,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41227.6642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2148.2509,
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
        "date": 1660865319875,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60283.1313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108250.3366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12496.1289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42251.4993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2152.9898,
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
        "date": 1661038255488,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72793.6054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129870.4931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.6122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14748.2746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50144.1044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2578.2876,
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
        "date": 1661199859269,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57795.4306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115459.1222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11726.1219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41715.6901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2010.9581,
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
        "date": 1661200238776,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 62050.1655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108610.6183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12337.2572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41964.4479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2157.5437,
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
        "date": 1661276076831,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57868.3718,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115470.1903,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11712.0676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41709.0947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2008.23,
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
        "date": 1661284832340,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57777.8374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115486.1837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11717.6293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41695.6226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2011.3516,
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
        "date": 1661539783837,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57888.0843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115501.8131,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11754.5413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41783.1371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2010.4379,
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
        "date": 1661904505118,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73694.6119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 130124.7837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.58,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12406.7908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 45037.5872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2295.7704,
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
        "date": 1661904853973,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60489.7974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108639.9482,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12338.26,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41977.4972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2158.5161,
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
        "date": 1661986390327,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 41491.4901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 82576.8153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.3149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 5.1354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.1004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 8411.0749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 29907.6519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1442.5779,
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
        "date": 1661988683211,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60531.6748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108602.4044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12340.2876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41967.9663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2159.3526,
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
        "date": 1662052711581,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60652.9427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108704.4808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12328.3432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41970.5848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2160.0998,
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
        "date": 1662065488142,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 84189.8827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 136508.4036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.6028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.1598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13987.3661,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48485.4432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2493.1384,
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
        "date": 1662138603800,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72566.744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 128775.7685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8188,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14737.9779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50176.8565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2590.716,
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
        "date": 1662481410254,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57798.6284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115475.664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11760.8228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41705.5797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2007.1187,
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
        "date": 1662482261902,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60448.2193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108594.1807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12335.7674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41937.1892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2157.7699,
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
        "date": 1662578110832,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60832.7985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108629.1827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 6.3137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.5995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 10888.6586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 37037.0822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 1915.5295,
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
        "date": 1662652146416,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73006.6762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 127161.7385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.4331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.7477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14663.1385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49452.9666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2514.0613,
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
        "date": 1662653899459,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 85190.6493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 141848.0914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.3302,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14570.3704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50163.6246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2543.6618,
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
        "date": 1662654709332,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 71524.5443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 119310.9,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.7892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.2158,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11211.8728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 40895.3963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2162.4312,
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
        "date": 1662687857553,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60603.4961,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108633.8573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12343.5712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41962.9309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2159.8573,
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
        "date": 1662688351584,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57764.7511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115425.5211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11722.7358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41747.8109,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2012.0362,
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
        "date": 1662690069406,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 74376.8211,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 125408.9238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12936.5896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44378.1312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2240.3365,
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
        "date": 1662694495716,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57784.6943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115478.6749,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11740.0103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41762.8535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2008.6604,
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
        "date": 1662697318170,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 62004.8489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108697.3934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12334.4461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41977.4347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2160.6223,
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
        "date": 1662712992443,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57756.5711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115452.3789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11740.1626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41752.5489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2009.3518,
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
        "date": 1662765014405,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57742.6575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115428.4775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11732.1674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41759.5986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2009.3282,
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
        "date": 1662770094527,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57758.5672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115432.7441,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3359,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11727.1772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41716.4572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2009.5156,
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
        "date": 1662999150439,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60498.1596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108651.7188,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12335.5479,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41962.9501,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2159.5567,
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
        "date": 1663029311537,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68604.5808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120579.3948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.1189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13531.9475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46043.4442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2359.1714,
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
        "date": 1663094101535,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60674.1018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108639.3975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1581,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12330.9782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41954.9397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2159.9378,
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
        "date": 1663264026523,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68933.1663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 124947.8177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8257,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14552.1494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49448.9562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2513.301,
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
        "date": 1663343412094,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 72530.2388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 125403.8301,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5339,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.4711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14326.4025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49978.0833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2587.3552,
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
        "date": 1663344898741,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 84427.0637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 140440.2062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.7853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.2767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14191.5986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 48621.218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2467.3893,
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
        "date": 1663364499507,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60616.6938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108620.6354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4469,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12389.9125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42228.1633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2170.7887,
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
        "date": 1663373497383,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 69206.4629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 118237.4111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.0105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.6639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14359.1393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46990.1165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2432.6544,
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
        "date": 1663381150705,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68384.1971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 120890.5274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.9659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5319,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14003.7867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47451.5452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2444.7733,
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
        "date": 1663624779819,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73107.2442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129547.785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14715.7324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49948.2658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2581.0814,
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
        "date": 1663719601453,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 68965.8833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 121369.087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.0562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.5881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13917.5201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46946.4677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2423.2919,
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
        "date": 1663720064595,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 61515.6821,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108690.4105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4498,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12384.5557,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42260.3657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2171.6273,
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
        "date": 1663743156113,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 76011.7969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 127896.4332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.7263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13135.5509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44708.3996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2306.6307,
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
        "date": 1663787375644,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60866.2421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108680.9672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4487,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0821,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12394.616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42275.8839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2173.0228,
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
        "date": 1663803029652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 86287.0697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 143479.6137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 10.0875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.4011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14806.9859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50034.0249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2545.1856,
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
        "date": 1663849343020,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 61994.8681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108630.3591,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12374.4673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42236.9382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2170.2177,
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
        "date": 1663870206703,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73127.9768,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 126969.6334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14371.0105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 49381.2553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2515.9338,
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
        "date": 1663880610429,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73164.896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 130420.6874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.5806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14850.7586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 50672.1056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2602.8558,
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
        "date": 1663881508989,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 75248.6446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 125052.9608,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.7526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.7121,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12963.1896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44794.8153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2281.4817,
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
        "date": 1663882781036,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57787.4932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115443.6192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11711.2609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41439.5609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2009.5765,
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
        "date": 1663883183293,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57771.3787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115457.1547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11719.9788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41439.663,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2007.6819,
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
        "date": 1663884735193,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60839.1081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108602.337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4527,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.2135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12372.881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42237.4993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2170.1099,
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
        "date": 1663889390801,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57765.2028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115450.1794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11726.8529,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41453.8379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2005.9423,
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
        "date": 1663890670500,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 79209.782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 132558.0656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13904.8571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47621.0742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2424.1459,
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
        "date": 1663891647749,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 79013.2698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 131978.5569,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.2006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13711.5165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46958.464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2365.0063,
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
        "date": 1663966489729,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57738.7842,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115447.8007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.3463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11718.7721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41459.6639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2006.5018,
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
        "date": 1664235661616,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60960.4519,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 108612.272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.1809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.0795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12375.4231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42250.0713,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2171.2114,
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
        "date": 1664320772056,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57839.9901,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 115441.4095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.4341,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.3361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 11733.932,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41584.1839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2006.0523,
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
        "date": 1664472495120,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 57753.2012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 129867.7732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 7.5652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12189.9534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 42221.5605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2080.104,
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
        "date": 1664568803810,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 80969.8798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 132936.924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.0341,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.0946,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 14205.2616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 47385.2939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2454.9798,
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
        "date": 1665071851282,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73174.5688,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 144136.0219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.7443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.4181,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 15298.213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 51009.0467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2656.5299,
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
        "date": 1665073541907,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 78330.8767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 131145.906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.9042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13661.1272,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44421.5892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2373.5008,
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
        "date": 1665081539973,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 70919.7822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 137656.1201,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.7297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.8651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13800.072,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 46067.7937,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2418.7317,
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
        "date": 1665087387972,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73597.6614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 123296.7785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.3138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 4.627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 13092.2699,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 44199.5593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2277.1914,
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
        "date": 1665162950368,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 73215.3216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 144358.074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.5079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 9.8151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 5.4228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 15363.7001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 51097.6295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2679.0009,
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
        "date": 1685074210545,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60639.5935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 96607.7836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.2144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.6278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12840.8615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41724.753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2227.3947,
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
        "date": 1685075038331,
        "tool": "ndjson",
        "benches": [
          {
            "name": "titlecase_letter_add",
            "value": 60310.3306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_contains",
            "value": 96502.052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "titlecase_letter_iterator",
            "value": 0.4281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_add",
            "value": 8.2174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_contains",
            "value": 3.6254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "unassigned_iterator",
            "value": 0,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern1",
            "value": 12842.9966,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern2",
            "value": 41681.7306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "pattern3",
            "value": 2224.8163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}