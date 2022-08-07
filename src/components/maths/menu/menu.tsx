import { Center } from "@chakra-ui/react";
import Loading from "./loading";
import StartScreen from "./startScreen";
import { StateManager } from "../../../utils/types/types";
import { showState } from "../../../utils/types/mathsTypes";
import ChapterSelection from "./chapterSelection";

const Menu = (props: {
    stateManager: StateManager<showState>;
    state: showState;
}) => (
    <Center w={"100%"} h={"100%"} flexDir={"column"}>
        {props.state.scene === "loading" ? (
            <Loading />
        ) : props.state.scene === "starting" ? (
            <StartScreen
                setMode={props.stateManager}
                mode={props.state.scene}
            />
        ) : props.state.scene === "chapters" ? (
            <ChapterSelection setMode={props.stateManager} />
        ) : undefined}
    </Center>
);

export default Menu;
