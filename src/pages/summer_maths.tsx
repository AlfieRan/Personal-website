import { useEffect, useState } from "react";
import { Button, Center, css, Flex, Link, Text, Image } from "@chakra-ui/react";
import useTimer from "../utils/time/timer";
import { ch1_info } from "../../public/SummerMaths/Ch1/info";
import useAWS from "../utils/hooks/mathTool/useAWS";

const Questions: chapter[] = [ch1_info];

type chapter = {
    name: string;
    questions: question[];
};

type question = {
    q: string;
    a: string;
    name: string;
    marks: number;
};

type showState =
    | showingQuestions
    | showingAnswers
    | showingPaused
    | showingStart;

interface showingStart {
    questions?: false;
    answers?: false;
    paused?: false;
    starting: true;
}

interface showingQuestions {
    questions: true;
    answers?: false;
    paused?: false;
    starting?: false;
}

interface showingAnswers {
    questions?: false;
    answers: true;
    paused?: false;
    starting?: false;
}

interface showingPaused {
    questions?: false;
    answers?: false;
    paused: true;
    starting?: false;
}

const basicButton = css({
    bg: "rgba(0,255,0,0.2)",
    _hover: { bg: "rgba(0,255,0,0.4)" },
    _active: { bg: "rgba(0,255,0,0.1)" },
});

function timeParser(seconds: number) {
    const secondsLeft = seconds % 60;
    return `${Math.floor(seconds / 60)}:${
        secondsLeft < 10 ? "0" : ""
    }${secondsLeft}`;
}

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
    const [loading, setLoading] = useState<boolean>(true);
    const [curQuestions, setCurQuestions] = useState<question[]>(
        getQuestions()
    );
    const [showState, setShowState] = useState<showState>({ starting: true });
    const Timer = useTimer();
    const maxTime = 60 * 60;

    useEffect(() => {
        if (info === undefined) {
            setLoading(true);
        } else {
            setLoading(false);
            console.log(info);
        }
    }, [info]);

    const loadingScreen_start = (
        <Center h={"100%"} w={"100%"} textAlign={"center"}>
            <Text>Loading...</Text>
        </Center>
    );
    const menuScreen_start = (
        <Flex
            textAlign={"center"}
            maxW={"600px"}
            minW={"200px"}
            w={"90%"}
            h={"100%"}
            mt={"10%"}
            flexDir={"column"}
        >
            <Text>Currently Supported Chapters are:</Text>
            <Flex flexDir={"column"} wrap={"wrap"} ml={"10px"}>
                {info?.chapters.map((chapter) => (
                    <Text key={chapter.name}>{chapter.name}</Text>
                ))}
            </Flex>
        </Flex>
    );

    const StartScreen = (
        <Center w={"100%"} h={"100%"} flexDir={"column"}>
            <Text>Start Screen</Text>
            {loading ? loadingScreen_start : menuScreen_start}
        </Center>
    );

    const PauseScreen = (
        <Center w={"100%"} h={"100%"} flexDir={"column"}>
            <Text fontSize={"2xl"}>Paused</Text>
            <Text>Time left: {timeParser(maxTime - Timer.time)}</Text>
            <Button
                css={basicButton}
                mt={5}
                onClick={() => {
                    setShowState({ questions: true });
                    Timer.start();
                }}
            >
                Resume
            </Button>
        </Center>
    );

    const mainScreen = (
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
                    <Button
                        css={basicButton}
                        mx={3}
                        onClick={() => {
                            Timer.pause();
                            setShowState({ paused: true });
                        }}
                    >
                        Pause
                    </Button>
                    <Button
                        css={basicButton}
                        mx={3}
                        onClick={() => {
                            setShowState({ answers: true });
                        }}
                    >
                        End
                    </Button>
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
                                hidden={!showState.answers}
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

    const errorScreen = (
        <Center w="100%" h={"100vh"}>
            <Text>An Error has Occurred :(</Text>
        </Center>
    );

    return (
        <Center w={"100%"} h={"95vh"} flexDir={"column"}>
            <Link href={"/"} mb={"10px"}>
                Alfie Ranstead
            </Link>
            {showState.starting
                ? StartScreen
                : showState.paused
                ? PauseScreen
                : showState.questions || showState.answers
                ? mainScreen
                : errorScreen}
        </Center>
    );
};
export default SummerMaths;
