import * as Sequelize from 'sequelize';

export interface OutlineAttributes {
}

export interface OutlineInstance extends Sequelize.Instance<OutlineAttributes> {
}

export default function defineOutline(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Outline = <any> sequelize.define('Outline', {
    title: DataTypes.STRING
  });

  Outline.associate = function (schemas) {
    Outline.belongsTo(schemas.Milestone);
  };

  return Outline;
}
