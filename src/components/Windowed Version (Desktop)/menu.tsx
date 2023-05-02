import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import { activeState, stateTypes } from "../../pages";
import calcDif from "../../utils/time/calcTime";
import Sponsor from "../extra/Sponsor";
import Socials from "../extra/Socials";

const Menu = (props: { setState: activeState }) => {
    const buttons: {
        title: string;
        component: stateTypes;
        BottomMargin?: true;
    }[] = [
        {
            title: "About Me",
            component: "about",
        },
        {
            title: "Projects",
            component: "projects",
            BottomMargin: true,
        },
        {
            title: "Programming",
            component: "programming",
        },
        {
            title: "Content Creation",
            component: "content",
        },
        {
            title: "Education",
            component: "education",
            BottomMargin: true,
        },
        {
            title: "Contact",
            component: "contact",
        },
    ];

    return (
        <Flex
            minW={"20%"}
            maxW={"40%"}
            h={"100%"}
            borderColor={"whiteAlpha.300"}
            borderWidth={1}
            borderLeftRadius={"lg"}
            borderRightWidth={0.5}
            flexDir={"column"}
        >
            <Center w={"100%"} h={"20%"} flexDir={"column"} px={3}>
                <Text textAlign={"center"}>Alfie Ranstead</Text>
                <Text fontSize={"xs"} textAlign={"center"}>
                    A {calcDif(2005, 5, 6)} year old Software Enthusiast
                </Text>
                <Sponsor />
            </Center>
            <Center w={"100%"} flexDir={"column"} h={"60%"}>
                {buttons.map((button) => (
                    <Button
                        key={button.title}
                        bg={"blackAlpha.400"}
                        borderWidth={1}
                        borderColor={"whiteAlpha.400"}
                        _hover={{
                            bg: "rgba(255,255,255,0.1)",
                            transform: "scale(1.03)",
                        }}
                        _active={{
                            bg: "rgba(255,255,255,0.05)",
                            transform: "scale(0.97)",
                        }}
                        w={"90%"}
                        mt={1}
                        mb={button.BottomMargin ? "35px" : 1}
                        onClick={() => {
                            props.setState(button.component);
                        }}
                    >
                        <Text>{button.title}</Text>
                    </Button>
                ))}
            </Center>
            <Socials />
        </Flex>
    );
};

export default Menu;