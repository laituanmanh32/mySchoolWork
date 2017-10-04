import * as Sequelize from 'sequelize';

export interface FileAttributes {
}

export interface FileInstance extends Sequelize.Instance<FileAttributes> {
}

export default function defineFile(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var File = <any> sequelize.define('File', {
    title: DataTypes.STRING,
    src: DataTypes.STRING
  });

  File.associate = function (schemas) {
    File.belongsTo(schemas.Milestone);
  };

  return File;
}
