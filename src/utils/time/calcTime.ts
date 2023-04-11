const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;
const SECONDS_PER_YEAR =
    365 * SECONDS_PER_DAY + 6 * SECONDS_PER_HOUR + 9 * SECONDS_PER_MINUTE + 9;

export default function calcDif(
    year: number,
    month: number,
    date: number
): string {
    const milliseconds =
        new Date().getTime() - new Date().setFullYear(year, month - 1, date);

    const years = milliseconds / (SECONDS_PER_YEAR * 1000);

    return threeDecimals(years);
}

function threeDecimals(inp: number): string {
    const splitInput = inp.toString().split(".");
    const integer = splitInput[0];
    const decimal = splitInput[1].slice(0, 3);
    return `${integer}.${decimal}`;
}
