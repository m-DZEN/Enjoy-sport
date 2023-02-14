const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate() {
      // this.hasMany(Recipe, {
      //   foreignKey: 'food_id',
      // });
    }
  }
  Food.init({
    title: DataTypes.STRING,
    kkal: DataTypes.INTEGER,
    prot: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    carb: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};
