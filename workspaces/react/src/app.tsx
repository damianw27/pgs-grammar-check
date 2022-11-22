import React, { useEffect, useState } from 'react';
import { CodeEditor } from './components/code-editor/code-editor';
import { useParser } from './hooks/parser/parser';
import { ErrorsList } from './components/errors-list/errors-list';

export function App() {
  const [query, setQuery] = useState<string>(
    'CREATE GRAPH TYPE Test {\n' +
      '  (:EmployeeType)[BuddyType: FriendType {since DATE, casual BOOL}]->(:EmployeeType)\n' +
      '}\n'
  );

  const parser = useParser();

  useEffect(() => {
    parser.parse(query);
  }, [query]);

  return (
    <div className="App">
      <CodeEditor
        value={query}
        onValueChange={(changedQuery) => setQuery(changedQuery)}
      />

      <ErrorsList errors={parser.errors} />
    </div>
  );
}
