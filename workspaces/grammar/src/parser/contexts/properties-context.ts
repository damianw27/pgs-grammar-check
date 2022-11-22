import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';
import { PropertyContext } from './property-context';

export class PropertiesContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public property(): PropertyContext[];
  public property(i: number): PropertyContext;
  public property(i?: number): PropertyContext | PropertyContext[] {
    return i === undefined
      ? this.getRuleContexts(PropertyContext)
      : this.getRuleContext(i, PropertyContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i !== undefined
      ? this.getToken(PgsParser.SP, i)
      : this.getTokens(PgsParser.SP);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_properties;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterProperties) {
      return;
    }

    listener.enterProperties(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitProperties) {
      return;
    }

    listener.exitProperties(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitProperties
      ? visitor.visitProperties(this)
      : visitor.visitChildren(this);
  }
}
