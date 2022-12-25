import { Center, Text } from "@chakra-ui/react";
import SingleProject from "../extra/singleProject";
import { ProjectList } from "../../utils/types/projects";

const Projects_Scrolling = () => (
    <>
        <Center flexDir={"column"} minH={"100vh"} mt={"10vh"} px={"10px"}>
            <Text fontSize={"3xl"} mb={1}>
                My Current Projects
            </Text>
            <Text maxW={"800px"} mb={3}>
                I&apos;ve done so many different things it&apos;s hard to
                summarise them all, but here&apos;s the top things I&apos;m
                working on right now!
            </Text>
            <Center flexWrap={"wrap"}>
                {ProjectList.map((project) => (
                    <SingleProject
                        project={project}
                        key={project.title + "projectItem"}
                    />
                ))}
            </Center>
        </Center>
    </>
);

export default Projects_Scrolling;
