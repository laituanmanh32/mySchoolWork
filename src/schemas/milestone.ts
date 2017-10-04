import * as Sequelize from 'sequelize';

export interface MilestoneAttributes {
}

export interface MilestoneInstance extends Sequelize.Instance<MilestoneAttributes> {
}

export default function defineMilestone(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Milestone = <any> sequelize.define('Milestone', {});

  Milestone.associate = function (schemas) {
    Milestone.belongsTo(schemas.Project);
    Milestone.hasMany(schemas.Outline);
  };

  return Milestone;
}
