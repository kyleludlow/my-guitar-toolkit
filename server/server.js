var express = require('express')
var bodyParser = require('body-parser')
var path = require ('path')

var db = require('./db.js')
var middleware = require('./middleware')(db)

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../client/')))


// ROUTES
var toolRoutes = require('./modules/tool/tool.routes')(app, middleware)
var userRoutes = require('./modules/users/users.routes')(app, middleware)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server started on PORT: ${PORT}!`)
  })
})
