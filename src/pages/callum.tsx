import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Center w={"full"} h={"full"} flexDir={"column"}>
        <Link
          fontSize={"8xl"}
          href={"https://www.youtube.com/c/Ep1cal"}
          isExternal
        >
          Callum "Ep1cal" O'Donnell
        </Link>
        <Flex flexDir={"row"}>
          <Image
            src={
              "https://media.discordapp.net/attachments/796385294097711163/942092193252933634/attachment.gif"
            }
          />
          <Image src={"balls.png"} />
        </Flex>
      </Center>
    </Box>
  );
};

export default Page;
