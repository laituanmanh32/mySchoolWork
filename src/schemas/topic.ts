import * as Sequelize from 'sequelize';

export interface TopicAttributes {
}

export interface TopicInstance extends Sequelize.Instance<TopicAttributes> {
}

export default function defineTopic(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Topic = <any> sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Topic.associate = function (schemas) {
    Topic.belongsTo(schemas.Project);
  };

  return Topic;
}
