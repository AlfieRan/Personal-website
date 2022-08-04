import { githubInfoType } from "../types/types";
import { useEffect, useState } from "react";

export async function getGithubInfo(): Promise<githubInfoType> {
    const request = await fetch("/api/github").catch((err) => {
        if (err) {
            return undefined;
        }
    });
    if (request !== undefined) {
        return await request.json();
    } else {
        return null;
    }
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
