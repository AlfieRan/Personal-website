import { Center } from "@chakra-ui/react";
import Menu from "../components/Windowed Version (Desktop)/menu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import About_Window from "../components/Windowed Version (Desktop)/subPages/about";
import Programming from "../components/Windowed Version (Desktop)/subPages/programming";
import Projects from "../components/Windowed Version (Desktop)/subPages/projects";
import sleep from "../utils/sleep";
import { fadeIn, fadeOut } from "../utils/transitions/fader";
import { useRouter } from "next/router";
import ContentCreation_Window from "../components/Windowed Version (Desktop)/subPages/contentCreation";
import Education_Window from "../components/Windowed Version (Desktop)/subPages/education";
import useMode from "../utils/hooks/useMode";
import Contact_Scrolling from "../components/Scrolling Version (Mobile)/Contact";

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
  const router = useRouter();
  const mode = useMode();
  const States = {
    about: <About_Window />,
    programming: <Programming />,
    projects: <Projects />,
    content: <ContentCreation_Window />,
    education: <Education_Window />,
    contact: <Contact_Scrolling />,
  };

  useEffect(() => {
    if (mode === "mobile") {
      router.push("/mobile").catch((err) => {
        console.log(err);
      });
    }
  }, [mode]);

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
    <Center w={"100vw"} h={"100vh"} p={3} overscrollBehavior={"none"}>
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
          overflowY={"hidden"}
          overflowX={"hidden"}
          h={"100%"}
          p={"10px"}
        >
          {States[active]}
        </Center>
      </Center>
    </Center>
  );
};

export default Index;
