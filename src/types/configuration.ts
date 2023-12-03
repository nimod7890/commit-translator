import { z } from "zod";

export const configurationSchema = z.object({
  deepl: z.object({
    apiKey: z.string().optional(),
    targetLanguage: z.string().optional(),
  }),
});

export type Configuration = z.infer<typeof configurationSchema>;
