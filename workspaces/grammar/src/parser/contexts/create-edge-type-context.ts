import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { EdgeTypeContext } from './edge-type-context';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class CreateEdgeTypeContext extends ParserRuleContext {
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

  public EDGE(): TerminalNode {
    return this.getToken(PgsParser.EDGE, 0);
  }

  public TYPE(): TerminalNode {
    return this.getToken(PgsParser.TYPE, 0);
  }

  public edgeType(): EdgeTypeContext {
    return this.getRuleContext(0, EdgeTypeContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_createEdgeType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterCreateEdgeType) {
      return;
    }

    listener.enterCreateEdgeType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitCreateEdgeType) {
      return;
    }

    listener.exitCreateEdgeType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitCreateEdgeType
      ? visitor.visitCreateEdgeType(this)
      : visitor.visitChildren(this);
  }
}
