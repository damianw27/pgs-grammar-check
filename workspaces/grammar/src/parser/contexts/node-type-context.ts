import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TypeNameContext } from './type-name-context';
import { LabelPropertySpecContext } from './label-property-spec-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class NodeTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public typeName(): TypeNameContext {
    return this.getRuleContext(0, TypeNameContext);
  }

  public labelPropertySpec(): LabelPropertySpecContext {
    return this.getRuleContext(0, LabelPropertySpecContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_nodeType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterNodeType) {
      return;
    }

    listener.enterNodeType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitNodeType) {
      return;
    }

    listener.exitNodeType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitNodeType
      ? visitor.visitNodeType(this)
      : visitor.visitChildren(this);
  }
}
