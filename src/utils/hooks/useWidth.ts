import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState<number>(1920);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return width;
}
