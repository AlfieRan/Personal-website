import { Center, Flex, Image, Link, Text } from "@chakra-ui/react";

const ContentCreation_Window = () => {
  const videos: { title: string; views: number }[] = [
    {
      title: "Crab Game by Dani has a HUGE Problem...",
      views: 336759,
    },
    {
      title: "Crab Game by Dani Just Had It's FIRST EVER UPDATE!!!",
      views: 212387,
    },
    {
      title: "MUCK UPDATE 3 is the BIGGEST YET (ENDING, NEW BOSSES)",
      views: 186072,
    },
  ];
  return (
    <>
      <Center flexDir={"column"}>
        <Flex
          flexDir={"column"}
          px={"20px"}
          py={"10px"}
          w={"lg"}
          maxW={"90%"}
          fontSize={"sm"}
        >
          <Text fontSize={"2xl"}>Content Creation</Text>
          <Text mt={2}>
            I&apos;ve been working on videos since the age of 10, when I first
            edited together a series of mini clips I took of myself and my
            family on holiday and I&apos;ve been hooked ever since.
          </Text>
          <Text mt={2}>
            Since then I&apos;ve created approximately 100 videos across a
            handful of youtube channels and other places and my work has been
            viewed over 1.5 million times.
          </Text>
          <Text mt={2}>
            If you wish to sponsor a video or have any questions please contact
            me at{" "}
            <Link href={"mailto:uno.fedeo@gmail.com"}>uno.fedeo@gmail.com</Link>
          </Text>
        </Flex>
        <Link
          href={
            "https://www.youtube.com/c/UnoFedeo/videos?view=0&sort=p&flow=grid"
          }
          _hover={{ bg: "rgba(255,255,255,0.1)" }}
          _active={{ bg: "rgba(0,0,0,0.1)" }}
          py={"5px"}
          px={"10px"}
          borderRadius={"4px"}
          w={"100%"}
          mt={"20px"}
          maxW={"700px"}
          isExternal
        >
          <Flex flexDir={"column"} w={"100%"}>
            <Text fontWeight={"semibold"}>My Most Viewed Videos:</Text>
            <Flex
              wrap={"wrap"}
              justifyContent={"space-around"}
              w={"100%"}
              fontSize={"sm"}
            >
              {videos.map((video, idx) => (
                <Flex
                  flexDir={"row"}
                  justifyContent={"space-between"}
                  w={"100%"}
                  key={idx}
                >
                  <Text>{video.title}</Text>
                  <Text>{video.views} Views</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Link>
      </Center>
    </>
  );
};

export default ContentCreation_Window;
