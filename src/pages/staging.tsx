import { Flex, Text } from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Staging() {
    const { scrollY } = useScroll();
    const [progress, SetProgress] = useState(0);

    useMotionValueEvent(scrollY, "change", (value) => {
        SetProgress(value);
    });

    return (
        <Flex
            w={"100vw"}
            minH={"200vh"}
            overflow={"hidden"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDir={"column"}
        >
            <motion.div style={{ scale: Math.max(1 - progress / 500, 0) }}>
                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDir={"column"}
                    textAlign={"center"}
                    w={"100%"}
                    h={"70vh"}
                >
                    <Text fontSize={{ base: "10vw", sm: "6vw", md: "4vw" }}>
                        Alfie Ranstead
                    </Text>
                    <Text fontSize={{ base: "5vw", sm: "3vw", md: "2vw" }}>
                        I make stuff with computers
                    </Text>
                </Flex>
            </motion.div>
        </Flex>
    );
}
