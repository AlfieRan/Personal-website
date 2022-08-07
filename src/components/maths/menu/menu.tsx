import { Center } from "@chakra-ui/react";
import Loading from "./loading";
import StartScreen from "./startScreen";
import { StateManager } from "../../../utils/types/types";
import { menuState, showState } from "../../../utils/types/mathsTypes";
import ChapterSelection from "./chapterSelection";
import { useEffect, useState } from "react";

const Menu = (props: {
    stateManager: StateManager<showState>;
    state: showState;
}) => {
    const [menuState, setMenuState] = useState<menuState>(
        props.state.mode === "menu" ? props.state.scene : "loading"
    );

    useEffect(() => {
        if (menuState !== props.state.scene) {
            props.stateManager({
                mode: "menu",
                scene: menuState,
            });
        }
    }, [menuState]);

    return (
        <Center w={"100%"} h={"100%"} flexDir={"column"}>
            {menuState === "loading" ? (
                <Loading />
            ) : menuState === "starting" ? (
                <StartScreen setMode={setMenuState} mode={menuState} />
            ) : menuState === "chapters" ? (
                <ChapterSelection setMode={setMenuState} />
            ) : undefined}
        </Center>
    );
};

export default Menu;
