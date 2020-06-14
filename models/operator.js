module.exports = function (sequelize, DataTypes) {
    var Operator = sequelize.define("Operator", {
      // name defines a unique name
      operator_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Operator;
  };
  