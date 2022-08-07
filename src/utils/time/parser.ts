export function timeParser(seconds: number) {
    const secondsLeft = seconds % 60;
    return `${Math.floor(seconds / 60)}:${
        secondsLeft < 10 ? "0" : ""
    }${secondsLeft}`;
}
