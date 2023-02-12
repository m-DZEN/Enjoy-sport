/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Quotes', [
      {
        text: 'Нельзя вернуться в прошлое и изменить свой стартб но можно стартовать и изменить свой финиш',
      },
      {
        text: 'Я этого хочу. Значит это будет',
      },
      {
        text: 'Чем тяжелее подъем, тем прекраснее вид с вершины',
      },
      {
        text: 'Победа не дает силу. Силу дает борьба. Если ты борешься и сдаешься - это и есть сила.',
      },
      {
        text: 'Каждая мечта дается тебе вместе с силами, необходимыми для ее осуществления.',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Quotes', null, {});
  },
};
