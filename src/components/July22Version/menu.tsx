import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import { activeState, stateTypes } from "../../pages/new";
import GithubLogo from "../extra/githubLogo";
import TwitterLogo from "../extra/twitterLogo";
import YoutubeLogo from "../extra/youtubeLogo";
import calcDif from "../../utils/calcTime";

const Menu = (props: { setState: activeState }) => {
  const buttons: {
    title: string;
    component: stateTypes;
    BottomMargin?: true;
  }[] = [
    {
      title: "About Me",
      component: "about",
    },
    {
      title: "Projects",
      component: "projects",
      BottomMargin: true,
    },
    {
      title: "Programming",
      component: "programming",
    },
    {
      title: "Content Creation",
      component: "content",
    },
    {
      title: "Education",
      component: "education",
      BottomMargin: true,
    },
    {
      title: "Contact",
      component: "contact",
    },
  ];

  const Socials: { component: any; alt: string; link: string }[] = [
    {
      alt: "Github",
      component: GithubLogo,
      link: "https://github.com/alfieran",
    },
    {
      alt: "Twitter",
      component: TwitterLogo,
      link: "https://twitter.com/alfieranstead",
    },
    {
      alt: "Youtube",
      component: YoutubeLogo,
      link: "https://youtube.com/c/unofedeo",
    },
  ];

  return (
    <Flex
      minW={"20%"}
      maxW={"40%"}
      h={"100%"}
      borderWidth={1}
      borderLeftRadius={"lg"}
      borderRightWidth={0.5}
      flexDir={"column"}
    >
      <Center w={"100%"} h={"20%"} flexDir={"column"} px={3}>
        <Text textAlign={"center"}>Alfie Ranstead</Text>
        <Text fontSize={"xs"} textAlign={"center"}>
          A {calcDif(2005, 5, 6)} year old Software Enthusiast
        </Text>
      </Center>
      <Center w={"100%"} flexDir={"column"} h={"60%"}>
        {buttons.map((button) => (
          <Button
            key={button.title}
            bg={"rgba(0,0,0,0)"}
            _hover={{ bg: "rgba(255,255,255,0.1)", transform: "scale(1.03)" }}
            _active={{ bg: "rgba(255,255,255,0.05)", transform: "scale(0.97)" }}
            w={"90%"}
            borderWidth={1}
            mt={1}
            mb={button.BottomMargin ? "35px" : 1}
            onClick={() => {
              props.setState(button.component);
            }}
          >
            <Text>{button.title}</Text>
          </Button>
        ))}
      </Center>
      <Center w={"100%"} h={"20%"}>
        {Socials.map((social) => (
          <Flex key={social.alt} _hover={{ transform: "scale(1.15)" }}>
            <Link href={social.link} m={1} p={1}>
              <social.component size={"32"} />
            </Link>
          </Flex>
        ))}
      </Center>
    </Flex>
  );
};

export default Menu;
