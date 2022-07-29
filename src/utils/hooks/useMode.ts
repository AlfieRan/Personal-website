import useAspect from "./useAspect";
import useHeight from "./useHeight";
import { useEffect, useState } from "react";
import useWidth from "./useWidth";

export default function useMode() {
  const aspect = useAspect();
  const height = useHeight();
  const width = useWidth();
  const [mode, setMode] = useState<"mobile" | "desktop" | undefined>(undefined);

  useEffect(() => {
    if (aspect !== undefined && height !== undefined && width !== undefined) {
      if (aspect < 1.1 || aspect > 2 || height < 750 || width < 920) {
        console.log("Mobile:", aspect, height);
        setMode("mobile");
      } else {
        setMode("desktop");
      }
      console.log("Setting mode:", mode);
    }
  }, [aspect, height]);

  return mode;
}
