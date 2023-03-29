export const ContentStats = {
    views: 1780672,
    subscribers: 6639,
    likes: 55520,
};

export function wrapData(inp: number) {
    if (inp > 1000000) {
        return roundData(inp / 1000000, 2) + "M";
    } else if (inp > 1000) {
        return roundData(inp / 1000, 2) + "K";
    } else {
        return inp;
    }
}

function roundData(num: number, decimals: number) {
    return Math.round(num * 10 ** decimals) / 10 ** decimals;
}
