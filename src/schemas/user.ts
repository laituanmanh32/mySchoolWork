import * as Sequelize from 'sequelize';

export interface UserAttributes {
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
    var User = <any> sequelize.define('User', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.ENUM("user", "admin")
    });

    User.associate = function (schemas) {
      User.hasOne(schemas.Profile)
    };

    return User;
}
