import { Flex, Link, Text } from "@chakra-ui/react";
import { projectType, tagColors } from "../../utils/types/projects";

export default function SingleProject(props: { project: projectType }) {
    return (
        <Link
            isExternal
            href={props.project.link}
            _hover={{ transform: "scale(1.02)" }}
            _active={{ transform: "scale(0.98)" }}
            w={"100%"}
            maxW={"450px"}
            bg={"whiteAlpha.200"}
            px={"10px"}
            py={"5px"}
            m={"7px"}
            borderRadius={"10px"}
            borderWidth={1}
            borderColor={"whiteAlpha.400"}
            display={"flex"}
            justifyContent={"flex-start"}
        >
            <Flex flexDir={"column"} textAlign={"left"}>
                <Text
                    fontSize={{ base: "xl", md: "lg" }}
                    fontWeight={"semibold"}
                >
                    {props.project.title}
                </Text>
                <Text fontSize={{ base: "md", md: "xs" }}>
                    {props.project.info}
                </Text>
                <Flex
                    flexDir={"row"}
                    wrap={"wrap"}
                    mt={"10px"}
                    justifyContent={"flex-start"}
                >
                    {props.project.tags.map((tag, index) => (
                        <Flex
                            key={index + props.project.title + "tag"}
                            bg={tag in tagColors ? tagColors[tag] : "gray"}
                            borderRadius={"5px"}
                            my={"3px"}
                            mr={"8px"}
                            px={"5px"}
                            py={"2px"}
                        >
                            <Text fontSize={{ base: "12px", md: "15px" }}>
                                {tag}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Link>
    );
}
