import { Box, Center, Flex, Image, Link } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box w={"100vw"} h={"100vh"}>
      <Center w={"full"} h={"full"} flexDir={"column"}>
        <Link
          fontSize={"8xl"}
          href={"https://www.youtube.com/c/Ep1cal"}
          isExternal
        >
          Callum &quot;Ep1cal&quot; O&apos;Donnell
        </Link>
        <Flex flexDir={"row"}>
          <Image
            src={
              "https://media.discordapp.net/attachments/796385294097711163/942092193252933634/attachment.gif"
            }
            alt={"Callum"}
          />
          <Image
            src={"balls.png"}
            alt={"Callum trying to ring me on discord"}
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default Page;
