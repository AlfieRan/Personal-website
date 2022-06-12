import { Center, Link, Text } from "@chakra-ui/react";

const Contact = () => {
  const ContactItems = [
    {
      name: "Twitter - @AlfieRanstead",
      link: "https://twitter.com/alfieranstead",
    },
    {
      name: "Email - alfie.ranstead@outlook.com",
      link: "mailto:alfie.ranstead@outlook.com",
    },
    {
      name: "Discord - Uno#6088",
    },
  ];

  return (
    <>
      <Center w={"100vw"} minH={"100vh"} flexDir={"column"}>
        <Text fontSize={"4xl"}>Contact Me</Text>
        <Center flexDir={"column"} fontSize={"lg"}>
          {ContactItems.map((item) => {
            if (item.link) {
              return (
                <Link isExternal key={item.name} href={item.link} mx={3} my={1}>
                  {item.name}
                </Link>
              );
            } else {
              return (
                <Text key={item.name} mx={3} my={1}>
                  {item.name}
                </Text>
              );
            }
          })}
        </Center>
      </Center>
    </>
  );
};

export default Contact;
