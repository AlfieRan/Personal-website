import { Box, Flex, Spacer } from "@chakra-ui/react";
import Name from "../components/extra/Name";
import AboutMe from "../components/aboutMe";
import Programming from "../components/Programming";
import ContentCreation from "../components/ContentCreation";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const page = () => {
  const subSections: { id: string; component: any }[] = [
    { id: "Name", component: Name },
    { id: "AboutMe", component: AboutMe },
    { id: "Programming", component: Programming },
    { id: "Projects", component: Projects },
    { id: "ContentCreation", component: ContentCreation },
    { id: "Education", component: Education },
    { id: "Contact", component: Contact },
  ];

  return (
    <Box w={"100vw"} h={"100vh"} textAlign={"center"} overflowY={"scroll"}>
      {subSections.map((section) => (
        <Flex key={section.id} mb={"10vh"} flexDir={"column"}>
          <section.component />
        </Flex>
      ))}
    </Box>
  );
};

export default page;
