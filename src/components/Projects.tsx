import { Center, Flex, Text } from "@chakra-ui/react";
import SingleProject from "./extra/singleProject";

const Projects = () => (
  <>
    <Center w={"100vw"} flexDir={"column"}>
      <Text fontSize={"3xl"} mb={5}>
        Here are a few of my past projects:
      </Text>
      <Flex>
        <SingleProject
          title={"Project title"}
          info={"Project info"}
          image={"me.jpeg"}
          link={"www.google.com"}
        />
      </Flex>
    </Center>
  </>
);

export default Projects;
