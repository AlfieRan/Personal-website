import { Text } from "@chakra-ui/react";

const Projects = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <>
      <Text>Projects innit</Text>
    </>
  );
};

export default Projects;
