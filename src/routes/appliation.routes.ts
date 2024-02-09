import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { ValidadeBody } from "../middlewares/validadeBody.middleware";
import { appliationCreateSchema } from "../schemas/appliation.schemas";

export const applicationRouter = Router();

const applicationControllers = new ApplicationControllers();

applicationRouter.post("/:id/applications", ValidadeBody.execute(appliationCreateSchema), applicationControllers.create);
applicationRouter.get("/:id/applications", applicationControllers.findMany);
