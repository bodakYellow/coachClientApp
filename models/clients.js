module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    goal: DataTypes.STRING,
    location: DataTypes.STRING,
    time: DataTypes.STRING,
    activity: DataTypes.STRING
  });

  Clients.associate = function(models) {
      Clients.belongsTo(models.Trainers, {
          foreignKey: {
              allowNull: true
          }
      });
  };

return Clients;
};
