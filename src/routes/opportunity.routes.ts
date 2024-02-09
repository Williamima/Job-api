import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { applicationRouter } from "./appliation.routes";
import { ValidadeBody } from "../middlewares/validadeBody.middleware";
import { opportunityCreateSchema } from "../schemas/opportunity.schemas";
import { IsOpportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";

export const opportunityRouter = Router();

const opportunityControllers = new OpportunityControllers();

opportunityRouter.post("/", ValidadeBody.execute(opportunityCreateSchema),opportunityControllers.create);
opportunityRouter.get("/", opportunityControllers.findMany);

opportunityRouter.use("/:id", IsOpportunityIdValid.execute)

opportunityRouter.get("/:id", opportunityControllers.findOne);
opportunityRouter.patch("/:id", ValidadeBody.execute(opportunityCreateSchema),opportunityControllers.update);
opportunityRouter.delete("/:id", opportunityControllers.delete);

opportunityRouter.use("/", applicationRouter);
