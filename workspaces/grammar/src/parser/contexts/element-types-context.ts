import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ElementTypeContext } from './element-type-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class ElementTypesContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public elementType(): ElementTypeContext[];
  public elementType(i: number): ElementTypeContext;
  public elementType(i?: number): ElementTypeContext | ElementTypeContext[] {
    return i === undefined
      ? this.getRuleContexts(ElementTypeContext)
      : this.getRuleContext(i, ElementTypeContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_elementTypes;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterElementTypes) {
      return;
    }

    listener.enterElementTypes(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitElementTypes) {
      return;
    }

    listener.exitElementTypes(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitElementTypes
      ? visitor.visitElementTypes(this)
      : visitor.visitChildren(this);
  }
}
