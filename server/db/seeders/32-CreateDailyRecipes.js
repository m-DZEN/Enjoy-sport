/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DailyRecipes', [
      {
        recipe_id: 1,
        mass: 100,
      },
      {
        recipe_id: 1,
        mass: 150,
      },
      {
        recipe_id: 2,
        mass: 245,
      },
      {
        recipe_id: 2,
        mass: 300,
      },
      {
        recipe_id: 3,
        mass: 120,
      },
      {
        recipe_id: 3,
        mass: 100,
      },
      {
        recipe_id: 4,
        mass: 150,
      },
      {
        recipe_id: 4,
        mass: 245,
      },
      {
        recipe_id: 5,
        mass: 300,
      },
      {
        recipe_id: 5,
        mass: 120,
      },
      {
        recipe_id: 6,
        mass: 100,
      },
      {
        recipe_id: 6,
        mass: 150,
      },
      {
        recipe_id: 7,
        mass: 245,
      },
      {
        recipe_id: 7,
        mass: 300,
      },
      {
        recipe_id: 8,
        mass: 120,
      },
      {
        recipe_id: 8,
        mass: 100,
      },
      {
        recipe_id: 9,
        mass: 150,
      },
      {
        recipe_id: 9,
        mass: 245,
      },
      {
        recipe_id: 10,
        mass: 300,
      },
      {
        recipe_id: 10,
        mass: 120,
      },
      {
        recipe_id: 11,
        mass: 100,
      },
      {
        recipe_id: 11,
        mass: 150,
      },
      {
        recipe_id: 12,
        mass: 245,
      },
      {
        recipe_id: 12,
        mass: 300,
      },
      {
        recipe_id: 13,
        mass: 120,
      },
      {
        recipe_id: 13,
        mass: 100,
      },
      {
        recipe_id: 14,
        mass: 150,
      },
      {
        recipe_id: 14,
        mass: 245,
      },
      {
        recipe_id: 15,
        mass: 300,
      },
      {
        recipe_id: 15,
        mass: 120,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DailyRecipes', null, {});
  },
};
