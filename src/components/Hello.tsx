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
  sleep(ms / 10);
  setText(list[listItem].data);
  setLanguageText(list[listItem].language);
  await fadeIn(ms, setOpacity);
  sleep(ms / 10);

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
  const changeTime = 2000;

  useEffect(() => {
    swapText(
      changeTime,
      setOpacity,
      setCenterText,
      setLanguageText,
      0,
      language_data
    );
  }, []);

  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"100vw"} h={"100vh"} opacity={`${Opacity}%`}>
      <Box h={"10vh"}></Box>
      <Center h={"80vh"} w={"100vw"}>
        <Text fontSize={"6xl"}>{centerText}</Text>
      </Center>
      <Flex h={"10vh"} w={"100vw"}>
        <Box alignSelf={"flex-end"} w={"100vw"} p={5}>
          <Text fontSize={"xl"} textAlign={"right"}>
            {languageText}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default Hello;
