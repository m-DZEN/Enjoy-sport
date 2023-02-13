const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TypeFood extends Model {
    static associate({ Recipe }) {
      this.hasMany(Recipe, {
        foreignKey: 'type_id',
      });
    }
  }
  TypeFood.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TypeFood',
  });
  return TypeFood;
};
