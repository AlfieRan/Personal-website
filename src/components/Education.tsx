import {AspectRatio, Center, Flex, Image, Text, Stack, Box} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Education = () => {
  const [width, setWidth] = useState(1000);
  const breakpoint = 600;
  const [imageSize, setImageSize] = useState<number>(200);


  return (
      <Center  minH={"100vh"} flexDir={"column"}>
        <Stack direction={["column", "column","column", "row"]} w={"80vw"} spacing={8} h={"full"} alignItems={"center"}>
          <Center flexDir={"column"} flex={1} maxW={"lg"} alignSelf={"center"} h={"full"}>
            <Text fontSize={"3xl"}>Education</Text>
            <Text fontSize={"lg"}>
              I am currently attending a Grammar Sixth form in South West
              England where I am completing my A-Levels.
              <br />
              The specific A-Levels I am studying are: Maths, Further Maths,
              Physics and Computer Science.
              <br />I travel just under an hour everyday to get to my Sixth form
              which includes a ~30 minute train journey (pictured).
            </Text>
          </Center>
            <AspectRatio ratio={4 / 3} maxW={"70vw"}flex={1.25} h={"full"} w={"inherit"}>
              <Image
                src={"train_station.png"}
                borderRadius={"lg"}
                alt={
                  "A picture of the train station I go to every morning to get to college"
                }
              />
            </AspectRatio>
        </Stack>
      </Center>
  );
};

export default Education;
