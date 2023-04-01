import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import sleep from "../utils/time/sleep";

const files = [
    "/countdown/laughing.mp3",
    "/countdown/bell.mp3",
    "/countdown/letmein.mp3",
];

export default function Page() {
    const theEnd = 1680508800000;
    const msInDay = 1000 * 60 * 60 * 24;
    const initialTimeBetween = 1500;

    function getDaysUntilEnd() {
        return (
            Math.floor(((theEnd - new Date().getTime()) / msInDay) * 100000) /
            100000
        );
    }

    const [daysLeft, setDaysLeft] = useState(getDaysUntilEnd());

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

    setInterval(() => {
        setDaysLeft(getDaysUntilEnd());
    }, 100);

    // useEffect(() => {
    //     newAudio();
    //     (async () => {
    //         let timeBetween = initialTimeBetween;
    //         let running = true;
    //         while (running) {
    //             await sleep(timeBetween);
    //             newAudio();
    //             console.log("time between audio:", timeBetween);
    //
    //             if (timeBetween > 5) {
    //                 timeBetween = timeBetween * 0.9;
    //             }
    //         }
    //     })();
    // }, []);

    return (
        <Center w={"100vw"} h={"100vh"} p={"50px"}>
            {daysLeft > 0 ? (
                <Text>{daysLeft} Days left.</Text>
            ) : (
                <Center w={"100%"} h={"100%"} bg={"white"}>
                    <Box
                        position={"absolute"}
                        w={"100%"}
                        h={"100%"}
                        opacity={"100%"}
                        zIndex={0}
                    >
                        <Image src={"/countdown/elo.png"} layout={"fill"} />
                    </Box>
                    <Box
                        position={"absolute"}
                        bg={"black"}
                        bottom={5}
                        zIndex={10}
                    >
                        <Text fontSize={"min(200px, 15vw)"}>
                            Time&apos;s up 😈
                        </Text>
                    </Box>
                </Center>
            )}
        </Center>
    );
}
