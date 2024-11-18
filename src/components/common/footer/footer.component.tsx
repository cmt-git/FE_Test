"use client";

import { ReactNode, useState } from "react";
import { FooterOptionsConstant } from "./constants/footer_options.constant";
import { FooterIconType } from "./types/footer.type";
import { CategoryTabGetColor } from "@/components/index/category_tab/functions/category_tab_get_color.function";

type FooterOptionKey = keyof typeof FooterOptionsConstant;

//region: Footer
export function Footer() {
  const [currentOption, setCurrentOption] = useState<FooterOptionKey>("sports");

  /**
   *
   *
   * SPACE
   *
   *
   */

  //region: --- Return
  return (
    <footer className="sticky bottom-0 w-full h-[60px] bg-white flex-none flex items-center justify-evenly">
      {Object.keys(FooterOptionsConstant).map((value, index) => {
        const current_key = value as FooterOptionKey;
        return (
          <FooterButtonContainer
            key={index}
            type={current_key}
            selected={currentOption == current_key}
            onClick={(r) => setCurrentOption(r)}
          />
        );
      })}
    </footer>
  );
}

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Footer Button Container
function FooterButtonContainer(_props: {
  type: keyof typeof FooterOptionsConstant;
  onClick: (k: FooterOptionKey) => void;
  selected: FooterIconType["Props"]["selected"];
}) {
  const current_option = FooterOptionsConstant[_props.type];

  const SVGContainer = (_data: {
    children: ReactNode;
    selected: FooterIconType["Props"]["selected"];
  }) => (
    <>
      {_data.selected ? (
        <div className="p-1.5 aspect-square flex items-center justify-center bg-[url(/svg/active-border.svg)] bg-no-repeat bg-center bg-cover text-primary">
          {_data.children}
        </div>
      ) : (
        <div className="p-1.5 aspect-square flex items-center justify-center text-fun88grey">
          {_data.children}
        </div>
      )}
    </>
  );

  return (
    <button
      className="py-1 px-2 rounded-md flex flex-col gap-0 items-center px-auto"
      onClick={() => _props.onClick(_props.type)}
    >
      <SVGContainer selected={_props.selected}>
        <current_option.logo selected={false} />
      </SVGContainer>
      <span
        className={`${CategoryTabGetColor(
          _props.selected ? "primary" : "grey"
        )} text-sm w-full text-wrap line-clamp-1 truncate overflow-hidden uppercase`}
      >
        {current_option.title}
      </span>
    </button>
  );
}
