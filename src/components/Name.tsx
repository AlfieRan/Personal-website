import { Center, Text } from "@chakra-ui/react";

const Component = (props: { hidden: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Center w={"full"} h={"full"}>
      <Text fontSize={"6xl"}>Alfie Ranstead</Text>
    </Center>
  );
};

export default Component;
