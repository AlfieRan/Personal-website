import { useEffect, useState } from "react";
import useWidth from "./useWidth";
import useHeight from "./useHeight";

export default function useAspect() {
  const width = useWidth();
  const height = useHeight();
  const [aspect, setAspect] = useState<number | undefined>(undefined);

  useEffect(() => {
    setAspect(
      width !== undefined && height !== undefined ? width / height : undefined
    );
  }, [width, height]);

  return aspect;
}
