const assert = require('assert')
const sayHi = require('.')

assert.equal(sayHi('Simone'), 'Hi Simone!')
assert.equal(sayHi(), 'Hi who shall not be named!')
