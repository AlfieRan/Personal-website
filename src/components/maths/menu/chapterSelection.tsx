import { Flex, Text } from "@chakra-ui/react";
import PlainButton from "../extra/button";
import { StateManager } from "../../../utils/types/types";
import { menuState } from "../../../utils/types/mathsTypes";
import useAWS from "../../../utils/hooks/mathTool/useAWS";

const ChapterSelection = (props: { setMode: StateManager<menuState> }) => {
    const info = useAWS();
    return (
        <Flex>
            <Text>Currently Supported Chapters are:</Text>
            <Flex flexDir={"column"} wrap={"wrap"} ml={"10px"}>
                {info?.chapters.map((chapter: any) => (
                    <Text key={chapter.name}>{chapter.name}</Text>
                ))}
            </Flex>
            <PlainButton
                contents={"Confirm"}
                fn={() => {
                    // TODO save user settings somewhere, idk where yet
                    props.setMode("starting");
                }}
            />
        </Flex>
    );
};

export default ChapterSelection;
