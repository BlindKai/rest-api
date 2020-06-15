import { Request, Response } from "express";

/**
 * @todo think about Interface segregation (SOLID)
 */
interface CRUD {
  all(req: Request, res: Response): Response;
  find(req: Request, res: Response): Response;
  create(req: Request, res: Response): Response;
  update(req: Request, res: Response): Response;
  patch(req: Request, res: Response): Response;
  delete(req: Request, res: Response): Response;
}

export { CRUD };
