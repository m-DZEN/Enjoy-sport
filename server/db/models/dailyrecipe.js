const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyRecipe extends Model {
    static associate({ DailyList, Recipe }) {
      this.hasMany(DailyList, {
        foreignKey: 'dailyRecipe_id',
      });
      this.belongsTo(Recipe, {
        foreignKey: 'recipe_id',
      });
    }
  }
  DailyRecipe.init({
    recipe_id: DataTypes.INTEGER,
    mass: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DailyRecipe',
  });
  return DailyRecipe;
};
