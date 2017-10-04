import {sequelize} from "schemas";

export = async function () {
    sequelize.sync({force: true}).then(rs => {
        rs.queryInterface.bulkInsert("Users", [{
            username: "admin",
            password: "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
            email: 'admin@eyeteam.vn',
            role: 'admin',
            created_at: new Date(),
            updated_at: new Date()
        }]);
    })
}
