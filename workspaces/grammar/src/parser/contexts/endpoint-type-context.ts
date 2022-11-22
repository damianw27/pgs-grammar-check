import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { LabelPropertySpecContext } from './label-property-spec-context';
import { PgsParser } from '../pgs-parser';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class EndpointTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
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
    return PgsParser.RULE_endpointType;
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterEndpointType) {
      return;
    }

    listener.enterEndpointType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitEndpointType) {
      return;
    }

    listener.exitEndpointType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    if (visitor.visitEndpointType) {
      return visitor.visitEndpointType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
