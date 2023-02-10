/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DailyLists', [
      {
        user_id: 2,
        dailyTrain_id: 1,
        dailyRecipe_id: 1,
        day_id: 1,
      },
      {
        user_id: 2,
        dailyTrain_id: 1,
        dailyRecipe_id: 2,
        day_id: 1,
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 1,
        day_id: 1,
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 2,
        day_id: 1,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DailyLists', null, {});
  },
};
