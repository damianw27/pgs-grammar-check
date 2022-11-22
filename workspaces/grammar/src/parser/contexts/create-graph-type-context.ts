import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { GraphTypeContext } from './graph-type-context';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class CreateGraphTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public CREATE(): TerminalNode {
    return this.getToken(PgsParser.CREATE, 0);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public GRAPH(): TerminalNode {
    return this.getToken(PgsParser.GRAPH, 0);
  }

  public TYPE(): TerminalNode {
    return this.getToken(PgsParser.TYPE, 0);
  }

  public graphType(): GraphTypeContext {
    return this.getRuleContext(0, GraphTypeContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_createGraphType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterCreateGraphType) {
      return;
    }

    listener.enterCreateGraphType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitCreateGraphType) {
      return;
    }

    listener.exitCreateGraphType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitCreateGraphType
      ? visitor.visitCreateGraphType(this)
      : visitor.visitChildren(this);
  }
}
