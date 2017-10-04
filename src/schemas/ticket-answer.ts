import * as Sequelize from 'sequelize';

export interface TicketAnswerAttributes {
}

export interface TicketAnswerInstance extends Sequelize.Instance<TicketAnswerAttributes> {
}

export default function defineTicketAnswer(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var TicketAnswer = <any> sequelize.define('TicketAnswer', {
    title: DataTypes.STRING,
  });

  TicketAnswer.associate = function (schemas) {
    TicketAnswer.belongsTo(schemas.Ticket);
    TicketAnswer.belongsTo(schemas.Profile, {as: 'Creator'});
  };

  return TicketAnswer;
}
