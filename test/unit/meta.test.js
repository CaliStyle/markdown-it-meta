'use strict'
/* global describe, it */
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const MarkdownIt = require('markdown-it')
const meta = require('../../')

function fixture(name) {
  return fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8')
}

describe('Meta', () => {
  // Make new instance
  const md = new MarkdownIt({
    html: true
  })
  // Add markdown-it-meta
  md.use(meta)

  it('should render the document and meta', (done) => {
    const mdText = fixture('../../fixtures/0.0.1.md')
    const renderedDocument =  md.render(mdText)

    const expectedHtml = [
      '<hello>',
      '</hello>',
      '<hello-world>',
      '</hello-world>',
      '<hello-earth>',
      'My Name is Scott',
      '</hello-earth>',
      '<hello-mars [awesome]="yes">',
      '</hello-mars>',
      ''
    ].join('\n')

    assert.strictEqual(expectedHtml, renderedDocument)
    assert.strictEqual(md.meta.title, 'Homepage Hello World')
    assert.strictEqual(md.meta.keywords, 'proxy-engine, amazing, does html')

    done()
  })
})
