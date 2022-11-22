import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { PgsParser } from '../pgs-parser';
import { PgsVisitor } from '../types/pgs-visitor';
import { PgsListener } from '../types/pgs-listener';

export class DashContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_dash;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterDash) {
      return;
    }

    listener.enterDash(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitDash) {
      return;
    }

    listener.exitDash(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitDash
      ? visitor.visitDash(this)
      : visitor.visitChildren(this);
  }
}
