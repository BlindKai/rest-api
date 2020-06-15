import { BaseController } from "../utils/BaseComponent";
import { Request, Response } from "express";
import { CRUD } from "../utils/CRUD";

export class TestController extends BaseController implements CRUD {
  all(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  find(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  create(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  update(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  patch(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  delete(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
