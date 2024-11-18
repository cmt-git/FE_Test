import { z } from "zod";
import { ListedGamesZodSchema } from "./zss/listed_games.zss";

export interface ListedGamesInterface
  extends z.infer<typeof ListedGamesZodSchema> {}
