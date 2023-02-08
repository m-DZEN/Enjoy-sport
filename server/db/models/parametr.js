'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parametr extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
    }
  }
  Parametr.init({
    user_id: DataTypes.INTEGER,
    data: DataTypes.DATE,
    currentWeight: DataTypes.INTEGER,
    hipGirth: DataTypes.INTEGER,
    buttocksGirth: DataTypes.INTEGER,
    waistGirth: DataTypes.INTEGER,
    breastGirth: DataTypes.INTEGER,
    bicepsGirth: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Parametr',
  });
  return Parametr;
};