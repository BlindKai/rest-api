import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const { method, path } = req;
  console.log({ method, path });
  res.send("Success");
});

export { app };
