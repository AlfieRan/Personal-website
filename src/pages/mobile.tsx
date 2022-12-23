import { Box, Flex, Text } from "@chakra-ui/react";
import Name from "../components/extra/Name";
import AboutMe from "../components/Scrolling Version (Mobile)/aboutMe";
import Programming from "../components/Scrolling Version (Mobile)/Programming";
import ContentCreation from "../components/Scrolling Version (Mobile)/ContentCreation";
import Education_Scrolling from "../components/Scrolling Version (Mobile)/Education";
import Contact_Scrolling from "../components/Scrolling Version (Mobile)/Contact";
import Projects from "../components/Scrolling Version (Mobile)/Projects";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useMode from "../utils/hooks/useMode";
import { motion, useScroll, useSpring } from "framer-motion";
import Socials from "../components/extra/Socials";

const Mobile = () => {
    const mode = useMode();
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const subSections: { id: string; component: any }[] = [
        { id: "Name", component: Name },
        { id: "AboutMe", component: AboutMe },
        { id: "Programming", component: Programming },
        { id: "Projects", component: Projects },
        { id: "ContentCreation", component: ContentCreation },
        { id: "Education", component: Education_Scrolling },
        { id: "Contact", component: Contact_Scrolling },
    ];

    useEffect(() => {
        if (mode === "desktop") {
            router.push("/").catch((err) => {
                console.log(err);
            });
        }
    }, [mode, router]);

    return (
        <Box h={"100vh"} textAlign={"center"}>
            {subSections.map((section) => (
                <Flex key={section.id} mb={"5vh"} flexDir={"column"}>
                    <section.component />
                </Flex>
            ))}
            <motion.div
                className={"fixed right-0 left-0 bottom-[7%] h-[5px] bg-white"}
                style={{ scaleX }}
            />
            <motion.div className={"fixed right-0 left-0 bottom-0"}>
                <Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    alignItems={"center"}
                    px={{ base: "5%", md: "3%" }}
                    h={"7vh"}
                    bg={"DarkGrey"}
                    borderTopWidth={"1px"}
                    borderTopColor={"whiteAlpha.200"}
                >
                    <Flex maxW={"60%"}>
                        <Socials />
                    </Flex>
                    <Text>Alfie Ranstead</Text>
                </Flex>
            </motion.div>
        </Box>
    );
};

export default Mobile;
