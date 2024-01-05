'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Elektronik',
      },
      {
        name: 'Fashion Pria',
      },
      {
        name: 'Fashion Wanita',
      },
      {
        name: 'Handphone & Tablet',
      },
      {
        name: 'Olahraga',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
