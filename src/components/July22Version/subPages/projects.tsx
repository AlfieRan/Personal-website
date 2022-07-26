import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import SingleProject from "../../extra/singleProject";

const Projects = () => {
  const Projects: {
    title: string;
    info: string;
    image: string;
    link: string;
  }[] = [
    {
      title: "Mutuals.Chat",
      info: "Find friends who have similar interests and video chat with them!",
      image: "/Projects/mutuals.png",
      link: "https://mutuals.chat",
    },
    {
      title: "The MonoChain",
      info: "A more Efficent, more Eco-friendly, custom built Blockchain.",
      image: "/Projects/Blockchain.jpeg",
      link: "https://monochain.network",
    },
    {
      title: "Computational Capacity",
      info: "A Paper on the Computational Capacity of Spherical Systems.",
      image: "/Projects/ComputingCapacity.png",
      link: "/papers/ComputationalCapacity.pdf",
    },
  ];

  return (
    <Center
      w={"100%"}
      h={"100%"}
      flexDir={"column"}
      overflowY={"scroll"}
      overflowX={"hidden"}
      p={"10px"}
    >
      <Flex flexDir={"column"} textAlign={"center"} mb={"15px"}>
        <Text fontSize={"2xl"}>My Recent Projects</Text>
        <Text fontSize={"md"}>
          I am constantly creating projects so here&apos;s just a few of my most
          recent ones.
        </Text>
      </Flex>
      <Center flexDir={"row"} flexWrap={"wrap"}>
        <SimpleGrid>
          {Projects.map((project) => (
            <Flex key={project.title}>
              <SingleProject
                title={project.title}
                info={project.info}
                image={project.image}
                link={project.link}
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Center>
    </Center>
  );
};

export default Projects;
