import { GameProvidersConstant } from "../constants/game_providers.constants";

type l_Key = keyof typeof GameProvidersConstant;

export type GameProvidersType = {
  Key: l_Key;
  KeyArr: l_Key[];
};
