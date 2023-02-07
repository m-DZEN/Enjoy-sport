const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyList extends Model {
    static associate({
      Users,
    }) {
      this.belongsTo(Users, {
        foreignKey: 'user_id',
      });
    }
  }
  DailyList.init({
    user_id: DataTypes.INTEGER,
    dailyTrain_id: DataTypes.INTEGER,
    dailyRecipe_id: DataTypes.INTEGER,
    day_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DailyList',
  });
  return DailyList;
};
