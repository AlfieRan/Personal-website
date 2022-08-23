import { AspectRatio, Center, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

const Education_Scrolling = () => (
    <Center minH={"100vh"} flexDir={"column"}>
        <Stack
            direction={["column", "column", "column", "row"]}
            w={"80vw"}
            spacing={8}
            h={"full"}
            alignItems={"center"}
        >
            <Center
                flexDir={"column"}
                flex={1}
                maxW={"lg"}
                alignSelf={"center"}
                h={"full"}
            >
                <Text fontSize={"3xl"}>Education</Text>
                <Text fontSize={"lg"}>
                    I am currently attending a Grammar Sixth form in South West
                    England where I am completing my A-Levels.
                    <br />
                    The specific A-Levels I am studying are: Maths, Further
                    Maths, Physics and Computer Science.
                    <br />I travel just under an hour everyday to get to my
                    Sixth form which includes a ~30 minute train journey
                    (pictured).
                </Text>
            </Center>
            <AspectRatio
                ratio={4 / 3}
                maxW={"70vw"}
                flex={1.25}
                h={"full"}
                w={"inherit"}
                borderRadius={"xl"}
                overflow={"hidden"}
            >
                <Image
                    src={"/train_station.png"}
                    layout={"fill"}
                    alt={
                        "A picture of the train station I go to every morning to get to college"
                    }
                />
            </AspectRatio>
        </Stack>
    </Center>
);

export default Education_Scrolling;
