import { Request, Response } from "express";
import { ApplicationServices } from "../services/application.services";

export class ApplicationControllers {
  async create(req: Request, res: Response) {
    const appliationServices = new ApplicationServices();

    const response = await appliationServices.create(
      Number(req.params.id),
      req.body
    );

    return res.status(200).json(response);
  }

  async findMany(req: Request, res: Response) {
    const appliationServices = new ApplicationServices();

    const response = await appliationServices.findMany(Number(req.params.id));

    return res.status(200).json(response);
  }
}
