import { Box, Center, Flex, Text, Link } from "@chakra-ui/react";

const Component = (props: { hidden: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Center w={"full"} h={"full"} flexDir={"column"}>
      <Text fontSize={"8xl"}>Alfie Ranstead</Text>
      <Flex fontSize={"3xl"}>
        <Link mx={3} href={"https://github.com/AlfieRan"} isExternal>
          Programmer
        </Link>
        <Link mx={3} href={"https://youtube.com/c/unofedeo"} isExternal>
          Content Creator
        </Link>
        <Link
          mx={3}
          href={"https://www.linkedin.com/in/alfie-ranstead-661064225/"}
          isExternal
        >
          Student
        </Link>
      </Flex>
    </Center>
  );
};

export default Component;
