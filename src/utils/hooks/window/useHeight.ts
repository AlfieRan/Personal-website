import { useEffect, useState } from "react";

export default function useHeight() {
  const [height, setHeight] = useState<number>(1080);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);

  return height;
}
