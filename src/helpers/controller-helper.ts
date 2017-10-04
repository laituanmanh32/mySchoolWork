import {Response} from "express";
import {ResponseCode} from "enums/response-code";

export class ControllerHelper {
  success(res: Response, obj?: any) {
    return res.send({
      success: true,
      ...obj
    })
  }

  error(res: Response, {code, message, error}) {
    return res.send({
      success: false,
      error: {
        code,
        message,
        data: error
      }
    })
  }

  accessDenied(res: Response, message?: any, data?: any) {
    return res.send({
      success: false,
      error: {
        code: ResponseCode.PERMISSION_IMPLICIT,
        message: message || 'Access denied',
        data: data
      }
    })
  }

  dataNotFound(res, name, data = null) {
    return this.error(res, {
      message: `Không tìm thấy ${name}`,
      code: ResponseCode.DATA_NOT_FOUND,
      error: data
    })
  }

  inputNullImplicit(res, field) {
    return this.error(res, {
      message: `${field} không được bỏ trống`,
      code: ResponseCode.INPUT_DATA_NULL,
      error: null
    })
  }

  checkNull(obj) {
    for (let key of Object.keys(obj)) {
      if (!obj[key])
        return {
          error: true,
          field: key
        }
    }
    return {
      error: false,
      field: null
    }
  }

  internalError(res: Response, message?: string) {
    res.send({
      code: ResponseCode.SERVER_INTERNAL_ERROR,
      message: 'Server internal error',
      error: message
    });
  }
}
const helper = new ControllerHelper();
export default helper;
