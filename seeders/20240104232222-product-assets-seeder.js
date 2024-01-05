'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_assets', [
      {
        image: 'logitech-h111-headset-stereo-single-jack-3-5mm',
        product_id: 1,
      },
      {
        image: 'logitech-h111-headset-stereo-single-jack-3-5mm.png',
        product_id: 1,
      },
      {
        image: 'philips-rice-cooker-inner-pot-2l-bakuhanseki-hd3110-33.png',
        product_id: 2,
      },
      {
        image: 'philips.png',
        product_id: 2,
      },
      {
        image: 'philips-rice-cooker.png',
        product_id: 2,
      },
      {
        image: 'iphone-12-64gb-128gb-256gb.png',
        product_id: 3,
      },
      {
        image: 'papan-alat-bantu-push-up.png',
        product_id: 4,
      },
      {
        image: 'jim-joker-sandal-slide-kulit-pria-bold-2s-hitam-hitam.png',
        product_id: 5,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_assets', null, {});
  },
};
