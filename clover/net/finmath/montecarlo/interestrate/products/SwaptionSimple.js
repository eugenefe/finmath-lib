var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":109,"id":27361,"methods":[{"el":41,"sc":2,"sl":39},{"el":55,"sc":2,"sl":49},{"el":102,"sc":2,"sl":67},{"el":108,"sc":2,"sl":104}],"name":"SwaptionSimple","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1013":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_183":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_23":{"methods":[{"sl":49},{"sl":67},{"sl":104}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":84},{"sl":85},{"sl":106}]},"test_291":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_366":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_42":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_474":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_73":{"methods":[{"sl":49},{"sl":67},{"sl":104}],"name":"testSwaptionSmileCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":84},{"sl":85},{"sl":106}]},"test_798":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":72},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]},"test_944":{"methods":[{"sl":49},{"sl":67}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":69},{"sl":71},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":87},{"sl":88},{"sl":89}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [], [], [], [], [], [], [], [], [], [], [], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 798, 42, 474, 1013], [], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [], [291, 183, 73, 944, 798, 23, 42, 366, 474, 1013], [73, 23], [73, 23], [], [291, 183, 944, 798, 42, 366, 474, 1013], [291, 183, 944, 798, 42, 366, 474, 1013], [291, 183, 944, 798, 42, 366, 474, 1013], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [73, 23], [], [73, 23], [], [], []]