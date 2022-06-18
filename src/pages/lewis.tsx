import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box  h={"100vh"}>
      <Center h={"full"} w={"full"}>
        <Flex flexDir={"column"}>
          <Text fontSize={"5xl"}>Lewis Claybrough</Text>
          <Image
            mt={40}
            src={
              "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/dream-face.jpg?q=50&fit=crop&w=800&dpr=1.5"
            }
            alt={"A picture of dream the youtuber"}
          />
          <Text>CLAY-brough, haha get it, lewis is dream</Text>
        </Flex>
        <Image
          src={
            "https://media.discordapp.net/attachments/452496217184927744/952250599607500871/Screenshot_20210501-1324162.png?width=500&height=800"
          }
          ml={20}
          alt={"A beautiful picture of lewis"}
        />
      </Center>
    </Box>
  );
};

export default Page;
