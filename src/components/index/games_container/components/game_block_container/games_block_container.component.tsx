import { CommonImage } from "@/components/common/common_image/common_image.component";
import { GameBlockContainerRateBlock } from "./components/game_block_container_rate_block.component";
import { GameProvidersType } from "@/components/common/popup/components/game_providers/types/game_providers.type";
import { GameProvidersConstant } from "@/components/common/popup/components/game_providers/constants/game_providers.constants";
import { ListedGamesInterface } from "./constants/interfaces/listed_games.interface";
import { CategoryTabOptionsConstant } from "@/components/index/category_tab/constants/category_tab_options.constant";

export function GamesBlockContainer(_props: {
  type: GameProvidersType["Key"];
  img_name: ListedGamesInterface["img_name"];
  category: ListedGamesInterface["category"];
}) {
  const current_game_provider = GameProvidersConstant[_props.type];
  const category = CategoryTabOptionsConstant[_props.category];

  return (
    <div className="relative grid w-full h-auto aspect-square rounded-md overflow-hidden bg-gray-300 pl-0 pr-0 pt-0 pb-0">
      <CommonImage
        type="png"
        fileName={_props.img_name}
        className="col-start-1 row-start-1 w-full h-full bg-cover"
        size={512}
        loadingPlaceholder={true}
      />
      <GameBlockContainerRateBlock />
      <div className="absolute bottom-2 right-2 flex gap-3 justify-center items-center h-7">
        <div className=" bg-black/30 px-2 h-full rounded-full">
          <CommonImage
            fileName={current_game_provider.acronym}
            type="png"
            className="opacity-100"
            width={50}
            height={10}
          />
        </div>
        <div className="bg-black/30 px-2 h-full rounded-full flex justify-center items-center">
          <category.logo color="white" />
        </div>
      </div>
    </div>
  );
}
