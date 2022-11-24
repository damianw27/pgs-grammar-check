// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import pgsListener from './pgsListener.js';
const serializedATN = [4,1,48,337,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,3,0,48,8,0,1,0,1,0,3,0,52,8,0,1,0,3,0,55,
8,0,1,0,3,0,58,8,0,1,0,5,0,61,8,0,10,0,12,0,64,9,0,1,0,3,0,67,8,0,1,0,1,
0,3,0,71,8,0,3,0,73,8,0,1,0,3,0,76,8,0,1,0,1,0,1,1,1,1,1,1,3,1,83,8,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,111,8,5,1,5,3,5,114,8,5,1,5,3,5,117,8,
5,1,5,1,5,3,5,121,8,5,1,5,3,5,124,8,5,1,5,3,5,127,8,5,1,5,1,5,1,6,1,6,3,
6,133,8,6,1,6,1,6,3,6,137,8,6,1,6,5,6,140,8,6,10,6,12,6,143,9,6,1,7,1,7,
1,7,3,7,148,8,7,1,8,3,8,151,8,8,1,8,1,8,1,8,3,8,156,8,8,1,8,1,8,1,8,3,8,
161,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,174,8,10,1,10,
1,10,3,10,178,8,10,1,10,1,10,3,10,182,8,10,1,10,1,10,1,11,1,11,3,11,188,
8,11,1,11,1,11,3,11,192,8,11,1,11,1,11,1,12,1,12,3,12,198,8,12,1,12,3,12,
201,8,12,1,12,3,12,204,8,12,1,12,3,12,207,8,12,1,12,3,12,210,8,12,1,12,3,
12,213,8,12,1,13,1,13,1,13,3,13,218,8,13,1,13,1,13,3,13,222,8,13,1,13,1,
13,1,13,1,13,3,13,228,8,13,1,13,1,13,3,13,232,8,13,1,13,1,13,1,13,1,13,3,
13,238,8,13,1,13,1,13,3,13,242,8,13,1,13,1,13,3,13,246,8,13,1,13,1,13,1,
13,3,13,251,8,13,1,13,1,13,3,13,255,8,13,1,13,1,13,1,13,3,13,260,8,13,1,
13,5,13,263,8,13,10,13,12,13,266,9,13,1,14,1,14,3,14,270,8,14,1,14,1,14,
3,14,274,8,14,1,14,1,14,3,14,278,8,14,1,14,3,14,281,8,14,1,14,3,14,284,8,
14,1,14,1,14,1,14,1,14,3,14,290,8,14,1,14,3,14,293,8,14,1,14,3,14,296,8,
14,1,14,3,14,299,8,14,1,15,1,15,3,15,303,8,15,1,15,1,15,3,15,307,8,15,1,
15,5,15,310,8,15,10,15,12,15,313,9,15,1,16,1,16,3,16,317,8,16,1,16,1,16,
1,16,1,16,3,16,323,8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,
1,22,1,22,1,22,0,1,26,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,0,2,1,0,13,24,1,0,25,29,378,0,47,1,0,0,0,2,82,1,0,0,0,4,84,
1,0,0,0,6,92,1,0,0,0,8,100,1,0,0,0,10,108,1,0,0,0,12,130,1,0,0,0,14,147,
1,0,0,0,16,150,1,0,0,0,18,164,1,0,0,0,20,171,1,0,0,0,22,185,1,0,0,0,24,200,
1,0,0,0,26,237,1,0,0,0,28,298,1,0,0,0,30,300,1,0,0,0,32,316,1,0,0,0,34,324,
1,0,0,0,36,326,1,0,0,0,38,328,1,0,0,0,40,330,1,0,0,0,42,332,1,0,0,0,44,334,
1,0,0,0,46,48,5,39,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,62,3,
2,1,0,50,52,5,39,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,55,5,1,
0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,58,5,39,0,0,57,56,1,0,0,
0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,3,2,1,0,60,51,1,0,0,0,61,64,1,0,0,0,
62,60,1,0,0,0,62,63,1,0,0,0,63,72,1,0,0,0,64,62,1,0,0,0,65,67,5,39,0,0,66,
65,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,70,5,1,0,0,69,71,5,39,0,0,70,69,
1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,66,1,0,0,0,72,73,1,0,0,0,73,75,1,
0,0,0,74,76,5,39,0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,5,0,
0,1,78,1,1,0,0,0,79,83,3,4,2,0,80,83,3,6,3,0,81,83,3,8,4,0,82,79,1,0,0,0,
82,80,1,0,0,0,82,81,1,0,0,0,83,3,1,0,0,0,84,85,5,30,0,0,85,86,5,39,0,0,86,
87,5,31,0,0,87,88,5,39,0,0,88,89,5,35,0,0,89,90,5,39,0,0,90,91,3,16,8,0,
91,5,1,0,0,0,92,93,5,30,0,0,93,94,5,39,0,0,94,95,5,32,0,0,95,96,5,39,0,0,
96,97,5,35,0,0,97,98,5,39,0,0,98,99,3,18,9,0,99,7,1,0,0,0,100,101,5,30,0,
0,101,102,5,39,0,0,102,103,5,36,0,0,103,104,5,39,0,0,104,105,5,35,0,0,105,
106,5,39,0,0,106,107,3,10,5,0,107,9,1,0,0,0,108,110,3,40,20,0,109,111,5,
39,0,0,110,109,1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,114,5,37,0,0,
113,112,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,117,5,39,0,0,116,115,
1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,5,2,0,0,119,121,5,39,0,0,
120,119,1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,124,3,12,6,0,123,122,
1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,127,5,39,0,0,126,125,1,0,0,0,
126,127,1,0,0,0,127,128,1,0,0,0,128,129,5,3,0,0,129,11,1,0,0,0,130,141,3,
14,7,0,131,133,5,39,0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,
134,136,5,4,0,0,135,137,5,39,0,0,136,135,1,0,0,0,136,137,1,0,0,0,137,138,
1,0,0,0,138,140,3,14,7,0,139,132,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,
141,142,1,0,0,0,142,13,1,0,0,0,143,141,1,0,0,0,144,148,3,40,20,0,145,148,
3,16,8,0,146,148,3,18,9,0,147,144,1,0,0,0,147,145,1,0,0,0,147,146,1,0,0,
0,148,15,1,0,0,0,149,151,5,38,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,
1,0,0,0,152,153,5,39,0,0,153,155,5,5,0,0,154,156,5,39,0,0,155,154,1,0,0,
0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,3,40,20,0,158,160,3,24,12,0,159,
161,5,39,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,163,5,6,
0,0,163,17,1,0,0,0,164,165,3,22,11,0,165,166,3,42,21,0,166,167,3,20,10,0,
167,168,3,42,21,0,168,169,3,44,22,0,169,170,3,22,11,0,170,19,1,0,0,0,171,
173,5,7,0,0,172,174,5,39,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,
0,0,175,177,3,40,20,0,176,178,5,39,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,
179,1,0,0,0,179,181,3,24,12,0,180,182,5,39,0,0,181,180,1,0,0,0,181,182,1,
0,0,0,182,183,1,0,0,0,183,184,5,8,0,0,184,21,1,0,0,0,185,187,5,5,0,0,186,
188,5,39,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,191,3,24,
12,0,190,192,5,39,0,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,
194,5,6,0,0,194,23,1,0,0,0,195,197,5,9,0,0,196,198,5,39,0,0,197,196,1,0,
0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,201,3,26,13,0,200,195,1,0,0,0,200,
201,1,0,0,0,201,203,1,0,0,0,202,204,5,39,0,0,203,202,1,0,0,0,203,204,1,0,
0,0,204,206,1,0,0,0,205,207,5,33,0,0,206,205,1,0,0,0,206,207,1,0,0,0,207,
209,1,0,0,0,208,210,5,39,0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,212,1,0,
0,0,211,213,3,28,14,0,212,211,1,0,0,0,212,213,1,0,0,0,213,25,1,0,0,0,214,
215,6,13,-1,0,215,217,5,5,0,0,216,218,5,39,0,0,217,216,1,0,0,0,217,218,1,
0,0,0,218,219,1,0,0,0,219,221,3,26,13,0,220,222,5,39,0,0,221,220,1,0,0,0,
221,222,1,0,0,0,222,223,1,0,0,0,223,224,5,6,0,0,224,238,1,0,0,0,225,227,
5,7,0,0,226,228,5,39,0,0,227,226,1,0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,
229,231,3,26,13,0,230,232,5,39,0,0,231,230,1,0,0,0,231,232,1,0,0,0,232,233,
1,0,0,0,233,234,5,8,0,0,234,238,1,0,0,0,235,238,3,38,19,0,236,238,3,40,20,
0,237,214,1,0,0,0,237,225,1,0,0,0,237,235,1,0,0,0,237,236,1,0,0,0,238,264,
1,0,0,0,239,241,10,5,0,0,240,242,5,39,0,0,241,240,1,0,0,0,241,242,1,0,0,
0,242,243,1,0,0,0,243,245,5,10,0,0,244,246,5,39,0,0,245,244,1,0,0,0,245,
246,1,0,0,0,246,247,1,0,0,0,247,263,3,26,13,6,248,250,10,4,0,0,249,251,5,
39,0,0,250,249,1,0,0,0,250,251,1,0,0,0,251,252,1,0,0,0,252,254,5,11,0,0,
253,255,5,39,0,0,254,253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,263,
3,26,13,5,257,259,10,3,0,0,258,260,5,39,0,0,259,258,1,0,0,0,259,260,1,0,
0,0,260,261,1,0,0,0,261,263,5,12,0,0,262,239,1,0,0,0,262,248,1,0,0,0,262,
257,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,27,1,0,0,
0,266,264,1,0,0,0,267,269,5,2,0,0,268,270,5,39,0,0,269,268,1,0,0,0,269,270,
1,0,0,0,270,271,1,0,0,0,271,280,3,30,15,0,272,274,5,39,0,0,273,272,1,0,0,
0,273,274,1,0,0,0,274,275,1,0,0,0,275,277,5,4,0,0,276,278,5,39,0,0,277,276,
1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,5,33,0,0,280,273,1,0,0,0,
280,281,1,0,0,0,281,283,1,0,0,0,282,284,5,39,0,0,283,282,1,0,0,0,283,284,
1,0,0,0,284,285,1,0,0,0,285,286,5,3,0,0,286,299,1,0,0,0,287,289,5,2,0,0,
288,290,5,39,0,0,289,288,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,293,
5,33,0,0,292,291,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,296,5,39,0,
0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,299,5,3,0,0,298,267,
1,0,0,0,298,287,1,0,0,0,299,29,1,0,0,0,300,311,3,32,16,0,301,303,5,39,0,
0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,306,5,4,0,0,305,307,
5,39,0,0,306,305,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,310,3,32,16,
0,309,302,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,31,
1,0,0,0,313,311,1,0,0,0,314,315,5,34,0,0,315,317,5,39,0,0,316,314,1,0,0,
0,316,317,1,0,0,0,317,318,1,0,0,0,318,319,3,36,18,0,319,320,5,39,0,0,320,
322,3,34,17,0,321,323,5,39,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,33,1,
0,0,0,324,325,5,41,0,0,325,35,1,0,0,0,326,327,5,41,0,0,327,37,1,0,0,0,328,
329,5,41,0,0,329,39,1,0,0,0,330,331,5,41,0,0,331,41,1,0,0,0,332,333,7,0,
0,0,333,43,1,0,0,0,334,335,7,1,0,0,335,45,1,0,0,0,60,47,51,54,57,62,66,70,
72,75,82,110,113,116,120,123,126,132,136,141,147,150,155,160,173,177,181,
187,191,197,200,203,206,209,212,217,221,227,231,237,241,245,250,254,259,
262,264,269,273,277,280,283,289,292,295,298,302,306,311,316,322];


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
                            null, null, "'0'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "CREATE", 
                             "NODE", "EDGE", "OPEN", "OPTIONAL", "TYPE", 
                             "GRAPH", "STRICT", "ABSTRACT", "SP", "WHITESPACE", 
                             "StringLiteral", "EscapedChar", "HexDigit", 
                             "Digit", "NonZeroDigit", "NonZeroOctDigit", 
                             "HexLetter", "ZeroDigit" ];
    static ruleNames = [ "pgs", "createType", "createNodeType", "createEdgeType", 
                         "createGraphType", "graphType", "elementTypes", 
                         "elementType", "nodeType", "edgeType", "middleType", 
                         "endpointType", "labelPropertySpec", "labelSpec", 
                         "propertySpec", "properties", "property", "propertyType", 
                         "key", "labelName", "typeName", "dash", "rightArrowHead" ];

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
    	case 13:
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
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 46;
	            this.match(pgsParser.SP);
	        }

	        this.state = 49;
	        this.createType();
	        this.state = 62;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 51;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                if(la_===1) {
	                    this.state = 50;
	                    this.match(pgsParser.SP);

	                }
	                this.state = 54;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===1) {
	                    this.state = 53;
	                    this.match(pgsParser.T__0);
	                }

	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 56;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 59;
	                this.createType(); 
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 65;
	                this.match(pgsParser.SP);
	            }

	            this.state = 68;
	            this.match(pgsParser.T__0);
	            this.state = 70;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 69;
	                this.match(pgsParser.SP);

	            }

	        }
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 74;
	            this.match(pgsParser.SP);
	        }

	        this.state = 77;
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
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.createNodeType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.createEdgeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(pgsParser.CREATE);
	        this.state = 85;
	        this.match(pgsParser.SP);
	        this.state = 86;
	        this.match(pgsParser.NODE);
	        this.state = 87;
	        this.match(pgsParser.SP);
	        this.state = 88;
	        this.match(pgsParser.TYPE);
	        this.state = 89;
	        this.match(pgsParser.SP);
	        this.state = 90;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(pgsParser.CREATE);
	        this.state = 93;
	        this.match(pgsParser.SP);
	        this.state = 94;
	        this.match(pgsParser.EDGE);
	        this.state = 95;
	        this.match(pgsParser.SP);
	        this.state = 96;
	        this.match(pgsParser.TYPE);
	        this.state = 97;
	        this.match(pgsParser.SP);
	        this.state = 98;
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
	        this.state = 100;
	        this.match(pgsParser.CREATE);
	        this.state = 101;
	        this.match(pgsParser.SP);
	        this.state = 102;
	        this.match(pgsParser.GRAPH);
	        this.state = 103;
	        this.match(pgsParser.SP);
	        this.state = 104;
	        this.match(pgsParser.TYPE);
	        this.state = 105;
	        this.match(pgsParser.SP);
	        this.state = 106;
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
	        this.state = 108;
	        this.typeName();
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.match(pgsParser.SP);

	        }
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 112;
	            this.match(pgsParser.STRICT);
	        }

	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 115;
	            this.match(pgsParser.SP);
	        }

	        this.state = 118;
	        this.match(pgsParser.T__1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 119;
	            this.match(pgsParser.SP);

	        }
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 122;
	            this.elementTypes();

	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 125;
	            this.match(pgsParser.SP);
	        }

	        this.state = 128;
	        this.match(pgsParser.T__2);
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
	    this.enterRule(localctx, 12, pgsParser.RULE_elementTypes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.elementType();
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 131;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 134;
	                this.match(pgsParser.T__3);
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                if(la_===1) {
	                    this.state = 135;
	                    this.match(pgsParser.SP);

	                }
	                this.state = 138;
	                this.elementType(); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	    this.enterRule(localctx, 14, pgsParser.RULE_elementType);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.typeName();
	            break;
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.nodeType();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 146;
	            this.edgeType();
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



	nodeType() {
	    let localctx = new NodeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pgsParser.RULE_nodeType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 149;
	            this.match(pgsParser.ABSTRACT);
	        }

	        this.state = 152;
	        this.match(pgsParser.SP);
	        this.state = 153;
	        this.match(pgsParser.T__4);
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 154;
	            this.match(pgsParser.SP);
	        }

	        this.state = 157;
	        this.typeName();
	        this.state = 158;
	        this.labelPropertySpec();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 159;
	            this.match(pgsParser.SP);
	        }

	        this.state = 162;
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
	    this.enterRule(localctx, 18, pgsParser.RULE_edgeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.endpointType();
	        this.state = 165;
	        this.dash();
	        this.state = 166;
	        this.middleType();
	        this.state = 167;
	        this.dash();
	        this.state = 168;
	        this.rightArrowHead();
	        this.state = 169;
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
	    this.enterRule(localctx, 20, pgsParser.RULE_middleType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(pgsParser.T__6);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 172;
	            this.match(pgsParser.SP);
	        }

	        this.state = 175;
	        this.typeName();
	        this.state = 177;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        if(la_===1) {
	            this.state = 176;
	            this.match(pgsParser.SP);

	        }
	        this.state = 179;
	        this.labelPropertySpec();
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 180;
	            this.match(pgsParser.SP);
	        }

	        this.state = 183;
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
	    this.enterRule(localctx, 22, pgsParser.RULE_endpointType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(pgsParser.T__4);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 186;
	            this.match(pgsParser.SP);

	        }
	        this.state = 189;
	        this.labelPropertySpec();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 190;
	            this.match(pgsParser.SP);
	        }

	        this.state = 193;
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
	    this.enterRule(localctx, 24, pgsParser.RULE_labelPropertySpec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 195;
	            this.match(pgsParser.T__8);
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 196;
	                this.match(pgsParser.SP);
	            }

	            this.state = 199;
	            this.labelSpec(0);
	        }

	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 202;
	            this.match(pgsParser.SP);

	        }
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 205;
	            this.match(pgsParser.OPEN);
	        }

	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 208;
	            this.match(pgsParser.SP);

	        }
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 211;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, pgsParser.RULE_labelSpec, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 215;
	            this.match(pgsParser.T__4);
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 216;
	                this.match(pgsParser.SP);
	            }

	            this.state = 219;
	            this.labelSpec(0);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 220;
	                this.match(pgsParser.SP);
	            }

	            this.state = 223;
	            this.match(pgsParser.T__5);
	            break;

	        case 2:
	            this.state = 225;
	            this.match(pgsParser.T__6);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 226;
	                this.match(pgsParser.SP);
	            }

	            this.state = 229;
	            this.labelSpec(0);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 230;
	                this.match(pgsParser.SP);
	            }

	            this.state = 233;
	            this.match(pgsParser.T__7);
	            break;

	        case 3:
	            this.state = 235;
	            this.labelName();
	            break;

	        case 4:
	            this.state = 236;
	            this.typeName();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 264;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 262;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 239;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 241;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===39) {
	                        this.state = 240;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 243;
	                    this.match(pgsParser.T__9);
	                    this.state = 245;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===39) {
	                        this.state = 244;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 247;
	                    this.labelSpec(6);
	                    break;

	                case 2:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 248;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 250;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===39) {
	                        this.state = 249;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 252;
	                    this.match(pgsParser.T__10);
	                    this.state = 254;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===39) {
	                        this.state = 253;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 256;
	                    this.labelSpec(5);
	                    break;

	                case 3:
	                    localctx = new LabelSpecContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, pgsParser.RULE_labelSpec);
	                    this.state = 257;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 259;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===39) {
	                        this.state = 258;
	                        this.match(pgsParser.SP);
	                    }

	                    this.state = 261;
	                    this.match(pgsParser.T__11);
	                    break;

	                } 
	            }
	            this.state = 266;
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
	    this.enterRule(localctx, 28, pgsParser.RULE_propertySpec);
	    var _la = 0; // Token type
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.match(pgsParser.T__1);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 268;
	                this.match(pgsParser.SP);
	            }

	            this.state = 271;
	            this.properties();
	            this.state = 280;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	            if(la_===1) {
	                this.state = 273;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 272;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 275;
	                this.match(pgsParser.T__3);
	                this.state = 277;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 276;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 279;
	                this.match(pgsParser.OPEN);

	            }
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 282;
	                this.match(pgsParser.SP);
	            }

	            this.state = 285;
	            this.match(pgsParser.T__2);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 287;
	            this.match(pgsParser.T__1);
	            this.state = 289;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            if(la_===1) {
	                this.state = 288;
	                this.match(pgsParser.SP);

	            }
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 291;
	                this.match(pgsParser.OPEN);
	            }

	            this.state = 295;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 294;
	                this.match(pgsParser.SP);
	            }

	            this.state = 297;
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
	    this.enterRule(localctx, 30, pgsParser.RULE_properties);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.property();
	        this.state = 311;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 301;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 304;
	                this.match(pgsParser.T__3);
	                this.state = 306;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===39) {
	                    this.state = 305;
	                    this.match(pgsParser.SP);
	                }

	                this.state = 308;
	                this.property(); 
	            }
	            this.state = 313;
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
	    this.enterRule(localctx, 32, pgsParser.RULE_property);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 314;
	            this.match(pgsParser.OPTIONAL);
	            this.state = 315;
	            this.match(pgsParser.SP);
	        }

	        this.state = 318;
	        this.key();
	        this.state = 319;
	        this.match(pgsParser.SP);
	        this.state = 320;
	        this.propertyType();
	        this.state = 322;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        if(la_===1) {
	            this.state = 321;
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
	    this.enterRule(localctx, 34, pgsParser.RULE_propertyType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
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
	    this.enterRule(localctx, 36, pgsParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
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
	    this.enterRule(localctx, 38, pgsParser.RULE_labelName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
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
	    this.enterRule(localctx, 40, pgsParser.RULE_typeName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
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
	    this.enterRule(localctx, 42, pgsParser.RULE_dash);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
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
	    this.enterRule(localctx, 44, pgsParser.RULE_rightArrowHead);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
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
pgsParser.ABSTRACT = 38;
pgsParser.SP = 39;
pgsParser.WHITESPACE = 40;
pgsParser.StringLiteral = 41;
pgsParser.EscapedChar = 42;
pgsParser.HexDigit = 43;
pgsParser.Digit = 44;
pgsParser.NonZeroDigit = 45;
pgsParser.NonZeroOctDigit = 46;
pgsParser.HexLetter = 47;
pgsParser.ZeroDigit = 48;

pgsParser.RULE_pgs = 0;
pgsParser.RULE_createType = 1;
pgsParser.RULE_createNodeType = 2;
pgsParser.RULE_createEdgeType = 3;
pgsParser.RULE_createGraphType = 4;
pgsParser.RULE_graphType = 5;
pgsParser.RULE_elementTypes = 6;
pgsParser.RULE_elementType = 7;
pgsParser.RULE_nodeType = 8;
pgsParser.RULE_edgeType = 9;
pgsParser.RULE_middleType = 10;
pgsParser.RULE_endpointType = 11;
pgsParser.RULE_labelPropertySpec = 12;
pgsParser.RULE_labelSpec = 13;
pgsParser.RULE_propertySpec = 14;
pgsParser.RULE_properties = 15;
pgsParser.RULE_property = 16;
pgsParser.RULE_propertyType = 17;
pgsParser.RULE_key = 18;
pgsParser.RULE_labelName = 19;
pgsParser.RULE_typeName = 20;
pgsParser.RULE_dash = 21;
pgsParser.RULE_rightArrowHead = 22;

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


	STRICT() {
	    return this.getToken(pgsParser.STRICT, 0);
	};

	elementTypes() {
	    return this.getTypedRuleContext(ElementTypesContext,0);
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


	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	labelPropertySpec() {
	    return this.getTypedRuleContext(LabelPropertySpecContext,0);
	};

	ABSTRACT() {
	    return this.getToken(pgsParser.ABSTRACT, 0);
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
