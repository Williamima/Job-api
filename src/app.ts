import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.routes";
import { HandleErros } from "./middlewares/handleErrors.middlewares";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/opportunites", opportunityRouter);

app.use(HandleErros.execute);
