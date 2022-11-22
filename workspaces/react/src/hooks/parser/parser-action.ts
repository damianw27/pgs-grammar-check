import { ParserActionType } from './types/parser-action-type';
import { ParserError } from './types/parser-error';

export interface ParserAction {
  readonly type: ParserActionType;
}

export class AddParserErrorAction implements ParserAction {
  public readonly type = ParserActionType.ADD_ERROR;

  public constructor(public payload: ParserError) {}
}

export class ClearParserErrorsAction implements ParserAction {
  public readonly type = ParserActionType.CLEAR_ERRORS;
}

export type ParserActions = AddParserErrorAction | ClearParserErrorsAction;
