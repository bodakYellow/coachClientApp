module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    location: DataTypes.STRING,
    dateTime: DataTypes.STRING
  });

  var trainer = sequelize.define("trainer", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,

    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    location: DataTypes.STRING,
    dateTime: DataTypes.STRING
  });
  return trainer && client;
};
