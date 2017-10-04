import * as Sequelize from 'sequelize';

export interface MeetingAttributes {
}

export interface MeetingInstance extends Sequelize.Instance<MeetingAttributes> {
}

export default function defineMeeting(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Meeting = <any> sequelize.define('Meeting', {});

  Meeting.associate = function (schemas) {
    Meeting.belongsTo(schemas.Project);
    
  };

  return Meeting;
}
