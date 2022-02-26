import { Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Component = (props: { hidden: boolean }) => {
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
    <Center w={"full"} h={"full"}>
      <Text fontSize={mainTextSize}>Alfie Ranstead</Text>
    </Center>
  );
};

export default Component;
