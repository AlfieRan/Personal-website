import { Center, Flex, Text } from "@chakra-ui/react";
import SingleProject from "./extra/singleProject";

const Projects = () => (
  <>
    <Center w={"100vw"} flexDir={"column"} minH={"100vh"} mt={"10vh"}>
      <Text fontSize={"3xl"} mb={1}>
        My Current Projects
      </Text>
      <Text maxW={"800px"} mb={3}>
        I've done so many different things it's hard to summarise them all, but
        here's the top two projects I'm working on right now!
      </Text>
      <Flex wrap={"wrap"}>
        <SingleProject
          title={"Mutuals.Chat"}
          info={
            "Find friends who have similar interests and video chat with them!"
          }
          image={"/Projects/mutuals.png"}
          link={"https://mutuals.chat"}
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
