import { Center, Collapse, Flex, Link, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import calcDif from "../../utils/calcTime";
import Intro from "./Intro";
import Projects from "./Projects";
import Technologies from "./Technologies";
import getGithubInfo from "../../utils/github";
import { githubInfo } from "../../utils/types";
import GithubLogo from "../githubLogo";

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
        scrollSnapAlign={"center"}
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
          isExternal
          w={"md"}
          h={"lg"}
          bg={"#252323"}
          href={"https://github.com/alfieran"}
          borderRadius={"xl"}
          _hover={{ bg: "#2d2d2d" }}
          _active={{ bg: "#1a1a1a" }}
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
              <GithubLogo />
            </Flex>
            <Center
              hidden={githubInfo === null}
              flexDir={"column"}
              alignItems={"center"}
              textAlign={"center"}
              w={"full"}
              h={"full"}
              px={5}
              fontSize={"lg"}
            >
              <Flex mb={5} alignContent={"center"}>
                <Text pr={2} fontSize={"2xl"} verticalAlign={"top"}>
                  Github
                </Text>
                <Center>
                  <GithubLogo size={"32"} />
                </Center>
              </Flex>
              <Image
                src={githubInfo?.avatar_url ?? ""}
                w={"3xs"}
                borderRadius={"full"}
              />
              <Text fontSize={"3xl"}>{githubInfo?.username}</Text>
              <Text>
                On Github I have a total of{" "}
                {(githubInfo?.private_repos ?? 0) +
                  (githubInfo?.public_repos ?? 0)}{" "}
                repositories, {githubInfo?.public_repos ?? 0} of which are
                public.
              </Text>
              <Text>
                I have {githubInfo?.followers ?? 0} followers and am currently
                following {githubInfo?.following ?? 0} people!
              </Text>
            </Center>
          </Center>
        </Link>
      </Center>
    </>
  );
};

export default Programming;
