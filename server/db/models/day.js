const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate({ DailyList }) {
      this.hasMany(DailyList, {
        foreignKey: 'day_id',
      });
    }
  }
  Day.init({
    day_title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};
