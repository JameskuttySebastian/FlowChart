module.exports = function (sequelize, DataTypes) {
    var Link = sequelize.define("Link", {
      // name defines a unique name
      link_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromOperator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromConnector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toOperator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toConnector: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
    return Link;
  };
  