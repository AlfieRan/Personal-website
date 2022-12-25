import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Visualiser() {
    const selectors: string[] = ["🙎", "💵", "🙂"];
    const recommendedMax = 1000000;

    const [selector, setSelector] = useState<string>(selectors[0]);
    const [quantity, setQuantity] = useState<number>(10000);
    const [visual, setVisual] = useState<string>(
        (selector + " ").repeat(quantity)
    );
    const [percentScrolled, setPercentScrolled] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [displayWarning, setDisplayWarning] = useState<boolean>(false);

    useEffect(() => {
        if (quantity > recommendedMax) {
            setDisplayWarning(true);
            return;
        }

        setVisual((selector + " ").repeat(quantity));
    }, [selector, quantity]);

    function forceUpdate() {
        setVisual((selector + " ").repeat(quantity));
    }

    function updatePercentageDownPage(e: any) {
        if (!window.scrollY) {
            return;
        }

        setPercentScrolled(
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
                100
        );
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", updatePercentageDownPage);

        return () => {
            window.removeEventListener("scroll", updatePercentageDownPage);
        };
    });

    return (
        <Flex w={"full"} h={"full"} flexDir={"column"}>
            <Flex w={"full"} h={"fit"} justifyContent={"center"}>
                <Link
                    href={"/"}
                    fontSize={"3xl"}
                    _hover={{ transform: "scale(1.05)" }}
                    _active={{ transform: "scale(0.95)" }}
                >
                    Alfie Ranstead
                </Link>
            </Flex>
            <Flex
                hidden={quantity < 1000 || scrollY < 500}
                pos={"fixed"}
                left={0}
                top={0}
                px={5}
                py={2}
                minW={"max(200px, 20%)"}
                bg={"MidGrey"}
                borderWidth={2}
                borderLeftColor={"MidGrey"}
                borderTopColor={"MidGrey"}
                borderBottomRightRadius={"2xl"}
                textAlign={"center"}
            >
                <Text w={"full"}>
                    {Math.floor((percentScrolled * quantity) / 100)} /{" "}
                    {quantity}
                </Text>
            </Flex>
            <Flex
                hidden={!displayWarning}
                pos={"fixed"}
                left={0}
                top={0}
                w={"full"}
                h={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                zIndex={999}
            >
                <Flex
                    w={"fit"}
                    h={"fit"}
                    zIndex={20}
                    p={3}
                    flexDir={"column"}
                    borderRadius={"2xl"}
                    borderWidth={2}
                    bg={"MidGrey"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    maxW={"min(90%, 600px)"}
                    textAlign={"center"}
                >
                    <Text>WARNING</Text>
                    <Text fontSize={"md"}>
                        Your inputted value of {quantity} is above the
                        recommended maximum of {recommendedMax} and hence may
                        take a long time to render. <br /> You will not be able
                        to stop this process once it has started except by
                        closing and reopening the page.
                    </Text>
                    <Flex flexDir={"row"} wrap={"wrap"} mt={3}>
                        <Button
                            onClick={forceUpdate}
                            m={2}
                            bg={"red.400"}
                            _hover={{ bg: "red.500" }}
                            _active={{ bg: "red.600" }}
                        >
                            Force
                        </Button>
                        <Button
                            onClick={() => {
                                setQuantity(recommendedMax);
                                setDisplayWarning(false);
                            }}
                            m={2}
                            bg={"blue.400"}
                            _hover={{ bg: "blue.500" }}
                            _active={{ bg: "blue.600" }}
                        >
                            Cancel
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                w={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                mt={10}
                px={3}
                py={2}
            >
                <Text textAlign={"center"} fontWeight={"semibold"}>
                    Visualise numbers using Emojis
                </Text>
                <Text
                    textAlign={"center"}
                    fontSize={"sm"}
                    mt={2}
                    maxW={"600px"}
                >
                    Humans are pretty bad at realising what large numbers
                    actually represent, so I made this tool to help visualise
                    any number you want.
                </Text>
                <Flex
                    m={5}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Flex
                        w={"fit"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Flex
                            mb={4}
                            wrap={"wrap"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            {selectors.map((selector) => (
                                <Button
                                    bg={""}
                                    borderWidth={1}
                                    fontSize={"3xl"}
                                    m={2}
                                    _hover={{ transform: "scale(1.05)" }}
                                    _active={{ transform: "scale(0.95)" }}
                                    onClick={() => {
                                        setSelector(selector);
                                    }}
                                    key={selector}
                                >
                                    {selector}
                                </Button>
                            ))}
                            <Input
                                m={2}
                                placeholder={"Custom"}
                                w={"3xs"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (
                                        value === "" ||
                                        value.length < 1 ||
                                        value.replaceAll(" ", "").length < 1
                                    ) {
                                        setSelector(selectors[0]);
                                    } else {
                                        console.log(value);
                                        setSelector(value);
                                    }
                                }}
                            />
                        </Flex>
                        <Flex w={"full"}>
                            <Input
                                mx={2}
                                placeholder={"Input a number..."}
                                type={"number"}
                                value={quantity.toString()}
                                onChange={(e) => {
                                    setQuantity(e.target.valueAsNumber);
                                }}
                            />
                        </Flex>
                    </Flex>
                    <Flex
                        m={3}
                        textAlign={"center"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        wrap={"wrap"}
                    >
                        <Text>{visual}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
