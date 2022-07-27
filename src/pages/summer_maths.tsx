import { useState } from "react";
import { Button, Center, css, Flex, Link, Text, Image } from "@chakra-ui/react";
import useTimer from "../utils/maths/timer";
import { ch1_info } from "../../public/SummerMaths/Ch1/info";

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

type showState = showingQuestions | showingAnswers | showingPaused;

interface showingQuestions {
  questions: true;
  answers?: false;
  paused?: false;
}

interface showingAnswers {
  questions?: false;
  answers: true;
  paused?: false;
}

interface showingPaused {
  questions?: false;
  answers?: false;
  paused: true;
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
  const [curQuestions, setCurQuestions] = useState<question[]>(getQuestions());
  const [showState, setShowState] = useState<showState>({ paused: true });
  const Timer = useTimer();
  const maxTime = 60 * 60;

  const PauseScreen = (
    <Center w={"100%"} h={"100vh"} flexDir={"column"}>
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
        <Flex px={3} py={2}>
          <Link href={"/"}>Alfie Ranstead</Link>
          <Text mx={5}>Time Left: {timeParser(maxTime - Timer.time)}</Text>
        </Flex>
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
                <Image src={question.q} alt={question.name + "question"} />
              </Center>
              <Center
                hidden={!showState.answers}
                flexDir={"column"}
                flexWrap={"wrap"}
              >
                <Text fontSize={"md"}>Answer</Text>
                <Image src={question.a} alt={question.name + "answer"} />
              </Center>
            </Center>
          </Center>
        ))}
      </Center>
    </Flex>
  );

  if (showState.questions || showState.answers) return mainScreen;
  else if (showState.paused) return PauseScreen;
  else
    return (
      <Center w="100%" h={"100vh"}>
        <Text>An Error has Occurred :(</Text>
      </Center>
    );
};
export default SummerMaths;
