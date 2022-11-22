# PGS Grammar Check
[![DOI](https://zenodo.org/badge/569036893.svg)](https://zenodo.org/badge/latestdoi/569036893)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/Demo-Running-green.svg)](https://damianw27.github.io/pgs-grammar-check/)

### Project setup

```
yarn setup
```
This command allows to quick setup all required things like dependencies
installation and linking. After successfully execution of this command you can
start development process.

### Interface dev server

```
yarn interface:dev
```

This command starts React dev server.

### Interface deployment

```
yarn interface:deploy
```

This command executes build on interface and then publish output of compilation
to github pages.

### Grammar generation

```
yarn grammar:generate
```

This command is generating the parser sources in TS from ANTLR grammary.

### Grammar build

```
yarn grammar:build
```

This command is compiling parser sources wit `tsc`.