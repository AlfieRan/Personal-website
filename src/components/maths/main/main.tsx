import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";

const Main = () => {
    return <></>;
};

// const mainScreen = (
//     <Flex w={"100%"} p={2} flexDir={"column"}>
//         <Flex
//             w={"100%"}
//             flexDir={"row"}
//             justifyContent={"space-around"}
//             alignItems={"center"}
//             wrap={"wrap"}
//             mb={5}
//         >
//             <Text mx={5}>
//                 Time Left: {timeParser(maxTime - Timer.time)}
//             </Text>
//             <Flex alignItems={"center"} py={2}>
//                 <Button
//                     css={basicButton}
//                     mx={3}
//                     onClick={() => {
//                         Timer.pause();
//                         setShowState({ paused: true });
//                     }}
//                 >
//                     Pause
//                 </Button>
//                 <Button
//                     css={basicButton}
//                     mx={3}
//                     onClick={() => {
//                         setShowState({ answers: true });
//                     }}
//                 >
//                     End
//                 </Button>
//             </Flex>
//         </Flex>
//         <Center w={"100%"} p={"lg"}>
//             {curQuestions.map((question, idx) => (
//                 <Center flexDir={"column"} key={idx}>
//                     <Text>{question.name}</Text>
//                     <Center flexDir={"row"} flexWrap={"wrap"}>
//                         <Center flexDir={"column"} flexWrap={"wrap"}>
//                             <Text fontSize={"md"}>Question</Text>
//                             <Image
//                                 src={question.q}
//                                 alt={question.name + "question"}
//                             />
//                         </Center>
//                         <Center
//                             hidden={!showState.answers}
//                             flexDir={"column"}
//                             flexWrap={"wrap"}
//                         >
//                             <Text fontSize={"md"}>Answer</Text>
//                             <Image
//                                 src={question.a}
//                                 alt={question.name + "answer"}
//                             />
//                         </Center>
//                     </Center>
//                 </Center>
//             ))}
//         </Center>
//     </Flex>
// );

export default Main;
