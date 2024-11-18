import { BingoIconSVG } from "../components/bingo_icon_svg.component";
import { JackpotsIconSVG } from "../components/jackpots_icon_svg.component";
import { LiveIconSVG } from "../components/live_icon_svg.component";
import { NewIconSVG } from "../components/new_icon_svg.component";
import { OthersIconSVG } from "../components/others_icon_svg.component";
import { SearchIconSVG } from "../components/search_icon_svg.component";
import { SlotsIconSVG } from "../components/slots_icon_svg.component";
import { StartIconSVG } from "../components/start_icon_svg.component";
import { TableGamesSVG } from "../components/table_games_svg.component";
import { CategoryIconType } from "../types/category_tab.type";
import { CategoryTabOptionsKeysConstant } from "./constants/category_tab_options_keys.constant";

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Tab Options Constant
export const CategoryTabOptionsConstant: Record<
  (typeof CategoryTabOptionsKeysConstant)[number],
  {
    logo: CategoryIconType["FC"];
    title: string;
  }
> = {
  search: {
    logo: SearchIconSVG,
    title: "Search",
  },
  start: {
    logo: StartIconSVG,
    title: "Start",
  },
  new: {
    logo: NewIconSVG,
    title: "New",
  },
  slots: {
    logo: SlotsIconSVG,
    title: "slots",
  },
  live: {
    logo: LiveIconSVG,
    title: "live",
  },
  jackpots: {
    logo: JackpotsIconSVG,
    title: "jackpots",
  },
  table_games: {
    logo: TableGamesSVG,
    title: "Table Games",
  },
  bingo: {
    logo: BingoIconSVG,
    title: "Bingo",
  },
  others: {
    logo: OthersIconSVG,
    title: "Others",
  },
} as const;
