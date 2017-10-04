import * as Sequelize from 'sequelize';

export interface CommentAttributes {
}

export interface CommentInstance extends Sequelize.Instance<CommentAttributes> {
}

export default function defineComment(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Comment = <any> sequelize.define('Comment', {
    title: DataTypes.STRING
  });

  Comment.associate = function (schemas) {
    Comment.belongsTo(schemas.Topic);
    Comment.belongsTo(schemas.Profile, {as: 'Creator'});
  };

  return Comment;
}
