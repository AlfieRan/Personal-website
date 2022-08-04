import { Flex, Link } from "@chakra-ui/react";

const Sponsor = () => (
    <Link
        href={"https://github.com/sponsors/AlfieRan"}
        transform={"scale(0.9)"}
        _hover={{ transform: "scale(0.95)" }}
        _active={{ transform: "scale(1.05)" }}
        border={0}
        mt={"10px"}
        isExternal
    >
        <Flex>
            <iframe
                src="https://github.com/sponsors/AlfieRan/button"
                title="Sponsor AlfieRan"
                height="32"
                width="113"
                style={{ borderWidth: "0" }}
            />
        </Flex>
    </Link>
);

export default Sponsor;
