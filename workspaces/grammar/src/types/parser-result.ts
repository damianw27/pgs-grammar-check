import { ParserError } from './parser-error';

export interface ParserResult {
  readonly query: string;
  readonly isValid: boolean;
  readonly errors?: ParserError[];
}
