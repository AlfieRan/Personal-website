import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { timeParser } from "../../../utils/time/parser";
import { useState } from "react";
import { question, showState } from "../../../utils/types/mathsTypes";
import useTimer from "../../../utils/time/timer";
import PlainButton from "../extra/button";
import { StateManager } from "../../../utils/types/types";
import getQuestions from "../../../utils/getQuestions";

const Main = (props: {
    setState: StateManager<showState>;
    state: showState;
}) => {
    const [curQuestions, setCurQuestions] = useState<question[]>(
        getQuestions()
    );
    const Timer = useTimer();
    Timer.Start();
    const maxTime = 60 * 60;

    return (
        <Flex w={"100%"} p={2} flexDir={"column"}>
            <Flex
                w={"100%"}
                flexDir={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                wrap={"wrap"}
                mb={5}
            >
                <Text mx={5}>
                    Time Left: {timeParser(maxTime - Timer.time)}
                </Text>
                <Flex alignItems={"center"} py={2}>
                    <PlainButton
                        contents={"Pause"}
                        fn={() => {
                            Timer.Pause();
                            props.setState({ scene: "paused", mode: "main" });
                        }}
                    />
                    <PlainButton
                        contents={"End"}
                        fn={() => {
                            props.setState({ scene: "answers", mode: "main" });
                        }}
                    />
                </Flex>
            </Flex>
            <Center w={"100%"} p={"lg"}>
                {curQuestions.map((question, idx) => (
                    <Center flexDir={"column"} key={idx}>
                        <Text>{question.name}</Text>
                        <Center flexDir={"row"} flexWrap={"wrap"}>
                            <Center flexDir={"column"} flexWrap={"wrap"}>
                                <Text fontSize={"md"}>Question</Text>
                                <Image
                                    src={question.q}
                                    alt={question.name + "question"}
                                />
                            </Center>
                            <Center
                                hidden={!(props.state.scene === "answers")}
                                flexDir={"column"}
                                flexWrap={"wrap"}
                            >
                                <Text fontSize={"md"}>Answer</Text>
                                <Image
                                    src={question.a}
                                    alt={question.name + "answer"}
                                />
                            </Center>
                        </Center>
                    </Center>
                ))}
            </Center>
        </Flex>
    );
};

export default Main;
