'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Post', [{
      text: 'Good morning!',
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Post', null, {});
  }
};
