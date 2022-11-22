import { ATN } from 'antlr4ts/atn/ATN';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';
import { literalNames } from '../shared/names/literal-names';
import { symbolicNames } from '../shared/names/symbolic-names';
import { ruleNames } from './names/rule-names';
import { PgsParserAtn } from './pgs-parser-atn';
import { PgsContext } from './contexts/pgs-context';
import { CreateTypeContext } from './contexts/create-type-context';
import { CreateNodeTypeContext } from './contexts/create-node-type-context';
import { CreateEdgeTypeContext } from './contexts/create-edge-type-context';
import { CreateGraphTypeContext } from './contexts/create-graph-type-context';
import { GraphTypeContext } from './contexts/graph-type-context';
import { ElementTypesContext } from './contexts/element-types-context';
import { ElementTypeContext } from './contexts/element-type-context';
import { NodeTypeContext } from './contexts/node-type-context';
import { EdgeTypeContext } from './contexts/edge-type-context';
import { EndpointTypeContext } from './contexts/endpoint-type-context';
import { LabelPropertySpecContext } from './contexts/label-property-spec-context';
import { LabelSpecContext } from './contexts/label-spec-context';
import { PropertySpecContext } from './contexts/property-spec-context';
import { PropertiesContext } from './contexts/properties-context';
import { PropertyContext } from './contexts/property-context';
import { PropertyTypeContext } from './contexts/property-type-context';
import { KeyContext } from './contexts/key-context';
import { LabelNameContext } from './contexts/label-name-context';
import { TypeNameContext } from './contexts/type-name-context';
import { DashContext } from './contexts/dash-context';
import { RightArrowHeadContext } from './contexts/right-arrow-head-context';

