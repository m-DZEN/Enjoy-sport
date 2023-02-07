/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DailyTrains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      training_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Trainings',
          key: 'id',
        },
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      sets: {
        type: Sequelize.INTEGER,
      },
      rep: {
        type: Sequelize.INTEGER,
      },
      rest: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DailyTrains');
  },
};
