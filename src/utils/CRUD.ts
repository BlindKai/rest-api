import { Request, Response } from "express";

/**
 * @todo think about Interface segregation (SOLID)
 */
interface CRUD {
  all(req: Request, res: Response): Promise<Response>;
  find(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  patch(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}

export { CRUD };
