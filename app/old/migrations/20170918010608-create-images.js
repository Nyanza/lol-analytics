'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      champion: {
        type: Sequelize.STRING
      },
      square: {
        type: Sequelize.STRING
      },
      loading: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      splash: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      championId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Champions',
          key: 'id',
          as: 'championId',
        },
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
    return queryInterface.dropTable('Images');
  }
};
