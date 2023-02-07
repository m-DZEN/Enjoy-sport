const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyRecipe extends Model {
    static associate({ DailyLists, Recipes }) {
      this.hasMany(DailyLists, {
        foreignKey: 'dailyRecipe_id',
      });
      this.belongsTo(Recipes, {
        foreignKey: 'dailyTrain_id',
      });
    }
  }
  DailyRecipe.init({
    recipe_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DailyRecipe',
  });
  return DailyRecipe;
};
