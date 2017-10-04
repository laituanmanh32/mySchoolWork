import * as Sequelize from 'sequelize';

export interface TicketAttributes {
}

export interface TicketInstance extends Sequelize.Instance<TicketAttributes> {
}

export default function defineTicket(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Ticket = <any> sequelize.define('Ticket', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,

  });

  Ticket.associate = function (schemas) {
    Ticket.belongsTo(schemas.Profile, {as: 'Creator'});
    Ticket.hasMany(schemas.TicketAnswer, {as: 'Answers'});
  };

  return Ticket;
}
