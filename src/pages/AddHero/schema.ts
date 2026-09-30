import { z } from "zod";

export const heroSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  fullName: z.string().optional(),
  intelligence: z.coerce.number().min(1).max(100),
  strength: z.coerce.number().min(1).max(100),
  speed: z.coerce.number().min(1).max(100),
  durability: z.coerce.number().min(1).max(100),
  power: z.coerce.number().min(1).max(100),
  combat: z.coerce.number().min(1).max(100),
  alignment: z.enum(["good", "bad"]),
  gender: z.enum(["male", "female", "-"]),
  aliases: z.array(z.string()).optional(),
});

export type HeroFormData = z.infer<typeof heroSchema>;