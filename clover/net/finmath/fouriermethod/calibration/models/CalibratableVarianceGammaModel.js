var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":123,"id":654,"methods":[{"el":49,"sc":2,"sl":41},{"el":66,"sc":2,"sl":58},{"el":81,"sc":2,"sl":68},{"el":86,"sc":2,"sl":83},{"el":92,"sc":2,"sl":88},{"el":97,"sc":2,"sl":94},{"el":102,"sc":2,"sl":99},{"el":112,"sc":2,"sl":104},{"el":122,"sc":2,"sl":114}],"name":"CalibratableVarianceGammaModel","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_991":{"methods":[{"sl":58},{"sl":68},{"sl":83},{"sl":88},{"sl":94},{"sl":99},{"sl":104},{"sl":114}],"name":"test","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":80},{"sl":85},{"sl":90},{"sl":96},{"sl":101},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":111},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":121}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [991], [], [991], [991], [991], [991], [991], [991], [], [], [991], [], [], [], [991], [991], [991], [], [991], [], [], [], [991], [], [], [991], [], [991], [], [], [991], [], [991], [], [], [], [991], [], [991], [], [], [991], [], [991], [], [], [991], [991], [991], [991], [991], [991], [], [991], [], [], [991], [991], [991], [991], [991], [991], [], [991], [], []]