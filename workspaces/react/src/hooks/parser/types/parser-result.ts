import { ParserError } from './parser-error';

export interface ParserResult {
  readonly parse: (value: string) => void;
  readonly errors: ParserError[];
}
