'use strict'

// require('dotenv').config()

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import nunjucks from 'nunjucks'

let app = express()

nunjucks.configure(__dirname + '/views', {
    autoescape: false,
    express: app
});

app.use(express.static('public'))

app.set('view engine', 'html')

app.use((req, res) => {
    match({ routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(error)
            return res.status(500).end('Internal server error')
        }

        if (!renderProps) {
            return res.status(400).end('Not found')
        }

        res.render('base', {
            react_data: renderToString(<RouterContext {...renderProps} />)
        })
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT.toString() + '...')
})
