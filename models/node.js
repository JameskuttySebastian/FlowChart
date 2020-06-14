module.exports = function (sequelize, DataTypes) {
    var Node = sequelize.define("Node", {
      // name defines a unique name
      node_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      operator_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    return Node;
  };
  