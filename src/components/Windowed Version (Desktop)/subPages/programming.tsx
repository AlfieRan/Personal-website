import {
    AspectRatio,
    Center,
    Flex,
    Grid,
    GridItem,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { techCategories } from "../../../utils/data/tech";
import githubInfo from "../../../utils/hooks/useGithub";
import calcDif from "../../../utils/time/calcTime";
import GithubLogo from "../../extra/githubLogo";
import fadeBetween from "../../../utils/transitions/colours";

const Programming_Window = () => {
    const githubData = githubInfo();
    return (
        <Center px={"lg"} flexDir={"column"}>
            <Flex
                flexDir={"column"}
                textAlign={"left"}
                maxW={"85vw"}
                mx={"15px"}
            >
                <Flex
                    mb={5}
                    flexDir={"column"}
                    w={"xl"}
                    fontSize={"sm"}
                    maxW={"85vw"}
                >
                    <Text fontSize={"2xl"}>Programming</Text>
                    <Text mb={2}>
                        I started my programming journey with an arduino nano,
                        an old laptop and a lot of creativity.
                    </Text>
                    <Text mb={2}>
                        In the ~{calcDif(2014, 8, 0)} years that I&apos;ve been
                        programming a lot has changed, I&apos;ve learned a lot
                        and I&apos;ve moved from arduino and a little bit of C
                        to a myriad of technologies.
                    </Text>
                </Flex>
                <Flex flexDir={"column"} fontSize={"xs"} maxW={"85vw"}>
                    {techCategories.map((type, id) => (
                        <Flex key={id} flexDir={"column"} maxW={"85vw"}>
                            <Text fontSize={"2xl"}>{type.name}</Text>
                            <Grid
                                gridTemplateColumns={[
                                    "repeat(2, 1fr)",
                                    "repeat(3, 1fr)",
                                    "repeat(4, 1fr)",
                                    "repeat(5, 1fr)",
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
                                        p={"5px"}
                                        borderRadius={"md"}
                                        m={"5px"}
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
                isExternal
                px={"5px"}
                py={"10px"}
                bg={"#252323"}
                href={"https://github.com/alfieran"}
                borderRadius={"xl"}
                _hover={{ bg: "#2d2d2d" }}
                _active={{ bg: "#1a1a1a" }}
                w={"full"}
                maxW={"600px"}
                mt={"20px"}
            >
                <Center w={"full"} h={"full"} justifyContent={"space-between"}>
                    <Flex
                        hidden={githubInfo !== null}
                        flexDir={"row"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        w={"full"}
                        h={"full"}
                    >
                        <Text fontSize={"lg"}>Check out my github here :)</Text>
                        <Flex alignItems={"center"}>
                            <GithubLogo size={"48"} />
                            <Text fontSize={"md"} mx={"10px"}>
                                AlfieRan
                            </Text>
                        </Flex>
                    </Flex>
                    <Center
                        hidden={githubInfo === null}
                        flexDir={"row"}
                        alignItems={"center"}
                        textAlign={"center"}
                        w={"full"}
                        h={"full"}
                        fontSize={"sm"}
                    >
                        <AspectRatio ratio={1} minW={"100px"} mr={"30px"}>
                            <Image
                                src={githubData?.avatar_url ?? ""}
                                w={"4xs"}
                                borderRadius={"full"}
                                alt={"github avatar"}
                            />
                        </AspectRatio>
                        <Flex flexDir={"column"}>
                            <Center flexDir={"row"}>
                                <Text fontSize={"2xl"} mr={"10px"}>
                                    {githubData?.username}
                                </Text>
                                <Center>
                                    <GithubLogo size={"32"} />
                                </Center>
                            </Center>
                            <Text
                                hidden={
                                    githubData?.public_repos !== 0 &&
                                    !githubData
                                }
                            >
                                {(githubData?.private_repos ?? 0) +
                                    (githubData?.public_repos ?? 0)}{" "}
                                repositories, {githubData?.public_repos ?? 0}{" "}
                                public.
                            </Text>
                            <Text
                                hidden={
                                    githubData?.followers !== 0 && !githubData
                                }
                            >
                                {githubData?.followers ?? 0} followers and
                                following {githubData?.following ?? 0}
                            </Text>
                        </Flex>
                    </Center>
                </Center>
            </Link>
        </Center>
    );
};

export default Programming_Window;
