'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Profile', [{
       profilename:"uma"
      }], {});
  },

  async down (queryInterface, Sequelize) {

    
      await queryInterface.bulkDelete('Profile', null, {});
  }
};
