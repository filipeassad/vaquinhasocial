var express = require('express')
var history = require('connect-history-api-fallback')
var app = express()

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('dist')

// 1st call for unredirected requests
// app.use(staticFileMiddleware)

// Support history api
app.use(history())

// 2nd call for redirected requests
app.use(staticFileMiddleware)

app.listen(5000, function () {
  console.log('App listening on port 5000!')
})
