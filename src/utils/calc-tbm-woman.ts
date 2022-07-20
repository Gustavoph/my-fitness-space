interface CalcTmbWoman {
  fa: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

export function calcTmbWoman(data: CalcTmbWoman) {
  const calcAge = Number(data.age) * 4.676;
  const calcHeight = Number(data.height) * 1.85;
  const calcWeight = Number(data.weight) * 9.563;

  const tmb = Number(data.fa) * (655.09 + calcWeight + calcHeight - calcAge)
  return tmb.toFixed(0);
}