interface CalcTmbMan {
  fa: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

export function calcTmbMan(data: CalcTmbMan) {
  const calcAge = Number(data.age) * 6.8;
  const calcHeight = Number(data.height) * 5;
  const calcWeight = Number(data.weight) * 13.75;

  const tmb = Number(data.fa) * (66.47 + calcWeight + calcHeight - calcAge)
  return tmb.toFixed(0);
}