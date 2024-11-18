import { CommonImage } from "@/components/common/common_image/common_image.component";
import { FilterIconSVG } from "@/components/index/search_bar/component/filter_icon_svg.component";
import { GameProvidersConstant } from "./constants/game_providers.constants";
import { useEffect, useState } from "react";
import { GameProvidersType } from "./types/game_providers.type";
import { GamesContainerFiltersLink } from "@/components/index/games_container/games_container.component";

//ring-2 ring-primary
// region: Game Providers
export function GameProviders(_props: { onClose: () => void }) {
  const [selected, setSelected] = useState<GameProvidersType["KeyArr"]>([]);

  useEffect(() => {
    GamesContainerFiltersLink(selected);
  }, [selected]);

  /**
   *
   *
   * SPACE
   *
   *
   */

  return (
    <div className="relative h-fit w-full min-h-[calc(100vh-144px)] bg-white mt-36 pb-5 transition-all duration-300 delay-75 ease-in-out translate-y-0">
      <div className="px-3 py-2 flex items-center justify-between bg-primary sticky top-0 text-white">
        <div className="flex items-center gap-2">
          <FilterIconSVG className="size-6" color="white" />
          <span className="text-base">Game Provider</span>
          <span className="px-3 py-auto rounded-full ring-1 ring-white text-sm">
            {Object.keys(GameProvidersConstant).length}
          </span>
        </div>
        <button
          className="py-1 px-2 rounded-md"
          onClick={() => _props.onClose()}
        >
          <CommonImage type="svg" fileName="close" className="size-4" />
        </button>
      </div>
      <div className="w-full grid grid-cols-2 items-center justify-center gap-3 p-3">
        {Object.keys(GameProvidersConstant).map((key, index) => {
          const current_key = key as GameProvidersType["Key"];
          const current_game_provider = GameProvidersConstant[current_key];
          const condition = selected.includes(current_key);

          return (
            <button
              key={index}
              className={`${
                condition ? "ring-2 ring-primary" : ""
              } py-1 px-2 rounded-md h-[60px] flex items-center justify-center bg-[#F2F2FA]`}
              onClick={() => {
                if (!condition) {
                  setSelected((v) => [...v, current_key]);
                } else {
                  setSelected((v) => v.filter((v2) => v2 != current_key));
                }
              }}
            >
              <CommonImage
                type="png"
                fileName={current_game_provider.acronym}
                className=""
                width={100}
                height={20}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
