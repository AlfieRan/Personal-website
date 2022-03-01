import { Button, Center, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import Hello from "./Hello";
import Name from "./Name";
import { fadeIn, fadeOut } from "../utils/fader";
import sleep from "../utils/sleep";

const SwitchTime = 500;

async function switchToName(
  setIntroOpacity: Dispatch<SetStateAction<number>>,
  setShow: Dispatch<SetStateAction<{ hello: boolean; name: boolean }>>,
  introController: Dispatch<SetStateAction<boolean>>
) {
  await fadeOut(SwitchTime, setIntroOpacity);
  setShow({ hello: false, name: true });
  await sleep(500);
  await fadeIn(SwitchTime, setIntroOpacity);
  await sleep(1000);
  await fadeOut(SwitchTime, setIntroOpacity);
  introController(true);
}

const Component = (props: {
  hidden: boolean;
  introController: Dispatch<SetStateAction<boolean>>;
}) => {
  const [show, setShow] = useState<{ hello: boolean; name: boolean }>({
    hello: true,
    name: false,
  });
  const [introOpacity, setIntroOpacity] = useState<number>(100);
  const [clickAble, setClickAble] = useState<boolean>(true);

  if (props.hidden) {
    return null;
  }
  return (
    <Center w={"100vw"} h={"100vh"} opacity={`${introOpacity}%`}>
      <Button
        w={"full"}
        h={"full"}
        bg={"inherit"}
        _hover={{ bg: "inherit" }}
        _active={{ bg: "inherit" }}
        hidden={!show.hello}
        onClick={(e) => {
          if (clickAble) {
            setClickAble(false);
            switchToName(setIntroOpacity, setShow, props.introController);
          }
        }}
      >
        <Hello />
      </Button>
      <Name hidden={!show.name} />
    </Center>
  );
};

export default Component;
