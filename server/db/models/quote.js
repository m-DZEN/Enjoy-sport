const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    static associate(models) {
    }
  }
  Quote.init({
    text: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};
