export default function calcDif(year: number, month: number, date: number) {
  const dif = Date.now() - new Date().setFullYear(year, month, date);
  return Math.round(dif / (60 * 60 * 24 * 365.25)) / 1000;
}
