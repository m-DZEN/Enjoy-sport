'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeTrain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeTrain.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeTrain',
  });
  return TypeTrain;
};