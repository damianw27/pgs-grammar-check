import React, { useEffect, useState } from 'react';
import { CodeEditor } from './components/code-editor/code-editor';
import { ErrorsList } from './components/errors-list/errors-list';
import { Examples } from './components/examples-list/examples';
import { queriesExamples } from './components/examples-list/queries-examples';
import { PgsGrammar } from '@pgs/grammar/dist/pgs-grammar';
import { ParserResult } from '@pgs/grammar/dist/types/parser-result';

export function App() {
  const [query, setQuery] = useState<string>('\n\n\n\n\n\n');
  const [parserResult, setParserResult] = useState<ParserResult>({
    query: '',
    isValid: true,
  });

  useEffect(() => {
    let trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      return;
    }

    setParserResult(PgsGrammar.parse(trimmedQuery));
  }, [query]);

  return (
    <div className="App">
      <CodeEditor
        value={query}
        onValueChange={(changedQuery) => setQuery(changedQuery)}
      />

      <ErrorsList errors={parserResult.errors ?? []} />

      <Examples examples={queriesExamples} onExampleClick={setQuery} />
    </div>
  );
}
