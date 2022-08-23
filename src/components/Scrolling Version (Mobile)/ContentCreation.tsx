import { AspectRatio, Center, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const ContentCreation_Scrolling = () => (
    <>
        <Center minH={"100vh"} flexWrap={"wrap"} mt={"10vh"}>
            <Flex
                flexDir={"column"}
                p={10}
                w={"lg"}
                maxW={"90vw"}
                fontSize={"md"}
            >
                <Text fontSize={"4xl"}>Content Creation</Text>
                <Text>
                    I&apos;m a very creative person. So creative in fact that I
                    tend to be limited more by what I can do than what I can
                    imagine.
                </Text>
                <Text mt={2}>
                    But that hasn&apos;t stopped me from trying and one of the
                    best creative outputs I&apos;ve found for myself apart from
                    programming is the art of video creation.
                </Text>
                <Text mt={2}>
                    I&apos;ve been working on videos since the age of 10, when I
                    first edited together a series of mini clips I took of
                    myself and my family during a trip to Spain and I&apos;ve
                    been hooked ever since.
                </Text>
                <Text mt={2}>
                    Since then I&apos;ve created approximately 100 videos across
                    a handful of youtube channels and private family videos and
                    my work has been viewed over 1.5 million times.
                </Text>
                <Text mt={2}>
                    I hope to continue to create videos that are both
                    entertaining and artistically fascinating far into the
                    future.
                </Text>
                <Text mt={2}>
                    If you wish to sponsor a video or have any questions please
                    contact me at{" "}
                    <Link href={"mailto:uno.fedeo@gmail.com"}>
                        uno.fedeo@gmail.com
                    </Link>
                </Text>
            </Flex>
            <Flex flexDir={"column"}>
                <Text fontWeight={"semibold"}>A few videos from Uno Fedeo</Text>
                <Flex
                    w={"xl"}
                    wrap={"wrap"}
                    justifyContent={"space-around"}
                    maxW={"90vw"}
                >
                    <AspectRatio m={1} w={"2xs"}>
                        <Image
                            src={"/content/CrabGame.png"}
                            layout={"fill"}
                            alt={"Crab Game Video"}
                        />
                    </AspectRatio>
                    <AspectRatio m={1} w={"2xs"}>
                        <Image
                            src={"/content/MuckUpdate.png"}
                            layout={"fill"}
                            alt={"A Muck Update Video"}
                        />
                    </AspectRatio>
                    <AspectRatio m={1} w={"2xs"}>
                        <Image
                            src={"/content/CrabGameUpdate.png"}
                            layout={"fill"}
                            alt={"A Crab Game Update Video"}
                        />
                    </AspectRatio>
                </Flex>
            </Flex>
        </Center>
    </>
);

export default ContentCreation_Scrolling;
