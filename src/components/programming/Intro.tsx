import { Flex, Text } from "@chakra-ui/react";

const Intro = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Flex fontSize={"lg"} px={2} flexDir={"column"}>
      <Text>
        Although I had my fair share of scratch experience before then, it was
        on Christmas at age 10 where I was given a "How to make a website" book
        that I started to properly pick up programming.
      </Text>
      <Text mt={3}>
        I spent the following two years really getting to know the basics of
        programming and made a myriad of basic websites and funky javascript
        games.
      </Text>
      <Text mt={3}>
        After that, I moved onto learning more about technical programming and
        mathematical thinking and spent the next 3 and a bit years learning
        python, eventually getting to the point where I was messing around with
        fairly complicated physics simulations and AI (Mainly neural networks
        and QTables).
      </Text>
      <Text mt={3}>
        Since then I've moved onto full stack web development and have been
        learning a lot - very fast - thanks to the help of some great friends to
        bounce off of. This is also where I've started to put everything I've
        learnt in the past together to make stuff that I find cool.
      </Text>
    </Flex>
  );
};

export default Intro;
