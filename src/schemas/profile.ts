import * as Sequelize from 'sequelize';

export interface ProfileAttributes {
}

export interface ProfileInstance extends Sequelize.Instance<ProfileAttributes> {
}

export default function defineProfile(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) {
  var Profile = <any> sequelize.define('Profile', {
    fullname: DataTypes.STRING,
    p_id: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM("teacher", "student")
  });

  Profile.associate = function (schemas) {
    Profile.hasMany(schemas.Task);
    // Profile.hasOne(schemas.StudentAssessment, {as: 'Student'});
    // Profile.hasOne(schemas.StudentAssessment, {as: 'Teacher'});
    Profile.hasMany(schemas.Comment);
    Profile.belongsToMany(schemas.Profile, {through: 'ProfileFriend', as: 'Friends'});
    Profile.hasMany(schemas.Notification);
  };

  return Profile;
}
