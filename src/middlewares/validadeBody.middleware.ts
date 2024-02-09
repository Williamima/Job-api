import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class ValidadeBody {
    static execute(schema: ZodSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            req.body = schema.parse(req.body);

            return next()
        } 
    }
}