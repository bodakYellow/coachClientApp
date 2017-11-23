module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define("client", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    password: DataTypes.STRING,
    activity: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return client;
};

module.exports = function(sequelize, DataTypes) {
  var trainer = sequelize.define("Trainer", {
  	name: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    password: DataTypes.STRING,
    activity: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return trainer;
};
