import { Center, Flex, Link, Text } from "@chakra-ui/react";
import { ContentStats, wrapData } from "../../../utils/data/content_creation";
import Image from "next/image";

const ContentCreation_Window = () => {
    return (
        <Center flexDir={"column"} w={"100%"}>
            <Link
                href={
                    "https://www.youtube.com/c/UnoFedeo/videos?view=0&sort=p&flow=grid"
                }
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                _active={{ bg: "rgba(0,0,0,0.1)" }}
                py={"10px"}
                px={"20px"}
                borderRadius={"4px"}
                w={"100%"}
                mb={"10px"}
                maxW={"700px"}
                maxH={"150px"}
                isExternal
            >
                <Flex
                    flexDir={"row"}
                    w={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Flex
                        mr={3}
                        rounded={"md"}
                        w={"fit-content"}
                        minW={"100px"}
                        pos={"relative"}
                    >
                        <Flex
                            w={"fit-content"}
                            h={"fit-content"}
                            rounded={"full"}
                            overflow={"hidden"}
                        >
                            <Image
                                src={"/unofedeo.jpg"}
                                width={"100px"}
                                height={"100px"}
                            />
                        </Flex>
                    </Flex>
                    <Flex flexDir={"column"} w={"full"}>
                        <Text>Uno Fedeo</Text>
                        <Flex
                            flexDir={"row"}
                            w={"100%"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Text fontSize={"2xl"} fontWeight={"semibold"}>
                                {wrapData(ContentStats.views)} Views
                            </Text>
                            <Text fontSize={"2xl"} fontWeight={"semibold"}>
                                {wrapData(ContentStats.subscribers)} Subscribers
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Link>
            <Flex
                flexDir={"column"}
                px={"20px"}
                py={"10px"}
                w={"lg"}
                maxW={"90%"}
                fontSize={"sm"}
            >
                <Text mt={2}>
                    I&apos;ve been working on videos since the age of 10, when I
                    first edited together a series of mini clips I took of
                    myself and my family on holiday and I&apos;ve been hooked
                    ever since.
                </Text>
                <Text mt={2}>
                    Since then I&apos;ve created approximately 100 videos across
                    a handful of youtube channels and other places and my work
                    has been viewed over 1.5 million times.
                </Text>
                <Text mt={2}>
                    If you wish to sponsor a video or have any questions please
                    contact me at{" "}
                    <Link href={"mailto:uno.fedeo@gmail.com"}>
                        uno.fedeo@gmail.com
                    </Link>
                </Text>
            </Flex>
        </Center>
    );
};

export default ContentCreation_Window;
