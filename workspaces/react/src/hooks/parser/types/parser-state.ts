import { ParserError } from './parser-error';

export interface ParserState {
  readonly errors: ParserError[];
}

export const defaultParserState: ParserState = {
  errors: [],
};
