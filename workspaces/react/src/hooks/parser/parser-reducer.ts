import { ParserState } from './types/parser-state';
import { ParserActions } from './parser-action';
import { ParserActionType } from './types/parser-action-type';

export function parserReducer(
  state: ParserState,
  action: ParserActions
): ParserState {
  switch (action.type) {
    case ParserActionType.ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case ParserActionType.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
}
