import { Center, Text } from "@chakra-ui/react";
import { timeParser } from "../../../utils/time/parser";
import PlainButton from "../extra/button";
import { Timer } from "../../../utils/time/timer";
import { mainState } from "../../../utils/types/mathsTypes";
import { StateManager } from "../../../utils/types/types";

const PauseScreen = (props: {
    maxTime: number;
    Timer: Timer;
    stateManager: StateManager<mainState>;
}) => {
    return (
        <Center w={"100%"} h={"100%"} flexDir={"column"}>
            <Text fontSize={"2xl"}>Paused</Text>
            <Text>
                Time left: {timeParser(props.maxTime - props.Timer.time)}
            </Text>
            <PlainButton
                contents={"Resume"}
                fn={() => {
                    props.stateManager("questions");
                    props.Timer.Start();
                }}
            />
        </Center>
    );
};

export default PauseScreen;
