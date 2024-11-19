"use client";

import { useState } from "react";
import { GameProviders } from "./components/game_providers/game_providers.component";

export let PopupShowLink: React.Dispatch<React.SetStateAction<boolean>>;

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Popup
export function Popup() {
  const duration: number = 100;
  const [show, setShow] = useState<boolean>(false);

  PopupShowLink = setShow;

  //region: --- Return
  return (
    <div
      className={`${
        show
          ? "bg-black/50 pointer-events-auto"
          : "bg-black/0 pointer-events-none"
      } w-screen fixed top-0 left-0 overflow-y-auto overflow-x-hidden transition-all duration-[${duration}ms] ease-in h-screen max-h-screen opacity-100 z-[99]`}
    >
      {" "}
      <div
        className={`${
          show ? "pointer-events-auto" : "pointer-events-none"
        } z-0 top-0 absolute w-screen h-screen bg-transparent`}
        onClick={() => setShow(false)}
      />
      <div
        className={`${
          show ? "translate-y-0" : "translate-y-full"
        } relative z-10 transition-all duration-[${duration}ms] delay-75 ease-in-out`}
      >
        <GameProviders onClose={() => setShow(false)} />
      </div>
    </div>
  );
}
