import { Center, Text } from "@chakra-ui/react";
import SingleProject from "../extra/singleProject";

const Projects_Scrolling = () => (
  <>
    <Center flexDir={"column"} minH={"100vh"} mt={"10vh"} px={"10px"}>
      <Text fontSize={"3xl"} mb={1}>
        My Current Projects
      </Text>
      <Text maxW={"800px"} mb={3}>
        I&apos;ve done so many different things it&apos;s hard to summarise them
        all, but here&apos;s the top things I&apos;m working on right now!
      </Text>
      <Center flexWrap={"wrap"}>
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
        <SingleProject
          title={"Computational Capacity"}
          info={"A Paper on the Computational Capacity of Spherical Systems."}
          image={"/Projects/ComputingCapacity.png"}
          link={"/papers/ComputationalCapacity.pdf"}
        />
      </Center>
    </Center>
  </>
);

export default Projects_Scrolling;
