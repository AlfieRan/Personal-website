import { Center, Flex, ScaleFade } from "@chakra-ui/react";
import Menu from "../components/July22Version/menu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import About from "../components/July22Version/subPages/about";
import Programming from "../components/July22Version/subPages/programming";
import Projects from "../components/July22Version/subPages/projects";
import sleep from "../utils/sleep";
import { fadeIn, fadeOut } from "../utils/fader";

export type stateTypes =
  | "about"
  | "programming"
  | "projects"
  | "content"
  | "education"
  | "contact";
export type activeState = Dispatch<SetStateAction<stateTypes>>;

function parseOpacity(opacity: number): number {
  return 1 + (opacity - 100) / 2500;
}

const Index = () => {
  const [active, setActive] = useState<stateTypes>("about");
  const [next, setNext] = useState<stateTypes>("about");
  const [opacity, setOpacity] = useState<number>(100);
  const States = {
    about: <About />,
    programming: <Programming />,
    projects: <Projects />,
    content: <div>Content Creation</div>,
    education: <div>Education</div>,
    contact: <div>Contact</div>,
  };

  useEffect(() => {
    const transition = async () => {
      if (next === active) return;
      const aim = 400;
      console.time("transition");
      await fadeOut(aim / 3, setOpacity);
      await sleep(aim / 6);
      setActive(next);
      await sleep(aim / 6);
      await fadeIn(aim / 3, setOpacity);
      console.timeEnd("transition");
      console.log("transition aim was:", aim);
    };

    transition().catch((err) => {
      console.log(err);
    });
  }, [next]);

  return (
    <Center w={"100vw"} h={"100vh"} p={3}>
      <Menu setState={setNext} />
      <Center
        maxW={"80%"}
        minW={"60%"}
        w={"full"}
        h={"100%"}
        borderWidth={1}
        borderRightRadius={"lg"}
        borderLeftWidth={0.5}
      >
        <Center
          opacity={`${opacity}%`}
          transform={`scale(${parseOpacity(opacity)})`}
        >
          {States[active]}
        </Center>
      </Center>
    </Center>
  );
};

export default Index;
