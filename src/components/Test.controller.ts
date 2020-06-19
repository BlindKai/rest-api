import { BaseController } from "../interfaces/BaseComponent";
import { Request, Response } from "express";

export class TestController extends BaseController {
  protected async executeImpl(req: Request, res: Response) {
    await wait(-2);
    this.ok(res);
  }
}

function wait(timeout: number) {
  return new Promise((resolve, reject) => {
    if (timeout < 0) reject("Timeout < 0");

    const until = Date.now() + timeout;
    while (until > Date.now()) {}
    resolve("result");
  });
}
