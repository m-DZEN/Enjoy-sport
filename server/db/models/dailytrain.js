const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DailyTrain extends Model {
    static associate({ Trainings, DailyLists }) {
      this.hasMany(DailyLists, {
        foreignKey: 'dailyTrain_id',
      });
      this.belongsTo(Trainings, {
        foreignKey: 'Training_id',
      });
    }
  }
  DailyTrain.init({
    training_id: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    set: DataTypes.INTEGER,
    rep: DataTypes.INTEGER,
    rest: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DailyTrain',
  });
  return DailyTrain;
};
