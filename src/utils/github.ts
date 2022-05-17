import { githubInfo } from "./types";

export default async function getGithubInfo(): Promise<githubInfo> {
  const info = await (await fetch("/api/github")).json();
  if (info) {
    return info;
  }
  return null;
}
