import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return width;
}
