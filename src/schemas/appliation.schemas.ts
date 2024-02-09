import { string, z } from "zod";

const applicationSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: string().min(1).email(),
  linkedin: z.string().min(1).url(),
  opportunityId: z.number().positive(),
});

const appliationCreateSchema = applicationSchema.omit({
  id: true,
  opportunityId: true,
});

type TAppication = z.infer<typeof applicationSchema>;

type TAppicationCreate = z.infer<typeof appliationCreateSchema>;

export {
  applicationSchema,
  appliationCreateSchema,
  TAppication,
  TAppicationCreate,
};
