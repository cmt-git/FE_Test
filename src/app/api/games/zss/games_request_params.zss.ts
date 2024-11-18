import { z } from "zod";

export const GamesRequestParamsZodSchema = z.object({
  name: z.string().max(64),
});
