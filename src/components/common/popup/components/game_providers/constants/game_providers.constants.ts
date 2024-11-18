/**
 *
 *
 *
 *
 *
 */

import { GameProviderKeys } from "./constants/game_provider_keys.constant";

//region: Game Providers Constant
export const GameProvidersConstant: Record<
  (typeof GameProviderKeys)[number],
  {
    acronym: string;
  }
> = {
  every_matrix: {
    acronym: "EM",
  },
  evolution: {
    acronym: "EVO",
  },
  expanse: {
    acronym: "EXPANSE",
  },
  ezugi: {
    acronym: "EZG",
  },
  gameart: {
    acronym: "GAMEART",
  },
  habanero: {
    acronym: "HAB",
  },
  hacksaw_gaming: {
    acronym: "HACKSAW",
  },
  inbet_games: {
    acronym: "INBET",
  },
  m_play: {
    acronym: "MPLAY",
  },
  netent: {
    acronym: "NETENT",
  },
  pg_gamestop: {
    acronym: "PGSOFT",
  },
  play_n_go: {
    acronym: "PNG",
  },
  pragmatic_play: {
    acronym: "PP",
  },
  pragmatic_play_2: {
    acronym: "PRAGMATICPLAY",
  },
  playson: {
    acronym: "PS",
  },
  playtech: {
    acronym: "PT",
  },
  red_tiger: {
    acronym: "REDTIGER",
  },
  relax_gaming: {
    acronym: "RELAX",
  },
};
