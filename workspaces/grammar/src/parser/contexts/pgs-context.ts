import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { CreateTypeContext } from './create-type-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class PgsContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public createType(): CreateTypeContext[];
  public createType(i: number): CreateTypeContext;
  public createType(i?: number): CreateTypeContext | CreateTypeContext[] {
    return i === undefined
      ? this.getRuleContexts(CreateTypeContext)
      : this.getRuleContext(i, CreateTypeContext);
  }

  public EOF(): TerminalNode {
    return this.getToken(PgsParser.EOF, 0);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_pgs;
  }

  public enterRule(listener: PgsListener): void {
    if (listener.enterPgs) {
      listener.enterPgs(this);
    }
  }

  public exitRule(listener: PgsListener): void {
    if (listener.exitPgs) {
      listener.exitPgs(this);
    }
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    if (visitor.visitPgs) {
      return visitor.visitPgs(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
