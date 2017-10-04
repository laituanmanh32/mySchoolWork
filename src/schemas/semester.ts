import * as Sequelize from 'sequelize';

export interface SemesterAttributes {
}

export interface SemesterInstance extends Sequelize.Instance<SemesterAttributes> {
}

export default function defineSemester(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Semester = <any> sequelize.define('Semester', {
    title: DataTypes.STRING,
    code: DataTypes.STRING
  });

  Semester.associate = function (schemas) {
    Semester.hasMany(schemas.Project);
  };

  return Semester;
}
