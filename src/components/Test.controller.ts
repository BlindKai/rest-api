import { BaseController } from "../utils/BaseComponent";
import { Request, Response } from "express";
import { CRUD } from "../utils/CRUD";

export class TestController extends BaseController implements CRUD {
  all(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }

  find(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }

  create(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }

  update(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }

  patch(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }
  
  delete(req: Request<any>, res: Response<any>): Response<any> {
    throw new Error("Method not implemented.");
  }

}
