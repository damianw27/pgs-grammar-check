// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import pgsListener from './pgsListener.js';
const serializedATN = [4,1,50,349,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,3,0,52,8,0,1,0,1,0,3,
0,56,8,0,1,0,3,0,59,8,0,1,0,3,0,62,8,0,1,0,5,0,65,8,0,10,0,12,0,68,9,0,1,
0,3,0,71,8,0,1,0,1,0,3,0,75,8,0,3,0,77,8,0,1,0,3,0,80,8,0,1,0,1,0,1,1,1,
1,1,1,3,1,87,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,97,8,2,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,109,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,5,1,5,1,5,1,5,3,5,125,8,5,1,5,1,5,1,6,1,6,1,7,1,7,3,7,133,8,7,
1,7,3,7,136,8,7,1,7,3,7,139,8,7,1,7,1,7,1,7,1,7,3,7,145,8,7,1,8,1,8,3,8,
149,8,8,1,8,1,8,3,8,153,8,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,9,1,9,1,
9,3,9,164,8,9,1,10,1,10,3,10,168,8,10,1,10,1,10,1,10,3,10,173,8,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,3,12,186,8,12,1,12,1,12,
3,12,190,8,12,1,12,1,12,3,12,194,8,12,1,12,1,12,1,13,1,13,3,13,200,8,13,
1,13,1,13,3,13,204,8,13,1,13,1,13,1,14,1,14,3,14,210,8,14,1,14,3,14,213,
8,14,1,14,3,14,216,8,14,1,14,3,14,219,8,14,1,14,3,14,222,8,14,1,14,3,14,
225,8,14,1,15,1,15,1,15,3,15,230,8,15,1,15,1,15,3,15,234,8,15,1,15,1,15,
1,15,1,15,3,15,240,8,15,1,15,1,15,3,15,244,8,15,1,15,1,15,1,15,1,15,3,15,
250,8,15,1,15,1,15,3,15,254,8,15,1,15,1,15,3,15,258,8,15,1,15,1,15,1,15,
3,15,263,8,15,1,15,1,15,3,15,267,8,15,1,15,1,15,1,15,3,15,272,8,15,1,15,
5,15,275,8,15,10,15,12,15,278,9,15,1,16,1,16,3,16,282,8,16,1,16,1,16,3,16,
286,8,16,1,16,1,16,3,16,290,8,16,1,16,3,16,293,8,16,1,16,3,16,296,8,16,1,
16,1,16,1,16,1,16,3,16,302,8,16,1,16,3,16,305,8,16,1,16,3,16,308,8,16,1,
16,3,16,311,8,16,1,17,1,17,3,17,315,8,17,1,17,1,17,3,17,319,8,17,1,17,5,
17,322,8,17,10,17,12,17,325,9,17,1,18,1,18,3,18,329,8,18,1,18,1,18,1,18,
1,18,3,18,335,8,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,
1,24,1,24,0,1,30,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,0,3,1,0,37,38,1,0,13,24,1,0,25,29,388,0,51,1,0,0,0,2,86,
1,0,0,0,4,88,1,0,0,0,6,100,1,0,0,0,8,112,1,0,0,0,10,120,1,0,0,0,12,128,1,
0,0,0,14,144,1,0,0,0,16,146,1,0,0,0,18,163,1,0,0,0,20,165,1,0,0,0,22,176,
1,0,0,0,24,183,1,0,0,0,26,197,1,0,0,0,28,212,1,0,0,0,30,249,1,0,0,0,32,310,
1,0,0,0,34,312,1,0,0,0,36,328,1,0,0,0,38,336,1,0,0,0,40,338,1,0,0,0,42,340,
1,0,0,0,44,342,1,0,0,0,46,344,1,0,0,0,48,346,1,0,0,0,50,52,5,41,0,0,51,50,
1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,66,3,2,1,0,54,56,5,41,0,0,55,54,1,
0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,59,5,1,0,0,58,57,1,0,0,0,58,59,1,0,
0,0,59,61,1,0,0,0,60,62,5,41,0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,
0,63,65,3,2,1,0,64,55,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,
67,76,1,0,0,0,68,66,1,0,0,0,69,71,5,41,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,
72,1,0,0,0,72,74,5,1,0,0,73,75,5,41,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,77,
1,0,0,0,76,70,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,80,5,41,0,0,79,78,1,
0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,5,0,0,1,82,1,1,0,0,0,83,87,3,4,2,
0,84,87,3,6,3,0,85,87,3,8,4,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,
87,3,1,0,0,0,88,89,5,30,0,0,89,90,5,41,0,0,90,91,5,31,0,0,91,92,5,41,0,0,
92,93,5,35,0,0,93,96,5,41,0,0,94,95,5,39,0,0,95,97,5,41,0,0,96,94,1,0,0,
0,96,97,1,0,0,0,97,98,1,0,0,0,98,99,3,20,10,0,99,5,1,0,0,0,100,101,5,30,
0,0,101,102,5,41,0,0,102,103,5,32,0,0,103,104,5,41,0,0,104,105,5,35,0,0,
105,108,5,41,0,0,106,107,5,39,0,0,107,109,5,41,0,0,108,106,1,0,0,0,108,109,
1,0,0,0,109,110,1,0,0,0,110,111,3,22,11,0,111,7,1,0,0,0,112,113,5,30,0,0,
113,114,5,41,0,0,114,115,5,36,0,0,115,116,5,41,0,0,116,117,5,35,0,0,117,
118,5,41,0,0,118,119,3,10,5,0,119,9,1,0,0,0,120,121,3,44,22,0,121,122,5,
41,0,0,122,124,3,12,6,0,123,125,5,41,0,0,124,123,1,0,0,0,124,125,1,0,0,0,
125,126,1,0,0,0,126,127,3,14,7,0,127,11,1,0,0,0,128,129,7,0,0,0,129,13,1,
0,0,0,130,132,5,2,0,0,131,133,5,41,0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,
135,1,0,0,0,134,136,3,16,8,0,135,134,1,0,0,0,135,136,1,0,0,0,136,138,1,0,
0,0,137,139,5,41,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,
145,5,3,0,0,141,142,5,40,0,0,142,143,5,41,0,0,143,145,3,44,22,0,144,130,
1,0,0,0,144,141,1,0,0,0,145,15,1,0,0,0,146,157,3,18,9,0,147,149,5,41,0,0,
148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,152,5,4,0,0,151,153,
5,41,0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,156,3,18,9,
0,155,148,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,17,
1,0,0,0,159,157,1,0,0,0,160,164,3,44,22,0,161,164,3,20,10,0,162,164,3,22,
11,0,163,160,1,0,0,0,163,161,1,0,0,0,163,162,1,0,0,0,164,19,1,0,0,0,165,
167,5,5,0,0,166,168,5,41,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,
0,0,169,170,3,44,22,0,170,172,3,28,14,0,171,173,5,41,0,0,172,171,1,0,0,0,
172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,6,0,0,175,21,1,0,0,0,176,177,3,
26,13,0,177,178,3,46,23,0,178,179,3,24,12,0,179,180,3,46,23,0,180,181,3,
48,24,0,181,182,3,26,13,0,182,23,1,0,0,0,183,185,5,7,0,0,184,186,5,41,0,
0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,189,3,44,22,0,188,
190,5,41,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,191,1,0,0,0,191,193,3,28,
14,0,192,194,5,41,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,
196,5,8,0,0,196,25,1,0,0,0,197,199,5,5,0,0,198,200,5,41,0,0,199,198,1,0,
0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,3,28,14,0,202,204,5,41,0,0,203,
202,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,5,6,0,0,206,27,1,0,0,
0,207,209,5,9,0,0,208,210,5,41,0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,
1,0,0,0,211,213,3,30,15,0,212,207,1,0,0,0,212,213,1,0,0,0,213,215,1,0,0,
0,214,216,5,41,0,0,215,214,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,219,
5,33,0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,221,1,0,0,0,220,222,5,41,0,
0,221,220,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,225,3,32,16,0,224,
223,1,0,0,0,224,225,1,0,0,0,225,29,1,0,0,0,226,227,6,15,-1,0,227,229,5,5,
0,0,228,230,5,41,0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,
233,3,30,15,0,232,234,5,41,0,0,233,232,1,0,0,0,233,234,1,0,0,0,234,235,1,
0,0,0,235,236,5,6,0,0,236,250,1,0,0,0,237,239,5,7,0,0,238,240,5,41,0,0,239,
238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,243,3,30,15,0,242,244,5,
41,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,8,0,0,246,
250,1,0,0,0,247,250,3,42,21,0,248,250,3,44,22,0,249,226,1,0,0,0,249,237,
1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,276,1,0,0,0,251,253,10,5,0,0,
252,254,5,41,0,0,253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,257,
5,10,0,0,256,258,5,41,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,
0,259,275,3,30,15,6,260,262,10,4,0,0,261,263,5,41,0,0,262,261,1,0,0,0,262,
263,1,0,0,0,263,264,1,0,0,0,264,266,5,11,0,0,265,267,5,41,0,0,266,265,1,
0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,275,3,30,15,5,269,271,10,3,0,0,
270,272,5,41,0,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,275,
5,12,0,0,274,251,1,0,0,0,274,260,1,0,0,0,274,269,1,0,0,0,275,278,1,0,0,0,
276,274,1,0,0,0,276,277,1,0,0,0,277,31,1,0,0,0,278,276,1,0,0,0,279,281,5,
2,0,0,280,282,5,41,0,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,
292,3,34,17,0,284,286,5,41,0,0,285,284,1,0,0,0,285,286,1,0,0,0,286,287,1,
0,0,0,287,289,5,4,0,0,288,290,5,41,0,0,289,288,1,0,0,0,289,290,1,0,0,0,290,
291,1,0,0,0,291,293,5,33,0,0,292,285,1,0,0,0,292,293,1,0,0,0,293,295,1,0,
0,0,294,296,5,41,0,0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,
298,5,3,0,0,298,311,1,0,0,0,299,301,5,2,0,0,300,302,5,41,0,0,301,300,1,0,
0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,305,5,33,0,0,304,303,1,0,0,0,304,
305,1,0,0,0,305,307,1,0,0,0,306,308,5,41,0,0,307,306,1,0,0,0,307,308,1,0,
0,0,308,309,1,0,0,0,309,311,5,3,0,0,310,279,1,0,0,0,310,299,1,0,0,0,311,
33,1,0,0,0,312,323,3,36,18,0,313,315,5,41,0,0,314,313,1,0,0,0,314,315,1,
0,0,0,315,316,1,0,0,0,316,318,5,4,0,0,317,319,5,41,0,0,318,317,1,0,0,0,318,
319,1,0,0,0,319,320,1,0,0,0,320,322,3,36,18,0,321,314,1,0,0,0,322,325,1,
0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,35,1,0,0,0,325,323,1,0,0,0,326,
327,5,34,0,0,327,329,5,41,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,330,1,
0,0,0,330,331,3,40,20,0,331,332,5,41,0,0,332,334,3,38,19,0,333,335,5,41,
0,0,334,333,1,0,0,0,334,335,1,0,0,0,335,37,1,0,0,0,336,337,5,43,0,0,337,
39,1,0,0,0,338,339,5,43,0,0,339,41,1,0,0,0,340,341,5,43,0,0,341,43,1,0,0,
0,342,343,5,43,0,0,343,45,1,0,0,0,344,345,7,1,0,0,345,47,1,0,0,0,346,347,
7,2,0,0,347,49,1,0,0,0,60,51,55,58,61,66,70,74,76,79,86,96,108,124,132,135,
138,144,148,152,157,163,167,172,185,189,193,199,203,209,212,215,218,221,
224,229,233,239,243,249,253,257,262,266,271,274,276,281,285,289,292,295,
301,304,307,310,314,318,323,328,334];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class pgsParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "';'", "'{'", "'}'", "','", "'('", "')'", 
                            "'['", "']'", "':'", "'|'", "'&'", "'?'", "'-'", 
                            "'\\u00AD'", "'\\u2010'", "'\\u2011'", "'\\u2012'", 
                            "'\\u2013'", "'\\u2014'", "'\\u2015'", "'\\u2212'", 
                            "'\\uFE58'", "'\\uFE63'", "'\\uFF0D'", "'>'", 
                            "'\\u27E9'", "'\\u3009'", "'\\uFE65'", "'\\uFF1E'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'0'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "CREATE", 
                             "NODE", "EDGE", "OPEN", "OPTIONAL", "TYPE", 
                             "GRAPH", "STRICT", "LOOSE", "ABSTRACT", "IMPORTS", 
                             "SP", "WHITESPACE", "StringLiteral", "EscapedChar", 
                             "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", 
                             "HexLetter", "ZeroDigit" ];
    static ruleNames = [ "pgs", "createType", "createNodeType", "createEdgeType", 
                         "createGraphType", "graphType", "typeForm", "graphTypeDefinition", 
                         "elementTypes", "elementType", "nodeType", "edgeType", 
                         "middleType", "endpointType", "labelPropertySpec", 
                         "labelSpec", "propertySpec", "properties", "property", 
                         "propertyType", "key", "labelName", "typeName", 
                         "dash", "rightArrowHead" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pgsParser.ruleNames;
        this.literalNames = pgsParser.literalNames;
        this.symbolicNames = pgsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 15:
    	    		return this.labelSpec_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    labelSpec_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	pgs() {
	    let localctx = new PgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pgsParser.RULE_pgs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 50;
	            this.match(pgsParser.SP);
	        }

	        this.state = 53;
	        this.createType();
	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 55;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                if(la_===1) {
	                    this.state = 54;
	                    this.match(pgsParser.SP);

	                }
	                this.state = 58;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===1) {
	                    this.state = 57;
	                    this.match(pgsParser.T__0);
	                }

	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 60;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 63;
	                this.createType(); 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 69;
	                this.match(pgsParser.SP);
	            }

	            this.state = 72;
	            this.match(pgsParser.T__0);
	            this.state = 74;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 73;
	                this.match(pgsParser.SP);

	            }

	        }
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 78;
	            this.match(pgsParser.SP);
	        }

	        this.state = 81;
	        this.match(pgsParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createType() {
	    let localctx = new CreateTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pgsParser.RULE_createType);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.createNodeType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.createEdgeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.createGraphType();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createNodeType() {
	    let localctx = new CreateNodeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pgsParser.RULE_createNodeType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(pgsParser.CREATE);
	        this.state = 89;
	        this.match(pgsParser.SP);
	        this.state = 90;
	        this.match(pgsParser.NODE);
	        this.state = 91;
	        this.match(pgsParser.SP);
	        this.state = 92;
	        this.match(pgsParser.TYPE);
	        this.state = 93;
	        this.match(pgsParser.SP);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 94;
	            this.match(pgsParser.ABSTRACT);
	            this.state = 95;
	            this.match(pgsParser.SP);
	        }

	        this.state = 98;
	        this.nodeType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createEdgeType() {
	    let localctx = new CreateEdgeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pgsParser.RULE_createEdgeType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(pgsParser.CREATE);
	        this.state = 101;
	        this.match(pgsParser.SP);
	        this.state = 102;
	        this.match(pgsParser.EDGE);
	        this.state = 103;
	        this.match(pgsParser.SP);
	        this.state = 104;
	        this.match(pgsParser.TYPE);
	        this.state = 105;
	        this.match(pgsParser.SP);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 106;
	            this.match(pgsParser.ABSTRACT);
	            this.state = 107;
	            this.match(pgsParser.SP);
	        }

	        this.state = 110;
	        this.edgeType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createGraphType() {
	    let localctx = new CreateGraphTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pgsParser.RULE_createGraphType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(pgsParser.CREATE);
	        this.state = 113;
	        this.match(pgsParser.SP);
	        this.state = 114;
	        this.match(pgsParser.GRAPH);
	        this.state = 115;
	        this.match(pgsParser.SP);
	        this.state = 116;
	        this.match(pgsParser.TYPE);
	        this.state = 117;
	        this.match(pgsParser.SP);
	        this.state = 118;
	        this.graphType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	graphType() {
	    let localctx = new GraphTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pgsParser.RULE_graphType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.typeName();
	        this.state = 121;
	        this.match(pgsParser.SP);
	        this.state = 122;
	        this.typeForm();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 123;
	            this.match(pgsParser.SP);
	        }

	        this.state = 126;
	        this.graphTypeDefinition();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeForm() {
	    let localctx = new TypeFormContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pgsParser.RULE_typeForm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!(_la===37 || _la===38)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	graphTypeDefinition() {
	    let localctx = new GraphTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pgsParser.RULE_graphTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(pgsParser.T__1);
	            this.state = 132;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 131;
	                this.match(pgsParser.SP);

	            }
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || _la===43) {
	                this.state = 134;
	                this.elementTypes();
	            }

	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 137;
	                this.match(pgsParser.SP);
	            }

	            this.state = 140;
	            this.match(pgsParser.T__2);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.match(pgsParser.IMPORTS);
	            this.state = 142;
	            this.match(pgsParser.SP);
	            this.state = 143;
	            this.typeName();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementTypes() {
	    let localctx = new ElementTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pgsParser.RULE_elementTypes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.elementType();
	        this.state = 157;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 148;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 147;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 150;
	                this.match(pgsParser.T__3);
	                this.state = 152;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 151;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 154;
	                this.elementType(); 
	            }
	            this.state = 159;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementType() {
	    let localctx = new ElementTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, pgsParser.RULE_elementType);
	    try {
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.typeName();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.nodeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.edgeType();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nodeType() {
	    let localctx = new NodeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pgsParser.RULE_nodeType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(pgsParser.T__4);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 166;
	            this.match(pgsParser.SP);
	        }

	        this.state = 169;
	        this.typeName();
	        this.state = 170;
	        this.labelPropertySpec();
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 171;
	            this.match(pgsParser.SP);
	        }

	        this.state = 174;
	        this.match(pgsParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edgeType() {
	    let localctx = new EdgeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pgsParser.RULE_edgeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.endpointType();
	        this.state = 177;
	        this.dash();
	        this.state = 178;
	        this.middleType();
	        this.state = 179;
	        this.dash();
	        this.state = 180;
	        this.rightArrowHead();
	        this.state = 181;
	        this.endpointType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	middleType() {
	    let localctx = new MiddleTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, pgsParser.RULE_middleType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(pgsParser.T__6);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 184;
	            this.match(pgsParser.SP);
	        }

	        this.state = 187;
	        this.typeName();
	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        if(la_===1) {
	            this.state = 188;
	            this.match(pgsParser.SP);

	        }
	        this.state = 191;
	        this.labelPropertySpec();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 192;
	            this.match(pgsParser.SP);
	        }

	        this.state = 195;
	        this.match(pgsParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endpointType() {
	    let localctx = new EndpointTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pgsParser.RULE_endpointType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(pgsParser.T__4);
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 198;
	            this.match(pgsParser.SP);

	        }
	        this.state = 201;
	        this.labelPropertySpec();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 202;
	            this.match(pgsParser.SP);
	        }

	        this.state = 205;
	        this.match(pgsParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelPropertySpec() {
	    let localctx = new LabelPropertySpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pgsParser.RULE_labelPropertySpec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 207;
	            this.match(pgsParser.T__8);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 208;
	                this.match(pgsParser.SP);
	            }

	            this.state = 211;
	            this.labelSpec(0);
	        }

	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 214;
	            this.match(pgsParser.SP);

	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 217;
	            this.match(pgsParser.OPEN);
	        }

	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 220;
	            this.match(pgsParser.SP);

	        }
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 223;
	            this.propertySpec();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	labelSpec(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LabelSpecContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, pgsParser.RULE_labelSpec, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 227;
	            this.match(pgsParser.T__4);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 228;
	                this.match(pgsParser.SP);
	            }

	            this.state = 231;
	            this.labelSpec(0);
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 232;
	                this.match(pgsParser.SP);
	            }

	            this.state = 235;
	            this.match(pgsParser.T__5);
	            break;

	        case 2:
	            this.state = 237;
	            this.match(pgsParser.T__6);
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 238;
	                this.match(pgsParser.SP);
	            }

	            this.state = 241;
	            this.labelSpec(0);
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 242;
	                this.match(pgsParser.SP);
	            }

	            this.state = 245;
	            this.match(pgsParser.T__7);
	            break;

	        case 3:
	            this.state = 247;
	            this.labelName();
	            break;

	        case 4:
	            this.state = 248;
	            this.typeName();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 276;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 274;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 253;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===41) {
	                        this.state = 252;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 255;
	                    this.match(pgsParser.T__9);
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===41) {
	                        this.state = 256;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 259;
	                    this.labelSpec(6);
	                    break;

	                case 2:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 260;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 262;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===41) {
	                        this.state = 261;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 264;
	                    this.match(pgsParser.T__10);
	                    this.state = 266;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===41) {
	                        this.state = 265;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 268;
	                    this.labelSpec(5);
	                    break;

	                case 3:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 269;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 271;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===41) {
	                        this.state = 270;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 273;
	                    this.match(pgsParser.T__11);
	                    break;

	                } 
	            }
	            this.state = 278;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	propertySpec() {
	    let localctx = new PropertySpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, pgsParser.RULE_propertySpec);
	    var _la = 0; // Token type
	    try {
	        this.state = 310;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.match(pgsParser.T__1);
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 280;
	                this.match(pgsParser.SP);
	            }

	            this.state = 283;
	            this.properties();
	            this.state = 292;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	            if(la_===1) {
	                this.state = 285;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 284;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 287;
	                this.match(pgsParser.T__3);
	                this.state = 289;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 288;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 291;
	                this.match(pgsParser.OPEN);

	            }
	            this.state = 295;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 294;
	                this.match(pgsParser.SP);
	            }

	            this.state = 297;
	            this.match(pgsParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
	            this.match(pgsParser.T__1);
	            this.state = 301;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            if(la_===1) {
	                this.state = 300;
	                this.match(pgsParser.SP);

	            }
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 303;
	                this.match(pgsParser.OPEN);
	            }

	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 306;
	                this.match(pgsParser.SP);
	            }

	            this.state = 309;
	            this.match(pgsParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	properties() {
	    let localctx = new PropertiesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pgsParser.RULE_properties);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.property();
	        this.state = 323;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 314;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 313;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 316;
	                this.match(pgsParser.T__3);
	                this.state = 318;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 317;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 320;
	                this.property(); 
	            }
	            this.state = 325;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, pgsParser.RULE_property);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 326;
	            this.match(pgsParser.OPTIONAL);
	            this.state = 327;
	            this.match(pgsParser.SP);
	        }

	        this.state = 330;
	        this.key();
	        this.state = 331;
	        this.match(pgsParser.SP);
	        this.state = 332;
	        this.propertyType();
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        if(la_===1) {
	            this.state = 333;
	            this.match(pgsParser.SP);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propertyType() {
	    let localctx = new PropertyTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, pgsParser.RULE_propertyType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(pgsParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, pgsParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(pgsParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelName() {
	    let localctx = new LabelNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, pgsParser.RULE_labelName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(pgsParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeName() {
	    let localctx = new TypeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, pgsParser.RULE_typeName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(pgsParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dash() {
	    let localctx = new DashContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, pgsParser.RULE_dash);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 33546240) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rightArrowHead() {
	    let localctx = new RightArrowHeadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, pgsParser.RULE_rightArrowHead);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 1040187392) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

pgsParser.EOF = antlr4.Token.EOF;
pgsParser.T__0 = 1;
pgsParser.T__1 = 2;
pgsParser.T__2 = 3;
pgsParser.T__3 = 4;
pgsParser.T__4 = 5;
pgsParser.T__5 = 6;
pgsParser.T__6 = 7;
pgsParser.T__7 = 8;
pgsParser.T__8 = 9;
pgsParser.T__9 = 10;
pgsParser.T__10 = 11;
pgsParser.T__11 = 12;
pgsParser.T__12 = 13;
pgsParser.T__13 = 14;
pgsParser.T__14 = 15;
pgsParser.T__15 = 16;
pgsParser.T__16 = 17;
pgsParser.T__17 = 18;
pgsParser.T__18 = 19;
pgsParser.T__19 = 20;
pgsParser.T__20 = 21;
pgsParser.T__21 = 22;
pgsParser.T__22 = 23;
pgsParser.T__23 = 24;
pgsParser.T__24 = 25;
pgsParser.T__25 = 26;
pgsParser.T__26 = 27;
pgsParser.T__27 = 28;
pgsParser.T__28 = 29;
pgsParser.CREATE = 30;
pgsParser.NODE = 31;
pgsParser.EDGE = 32;
pgsParser.OPEN = 33;
pgsParser.OPTIONAL = 34;
pgsParser.TYPE = 35;
pgsParser.GRAPH = 36;
pgsParser.STRICT = 37;
pgsParser.LOOSE = 38;
pgsParser.ABSTRACT = 39;
pgsParser.IMPORTS = 40;
pgsParser.SP = 41;
pgsParser.WHITESPACE = 42;
pgsParser.StringLiteral = 43;
pgsParser.EscapedChar = 44;
pgsParser.HexDigit = 45;
pgsParser.Digit = 46;
pgsParser.NonZeroDigit = 47;
pgsParser.NonZeroOctDigit = 48;
pgsParser.HexLetter = 49;
pgsParser.ZeroDigit = 50;

pgsParser.RULE_pgs = 0;
pgsParser.RULE_createType = 1;
pgsParser.RULE_createNodeType = 2;
pgsParser.RULE_createEdgeType = 3;
pgsParser.RULE_createGraphType = 4;
pgsParser.RULE_graphType = 5;
pgsParser.RULE_typeForm = 6;
pgsParser.RULE_graphTypeDefinition = 7;
pgsParser.RULE_elementTypes = 8;
pgsParser.RULE_elementType = 9;
pgsParser.RULE_nodeType = 10;
pgsParser.RULE_edgeType = 11;
pgsParser.RULE_middleType = 12;
pgsParser.RULE_endpointType = 13;
pgsParser.RULE_labelPropertySpec = 14;
pgsParser.RULE_labelSpec = 15;
pgsParser.RULE_propertySpec = 16;
pgsParser.RULE_properties = 17;
pgsParser.RULE_property = 18;
pgsParser.RULE_propertyType = 19;
pgsParser.RULE_key = 20;
pgsParser.RULE_labelName = 21;
pgsParser.RULE_typeName = 22;
pgsParser.RULE_dash = 23;
pgsParser.RULE_rightArrowHead = 24;

class PgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_pgs;
    }

	createType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CreateTypeContext);
	    } else {
	        return this.getTypedRuleContext(CreateTypeContext,i);
	    }
	};

	EOF() {
	    return this.getToken(pgsParser.EOF, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterPgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitPgs(this);
		}
	}


}



class CreateTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_createType;
    }

	createNodeType() {
	    return this.getTypedRuleContext(CreateNodeTypeContext,0);
	};

	createEdgeType() {
	    return this.getTypedRuleContext(CreateEdgeTypeContext,0);
	};

	createGraphType() {
	    return this.getTypedRuleContext(CreateGraphTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterCreateType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitCreateType(this);
		}
	}


}



class CreateNodeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_createNodeType;
    }

	CREATE() {
	    return this.getToken(pgsParser.CREATE, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	NODE() {
	    return this.getToken(pgsParser.NODE, 0);
	};

	TYPE() {
	    return this.getToken(pgsParser.TYPE, 0);
	};

	nodeType() {
	    return this.getTypedRuleContext(NodeTypeContext,0);
	};

	ABSTRACT() {
	    return this.getToken(pgsParser.ABSTRACT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterCreateNodeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitCreateNodeType(this);
		}
	}


}



class CreateEdgeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_createEdgeType;
    }

	CREATE() {
	    return this.getToken(pgsParser.CREATE, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	EDGE() {
	    return this.getToken(pgsParser.EDGE, 0);
	};

	TYPE() {
	    return this.getToken(pgsParser.TYPE, 0);
	};

	edgeType() {
	    return this.getTypedRuleContext(EdgeTypeContext,0);
	};

	ABSTRACT() {
	    return this.getToken(pgsParser.ABSTRACT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterCreateEdgeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitCreateEdgeType(this);
		}
	}


}



class CreateGraphTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_createGraphType;
    }

	CREATE() {
	    return this.getToken(pgsParser.CREATE, 0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	GRAPH() {
	    return this.getToken(pgsParser.GRAPH, 0);
	};

	TYPE() {
	    return this.getToken(pgsParser.TYPE, 0);
	};

	graphType() {
	    return this.getTypedRuleContext(GraphTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterCreateGraphType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitCreateGraphType(this);
		}
	}


}



class GraphTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_graphType;
    }

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	typeForm() {
	    return this.getTypedRuleContext(TypeFormContext,0);
	};

	graphTypeDefinition() {
	    return this.getTypedRuleContext(GraphTypeDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterGraphType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitGraphType(this);
		}
	}


}



class TypeFormContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_typeForm;
    }

	STRICT() {
	    return this.getToken(pgsParser.STRICT, 0);
	};

	LOOSE() {
	    return this.getToken(pgsParser.LOOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterTypeForm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitTypeForm(this);
		}
	}


}



class GraphTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_graphTypeDefinition;
    }

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	elementTypes() {
	    return this.getTypedRuleContext(ElementTypesContext,0);
	};

	IMPORTS() {
	    return this.getToken(pgsParser.IMPORTS, 0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterGraphTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitGraphTypeDefinition(this);
		}
	}


}



class ElementTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_elementTypes;
    }

	elementType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementTypeContext);
	    } else {
	        return this.getTypedRuleContext(ElementTypeContext,i);
	    }
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterElementTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitElementTypes(this);
		}
	}


}



class ElementTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_elementType;
    }

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	nodeType() {
	    return this.getTypedRuleContext(NodeTypeContext,0);
	};

	edgeType() {
	    return this.getTypedRuleContext(EdgeTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterElementType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitElementType(this);
		}
	}


}



class NodeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_nodeType;
    }

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	labelPropertySpec() {
	    return this.getTypedRuleContext(LabelPropertySpecContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterNodeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitNodeType(this);
		}
	}


}



class EdgeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_edgeType;
    }

	endpointType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EndpointTypeContext);
	    } else {
	        return this.getTypedRuleContext(EndpointTypeContext,i);
	    }
	};

	dash = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DashContext);
	    } else {
	        return this.getTypedRuleContext(DashContext,i);
	    }
	};

	middleType() {
	    return this.getTypedRuleContext(MiddleTypeContext,0);
	};

	rightArrowHead() {
	    return this.getTypedRuleContext(RightArrowHeadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterEdgeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitEdgeType(this);
		}
	}


}



class MiddleTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_middleType;
    }

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	labelPropertySpec() {
	    return this.getTypedRuleContext(LabelPropertySpecContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterMiddleType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitMiddleType(this);
		}
	}


}



class EndpointTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_endpointType;
    }

	labelPropertySpec() {
	    return this.getTypedRuleContext(LabelPropertySpecContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterEndpointType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitEndpointType(this);
		}
	}


}



class LabelPropertySpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_labelPropertySpec;
    }

	labelSpec() {
	    return this.getTypedRuleContext(LabelSpecContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	OPEN() {
	    return this.getToken(pgsParser.OPEN, 0);
	};

	propertySpec() {
	    return this.getTypedRuleContext(PropertySpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterLabelPropertySpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitLabelPropertySpec(this);
		}
	}


}



class LabelSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_labelSpec;
    }

	labelSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelSpecContext);
	    } else {
	        return this.getTypedRuleContext(LabelSpecContext,i);
	    }
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	labelName() {
	    return this.getTypedRuleContext(LabelNameContext,0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterLabelSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitLabelSpec(this);
		}
	}


}



class PropertySpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_propertySpec;
    }

	properties() {
	    return this.getTypedRuleContext(PropertiesContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	OPEN() {
	    return this.getToken(pgsParser.OPEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterPropertySpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitPropertySpec(this);
		}
	}


}



class PropertiesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_properties;
    }

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterProperties(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitProperties(this);
		}
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_property;
    }

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	SP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pgsParser.SP);
	    } else {
	        return this.getToken(pgsParser.SP, i);
	    }
	};


	propertyType() {
	    return this.getTypedRuleContext(PropertyTypeContext,0);
	};

	OPTIONAL() {
	    return this.getToken(pgsParser.OPTIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitProperty(this);
		}
	}


}



class PropertyTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_propertyType;
    }

	StringLiteral() {
	    return this.getToken(pgsParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterPropertyType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitPropertyType(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_key;
    }

	StringLiteral() {
	    return this.getToken(pgsParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitKey(this);
		}
	}


}



class LabelNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_labelName;
    }

	StringLiteral() {
	    return this.getToken(pgsParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterLabelName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitLabelName(this);
		}
	}


}



class TypeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_typeName;
    }

	StringLiteral() {
	    return this.getToken(pgsParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterTypeName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitTypeName(this);
		}
	}


}



class DashContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_dash;
    }


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterDash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitDash(this);
		}
	}


}



class RightArrowHeadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pgsParser.RULE_rightArrowHead;
    }


	enterRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.enterRightArrowHead(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pgsListener ) {
	        listener.exitRightArrowHead(this);
		}
	}


}




pgsParser.PgsContext = PgsContext; 
pgsParser.CreateTypeContext = CreateTypeContext; 
pgsParser.CreateNodeTypeContext = CreateNodeTypeContext; 
pgsParser.CreateEdgeTypeContext = CreateEdgeTypeContext; 
pgsParser.CreateGraphTypeContext = CreateGraphTypeContext; 
pgsParser.GraphTypeContext = GraphTypeContext; 
pgsParser.TypeFormContext = TypeFormContext; 
pgsParser.GraphTypeDefinitionContext = GraphTypeDefinitionContext; 
pgsParser.ElementTypesContext = ElementTypesContext; 
pgsParser.ElementTypeContext = ElementTypeContext; 
pgsParser.NodeTypeContext = NodeTypeContext; 
pgsParser.EdgeTypeContext = EdgeTypeContext; 
pgsParser.MiddleTypeContext = MiddleTypeContext; 
pgsParser.EndpointTypeContext = EndpointTypeContext; 
pgsParser.LabelPropertySpecContext = LabelPropertySpecContext; 
pgsParser.LabelSpecContext = LabelSpecContext; 
pgsParser.PropertySpecContext = PropertySpecContext; 
pgsParser.PropertiesContext = PropertiesContext; 
pgsParser.PropertyContext = PropertyContext; 
pgsParser.PropertyTypeContext = PropertyTypeContext; 
pgsParser.KeyContext = KeyContext; 
pgsParser.LabelNameContext = LabelNameContext; 
pgsParser.TypeNameContext = TypeNameContext; 
pgsParser.DashContext = DashContext; 
pgsParser.RightArrowHeadContext = RightArrowHeadContext; 
