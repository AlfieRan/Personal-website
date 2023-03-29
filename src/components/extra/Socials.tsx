import { Center, Flex, Link } from "@chakra-ui/react";
import GithubLogo from "./githubLogo";
import TwitterLogo from "./twitterLogo";
import YoutubeLogo from "./youtubeLogo";
import LinkedLogo from "./linkedINLogo";

export default function Socials() {
    const Socials: { component: any; alt: string; link: string }[] = [
        {
            alt: "Github",
            component: GithubLogo,
            link: "https://github.com/alfieran",
        },
        {
            alt: "LinkedIn",
            component: LinkedLogo,
            link: "https://www.linkedin.com/in/alfie-ranstead-661064225",
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

    const paddingInternal = "7px";

    return (
        <Center w={"100%"} h={"20%"} flexWrap={"wrap"}>
            {Socials.map((social, index) => (
                <Flex
                    key={social.alt}
                    _hover={{ transform: "scale(1.1)" }}
                    _active={{ transform: "scale(0.95)" }}
                >
                    <Link
                        href={social.link}
                        pl={index === 0 ? 0 : paddingInternal}
                        pr={index === Socials.length - 1 ? 0 : paddingInternal}
                        isExternal
                    >
                        <social.component size={"26"} />
                    </Link>
                </Flex>
            ))}
        </Center>
    );
}
