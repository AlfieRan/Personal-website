import { Box } from "@chakra-ui/react";
import Name from "../components/Name";
import AboutMe from "../components/aboutMe";
import Programming from "../components/Programming";
import ContentCreation from "../components/ContentCreation";
import Education from "../components/Education";
import Contact from "../components/Contact";

const page = () => {
  return (
    <Box w={"100vw"} h={"100vh"} textAlign={"center"}>
      <Name />
      <AboutMe />
      <Programming />
      <ContentCreation />
      <Education />
      <Contact />
    </Box>
  );
};

export default page;
