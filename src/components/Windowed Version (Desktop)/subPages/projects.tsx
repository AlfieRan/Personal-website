import { Center, Flex, Grid, Text } from "@chakra-ui/react";
import SingleProject from "../../extra/singleProject";
import { useState } from "react";
import Visualiser from "../../../pages/tools/visualiser";

type ProjectType = {
    title: string;
    info: string;
    image: string;
    link: string;
};

const Projects = () => {
    const Projects: ProjectType[] = [
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
        {
            title: "Number Visualiser",
            info: "Visualise a large number using emojis or text.",
            image: "/Projects/NumberVisualiser.png",
            link: "/tools/visualiser",
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
            <Flex flexDir={"column"} textAlign={"center"} mb={"30px"}>
                <Text fontSize={"2xl"}>My Recent Projects</Text>
                <Text fontSize={"md"}>
                    I am constantly creating projects so here&apos;s just a few
                    of my most recent ones.
                </Text>
            </Flex>
            <Center flexDir={"row"} flexWrap={"wrap"}>
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
            </Center>
        </Center>
    );
};

export default Projects;
