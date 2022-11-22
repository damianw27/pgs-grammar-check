import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class KeyContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public StringLiteral(): TerminalNode {
    return this.getToken(PgsParser.StringLiteral, 0);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_key;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterKey) {
      return;
    }

    listener.enterKey(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitKey) {
      return;
    }

    listener.exitKey(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitKey
      ? visitor.visitKey(this)
      : visitor.visitChildren(this);
  }
}
