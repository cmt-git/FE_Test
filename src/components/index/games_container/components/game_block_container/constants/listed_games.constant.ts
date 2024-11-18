import { GameProvidersType } from "@/components/common/popup/components/game_providers/types/game_providers.type";
import { ListedGamesInterface } from "./interfaces/listed_games.interface";

/**
 *
 *
 * SPACE
 *
 *
 */

// ? This is mock data only
// ? genre is set automatically in games/route.ts

//region: ListGamesConstant
export const ListedGamesConstant: Record<
  GameProvidersType["Key"],
  // ? For demo purposes, there are no templates made for this.
  // ? In an actual scenario, all of this would be different and not the same
  ListedGamesInterface[]
> = {
  /**
   *
   * SPACE
   */
  //region: Every Matrix
  every_matrix: [
    {
      name: "anaconda wild 2",
      img_name: "anaconda-wild-2",
      category: "bingo",
    },
    {
      name: "aztec bonus lines",
      img_name: "aztec-bonus-lines",
      category: "live",
    },
    {
      name: "big bad wolf",
      img_name: "big-bad-wolf",
      category: "slots",
    },
    {
      name: "crocodile blitz xtreme fb",
      img_name: "crocodile-blitz-xtreme-fb",
      category: "table_games",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Evolution
  evolution: [
    {
      name: "inca jackpot",
      img_name: "inca-jackpot",
      category: "jackpots",
    },
    {
      name: "maya jackpot",
      img_name: "maya-jackpot",
      category: "jackpots",
    },
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "live",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Expanse
  expanse: [
    {
      name: "shaolin crew",
      img_name: "shaolin-crew",
      category: "table_games",
    },
    {
      name: "sugar rush",
      img_name: "sugar-rush",
      category: "new",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Ezugi
  ezugi: [
    {
      name: "big bad wolf",
      img_name: "big-bad-wolf",
      category: "slots",
    },
    {
      name: "beach life",
      img_name: "beach-life",
      category: "search",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Gameart
  gameart: [
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "live",
    },
    {
      name: "inca jackpot",
      img_name: "inca-jackpot",
      category: "jackpots",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Habanero
  habanero: [
    {
      name: "aztec bonus lines",
      img_name: "aztec-bonus-lines",
      category: "slots",
    },
    {
      name: "book of egypt",
      img_name: "book-of-egypt",
      category: "live",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Hacksaw Gaming
  hacksaw_gaming: [
    {
      name: "big bad wolf",
      img_name: "big-bad-wolf",
      category: "new",
    },
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "jackpots",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Inbet Games
  inbet_games: [
    {
      name: "pride of persia",
      img_name: "pride-of-persia",
      category: "table_games",
    },
    {
      name: "maya jackpot",
      img_name: "maya-jackpot",
      category: "jackpots",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: M Play
  m_play: [
    {
      name: "inca jackpot",
      img_name: "inca-jackpot",
      category: "jackpots",
    },
    {
      name: "shaolin crew",
      img_name: "shaolin-crew",
      category: "table_games",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Netent
  netent: [
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "live",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: PG Gamestop
  pg_gamestop: [
    {
      name: "big bad wolf",
      img_name: "big-bad-wolf",
      category: "search",
    },
    {
      name: "sugar rush",
      img_name: "sugar-rush",
      category: "new",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Play n Go
  play_n_go: [
    {
      name: "aztec bonus lines",
      img_name: "aztec-bonus-lines",
      category: "live",
    },
    {
      name: "beach life",
      img_name: "beach-life",
      category: "search",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Pragmatic Play
  pragmatic_play: [
    {
      name: "inca jackpot",
      img_name: "inca-jackpot",
      category: "jackpots",
    },
    {
      name: "maya jackpot",
      img_name: "maya-jackpot",
      category: "jackpots",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Pragmatic Play 2
  pragmatic_play_2: [
    {
      name: "book of egypt",
      img_name: "book-of-egypt",
      category: "slots",
    },
    {
      name: "sugar rush",
      img_name: "sugar-rush",
      category: "new",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Playson
  playson: [
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "live",
    },
    {
      name: "pride of persia",
      img_name: "pride-of-persia",
      category: "table_games",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Playtech
  playtech: [
    {
      name: "big bad wolf",
      img_name: "big-bad-wolf",
      category: "new",
    },
    {
      name: "shaolin crew",
      img_name: "shaolin-crew",
      category: "table_games",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Red Tiger
  red_tiger: [
    {
      name: "aztec bonus lines",
      img_name: "aztec-bonus-lines",
      category: "live",
    },
    {
      name: "pirates power",
      img_name: "pirates-power",
      category: "jackpots",
    },
  ],

  /**
   *
   * SPACE
   */
  //region: Relax Gaming
  relax_gaming: [
    {
      name: "book of egypt",
      img_name: "book-of-egypt",
      category: "slots",
    },
    {
      name: "inca jackpot",
      img_name: "inca-jackpot",
      category: "jackpots",
    },
  ],
};
