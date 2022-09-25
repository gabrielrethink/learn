import { Request, Response, NextFunction } from "express";
import status from "http-status";

const get = (request: Request, response: Response, next: NextFunction) => {
  try {
    const data = { user: "gabriel" };
    response.locals.data = data;
    response.locals.status = status.OK;
    next();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      response.locals.data = error.message;
      response.locals.status = status.INTERNAL_SERVER_ERROR;
      next(error);
    }
  }
};

export default { get };
