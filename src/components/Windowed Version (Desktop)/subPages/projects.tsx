import { Flex, Text } from "@chakra-ui/react";
import SingleProject from "../../extra/singleProject";
import { ProjectList } from "../../../utils/types/projects";

const Projects = () => {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            flexDir={"column"}
            overflowY={"scroll"}
            overflowX={"hidden"}
            p={"10px"}
            alignItems={"flex-start"}
            justifyContent={"center"}
        >
            <Flex flexDir={"column"} textAlign={"left"} mb={"20px"}>
                <Text fontSize={"2xl"}>My Recent Projects</Text>
                <Text fontSize={"md"}>
                    I am constantly creating new projects so here&apos;s just a
                    few of my most recent ones.
                </Text>
            </Flex>

            <Flex flexDir={"row"} wrap={"wrap"} justifyContent={"center"}>
                {ProjectList.map((project) => (
                    <SingleProject
                        project={project}
                        key={project.title + "projectItem"}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default Projects;
