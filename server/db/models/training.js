const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    static associate({ DailyTrains }) {
      this.hasMany(DailyTrains, {
        foreignKey: 'training_id',
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
