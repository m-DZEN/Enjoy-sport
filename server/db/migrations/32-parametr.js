/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parametrs', {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      data: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      currentWeight: {
        type: Sequelize.INTEGER,
      },
      hipGirth: {
        type: Sequelize.INTEGER,
      },
      buttocksGirth: {
        type: Sequelize.INTEGER,
      },
      waistGirth: {
        type: Sequelize.INTEGER,
      },
      breastGirth: {
        type: Sequelize.INTEGER,
      },
      bicepsGirth: {
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
    await queryInterface.dropTable('Parametrs');
  },
};
