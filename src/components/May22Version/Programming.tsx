import {
  Center,
  Flex,
  Link,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getGithubInfo from "../../utils/github";
import { githubInfo } from "../../utils/types";
import GithubLogo from "../extra/githubLogo";
import calcDif from "../../utils/calcTime";

const Programming = () => {
  const [githubInfo, setGithubInfo] = useState<githubInfo>(null);
  const TechUsing: string[] = [
    "TypeScript",
    "Python",
    "NodeJS",
    "React",
    "NextJS",
    "ChakraUI",
    "Express",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "Docker",
    "V lang",
    "Monorepos",
    "C#",
  ];
  const TechLearning: string[] = ["Kubernetes", "x86 Assembly", "C"];
  const techStuff = [
    {
      name: "Technologies I use:",
      list: TechUsing,
      colours: ["#367375", "#594596"],
    },
    {
      name: "Technologies I'm learning:",
      list: TechLearning,
      colours: ["#8f5126", "#7a7a2c"],
    },
  ];

  useEffect(() => {
    getGithubInfo().then((info) => {
      setGithubInfo(info);
    });
  }, []);

  return (
    <>
      <Center mt={"10vh"} flexWrap={"wrap"} px={"lg"} minH={"100vh"}>
        <Flex
          flexDir={"column"}
          textAlign={"left"}
          mx={10}
          my={5}
          maxW={"85vw"}
        >
          <Flex
            mb={5}
            flexDir={"column"}
            w={"xl"}
            fontSize={"md"}
            maxW={"85vw"}
          >
            <Text fontSize={"4xl"}>Programming</Text>
            <Text mb={2}>
              I started my programming journey with an arduino nano, an old
              laptop and a lot of creativity.
            </Text>
            <Text mb={2}>
              In the ~{calcDif(2014, 8, 0)} years that I&apos;ve been
              programming a lot has changed, I&apos;ve learned a lot and
              I&apos;ve moved from arduino and a little bit of C to a myriad of
              technologies.
            </Text>
          </Flex>
          <Flex flexDir={"column"} fontSize={"sm"} maxW={"85vw"}>
            {techStuff.map((type, id) => (
              <Flex key={id} flexDir={"column"} maxW={"85vw"}>
                <Text fontSize={"2xl"}>{type.name}</Text>
                <Grid
                  gridTemplateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                  ]}
                  mb={4}
                >
                  {type.list.map((tech, id) => (
                    <GridItem
                      bg={fadeBetween(
                        type.colours[0],
                        type.colours[1],
                        TechUsing.length,
                        id
                      )}
                      p={1}
                      borderRadius={"md"}
                      m={1}
                      textAlign={"center"}
                      key={tech}
                    >
                      <Text>{tech}</Text>
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Link
          maxW={"90vw"}
          isExternal
          p={4}
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
                w={"4xs"}
                borderRadius={"full"}
                alt={"github avatar"}
              />
              <Text fontSize={"3xl"}>{githubInfo?.username}</Text>
              <Text hidden={githubInfo?.public_repos !== 0 && !githubInfo}>
                {(githubInfo?.private_repos ?? 0) +
                  (githubInfo?.public_repos ?? 0)}{" "}
                repositories, {githubInfo?.public_repos ?? 0} public.
              </Text>
              <Text hidden={githubInfo?.followers !== 0 && !githubInfo}>
                {githubInfo?.followers ?? 0} followers and following{" "}
                {githubInfo?.following ?? 0}
              </Text>
            </Center>
          </Center>
        </Link>
      </Center>
    </>
  );
};

export default Programming;

function fadeBetween(
  colourA: string,
  colourB: string,
  steps: number,
  step: number
): string {
  const stepRatio = step / steps;
  let result = "#";
  for (let i = 1; i < 4; i++) {
    result += getNewFadeValue(stepRatio, colourA, colourB, i).toString(16);
  }
  return result;
}

function getNewFadeValue(
  stepRatio: number,
  colourA: string,
  colourB: string,
  step: number
): number {
  const dblStep = step * 2;
  return Math.floor(
    parseInt(colourA.substring(dblStep - 1, dblStep + 1), 16) *
      (1 - stepRatio) +
      parseInt(colourB.substring(dblStep - 1, dblStep + 1), 16) * stepRatio
  );
}
