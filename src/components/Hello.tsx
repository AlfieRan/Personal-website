import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import sleep from "../utils/sleep";
import language_data from "../utils/language_data";
import { fadeIn, fadeOut } from "../utils/fader";

async function swapText(
  ms: number,
  setOpacity: Dispatch<SetStateAction<number>>,
  setText: Dispatch<SetStateAction<string>>,
  setLanguageText: Dispatch<SetStateAction<string>>,
  listItem: number,
  list: { language: string; data: string }[]
) {
  await fadeOut(ms, setOpacity);
  sleep(ms / 2);
  setText(list[listItem].data);
  setLanguageText(list[listItem].language);
  await fadeIn(ms, setOpacity);
  sleep(ms / 2);

  swapText(
    ms,
    setOpacity,
    setText,
    setLanguageText,
    Math.floor(Math.random() * list.length),
    list
  );
  return true;
}

const Hello = (props: { hidden?: boolean }) => {
  const [centerText, setCenterText] = useState<string>("Hello");
  const [languageText, setLanguageText] = useState<string>("English");
  const [Opacity, setOpacity] = useState<number>(100);
  const changeTime = 1000;

  useEffect(() => {
    swapText(
      changeTime,
      setOpacity,
      setCenterText,
      setLanguageText,
      Math.floor(Math.random() * language_data.length),
      language_data
    );
  }, []);

  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"100vw"} h={"100vh"} opacity={`${Opacity}%`}>
      <Box h={"10vh"}></Box>
      <Center h={"80vh"} w={"100vw"} flexDir={"column"}>
        <Text fontSize={"6xl"}>{centerText}</Text>
        <Text fontSize={"xl"} textAlign={"right"} p={3}>
          {languageText}
        </Text>
      </Center>
      <Center h={"10vh"} w={"100vw"}>
        <Text>Click Anywhere</Text>
      </Center>
    </Box>
  );
};
export default Hello;
