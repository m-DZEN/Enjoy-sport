const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    static associate({ DailyTrain, TypeTrains }) {
      this.hasMany(DailyTrain, {
        foreignKey: 'training_id',
      });
      this.belongsTo(TypeTrains, {
        foreignKey: 'type_id',
      });
    }
  }
  Training.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};
