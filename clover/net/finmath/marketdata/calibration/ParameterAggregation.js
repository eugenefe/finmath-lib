var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":139,"id":3146,"methods":[{"el":41,"sc":2,"sl":39},{"el":51,"sc":2,"sl":49},{"el":61,"sc":2,"sl":59},{"el":70,"sc":2,"sl":68},{"el":79,"sc":2,"sl":77},{"el":104,"sc":2,"sl":81},{"el":118,"sc":2,"sl":106},{"el":133,"sc":2,"sl":120},{"el":138,"sc":2,"sl":135}],"name":"ParameterAggregation","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_112":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[CUBIC_SPLINE]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_190":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_195":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testVolatilityCalibration[VOLATILITYLOGNORMAL]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_207":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCDS","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_259":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_301":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_354":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_367":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_397":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_434":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[AKIMA]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_447":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_5":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_549":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[AKIMA_CONTINUOUS]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_564":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_585":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_605":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testCalibration","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]},"test_628":{"methods":[{"sl":49},{"sl":81},{"sl":120}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":103},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":132}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [207, 195, 585, 549, 112, 5, 447, 605, 354, 367, 301, 397, 564, 259, 628, 190, 434], [], [], [], [], [], [], []]