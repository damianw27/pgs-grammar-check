import { Example } from './types/example';

export const queriesExamples: Example[] = [
  {
    title: 'Fraud Graph Example',
    query: `CREATE GRAPH TYPE FraudGraphType {
  (PersonType: Person {name STRING}),
  (CustomerType: PersonType & Customer {c_id INT32}),
  (CreditCardType: CreditCard {cc_num STRING}),
  (TransactionType: Transaction {cc_num STRING}),
  (AccountType: Account {acct_id INT32}),
  (:CustomerType)-[OwnsAccountType: owns]->(:AccountType),
  (:CustomerType)-[UsesCreditCardType: uses]->(:CreditCardType),
  (:TransactionType)-[ChargesCreditCardType: charge {amount DOUBLE}]->(:CreditCardType),
  (:TransactionType)-[ActivityType: deposit|withdraw {time DATETIME}]->(:AccountType)
}`,
  },
  {
    title: 'Person Graph Type Example',
    query: `CREATE GRAPH TYPE Test {
(PersonType: Person 
             {name STRING, OPTIONAL birthday DATE})
             
}
`,
  },
  {
    title: 'Buddy Example',
    query: `CREATE GRAPH TYPE Test {
(:EmployeeType)-[BuddyType: FriendType {since DATE, casual BOOL}]->(:EmployeeType)
}
`,
  },
  {
    title: 'Friend Type Inheritance',
    query: `CREATE GRAPH TYPE Test {
(:PersonType|CustomerType)-[FriendType: Knows & Likes {since DATE}]->(:PersonType|CustomerType)
}
`,
  },
  {
    title: 'Person Customer Inheritance Example',
    query: `CREATE GRAPH TYPE Test {
(CustomerType: Person & Customer 
               {name STRING, OPTIONAL since DATE})          
}`,
  },
];
