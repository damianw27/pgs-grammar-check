import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';
import { TypeNameContext } from './type-name-context';
import { NodeTypeContext } from './node-type-context';
import { EdgeTypeContext } from './edge-type-context';
import { PgsParser } from '../pgs-parser';

export class ElementTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public typeName(): TypeNameContext | undefined {
    return this.tryGetRuleContext(0, TypeNameContext);
  }

  public nodeType(): NodeTypeContext | undefined {
    return this.tryGetRuleContext(0, NodeTypeContext);
  }

  public edgeType(): EdgeTypeContext | undefined {
    return this.tryGetRuleContext(0, EdgeTypeContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_elementType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterElementType) {
      return;
    }

    listener.enterElementType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitElementType) {
      return;
    }

    listener.exitElementType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitElementType
      ? visitor.visitElementType(this)
      : visitor.visitChildren(this);
  }
}
