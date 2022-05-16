import { Box } from "@chakra-ui/react";
import Name from "../components/Name";
import AboutMe from "../components/aboutMe";

const page = () => {
  return (
    <Box w={"100vw"} h={"100vh"} textAlign={"center"}>
      <Name />
      <AboutMe />
    </Box>
  );
};

export default page;
