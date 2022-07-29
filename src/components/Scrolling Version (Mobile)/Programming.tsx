import {
  Center,
  Flex,
  Link,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import GithubLogo from "../extra/githubLogo";
import calcDif from "../../utils/calcTime";
import { techCategories } from "../../utils/tech";
import githubInfo from "../../utils/hooks/useGithub";
import fadeBetween from "../../utils/transitions/colours";

const Programming_Scrolling = () => {
  const githubData = githubInfo();
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
            {techCategories.map((type, id) => (
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
                        type.list.length,
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
              <Flex mb={"5px"}>
                <Text fontSize={"2xl"}>Check out my github here :)</Text>
              </Flex>
              <GithubLogo size={"128"} />
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
                src={githubData?.avatar_url ?? ""}
                w={"250px"}
                borderRadius={"full"}
                alt={"github avatar"}
              />
              <Text fontSize={"3xl"}>{githubData?.username}</Text>
              <Text hidden={githubData?.public_repos !== 0 && !githubData}>
                {(githubData?.private_repos ?? 0) +
                  (githubData?.public_repos ?? 0)}{" "}
                repositories, {githubData?.public_repos ?? 0} public.
              </Text>
              <Text hidden={githubData?.followers !== 0 && !githubData}>
                {githubData?.followers ?? 0} followers and following{" "}
                {githubData?.following ?? 0}
              </Text>
            </Center>
          </Center>
        </Link>
      </Center>
    </>
  );
};

export default Programming_Scrolling;
