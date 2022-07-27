import { Box, Flex } from "@chakra-ui/react";
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

const Mobile = () => {
  const mode = useMode();
  const router = useRouter();
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
    <Box h={"100vh"} textAlign={"center"} overflowY={"scroll"}>
      {subSections.map((section) => (
        <Flex key={section.id} mb={"5vh"} flexDir={"column"}>
          <section.component />
        </Flex>
      ))}
    </Box>
  );
};

export default Mobile;
