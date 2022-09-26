import { Center, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

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
            <Text>{daysLeft} Days left.</Text>
        </Center>
    );
}
