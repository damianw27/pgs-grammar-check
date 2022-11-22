import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PropertiesContext } from './properties-context';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class PropertySpecContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public properties(): PropertiesContext | undefined {
    return this.tryGetRuleContext(0, PropertiesContext);
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

  public get ruleIndex(): number {
    return PgsParser.RULE_propertySpec;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterPropertySpec) {
      return;
    }

    listener.enterPropertySpec(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitPropertySpec) {
      return;
    }

    listener.exitPropertySpec(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitPropertySpec
      ? visitor.visitPropertySpec(this)
      : visitor.visitChildren(this);
  }
}
