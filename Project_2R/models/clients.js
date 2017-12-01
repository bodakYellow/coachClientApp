module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING
  });

return Clients;
};
