'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Elektronik',
        slug: 'elektronik',
      },
      {
        name: 'Fashion Pria',
        slug: 'fashion-pria',
      },
      {
        name: 'Fashion Wanita',
        slug: 'fashion-wanita',
      },
      {
        name: 'Handphone & Tablet',
        slug: 'handphone-&-tablet',
      },
      {
        name: 'Olahraga',
        slug: 'olahraga',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
