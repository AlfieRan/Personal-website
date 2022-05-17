import { Center, Collapse, Flex, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import calcDif from "../../utils/calcTime";
import Intro from "./Intro";
import Projects from "./Projects";
import Technologies from "./Technologies";
import getGithubInfo from "../../utils/github";
import { githubInfo } from "../../utils/types";

const Programming = () => {
  const subSections: {
    name: string;
    title: string;
    main: (props: { hidden?: boolean }) => JSX.Element | null;
  }[] = [
    {
      name: "intro",
      title: `I Started Programming at Age 10, ${calcDif(
        2015,
        11,
        24
      )} years ago!`,
      main: Intro,
    },
    {
      name: "projects",
      title: "I've worked on loads of projects, here's a few of them!",
      main: Projects,
    },
    {
      name: "Technologies",
      title: "I love using and learning new technologies!",
      main: Technologies,
    },
  ];

  const [currentSection, setCurrentSection] = useState<string>("");
  const [githubInfo, setGithubInfo] = useState<githubInfo>(null);

  useEffect(() => {
    getGithubInfo().then((info) => {
      setGithubInfo(info);
    });
  }, []);

  return (
    <>
      <Center
        w={"100vw"}
        h={"100vh"}
        flexWrap={"wrap"}
        textAlign={"center"}
        px={"lg"}
        scrollSnapAlign={"start"}
      >
        <Center mx={10} my={5} flexDir={"column"} w={"xl"} fontSize={"xl"}>
          <Text fontSize={"4xl"}>Programming</Text>
          {subSections.map((section) => {
            const isCurrent = section.name === currentSection;
            return (
              <Flex
                key={section.name}
                flexDir={"column"}
                w={"full"}
                bg={"rgba(255,255,255,0.1)"}
                my={2}
                borderRadius={"xl"}
              >
                <Text
                  p={2}
                  fontSize={"2xl"}
                  onClick={() => {
                    if (!isCurrent) {
                      setCurrentSection(section.name);
                    } else {
                      setCurrentSection("");
                    }
                  }}
                  cursor={"pointer"}
                  color={isCurrent ? "blue.300" : "gray.300"}
                >
                  {section.title}
                </Text>
                <Collapse in={isCurrent} animateOpacity unmountOnExit>
                  <Flex bg={"rgba(0,0,0,0.25)"} p={2} borderBottomRadius={"xl"}>
                    <section.main />
                  </Flex>
                </Collapse>
              </Flex>
            );
          })}
        </Center>
        <Link
          w={"md"}
          h={"lg"}
          bg={"#252323"}
          href={"https://github.com/alfieran"}
          borderRadius={"xl"}
        >
          <Center w={"full"} h={"full"}>
            <Flex
              hidden={githubInfo !== null}
              flexDir={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              w={"full"}
              h={"full"}
            >
              <Text fontSize={"2xl"}>Check out my github here :)</Text>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="256"
                height={"256"}
                data-view-component="true"
                fill={"white"}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Flex>
          </Center>
        </Link>
      </Center>
    </>
  );
};

export default Programming;
