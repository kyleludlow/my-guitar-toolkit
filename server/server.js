var express = require('express')
var bodyParser = require('body-parser')
var path = require ('path')

var db = require('./db.js')
var middleware = require('./middleware')(db)

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.json())
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })
app.use(express.static(path.resolve(__dirname, '../client/')))

app.get('/', function (req, res) {
  res.send('Root.')
})

// ROUTES
var todoRoutes = require('./modules/todo/todo.routes')(app, middleware)
var userRoutes = require('./modules/users/users.routes')(app, middleware)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server started on PORT: ${PORT}!`)
  })
})
