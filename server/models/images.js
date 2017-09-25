'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    champion: DataTypes.STRING,
    square: DataTypes.STRING,
    loading: DataTypes.ARRAY(DataTypes.STRING),
    splash: DataTypes.ARRAY(DataTypes.STRING),
    championId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Images.belongsTo(models.Champion, {
          foreignKey: 'championId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Images;
};
