import * as Sequelize from 'sequelize';

export interface NotificationAttributes {
}

export interface NotificationInstance extends Sequelize.Instance<NotificationAttributes> {
}

export default function defineNotification(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Notification = <any> sequelize.define('Notification', {});

  Notification.associate = function (schemas) {
    Notification.belongsTo(schemas.Profile);

  };

  return Notification;
}
