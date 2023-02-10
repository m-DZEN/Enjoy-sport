/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trainings', [
      {
        title: 'Жим штанги лёжа',
        type_id: 1,
      },
      {
        title: 'Жим гантелей лежа',
        type_id: 1,
      },
      {
        title: 'Отжимания от пола',
        type_id: 1,
      },
      {
        title: 'Подтягивания на перекладине',
        type_id: 2,
      },
      {
        title: 'Тяга гантели одной рукой в наклоне',
        type_id: 2,
      },
      {
        title: 'Тяга штанги в наклоне',
        type_id: 2,
      },
      {
        title: 'Приседания со штангой',
        type_id: 3,
      },
      {
        title: 'Выпады с гантелями',
        type_id: 3,
      },
      {
        title: 'Жим ногами',
        type_id: 3,
      },
      {
        title: 'Подъем гантелей на бицепс стоя',
        type_id: 4,
      },
      {
        title: 'Отжимания на брусьях',
        type_id: 4,
      },
      {
        title: 'Французский жим лежа',
        type_id: 4,
      },
      {
        title: 'Жим гантелей сидя',
        type_id: 5,
      },
      {
        title: 'Подъем гантелей перед собой',
        type_id: 5,
      },
      {
        title: 'Разведение гантелей стоя',
        type_id: 5,
      },
      {
        title: 'Скручивания',
        type_id: 6,
      },
      {
        title: 'Косые скручивания',
        type_id: 6,
      },
      {
        title: 'Подъем ног в упоре на локтях',
        type_id: 6,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trainings', null, {});
  },
};
