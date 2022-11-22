import { ParserResult } from './types/parser-result';
import { useCallback, useReducer } from 'react';
import { parserReducer } from './parser-reducer';
import { defaultParserState } from './types/parser-state';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PgsLexer } from '@pgs/grammar/dist/lexer/pgs-lexer';
import { PgsParser } from '@pgs/grammar/dist/parser/pgs-parser';
import { AddParserErrorAction, ClearParserErrorsAction } from './parser-action';
import { ParserError } from './types/parser-error';

export const useParser = (): ParserResult => {
  const [state, dispatch] = useReducer(parserReducer, defaultParserState);

  const parse = useCallback((value: string) => {
    dispatch(new ClearParserErrorsAction());

    if (value === '') {
      return;
    }

    let inputStream = CharStreams.fromString(value);
    let lexer = new PgsLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PgsParser(tokenStream);

    parser.addErrorListener({
      syntaxError: (
        recognizer,
        offendingSymbol,
        line,
        charPositionInLine,
        msg
        // eslint-disable-next-line max-params
      ): void => {
        const errorString = `[line ${line}:${charPositionInLine}] ${msg}`;
        const parserError: ParserError = {
          linePosition: line,
          charPosition: charPositionInLine,
          message: msg,
        };

        dispatch(new AddParserErrorAction(parserError));
      },
    });

    parser.pgs();
  }, []);

  return { parse, errors: state.errors };
};
