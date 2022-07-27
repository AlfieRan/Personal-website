import { githubInfoType } from "../types";
import { useEffect, useState } from "react";

export async function getGithubInfo(): Promise<githubInfoType> {
  const info = await (await fetch("/api/github")).json();
  if (info) {
    return info;
  }
  return null;
}

export default function useGithub() {
  const [githubInfo, setGithubInfo] = useState<githubInfoType>();
  useEffect(() => {
    getGithubInfo().then((info) => {
      setGithubInfo(info);
    });
  }, []);

  return githubInfo;
}
