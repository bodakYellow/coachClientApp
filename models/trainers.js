module.exports = function(sequelize, DataTypes) {
  var Trainers = sequelize.define("Trainers", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    location: DataTypes.STRING,
    time: DataTypes.STRING,
    activity: DataTypes.STRING
  });

  Trainers.associate = function(models){
      Trainers.hasMany(models.Clients, {
          // input query append clients info to trainer page
      });
  };

return Trainers;
};
