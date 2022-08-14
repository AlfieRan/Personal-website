import useAspect from "./window/useAspect";
import useHeight from "./window/useHeight";
import { useEffect, useState } from "react";
import useWidth from "./window/useWidth";

const storageKey = "mode";

type modes = "mobile" | "desktop" | undefined;

export default function useMode() {
    let localStorage: modes = undefined;
    try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw == "mobile" || raw == "desktop") {
            localStorage = raw;
        }
    } catch (e) {
        console.log("Error: localStorage is not available.", e);
    }

    const aspect = useAspect();
    const height = useHeight();
    const width = useWidth();
    const [mode, setMode] = useState<modes>(localStorage);

    useEffect(() => {
        if (
            aspect !== undefined &&
            height !== undefined &&
            width !== undefined
        ) {
            if (aspect < 1.1 || height < 750 || width < 920) {
                console.log("Mobile:", aspect, height);
                setMode("mobile");
            } else {
                setMode("desktop");
            }
            console.log("Setting mode:", mode);
        }
    }, [aspect, height]);

    useEffect(() => {
        try {
            if (mode !== undefined) {
                window.localStorage.setItem(storageKey, mode);
            }
        } catch (e) {
            console.log("Error: localStorage is not available.", e);
        }
    }, [mode]);

    return mode;
}
