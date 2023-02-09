const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ DailyList, Parametr }) {
      this.hasMany(DailyList, {
        foreignKey: 'user_id',
      });
      this.hasMany(Parametr, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    burthday: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    body_type: DataTypes.STRING,
    type_program: DataTypes.STRING,
    final_weight: DataTypes.INTEGER,
    ready: DataTypes.TEXT,
    notready: DataTypes.TEXT,
    contra: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
