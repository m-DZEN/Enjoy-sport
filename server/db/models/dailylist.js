const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyList extends Model {
    static associate({
      User, DailyTrain, DailyRecipe,
    }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(DailyTrain, {
        foreignKey: 'dailyTrain_id',
      });
      this.belongsTo(DailyRecipe, {
        foreignKey: 'dailyRecipe_id',
      });
    }
  }
  DailyList.init({
    user_id: DataTypes.INTEGER,
    dailyTrain_id: DataTypes.INTEGER,
    dailyRecipe_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'DailyList',
  });
  return DailyList;
};
