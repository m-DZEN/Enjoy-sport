const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ DailyList }) {
      this.hasMany(DailyList, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    burthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    body_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
