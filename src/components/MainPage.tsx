import { Box, Center, Flex, Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Component = (props: { hidden: boolean }) => {
  const [width, setWidth] = useState(1000);
  const breakpoint = 600;
  const [flexDirec, setFlexDirec] = useState<"column" | "row">("row");
  const [mainTextSize, setMainTextSize] = useState<"7xl" | "5xl">("7xl");

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < breakpoint) {
      setFlexDirec("column");
      setMainTextSize("5xl");
    }
  }, [width]);

  if (props.hidden) {
    return null;
  }
  return (
    <Center w={"full"} h={"full"} flexDir={"column"}>
      <Text fontSize={mainTextSize} mb={10}>
        Alfie Ranstead
      </Text>
      <Flex fontSize={"3xl"} flexDir={flexDirec} textAlign={"center"}>
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
