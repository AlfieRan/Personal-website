import { AspectRatio, Center, Flex, Image, Text } from "@chakra-ui/react";

const Education = () => (
  <>
    <Center w={"100vw"} minH={"100vh"} flexDir={"column"}>
      <Flex flexDir={"row"} maxW={"80vw"} flexWrap={"wrap"}>
        <Center flexDir={"column"} w={"lg"}>
          <Text fontSize={"3xl"}>Education</Text>
          <Text fontSize={"lg"}>
            I am currently attending a Grammar Sixth form in South West England
            where I am completing my A-Levels.
            <br />
            The specific A-Levels I am studying are: Maths, Further Maths,
            Physics and Computer Science.
            <br />I travel just under an hour everyday to get to my Sixth form
            which includes a ~30 minute train journey (pictured right).
          </Text>
        </Center>
        <Center m={3}>
          <AspectRatio ratio={4 / 3} minW={"30vw"}>
            <Image
              src={"train_station.jpeg"}
              borderRadius={"lg"}
              alt={
                "A picture of the train station I go to every morning to get to college"
              }
            />
          </AspectRatio>
        </Center>
      </Flex>
    </Center>
  </>
);

export default Education;
