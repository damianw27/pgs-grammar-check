export const pgsLanguage = {
  keyword: {
    pattern: /\b(?:CREATE|NODE|EDGE|OPEN|OPTIONAL|TYPE|STRICT)\b/,
    lookbehind: true,
    greedy: true,
  },
  'data-type': {
    pattern:
      /\b(?:STRING|BIT|TINYINT|INT|INT32|BOOL|FLOAT|DOUBLE|DECIMAL|DATETIME|TIME|YEAR)\b/,
    lookbehind: true,
    greedy: true,
  },
  property: {
    pattern: /:[A-Za-z]+/,
    lookbehind: true,
    greedy: true,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],():]/,
  boolean: /\b(?:FALSE|TRUE)\b/,
  null: {
    pattern: /\bNULL\b/,
    alias: 'keyword',
  },
};
