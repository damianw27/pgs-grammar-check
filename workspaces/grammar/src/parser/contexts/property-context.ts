import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';
import { KeyContext } from './key-context';
import { PropertyTypeContext } from './property-type-context';

export class PropertyContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public key(): KeyContext {
    return this.getRuleContext(0, KeyContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public propertyType(): PropertyTypeContext {
    return this.getRuleContext(0, PropertyTypeContext);
  }

  public OPTIONAL(): TerminalNode | undefined {
    return this.tryGetToken(PgsParser.OPTIONAL, 0);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_property;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterProperty) {
      return;
    }

    listener.enterProperty(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitProperty) {
      return;
    }

    listener.exitProperty(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitProperty
      ? visitor.visitProperty(this)
      : visitor.visitChildren(this);
  }
}
