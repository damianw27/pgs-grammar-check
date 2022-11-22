import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';
import { LabelNameContext } from './label-name-context';
import { TypeNameContext } from './type-name-context';

export class LabelSpecContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public labelSpec(): LabelSpecContext[];
  public labelSpec(i: number): LabelSpecContext;
  public labelSpec(i?: number): LabelSpecContext | LabelSpecContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LabelSpecContext);
    } else {
      return this.getRuleContext(i, LabelSpecContext);
    }
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PgsParser.SP);
    } else {
      return this.getToken(PgsParser.SP, i);
    }
  }

  public labelName(): LabelNameContext | undefined {
    return this.tryGetRuleContext(0, LabelNameContext);
  }

  public typeName(): TypeNameContext | undefined {
    return this.tryGetRuleContext(0, TypeNameContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_labelSpec;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterLabelSpec) {
      return;
    }

    listener.enterLabelSpec(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitLabelSpec) {
      return;
    }

    listener.exitLabelSpec(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitLabelSpec
      ? visitor.visitLabelSpec(this)
      : visitor.visitChildren(this);
  }
}
