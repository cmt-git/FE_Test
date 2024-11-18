import { NextRequest, NextResponse } from "next/server";
import { ResponseTemplateProps } from "../common/functions/response_template/interfaces/response_template_props.interface";
import { APIHandler } from "../common/functions/api_handler/api_handler.function";
import { ResponseTemplate } from "../common/functions/response_template/response_template.function";
import { GamesRequestParamsZodSchema } from "./zss/games_request_params.zss";
import { APIHandlerError } from "../common/functions/api_handler/functions/api_handler_error.function";
import { GetZodErrorMessage } from "@/common/functions/get_zod_error_message.function";
import { z } from "zod";
import { GamesReturnParamsZodSchema } from "./zss/games_return_params.zss";
import { ListedGamesConstant } from "@/components/index/games_container/components/game_block_container/constants/listed_games.constant";
import { findClosestMatches } from "./functions/find_closest_match";

// ? l = local
type l_ReturnType = z.infer<typeof GamesReturnParamsZodSchema>;

/**
 *
 *
 * SPACE
 *
 *
 */

export async function POST(
  req: NextRequest
): Promise<NextResponse<ResponseTemplateProps<l_ReturnType>>> {
  return await APIHandler(async () => {
    const request_schema = GamesRequestParamsZodSchema;

    const request_parse = request_schema.safeParse(await req.json());

    if (!request_parse.success) {
      throw APIHandlerError({
        success: false,
        output: GetZodErrorMessage(request_parse.error.format()),
      });
    }

    const current_name = request_parse.data.name;
    const all_games = Object.keys(ListedGamesConstant)
      .map((key) => {
        const current_key = key as keyof typeof ListedGamesConstant;
        const current_data = ListedGamesConstant[current_key];
        const data = Object.values(current_data).map((value) => ({
          ...value,
          genre: current_key,
        }));
        return data;
      })
      .flat();
    const all_game_names = all_games.map((value) => value.name);

    if (current_name.length == 0) {
      return ResponseTemplate<l_ReturnType>({
        success: true,
        data: {
          games: all_games,
        },
      });
    } else {
      const closest_matches = new Set(
        findClosestMatches(current_name, all_game_names)
      );

      const filteredGames = all_games.filter((game) =>
        closest_matches.has(game.name)
      );

      return ResponseTemplate<l_ReturnType>({
        success: true,
        data: {
          games: filteredGames,
        },
      });
    }

    return ResponseTemplate<l_ReturnType>({
      success: false,
    });
  });
}
