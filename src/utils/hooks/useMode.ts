import useAspect from "./useAspect";
import useHeight from "./useHeight";
import { useEffect, useState } from "react";

export default function useMode() {
  const aspect = useAspect();
  const height = useHeight();
  const [mode, setMode] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    if (aspect < 1.1 || aspect > 2 || height < 800) {
      setMode("mobile");
    }
  }, [aspect, height]);

  return mode;
}
