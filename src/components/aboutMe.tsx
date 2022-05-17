import { AspectRatio, Center, Image, Text } from "@chakra-ui/react";
import calcDif from "../utils/calcTime";

const AboutMe = () => (
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
        <Text fontSize={"4xl"}>About Me</Text>
        <Text my={2}>
          I&apos;m a passionate computer scientist who has strong interests in
          mathematical and logical thinking, and I&apos;m always looking to
          learn new things.
        </Text>
        <Text my={2}>
          I&apos;ve been tinkering with computers for as long as I can remember,
          and I&apos;m interested in most things related to them.
        </Text>
        <Text my={2}>
          I&apos;ve been programming for the past {calcDif(2015, 11, 24)} years,
          creating videos on Youtube for {calcDif(2017, 4, 13)} years, and have
          been making little circuits and gadgets for {calcDif(2014, 2, 11)}{" "}
          years.
        </Text>
      </Center>
      <AspectRatio ratio={1} maxW={"80vw"} w={"lg"}>
        <Image
          src={"me.jpeg"}
          objectFit={"cover"}
          borderRadius={"full"}
          alt={"A photo of me"}
        />
      </AspectRatio>
    </Center>
  </>
);

export default AboutMe;
