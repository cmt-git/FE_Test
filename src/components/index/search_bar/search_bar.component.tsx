import { PopupShowLink } from "@/components/common/popup/popup.component";
import { SearchIconSVG } from "../category_tab/components/search_icon_svg.component";
import { FilterIconSVG } from "./component/filter_icon_svg.component";
import { GamesContainerNameLink } from "../games_container/games_container.component";

let value: string = "";

//region: Search Bar
export function SearchBar() {
  return (
    <div className="flex gap-3 w-full px-4 py-2 sticky top-[98px] bg-white">
      <div className="flex-1 flex gap-1 pl-3 h-fit ring-1 ring-primary rounded-md items-center">
        <SearchIconSVG color={"grey"} />
        <input
          placeholder="Search games"
          className="w-full h-full flex-1 px-2 py-2 rounded-l-none rounded-r-md focus:outline-none focus:ring-0 focus:ring-transparent focus:border-primary"
          type="search"
          name="search"
          onChange={(e) => {
            value = e.target.value ?? "";
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(value);
              GamesContainerNameLink(value);
            }
          }}
        />
      </div>
      <button
        className=" py-1 px-2 rounded-md flex-none ring-1 ring-tertiary"
        onClick={() => PopupShowLink(true)}
      >
        <FilterIconSVG className="size-5" color="grey" />
      </button>
    </div>
  );
}
