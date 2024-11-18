import { ListedGamesZodSchema } from "@/components/index/games_container/components/game_block_container/constants/interfaces/zss/listed_games.zss";
import { z } from "zod";

export const GamesReturnParamsZodSchema = z.object({
  games: z.array(ListedGamesZodSchema),
});
