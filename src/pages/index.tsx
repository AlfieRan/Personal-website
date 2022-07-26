import { Box, Flex } from "@chakra-ui/react";
import Name from "../components/extra/Name";
import AboutMe from "../components/May22Version/aboutMe";
import Programming from "../components/May22Version/Programming";
import ContentCreation from "../components/May22Version/ContentCreation";
import Education from "../components/May22Version/Education";
import Contact from "../components/May22Version/Contact";
import Projects from "../components/May22Version/Projects";
import { useEffect } from "react";
import useAspect from "../utils/hooks/useAspect";
import { useRouter } from "next/router";

const page = () => {
  const aspect = useAspect();
  const router = useRouter();
  const subSections: { id: string; component: any }[] = [
    { id: "Name", component: Name },
    { id: "AboutMe", component: AboutMe },
    { id: "Programming", component: Programming },
    { id: "Projects", component: Projects },
    { id: "ContentCreation", component: ContentCreation },
    { id: "Education", component: Education },
    { id: "Contact", component: Contact },
  ];

  useEffect(() => {
    if (aspect < 1.1) {
      router.push("/").catch((err) => {
        console.log(err);
      });
    }
  }, [aspect]);

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

export default page;
