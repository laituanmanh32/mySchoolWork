import * as Sequelize from 'sequelize';

export interface StudentAssessmentAttributes {
}

export interface StudentAssessmentInstance extends Sequelize.Instance<StudentAssessmentAttributes> {
}

export default function defineStudentAssessment(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var StudentAssessment = <any> sequelize.define('StudentAssessment', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mark: DataTypes.FLOAT,
  }, {});

  StudentAssessment.associate = function (schemas) {
    StudentAssessment.belongsToMany(schemas.Profile, {through: 'ProfileStudentAssessment', as: 'Students'});
    StudentAssessment.belongsTo(schemas.Profile, {as: 'Teacher'});
  }

  return StudentAssessment;
}
