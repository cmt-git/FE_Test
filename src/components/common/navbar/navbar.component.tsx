import { CommonImage } from "../common_image/common_image.component";

//region: Navbar
export function Navbar() {
  const common_button_class = "py-1 px-2 rounded-md";
  /*
   *
   *
   * SPACE
   *
   *
   */

  //region: --- Return
  return (
    <div className="z-50 h-[50px] w-full sticky top-0 flex justify-between px-2 shadow-md bg-white">
      <div className="flex-1 flex items-center justify-start gap-1">
        <button className={common_button_class}>
          <CommonImage className="h-4 w-4" type="svg" fileName="menu" />
        </button>
        <CommonImage className="h-5 w-auto" type="svg" fileName="fun_88" />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex gap-2 items-center">
          <CommonImage
            className="h-[18px] w-[18px] -mt-1"
            type="svg"
            fileName="wallet"
          />
          <b className="text-base text-primary">$1,990.6</b>
          <CommonImage
            className="h-[34px] w-auto"
            type="svg"
            fileName="divider"
          />
        </div>
        <button className={common_button_class}>
          <CommonImage className="h-6 w-6" type="svg" fileName="user" />
        </button>
      </div>
    </div>
  );
}
