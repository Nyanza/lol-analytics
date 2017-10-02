'use strict';
module.exports = (sequelize, DataTypes) => {
  var Champion = sequelize.define('Champion', {
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    title: DataTypes.STRING,
    skins: DataTypes.ARRAY(DataTypes.JSON),
    lore: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    partype: DataTypes.STRING,
    info: DataTypes.JSON,
    stats: DataTypes.JSON,
    metrics: DataTypes.JSON,
    spells: DataTypes.JSON,
    defaultMetrics: DataTypes.JSON,
    squareImg: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Champion.hasMany(models.Spells, {
          foreignKey: 'championId'
        });
        Champion.hasMany(models.Images, {
          foreignKey: 'championId',
          as: 'images',
        });

      }
    }
  });
  return Champion;
};
