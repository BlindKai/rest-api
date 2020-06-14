import express from "express";
import { TestController } from "./components/Test.controller";

const app = express();
const testController = new TestController();

app.get("/", (req, res) => testController.list(req, res));

export { app };
