import { CategoryIconType } from "../types/category_tab.type";

export function CategoryTabGetColor(
  _color: CategoryIconType["Props"]["color"]
) {
  return _color == "primary"
    ? "text-primary"
    : _color == "white"
    ? "text-white"
    : "text-fun88grey";
}
