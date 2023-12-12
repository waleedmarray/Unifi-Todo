import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extractedErrors: string[] = [];

    errors.array().map((err) => extractedErrors.push(err.msg));

    return res.status(422).json({
      error: extractedErrors,
      message: "Validation error(s) occured.",
    });
  }

  return next();
};