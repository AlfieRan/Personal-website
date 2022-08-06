import { AspectRatio, Center, Image, Text } from "@chakra-ui/react";

const AboutMe_Scrolling = () => (
  <>
    <Center
      minH={"80vh"}
      flexWrap={"wrap"}
      textAlign={"center"}
      px={"lg"}
      py={"lg"}
      mt={"10vh"}
    >
      <Center mx={10} mt={5} flexDir={"column"} w={"xl"} fontSize={"md"}>
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
          I&apos;ve been programming since I was 9 years old, started creating
          videos not long after my 10th Birthday, and have been making little
          circuits and electronic gadgets since I was 8!
        </Text>
      </Center>
      <AspectRatio ratio={1} w={["2xs", "xs", "sm", "md"]}>
        <Image
          src={"/me/me in france.jpg"}
          objectFit={"cover"}
          borderRadius={"full"}
          alt={"A photo of me"}
        />
      </AspectRatio>
    </Center>
  </>
);

export default AboutMe_Scrolling;
