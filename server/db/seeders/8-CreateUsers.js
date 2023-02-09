/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
// !!! Поключаем "bcrypt" для хеширования пароля
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Юля',
        login: 'admin',
        password: await bcrypt.hash('123456789', 9),
        email: '123@123.com',
        birthday: '1987-03-19 14:25:42.946 +0300',
        gender: 'female',
        height: 170,
        weight: 45,
        body_type: 'thin',
        type_program: 'holdWeight',
        final_weight: '45',
        ready: 'готова на всё',
        notready: 'нет таких',
        contra: 'отсутствуют',
      },
      {
        name: 'Biba',
        login: 'Biba',
        password: await bcrypt.hash('123456789', 9),
        email: '1234@1234.com',
        birthday: '1985-01-01 14:25:42.946 +0300',
        gender: 'male',
        height: 185,
        weight: 100,
        body_type: 'full',
        type_program: 'loseWeight',
        final_weight: '85',
        ready: 'готов отказаться от всего',
        notready: 'нет таких',
        contra: 'отсутствуют',
      },
      {
        name: 'Boba',
        login: 'Boba',
        password: await bcrypt.hash('123456789', 9),
        email: '12345@12345.com',
        birthday: '1990-01-01 14:25:42.946 +0300',
        gender: 'female',
        height: 165,
        weight: 45,
        body_type: 'thin',
        type_program: 'gainWeight',
        final_weight: '55',
        ready: 'готов отказаться от  макарон и картошки',
        notready: 'не готова отказаться от сладкого',
        contra: 'арахис',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
