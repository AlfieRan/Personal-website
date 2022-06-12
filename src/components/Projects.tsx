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
        <SingleProject
          title={"The MonoChain"}
          info={"A more Efficent, more Eco-friendly, custom built Blockchain."}
          image={"/Projects/Blockchain.jpeg"}
          link={"https://monochain.network"}
        />
      </Flex>
    </Center>
  </>
);

export default Projects;
