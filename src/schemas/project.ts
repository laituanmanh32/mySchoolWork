import * as Sequelize from 'sequelize';

export interface ProjectAttributes {
}

export interface ProjectInstance extends Sequelize.Instance<ProjectAttributes> {
}

export default function defineProject(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Project = <any> sequelize.define('Project', {
    title: DataTypes.STRING,

  }, {});

  Project.associate = function (schemas) {
    Project.belongsToMany(schemas.Profile, {through: 'ProfileProject', as: 'Students'});
    Project.belongsTo(schemas.Profile, {as: 'Teacher'});
    Project.hasMany(schemas.Task);
    Project.belongsTo(schemas.Semester);
    Project.hasMany(schemas.Topic);
    Project.belongsToMany(schemas.File, {through: 'ProjectDocument', as: 'Documents'});
    Project.belongsToMany(schemas.File, {through: 'ProjectReport', as: 'Report'});
    Project.belongsToMany(schemas.File, {through: 'ProjectSourceCode', as: 'SourceCode'});
    Project.hasMany(schemas.Meeting);

  };

  return Project;
}
