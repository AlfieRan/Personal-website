import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import sleep from "../utils/time/sleep";

const files = ["/countdown/laughing.mp3", "/countdown/bell.mp3"];

export default function Page() {
    const theEnd = 1665136038803;
    const msInDay = 1000 * 60 * 60 * 24;
    const initialTimeBetween = 2500;
    const [running, setRunning] = useState(true);

    function getDaysUntilEnd() {
        return (
            Math.floor(((theEnd - new Date().getTime()) / msInDay) * 100000) /
            100000
        );
    }

    function newAudio() {
        try {
            const audio = new Audio(
                files[Math.floor(Math.random() * files.length)]
            );
            sleep(1000).then(() =>
                audio
                    .play()
                    .then((res) => {
                        console.log("Audio started");
                    })
                    .catch(console.error)
            );
        } catch (e) {
            console.error(e);
        }
    }

    const [daysLeft, setDaysLeft] = useState(getDaysUntilEnd());

    setInterval(() => {
        setDaysLeft(getDaysUntilEnd());
    }, 100);

    useEffect(() => {
        newAudio();
        (async () => {
            let timeBetween = initialTimeBetween;
            while (running) {
                await sleep(timeBetween);
                newAudio();
                timeBetween = timeBetween * 0.9;
                console.log(
                    "time between audio:",
                    timeBetween,
                    "should next be",
                    timeBetween * 0.9
                );

                if (timeBetween < 10) {
                    setRunning(false);
                }
            }
        })();
    }, []);

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
                        opacity={"100%"}
                        zIndex={0}
                    >
                        <Image src={"/countdown/bg.jpg"} layout={"fill"} />
                    </Box>
                    <Box position={"absolute"} bottom={5} zIndex={1}>
                        <Text fontSize={"min(200px, 15vw)"}>
                            Time&apos;s up 😈
                        </Text>
                    </Box>
                </Center>
            )}
        </Center>
    );
}