export class PgsParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly T__18 = 19;
  public static readonly T__19 = 20;
  public static readonly T__20 = 21;
  public static readonly T__21 = 22;
  public static readonly T__22 = 23;
  public static readonly T__23 = 24;
  public static readonly T__24 = 25;
  public static readonly T__25 = 26;
  public static readonly T__26 = 27;
  public static readonly T__27 = 28;
  public static readonly T__28 = 29;
  public static readonly CREATE = 30;
  public static readonly NODE = 31;
  public static readonly EDGE = 32;
  public static readonly OPEN = 33;
  public static readonly OPTIONAL = 34;
  public static readonly TYPE = 35;
  public static readonly GRAPH = 36;
  public static readonly STRICT = 37;
  public static readonly SP = 38;
  public static readonly WHITESPACE = 39;
  public static readonly StringLiteral = 40;
  public static readonly EscapedChar = 41;
  public static readonly HexDigit = 42;
  public static readonly Digit = 43;
  public static readonly NonZeroDigit = 44;
  public static readonly NonZeroOctDigit = 45;
  public static readonly HexLetter = 46;
  public static readonly ZeroDigit = 47;
  public static readonly RULE_pgs = 0;
  public static readonly RULE_createType = 1;
  public static readonly RULE_createNodeType = 2;
  public static readonly RULE_createEdgeType = 3;
  public static readonly RULE_createGraphType = 4;
  public static readonly RULE_graphType = 5;
  public static readonly RULE_elementTypes = 6;
  public static readonly RULE_elementType = 7;
  public static readonly RULE_nodeType = 8;
  public static readonly RULE_edgeType = 9;
  public static readonly RULE_endpointType = 10;
  public static readonly RULE_labelPropertySpec = 11;
  public static readonly RULE_labelSpec = 12;
  public static readonly RULE_propertySpec = 13;
  public static readonly RULE_properties = 14;
  public static readonly RULE_property = 15;
  public static readonly RULE_propertyType = 16;
  public static readonly RULE_key = 17;
  public static readonly RULE_labelName = 18;
  public static readonly RULE_typeName = 19;
  public static readonly RULE_dash = 20;
  public static readonly RULE_rightArrowHead = 21;

  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    literalNames,
    symbolicNames,
    []
  );

  public readonly grammarFileName = 'pgs.g4';

  public constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(PgsParserAtn.instance, this);
  }

  public get vocabulary(): Vocabulary {
    return PgsParser.VOCABULARY;
  }

  public get ruleNames(): string[] {
    return ruleNames;
  }

  public get serializedATN(): string {
    return PgsParserAtn.serializedATN;
  }

  public pgs(): PgsContext {
    let localContext: PgsContext = new PgsContext(this._ctx, this.state);
    this.enterRule(localContext, 0, PgsParser.RULE_pgs);
    let la: number;

    try {
      let alt: number;
      this.enterOuterAlt(localContext, 1);
      this.state = 45;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 44;
        this.match(PgsParser.SP);
      }

      this.state = 47;
      this.createType();
      this.state = 60;
      this._errHandler.sync(this);
      alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);

      while (alt !== 2 && alt !== ATN.INVALID_ALT_NUMBER) {
        if (alt === 1) {
          this.state = 49;
          this._errHandler.sync(this);

          switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
            case 1:
              this.state = 48;
              this.match(PgsParser.SP);
              break;
          }

          this.state = 52;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.T__0) {
            this.state = 51;
            this.match(PgsParser.T__0);
          }

          this.state = 55;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 54;
            this.match(PgsParser.SP);
          }

          this.state = 57;
          this.createType();
        }

        this.state = 62;
        this._errHandler.sync(this);
        alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
      }

      this.state = 70;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
        case 1:
          this.state = 64;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 63;
            this.match(PgsParser.SP);
          }

          this.state = 66;
          this.match(PgsParser.T__0);
          this.state = 68;
          this._errHandler.sync(this);

          switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
            case 1:
              this.state = 67;
              this.match(PgsParser.SP);
              break;
          }

          break;
      }

      this.state = 73;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 72;
        this.match(PgsParser.SP);
      }

      this.state = 75;
      this.match(PgsParser.EOF);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public createType(): CreateTypeContext {
    let localContext: CreateTypeContext = new CreateTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 2, PgsParser.RULE_createType);

    try {
      this.state = 80;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          this.state = 77;
          this.createNodeType();
          break;

        case 2:
          this.enterOuterAlt(localContext, 2);
          this.state = 78;
          this.createEdgeType();
          break;

        case 3:
          this.enterOuterAlt(localContext, 3);
          this.state = 79;
          this.createGraphType();
          break;
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public createNodeType(): CreateNodeTypeContext {
    let localContext: CreateNodeTypeContext = new CreateNodeTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 4, PgsParser.RULE_createNodeType);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 82;
      this.match(PgsParser.CREATE);
      this.state = 83;
      this.match(PgsParser.SP);
      this.state = 84;
      this.match(PgsParser.NODE);
      this.state = 85;
      this.match(PgsParser.SP);
      this.state = 86;
      this.match(PgsParser.TYPE);
      this.state = 87;
      this.match(PgsParser.SP);
      this.state = 88;
      this.nodeType();
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public createEdgeType(): CreateEdgeTypeContext {
    let localContext: CreateEdgeTypeContext = new CreateEdgeTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 6, PgsParser.RULE_createEdgeType);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 90;
      this.match(PgsParser.CREATE);
      this.state = 91;
      this.match(PgsParser.SP);
      this.state = 92;
      this.match(PgsParser.EDGE);
      this.state = 93;
      this.match(PgsParser.SP);
      this.state = 94;
      this.match(PgsParser.TYPE);
      this.state = 95;
      this.match(PgsParser.SP);
      this.state = 96;
      this.edgeType();
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public createGraphType(): CreateGraphTypeContext {
    let localContext: CreateGraphTypeContext = new CreateGraphTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 8, PgsParser.RULE_createGraphType);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 98;
      this.match(PgsParser.CREATE);
      this.state = 99;
      this.match(PgsParser.SP);
      this.state = 100;
      this.match(PgsParser.GRAPH);
      this.state = 101;
      this.match(PgsParser.SP);
      this.state = 102;
      this.match(PgsParser.TYPE);
      this.state = 103;
      this.match(PgsParser.SP);
      this.state = 104;
      this.graphType();
    } catch (re) {
      if (re instanceof RecognitionException) {
        localContext.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public graphType(): GraphTypeContext {
    let localContext: GraphTypeContext = new GraphTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 10, PgsParser.RULE_graphType);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 106;
      this.typeName();
      this.state = 108;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.state = 107;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 111;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.STRICT) {
        this.state = 110;
        this.match(PgsParser.STRICT);
      }

      this.state = 114;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 113;
        this.match(PgsParser.SP);
      }

      this.state = 116;
      this.match(PgsParser.T__1);
      this.state = 118;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
        case 1:
          this.state = 117;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 121;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.T__4 || la === PgsParser.StringLiteral) {
        this.state = 120;
        this.elementTypes();
      }

      this.state = 124;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 123;
        this.match(PgsParser.SP);
      }

      this.state = 126;
      this.match(PgsParser.T__2);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public elementTypes(): ElementTypesContext {
    let localContext: ElementTypesContext = new ElementTypesContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 12, PgsParser.RULE_elementTypes);
    let la: number;

    try {
      let alt: number;
      this.enterOuterAlt(localContext, 1);
      this.state = 128;
      this.elementType();
      this.state = 139;
      this._errHandler.sync(this);
      alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);

      while (alt !== 2 && alt !== ATN.INVALID_ALT_NUMBER) {
        if (alt === 1) {
          this.state = 130;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 129;
            this.match(PgsParser.SP);
          }

          this.state = 132;
          this.match(PgsParser.T__3);
          this.state = 134;
          this._errHandler.sync(this);
          la = this._input.LA(1);
          if (la === PgsParser.SP) {
            this.state = 133;
            this.match(PgsParser.SP);
          }

          this.state = 136;
          this.elementType();
        }

        this.state = 141;
        this._errHandler.sync(this);
        alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localContext.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public elementType(): ElementTypeContext {
    let localContext: ElementTypeContext = new ElementTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 14, PgsParser.RULE_elementType);

    try {
      this.state = 145;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          this.state = 142;
          this.typeName();
          break;

        case 2:
          this.enterOuterAlt(localContext, 2);
          this.state = 143;
          this.nodeType();
          break;

        case 3:
          this.enterOuterAlt(localContext, 3);
          this.state = 144;
          this.edgeType();
          break;
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public nodeType(): NodeTypeContext {
    let localContext: NodeTypeContext = new NodeTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 16, PgsParser.RULE_nodeType);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 147;
      this.match(PgsParser.T__4);
      this.state = 149;
      this._errHandler.sync(this);
      la = this._input.LA(1);
      if (la === PgsParser.SP) {
        this.state = 148;
        this.match(PgsParser.SP);
      }

      this.state = 151;
      this.typeName();
      this.state = 153;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
        case 1:
          this.state = 152;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 155;
      this.labelPropertySpec();
      this.state = 157;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 156;
        this.match(PgsParser.SP);
      }

      this.state = 159;
      this.match(PgsParser.T__5);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public edgeType(): EdgeTypeContext {
    let localContext: EdgeTypeContext = new EdgeTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 18, PgsParser.RULE_edgeType);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 161;
      this.endpointType();
      this.state = 163;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 162;
        this.match(PgsParser.SP);
      }

      this.state = 165;
      this.dash();
      this.state = 167;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 166;
        this.match(PgsParser.SP);
      }

      this.state = 169;
      this.match(PgsParser.T__6);
      this.state = 171;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 170;
        this.match(PgsParser.SP);
      }

      this.state = 173;
      this.typeName();
      this.state = 175;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          this.state = 174;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 177;
      this.labelPropertySpec();
      this.state = 179;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 178;
        this.match(PgsParser.SP);
      }

      this.state = 181;
      this.match(PgsParser.T__7);
      this.state = 183;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 182;
        this.match(PgsParser.SP);
      }

      this.state = 185;
      this.dash();
      this.state = 186;
      this.rightArrowHead();
      this.state = 188;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 187;
        this.match(PgsParser.SP);
      }

      this.state = 190;
      this.endpointType();
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public endpointType(): EndpointTypeContext {
    let localContext: EndpointTypeContext = new EndpointTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 20, PgsParser.RULE_endpointType);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 192;
      this.match(PgsParser.T__4);
      this.state = 194;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
        case 1:
          this.state = 193;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 196;
      this.labelPropertySpec();
      this.state = 198;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.SP) {
        this.state = 197;
        this.match(PgsParser.SP);
      }

      this.state = 200;
      this.match(PgsParser.T__5);
    } catch (re) {
      if (re instanceof RecognitionException) {
        localContext.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public labelPropertySpec(): LabelPropertySpecContext {
    let localContext: LabelPropertySpecContext = new LabelPropertySpecContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 22, PgsParser.RULE_labelPropertySpec);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 207;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.T__8) {
        this.state = 202;
        this.match(PgsParser.T__8);
        this.state = 204;
        this._errHandler.sync(this);
        la = this._input.LA(1);

        if (la === PgsParser.SP) {
          this.state = 203;
          this.match(PgsParser.SP);
        }

        this.state = 206;
        this.labelSpec(0);
      }

      this.state = 210;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.state = 209;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 213;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.OPEN) {
        this.state = 212;
        this.match(PgsParser.OPEN);
      }

      this.state = 216;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.state = 215;
          this.match(PgsParser.SP);
          break;
      }

      this.state = 219;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.T__1) {
        this.state = 218;
        this.propertySpec();
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  // eslint-disable-next-line complexity
  public labelSpec(_p?: number): LabelSpecContext {
    if (_p === undefined) {
      // eslint-disable-next-line no-param-reassign
      _p = 0;
    }

    let parentContext: ParserRuleContext = this._ctx;
    let parentState: number = this.state;
    let localContext: LabelSpecContext = new LabelSpecContext(
      this._ctx,
      parentState
    );
    let prevContext: LabelSpecContext = localContext;
    let startContext = 24;
    this.enterRecursionRule(localContext, 24, PgsParser.RULE_labelSpec, _p);
    let la: number;

    try {
      let alt: number;
      this.enterOuterAlt(localContext, 1);

      this.state = 244;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
        case 1:
          this.state = 222;
          this.match(PgsParser.T__4);
          this.state = 224;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 223;
            this.match(PgsParser.SP);
          }

          this.state = 226;
          this.labelSpec(0);
          this.state = 228;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 227;
            this.match(PgsParser.SP);
          }

          this.state = 230;
          this.match(PgsParser.T__5);
          break;

        case 2:
          this.state = 232;
          this.match(PgsParser.T__6);
          this.state = 234;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 233;
            this.match(PgsParser.SP);
          }

          this.state = 236;
          this.labelSpec(0);
          this.state = 238;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 237;
            this.match(PgsParser.SP);
          }

          this.state = 240;
          this.match(PgsParser.T__7);
          break;

        case 3:
          this.state = 242;
          this.labelName();
          break;

        case 4:
          this.state = 243;
          this.typeName();
          break;
      }

      this._ctx._stop = this._input.tryLT(-1);
      this.state = 271;
      this._errHandler.sync(this);
      alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);

      // eslint-disable-next-line no-unmodified-loop-condition
      while (alt !== 2 && alt !== ATN.INVALID_ALT_NUMBER) {
        if (alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }

          prevContext = localContext;
          this.state = 269;
          this._errHandler.sync(this);
          switch (
            this.interpreter.adaptivePredict(this._input, 48, this._ctx)
          ) {
            case 1:
              localContext = new LabelSpecContext(parentContext, parentState);
              this.pushNewRecursionContext(
                localContext,
                startContext,
                PgsParser.RULE_labelSpec
              );
              this.state = 246;

              if (!this.precpred(this._ctx, 5)) {
                throw this.createFailedPredicateException(
                  'this.precpred(this._ctx, 5)'
                );
              }

              this.state = 248;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 247;
                this.match(PgsParser.SP);
              }

              this.state = 250;
              this.match(PgsParser.T__9);
              this.state = 252;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 251;
                this.match(PgsParser.SP);
              }

              this.state = 254;
              this.labelSpec(6);
              break;

            case 2:
              localContext = new LabelSpecContext(parentContext, parentState);
              this.pushNewRecursionContext(
                localContext,
                startContext,
                PgsParser.RULE_labelSpec
              );
              this.state = 255;

              if (!this.precpred(this._ctx, 4)) {
                throw this.createFailedPredicateException(
                  'this.precpred(this._ctx, 4)'
                );
              }

              this.state = 257;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 256;
                this.match(PgsParser.SP);
              }

              this.state = 259;
              this.match(PgsParser.T__10);
              this.state = 261;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 260;
                this.match(PgsParser.SP);
              }

              this.state = 263;
              this.labelSpec(5);
              break;

            case 3:
              localContext = new LabelSpecContext(parentContext, parentState);
              this.pushNewRecursionContext(
                localContext,
                startContext,
                PgsParser.RULE_labelSpec
              );
              this.state = 264;

              if (!this.precpred(this._ctx, 3)) {
                throw this.createFailedPredicateException(
                  'this.precpred(this._ctx, 3)'
                );
              }

              this.state = 266;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 265;
                this.match(PgsParser.SP);
              }

              this.state = 268;
              this.match(PgsParser.T__11);
              break;
          }
        }
      }

      this.state = 273;
      this._errHandler.sync(this);
      alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.unrollRecursionContexts(parentContext);
    }

    return localContext;
  }

  public propertySpec(): PropertySpecContext {
    let localContext: PropertySpecContext = new PropertySpecContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 26, PgsParser.RULE_propertySpec);
    let la: number;

    try {
      this.state = 305;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
        case 1:
          this.enterOuterAlt(localContext, 1);
          this.state = 274;
          this.match(PgsParser.T__1);
          this.state = 276;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 275;
            this.match(PgsParser.SP);
          }

          this.state = 278;
          this.properties();
          this.state = 287;
          this._errHandler.sync(this);

          switch (
            this.interpreter.adaptivePredict(this._input, 53, this._ctx)
          ) {
            case 1:
              this.state = 280;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 279;
                this.match(PgsParser.SP);
              }

              this.state = 282;
              this.match(PgsParser.T__3);
              this.state = 284;
              this._errHandler.sync(this);
              la = this._input.LA(1);

              if (la === PgsParser.SP) {
                this.state = 283;
                this.match(PgsParser.SP);
              }

              this.state = 286;
              this.match(PgsParser.OPEN);
              break;
          }

          this.state = 290;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 289;
            this.match(PgsParser.SP);
          }

          this.state = 292;
          this.match(PgsParser.T__2);
          break;

        case 2:
          this.enterOuterAlt(localContext, 2);
          this.state = 294;
          this.match(PgsParser.T__1);
          this.state = 296;
          this._errHandler.sync(this);

          switch (
            this.interpreter.adaptivePredict(this._input, 55, this._ctx)
          ) {
            case 1:
              this.state = 295;
              this.match(PgsParser.SP);
              break;
          }

          this.state = 299;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.OPEN) {
            this.state = 298;
            this.match(PgsParser.OPEN);
          }

          this.state = 302;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 301;
            this.match(PgsParser.SP);
          }

          this.state = 304;
          this.match(PgsParser.T__2);
          break;
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public properties(): PropertiesContext {
    let localContext: PropertiesContext = new PropertiesContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 28, PgsParser.RULE_properties);
    let la: number;

    try {
      let alt: number;
      this.enterOuterAlt(localContext, 1);
      this.state = 307;
      this.property();
      this.state = 318;
      this._errHandler.sync(this);
      alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);

      while (alt !== 2 && alt !== ATN.INVALID_ALT_NUMBER) {
        if (alt === 1) {
          this.state = 309;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 308;
            this.match(PgsParser.SP);
          }

          this.state = 311;
          this.match(PgsParser.T__3);
          this.state = 313;
          this._errHandler.sync(this);
          la = this._input.LA(1);

          if (la === PgsParser.SP) {
            this.state = 312;
            this.match(PgsParser.SP);
          }

          this.state = 315;
          this.property();
        }

        this.state = 320;
        this._errHandler.sync(this);
        alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public property(): PropertyContext {
    let localContext: PropertyContext = new PropertyContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 30, PgsParser.RULE_property);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 323;
      this._errHandler.sync(this);
      la = this._input.LA(1);

      if (la === PgsParser.OPTIONAL) {
        this.state = 321;
        this.match(PgsParser.OPTIONAL);
        this.state = 322;
        this.match(PgsParser.SP);
      }

      this.state = 325;
      this.key();
      this.state = 326;
      this.match(PgsParser.SP);
      this.state = 327;
      this.propertyType();
      this.state = 329;
      this._errHandler.sync(this);

      switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
        case 1:
          this.state = 328;
          this.match(PgsParser.SP);
          break;
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public propertyType(): PropertyTypeContext {
    let localContext: PropertyTypeContext = new PropertyTypeContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 32, PgsParser.RULE_propertyType);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 331;
      this.match(PgsParser.StringLiteral);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public key(): KeyContext {
    let localContext: KeyContext = new KeyContext(this._ctx, this.state);
    this.enterRule(localContext, 34, PgsParser.RULE_key);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 333;
      this.match(PgsParser.StringLiteral);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public labelName(): LabelNameContext {
    let localContext: LabelNameContext = new LabelNameContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 36, PgsParser.RULE_labelName);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 335;
      this.match(PgsParser.StringLiteral);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public typeName(): TypeNameContext {
    let localContext: TypeNameContext = new TypeNameContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 38, PgsParser.RULE_typeName);

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 337;
      this.match(PgsParser.StringLiteral);
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }
    return localContext;
  }

  public dash(): DashContext {
    let localContext: DashContext = new DashContext(this._ctx, this.state);
    this.enterRule(localContext, 40, PgsParser.RULE_dash);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 339;
      la = this._input.LA(1);
      if (
        !(
          (la & ~0x1f) === 0 &&
          ((1 << la) &
            ((1 << PgsParser.T__12) |
              (1 << PgsParser.T__13) |
              (1 << PgsParser.T__14) |
              (1 << PgsParser.T__15) |
              (1 << PgsParser.T__16) |
              (1 << PgsParser.T__17) |
              (1 << PgsParser.T__18) |
              (1 << PgsParser.T__19) |
              (1 << PgsParser.T__20) |
              (1 << PgsParser.T__21) |
              (1 << PgsParser.T__22) |
              (1 << PgsParser.T__23))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        if (this._input.LA(1) === Token.EOF) {
          this.matchedEOF = true;
        }

        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public rightArrowHead(): RightArrowHeadContext {
    let localContext: RightArrowHeadContext = new RightArrowHeadContext(
      this._ctx,
      this.state
    );
    this.enterRule(localContext, 42, PgsParser.RULE_rightArrowHead);
    let la: number;

    try {
      this.enterOuterAlt(localContext, 1);
      this.state = 341;
      la = this._input.LA(1);

      if (
        !(
          (la & ~0x1f) === 0 &&
          ((1 << la) &
            ((1 << PgsParser.T__24) |
              (1 << PgsParser.T__25) |
              (1 << PgsParser.T__26) |
              (1 << PgsParser.T__27) |
              (1 << PgsParser.T__28))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        if (this._input.LA(1) === Token.EOF) {
          this.matchedEOF = true;
        }

        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (exception) {
      if (exception instanceof RecognitionException) {
        localContext.exception = exception;
        this._errHandler.reportError(this, exception);
        this._errHandler.recover(this, exception);
      } else {
        throw exception;
      }
    } finally {
      this.exitRule();
    }

    return localContext;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 12:
        return this.labelSpec_sempred(_localctx as LabelSpecContext, predIndex);
    }
    return true;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  private labelSpec_sempred(
    _localctx: LabelSpecContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 5);

      case 1:
        return this.precpred(this._ctx, 4);

      case 2:
        return this.precpred(this._ctx, 3);
    }
    return true;
  }
}
