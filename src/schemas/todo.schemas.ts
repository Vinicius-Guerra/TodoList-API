import { z } from "zod";

export const todoSchema = z.object({
   id: z.number().positive(),
   title: z.string().min(1),
   content: z.string().min(1),
   createdAt: z.date(),
   updatedAt: z.date().optional(),
});


export const todoCreateBodySchema = todoSchema.pick({
   title: true,
   content: true,
});



export const todoUpdateBodySchema = todoSchema
   .pick({
      title: true,
      content: true,
   })
   .partial();