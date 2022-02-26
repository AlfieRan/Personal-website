import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import MainPage from "../components/MainPage";
import { fadeIn } from "../utils/fader";

const page = () => {
  const [hasRunIntro, setHasRunIntro] = useState<boolean>(false);
  const [showMain, setShowMain] = useState<boolean>(false);
  const [globalOpacity, setGlobalOpacity] = useState<number>(100);

  useEffect(() => {
    if (hasRunIntro) {
      setGlobalOpacity(0);
      setShowMain(true);
      fadeIn(1000, setGlobalOpacity);
    }
  }, [hasRunIntro]);

  return (
    <Box w={"100vw"} h={"100vh"} opacity={`${globalOpacity}%`}>
      <Intro hidden={hasRunIntro} introController={setHasRunIntro} />
      <MainPage hidden={!showMain} />
    </Box>
  );
};

export default page;
