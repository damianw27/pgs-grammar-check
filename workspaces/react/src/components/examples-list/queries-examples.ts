import { Example } from './types/example';

export const queriesExamples: Example[] = [
  {
    title: 'Fraud graph example',
    query:
      'CREATE GRAPH TYPE FraudGraphType {\n' +
      '  (PersonType: Person {name STRING}),\n' +
      '  (CustomerType: PersonType & Customer {c_id INT32}),\n' +
      '  (CreditCardType: CreditCard {cc_num STRING}),\n' +
      '  (TransactionType: Transaction {cc_num STRING}),\n' +
      '  (AccountType: Account {acct_id INT32}),\n' +
      '  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType),\n' +
      '  (:CustomerType)-[UsesCreditCardType: uses]->(:CreditCardType),\n' +
      '  (:TransactionType)-[ChargesCreditCardType: charge {amount DOUBLE}]->(:CreditCardType),\n' +
      '  (:TransactionType)-[ActivityType: deposit|withdraw {time DATETIME}]->(:AccountType)\n' +
      '}',
  },
  {
    title: 'Optional example',
    query:
      'CREATE GRAPH TYPE Test {\n' +
      '  (PersonType: Person\n' +
      '    {name STRING, OPTIONAL birthday DATE})\n' +
      '}',
  },
  {
    title: 'Buddy edge example',
    query:
      'CREATE GRAPH TYPE Test {\n' +
      '  (:EmployeeType)-[BuddyType: FriendType {since DATE, casual BOOL}]->(:EmployeeType)\n' +
      '}',
  },
  {
    title: 'Friend edge type with & and | pipes example',
    query:
      'CREATE GRAPH TYPE Test {\n' +
      '  (:PersonType|CustomerType)-[FriendType: Knows & Likes {since DATE}]->(:PersonType|CustomerType)\n' +
      '}',
  },
  {
    title: 'Person customer inheritance example',
    query:
      'CREATE GRAPH TYPE Test {\n' +
      '  (CustomerType: Person & Customer\n' +
      '    {name STRING, OPTIONAL since DATE})\n' +
      '}',
  },
  {
    title: 'Edge type example',
    query:
      'CREATE EDGE TYPE\n' +
      '  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType)',
  },
  {
    title: 'Abstract node example',
    query: 'CREATE NODE TYPE ABSTRACT\n  (PersonType: Person {name STRING})',
  },
  {
    title: 'Abstract node example',
    query:
      'CREATE NODE TYPE ABSTRACT\n' +
      '  (salariedType { salary INT })\n' +
      '  (employeeType: personType & salariedType)',
  },
];
