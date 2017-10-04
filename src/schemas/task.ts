import * as Sequelize from 'sequelize';

export interface TaskAttributes {
}

export interface TaskInstance extends Sequelize.Instance<TaskAttributes> {
}

export default function defineTask(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Task = <any> sequelize.define('Task', {
    title: DataTypes.STRING,
    due_date: DataTypes.DATE,

  });

  Task.associate = function (schemas) {
    Task.belongsTo(schemas.Milestone);
    Task.belongsTo(schemas.Profile, {as: 'Assign'});
    Task.belongsTo(schemas.Profile, {as: 'Creator'});
  };

  return Task;
}
