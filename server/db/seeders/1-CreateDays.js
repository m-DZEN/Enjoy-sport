/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Days', [
      {
        day_title: 'Понедельник',
      },
      {
        day_title: 'Вторник',
      },
      {
        day_title: 'Среда',
      },
      {
        day_title: 'Четверг',
      },
      {
        day_title: 'Пятница',
      },
      {
        day_title: 'Суббота',
      },
      {
        day_title: 'Воскресенье',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Days', null, {});
  },
};
