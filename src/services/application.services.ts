import { prisma } from "../database/prisma";
import { TAppication, TAppicationCreate } from "../schemas/appliation.schemas";

export class ApplicationServices {
  async create(
    opportunityId: number,
    body: TAppicationCreate
  ): Promise<TAppication> {
    const data = await prisma.application.create({
      data: { opportunityId, ...body },
    });

    return data;
  }

  async findMany(opportunityId: number): Promise<TAppication[]> {
    const data = await prisma.application.findMany({
      where: { opportunityId },
    });

    return data;
  }
}
