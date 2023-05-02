import { AspectRatio, Center, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const About_Window = () => (
    <Center
        w={"100%"}
        minW={"100%"}
        h={"100%"}
        textAlign={"center"}
        fontSize={"md"}
        p={"5px"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
    >
        <Text fontSize={"40px"} mb={"20px"}>
            Hi, I&apos;m Alfie Ranstead!
        </Text>
        <AspectRatio
            minW={"250px"}
            maxW={"800px"}
            w={"100%"}
            mb={"20px"}
            maxH={"300px"}
            overflow={"hidden"}
            borderRadius={"lg"}
        >
            <Image
                layout={"fill"}
                src={"/me/me in france.jpg"}
                objectFit={"cover"}
                objectPosition={"0 60%"}
                alt={"A photo of me on holiday in france"}
            />
        </AspectRatio>
        <Flex flexDir={"column"} maxW={"600px"} mr={"15px"} fontSize={"sm"}>
            <Text my={2} fontSize={"lg"}>
                I&apos;m a passionate computer scientist who has strong
                interests in mathematical and logical thinking, and I&apos;m
                always looking to learn new things.
            </Text>
            <Text my={2}>
                I&apos;ve been tinkering with computers for as long as I can
                remember, and I&apos;m interested in most things related to
                them.
            </Text>
            <Text my={2}>
                I&apos;ve been programming since I was 9 years old, started
                creating videos not long after my 10th Birthday, and have been
                making little circuits and electronic gadgets since I was 8!
            </Text>
        </Flex>
    </Center>
);

export default About_Window;