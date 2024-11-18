import { CashierIconSVG } from "../components/cashier_icon_svg.component";
import { CasinoLiveIconSVG } from "../components/casino_live_icon_svg.component";
import { FavoritesIconSVG } from "../components/favorites_icon_svg.component";
import { InviteIconSVG } from "../components/invite_icon_svg.component";
import { SportsIconSVG } from "../components/sports_icon_svg.component";
import { FooterIconType } from "../types/footer.type";

const footer_options_keys = [
  "sports",
  "favorites",
  "invite",
  "casino_live",
  "cashier",
] as const;

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Category Tab Options Constant
export const FooterOptionsConstant: Record<
  (typeof footer_options_keys)[number],
  {
    logo: FooterIconType["FC"];
    title: string;
  }
> = {
  sports: {
    logo: SportsIconSVG,
    title: "Sports",
  },
  favorites: {
    logo: FavoritesIconSVG,
    title: "Favorites",
  },
  invite: {
    logo: InviteIconSVG,
    title: "Invite",
  },
  casino_live: {
    logo: CasinoLiveIconSVG,
    title: "Casive Live",
  },
  cashier: {
    logo: CashierIconSVG,
    title: "Cashier",
  },
} as const;
