const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TypeTrain extends Model {
    static associate({ Trainings }) {
      this.hasMany(Trainings, {
        foreignKey: 'type_id',
      });
    }
  }
  TypeTrain.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TypeTrain',
  });
  return TypeTrain;
};
