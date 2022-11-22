export interface ParserError {
  readonly linePosition: number;
  readonly charPosition: number;
  readonly message: string;
}
