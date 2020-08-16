var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":271,"id":8119,"methods":[{"el":49,"sc":2,"sl":47},{"el":58,"sc":2,"sl":56},{"el":70,"sc":2,"sl":65},{"el":83,"sc":2,"sl":78},{"el":95,"sc":2,"sl":90},{"el":100,"sc":2,"sl":97},{"el":106,"sc":2,"sl":102},{"el":112,"sc":2,"sl":108},{"el":119,"sc":2,"sl":114},{"el":125,"sc":2,"sl":121},{"el":134,"sc":2,"sl":127},{"el":143,"sc":2,"sl":136},{"el":153,"sc":2,"sl":148},{"el":166,"sc":2,"sl":161},{"el":177,"sc":2,"sl":168},{"el":188,"sc":2,"sl":179},{"el":193,"sc":2,"sl":190},{"el":198,"sc":2,"sl":195},{"el":205,"sc":2,"sl":200},{"el":215,"sc":2,"sl":207},{"el":224,"sc":2,"sl":217},{"el":229,"sc":2,"sl":226},{"el":239,"sc":2,"sl":231},{"el":248,"sc":2,"sl":241},{"el":265,"sc":2,"sl":250},{"el":270,"sc":2,"sl":267}],"name":"AnalyticModelFromCurvesAndVols","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_15":{"methods":[{"sl":47},{"sl":65},{"sl":97},{"sl":102},{"sl":148},{"sl":168},{"sl":179},{"sl":231},{"sl":241},{"sl":250}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":99},{"sl":105},{"sl":152},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":187},{"sl":232},{"sl":233},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":254},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":264}]},"test_344":{"methods":[{"sl":47},{"sl":65},{"sl":102},{"sl":168}],"name":"testForwardCurveFromDiscountCurve[LINEAR]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":105},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176}]},"test_349":{"methods":[{"sl":47},{"sl":65},{"sl":102},{"sl":168}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":105},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176}]},"test_518":{"methods":[{"sl":47},{"sl":65},{"sl":97},{"sl":102},{"sl":148},{"sl":168},{"sl":179},{"sl":231},{"sl":241},{"sl":250}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":99},{"sl":105},{"sl":152},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":187},{"sl":232},{"sl":233},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":254},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":264}]},"test_583":{"methods":[{"sl":56},{"sl":78},{"sl":97},{"sl":102},{"sl":168},{"sl":179}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":57},{"sl":79},{"sl":80},{"sl":81},{"sl":99},{"sl":105},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":187}]},"test_8":{"methods":[{"sl":47},{"sl":65},{"sl":97},{"sl":102},{"sl":148},{"sl":168},{"sl":179},{"sl":231},{"sl":241},{"sl":250}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":99},{"sl":105},{"sl":152},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":187},{"sl":232},{"sl":233},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":254},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":264}]},"test_9":{"methods":[{"sl":47},{"sl":65},{"sl":102},{"sl":168}],"name":"testForwardCurveFromDiscountCurve[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":48},{"sl":66},{"sl":67},{"sl":68},{"sl":105},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":176}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [9, 518, 8, 349, 344, 15], [9, 518, 8, 349, 344, 15], [], [], [], [], [], [], [], [583], [583], [], [], [], [], [], [], [], [9, 518, 8, 349, 344, 15], [9, 518, 8, 349, 344, 15], [9, 518, 8, 349, 344, 15], [9, 518, 8, 349, 344, 15], [], [], [], [], [], [], [], [], [], [583], [583], [583], [583], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [518, 8, 15, 583], [], [518, 8, 15, 583], [], [], [9, 518, 8, 349, 344, 15, 583], [], [], [9, 518, 8, 349, 344, 15, 583], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [518, 8, 15], [], [], [], [518, 8, 15], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [9, 518, 8, 349, 344, 15, 583], [], [9, 518, 8, 349, 344, 15, 583], [9, 518, 8, 349, 344, 15, 583], [9, 518, 8, 349, 344, 15, 583], [9, 518, 8, 349, 344, 15, 583], [], [], [9, 518, 8, 349, 344, 15, 583], [], [], [518, 8, 15, 583], [], [518, 8, 15, 583], [518, 8, 15, 583], [518, 8, 15, 583], [518, 8, 15, 583], [], [], [518, 8, 15, 583], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [518, 8, 15], [518, 8, 15], [518, 8, 15], [], [], [], [], [], [], [], [518, 8, 15], [], [], [518, 8, 15], [518, 8, 15], [518, 8, 15], [518, 8, 15], [], [], [518, 8, 15], [], [], [], [518, 8, 15], [], [], [518, 8, 15], [518, 8, 15], [518, 8, 15], [518, 8, 15], [], [], [], [518, 8, 15], [], [], [], [], [], [], []]