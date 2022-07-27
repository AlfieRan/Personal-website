import { AspectRatio, Center, Image, Text, Flex, Box } from "@chakra-ui/react";

const About_Window = () => (
  <Center
    w={"100%"}
    h={"100%"}
    textAlign={"center"}
    fontSize={"md"}
    p={"5px"}
    flexDir={"column"}
  >
    <Text fontSize={"40px"} mb={"20px"}>
      Hi, I&apos;m Alfie Ranstead!
    </Text>
    <AspectRatio
      minW={"250px"}
      maxW={"800px"}
      w={"100%"}
      mb={"20px"}
      maxH={"250px"}
      overflow={"hidden"}
    >
      <Image
        src={"/me/me_in_car.png"}
        objectFit={"cover"}
        objectPosition={"0 35%"}
        borderRadius={"xl"}
        alt={"A photo of me in my car"}
        w={"full"}
      />
    </AspectRatio>
    <Flex flexDir={"column"} maxW={"600px"} mr={"15px"} fontSize={"sm"}>
      <Text my={2} fontSize={"lg"}>
        I&apos;m a passionate computer scientist who has strong interests in
        mathematical and logical thinking, and I&apos;m always looking to learn
        new things.
      </Text>
      <Text my={2}>
        I&apos;ve been tinkering with computers for as long as I can remember,
        and I&apos;m interested in most things related to them.
      </Text>
      <Text my={2}>
        I&apos;ve been programming since I was 9 years old, started creating
        videos not long after my 10th Birthday, and have been making little
        circuits and electronic gadgets since I was 8!
      </Text>
    </Flex>
  </Center>
);

export default About_Window;
