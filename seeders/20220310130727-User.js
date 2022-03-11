'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('User', [{
        userId:2,
        username: "uma devi",
        email:"uma@gmail.com",
        phoneNo:123455,
        location:"Aler"
      }], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('User', null, {});
  }
};
