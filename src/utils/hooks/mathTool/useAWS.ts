import { useEffect, useState } from "react";
import { fetcher } from "../../fetcher";
import { dictType_Math } from "../../types/mathsTypes";

export default function useAWS() {
    const [curData, setCurData] = useState<dictType_Math | undefined>(
        undefined
    );

    useEffect(() => {
        fetcher<dictType_Math>("/api/aws/info").then((newData) => {
            if (newData !== undefined && newData !== curData) {
                setCurData(newData);
            }
        });
    }, []);

    return curData;
}
