import * as Sequelize from 'sequelize';

export interface ScheduleAttributes {
}

export interface ScheduleInstance extends Sequelize.Instance<ScheduleAttributes> {
}

export default function defineSchedule(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Schedule = <any> sequelize.define('Schedule', {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  });

  Schedule.associate = function (schemas) {
    Schedule.belongsTo(schemas.Meeting);
    Schedule.belongsTo(schemas.Profile, {as: 'Creator'});

  };

  return Schedule;
}
