import React, { useEffect, useState } from 'react';
import { CodeEditor } from './components/code-editor/code-editor';
import { useParser } from './hooks/parser/parser';
import { ErrorsList } from './components/errors-list/errors-list';

const defaultQuery = `
CREATE GRAPH TYPE FraudGraphType {
  (PersonType: Person {name STRING}),
  (CustomerType: PersonType  {c_id INT32}),
  (CreditCardType: CreditCard {cc_num STRING}),
  (TransactionType: Transaction {cc_num STRING}),
  (AccountType: Account {acct_id INT32}),
  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType),
  (:CustomerType)-[UsesCreditCardType: uses]->(:CreditCardType),
  (:TransactionType)-[ActivityType: Withdraw {time DATETIME}]->(:AccountType)
}
`;

export function App() {
  const [query, setQuery] = useState<string>(defaultQuery);

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
