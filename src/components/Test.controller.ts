import { BaseController } from "../utils/BaseComponent";
import { Request, Response } from "express";

export class TestController extends BaseController {
  public list(req: Request, res: Response) {
    this.ok(res, "okay");
  }
}
