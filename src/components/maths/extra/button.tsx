import { Button } from "@chakra-ui/react";

const PlainButton = (props: {
    contents: string;
    fn: () => void;
    rgb?: [string, string, string];
}) => {
    let colours = { normal: "", active: "", hover: "" };
    if (props.rgb !== undefined) {
        colours = {
            normal: `rgba(${props.rgb.toString()},255)`,
            hover: `rgba(${props.rgb.toString()},150)`,
            active: `rgba(${props.rgb.toString()},200)`,
        };
    }

    return (
        <Button
            bg={colours.normal}
            borderWidth={"1px"}
            p={"5px"}
            m={"10px"}
            fontSize={"xl"}
            _hover={{ bg: colours.hover, transform: "scale(1.05)" }}
            _active={{ bg: colours.active, transform: "scale(0.95)" }}
            w={"100%"}
            onClick={props.fn}
        >
            {props.contents}
        </Button>
    );
};

export default PlainButton;
