/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DailyTrains', [
      {
        training_id: 1,
        weight: 50,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 1,
        weight: 60,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 2,
        weight: 10,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 2,
        weight: 10,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 3,
        weight: 0,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 3,
        weight: 0,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 4,
        weight: 0,
        sets: 2,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 4,
        weight: 0,
        sets: 3,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 5,
        weight: 10,
        sets: 4,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 5,
        weight: 10,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 6,
        weight: 20,
        sets: 4,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 6,
        weight: 20,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 7,
        weight: 20,
        sets: 4,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 7,
        weight: 20,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 8,
        weight: 20,
        sets: 4,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 8,
        weight: 20,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 9,
        weight: 40,
        sets: 4,
        rep: 5,
        rest: 90,
      },
      {
        training_id: 9,
        weight: 40,
        sets: 3,
        rep: 10,
        rest: 90,
      },
      {
        training_id: 10,
        weight: 10,
        sets: 4,
        rep: 6,
        rest: 90,
      },
      {
        training_id: 10,
        weight: 10,
        sets: 3,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 11,
        weight: 0,
        sets: 4,
        rep: 6,
        rest: 90,
      },
      {
        training_id: 11,
        weight: 0,
        sets: 3,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 12,
        weight: 5,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 12,
        weight: 5,
        sets: 3,
        rep: 12,
        rest: 90,
      },
      {
        training_id: 13,
        weight: 8,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 13,
        weight: 8,
        sets: 3,
        rep: 12,
        rest: 90,
      },
      {
        training_id: 14,
        weight: 5,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 14,
        weight: 5,
        sets: 3,
        rep: 12,
        rest: 90,
      },
      {
        training_id: 15,
        weight: 5,
        sets: 4,
        rep: 8,
        rest: 90,
      },
      {
        training_id: 15,
        weight: 5,
        sets: 3,
        rep: 12,
        rest: 90,
      },
      {
        training_id: 16,
        weight: 0,
        sets: 4,
        rep: 20,
        rest: 90,
      },
      {
        training_id: 16,
        weight: 0,
        sets: 3,
        rep: 25,
        rest: 90,
      },
      {
        training_id: 17,
        weight: 0,
        sets: 4,
        rep: 20,
        rest: 90,
      },
      {
        training_id: 17,
        weight: 0,
        sets: 3,
        rep: 25,
        rest: 90,
      },
      {
        training_id: 18,
        weight: 0,
        sets: 4,
        rep: 20,
        rest: 90,
      },
      {
        training_id: 18,
        weight: 0,
        sets: 3,
        rep: 25,
        rest: 90,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DailyTrains', null, {});
  },
};
