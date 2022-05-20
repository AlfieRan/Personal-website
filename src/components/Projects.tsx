import { Center, Flex, Text } from "@chakra-ui/react";
import SingleProject from "./extra/singleProject";

const Projects = () => (
  <>
    <Center w={"100vw"} flexDir={"column"} minH={"100vh"}>
      <Text fontSize={"3xl"} mb={5}>
        Here are a few of my favourite projects:
      </Text>
      <Flex>
        <SingleProject
          title={"Personal Website"}
          info={"This website is completely open source and hosted on Github"}
          image={"/Projects/PersonalWebsite.png"}
          link={"https://github.com/AlfieRan/Personal-website"}
        />
      </Flex>
    </Center>
  </>
);

export default Projects;
