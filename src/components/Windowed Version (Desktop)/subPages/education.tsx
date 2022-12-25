import { AspectRatio, Center, Image, Stack, Text } from "@chakra-ui/react";

const Education_Window = () => (
    <Center flexDir={"column"} w={"100%"}>
        <Stack
            direction={["column", "column", "column", "row"]}
            spacing={8}
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
                <Text fontSize={"md"} textAlign={"center"}>
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
                maxW={"min(600px, 70vw)"}
                minW={"200px"}
                flex={1.25}
                h={"100%"}
                w={"50%"}
            >
                <Image
                    src={"train_station.png"}
                    borderRadius={"lg"}
                    alt={
                        "A picture of the train station I go to every morning to get to college"
                    }
                />
            </AspectRatio>
        </Stack>
    </Center>
);

export default Education_Window;
