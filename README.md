# Markdown-it-meta
Markdown-it plugin to add YAML metadata

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

## Install
```sh
$ npm install markdown-it-meta --save
```

## Use
```js
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')

// Make new instance
const md = new MarkdownIt()
// Add markdown-it-meta
md.use(meta)

const renderedDocument =  md.render('<md with YAML>')
return {
  document: renderedDocument,
  meta: md.meta
}
```

## Features
Adds YAML to markdown documents to be used as meta data.
- Make Strings
- Make Arrays
- Make Objects
- All YAML is valid

## Markdown

```
---
title: Welcome to Markdown-it-meta
keywords: markdown-it-meta
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---
## Hello World
```


[npm-image]: https://img.shields.io/npm/v/markdown-it-meta.svg?style=flat-square
[npm-url]: https://npmjs.org/package/markdown-it-meta
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/markdown-it-meta/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/markdown-it-meta/tree/master
