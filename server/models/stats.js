'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stats = sequelize.define('stats', {
    champion: DataTypes.STRING,
    role: DataTypes.STRING,
    winPercent: DataTypes.STRING,
    playPercent: DataTypes.STRING,
    banRate: DataTypes.STRING,
    championId: DataTypes.INTEGER,
    league: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Stats.hasOne(models.Champion, {
          foreignKey: 'championId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Stats;
};
