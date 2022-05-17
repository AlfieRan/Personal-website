import { Octokit } from "octokit";
const enabled: boolean = process.env.DEVELOPMENT === "true";

const API_Key = process.env.API_KEY;
const octokit = new Octokit({
  auth: API_Key,
});

export default async function githubServerSideCall(req: any, res: any) {
  if (enabled) {
    const data = await octokit.request("GET /user", {
      Authorization: `token ${API_Key}`,
    });

    if (data.status === 200) {
      const info = {
        username: data.data.login,
        avatar_url: data.data.avatar_url,
        public_repos: data.data.public_repos,
        private_repos: data.data.total_private_repos ?? 0,
        followers: data.data.followers,
        following: data.data.following,
      };
      console.log(info);
      res.setHeader("Cache-Control", `s-maxage=${60 * 60 * 24}`);
      res.status(200).json(info);
    } else {
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  } else {
    const info = {
      username: "AlfieRan",
      avatar_url: "https://avatars.githubusercontent.com/u/89932058?v=4",
      public_repos: 17,
      private_repos: 11,
      followers: 6,
      following: 6,
    };
    res.status(200).json(info);
  }
}
