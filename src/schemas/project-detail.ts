import * as Sequelize from 'sequelize';

export interface ProjectDetailAttributes {
}

export interface ProjectDetailInstance extends Sequelize.Instance<ProjectDetailAttributes> {
}

export default function defineProjectDetail(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var ProjectDetail = <any> sequelize.define('ProjectDetail', {
    
  });

  ProjectDetail.associate = function (schemas) {
    ProjectDetail.belongsTo(schemas.Project);
  };

  return ProjectDetail;
}
