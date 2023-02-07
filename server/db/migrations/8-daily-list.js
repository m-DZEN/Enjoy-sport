/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DailyLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      dailyTrain_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DailyTrains',
          key: 'id',
        },
      },
      dailyRecipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DailyRecipes',
          key: 'id',
        },
      },
      day_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Days',
          key: 'id',
        },
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
    await queryInterface.dropTable('DailyLists');
  },
};
