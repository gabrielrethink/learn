import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

const response = (req: Request, res: Response, next: NextFunction) => {
  const status = res.locals.status || httpStatus.OK;

  if (status >= 400) {
    res.status(status).json({
      message: res.locals.message,
    });
  }

  res.status(status).json(res.locals.data);
};

export default { response };
