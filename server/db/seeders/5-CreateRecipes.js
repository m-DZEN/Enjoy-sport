/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        type_id: 1,
        title: 'Блюдо 1',
        description: 'Текст о том как готовить на завтрак Блюдо 1',
      },
      {
        type_id: 1,
        title: 'Блюдо 2',
        description: 'Текст о том как готовить на завтрак Блюдо 2',
      },
      {
        type_id: 1,
        title: 'Блюдо 3',
        description: 'Текст о том как готовить на завтрак Блюдо 3',
      },
      {
        type_id: 2,
        title: 'Блюдо 4',
        description: 'Текст о том как готовить на первый перекус Блюдо 4',
      },
      {
        type_id: 2,
        title: 'Блюдо 5',
        description: 'Текст о том как готовить на первый перекус  Блюдо 5',
      },
      {
        type_id: 2,
        title: 'Блюдо 6',
        description: 'Текст о том как готовить на первый перекус Блюдо 6',
      },
      {
        type_id: 3,
        title: 'Блюдо 7',
        description: 'Текст о том как готовить на обед Блюдо 7',
      },
      {
        type_id: 3,
        title: 'Блюдо 8',
        description: 'Текст о том как готовить на обед Блюдо 8',
      },
      {
        type_id: 3,
        title: 'Блюдо 9',
        description: 'Текст о том как готовить на обед Блюдо 9',
      },
      {
        type_id: 4,
        title: 'Блюдо 10',
        description: 'Текст о том как готовить на второй перекус Блюдо 10',
      },
      {
        type_id: 4,
        title: 'Блюдо 11',
        description: 'Текст о том как готовить на второй перекус Блюдо 11',
      },
      {
        type_id: 4,
        title: 'Блюдо 12',
        description: 'Текст о том как готовить на второй перекус Блюдо 12',
      },
      {
        type_id: 5,
        title: 'Блюдо 13',
        description: 'Текст о том как готовить на ужин Блюдо 13',
      },
      {
        type_id: 5,
        title: 'Блюдо 14',
        description: 'Текст о том как готовить на ужин Блюдо 14',
      },
      {
        type_id: 5,
        title: 'Блюдо 15',
        description: 'Текст о том как готовить на ужин Блюдо 15',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
