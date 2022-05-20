import { AspectRatio, Center, Image, Link, Text } from "@chakra-ui/react";

const SingleProject = (props: {
  title: string;
  info: string;
  image: string;
  link: string;
}) => {
  return (
    <Link href={props.link} _hover={{}}>
      <Center
        w={"sm"}
        h={"2xs"}
        flexDir={"row"}
        borderWidth={1}
        borderRadius={"lg"}
      >
        <Center
          flexDir={"column"}
          borderLeftRadius={"lg"}
          bg={"#262a2c"}
          h={"full"}
          w={"full"}
          fontSize={"md"}
        >
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            {props.title}
          </Text>
          <Text>{props.info}</Text>
        </Center>
        <Center borderRightRadius={"lg"} bg={"#525252"} h={"2xs"} w={"sm"}>
          <AspectRatio
            ratio={1}
            h={"100%"}
            w={"100%"}
            borderRightRadius={"lg"}
            borderWidth={1}
          >
            <Image src={props.image} borderRightRadius={"lg"} />
          </AspectRatio>
        </Center>
      </Center>
    </Link>
  );
};

export default SingleProject;
