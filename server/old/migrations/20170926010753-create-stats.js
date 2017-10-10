'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      champion: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      winPercent: {
        type: Sequelize.STRING
      },
      playPercent: {
        type: Sequelize.STRING
      },
      banRate: {
        type: Sequelize.STRING
      },
      championId: {
        type: Sequelize.INTEGER
      },
      league: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stats');
  }
};