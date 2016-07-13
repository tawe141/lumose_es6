'use strict'

let knex = require('knex')(require('./knexfile'))
let bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = bookshelf
