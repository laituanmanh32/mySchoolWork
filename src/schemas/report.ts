import * as Sequelize from 'sequelize';

export interface ReportAttributes {
}

export interface ReportInstance extends Sequelize.Instance<ReportAttributes> {
}

export default function defineReport(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Report = <any> sequelize.define('Report', {});

  Report.associate = function (schemas) {
    Report.belongsTo(schemas.Meeting);
    Report.belongsTo(schemas.File);

  };

  return Report;
}
