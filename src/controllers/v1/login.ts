import {Request, Response} from "express";
import {AController, helper} from "../interfaces/AController";
import {schemas} from "../../schemas";
import misc from "../../libs/misc";
import auth from "../../libs/auth";
import {ResponseCode} from "enums/response-code";

class Login extends AController {

    async create(req: Request, res: Response) {
        try {
            let {username, password} = req.body;
            let user = await schemas.User.findOne({
                username
            });

            if (!user) {
                return helper.error(res, {
                    code: ResponseCode.DATA_NOT_FOUND,
                    message: "user not found",
                    error: null
                });
            }

            if (user.password != misc.sha256(password)) {
                return helper.error(res, {
                    code: ResponseCode.LOGIN_WRONG_PASSWORD,
                    message: "wrong password",
                    error: null
                });
            }

            let j_user = user.toJSON();
            delete j_user.password;

            let token = await auth.createToken({
                id: j_user.id,
                username: j_user.username,
                role: j_user.role
            });

            return helper.success(res, {
                token,
                data: j_user
            });
        }
        catch (e) {
            return helper.error(res, {
                code: ResponseCode.SERVER_INTERNAL_ERROR,
                message: 'Server internal error',
                error: e
            });
        }
    }
}

const login = new Login();
module.exports = login;
