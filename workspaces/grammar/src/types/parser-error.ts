export interface ParserError {
  readonly lineIndex: number;
  readonly charPosition: number;
  readonly message: string;
}
