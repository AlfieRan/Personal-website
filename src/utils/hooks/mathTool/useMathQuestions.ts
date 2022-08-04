import useAWS from "./useAWS";
import { useEffect, useState } from "react";
import { dictType_Math } from "../../types/mathsTypes";

export default function useMathQuestions() {
    const [cur, setCur] = useState<dictType_Math | undefined>(undefined);
    const aws = useAWS();

    useEffect(() => {
        if (cur === undefined && aws !== undefined) {
            const tmp = aws;
            tmp.chapters.forEach((item) => {
                item.enabled = true;
            });
            setCur(tmp);
        }
    }, [aws]);

    function enableChapter(name: string) {
        if (cur === undefined) {
            console.error(`Currently Chapters do not exist`);
            return;
        }

        const index =
            cur?.chapters.findIndex((item) => item.name === name) ?? -1;

        if (index < 0) {
            console.error(`Chapter ${name} doesn't exist`);
            return;
        }

        const tmp = cur;
        tmp.chapters[index].enabled = false;
        setCur(tmp);
    }
}
