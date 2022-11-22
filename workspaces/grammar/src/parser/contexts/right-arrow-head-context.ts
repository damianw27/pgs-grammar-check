import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class RightArrowHeadContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_rightArrowHead;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterRightArrowHead) {
      return;
    }

    listener.enterRightArrowHead(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitRightArrowHead) {
      return;
    }

    listener.exitRightArrowHead(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitRightArrowHead
      ? visitor.visitRightArrowHead(this)
      : visitor.visitChildren(this);
  }
}
