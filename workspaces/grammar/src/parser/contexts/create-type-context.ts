import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { CreateNodeTypeContext } from './create-node-type-context';
import { CreateEdgeTypeContext } from './create-edge-type-context';
import { CreateGraphTypeContext } from './create-graph-type-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class CreateTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public createNodeType(): CreateNodeTypeContext | undefined {
    return this.tryGetRuleContext(0, CreateNodeTypeContext);
  }

  public createEdgeType(): CreateEdgeTypeContext | undefined {
    return this.tryGetRuleContext(0, CreateEdgeTypeContext);
  }

  public createGraphType(): CreateGraphTypeContext | undefined {
    return this.tryGetRuleContext(0, CreateGraphTypeContext);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_createType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterCreateType) {
      return;
    }

    listener.enterCreateType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitCreateType) {
      return;
    }

    listener.exitCreateType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitCreateType
      ? visitor.visitCreateType(this)
      : visitor.visitChildren(this);
  }
}
