import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';
import { LabelSpecContext } from './label-spec-context';
import { PropertySpecContext } from './property-spec-context';

export class LabelPropertySpecContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public labelSpec(): LabelSpecContext | undefined {
    return this.tryGetRuleContext(0, LabelSpecContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public OPEN(): TerminalNode | undefined {
    return this.tryGetToken(PgsParser.OPEN, 0);
  }

  public propertySpec(): PropertySpecContext | undefined {
    return this.tryGetRuleContext(0, PropertySpecContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_labelPropertySpec;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterLabelPropertySpec) {
      return;
    }

    listener.enterLabelPropertySpec(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitLabelPropertySpec) {
      return;
    }

    listener.exitLabelPropertySpec(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitLabelPropertySpec
      ? visitor.visitLabelPropertySpec(this)
      : visitor.visitChildren(this);
  }
}
