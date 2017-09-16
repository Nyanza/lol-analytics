'use strict';
module.exports = (sequelize, DataTypes) => {
  var Champion = sequelize.define('Champion', {
    name: DataTypes.STRING,
    img: DataTypes.JSON,
    key: DataTypes.STRING,
    title: DataTypes.STRING,
    skins: DataTypes.ARRAY(DataTypes.JSON),
    lore: DataTypes.STRING,
    allytips: DataTypes.ARRAY(DataTypes.STRING),
    enemytips: DataTypes.ARRAY(DataTypes.STRING),
    tags: DataTypes.ARRAY(DataTypes.STRING),
    partype: DataTypes.STRING,
    info: DataTypes.JSON,
    stats: DataTypes.JSON,
    spells: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        Champion.hasMany(models.Spells, {
          foreignKey: 'championId',
          as: 'spells',
        });
      }
    }
  });
  return Champion;
};
