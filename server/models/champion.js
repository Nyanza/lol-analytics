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
    metrics: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        Champion.hasMany(models.Spells, {
          foreignKey: 'championId',
          as: 'spells',
        });
        Champion.hasMany(models.Images, {
          foreignKey: 'championId',
          as: 'images',
        });
        Spells.hasOne(models.Champion, {
          foreignKey: 'championId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Champion;
};
