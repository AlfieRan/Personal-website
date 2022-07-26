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
      textAlign={"center"}
      w={"full"}
    >
      <Center
        flexDir={"row"}
        borderWidth={1}
        borderRadius={"lg"}
        bg={"#262a2c"}
        justifyContent={"space-between"}
      >
        <Center borderLeftRadius={"lg"} h={"100%"} w={"full"}>
          <Center maxW={"60%"} flexDir={"column"}>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              {props.title}
            </Text>
            <Text px={2} fontSize={"sm"}>
              {props.info}
            </Text>
          </Center>
        </Center>
        <Center
          borderRightRadius={"lg"}
          bg={"#525252"}
          minW={"200px"}
          w={"30%"}
        >
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
