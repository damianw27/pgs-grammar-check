const { execSync } = require('child_process');

console.log('Cleaning output directory...');
execSync('rm -rf src/generated/*');

console.log('Generating source from ANTLR grammar...');
execSync('antlr4 -Dlanguage=JavaScript -o src/generated/ antlr/pgs.g4');

console.log('Cleaning output directory after generation...');
execSync('rm src/generated/pgs.interp');
execSync('rm src/generated/pgs.tokens');
execSync('rm src/generated/pgsLexer.interp');
execSync('rm src/generated/pgsLexer.tokens');

console.log('Successfully generated parser sources.');
