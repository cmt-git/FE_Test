"use client";

import React, { useEffect, useState } from "react";
import { ListedGamesConstant } from "./components/game_block_container/constants/listed_games.constant";
import { GamesBlockContainer } from "./components/game_block_container/games_block_container.component";
import { GameProvidersType } from "@/components/common/popup/components/game_providers/types/game_providers.type";
import { ListedGamesInterface } from "./components/game_block_container/constants/interfaces/listed_games.interface";
import { AxiosPost } from "@/common/clients/axios/functions/axios_post.function";
import { z } from "zod";
import { GamesRequestParamsZodSchema } from "@/app/api/games/zss/games_request_params.zss";
import { GamesReturnParamsZodSchema } from "@/app/api/games/zss/games_return_params.zss";
import { CategoryTabUtilsType } from "../category_tab/types/category_tab_utils.type";

type l_CategoryTabKeyType =
  | Exclude<CategoryTabUtilsType["Key"], "search">
  | undefined;

export let GamesContainerNameLink: React.Dispatch<React.SetStateAction<string>>;
export let GamesContainerFiltersLink: React.Dispatch<
  React.SetStateAction<GameProvidersType["KeyArr"]>
>;
export let GamesContainerCategoriesLink: React.Dispatch<
  React.SetStateAction<l_CategoryTabKeyType>
>;

//region: Games Container
export function GamesContainer() {
  const [name, setName] = useState<string>("");
  GamesContainerNameLink = setName;

  const [filters, setFilters] = useState<GameProvidersType["KeyArr"]>([]);
  GamesContainerFiltersLink = setFilters;

  const [categories, setCategories] = useState<l_CategoryTabKeyType>(undefined);
  GamesContainerCategoriesLink = setCategories;

  const [data, setData] = useState<ListedGamesInterface[] | undefined>(
    undefined
  );
  /**
   *
   *
   * SPACE
   *
   *
   */

  useEffect(() => {
    (async () => {
      const response = await AxiosPost<
        z.infer<typeof GamesRequestParamsZodSchema>
      >({
        name: name,
      }).i<z.infer<typeof GamesReturnParamsZodSchema>>("/games", {
        "Content-Type": "application/json",
      });

      if (!response?.success || !response.data) {
        return;
      }

      setData([...response.data?.games]);
    })();
  }, [name]);

  /**
   *
   *
   * SPACE
   *
   *
   */

  //region: --- Return
  return (
    <>
      {(() => {
        if (data === undefined) {
          return (
            <p className="w-full p-5 text-center text-tertiary">Loading</p>
          );
        }

        const new_data = data?.filter((value) => {
          if (!value.genre) {
            return;
          }

          const current_key = value.genre;
          if (filters.length > 0 && !filters.includes(current_key)) {
            return;
          }

          if (
            categories &&
            categories != "start" &&
            categories != value.category
          ) {
            return;
          }

          return value;
        });

        if (!new_data || new_data?.length == 0) {
          return (
            <p className="w-full p-5 text-center text-tertiary">
              No Games Found
            </p>
          );
        }

        return (
          <div className="grid grid-cols-3 px-3 py-4 gap-3 w-full">
            {new_data?.map((value, index) => {
              const current_key = value.genre as GameProvidersType["Key"];

              return (
                <GamesBlockContainer
                  key={current_key + index}
                  type={current_key}
                  {...value}
                />
              );
            })}
          </div>
        );
      })()}
    </>
  );
}
