'use strict';
module.exports = (sequelize, DataTypes) => {
  var Spells = sequelize.define('Spells', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.JSON,
    costType: DataTypes.STRING,
    costBurn: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Spells.belongsTo(models.Champion, {
          foreignKey: 'championId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Spells;
};
