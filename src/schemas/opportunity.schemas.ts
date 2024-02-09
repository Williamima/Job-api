import { z } from "zod";

const opportunitySchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
});

const opportunityCreateSchema = opportunitySchema.omit({ id: true });

const opportunityUpdateSchema = opportunitySchema.partial();

type TOpportunityCreate = z.infer<typeof opportunityCreateSchema>;

type TOpportunityUpdate = z.infer<typeof opportunityUpdateSchema>;

type TOpportunity = z.infer<typeof opportunitySchema>;

export {
  opportunitySchema,
  opportunityCreateSchema,
  opportunityUpdateSchema,
  TOpportunity,
  TOpportunityCreate,
  TOpportunityUpdate,
};
