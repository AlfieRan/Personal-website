import { Octokit } from "octokit";
import { githubInfo } from "./types";

const API_Key = process.env.API_KEY;
const octokit = new Octokit({
  auth: API_Key,
});

export default async function getGithubInfo(): Promise<githubInfo> {
  try {
    const data = await octokit.request("GET /user");
    if (data.status === 200) {
      return {
        username: data.data.login,
        avatar_url: data.data.avatar_url,
        public_repos: data.data.public_repos,
        private_repos: data.data.total_private_repos ?? 0,
        followers: data.data.followers,
        following: data.data.following,
      };
    } else {
      console.log("Failed to get github info: ", data.status);
      return null;
    }
  } catch (error) {
    console.log("Failed to get github info: ", error);
    return null;
  }
}
