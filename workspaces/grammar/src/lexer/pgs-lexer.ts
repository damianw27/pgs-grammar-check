import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';
import { ruleNames } from './names/rule-names';
import { literalNames } from '../shared/names/literal-names';
import { symbolicNames } from '../shared/names/symbolic-names';
import { channelNames } from './names/channel-names';
import { modeNames } from './names/mode-names';
import { PgsLexerAtn } from './pgs-lexer-atn';

export class PgsLexer extends Lexer {
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

  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    literalNames,
    symbolicNames,
    []
  );

  public readonly grammarFileName = 'pgs.g4';

  public constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(PgsLexerAtn.instance, this);
  }

  public get vocabulary(): Vocabulary {
    return PgsLexer.VOCABULARY;
  }

  public get ruleNames(): string[] {
    return ruleNames;
  }

  public get serializedATN(): string {
    return PgsLexerAtn.serializedATN;
  }

  public get channelNames(): string[] {
    return channelNames;
  }

  public get modeNames(): string[] {
    return modeNames;
  }
}
