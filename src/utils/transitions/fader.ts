import { Dispatch, SetStateAction } from "react";
import sleep from "../sleep";

export async function fadeIn(
  ms: number,
  setOpacity: Dispatch<SetStateAction<number>>
) {
  console.time("fadeIn");
  const perShade = ms / 120;
  const multiplier = multiplierCalc(perShade);

  for (let i = 0; i < 101; i += multiplier) {
    setOpacity(i);
    await sleep(perShade * multiplier);
  }

  setOpacity(100);
  console.timeEnd("fadeIn");
  console.log("fadein aim:", ms);
}

export async function fadeOut(
  ms: number,
  setOpacity: Dispatch<SetStateAction<number>>
) {
  const perShade = ms / 100;
  const multiplier = multiplierCalc(perShade);

  for (let i = 0; i < 101; i += multiplier) {
    setOpacity(100 - i);
    await sleep(perShade * multiplier);
  }
  setOpacity(0);
}

function multiplierCalc(ms: number): number {
  return ms < 3 ? ms * 2 : ms < 6 ? ms : ms < 15 ? ms / 2 : 1;
}
