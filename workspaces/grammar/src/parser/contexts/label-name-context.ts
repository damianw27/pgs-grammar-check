import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsVisitor } from '../types/pgs-visitor';
import { PgsListener } from '../types/pgs-listener';

export class LabelNameContext extends ParserRuleContext {
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
    return PgsParser.RULE_labelName;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterLabelName) {
      return;
    }

    listener.enterLabelName(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitLabelName) {
      return;
    }

    listener.exitLabelName(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitLabelName
      ? visitor.visitLabelName(this)
      : visitor.visitChildren(this);
  }
}
