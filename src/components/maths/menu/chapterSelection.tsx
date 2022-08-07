import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import PlainButton from "../extra/button";
import { StateManager } from "../../../utils/types/types";
import { showState } from "../../../utils/types/mathsTypes";
import useAWS from "../../../utils/hooks/mathTool/useAWS";

const ChapterSelection = (props: { setMode: StateManager<showState> }) => {
    const info = useAWS();
    return (
        <Flex flexDir={"column"}>
            <Text>Currently Supported Chapters are:</Text>
            <List flexDir={"column"} flexWrap={"wrap"} ml={"10px"}>
                {info?.chapters.map((chapter: any) => (
                    <ListItem key={chapter.name}>
                        <Text>- {chapter.name}</Text>
                    </ListItem>
                ))}
            </List>
            <PlainButton
                contents={"Confirm"}
                fn={() => {
                    // TODO save user settings somewhere, idk where yet
                    props.setMode({ scene: "starting", mode: "menu" });
                }}
            />
        </Flex>
    );
};

export default ChapterSelection;
