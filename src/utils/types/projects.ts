export type projectType = {
    title: string;
    info: string;
    link: string;
    tags: string[];
};

export const tagColors: Record<string, string> = {
    published: "#006c5a",
    "in Progress": "#074c81",
    "on Hold": "#9d8134",
    paper: "#940b0c",
    react: "#00807f",
    fullstack: "#ab5570",
    frontend: "#8f7431",
    backend: "#05886f",
    standalone: "#0d5b9a",
    other: "#4e575b",
    typescript: "#0a4e85",
    python: "#370a85",
    vlang: "#006954",
    redis: "#8d772f",
    postgresql: "#947640",
    "open source": "#006b58",
    "reddit api": "#7a3b19",
    "twitter api": "#0e527c",
    "spotify api": "#006b58",
    microservices: "#006b58",
};

export const ProjectList: projectType[] = [
    {
        title: "MusicPebbles",
        info: "The Spotify Dashboard that's actually useful.",
        link: "https://musicpebbles.com",
        tags: [
            "published",
            "fullstack",
            "react",
            "typescript",
            "redis",
            "spotify api",
        ],
    },
    {
        title: "Computational Capacity",
        info: "The computational capacity of a theoretical spherical system.",
        link: "https://alfieranstead.com/papers/ComputationalCapacity.pdf",
        tags: ["published", "paper"],
    },
    {
        title: "Number Visualiser",
        info: "Visualise large numbers with emojis.",
        link: "https://alfieranstead.com/tools/visualiser/",
        tags: ["published", "frontend", "react", "typescript"],
    },
    {
        title: "Reddit Video Generator",
        info: "Generate standalone videos with voiceovers and captions using the reddit api.",
        link: "https://github.com/AlfieRan/reddit-video-generator",
        tags: [
            "published",
            "open source",
            "standalone",
            "python",
            "reddit api",
        ],
    },
    {
        title: "The Monochain",
        info: "A blockchain implementation based upon trust.",
        link: "https://monochain.network/",
        tags: [
            "in Progress",
            "open source",
            "frontend",
            "standalone",
            "react",
            "typescript",
            "vlang",
            "postgresql",
        ],
    },
    {
        title: "Mutuals.Chat",
        info: "A video chatting app to meet new friends.",
        link: "https://mutuals.chat/",
        tags: [
            "on Hold",
            "fullstack",
            "react",
            "typescript",
            "redis",
            "postgresql",
            "twitter api",
            "microservices",
        ],
    },
];
