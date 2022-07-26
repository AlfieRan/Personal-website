import { useEffect, useState } from "react";
import useWidth from "./useWidth";
import useHeight from "./useHeight";

export default function useAspect() {
  const width = useWidth();
  const height = useHeight();
  const [aspect, setAspect] = useState<number>(width / height);

  useEffect(() => {
    setAspect(width / height);
  }, [width, height]);

  return aspect;
}
