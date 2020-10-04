var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":88,"id":31999,"methods":[{"el":38,"sc":2,"sl":23},{"el":71,"sc":2,"sl":48},{"el":76,"sc":2,"sl":73},{"el":81,"sc":2,"sl":78},{"el":86,"sc":2,"sl":83}],"name":"SimplifiedLinearAnnuityMapping","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_140":{"methods":[{"sl":78}],"name":"c_testFirstDerivative","pass":true,"statements":[{"sl":80}]},"test_272":{"methods":[{"sl":73}],"name":"a_testMappings","pass":true,"statements":[{"sl":75}]},"test_301":{"methods":[{"sl":73}],"name":"b_testSeq","pass":true,"statements":[{"sl":75}]},"test_306":{"methods":[{"sl":83}],"name":"d_testSecondDerivative","pass":true,"statements":[{"sl":85}]},"test_50":{"methods":[{"sl":48},{"sl":73},{"sl":83}],"name":"testSimplified","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":85}]},"test_505":{"methods":[{"sl":48},{"sl":73},{"sl":78},{"sl":83}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":80},{"sl":85}]},"test_554":{"methods":[{"sl":48},{"sl":73},{"sl":78},{"sl":83}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":57},{"sl":61},{"sl":63},{"sl":65},{"sl":66},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":80},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [505, 554, 50], [505, 554, 50], [], [505, 554, 50], [505, 554, 50], [505, 554, 50], [], [505, 554, 50], [], [505, 554, 50], [], [], [], [505, 554, 50], [], [505, 554, 50], [], [505, 554, 50], [505, 554, 50], [], [505, 554, 50], [505, 554, 50], [505, 554, 50], [], [], [272, 505, 554, 50, 301], [], [272, 505, 554, 50, 301], [], [], [505, 140, 554], [], [505, 140, 554], [], [], [505, 554, 50, 306], [], [505, 554, 50, 306], [], [], []]