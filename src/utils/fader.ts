import { Dispatch, SetStateAction } from "react";
import sleep from "./sleep";

export async function fadeIn(
  ms: number,
  setOpacity: Dispatch<SetStateAction<number>>
) {
  const perShade = ms / 100;
  for (let i = 0; i < 101; i++) {
    setOpacity(i);
    await sleep(perShade);
  }
  return true;
}

export async function fadeOut(
  ms: number,
  setOpacity: Dispatch<SetStateAction<number>>
) {
  const perShade = ms / 100;
  for (let i = 0; i < 101; i++) {
    setOpacity(100 - i);
    await sleep(perShade);
  }
}
