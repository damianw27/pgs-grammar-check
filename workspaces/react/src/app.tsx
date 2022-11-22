import React, { useEffect, useState } from 'react';
import { CodeEditor } from './components/code-editor/code-editor';
import { useParser } from './hooks/parser/parser';
import { ErrorsList } from './components/errors-list/errors-list';
import { Examples } from './components/examples-list/examples';
import { queriesExamples } from './components/examples-list/queries-examples';

export function App() {
  const [query, setQuery] = useState<string>('\n\n\n\n\n\n');

  const parser = useParser();

  useEffect(() => {
    let trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      return;
    }

    parser.parse(trimmedQuery);
  }, [query]);

  return (
    <div className="App">
      <CodeEditor
        value={query}
        onValueChange={(changedQuery) => setQuery(changedQuery)}
      />

      <ErrorsList errors={parser.errors} />

      <Examples examples={queriesExamples} onExampleClick={setQuery} />
    </div>
  );
}
