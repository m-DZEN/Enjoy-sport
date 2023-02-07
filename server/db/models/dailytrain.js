const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyTrain extends Model {
    static associate({ Training, DailyList }) {
      this.hasMany(DailyList, {
        foreignKey: 'dailyTrain_id',
      });
      this.belongsTo(Training, {
        foreignKey: 'Training_id',
      });
    }
  }
  DailyTrain.init({
    training_id: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    rep: DataTypes.INTEGER,
    rest: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DailyTrain',
  });
  return DailyTrain;
};
