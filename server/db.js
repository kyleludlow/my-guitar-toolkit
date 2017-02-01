var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
var sequelize

if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  })
} else {
  sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-tool-api.sqlite'
  })
}

var db = {}

db.tool = sequelize.import(__dirname + '/modules/tool/tool.model.js')
db.user = sequelize.import(__dirname + '/modules/users/users.model.js')
db.tag = sequelize.import(__dirname + '/modules/tag/tag.model.js')
db.toolTag = sequelize.import(__dirname + '/modules/tool_tag/tool_tag.model.js')
db.token = sequelize.import(__dirname + '/modules/token/token.model.js')

db.sequelize = sequelize
db.Sequelize = Sequelize

db.tool.belongsTo(db.user)
db.user.hasMany(db.tool)

// CREATES MANY TO MANY RELATIONSHIP BETWEEN TOOL AND TAG
db.tool.belongsToMany(db.tag, { through: db.toolTag })
db.tag.belongsToMany(db.tool, { through: db.toolTag })

module.exports = db
