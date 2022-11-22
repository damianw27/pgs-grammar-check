import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { EndpointTypeContext } from './endpoint-type-context';
import { DashContext } from './dash-context';
import { TypeNameContext } from './type-name-context';
import { LabelPropertySpecContext } from './label-property-spec-context';
import { RightArrowHeadContext } from './right-arrow-head-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class EdgeTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public endpointType(): EndpointTypeContext[];
  public endpointType(i: number): EndpointTypeContext;
  public endpointType(i?: number): EndpointTypeContext | EndpointTypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EndpointTypeContext);
    } else {
      return this.getRuleContext(i, EndpointTypeContext);
    }
  }

  public dash(): DashContext[];
  public dash(i: number): DashContext;
  public dash(i?: number): DashContext | DashContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DashContext);
    } else {
      return this.getRuleContext(i, DashContext);
    }
  }

  public typeName(): TypeNameContext {
    return this.getRuleContext(0, TypeNameContext);
  }

  public labelPropertySpec(): LabelPropertySpecContext {
    return this.getRuleContext(0, LabelPropertySpecContext);
  }

  public rightArrowHead(): RightArrowHeadContext {
    return this.getRuleContext(0, RightArrowHeadContext);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PgsParser.SP);
    } else {
      return this.getToken(PgsParser.SP, i);
    }
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_edgeType;
  }

  public enterRule(listener: PgsListener): void {
    if (listener.enterEdgeType) {
      listener.enterEdgeType(this);
    }
  }

  public exitRule(listener: PgsListener): void {
    if (listener.exitEdgeType) {
      listener.exitEdgeType(this);
    }
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    if (visitor.visitEdgeType) {
      return visitor.visitEdgeType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
