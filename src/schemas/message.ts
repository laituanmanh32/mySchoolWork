import * as Sequelize from 'sequelize';

export interface MessageAttributes {
}

export interface MessageInstance extends Sequelize.Instance<MessageAttributes> {
}

export default function defineMessage(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Message = <any> sequelize.define('Message', {});

  Message.associate = function (schemas) {
    Message.belongsTo(schemas.Room);
    Message.belongsTo(schemas.Project, {as: 'Creator'});
  };

  return Message;
}
