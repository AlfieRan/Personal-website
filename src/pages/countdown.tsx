import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    const theEnd = 1665136038803;
    const msInDay = 1000 * 60 * 60 * 24;

    function getDaysUntilEnd() {
        return (
            Math.floor(((theEnd - new Date().getTime()) / msInDay) * 100000) /
            100000
        );
    }

    const [daysLeft, setDaysLeft] = useState(getDaysUntilEnd());

    setInterval(() => {
        setDaysLeft(getDaysUntilEnd());
    }, 100);

    return (
        <Center w={"100vw"} h={"100vh"} p={"50px"}>
            {daysLeft > 0 ? (
                <Text>{daysLeft} Days left.</Text>
            ) : (
                <Center w={"100%"} h={"100%"}>
                    <Box
                        position={"absolute"}
                        w={"100%"}
                        h={"100%"}
                        opacity={"25%"}
                        zIndex={0}
                    >
                        <Image src={"/countdown/bg.jpg"} layout={"fill"} />
                    </Box>
                    <Center zIndex={1}>
                        <Text fontSize={"5xl"}>Time's up 😈</Text>
                    </Center>
                </Center>
            )}
        </Center>
    );
}
