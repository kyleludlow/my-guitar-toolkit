module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tool', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    }
  })
}
