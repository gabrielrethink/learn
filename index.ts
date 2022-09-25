import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.status(200).json("Express + TypeScript Server");
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
