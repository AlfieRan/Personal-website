import { Box } from "@chakra-ui/react";
import Name from "../components/extra/Name";
import AboutMe from "../components/aboutMe";
import Programming from "../components/Programming";
import ContentCreation from "../components/ContentCreation";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const page = () => {
  return (
    <Box w={"100vw"} h={"100vh"} textAlign={"center"} overflowY={"scroll"}>
      <Name />
      <AboutMe />
      <Programming />
      <Projects />
      <ContentCreation />
      <Education />
      <Contact />
    </Box>
  );
};

export default page;
