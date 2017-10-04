import * as Sequelize from 'sequelize';

export interface RoomAttributes {
}

export interface RoomInstance extends Sequelize.Instance<RoomAttributes> {
}

export default function defineRoom(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Room = <any> sequelize.define('Room', {});

  Room.associate = function (schemas) {
    Room.belongsTo(schemas.Project);
    Room.belongsToMany(schemas.Profile, {through: 'ProfileRoom', as: 'Partners'});
    Room.hasMany(schemas.Message);
  };

  return Room;
}
