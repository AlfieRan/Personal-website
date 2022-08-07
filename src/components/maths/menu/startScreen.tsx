import { Center } from "@chakra-ui/react";
import PlainButton from "../extra/button";
import { useState } from "react";
import ChapterSelection from "./chapterSelection";
import { menuState, showState } from "../../../utils/types/mathsTypes";
import { StateManager } from "../../../utils/types/types";

const StartScreen = (props: {
    setMode: StateManager<showState>;
    mode: menuState;
}) => (
    <Center
        textAlign={"center"}
        maxW={"600px"}
        minW={"200px"}
        w={"90%"}
        h={"100%"}
        mt={"10%"}
        flexDir={"column"}
    >
        <PlainButton
            contents={"Start"}
            fn={() => {
                props.setMode({ scene: "questions", mode: "main" });
            }}
        />
        <PlainButton
            contents={"Choose Chapters"}
            fn={() => {
                props.setMode({ scene: "chapters", mode: "menu" });
            }}
        />
    </Center>
);

export default StartScreen;
