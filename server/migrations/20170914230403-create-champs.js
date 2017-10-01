'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Champions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      skins: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      lore: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      partype: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.JSON
      },
      stats: {
        type: Sequelize.JSON
      },
      metrics: {
        type: Sequelize.JSON
      },
      defaultMetrics: {
        type: Sequelize.JSON
      },
      squareImg: {
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
    return queryInterface.dropTable('Champions');
  }
};
