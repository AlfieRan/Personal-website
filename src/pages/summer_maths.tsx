import { useEffect, useState } from "react";
import { Center, css, Link, Text } from "@chakra-ui/react";
import useTimer from "../utils/time/timer";
import { ch1_info } from "../../public/SummerMaths/Ch1/info";
import useAWS from "../utils/hooks/mathTool/useAWS";
import { chapter, question, showState } from "../utils/types/mathsTypes";
import Menu from "../components/maths/menu/menu";
import Main from "../components/maths/main/main";

const Questions: chapter[] = [ch1_info];

function getQuestions() {
    const newQuestions: question[] = [];
    for (let i = 0; i < Math.min(10, Questions.length); i++) {
        const index = Math.floor(Math.random() * Questions.length);
        const subIndex = Math.floor(
            Math.random() * Questions[index].questions.length
        );
        newQuestions.push({
            ...Questions[index].questions[subIndex],
            name: `${Questions[index].name} ${Questions[index].questions[subIndex].name}`,
        });
    }
    return newQuestions;
}

const SummerMaths = () => {
    const info = useAWS();
    const [curQuestions, setCurQuestions] = useState<question[]>(
        getQuestions()
    );
    const [showState, setShowState] = useState<showState>({
        mode: "menu",
        scene: "loading",
    });
    const Timer = useTimer();
    const maxTime = 60 * 60;

    useEffect(() => {
        if (info === undefined) {
            setShowState({ mode: "menu", scene: "loading" });
        } else {
            setShowState({ mode: "menu", scene: "starting" });
            console.log(info);
        }
    }, [info]);

    const ErrorScreen = (
        <Center w="100%" h={"100vh"}>
            <Text>An Error has Occurred :(</Text>
        </Center>
    );

    return (
        <Center w={"100%"} h={"95vh"} flexDir={"column"}>
            <Link href={"/"} mb={"10px"}>
                Alfie Ranstead
            </Link>
            {showState.mode === "menu" ? (
                <Menu stateManager={setShowState} />
            ) : showState.mode === "main" ? (
                <Main />
            ) : (
                ErrorScreen
            )}
        </Center>
    );
};
export default SummerMaths;
