/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      login: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATEONLY,
      },
      gender: {
        type: Sequelize.STRING,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      body_type: {
        type: Sequelize.STRING,
      },
      type_program: {
        type: Sequelize.STRING,
      },
      final_weight: {
        type: Sequelize.INTEGER,
      },
      ready: {
        type: Sequelize.TEXT,
      },
      notready: {
        type: Sequelize.TEXT,
      },
      contra: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Users');
  },
};
