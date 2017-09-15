'use strict';
module.exports = (sequelize, DataTypes) => {
  var Champs = sequelize.define('Champs', {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    kills: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Champs;
};
