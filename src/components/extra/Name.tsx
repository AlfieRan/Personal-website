import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import calcDif from "../../utils/time/calcTime";
import useWidth from "../../utils/hooks/window/useWidth";
import Sponsor from "./Sponsor";

const Component = (props: { hidden?: boolean }) => {
    const width = useWidth();
    const breakpoint = 600;
    const [mainTextSize, setMainTextSize] = useState<"7xl" | "5xl">("7xl");

    useEffect(() => {
        if (width ?? breakpoint + 1 < breakpoint) {
            setMainTextSize("5xl");
        }
    }, [width]);

    if (props.hidden) {
        return null;
    }
    return (
        <>
            <Flex h={"35vh"} />
            <Center flexDir={"column"} textAlign={"center"} px={2}>
                <Text fontSize={mainTextSize}>Alfie Ranstead</Text>
                <Text fontSize={"lg"}>
                    A {calcDif(2005, 4, 5)} Year old Computer Scientist.{" "}
                </Text>
                <Sponsor />
            </Center>
            <Center h={"10vh"}>^ Swipe Up ^</Center>
            <Flex h={"40vh"} />
        </>
    );
};

export default Component;
