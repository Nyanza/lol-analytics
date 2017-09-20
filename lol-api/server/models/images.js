'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    champion: DataTypes.STRING,
    square: DataTypes.STRING,
    loading: DataTypes.ARRAY(DataTypes.STRING),
    splash: DataTypes.ARRAY(DataTypes.STRING),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Images;
};
