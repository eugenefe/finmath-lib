var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":165,"id":14128,"methods":[{"el":66,"sc":2,"sl":60},{"el":87,"sc":2,"sl":77},{"el":99,"sc":2,"sl":95},{"el":109,"sc":2,"sl":101},{"el":148,"sc":2,"sl":111},{"el":155,"sc":2,"sl":150},{"el":164,"sc":2,"sl":162}],"name":"MonteCarloBlackScholesModel","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_146":{"methods":[{"sl":101}],"name":"testHedgePerformance","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":108}]},"test_318":{"methods":[{"sl":60},{"sl":101}],"name":"test","pass":true,"statements":[{"sl":65},{"sl":103},{"sl":104},{"sl":108}]},"test_454":{"methods":[{"sl":60},{"sl":77},{"sl":101},{"sl":162}],"name":"test","pass":true,"statements":[{"sl":65},{"sl":83},{"sl":103},{"sl":104},{"sl":108},{"sl":163}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [318, 454], [], [], [], [], [318, 454], [], [], [], [], [], [], [], [], [], [], [], [454], [], [], [], [], [], [454], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [318, 146, 454], [], [318, 146, 454], [318, 146, 454], [], [], [], [318, 146, 454], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [454], [454], [], []]