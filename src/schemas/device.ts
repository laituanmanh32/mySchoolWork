import * as Sequelize from 'sequelize';

export interface DeviceAttributes {
}

export interface DeviceInstance extends Sequelize.Instance<DeviceAttributes> {
}

export default function defineDevice(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Device = <any> sequelize.define('Device', {
    device_name: DataTypes.STRING,
    device_id: DataTypes.STRING,
  });

  Device.associate = function (schemas) {
    Device.belongsTo(schemas.Profile);
  };

  return Device;
}
