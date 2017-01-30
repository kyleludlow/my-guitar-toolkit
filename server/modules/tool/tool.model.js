module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tool', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },
    videoID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
