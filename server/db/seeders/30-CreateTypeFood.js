/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeFoods', [
      {
        type: 'Завтрак',
      },
      {
        type: 'Перекус 1',
      },
      {
        type: 'Обед',
      },
      {
        type: 'Перекус 2',
      },
      {
        type: 'Ужин',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeFoods', null, {});
  },
};
