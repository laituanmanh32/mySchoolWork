import {Request, Response} from 'express';

export class ControllerHelper {
    success(res:Response, obj) {
        return res.send({
            success : true,
            ...obj
        })
    }

    error(res: Response, {code, message, error = null}){
        return res.send({
            success: false,
            error: {
                code,
                message,
                data: error
            }
        })
    }
}

export abstract class AController {
    list(req: Request, res: Response) {
        res.status(501).send();
    }

    create(req: Request, res: Response) {
        res.status(501).send();
    }

    retrieve(req: Request, res: Response){
        res.status(501).send();
    }

    update(req: Request, res: Response){
        res.status(501).send();
    }

    destroy(req: Request, res: Response){
        res.status(501).send();
    }
}

export const helper = new ControllerHelper();