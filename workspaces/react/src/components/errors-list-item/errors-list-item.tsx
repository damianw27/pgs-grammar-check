import { ErrorsListItemProps } from './types/errors-list-item-props';
import React, { ReactElement } from 'react';
import { ParserError } from '../../hooks/parser/types/parser-error';

import './errors-list-item.css';

export const ErrorsListItem = (props: ErrorsListItemProps): ReactElement => {
  const parserErrorToString = (error: ParserError): string =>
    `[line ${error.linePosition}:${error.charPosition}] ${error.message}`;

  return (
    <li key={`code-error-${props.errorIndex}`} className="errors-list-element">
      {parserErrorToString(props.error)}
    </li>
  );
};
