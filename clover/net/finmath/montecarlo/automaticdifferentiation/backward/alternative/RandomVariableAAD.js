var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1139,"id":16917,"methods":[{"el":57,"sc":2,"sl":48},{"el":80,"sc":2,"sl":59},{"el":84,"sc":2,"sl":82},{"el":90,"sc":2,"sl":87},{"el":95,"sc":2,"sl":92},{"el":111,"sc":2,"sl":97},{"el":126,"sc":2,"sl":116},{"el":273,"sc":2,"sl":128},{"el":283,"sc":2,"sl":275},{"el":287,"sc":2,"sl":285},{"el":342,"sc":6,"sl":339},{"el":353,"sc":6,"sl":350},{"el":364,"sc":6,"sl":361},{"el":402,"sc":6,"sl":399},{"el":413,"sc":6,"sl":410},{"el":498,"sc":7,"sl":495},{"el":514,"sc":2,"sl":289},{"el":549,"sc":2,"sl":520},{"el":570,"sc":2,"sl":551},{"el":578,"sc":2,"sl":575},{"el":583,"sc":2,"sl":580},{"el":588,"sc":2,"sl":585},{"el":593,"sc":2,"sl":590},{"el":598,"sc":2,"sl":595},{"el":603,"sc":2,"sl":600},{"el":608,"sc":2,"sl":605},{"el":613,"sc":2,"sl":610},{"el":618,"sc":2,"sl":615},{"el":623,"sc":2,"sl":620},{"el":628,"sc":2,"sl":625},{"el":634,"sc":2,"sl":632},{"el":638,"sc":2,"sl":636},{"el":642,"sc":2,"sl":640},{"el":646,"sc":2,"sl":644},{"el":653,"sc":2,"sl":648},{"el":657,"sc":2,"sl":655},{"el":661,"sc":2,"sl":659},{"el":665,"sc":2,"sl":663},{"el":669,"sc":2,"sl":667},{"el":673,"sc":2,"sl":671},{"el":680,"sc":2,"sl":675},{"el":687,"sc":2,"sl":682},{"el":691,"sc":2,"sl":689},{"el":695,"sc":2,"sl":693},{"el":707,"sc":2,"sl":704},{"el":715,"sc":2,"sl":712},{"el":720,"sc":2,"sl":717},{"el":728,"sc":2,"sl":725},{"el":736,"sc":2,"sl":733},{"el":744,"sc":2,"sl":741},{"el":752,"sc":2,"sl":749},{"el":757,"sc":2,"sl":754},{"el":765,"sc":2,"sl":762},{"el":773,"sc":2,"sl":770},{"el":781,"sc":2,"sl":778},{"el":789,"sc":2,"sl":786},{"el":797,"sc":2,"sl":794},{"el":805,"sc":2,"sl":802},{"el":813,"sc":2,"sl":810},{"el":821,"sc":2,"sl":818},{"el":829,"sc":2,"sl":826},{"el":837,"sc":2,"sl":834},{"el":845,"sc":2,"sl":842},{"el":853,"sc":2,"sl":850},{"el":861,"sc":2,"sl":858},{"el":869,"sc":2,"sl":866},{"el":877,"sc":2,"sl":874},{"el":885,"sc":2,"sl":882},{"el":893,"sc":2,"sl":890},{"el":898,"sc":2,"sl":895},{"el":906,"sc":2,"sl":903},{"el":914,"sc":2,"sl":911},{"el":922,"sc":2,"sl":919},{"el":930,"sc":2,"sl":927},{"el":938,"sc":2,"sl":935},{"el":946,"sc":2,"sl":943},{"el":951,"sc":2,"sl":948},{"el":959,"sc":2,"sl":956},{"el":967,"sc":2,"sl":964},{"el":975,"sc":2,"sl":972},{"el":983,"sc":2,"sl":980},{"el":991,"sc":2,"sl":988},{"el":999,"sc":2,"sl":996},{"el":1007,"sc":2,"sl":1004},{"el":1015,"sc":2,"sl":1012},{"el":1020,"sc":2,"sl":1017},{"el":1028,"sc":2,"sl":1025},{"el":1036,"sc":2,"sl":1033},{"el":1041,"sc":2,"sl":1038},{"el":1049,"sc":2,"sl":1046},{"el":1057,"sc":2,"sl":1054},{"el":1065,"sc":2,"sl":1062},{"el":1073,"sc":2,"sl":1070},{"el":1078,"sc":2,"sl":1075},{"el":1083,"sc":2,"sl":1080},{"el":1088,"sc":2,"sl":1085},{"el":1093,"sc":2,"sl":1090},{"el":1098,"sc":2,"sl":1095},{"el":1103,"sc":2,"sl":1100},{"el":1108,"sc":2,"sl":1105},{"el":1113,"sc":2,"sl":1110},{"el":1118,"sc":2,"sl":1115},{"el":1123,"sc":2,"sl":1120},{"el":1128,"sc":2,"sl":1125},{"el":1133,"sc":2,"sl":1130},{"el":1138,"sc":2,"sl":1135}],"name":"RandomVariableAAD","sl":25},{"el":36,"id":16917,"methods":[],"name":"RandomVariableAAD.OperatorType","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]