import useAspect from "./useAspect";
import useHeight from "./useHeight";
import { useEffect, useState } from "react";

export default function useMode() {
  const aspect = useAspect();
  const height = useHeight();
  const [mode, setMode] = useState<"mobile" | "desktop" | undefined>(undefined);

  useEffect(() => {
    if (aspect !== undefined && height !== undefined) {
      if (aspect < 1.1 || aspect > 2 || height < 800) {
        setMode("mobile");
      } else if (aspect > 1.1 && aspect < 2 && height > 800) {
        setMode("desktop");
      }
      console.log("Setting mode:", mode);
    }
  }, [aspect, height]);

  return mode;
}
