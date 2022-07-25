import { Center, Flex } from "@chakra-ui/react";
import Menu from "../components/July22Version/menu";
import { Dispatch, SetStateAction, useState } from "react";
import About from "../components/July22Version/subPages/about";
import Programming from "../components/July22Version/subPages/programming";

export type stateTypes = "about" | "programming";
export type activeState = Dispatch<SetStateAction<stateTypes>>;

const Index = () => {
  const [active, setActive] = useState<stateTypes>("about");
  const States = {
    about: <About />,
    programming: <Programming />,
  };

  return (
    <Center w={"100vw"} h={"100vh"} p={3}>
      <Menu setState={setActive} />
      <Flex
        w={"80%"}
        h={"100%"}
        borderWidth={1}
        borderRightRadius={"lg"}
        borderLeftWidth={0.5}
      >
        {States[active]}
      </Flex>
    </Center>
  );
};

export default Index;
