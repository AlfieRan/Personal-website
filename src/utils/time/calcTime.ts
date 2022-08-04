export default function calcDif(
  year: number,
  month: number,
  date: number
): string {
  const dif = Date.now() - new Date().setFullYear(year, month, date);

  return make4Digit(
    (Math.round(dif / (60 * 60 * 24 * 365.25)) / 1000).toString()
  );
}

function make4Digit(num: string): string {
  const integers = num.split(".")[0];
  let decimals = num.split(".")[1] ?? "0";

  while (decimals.length < 3) {
    decimals += "0";
  }

  return integers + "." + decimals;
}
