import { Center, Link, Text } from "@chakra-ui/react";

const Contact_Scrolling = () => {
    const ContactItems = [
        {
            name: "Twitter - @AlfieRanstead",
            link: "https://twitter.com/alfieranstead",
        },
        {
            name: "Email - hi@alfieranstead.com",
            link: "mailto:hi@alfieranstead.com",
        },
        {
            name: "Linkedin - Alfie Ranstead",
            link: "https://www.linkedin.com/in/alfie-ranstead-661064225/",
        },
        {
            name: "Discord - Uno#6088",
        },
    ];

    return (
        <Center minH={"100vh"} w={"100%"} flexDir={"column"}>
            <Text fontSize={"4xl"}>Contact Me</Text>
            <Center flexDir={"column"} fontSize={"lg"}>
                {ContactItems.map((item) => {
                    if (item.link) {
                        return (
                            <Link
                                isExternal
                                key={item.name}
                                href={item.link}
                                mx={3}
                                my={1}
                            >
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
    );
};

export default Contact_Scrolling;
