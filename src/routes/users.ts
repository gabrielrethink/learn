import { Router } from "express";
import userController from "../controller/user";
import middle from "../middleware";
const userRouter: Router = Router();

userRouter.get("/", userController.get, middle.response);

export default userRouter;
