/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeTrains', [
      {
        type: 'Грудь',
      },
      {
        type: 'Спина',
      },
      {
        type: 'Ноги',
      },
      {
        type: 'Руки',
      },
      {
        type: 'Плечи',
      },
      {
        type: 'Пресс',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeTrains', null, {});
  },
};
