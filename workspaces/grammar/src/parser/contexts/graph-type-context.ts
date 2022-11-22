import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { TypeNameContext } from './type-name-context';
import { ElementTypesContext } from './element-types-context';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class GraphTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public STRICT(): TerminalNode | undefined {
    return this.tryGetToken(PgsParser.STRICT, 0);
  }

  public typeName(): TypeNameContext {
    return this.getRuleContext(0, TypeNameContext);
  }

  public elementTypes(): ElementTypesContext | undefined {
    return this.tryGetRuleContext(0, ElementTypesContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_graphType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterGraphType) {
      return;
    }

    listener.enterGraphType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitGraphType) {
      return;
    }

    listener.exitGraphType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitGraphType
      ? visitor.visitGraphType(this)
      : visitor.visitChildren(this);
  }
}
