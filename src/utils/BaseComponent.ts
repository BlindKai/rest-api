import { Response } from "express";

export abstract class BaseController {
  /**
   * This method is called on successful server response
   */
  public static json(res: Response, code: number, message: string, data?: any) {
    return res.status(code).json({ status: "success", message, data });
  }

  /**
   * This method is called if error occured while request processing
   */
  public static error(res: Response, code: number, message: string, err?: any) {
    return res.status(code).json({ status: "error", message, err });
  }

  public ok(res: Response, message?: string, data?: object | object[]) {
    return BaseController.json(res, 200, message || "OK", data);
  }

  public created(res: Response, message?: string) {
    return BaseController.json(res, 201, message || "Created");
  }

  public noContent(res: Response, message?: string) {
    return BaseController.json(res, 204, message || "No Content");
  }

  public badRequest(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 400, message || "Bad Request", error);
  }

  public unauthorized(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 401, message || "Unauthorized", error);
  }

  public forbidden(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 403, message || "Forbidden", error);
  }

  public notFound(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 404, message || "Not Found", error);
  }

  public conflict(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 409, message || "Conflict", error);
  }

  public unprocessableEntity(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 422, message || "Unprocessable Entity", error);
  }

  public tooManyRequests(res: Response, message?: string, error?: object) {
    return BaseController.error(res, 429, message || "Too Many Requests", error);
  }

  public internalServerError(res: Response, message?: string) {
    return BaseController.error(res, 500, message || "Internal Server Error");
  }
}
