module.exports = function (sequelize, DataTypes) {
    var Flow = sequelize.define("Flow", {
      // name defines a unique name
      flow_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operator_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      top: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      left: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    return Flow;
  };