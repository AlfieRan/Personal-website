import { Dispatch, SetStateAction } from "react";

export type dictType_Math = {
    chapters: {
        name: string;
        questions: { name: string; path: string }[];
        enabled?: boolean;
    }[];
};

export type chapter = {
    name: string;
    questions: question[];
};

export type question = {
    q: string;
    a: string;
    name: string;
    marks: number;
};

export type showState =
    | {
          mode: "main";
          scene: mainState;
      }
    | {
          mode: "menu";
          scene: menuState;
      }
    | {
          mode: "error";
          scene: undefined;
      };

export type mainState = "questions" | "answers" | "paused";
export type menuState = "starting" | "loading" | "chapters";
