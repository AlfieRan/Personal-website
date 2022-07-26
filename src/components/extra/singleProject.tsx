import { AspectRatio, Center, Image, Link, Text } from "@chakra-ui/react";

const SingleProject = (props: {
  title: string;
  info: string;
  image: string;
  link: string;
}) => {
  return (
    <Link
      isExternal
      href={props.link}
      transform={"scale(0.9)"}
      _hover={{ transform: "scale(0.95)" }}
      _active={{ transform: "scale(0.8)" }}
      h={"fit-content"}
      textAlign={"center"}
    >
      <Center
        h={"3xs"}
        w={"xs"}
        flexDir={"row"}
        borderWidth={1}
        borderRadius={"lg"}
        maxW={"90vw"}
      >
        <Center
          flexDir={"column"}
          borderLeftRadius={"lg"}
          bg={"#262a2c"}
          w={"full"}
          h={"full"}
          fontSize={"md"}
        >
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            {props.title}
          </Text>
          <Text px={2} fontSize={"sm"}>
            {props.info}
          </Text>
        </Center>
        <Center borderRightRadius={"lg"} bg={"#525252"} h={"3xs"} w={"xs"}>
          <AspectRatio
            ratio={1}
            h={"100%"}
            w={"100%"}
            borderRightRadius={"lg"}
            borderWidth={1}
          >
            <Image
              src={props.image}
              borderRightRadius={"lg"}
              alt={`Project image for ${props.title}`}
            />
          </AspectRatio>
        </Center>
      </Center>
    </Link>
  );
};

export default SingleProject;
