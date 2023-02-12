/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DailyLists', [
      {
        user_id: 2,
        dailyTrain_id: 1,
        dailyRecipe_id: 1,
        date: '2022-01-01',
      },
      {
        user_id: 2,
        dailyTrain_id: 1,
        dailyRecipe_id: 2,
        date: '2022-01-01',
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 1,
        date: '2022-01-01',
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 2,
        date: '2022-01-01',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DailyLists', null, {});
  },
};
