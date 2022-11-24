import PgsParser from './generated/pgsParser';
import PgsLexer from './generated/pgsLexer';
import { ParserError } from './types/parser-error';
import { ParserResult } from './types/parser-result';
import antlr4 from 'antlr4';

export class PgsGrammar {
  public static parse = (query: string): ParserResult => {
    if (query === '') {
      return {
        query,
        isValid: false,
      };
    }

    const chars = new antlr4.InputStream(query);
    const lexer = new PgsLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PgsParser(tokens);
    const errors: ParserError[] = [];

    parser.addErrorListener({
      // eslint-disable-next-line max-params
      syntaxError: (
        recognizer,
        offendingSymbol,
        line,
        charPositionInLine,
        msg
      ): void => {
        const parserError: ParserError = {
          lineIndex: line,
          charPosition: charPositionInLine,
          message: msg,
        };

        errors.push(parserError);
      },
      reportAmbiguity: () => {},
      reportAttemptingFullContext: () => {},
      reportContextSensitivity: () => {},
    });

    parser.pgs();

    return {
      query,
      errors,
      isValid: errors.length === 0,
    };
  };
}
