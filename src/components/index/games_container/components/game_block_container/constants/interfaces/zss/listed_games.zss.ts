import { GameProviderKeys } from "@/components/common/popup/components/game_providers/constants/constants/game_provider_keys.constant";
import { CategoryTabOptionsKeysConstant } from "@/components/index/category_tab/constants/constants/category_tab_options_keys.constant";
import { z } from "zod";

export const ListedGamesZodSchema = z.object({
  name: z.string(),
  img_name: z.string(),
  genre: z.enum(GameProviderKeys).optional(),
  category: z.enum(CategoryTabOptionsKeysConstant),
});
