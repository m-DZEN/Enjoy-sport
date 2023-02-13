/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('DailyLists', [
      {
        user_id: 2,
        dailyTrain_id: 1,
        dailyRecipe_id: 1,
        date: '2023-02-12',
      },
      {
        user_id: 2,
        dailyTrain_id: 3,
        dailyRecipe_id: 2,
        date: '2023-02-13',
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 1,
        date: '2023-02-14',
      },
      {
        user_id: 2,
        dailyTrain_id: 2,
        dailyRecipe_id: 2,
        date: '2023-02-15',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('DailyLists', null, {});
  },
};
