import { AspectRatio, Center, Image, Text, Flex } from "@chakra-ui/react";

const About = () => (
  <Center w={"100%"} h={"100%"} textAlign={"center"} fontSize={"md"} p={"5px"}>
    <Flex flexDir={"column"} maxW={"600px"} mr={"15px"}>
      <Text fontSize={"4xl"}>About Me</Text>
      <Text my={2}>
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
    <AspectRatio ratio={2 / 3} minW={"250px"}>
      <Image
        src={"/me/me_in_car.png"}
        objectFit={"cover"}
        borderRadius={"xl"}
        alt={"A photo of me"}
        w={"full"}
      />
    </AspectRatio>
  </Center>
);

export default About;
