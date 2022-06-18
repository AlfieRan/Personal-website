import { Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import calcDif from "../../utils/calcTime";

const Component = (props: { hidden?: boolean }) => {
  const [width, setWidth] = useState(1000);
  const breakpoint = 600;
  const [mainTextSize, setMainTextSize] = useState<"7xl" | "5xl">("7xl");

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < breakpoint) {
      setMainTextSize("5xl");
    }
  }, [width]);

  if (props.hidden) {
    return null;
  }
  return (
    <>
      <Center
        
        h={"90vh"}
        flexDir={"column"}
        textAlign={"center"}
        px={2}
      >
        <Text fontSize={mainTextSize}>Alfie Ranstead</Text>
        <Text fontSize={"lg"}>
          A {calcDif(2005, 4, 5)} Year old Computer Scientist.{" "}
        </Text>
      </Center>
      <Center  h={"10vh"}>
        ^ Swipe Up ^
      </Center>
    </>
  );
};

export default Component;
