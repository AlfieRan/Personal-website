import { useEffect, useState } from "react";
import { Center, Link, Text } from "@chakra-ui/react";
import useAWS from "../utils/hooks/mathTool/useAWS";
import { showState } from "../utils/types/mathsTypes";
import Menu from "../components/maths/menu/menu";
import Main from "../components/maths/main/main";

const SummerMaths = () => {
    const info = useAWS();
    const [showState, setShowState] = useState<showState>({
        mode: "menu",
        scene: "loading",
    });

    useEffect(() => {
        if (info === undefined) {
            setShowState({ mode: "menu", scene: "loading" });
        } else {
            setShowState({ mode: "menu", scene: "starting" });
            console.log(info);
        }
    }, [info]);

    const ErrorScreen = (
        <Center w="100%" h={"100vh"}>
            <Text>An Error has Occurred :(</Text>
        </Center>
    );

    return (
        <Center w={"100%"} h={"95vh"} flexDir={"column"}>
            <Link href={"/"} mb={"10px"}>
                Alfie Ranstead
            </Link>
            {showState.mode === "menu" ? (
                <Menu stateManager={setShowState} state={showState} />
            ) : showState.mode === "main" ? (
                <Main state={showState} setState={setShowState} />
            ) : (
                ErrorScreen
            )}
        </Center>
    );
};
export default SummerMaths;
