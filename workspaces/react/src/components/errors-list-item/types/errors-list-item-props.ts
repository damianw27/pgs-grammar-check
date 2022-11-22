import { ParserError } from '../../../hooks/parser/types/parser-error';

export interface ErrorsListItemProps {
  readonly errorIndex: number;
  readonly error: ParserError;
}
