export function getChartsData() {
  const randomNumber = Math.floor(Math.random() * 5000) + 1000;

  return Array.from({ length: 12 }, (_, i) => ({
    name: new Date(0, i).toLocaleString("en", { month: "short" }),
    total: randomNumber,
  }));
}
