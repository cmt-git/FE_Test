"use client";

import { ComponentType, ReactElement, useEffect, useState } from "react";
import { SearchBar } from "../search_bar/search_bar.component";
import { CategoryTabOptionsConstant } from "./constants/category_tab_options.constant";
import { CategoryTabGetColor } from "./functions/category_tab_get_color.function";
import { CategoryTabUtilsType } from "./types/category_tab_utils.type";
import { GamesContainerCategoriesLink } from "../games_container/games_container.component";

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Tab
export function CategoryTab() {
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] =
    useState<keyof Omit<typeof CategoryTabOptionsConstant, "search">>("start");

  /**
   *
   *
   * SPACE
   *
   *
   */

  useEffect(() => {
    GamesContainerCategoriesLink(currentCategory);
  }, [currentCategory]);

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
      <div className="max-w-full h-fit bg-white pl-2 sticky top-[50px] flex-none flex items-center justify-evenly">
        <CategoryTabContainer
          type={"search"}
          key={0}
          onClick={() => {
            setSearchEnabled(!searchEnabled);
          }}
          condition={searchEnabled}
        />
        <div className="block w-[1px] h-[30px] bg-fun88lightgrey" />
        <div className="flex items-center gap-1 overflow-x-auto overflow-y-hidden hide-scrollbar snap-proximity snap-x">
          {Object.keys(CategoryTabOptionsConstant).map((key: string, index) => {
            const current_key = key as CategoryTabUtilsType["Key"];

            // ? No need to put search here.
            if (current_key == "search") {
              return;
            }

            return (
              <CategoryTabContainer
                // ? +1 here because of the search tab container above \
                // ? (<CategoryTabContainer type={"search"}...)
                key={index + 1}
                type={current_key}
                condition={currentCategory == current_key}
                onClick={() => {
                  setCurrentCategory(current_key);
                }}
              />
            );
          })}
        </div>
      </div>
      {searchEnabled && <SearchBar />}
    </>
  );
}

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Tab Container
function CategoryTabContainer(_props: {
  type: CategoryTabUtilsType["Key"];
  onClick: () => void;
  condition: boolean;
}) {
  const selected_category = CategoryTabOptionsConstant[_props.type];

  return (
    <button
      className=" py-1 px-2 rounded-md w-auto flex flex-col gap-0 items-center px-auto snap-start"
      onClick={() => _props.onClick()}
    >
      <selected_category.logo color={_props.condition ? `primary` : "grey"} />
      <span
        className={`flex-1 text-sm uppercase w-auto text-nowrap decoration-[1.5px] ${CategoryTabGetColor(
          _props.condition ? "primary" : "grey"
        )} ${
          _props.condition
            ? "underline underline-offset-2 underline-primary"
            : ""
        }`}
      >
        {selected_category.title}
      </span>
    </button>
  );
}
